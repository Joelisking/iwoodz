import { ConstructionsHero } from "@/components/projects/constructions/ConstructionsHero";
import { ConstructionsIntro } from "@/components/projects/constructions/ConstructionsIntro";
import { ConstructionsCapabilities } from "@/components/projects/constructions/ConstructionsCapabilities";
import { ConstructionsGallery } from "@/components/projects/constructions/ConstructionsGallery";
import { DualCTAPanel } from "@/components/home/DualCTAPanel";

export const metadata = {
  title: "Constructions — iWoodz Creation",
  description:
    "Full-service construction in Accra, Ghana. iWoodz handles residential extensions, new builds, commercial fit-outs, and structural woodwork with expert craftsmanship.",
};

export default function ConstructionsPage() {
  return (
    <main>
      <ConstructionsHero />
      <ConstructionsIntro />
      <ConstructionsCapabilities />
      <ConstructionsGallery />
      <DualCTAPanel />
    </main>
  );
}
