"use client";

import { useEffect, useRef } from "react";
import { useReducedMotion } from "framer-motion";

export function Spotlight() {
  const ref = useRef<HTMLDivElement>(null);
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    if (prefersReducedMotion) return;
    const el = ref.current;
    if (!el) return;

    let rafId: number;
    let targetX = window.innerWidth / 2;
    let targetY = window.innerHeight / 3;
    let currentX = targetX;
    let currentY = targetY;

    const handleMove = (e: MouseEvent) => {
      targetX = e.clientX;
      targetY = e.clientY;
    };

    const animate = () => {
      currentX += (targetX - currentX) * 0.08;
      currentY += (targetY - currentY) * 0.08;
      el.style.setProperty("--spot-x", `${currentX}px`);
      el.style.setProperty("--spot-y", `${currentY}px`);
      rafId = requestAnimationFrame(animate);
    };

    window.addEventListener("mousemove", handleMove);
    rafId = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("mousemove", handleMove);
      cancelAnimationFrame(rafId);
    };
  }, [prefersReducedMotion]);

  return (
    <div
      ref={ref}
      aria-hidden
      className="pointer-events-none fixed inset-0 z-0"
      style={
        {
          "--spot-x": "50%",
          "--spot-y": "33%",
          background: prefersReducedMotion
            ? undefined
            : "radial-gradient(600px circle at var(--spot-x) var(--spot-y), rgba(236, 72, 153, 0.08), transparent 70%)",
        } as React.CSSProperties
      }
    />
  );
}
