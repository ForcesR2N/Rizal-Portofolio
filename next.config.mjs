/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true
  },
  distDir: 'out',
  assetPrefix: '/Rizal-Portofolio',
  basePath: '/Rizal-Portofolio',
};

export default nextConfig;