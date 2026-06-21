"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Magnetic } from "@/components/ui/Magnetic";
import { CaseStudy } from "@/lib/types";

const CATEGORY_LABEL: Record<CaseStudy["category"], string> = {
  client: "Client Project",
  internship: "Internship",
  school: "School Project",
  personal: "Personal Project",
};

const PLATFORM_LABEL: Record<CaseStudy["platform"][number], string> = {
  web: "Web",
  mobile: "Mobile",
};

export function ProjectCard({ project, index }: { project: CaseStudy; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
    >
      {/* Whole card links to the case study page */}
      <Link
        href={`/work/${project.slug}`}
        data-cursor="pointer"
        className="group block"
      >
        <Magnetic strength={8} className="block">
          <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-border bg-bg-card">
            <Image
              src={project.coverImage}
              alt={project.title}
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover transition-transform duration-500 group-hover:scale-105"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-navy-950/80 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

            <div className="absolute right-4 top-4 flex gap-2">
              {project.hasDevWork && (
                <span className="rounded-full bg-pink-500/90 px-3 py-1 font-mono text-[11px] font-medium text-navy-950">
                  Designed + Built
                </span>
              )}
            </div>

            {/* Hover overlay hint that this opens the case study */}
            <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100">
              <span className="flex items-center gap-2 rounded-full bg-navy-950/80 px-4 py-2 font-mono text-xs text-pink-300 backdrop-blur-sm">
                View case study
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
                  <path
                    d="M2 10L10 2M10 2H4M10 2V8"
                    stroke="currentColor"
                    strokeWidth="1.4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
            </div>
          </div>
        </Magnetic>

        <div className="mt-5 flex items-start justify-between gap-4">
          <div>
            <div className="flex flex-wrap items-center gap-2">
              <p className="font-mono text-xs uppercase tracking-wider text-pink-300">
                {CATEGORY_LABEL[project.category]} · {project.year}
              </p>

              <span className="text-fg-faint">·</span>

              <div className="flex gap-1.5">
                {project.platform.map((p) => (
                  <span
                    key={p}
                    className="rounded-full border border-border-strong px-2 py-0.5 font-mono text-[10px] uppercase tracking-wide text-fg-muted"
                  >
                    {PLATFORM_LABEL[p]}
                  </span>
                ))}
              </div>
            </div>

            <h3 className="mt-2 font-display text-2xl font-bold text-fg transition-colors group-hover:text-pink-300">
              {project.title}
            </h3>

            <p className="mt-1 text-sm text-fg-muted">{project.tagline}</p>
          </div>

          <span className="mt-1 shrink-0 font-display text-xl text-fg-faint transition-transform duration-300 group-hover:translate-x-1 group-hover:text-pink-500">
            →
          </span>
        </div>
      </Link>

      {/* Separate action buttons */}
      <div className="mt-4 flex flex-wrap gap-2">
        {project.figmaUrl && (
          <a
            href={project.figmaUrl}
            target="_blank"
            rel="noopener noreferrer"
            data-cursor="pointer"
            className="inline-flex items-center gap-1.5 rounded-full bg-pink-500/90 px-4 py-2 font-mono text-xs font-medium text-navy-950 transition-transform hover:scale-105"
          >
            View in Figma
            <svg width="10" height="10" viewBox="0 0 12 12" fill="none" aria-hidden="true">
              <path
                d="M2 10L10 2M10 2H4M10 2V8"
                stroke="currentColor"
                strokeWidth="1.4"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </a>
        )}

        {project.liveUrl && (
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            data-cursor="pointer"
            className="inline-flex items-center gap-1.5 rounded-full border border-border-strong px-4 py-2 font-mono text-xs font-medium text-fg transition-colors hover:border-pink-500 hover:text-pink-300"
          >
            View Live Site
            <svg width="10" height="10" viewBox="0 0 12 12" fill="none" aria-hidden="true">
              <path
                d="M2 10L10 2M10 2H4M10 2V8"
                stroke="currentColor"
                strokeWidth="1.4"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </a>
        )}
      </div>
    </motion.div>
  );
}