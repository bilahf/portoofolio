import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./data/**/*.{ts,tsx}",
    "./hooks/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  darkMode: ["class"],
  theme: {
    extend: {
      colors: {
        background: "rgb(var(--background) / <alpha-value>)",
        card: "rgb(var(--card) / <alpha-value>)",
        foreground: "rgb(var(--foreground) / <alpha-value>)",
        primary: "rgb(var(--primary) / <alpha-value>)",
        secondary: "rgb(var(--secondary) / <alpha-value>)",
        muted: "rgb(var(--muted) / <alpha-value>)",
        border: "rgb(var(--border) / <alpha-value>)",
        surface: "rgb(var(--surface) / <alpha-value>)",
      },
      borderRadius: {
        "4xl": "2rem",
      },
      boxShadow: {
        soft: "0 24px 60px -28px rgba(34, 34, 34, 0.15)",
        clay: "12px 12px 24px rgba(34, 34, 34, 0.08), -12px -12px 24px rgba(255, 255, 255, 0.9)",
        inset: "inset 1px 1px 0 rgba(255, 255, 255, 0.8), inset -1px -1px 0 rgba(0, 0, 0, 0.05)",
      },
      fontFamily: {
        sans: ["var(--font-sans)", "sans-serif"],
      },
      backgroundImage: {
        "section-grid":
          "linear-gradient(to right, rgba(95, 141, 78, 0.06) 1px, transparent 1px), linear-gradient(to bottom, rgba(95, 141, 78, 0.06) 1px, transparent 1px)",
      },
      animation: {
        float: "float 6s ease-in-out infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-8px)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
