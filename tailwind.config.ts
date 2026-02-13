import type { Config } from "tailwindcss";

export default {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        border: "hsl(var(--border))",
      },
      fontFamily: {
        sans: ["var(--font-poppins)", "sans-serif"],
        serif: ["var(--font-playfair)", "serif"],
        mono: ["var(--font-fira)", "monospace"],
      },
      animation: {
        fadeInUp: "fadeInUp 0.6s ease-out forwards",
        slideInLeft: "slideInLeft 0.6s ease-out forwards",
        slideInRight: "slideInRight 0.6s ease-out forwards",
        scaleIn: "scaleIn 0.5s ease-out forwards",
      },
    },
  },
  plugins: [],
} satisfies Config;
