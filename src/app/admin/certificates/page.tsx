// import prisma from "@/lib/prisma";
import { getLeadStats } from "@/app/actions/lead-actions";
import { CertificateForm } from "@/components/certificate-form";

export default async function CertificatesPage() {
 
  const stats = await getLeadStats();
  // const certificate1 = await prisma.certificate.findMany({
  //   select: {
  //     courseId: true,
  //     leadId: true,
  //   },
  // });
  //  const handleSendCertificate = async (studentIds: number[]) => {
  //   // Simular envio de certificados
  //   await new Promise((resolve) => setTimeout(resolve, 2000))

  //   // Atualizar status dos alunos
  //   stats.students = stats.students.map((student: { id: number; }) =>
  //     studentIds.includes(student.id) ? { ...student, certificadoEnviado: true } : student
  //   );

  //   toast({
  //     title: "Certificados enviados com sucesso!",
  //     description: `${studentIds.length} certificado(s) enviado(s).`,
  //   })
  // }

  return (
      <div className="p-6">
        <h1 className="text-3xl font-bold mb-6">Envio de Certificados</h1>

        <CertificateForm students={stats.students} courses={stats.course}  />
      </div>
  );
}
