export type ProjectCategory = "client" | "internship" | "school" | "personal";
export type ProjectPlatform = "web" | "mobile";

export interface ProcessStep {
  title: string;
  description: string;
  image?: string; 
}

export interface CaseStudy {
  slug: string;
  title: string;
  tagline: string; 
  category: ProjectCategory;
  platform: ProjectPlatform[]; 
  year: string;
  role: string;
  tools: string[];
  coverImage: string; 
  thumbnailImage?: string; 

  hasDevWork: boolean;
  liveUrl?: string;
  repoUrl?: string;
  figmaUrl?: string; 

  client?: string;
  timeline?: string;

  problem: string;
  constraints?: string[];

  process: ProcessStep[];

  solutionSummary: string;
  keyDecisions: { decision: string; rationale: string }[];
  finalImages: string[]; 

  impact?: string;
  testimonial?: { quote: string; author: string; role: string };

  reflection?: string;

  featured: boolean; 
}