import DashboardLayout from "@/components/dashboard-layout";
import { LoadingIndicator } from "@/components/loading/loading-indicator";

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      <div>
        <main>
          <DashboardLayout>
            <LoadingIndicator />
            {children}
            </DashboardLayout>
        </main>
      </div>
    </div>
  );
}
