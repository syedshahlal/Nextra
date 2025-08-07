import fs from "fs"
import path from "path"

export interface APIModule {
  name: string
  path: string
  classes: APIClass[]
  functions: APIFunction[]
  imports: string[]
  exports: string[]
}

export interface APIClass {
  name: string
  description?: string
  methods: APIMethod[]
  properties: APIProperty[]
  inheritance?: string[]
}

export interface APIMethod {
  name: string
  description?: string
  parameters: APIParameter[]
  returnType: string
  examples?: string[]
  deprecated?: boolean
}

export interface APIFunction {
  name: string
  description?: string
  parameters: APIParameter[]
  returnType: string
  examples?: string[]
  deprecated?: boolean
}

export interface APIParameter {
  name: string
  type: string
  description?: string
  required: boolean
  defaultValue?: string
}

export interface APIProperty {
  name: string
  type: string
  description?: string
  readonly?: boolean
  deprecated?: boolean
}

export class APIDocGenerator {
  private modulePath: string

  constructor(modulePath: string) {
    this.modulePath = modulePath
  }

  /**
   * Generate API documentation from module folder
   */
  async generateAPIDocs(): Promise<APIModule[]> {
    const modules: APIModule[] = []

    if (!fs.existsSync(this.modulePath)) {
      throw new Error(`Module path ${this.modulePath} does not exist`)
    }

    const files = this.getModuleFiles(this.modulePath)

    for (const file of files) {
      const module = await this.parseModule(file)
      if (module) {
        modules.push(module)
      }
    }

    return modules
  }

  /**
   * Get all module files recursively
   */
  private getModuleFiles(dir: string): string[] {
    const files: string[] = []

    const items = fs.readdirSync(dir)

    for (const item of items) {
      const fullPath = path.join(dir, item)
      const stat = fs.statSync(fullPath)

      if (stat.isDirectory()) {
        files.push(...this.getModuleFiles(fullPath))
      } else if (item.endsWith(".py") || item.endsWith(".js") || item.endsWith(".ts")) {
        files.push(fullPath)
      }
    }

    return files
  }

  /**
   * Parse a single module file
   */
  private async parseModule(filePath: string): Promise<APIModule | null> {
    const content = fs.readFileSync(filePath, "utf-8")
    const extension = path.extname(filePath)

    switch (extension) {
      case ".py":
        return this.parsePythonModule(filePath, content)
      case ".js":
      case ".ts":
        return this.parseJavaScriptModule(filePath, content)
      default:
        return null
    }
  }

  /**
   * Parse Python module
   */
  private parsePythonModule(filePath: string, content: string): APIModule {
    const module: APIModule = {
      name: path.basename(filePath, path.extname(filePath)),
      path: filePath,
      classes: [],
      functions: [],
      imports: [],
      exports: [],
    }

    // Extract imports
    const importMatches = content.match(/^(?:from .+ )?import .+$/gm) || []
    module.imports = importMatches

    // Extract classes
    const classMatches = content.match(/^class\s+(\w+).*?:/gm) || []
    for (const match of classMatches) {
      const className = match.match(/class\s+(\w+)/)?.[1]
      if (className) {
        module.classes.push(this.parsePythonClass(content, className))
      }
    }

    // Extract functions
    const functionMatches = content.match(/^def\s+(\w+)\s*$$[^)]*$$.*?:/gm) || []
    for (const match of functionMatches) {
      const functionName = match.match(/def\s+(\w+)/)?.[1]
      if (functionName) {
        module.functions.push(this.parsePythonFunction(content, functionName))
      }
    }

