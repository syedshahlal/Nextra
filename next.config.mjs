import nextra from 'nextra'

const withNextra = nextra({
  latex: true,
  search: {
    codeblocks: false
  },
  defaultShowCopyCode: true
})

export default withNextra({
  reactStrictMode: true,
  swcMinify: true,
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    domains: ['placeholder.svg'],
    unoptimized: true,
  },
  async redirects() {
    return [
      {
        source: '/docs',
        destination: '/docs/intro',
        permanent: false
      }
    ]
  }
})
