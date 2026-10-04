import Image from "next/image";
import type { ReactElement } from "react";
import { heroContent } from "./homeContent";

export function HeroSection(): ReactElement {
  return (
    <section aria-labelledby="hero-heading" className="bg-cream w-full overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 py-12 md:py-16 grid md:grid-cols-2 md:items-center md:gap-12">
        <div className="flex flex-col justify-center">
          <h1
            id="hero-heading"
            className="text-4xl font-bold leading-tight text-brand md:text-5xl"
          >
            {heroContent.headingLine1}
            <span className="block max-w-[10ch] text-accent-dark">
              {heroContent.headingLine2}
            </span>
          </h1>
          <p className="mt-6 max-w-md text-base text-neutral-800">
            {heroContent.body}
          </p>
          <a
            href={heroContent.ctaHref}
            className="mt-8 inline-block w-fit rounded-full bg-brand px-8 py-3 text-sm font-semibold text-white transition duration-300 hover:shadow-lg focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand motion-safe:hover:-translate-y-0.5"
          >
            {heroContent.ctaLabel}
          </a>
        </div>

        <div className="relative h-72 md:h-[28rem] w-full max-w-xl mx-auto overflow-hidden md:rounded-l-[6rem]">
          <Image
            src="/images/hero-gorilla.png"
            alt="Close-up of a mountain gorilla looking toward the camera, surrounded by green forest foliage"
            fill
            priority
            sizes="(min-width: 768px) 50vw, 100vw"
            className="object-cover object-[70%_30%]"
          />
          <svg
            aria-hidden="true"
            focusable={false}
            viewBox="0 0 200 120"
            preserveAspectRatio="none"
            className="pointer-events-none absolute bottom-0 right-0 h-2/5 w-2/5"
          >
            <path
              d="M0 120 C30 60 110 10 200 0 L200 120 Z"
              className="fill-brand"
            />
            <path
              d="M25 120 C55 75 120 35 200 18 L200 30 C130 48 70 85 45 120 Z"
              className="fill-white/20"
            />
          </svg>
        </div>
      </div>
    </section>
  );
}
