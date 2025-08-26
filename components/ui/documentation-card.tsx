import { memo } from "react"
import Link from "next/link"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import type { DocumentationSection } from "@/lib/types"

interface DocumentationCardProps {
  section: DocumentationSection
}

export const DocumentationCard = memo<DocumentationCardProps>(({ section }) => {
  return (
    <Card className="group hover:shadow-2xl transition-all duration-300 border-0 shadow-lg overflow-hidden">
      <CardHeader className="pb-4">
        <div
          className={`w-12 h-12 rounded-lg ${section.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}
        >
          <section.icon className="w-6 h-6 text-white" />
        </div>
        <CardTitle className="text-xl font-bold group-hover:text-blue-600 transition-colors">{section.title}</CardTitle>
        <CardDescription>{section.description}</CardDescription>
      </CardHeader>
      <CardContent className="pt-0">
        <ul className="space-y-2 mb-6">
          {section.features.map((feature, index) => (
            <li key={index} className="flex items-center text-sm text-muted-foreground">
              <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2"></div>
              {feature}
            </li>
          ))}
        </ul>
        <Link href={section.href}>
          <Button
            variant="outline"
            className="w-full group-hover:bg-blue-50 group-hover:border-blue-200 transition-colors bg-transparent"
          >
            Explore {section.title}
            <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Button>
        </Link>
      </CardContent>
    </Card>
  )
})

DocumentationCard.displayName = "DocumentationCard"
