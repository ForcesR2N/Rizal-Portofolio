// image-loader.js dengan debugging
export default function myImageLoader({ src, width, quality }) {
  console.log('Image Loader - Original src:', src);
  console.log('Image Loader - NODE_ENV:', process.env.NODE_ENV);
  
  // Jika src sudah berupa URL lengkap, return as is
  if (src.startsWith('http')) {
    console.log('Image Loader - Returning external URL:', src);
    return src;
  }
  
  // Untuk production (GitHub Pages)
  if (process.env.NODE_ENV === 'production') {
    const cleanSrc = src.startsWith('/') ? src : `/${src}`;
    const finalUrl = `/Rizal-Portofolio${cleanSrc}`;
    console.log('Image Loader - Production URL:', finalUrl);
    return finalUrl;
  }
  
  // Untuk development
  console.log('Image Loader - Development URL:', src);
  return src;
}