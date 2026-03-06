import { DualCTAPanel } from "@/components/home/DualCTAPanel";
import { ContactHero } from "@/components/contact/ContactHero";
import { ContactIntroLinks } from "@/components/contact/ContactIntroLinks";
import { ContactDetails } from "@/components/contact/ContactDetails";
import { ContactEnquireForm } from "@/components/contact/ContactEnquireForm";
import { ContactProjectsSection } from "@/components/contact/ContactProjectsSection";

export const metadata = {
  title: "Contact Us — iWoodz Creation",
  description: "Get in touch with the iWoodz Creation team — we'd love to hear about your project.",
};

export default function ContactPage() {
  return (
    <main>
      <ContactHero />
      <ContactIntroLinks />
      <section className="bg-linen py-20 px-6 border-t border-gold/10">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">
          <ContactDetails />
          <ContactEnquireForm />
        </div>
      </section>
      <ContactProjectsSection />
      <DualCTAPanel />
    </main>
  );
}
