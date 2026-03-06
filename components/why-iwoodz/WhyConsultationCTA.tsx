import Link from "next/link";
import { Button } from "@/components/ui/button";
import { KitchenLineArt } from "@/components/shared/KitchenLineArt";

export function WhyConsultationCTA() {
  return (
    <section className="bg-linen px-8 py-20 mb-6">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16">
        {/* Text */}
        <div className="flex-1 max-w-md">
          <p className="text-[10px] tracking-[0.35em] uppercase text-ink/40 mb-3">
            Talk to an Expert
          </p>
          <h2
            className="font-light leading-tight mb-5"
            style={{
              fontFamily: "var(--font-cormorant)",
              fontSize: "clamp(2rem, 3.5vw, 3rem)",
            }}
          >
            Arrange A Design<br />Consultation
          </h2>
          <p className="text-sm text-ink/60 leading-relaxed mb-8">
            Start your iWoodz journey with a complimentary, no-obligation design
            consultation. Our expert designers will work with you to bring your
            vision to life — creating a bespoke result perfectly tailored to your
            lifestyle and aspirations.
          </p>
          <Button
            asChild
            className="bg-ink text-white hover:bg-ink/85 uppercase tracking-[0.18em] text-xs px-8 h-11 rounded-none"
          >
            <Link href="/design-consultation">Arrange a Consultation</Link>
          </Button>
        </div>

        {/* Illustration */}
        <div className="lg:w-[380px] shrink-0 opacity-80">
          <KitchenLineArt />
        </div>
      </div>
    </section>
  );
}
