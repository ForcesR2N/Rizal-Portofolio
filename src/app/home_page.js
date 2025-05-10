import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ProjectCard from '@/components/ProjectCard';
import TechStackItem from '@/components/TechStackItem';
import { projects, techStack } from '@/constants/projects';
import Link from 'next/link';

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-900 to-slate-800 text-white">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-24 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto">
          <div className="space-y-8">
            <div>
              <h3 className="text-cyan-400 font-mono text-lg mb-2">Halo, perkenalkan saya</h3>
              <h1 className="text-5xl sm:text-6xl font-bold leading-tight mb-2">
                <span className="tracking-tight">Muhammad Rizal</span>
              </h1>
              <h2 className="text-2xl sm:text-3xl text-gray-300 font-light">
                Software Engineer & ML Enthusiast
              </h2>
            </div>
            
            <p className="text-gray-300 text-lg leading-relaxed">
              Saya membuat aplikasi dan pengalaman digital yang berfokus pada performa, aksesibilitas, dan UI/UX yang menarik. Spesialisasi saya di Flutter dan React.
            </p>
            
            <div className="flex flex-wrap gap-4 justify-center">
              <a href="#projects" className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-emerald-500 rounded-lg font-medium hover:shadow-lg hover:shadow-cyan-500/20 transition-all transform hover:scale-105">
                Lihat Proyek
              </a>
              <Link href="/connect" className="px-6 py-3 border border-gray-600 rounded-lg text-gray-300 hover:border-cyan-400 hover:text-white transition-all transform hover:scale-105">
                Hubungi Saya
              </Link>
            </div>
          </div>
        </div>
      </section>
      
      {/* Projects Section */}
      <section id="projects" className="py-24 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12">
          <div>
            <h2 className="text-3xl font-bold mb-2">Proyek Pilihan</h2>
            <p className="text-gray-300">Beberapa karya terbaik yang telah saya kerjakan</p>
          </div>
          <a 
            href="#" // Change to actual link when you have a projects archive page
            className="mt-4 md:mt-0 text-cyan-400 font-medium hover:text-cyan-300 transition-colors"
          >
            Lihat Semua Proyek →
          </a>
        </div>
        
        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </section>
      
      {/* Tech Stack Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-8">Tech Stack</h2>
        
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
          {techStack.map((tech, index) => (
            <TechStackItem key={index} name={tech.name} color={tech.color} />
          ))}
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
        <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-cyan-500 to-emerald-500 p-8 md:p-12">
          <div className="absolute right-0 bottom-0 opacity-20">
            <svg xmlns="http://www.w3.org/2000/svg" width="300" height="300" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
              <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
              <rect x="2" y="9" width="4" height="12"></rect>
              <circle cx="4" cy="4" r="2"></circle>
            </svg>
          </div>
          
          <div className="relative z-10 md:w-3/4">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Mari Berkolaborasi!</h2>
            <p className="text-cyan-100 text-lg mb-8">
              Saya selalu terbuka untuk diskusi tentang proyek baru, peluang kerja, atau kolaborasi menarik lainnya.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link 
                href="/connect"
                className="px-6 py-3 bg-white text-cyan-600 rounded-lg font-medium hover:bg-cyan-50 transition-colors transform hover:scale-105"
              >
                Hubungi Saya
              </Link>
              <a 
                href="#" // Add your resume link when available
                className="px-6 py-3 bg-transparent border border-white text-white rounded-lg font-medium hover:bg-white/10 transition-colors transform hover:scale-105"
                target="_blank"
                rel="noopener noreferrer"
              >
                Lihat Resume
              </a>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </main>
  );
}