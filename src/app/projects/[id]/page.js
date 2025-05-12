'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { getProjectById, getRelatedProjects } from '@/data/projects';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ProjectFeature from '@/components/ProjectFeature';
import TechnologyTag from '@/components/TechnologyTag';
import ScreenshotGallery from '@/components/ScreenshotGallery';

// Color mapping berdasarkan primaryColor
const colorMap = {
  cyan: { 
    bg: 'from-cyan-500 to-cyan-700',
    text: 'text-cyan-400',
    border: 'border-cyan-500/30',
    button: 'bg-cyan-500 hover:bg-cyan-600'
  },
  purple: { 
    bg: 'from-purple-500 to-purple-700',
    text: 'text-purple-400',
    border: 'border-purple-500/30',
    button: 'bg-purple-500 hover:bg-purple-600'
  },
  emerald: { 
    bg: 'from-emerald-500 to-emerald-700',
    text: 'text-emerald-400',
    border: 'border-emerald-500/30',
    button: 'bg-emerald-500 hover:bg-emerald-600'
  },
  blue: { 
    bg: 'from-blue-500 to-blue-700',
    text: 'text-blue-400',
    border: 'border-blue-500/30',
    button: 'bg-blue-500 hover:bg-blue-600'
  }
};

export default function ProjectDetail({ params }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [project, setProject] = useState(null);
  const [relatedProjects, setRelatedProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  // Handle scroll effect for navbar styling
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Animation for content appearing
  useEffect(() => {
    setIsVisible(true);
  }, []);

  // Load project data
  useEffect(() => {
    // Get project data based on ID from params
    const projectData = getProjectById(params.id);
    
    if (projectData) {
      setProject(projectData);
      // Get related projects
      const related = getRelatedProjects(params.id, 3);
      setRelatedProjects(related);
      setLoading(false);
    } else {
      // Handle case where project is not found
      // Could redirect to 404 page or project list
      console.error("Project not found");
      // Redirect logic here if needed
    }
  }, [params.id]);

  if (loading) {
    return (
      <div className="min-h-screen bg-slate-900 text-white flex items-center justify-center">
        <div className="animate-pulse text-2xl">Loading...</div>
      </div>
    );
  }

  // Get color scheme based on project's primaryColor
  const colors = colorMap[project.primaryColor] || colorMap.cyan;

  return (
    <main className="min-h-screen bg-slate-900 text-white">
      <Navbar />
      
      {/* Back Button with animation */}
      <div className="pt-24 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
        <Link 
          href="/#projects" 
          className={`inline-flex items-center text-white/80 hover:text-white transition-all transform hover:-translate-x-1 ${isVisible ? 'opacity-100' : 'opacity-0'}`}
          style={{ transition: 'opacity 0.5s ease, transform 0.3s ease' }}
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="19" y1="12" x2="5" y2="12"></line>
            <polyline points="12 19 5 12 12 5"></polyline>
          </svg>
          Kembali ke Proyek
        </Link>
      </div>

      {/* Project Title Section */}
      <section className={`pt-4 pb-8 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto ${isVisible ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-10'}`}
        style={{ transition: 'opacity 0.7s ease, transform 0.7s ease' }}>
        <h1 className="text-4xl md:text-5xl font-bold text-center">{project.title}</h1>
        
        <div className="flex flex-wrap gap-2 mt-6 justify-center">
          {project.tags.map((tag, index) => (
            <span 
              key={index}
              className={`px-3 py-1 text-sm font-medium ${tag.bg || `bg-${project.primaryColor}-500/20`} ${tag.textColor || 'text-white'} rounded-md`}
            >
              {tag.name}
            </span>
          ))}
        </div>
      </section>
      
      {/* Project Image */}
      <div className={`relative max-w-4xl mx-auto overflow-hidden rounded-xl shadow-2xl mb-12 ${isVisible ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-10'}`}
        style={{ transition: 'opacity 0.9s ease, transform 0.9s ease', height: '450px' }}>
        {project.coverImage ? (
          <Image 
            src={project.coverImage} 
            alt={`${project.title} Cover Image`} 
            className="w-full h-full object-cover"
            width={1200}
            height={600}
          />
        ) : (
          <div className="w-full h-full bg-slate-800 flex items-center justify-center">
            <span className="text-slate-500">No cover image available</span>
          </div>
        )}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-slate-900/80"></div>
      </div>
      
      {/* Project Content */}
      <section className={`py-6 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto ${isVisible ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-10'}`}
        style={{ transition: 'opacity 1.1s ease, transform 1.1s ease' }}>
        
        {/* Links Section */}
        <div className="flex flex-wrap gap-4 mb-12 justify-center">
          {project.links.github && (
            <a 
              href={project.links.github} 
              target="_blank"
              className="flex items-center gap-2 px-6 py-3 bg-slate-800 rounded-lg hover:bg-slate-700 transition-all duration-300 transform hover:scale-105"
              rel="noreferrer"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77 5.44 5.44 0 0 0 3.5 8.55c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
              </svg>
              GitHub Repository
            </a>
          )}
          
          {project.links.demo && (
            <a 
              href={project.links.demo} 
              target="_blank"
              className={`flex items-center gap-2 px-6 py-3 ${colors.button} rounded-lg transition-all duration-300 transform hover:scale-105`}
              rel="noreferrer"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                <polyline points="15 3 21 3 21 9"></polyline>
                <line x1="10" y1="14" x2="21" y2="3"></line>
              </svg>
              Live Demo
            </a>
          )}
        </div>
        
        {/* Overview */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-4 border-b border-slate-700 pb-2">Tentang Proyek</h2>
          <div className="text-gray-300 leading-relaxed space-y-4">
            {project.overview.split('\n\n').map((paragraph, idx) => (
              <p key={idx}>{paragraph}</p>
            ))}
          </div>
        </div>
        
        {/* Features Section */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-6 border-b border-slate-700 pb-2">Fitur Utama</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {project.features.map((feature, index) => (
              <ProjectFeature 
                key={index}
                title={feature.title}
                description={feature.description}
                icon={feature.icon}
                color={project.primaryColor}
              />
            ))}
          </div>
        </div>
        
        {/* Technologies Used */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-6 border-b border-slate-700 pb-2">Teknologi</h2>
          <div className="flex flex-wrap gap-3">
            {project.technologies.map((tech, index) => (
              <TechnologyTag key={index} name={tech} />
            ))}
          </div>
        </div>
        
        {/* Screenshots/Gallery */}
        {project.screenshots && project.screenshots.length > 0 && (
          <div className="mb-12">
            <h2 className="text-2xl font-bold mb-6 border-b border-slate-700 pb-2">Screenshots</h2>
            <ScreenshotGallery screenshots={project.screenshots} />
          </div>
        )}
        
        {/* Challenges & Solutions */}
        {project.challenges && project.challenges.length > 0 && (
          <div className="mb-12">
            <h2 className="text-2xl font-bold mb-6 border-b border-slate-700 pb-2">Tantangan & Solusi</h2>
            <div className="space-y-6">
              {project.challenges.map((item, index) => (
                <div key={index} className={`border ${colors.border} rounded-lg p-6`}>
                  <h3 className="font-bold text-xl mb-2">Tantangan:</h3>
                  <p className="text-gray-300 mb-4">{item.challenge}</p>
                  
                  <h3 className="font-bold text-xl mb-2">Solusi:</h3>
                  <p className="text-gray-300">{item.solution}</p>
                </div>
              ))}
            </div>
          </div>
        )}
        
        {/* Development Timeline */}
        {project.timeline && project.timeline.length > 0 && (
          <div className="mb-12">
            <h2 className="text-2xl font-bold mb-6 border-b border-slate-700 pb-2">Timeline Pengembangan</h2>
            <div className="space-y-6">
              {project.timeline.map((item, index) => (
                <div 
                  key={index} 
                  className="flex border-l-2 border-slate-700 pl-6 py-2 hover:border-cyan-500 transition-all duration-300"
                >
                  <div className="flex-1">
                    <h3 className="font-bold text-lg">{item.phase}</h3>
                    <p className="text-gray-400 mb-1">{item.description}</p>
                    <span className="text-xs text-cyan-400">{item.date}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </section>
      
      {/* Related Projects Section */}
      {relatedProjects.length > 0 && (
        <section className={`py-16 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto ${isVisible ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-10'}`}
          style={{ transition: 'opacity 1.3s ease, transform 1.3s ease' }}>
          <h2 className="text-3xl font-bold mb-8 text-center">Proyek Lainnya</h2>
          
          <div className="grid md:grid-cols-3 gap-6">
            {relatedProjects.map((relatedProject, index) => (
              <Link
                key={index}
                href={`/projects/${relatedProject.id}`}
                className="bg-slate-800 rounded-xl overflow-hidden border border-slate-700 transition-all duration-300 hover:border-slate-600 hover:transform hover:scale-102 hover:shadow-lg"
              >
                <div className="h-40 relative overflow-hidden">
                  {relatedProject.thumbnailImage ? (
                    <Image 
                      src={relatedProject.thumbnailImage} 
                      alt={relatedProject.title} 
                      width={400} 
                      height={240} 
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                    />
                  ) : (
                    <div className="w-full h-full bg-slate-700 flex items-center justify-center">
                      <span className="text-slate-500">No image</span>
                    </div>
                  )}
                </div>
                
                <div className="p-4">
                  <h3 className="font-bold text-lg mb-1 hover:text-cyan-400 transition-colors">{relatedProject.title}</h3>
                  <p className="text-gray-400 text-sm mb-3">{relatedProject.shortDescription}</p>
                  <div className="flex flex-wrap gap-2">
                    {relatedProject.tags.slice(0, 2).map((tag, i) => (
                      <span key={i} className={`px-2 py-1 text-xs ${tag.bg || 'bg-slate-700'} rounded-md ${tag.textColor || 'text-gray-300'}`}>
                        {tag.name}
                      </span>
                    ))}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>
      )}
      
      <Footer />
    </main>
  );
}