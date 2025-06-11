
import { Card, CardContent } from "@/components/ui/card"
import { LoadingSpinner } from "../ui/loading-spinner"

interface PageLoadingProps {
  title?: string
  description?: string
}

export function PageLoading({
  title = "Carregando",
  description = "Aguarde enquanto carregamos os dados...",
}: PageLoadingProps) {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <Card className="w-full max-w-md">
        <CardContent className="p-8 text-center">
          <div className="flex justify-center mb-4">
            <LoadingSpinner size="xl" />
          </div>
          <h2 className="text-xl font-semibold mb-2">{title}</h2>
          <p className="text-muted-foreground">{description}</p>
        </CardContent>
      </Card>
    </div>
  )
}
