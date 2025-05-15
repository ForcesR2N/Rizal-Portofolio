import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Link from 'next/link';

// Social media links with more complete data
const socialLinks = [
  { 
    name: 'GitHub', 
    url: 'https://github.com/ForcesR2N', 
    username: '@ForcesR2N',
    color: 'from-slate-400 to-slate-600',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77 5.44 5.44 0 0 0 3.5 8.55c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
      </svg>
    ),
    description: 'Check out my code repositories and projects.'
  },
  { 
    name: 'LinkedIn', 
    url: 'https://www.linkedin.com/in/muhammad-zuhrizal/', 
    username: 'Muhammad Zuhrizal',
    color: 'from-blue-500 to-blue-700',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
        <rect x="2" y="9" width="4" height="12"></rect>
        <circle cx="4" cy="4" r="2"></circle>
      </svg>
    ),
    description: 'Connect professionally and see my experience.'
  },
  { 
    name: 'Instagram', 
    url: 'https://www.instagram.com/mhzhrizal/', 
    username: '@mhzhrizal',
    color: 'from-pink-500 to-orange-400',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
      </svg>
    ),
    description: 'Follow me for behind-the-scenes content and updates.'
  },
  { 
    name: 'Email', 
    url: 'muhammadzuhrizal07@gmail.com', // Update with your actual email
    username: 'muhammadzuhrizal07@gmail.com', // Update with your actual email
    color: 'from-red-500 to-red-600',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
        <polyline points="22,6 12,13 2,6"></polyline>
      </svg>
    ),
    description: 'Contact me directly for inquiries or collaborations.'
  },
];

export default function ConnectPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-900 to-slate-800 text-white">
      <Navbar />
      
      <section className="pt-32 pb-24 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
        <div className="mx-auto max-w-3xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-center">Let&apos;s Connect</h1>
          <p className="text-xl text-center text-gray-300 mb-12">
            Temukan saya di platform berikut atau kirim email langsung untuk berdiskusi.
          </p>
          
          <div className="grid md:grid-cols-2 gap-6">
            {socialLinks.map((social) => (
              <a 
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group"
              >
                <div className="bg-slate-800 rounded-xl overflow-hidden hover:shadow-lg transition-all duration-300 border border-slate-700 hover:border-slate-600">
                  <div className={`h-3 bg-gradient-to-r ${social.color}`}></div>
                  <div className="p-6">
                    <div className="flex items-center mb-4">
                      <div className="p-3 bg-slate-700 rounded-lg mr-4 text-white">
                        {social.icon}
                      </div>
                      <div>
                        <h3 className="text-xl font-bold">{social.name}</h3>
                        <p className="text-gray-400">{social.username}</p>
                      </div>
                    </div>
                    <p className="text-gray-300">{social.description}</p>
                  </div>
                </div>
              </a>
            ))}
          </div>
          
          <div className="mt-16 text-center">
            <h2 className="text-2xl font-bold mb-4">Prefer A Direct Message?</h2>
            <p className="text-gray-300 mb-8">
              Formulir kontak akan segera tersedia. Untuk saat ini, silakan gunakan salah satu pilihan di atas untuk menghubungi saya.
            </p>
            <Link 
              href="/"
              className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-cyan-500 to-emerald-500 rounded-lg font-medium hover:shadow-lg hover:shadow-cyan-500/20 transition-all"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="19" y1="12" x2="5" y2="12"></line>
                <polyline points="12 19 5 12 12 5"></polyline>
              </svg>
              Kembali ke Beranda
            </Link>
          </div>
        </div>
      </section>
      
      <Footer />
    </main>
  );
}