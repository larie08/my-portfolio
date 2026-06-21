"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const DETAILS = [
  { label: "Name", value: "Larie Jane Rubi" },
  { label: "Based in", value: "Cebu City, Philippines" },
  { label: "Education", value: "Bachelor of Science in Information Technology" },
  { label: "School", value: "University of Cebu — Main Campus" },
  { label: "Focus", value: "UI/UX Design — Web & Mobile" },
  { label: "Bonus skill", value: "Front-End Development" },
];

const TOOLS = [
  "Figma",
  "React",
  "Tailwind CSS",
  "Framer Motion",
  "Git & GitHub",
  "Vercel",
  "JavaScript",
  "Python",
  "Firebase",
  "NPM",
  "Flask",
  "Sqlite",
  "MySQL",
];

export function AboutContent() {
  return (
    <div className="mx-auto max-w-5xl">
      <div className="grid grid-cols-1 items-center gap-12 sm:grid-cols-[280px_1fr] sm:gap-16">
        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="relative mx-auto h-56 w-56 shrink-0 sm:h-64 sm:w-64"
        >

          <div className="absolute -inset-3 rounded-full border border-pink-300/30" />
          <div className="absolute -inset-3 rounded-full bg-gradient-to-br from-pink-500/10 to-transparent blur-xl" />

          <div className="relative h-full w-full overflow-hidden rounded-full border-2 border-pink-300/40 bg-bg-card">
            <Image
              src="/about/lars.jpg"
              alt="Larie Jane Rubi"
              fill
              sizes="(max-width: 640px) 224px, 256px"
              className="object-cover"
              priority
            />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
        >
          <p className="mb-3 font-mono text-sm uppercase tracking-[0.2em] text-pink-300">
            About me
          </p>
          <h1 className="font-display text-[clamp(2rem,5vw,3.25rem)] font-extrabold leading-[1.05] tracking-tight text-fg">
            Hi, I&apos;m Larie — I design products and build the interfaces that bring them to life.
          </h1>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-fg-muted">
            I&apos;m a recent Bachelor of Science in Information Technology graduate from the University
            of Cebu — Main Campus, specializing in UI/UX design for web and mobile
            products. What sets my process apart is that I don&apos;t stop at the
            handoff — I also build front-ends myself, which means my designs are
            shaped by what&apos;s actually feasible to ship.
          </p>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mt-24 grid grid-cols-1 gap-x-8 gap-y-6 border-t border-border pt-12 sm:grid-cols-2"
      >
        {DETAILS.map((item) => (
          <div key={item.label} className="flex items-baseline justify-between gap-4 border-b border-border pb-4">
            <span className="font-mono text-xs uppercase tracking-wider text-fg-faint">
              {item.label}
            </span>
            <span className="text-right text-sm font-medium text-fg">{item.value}</span>
          </div>
        ))}
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mt-20"
      >
        <p className="mb-5 font-mono text-sm uppercase tracking-[0.2em] text-pink-300">
          Tools &amp; Stack
        </p>
        <div className="flex flex-wrap gap-3">
          {TOOLS.map((tool) => (
            <span
              key={tool}
              className="rounded-full border border-border-strong px-4 py-2 text-sm text-fg-muted transition-colors hover:border-pink-500 hover:text-pink-300"
            >
              {tool}
            </span>
          ))}
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mt-20 grid grid-cols-1 gap-10 sm:grid-cols-3"
      >
        {[
          {
            step: "01",
            title: "Understand",
            body: "I start by getting clear on the actual problem — for users and for the business — before opening Figma.",
          },
          {
            step: "02",
            title: "Design",
            body: "Wireframes, iteration, and feedback loops. I design in systems, not one-off screens.",
          },
          {
            step: "03",
            title: "Build",
            body: "When the project calls for it, I take the design into code myself — React, Tailwind, deployed and live.",
          },
        ].map((item) => (
          <div key={item.step}>
            <span className="font-mono text-sm text-pink-300">{item.step}</span>
            <h3 className="mt-2 font-display text-xl font-bold text-fg">{item.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-fg-muted">{item.body}</p>
          </div>
        ))}
      </motion.div>
    </div>
  );
}