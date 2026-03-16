import { ConstructionServiceHero } from "@/components/services/construction/ConstructionServiceHero";
import { ConstructionServiceIntro } from "@/components/services/construction/ConstructionServiceIntro";
import { ConstructionServiceScope } from "@/components/services/construction/ConstructionServiceScope";
import { ConstructionServiceCTA } from "@/components/services/construction/ConstructionServiceCTA";

export const metadata = {
  title: "Construction Service — iWoodz Creation",
  description:
    "Full-service construction in Accra, Ghana. iWoodz Creation manages residential builds, commercial fit-outs, and structural works under a single expert contract.",
};

export default function ConstructionServicePage() {
  return (
    <main>
      <ConstructionServiceHero />
      <ConstructionServiceIntro />
      <ConstructionServiceScope />
      <ConstructionServiceCTA />
    </main>
  );
}
