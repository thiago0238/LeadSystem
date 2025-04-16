import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"
import type { ReadonlyHeaders } from "next/dist/server/web/spec-extension/adapters/headers"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function getClientIp(headers: ReadonlyHeaders): string | null {
  // Try to get IP from various headers
  const forwardedFor = headers.get("x-forwarded-for")
  if (forwardedFor) {
    // x-forwarded-for can contain multiple IPs, the first one is the client
    return forwardedFor.split(",")[0].trim()
  }

  const realIp = headers.get("x-real-ip")
  if (realIp) {
    return realIp
  }

  // If no IP found in headers
  return null
}

export function formatDate(date: Date): string {
  return new Intl.DateTimeFormat("pt-BR", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  }).format(date)
}

