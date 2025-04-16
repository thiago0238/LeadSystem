"use server"

import prisma from "@/lib/prisma"
import { revalidatePath } from "next/cache"
import { generateCertificatePdf } from "@/lib/certificate-generator"
import { sendEmail } from "@/lib/email"

type SendCertificatesInput = { type: "course"; courseId: number } | { type: "leads"; leadIds: number[] }

export async function sendCertificates(data: SendCertificatesInput) {
  try {
    let leads = []

    if (data.type === "course") {
      // Get all leads for the course (either primary or secondary)
      leads = await prisma.lead.findMany({
        where: {
          OR: [{ primaryCourseId: data.courseId }, { secondaryCourseId: data.courseId }],
        },
        include: {
          primaryCourse: true,
          secondaryCourse: true,
        },
      })
    } else {
      // Get specific leads by IDs
      leads = await prisma.lead.findMany({
        where: {
          id: {
            in: data.leadIds,
          },
        },
        include: {
          primaryCourse: true,
          secondaryCourse: true,
        },
      })
    }

    if (leads.length === 0) {
      return { success: false, error: "Nenhum lead encontrado para envio de certificados" }
    }

    // Process each lead
    const results = await Promise.all(
      leads.map(async (lead) => {
        try {
          // Determine which course to use for the certificate
          const courseForCertificate =
            data.type === "course"
              ? lead.primaryCourseId === data.courseId
                ? lead.primaryCourse
                : lead.secondaryCourse
              : lead.primaryCourse

          if (!courseForCertificate) {
            return { success: false, leadId: lead.id, error: "Curso não encontrado" }
          }

          // Generate PDF certificate
          const pdfBuffer = await generateCertificatePdf({
            studentName: lead.name,
            courseName: courseForCertificate.name,
            date: new Date().toLocaleDateString("pt-BR"),
          })

          // Save certificate record
          const certificate = await prisma.certificate.create({
            data: {
              leadId: lead.id,
              courseId: courseForCertificate.id,
              // In a real app, you would upload the PDF to a storage service and save the URL
              pdfUrl: `certificate_${lead.id}_${courseForCertificate.id}.pdf`,
            },
          })

          // Send email with certificate
          await sendEmail({
            to: lead.email,
            subject: `Seu certificado do curso ${courseForCertificate.name}`,
            text: `Olá ${lead.name},\n\nParabéns por concluir o curso ${courseForCertificate.name}! Seu certificado está anexado a este email.\n\nAtenciosamente,\nEquipe de Cursos`,
            attachments: [
              {
                filename: `certificado_${courseForCertificate.name.replace(/\s+/g, "_")}.pdf`,
                content: pdfBuffer,
              },
            ],
          })

          return { success: true, leadId: lead.id, certificateId: certificate.id }
        } catch (error) {
          console.error(`Error processing lead ${lead.id}:`, error)
          return { success: false, leadId: lead.id, error: "Erro ao processar certificado" }
        }
      }),
    )

    const successCount = results.filter((r) => r.success).length

    revalidatePath("/admin/certificates")
    return {
      success: true,
      count: successCount,
      total: leads.length,
      failed: leads.length - successCount,
    }
  } catch (error) {
    console.error("Error sending certificates:", error)
    return { success: false, error: "Failed to send certificates" }
  }
}

