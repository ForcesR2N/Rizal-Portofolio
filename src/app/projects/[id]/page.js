'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { projects } from '@/constants/projects';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function ProjectDetail({ params }) {
  const router = useRouter();
  const [project, setProject] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Find the project by id from the params
    const foundProject = projects.find(p => p.id === params.id);
    
    if (foundProject) {
      setProject(foundProject);
      setLoading(false);
    } else {
      // Redirect to home if project not found
      router.push('/');
    }
  }, [params.id, router]);

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-slate-900 to-slate-800 text-white flex items-center justify-center">
        <div className="animate-pulse text-2xl">Loading...</div>
      </div>
    );
  }

  // Color mapping based on primaryColor
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
  
  const colors = colorMap[project.primaryColor] || colorMap.cyan;

  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-900 to-slate-800 text-white">
      <Navbar />
      
      {/* Hero Section with Project Banner */}
      <section className={`pt-20 bg-gradient-to-r ${colors.bg}`}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-20">
          <div className="flex flex-col items-center mb-8">
            <Link href="/#projects" className="flex items-center text-white/80 hover:text-white mb-6 transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="19" y1="12" x2="5" y2="12"></line>
                <polyline points="12 19 5 12 12 5"></polyline>
              </svg>
              Kembali ke Proyek
            </Link>
            
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
          </div>
        </div>
      </section>
      
      {/* Project Content */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto -mt-12">
        <div className="bg-slate-800 rounded-xl overflow-hidden shadow-xl">
          {/* Project Image */}
          <div className="h-80 md:h-96 relative">
            {project.image ? (
              <Image
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover"
                width={1200}
                height={600}
              />
            ) : (
              <div className="w-full h-full bg-slate-700 flex items-center justify-center">
                <span className="text-slate-500">No image available</span>
              </div>
            )}
          </div>
          
          {/* Project Details */}
          <div className="p-8">
            <div className="flex flex-wrap gap-4 mb-8">
              {project.github && (
                <a 
                  href={project.github}
                  className="flex items-center gap-2 px-4 py-2 bg-slate-700 rounded-lg hover:bg-slate-600 transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77 5.44 5.44 0 0 0 3.5 8.55c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                  </svg>
                  GitHub Repository
                </a>
              )}
              
              {project.demo && (
                <a 
                  href={project.demo}
                  className={`flex items-center gap-2 px-4 py-2 ${colors.button} rounded-lg transition-colors text-white`}
                  target="_blank"
                  rel="noopener noreferrer"
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
            
            <div className="mb-8">
              <h2 className="text-2xl font-bold mb-4">Project Overview</h2>
              <p className="text-gray-300 leading-relaxed">
                {project.description}
              </p>
              
              {/* Add more detailed description here */}
              <p className="text-gray-300 leading-relaxed mt-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi. Morbi euismod, nisl nec ultricies tincidunt, nunc nisl aliquam nisl, eget aliquam nisl nisl sit amet nisl. Nulla facilisi. Morbi euismod, nisl nec ultricies tincidunt, nunc nisl aliquam nisl, eget aliquam nisl nisl sit amet nisl.
              </p>
            </div>
            
            {/* Features Section */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold mb-4">Key Features</h2>
              <ul className="grid md:grid-cols-2 gap-4">
                <li className="flex items-start gap-3">
                  <div className={`mt-1 text-${project.primaryColor}-400`}>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-medium">Feature 1</h3>
                    <p className="text-gray-400">Description of this amazing feature</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className={`mt-1 text-${project.primaryColor}-400`}>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-medium">Feature 2</h3>
                    <p className="text-gray-400">Description of this amazing feature</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className={`mt-1 text-${project.primaryColor}-400`}>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-medium">Feature 3</h3>
                    <p className="text-gray-400">Description of this amazing feature</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className={`mt-1 text-${project.primaryColor}-400`}>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-medium">Feature 4</h3>
                    <p className="text-gray-400">Description of this amazing feature</p>
                  </div>
                </li>
              </ul>
            </div>
            
            {/* Technologies Used */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold mb-4">Technologies Used</h2>
              <div className="flex flex-wrap gap-3">
                {project.technologies ? project.technologies.map((tech, index) => (
                  <span 
                    key={index}
                    className="px-3 py-1 bg-slate-700 rounded-md text-gray-300"
                  >
                    {tech}
                  </span>
                )) : (
                  project.tags.map((tag, index) => (
                    <span 
                      key={index}
                      className="px-3 py-1 bg-slate-700 rounded-md text-gray-300"
                    >
                      {tag.name}
                    </span>
                  ))
                )}
              </div>
            </div>
            
            {/* Screenshots/Gallery */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold mb-4">Screenshots</h2>
              <div className="grid md:grid-cols-2 gap-4">
                {[1, 2, 3, 4].map((item) => (
                  <div key={item} className="bg-slate-700 h-48 rounded-lg overflow-hidden">
                    {/* Replace with actual project screenshots */}
                    <div className="w-full h-full flex items-center justify-center text-slate-500">
                      Screenshot {item}
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Challenges & Solutions */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold mb-4">Challenges & Solutions</h2>
              <div className={`border ${colors.border} rounded-lg p-6`}>
                <h3 className="font-bold text-xl mb-2">Challenge:</h3>
                <p className="text-gray-300 mb-4">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer viverra felis ut dui pulvinar, at tincidunt sem vestibulum.
                </p>
                
                <h3 className="font-bold text-xl mb-2">Solution:</h3>
                <p className="text-gray-300">
                  Nulla facilisis magna at risus feugiat, in porttitor tortor varius. Mauris pretium erat in magna vulputate, vel tincidunt nisl dictum.
                </p>
              </div>
            </div>
            
            {/* Next Steps or Future Improvements */}
            <div>
              <h2 className="text-2xl font-bold mb-4">Future Improvements</h2>
              <ul className="list-disc list-inside text-gray-300 space-y-2 pl-4">
                <li>Future feature or improvement idea</li>
                <li>Another planned enhancement</li>
                <li>Upcoming functionality to be added</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      
      {/* Other Projects Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center">Proyek Lainnya</h2>
        
        <div className="grid md:grid-cols-3 gap-6">
          {projects.filter(p => p.id !== project.id).slice(0, 3).map((otherProject) => (
            <Link 
              key={otherProject.id} 
              href={`/projects/${otherProject.id}`}
              className="group"
            >
              <div className="bg-slate-800 rounded-xl overflow-hidden border border-slate-700 transition-all hover:border-slate-600 hover:transform hover:scale-[1.02]">
                <div className="h-40 relative overflow-hidden">
                  {otherProject.image ? (
                    <div className="w-full h-full transform transition-transform duration-500 group-hover:scale-110">
                      <Image
                        src={otherProject.image}
                        alt={otherProject.title}
                        className="w-full h-full object-cover"
                        width={400}
                        height={200}
                      />
                    </div>
                  ) : (
                    <div className="w-full h-full bg-slate-700 flex items-center justify-center">
                      <span className="text-slate-500">No image</span>
                    </div>
                  )}
                </div>
                
                <div className="p-4">
                  <h3 className="font-bold text-lg mb-1 group-hover:text-cyan-400 transition-colors">{otherProject.title}</h3>
                  <p className="text-gray-400 text-sm line-clamp-2">{otherProject.description}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>
      
      <Footer />
    </main>
  );
}