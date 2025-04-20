import { getServerSession } from "next-auth/next";
import { redirect } from "next/navigation";
import { authOptions } from "@/lib/auth";
import DashboardStats from "@/components/dashboard-stats";
import DashboardLayout from "@/components/dashboard-layout";
import { getLeadStats } from "@/app/actions/lead-actions";

export default async function DashboardPage() {
  // const session = await getServerSession(authOptions)

  // if (!session) {
  //   redirect("/login")
  // }

  const stats = await getLeadStats();

  return (
    <DashboardLayout>
      <div className="p-6">
        <h1 className="text-3xl font-bold mb-6">Dashboard</h1>

        {stats.success ? (
          <DashboardStats
            totalLeads={stats.totalStudents ?? 0}
            course={stats.course ?? []}
            students={stats.students ?? []}
            notasCursos={stats.notasCursos ?? []}
            
          />
        ) : (
          <div className="bg-red-50 p-4 rounded-md text-red-600">
            Erro ao carregar estatísticas: {stats.error}
          </div>
        )}
      </div>
    </DashboardLayout>
  );
}
