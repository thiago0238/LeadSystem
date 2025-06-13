"use client";

import { useState, useMemo } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { Checkbox } from "@/components/ui/checkbox";
import { ScrollArea } from "@/components/ui/scroll-area";
import { LoadingSpinner } from "@/components/ui/loading-spinner";
import { useLoading } from "@/hooks/use-loading";
import { toast } from "@/hooks/use-toast";
import {
  Search,
  Send,
  Users,
  Award,
  CheckCircle,
  XCircle,
  Filter,
  GraduationCap,
  Star,
  BookOpen,
} from "lucide-react";
import { it } from "node:test";

// Tipos de dados
interface Student {
  id: number;
  nome: string;
  email: string;
  curso: string;
  courseId: number;
  nota: number;
  situacao: boolean;
  dataMatricula: string;
  certificadoEnviado?: boolean;
  uniqueId: string;
}

interface Course {
  id: number;
  name: string;
  notaMinima: number;
}

interface CertificateFormProps {
  students: Student[];
  courses: Course[];
}

const searchSchema = z.object({
  searchTerm: z.string().optional(),
  courseId: z.string().optional(),
  status: z.string().optional(),
});

export function CertificateForm({ students, courses }: CertificateFormProps) {
  const [selectedItems, setSelectedItems] = useState<string[]>([]);
  const { isLoading, withLoading } = useLoading();

  const form = useForm<z.infer<typeof searchSchema>>({
    resolver: zodResolver(searchSchema),
    defaultValues: {
      searchTerm: "",
      courseId: "",
      status: "",
    },
  });

  const watchedValues = form.watch();

  // Filtrar alunos baseado nos critérios
  const filteredStudents = useMemo(() => {
    let filtered = students;

    if (watchedValues.searchTerm) {
      const search = watchedValues.searchTerm.toLowerCase();
      filtered = filtered.filter((student) => {
        const nome = student.nome?.toLowerCase() || "";
        const email = student.email?.toLowerCase() || "";
        return nome.includes(search) || email.includes(search);
      });
    }

    if (watchedValues.courseId && watchedValues.courseId !== "0") {
      filtered = filtered.filter(
        (student) => student.courseId === Number(watchedValues.courseId)
      );
    }

    if (watchedValues.status && watchedValues.status !== "0") {
      switch (watchedValues.status) {
        case "approved":
          filtered = filtered.filter((student) => student.situacao);
          break;
        case "reproved":
          filtered = filtered.filter((student) => !student.situacao);
          break;
        case "certificate-sent":
          filtered = filtered.filter((student) => student.certificadoEnviado);
          break;
        case "certificate-pending":
          filtered = filtered.filter(
            (student) => student.situacao && !student.certificadoEnviado
          );
          break;
      }
    }

    return filtered;
  }, [students, watchedValues]);

  // Estatísticas
  const stats = useMemo(() => {
    const total = filteredStudents.length;
    const approved = filteredStudents.filter((s) => s.situacao).length;
    const certificatesSent = filteredStudents.filter(
      (s) => s.certificadoEnviado
    ).length;
    const pending = filteredStudents.filter(
      (s) => s.situacao && !s.certificadoEnviado
    ).length;
    const averageGrade =
      total > 0
        ? filteredStudents.reduce((sum, s) => sum + s.nota, 0) / total
        : 0;
    const uniqueStudents = new Set(filteredStudents.map((s) => s.id)).size;

    return {
      total,
      approved,
      certificatesSent,
      pending,
      averageGrade,
      uniqueStudents,
    };
  }, [filteredStudents]);

  const handleSelectAll = (checked: boolean) => {
    if (checked) {
      const eligibleItems = filteredStudents
        .filter((student) => student.situacao && !student.certificadoEnviado)
        .map((student) => student.uniqueId);
      setSelectedItems(eligibleItems);
    } else {
      setSelectedItems([]);
    }
  };

  const handleSelectItem = (uniqueId: string, checked: boolean) => {
    if (checked) {
      setSelectedItems((prev) => [...prev, uniqueId]);
    } else {
      setSelectedItems((prev) => prev.filter((id) => id !== uniqueId));
    }
  };

  const handleSendCertificates = async (itemIds?: string[]) => {
    const idsToSend = itemIds || selectedItems;
    if (idsToSend.length === 0) return;

    await withLoading(async () => {
      try {
        const certificatesToSend = idsToSend.map((uniqueId) => {
          const [leadId, courseId, curso, nome, email, nota] = uniqueId.split("-");
          return {
            leadId: Number(leadId),
            courseId: Number(courseId),
            curso,
            nome,
            email,
            nota: Number(nota),
          };
        });
        const response = await fetch("/api/email", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(certificatesToSend),
        });

        const result = await response.json();
        if (result.success) {
          toast({
            title: "Certificados enviados com sucesso!",
            description: `${idsToSend.length} certificado(s) enviado(s).`,
          });
          setSelectedItems([]);
          window.location.reload();
        } else {
          throw new Error(result.error || "Erro ao enviar certificados");
        }
      } catch (error) {
        console.error("Erro ao enviar certificados:", error);
        toast({
          title: "Erro no envio",
          description:
            "Ocorreu um erro ao enviar os certificados. Tente novamente.",
          variant: "destructive",
        });
      }
    });
  };

  const getGradeColor = (grade: number, minGrade: number) => {
    if (grade >= minGrade) return "text-green-600";
    if (grade >= minGrade * 0.7) return "text-yellow-600";
    return "text-red-600";
  };

  const getGradeBadgeVariant = (approved: boolean) => {
    return approved ? "default" : "destructive";
  };

  return (
    <div className="space-y-6">
      {/* Header com Estatísticas */}
      <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center gap-2">
              <Users className="h-4 w-4 text-blue-600" />
              <div>
                <p className="text-2xl font-bold">{stats.uniqueStudents}</p>
                <p className="text-xs text-muted-foreground">Alunos Únicos</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-4">
            <div className="flex items-center gap-2">
              <BookOpen className="h-4 w-4 text-indigo-600" />
              <div>
                <p className="text-2xl font-bold text-indigo-600">
                  {stats.total}
                </p>
                <p className="text-xs text-muted-foreground">Matrículas</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-4">
            <div className="flex items-center gap-2">
              <CheckCircle className="h-4 w-4 text-green-600" />
              <div>
                <p className="text-2xl font-bold text-green-600">
                  {stats.approved}
                </p>
                <p className="text-xs text-muted-foreground">Aprovados</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-4">
            <div className="flex items-center gap-2">
              <Award className="h-4 w-4 text-purple-600" />
              <div>
                <p className="text-2xl font-bold text-purple-600">
                  {stats.certificatesSent}
                </p>
                <p className="text-xs text-muted-foreground">
                  Certificados Enviados
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-4">
            <div className="flex items-center gap-2">
              <Star className="h-4 w-4 text-yellow-600" />
              <div>
                <p className="text-2xl font-bold text-yellow-600">
                  {stats.averageGrade.toFixed(1)}
                </p>
                <p className="text-xs text-muted-foreground">Média Geral</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Filtros */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Filter className="h-5 w-5" />
            Filtros e Busca
          </CardTitle>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <FormField
                control={form.control}
                name="searchTerm"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Buscar Aluno</FormLabel>
                    <FormControl>
                      <div className="relative">
                        <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                        <Input
                          placeholder="Nome ou email..."
                          className="pl-10"
                          {...field}
                        />
                      </div>
                    </FormControl>
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="courseId"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Curso</FormLabel>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Todos os cursos" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="0">Todos os cursos</SelectItem>
                        {courses.map((course) => (
                          <SelectItem
                            key={course.id}
                            value={course.id.toString()}
                          >
                            {course.name}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="status"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Status</FormLabel>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Todos os status" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="0">Todos os status</SelectItem>
                        <SelectItem value="approved">Aprovados</SelectItem>
                        <SelectItem value="reproved">Reprovados</SelectItem>
                        <SelectItem value="certificate-sent">
                          Certificado Enviado
                        </SelectItem>
                        <SelectItem value="certificate-pending">
                          Certificado Pendente
                        </SelectItem>
                      </SelectContent>
                    </Select>
                  </FormItem>
                )}
              />
            </div>
          </Form>
        </CardContent>
      </Card>

      {/* Ações em Massa */}
      {selectedItems.length > 0 && (
        <Card className="border-blue-200 bg-blue-50/50">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-blue-600" />
                <span className="font-medium">
                  {selectedItems.length} certificado(s) selecionado(s)
                </span>
              </div>
              <Button
                onClick={() => handleSendCertificates()}
                disabled={isLoading}
                className="gap-2"
              >
                {isLoading ? (
                  <LoadingSpinner size="sm" />
                ) : (
                  <Send className="h-4 w-4" />
                )}
                {isLoading ? "Enviando..." : "Enviar Certificados"}
              </Button>
            </div>
          </CardContent>
        </Card>
      )}

      {/* Lista de Alunos */}
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <div>
              <CardTitle className="flex items-center gap-2">
                <GraduationCap className="h-5 w-5" />
                Lista de Matrículas ({filteredStudents.length})
              </CardTitle>
              <CardDescription>
                Gerencie os alunos e envie certificados para os aprovados em
                cada curso
              </CardDescription>
            </div>
            <div className="flex items-center gap-2">
              <Checkbox
                checked={
                  selectedItems.length > 0 &&
                  selectedItems.length ===
                    filteredStudents.filter(
                      (s) => s.situacao && !s.certificadoEnviado
                    ).length
                }
                onCheckedChange={handleSelectAll}
                disabled={isLoading}
              />
              <span className="text-sm text-muted-foreground">
                Selecionar todos elegíveis
              </span>
            </div>
          </div>
        </CardHeader>
        <CardContent className="p-0">
          <ScrollArea className="h-[600px]">
            <div className="space-y-2 p-4">
              {filteredStudents.length === 0 ? (
                <div className="text-center py-8 text-muted-foreground">
                  <Users className="h-12 w-12 mx-auto mb-4 opacity-50" />
                  <p>Nenhum aluno encontrado com os filtros aplicados</p>
                </div>
              ) : (
                filteredStudents
                  .sort((a, b) => a.nome.localeCompare(b.nome))
                  .map((student) => {
                    const course = courses.find(
                      (c) => c.id === student.courseId
                    );
                    const isEligible =
                      student.situacao && !student.certificadoEnviado;
                    const isSelected = selectedItems.includes(
                      `${student.id}-${student.courseId}-${student.curso}-${student.nome}-${student.email}-${student.nota}`
                    );

                    return (
                      <Card
                        key={`${student.id}-${student.courseId}-${student.curso}-${student.nome}-${student.email}-${student.nota}`}
                        className={`transition-all duration-200 ${
                          isSelected
                            ? "ring-2 ring-blue-500 bg-blue-50/50"
                            : "hover:shadow-md"
                        } ${isLoading ? "opacity-50" : ""}`}
                      >
                        <CardContent className="p-4">
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-4">
                              <Checkbox
                                checked={isSelected}
                                onCheckedChange={(checked) =>
                                  handleSelectItem(
                                    `${student.id}-${student.courseId}-${student.curso}-${student.nome}-${student.email}-${student.nota}`,
                                    !!checked
                                  )
                                }
                                disabled={!isEligible || isLoading}
                              />

                              <div className="flex-1">
                                <div className="flex items-center gap-2 mb-1">
                                  <h3 className="font-semibold">
                                    {student.nome}
                                  </h3>
                                  <Badge variant="outline" className="gap-1">
                                    <BookOpen className="h-3 w-3" />
                                    {student.curso}
                                  </Badge>
                                  {student.certificadoEnviado && (
                                    <Badge
                                      variant="secondary"
                                      className="gap-1"
                                    >
                                      <Award className="h-3 w-3" />
                                      Certificado Enviado
                                    </Badge>
                                  )}
                                </div>

                                <div className="flex items-center gap-4 text-sm text-muted-foreground">
                                  <span>{student.email}</span>
                                  <span>•</span>
                                  <span>ID: {student.id}</span>
                                  <span>•</span>
                                  <span>
                                    Matrícula:{" "}
                                    {new Date(
                                      student.dataMatricula
                                    ).toLocaleDateString()}
                                  </span>
                                </div>
                              </div>
                            </div>

                            <div className="flex items-center gap-4">
                              {/* Nota */}
                              <div className="text-center">
                                <div
                                  className={`text-2xl font-bold ${getGradeColor(
                                    student.nota,
                                    course?.notaMinima || 7
                                  )}`}
                                >
                                  {student.nota}
                                </div>
                                <div className="text-xs text-muted-foreground">
                                  Nota
                                </div>
                              </div>

                              {/* Status de Aprovação */}
                              <Badge
                                variant={getGradeBadgeVariant(student.situacao)}
                                className="gap-1"
                              >
                                {student.situacao ? (
                                  <>
                                    <CheckCircle className="h-3 w-3" />
                                    Aprovado
                                  </>
                                ) : (
                                  <>
                                    <XCircle className="h-3 w-3" />
                                    Reprovado
                                  </>
                                )}
                              </Badge>

                              {/* Ação Individual */}
                              {isEligible && (
                                <Button
                                  size="sm"
                                  variant="outline"
                                  onClick={() =>
                                    handleSendCertificates([
                                      `${student.id}-${student.courseId}-${student.curso}-${student.nome}-${student.email}-${student.nota}`,
                                    ])
                                  }
                                  disabled={isLoading}
                                  className="gap-1"
                                >
                                  {isLoading ? (
                                    <LoadingSpinner size="sm" />
                                  ) : (
                                    <Send className="h-3 w-3" />
                                  )}
                                  Enviar
                                </Button>
                              )}
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    );
                  })
              )}
            </div>
          </ScrollArea>
        </CardContent>
      </Card>
    </div>
  );
}
