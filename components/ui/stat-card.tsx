import { memo } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import type { StatItem } from "@/lib/types"

interface StatCardProps {
  stat: StatItem
  animated?: boolean
}

export const StatCard = memo<StatCardProps>(({ stat, animated = false }) => {
  return (
    <Card
      className={`border-0 shadow-lg bg-card/60 backdrop-blur-sm transition-all duration-300 ${
        animated ? "hover:shadow-xl hover:scale-105" : ""
      }`}
    >
      <CardContent className="p-6 text-center">
        <stat.icon className={`w-8 h-8 mx-auto mb-2 ${stat.color}`} />
        <div className="text-2xl font-bold">{stat.value}</div>
        <div className="text-sm text-muted-foreground">{stat.label}</div>
        <Badge variant="secondary" className="mt-2 text-xs">
          {stat.change}
        </Badge>
      </CardContent>
    </Card>
  )
})

StatCard.displayName = "StatCard"
