"use client"

import { useState, useEffect } from "react"
import { getDashboard } from "@/app/actions/lead-actions"
import type { Dashboard } from "@/types/dashboard/model"

interface UseDashboardDataReturn {
  data: Dashboard[]
  loading: boolean
  error: string | null
  refetch: () => Promise<void>
}

export function useDashboardData(): UseDashboardDataReturn {
  const [data, setData] = useState<Dashboard[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  const fetchData = async () => {
    try {
      setLoading(true)
      setError(null)
      const response = await getDashboard()
      setData(response.responsedata || [])
    } catch (err) {
      console.error("Error loading dashboard data:", err)
      setError("Erro ao carregar dados do dashboard")
      setData([])
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchData()
  }, [])

  return {
    data,
    loading,
    error,
    refetch: fetchData,
  }
}
