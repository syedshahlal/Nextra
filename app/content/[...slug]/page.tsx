import { notFound } from "next/navigation"
import { loadDocBySlug } from "@/lib/mdx"
import { SharedHeader } from "@/components/shared-header"
import { Prose } from "@/components/mdx-components"

type Params = { slug?: string[] }

export default async function DocPage({ params }: { params: Params }) {
  const segments = params.slug ?? []
  const doc = await loadDocBySlug(segments)
  if (!doc) return notFound()

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted/20">
      <SharedHeader currentPath={"/content/" + segments.join("/")} />
      <main className="container mx-auto px-4 py-10">
        <article className="mx-auto max-w-3xl">
          {doc.frontmatter?.title ? (
            <h1 className="mb-2 text-4xl font-bold tracking-tight">{doc.frontmatter.title}</h1>
          ) : null}
          {doc.frontmatter?.description ? (
            <p className="mb-8 text-muted-foreground">{doc.frontmatter.description}</p>
          ) : null}
          <Prose>{doc.content}</Prose>
        </article>
      </main>
    </div>
  )
}

export function generateStaticParams(): Params[] {
  // Allow on-demand rendering in dev; no static params for now
  return []
}
