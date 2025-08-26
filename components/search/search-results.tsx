import { memo } from "react"
import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { FileText, Clock } from "lucide-react"
import { LoadingSpinner } from "@/components/ui/loading-spinner"
import type { SearchResult } from "@/lib/types"

interface SearchResultsProps {
  results: SearchResult[]
  query: string
  isLoading: boolean
  stats: {
    totalResults: number
    hasResults: boolean
    isEmpty: boolean
  }
}

export const SearchResults = memo<SearchResultsProps>(({ results, query, isLoading, stats }) => {
  if (isLoading) {
    return <LoadingSpinner className="py-16" />
  }

  if (stats.isEmpty) {
    return (
      <div className="text-center py-8">
        <p className="text-muted-foreground">No results found for "{query}"</p>
        <p className="text-sm text-muted-foreground mt-2">Try different keywords or check the spelling</p>
      </div>
    )
  }

  if (!stats.hasResults && !query) {
    return null
  }

  return (
    <div className="space-y-4">
      <p className="text-muted-foreground">
        Found {stats.totalResults} result{stats.totalResults !== 1 ? "s" : ""} for "{query}"
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
  )
})

SearchResults.displayName = "SearchResults"
