"use client";

import Link from "next/link";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Projects", href: "/projects" },
    { name: "About", href: "/about" },
    { name: "Resume", href: "/resume.pdf", isExternal: true },
  ];

  return (
    <nav className="sticky top-0 z-[100] w-full border-b border-neutral-200 bg-white/80 backdrop-blur-md">
      <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link href="/" className="text-xl font-black tracking-tighter text-black">
          KHR
        </Link>
        
        {/* Desktop Links */}
        <div className="hidden md:flex gap-8 items-center">
          {navLinks.map((link) => (
            link.isExternal ? (
              <a 
                key={link.name} 
                href={link.href} 
                target="_blank" 
                className="hover:text-black transition-colors font-black uppercase tracking-widest text-[10px] text-neutral-800"
              >
                {link.name}
              </a>
            ) : (
              <Link 
                key={link.name} 
                href={link.href} 
                className="hover:text-black transition-colors font-black uppercase tracking-widest text-[10px] text-neutral-800"
              >
                {link.name}
              </Link>
            )
          ))}
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden p-2 text-black hover:bg-neutral-100 rounded-lg transition-colors"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="md:hidden border-t border-neutral-100 bg-white overflow-hidden"
          >
            <div className="flex flex-col p-6 space-y-6">
              {navLinks.map((link) => (
                link.isExternal ? (
                  <a 
                    key={link.name} 
                    href={link.href} 
                    target="_blank" 
                    onClick={() => setIsOpen(false)}
                    className="text-lg font-black uppercase tracking-[0.2em] text-neutral-800 hover:text-black transition-colors"
                  >
                    {link.name}
                  </a>
                ) : (
                  <Link 
                    key={link.name} 
                    href={link.href} 
                    onClick={() => setIsOpen(false)}
                    className="text-lg font-black uppercase tracking-[0.2em] text-neutral-800 hover:text-black transition-colors"
                  >
                    {link.name}
                  </Link>
                )
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
