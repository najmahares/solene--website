import { HeroSection } from "./HeroSection";
import { CanopyIntroSection } from "./CanopyIntroSection";
import { WhyItMattersSection } from "./WhyItMattersSection";
import { FlowSection } from "./FlowSection";
import { DesignedForSection } from "./DesignedForSection";
import { MissionSection } from "./MissionSection";

export default function HomePage() {
  return (
    <main>
      <HeroSection />
      <CanopyIntroSection />
      <WhyItMattersSection />
      <FlowSection />
      <DesignedForSection />
      <MissionSection />
    </main>
  );
}