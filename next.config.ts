import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  images: {
    formats: ['image/avif', 'image/webp'],
    remotePatterns: [
      // Add partner image domains here as needed
      // { protocol: 'https', hostname: 'images-na.ssl-images-amazon.com' },
    ],
  },
  // Compress output for better Lighthouse scores
  compress: true,
};

export default nextConfig;
