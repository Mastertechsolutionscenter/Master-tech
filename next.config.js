import { withPayload } from '@payloadcms/next/withPayload'
import redirects from './redirects.js'

const NEXT_PUBLIC_SERVER_URL =
  process.env.NEXT_PUBLIC_SERVER_URL ||
  (process.env.VERCEL_PROJECT_PRODUCTION_URL
    ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
    : 'http://localhost:3000')

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  images: {
    remotePatterns: NEXT_PUBLIC_SERVER_URL
      ? [
          (() => {
            const url = new URL(NEXT_PUBLIC_SERVER_URL)

            return {
              protocol: url.protocol.replace(':', ''),
              hostname: url.hostname,
            }
          })(),
        ]
      : [],
  },

  webpack: (webpackConfig) => {
    webpackConfig.resolve.extensionAlias = {
      '.cjs': ['.cts', '.cjs'],
      '.js': ['.ts', '.tsx', '.js', '.jsx'],
      '.mjs': ['.mts', '.mjs'],
    }

    return webpackConfig
  },

  eslint: {
    ignoreDuringBuilds: true,
  },

  redirects,

  experimental: {
    optimizePackageImports: ['react-icons', 'lucide-react', 'motion'],
  },
}

export default withPayload(nextConfig, {
  devBundleServerPackages: false,
})