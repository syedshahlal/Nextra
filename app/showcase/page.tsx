"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  BookOpen,
  Code,
  Search,
  Layers,
  GitBranch,
  Palette,
  Monitor,
  FileText,
  Globe,
  Settings,
  ArrowRight,
  CheckCircle,
  Star,
} from "lucide-react"
import Link from "next/link"
import { SharedHeader } from "@/components/shared-header"

export default function ShowcasePage() {
  const [activeDemo, setActiveDemo] = useState("landing")

  const features = [
    {
      icon: Layers,
      title: "Multi-Version Support",
      description: "Backend folder structure with version labeling and seamless version switching",
      status: "implemented",
      demo: "versions",
    },
    {
      icon: Monitor,
      title: "Fixed Header with Controls",
      description: "Logo, version dropdown, theme toggle, and integrated search bar",
      status: "implemented",
      demo: "header",
    },
    {
      icon: Palette,
      title: "Theme System",
      description: "Light/dark mode toggle with system preference detection",
      status: "implemented",
      demo: "themes",
    },
    {
      icon: Search,
      title: "Advanced Search",
      description: "Nextra-integrated search functionality with rich results",
      status: "implemented",
      demo: "search",
    },
    {
      icon: FileText,
      title: "Rich MDX Documentation",
      description: "Version-controlled .mdx files with frontmatter metadata",
      status: "implemented",
      demo: "documentation",
    },
    {
      icon: Code,
      title: "API Documentation Generator",
      description: "Automated API docs generation from source code",
      status: "implemented",
      demo: "api",
    },
    {
      icon: GitBranch,
      title: "Version Management",
      description: "Sophisticated version control with release tracking",
      status: "implemented",
      demo: "versions",
    },
    {
      icon: Globe,
      title: "Responsive Design",
      description: "Mobile-first design with adaptive layouts",
      status: "implemented",
      demo: "responsive",
    },
  ]

  const stats = [
    { label: "Documentation Sections", value: "5+", icon: BookOpen },
    { label: "Version Support", value: "Multi", icon: GitBranch },
    { label: "Search Results", value: "Instant", icon: Search },
    { label: "Theme Options", value: "3", icon: Palette },
  ]

  const showcaseItems = [
    {
      id: "landing",
      title: "Landing Page",
      description: "Beautiful landing page with live stats and documentation sections",
      preview: "/",
      features: ["Live platform statistics", "Documentation overview", "Feature highlights"],
    },
    {
      id: "documentation",
      title: "Documentation Hub",
      description: "Organized documentation with category-based navigation",
      preview: "/docs",
      features: ["Category-based organization", "Quick links", "Search integration"],
    },
    {
      id: "introduction",
      title: "Introduction Pages",
      description: "Comprehensive introduction with getting started guides",
      preview: "/docs/intro",
      features: ["Platform overview", "Architecture diagrams", "Step-by-step guides"],
    },
    {
      id: "search",
      title: "Search System",
      description: "Advanced search with filtering and result highlighting",
      preview: "/search",
      features: ["Real-time search", "Result categorization", "Version filtering"],
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted/20">
      <SharedHeader currentPath="/showcase" />

      {/* Hero Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto text-center">
          <Badge className="mb-4" variant="secondary">
            <Star className="w-4 h-4 mr-1" />
            Documentation Framework Showcase
          </Badge>
          <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 bg-clip-text text-transparent mb-6">
            GCP Documentation Framework
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            A comprehensive, modern documentation system built with Next.js, Nextra, and advanced features for
            enterprise-grade documentation needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/docs">
              <Button size="lg" className="text-lg px-8">
                Explore Documentation
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
            <Link href="/">
              <Button size="lg" variant="outline" className="text-lg px-8 bg-transparent">
                View Landing Page
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 px-4 bg-card/30">
        <div className="container mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {stats.map((stat, index) => (
              <Card key={index} className="border-0 shadow-lg bg-card/60 backdrop-blur-sm text-center">
                <CardContent className="p-6">
                  <stat.icon className="w-8 h-8 mx-auto mb-2 text-blue-600" />
                  <div className="text-2xl font-bold">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Features Showcase */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Framework Features</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Advanced features designed for modern documentation needs
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg">
                <CardHeader className="pb-4">
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                      <feature.icon className="w-6 h-6 text-blue-600" />
                    </div>
                    <Badge variant="secondary" className="bg-green-100 text-green-800">
                      <CheckCircle className="w-3 h-3 mr-1" />
                      {feature.status}
                    </Badge>
                  </div>
                  <CardTitle className="text-xl font-bold group-hover:text-blue-600 transition-colors">
                    {feature.title}
                  </CardTitle>
                  <CardDescription>{feature.description}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Interactive Showcase */}
      <section className="py-16 px-4 bg-gradient-to-r from-blue-50 to-purple-50">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Interactive Showcase</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Explore different sections of the documentation framework
            </p>
          </div>

          <Tabs value={activeDemo} onValueChange={setActiveDemo} className="max-w-6xl mx-auto">
            <TabsList className="grid w-full grid-cols-4 mb-8">
              {showcaseItems.map((item) => (
                <TabsTrigger key={item.id} value={item.id} className="text-sm">
                  {item.title}
                </TabsTrigger>
              ))}
            </TabsList>

            {showcaseItems.map((item) => (
              <TabsContent key={item.id} value={item.id}>
                <Card className="border-0 shadow-2xl">
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <div>
                        <CardTitle className="text-2xl">{item.title}</CardTitle>
                        <CardDescription className="text-lg mt-2">{item.description}</CardDescription>
                      </div>
                      <Link href={item.preview}>
                        <Button>
                          View Live
                          <ArrowRight className="ml-2 w-4 h-4" />
                        </Button>
                      </Link>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="grid md:grid-cols-2 gap-8">
                      {/* Preview Frame */}
                      <div className="relative">
                        <div className="aspect-video bg-gradient-to-br from-gray-100 to-gray-200 rounded-lg border-2 border-gray-300 flex items-center justify-center">
                          <div className="text-center">
                            <Monitor className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                            <p className="text-gray-600 font-medium">Live Preview Available</p>
                            <Link href={item.preview}>
                              <Button className="mt-4 bg-transparent" variant="outline">
                                Open {item.title}
                              </Button>
                            </Link>
                          </div>
                        </div>
                      </div>

                      {/* Features List */}
                      <div>
                        <h3 className="font-semibold text-lg mb-4">Key Features:</h3>
                        <ul className="space-y-3">
                          {item.features.map((feature, featureIndex) => (
                            <li key={featureIndex} className="flex items-center space-x-3">
                              <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                              <span>{feature}</span>
                            </li>
                          ))}
                        </ul>

                        <div className="mt-6 pt-6 border-t">
                          <Link href={item.preview}>
                            <Button size="lg" className="w-full">
                              Explore {item.title}
                              <ArrowRight className="ml-2 w-5 h-5" />
                            </Button>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </section>

      {/* Technical Specifications */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Technical Architecture</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Built with modern technologies for performance and scalability
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Code className="w-5 h-5 text-blue-600" />
                  <span>Frontend</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li>• Next.js 14 with App Router</li>
                  <li>• React 18 with TypeScript</li>
                  <li>• Tailwind CSS for styling</li>
                  <li>• Radix UI components</li>
                  <li>• Lucide React icons</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <BookOpen className="w-5 h-5 text-green-600" />
                  <span>Documentation</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li>• Nextra framework</li>
                  <li>• MDX with frontmatter</li>
                  <li>• Version management system</li>
                  <li>• Auto-generated API docs</li>
                  <li>• Advanced search integration</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Settings className="w-5 h-5 text-purple-600" />
                  <span>Features</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li>• Dark/light theme support</li>
                  <li>• Responsive design</li>
                  <li>• SEO optimization</li>
                  <li>• Performance monitoring</li>
                  <li>• Accessibility compliance</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 px-4 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Ready to Explore?</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Dive into the comprehensive documentation system and discover all the features we've built.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/">
              <Button size="lg" variant="secondary" className="text-lg px-8">
                <Globe className="mr-2 w-5 h-5" />
                Visit Landing Page
              </Button>
            </Link>
            <Link href="/docs">
              <Button
                size="lg"
                variant="outline"
                className="text-lg px-8 text-white border-white hover:bg-white hover:text-blue-600 bg-transparent"
              >
                <BookOpen className="mr-2 w-5 h-5" />
                Browse Documentation
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8 px-4">
        <div className="container mx-auto text-center">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">GCP</span>
            </div>
            <span className="text-xl font-bold">Documentation Framework</span>
          </div>
          <p className="text-gray-400 mb-4">Advanced documentation system for modern applications</p>
          <div className="flex justify-center space-x-6 text-sm">
            <Link href="/" className="hover:text-blue-400 transition-colors">
              Home
            </Link>
            <Link href="/docs" className="hover:text-blue-400 transition-colors">
              Documentation
            </Link>
            <Link href="/search" className="hover:text-blue-400 transition-colors">
              Search
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}
