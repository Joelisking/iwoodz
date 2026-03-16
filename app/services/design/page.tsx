import { DesignServiceHero } from "@/components/services/design/DesignServiceHero";
import { DesignServiceIntro } from "@/components/services/design/DesignServiceIntro";
import { DesignServiceProcess } from "@/components/services/design/DesignServiceProcess";
import { DesignServiceIncludes } from "@/components/services/design/DesignServiceIncludes";
import { DualCTAPanel } from "@/components/home/DualCTAPanel";

export const metadata = {
  title: "Design Service — iWoodz Creation",
  description:
    "From free consultation to final sign-off — iWoodz Creation's bespoke design service in Accra, Ghana. Expert designers, detailed 3D visuals, and zero-surprise quoting.",
};

export default function DesignServicePage() {
  return (
    <main>
      <DesignServiceHero />
      <DesignServiceIntro />
      <DesignServiceProcess />
      <DesignServiceIncludes />
      <DualCTAPanel />
    </main>
  );
}
