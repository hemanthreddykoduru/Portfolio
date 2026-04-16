import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 w-full border-b border-neutral-200 bg-white/80 backdrop-blur-md">
      <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link href="/" className="text-xl font-black tracking-tighter text-black">
          KHR
        </Link>
        <div className="flex gap-8 text-sm font-semibold text-neutral-800">
          <Link href="/#projects" className="hover:text-black transition-colors">Projects</Link>
          <Link href="/#about" className="hover:text-black transition-colors">About</Link>
          <a href="/resume.pdf" target="_blank" className="hover:text-black transition-colors">Resume</a>
        </div>
      </div>
    </nav>
  );
}
