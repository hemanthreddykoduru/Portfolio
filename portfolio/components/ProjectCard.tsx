import Link from "next/link";
import { Project } from "../data/projects";

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="border border-neutral-200 p-6 hover:border-neutral-400 transition-colors duration-200 group flex flex-col h-full bg-white">
      <div className="flex items-start justify-between mb-3">
        <h3 className="text-lg font-bold tracking-tight text-black">{project.name}</h3>
        <a
          href={project.live}
          target="_blank"
          rel="noopener noreferrer"
          className="text-xs text-neutral-800 hover:text-black transition-colors font-bold"
        >
          ↗ Live
        </a>
      </div>
      <p className="text-sm text-neutral-800 mb-4 leading-relaxed flex-grow font-medium">
        {project.tagline}
      </p>
      <div className="flex flex-wrap gap-2 mb-6">
        {project.stack.map(tech => (
          <span
            key={tech}
            className="text-[10px] px-2 py-0.5 bg-neutral-200 text-neutral-900 rounded-full font-bold"
          >
            {tech}
          </span>
        ))}
      </div>
      <div className="flex gap-4 items-center mt-auto">
        <Link
          href={`/projects/${project.slug}`}
          className="text-xs font-bold underline underline-offset-4 text-neutral-700 hover:text-black transition-colors inline-flex items-center"
        >
          View details <span className="ml-1 group-hover:translate-x-1 transition-transform"></span>
        </Link>
        {project.github && (
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs font-bold underline underline-offset-4 text-neutral-400 hover:text-black transition-colors inline-flex items-center"
          >
            GitHub repo
          </a>
        )}
      </div>
    </article>
  );
}
