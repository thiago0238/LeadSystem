"use client"

import { useEffect, useState } from "react"
import { usePathname } from "next/navigation"

export function LoadingIndicator() {
  const [isLoading, setIsLoading] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    setIsLoading(true)
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 100) // Pequeno delay para evitar flash

    return () => clearTimeout(timer)
  }, [pathname])

  if (!isLoading) return null

  return (
    <div className="fixed top-0 left-0 right-0 z-50 h-1 bg-gray-200">
      <div className="h-full bg-blue-600 animate-pulse" />
    </div>
  )
}
