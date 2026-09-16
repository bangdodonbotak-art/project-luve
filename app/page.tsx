import { BrandStory } from "@/components/brand-story";
import { Hero } from "@/components/hero";
import { PerfumeCollection } from "@/components/perfume-collection";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main className="flex flex-1 flex-col">
        <Hero />
        <PerfumeCollection />
        <BrandStory />
      </main>
      <SiteFooter />
    </>
  );
}