"use client"

import { useState, useEffect, useCallback } from "react"
import type { PlatformStats } from "@/lib/types"
import { INITIAL_STATS } from "@/lib/config"

export function usePlatformStats() {
  const [stats, setStats] = useState<PlatformStats>(INITIAL_STATS)
  const [isLoading, setIsLoading] = useState(false)

  const updateStats = useCallback(() => {
    setStats((prev) => ({
      models: prev.models + Math.floor(Math.random() * 3),
      computeHours: prev.computeHours + Math.floor(Math.random() * 100),
      apiCalls: prev.apiCalls + Math.floor(Math.random() * 50),
      users: prev.users + Math.floor(Math.random() * 2),
    }))
  }, [])

  useEffect(() => {
    const interval = setInterval(updateStats, 5000)
    return () => clearInterval(interval)
  }, [updateStats])

  const refreshStats = useCallback(async () => {
    setIsLoading(true)
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000))
    updateStats()
    setIsLoading(false)
  }, [updateStats])

  return { stats, isLoading, refreshStats }
}
