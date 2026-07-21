"use client";

import Image from "next/image";
import { ExternalLink } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { ButtonLink } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { achievements } from "@/data/achievements";
import { isFilled } from "@/lib/utils";

export function AchievementsSection() {
  return (
    <section id="achievements" className="py-24 sm:py-28">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="Achievements"
            title="Recognition earned through consistency, craft, and community contribution"
            description="This section gives achievements enough visual weight to feel meaningful without making the page noisy or overstated."
          />
        </Reveal>

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {achievements.map((item, index) => {
            const Icon = item.icon;

            return (
              <Reveal key={item.title} delay={index * 0.05}>
                <Card className="flex h-full flex-col overflow-hidden p-0">
                  <div className="relative aspect-[5/4] overflow-hidden border-b border-border bg-surface">
                    <Image src={item.image} alt={`${item.title} illustration`} fill sizes="(max-width: 1024px) 100vw, 33vw" className="object-cover" />
                  </div>

                  <div className="flex h-full flex-col p-6">
                    <div className="flex items-center gap-3">
                      <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                        <Icon className="h-5 w-5" />
                      </span>
                      <div>
                        <p className="text-sm text-muted">{item.organization}</p>
                        <Badge className="mt-2">{item.year}</Badge>
                      </div>
                    </div>

                    <h3 className="mt-5 text-xl font-semibold text-foreground">{item.title}</h3>
                    <p className="mt-3 text-sm leading-7 text-muted">{item.description}</p>

                    {item.certificateEnabled && isFilled(item.certificateUrl) ? (
                      <div className="mt-6">
                        <ButtonLink href={item.certificateUrl!} variant="secondary">
                          <ExternalLink className="h-4 w-4" />
                          View Certificate
                        </ButtonLink>
                      </div>
                    ) : null}
                  </div>
                </Card>
              </Reveal>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
