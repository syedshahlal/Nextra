"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { SharedHeader } from "@/components/shared-header"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Search, FileText, Clock } from "lucide-react"
import Link from "next/link"

interface SearchResult {
  title: string
  description: string
  url: string
  section: string
  version: string
  lastModified: string
}

export default function SearchPage() {
  const [query, setQuery] = useState("")
  const [results, setResults] = useState<SearchResult[]>([])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search)
    const q = urlParams.get("q")
    if (q) {
      setQuery(q)
      performSearch(q)
    }
  }, [])

  const performSearch = async (searchQuery: string) => {
    setLoading(true)

    // Mock search results - in real implementation, this would call your search API
    const mockResults: SearchResult[] = [
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

    // Filter results based on query
    const filteredResults = mockResults.filter(
      (result) =>
        result.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        result.description.toLowerCase().includes(searchQuery.toLowerCase()),
    )

    setTimeout(() => {
      setResults(filteredResults)
      setLoading(false)
    }, 500)
  }

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    if (query.trim()) {
      performSearch(query)
    }
  }

  return (
    <div className="min-h-screen bg-background">
      <SharedHeader currentPath="/search" />

      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold mb-8">Search Documentation</h1>

          {/* Search Form */}
          <form onSubmit={handleSearch} className="mb-8">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-muted-foreground w-5 h-5" />
              <Input
                placeholder="Search documentation..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                className="pl-12 pr-4 py-3 text-lg"
              />
            </div>
          </form>

          {/* Search Results */}
          {loading ? (
            <div className="text-center py-8">
              <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600 mx-auto"></div>
              <p className="mt-4 text-muted-foreground">Searching...</p>
            </div>
          ) : results.length > 0 ? (
            <div className="space-y-4">
              <p className="text-muted-foreground">
                Found {results.length} result{results.length !== 1 ? "s" : ""} for "{query}"
              </p>

              {results.map((result, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between mb-2">
                      <Link href={result.url} className="hover:text-blue-600 transition-colors">
                        <h3 className="text-xl font-semibold">{result.title}</h3>
                      </Link>
                      <div className="flex items-center space-x-2">
                        <Badge variant="secondary">{result.section}</Badge>
                        <Badge variant="outline">{result.version}</Badge>
                      </div>
                    </div>

                    <p className="text-muted-foreground mb-3">{result.description}</p>

                    <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                      <div className="flex items-center space-x-1">
                        <FileText className="w-4 h-4" />
                        <span>{result.url}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Clock className="w-4 h-4" />
                        <span>Updated {result.lastModified}</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          ) : query && !loading ? (
            <div className="text-center py-8">
              <p className="text-muted-foreground">No results found for "{query}"</p>
              <p className="text-sm text-muted-foreground mt-2">Try different keywords or check the spelling</p>
            </div>
          ) : null}
        </div>
      </div>
    </div>
  )
}
