import type { ReactElement } from "react";
import { CanopyIntroSection } from "./home/CanopyIntroSection";
import { FlowSection } from "./home/FlowSection";
import { HeroSection } from "./home/HeroSection";
import { WhyItMattersSection } from "./home/WhyItMattersSection";

export default function HomePage(): ReactElement {
  return (
    <main>
      <HeroSection />
      <CanopyIntroSection />
      <WhyItMattersSection />
      <FlowSection />
    </main>
  );
}