"use client";

import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { clsx } from "clsx";
import { ProjectCard } from "./ProjectCard";
import { getFeaturedProjects } from "@/lib/projects";
import { ProjectPlatform } from "@/lib/types";

type FilterValue = "all" | ProjectPlatform;

const FILTERS: { value: FilterValue; label: string }[] = [
  { value: "all", label: "All" },
  { value: "web", label: "Web" },
  { value: "mobile", label: "Mobile" },
];

export function FeaturedWork() {
  const [filter, setFilter] = useState<FilterValue>("all");
  const allProjects = getFeaturedProjects();

  const projects = useMemo(() => {
    if (filter === "all") return allProjects;
    return allProjects.filter((p) => p.platform.includes(filter));
  }, [allProjects, filter]);

  return (
    <section
      id="featured-work"
      className="relative z-10 px-[var(--port-container-px)] py-[var(--port-section-py)]"
    >
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12 flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between"
        >
          <div>
            <p className="mb-3 font-mono text-sm uppercase tracking-[0.2em] text-pink-300">
              Selected Work
            </p>
            <h2 className="font-display text-4xl font-bold text-fg sm:text-5xl">
              Featured projects
            </h2>
          </div>

          <div className="flex gap-2">
            {FILTERS.map((f) => (
              <button
                key={f.value}
                onClick={() => setFilter(f.value)}
                data-cursor="pointer"
                className={clsx(
                  "relative rounded-full px-4 py-2 font-mono text-xs uppercase tracking-wide transition-colors",
                  filter === f.value
                    ? "text-navy-950"
                    : "text-fg-muted hover:text-fg"
                )}
              >
                {filter === f.value && (
                  <motion.span
                    layoutId="filter-pill"
                    className="absolute inset-0 rounded-full bg-pink-500"
                    transition={{ type: "spring", stiffness: 380, damping: 32 }}
                  />
                )}
                <span className="relative z-10">{f.label}</span>
              </button>
            ))}
          </div>
        </motion.div>

        <div className="grid grid-cols-1 gap-x-8 gap-y-16 md:grid-cols-2">
          {projects.map((project, i) => (
            <ProjectCard key={project.slug} project={project} index={i} />
          ))}
        </div>

        {projects.length === 0 && (
          <p className="py-16 text-center text-fg-muted">
            No {filter} projects yet — check back soon.
          </p>
        )}
      </div>
    </section>
  );
}