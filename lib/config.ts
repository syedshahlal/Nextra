import {
  BookOpen,
  Users,
  Code,
  Zap,
  BarChart3,
  Globe,
  Layers,
  Monitor,
  Palette,
  Search,
  FileText,
  GitBranch,
} from "lucide-react"
import type { DocumentationSection, Feature, ShowcaseItem, Version } from "./types"

export const SITE_CONFIG = {
  name: "GRA Core Platform",
  description: "Advanced documentation framework for GRA Core Platform",
  version: "v2.4.0",
  url: "https://gcp-docs.vercel.app",
} as const

export const DOCUMENTATION_SECTIONS: DocumentationSection[] = [
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

export const FEATURES: Feature[] = [
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

export const SHOWCASE_ITEMS: ShowcaseItem[] = [
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

export const VERSIONS: Version[] = [
  { version: "v2.4.0", label: "v2.4.0 (Latest)", isLatest: true, releaseDate: "2024-01-15" },
  { version: "v2.3.2", label: "v2.3.2", isLatest: false, releaseDate: "2023-12-10" },
  { version: "v2.3.1", label: "v2.3.1", isLatest: false, releaseDate: "2023-11-20" },
  { version: "v2.3.0", label: "v2.3.0", isLatest: false, releaseDate: "2023-10-15" },
  { version: "v2.2.5", label: "v2.2.5", isLatest: false, releaseDate: "2023-09-30" },
]

export const INITIAL_STATS = {
  models: 2847,
  computeHours: 1200000,
  apiCalls: 45600,
  users: 3421,
} as const
