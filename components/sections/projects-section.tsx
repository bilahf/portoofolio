"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ExternalLink, Github, Search } from "lucide-react";
import { useMemo, useState } from "react";
import { Badge } from "@/components/ui/badge";
import { ButtonLink } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { projectFilters, projects } from "@/data/projects";
import { isFilled } from "@/lib/utils";

export function ProjectsSection() {
  const [activeFilter, setActiveFilter] = useState<(typeof projectFilters)[number]>("All");
  const [query, setQuery] = useState("");

  const filteredProjects = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();

    return projects.filter((project) => {
      const matchesCategory = activeFilter === "All" || project.category === activeFilter;
      const searchableText = [project.title, project.description, ...project.technologies, ...project.features].join(" ").toLowerCase();
      const matchesQuery = normalizedQuery.length === 0 || searchableText.includes(normalizedQuery);

      return matchesCategory && matchesQuery;
    });
  }, [activeFilter, query]);

  return (
    <section id="projects" className="py-24 sm:py-28">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="Projects"
            title="Selected work that balances aesthetics, usability, and engineering quality"
            description="Projects are searchable and filterable, with optional live and repository links rendered only when the relevant data is enabled."
          />
        </Reveal>

        <Reveal delay={0.05}>
          <div className="mt-10 flex flex-col gap-4 rounded-[30px] border border-border bg-card p-5 shadow-soft lg:flex-row lg:items-center lg:justify-between">
            <div className="flex flex-wrap gap-2">
              {projectFilters.map((filter) => (
                <button
                  key={filter}
                  type="button"
                  onClick={() => setActiveFilter(filter)}
                  className={`rounded-full px-4 py-2 text-sm font-medium transition ${
                    activeFilter === filter ? "bg-primary text-white shadow-soft" : "bg-surface text-foreground hover:bg-primary/10"
                  }`}
                  aria-pressed={activeFilter === filter}
                >
                  {filter}
                </button>
              ))}
            </div>

            <label className="relative block w-full max-w-sm">
              <Search className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-muted" />
              <input
                type="search"
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                placeholder="Search projects"
                className="h-12 w-full rounded-full border border-border bg-surface pl-11 pr-4 text-sm text-foreground outline-none ring-0 transition placeholder:text-muted focus:border-primary"
                aria-label="Search projects"
              />
            </label>
          </div>
        </Reveal>

        <div className="mt-10 grid gap-6 lg:grid-cols-2">
          {filteredProjects.map((project, index) => (
            <Reveal key={project.title} delay={index * 0.05}>
              <motion.div whileHover={{ y: -6 }} className="h-full">
                <Card className="flex h-full flex-col overflow-hidden p-0">
                  <div className="relative aspect-[16/10] overflow-hidden border-b border-border bg-surface">
                    <Image
                      src={project.image}
                      alt={`${project.title} preview`}
                      fill
                      sizes="(max-width: 1024px) 100vw, 50vw"
                      className="object-cover transition duration-500 hover:scale-[1.03]"
                    />
                  </div>

                  <div className="flex h-full flex-col p-6">
                    <div className="flex flex-wrap items-center gap-2">
                      <Badge>{project.category}</Badge>
                      <Badge className="bg-surface">{project.status}</Badge>
                      <Badge className="bg-surface">{project.year}</Badge>
                    </div>

                    <h3 className="mt-5 text-2xl font-semibold text-foreground">{project.title}</h3>
                    <p className="mt-3 text-sm leading-7 text-muted">{project.description}</p>

                    <div className="mt-5">
                      <p className="text-xs font-semibold uppercase tracking-[0.22em] text-primary">Tech Stack</p>
                      <div className="mt-3 flex flex-wrap gap-2">
                        {project.technologies.map((technology) => (
                          <Badge key={technology}>{technology}</Badge>
                        ))}
                      </div>
                    </div>

                    <div className="mt-5 grid gap-5 sm:grid-cols-2">
                      <div>
                        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-primary">Languages</p>
                        <ul className="mt-3 space-y-2 text-sm text-muted">
                          {project.languages.map((language) => (
                            <li key={language}>{language}</li>
                          ))}
                        </ul>
                      </div>

                      <div>
                        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-primary">Features</p>
                        <ul className="mt-3 space-y-2 text-sm text-muted">
                          {project.features.map((feature) => (
                            <li key={feature}>{feature}</li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    <div className="mt-8 flex flex-wrap gap-3">
                      {project.liveDemoEnabled && isFilled(project.liveDemoUrl) ? (
                        <ButtonLink href={project.liveDemoUrl!}>
                          <ExternalLink className="h-4 w-4" />
                          Live Demo
                        </ButtonLink>
                      ) : null}

                      {project.githubEnabled && isFilled(project.githubUrl) ? (
                        <ButtonLink href={project.githubUrl!} variant="secondary">
                          <Github className="h-4 w-4" />
                          GitHub Repository
                        </ButtonLink>
                      ) : null}
                    </div>
                  </div>
                </Card>
              </motion.div>
            </Reveal>
          ))}
        </div>

        {filteredProjects.length === 0 ? (
          <div className="mt-8 rounded-[28px] border border-dashed border-border bg-card p-8 text-center text-sm text-muted shadow-soft">
            No projects match the current filter or search query.
          </div>
        ) : null}
      </Container>
    </section>
  );
}
