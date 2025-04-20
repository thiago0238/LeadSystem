// "use client";

// import { useState, useEffect } from "react";
// import { useForm } from "react-hook-form";
// import { zodResolver } from "@hookform/resolvers/zod";
// import * as z from "zod";
// import * as LabelPrimitive from "@radix-ui/react-label";
// import { Button } from "@/components/ui/button";
// import { Input } from "@/components/ui/input";
// import { toast } from "@/components/ui/use-toast";
// import { submitLead } from "@/app/actions/lead-actions";
// import { RadixSelect } from "./radix-select-example";

// const formSchema = z.object({
//   name: z.string().min(2, { message: "Nome deve ter pelo menos 2 caracteres" }),
//   email: z.string().email({ message: "Email inválido" }),
//   primaryCourseId: z.string({ required_error: "Selecione um curso principal" }),
//   secondaryCourseId: z.string().optional(),
// });

// type Course = {
//   id: number;
//   name: string;
// };

// export default function PublicFormWithRadix() {
//   const [courses, setCourses] = useState<Course[]>([]);
//   const [isSubmitting, setIsSubmitting] = useState(false);

//   const form = useForm<z.infer<typeof formSchema>>({
//     resolver: zodResolver(formSchema),
//     defaultValues: {
//       name: "",
//       email: "",
//       primaryCourseId: "",
//       secondaryCourseId: "",
//     },
//   });

//   useEffect(() => {
//     const fetchCourses = async () => {
//       try {
//         const response = await fetch("/api/courses");
//         const data = await response.json();
//         setCourses(data);
//       } catch (error) {
//         console.error("Erro ao carregar cursos:", error);
//         toast({
//           title: "Erro",
//           description: "Não foi possível carregar a lista de cursos.",
//           variant: "destructive",
//         });
//       }
//     };

//     fetchCourses();
//   }, []);

//   const onSubmit = async (values: z.infer<typeof formSchema>) => {
//     setIsSubmitting(true);
//     try {
//       const result = await submitLead({
//         name: values.name,
//         email: values.email,
//         primaryCourseId: Number.parseInt(values.primaryCourseId),
//         secondaryCourseId: values.secondaryCourseId
//           ? Number.parseInt(values.secondaryCourseId)
//           : undefined,
//       });

//       if (result.success) {
//         toast({
//           title: "Cadastro realizado com sucesso!",
//           description:
//             "Obrigado pelo seu interesse. Entraremos em contato em breve.",
//         });
//         form.reset();
//       } else {
//         throw new Error(result.error || "Erro ao processar cadastro");
//       }
//     } catch (error) {
//       console.error("Erro ao enviar formulário:", error);
//       toast({
//         title: "Erro no cadastro",
//         description:
//           "Ocorreu um erro ao processar seu cadastro. Por favor, tente novamente.",
//         variant: "destructive",
//       });
//     } finally {
//       setIsSubmitting(false);
//     }
//   };

//   // Converter cursos para o formato esperado pelo RadixSelect
//   const courseOptions = courses.map((course) => ({
//     value: course.id.toString(),
//     label: course.name,
//   }));

//   return (
//     <div className="bg-white p-6 rounded-lg shadow-md">
//       <h2 className="text-xl font-bold mb-4">Formulário de Interesse</h2>
//       <p className="text-gray-600 mb-6">
//         Preencha seus dados para receber informações sobre nossos cursos
//       </p>

//       <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
//         <div className="space-y-2">
//           <LabelPrimitive.Root
//             htmlFor="name"
//             className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
//           >
//             Nome Completo
//           </LabelPrimitive.Root>
//           <Input
//             id="name"
//             placeholder="Digite seu nome completo"
//             {...form.register("name")}
//           />
//           {form.formState.errors.name && (
//             <p className="text-sm text-red-500">
//               {form.formState.errors.name.message}
//             </p>
//           )}
//         </div>

//         <div className="space-y-2">
//           <LabelPrimitive.Root
//             htmlFor="email"
//             className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
//           >
//             Email
//           </LabelPrimitive.Root>
//           <Input
//             id="email"
//             type="email"
//             placeholder="seu@email.com"
//             {...form.register("email")}
//           />
//           {form.formState.errors.email && (
//             <p className="text-sm text-red-500">
//               {form.formState.errors.email.message}
//             </p>
//           )}
//         </div>

//         <div className="space-y-2">
//           <LabelPrimitive.Root
//             htmlFor="primaryCourseId"
//             className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
//           >
//             Curso Principal
//           </LabelPrimitive.Root>
//           <RadixSelect
//             options={courseOptions}
//             value={form.watch("primaryCourseId")}
//             onValueChange={(value) =>
//               form.setValue("primaryCourseId", value, { shouldValidate: true })
//             }
//             placeholder="Selecione um curso"
//           />
//           {form.formState.errors.primaryCourseId && (
//             <p className="text-sm text-red-500">
//               {form.formState.errors.primaryCourseId.message}
//             </p>
//           )}
//         </div>

//         <div className="space-y-2">
//           <LabelPrimitive.Root
//             htmlFor="secondaryCourseId"
//             className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
//           >
//             Curso Secundário (opcional)
//           </LabelPrimitive.Root>
//           <RadixSelect
//             options={courseOptions}
//             value={form.watch("secondaryCourseId") || ""}
//             onValueChange={(value) =>
//               form.setValue("secondaryCourseId", value, {
//                 shouldValidate: true,
//               })
//             }
//             placeholder="Selecione um curso secundário (opcional)"
//           />
//           {form.formState.errors.secondaryCourseId && (
//             <p className="text-sm text-red-500">
//               {form.formState.errors.secondaryCourseId.message}
//             </p>
//           )}
//         </div>

//         <Button type="submit" className="w-full" disabled={isSubmitting}>
//           {isSubmitting ? "Enviando..." : "Enviar Cadastro"}
//         </Button>
//       </form>
//     </div>
//   );
// }
