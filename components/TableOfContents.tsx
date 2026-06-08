"use client";

import { useEffect, useState } from "react";

type Heading = {
  text: string;
  id: string;
};

export default function TableOfContents({ headings }: { headings: Heading[] }) {
  const [activeId, setActiveId] = useState<string>("");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      { rootMargin: "0px 0px -80% 0px" }
    );

    headings.forEach((heading) => {
      const el = document.getElementById(heading.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [headings]);

  if (headings.length === 0) return null;

  return (
    <div className="mb-12">
      <h4 className="text-sm font-black text-black dark:text-white mb-4 font-display transition-colors">
        On this page
      </h4>
      <nav className="flex flex-col relative">
        <div className="absolute left-0 top-0 bottom-0 w-[1px] bg-neutral-200 dark:bg-neutral-800 transition-colors" />
        
        {headings.map((heading) => {
          const isActive = activeId === heading.id;
          return (
            <a
              key={heading.id}
              href={`#${heading.id}`}
              className={`relative pl-4 py-1.5 text-sm font-medium transition-colors border-l-[1.5px] ${
                isActive
                  ? "border-[#10b981] text-[#10b981]"
                  : "border-transparent text-neutral-500 dark:text-neutral-400 hover:text-black dark:hover:text-white"
              }`}
            >
              {heading.text}
            </a>
          );
        })}
      </nav>
    </div>
  );
}
