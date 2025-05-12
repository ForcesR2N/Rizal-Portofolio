'use client';

import React from 'react';
import ProjectCard from './ProjectCard';

export default function ProjectsGrid({ projects, title, description, showViewAll = true }) {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12">
        <div>
          <h2 className="text-3xl font-bold mb-2">{title || 'Proyek Pilihan'}</h2>
          <p className="text-gray-300">{description || 'Beberapa karya terbaik yang telah saya kerjakan'}</p>
        </div>
        
        {showViewAll && (
          <a 
            href="/projects" // Ganti dengan halaman daftar lengkap proyek Anda
            className="mt-4 md:mt-0 text-cyan-400 font-medium hover:text-cyan-300 transition-colors"
          >
            Lihat Semua Proyek →
          </a>
        )}
      </div>
      
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
}