"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Badge } from "@/components/ui/badge"
import { Search, ChevronDown, Sun, Moon, Monitor } from "lucide-react"
import { useTheme } from "next-themes"
import Link from "next/link"

interface Version {
  version: string
  label: string
  isLatest: boolean
  releaseDate: string
}

interface SharedHeaderProps {
  currentPath?: string
}

export function SharedHeader({ currentPath = "/" }: SharedHeaderProps) {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedVersion, setSelectedVersion] = useState("v2.4.0")

  const versions: Version[] = [
    { version: "v2.4.0", label: "v2.4.0 (Latest)", isLatest: true, releaseDate: "2024-01-15" },
    { version: "v2.3.2", label: "v2.3.2", isLatest: false, releaseDate: "2023-12-10" },
    { version: "v2.3.1", label: "v2.3.1", isLatest: false, releaseDate: "2023-11-20" },
    { version: "v2.3.0", label: "v2.3.0", isLatest: false, releaseDate: "2023-10-15" },
    { version: "v2.2.5", label: "v2.2.5", isLatest: false, releaseDate: "2023-09-30" },
  ]

  useEffect(() => {
    setMounted(true)
  }, [])

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    if (searchQuery.trim()) {
      // Integrate with Nextra search
      window.location.href = `/search?q=${encodeURIComponent(searchQuery)}`
    }
  }

  const handleVersionChange = (version: string) => {
    setSelectedVersion(version)
    // Update URL to include version parameter
    const url = new URL(window.location.href)
    url.searchParams.set("version", version)
    window.history.pushState({}, "", url.toString())
  }

  const getThemeIcon = () => {
    if (!mounted) return <Monitor className="w-4 h-4" />
    switch (theme) {
      case "light":
        return <Sun className="w-4 h-4" />
      case "dark":
        return <Moon className="w-4 h-4" />
      default:
        return <Monitor className="w-4 h-4" />
    }
  }

  return (
    <header className="border-b bg-background/80 backdrop-blur-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">GCP</span>
            </div>
            <span className="text-xl font-bold">GRA Core Platform</span>
          </Link>

          {/* Right side controls */}
          <div className="flex items-center space-x-4">
            {/* Search Bar */}
            <form onSubmit={handleSearch} className="relative hidden md:block">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
              <Input
                placeholder="Search documentation..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 pr-4 w-64 bg-background/50"
              />
            </form>

            {/* Version Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" className="flex items-center space-x-2 bg-transparent">
                  <span className="hidden sm:inline">{selectedVersion}</span>
                  {versions.find((v) => v.version === selectedVersion)?.isLatest && (
                    <Badge variant="secondary" className="text-xs">
                      Latest
                    </Badge>
                  )}
                  <ChevronDown className="w-4 h-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-56">
                {versions.map((version) => (
                  <DropdownMenuItem
                    key={version.version}
                    onClick={() => handleVersionChange(version.version)}
                    className="flex items-center justify-between"
                  >
                    <div className="flex flex-col">
                      <span className="font-medium">{version.version}</span>
                      <span className="text-xs text-muted-foreground">{version.releaseDate}</span>
                    </div>
                    {version.isLatest && (
                      <Badge variant="secondary" className="text-xs">
                        Latest
                      </Badge>
                    )}
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>

            {/* Theme Toggle */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" size="icon">
                  {getThemeIcon()}
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem onClick={() => setTheme("light")}>
                  <Sun className="w-4 h-4 mr-2" />
                  Light
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => setTheme("dark")}>
                  <Moon className="w-4 h-4 mr-2" />
                  Dark
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => setTheme("system")}>
                  <Monitor className="w-4 h-4 mr-2" />
                  System
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            {/* Showcase Link */}
            <Link href="/showcase" className="text-gray-600 hover:text-gray-900 transition-colors">
              Showcase
            </Link>

            {/* Content Link */}
            <Link href="/content" className="text-gray-600 hover:text-gray-900 transition-colors">
              Content
            </Link>

            {/* Docs Link */}
            <Link href="/docs" className="text-gray-600 hover:text-gray-900 transition-colors">
              Docs
            </Link>
          </div>
        </div>
      </div>
    </header>
  )
}
