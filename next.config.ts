// next.config.js

import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true, // optional but recommended
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
      {
        protocol: 'https',
        hostname: 'encrypted-tbn0.gstatic.com',
        port: '',
        pathname: '/**',
      },
      // Add more external domains here if needed
    ],
  },
};

export default nextConfig;
