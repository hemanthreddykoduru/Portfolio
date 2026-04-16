"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
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
      icon: <Layout className="w-5 h-5" />,
      items: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Framer Motion"]
    },
    {
      category: "Backend",
      icon: <Server className="w-5 h-5" />,
      items: ["Node.js", "Express", "Firebase Auth", "Firestore", "RESTful APIs"]
    },
    {
      category: "Tools & Extras",
      icon: <Database className="w-5 h-5" />,
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
          <div className="relative z-20 px-6 max-w-5xl mx-auto">
            <h1 className="text-5xl md:text-8xl font-display font-black tracking-tighter mb-6 text-white drop-shadow-2xl leading-tight md:whitespace-nowrap">
              Koduru Hemanth Reddy
            </h1>
            <p className="text-lg md:text-2xl text-neutral-200 font-medium max-w-2xl leading-relaxed mx-auto drop-shadow-md">
              Full-Stack Developer • Web Developer • Tech Enthusiast
            </p>
            <div className="mt-16 flex flex-col items-center gap-3">
              <a href="#projects" className="group flex flex-col items-center gap-3 transition-colors">
                <p className="text-[10px] font-display font-bold uppercase tracking-[0.3em] text-white/40 group-hover:text-white/80 transition-colors">
                  Scroll down
                </p>
                <div className="animate-bounce p-2 rounded-full border border-white/10 group-hover:border-white/30 transition-colors">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-white/60 group-hover:text-white transition-colors">
                    <path d="M7 13l5 5 5-5M7 6l5 5 5-5"/>
                  </svg>
                </div>
              </a>
            </div>
          </div>
        </section>

        {/* Projects Grid */}
        <SectionWrapper id="projects" className="max-w-5xl mx-auto px-6 py-16 md:py-24 border-t border-neutral-100">
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
        <SectionWrapper className="bg-black border-y border-white/5 py-24">
          <div className="max-w-5xl mx-auto px-6">
            <div className="mb-16">
              <h2 className="text-[10px] font-black uppercase tracking-[0.4em] text-white/40 mb-3 font-display">Specializations</h2>
              <p className="text-4xl md:text-5xl font-display font-black tracking-tight text-white mb-2">Technical Expertise</p>
              <div className="w-20 h-1 bg-white/20 rounded-full" />
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {skills.map((skillGroup, idx) => (
                <motion.div 
                  key={skillGroup.category}
                  whileHover={{ y: -5 }}
                  className="group p-8 bg-neutral-900/50 border border-white/10 rounded-[2rem] hover:border-white/30 transition-all duration-500 backdrop-blur-sm"
                >
                  <div className="mb-8 flex items-center justify-between">
                    <div className="p-4 bg-white/5 rounded-2xl group-hover:bg-white text-white group-hover:text-black transition-all duration-500 shadow-xl shadow-black/20">
                      {skillGroup.icon}
                    </div>
                    <span className="text-[10px] font-black text-white/20 uppercase tracking-widest">0{idx + 1}</span>
                  </div>
                  
                  <h3 className="font-display font-black text-xl text-white mb-6 tracking-tight">{skillGroup.category}</h3>
                  
                  <ul className="space-y-4">
                    {skillGroup.items.map((item) => (
                      <li key={item} className="flex items-center text-neutral-400 group-hover:text-neutral-200 transition-colors font-medium text-sm">
                        <div className="w-1.5 h-1.5 rounded-full bg-white/20 mr-4 group-hover:bg-white transition-all" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </motion.div>
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
