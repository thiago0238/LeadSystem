"use client";

import { useState, useMemo } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useDashboardData } from "@/hooks/use-dashboard-data";
import {
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  AreaChart,
  Area,
} from "recharts";
import {
  Users,
  TrendingUp,
  MapPin,
  Target,
  UserPlus,
  Activity,
  Clock,
  Download,
  Mail,
  AlertTriangle,
  BookOpen,
  GraduationCap,
  RefreshCw,
} from "lucide-react";
import { EnrolledCourse } from "@/types/dashboard/model";
import { DashboardLoading } from "../loading/dashboard-loading";

export function RealCommercialDashboard() {
  const { data, loading, error, refetch } = useDashboardData();
  const [selectedPeriod, setSelectedPeriod] = useState("30");
  const [selectedCity, setSelectedCity] = useState("all");

  // Processamento de dados comerciais baseados na API real
  const analytics = useMemo(() => {
    if (!data || data.length === 0) {
      return {
        totalUsers: 0,
        activeUsers: 0,
        newUsers: 0,
        totalCourses: 0,
        cityDistribution: {},
        departmentDistribution: {},
        coursePopularity: {},
        registrationTrend: [],
        accessPatterns: [],
        userSegments: { active: 0, moderate: 0, low: 0, inactive: 0 },
        commercialOpportunities: {
          inactiveUsers: [],
          newUsersToEngage: [],
          lowEngagement: [],
          departmentOpportunities: {},
        },
      };
    }

    const now = Date.now() / 1000;
    const thirtyDaysAgo = now - 30 * 24 * 60 * 60;
    const sevenDaysAgo = now - 7 * 24 * 60 * 60;
    const ninetyDaysAgo = now - 90 * 24 * 60 * 60;

    // Métricas básicas
    const totalUsers = data.length;
    const activeUsers = data.filter((u) => u.lastaccess > sevenDaysAgo).length;
    const newUsers = data.filter((u) => u.firstaccess > thirtyDaysAgo).length;

    // Todos os cursos
    const allCourses = data.reduce((acc: EnrolledCourse[], user) => {
      if (user.enrolledcourses) {
        return [...acc, ...user.enrolledcourses];
      }
      return acc;
    }, []);

    const totalCourses = new Set(allCourses.map((c) => c.id)).size;

    // Distribuição geográfica
    const cityDistribution = data.reduce((acc, user) => {
      const city = user.city || "Não informado";
      acc[city] = (acc[city] || 0) + 1;
      return acc;
    }, {} as Record<string, number>);

    // Distribuição por departamento
    const departmentDistribution = data.reduce((acc, user) => {
      const dept = user.department || "Não informado";
      acc[dept] = (acc[dept] || 0) + 1;
      return acc;
    }, {} as Record<string, number>);

    // Popularidade dos cursos
    const coursePopularity = allCourses.reduce((acc, course) => {
      acc[course.fullname] = (acc[course.fullname] || 0) + 1;
      return acc;
    }, {} as Record<string, number>);

    // Tendência de registros por mês
    const registrationTrend = data.reduce((acc, user) => {
      const date = new Date(user.firstaccess * 1000);
      const monthKey = `${date.getFullYear()}-${String(
        date.getMonth() + 1
      ).padStart(2, "0")}`;
      acc[monthKey] = (acc[monthKey] || 0) + 1;
      return acc;
    }, {} as Record<string, number>);

    // Padrões de acesso
    const accessPatterns = data.map((user) => {
      const daysSinceLastAccess = (now - user.lastaccess) / (24 * 60 * 60);
      const daysSinceLastCourse =
        (now - user.lastcourseaccess) / (24 * 60 * 60);
      return {
        userId: user.id,
        daysSinceLastAccess,
        daysSinceLastCourse,
        coursesEnrolled: user.enrolledcourses?.length || 0,
      };
    });

    // Segmentação de usuários
    const userSegments = {
      active: data.filter((u) => u.lastaccess > sevenDaysAgo).length,
      moderate: data.filter(
        (u) => u.lastaccess > thirtyDaysAgo && u.lastaccess <= sevenDaysAgo
      ).length,
      low: data.filter(
        (u) => u.lastaccess > ninetyDaysAgo && u.lastaccess <= thirtyDaysAgo
      ).length,
      inactive: data.filter((u) => u.lastaccess <= ninetyDaysAgo).length,
    };

    // Oportunidades comerciais
    const commercialOpportunities = {
      inactiveUsers: data.filter(
        (u) => u.lastaccess <= thirtyDaysAgo && u.lastaccess > ninetyDaysAgo
      ),
      newUsersToEngage: data.filter((u) => u.firstaccess > sevenDaysAgo),
      lowEngagement: data.filter(
        (u) =>
          u.lastcourseaccess <= sevenDaysAgo &&
          u.lastaccess > sevenDaysAgo &&
          u.enrolledcourses?.length === 1
      ),
      departmentOpportunities: Object.entries(departmentDistribution)
        .sort(([, a], [, b]) => (b as number) - (a as number))
        .reduce((acc, [dept, count]) => {
          acc[dept] = {
            totalUsers: count,
            activeUsers: data.filter(
              (u) => u.department === dept && u.lastaccess > sevenDaysAgo
            ).length,
            potential: count > 50 ? "Alto" : count > 20 ? "Médio" : "Baixo",
          };
          return acc;
        }, {} as Record<string, any>),
    };

    return {
      totalUsers,
      activeUsers,
      newUsers,
      totalCourses,
      cityDistribution,
      departmentDistribution,
      coursePopularity,
      registrationTrend,
      accessPatterns,
      userSegments,
      commercialOpportunities,
    };
  }, [data]);

  // Preparar dados para gráficos
  const chartData = useMemo(() => {
    // Tendência de registros
    const registrationTrendData = Object.entries(analytics.registrationTrend)
      .sort(([a], [b]) => a.localeCompare(b))
      .slice(-12)
      .map(([month, count]) => ({
        month: new Date(month + "-01").toLocaleDateString("pt-BR", {
          month: "short",
          year: "2-digit",
        }),
        registrations: count,
      }));

    // Top cidades
    const topCities = Object.entries(analytics.cityDistribution)
      .sort(([, a], [, b]) => b - a)
      .slice(0, 8)
      .map(([city, count]) => ({ city, count }));

    // Top cursos
    const topCourses = Object.entries(analytics.coursePopularity)
      .sort(([, a], [, b]) => (b as number) - (a as number))
      .slice(0, 10)
      .map(([course, count]) => ({
        course: course.substring(0, 30) + "...",
        count,
      }));

    // Segmentação
    const segmentData = [
      {
        name: "Ativos (7d)",
        value: analytics.userSegments.active,
        color: "#22c55e",
      },
      {
        name: "Moderados (30d)",
        value: analytics.userSegments.moderate,
        color: "#3b82f6",
      },
      {
        name: "Baixo (90d)",
        value: analytics.userSegments.low,
        color: "#f59e0b",
      },
      {
        name: "Inativos (+90d)",
        value: analytics.userSegments.inactive,
        color: "#ef4444",
      },
    ];

    return {
      registrationTrendData,
      topCities,
      topCourses,
      segmentData,
    };
  }, [analytics]);

  if (loading && data.length === 0) {
      return <DashboardLoading />
    }

  if (error && data.length === 0) {
    return (
      <div className="flex h-screen bg-gray-50">
        <div className="flex-1 flex items-center justify-center">
          <Card className="w-full max-w-md">
            <CardContent className="p-8 text-center">
              <AlertTriangle className="h-12 w-12 text-red-500 mx-auto mb-4" />
              <h2 className="text-xl font-semibold mb-2">
                Erro ao carregar dados
              </h2>
              <p className="text-muted-foreground mb-4">{error}</p>
              <Button onClick={refetch} className="gap-2">
                <RefreshCw className="h-4 w-4" />
                Tentar novamente
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    );
  }

  return (
    <div className="flex h-screen bg-gray-50">
      {/* Main Content */}
      <div className="flex-1 overflow-auto">
        <div className="p-8">
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
                onClick={refetch}
                disabled={loading}
                variant="outline"
                className="gap-2"
              >
                <RefreshCw
                  className={`h-4 w-4 ${loading ? "animate-spin" : ""}`}
                />
                {loading ? "Atualizando..." : "Atualizar"}
              </Button>
            </div>
          </div>

          {/* Filtros */}
          <div className="flex gap-4 mb-6">
            <Select value={selectedPeriod} onValueChange={setSelectedPeriod}>
              <SelectTrigger className="w-48">
                <SelectValue placeholder="Período" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="7">Últimos 7 dias</SelectItem>
                <SelectItem value="30">Últimos 30 dias</SelectItem>
                <SelectItem value="90">Últimos 90 dias</SelectItem>
              </SelectContent>
            </Select>

            <Button variant="outline" className="gap-2">
              <Download className="h-4 w-4" />
              Exportar Relatório
            </Button>
          </div>

          <Tabs defaultValue="overview" className="space-y-6">
            <TabsList className="grid w-full grid-cols-5">
              <TabsTrigger value="overview">Visão Geral</TabsTrigger>
              <TabsTrigger value="geographic">Geográfico</TabsTrigger>
              <TabsTrigger value="courses">Cursos</TabsTrigger>
              <TabsTrigger value="engagement">Engajamento</TabsTrigger>
              <TabsTrigger value="opportunities">Oportunidades</TabsTrigger>
            </TabsList>

            {/* Visão Geral */}
            <TabsContent value="overview" className="space-y-6">
              {/* KPIs Principais */}
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                <Card className={loading ? "opacity-75" : ""}>
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm font-medium text-gray-600">
                          Total de Usuários
                        </p>
                        <p className="text-3xl font-bold text-gray-900">
                          {analytics.totalUsers}
                        </p>
                        <p className="text-sm text-blue-600">
                          Base de Estudantes
                        </p>
                      </div>
                      <Users className="h-8 w-8 text-blue-600" />
                    </div>
                  </CardContent>
                </Card>

                <Card className={loading ? "opacity-75" : ""}>
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm font-medium text-gray-600">
                          Usuários Ativos (7d)
                        </p>
                        <p className="text-3xl font-bold text-gray-900">
                          {analytics.activeUsers}
                        </p>
                        <p className="text-sm text-green-600 flex items-center gap-1">
                          <TrendingUp className="h-3 w-3" />
                          {analytics.totalUsers > 0
                            ? (
                                (analytics.activeUsers / analytics.totalUsers) *
                                100
                              ).toFixed(1)
                            : 0}
                          % Taxa de Atividade
                        </p>
                      </div>
                      <Activity className="h-8 w-8 text-green-600" />
                    </div>
                  </CardContent>
                </Card>

                <Card className={loading ? "opacity-75" : ""}>
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm font-medium text-gray-600">
                          Novos Usuários (30d)
                        </p>
                        <p className="text-3xl font-bold text-gray-900">
                          {analytics.newUsers}
                        </p>
                        <p className="text-sm text-purple-600">
                          {analytics.totalUsers > 0
                            ? (
                                (analytics.newUsers / analytics.totalUsers) *
                                100
                              ).toFixed(1)
                            : 0}
                          % Crescimento
                        </p>
                      </div>
                      <UserPlus className="h-8 w-8 text-purple-600" />
                    </div>
                  </CardContent>
                </Card>

                <Card className={loading ? "opacity-75" : ""}>
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm font-medium text-gray-600">
                          Total de Cursos
                        </p>
                        <p className="text-3xl font-bold text-gray-900">
                          {analytics.totalCourses}
                        </p>
                        <p className="text-sm text-orange-600">
                          Portfólio Disponível
                        </p>
                      </div>
                      <BookOpen className="h-8 w-8 text-orange-600" />
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Gráficos Principais */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <Card className={loading ? "opacity-75" : ""}>
                  <CardHeader>
                    <CardTitle>Tendência de Registros</CardTitle>
                    <CardDescription>
                      Novos usuários por mês (últimos 12 meses)
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ResponsiveContainer width="100%" height={300}>
                      <AreaChart data={chartData.registrationTrendData}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="month" />
                        <YAxis />
                        <Tooltip />
                        <Area
                          type="monotone"
                          dataKey="registrations"
                          stroke="#3b82f6"
                          fill="#3b82f6"
                          fillOpacity={0.3}
                        />
                      </AreaChart>
                    </ResponsiveContainer>
                  </CardContent>
                </Card>

                <Card className={loading ? "opacity-75" : ""}>
                  <CardHeader>
                    <CardTitle>Segmentação por Engajamento</CardTitle>
                    <CardDescription>
                      Distribuição de usuários por atividade
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ResponsiveContainer width="100%" height={300}>
                      <PieChart>
                        <Pie
                          data={chartData.segmentData}
                          cx="50%"
                          cy="50%"
                          labelLine={false}
                          label={({ name, percent }) =>
                            `${name} ${(percent * 100).toFixed(0)}%`
                          }
                          outerRadius={80}
                          fill="#8884d8"
                          dataKey="value"
                        >
                          {chartData.segmentData.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={entry.color} />
                          ))}
                        </Pie>
                        <Tooltip />
                      </PieChart>
                    </ResponsiveContainer>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            {/* Análise Geográfica */}
            <TabsContent value="geographic" className="space-y-6">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <Card className={loading ? "opacity-75" : ""}>
                  <CardHeader>
                    <CardTitle>Distribuição por Cidade</CardTitle>
                    <CardDescription>
                      Top 8 cidades com mais usuários
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ResponsiveContainer width="100%" height={300}>
                      <BarChart data={chartData.topCities}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis
                          dataKey="city"
                          angle={-45}
                          textAnchor="end"
                          height={100}
                        />
                        <YAxis />
                        <Tooltip />
                        <Bar dataKey="count" fill="#3b82f6" />
                      </BarChart>
                    </ResponsiveContainer>
                  </CardContent>
                </Card>

                <Card className={loading ? "opacity-75" : ""}>
                  <CardHeader>
                    <CardTitle>Oportunidades por Região</CardTitle>
                    <CardDescription>
                      Análise para expansão geográfica
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {Object.entries(analytics.cityDistribution)
                        .sort(([, a], [, b]) => b - a)
                        .slice(0, 6)
                        .map(([city, count], index) => {
                          const percentage =
                            (count / analytics.totalUsers) * 100;
                          const opportunity =
                            percentage > 15
                              ? "Consolidar"
                              : percentage > 5
                              ? "Expandir"
                              : "Explorar";
                          const color =
                            opportunity === "Consolidar"
                              ? "bg-green-100 text-green-800"
                              : opportunity === "Expandir"
                              ? "bg-blue-100 text-blue-800"
                              : "bg-yellow-100 text-yellow-800";

                          return (
                            <div
                              key={city}
                              className="flex items-center justify-between p-4 border rounded-lg"
                            >
                              <div className="flex items-center gap-3">
                                <MapPin className="h-5 w-5 text-gray-500" />
                                <div>
                                  <p className="font-medium">{city}</p>
                                  <p className="text-sm text-gray-600">
                                    {count} usuários • {percentage.toFixed(1)}%
                                    do total
                                  </p>
                                </div>
                              </div>
                              <Badge className={color}>{opportunity}</Badge>
                            </div>
                          );
                        })}
                    </div>
                  </CardContent>
                </Card>
              </div>
                <Card className={loading ? "opacity-75" : ""}>
                  <CardHeader>
                    <CardTitle>Insights Geográficos para Campanhas</CardTitle>
                    <CardDescription>
                      Recomendações baseadas na distribuição atual
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div className="p-4 bg-green-50 border border-green-200 rounded-lg">
                        <h4 className="font-medium text-green-800 mb-2">
                          Mercados Consolidados
                        </h4>
                        <p className="text-sm text-green-700 mb-3">
                          Cidades com alta concentração de usuários - foco em
                          retenção e upsell
                        </p>
                        <div className="space-y-1">
                          {Object.entries(analytics.cityDistribution)
                            .sort(([, a], [, b]) => b - a)
                            .slice(0, 2)
                            .map(([city, count]) => (
                              <div key={city} className="text-sm">
                                <strong>{city}</strong>: {count} usuários
                              </div>
                            ))}
                        </div>
                      </div>

                      <div className="p-4 bg-blue-50 border border-blue-200 rounded-lg">
                        <h4 className="font-medium text-blue-800 mb-2">
                          Oportunidades de Expansão
                        </h4>
                        <p className="text-sm text-blue-700 mb-3">
                          Cidades com presença moderada - potencial para
                          crescimento
                        </p>
                        <div className="space-y-1">
                          {Object.entries(analytics.cityDistribution)
                            .sort(([, a], [, b]) => b - a)
                            .slice(2, 4)
                            .map(([city, count]) => (
                              <div key={city} className="text-sm">
                                <strong>{city}</strong>: {count} usuários
                              </div>
                            ))}
                        </div>
                      </div>

                      <div className="p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
                        <h4 className="font-medium text-yellow-800 mb-2">
                          Novos Mercados
                        </h4>
                        <p className="text-sm text-yellow-700 mb-3">
                          Cidades com baixa presença - oportunidade de entrada
                        </p>
                        <div className="space-y-1">
                          {Object.entries(analytics.cityDistribution)
                            .sort(([, a], [, b]) => b - a)
                            .slice(4, 6)
                            .map(([city, count]) => (
                              <div key={city} className="text-sm">
                                <strong>{city}</strong>: {count} usuários
                              </div>
                            ))}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
            </TabsContent>

            {/* Análise de Cursos */}
            <TabsContent value="courses" className="space-y-6">
              <Card className={loading ? "opacity-75" : ""}>
                <CardHeader>
                  <CardTitle>Cursos Mais Populares</CardTitle>
                  <CardDescription>
                    Top 10 cursos com mais matrículas
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ResponsiveContainer width="100%" height={400}>
                    <BarChart data={chartData.topCourses} layout="vertical">
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis type="number" />
                      <YAxis dataKey="course" type="category" width={200} />
                      <Tooltip />
                      <Bar dataKey="count" fill="#8b5cf6" />
                    </BarChart>
                  </ResponsiveContainer>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Engajamento */}
            <TabsContent value="engagement" className="space-y-6">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <Card className={loading ? "opacity-75" : ""}>
                  <CardHeader>
                    <CardTitle>Análise de Departamentos</CardTitle>
                    <CardDescription>
                      Distribuição de usuários por departamento
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      {Object.entries(analytics.departmentDistribution)
                        .sort(([, a], [, b]) => b - a)
                        .slice(0, 8)
                        .map(([dept, count]) => {
                          const percentage =
                            (count / analytics.totalUsers) * 100;
                          return (
                            <div
                              key={dept}
                              className="flex items-center justify-between p-3 bg-gray-50 rounded-lg"
                            >
                              <span className="font-medium">{dept}</span>
                              <div className="text-right">
                                <div className="font-bold">{count}</div>
                                <div className="text-sm text-gray-600">
                                  {percentage.toFixed(1)}%
                                </div>
                              </div>
                            </div>
                          );
                        })}
                    </div>
                  </CardContent>
                </Card>

                <Card className={loading ? "opacity-75" : ""}>
                  <CardHeader>
                    <CardTitle>Métricas de Engajamento</CardTitle>
                    <CardDescription>
                      Indicadores de atividade dos usuários
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {[
                        {
                          label: "Usuários Altamente Ativos",
                          count: analytics.userSegments.active,
                          color: "bg-green-500",
                          description: "Acessaram nos últimos 7 dias",
                        },
                        {
                          label: "Usuários Moderadamente Ativos",
                          count: analytics.userSegments.moderate,
                          color: "bg-blue-500",
                          description: "Acessaram entre 7-30 dias",
                        },
                        {
                          label: "Usuários com Baixa Atividade",
                          count: analytics.userSegments.low,
                          color: "bg-yellow-500",
                          description: "Acessaram entre 30-90 dias",
                        },
                        {
                          label: "Usuários Inativos",
                          count: analytics.userSegments.inactive,
                          color: "bg-red-500",
                          description: "Não acessam há mais de 90 dias",
                        },
                      ].map((segment, index) => {
                        const percentage =
                          (segment.count / analytics.totalUsers) * 100;
                        return (
                          <div key={index} className="flex items-center gap-4">
                            <div
                              className={`w-4 h-4 rounded-full ${segment.color}`}
                            />
                            <div className="flex-1">
                              <div className="flex items-center justify-between">
                                <span className="text-sm font-medium">
                                  {segment.label}
                                </span>
                                <span className="text-sm font-bold">
                                  {segment.count} ({percentage.toFixed(1)}%)
                                </span>
                              </div>
                              <p className="text-xs text-gray-600">
                                {segment.description}
                              </p>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            {/* Oportunidades */}
            <TabsContent value="opportunities" className="space-y-6">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <Card className={loading ? "opacity-75" : ""}>
                  <CardHeader>
                    <CardTitle>Oportunidades de Campanhas</CardTitle>
                    <CardDescription>
                      Segmentos prontos para ações comerciais
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
                        <div className="flex items-center gap-2 mb-2">
                          <Clock className="h-5 w-5 text-yellow-600" />
                          <span className="font-medium text-yellow-800">
                            Usuários Inativos
                          </span>
                        </div>
                        <p className="text-2xl font-bold text-yellow-900">
                          {
                            analytics.commercialOpportunities.inactiveUsers
                              .length
                          }
                        </p>
                        <p className="text-sm text-yellow-700">
                          Candidatos para campanhas de reativação
                        </p>
                      </div>

                      <div className="p-4 bg-green-50 border border-green-200 rounded-lg">
                        <div className="flex items-center gap-2 mb-2">
                          <UserPlus className="h-5 w-5 text-green-600" />
                          <span className="font-medium text-green-800">
                            Novos Usuários
                          </span>
                        </div>
                        <p className="text-2xl font-bold text-green-900">
                          {
                            analytics.commercialOpportunities.newUsersToEngage
                              .length
                          }
                        </p>
                        <p className="text-sm text-green-700">
                          Oportunidade para onboarding
                        </p>
                      </div>

                      <div className="p-4 bg-blue-50 border border-blue-200 rounded-lg">
                        <div className="flex items-center gap-2 mb-2">
                          <Target className="h-5 w-5 text-blue-600" />
                          <span className="font-medium text-blue-800">
                            Baixo Engajamento
                          </span>
                        </div>
                        <p className="text-2xl font-bold text-blue-900">
                          {
                            analytics.commercialOpportunities.lowEngagement
                              .length
                          }
                        </p>
                        <p className="text-sm text-blue-700">
                          Usuários com apenas 1 curso
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className={loading ? "opacity-75" : ""}>
                  <CardHeader>
                    <CardTitle>Ações Recomendadas</CardTitle>
                    <CardDescription>
                      Estratégias baseadas nos dados
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="p-4 border rounded-lg">
                        <h4 className="font-medium mb-2 flex items-center gap-2">
                          <Mail className="h-4 w-4" />
                          Campanha de Reativação
                        </h4>
                        <p className="text-sm text-gray-600 mb-2">
                          Focar nos{" "}
                          {
                            analytics.commercialOpportunities.inactiveUsers
                              .length
                          }{" "}
                          usuários inativos
                        </p>
                        <Badge variant="secondary">Prioridade: Alta</Badge>
                      </div>

                      <div className="p-4 border rounded-lg">
                        <h4 className="font-medium mb-2 flex items-center gap-2">
                          <GraduationCap className="h-4 w-4" />
                          Onboarding Intensivo
                        </h4>
                        <p className="text-sm text-gray-600 mb-2">
                          Engajar{" "}
                          {
                            analytics.commercialOpportunities.newUsersToEngage
                              .length
                          }{" "}
                          novos usuários
                        </p>
                        <Badge variant="secondary">Prioridade: Alta</Badge>
                      </div>

                      <div className="p-4 border rounded-lg">
                        <h4 className="font-medium mb-2 flex items-center gap-2">
                          <Target className="h-4 w-4" />
                          Cross-sell de Cursos
                        </h4>
                        <p className="text-sm text-gray-600 mb-2">
                          {
                            analytics.commercialOpportunities.lowEngagement
                              .length
                          }{" "}
                          usuários com potencial para mais cursos
                        </p>
                        <Badge variant="secondary">Prioridade: Média</Badge>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <Card className={loading ? "opacity-75" : ""}>
                <CardHeader>
                  <CardTitle>Exportar Listas para Campanhas</CardTitle>
                  <CardDescription>
                    Segmentações prontas para uso em ferramentas de marketing
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <Button variant="outline" className="gap-2">
                      <Download className="h-4 w-4" />
                      Usuários Inativos (
                      {analytics.commercialOpportunities.inactiveUsers.length})
                    </Button>
                    <Button variant="outline" className="gap-2">
                      <Download className="h-4 w-4" />
                      Novos Usuários (
                      {
                        analytics.commercialOpportunities.newUsersToEngage
                          .length
                      }
                      )
                    </Button>
                    <Button variant="outline" className="gap-2">
                      <Download className="h-4 w-4" />
                      Baixo Engajamento (
                      {analytics.commercialOpportunities.lowEngagement.length})
                    </Button>
                  </div>
                  <div className="mt-4 text-sm text-gray-600">
                    <p>
                      As listas incluem: ID, nome, email, cidade, departamento,
                      último acesso, cursos matriculados e dados relevantes para
                      segmentação.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
}
