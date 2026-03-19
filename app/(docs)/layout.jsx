import { Footer, Layout, Navbar } from 'nextra-theme-docs'
import { Search } from 'nextra/components'
import { getPageMap } from 'nextra/page-map'

export default async function DocsLayout({ children }) {
  const pageMap = await getPageMap()
  return (
    <Layout
      copyPageButton={false}
      navbar={<Navbar logo={<b>Ourmoe 文档</b>} />}
      pageMap={pageMap}
      docsRepositoryBase="https://github.com/Yaasasi/guiluoyuan-docs/tree/2.0"
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
