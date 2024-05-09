/** @type {import('next').NextConfig} */
const nextConfig = {images: {
    remotePatterns: [
      {
        protocol: 'http',
        hostname: '95.46.96.96',
        port: '',
      },
    ],
  },};

export default nextConfig;
