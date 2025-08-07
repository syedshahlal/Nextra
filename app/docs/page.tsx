"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { BookOpen, Search, ArrowRight, Users, Code, Zap, BarChart3, FileText, Video, MessageCircle } from "lucide-react"
import Link from "next/link"

export default function DocsPage() {
  const quickLinks = [
    {
      title: "Quick Start Guide",
      description: "Get up and running in 5 minutes",
      href: "/docs/intro/quick-start",
      icon: Zap,
      time: "5 min read",
    },
    {
      title: "API Reference",
      description: "Complete API documentation",
      href: "/docs/api/reference",
      icon: Code,
      time: "Reference",
    },
    {
      title: "Model Deployment",
      description: "Deploy your first model",
      href: "/docs/features/deployment",
      icon: BarChart3,
      time: "10 min read",
    },
    {
      title: "Authentication",
      description: "Secure your applications",
      href: "/docs/features/auth",
      icon: Users,
      time: "8 min read",
    },
  ]

  const categories = [
    {
      title: "Introduction",
      description: "Platform overview and getting started",
      icon: BookOpen,
      color: "bg-blue-500",
      articles: [
        { title: "What is GRA Core Platform?", href: "/docs/intro/overview" },
        { title: "Architecture Overview", href: "/docs/intro/architecture" },
        { title: "Quick Start Guide", href: "/docs/intro/quick-start" },
        { title: "Core Concepts", href: "/docs/intro/concepts" },
      ],
    },
    {
      title: "User Onboarding",
      description: "Account setup and first steps",
      icon: Users,
      color: "bg-green-500",
      articles: [
        { title: "Creating Your Account", href: "/docs/onboarding/account" },
        { title: "Your First Project", href: "/docs/onboarding/first-project" },
        { title: "Team Management", href: "/docs/onboarding/teams" },
        { title: "Billing & Plans", href: "/docs/onboarding/billing" },
      ],
    },
    {
      title: "GCP by Sample",
      description: "Learn through examples and tutorials",
      icon: Code,
      color: "bg-purple-500",
      articles: [
        { title: "Hello World Example", href: "/docs/samples/hello-world" },
        { title: "Image Classification", href: "/docs/samples/image-classification" },
        { title: "Text Processing", href: "/docs/samples/text-processing" },
        { title: "Real-time Inference", href: "/docs/samples/realtime" },
      ],
    },
    {
      title: "Features in Depth",
      description: "Advanced platform capabilities",
      icon: Zap,
      color: "bg-orange-500",
      articles: [
        { title: "Model Management", href: "/docs/features/models" },
        { title: "Data Pipelines", href: "/docs/features/pipelines" },
        { title: "Monitoring & Alerts", href: "/docs/features/monitoring" },
        { title: "Auto-scaling", href: "/docs/features/scaling" },
      ],
    },
    {
      title: "API Documentation",
      description: "Complete API reference and guides",
      icon: BarChart3,
      color: "bg-red-500",
      articles: [
        { title: "REST API Reference", href: "/docs/api/rest" },
        { title: "GraphQL API", href: "/docs/api/graphql" },
        { title: "Webhooks", href: "/docs/api/webhooks" },
        { title: "SDKs & Libraries", href: "/docs/api/sdks" },
      ],
    },
  ]

  const resources = [
    {
      title: "Video Tutorials",
      description: "Step-by-step video guides",
      icon: Video,
      href: "/docs/videos",
    },
    {
      title: "Community Forum",
      description: "Get help from the community",
      icon: MessageCircle,
      href: "/community",
    },
    {
      title: "Changelog",
      description: "Latest updates and releases",
      icon: FileText,
      href: "/changelog",
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100">
      {/* Header */}
      <header className="border-b bg-white/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">GCP</span>
              </div>
              <span className="text-xl font-bold">Documentation</span>
            </Link>
            <nav className="hidden md:flex items-center space-x-6">
              <Link href="/docs" className="text-blue-600 font-medium">
                Documentation
              </Link>
              <Link href="/api" className="text-gray-600 hover:text-gray-900 transition-colors">
                API Reference
              </Link>
              <Link href="/community" className="text-gray-600 hover:text-gray-900 transition-colors">
                Community
              </Link>
              <Button>Get Started</Button>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto text-center">
          <h1 className="text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-6">
            GRA Core Platform Documentation
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Everything you need to build, deploy, and scale AI applications
          </p>

          {/* Search Bar */}
          <div className="max-w-2xl mx-auto mb-12">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <Input
                placeholder="Search documentation..."
                className="pl-12 pr-4 py-3 text-lg border-2 border-gray-200 focus:border-blue-500 rounded-xl"
              />
            </div>
          </div>

          {/* Quick Links */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {quickLinks.map((link, index) => (
              <Link key={index} href={link.href}>
                <Card className="group hover:shadow-lg transition-all duration-300 border-0 shadow-md h-full">
                  <CardContent className="p-6 text-center">
                    <link.icon className="w-8 h-8 mx-auto mb-3 text-blue-600 group-hover:scale-110 transition-transform" />
                    <h3 className="font-semibold text-gray-900 mb-2">{link.title}</h3>
                    <p className="text-sm text-gray-600 mb-3">{link.description}</p>
                    <span className="text-xs text-blue-600 font-medium">{link.time}</span>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Documentation Categories */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Browse Documentation</h2>

          <div className="grid lg:grid-cols-2 gap-8">
            {categories.map((category, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg">
                <CardHeader className="pb-4">
                  <div className="flex items-center space-x-4">
                    <div
                      className={`w-12 h-12 rounded-lg ${category.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}
                    >
                      <category.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <CardTitle className="text-xl font-bold text-gray-900">{category.title}</CardTitle>
                      <CardDescription className="text-gray-600">{category.description}</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="pt-0">
                  <ul className="space-y-3">
                    {category.articles.map((article, articleIndex) => (
                      <li key={articleIndex}>
                        <Link
                          href={article.href}
                          className="flex items-center justify-between p-3 rounded-lg hover:bg-gray-50 transition-colors group/item"
                        >
                          <span className="text-gray-700 group-hover/item:text-blue-600 transition-colors">
                            {article.title}
                          </span>
                          <ArrowRight className="w-4 h-4 text-gray-400 group-hover/item:text-blue-600 group-hover/item:translate-x-1 transition-all" />
                        </Link>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Resources */}
      <section className="py-16 px-4 bg-gradient-to-r from-blue-50 to-purple-50">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Additional Resources</h2>

          <div className="grid md:grid-cols-3 gap-8">
            {resources.map((resource, index) => (
              <Link key={index} href={resource.href}>
                <Card className="group hover:shadow-lg transition-all duration-300 border-0 shadow-md h-full text-center">
                  <CardContent className="p-8">
                    <resource.icon className="w-12 h-12 mx-auto mb-4 text-blue-600 group-hover:scale-110 transition-transform" />
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">{resource.title}</h3>
                    <p className="text-gray-600">{resource.description}</p>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-4">
        <div className="container mx-auto text-center">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">GCP</span>
            </div>
            <span className="text-xl font-bold">GRA Core Platform</span>
          </div>
          <p className="text-gray-400 mb-6">Need help? Contact our support team or join our community.</p>
          <div className="flex justify-center space-x-4">
            <Button
              variant="outline"
              className="text-white border-white hover:bg-white hover:text-gray-900 bg-transparent"
            >
              Contact Support
            </Button>
            <Button
              variant="outline"
              className="text-white border-white hover:bg-white hover:text-gray-900 bg-transparent"
            >
              Join Community
            </Button>
          </div>
        </div>
      </footer>
    </div>
  )
}
