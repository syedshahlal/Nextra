"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  ArrowRight,
  BookOpen,
  Users,
  Code,
  Zap,
  BarChart3,
  Server,
  Database,
  Globe,
  TrendingUp,
  Clock,
  Shield,
} from "lucide-react"
import Link from "next/link"
import { SharedHeader } from "@/components/shared-header"

export default function HomePage() {
  const [stats, setStats] = useState({
    models: 2847,
    computeHours: 1200000,
    apiCalls: 45600,
    users: 3421,
  })

  const documentationSections = [
    {
      title: "Introduction",
      description: "Get started with GRA Core Platform fundamentals, architecture overview, and core concepts.",
      icon: BookOpen,
      href: "/docs/intro",
      color: "bg-blue-500",
      features: ["Platform Overview", "Architecture Guide", "Core Concepts", "Getting Started"],
      folder: "intro",
    },
    {
      title: "User Onboarding",
      description: "Complete guide to setting up your account, creating your first project, and team management.",
      icon: Users,
      href: "/docs/onboarding",
      color: "bg-green-500",
      features: ["Account Setup", "First Project", "Team Management", "Billing & Plans"],
      folder: "onboarding",
    },
    {
      title: "GCP by Sample",
      description: "Learn through practical examples, code samples, and real-world use cases.",
      icon: Code,
      href: "/docs/samples",
      color: "bg-purple-500",
      features: ["Quick Start Examples", "Integration Guides", "Best Practices", "Code Templates"],
      folder: "samples",
    },
    {
      title: "Features in Depth",
      description: "Deep dive into advanced features, model management, data pipelines, and monitoring.",
      icon: Zap,
      href: "/docs/features",
      color: "bg-orange-500",
      features: ["Model Management", "Data Pipelines", "Monitoring & Alerts", "Performance Tuning"],
      folder: "features",
    },
    {
      title: "API Documentation",
      description: "Complete API reference with endpoints, authentication, SDKs, and interactive examples.",
      icon: BarChart3,
      href: "/docs/api",
      color: "bg-red-500",
      features: ["REST API", "GraphQL", "Webhooks", "SDKs & Libraries"],
      folder: "api",
    },
  ]

  const platformStats = [
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
  ]

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

      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center">
          <Badge className="mb-4" variant="secondary">
            <TrendingUp className="w-4 h-4 mr-1" />
            Platform v2.4.0 Now Available
          </Badge>
          <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 bg-clip-text text-transparent mb-6">
            GRA Core Platform
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

          {/* Platform Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {platformStats.map((stat, index) => (
              <Card
                key={index}
                className="border-0 shadow-lg bg-card/60 backdrop-blur-sm hover:shadow-xl transition-all duration-300"
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
            ))}
          </div>
        </div>
      </section>

      {/* Documentation Sections */}
      <section className="py-20 px-4 bg-card/30">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Comprehensive Documentation</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Everything you need to build, deploy, and scale AI applications on GRA Core Platform
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {documentationSections.map((section, index) => (
              <Card
                key={index}
                className="group hover:shadow-2xl transition-all duration-300 border-0 shadow-lg overflow-hidden"
              >
                <CardHeader className="pb-4">
                  <div
                    className={`w-12 h-12 rounded-lg ${section.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}
                  >
                    <section.icon className="w-6 h-6 text-white" />
                  </div>
                  <CardTitle className="text-xl font-bold group-hover:text-blue-600 transition-colors">
                    {section.title}
                  </CardTitle>
                  <CardDescription>{section.description}</CardDescription>
                </CardHeader>
                <CardContent className="pt-0">
                  <ul className="space-y-2 mb-6">
                    {section.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-muted-foreground">
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
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-blue-50 to-purple-50">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6">Built for Scale, Designed for Developers</h2>
              <p className="text-lg text-muted-foreground mb-8">
                GRA Core Platform provides enterprise-grade infrastructure with developer-friendly tools to accelerate
                your AI journey.
              </p>
              <div className="grid sm:grid-cols-2 gap-6">
                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Clock className="w-4 h-4 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Sub-100ms Latency</h3>
                    <p className="text-sm text-muted-foreground">
                      Lightning-fast inference with global edge deployment
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Shield className="w-4 h-4 text-green-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Enterprise Security</h3>
                    <p className="text-sm text-muted-foreground">SOC 2 compliant with end-to-end encryption</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <BarChart3 className="w-4 h-4 text-purple-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Real-time Analytics</h3>
                    <p className="text-sm text-muted-foreground">
                      Monitor performance and usage with detailed insights
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 bg-orange-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Zap className="w-4 h-4 text-orange-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Auto-scaling</h3>
                    <p className="text-sm text-muted-foreground">Automatically scale based on demand</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="bg-white rounded-2xl shadow-2xl p-8 border">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium text-gray-500">Model Performance</span>
                    <Badge variant="secondary">Live</Badge>
                  </div>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-600">Inference Time</span>
                      <span className="text-sm font-semibold text-green-600">47ms</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-green-500 h-2 rounded-full w-3/4"></div>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-600">Throughput</span>
                      <span className="text-sm font-semibold text-blue-600">2.4K req/s</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-blue-500 h-2 rounded-full w-4/5"></div>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-600">Accuracy</span>
                      <span className="text-sm font-semibold text-purple-600">98.7%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-purple-500 h-2 rounded-full w-full"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Build the Future?</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Join thousands of developers and companies using GRA Core Platform to deploy AI at scale.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="text-lg px-8">
              Start Free Trial
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="text-lg px-8 text-white border-white hover:bg-white hover:text-blue-600 bg-transparent"
            >
              Schedule Demo
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-sm">GCP</span>
                </div>
                <span className="text-xl font-bold">GRA Core Platform</span>
              </div>
              <p className="text-gray-400">
                The most advanced machine learning platform for production AI applications.
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Documentation</h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link href="/docs/intro" className="hover:text-white transition-colors">
                    Introduction
                  </Link>
                </li>
                <li>
                  <Link href="/docs/onboarding" className="hover:text-white transition-colors">
                    Getting Started
                  </Link>
                </li>
                <li>
                  <Link href="/docs/api" className="hover:text-white transition-colors">
                    API Reference
                  </Link>
                </li>
                <li>
                  <Link href="/docs/samples" className="hover:text-white transition-colors">
                    Examples
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Platform</h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link href="/features" className="hover:text-white transition-colors">
                    Features
                  </Link>
                </li>
                <li>
                  <Link href="/pricing" className="hover:text-white transition-colors">
                    Pricing
                  </Link>
                </li>
                <li>
                  <Link href="/security" className="hover:text-white transition-colors">
                    Security
                  </Link>
                </li>
                <li>
                  <Link href="/status" className="hover:text-white transition-colors">
                    Status
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Company</h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link href="/about" className="hover:text-white transition-colors">
                    About
                  </Link>
                </li>
                <li>
                  <Link href="/blog" className="hover:text-white transition-colors">
                    Blog
                  </Link>
                </li>
                <li>
                  <Link href="/careers" className="hover:text-white transition-colors">
                    Careers
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="hover:text-white transition-colors">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 GRA Core Platform. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
