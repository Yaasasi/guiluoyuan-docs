import '../../style.css'
import 'nextra-theme-docs/style.css'
import Script from 'next/script'
import { Head } from 'nextra/components'
import { getPageMap } from 'nextra/page-map'
import { Footer, Layout, Navbar } from 'nextra-theme-docs'
import Logo from '../../components/logo'

export const metadata = {
  description: 'Ourmoe',
  icons: {
    apple: '/apple-touch-icon.png',
    icon: [
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' }
    ]
  },
  manifest: '/site.webmanifest',
  title: {
    default: 'Ourmoe',
    template: '%s'
  },
  appleWebApp: {
    title: 'Ourmoe'
  },
  other: {
    'msapplication-TileColor': '#ffffff',
    'Content-Language': 'zh'
  }
}

export const viewport = {
  themeColor: '#ffffff',
  width: 'device-width',
  initialScale: 1
}

const i18n = [
  { locale: 'en', name: 'English' },
  { locale: 'zh', name: '中文' }
]

function Analytics() {
  const id = process.env.NEXT_PUBLIC_ANALYTICS_ID

  if (!id) {
    return null
  }

  return (
    <>
      <Script
        strategy="lazyOnload"
        src={`https://www.googletagmanager.com/gtag/js?id=${id}`}
      />
      <Script id="ga-analytics">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){window.dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${id}');
        `}
      </Script>
    </>
  )
}

export default async function LocaleLayout({ children, params }) {
  const { lang } = await params
  const pageMap = await getPageMap(lang)

  return (
    <html lang={lang} dir="ltr" suppressHydrationWarning>
      <Head>
        <meta name="apple-mobile-web-app-title" content="Ourmoe" />
      </Head>
      <body>
        <Layout
          docsRepositoryBase="https://github.com/Yaasasi/guiluoyuan-docs/tree/main/src/content"
          editLink={lang === 'zh' ? '前往 GitHub 编辑此页' : 'Edit this page on GitHub'}
          feedback={{ content: null }}
          footer={
            <Footer>
              Copyright © Ourmoe Creativity Team 2018-{new Date().getFullYear()}
            </Footer>
          }
          i18n={i18n}
          navbar={<Navbar logo={<Logo />} />}
          navigation={false}
          pageMap={pageMap}
          sidebar={{ defaultMenuCollapseLevel: 1 }}
          toc={{ float: true }}
        >
          <Analytics />
          {children}
        </Layout>
      </body>
    </html>
  )
}
