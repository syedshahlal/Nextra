"use client"

import { useState, useCallback, useMemo } from "react"
import type { SearchResult } from "@/lib/types"

const MOCK_RESULTS: SearchResult[] = [
  {
    title: "Quick Start Guide",
    description: "Get up and running with GRA Core Platform in 5 minutes",
    url: "/docs/intro/quick-start",
    section: "Introduction",
    version: "v2.4.0",
    lastModified: "2024-01-15",
  },
  {
    title: "API Authentication",
    description: "Learn how to authenticate with the GRA Core Platform API",
    url: "/docs/api/authentication",
    section: "API Documentation",
    version: "v2.4.0",
    lastModified: "2024-01-10",
  },
  {
    title: "Model Deployment",
    description: "Deploy and manage machine learning models",
    url: "/docs/features/deployment",
    section: "Features",
    version: "v2.4.0",
    lastModified: "2024-01-12",
  },
]

export function useSearch() {
  const [query, setQuery] = useState("")
  const [results, setResults] = useState<SearchResult[]>([])
  const [isLoading, setIsLoading] = useState(false)

  const performSearch = useCallback(async (searchQuery: string) => {
    if (!searchQuery.trim()) {
      setResults([])
      return
    }

    setIsLoading(true)

    // Simulate API delay
    await new Promise((resolve) => setTimeout(resolve, 300))

    const filteredResults = MOCK_RESULTS.filter(
      (result) =>
        result.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        result.description.toLowerCase().includes(searchQuery.toLowerCase()),
    )

    setResults(filteredResults)
    setIsLoading(false)
  }, [])

  const searchStats = useMemo(
    () => ({
      totalResults: results.length,
      hasResults: results.length > 0,
      isEmpty: !isLoading && query.trim() !== "" && results.length === 0,
    }),
    [results.length, isLoading, query],
  )

  return {
    query,
    setQuery,
    results,
    isLoading,
    performSearch,
    searchStats,
  }
}
