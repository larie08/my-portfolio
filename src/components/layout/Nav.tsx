"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { clsx } from "clsx";

const NAV_LINKS = [
  { href: "/work", label: "Work" },
  { href: "/about", label: "About" },
];

export function Nav() {
  const pathname = usePathname();

  return (
    <motion.header
      initial={{ y: -24, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="fixed left-0 right-0 top-0 z-50"
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-[var(--port-container-px)] py-5">
        <Link
          href="/"
          data-cursor="pointer"
          className="font-display text-lg font-bold tracking-tight text-fg transition-colors hover:text-pink-300"
        >
          Larie Jane Rubi
        </Link>

        <nav className="flex items-center gap-8">
          {NAV_LINKS.map((link) => {
            const isActive =
              pathname === link.href || pathname.startsWith(`${link.href}/`);

            return (
              <Link
                key={link.href}
                href={link.href}
                data-cursor="pointer"
                className={clsx(
                  "relative text-sm font-medium transition-colors",
                  isActive ? "text-fg" : "text-fg-muted hover:text-fg"
                )}
              >
                {link.label}
                {isActive && (
                  <motion.span
                    layoutId="nav-underline"
                    className="absolute -bottom-1 left-0 h-px w-full bg-pink-500"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </Link>
            );
          })}

          <Link
            href="/#contact"
            data-cursor="pointer"
            className="rounded-full border border-border-strong px-4 py-1.5 text-sm font-medium text-fg transition-colors hover:border-pink-500 hover:text-pink-300"
          >
            Contact
          </Link>
        </nav>
      </div>
    </motion.header>
  );
}