"use client";

import Image from "next/image";
import { ChevronDown, MapPin } from "lucide-react";
import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { experiences } from "@/data/experience";

export function ExperienceSection() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section id="experience" className="py-24 sm:py-28">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="Experience"
            title="Experience gained through internships, projects, and academic activities"
            description="A collection of professional, academic, and organizational experiences that have helped me develop technical, analytical, and collaboration skills."
          />
        </Reveal>

        <div className="relative mt-12 space-y-6 before:absolute before:left-6 before:top-6 before:h-[calc(100%-3rem)] before:w-px before:bg-border sm:before:left-10">
          {experiences.map((item, index) => {
            const isOpen = openIndex === index;

            return (
              <Reveal key={`${item.company}-${item.position}`} delay={index * 0.06}>
                <div className="relative pl-16 sm:pl-24">
                  <span className="absolute left-[13px] top-8 h-6 w-6 rounded-full border-4 border-background bg-primary sm:left-[25px]" />

                  <Card className="p-0">
                    <button
                      type="button"
                      onClick={() => setOpenIndex(isOpen ? -1 : index)}
                      className="flex w-full flex-col gap-6 p-6 text-left sm:p-7"
                      aria-expanded={isOpen}
                    >
                      <div className="flex flex-col gap-5 lg:flex-row lg:items-start lg:justify-between">
                        <div className="flex items-start gap-4">
                          <div className="relative h-14 w-14 overflow-hidden rounded-2xl border border-border bg-surface shadow-inset">
                            <Image
                              src={item.logo}
                              alt={`${item.company} logo`}
                              fill
                              sizes="56px"
                              className="object-cover"
                            />
                          </div>
                          <div>
                            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-primary">{item.employmentType}</p>
                            <h3 className="mt-2 text-xl font-semibold text-foreground">{item.position}</h3>
                            <p className="mt-1 text-base text-muted">{item.company}</p>
                            <div className="mt-3 flex flex-wrap items-center gap-3 text-sm text-muted">
                              <span>{item.duration}</span>
                              <span className="hidden h-1 w-1 rounded-full bg-border sm:block" />
                              <span className="inline-flex items-center gap-2">
                                <MapPin className="h-4 w-4 text-primary" />
                                {item.location}
                              </span>
                            </div>
                          </div>
                        </div>

                        <div className="flex items-center gap-4">
                          <p className="max-w-md text-sm leading-7 text-muted">{item.summary}</p>
                          <ChevronDown
                            className={`hidden h-5 w-5 shrink-0 text-muted transition sm:block ${isOpen ? "rotate-180" : ""}`}
                          />
                        </div>
                      </div>
                    </button>

                    {isOpen ? (
                      <div className="border-t border-border px-6 pb-6 pt-2 sm:px-7 sm:pb-7">
                        <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
                          <div>
                            <h4 className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">Responsibilities</h4>
                            <ul className="mt-4 space-y-3 text-sm leading-7 text-muted">
                              {item.responsibilities.map((responsibility) => (
                                <li key={responsibility} className="rounded-2xl bg-surface px-4 py-3">
                                  {responsibility}
                                </li>
                              ))}
                            </ul>
                          </div>

                          <div className="space-y-6">
                            <div>
                              <h4 className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">Technologies</h4>
                              <div className="mt-4 flex flex-wrap gap-2">
                                {item.technologies.map((tech) => (
                                  <Badge key={tech}>{tech}</Badge>
                                ))}
                              </div>
                            </div>

                            {item.achievements?.length ? (
                              <div>
                                <h4 className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">Achievements</h4>
                                <ul className="mt-4 space-y-3 text-sm leading-7 text-muted">
                                  {item.achievements.map((achievement) => (
                                    <li key={achievement} className="rounded-2xl border border-border bg-surface px-4 py-3">
                                      {achievement}
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            ) : null}
                          </div>
                        </div>
                      </div>
                    ) : null}
                  </Card>
                </div>
              </Reveal>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
