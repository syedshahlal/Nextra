const { APIDocGenerator } = require("../lib/api-doc-generator")
const fs = require("fs")
const path = require("path")

async function generateAPIDocs() {
  try {
    // Path to your API modules
    const modulePath = "./api-modules" // Adjust this path

    const generator = new APIDocGenerator(modulePath)
    const modules = await generator.generateAPIDocs()

    // Generate MDX content
    const mdxContent = generator.generateMDXContent(modules)

    // Ensure docs/api directory exists
    const apiDocsDir = "./docs/api/v2.4.0"
    if (!fs.existsSync(apiDocsDir)) {
      fs.mkdirSync(apiDocsDir, { recursive: true })
    }

    // Write the generated documentation
    fs.writeFileSync(path.join(apiDocsDir, "reference.mdx"), mdxContent)

    console.log("API documentation generated successfully!")
    console.log(`Generated docs for ${modules.length} modules`)

    // Generate individual module docs
    for (const module of modules) {
      const moduleContent = generator.generateMDXContent([module])
      fs.writeFileSync(path.join(apiDocsDir, `${module.name}.mdx`), moduleContent)
    }
  } catch (error) {
    console.error("Error generating API docs:", error)
    process.exit(1)
  }
}

generateAPIDocs()
