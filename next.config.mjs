/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: true,
  },
  typescript: {
    ignoreBuildErrors: false,
  },
  eslint: {
    ignoreDuringBuilds: false,
  },
  // ISR and Build Optimization
  experimental: {
    // Reduce build time by limiting static generation
    staticPageGenerationTimeout: 1000,
  },
  // Optimize build output
  output: 'standalone',
  // Reduce bundle size
  swcMinify: true,
  // Compress static assets
  compress: true,
}

export default nextConfig
