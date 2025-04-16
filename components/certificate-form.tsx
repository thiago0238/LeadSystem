"use client"

import { useState } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { toast } from "@/components/ui/use-toast"
import { sendCertificates } from "@/app/actions/certificate-actions"

const byCourseSchema = z.object({
  courseId: z.string({ required_error: "Selecione um curso" }),
})

const byLeadSchema = z.object({
  searchTerm: z.string().min(3, { message: "Digite pelo menos 3 caracteres" }),
})

type Course = {
  id: number
  name: string
}

type CertificateFormProps = {
  courses: Course[]
}

export default function CertificateForm({ courses }: CertificateFormProps) {
  const [isLoading, setIsLoading] = useState(false)
  const [searchResults, setSearchResults] = useState<any[]>([])
  const [selectedLeads, setSelectedLeads] = useState<number[]>([])

  const courseForm = useForm<z.infer<typeof byCourseSchema>>({
    resolver: zodResolver(byCourseSchema),
    defaultValues: {
      courseId: "",
    },
  })

  const leadForm = useForm<z.infer<typeof byLeadSchema>>({
    resolver: zodResolver(byLeadSchema),
    defaultValues: {
      searchTerm: "",
    },
  })

  const onSubmitByCourse = async (values: z.infer<typeof byCourseSchema>) => {
    setIsLoading(true)
    try {
      const result = await sendCertificates({
        type: "course",
        courseId: Number.parseInt(values.courseId),
      })

      if (result.success) {
        toast({
          title: "Certificados enviados com sucesso!",
          description: `${result.count} certificados foram enviados.`,
        })
        courseForm.reset()
      } else {
        throw new Error(result.error || "Erro ao enviar certificados")
      }
    } catch (error) {
      console.error("Erro ao enviar certificados:", error)
      toast({
        title: "Erro no envio",
        description: "Ocorreu um erro ao enviar os certificados. Por favor, tente novamente.",
        variant: "destructive",
      })
    } finally {
      setIsLoading(false)
    }
  }

  const onSubmitByLead = async (values: z.infer<typeof byLeadSchema>) => {
    setIsLoading(true)
    try {
      // First search for leads
      const response = await fetch(`/api/leads/search?q=${encodeURIComponent(values.searchTerm)}`)
      const data = await response.json()

      if (data.error) {
        throw new Error(data.error)
      }

      setSearchResults(data)
      setIsLoading(false)
    } catch (error) {
      console.error("Erro ao buscar leads:", error)
      toast({
        title: "Erro na busca",
        description: "Ocorreu um erro ao buscar os leads. Por favor, tente novamente.",
        variant: "destructive",
      })
      setIsLoading(false)
    }
  }

  const toggleLeadSelection = (leadId: number) => {
    setSelectedLeads((prev) => (prev.includes(leadId) ? prev.filter((id) => id !== leadId) : [...prev, leadId]))
  }

  const sendSelectedCertificates = async () => {
    if (selectedLeads.length === 0) {
      toast({
        title: "Nenhum lead selecionado",
        description: "Selecione pelo menos um lead para enviar certificados.",
        variant: "destructive",
      })
      return
    }

    setIsLoading(true)
    try {
      const result = await sendCertificates({
        type: "leads",
        leadIds: selectedLeads,
      })

      if (result.success) {
        toast({
          title: "Certificados enviados com sucesso!",
          description: `${result.count} certificados foram enviados.`,
        })
        setSelectedLeads([])
        setSearchResults([])
        leadForm.reset()
      } else {
        throw new Error(result.error || "Erro ao enviar certificados")
      }
    } catch (error) {
      console.error("Erro ao enviar certificados:", error)
      toast({
        title: "Erro no envio",
        description: "Ocorreu um erro ao enviar os certificados. Por favor, tente novamente.",
        variant: "destructive",
      })
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Envio de Certificados</CardTitle>
        <CardDescription>Envie certificados para alunos por curso ou individualmente</CardDescription>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="course">
          <TabsList className="mb-4">
            <TabsTrigger value="course">Por Curso</TabsTrigger>
            <TabsTrigger value="lead">Por Aluno</TabsTrigger>
          </TabsList>

          <TabsContent value="course">
            <Form {...courseForm}>
              <form onSubmit={courseForm.handleSubmit(onSubmitByCourse)} className="space-y-4">
                <FormField
                  control={courseForm.control}
                  name="courseId"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Curso</FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Selecione um curso" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          {courses.map((course) => (
                            <SelectItem key={course.id} value={course.id.toString()}>
                              {course.name}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button type="submit" disabled={isLoading}>
                  {isLoading ? "Enviando..." : "Enviar Certificados"}
                </Button>
              </form>
            </Form>
          </TabsContent>

          <TabsContent value="lead">
            <Form {...leadForm}>
              <form onSubmit={leadForm.handleSubmit(onSubmitByLead)} className="space-y-4">
                <FormField
                  control={leadForm.control}
                  name="searchTerm"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Buscar por Nome ou Email</FormLabel>
                      <FormControl>
                        <Input placeholder="Digite o nome ou email do aluno" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button type="submit" disabled={isLoading}>
                  {isLoading ? "Buscando..." : "Buscar Alunos"}
                </Button>
              </form>
            </Form>

            {searchResults.length > 0 && (
              <div className="mt-6">
                <h3 className="text-lg font-medium mb-2">Resultados da Busca</h3>
                <div className="border rounded-md">
                  <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                      <tr>
                        <th
                          scope="col"
                          className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                        >
                          Selecionar
                        </th>
                        <th
                          scope="col"
                          className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                        >
                          Nome
                        </th>
                        <th
                          scope="col"
                          className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                        >
                          Email
                        </th>
                        <th
                          scope="col"
                          className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                        >
                          Curso Principal
                        </th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                      {searchResults.map((lead) => (
                        <tr key={lead.id}>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <input
                              type="checkbox"
                              checked={selectedLeads.includes(lead.id)}
                              onChange={() => toggleLeadSelection(lead.id)}
                              className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                            />
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{lead.name}</td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{lead.email}</td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                            {lead.primaryCourse.name}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                <div className="mt-4">
                  <Button onClick={sendSelectedCertificates} disabled={isLoading || selectedLeads.length === 0}>
                    {isLoading ? "Enviando..." : `Enviar para ${selectedLeads.length} selecionado(s)`}
                  </Button>
                </div>
              </div>
            )}
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  )
}

