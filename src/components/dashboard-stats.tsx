"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { DashboardStatsProps } from "@/types";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";



export default function DashboardStats({
  totalLeads,
  course,
  students,
  notasCursos,
}: DashboardStatsProps) {
  const chartData = course.map((cours) => {
    const notas = notasCursos.find((n) => n.id === cours.id);
    return {
      name: cours.name,
      aptos: notas?.aptos ?? 0,
      reprovados: notas?.reprovados ?? 0,
    };
  });
  

  return (
    <div className="space-y-6">
      <div className="grid gap-4 md:grid-cols-3">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total de Alunos</CardTitle>
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
              {course.length > 0
                ? course.sort((a, b) => a.name.localeCompare(b.name))[0].name
                : "Nenhum curso"}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Média de alunos por Curso</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              {course.length > 0
                ? (totalLeads / course.length).toFixed(1)
                : "0"}
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
                    <Bar dataKey="aptos" name="Aptos" fill="#4f46e5" />
                    <Bar dataKey="reprovados" name="Reprovados" fill="#8884d8" />
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
                        Aptos
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Reprovados
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Total
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {course.map((course) => (
                      <tr key={course.id}>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                          {course.name}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          {notasCursos.find((c) => c.id === course.id)?.aptos ?? 0}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          {notasCursos.find((c) => c.id === course.id)?.reprovados ?? 0}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {(notasCursos.find((c) => c.id === course.id)?.aptos ?? 0) + (notasCursos.find((c) => c.id === course.id)?.reprovados ?? 0)}
                        </td>
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
  );
}
