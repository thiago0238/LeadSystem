"use client"

import { useState, useMemo } from "react"
import {
  quizData,
  getUniqueQuizzes,
  getUniqueCategories,
  calculateMetrics,
  getBlockData,
  getQuizSummary,
  getTopQuestions,
  getCategoryPerformance,
} from "@/lib/data"
import { MetricsCards } from "@/components/dashboard/metrics-cards"
import { Filters } from "@/components/dashboard/filters"
import { BlockChart } from "@/components/dashboard/block-chart"
import { QuizChart } from "@/components/dashboard/quiz-chart"
import { TopQuestions } from "@/components/dashboard/top-questions"
import { CategoryChart } from "@/components/dashboard/category-chart"
import { DataTable } from "@/components/dashboard/data-table"
import { BarChart3 } from "lucide-react"

export default function Dashboard() {
  const [selectedQuiz, setSelectedQuiz] = useState("Todos")
  const [selectedCategory, setSelectedCategory] = useState("Todas")
  const [selectedStatuses, setSelectedStatuses] = useState(["ACERTO TOTAL", "ERRO TOTAL"])
  const [minStudentCount, setMinStudentCount] = useState(1)

  const quizzes = useMemo(() => getUniqueQuizzes(quizData), [])
  const categories = useMemo(() => getUniqueCategories(quizData), [])

  const minStudent = Math.min(...quizData.map((d) => d.student_count))
  const maxStudent = Math.max(...quizData.map((d) => d.student_count))

  const filteredData = useMemo(() => {
    return quizData.filter((item) => {
      if (selectedQuiz !== "Todos" && item.quiz_name !== selectedQuiz) return false
      if (selectedCategory !== "Todas" && item.categoria_questoes !== selectedCategory) return false
      if (selectedStatuses.length > 0 && !selectedStatuses.includes(item.status)) return false
      if (item.student_count < minStudentCount) return false
      return true
    })
  }, [selectedQuiz, selectedCategory, selectedStatuses, minStudentCount])

  const metrics = useMemo(() => calculateMetrics(filteredData), [filteredData])
  const blockData = useMemo(() => getBlockData(filteredData), [filteredData])
  const quizSummary = useMemo(() => getQuizSummary(filteredData), [filteredData])
  const topErradas = useMemo(() => getTopQuestions(filteredData, "erros"), [filteredData])
  const topAcertadas = useMemo(() => getTopQuestions(filteredData, "acertos"), [filteredData])
  const categoryData = useMemo(() => getCategoryPerformance(filteredData), [filteredData])

  const handleStatusToggle = (status: string) => {
    setSelectedStatuses((prev) => (prev.includes(status) ? prev.filter((s) => s !== status) : [...prev, status]))
  }

  const handleReset = () => {
    setSelectedQuiz("Todos")
    setSelectedCategory("Todas")
    setSelectedStatuses(["ACERTO TOTAL", "ERRO TOTAL"])
    setMinStudentCount(1)
  }

  return (
    <div className="min-h-screen bg-background">
      <header className="border-b border-border bg-card/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary">
              <BarChart3 className="h-5 w-5 text-primary-foreground" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-foreground">Análise de Desempenho</h1>
              <p className="text-sm text-muted-foreground">Dashboard de análise por questão e quiz</p>
            </div>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-6 space-y-6">
        <Filters
          quizzes={quizzes}
          categories={categories}
          selectedQuiz={selectedQuiz}
          selectedCategory={selectedCategory}
          selectedStatuses={selectedStatuses}
          minStudentCount={minStudent}
          maxStudentCount={maxStudent}
          currentMinStudent={minStudentCount}
          onQuizChange={setSelectedQuiz}
          onCategoryChange={setSelectedCategory}
          onStatusToggle={handleStatusToggle}
          onMinStudentChange={setMinStudentCount}
          onReset={handleReset}
        />

        <MetricsCards {...metrics} />

        <div className="grid gap-6 lg:grid-cols-2">
          <BlockChart data={blockData} />
          <QuizChart data={quizSummary} />
        </div>

        <CategoryChart data={categoryData} />

        <TopQuestions topErradas={topErradas} topAcertadas={topAcertadas} />

        <DataTable data={filteredData} />
      </main>

      <footer className="border-t border-border bg-card/50 py-4 mt-8">
        <div className="container mx-auto px-4 text-center text-sm text-muted-foreground">
          Dashboard de Análise de Desempenho • Dados de exemplo baseados na estrutura Python/Streamlit
        </div>
      </footer>
    </div>
  )
}
