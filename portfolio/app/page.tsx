import Navbar from "../components/Navbar";
import ProjectCard from "../components/ProjectCard";
import About from "../components/About";
import Footer from "../components/Footer";
import { projects } from "../data/projects";

export default function Home() {
  return (
    <div className="min-h-screen bg-white selection:bg-neutral-100">
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
            <h1 className="text-4xl md:text-8xl font-black tracking-tighter mb-6 text-white drop-shadow-2xl">
              Koduru Hemanth Reddy
            </h1>
            <p className="text-xl md:text-2xl text-neutral-200 font-semibold max-w-2xl leading-relaxed mx-auto drop-shadow-md">
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
        <section id="projects" className="max-w-5xl mx-auto px-6 py-24 border-t border-neutral-100">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
            <div>
              <h2 className="text-sm font-bold uppercase tracking-widest text-neutral-500 mb-2">Selected Work</h2>
              <p className="text-2xl font-bold tracking-tight text-black">Recent Projects</p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project) => (
              <ProjectCard key={project.slug} project={project} />
            ))}
          </div>
        </section>

        <About />
      </main>

      <Footer />
    </div>
  );
}
