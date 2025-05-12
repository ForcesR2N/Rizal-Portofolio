'use client';

import React from 'react';

export default function TechnologyTag({ name }) {
  return (
    <span 
      className="px-4 py-2 bg-slate-800 rounded-md text-gray-300 border border-transparent hover:border-cyan-500/50 transition-all duration-300"
    >
      {name}
    </span>
  );
}