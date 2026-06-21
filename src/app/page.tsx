import { Nav } from "@/components/layout/Nav";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { FeaturedWork } from "@/components/sections/FeaturedWork";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <FeaturedWork />
      </main>
      <Footer />
    </>
  );
}