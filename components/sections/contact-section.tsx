"use client";

import { Check, Copy, Mail, MapPin, Phone } from "lucide-react";
import { useState } from "react";
import { FaGithub, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { Badge } from "@/components/ui/badge";
import { Button, ButtonLink } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { contact } from "@/data/contact";
import { isFilled } from "@/lib/utils";

type CopyState = "email" | "phone" | null;

export function ContactSection() {
  const [copied, setCopied] = useState<CopyState>(null);

  async function copyValue(value: string, type: Exclude<CopyState, null>) {
    await navigator.clipboard.writeText(value);
    setCopied(type);
    window.setTimeout(() => setCopied(null), 1800);
  }

  return (
    <section id="contact" className="py-24 sm:py-28">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="Contact"
            title="Let’s connect and build something meaningful together"
            description="I’m open to opportunities in software development, IT, data, and technology. Feel free to reach out if you’d like to discuss a project, collaboration, or career opportunity"
          />
        </Reveal>

        <Reveal delay={0.05}>
          <Card className="mt-12 overflow-hidden p-0">
            <div className="grid lg:grid-cols-[0.9fr_1.1fr]">
              <div className="bg-surface p-7 sm:p-8">
                <p className="text-sm font-semibold uppercase tracking-[0.24em] text-primary">Reach Out</p>
                <h3 className="mt-4 text-3xl font-semibold text-foreground">Open to new opportunities and meaningful collaborations</h3>
                <p className="mt-4 max-w-lg text-sm leading-7 text-muted">
                  Whether you’re looking for a fresh graduate to join your team or interested in collaborating on a technology project, I’d be happy to connect
                </p>

                <div className="mt-8 grid gap-4">
                  <div className="rounded-[24px] border border-border bg-card p-5">
                    <div className="flex items-center gap-3">
                      <Mail className="h-5 w-5 text-primary" />
                      <div>
                        <p className="text-xs uppercase tracking-[0.2em] text-muted">Email</p>
                        <p className="text-sm font-medium text-foreground">{contact.email}</p>
                      </div>
                    </div>
                  </div>

                  <div className="rounded-[24px] border border-border bg-card p-5">
                    <div className="flex items-center gap-3">
                      <Phone className="h-5 w-5 text-primary" />
                      <div>
                        <p className="text-xs uppercase tracking-[0.2em] text-muted">Phone</p>
                        <p className="text-sm font-medium text-foreground">{contact.phone}</p>
                      </div>
                    </div>
                  </div>

                  <div className="rounded-[24px] border border-border bg-card p-5">
                    <div className="flex items-center gap-3">
                      <MapPin className="h-5 w-5 text-primary" />
                      <div>
                        <p className="text-xs uppercase tracking-[0.2em] text-muted">Location</p>
                        <p className="text-sm font-medium text-foreground">{contact.location}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-7 sm:p-8">
                <div className="flex flex-wrap gap-2">
                  <Badge>Copy-ready contact actions</Badge>
                  <Badge className="bg-surface">Accessible buttons</Badge>
                  <Badge className="bg-surface">Optional socials</Badge>
                </div>

                <div className="mt-8 flex flex-wrap gap-3">
                  <Button variant="primary" onClick={() => copyValue(contact.email, "email")}>
                    {copied === "email" ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
                    {copied === "email" ? "Copied Email" : "Copy Email"}
                  </Button>
                  <Button variant="secondary" onClick={() => copyValue(contact.phone, "phone")}>
                    {copied === "phone" ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
                    {copied === "phone" ? "Copied Phone" : "Copy Phone Number"}
                  </Button>
                </div>

                <div className="mt-10 grid gap-4 sm:grid-cols-2">
                  {contact.linkedin ? (
                    <ButtonLink href={contact.linkedin} variant="secondary" className="justify-start rounded-[22px]">
                      <FaLinkedinIn className="h-4 w-4" />
                      LinkedIn
                    </ButtonLink>
                  ) : null}
                  {contact.github ? (
                    <ButtonLink href={contact.github} variant="secondary" className="justify-start rounded-[22px]">
                      <FaGithub className="h-4 w-4" />
                      GitHub
                    </ButtonLink>
                  ) : null}
                  {isFilled(contact.instagram) ? (
                    <ButtonLink href={contact.instagram!} variant="secondary" className="justify-start rounded-[22px]">
                      <FaInstagram className="h-4 w-4" />
                      Instagram
                    </ButtonLink>
                  ) : null}
                </div>

                <div className="mt-10 rounded-[28px] bg-surface p-6">
                  <p className="text-xs font-semibold uppercase tracking-[0.22em] text-primary">Direct Contacts</p>
                  <div className="mt-4 grid gap-4 text-sm text-muted sm:grid-cols-2">
                    <p>
                      <span className="block text-foreground">Email</span>
                      {contact.email}
                    </p>
                    <p>
                      <span className="block text-foreground">Phone</span>
                      {contact.phone}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </Reveal>
      </Container>
    </section>
  );
}
