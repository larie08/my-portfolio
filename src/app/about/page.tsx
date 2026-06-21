import type { Metadata } from "next";
import { Nav } from "@/components/layout/Nav";
import { Footer } from "@/components/layout/Footer";
import { AboutContent } from "@/components/sections/AboutContent";

export const metadata: Metadata = {
  title: "About — Larie Jane Rubi",
  description:
    "UI/UX Designer and Front-End Developer based in Cebu City, Philippines. BS Information Technology, University of Cebu Main Campus.",
};

export default function AboutPage() {
  return (
    <>
      <Nav />
      <main className="relative z-10 px-[var(--port-container-px)] pt-36 pb-[var(--port-section-py)]">
        <AboutContent />
      </main>
      <Footer />
    </>
  );
}