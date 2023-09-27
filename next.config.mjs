import withBundleAnalyzer from '@next/bundle-analyzer';
import withPlugins from 'next-compose-plugins';
import { env } from './env.mjs';

/**
 * @type {import('next').NextConfig}
 */
const config = withPlugins([[withBundleAnalyzer({ enabled: env.ANALYZE })]], {
  reactStrictMode: true,
  experimental: { instrumentationHook: true },
  rewrites() {
    return [
      { source: '/healthz', destination: '/api/health' },
      { source: '/api/healthz', destination: '/api/health' },
      { source: '/health', destination: '/api/health' },
      { source: '/ping', destination: '/api/health' },
    ];
  },
  publicRuntimeConfig: {
    NODE_ENV: env.NODE_ENV,
  },
  eslint: { ignoreDuringBuilds: !!process.env.CI },
});

export default config;
