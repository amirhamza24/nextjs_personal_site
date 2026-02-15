"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

interface HeroProps {
  data: {
    name: string;
    titles: string[];
    profileImage: string;
    social: {
      linkedin: string;
      github: string;
      facebook: string;
      email: string;
    };
  };
}

export default function Hero({ data }: HeroProps) {
  const [titleIndex, setTitleIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentTitle = data.titles[titleIndex];
    const timeout = setTimeout(
      () => {
        if (!isDeleting) {
          if (displayText.length < currentTitle.length) {
            setDisplayText(currentTitle.slice(0, displayText.length + 1));
          } else {
            setTimeout(() => setIsDeleting(true), 2500);
          }
        } else {
          if (displayText.length > 0) {
            setDisplayText(displayText.slice(0, -1));
          } else {
            setIsDeleting(false);
            setTitleIndex((prev) => (prev + 1) % data.titles.length);
          }
        }
      },
      isDeleting ? 60 : 120,
    );

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, titleIndex, data.titles]);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center pt-24 pb-12 overflow-hidden"
    >
      {/* Background abstract elements */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl animate-pulse delay-1000"></div>

      <div className="section-container relative z-10 w-full">
        <div className="flex flex-col items-center text-center space-y-10">
          <div className="relative group animate-fadeInUp">
            <div className="absolute -inset-1 bg-linear-to-r from-primary to-accent rounded-full blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
            <div className="relative w-40 h-40 md:w-52 md:h-52 rounded-full overflow-hidden border-2 border-primary/20 bg-background">
              <Image
                src={data.profileImage}
                alt={data.name}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
                style={{ objectPosition: "center 15%" }}
                priority
              />
            </div>
          </div>

          <div className="space-y-6 animate-fadeInUp delay-200 max-w-3xl">
            <div className="space-y-2">
              <p className="font-mono text-primary tracking-[0.3em] text-sm uppercase">
                Hi, I am
              </p>
              <h1 className="text-4xl md:text-5xl font-serif italic font-black text-foreground tracking-wider leading-tight">
                {data.name}
              </h1>
            </div>

            <div className="h-10 flex items-center justify-center">
              <h2
                className="text-xl md:text-2xl font-medium text-secondary"
                style={{ fontFamily: "var(--font-fira), monospace" }}
              >
                <span className="text-primary tracking-tighter">&gt;</span>{" "}
                {displayText}
                <span className="animate-pulse ml-1 text-primary">|</span>
              </h2>
            </div>

            <p className="text-secondary text-lg md:text-xl leading-relaxed max-w-2xl mx-auto font-light">
              A dedicated{" "}
              <span className="text-foreground font-medium underline decoration-primary/40 decoration-2 underline-offset-4">
                Software Engineer
              </span>{" "}
              building high-performance, accessible, and user-centric digital
              experiences at{" "}
              <span className="text-primary italic">Fusion Infotech Ltd.</span>
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-8 pt-4 animate-fadeInUp delay-300">
            <button className="primary-btn relative overflow-hidden px-10 py-4 rounded-full border border-primary text-primary font-mono text-sm tracking-widest transition-all duration-300 hover:text-background group  cursor-pointer">
              <span className="absolute inset-0 bg-primary translate-y-full group-hover:translate-y-0 transition-transform duration-300"></span>
              <span className="relative z-10">Download Resume</span>
            </button>

            <div className="flex gap-6">
              {[
                { icon: "linkedin", url: data.social.linkedin },
                { icon: "github", url: data.social.github },
                { icon: "facebook", url: data.social.facebook },
                { icon: "email", url: `mailto:${data.social.email}` },
              ].map((social) => (
                <a
                  key={social.icon}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-secondary hover:text-primary transition-all duration-300 hover:-translate-y-1.5 p-2"
                >
                  <SocialIcon name={social.icon} />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

import { Icon, IconName } from "./Icons";

function SocialIcon({ name }: { name: string }) {
  return <Icon name={name as IconName} className="w-5 h-5" />;
}
