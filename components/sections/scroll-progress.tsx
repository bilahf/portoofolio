"use client";

import { motion, useSpring } from "framer-motion";
import { useScrollProgress } from "@/hooks/use-scroll-progress";

export function ScrollProgress() {
  const progress = useScrollProgress();
  const scaleX = useSpring(progress / 100, {
    stiffness: 150,
    damping: 28,
    mass: 0.2,
  });

  return <motion.div className="fixed left-0 top-0 z-[60] h-1 w-full origin-left bg-primary" style={{ scaleX }} />;
}
