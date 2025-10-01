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
import { submitLead } from "@/app/actions/lead-actions";
import { Check, X } from "lucide-react";
import { toast } from "@/hooks/use-toast";

const formSchema = z.object({
  firstname: z
    .string()
    .min(2, { message: "Nome deve ter pelo menos 2 caracteres" }),
  lastname: z
    .string()
    .min(2, { message: "Sobrenome deve ter pelo menos 2 caracteres" }),
  password: z
    .string()
    .min(6, { message: "Senha deve ter pelo menos 6 caracteres" })
    .regex(/[a-z]/, "A senha deve conter pelo menos uma letra minúscula")
    .regex(/[A-Z]/, "A senha deve conter pelo menos uma letra maiúscula")
    .regex(/[0-9]/, "A senha deve conter pelo menos um número")
    .regex(
      /[^a-zA-Z0-9]/,
      "A senha deve conter pelo menos um caractere especial"
    ),
  confirmPassword: z
    .string()
    .min(6, {
      message: "Confirmação de senha deve ter pelo menos 6 caracteres",
    })
    .regex(/[a-z]/, "A senha deve conter pelo menos uma letra minúscula")
    .regex(/[A-Z]/, "A senha deve conter pelo menos uma letra maiúscula")
    .regex(/[0-9]/, "A senha deve conter pelo menos um número")
    .regex(
      /[^a-zA-Z0-9]/,
      "A senha deve conter pelo menos um caractere especial"
    ),
  email: z.string().email({ message: "Email inválido" }),
  primaryCourseId: z.string({ required_error: "Selecione um curso principal" }),
});

type Course = {
  id: number;
  fullname: string;
};

export default function PublicForm() {
  const [courses, setCourses] = useState<Course[]>([]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isPasswordFocused, setIsPasswordFocused] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstname: "",
      lastname: "",
      email: "",
      password: "",
      confirmPassword: "",
      primaryCourseId: "",
    },
  });

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const response = await fetch("/api/moodle/courses");
        const data = await response.json();
        setCourses(data);
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
    try {
      const result = await submitLead({
        firstname: values.firstname,
        lastname: values.lastname,
        password: values.password,
        email: values.email,
        primaryCourseId: Number.parseInt(values.primaryCourseId),
      });
      console.log("Resultado do envio:", result);
      if (!result.success) {
        throw new Error(result.error || "Erro desconhecido");
      }
        toast({
          title: "Cadastro realizado com sucesso!",
          description:
            "Obrigado pelo seu interesse. ",
        });
        // form.reset();
      
    } catch (error) {
      console.error("Erro ao enviar formulário:", error);
      toast({
        title: "Erro no cadastro",
        description: error instanceof Error ? error.message : "Erro desconhecido",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };
  const passwordValue = form.watch("password");
  const confirmPasswordValue = form.watch("confirmPassword");

  function getPasswordValidationStatus(password: string) {
    return {
      temMinuscula: /[a-z]/.test(password),
      temMaiuscula: /[A-Z]/.test(password),
      temNumero: /[0-9]/.test(password),
      temEspecial: /[^a-zA-Z0-9]/.test(password),
      tamanhoMinimo: password.length >= 8,
    };
  }
  function isPasswordValid() {
    if (!passwordValue || !confirmPasswordValue) return;
    return passwordValue === confirmPasswordValue;
  }

  return (
    <div className="Segoe UI tahoma Geneva Verdana sans-serif ">
      <img
        src="https://moodleapoio.pucgoias.edu.br/InscricaoApoio/img/technology.jpg"
        alt="Background Image"
        className="absolute inset-0  w-full  object-cover "
      />
    <Card className="relative bg-white shadow-lg p-6 overflow-auto max-h-[100vh] rounded-lg">
      <CardHeader>
        <CardTitle className="text-[#004a6e] margin-bottom-8 font-bold">Formulário de Interesse</CardTitle>
        <CardDescription>
          Preencha seus dados para inscrever-se no curso.
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
                  <FormLabel className="text-[#004a6e] margin-bottom-8 font-bold">Nome </FormLabel>
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
                  <FormLabel className="text-[#004a6e] margin-bottom-8 font-bold">Sobrenome</FormLabel>
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
                  <FormLabel className="text-[#004a6e] margin-bottom-8 font-bold">Email</FormLabel>
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
              render={({ field }) => {
                const status = getPasswordValidationStatus(passwordValue || "");
                const showValidation =
                  isPasswordFocused || passwordValue.length > 0;

                return (
                  <FormItem>
                    <FormLabel className="text-[#004a6e] margin-bottom-8 font-bold">Senha</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="*****"
                        type="password"
                        {...field}
                        onFocus={() => setIsPasswordFocused(true)}
                        onBlur={() => setIsPasswordFocused(false)}
                      />
                    </FormControl>
                    {showValidation && (
                      <div className="text-xs mt-2 space-y-1 text-gray-500">
                        <p
                          className={
                            status.temMinuscula
                              ? "text-green-600"
                              : "text-red-500"
                          }
                        >
                          • Pelo menos uma letra minúscula
                        </p>
                        <p
                          className={
                            status.temMaiuscula
                              ? "text-green-600"
                              : "text-red-500"
                          }
                        >
                          • Pelo menos uma letra maiúscula
                        </p>
                        <p
                          className={
                            status.temNumero ? "text-green-600" : "text-red-500"
                          }
                        >
                          • Pelo menos um número
                        </p>
                        <p
                          className={
                            status.temEspecial
                              ? "text-green-600"
                              : "text-red-500"
                          }
                        >
                          • Pelo menos um caractere especial
                        </p>
                        <p
                          className={
                            status.tamanhoMinimo
                              ? "text-green-600"
                              : "text-red-500"
                          }
                        >
                          • Pelo menos 6 caracteres
                        </p>
                      </div>
                    )}
                    <FormMessage />
                  </FormItem>
                );
              }}
            />
            <FormField
              control={form.control}
              name="confirmPassword"
              render={({ field }) => {
                const showValidation =
                   confirmPasswordValue.length > 0;

                return (
                  <FormItem>
                    <FormLabel className="text-[#004a6e] mb-8 font-bold">Confirme a Senha</FormLabel>
                    <FormControl>
                      <Input placeholder="*****" type="password" {...field} />
                    </FormControl>

                    {showValidation &&( isPasswordValid() ? (
                      <div className="text-xs mt-2 space-y-1 text-gray-500">
                        <Check className="h-4 w-4 text-green-600" />
                        <span className="text-green-600">Senhas coincidem</span>
                      </div>
                    ) : (
                      <div className="text-xs mt-2 space-y-1 text-gray-500">
                        <X className="h-4 w-4 text-red-500" />
                        <span className="text-red-500">
                          Senhas não coincidem
                        </span>
                      </div>
                    ))}
                    <FormMessage />
                  </FormItem>
                );
              }}
            />
            <FormField
              control={form.control}
              name="primaryCourseId"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-[#004a6e] margin-bottom-8 font-bold">Curso Principal</FormLabel>
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
                            {course.fullname}
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
    </div>
  );
}
