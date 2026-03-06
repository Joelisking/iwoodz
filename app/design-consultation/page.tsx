import { ConsultationHero } from "@/components/design-consultation/ConsultationHero";
import { ConsultationForm } from "@/components/design-consultation/ConsultationForm";
import { ConsultationInspirationGrid } from "@/components/design-consultation/ConsultationInspirationGrid";
import { ConsultationCTAPanel } from "@/components/design-consultation/ConsultationCTAPanel";

export const metadata = {
  title: "Design Consultation — iWoodz Creation",
  description: "Book your free, no-obligation design consultation with an iWoodz Creation expert.",
};

export default function DesignConsultationPage() {
  return (
    <main>
      <ConsultationHero />
      <ConsultationForm />
      <ConsultationInspirationGrid />
      <ConsultationCTAPanel />
    </main>
  );
}
