import fs from "fs"
import path from "path"

export interface VersionedFile {
  path: string
  version: string
  content: string
  metadata: {
    title: string
    description?: string
    lastModified: string
    author?: string
  }
}

export interface DocumentationStructure {
  [folder: string]: {
    shared: VersionedFile[]
    versioned: {
      [version: string]: VersionedFile[]
    }
  }
}

export class VersionManager {
  private basePath: string
  private currentVersion: string

  constructor(basePath = "./docs", currentVersion = "v2.4.0") {
    this.basePath = basePath
    this.currentVersion = currentVersion
  }

  /**
   * Get all documentation files for a specific version
   */
  async getDocumentationForVersion(version: string): Promise<DocumentationStructure> {
    const structure: DocumentationStructure = {}

    const folders = ["intro", "onboarding", "samples", "features", "api"]

    for (const folder of folders) {
      structure[folder] = {
        shared: await this.getSharedFiles(folder),
        versioned: {
          [version]: await this.getVersionedFiles(folder, version),
        },
      }
    }

    return structure
  }

  /**
   * Get shared files that don't change across versions
   */
  private async getSharedFiles(folder: string): Promise<VersionedFile[]> {
    const sharedPath = path.join(this.basePath, folder, "shared")

    if (!fs.existsSync(sharedPath)) {
      return []
    }

    const files = fs.readdirSync(sharedPath)
    const mdxFiles = files.filter((file) => file.endsWith(".mdx"))

    return mdxFiles.map((file) => ({
      path: path.join(sharedPath, file),
      version: "shared",
      content: fs.readFileSync(path.join(sharedPath, file), "utf-8"),
      metadata: this.extractMetadata(path.join(sharedPath, file)),
    }))
  }

  /**
   * Get version-specific files
   */
  private async getVersionedFiles(folder: string, version: string): Promise<VersionedFile[]> {
    const versionPath = path.join(this.basePath, folder, version)

    if (!fs.existsSync(versionPath)) {
      return []
    }

    const files = fs.readdirSync(versionPath)
    const mdxFiles = files.filter((file) => file.endsWith(".mdx"))

    return mdxFiles.map((file) => ({
      path: path.join(versionPath, file),
      version,
      content: fs.readFileSync(path.join(versionPath, file), "utf-8"),
      metadata: this.extractMetadata(path.join(versionPath, file)),
    }))
  }

  /**
   * Extract metadata from MDX file
   */
  private extractMetadata(filePath: string): VersionedFile["metadata"] {
    const content = fs.readFileSync(filePath, "utf-8")
    const frontmatterMatch = content.match(/^---\n([\s\S]*?)\n---/)

    if (frontmatterMatch) {
      const frontmatter = frontmatterMatch[1]
      const metadata: any = {}

      frontmatter.split("\n").forEach((line) => {
        const [key, ...valueParts] = line.split(":")
        if (key && valueParts.length > 0) {
          metadata[key.trim()] = valueParts.join(":").trim().replace(/['"]/g, "")
        }
      })

      return {
        title: metadata.title || path.basename(filePath, ".mdx"),
        description: metadata.description,
        lastModified: metadata.lastModified || new Date().toISOString(),
        author: metadata.author,
      }
    }

    return {
      title: path.basename(filePath, ".mdx"),
      lastModified: new Date().toISOString(),
    }
  }

  /**
   * Get all available versions
   */
  getAvailableVersions(): string[] {
    const versions = ["v2.4.0", "v2.3.2", "v2.3.1", "v2.3.0", "v2.2.5"]
    return versions
  }

  /**
   * Get current version
   */
  getCurrentVersion(): string {
    return this.currentVersion
  }
}
