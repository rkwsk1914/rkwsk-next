/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      { source: '/fix', destination: '/', permanent: true },
      { source: '/fix/history/:slug', destination: '/history/:slug', permanent: true },
      { source: '/preview', destination: '/', permanent: true },
    ]
  },
}

module.exports = nextConfig
