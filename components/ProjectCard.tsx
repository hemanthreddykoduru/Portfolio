"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Project } from "../data/projects";

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <motion.article 
      whileHover={{ y: -5 }}
      className="border border-neutral-200 dark:border-neutral-800 p-8 hover:border-black dark:hover:border-neutral-500 transition-all duration-300 group flex flex-col h-full bg-white dark:bg-neutral-900 shadow-sm hover:shadow-xl rounded-2xl"
    >
      <div className="flex items-start justify-between mb-4">
        <h3 className="text-xl font-display font-black tracking-tight text-black dark:text-white transition-colors">{project.name}</h3>
        <a
          href={project.live}
          target="_blank"
          rel="noopener noreferrer"
          className="text-xs text-neutral-400 dark:text-neutral-500 hover:text-black dark:hover:text-white transition-colors font-bold uppercase tracking-widest"
        >
          ↗ Live
        </a>
      </div>
      <p className="text-sm text-neutral-600 dark:text-neutral-400 mb-6 leading-relaxed flex-grow font-medium transition-colors">
        {project.tagline}
      </p>
      <div className="flex flex-wrap gap-2 mb-8">
        {project.stack.map(tech => (
          <span
            key={tech}
            className="text-[10px] px-3 py-1 bg-neutral-100 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-300 rounded-full font-bold uppercase tracking-tighter transition-colors"
          >
            {tech}
          </span>
        ))}
      </div>
      <div className="flex gap-6 items-center mt-auto">
        <Link
          href={`/projects/${project.slug}`}
          className="text-xs font-black uppercase tracking-widest border-b-2 border-neutral-100 dark:border-neutral-800 hover:border-black dark:hover:border-white transition-all text-black dark:text-white inline-flex items-center"
        >
          Details
        </Link>
        {project.github && (
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs font-black uppercase tracking-widest text-neutral-400 dark:text-neutral-500 hover:text-black dark:hover:text-white transition-colors inline-flex items-center"
          >
            GitHub
          </a>
        )}
      </div>
    </motion.article>
  );
}
