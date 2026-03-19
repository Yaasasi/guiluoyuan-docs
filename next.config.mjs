import nextra from 'nextra'
import { dirname } from 'node:path'
import { fileURLToPath } from 'node:url'

const withNextra = nextra({})
const root = dirname(fileURLToPath(import.meta.url))

export default withNextra({
  turbopack: {
    root,
    resolveAlias: {
      'next-mdx-import-source-file': './mdx-components.js'
    }
  }
})
