"use client"

import { useState, useEffect } from "react"
import { Suspense } from "react"
import { SharedHeader } from "@/components/shared-header"
import { HeroSection } from "@/components/sections/hero-section"
import { StatsSection } from "@/components/sections/stats-section"
import { DocumentationSection } from "@/components/sections/documentation-section"
import { LoadingSpinner } from "@/components/ui/loading-spinner"
import dynamic from "next/dynamic"

const FeaturesSection = dynamic(() => import("@/components/sections/features-section"), {
  loading: () => <LoadingSpinner />,
  ssr: false,
})

const CTASection = dynamic(() => import("@/components/sections/cta-section"), {
  loading: () => <LoadingSpinner />,
  ssr: false,
})

const Footer = dynamic(() => import("@/components/sections/footer"), {
  loading: () => <LoadingSpinner />,
  ssr: false,
})

export default function HomePage() {
  const [stats, setStats] = useState({
    models: 2847,
    computeHours: 1200000,
    apiCalls: 45600,
    users: 3421,
  })

  useEffect(() => {
    const interval = setInterval(() => {
      setStats((prev) => ({
        models: prev.models + Math.floor(Math.random() * 3),
        computeHours: prev.computeHours + Math.floor(Math.random() * 100),
        apiCalls: prev.apiCalls + Math.floor(Math.random() * 50),
        users: prev.users + Math.floor(Math.random() * 2),
      }))
    }, 5000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted/20">
      <SharedHeader currentPath="/" />

      <HeroSection />

      <Suspense fallback={<LoadingSpinner />}>
        <StatsSection stats={stats} />
      </Suspense>

      <DocumentationSection />

      <Suspense fallback={<LoadingSpinner />}>
        <FeaturesSection />
      </Suspense>

      <Suspense fallback={<LoadingSpinner />}>
        <CTASection />
      </Suspense>

      <Suspense fallback={<LoadingSpinner />}>
        <Footer />
      </Suspense>
    </div>
  )
}
