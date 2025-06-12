"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"
import { Dashboard } from "@/types/dashboard/model"
import { Line, LineChart, ResponsiveContainer, XAxis, YAxis } from "recharts"

type AccessAnalyticsProps = {
  data: Dashboard[]
}

export function AccessAnalytics({ data }: AccessAnalyticsProps) {
   // Group students by last access date
  const now = Math.floor(Date.now() / 1000)
  const accessData = data.reduce((acc: Record<string, number>, student) => {
    if (!student.lastaccess) return acc

    const daysAgo = Math.floor((now - student.lastaccess) / (24 * 60 * 60))
    let category = ""

    if (daysAgo <= 1) category = "Hoje/Ontem"
    else if (daysAgo <= 7) category = "Esta semana"
    else if (daysAgo <= 30) category = "Este mês"
    else if (daysAgo <= 90) category = "Últimos 3 meses"
    else category = "Mais de 3 meses"

    acc[category] = (acc[category] || 0) + 1
    return acc
  }, {})
console.log("Access Data:", accessData)
  const chartData = [
    { period: "Hoje/Ontem", students: accessData["Hoje/Ontem"] || 0 },
    { period: "Esta semana", students: accessData["Esta semana"] || 0 },
    { period: "Este mês", students: accessData["Este mês"] || 0 },
    { period: "Últimos 3 meses", students: accessData["Últimos 3 meses"] || 0 },
    { period: "Mais de 3 meses", students: accessData["Mais de 3 meses"] || 0 },
  ]
  return (
    <Card>
      <CardHeader>
        <CardTitle>Análise de Último Acesso</CardTitle>
        <CardDescription>Distribuição de estudantes por período de último acesso</CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer
          config={{
            students: {
              label: "Estudantes",
              color: "#3b82f6",
            },
          }}
          className="h-[300px]"
        >
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={chartData}>
              <XAxis dataKey="period" />
              <YAxis />
              <ChartTooltip content={<ChartTooltipContent />} />
              <Line type="monotone" dataKey="students" stroke="#3b82f6" />
            </LineChart>
          </ResponsiveContainer>
        </ChartContainer>
      </CardContent>
    </Card>
  )
}
