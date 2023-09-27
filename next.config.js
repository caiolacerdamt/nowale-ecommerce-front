/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  compiler: {
    styledComponents: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'caiolmt-next-ecommerce.s3.amazonaws.com',
        port: '',
        pathname: '/1695244762708.jpg',
      }
    ]
  }
}

module.exports = nextConfig
