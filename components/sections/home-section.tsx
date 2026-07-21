"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowRight, Download, MapPin } from "lucide-react";
import { FaGithub, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { ButtonLink } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";
import { profile } from "@/data/profile";
import { isFilled } from "@/lib/utils";

const socialMap = [
  { key: "linkedin", label: "LinkedIn", icon: FaLinkedinIn },
  { key: "github", label: "GitHub", icon: FaGithub },
  { key: "instagram", label: "Instagram", icon: FaInstagram },
] as const;

export function HomeSection() {
  return (
    <section id="home" className="relative overflow-hidden pt-32 sm:pt-36">
      <div className="absolute inset-0 -z-10 bg-section-grid bg-[size:34px_34px] opacity-60" />
      <div className="absolute left-1/2 top-20 -z-10 h-72 w-72 -translate-x-1/2 rounded-full bg-primary/10 blur-3xl" />

      <Container>
        <div className="grid items-center gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:gap-14">
          <Reveal>
            <div className="max-w-3xl">
              <span className="inline-flex rounded-full border border-primary/15 bg-card px-4 py-2 text-sm font-medium text-primary shadow-soft">
                Handcrafted portfolio for a product-minded frontend engineer
              </span>
              <h1 className="mt-6 text-balance text-4xl font-semibold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
                {profile.name}
              </h1>
              <p className="mt-4 text-xl text-primary sm:text-2xl">{profile.title}</p>
              <p className="mt-6 max-w-2xl text-pretty text-base leading-8 text-muted sm:text-lg">{profile.intro}</p>

              <div className="mt-8 flex flex-wrap gap-3">
                <ButtonLink href={profile.resumeUrl} download>
                  <Download className="h-4 w-4" />
                  Download Resume
                </ButtonLink>
                <ButtonLink href="#contact" variant="secondary">
                  Contact Me
                  <ArrowRight className="h-4 w-4" />
                </ButtonLink>
              </div>

              <div className="mt-8 flex flex-wrap items-center gap-3">
                {socialMap.map(({ key, label, icon: Icon }) => {
                  const url = profile.socials[key];

                  if (!isFilled(url)) {
                    return null;
                  }

                  return (
                    <a
                      key={key}
                      href={url}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={label}
                      className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-border bg-card text-foreground shadow-soft transition duration-300 hover:-translate-y-1 hover:text-primary"
                    >
                      <Icon className="h-4 w-4" />
                    </a>
                  );
                })}
              </div>

              <div className="mt-10 grid gap-4 sm:grid-cols-3">
                {profile.stats.map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, y: 22 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.45, delay: index * 0.08 }}
                  >
                    <Card className="h-full p-5">
                      <p className="text-2xl font-semibold text-foreground">{stat.value}</p>
                      <p className="mt-2 text-sm leading-6 text-muted">{stat.label}</p>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="relative mx-auto w-full max-w-md">
              <div className="absolute -left-6 top-8 hidden h-24 w-24 rounded-[2rem] bg-white/80 shadow-clay sm:block" />
              <div className="absolute -right-4 bottom-10 hidden h-28 w-28 rounded-[2rem] bg-primary/10 shadow-soft sm:block" />

              <Card className="relative overflow-hidden p-5 sm:p-6">
                <div className="relative aspect-[4/5] overflow-hidden rounded-[24px] bg-surface">
                  <Image
                    src={profile.profileImage}
                    alt={`${profile.name} profile photo`}
                    fill
                    priority
                    sizes="(max-width: 768px) 90vw, 420px"
                    className="object-cover"
                  />
                </div>

                <div className="mt-5 rounded-[24px] border border-border bg-surface p-5">
                  <div className="flex items-center gap-2 text-sm text-muted">
                    <MapPin className="h-4 w-4 text-primary" />
                    <span>{profile.location}</span>
                  </div>
                  <p className="mt-3 text-sm leading-7 text-muted">{profile.bio}</p>
                  <p className="mt-4 text-sm font-medium text-foreground">{profile.availability}</p>
                </div>
              </Card>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
