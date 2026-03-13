import nextra from 'nextra'
import { dirname } from 'node:path'
import { fileURLToPath } from 'node:url'

const withNextra = nextra({
  unstable_shouldAddLocaleToLinks: true
})
const root = dirname(fileURLToPath(import.meta.url))

export default withNextra({
  i18n: {
    locales: ['default', 'zh', 'en'],
    defaultLocale: 'default',
    localeDetection: false
  },
  turbopack: {
    root,
    resolveAlias: {
      'next-mdx-import-source-file': './mdx-components.js'
    }
  }
})
