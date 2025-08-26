import { memo } from "react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ArrowRight, TrendingUp } from "lucide-react"
import Link from "next/link"
import { SITE_CONFIG } from "@/lib/config"

export const HeroSection = memo(() => {
  return (
    <section className="py-20 px-4">
      <div className="container mx-auto text-center">
        <Badge className="mb-4" variant="secondary">
          <TrendingUp className="w-4 h-4 mr-1" />
          Platform {SITE_CONFIG.version} Now Available
        </Badge>
        <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 bg-clip-text text-transparent mb-6">
          {SITE_CONFIG.name}
        </h1>
        <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto">
          The most advanced machine learning platform for deploying, scaling, and managing AI models in production.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <Button size="lg" className="text-lg px-8">
            Start Building
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
          <Button size="lg" variant="outline" className="text-lg px-8 bg-transparent">
            View Documentation
          </Button>
          <Link href="/showcase">
            <Button
              size="lg"
              variant="outline"
              className="text-lg px-8 bg-transparent border-2 border-purple-600 text-purple-600 hover:bg-purple-600 hover:text-white"
            >
              View Showcase
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
})

HeroSection.displayName = "HeroSection"
