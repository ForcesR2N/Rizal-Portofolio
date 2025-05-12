'use client';

import React, { useState } from 'react';
import Image from 'next/image';

export default function ScreenshotGallery({ screenshots }) {
  const [activeImage, setActiveImage] = useState(screenshots && screenshots.length > 0 ? screenshots[0] : null);

  // Handle case where no screenshots available
  if (!screenshots || screenshots.length === 0) {
    return (
      <div className="bg-slate-800 rounded-lg p-8 text-center">
        <p className="text-gray-400">No screenshots available</p>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      {/* Main large image display */}
      <div className="bg-slate-800 rounded-lg overflow-hidden h-96 relative">
        {activeImage && activeImage.image ? (
          <Image 
            src={activeImage.image} 
            alt={activeImage.caption || 'Screenshot'} 
            className="w-full h-full object-contain"
            width={800}
            height={600}
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center">
            <span className="text-slate-500">Preview not available</span>
          </div>
        )}
        
        {/* Caption overlay */}
        {activeImage && activeImage.caption && (
          <div className="absolute bottom-0 left-0 right-0 bg-slate-900/80 p-4">
            <p className="text-gray-300 text-center">{activeImage.caption}</p>
          </div>
        )}
      </div>
      
      {/* Thumbnail strip */}
      <div className="grid grid-cols-4 gap-4">
        {screenshots.map((screenshot, index) => (
          <div 
            key={index} 
            className={`cursor-pointer rounded-lg overflow-hidden h-24 border-2 transition-all ${
              activeImage === screenshot ? 'border-cyan-500' : 'border-transparent hover:border-slate-600'
            }`}
            onClick={() => setActiveImage(screenshot)}
          >
            {screenshot.image ? (
              <Image 
                src={screenshot.image} 
                alt={screenshot.caption || `Screenshot ${index + 1}`} 
                className="w-full h-full object-cover"
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