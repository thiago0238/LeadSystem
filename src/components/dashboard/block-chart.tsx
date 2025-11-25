"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts"

interface BlockChartProps {
  data: { bloco: string; acertos: number; erros: number }[]
}

export function BlockChart({ data }: BlockChartProps) {
  return (
    <Card className="bg-card border-border">
      <CardHeader>
        <CardTitle className="text-foreground">Desempenho por Blocos de Questões</CardTitle>
        <CardDescription>Comparativo entre questões iniciais (1-10) e avançadas (11+)</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="h-[350px]">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={data} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="#374151" opacity={0.3} />
              <XAxis dataKey="bloco" tick={{ fill: "#9CA3AF" }} axisLine={{ stroke: "#374151" }} />
              <YAxis tick={{ fill: "#9CA3AF" }} axisLine={{ stroke: "#374151" }} />
              <Tooltip
                contentStyle={{
                  backgroundColor: "#1F2937",
                  border: "1px solid #374151",
                  borderRadius: "8px",
                  color: "#F9FAFB",
                }}
                labelStyle={{ color: "#F9FAFB" }}
              />
              <Legend />
              <Bar dataKey="acertos" name="Acertos" fill="#10B981" radius={[4, 4, 0, 0]} />
              <Bar dataKey="erros" name="Erros" fill="#EF4444" radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  )
}
