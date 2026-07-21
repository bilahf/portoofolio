"use client";

import { useEffect, useState } from "react";

export function useActiveSection(sectionIds: string[]) {
  const [activeSection, setActiveSection] = useState(
    sectionIds[0] ?? "home",
  );

  useEffect(() => {
    const handleScroll = () => {
      // Posisi scroll + offset navbar fixed
      const scrollPosition = window.scrollY + 120;

      let currentSection = sectionIds[0] ?? "home";

      for (const id of sectionIds) {
        const element = document.getElementById(id);

        if (!element) {
          continue;
        }

        if (scrollPosition >= element.offsetTop) {
          currentSection = id;
        }
      }

      setActiveSection(currentSection);
    };

    // Jalankan sekali saat pertama kali halaman dibuka
    handleScroll();

    // Update ketika user scroll
    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [sectionIds]);

  return activeSection;
}