import type { ReactElement } from "react";
import { BenefitCards } from "./BenefitCards";
import { benefits } from "./homeContent";

export function WhyItMattersSection(): ReactElement {
  return (
    <section aria-labelledby="why-heading" className="bg-cream-soft">
      <div className="mx-auto max-w-6xl px-6 py-16 text-center">
        <p className="text-xs uppercase tracking-widest text-brand">Why it matters</p>
        <h2 id="why-heading" className="mt-2 text-3xl font-bold text-brand md:text-4xl">
          Real data. Real protection.
        </h2>
        <BenefitCards items={benefits} />
      </div>
    </section>
  );
}