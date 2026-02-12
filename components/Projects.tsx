"use client";

import Image from "next/image";

interface Project {
  title: string;
  description: string;
  technologies: string[];
  image: string;
}

interface ProjectsProps {
  data: Project[];
}

export default function Projects({ data }: ProjectsProps) {
  return (
    <section id="projects" className="py-24 bg-background/50">
      <div className="section-container">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-16">
          <div className="space-y-2">
            <p className="font-mono text-primary text-sm tracking-widest uppercase">
              My Creative Work
            </p>
            <h2 className="text-3xl md:text-5xl font-bold text-foreground">
              Projects I&apos;ve Developed
            </h2>
          </div>
          <div className="h-px bg-primary/20 grow max-w-xs hidden lg:block mb-4"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
          {data.map((project, index) => (
            <div
              key={index}
              className="group relative bg-card border border-border/40 rounded-xl overflow-hidden hover:border-primary/40 transition-all duration-500 hover:-translate-y-2 flex flex-col"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Project Image Container */}
              <div className="relative aspect-16/10 overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-background/40 group-hover:bg-background/10 transition-colors duration-500"></div>
              </div>

              {/* Project Content */}
              <div className="p-6 flex flex-col grow space-y-4">
                <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors duration-300">
                  {project.title}
                </h3>

                <p className="text-secondary text-sm leading-relaxed grow min-h-20">
                  {project.description}
                </p>

                {/* Tech List at bottom */}
                <div className="flex flex-wrap gap-2 pt-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 bg-primary/5 border border-primary/10 rounded text-[10px] font-mono text-primary group-hover:bg-primary/10 transition-colors duration-300 tracking-wide"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="pt-4 border-t border-border/20 flex items-center justify-between mt-auto">
                  <div className="flex gap-4">
                    <a
                      href="#"
                      className="p-2 bg-muted/30 rounded-full text-secondary hover:text-primary hover:bg-primary/10 transition-all duration-300"
                      aria-label="Github link"
                    >
                      <svg
                        className="w-4 h-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                        />
                      </svg>
                    </a>
                  </div>

                  <button className="flex items-center gap-2 px-4 py-2 bg-primary/10 hover:bg-primary border border-primary/20 hover:border-primary text-primary hover:text-background font-mono text-[11px] font-bold rounded transition-all duration-300 tracking-wide">
                    VIEW DETAILS
                    <svg
                      className="w-3 h-3"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M14 5l7 7m0 0l-7 7m7-7H3"
                      />
                    </svg>
                  </button>
                </div>
              </div>

              {/* Decorative accent */}
              <div className="absolute top-0 right-0 w-24 h-24 bg-primary/10 blur-2xl -translate-y-1/2 translate-x-1/2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
