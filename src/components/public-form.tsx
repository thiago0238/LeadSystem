"use client";

import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { toast } from "@/components/ui/use-toast";
import { submitLead } from "@/app/actions/lead-actions";

const formSchema = z.object({
  firstname: z
    .string()
    .min(2, { message: "Nome deve ter pelo menos 2 caracteres" }),
  lastname: z
    .string()
    .min(2, { message: "Sobrenome deve ter pelo menos 2 caracteres" }),
  password: z
    .string()
    .min(6, { message: "Senha deve ter pelo menos 6 caracteres" }),
  email: z.string().email({ message: "Email inválido" }),
  primaryCourseId: z.string({ required_error: "Selecione um curso principal" }),
  secondaryCourseId: z.string().optional(),
});

type Course = {
  id: number;
  shortname: string;
};

export default function PublicForm() {
  const [courses, setCourses] = useState<Course[]>([]);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstname: "",
      lastname: "",
      email: "",
      password: "",
      primaryCourseId: "",
      secondaryCourseId: "",
    },
  });

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const response = await fetch("/api/moodle/courses");
        const data = await response.json();
        console.log("Cursos carregados:", data);
        setCourses(data);
        console.log("Cursos:", courses);
      } catch (error) {
        console.error("Erro ao carregar cursos:", error);
        toast({
          title: "Erro",
          description: "Não foi possível carregar a lista de cursos.",
          variant: "destructive",
        });
      }
    };

    fetchCourses();
  }, []);

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    setIsSubmitting(true);
    console.log("Valores do formulário:", values);
    console.log("Valores do formulário (JSON):", JSON.stringify(values));
    try {
      const result = await submitLead({
        firstname: values.firstname,
        lastname: values.lastname,
        password: values.password,
        email: values.email,
        primaryCourseId: Number.parseInt(values.primaryCourseId),
        secondaryCourseId: values.secondaryCourseId
          ? Number.parseInt(values.secondaryCourseId)
          : undefined,
      });

      if (result.success) {
        toast({
          title: "Cadastro realizado com sucesso!",
          description:
            "Obrigado pelo seu interesse. Entraremos em contato em breve.",
        });
        form.reset();
      } else {
        throw new Error(result.error || "Erro ao processar cadastro");
      }
    } catch (error) {
      console.error("Erro ao enviar formulário:", error);
      toast({
        title: "Erro no cadastro",
        description:
          "Ocorreu um erro ao processar seu cadastro. Por favor, tente novamente.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Formulário de Interesse</CardTitle>
        <CardDescription>
          Preencha seus dados para receber informações sobre nossos cursos
        </CardDescription>
      </CardHeader>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <CardContent className="space-y-4">
            <FormField
              control={form.control}
              name="firstname"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Nome </FormLabel>
                  <FormControl>
                    <Input placeholder="Digite seu nome " {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="lastname"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Sobrenome</FormLabel>
                  <FormControl>
                    <Input placeholder="Digite seu sobrenome" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="seu@email.com"
                      type="email"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Senha</FormLabel>
                  <FormControl>
                    <Input placeholder="*****" type="password" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="primaryCourseId"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Curso Principal</FormLabel>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Selecione um curso" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      {Array.isArray(courses) &&
                        courses.map((course) => (
                          <SelectItem
                            key={course.id}
                            value={course.id.toString()}
                          >
                            {course.shortname}
                          </SelectItem>
                        ))}
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="secondaryCourseId"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Curso Secundário (opcional)</FormLabel>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Selecione um curso secundário (opcional)" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      {Array.isArray(courses) &&
                        courses.map((course) => (
                          <SelectItem
                            key={course.id}
                            value={course.id.toString()}
                          >
                            {course.shortname}
                          </SelectItem>
                        ))}
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
          </CardContent>
          <CardFooter>
            <Button type="submit" className="w-full" disabled={isSubmitting}>
              {isSubmitting ? "Enviando..." : "Enviar Cadastro"}
            </Button>
          </CardFooter>
        </form>
      </Form>
    </Card>
  );
}
