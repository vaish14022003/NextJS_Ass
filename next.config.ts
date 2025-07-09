// import type { NextConfig } from "next";

// const nextConfig: NextConfig = {
//   /* config options here */


  
// };

// export default nextConfig;
/** @type {import('next').NextConfig} */
const nextConfig = {
  // images: {
  //   domains: ['randomuser.me', 'images.unsplash.com'],
  // },
  images: {
    domains: ['i.pravatar.cc', 'images.unsplash.com', 'cdn.jsdelivr.net', 'randomuser.me'],
  },
  eslint: {
    ignoreDuringBuilds: true, // Ignore ESLint errors during build
  },
}

module.exports = nextConfig
