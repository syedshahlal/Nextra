"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, BookOpen, Zap, Shield, BarChart3, Code, CheckCircle } from "lucide-react"
import Link from "next/link"

export default function IntroPage() {
  const features = [
    {
      icon: Zap,
      title: "Lightning Fast",
      description: "Sub-100ms inference with global edge deployment",
    },
    {
      icon: Shield,
      title: "Enterprise Security",
      description: "SOC 2 compliant with end-to-end encryption",
    },
    {
      icon: BarChart3,
      title: "Real-time Analytics",
      description: "Monitor performance with detailed insights",
    },
    {
      icon: Code,
      title: "Developer Friendly",
      description: "Simple APIs and comprehensive SDKs",
    },
  ]

  const gettingStartedSteps = [
    {
      step: "1",
      title: "Create Account",
      description: "Sign up for your free GRA Core Platform account",
      href: "/docs/onboarding/account",
    },
    {
      step: "2",
      title: "Deploy Your First Model",
      description: "Follow our quick start guide to deploy a model",
      href: "/docs/intro/quick-start",
    },
    {
      step: "3",
      title: "Make Your First API Call",
      description: "Test your model with our API reference",
      href: "/docs/api/rest",
    },
    {
      step: "4",
      title: "Scale Your Application",
      description: "Learn about advanced features and scaling",
      href: "/docs/features/scaling",
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
              <span className="text-xl font-bold">Introduction</span>
            </Link>
            <nav className="hidden md:flex items-center space-x-6">
              <Link href="/docs" className="text-gray-600 hover:text-gray-900 transition-colors">
                Documentation
              </Link>
              <Link href="/api" className="text-gray-600 hover:text-gray-900 transition-colors">
                API Reference
              </Link>
              <Button>Get Started</Button>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-4" variant="secondary">
              <BookOpen className="w-4 h-4 mr-1" />
              Introduction
            </Badge>
            <h1 className="text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-6">
              Welcome to GRA Core Platform
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              The most advanced machine learning platform for deploying, scaling, and managing AI models in production.
              Built for developers, trusted by enterprises.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/docs/intro/quick-start">
                <Button size="lg" className="text-lg px-8">
                  Quick Start Guide
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
              <Link href="/docs/api/rest">
                <Button size="lg" variant="outline" className="text-lg px-8 bg-transparent">
                  API Reference
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* What is GCP Section */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">What is GRA Core Platform?</h2>
            <div className="prose prose-lg max-w-none text-gray-600 mb-12">
              <p className="text-xl leading-relaxed mb-6">
                GRA Core Platform is a comprehensive machine learning infrastructure that enables developers and
                organizations to deploy, scale, and manage AI models with unprecedented ease and reliability.
              </p>
              <p className="text-lg leading-relaxed mb-6">
                Whether you're a startup looking to integrate AI into your product or an enterprise managing hundreds of
                models, GCP provides the tools, infrastructure, and support you need to succeed.
              </p>
            </div>

            {/* Key Features */}
            <div className="grid md:grid-cols-2 gap-8 mb-16">
              {features.map((feature, index) => (
                <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                        <feature.icon className="w-6 h-6 text-blue-600" />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
                        <p className="text-gray-600">{feature.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Architecture Overview */}
      <section className="py-16 px-4 bg-gradient-to-r from-blue-50 to-purple-50">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Platform Architecture</h2>
            <p className="text-lg text-gray-600 mb-12">
              Built on modern cloud-native architecture with global distribution and enterprise-grade security.
            </p>

            <Card className="border-0 shadow-xl bg-white/80 backdrop-blur-sm">
              <CardContent className="p-8">
                <div className="grid md:grid-cols-3 gap-8 text-left">
                  <div>
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                      <Code className="w-6 h-6 text-blue-600" />
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">API Layer</h3>
                    <p className="text-gray-600">
                      RESTful and GraphQL APIs with comprehensive SDKs for all major languages.
                    </p>
                  </div>
                  <div>
                    <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                      <Zap className="w-6 h-6 text-green-600" />
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Compute Engine</h3>
                    <p className="text-gray-600">
                      Auto-scaling inference engine with GPU acceleration and edge deployment.
                    </p>
                  </div>
                  <div>
                    <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                      <BarChart3 className="w-6 h-6 text-purple-600" />
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Analytics</h3>
                    <p className="text-gray-600">
                      Real-time monitoring, logging, and analytics with custom dashboards.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Getting Started Steps */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Get Started in 4 Simple Steps</h2>

            <div className="space-y-8">
              {gettingStartedSteps.map((step, index) => (
                <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 group">
                  <CardContent className="p-6">
                    <div className="flex items-center space-x-6">
                      <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center flex-shrink-0">
                        <span className="text-white font-bold text-lg">{step.step}</span>
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                          {step.title}
                        </h3>
                        <p className="text-gray-600 mb-4">{step.description}</p>
                        <Link href={step.href}>
                          <Button
                            variant="outline"
                            className="group-hover:bg-blue-50 group-hover:border-blue-200 transition-colors bg-transparent"
                          >
                            Learn More
                            <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                          </Button>
                        </Link>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Core Concepts */}
      <section className="py-16 px-4 bg-gradient-to-r from-slate-50 to-blue-50">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Core Concepts</h2>

            <div className="grid md:grid-cols-2 gap-8">
              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <CheckCircle className="w-5 h-5 text-green-600" />
                    <span>Models</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">
                    Deploy and manage machine learning models with version control, A/B testing, and rollback
                    capabilities.
                  </p>
                  <Link href="/docs/features/models">
                    <Button variant="outline" size="sm">
                      Learn About Models
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <CheckCircle className="w-5 h-5 text-green-600" />
                    <span>Endpoints</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">
                    Create scalable API endpoints for your models with automatic load balancing and caching.
                  </p>
                  <Link href="/docs/api/rest">
                    <Button variant="outline" size="sm">
                      API Documentation
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <CheckCircle className="w-5 h-5 text-green-600" />
                    <span>Projects</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">
                    Organize your models, data, and team members within projects with fine-grained access control.
                  </p>
                  <Link href="/docs/onboarding/first-project">
                    <Button variant="outline" size="sm">
                      Create Your First Project
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <CheckCircle className="w-5 h-5 text-green-600" />
                    <span>Monitoring</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">
                    Track performance, usage, and costs with real-time dashboards and custom alerts.
                  </p>
                  <Link href="/docs/features/monitoring">
                    <Button variant="outline" size="sm">
                      Monitoring Guide
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-6">Ready to Get Started?</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Follow our quick start guide to deploy your first model in under 5 minutes.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/docs/intro/quick-start">
              <Button size="lg" variant="secondary" className="text-lg px-8">
                Quick Start Guide
              </Button>
            </Link>
            <Link href="/docs/samples/hello-world">
              <Button
                size="lg"
                variant="outline"
                className="text-lg px-8 text-white border-white hover:bg-white hover:text-blue-600 bg-transparent"
              >
                View Examples
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
