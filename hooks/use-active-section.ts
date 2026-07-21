"use client";

import { useEffect, useState } from "react";

export function useActiveSection(sectionIds: string[]) {
  const [activeSection, setActiveSection] = useState(
    sectionIds[0] ?? "home",
  );

  useEffect(() => {
    const handleScroll = () => {
      // Jarak dari atas viewport untuk menentukan
      // kapan sebuah section dianggap aktif.
      // Sesuaikan jika tinggi navbar berubah.
      const offset = 150;

      let currentSection = sectionIds[0] ?? "home";

      for (const id of sectionIds) {
        const element = document.getElementById(id);

        if (!element) {
          continue;
        }

        const rect = element.getBoundingClientRect();

        // Section yang sudah melewati posisi offset
        // dianggap sebagai section yang sedang aktif.
        if (rect.top <= offset) {
          currentSection = id;
        }
      }

      setActiveSection(currentSection);
    };

    // Cek section aktif saat halaman pertama kali dibuka
    handleScroll();

    // Update section aktif ketika user melakukan scroll
    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [sectionIds]);

  return activeSection;
}