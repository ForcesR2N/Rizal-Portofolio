'use client';

import React, { useState } from 'react';
import Image from 'next/image';

// Single Row Horizontal Gallery
function HorizontalScreenshotsGallery({ screenshots, projectTitle, projectCategory }) {
  const [activeIndex, setActiveIndex] = useState(0);

  if (!screenshots || screenshots.length === 0) {
    return (
      <div className="bg-slate-800 rounded-lg p-8 text-center">
        <p className="text-gray-400">No screenshots available</p>
      </div>
    );
  }

  const activeScreenshot = screenshots[activeIndex];

  // Determine if mobile based on category
  const isMobile = projectCategory?.toLowerCase().includes('mobile');

  return (
    <div className="space-y-6">
      {/* Main Display */}
      <div className="rounded-lg p-6">
        <div className="flex justify-center">
          {isMobile ? (
            // Mobile Frame - Optimized size
            <div className="mx-auto">
              <div className="relative bg-slate-900 rounded-3xl p-2 shadow-2xl">
                <div className="relative overflow-hidden rounded-2xl" style={{ aspectRatio: '9/19.5', width: '220px' }}>
                  <Image 
                    src={activeScreenshot.image} 
                    alt={activeScreenshot.caption || projectTitle} 
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
                {/* Phone notch/status bar */}
                <div className="absolute top-4 left-1/2 transform -translate-x-1/2 w-12 h-1 bg-slate-700 rounded-full"></div>
                
                {/* Home indicator (for modern phones) */}
                <div className="absolute bottom-1 left-1/2 transform -translate-x-1/2 w-16 h-1 bg-slate-600 rounded-full"></div>
              </div>
              
              {/* Caption */}
              {activeScreenshot.caption && (
                <div className="mt-4 text-center">
                  <p className="text-gray-300 text-sm font-medium">{activeScreenshot.caption}</p>
                </div>
              )}
            </div>
          ) : (
            // Desktop/Web Frame
            <div className="w-full max-w-4xl">
              {/* Browser Frame */}
              <div className="bg-slate-700 rounded-t-lg p-3 flex items-center space-x-2 browser-frame">
                <div className="flex space-x-2">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                </div>
                <div className="flex-1 mx-4">
                  <div className="bg-slate-600 rounded px-3 py-1 text-xs text-gray-400">
                    {projectTitle}
                  </div>
                </div>
              </div>
              
              {/* Screen Content */}
              <div className="relative bg-white rounded-b-lg overflow-hidden">
                <div className="relative" style={{ aspectRatio: '16/10', height: '450px' }}>
                  <Image 
                    src={activeScreenshot.image} 
                    alt={activeScreenshot.caption || projectTitle} 
                    fill
                    className="object-contain"
                    priority
                  />
                </div>
                
                {/* Caption Overlay */}
                {activeScreenshot.caption && (
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-slate-900/90 to-transparent p-6">
                    <p className="text-gray-200 text-center text-lg font-medium">{activeScreenshot.caption}</p>
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
      </div>
      
      {/* Horizontal Thumbnail Navigation */}
      <div className="relative">
        {/* Navigation Buttons */}
        {screenshots.length > 3 && (
          <>
            <button 
              onClick={() => setActiveIndex(Math.max(0, activeIndex - 1))}
              disabled={activeIndex === 0}
              className="absolute left-0 md:left-2 top-1/2 -translate-y-1/2 z-10 bg-slate-800/90 rounded-full p-2 md:p-3 hover:bg-slate-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
            >
              <svg className="w-4 h-4 md:w-5 md:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            
            <button 
              onClick={() => setActiveIndex(Math.min(screenshots.length - 1, activeIndex + 1))}
              disabled={activeIndex === screenshots.length - 1}
              className="absolute right-0 md:right-2 top-1/2 -translate-y-1/2 z-10 bg-slate-800/90 rounded-full p-2 md:p-3 hover:bg-slate-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
            >
              <svg className="w-4 h-4 md:w-5 md:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </>
        )}
        
        {/* Thumbnails - Horizontal Scroll */}
        <div className="flex gap-3 px-8 md:px-12 overflow-x-auto scrollbar-hide snap-x snap-mandatory">
          {screenshots.map((screenshot, index) => (
            <div 
              key={index}
              className={`flex-shrink-0 cursor-pointer rounded-lg overflow-hidden transition-all duration-300 snap-center ${
                activeIndex === index 
                  ? 'ring-2 ring-cyan-500 shadow-lg shadow-cyan-500/25 scale-105' 
                  : 'hover:ring-2 hover:ring-slate-600 hover:scale-102'
              }`}
              onClick={() => setActiveIndex(index)}
            >
              <div className={`relative ${isMobile ? 'w-10 h-20' : 'w-28 h-18'}`}>
                <Image 
                  src={screenshot.image} 
                  alt={screenshot.caption || `Screenshot ${index + 1}`} 
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          ))}
        </div>
        
        {/* Dots Indicator */}
        <div className="flex justify-center mt-6 space-x-2">
          {screenshots.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveIndex(index)}
              className={`h-2 rounded-full transition-all duration-300 ${
                activeIndex === index 
                  ? 'bg-cyan-500 w-8' 
                  : 'bg-slate-600 hover:bg-slate-500 w-2'
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default function AdaptiveScreenshotsGallery({ 
  screenshots, 
  projectTitle, 
  projectCategory 
}) {
  return (
    <HorizontalScreenshotsGallery 
      screenshots={screenshots} 
      projectTitle={projectTitle} 
      projectCategory={projectCategory}
    />
  );
}