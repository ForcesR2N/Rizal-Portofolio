import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-900 to-slate-800 text-white">
      <Navbar />
      
      <section className="pt-32 pb-24 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
        <div className="mx-auto max-w-3xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-8 text-center">About Me</h1>
          
          <div className="bg-slate-800/50 rounded-xl p-8 shadow-lg">
            <p className="text-xl text-center text-gray-300 mb-8">
              Halaman ini akan diisi dengan informasi tentang saya, latar belakang, pengalaman, pendidikan, dan lebih banyak lagi.
            </p>
            
            <div className="flex justify-center">
              <div className="inline-block relative">
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-emerald-500 rounded-full blur-md opacity-70 animate-pulse"></div>
                <div className="relative px-6 py-3 bg-slate-800 rounded-full text-cyan-400 font-medium">
                  Coming Soon!
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </main>
  );
}