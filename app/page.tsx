import { Hero } from "@/components/hero";
import { VideoSequence } from "@/components/video-sequence";
import { IntroSection } from "@/components/intro-section";
import { ExperienceSection } from "@/components/experience-section";
import { NotesSection } from "@/components/notes-section";
import { JourneySection } from "@/components/journey-section";
import { MediaBand } from "@/components/media-band";
import { UnisexSection } from "@/components/unisex-section";
import { SignatureSection } from "@/components/signature-section";

export default function Home() {
  return (
    <>
      <Hero />
      <VideoSequence />
      <IntroSection />
      <ExperienceSection />
      <NotesSection />
      <JourneySection />
      <MediaBand />
      <UnisexSection />
      <SignatureSection />
    </>
  );
}
