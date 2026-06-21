import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Nav } from "@/components/layout/Nav";
import { Footer } from "@/components/layout/Footer";
import { CaseStudyContent } from "@/components/sections/CaseStudyContent";
import { projects, getProjectBySlug } from "@/lib/projects";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    return { title: "Project Not Found — Larie Jane Rubi" };
  }

  return {
    title: `${project.title} — Larie Jane Rubi`,
    description: project.tagline,
  };
}

export default async function CaseStudyPage({ params }: PageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  return (
    <>
      <Nav />
      <main className="relative z-10 px-[var(--port-container-px)] pt-36 pb-[var(--port-section-py)]">
        <CaseStudyContent project={project} />
      </main>
      <Footer />
    </>
  );
}