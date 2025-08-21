import * as React from "react"
import { cn } from "@/lib/utils"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { Info, AlertTriangle, CheckCircle2, Lightbulb, FileWarning } from 'lucide-react'

// Simple prose wrapper for rendered content
export function Prose({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        "prose prose-slate max-w-none dark:prose-invert",
        // code blocks
        "prose-pre:rounded-lg prose-pre:border prose-pre:border-border prose-pre:bg-muted/50",
        // tables
        "prose-table:rounded-md prose-table:border prose-table:border-border",
        "prose-th:border prose-th:border-border prose-td:border prose-td:border-border",
        // links
        "prose-a:text-blue-600 dark:prose-a:text-blue-400",
        className
      )}
      {...props}
    />
  )
}

// Admonition components (MkDocs-like) that can be mapped by remark-admonitions
export function Admonition({
  type = "note",
  title,
  children,
}: {
  type?: "note" | "tip" | "warning" | "danger" | "info";
  title?: string;
  children?: React.ReactNode;
}) {
  const icon =
    type === "tip" ? (
      <Lightbulb className="h-4 w-4" />
    ) : type === "warning" ? (
      <AlertTriangle className="h-4 w-4" />
    ) : type === "danger" ? (
      <FileWarning className="h-4 w-4" />
    ) : type === "info" ? (
      <Info className="h-4 w-4" />
    ) : (
      <CheckCircle2 className="h-4 w-4" />
    )

  const variant =
    type === "warning" || type === "danger" ? "destructive" : type === "tip" ? "default" : "default"

  return (
    <Alert variant={variant as any} className="not-prose">
      <AlertTitle className="flex items-center gap-2">
        {icon}
        {title ?? type[0].toUpperCase() + type.slice(1)}
      </AlertTitle>
      <AlertDescription>{children}</AlertDescription>
    </Alert>
  )
}

// Map HTML elements to Tailwind-styled components
export const defaultMdxComponents = {
  // Admonition mapping (from remark-admonitions)
  Admonition,

  h1: (props: any) => <h1 className="scroll-m-20 text-4xl font-bold tracking-tight" {...props} />,
  h2: (props: any) => <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0" {...props} />,
  h3: (props: any) => <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight" {...props} />,
  h4: (props: any) => <h4 className="scroll-m-20 text-xl font-semibold tracking-tight" {...props} />,
  p: (props: any) => <p className="leading-7" {...props} />,
  ul: (props: any) => <ul className="my-6 ml-6 list-disc" {...props} />,
  ol: (props: any) => <ol className="my-6 ml-6 list-decimal" {...props} />,
  table: (props: any) => <div className="not-prose overflow-x-auto"><table className="w-full text-sm" {...props} /></div>,
  code: (props: any) => <code className="rounded bg-muted px-1 py-0.5" {...props} />,
  pre: (props: any) => <pre className="rounded-lg border border-border bg-muted/50 p-4 overflow-x-auto" {...props} />,
  blockquote: (props: any) => (
    <blockquote className="mt-6 border-l-2 pl-6 italic text-muted-foreground" {...props} />
  ),
}
