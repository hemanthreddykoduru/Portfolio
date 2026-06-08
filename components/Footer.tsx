export default function Footer() {
  return (
    <footer className="border-t border-neutral-100 dark:border-neutral-800 py-12 bg-white dark:bg-black transition-colors">
      <div className="max-w-5xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
        <p className="text-sm text-neutral-400 dark:text-neutral-500 transition-colors">
          © {new Date().getFullYear()} Koduru Hemanth Reddy. Built with Next.js & Tailwind.
        </p>
        <div className="flex gap-6">
          <a href="https://github.com/hemanthreddykoduru" target="_blank" className="text-neutral-400 dark:text-neutral-500 hover:text-black dark:hover:text-white transition-colors">
            GitHub
          </a>
          <a href="https://www.linkedin.com/in/koduruhemanthreddy" target="_blank" className="text-neutral-400 dark:text-neutral-500 hover:text-black dark:hover:text-white transition-colors">
            LinkedIn
          </a>
          <a href="mailto:contact@hemanthreddykoduru.dev" className="text-neutral-400 dark:text-neutral-500 hover:text-black dark:hover:text-white transition-colors">
            Email
          </a>
        </div>
      </div>
    </footer>
  );
}
