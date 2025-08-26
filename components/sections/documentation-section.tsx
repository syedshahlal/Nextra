import { memo } from "react"
import { DocumentationCard } from "@/components/ui/documentation-card"
import { DOCUMENTATION_SECTIONS } from "@/lib/config"

export const DocumentationSection = memo(() => {
  return (
    <section className="py-20 px-4 bg-card/30">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Comprehensive Documentation</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Everything you need to build, deploy, and scale AI applications on GRA Core Platform
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {DOCUMENTATION_SECTIONS.map((section) => (
            <DocumentationCard key={section.folder} section={section} />
          ))}
        </div>
      </div>
    </section>
  )
})

DocumentationSection.displayName = "DocumentationSection"
