"use client";

import Navbar from "../../components/Navbar";
import ProjectCard from "../../components/ProjectCard";
import Footer from "../../components/Footer";
import SectionWrapper from "../../components/SectionWrapper";
import { projects } from "../../data/projects";

export default function ProjectsPage() {
  return (
    <div className="min-h-screen selection:bg-neutral-200 dark:selection:bg-neutral-800 font-sans flex flex-col justify-between transition-colors">
      <Navbar />
      
      <main className="flex-grow">
        <SectionWrapper id="projects" className="max-w-5xl mx-auto px-6 py-16 md:py-24">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
            <div>
              <h2 className="text-sm font-bold uppercase tracking-widest text-neutral-500 mb-2 font-display">Selected Work</h2>
              <p className="text-3xl font-display font-black tracking-tight text-black dark:text-white transition-colors">Recent Projects</p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project) => (
              <ProjectCard key={project.slug} project={project} />
            ))}
          </div>
        </SectionWrapper>
      </main>

      <Footer />
    </div>
  );
}
