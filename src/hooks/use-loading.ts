"use client"

import { useState, useCallback } from "react"

interface UseLoadingReturn {
  isLoading: boolean
  startLoading: () => void
  stopLoading: () => void
  withLoading: <T>(asyncFn: () => Promise<T>) => Promise<T>
}

export function useLoading(initialState = false): UseLoadingReturn {
  const [isLoading, setIsLoading] = useState(initialState)

  const startLoading = useCallback(() => {
    setIsLoading(true)
  }, [])

  const stopLoading = useCallback(() => {
    setIsLoading(false)
  }, [])

  const withLoading = useCallback(async (asyncFn: () => Promise<any>): Promise<any> => {
    try {
      setIsLoading(true)
      const result = await asyncFn()
      return result
    } finally {
      setIsLoading(false)
    }
  }, [])

  return {
    isLoading,
    startLoading,
    stopLoading,
    withLoading,
  }
}
