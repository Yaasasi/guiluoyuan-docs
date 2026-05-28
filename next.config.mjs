import nextra from 'nextra'

const withNextra = nextra({
  search: true,
  staticImage: true
})

export default withNextra({
  i18n: {
    locales: ['en', 'zh'],
    defaultLocale: 'zh'
  },
  reactStrictMode: true
})
