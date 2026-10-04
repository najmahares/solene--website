import Image from "next/image";
import type { ReactElement } from "react";
import { AudienceIcon } from "./AudienceIcons";
import { audiences, designedForContent } from "./homeContent";
import type { AudienceItem } from "./homeContent";

const cardImages: Record<AudienceItem["id"], string> = {
  trackers: "/images/tracker.png",
  veterinarians: "/images/gorilladoctor.png",
};

export function DesignedForSection(): ReactElement {
  return (
    <section aria-labelledby="designed-for-heading" className="bg-white">
      <div className="mx-auto max-w-6xl px-6 py-16">
        <div className="text-center">
          <p className="inline-block border-b border-brand pb-1 text-xs uppercase tracking-widest text-brand">
            {designedForContent.eyebrow}
          </p>
          <h2
            id="designed-for-heading"
            className="mt-4 text-3xl font-bold text-brand md:text-4xl"
          >
            {designedForContent.heading}
          </h2>
        </div>
        <p className="mt-6 max-w-xl text-sm text-neutral-800 md:text-base">
          {designedForContent.body}
        </p>

        <ul className="mx-auto mt-10 grid max-w-3xl gap-8 md:grid-cols-2 md:gap-12">
          {audiences.map((item) => (
            <li
              key={item.id}
              className={
                item.id === "trackers"
                  ? "md:mt-24 md:justify-self-end"
                  : "md:justify-self-start"
              }
            >
              <article className="group flex h-full w-full max-w-xs flex-col rounded-3xl bg-[#f0eee0] p-6 transition-all duration-300 hover:shadow-xl motion-safe:hover:-translate-y-2">
                <header className="flex items-center gap-3">
                  <AudienceIcon id={item.id} />
                  <h3 className="text-xl font-bold text-brand">{item.title}</h3>
                </header>
                <p className="mt-4 text-[0.65rem] font-bold uppercase tracking-wider text-accent-dark">
                  {item.role}
                </p>
                <p className="mt-2 text-xs leading-relaxed text-neutral-800">
                  {item.description}
                </p>

                <div className="relative mt-6 h-40 w-full">
                  <Image
                    src={cardImages[item.id]}
                    alt={item.imageLabel}
                    fill
                    sizes="(min-width: 768px) 20rem, 90vw"
                    className="object-contain"
                  />
                </div>
              </article>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}