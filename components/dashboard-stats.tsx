"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts"

type CourseStats = {
  id: number
  name: string
  primaryCount: number
  secondaryCount: number
  totalCount: number
}

type DashboardStatsProps = {
  totalLeads: number
  courseStats: CourseStats[]
}

export default function DashboardStats({ totalLeads, courseStats }: DashboardStatsProps) {
  // Prepare data for charts
  const chartData = courseStats.map((course) => ({
    name: course.name,
    primary: course.primaryCount,
    secondary: course.secondaryCount,
    total: course.totalCount,
  }))

  return (
    <div className="space-y-6">
      <div className="grid gap-4 md:grid-cols-3">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total de Leads</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{totalLeads}</div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Curso Mais Popular</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              {courseStats.length > 0
                ? courseStats.sort((a, b) => b.totalCount - a.totalCount)[0].name
                : "Nenhum curso"}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Média por Curso</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              {courseStats.length > 0 ? (totalLeads / courseStats.length).toFixed(1) : "0"}
            </div>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Relatório por Curso</CardTitle>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="chart">
            <TabsList className="mb-4">
              <TabsTrigger value="chart">Gráfico</TabsTrigger>
              <TabsTrigger value="table">Tabela</TabsTrigger>
            </TabsList>

            <TabsContent value="chart">
              <div className="h-[300px]">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={chartData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Bar dataKey="primary" name="Curso Principal" fill="#4f46e5" />
                    <Bar dataKey="secondary" name="Curso Secundário" fill="#8884d8" />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </TabsContent>

            <TabsContent value="table">
              <div className="rounded-md border">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Curso
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Principal
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Secundário
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Total
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {courseStats.map((course) => (
                      <tr key={course.id}>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{course.name}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{course.primaryCount}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{course.secondaryCount}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{course.totalCount}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
    </div>
  )
}

