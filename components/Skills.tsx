"use client";

// Skills component with individual technology icons

interface Skill {
  name: string;
  percentage: number;
  category: string;
}

interface SkillsProps {
  data: Skill[];
}

export default function Skills({ data }: SkillsProps) {
  return (
    <section id="skills" className="py-24 bg-muted/20 dark:bg-transparent">
      <div className="section-container">
        <div className="flex items-center gap-4 mb-12">
          <h2 className="text-2xl md:text-3xl font-bold flex items-center shrink-0">
            My Skills
          </h2>
          <div className="h-px bg-border w-full max-w-sm hidden sm:block"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {data.map((skill, index) => (
            <div
              key={skill.name}
              className="group p-5 rounded-xl border border-border/40 bg-card/30 hover:bg-card/60 hover:border-primary/30 transition-all duration-300"
              style={{
                transitionDelay: `${index * 50}ms`,
                fontFamily: "var(--font-fira), monospace",
              }}
            >
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 flex items-center justify-center rounded-lg bg-background border border-border/40 group-hover:border-primary/40 transition-all duration-300">
                    <SkillIcon name={skill.name} />
                  </div>
                  <span className="font-mono text-sm font-medium tracking-tight text-foreground group-hover:text-primary transition-colors duration-300">
                    {skill.name}
                  </span>
                </div>
                <span className="font-mono text-xs text-secondary">
                  {skill.percentage}%
                </span>
              </div>

              <div className="h-1.5 w-full bg-muted/40 rounded-full overflow-hidden">
                <div
                  className="h-full bg-primary flex items-center justify-end pr-1"
                  style={{
                    width: `${skill.percentage}%`,
                    animation: `grow-width 1.5s ease-out forwards ${index * 0.1}s`,
                  }}
                >
                  <div className="w-1 h-1 bg-white rounded-full shadow-[0_0_8px_white]"></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

import { Icon, IconName } from "./Icons";

function SkillIcon({ name }: { name: string }) {
  const n = name.toLowerCase();
  let iconName: IconName = "default";

  if (n.includes("c++")) iconName = "c++";
  else if (n === "c") iconName = "c";
  else if (n === "java") iconName = "java";
  else if (n === "python") iconName = "python";
  else if (n === "html") iconName = "html";
  else if (n === "css") iconName = "css";
  else if (n === "bootstrap") iconName = "bootstrap";
  else if (n === "tailwind") iconName = "tailwind";
  else if (n === "javascript" || n === "js") iconName = "javascript";
  else if (n === "typescript" || n === "ts") iconName = "typescript";
  else if (n.includes("react")) iconName = "react";
  else if (n.includes("next")) iconName = "next";
  else if (n.includes("node")) iconName = "node";
  else if (n.includes("express")) iconName = "express";
  else if (n === "nosql" || n.includes("mongo")) iconName = "nosql";
  else if (n.includes("postgres")) iconName = "postgres";
  else if (n.includes("mysql") || n.includes("sql")) iconName = "mysql";
  else if (n.includes("prisma")) iconName = "prisma";

  return (
    <Icon
      name={iconName}
      className="w-6 h-6 grayscale opacity-70 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-300"
    />
  );
}
