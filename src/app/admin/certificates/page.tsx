// import prisma from "@/lib/prisma";
import { getLeadStats } from "@/app/actions/lead-actions";
import { CertificateForm } from "@/components/certificate-form";
import prisma from "@/lib/prisma";

interface Certificate {
  courseId: number;
  leadId: number;
}

export default async function CertificatesPage() {
  const stats = await getLeadStats();
  const certificate1 = await prisma.certificate.findMany({
    select: {
      courseId: true,
      leadId: true,
    },
  });
  const handleSendCertificate = async (certificates: Certificate[]) => {
    const updatedStudents = stats.students.map(
      (student: { id: number; courseId: number }) => {
        const certificadoEnviado = certificates.some(
          (cert) =>
            cert.leadId === student.id && cert.courseId === student.courseId
        );

        return certificadoEnviado
          ? { ...student, certificadoEnviado: true }
          : student;
      }
    );

    stats.students = updatedStudents;
  };
  handleSendCertificate(certificate1);

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6">Envio de Certificados</h1>

      <CertificateForm students={stats.students} courses={stats.course} />
    </div>
  );
}
