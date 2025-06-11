import { Skeleton } from "@/components/ui/skeleton"
import { Card, CardContent } from "@/components/ui/card"

export function StatsLoading() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
      {Array.from({ length: 5 }).map((_, i) => (
        <Card key={i}>
          <CardContent className="p-4">
            <div className="flex items-center gap-2">
              <Skeleton className="h-4 w-4" />
              <div className="space-y-2">
                <Skeleton className="h-8 w-12" />
                <Skeleton className="h-3 w-20" />
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
