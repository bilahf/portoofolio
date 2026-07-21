"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";

export function ThankYouSection() {
  return (
    <section id="thank-you" className="relative overflow-hidden py-24 sm:py-28">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <motion.div
          className="absolute left-[10%] top-8 h-40 w-40 rounded-full bg-primary/10 blur-2xl"
          animate={{ y: [0, -12, 0] }}
          transition={{ repeat: Number.POSITIVE_INFINITY, duration: 8, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute right-[12%] top-20 h-48 w-48 rounded-[42%] bg-secondary/20 blur-2xl"
          animate={{ y: [0, 16, 0] }}
          transition={{ repeat: Number.POSITIVE_INFINITY, duration: 9, ease: "easeInOut" }}
        />
      </div>

      <Container>
        <Reveal>
          <div className="mx-auto max-w-3xl rounded-[36px] border border-border bg-card px-8 py-14 text-center shadow-soft sm:px-12">
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-primary">Thank You</p>
            <h2 className="mt-5 text-balance text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
              Thank you for visiting my portfolio.
            </h2>
            <p className="mt-5 text-pretty text-base leading-8 text-muted sm:text-lg">
              I appreciate your time and interest. Feel free to connect with me if you are building thoughtful products, growing a frontend team, or looking for a collaborator who values clarity and craft.
            </p>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
