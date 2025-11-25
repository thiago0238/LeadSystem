"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Users, FileQuestion, XCircle, CheckCircle } from "lucide-react"

interface MetricsCardsProps {
  totalAlunos: number
  questoesUnicas: number
  errosTotais: number
  acertosTotais: number
}

export function MetricsCards({ totalAlunos, questoesUnicas, errosTotais, acertosTotais }: MetricsCardsProps) {
  const taxaAcerto = totalAlunos > 0 ? ((acertosTotais / (acertosTotais + errosTotais)) * 100).toFixed(1) : 0

  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
      <Card className="bg-card border-border">
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium text-muted-foreground">Total de Respostas</CardTitle>
          <Users className="h-4 w-4 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold text-foreground">{totalAlunos.toLocaleString("pt-BR")}</div>
          <p className="text-xs text-muted-foreground mt-1">respostas registradas</p>
        </CardContent>
      </Card>

      <Card className="bg-card border-border">
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium text-muted-foreground">Questões Únicas</CardTitle>
          <FileQuestion className="h-4 w-4 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold text-foreground">{questoesUnicas}</div>
          <p className="text-xs text-muted-foreground mt-1">em todos os quizzes</p>
        </CardContent>
      </Card>

      <Card className="bg-card border-border">
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium text-muted-foreground">Erros Totais</CardTitle>
          <XCircle className="h-4 w-4 text-red-500" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold text-red-500">{errosTotais.toLocaleString("pt-BR")}</div>
          <p className="text-xs text-muted-foreground mt-1">
            {((errosTotais / (acertosTotais + errosTotais)) * 100).toFixed(1)}% do total
          </p>
        </CardContent>
      </Card>

      <Card className="bg-card border-border">
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium text-muted-foreground">Acertos Totais</CardTitle>
          <CheckCircle className="h-4 w-4 text-emerald-500" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold text-emerald-500">{acertosTotais.toLocaleString("pt-BR")}</div>
          <p className="text-xs text-muted-foreground mt-1">{taxaAcerto}% taxa de acerto</p>
        </CardContent>
      </Card>
    </div>
  )
}
