'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function ProjectCard({ project }) {
  const { 
    id,
    title, 
    shortDescription, 
    tags, 
    thumbnailImage, 
    primaryColor = 'cyan',
    links = {}
  } = project;
  
  // Color mapping for different project categories
  const colorMap = {
    cyan: { 
      bg: 'bg-cyan-500/20', 
      text: 'text-cyan-300',
      hover: 'group-hover:text-cyan-400',
      border: 'group-hover:border-cyan-500'
    },
    purple: { 
      bg: 'bg-purple-500/20', 
      text: 'text-purple-300',
      hover: 'group-hover:text-purple-400',
      border: 'group-hover:border-purple-500'
    },
    emerald: { 
      bg: 'bg-emerald-500/20', 
      text: 'text-emerald-300',
      hover: 'group-hover:text-emerald-400',
      border: 'group-hover:border-emerald-500'
    },
    blue: { 
      bg: 'bg-blue-500/20', 
      text: 'text-blue-300',
      hover: 'group-hover:text-blue-400',
      border: 'group-hover:border-blue-500'
    }
  };
  
  const colors = colorMap[primaryColor] || colorMap.cyan;
  
  return (
    <div className="group cursor-pointer">
      <Link href={`/projects/${id}`}>
        <div 
          className={`relative overflow-hidden rounded-xl bg-slate-800 border border-slate-700 
            transition-all duration-300 ${colors.border} hover:transform hover:scale-[1.02] hover:shadow-lg`}
        >
          {/* Tags */}
          <div className="absolute top-4 left-4 z-10 flex flex-wrap gap-2">
            {tags.slice(0, 2).map((tag, index) => (
              <span 
                key={index}
                className={`px-2 py-1 text-xs font-medium ${tag.bg || colors.bg} ${tag.textColor || colors.text} rounded-md`}
              >
                {tag.name}
              </span>
            ))}
          </div>
          
          {/* Image */}
          <div className="relative h-48 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-slate-800 z-10"></div>
            {thumbnailImage ? (
              <div className="w-full h-full transform transition-transform duration-500 group-hover:scale-110">
                <Image
                  src={thumbnailImage}
                  alt={title}
                  className="w-full h-full object-cover"
                  width={400}
                  height={225}
                />
              </div>
            ) : (
              <div className="w-full h-full bg-slate-700 animate-pulse"></div>
            )}
          </div>
          
          {/* Content */}
          <div className="p-6">
            <h3 className={`text-xl font-bold mb-2 transition-colors ${colors.hover}`}>{title}</h3>
            <p className="text-gray-300 mb-4">{shortDescription}</p>
            
            <div className="flex justify-between items-center">
              <span 
                className={`${colors.text} hover:${colors.text.replace('text', 'text')} font-medium transition-colors flex items-center`}
              >
                Lihat Detail
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1 transform transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </span>
              
              <div className="flex space-x-2">
                {links.github && (
                  <a 
                    href={links.github}
                    className="w-8 h-8 flex items-center justify-center rounded-full border border-slate-700 text-gray-400 hover:text-white hover:border-slate-600 transition-all hover:bg-slate-700/50"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="View GitHub repository"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77 5.44 5.44 0 0 0 3.5 8.55c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                    </svg>
                  </a>
                )}
                
                {links.demo && (
                  <a 
                    href={links.demo}
                    className="w-8 h-8 flex items-center justify-center rounded-full border border-slate-700 text-gray-400 hover:text-white hover:border-slate-600 transition-all hover:bg-slate-700/50"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="View live demo"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                      <polyline points="15 3 21 3 21 9"></polyline>
                      <line x1="10" y1="14" x2="21" y2="3"></line>
                    </svg>
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
}