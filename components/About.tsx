export default function About() {
  return (
    <section id="about" className="py-24 border-t border-neutral-100 dark:border-neutral-900 bg-neutral-50/80 dark:bg-black transition-colors">
      <div className="max-w-3xl mx-auto px-6">
        <h2 className="text-sm font-bold uppercase tracking-widest text-neutral-500 mb-8 font-display">About Me</h2>
        <div className="space-y-6 text-lg text-neutral-600 dark:text-neutral-400 leading-relaxed font-medium transition-colors">
          <p>
            I’m an engineering student at <span className="text-black dark:text-white font-bold transition-colors">GITAM UNIVERSITY</span> passionate 
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
