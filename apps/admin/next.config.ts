import type { NextConfig } from 'next';
import { sanity } from 'next-sanity/live/cache-life';

const nextConfig: NextConfig = {
  cacheComponents: true,
  cacheLife: { default: sanity },
  /* config options here */
  reactCompiler: true,
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'cdn.sanity.io' },
      { protocol: 'https', hostname: 'placehold.co' },
    ],
  },
};

export default nextConfig;
