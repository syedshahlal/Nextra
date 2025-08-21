import fs from "fs"
import path from "path"
import matter from "gray-matter"
import { compileMDX } from "next-mdx-remote/rsc"
import remarkGfm from "remark-gfm"
import remarkAdmonitions from "remark-admonitions"
import remarkBreaks from "remark-breaks"
import rehypeSlug from "rehype-slug"
import rehypeAutolinkHeadings from "rehype-autolink-headings"
import rehypePrettyCode from "rehype-pretty-code"
import { defaultMdxComponents } from "@/components/mdx-components"

export type DocFrontmatter = {
  title?: string
  description?: string
  date?: string
  tags?: string[]
}

export type LoadedDoc = {
  frontmatter: DocFrontmatter
  content: React.ReactNode
  slug: string[]
  filepath: string
}

const DOCS_ROOT = path.join(process.cwd(), "docs")

export function listAllDocs(): string[] {
  const results: string[] = []
  function walk(dir: string) {
    for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
      const full = path.join(dir, entry.name)
      if (entry.isDirectory()) {
        walk(full)
      } else if (entry.isFile() && (entry.name.endsWith(".md") || entry.name.endsWith(".mdx"))) {
        results.push(full)
      }
    }
  }
  if (fs.existsSync(DOCS_ROOT)) {
    walk(DOCS_ROOT)
  }
  return results
}

export function toSlugSegments(filePath: string): string[] {
  const rel = path.relative(DOCS_ROOT, filePath).replace(/\\/g, "/")
  // Drop extension
  const noExt = rel.replace(/\.mdx?$/i, "")
  return noExt.split("/")
}

export async function loadDocBySlug(segments: string[]): Promise<LoadedDoc | null> {
  const candidatePaths = [
    path.join(DOCS_ROOT, ...segments) + ".mdx",
    path.join(DOCS_ROOT, ...segments) + ".md",
    path.join(DOCS_ROOT, ...segments, "index.mdx"),
    path.join(DOCS_ROOT, ...segments, "index.md"),
  ]

  const file = candidatePaths.find((p) => fs.existsSync(p))
  if (!file) return null

  const raw = fs.readFileSync(file, "utf-8")
  // Use compileMDX with parseFrontmatter to support both .md and .mdx
  const { content, frontmatter } = await compileMDX<DocFrontmatter>({
    source: raw,
    options: {
      parseFrontmatter: true,
      mdxOptions: {
        remarkPlugins: [
          // MkDocs-like features
          [remarkAdmonitions, { icons: "svg" }],
          remarkGfm,
          remarkBreaks,
        ],
        rehypePlugins: [
          rehypeSlug,
          [
            rehypeAutolinkHeadings,
            {
              behavior: "wrap",
              properties: { className: ["no-underline"] },
            },
          ],
          [
            // Shiki-based pretty code highlighting
            rehypePrettyCode as any,
            {
              theme: {
                dark: "github-dark",
                light: "github-light",
              },
              keepBackground: false,
            },
          ],
        ],
      },
    },
    components: defaultMdxComponents as any,
  })

  return {
    frontmatter: frontmatter || {},
    content,
    slug: segments,
    filepath: file,
  }
}

export function getDocsIndex() {
  const files = listAllDocs()
  return files.map((f) => {
    const raw = fs.readFileSync(f, "utf-8")
    const { data } = matter(raw)
    return {
      filepath: f,
      slug: toSlugSegments(f),
      frontmatter: data as DocFrontmatter,
    }
  })
}
