"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { CalendarDays, Mail, Building } from "lucide-react"
import { Dashboard } from "@/types/dashboard/model"
import { Input } from "../ui/input"
import { useState } from "react"

type StudentListProps = {
  data: Dashboard[]
}

export function StudentList({ data }: StudentListProps) {
  // Safe data processing
  const [filterUser, setFilterUser] = useState("")
  const safeData = Array.isArray(data) ? data : []

  const formatDate = (timestamp: number) => {
    if (!timestamp) return "Nunca"
    return new Date(timestamp * 1000).toLocaleDateString("pt-BR")
  }

  const getAccessStatus = (lastaccess: number) => {
    if (!lastaccess) return { status: "Nunca acessou", variant: "secondary" as const }

    const now = Math.floor(Date.now() / 1000)
    const daysAgo = Math.floor((now - lastaccess) / (24 * 60 * 60))

    if (daysAgo <= 1) return { status: "Ativo hoje", variant: "default" as const }
    if (daysAgo <= 7) return { status: "Ativo esta semana", variant: "secondary" as const }
    if (daysAgo <= 30) return { status: "Ativo este mês", variant: "outline" as const }
    return { status: "Inativo", variant: "destructive" as const }
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Lista de Estudantes</CardTitle>
        <CardDescription>Informações detalhadas dos estudantes e último acesso</CardDescription>
        <Input placeholder="Buscar estudante..."
        value={filterUser}
        className="mt-2"
        type="text"
        onChange={(e) => setFilterUser(e.target.value)}
        />
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {safeData.filter((student) => {
            return (
              student.fullname.toLowerCase().startsWith(filterUser.toLowerCase()) ||
              student.email.toLowerCase().startsWith(filterUser.toLowerCase())
            )
          }).map((student) => {
            const accessInfo = getAccessStatus(student.lastaccess)
            const courseCount = student.enrolledcourses?.length || 0

            return (
              <div key={student.id} className="flex items-center space-x-4 p-4 border rounded-lg">
                <Avatar>
                  <AvatarImage src={student.profileimageurlsmall || "/placeholder.svg"} alt={student.fullname} />
                  <AvatarFallback>
                    {student.firstname?.[0]}
                    {student.lastname?.[0]}
                  </AvatarFallback>
                </Avatar>

                <div className="flex-1 space-y-1">
                  <div className="flex items-center justify-between">
                    <h4 className="font-semibold">{student.fullname || "Nome não disponível"}</h4>
                    <Badge variant={accessInfo.variant}>{accessInfo.status}</Badge>
                  </div>

                  <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                    <div className="flex items-center space-x-1">
                      <Mail className="h-4 w-4" />
                      <span>{student.email || "Email não disponível"}</span>
                    </div>

                    <div className="flex items-center space-x-1">
                      <Building className="h-4 w-4" />
                      <span>{student.department || "Departamento não informado"}</span>
                    </div>

                    <div className="flex items-center space-x-1">
                      <CalendarDays className="h-4 w-4" />
                      <span>Último acesso: {formatDate(student.lastaccess)}</span>
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">
                      {courseCount} curso{courseCount !== 1 ? "s" : ""} matriculado{courseCount !== 1 ? "s" : ""}
                    </span>

                    {student.roles && student.roles.length > 0 && (
                      <div className="flex space-x-1">
                        {student.roles.map((role, index) => (
                          <Badge key={index} variant="outline" className="text-xs">
                            {role}
                          </Badge>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </CardContent>
    </Card>
  )
}
