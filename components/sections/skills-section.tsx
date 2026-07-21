"use client";

import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { skillCategories, skills } from "@/data/skills";

export function SkillsSection() {
  return (
    <section id="skills" className="py-24 sm:py-28">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="Skills"
            title="A well-rounded toolkit across engineering, design, and collaboration"
            description="This portfolio separates content from presentation, so every skill here is fully editable from the data layer while the UI stays reusable and consistent."
          />
        </Reveal>

        <div className="mt-12 grid gap-6">
          {skillCategories.map((category, groupIndex) => {
            const categorySkills = skills.filter((skill) => skill.category === category);

            if (categorySkills.length === 0) {
              return null;
            }

            return (
              <Reveal key={category} delay={groupIndex * 0.05}>
                <Card className="p-6 sm:p-7">
                  <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
                    <div className="max-w-sm">
                      <h3 className="text-xl font-semibold text-foreground">{category}</h3>
                      <p className="mt-2 text-sm leading-7 text-muted">
                        Carefully selected tools and strengths that support product delivery from strategy to implementation.
                      </p>
                    </div>

                    <div className="grid flex-1 gap-3 sm:grid-cols-2 xl:grid-cols-3">
                      {categorySkills.map((skill, index) => {
                        const Icon = skill.icon;
                        return (
                          <motion.div
                            key={skill.name}
                            initial={{ opacity: 0, y: 18 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.35, delay: index * 0.02 }}
                            whileHover={{ y: -4, scale: 1.01 }}
                            className="group rounded-[22px] border border-border bg-surface p-4 shadow-inset transition"
                          >
                            <div className="flex items-start gap-4">
                              <div className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-card text-primary shadow-soft transition duration-300 group-hover:scale-105">
                                <Icon className="h-5 w-5" />
                              </div>
                              <div className="min-w-0">
                                <p className="font-medium text-foreground">{skill.name}</p>
                                <p className="mt-1 text-sm text-muted">{skill.category}</p>
                                {skill.proficiency ? <p className="mt-2 text-xs text-primary">{skill.proficiency}</p> : null}
                              </div>
                            </div>
                          </motion.div>
                        );
                      })}
                    </div>
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
