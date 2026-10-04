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
import { redirect } from "next/navigation";

export default function Home() {
  redirect("/about");
}
import { MAIN_CONTENT_ID } from "@/config/site";

export default function HomePage() {
  return <main id={MAIN_CONTENT_ID} tabIndex={-1} />;
}
