"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Slider } from "@/components/ui/slider"
import { Badge } from "@/components/ui/badge"
import { Filter, RotateCcw } from "lucide-react"
import { Button } from "@/components/ui/button"

interface FiltersProps {
  quizzes: string[]
  categories: string[]
  selectedQuiz: string
  selectedCategory: string
  selectedStatuses: string[]
  minStudentCount: number
  maxStudentCount: number
  currentMinStudent: number
  onQuizChange: (value: string) => void
  onCategoryChange: (value: string) => void
  onStatusToggle: (status: string) => void
  onMinStudentChange: (value: number) => void
  onReset: () => void
}

const statusOptions = ["ACERTO TOTAL", "ERRO TOTAL", "ACERTO PARCIAL"]

export function Filters({
  quizzes,
  categories,
  selectedQuiz,
  selectedCategory,
  selectedStatuses,
  minStudentCount,
  maxStudentCount,
  currentMinStudent,
  onQuizChange,
  onCategoryChange,
  onStatusToggle,
  onMinStudentChange,
  onReset,
}: FiltersProps) {
  return (
    <Card className="bg-card border-border">
      <CardHeader className="pb-4">
        <div className="flex items-center justify-between">
          <CardTitle className="text-foreground flex items-center gap-2">
            <Filter className="h-5 w-5" />
            Filtros de Análise
          </CardTitle>
          <Button variant="ghost" size="sm" onClick={onReset} className="h-8 gap-1">
            <RotateCcw className="h-3 w-3" />
            Resetar
          </Button>
        </div>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          <div className="space-y-2">
            <Label htmlFor="quiz" className="text-sm font-medium">
              Quiz
            </Label>
            <Select value={selectedQuiz} onValueChange={onQuizChange}>
              <SelectTrigger id="quiz">
                <SelectValue placeholder="Selecionar quiz" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="Todos">Todos os Quizzes</SelectItem>
                {quizzes.map((quiz) => (
                  <SelectItem key={quiz} value={quiz}>
                    {quiz}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="category" className="text-sm font-medium">
              Categoria
            </Label>
            <Select value={selectedCategory} onValueChange={onCategoryChange}>
              <SelectTrigger id="category">
                <SelectValue placeholder="Selecionar categoria" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="Todas">Todas as Categorias</SelectItem>
                {categories.map((cat) => (
                  <SelectItem key={cat} value={cat}>
                    {cat}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label className="text-sm font-medium">Status</Label>
            <div className="flex flex-wrap gap-2">
              {statusOptions.map((status) => (
                <Badge
                  key={status}
                  variant={selectedStatuses.includes(status) ? "default" : "outline"}
                  className={`cursor-pointer transition-colors ${
                    selectedStatuses.includes(status)
                      ? status === "ACERTO TOTAL"
                        ? "bg-emerald-500 hover:bg-emerald-600 text-white"
                        : status === "ERRO TOTAL"
                          ? "bg-red-500 hover:bg-red-600 text-white"
                          : "bg-amber-500 hover:bg-amber-600 text-white"
                      : "hover:bg-muted"
                  }`}
                  onClick={() => onStatusToggle(status)}
                >
                  {status.replace(" TOTAL", "").replace(" PARCIAL", " Parc.")}
                </Badge>
              ))}
            </div>
          </div>

          <div className="space-y-2">
            <Label className="text-sm font-medium">
              Mínimo de Alunos: <span className="text-primary">{currentMinStudent}</span>
            </Label>
            <Slider
              value={[currentMinStudent]}
              onValueChange={(value) => onMinStudentChange(value[0])}
              min={minStudentCount}
              max={maxStudentCount}
              step={1}
              className="mt-2"
            />
            <div className="flex justify-between text-xs text-muted-foreground">
              <span>{minStudentCount}</span>
              <span>{maxStudentCount}</span>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
