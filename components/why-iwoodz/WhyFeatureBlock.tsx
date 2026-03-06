import Link from "next/link";
import { Button } from "@/components/ui/button";

interface WhyFeatureBlockProps {
  eyebrow: string;
  heading: string;
  body: string;
  buttonLabel?: string;
  buttonHref?: string;
  imageSrc: string;
  imageAlt: string;
  imageLeft?: boolean;
}

export function WhyFeatureBlock({
  eyebrow,
  heading,
  body,
  buttonLabel,
  buttonHref,
  imageSrc,
  imageAlt,
  imageLeft = false,
}: WhyFeatureBlockProps) {
  const textBlock = (
    <div className="w-full lg:w-[38%] shrink-0 flex flex-col justify-center px-10 lg:px-16 py-16">
      <p className="text-[10px] tracking-[0.3em] uppercase text-ink/40 mb-3">{eyebrow}</p>
      <h2
        className="font-light leading-tight mb-5"
        style={{
          fontFamily: "var(--font-cormorant)",
          fontSize: "clamp(2rem, 3.5vw, 3rem)",
        }}
      >
        {heading}
      </h2>
      <p className="text-sm text-ink/60 leading-relaxed mb-7 max-w-xs">{body}</p>
      {buttonLabel && buttonHref && (
        <Button
          asChild
          variant="outline"
          className="border-ink/30 text-ink bg-transparent hover:bg-ink hover:text-white uppercase tracking-[0.18em] text-xs w-fit px-6 h-10 rounded-none"
        >
          <Link href={buttonHref}>{buttonLabel}</Link>
        </Button>
      )}
    </div>
  );

  const imageBlock = (
    <div className="flex-1 min-h-[420px] lg:min-h-[540px]">
      <img
        src={imageSrc}
        alt={imageAlt}
        className="w-full h-full object-cover"
      />
    </div>
  );

  return (
    <section className="bg-linen flex flex-col lg:flex-row mb-6">
      {imageLeft ? (
        <>
          {imageBlock}
          {textBlock}
        </>
      ) : (
        <>
          {textBlock}
          {imageBlock}
        </>
      )}
    </section>
  );
}
