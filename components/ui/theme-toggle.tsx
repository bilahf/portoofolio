"use client";

import { MoonStar, SunMedium } from "lucide-react";
import { useEffect, useState } from "react";

const storageKey = "portfolio-theme";

export function ThemeToggle() {
  const [mounted, setMounted] = useState(false);
  const [theme, setTheme] = useState<"light" | "dark">("light");

  useEffect(() => {
    setMounted(true);
    const savedTheme = window.localStorage.getItem(storageKey) as "light" | "dark" | null;
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const nextTheme = savedTheme ?? (prefersDark ? "dark" : "light");

    setTheme(nextTheme);
    document.documentElement.classList.toggle("dark", nextTheme === "dark");
  }, []);

  function toggleTheme() {
    const nextTheme = theme === "light" ? "dark" : "light";
    setTheme(nextTheme);
    document.documentElement.classList.toggle("dark", nextTheme === "dark");
    window.localStorage.setItem(storageKey, nextTheme);
  }

  if (!mounted) {
    return (
      <button
        type="button"
        className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-border bg-card text-foreground shadow-soft"
        aria-label="Toggle color theme"
      >
        <SunMedium className="h-4 w-4" />
      </button>
    );
  }

  return (
    <button
      type="button"
      onClick={toggleTheme}
      className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-border bg-card text-foreground shadow-soft transition hover:-translate-y-0.5 hover:bg-surface"
      aria-label="Toggle color theme"
    >
      {theme === "light" ? <MoonStar className="h-4 w-4" /> : <SunMedium className="h-4 w-4" />}
    </button>
  );
}
