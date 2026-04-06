import { AboutJourney } from "@/components/sections/about-journey";
import { ConstituencyConnect } from "@/components/sections/constituency";
import { ContactSection } from "@/components/sections/contact";
import { Footer } from "@/components/sections/footer";
import { GallerySection } from "@/components/sections/gallery";
import { Hero } from "@/components/sections/hero";
import { InitiativesImpact } from "@/components/sections/initiatives";
import { Navbar } from "@/components/sections/navbar";
import { SocialPresence } from "@/components/sections/social";
import { SpeechesMedia } from "@/components/sections/speeches-media";
import { StatsStrip } from "@/components/sections/stats-strip";
import { PoliticalTimeline } from "@/components/sections/timeline";
import { VisionSection } from "@/components/sections/vision";

export default function HomePage() {
  return (
    <main className="overflow-x-hidden">
      <Navbar />
      <Hero />
      <StatsStrip />
      <AboutJourney />
      <PoliticalTimeline />
      <InitiativesImpact />
      <ConstituencyConnect />
      <VisionSection />
      <SpeechesMedia />
      <GallerySection />
      <SocialPresence />
      <ContactSection />
      <Footer />
    </main>
  );
}
