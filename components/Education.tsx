"use client";

interface EducationItem {
  period: string;
  institution: string;
  degree: string;
  field: string;
  gpa: string;
  research: string;
}

interface EducationProps {
  data: EducationItem[];
}

export default function Education({ data }: EducationProps) {
  return (
    <section id="education" className="py-24 bg-transparent">
      <div className="section-container">
        <div className="flex items-center gap-4 mb-12 text-center md:text-left">
          <h2 className="text-2xl md:text-3xl font-bold flex items-center shrink-0 mx-auto md:mx-0">
            Education
          </h2>
          <div className="h-px bg-border w-full max-w-sm hidden md:block"></div>
        </div>

        <div className="grid gap-6">
          {data.map((edu, index) => (
            <div
              key={index}
              className="bg-card border border-border rounded p-8 hover:border-primary/50 transition-all duration-300 animate-fadeInUp"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                <div>
                  <h3 className="text-xl font-bold text-foreground mb-1">
                    {edu.institution}
                  </h3>
                  <p className="font-mono text-sm text-primary">
                    {edu.degree} {edu.field && `in ${edu.field}`}
                  </p>
                </div>
                <span className="font-mono text-xs text-secondary mt-2 md:mt-0 uppercase tracking-widest">
                  {edu.period}
                </span>
              </div>

              <div className="space-y-2 pt-2 border-t border-border/50">
                <p className="text-secondary text-sm flex items-center gap-2">
                  <span className="text-primary tracking-tighter text-[10px]">
                    ▹
                  </span>
                  <span className="font-semibold text-foreground/80">GPA:</span>{" "}
                  {edu.gpa}
                </p>
                {edu.research !== "No" && (
                  <p className="text-secondary text-sm flex items-start gap-2">
                    <span className="text-primary tracking-tighter text-[10px] mt-1">
                      ▹
                    </span>
                    <span>
                      <span className="font-semibold text-foreground/80">
                        Research:
                      </span>{" "}
                      {edu.research}
                    </span>
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
