"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"
import { Dashboard, EnrolledCourse } from "@/types/dashboard/model"
import { ContextMenuSeparator } from "@radix-ui/react-context-menu"
import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis } from "recharts"

type CourseAnalyticsProps = {
  totalStudents: number;
  courses: EnrolledCourse[];
};

export function CourseAnalytics({ totalStudents, courses }: CourseAnalyticsProps) {

   // Course frequency analysis
  const courseFrequency = courses.reduce((acc: Record<string, number>, course: EnrolledCourse) => {
    if (course && course.shortname) {
      acc[course.shortname] = (acc[course.shortname] || 0) + 1
    }
    return acc
  }, {})

  type ChartData = { course: string; students: number }

  const chartData: ChartData[] = Object.entries(courseFrequency)
    .map(([shortname, count]) => ({
      course: shortname,
      students: count as number,
    }))
    .sort((a, b) => b.students - a.students)
    .slice(0, 10) // Top 10 courses

  return (
    <Card>
      <CardHeader>
        <CardTitle>Distribuição de Estudantes por Curso</CardTitle>
        <CardDescription>Top 10 cursos com mais estudantes matriculados</CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer
          config={{
            students: {
              label: "Estudantes",
              color: "hsl(var(--chart-1))",
            },
          }}
          className="h-[300px]"
        >
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={chartData}>
              <XAxis dataKey="course" />
              <YAxis />
              <ChartTooltip content={<ChartTooltipContent />} />
              <Bar dataKey="students" fill="var(--color-students)" />
            </BarChart>
          </ResponsiveContainer>
        </ChartContainer>
      </CardContent>
    </Card>
  )
}
