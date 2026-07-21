"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useEffect, useMemo, useState } from "react";
import { ThemeToggle } from "@/components/ui/theme-toggle";
import { Container } from "@/components/ui/container";
import { profile } from "@/data/profile";
import { useActiveSection } from "@/hooks/use-active-section";
import { cn } from "@/lib/utils";

type NavbarProps = {
  sections: Array<{ id: string; label: string }>;
};

export function Navbar({ sections }: NavbarProps) {
  const sectionIds = useMemo(() => sections.map((item) => item.id), [sections]);
  const activeSection = useActiveSection(sectionIds);
  const [menuOpen, setMenuOpen] = useState(false);
  const [isCompact, setIsCompact] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsCompact(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!menuOpen) {
      return;
    }

    const onResize = () => {
      if (window.innerWidth >= 1024) {
        setMenuOpen(false);
      }
    };

    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, [menuOpen]);

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-3 pt-3 sm:px-6">
      <Container>
        <div
          className={cn(
            "rounded-full border border-border/80 bg-card/88 shadow-soft backdrop-blur-md transition-all duration-300",
            isCompact ? "px-3 py-2" : "px-4 py-3",
          )}
        >
          <div className="flex items-center justify-between gap-4">
            <a href="#home" className="min-w-0">
              <span className="block truncate text-sm font-semibold uppercase tracking-[0.24em] text-primary">
                {profile.shortName}
              </span>
              <span className="block truncate text-xs text-muted">My Portfolio</span>
            </a>

            <nav className="hidden items-center gap-1 lg:flex" aria-label="Primary">
              {sections.map((section) => {
                const isActive = activeSection === section.id;
                return (
                  <a
                    key={section.id}
                    href={`#${section.id}`}
                    className={cn(
                      "rounded-full px-4 py-2 text-sm font-medium transition",
                      isActive ? "bg-primary text-white shadow-soft" : "text-muted hover:bg-surface hover:text-foreground",
                    )}
                    aria-current={isActive ? "page" : undefined}
                  >
                    {section.label}
                  </a>
                );
              })}
            </nav>

            <div className="flex items-center gap-2">
              <ThemeToggle />
              <button
                type="button"
                onClick={() => setMenuOpen((current) => !current)}
                className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-border bg-card text-foreground shadow-soft transition hover:bg-surface lg:hidden"
                aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
                aria-expanded={menuOpen}
                aria-controls="mobile-navigation"
              >
                {menuOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
              </button>
            </div>
          </div>


          <AnimatePresence>
            {menuOpen && (
              <nav
                id="mobile-navigation"
                className="mt-4 overflow-hidden lg:hidden"
              >
                <div className="mt-4 grid gap-2 border-t border-border/80 pt-4">
                  {sections.map((section) => {
                    const isActive = activeSection === section.id;
                    return (
                      <a
                        key={section.id}
                        href={`#${section.id}`}
                        onClick={() => setMenuOpen(false)}
                        className={cn(
                          "rounded-2xl px-4 py-3 text-sm font-medium transition",
                          isActive ? "bg-primary text-white" : "bg-surface text-foreground hover:bg-primary/10",
                        )}
                        aria-current={isActive ? "page" : undefined}
                      >
                        {section.label}
                      </a>
                    );
                  })}
                </div>
              </nav>
            )}
          </AnimatePresence>
        </div>
      </Container>
    </header>
  );
}
