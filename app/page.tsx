import { HeroCarousel } from "@/components/home/HeroCarousel";
import { IntroSection } from "@/components/home/IntroSection";
import { ProjectsGrid } from "@/components/home/ProjectsGrid";
import { ConsultationBanner } from "@/components/home/ConsultationBanner";
import { WhyChooseSection } from "@/components/home/WhyChooseSection";
import { DualCTAPanel } from "@/components/home/DualCTAPanel";

export default function Page() {
  return (
    <main>
      <HeroCarousel />
      <IntroSection />
      <ProjectsGrid />
      <ConsultationBanner />
      <WhyChooseSection />
      <DualCTAPanel />
    </main>
  );
}
