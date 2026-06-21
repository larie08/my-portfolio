"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
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

const fadeUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-60px" },
  transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const },
};

export function CaseStudyContent({ project }: { project: CaseStudy }) {
  return (
    <article className="mx-auto max-w-4xl">
      <Link
        href="/work"
        data-cursor="pointer"
        className="mb-10 inline-flex items-center gap-2 text-sm text-fg-muted transition-colors hover:text-pink-300"
      >
        <span aria-hidden="true">←</span> Back to work
      </Link>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
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

        <h1 className="mt-3 font-display text-[clamp(2.25rem,6vw,4rem)] font-extrabold leading-[1.05] tracking-tight text-fg">
          {project.title}
        </h1>

        <p className="mt-4 max-w-2xl text-lg leading-relaxed text-fg-muted">
          {project.tagline}
        </p>

        <div className="mt-7 flex flex-wrap gap-3">
          {project.figmaUrl && (
            <a
              href={project.figmaUrl}
              target="_blank"
              rel="noopener noreferrer"
              data-cursor="pointer"
              className="inline-flex items-center gap-2 rounded-full bg-pink-500 px-6 py-3 text-sm font-semibold text-navy-950 transition-transform hover:scale-105"
            >
              View in Figma
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
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
              className="inline-flex items-center gap-2 rounded-full border border-border-strong px-6 py-3 text-sm font-semibold text-fg transition-colors hover:border-pink-500 hover:text-pink-300"
            >
              View Live Site
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
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

          {project.repoUrl && (
            <a
              href={project.repoUrl}
              target="_blank"
              rel="noopener noreferrer"
              data-cursor="pointer"
              className="inline-flex items-center gap-2 rounded-full border border-border-strong px-6 py-3 text-sm font-semibold text-fg transition-colors hover:border-pink-500 hover:text-pink-300"
            >
              View Code
            </a>
          )}
        </div>
      </motion.div>

      <motion.div
        {...fadeUp}
        className="relative mt-12 aspect-[16/10] overflow-hidden rounded-2xl border border-border bg-bg-card"
      >
        <Image
          src={project.coverImage}
          alt={project.title}
          fill
          sizes="(max-width: 1024px) 100vw, 896px"
          className="object-cover"
          priority
        />
      </motion.div>

      <motion.div
        {...fadeUp}
        className="mt-12 grid grid-cols-2 gap-x-8 gap-y-6 border-y border-border py-8 sm:grid-cols-4"
      >
        <div>
          <p className="font-mono text-xs uppercase tracking-wider text-fg-faint">Role</p>
          <p className="mt-1 text-sm text-fg">{project.role}</p>
        </div>

        {project.client && (
          <div>
            <p className="font-mono text-xs uppercase tracking-wider text-fg-faint">Client</p>
            <p className="mt-1 text-sm text-fg">{project.client}</p>
          </div>
        )}

        {project.timeline && (
          <div>
            <p className="font-mono text-xs uppercase tracking-wider text-fg-faint">Timeline</p>
            <p className="mt-1 text-sm text-fg">{project.timeline}</p>
          </div>
        )}

        <div>
          <p className="font-mono text-xs uppercase tracking-wider text-fg-faint">Tools</p>
          <p className="mt-1 text-sm text-fg">{project.tools.join(", ")}</p>
        </div>
      </motion.div>

      <motion.section {...fadeUp} className="mt-16">
        <p className="mb-3 font-mono text-sm uppercase tracking-[0.2em] text-pink-300">
          The Problem
        </p>
        <p className="text-base leading-relaxed text-fg-muted">{project.problem}</p>

        {project.constraints && project.constraints.length > 0 && (
          <div className="mt-6">
            <p className="mb-3 text-sm font-medium text-fg">Constraints</p>
            <ul className="space-y-2">
              {project.constraints.map((c, i) => (
                <li key={i} className="flex gap-3 text-sm text-fg-muted">
                  <span className="text-pink-300">—</span>
                  <span>{c}</span>
                </li>
              ))}
            </ul>
          </div>
        )}
      </motion.section>

      {project.process.length > 0 && (
        <motion.section {...fadeUp} className="mt-16">
          <p className="mb-8 font-mono text-sm uppercase tracking-[0.2em] text-pink-300">
            The Process
          </p>
          <div className="space-y-12">
            {project.process.map((step, i) => (
              <div key={i}>
                <div className="flex items-baseline gap-3">
                  <span className="font-mono text-sm text-fg-faint">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="font-display text-xl font-bold text-fg">{step.title}</h3>
                </div>

                <p className="mt-3 max-w-2xl text-sm leading-relaxed text-fg-muted">
                  {step.description}
                </p>

                {step.image && (
                  <div className="relative mt-5 aspect-[16/9] overflow-hidden rounded-xl border border-border bg-bg-card">
                    <Image
                      src={step.image}
                      alt={step.title}
                      fill
                      sizes="(max-width: 1024px) 100vw, 896px"
                      className="object-cover"
                    />
                  </div>
                )}
              </div>
            ))}
          </div>
        </motion.section>
      )}

      <motion.section {...fadeUp} className="mt-16">
        <p className="mb-3 font-mono text-sm uppercase tracking-[0.2em] text-pink-300">
          The Solution
        </p>
        <p className="text-base leading-relaxed text-fg-muted">{project.solutionSummary}</p>

        {project.keyDecisions.length > 0 && (
          <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2">
            {project.keyDecisions.map((kd, i) => (
              <div key={i} className="rounded-xl border border-border bg-bg-card p-5">
                <p className="text-sm font-semibold text-fg">{kd.decision}</p>
                <p className="mt-2 text-sm leading-relaxed text-fg-muted">{kd.rationale}</p>
              </div>
            ))}
          </div>
        )}
      </motion.section>

      {project.impact && (
        <motion.section {...fadeUp} className="mt-16">
          <p className="mb-3 font-mono text-sm uppercase tracking-[0.2em] text-pink-300">
            Impact
          </p>
          <p className="text-base leading-relaxed text-fg-muted">{project.impact}</p>

          {project.testimonial && (
            <blockquote className="mt-6 border-l-2 border-pink-500 pl-6">
              <p className="text-base italic leading-relaxed text-fg">
                &ldquo;{project.testimonial.quote}&rdquo;
              </p>
              <footer className="mt-3 text-sm text-fg-muted">
                {project.testimonial.author} — {project.testimonial.role}
              </footer>
            </blockquote>
          )}
        </motion.section>
      )}

      <motion.div {...fadeUp} className="mt-20 border-t border-border pt-10">
        <Link
          href="/work"
          data-cursor="pointer"
          className="inline-flex items-center gap-2 font-display text-xl font-bold text-fg transition-colors hover:text-pink-300"
        >
          ← View more work
        </Link>
      </motion.div>
    </article>
  );
}