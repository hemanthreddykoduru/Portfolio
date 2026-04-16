"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Navbar from "../components/Navbar";
import ProjectCard from "../components/ProjectCard";
import About from "../components/About";
import Footer from "../components/Footer";
import SectionWrapper from "../components/SectionWrapper";
import { projects } from "../data/projects";
import { Server, Layout, Database, Wrench, Code2, Monitor } from "lucide-react";

export default function Home() {
  const pathname = usePathname();

  useEffect(() => {
    if (pathname === "/projects") {
      const el = document.getElementById("projects");
      if (el) el.scrollIntoView({ behavior: "smooth" });
    } else if (pathname === "/about") {
      const el = document.getElementById("about");
      if (el) el.scrollIntoView({ behavior: "smooth" });
    } else if (pathname === "/") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, [pathname]);
  const skills = [
    {
      category: "Frontend",
      icon: <Layout className="w-5 h-5 text-black" />,
      items: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Framer Motion"]
    },
    {
      category: "Backend",
      icon: <Server className="w-5 h-5 text-black" />,
      items: ["Node.js", "Express", "Firebase Auth", "Firestore", "RESTful APIs"]
    },
    {
      category: "Tools & Extras",
      icon: <Database className="w-5 h-5 text-black" />,
      items: ["Git", "Postman", "Vercel", "Firebase Hosting", "Cloudflare"]
    }
  ];

  return (
    <div className="min-h-screen bg-white selection:bg-neutral-100 font-sans">
      <Navbar />
      
      <main>
        {/* Hero Section */}
        <section className="relative h-[80vh] md:h-[90vh] flex flex-col items-center justify-center text-center overflow-hidden bg-black">
          {/* Background Video */}
          <video 
            autoPlay 
            muted 
            loop 
            playsInline 
            controls={false}
            preload="auto"
            src="/hero-v2.mp4"
            suppressHydrationWarning
            className="absolute inset-0 w-full h-full object-cover z-0 opacity-80"
          />
          
          {/* Overlay for Contrast */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black/60 z-10"></div>

          {/* Hero Content */}
          <div className="relative z-20 px-6">
            <h1 className="text-5xl md:text-8xl font-display font-black tracking-tighter mb-6 text-white drop-shadow-2xl">
              Koduru Hemanth Reddy
            </h1>
            <p className="text-xl md:text-2xl text-neutral-200 font-medium max-w-2xl leading-relaxed mx-auto drop-shadow-md">
              Full-Stack Developer • Web Developer • Tech Enthusiast
            </p>
            <div className="mt-12 animate-bounce">
              <a href="#projects" className="text-white/80 hover:text-white transition-colors">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M7 13l5 5 5-5M7 6l5 5 5-5"/>
                </svg>
              </a>
            </div>
          </div>
        </section>

        {/* Projects Grid */}
        <SectionWrapper id="projects" className="max-w-5xl mx-auto px-6 py-24 border-t border-neutral-100">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
            <div>
              <h2 className="text-sm font-bold uppercase tracking-widest text-neutral-500 mb-2 font-display">Selected Work</h2>
              <p className="text-3xl font-display font-black tracking-tight text-black">Recent Projects</p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project) => (
              <ProjectCard key={project.slug} project={project} />
            ))}
          </div>
        </SectionWrapper>

        {/* Skills Section */}
        <SectionWrapper className="bg-neutral-50 border-y border-neutral-100 py-24">
          <div className="max-w-5xl mx-auto px-6">
            <div className="mb-12">
              <h2 className="text-sm font-bold uppercase tracking-widest text-neutral-500 mb-2 font-display">Expertise</h2>
              <p className="text-3xl font-display font-black tracking-tight text-black">Technical Skills</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {skills.map((skillGroup) => (
                <div key={skillGroup.category} className="p-8 bg-white border border-neutral-200 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex items-center gap-3 mb-6">
                    {skillGroup.icon}
                    <h3 className="font-display font-bold text-lg">{skillGroup.category}</h3>
                  </div>
                  <ul className="space-y-3">
                    {skillGroup.items.map((item) => (
                      <li key={item} className="flex items-center text-neutral-600 font-medium text-sm">
                        <span className="w-1.5 h-1.5 rounded-full bg-neutral-300 mr-2" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </SectionWrapper>

        <SectionWrapper>
          <About />
        </SectionWrapper>
      </main>

      <Footer />
    </div>
  );
}
