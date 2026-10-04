import Image from "next/image";
import type { ReactElement } from "react";
import { introContent } from "./homeContent";

export function CanopyIntroSection(): ReactElement {
  return (
    <section id="canopy" aria-labelledby="canopy-heading" className="w-full">
      <div className="max-w-7xl mx-auto px-6 py-12 md:py-16 grid md:grid-cols-2 md:items-center md:gap-12">
        <div className="relative h-72 overflow-hidden md:h-[24rem] w-full max-w-xl mx-auto md:rounded-2xl">
          <Image
            src="/images/rangers-field.png"
            alt="Field staff in forest vegetation recording notes near a mountain gorilla"
            fill
            sizes="(min-width: 768px) 50vw, 100vw"
            className="object-cover object-[center_40%]"
          />
        </div>

        <div className="flex flex-col justify-center">
          <h2
            id="canopy-heading"
            className="text-3xl font-bold leading-snug text-brand md:text-4xl"
          >
            {introContent.heading}
          </h2>
          <p className="mt-4 max-w-md text-neutral-800">{introContent.body}</p>
        </div>
      </div>
    </section>
  );
}
