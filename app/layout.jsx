import { Head } from 'nextra/components'
import 'nextra-theme-docs/style.css'
import '../components/style.css'

export const metadata = {
  title: {
    template: '%s - Ourmoe Docs',
    default: 'Ourmoe Docs'
  },
  description: 'Ourmoe documentation site built with Nextra Docs Theme'
}

export default function RootLayout({ children }) {
  return (
    <html lang="zh-CN" dir="ltr" suppressHydrationWarning>
      <Head color={{ hue: 212, saturation: 100 }} />
      <body>{children}</body>
    </html>
  )
}
