import { OtherProjectsHero } from "@/components/projects/other-projects/OtherProjectsHero";
import { OtherProjectsIntro } from "@/components/projects/other-projects/OtherProjectsIntro";
import { OtherProjectsGrid } from "@/components/projects/other-projects/OtherProjectsGrid";
import { DualCTAPanel } from "@/components/home/DualCTAPanel";

export const metadata = {
  title: "Other Projects — iWoodz Creation",
  description:
    "Custom commissions, outdoor structures, bespoke furniture, and one-of-a-kind builds by iWoodz Creation in Accra, Ghana. If you can imagine it, we can build it.",
};

export default function OtherProjectsPage() {
  return (
    <main>
      <OtherProjectsHero />
      <OtherProjectsIntro />
      <OtherProjectsGrid />
      <DualCTAPanel />
    </main>
  );
}
