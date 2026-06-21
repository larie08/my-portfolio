"use client";

import { motion } from "framer-motion";

export function Hero() {
  return (
    <section className="relative z-10 flex min-h-screen flex-col justify-center px-[var(--port-container-px)] pt-24">
      <div className="mx-auto w-full max-w-6xl">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mb-6 font-mono text-sm uppercase tracking-[0.2em] text-pink-300"
        >
          UI/UX Designer · Front-End Developer
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="font-display text-[clamp(2.75rem,8vw,6.5rem)] font-extrabold leading-[0.95] tracking-tight text-fg"
        >
          I design interfaces
          <br />
          people <span className="text-pink-500">don&apos;t notice</span>
          <br />
          working.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-8 max-w-xl text-lg leading-relaxed text-fg-muted"
        >
          Recent grad specializing in web &amp; mobile product design — from
          wireframe to shipped front-end. I design the screen, then I build it.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.55 }}
          className="mt-10 flex items-center gap-6"
        >
          <a
            href="#featured-work"
            data-cursor="pointer"
            className="rounded-full bg-pink-500 px-6 py-3 text-sm font-semibold text-navy-950 transition-transform hover:scale-105"
          >
            View Work
          </a>
          <a
            href="/about"
            data-cursor="pointer"
            className="text-sm font-medium text-fg-muted underline decoration-border-strong underline-offset-4 transition-colors hover:text-fg hover:decoration-pink-500"
          >
            More about me →
          </a>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.6 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-xs uppercase tracking-[0.2em] text-fg-faint"
      >
        Scroll
      </motion.div>
    </section>
  );
}
