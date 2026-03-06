import { InteriorsHero } from "@/components/interiors/InteriorsHero";
import { KitchensSection } from "@/components/interiors/KitchensSection";
import { LivingSpacesSection } from "@/components/interiors/LivingSpacesSection";
import { WardobesSection } from "@/components/interiors/WardobesSection";
import { DualCTAPanel } from "@/components/home/DualCTAPanel";

export const metadata = {
  title: "Interiors — iWoodz Creation",
  description:
    "Bespoke fitted kitchens, living spaces, and wardrobes crafted with precision in Accra, Ghana. Explore iWoodz Creation's interior woodwork.",
};

export default function InteriorsPage() {
  return (
    <main>
      <InteriorsHero />
      <KitchensSection />
      <LivingSpacesSection />
      <WardobesSection />
      <DualCTAPanel />
    </main>
  );
}
