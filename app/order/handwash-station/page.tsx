import { PageHero } from "@/components/shared/PageHero";
import { HandwashOrderForm } from "@/components/order/HandwashOrderForm";
import { DualCTAPanel } from "@/components/home/DualCTAPanel";

export const metadata = {
  title: "Order — Handwash Station | iWoodz Creation",
  description: "Order a handwash station from iWoodz Creation — standard fixed price or custom built to your specification.",
};

export default function HandwashOrderPage() {
  return (
    <main>
      <PageHero
        src="/Hand%20Wash%20Station_new%20/394A0519.jpg"
        alt="iWoodz Creation — Handwash Station"
      />
      <section className="bg-linen py-20 px-6">
        <div className="max-w-2xl mx-auto">
          <p className="text-xs uppercase tracking-[0.25em] text-ink/50 mb-4">ORDER ONLINE</p>
          <h1
            className="font-serif text-4xl md:text-5xl text-ink font-light mb-4"
            style={{ fontFamily: "var(--font-cormorant)" }}
          >
            Handwash Station
          </h1>
          <p className="text-ink/60 text-sm leading-relaxed mb-10">
            Choose between our standard handwash station at a fixed price, or request a custom
            build tailored to your exact requirements. For custom orders, our team will reach out
            to discuss and provide a quote.
          </p>
          <HandwashOrderForm />
        </div>
      </section>
      <DualCTAPanel />
    </main>
  );
}
