"use client"

import { useEffect, Suspense } from "react"
import { SharedHeader } from "@/components/shared-header"
import { SearchForm } from "@/components/search/search-form"
import { SearchResults } from "@/components/search/search-results"
import { useSearch } from "@/hooks/use-search"
import { LoadingSpinner } from "@/components/ui/loading-spinner"

export default function SearchPage() {
  const { query, setQuery, results, isLoading, performSearch, searchStats } = useSearch()

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search)
    const q = urlParams.get("q")
    if (q) {
      setQuery(q)
      performSearch(q)
    }
  }, [setQuery, performSearch])

  return (
    <div className="min-h-screen bg-background">
      <SharedHeader currentPath="/search" />

      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold mb-8">Search Documentation</h1>

          <SearchForm query={query} onQueryChange={setQuery} onSearch={performSearch} isLoading={isLoading} />

          <Suspense fallback={<LoadingSpinner />}>
            <SearchResults results={results} query={query} isLoading={isLoading} stats={searchStats} />
          </Suspense>
        </div>
      </div>
    </div>
  )
}