    return module
  }

  /**
   * Parse JavaScript/TypeScript module
   */
  private parseJavaScriptModule(filePath: string, content: string): APIModule {
    const module: APIModule = {
      name: path.basename(filePath, path.extname(filePath)),
      path: filePath,
      classes: [],
      functions: [],
      imports: [],
      exports: [],
    }

    // Extract imports
    const importMatches = content.match(/^import .+$/gm) || []
    module.imports = importMatches

    // Extract exports
    const exportMatches = content.match(/^export .+$/gm) || []
    module.exports = exportMatches

    // Extract classes
    const classMatches = content.match(/^(?:export\s+)?class\s+(\w+)/gm) || []
    for (const match of classMatches) {
      const className = match.match(/class\s+(\w+)/)?.[1]
      if (className) {
        module.classes.push(this.parseJavaScriptClass(content, className))
      }
    }

    // Extract functions
    const functionMatches = content.match(/^(?:export\s+)?(?:async\s+)?function\s+(\w+)/gm) || []
    for (const match of functionMatches) {
      const functionName = match.match(/function\s+(\w+)/)?.[1]
      if (functionName) {
        module.functions.push(this.parseJavaScriptFunction(content, functionName))
      }
    }

    return module
  }

  /**
   * Parse Python class
   */
  private parsePythonClass(content: string, className: string): APIClass {
    const classRegex = new RegExp(`class\\s+${className}.*?(?=^class|^def|$)`, "gms")
    const classContent = content.match(classRegex)?.[0] || ""

    return {
      name: className,
      description: this.extractPythonDocstring(classContent),
      methods: this.extractPythonMethods(classContent),
      properties: this.extractPythonProperties(classContent),
      inheritance: this.extractPythonInheritance(classContent),
    }
  }

  /**
   * Parse JavaScript class
   */
  private parseJavaScriptClass(content: string, className: string): APIClass {
    const classRegex = new RegExp(`class\\s+${className}.*?(?=^class|^function|$)`, "gms")
    const classContent = content.match(classRegex)?.[0] || ""

    return {
      name: className,
      description: this.extractJSDocComment(classContent),
      methods: this.extractJavaScriptMethods(classContent),
      properties: this.extractJavaScriptProperties(classContent),
      inheritance: this.extractJavaScriptInheritance(classContent),
    }
  }

  /**
   * Parse Python function
   */
  private parsePythonFunction(content: string, functionName: string): APIFunction {
    const functionRegex = new RegExp(`def\\s+${functionName}\\s*\$$[^)]*\$$.*?(?=^def|^class|$)`, "gms")
    const functionContent = content.match(functionRegex)?.[0] || ""

    return {
      name: functionName,
      description: this.extractPythonDocstring(functionContent),
      parameters: this.extractPythonParameters(functionContent),
      returnType: this.extractPythonReturnType(functionContent),
      examples: this.extractPythonExamples(functionContent),
    }
  }

  /**
   * Parse JavaScript function
   */
  private parseJavaScriptFunction(content: string, functionName: string): APIFunction {
    const functionRegex = new RegExp(`function\\s+${functionName}.*?(?=^function|^class|$)`, "gms")
    const functionContent = content.match(functionRegex)?.[0] || ""

    return {
      name: functionName,
      description: this.extractJSDocComment(functionContent),
      parameters: this.extractJavaScriptParameters(functionContent),
      returnType: this.extractJavaScriptReturnType(functionContent),
      examples: this.extractJavaScriptExamples(functionContent),
    }
  }

  // Helper methods for parsing different language constructs
  private extractPythonDocstring(content: string): string | undefined {
    const docstringMatch = content.match(/"""([\s\S]*?)"""|'''([\s\S]*?)'''/)
    return docstringMatch ? (docstringMatch[1] || docstringMatch[2]).trim() : undefined
  }

  private extractJSDocComment(content: string): string | undefined {
    const jsdocMatch = content.match(/\/\*\*([\s\S]*?)\*\//)
    return jsdocMatch ? jsdocMatch[1].replace(/^\s*\*\s?/gm, "").trim() : undefined
  }

  private extractPythonParameters(content: string): APIParameter[] {
    // Implementation for extracting Python parameters
    return []
  }

  private extractJavaScriptParameters(content: string): APIParameter[] {
    // Implementation for extracting JavaScript parameters
    return []
  }

  private extractPythonReturnType(content: string): string {
    // Implementation for extracting Python return type
    return "Any"
  }

  private extractJavaScriptReturnType(content: string): string {
    // Implementation for extracting JavaScript return type
    return "any"
  }

  private extractPythonMethods(content: string): APIMethod[] {
    // Implementation for extracting Python methods
    return []
  }

  private extractJavaScriptMethods(content: string): APIMethod[] {
    // Implementation for extracting JavaScript methods
    return []
  }

  private extractPythonProperties(content: string): APIProperty[] {
    // Implementation for extracting Python properties
    return []
  }

  private extractJavaScriptProperties(content: string): APIProperty[] {
    // Implementation for extracting JavaScript properties
    return []
  }

  private extractPythonInheritance(content: string): string[] {
    // Implementation for extracting Python inheritance
    return []
  }

  private extractJavaScriptInheritance(content: string): string[] {
    // Implementation for extracting JavaScript inheritance
    return []
  }

  private extractPythonExamples(content: string): string[] {
    // Implementation for extracting Python examples
    return []
  }

  private extractJavaScriptExamples(content: string): string[] {
    // Implementation for extracting JavaScript examples
    return []
  }

  /**
   * Generate MDX content from API documentation
   */
  generateMDXContent(modules: APIModule[]): string {
    let mdx = `---
title: API Reference
description: Complete API documentation for GRA Core Platform
version: v2.4.0
lastModified: ${new Date().toISOString()}
---

# API Reference

This documentation is automatically generated from the source code.

`

    for (const module of modules) {
      mdx += `## ${module.name}

${module.classes.length > 0 ? "### Classes\n" : ""}
${module.classes.map((cls) => this.generateClassMDX(cls)).join("\n")}

${module.functions.length > 0 ? "### Functions\n" : ""}
${module.functions.map((func) => this.generateFunctionMDX(func)).join("\n")}

---

`
    }

    return mdx
  }

  private generateClassMDX(cls: APIClass): string {
    return `#### ${cls.name}

${cls.description || ""}

${cls.methods.length > 0 ? "**Methods:**\n" : ""}
${cls.methods.map((method) => `- \`${method.name}()\` - ${method.description || ""}`).join("\n")}

${cls.properties.length > 0 ? "**Properties:**\n" : ""}
${cls.properties.map((prop) => `- \`${prop.name}: ${prop.type}\` - ${prop.description || ""}`).join("\n")}
`
  }

  private generateFunctionMDX(func: APIFunction): string {
    return `#### ${func.name}

${func.description || ""}

**Parameters:**
${func.parameters.map((param) => `- \`${param.name}: ${param.type}\` ${param.required ? "(required)" : "(optional)"} - ${param.description || ""}`).join("\n")}

**Returns:** \`${func.returnType}\`

${
  func.examples && func.examples.length > 0
    ? `**Examples:**
\`\`\`python
${func.examples.join("\n\n")}
\`\`\``
    : ""
}
`
  }
}
