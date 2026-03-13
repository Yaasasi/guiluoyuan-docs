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
        title: '首页',
        type: 'page'
      },
      'covenant': {
        title: '公约',
        type: 'page'
      },
      'getting-started': {
        title: '快速开始',
        type: 'page'
      }
    }
  },
  {
    name: 'index',
    route: '/zh',
    frontMatter: {
      title: '首页',
      search: false,
      theme: {
        layout: 'full',
        sidebar: false,
        pagination: false,
        timestamp: false,
        toc: false
      },
      filePath: 'app/zh/index.mdx'
    },
    title: '首页'
  },
  {
    name: 'covenant',
    route: '/zh/covenant',
    frontMatter: {
      title: '公约',
      theme: {
        timestamp: false
      },
      filePath: 'app/zh/covenant/page.mdx'
    },
    title: '公约'
  },
  {
    name: 'getting-started',
    route: '/zh/getting-started',
    frontMatter: {
      title: '快速开始',
      filePath: 'app/zh/getting-started/page.mdx'
    },
    title: '快速开始'
  }
]

export default function ZhLayout({ children }) {
  return (
    <Layout
      copyPageButton={false}
      navbar={<Navbar logo={<b>Ourmoe 文档</b>} />}
      pageMap={pageMap}
      i18n={I18N}
      docsRepositoryBase="https://github.com/your-org/your-repo/tree/main"
      footer={<Footer>Copyright © Ourmoe Creativity Team 2018-{new Date().getFullYear()}</Footer>}
      search={<Search placeholder="搜索文档..." />}
      sidebar={{ defaultMenuCollapseLevel: 1, toggleButton: true }}
      toc={{ backToTop: '返回顶部' }}
      feedback={{ content: '有问题？给我们反馈' }}
      editLink="在 GitHub 上编辑此页"
    >
      {children}
    </Layout>
  )
}
