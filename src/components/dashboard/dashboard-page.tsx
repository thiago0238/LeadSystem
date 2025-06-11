"use client"

import { useDashboardData } from "@/hooks/use-dashboard-data"
import type { EnrolledCourse } from "@/types/dashboard/model"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { BookOpen, Clock, TrendingDown, TrendingUp, Users, AlertCircle, RefreshCw } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { CourseAnalytics } from "@/components/dashboard/course-analytics"
import { AccessAnalytics } from "@/components/dashboard/access-analytics"
import { StudentList } from "@/components/dashboard/student-list"
import { DashboardLoading } from "@/components/loading/dashboard-loading"
import { DashboardStatsLoading } from "@/components/loading/dashboard-stats-loading"
import { LoadingSpinner } from "@/components/ui/loading-spinner"
import { CourseAnalyticsLoading } from "../loading/course-analytics-loading"

export default function DashboardPage() {
  const { data, loading, error, refetch } = useDashboardData()

  // Se está carregando pela primeira vez, mostra o loading completo
  if (loading && data.length === 0) {
    return <DashboardLoading />
  }

  // Se há erro, mostra tela de erro
  if (error && data.length === 0) {
    return (
      <div className="p-6">
        <div className="min-h-screen bg-gray-50 flex items-center justify-center">
          <Card className="w-full max-w-md">
            <CardContent className="p-8 text-center">
              <AlertCircle className="h-12 w-12 text-red-500 mx-auto mb-4" />
              <h2 className="text-xl font-semibold mb-2">Erro ao carregar dados</h2>
              <p className="text-muted-foreground mb-4">{error}</p>
              <Button onClick={refetch} className="gap-2">
                <RefreshCw className="h-4 w-4" />
                Tentar novamente
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    )
  }

  // Safe data processing with null checks
  const safeData = Array.isArray(data) ? data : []
  const totalStudents = safeData.length

  // Get all courses safely
  const allCourses = safeData.reduce((acc: EnrolledCourse[], student) => {
    const courses = student.enrolledcourses || []
    return [...acc, ...courses]
  }, [])

  // Course frequency analysis
  const courseFrequency = allCourses.reduce((acc: Record<string, number>, course) => {
    if (course && course.fullname) {
      acc[course.fullname] = (acc[course.fullname] || 0) + 1
    }
    return acc
  }, {})

  const sortedCourses = Object.entries(courseFrequency)
    .sort(([, a], [, b]) => b - a)
    .map(([name, count]) => ({ name, count }))

  const mostPopularCourses = sortedCourses.slice(0, 5)
  const leastPopularCourses = sortedCourses.slice(-5).reverse()

  // Access analysis
  const now = Math.floor(Date.now() / 1000)
  const recentlyActive = safeData.filter(
    (student) => student.lastaccess && now - student.lastaccess < 7 * 24 * 60 * 60, // Last 7 days
  ).length

  return (
    <div className="p-6">
      <div className="min-h-screen bg-gray-50 p-6">
        <div className="w-full mx-auto space-y-6">
          {/* Header */}
          <div className="text-center space-y-2">
            <div className="flex items-center justify-center gap-2">
              <h1 className="text-3xl font-bold text-gray-900">Dashboard Educacional</h1>
              {loading && <LoadingSpinner size="sm" />}
            </div>
            <p className="text-gray-600">Análise completa de estudantes e cursos</p>
            {error && (
              <div className="flex items-center justify-center gap-2 text-amber-600">
                <AlertCircle className="h-4 w-4" />
                <span className="text-sm">Alguns dados podem estar desatualizados</span>
              </div>
            )}
          </div>

          {/* Overview Cards */}
          {loading && data.length === 0 ? (
            <DashboardStatsLoading />
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Card className={loading ? "opacity-75" : ""}>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Total de Estudantes</CardTitle>
                  <Users className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">{totalStudents}</div>
                </CardContent>
              </Card>

              <Card className={loading ? "opacity-75" : ""}>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Total de Cursos</CardTitle>
                  <BookOpen className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">{Object.keys(courseFrequency).length}</div>
                </CardContent>
              </Card>

              <Card className={loading ? "opacity-75" : ""}>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Ativos Recentemente</CardTitle>
                  <Clock className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">{recentlyActive}</div>
                  <p className="text-xs text-muted-foreground">Últimos 7 dias</p>
                </CardContent>
              </Card>

              <Card className={loading ? "opacity-75" : ""}>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Taxa de Atividade</CardTitle>
                  <TrendingUp className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">
                    {totalStudents > 0 ? Math.round((recentlyActive / totalStudents) * 100) : 0}%
                  </div>
                </CardContent>
              </Card>
            </div>
          )}

          {/* Course Analytics */}
          {loading && data.length === 0 ? (
            <CourseAnalyticsLoading />
          ) : (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card className={loading ? "opacity-75" : ""}>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <TrendingUp className="h-5 w-5" />
                    Cursos Mais Frequentados
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {mostPopularCourses.map((course, index) => (
                      <div key={course.name} className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <Badge variant="secondary">{index + 1}</Badge>
                          <span className="font-medium">{course.name}</span>
                        </div>
                        <Badge>{course.count} estudantes</Badge>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card className={loading ? "opacity-75" : ""}>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <TrendingDown className="h-5 w-5" />
                    Cursos Menos Frequentados
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {leastPopularCourses.map((course, index) => (
                      <div key={course.name} className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <Badge variant="outline">{index + 1}</Badge>
                          <span className="font-medium">{course.name}</span>
                        </div>
                        <Badge variant="secondary">{course.count} estudantes</Badge>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          )}

          {/* Charts */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className={loading ? "opacity-75" : ""}>
              <CourseAnalytics totalStudents={totalStudents} courses={allCourses} />
            </div>
            <div className={loading ? "opacity-75" : ""}>
              <AccessAnalytics data={data} />
            </div>
          </div>

          {/* Student List */}
          <div className={loading ? "opacity-75" : ""}>
            <StudentList data={safeData} />
          </div>

          {/* Refresh Button */}
          <div className="flex justify-center">
            <Button onClick={refetch} disabled={loading} variant="outline" className="gap-2">
              <RefreshCw className={`h-4 w-4 ${loading ? "animate-spin" : ""}`} />
              {loading ? "Atualizando..." : "Atualizar dados"}
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
