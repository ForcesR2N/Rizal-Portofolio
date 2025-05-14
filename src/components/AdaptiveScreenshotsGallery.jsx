'use client';

import React, { useState } from 'react';
import Image from 'next/image';

// Mobile Screenshots Gallery Component
function MobileScreenshotsGallery({ screenshots, projectTitle }) {
  const [activeImage, setActiveImage] = useState(screenshots && screenshots.length > 0 ? screenshots[0] : null);

  if (!screenshots || screenshots.length === 0) {
    return (
      <div className="bg-slate-800 rounded-lg p-8 text-center">
        <p className="text-gray-400">No screenshots available</p>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Main display - Optimized for mobile screenshots */}
      <div className="bg-slate-800 rounded-lg p-6 flex justify-center items-center">
        {activeImage && activeImage.image ? (
          <div className="relative max-w-xs mx-auto">
            {/* Phone frame effect */}
            <div className="relative bg-slate-900 rounded-3xl p-4 shadow-2xl">
              <div className="relative overflow-hidden rounded-2xl">
                <Image 
                  src={activeImage.image} 
                  alt={activeImage.caption || `${projectTitle} screenshot`} 
                  className="w-full h-auto object-cover"
                  width={300}
                  height={600}
                  priority
                />
              </div>
              
              {/* Phone notch/top bar simulation */}
              <div className="absolute top-6 left-1/2 transform -translate-x-1/2 w-20 h-1 bg-slate-700 rounded-full"></div>
            </div>
            
            {/* Caption below phone */}
            {activeImage.caption && (
              <div className="mt-4 text-center">
                <p className="text-gray-300 text-sm font-medium">{activeImage.caption}</p>
              </div>
            )}
          </div>
        ) : (
          <div className="w-full h-96 flex items-center justify-center">
            <span className="text-slate-500">Preview not available</span>
          </div>
        )}
      </div>
      
      {/* Mobile-optimized thumbnail grid */}
      <div className="grid grid-cols-3 sm:grid-cols-4 gap-3">
        {screenshots.map((screenshot, index) => (
          <div 
            key={index} 
            className={`cursor-pointer rounded-lg overflow-hidden aspect-[9/16] border-2 transition-all ${
              activeImage === screenshot ? 'border-cyan-500 shadow-md shadow-cyan-500/25' : 'border-transparent hover:border-slate-600'
            }`}
            onClick={() => setActiveImage(screenshot)}
          >
            {screenshot.image ? (
              <Image 
                src={screenshot.image} 
                alt={screenshot.caption || `Screenshot ${index + 1}`} 
                className="w-full h-full object-cover"
                width={120}
                height={213}
              />
            ) : (
              <div className="w-full h-full bg-slate-700 flex items-center justify-center">
                <span className="text-slate-500 text-xs">No image</span>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

// Desktop Screenshots Gallery Component
function DesktopScreenshotsGallery({ screenshots, projectTitle }) {
  const [activeImage, setActiveImage] = useState(screenshots && screenshots.length > 0 ? screenshots[0] : null);

  if (!screenshots || screenshots.length === 0) {
    return (
      <div className="bg-slate-800 rounded-lg p-8 text-center">
        <p className="text-gray-400">No screenshots available</p>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Main large image display - Browser mockup */}
      <div className="bg-slate-800 rounded-lg overflow-hidden shadow-2xl">
        {/* Browser header mockup */}
        <div className="bg-slate-700 p-3 flex items-center space-x-2">
          <div className="flex space-x-2">
            <div className="w-3 h-3 rounded-full bg-red-500"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
            <div className="w-3 h-3 rounded-full bg-green-500"></div>
          </div>
          <div className="flex-1 mx-4">
            <div className="bg-slate-600 rounded-md px-3 py-1 text-xs text-gray-400">
              {projectTitle || 'Project'} - Screenshot
            </div>
          </div>
        </div>
        
        {/* Image container */}
        <div className="relative h-96 md:h-[500px]">
          {activeImage && activeImage.image ? (
            <Image 
              src={activeImage.image} 
              alt={activeImage.caption || 'Screenshot'} 
              className="w-full h-full object-cover"
              width={1200}
              height={600}
              priority
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center">
              <span className="text-slate-500">Preview not available</span>
            </div>
          )}
          
          {/* Caption overlay */}
          {activeImage && activeImage.caption && (
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-slate-900/90 to-transparent p-6">
              <p className="text-gray-200 text-center text-lg font-medium">{activeImage.caption}</p>
            </div>
          )}
        </div>
      </div>
      
      {/* Desktop-optimized thumbnail strip */}
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
        {screenshots.map((screenshot, index) => (
          <div 
            key={index} 
            className={`cursor-pointer rounded-lg overflow-hidden h-32 border-2 transition-all ${
              activeImage === screenshot ? 'border-cyan-500 shadow-md shadow-cyan-500/25' : 'border-transparent hover:border-slate-600'
            }`}
            onClick={() => setActiveImage(screenshot)}
          >
            {screenshot.image ? (
              <Image 
                src={screenshot.image} 
                alt={screenshot.caption || `Screenshot ${index + 1}`} 
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                width={200}
                height={120}
              />
            ) : (
              <div className="w-full h-full bg-slate-700 flex items-center justify-center">
                <span className="text-slate-500 text-xs">No image</span>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

// Main Adaptive Gallery Component
export default function AdaptiveScreenshotsGallery({ 
  screenshots, 
  projectTitle, 
  projectCategory,
  projectType 
}) {
  // Determine if project is mobile app based on category or type
  const isMobileApp = () => {
    const category = projectCategory?.toLowerCase();
    const type = projectType?.toLowerCase();
    
    // Check for mobile indicators
    const mobileIndicators = [
      'mobile', 
      'mobile app', 
      'app',
      'android',
      'ios',
      'flutter',
      'react native'
    ];
    
    return mobileIndicators.some(indicator => 
      category?.includes(indicator) || type?.includes(indicator)
    );
  };

  // Return the appropriate gallery component
  if (isMobileApp()) {
    return (
      <MobileScreenshotsGallery 
        screenshots={screenshots} 
        projectTitle={projectTitle} 
      />
    );
  }

  return (
    <DesktopScreenshotsGallery 
      screenshots={screenshots} 
      projectTitle={projectTitle} 
    />
  );
}