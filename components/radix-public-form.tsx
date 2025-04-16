"use client"

import { useState, useEffect } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import { toast } from "@/components/ui/use-toast"
import { submitLead } from "@/app/actions/lead-actions"

// Importando componentes Radix UI
import { Label } from "@/components/ui/radix/label"
import { Input } from "@/components/ui/radix/input"
import { Button } from "@/components/ui/radix/button"
import { Card, CardHeader, CardContent, CardFooter, CardTitle, CardDescription } from "@/components/ui/radix/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/radix/select"

const formSchema = z.object({
  name: z.string().min(2, { message: "Nome deve ter pelo menos 2 caracteres" }),
  email: z.string().email({ message: "Email inválido" }),
  primaryCourseId: z.string({ required_error: "Selecione um curso principal" }),
  secondaryCourseId: z.string().optional(),
})

type Course = {
  id: number
  name: string
}

export default function RadixPublicForm() {
  const [courses, setCourses] = useState<Course[]>([])
  const [isSubmitting, setIsSubmitting] = useState(false)

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      primaryCourseId: "",
      secondaryCourseId: "",
    },
  })

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const response = await fetch("/api/courses")
        const data = await response.json()
        setCourses(data)
      } catch (error) {
        console.error("Erro ao carregar cursos:", error)
        toast({
          title: "Erro",
          description: "Não foi possível carregar a lista de cursos.",
          variant: "destructive",
        })
      }
    }

    fetchCourses()
  }, [])

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    setIsSubmitting(true)
    try {
      const result = await submitLead({
        name: values.name,
        email: values.email,
        primaryCourseId: Number.parseInt(values.primaryCourseId),
        secondaryCourseId: values.secondaryCourseId ? Number.parseInt(values.secondaryCourseId) : undefined,
      })

      if (result.success) {
        toast({
          title: "Cadastro realizado com sucesso!",
          description: "Obrigado pelo seu interesse. Entraremos em contato em breve.",
        })
        form.reset()
      } else {
        throw new Error(result.error || "Erro ao processar cadastro")
      }
    } catch (error) {
      console.error("Erro ao enviar formulário:", error)
      toast({
        title: "Erro no cadastro",
        description: "Ocorreu um erro ao processar seu cadastro. Por favor, tente novamente.",
        variant: "destructive",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <Card className="w-full max-w-md mx-auto">
      <CardHeader>
        <CardTitle>Formulário de Interesse</CardTitle>
        <CardDescription>Preencha seus dados para receber informações sobre nossos cursos</CardDescription>
      </CardHeader>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="name">Nome Completo</Label>
            <Input id="name" placeholder="Digite seu nome completo" {...form.register("name")} />
            {form.formState.errors.name && <p className="text-sm text-red-500">{form.formState.errors.name.message}</p>}
          </div>

          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input id="email" type="email" placeholder="seu@email.com" {...form.register("email")} />
            {form.formState.errors.email && (
              <p className="text-sm text-red-500">{form.formState.errors.email.message}</p>
            )}
          </div>

          <div className="space-y-2">
            <Label htmlFor="primaryCourseId">Curso Principal</Label>
            <Select
              onValueChange={(value) => form.setValue("primaryCourseId", value, { shouldValidate: true })}
              value={form.watch("primaryCourseId")}
            >
              <SelectTrigger id="primaryCourseId">
                <SelectValue placeholder="Selecione um curso" />
              </SelectTrigger>
              <SelectContent>
                {courses.map((course) => (
                  <SelectItem key={course.id} value={course.id.toString()}>
                    {course.name}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            {form.formState.errors.primaryCourseId && (
              <p className="text-sm text-red-500">{form.formState.errors.primaryCourseId.message}</p>
            )}
          </div>

          <div className="space-y-2">
            <Label htmlFor="secondaryCourseId">Curso Secundário (opcional)</Label>
            <Select
              onValueChange={(value) => form.setValue("secondaryCourseId", value, { shouldValidate: true })}
              value={form.watch("secondaryCourseId") || ""}
            >
              <SelectTrigger id="secondaryCourseId">
                <SelectValue placeholder="Selecione um curso secundário (opcional)" />
              </SelectTrigger>
              <SelectContent>
                {courses.map((course) => (
                  <SelectItem key={course.id} value={course.id.toString()}>
                    {course.name}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            {form.formState.errors.secondaryCourseId && (
              <p className="text-sm text-red-500">{form.formState.errors.secondaryCourseId.message}</p>
            )}
          </div>
        </CardContent>
        <CardFooter>
          <Button type="submit" className="w-full" disabled={isSubmitting}>
            {isSubmitting ? "Enviando..." : "Enviar Cadastro"}
          </Button>
        </CardFooter>
      </form>
    </Card>
  )
}

