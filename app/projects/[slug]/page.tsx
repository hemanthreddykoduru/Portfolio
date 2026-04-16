import { projects } from "../../../data/projects";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import Navbar from "../../../components/Navbar";
import Footer from "../../../components/Footer";

// This is required for static site generation in Next.js App Router
export function generateStaticParams() {
  return projects.map((p) => ({
    slug: p.slug,
  }));
}

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) notFound();

  return (
    <div className="min-h-screen bg-white selection:bg-neutral-100">
      <Navbar />
      
      <main>
        {/* Project Header */}
        <section className="max-w-5xl mx-auto px-6 pt-24 md:pt-32 pb-12">
          <Link 
            href="/projects" 
            className="text-neutral-500 hover:text-black mb-8 inline-flex items-center group transition-colors text-sm font-bold uppercase tracking-widest"
          >
            <span className="mr-2 group-hover:-translate-x-1 transition-transform">←</span> Back
          </Link>
          <h1 className="text-4xl md:text-8xl font-display font-black text-black tracking-tighter mb-4 leading-none">
            {project.name}
          </h1>
          <p className="text-lg md:text-2xl text-neutral-500 font-medium leading-relaxed max-w-2xl">
            {project.tagline}
          </p>
        </section>

        {/* Project Hero Image */}
        <div className="max-w-6xl mx-auto px-6">
          <div className="relative w-full aspect-video md:aspect-[21/9] bg-white overflow-hidden rounded-2xl md:rounded-3xl border border-neutral-100 shadow-2xl transition-all duration-500">
            <Image 
              src={project.image}
              alt={project.name}
              fill
              className="object-contain p-2 md:p-8"
              priority
            />
          </div>
        </div>

        <div className="max-w-5xl mx-auto px-6 py-12 md:py-24">
          {/* Info Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 mb-16 md:mb-20 pb-12 md:pb-16 border-b border-neutral-100">
            <div>
              <p className="text-[10px] font-bold uppercase tracking-widest text-neutral-400 mb-2 font-display">Role</p>
              <p className="text-lg font-bold text-black font-display">{project.role}</p>
            </div>
            <div>
              <p className="text-[10px] font-bold uppercase tracking-widest text-neutral-400 mb-2 font-display">Year</p>
              <p className="text-lg font-bold text-black font-display">{project.year}</p>
            </div>
            <div className="sm:col-span-2">
              <p className="text-[10px] font-bold uppercase tracking-widest text-neutral-400 mb-2 font-display">Tech Stack</p>
              <div className="flex flex-wrap gap-2 text-sm font-bold text-neutral-800">
                {project.stack.join(" • ")}
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 md:gap-16">
            {/* Detailed Content */}
            <div className="lg:col-span-2 space-y-12">
              <section>
                <h2 className="text-[10px] font-bold uppercase tracking-widest text-neutral-500 mb-6 underline decoration-black/10 underline-offset-8 font-display">
                  Project Overview
                </h2>
                <div className="prose prose-neutral max-w-none">
                  <p className="text-lg md:text-xl text-neutral-800 leading-relaxed font-medium">
                    {project.fullDescription}
                  </p>
                </div>
              </section>

              <section className="pt-4 md:pt-8">
                <div className="flex flex-col sm:flex-row gap-4 mt-8 md:mt-12">
                  <a 
                    href={project.live} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center bg-black text-white px-8 py-4 rounded-full font-bold hover:bg-neutral-800 transition-all text-sm md:text-base"
                  >
                    Visit Live Site <span className="ml-2">↗</span>
                  </a>
                  {project.github && (
                    <a 
                      href={project.github} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center border-2 border-neutral-200 px-8 py-4 rounded-full font-bold hover:bg-neutral-50 transition-all text-neutral-700 text-sm md:text-base"
                    >
                      GitHub Repo
                    </a>
                  )}
                </div>
              </section>

              {project.userFlow && (
                <section className="pt-16 border-t border-neutral-100">
                  <h2 className="text-sm font-bold uppercase tracking-widest text-neutral-500 mb-8 underline decoration-black/10 underline-offset-8">
                    User Journey / Flow
                  </h2>
                  <div className="space-y-4">
                    {project.userFlow.map((step, i) => (
                      <div key={i} className="flex items-center gap-6 p-6 bg-neutral-50 rounded-xl">
                        <span className="text-2xl font-black text-neutral-200">{i + 1}</span>
                        <p className="text-lg font-bold text-neutral-800">{step}</p>
                      </div>
                    ))}
                  </div>
                </section>
              )}
            </div>

            {/* Features & Contact Sidebar */}
            <aside className="space-y-8">
              <div className="sticky top-24 space-y-8">
                <div className="bg-neutral-50 p-8 rounded-2xl border border-neutral-100">
                  <h3 className="text-sm font-bold uppercase tracking-widest text-neutral-400 mb-8 font-black">
                    Core Features
                  </h3>
                  <ul className="space-y-6">
                    {project.features.map((feature, i) => (
                      <li key={i} className="flex items-start">
                        <span className="w-1.5 h-1.5 rounded-full bg-black mt-2 mr-4 shrink-0" />
                        <p className="text-sm font-bold text-neutral-800 leading-relaxed">
                          {feature}
                        </p>
                      </li>
                    ))}
                  </ul>
                </div>

                {project.contactEmail && (
                  <div className="bg-black p-8 rounded-2xl text-white">
                    <h3 className="text-sm font-bold uppercase tracking-widest text-white/40 mb-4 font-black">
                      Project Support
                    </h3>
                    <p className="text-sm mb-6 font-medium text-white/80 leading-relaxed">
                      If you'd like to collaborate or report bugs regarding this project:
                    </p>
                    <a 
                      href={`mailto:${project.contactEmail}`}
                      className="inline-block text-lg font-black underline underline-offset-8 hover:text-white/60 transition-colors"
                    >
                      Email Support
                    </a>
                  </div>
                )}
              </div>
            </aside>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
