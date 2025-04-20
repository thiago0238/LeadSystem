import { getServerSession } from "next-auth/next";
import { redirect } from "next/navigation";
import { authOptions } from "@/lib/auth";
import prisma from "@/lib/prisma";
import DashboardLayout from "@/components/dashboard-layout";
import CertificateForm from "@/components/certificate-form";
import { getLeadStats } from "@/app/actions/lead-actions";

export default async function CertificatesPage() {
  // const session = await getServerSession(authOptions)

  // if (!session) {
  //   redirect("/login")
  // }

  const stats = await getLeadStats();
  const certificate1 = await prisma.certificate.findMany({
    select: {
      courseId: true,
      leadId: true,
    },
  });

  return (
    <DashboardLayout>
      <div className="p-6">
        <h1 className="text-3xl font-bold mb-6">Envio de Certificados</h1>

        <CertificateForm
          totalLeads={stats.totalStudents ?? 0}
          course={stats.course ?? []}
          students={stats.students ?? []}
          notasCursos={stats.notasCursos ?? []}
          cetificate={certificate1 || { courseId: 0, leadId: 0 }}
        />
      </div>
    </DashboardLayout>
  );
}
