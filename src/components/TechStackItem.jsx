'use client';

export default function TechStackItem({ name, color = 'bg-blue-500' }) {
  return (
    <div className="group flex items-center p-4 bg-slate-800/50 rounded-lg border border-slate-700 hover:border-slate-600 transition-all">
      <div className={`w-3 h-3 rounded-full ${color} mr-3`}></div>
      <span className="text-gray-300 group-hover:text-white transition-colors">{name}</span>
    </div>
  );
}