"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell } from "recharts"

interface TopQuestionsProps {
  topErradas: { questionId: string; taxaErro: number; totalRespostas: number }[]
  topAcertadas: { questionId: string; taxaAcerto: number; totalRespostas: number }[]
}

export function TopQuestions({ topErradas, topAcertadas }: TopQuestionsProps) {
  return (
    <div className="grid gap-6 lg:grid-cols-2">
      <Card className="bg-card border-border">
        <CardHeader>
          <CardTitle className="text-foreground flex items-center gap-2">
            <span className="h-3 w-3 rounded-full bg-red-500" />
            Top 10 Questões Mais Erradas
          </CardTitle>
          <CardDescription>Questões que precisam de maior atenção</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="h-[400px]">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={topErradas} layout="vertical" margin={{ top: 5, right: 30, left: 80, bottom: 5 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="#374151" opacity={0.3} horizontal={false} />
                <XAxis
                  type="number"
                  domain={[0, 100]}
                  tick={{ fill: "#9CA3AF" }}
                  axisLine={{ stroke: "#374151" }}
                  tickFormatter={(value) => `${value}%`}
                />
                <YAxis
                  type="category"
                  dataKey="questionId"
                  tick={{ fill: "#9CA3AF", fontSize: 11 }}
                  axisLine={{ stroke: "#374151" }}
                  width={75}
                />
                <Tooltip
                  contentStyle={{
                    backgroundColor: "#FFFFFF",
                    border: "1px solid #374151",
                    borderRadius: "8px",
                    color: "#1F2937",
                  }}
                  formatter={(value: number) => [`${value.toFixed(1)}%`, "Taxa de Erro"]}
                />
                <Bar dataKey="taxaErro" radius={[0, 4, 4, 0]}>
                  {topErradas.map((_, index) => (
                    <Cell key={`cell-${index}`} fill={`rgba(239, 68, 68, ${1 - index * 0.08})`} />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>
        </CardContent>
      </Card>

      <Card className="bg-card border-border">
        <CardHeader>
          <CardTitle className="text-foreground flex items-center gap-2">
            <span className="h-3 w-3 rounded-full bg-emerald-500" />
            Top 10 Questões Mais Acertadas
          </CardTitle>
          <CardDescription>Questões com melhor desempenho dos alunos</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="h-[400px]">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={topAcertadas} layout="vertical" margin={{ top: 5, right: 30, left: 80, bottom: 5 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="#374151" opacity={0.3} horizontal={false} />
                <XAxis
                  type="number"
                  domain={[0, 100]}
                  tick={{ fill: "#9CA3AF" }}
                  axisLine={{ stroke: "#374151" }}
                  tickFormatter={(value) => `${value}%`}
                />
                <YAxis
                  type="category"
                  dataKey="questionId"
                  tick={{ fill: "#9CA3AF", fontSize: 11 }}
                  axisLine={{ stroke: "#374151" }}
                  width={75}
                />
                <Tooltip
                  contentStyle={{
                    backgroundColor: "#FFFFFF",
                    border: "1px solid #374151",
                    borderRadius: "8px",
                    color: "#1F2937",
                  }}
                  formatter={(value: number) => [`${value.toFixed(1)}%`, "Taxa de Acerto"]}
                />
                <Bar dataKey="taxaAcerto" radius={[0, 4, 4, 0]}>
                  {topAcertadas.map((_, index) => (
                    <Cell key={`cell-${index}`} fill={`rgba(16, 185, 129, ${1 - index * 0.08})`} />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
