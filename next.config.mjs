/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    qualities: [95, 100],
    formats: ['image/avif', 'image/webp'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
    ],
  },
  allowedDevOrigins: ['192.168.236.120', '192.168.236.101', '192.168.236.135', '192.168.0.102', '192.168.236.72'],
}

export default nextConfig
