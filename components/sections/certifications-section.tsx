"use client";

import Image from "next/image";
import { ExternalLink } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { ButtonLink } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { certifications } from "@/data/certifications";
import { isFilled } from "@/lib/utils";

export function CertificationsSection() {
  return (
    <section id="courses-certifications" className="py-24 sm:py-28">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="Courses & Certifications"
            title="Continuous learning through courses and professional certifications"
            description="A collection of courses and certifications that reflect my continuous learning across software development, data analysis, AI, and workflow automation."
          />
        </Reveal>

        <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {certifications.map((item, index) => (
            <Reveal key={item.name} delay={index * 0.05}>
              <Card className="flex h-full flex-col overflow-hidden p-0">
                <div className="relative aspect-[16/10] overflow-hidden border-b border-border bg-surface">
                  <Image src={item.image} alt={`${item.name} certificate preview`} fill sizes="(max-width: 768px) 100vw, 33vw" className="object-cover" />
                </div>

                <div className="flex h-full flex-col p-6">
                  <p className="text-xs font-semibold uppercase tracking-[0.22em] text-primary">{item.organization}</p>
                  <h3 className="mt-3 text-xl font-semibold text-foreground">{item.name}</h3>
                  <p className="mt-2 text-sm text-muted">Issued {item.issueDate}</p>

                  {isFilled(item.credentialId) ? (
                    <p className="mt-3 rounded-2xl bg-surface px-4 py-3 text-sm text-muted">Credential ID: {item.credentialId}</p>
                  ) : null}

                  <div className="mt-5">
                    <p className="text-xs font-semibold uppercase tracking-[0.22em] text-primary">Skills Learned</p>
                    <div className="mt-3 flex flex-wrap gap-2">
                      {item.skillsLearned.map((skill) => (
                        <Badge key={skill}>{skill}</Badge>
                      ))}
                    </div>
                  </div>

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
          ))}
        </div>
      </Container>
    </section>
  );
}
