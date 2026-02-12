"use client";

interface FooterProps {
  data: {
    name: string;
  };
}

export default function Footer({ data }: FooterProps) {
  return (
    <footer className="py-10 px-6 md:px-12 border-t border-border/70">
      <div className="container mx-auto flex flex-col items-center gap-6">
        <div className="flex gap-8">
          {["GitHub", "LinkedIn", "Facebook"].map((social) => (
            <a
              key={social}
              href="#"
              className="text-secondary hover:text-primary transition-colors font-mono text-[10px] uppercase tracking-[0.2em]"
            >
              {social}
            </a>
          ))}
        </div>

        <div className="text-center space-y-2">
          <p className="text-secondary font-mono text-[10px] tracking-widest uppercase">
            Designed & Built by{" "}
            <span className="text-primary">{data.name}</span>
          </p>
          <p className="text-muted-foreground font-mono text-[9px] tracking-widest uppercase">
            Built with Next.js, TypeScript & Tailwind CSS
          </p>
          <p className="text-muted-foreground font-mono text-[9px] tracking-widest uppercase mt-4">
            &copy; {new Date().getFullYear()} All Rights Reserved
          </p>
        </div>
      </div>
    </footer>
  );
}
