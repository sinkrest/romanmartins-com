/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['media.licdn.com'],
  },
  async rewrites() {
    return [
      {
        source: '/romans-lab',
        destination: 'https://sinkrest.github.io/romans-lab',
      },
      {
        source: '/romans-lab/:path*',
        destination: 'https://sinkrest.github.io/romans-lab/:path*',
      },
    ]
  },
}

module.exports = nextConfig
