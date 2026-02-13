"use client";

interface AboutProps {
  data: {
    title: string;
    description: string;
  };
}

export default function About({ data }: AboutProps) {
  return (
    <section id="about" className="py-24">
      <div className="section-container">
        <div className="flex items-center gap-4 mb-10">
          <h2 className="text-2xl md:text-3xl font-bold flex items-center shrink-0">
            {data.title}
          </h2>
          <div className="h-px bg-border w-full max-w-md hidden sm:block"></div>
        </div>

        <div className="grid md:grid-cols-[2fr_1fr] gap-12 items-start">
          <div
            className="space-y-6 text-secondary font-light leading-relaxed animate-fadeInUp"
            style={{ fontFamily: "var(--font-poppins)" }}
          >
            <p>{data.description}</p>
            <p>
              Here are a few technologies I&apos;ve been working with recently:
            </p>
            <ul className="grid grid-cols-2 gap-2 font-mono text-sm text-primary">
              <li className="flex items-center gap-2">
                <span className="text-[10px]">▹</span> JavaScript (ES6+)
              </li>
              <li className="flex items-center gap-2">
                <span className="text-[10px]">▹</span> TypeScript
              </li>
              <li className="flex items-center gap-2">
                <span className="text-[10px]">▹</span> React
              </li>
              <li className="flex items-center gap-2">
                <span className="text-[10px]">▹</span> Next.js
              </li>
              <li className="flex items-center gap-2">
                <span className="text-[10px]">▹</span> Node.js
              </li>
              <li className="flex items-center gap-2">
                <span className="text-[10px]">▹</span> Tailwind CSS
              </li>
            </ul>
          </div>

          <div className="relative group mx-auto md:mx-0 max-w-70 animate-fadeInUp delay-200">
            <div className="absolute inset-0 border-2 border-primary rounded translate-x-3 translate-y-3 group-hover:translate-x-1 group-hover:translate-y-1 transition-transform duration-300"></div>
            <div className="relative aspect-square rounded overflow-hidden bg-primary/20">
              <div className="absolute inset-0 grayscale group-hover:grayscale-0 transition-all duration-300 mix-blend-multiply group-hover:mix-blend-normal bg-card"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
