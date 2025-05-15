import Image from 'next/image';
import Link from 'next/link';
import { getProjectById, getRelatedProjects, getAllProjects } from '@/data/projects';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ProjectPageContent from '@/components/ProjectPageContent';

// Generate static params for all projects
export async function generateStaticParams() {
  const projects = getAllProjects();
  
  return projects.map((project) => ({
    id: project.id,
  }));
}

// Generate metadata for SEO
export async function generateMetadata({ params }) {
  const project = getProjectById(params.id);
  
  if (!project) {
    return {
      title: 'Project Not Found',
    };
  }

  return {
    title: `${project.title} | Muhammad Rizal Portfolio`,
    description: project.shortDescription || project.description,
    keywords: project.tags?.map(tag => tag.name).join(', ') || '',
  };
}

export default function ProjectDetail({ params }) {
  // Get project data on server
  const project = getProjectById(params.id);
  
  // Return 404 if project not found
  if (!project) {
    return (
      <div className="min-h-screen bg-slate-900 text-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl mb-4">Project Not Found</h1>
          <Link href="/" className="text-cyan-400 hover:text-cyan-300">
            Back to Home
          </Link>
        </div>
      </div>
    );
  }
  
  // Get related projects
  const relatedProjects = getRelatedProjects(params.id, 3);

  return (
    <main className="min-h-screen bg-slate-900 text-white">
      <Navbar />
      <ProjectPageContent project={project} relatedProjects={relatedProjects} />
      <Footer />
    </main>
  );
}