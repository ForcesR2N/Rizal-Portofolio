/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true,
    loader: 'custom',
    loaderFile: './image-loader.js',
  },
  distDir: 'out',
  assetPrefix: '/Rizal-Portofolio',
  basePath: '/Rizal-Portofolio',
};

export default nextConfig;