/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'app-ocstaldarprt0b27p001.cms.optimizely.com',
        },
        {
          protocol: 'https',
          hostname: 'cdn.aldar.com',
        },
      ],
    },
  };
  
  export default nextConfig;
  