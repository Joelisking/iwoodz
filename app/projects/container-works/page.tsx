import { ContainerWorksHero } from "@/components/projects/container-works/ContainerWorksHero";
import { ContainerWorksIntro } from "@/components/projects/container-works/ContainerWorksIntro";
import { ContainerWorksGallery } from "@/components/projects/container-works/ContainerWorksGallery";
import { ContainerWorksProcess } from "@/components/projects/container-works/ContainerWorksProcess";
import { DualCTAPanel } from "@/components/home/DualCTAPanel";

export const metadata = {
  title: "Container Works — iWoodz Creation",
  description:
    "Custom shipping container conversions in Accra, Ghana. iWoodz transforms raw steel into beautifully finished spaces — pop-up units, studios, mobile offices, and more.",
};

export default function ContainerWorksPage() {
  return (
    <main>
      <ContainerWorksHero />
      <ContainerWorksIntro />
      <ContainerWorksGallery />
      <ContainerWorksProcess />
      <DualCTAPanel />
    </main>
  );
}
