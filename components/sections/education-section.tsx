"use client";

import Image from "next/image";
import { GraduationCap } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { education } from "@/data/education";
import { isFilled } from "@/lib/utils";

export function EducationSection() {
  return (
    <section id="education" className="py-24 sm:py-28">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="Education"
            title="Academic background and foundation in Informatics Engineering"
            description="My academic journey, activities, and relevant coursework that built my foundation in software development, data, and information technology"
          />
        </Reveal>

        <div className="relative mt-12 space-y-6 before:absolute before:left-6 before:top-8 before:h-[calc(100%-4rem)] before:w-px before:bg-border sm:before:left-10">
          {education.map((item, index) => (
            <Reveal key={item.institution} delay={index * 0.06}>
              <div className="relative pl-16 sm:pl-24">
                <span className="absolute left-[13px] top-10 h-6 w-6 rounded-full border-4 border-background bg-primary sm:left-[25px]" />

                <Card>
                  <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr]">
                    <div>
                      <div className="flex items-start gap-4">
                        <div className="relative h-14 w-14 overflow-hidden rounded-2xl border border-border bg-surface shadow-inset">
                          <Image src={item.logo} alt={`${item.institution} logo`} fill sizes="56px" className="object-cover" />
                        </div>
                        <div>
                          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-primary">Education</p>
                          <h3 className="mt-2 text-xl font-semibold text-foreground">{item.degree}</h3>
                          <p className="mt-1 text-muted">{item.institution}</p>
                          <div className="mt-3 flex flex-wrap gap-2">
                            <Badge>{item.major}</Badge>
                            <Badge className="bg-surface">{item.duration}</Badge>
                            {isFilled(item.gpa) ? <Badge className="bg-surface">GPA {item.gpa}</Badge> : null}
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="grid gap-6 sm:grid-cols-2">
                      <div className="rounded-[24px] bg-surface p-5">
                        <div className="flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.18em] text-primary">
                          <GraduationCap className="h-4 w-4" />
                          Activities
                        </div>
                        <ul className="mt-4 space-y-3 text-sm leading-7 text-muted">
                          {item.activities.map((activity) => (
                            <li key={activity}>{activity}</li>
                          ))}
                        </ul>
                      </div>

                      <div className="rounded-[24px] bg-surface p-5">
                        <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">Relevant Coursework</p>
                        <div className="mt-4 flex flex-wrap gap-2">
                          {item.coursework.map((course) => (
                            <Badge key={course}>{course}</Badge>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </Card>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
