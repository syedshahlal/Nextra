"use client"

import { memo, useMemo } from "react"
import { Server, Database, Globe, Users } from "lucide-react"
import { StatCard } from "@/components/ui/stat-card"
import { usePlatformStats } from "@/hooks/use-platform-stats"
import type { StatItem } from "@/lib/types"

export const StatsSection = memo(() => {
  const { stats } = usePlatformStats()

  const platformStats: StatItem[] = useMemo(
    () => [
      {
        label: "Active Models",
        value: stats.models.toLocaleString(),
        change: "+12%",
        icon: Server,
        color: "text-blue-600",
      },
      {
        label: "Compute Hours",
        value: `${(stats.computeHours / 1000000).toFixed(1)}M`,
        change: "+8%",
        icon: Database,
        color: "text-green-600",
      },
      {
        label: "API Calls/Day",
        value: `${(stats.apiCalls / 1000).toFixed(1)}K`,
        change: "+15%",
        icon: Globe,
        color: "text-purple-600",
      },
      {
        label: "Active Users",
        value: stats.users.toLocaleString(),
        change: "+23%",
        icon: Users,
        color: "text-orange-600",
      },
    ],
    [stats],
  )

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
      {platformStats.map((stat, index) => (
        <StatCard key={stat.label} stat={stat} animated />
      ))}
    </div>
  )
})

StatsSection.displayName = "StatsSection"
