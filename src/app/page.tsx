import HomePage from "./home/page";

export default function Home() {
  return <HomePage />;
}
import type { ReactElement } from "react";
import { CanopyIntroSection } from "./home/CanopyIntroSection";
import { FlowSection } from "./home/FlowSection";
import { HeroSection } from "./home/HeroSection";
import { WhyItMattersSection } from "./home/WhyItMattersSection";

export default function HomePage(): ReactElement {
  return (
    <main>
      <section className="mx-auto max-w-7xl px-6 py-24 lg:px-10">
        <div className="max-w-3xl">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-[#a6ce39]">
            Conservation Intelligence
          </p>

          <h1 className="text-5xl font-bold tracking-tight text-[#72002c] md:text-7xl">
            Protecting ecosystems through intelligent conservation.
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-gray-600">
            Solène transforms ecological data into practical insights
            that support better conservation decisions.
          </p>
        </div>
      </section>
    </main>
  );
}
      <HeroSection />
      <CanopyIntroSection />
      <WhyItMattersSection />
      <FlowSection />
    </main>
  );
import { redirect } from "next/navigation";

export default function Home() {
  redirect("/about");
}
import { MAIN_CONTENT_ID } from "@/config/site";

export default function HomePage() {
  return <main id={MAIN_CONTENT_ID} tabIndex={-1} />;
}
