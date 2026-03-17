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
        imageSrc="/Kitchen/RAF_1422.jpg"
        imageAlt="iWoodz Creation bespoke kitchen interior"
      />

      <WhyFeatureBlock
        eyebrow="Talk to the Experts"
        heading="Experienced Design Team"
        body="Our friendly team of experienced designers prioritises your ideas and how you want to use your space, working closely with you to create high-quality, beautifully considered results that exceed expectations."
        buttonLabel="Book a Design Consultation"
        buttonHref="/design-consultation"
        imageSrc="/wardrope/IMG_5292.JPG"
        imageAlt="iWoodz fitted wardrobe with shelving"
        imageLeft
      />

      <WhyFeatureBlock
        eyebrow="Tailored to You"
        heading="Wood Designs"
        body="From contemporary interiors to custom container works and ambitious constructions — every project is designed entirely around your lifestyle, your space, and your aspirations. No two projects are ever the same."
        buttonLabel="Explore All Projects"
        buttonHref="#"
        imageSrc="/Pergola/RAF_1412.jpg"
        imageAlt="iWoodz rooftop bar and outdoor structure"
      />

      <WhyPartners />

      <WhyFeatureBlock
        eyebrow="Designed to Last a Lifetime"
        heading="Expert Craftmanship"
        body="iWoodz redefines quality through expert craftsmanship. With years of experience and meticulous attention to detail, we combine the finest materials with precision workmanship to create spaces of enduring quality, beauty, and functionality."
        buttonLabel="Explore Our Services"
        buttonHref="#"
        imageSrc="/cabinet/IMG_5347.JPG"
        imageAlt="iWoodz solid wood bench craftsmanship"
        imageLeft
      />

      <WhyConsultationCTA />
      <WhyProjectsSection />
      <DualCTAPanel />
    </main>
  );
}
