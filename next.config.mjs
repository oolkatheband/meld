/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/meld',
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
}

export default nextConfig
