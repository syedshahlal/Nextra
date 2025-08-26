"use client"

import type React from "react"

import { memo } from "react"
import { Input } from "@/components/ui/input"
import { Search } from "lucide-react"

interface SearchFormProps {
  query: string
  onQueryChange: (query: string) => void
  onSearch: (query: string) => void
  isLoading: boolean
}

export const SearchForm = memo<SearchFormProps>(({ query, onQueryChange, onSearch, isLoading }) => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (query.trim()) {
      onSearch(query)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="mb-8">
      <div className="relative">
        <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-muted-foreground w-5 h-5" />
        <Input
          placeholder="Search documentation..."
          value={query}
          onChange={(e) => onQueryChange(e.target.value)}
          className="pl-12 pr-4 py-3 text-lg"
          disabled={isLoading}
        />
      </div>
    </form>
  )
})

SearchForm.displayName = "SearchForm"
