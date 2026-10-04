import Image from "next/image";
import type { ReactElement } from "react";
import { missionContent } from "./homeContent";

export function MissionSection(): ReactElement {
  return (
    <section
      aria-labelledby="mission-heading"
      className="relative w-full overflow-hidden bg-[#3d0418] text-white"
    >
      <Image
        src="/images/forest.png"
        alt="forest canopy"
        fill
        sizes="100vw"
        className="object-cover object-right"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-r from-[#3d0418] via-brand/70 to-brand/20"
      />

      <div className="relative mx-auto grid max-w-7xl gap-10 px-6 py-16 md:grid-cols-2 md:items-center md:gap-12 md:py-24">
        <div className="flex flex-col">
          <h2
            id="mission-heading"
            className="max-w-sm text-3xl font-bold leading-snug md:text-4xl"
          >
            {missionContent.heading}
          </h2>
          <p className="mt-6 max-w-sm text-sm leading-relaxed">
            {missionContent.body}
          </p>
          <a
            href={missionContent.ctaHref}
            className="mt-8 inline-block w-fit rounded-full bg-white px-8 py-3 text-sm font-semibold text-black transition duration-300 hover:shadow-lg focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent motion-safe:hover:-translate-y-0.5"
          >
            {missionContent.ctaLabel}
          </a>
        </div>

        <blockquote className="text-xl italic leading-relaxed md:justify-self-center md:text-2xl">
          {missionContent.quoteLines.map((line, i) => (
            <span key={line} className="block">
              {i === 0 ? "“" : ""}
              {line}
              {i === missionContent.quoteLines.length - 1 ? "”" : ""}
            </span>
          ))}
        </blockquote>
      </div>
    </section>
  );
}