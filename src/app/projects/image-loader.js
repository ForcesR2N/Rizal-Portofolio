export default function myImageLoader({ src, width, quality }) {
  if (src.startsWith('http')) {
    return src;
  }
  
  // For production (GitHub Pages)
  if (process.env.NODE_ENV === 'production') {
    return `/Rizal-Portofolio${src}`;
  }
  
  // For development
  return src;
}