"use client";

interface ContactProps {
  data: {
    title: string;
    description: string;
  };
  social: {
    linkedin: string;
    github: string;
    facebook: string;
    email: string;
  };
}

export default function Contact({ data, social }: ContactProps) {
  return (
    <section id="contact" className="py-32 px-6 md:px-12">
      <div className="container mx-auto max-w-2xl text-center">
        <div className="flex flex-col items-center gap-4 mb-6">
          <p className="font-mono text-primary text-sm tracking-[0.2em] animate-fadeInUp">
            What&apos;s Next?
          </p>
          <h2
            className="text-4xl md:text-5xl font-bold text-foreground animate-fadeInUp delay-100"
            style={{ fontFamily: "var(--font-fira), monospace" }}
          >
            {data.title}
          </h2>
        </div>

        <p className="text-secondary text-lg leading-relaxed mb-12 animate-fadeInUp delay-200">
          {data.description}
        </p>

        <div className="flex flex-col items-center gap-10 animate-fadeInUp delay-300">
          <a
            href={`mailto:${social.email}`}
            className="px-10 py-5 border border-primary text-primary font-mono text-sm tracking-[0.2em] rounded hover:bg-primary/10 transition-all duration-300 hover:-translate-y-1 block w-fit"
            style={{ fontFamily: "var(--font-poppins)" }}
          >
            Say Hello
          </a>

          <div className="flex items-center gap-8 text-secondary">
            {[
              { name: "Github", url: social.github },
              { name: "Linkedin", url: social.linkedin },
              { name: "Facebook", url: social.facebook },
            ].map((link) => (
              <a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-primary transition-colors font-mono text-xs uppercase tracking-widest"
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
