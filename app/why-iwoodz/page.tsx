import { WhyHero } from "@/components/why-iwoodz/WhyHero";
import { WhyIntro } from "@/components/why-iwoodz/WhyIntro";
import { WhyFeatureBlock } from "@/components/why-iwoodz/WhyFeatureBlock";
import { WhyPartners } from "@/components/why-iwoodz/WhyPartners";
import { WhyConsultationCTA } from "@/components/why-iwoodz/WhyConsultationCTA";
import { WhyProjectsSection } from "@/components/why-iwoodz/WhyProjectsSection";
import { DualCTAPanel } from "@/components/home/DualCTAPanel";

export const metadata = {
  title: "Why iWoodz Creation",
  description:
    "Discover why iWoodz Creation is Accra's trusted name in bespoke woodwork — expert design, master craftsmanship, and a passion for lasting quality.",
};

export default function WhyIwoodzPage() {
  return (
    <main>
      <WhyHero />
      <WhyIntro />

      <WhyFeatureBlock
        eyebrow="Passionate & Purposeful"
        heading="Crafted with Heart"
        body="As a dedicated team in the heart of Accra, we understand the importance of creating spaces that feel truly yours. An iWoodz piece becomes a centre of your everyday life — where your family gathers, connects, and creates lasting memories."
        imageSrc="https://picsum.photos/seed/why-feature-1/1000/700"
        imageAlt="iWoodz Creation bespoke interior — replace with real photo"
      />

      <WhyFeatureBlock
        eyebrow="Talk to the Experts"
        heading="Experienced Design Team"
        body="Our friendly team of experienced designers prioritises your ideas and how you want to use your space, working closely with you to create high-quality, beautifully considered results that exceed expectations."
        buttonLabel="Book a Design Consultation"
        buttonHref="/design-consultation"
        imageSrc="https://picsum.photos/seed/why-feature-2/1000/700"
        imageAlt="iWoodz design consultation — replace with real photo"
        imageLeft
      />

      <WhyFeatureBlock
        eyebrow="Tailored to You"
        heading="Bespoke Designs"
        body="From contemporary interiors to custom container works and ambitious constructions — every project is designed entirely around your lifestyle, your space, and your aspirations. No two projects are ever the same."
        buttonLabel="Explore All Projects"
        buttonHref="#"
        imageSrc="https://picsum.photos/seed/why-feature-3/1000/700"
        imageAlt="iWoodz bespoke design — replace with real photo"
      />

      <WhyPartners />

      <WhyFeatureBlock
        eyebrow="Designed to Last a Lifetime"
        heading="Expert Craftmanship"
        body="iWoodz redefines quality through expert craftsmanship. With years of experience and meticulous attention to detail, we combine the finest materials with precision workmanship to create spaces of enduring quality, beauty, and functionality."
        buttonLabel="Explore Our Services"
        buttonHref="#"
        imageSrc="https://picsum.photos/seed/why-feature-4/1000/700"
        imageAlt="iWoodz expert craftsmanship — replace with real photo"
        imageLeft
      />

      <WhyConsultationCTA />
      <WhyProjectsSection />
      <DualCTAPanel />
    </main>
  );
}
