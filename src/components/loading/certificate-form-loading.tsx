
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Skeleton } from "@/components/ui/skeleton"
import { StatsLoading } from "./stats-loading"
import { TableLoading } from "./table-loading"

export function CertificateFormLoading() {
  return (
    <div className="space-y-6">
      {/* Stats Loading */}
      <StatsLoading />

      {/* Filters Loading */}
      <Card>
        <CardHeader>
          <Skeleton className="h-6 w-32" />
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {Array.from({ length: 3 }).map((_, i) => (
              <div key={i} className="space-y-2">
                <Skeleton className="h-4 w-20" />
                <Skeleton className="h-10 w-full" />
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Table Loading */}
      <TableLoading rows={8} columns={5} />
    </div>
  )
}
