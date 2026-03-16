import { PageHero } from "@/components/shared/PageHero";
import { KennelOrderForm } from "@/components/order/KennelOrderForm";
import { DualCTAPanel } from "@/components/home/DualCTAPanel";

export const metadata = {
  title: "Order — Dog Kennels | iWoodz Creation",
  description: "Order a bespoke dog kennel from iWoodz Creation. Choose your size and roofing colour.",
};

export default function KennelsOrderPage() {
  return (
    <main>
      <PageHero
        src="https://picsum.photos/seed/kennels-order/1920/800"
        alt="iWoodz Creation — Dog Kennels"
      />
      <section className="bg-linen py-20 px-6">
        <div className="max-w-2xl mx-auto">
          <p className="text-xs uppercase tracking-[0.25em] text-ink/50 mb-4">ORDER ONLINE</p>
          <h1
            className="font-serif text-4xl md:text-5xl text-ink font-light mb-4"
            style={{ fontFamily: "var(--font-cormorant)" }}
          >
            Dog Kennel
          </h1>
          <p className="text-ink/60 text-sm leading-relaxed mb-10">
            Built to last with quality timber and a choice of roofing colour. Select your size and
            preferred finish below — pricing is fixed and your order goes straight to our team.
          </p>
          <KennelOrderForm />
        </div>
      </section>
      <DualCTAPanel />
    </main>
  );
}
