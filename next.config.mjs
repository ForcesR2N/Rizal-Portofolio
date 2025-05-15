/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: true
  },
  basePath: process.env.NODE_ENV === 'production' ? '/Rizal-Portofolio' : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/Rizal-Portofolio/' : '',
};

export default nextConfig;
