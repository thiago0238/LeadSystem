"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Search, ArrowUpDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import type { QuizQuestionStat } from "@/lib/data"

interface DataTableProps {
  data: QuizQuestionStat[]
}

export function DataTable({ data }: DataTableProps) {
  const [search, setSearch] = useState("")
  const [sortField, setSortField] = useState<"student_count" | "quiz_name">("student_count")
  const [sortOrder, setSortOrder] = useState<"asc" | "desc">("desc")

  const filteredData = data
    .filter(
      (item) =>
        item.quiz_name.toLowerCase().includes(search.toLowerCase()) ||
        item.categoria_questoes.toLowerCase().includes(search.toLowerCase()) ||
        item.questionid.toString().startsWith(search),
    )
    .sort((a, b) => {
      if (sortField === "student_count") {
        return sortOrder === "desc" ? b.student_count - a.student_count : a.student_count - b.student_count
      }
      return sortOrder === "desc" ? b.quiz_name.localeCompare(a.quiz_name) : a.quiz_name.localeCompare(b.quiz_name)
    })

  const toggleSort = (field: "student_count" | "quiz_name") => {
    if (sortField === field) {
      setSortOrder(sortOrder === "desc" ? "asc" : "desc")
    } else {
      setSortField(field)
      setSortOrder("desc")
    }
  }

  return (
    <Card className="bg-card border-border">
      <CardHeader>
        <CardTitle className="text-foreground">Tabela Detalhada</CardTitle>
        <CardDescription>Dados completos com filtros e ordenação</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="mb-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <Input
              placeholder="Buscar por quiz, categoria ou questão..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="pl-10"
            />
          </div>
        </div>

        <div className="rounded-md border border-border overflow-hidden">
          <div className="max-h-[400px] overflow-auto">
            <Table>
              <TableHeader className="sticky top-0 bg-muted">
                <TableRow>
                  <TableHead>
                    <Button
                      variant="ghost"
                      onClick={() => toggleSort("quiz_name")}
                      className="h-auto p-0 font-semibold hover:bg-transparent"
                    >
                      Quiz
                      <ArrowUpDown className="ml-2 h-3 w-3" />
                    </Button>
                  </TableHead>
                  <TableHead>Categoria</TableHead>
                  <TableHead>Questão</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead className="text-right">
                    <Button
                      variant="ghost"
                      onClick={() => toggleSort("student_count")}
                      className="h-auto p-0 font-semibold hover:bg-transparent"
                    >
                      Alunos
                      <ArrowUpDown className="ml-2 h-3 w-3" />
                    </Button>
                  </TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredData.slice(0, 100).map((item, index) => (
                  <TableRow key={`${item.quizid}-${item.questionid}-${item.status}-${index}`}>
                    <TableCell className="font-medium">{item.quiz_name}</TableCell>
                    <TableCell>
                      <Badge variant="outline" className="font-normal">
                        {item.categoria_questoes}
                      </Badge>
                    </TableCell>
                    <TableCell>Q{item.questionid}</TableCell>
                    <TableCell>
                      <Badge
                        className={
                          item.status === "ACERTO TOTAL"
                            ? "bg-emerald-500/20 text-emerald-500 hover:bg-emerald-500/30"
                            : item.status === "ERRO TOTAL"
                              ? "bg-red-500/20 text-red-500 hover:bg-red-500/30"
                              : "bg-amber-500/20 text-amber-500 hover:bg-amber-500/30"
                        }
                      >
                        {item.status}
                      </Badge>
                    </TableCell>
                    <TableCell className="text-right font-mono">{item.student_count.toLocaleString("pt-BR")}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </div>

        <p className="mt-2 text-xs text-muted-foreground">
          Mostrando {Math.min(filteredData.length, 100)} de {filteredData.length} registros
        </p>
      </CardContent>
    </Card>
  )
}
