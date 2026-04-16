export default function About() {
  return (
    <section id="about" className="py-24 border-t border-neutral-100 bg-neutral-50/80">
      <div className="max-w-3xl mx-auto px-6">
        <h2 className="text-sm font-bold uppercase tracking-widest text-neutral-500 mb-8 font-display">About Me</h2>
        <div className="space-y-6 text-lg text-neutral-600 leading-relaxed font-medium">
          <p>
            I’m an engineering student at <span className="text-black font-medium">GITAM UNIVERSITY</span> passionate 
            about building modern, scalable web applications with advanced UI, animations, and clean architecture.
          </p>
          <p>
            Focused on bridging the gap between design and development, I specialize in full-stack 
            TypeScript development and creating seamless digital experiences.
          </p>
        </div>
      </div>
    </section>
  );
}
