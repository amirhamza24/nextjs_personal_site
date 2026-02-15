"use client";

import { useTheme } from "./ThemeProvider";
import { useEffect, useState } from "react";
import { Icon } from "./Icons";

export default function Header() {
  const { theme, toggleTheme } = useTheme();
  const [activeSection, setActiveSection] = useState("");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    // Intersection Observer for active section highlighting
    const observerOptions = {
      root: null,
      rootMargin: "-20% 0px -70% 0px", // Highlighting logic: when section occupies the top portion of the screen
      threshold: 0,
    };

    const handleIntersect = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersect, observerOptions);

    // Observe all sections
    const sections = [
      "hero",
      "about",
      "skills",
      "experience",
      "education",
      "projects",
      "contact",
    ];
    sections.forEach((id) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      observer.disconnect();
    };
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
      // Optionally update active section immediately on click
      setActiveSection(id);
    }
  };

  const navLinks = [
    { name: "About", id: "about" },
    { name: "Skills", id: "skills" },
    { name: "Experience", id: "experience" },
    { name: "Education", id: "education" },
    { name: "Projects", id: "projects" },
    { name: "Contact", id: "contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? "glass py-3 shadow-2xl" : "bg-transparent py-5"
      }`}
    >
      <div className="container mx-auto px-6 md:px-12 flex items-center justify-between">
        <div
          className="text-2xl font-bold text-primary cursor-pointer tracking-wider hover:tracking-widest transition-all duration-300"
          onClick={() => scrollToSection("hero")}
          style={{ fontFamily: "var(--font-fira), monospace" }}
        >
          &lt;RIDOY /&gt;
        </div>

        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => scrollToSection(link.id)}
              className={`text-sm font-medium tracking-widest transition-colors duration-300 relative group cursor-pointer ${
                activeSection === link.id
                  ? "text-primary"
                  : "text-secondary hover:text-primary"
              }`}
            >
              {link.name}
              <span
                className={`absolute -bottom-1 left-0 h-0.5 bg-primary transition-all duration-300 ${
                  activeSection === link.id
                    ? "w-full"
                    : "w-0 group-hover:w-full"
                }`}
              ></span>
            </button>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <button
            onClick={toggleTheme}
            className="p-2.5 rounded-full glass hover:border-primary/50 transition-all duration-300 group shadow-lg cursor-pointer"
            aria-label="Toggle theme"
          >
            {theme === "dark" ? (
              <Icon
                name="sun"
                className="w-5 h-5 text-primary group-hover:rotate-12 transition-transform"
              />
            ) : (
              <Icon
                name="moon"
                className="w-5 h-5 text-primary group-hover:rotate-12 transition-transform"
              />
            )}
          </button>
        </div>
      </div>
    </header>
  );
}
