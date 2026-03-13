import { Footer, Layout, Navbar } from 'nextra-theme-docs'
import { Search } from 'nextra/components'

const I18N = [
  { locale: 'zh', name: '简体中文' },
  { locale: 'en', name: 'English' }
]

const pageMap = [
  {
    data: {
      index: {
        title: 'Home',
        type: 'page'
      },
      'covenant': {
        title: 'Covenant',
        type: 'page'
      },
      'getting-started': {
        title: 'Getting Started',
        type: 'page'
      }
    }
  },
  {
    name: 'index',
    route: '/en',
    frontMatter: {
      title: 'Home',
      search: false,
      theme: {
        layout: 'full',
        sidebar: false,
        pagination: false,
        timestamp: false,
        toc: false
      },
      filePath: 'app/en/index.mdx'
    },
    title: 'Home'
  },
  {
    name: 'covenant',
    route: '/en/covenant',
    frontMatter: {
      title: 'Covenant',
      theme: {
        timestamp: false
      },
      filePath: 'app/en/covenant/page.mdx'
    },
    title: 'Covenant'
  },
  {
    name: 'getting-started',
    route: '/en/getting-started',
    frontMatter: {
      title: 'Getting Started',
      filePath: 'app/en/getting-started/page.mdx'
    },
    title: 'Getting Started'
  }
]

export default function EnLayout({ children }) {
  return (
    <Layout
      copyPageButton={false}
      navbar={<Navbar logo={<b>Ourmoe Docs</b>} />}
      pageMap={pageMap}
      i18n={I18N}
      docsRepositoryBase="https://github.com/your-org/your-repo/tree/main"
      footer={<Footer>Copyright © Ourmoe Creativity Team 2018-{new Date().getFullYear()}</Footer>}
      search={<Search placeholder="Search docs..." />}
      sidebar={{ defaultMenuCollapseLevel: 1, toggleButton: true }}
      toc={{ backToTop: 'Back to top' }}
      feedback={{ content: 'Question? Give us feedback' }}
      editLink="Edit this page on GitHub"
    >
      {children}
    </Layout>
  )
}
