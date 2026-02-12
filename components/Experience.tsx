"use client";

interface ExperienceItem {
  period: string;
  position: string;
  company: string;
  current: boolean;
}

interface ExperienceProps {
  data: ExperienceItem[];
}

export default function Experience({ data }: ExperienceProps) {
  return (
    <section id="experience" className="py-24">
      <div className="section-container">
        <div className="flex items-center gap-4 mb-12">
          <h2 className="text-2xl md:text-3xl font-bold flex items-center shrink-0">
            Where I&apos;ve Worked
          </h2>
          <div className="h-px bg-border w-full max-w-sm hidden sm:block"></div>
        </div>

        <div className="space-y-8">
          {data.map((exp, index) => (
            <div
              key={index}
              className="relative pl-8 animate-fadeInUp"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              {/* Timeline marker */}
              <div className="absolute left-0 top-2.75 w-2 h-2 rounded-full bg-primary" />
              <div className="absolute left-0.75 top-6 bottom-0 w-0.5 bg-border h-[calc(100%+2.5rem)] last:h-0" />

              <div className="space-y-2">
                <div className="flex flex-wrap items-baseline gap-2">
                  <h3 className="text-xl font-bold text-foreground">
                    {exp.position}
                    <span className="text-primary mx-2">@</span>
                    <span className="text-primary italic inline-block">
                      {exp.company}
                    </span>
                  </h3>
                </div>
                <p className="font-mono text-xs text-secondary uppercase tracking-widest">
                  {exp.period}
                </p>
                <ul className="space-y-3 pt-2">
                  <li className="flex gap-3 text-secondary leading-relaxed">
                    <span className="text-primary text-xs mt-1.5 tracking-tighter">
                      ▹
                    </span>
                    <span>
                      Developed and maintained responsive web applications using
                      modern technologies and best practices.
                    </span>
                  </li>
                  <li className="flex gap-3 text-secondary leading-relaxed">
                    <span className="text-primary text-xs mt-1.5 tracking-tighter">
                      ▹
                    </span>
                    <span>
                      Collaborated with cross-functional teams to deliver
                      high-quality software solutions.
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
