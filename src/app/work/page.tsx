import type { Metadata } from "next";
import { Nav } from "@/components/layout/Nav";
import { Footer } from "@/components/layout/Footer";
import { WorkContent } from "@/components/sections/WorkContent";

export const metadata: Metadata = {
  title: "Work — Larie Jane Rubi",
  description:
    "Selected UI/UX design work across client, internship, and academic projects — web and mobile.",
};

export default function WorkPage() {
  return (
    <>
      <Nav />
      <main className="relative z-10 px-[var(--port-container-px)] pt-36 pb-[var(--port-section-py)]">
        <WorkContent />
      </main>
      <Footer />
    </>
  );
}