import { getServerSession } from "next-auth/next"
import { redirect } from "next/navigation"
import { authOptions } from "@/lib/auth"
import prisma from "@/lib/prisma"
import DashboardLayout from "@/components/dashboard-layout"
import CertificateForm from "@/components/certificate-form"

export default async function CertificatesPage() {
  // const session = await getServerSession(authOptions)

  // if (!session) {
  //   redirect("/login")
  // }

  const courses = await prisma.course.findMany({
    orderBy: {
      name: "asc",
    },
  })

  return (
    <DashboardLayout>
      <div className="p-6">
        <h1 className="text-3xl font-bold mb-6">Envio de Certificados</h1>

        <CertificateForm courses={courses} />
      </div>
    </DashboardLayout>
  )
}

