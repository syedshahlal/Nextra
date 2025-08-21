import type { DocsThemeConfig } from "nextra-theme-docs"

const config: DocsThemeConfig = {
  logo: (
    <div className="flex items-center space-x-2">
      <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
        <span className="text-white font-bold text-sm">GCP</span>
      </div>
      <span className="text-xl font-bold">GRA Core Platform</span>
    </div>
  ),
  project: {
    link: "https://github.com/gra-core-platform/docs",
  },
  chat: {
    link: "https://discord.gg/gra-core-platform",
  },
  docsRepositoryBase: "https://github.com/gra-core-platform/docs/tree/main",
  footer: {
    text: "© 2024 GRA Core Platform. All rights reserved.",
  },
  search: {
    placeholder: "Search documentation...",
  },
  sidebar: {
    titleComponent({ title, type }) {
      if (type === "separator") {
        return <div className="text-xs font-semibold text-gray-500 uppercase tracking-wide">{title}</div>
      }
      return <>{title}</>
    },
  },
  toc: {
    backToTop: true,
  },
  editLink: {
    text: "Edit this page on GitHub →",
  },
  feedback: {
    content: "Question? Give us feedback →",
    labels: "feedback",
  },
  useNextSeoProps() {
    return {
      titleTemplate: "%s – GRA Core Platform",
    }
  },
  head: (
    <>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta property="og:title" content="GRA Core Platform Documentation" />
      <meta property="og:description" content="Advanced documentation framework for GRA Core Platform" />
      <link rel="icon" href="/favicon.ico" />
    </>
  ),
}

export default config
