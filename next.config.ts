// next.config.js

import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Fixes the issue of loading images from external hosts (like Wikipedia and Spotify CDN)
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'upload.wikimedia.org',
        port: '',
        pathname: '/**', 
      },
      {
        protocol: 'https',
        hostname: 'i.scdn.co',
        port: '',
        pathname: '/**',
      },
      // Keep this array updated with any other external domains you use for images.
    ],
  },
};

export default nextConfig;