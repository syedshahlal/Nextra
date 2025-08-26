import type React from "react"
export interface PlatformStats {
  models: number
  computeHours: number
  apiCalls: number
  users: number
}

export interface StatItem {
  label: string
  value: string
  change: string
  icon: React.ComponentType<{ className?: string }>
  color: string
}

export interface DocumentationSection {
  title: string
  description: string
  icon: React.ComponentType<{ className?: string }>
  href: string
  color: string
  features: string[]
  folder: string
}

export interface Feature {
  icon: React.ComponentType<{ className?: string }>
  title: string
  description: string
  status: "implemented" | "in-progress" | "planned"
  demo?: string
}

export interface SearchResult {
  title: string
  description: string
  url: string
  section: string
  version: string
  lastModified: string
}

export interface ShowcaseItem {
  id: string
  title: string
  description: string
  preview: string
  features: string[]
}

export interface Version {
  version: string
  label: string
  isLatest: boolean
  releaseDate: string
}
