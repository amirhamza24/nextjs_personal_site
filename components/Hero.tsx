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

function SocialIcon({ name }: { name: string }) {
  if (name === "linkedin")
    return (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    );
  if (name === "github")
    return (
      <svg
        fill="currentColor"
        width="20px"
        height="20px"
        viewBox="0 -0.5 25 25"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="m12.301 0h.093c2.242 0 4.34.613 6.137 1.68l-.055-.031c1.871 1.094 3.386 2.609 4.449 4.422l.031.058c1.04 1.769 1.654 3.896 1.654 6.166 0 5.406-3.483 10-8.327 11.658l-.087.026c-.063.02-.135.031-.209.031-.162 0-.312-.054-.433-.144l.002.001c-.128-.115-.208-.281-.208-.466 0-.005 0-.01 0-.014v.001q0-.048.008-1.226t.008-2.154c.007-.075.011-.161.011-.249 0-.792-.323-1.508-.844-2.025.618-.061 1.176-.163 1.718-.305l-.076.017c.573-.16 1.073-.373 1.537-.642l-.031.017c.508-.28.938-.636 1.292-1.058l.006-.007c.372-.476.663-1.036.84-1.645l.009-.035c.209-.683.329-1.468.329-2.281 0-.045 0-.091-.001-.136v.007c0-.022.001-.047.001-.072 0-1.248-.482-2.383-1.269-3.23l.003.003c.168-.44.265-.948.265-1.479 0-.649-.145-1.263-.404-1.814l.011.026c-.115-.022-.246-.035-.381-.035-.334 0-.649.078-.929.216l.012-.005c-.568.21-1.054.448-1.512.726l.038-.022-.609.384c-.922-.264-1.981-.416-3.075-.416s-2.153.152-3.157.436l.081-.02q-.256-.176-.681-.433c-.373-.214-.814-.421-1.272-.595l-.066-.022c-.293-.154-.64-.244-1.009-.244-.124 0-.246.01-.364.03l.013-.002c-.248.524-.393 1.139-.393 1.788 0 .531.097 1.04.275 1.509l-.01-.029c-.785.844-1.266 1.979-1.266 3.227 0 .025 0 .051.001.076v-.004c-.001.039-.001.084-.001.13 0 .809.12 1.591.344 2.327l-.015-.057c.189.643.476 1.202.85 1.693l-.009-.013c.354.435.782.793 1.267 1.062l.022.011c.432.252.933.465 1.46.614l.046.011c.466.125 1.024.227 1.595.284l.046.004c-.431.428-.718 1-.784 1.638l-.001.012c-.207.101-.448.183-.699.236l-.021.004c-.256.051-.549.08-.85.08-.022 0-.044 0-.066 0h.003c-.394-.008-.756-.136-1.055-.348l.006.004c-.371-.259-.671-.595-.881-.986l-.007-.015c-.198-.336-.459-.614-.768-.827l-.009-.006c-.225-.169-.49-.301-.776-.38l-.016-.004-.32-.048c-.023-.002-.05-.003-.077-.003-.14 0-.273.028-.394.077l.007-.003q-.128.072-.08.184c.039.086.087.16.145.225l-.001-.001c.061.072.13.135.205.19l.003.002.112.08c.283.148.516.354.693.603l.004.006c.191.237.359.505.494.792l.01.024.16.368c.135.402.38.738.7.981l.005.004c.3.234.662.402 1.057.478l.016.002c.33.064.714.104 1.106.112h.007c.045.002.097.002.15.002.261 0 .517-.021.767-.062l-.027.004.368-.064q0 .609.008 1.418t.008.873v.014c0 .185-.08.351-.208.466h-.001c-.119.089-.268.143-.431.143-.075 0-.147-.011-.214-.032l.005.001c-4.929-1.689-8.409-6.283-8.409-11.69 0-2.268.612-4.393 1.681-6.219l-.032.058c1.094-1.871 2.609-3.386 4.422-4.449l.058-.031c1.739-1.034 3.835-1.645 6.073-1.645h.098-.005zm-7.64 17.666q.048-.112-.112-.192-.16-.048-.208.032-.048.112.112.192.144.096.208-.032zm.497.545q.112-.08-.032-.256-.16-.144-.256-.048-.112.08.032.256.159.157.256.047zm.48.72q.144-.112 0-.304-.128-.208-.272-.096-.144.08 0 .288t.272.112zm.672.673q.128-.128-.064-.304-.192-.192-.32-.048-.144.128.064.304.192.192.32.044zm.913.4q.048-.176-.208-.256-.24-.064-.304.112t.208.24q.24.097.304-.096zm1.009.08q0-.208-.272-.176-.256 0-.256.176 0 .208.272.176.256.001.256-.175zm.929-.16q-.032-.176-.288-.144-.256.048-.224.24t.288.128.225-.224z" />
      </svg>
    );
  if (name === "facebook")
    return (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
      </svg>
    );
  if (name === "email")
    return (
      <svg
        className="w-5 h-5"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
        />
      </svg>
    );
  return null;
}
