import { Skeleton } from "@/components/ui/skeleton"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Tabs, TabsList, TabsTrigger } from "../ui/tabs"
import { Button } from "../ui/button"
import { RefreshCw } from "lucide-react"

export function DashboardLoading() {
  return (
    <div className="p-6">
      <div className="min-h-screen bg-gray-50 p-6">
        <div className="w-full mx-auto space-y-6">
          {/* Header Loading */}
          {/* Header */}
          <div className="mb-8">
            <div className="flex items-center justify-between">
              <div>
                <h1 className="text-2xl font-bold text-gray-900">
                  Dashboard Comercial
                </h1>
                <p className="text-gray-600">
                  Insights para estratégias de marketing e vendas
                </p>
              </div>
              <Button
               
                variant="outline"
                className="gap-2"
              >
                <RefreshCw
                  className={`h-4 w-4 animate-spin`}
                />
                {"Atualizando..."}
              </Button>
            </div>
          </div>
          {/* Filtros */}
          <div className="flex">
            <Skeleton className="h-4 w-96 mx-auto" />
            <Skeleton className="h-4 w-96 mx-auto" />
            
          </div>
          <Tabs defaultValue="overview" className="space-y-6">
            <TabsList className="grid w-full grid-cols-5">
              <TabsTrigger value="overview"><Skeleton className="h-4 w-96 mx-auto" /></TabsTrigger>
              <TabsTrigger value="geographic"><Skeleton className="h-4 w-96 mx-auto" /></TabsTrigger>
              <TabsTrigger value="courses"><Skeleton className="h-4 w-96 mx-auto" /></TabsTrigger>
              <TabsTrigger value="engagement"><Skeleton className="h-4 w-96 mx-auto" /></TabsTrigger>
              <TabsTrigger value="opportunities"><Skeleton className="h-4 w-96 mx-auto" /></TabsTrigger>
            </TabsList>
          </Tabs>


          {/* Overview Cards Loading */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {Array.from({ length: 4 }).map((_, i) => (
              <Card key={i}>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <Skeleton className="h-4 w-32" />
                  <Skeleton className="h-4 w-4" />
                </CardHeader>
                <CardContent>
                  <Skeleton className="h-8 w-16" />
                  <Skeleton className="h-3 w-20 mt-1" />
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Charts Loading */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {Array.from({ length: 2 }).map((_, i) => (
              <Card key={i}>
                <CardHeader>
                  <Skeleton className="h-6 w-40" />
                </CardHeader>
                <CardContent>
                  <Skeleton className="h-64 w-full" />
                </CardContent>
              </Card>
            ))}
          </div>

          
        </div>
      </div>
    </div>
  )
}
