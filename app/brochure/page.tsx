import { BrochureHero } from "@/components/brochure/BrochureHero";
import { BrochureForm } from "@/components/brochure/BrochureForm";
import { BrochureInspirationGrid } from "@/components/brochure/BrochureInspirationGrid";
import { BroctureCTAPanel } from "@/components/brochure/BroctureCTAPanel";

export const metadata = {
  title: "Request A Brochure — iWoodz Creation",
  description: "Request your free iWoodz Creation brochure and browse our full portfolio of bespoke projects.",
};

export default function BrochurePage() {
  return (
    <main>
      <BrochureHero />
      <BrochureForm />
      <BrochureInspirationGrid />
      <BroctureCTAPanel />
    </main>
  );
}
