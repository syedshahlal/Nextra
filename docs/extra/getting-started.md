---
title: Extra Getting Started
description: Simple Markdown file rendered via the /content route
tags: [guide, mkdocs]
---

# Getting Started (Markdown)

This page demonstrates basic Markdown rendering. It supports:

- GitHub-Flavored Markdown (tables, task lists)
- MkDocs-style admonitions
- Syntax-highlighted code blocks
- Automatic heading links

## Tables

| Name | Value |
| ---- | ----- |
| One  | 1     |
| Two  | 2     |

## Admonitions (MkDocs)

!!! note "Heads up"
    This is a MkDocs-style note admonition supported via remark-admonitions.

!!! tip
    You can write tips without a title.

!!! warning "Caution"
    Be careful with production settings.

## Code

\`\`\`ts
export function add(a: number, b: number) {
  return a + b
}
