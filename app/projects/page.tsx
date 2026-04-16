"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ProjectCard from "@/components/ProjectCard";
import SectionWrapper from "@/components/SectionWrapper";
import { projects } from "@/data/projects";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function ProjectsPage() {
  return (
    <div className="min-h-screen bg-white selection:bg-neutral-100 font-sans">
      <Navbar />
      
      <main className="pt-24 pb-32">
        <div className="max-w-5xl mx-auto px-6">
          <SectionWrapper className="mb-20">
            <Link 
              href="/" 
              className="inline-flex items-center text-sm font-black uppercase tracking-widest text-neutral-400 hover:text-black transition-colors mb-12 group"
            >
              <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
              Back to Overview
            </Link>
            
            <h1 className="text-5xl md:text-7xl font-display font-black tracking-tighter mb-4 text-black">
              Case Studies.
            </h1>
            <p className="text-xl text-neutral-500 font-medium max-w-2xl leading-relaxed">
              A collection of architectural designs, full-stack applications, and problem-solving experiments.
            </p>
          </SectionWrapper>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, idx) => (
              <SectionWrapper key={project.slug} delay={idx * 0.1}>
                <ProjectCard project={project} />
              </SectionWrapper>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
