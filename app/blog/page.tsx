"use client";

import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import SectionWrapper from "../../components/SectionWrapper";
import { blogs } from "../../data/blogs";
import Link from "next/link";
import { motion } from "framer-motion";

export default function BlogList() {
  return (
    <div className="min-h-screen selection:bg-neutral-200 dark:selection:bg-neutral-800 font-sans flex flex-col justify-between transition-colors">
      <Navbar />
      
      <main className="flex-grow">
        <SectionWrapper className="max-w-5xl mx-auto px-6 py-16 md:py-24">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
            <div>
              <h2 className="text-sm font-bold uppercase tracking-widest text-neutral-500 mb-2 font-display">Thoughts & Updates</h2>
              <p className="text-3xl font-display font-black tracking-tight text-black dark:text-white transition-colors">Blog</p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {blogs.map((blog) => (
              <motion.article 
                key={blog.slug}
                whileHover={{ y: -5 }}
                className="border border-neutral-200 dark:border-neutral-800 p-8 hover:border-black dark:hover:border-neutral-500 transition-all duration-300 group flex flex-col h-full bg-white dark:bg-neutral-900 shadow-sm hover:shadow-xl rounded-2xl"
              >
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-xl font-display font-black tracking-tight text-black dark:text-white transition-colors">{blog.title}</h3>
                </div>
                <p className="text-xs text-neutral-400 font-bold uppercase tracking-widest mb-4 transition-colors">
                  {blog.date}
                </p>
                <p className="text-sm text-neutral-600 dark:text-neutral-400 mb-6 leading-relaxed flex-grow font-medium transition-colors">
                  {blog.excerpt}
                </p>
                <div className="flex gap-6 items-center mt-auto">
                  <Link
                    href={`/blog/${blog.slug}`}
                    className="text-xs font-black uppercase tracking-widest border-b-2 border-neutral-100 dark:border-neutral-700 hover:border-black dark:hover:border-white transition-all text-black dark:text-white inline-flex items-center"
                  >
                    Read More
                  </Link>
                </div>
              </motion.article>
            ))}
          </div>
        </SectionWrapper>
      </main>

      <Footer />
    </div>
  );
}
