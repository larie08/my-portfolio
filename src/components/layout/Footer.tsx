"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Magnetic } from "@/components/ui/Magnetic";
import { ContactModal } from "@/components/ui/ContactModal";

const SOCIALS = [
  { label: "LinkedIn", href: "https://www.linkedin.com/in/larie-jane-rubi-7821823a4/" },
  { label: "GitHub", href: "https://github.com/larie08" },
  { label: "Figma", href: "https://www.figma.com/@lariejanerubi" },
];

export function Footer() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <footer
      id="contact"
      className="relative z-10 border-t border-border px-[var(--port-container-px)] pt-[var(--port-section-py)] pb-10"
    >
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-start gap-6"
        >
          <p className="font-mono text-sm uppercase tracking-[0.2em] text-pink-300">
            Let&apos;s work together
          </p>

          <h2 className="font-display text-[clamp(2rem,6vw,4.5rem)] font-extrabold leading-[1] tracking-tight text-fg">
            Got a project in mind?
            <br />
            Let&apos;s talk.
          </h2>

          <Magnetic strength={10}>
            <button
              onClick={() => setModalOpen(true)}
              data-cursor="pointer"
              className="mt-2 inline-flex items-center gap-3 rounded-full bg-pink-500 px-8 py-4 text-base font-semibold text-navy-950 transition-transform hover:scale-105"
            >
              Say hello
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                <path
                  d="M3 13L13 3M13 3H6M13 3V10"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </Magnetic>
        </motion.div>

        <div className="mt-20 flex flex-col gap-8 border-t border-border pt-8 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="font-display text-lg font-bold text-fg">Larie Jane Rubi</p>
            <p className="mt-1 text-sm text-fg-muted">
              UI/UX Designer &amp; Front-End Developer · Cebu City, Philippines
            </p>
          </div>

          <nav className="flex flex-wrap items-center gap-x-6 gap-y-2">
            <button
              onClick={() => setModalOpen(true)}
              data-cursor="pointer"
              className="text-sm text-fg-muted transition-colors hover:text-pink-300"
            >
              Email
            </button>

            {SOCIALS.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                data-cursor="pointer"
                className="text-sm text-fg-muted transition-colors hover:text-pink-300"
              >
                {social.label}
              </a>
            ))}
          </nav>
        </div>

        <div>
          <p className="mt-10 font-mono text-xs text-fg-faint">
            © {new Date().getFullYear()} Larie Jane Rubi.
          </p>
        </div>
      </div>

      <ContactModal open={modalOpen} onClose={() => setModalOpen(false)} />
    </footer>
  );
}