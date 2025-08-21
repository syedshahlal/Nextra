import Link from "next/link"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { FileText, FolderTree } from 'lucide-react'
import { SharedHeader } from "@/components/shared-header"
import { getDocsIndex } from "@/lib/mdx"

export const dynamic = "force-static"

export default async function ContentIndexPage() {
  const docs = getDocsIndex().sort((a, b) => a.slug.join("/").localeCompare(b.slug.join("/")))

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted/20">
      <SharedHeader currentPath="/content" />
      <main className="container mx-auto px-4 py-10">
        <div className="mb-10 text-center">
          <Badge variant="secondary" className="mb-3">
            <FolderTree className="w-4 h-4 mr-1" />
            Markdown Browser
          </Badge>
          <h1 className="text-4xl font-bold">Content Library</h1>
          <p className="text-muted-foreground mt-2">
            Drop any .md or .mdx file under the docs/ folder. It will show up here automatically.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {docs.map((item, i) => {
            const title =
              item.frontmatter?.title || item.slug[item.slug.length - 1]?.replace(/-/g, " ") || "Untitled"
            const href = "/content/" + item.slug.join("/")
            return (
              <Link key={i} href={href}>
                <Card className="hover:shadow-lg transition-shadow">
                  <CardHeader className="pb-3">
                    <CardTitle className="text-lg line-clamp-1">{title}</CardTitle>
                  </CardHeader>
                  <CardContent className="flex items-center justify-between text-sm text-muted-foreground">
                    <div className="flex items-center gap-2">
                      <FileText className="w-4 h-4" />
                      <span className="line-clamp-1">{item.slug.join(" / ")}</span>
                    </div>
                    {item.frontmatter?.tags && item.frontmatter.tags.length > 0 ? (
                      <Badge variant="outline" className="ml-2">
                        {item.frontmatter.tags[0]}
                      </Badge>
                    ) : null}
                  </CardContent>
                </Card>
              </Link>
            )
          })}
        </div>
      </main>
    </div>
  )
}
