import { InstallationServiceHero } from "@/components/services/installation/InstallationServiceHero";
import { InstallationServiceIntro } from "@/components/services/installation/InstallationServiceIntro";
import { InstallationServiceProcess } from "@/components/services/installation/InstallationServiceProcess";
import { InstallationServiceStandards } from "@/components/services/installation/InstallationServiceStandards";
import { DualCTAPanel } from "@/components/home/DualCTAPanel";

export const metadata = {
  title: "Installation Service — iWoodz Creation",
  description:
    "Professional installation of bespoke woodwork across Accra, Ghana. iWoodz Creation's fitting teams deliver the same precision on-site as in the workshop.",
};

export default function InstallationServicePage() {
  return (
    <main>
      <InstallationServiceHero />
      <InstallationServiceIntro />
      <InstallationServiceProcess />
      <InstallationServiceStandards />
      <DualCTAPanel />
    </main>
  );
}
