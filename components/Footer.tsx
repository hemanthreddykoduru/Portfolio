export default function Footer() {
  return (
    <footer className="border-t border-neutral-100 py-12 bg-white">
      <div className="max-w-5xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
        <p className="text-sm text-neutral-400">
          © {new Date().getFullYear()} Koduru Hemanth Reddy. Built with Next.js & Tailwind.
        </p>
        <div className="flex gap-6">
          <a href="https://github.com/hemanthreddykoduru" target="_blank" className="text-neutral-400 hover:text-black transition-colors">
            GitHub
          </a>
          <a href="https://www.linkedin.com/in/koduruhemanthreddy" target="_blank" className="text-neutral-400 hover:text-black transition-colors">
            LinkedIn
          </a>
          <a href="mailto:contact@hemanthreddykoduru.dev" className="text-neutral-400 hover:text-black transition-colors">
            Email
          </a>
        </div>
      </div>
    </footer>
  );
}
