"use client";

import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { clsx } from "clsx";
import { ProjectCard } from "./ProjectCard";
import { projects } from "@/lib/projects";
import { ProjectPlatform } from "@/lib/types";

type FilterValue = "all" | ProjectPlatform;

const FILTERS: { value: FilterValue; label: string }[] = [
  { value: "all", label: "All" },
  { value: "web", label: "Web" },
  { value: "mobile", label: "Mobile" },
];

export function WorkContent() {
  const [filter, setFilter] = useState<FilterValue>("all");

  const filtered = useMemo(() => {
    if (filter === "all") return projects;
    return projects.filter((p) => p.platform.includes(filter));
  }, [filter]);

  return (
    <div className="mx-auto max-w-6xl">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="mb-16 flex flex-col gap-8 sm:flex-row sm:items-end sm:justify-between"
      >
        <div>
          <p className="mb-3 font-mono text-sm uppercase tracking-[0.2em] text-pink-300">
            Full Archive
          </p>
          <h1 className="font-display text-[clamp(2.25rem,6vw,4.5rem)] font-extrabold leading-[1] tracking-tight text-fg">
            Selected Work
          </h1>
          <p className="mt-5 max-w-lg text-base leading-relaxed text-fg-muted">
            A mix of client work, internship deliverables, and academic projects —
            each one designed end-to-end, some built into real, shipped front-ends.
          </p>
        </div>

        <div className="flex gap-2">
          {FILTERS.map((f) => (
            <button
              key={f.value}
              onClick={() => setFilter(f.value)}
              data-cursor="pointer"
              className={clsx(
                "relative rounded-full px-4 py-2 font-mono text-xs uppercase tracking-wide transition-colors",
                filter === f.value ? "text-navy-950" : "text-fg-muted hover:text-fg"
              )}
            >
              {filter === f.value && (
                <motion.span
                  layoutId="work-filter-pill"
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
        {filtered.map((project, i) => (
          <ProjectCard key={project.slug} project={project} index={i} />
        ))}
      </div>

      {filtered.length === 0 && (
        <p className="py-16 text-center text-fg-muted">
          No {filter} projects yet — check back soon.
        </p>
      )}
    </div>
  );
}