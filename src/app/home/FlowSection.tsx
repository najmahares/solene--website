import type { ReactElement } from "react";
import { flowSteps } from "./homeContent";

export function FlowSection(): ReactElement {
  return (
    <section aria-labelledby="flow-heading">
      <div className="mx-auto max-w-6xl px-6 py-16 text-center">
        <p className="text-xs uppercase tracking-widest text-brand">The flow</p>
        <h2 id="flow-heading" className="mt-2 text-3xl font-bold text-brand md:text-4xl">
          From the forest to the vet
        </h2>

        <div className="relative mt-12">
          <div
            aria-hidden="true"
            className="absolute left-[12%] right-[12%] top-6 hidden border-t-2 border-dashed border-accent lg:block"
          />
          <ol className="relative grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {flowSteps.map((step) => (
              <li
                key={step.id}
                className="group flex flex-col items-center gap-2 rounded-2xl border border-transparent bg-white/60 p-5 transition-all duration-300 hover:border-brand/30 hover:bg-white hover:shadow-xl motion-safe:hover:-translate-y-2"
              >
                <span
                  aria-hidden="true"
                  className="flex h-12 w-12 items-center justify-center rounded-full border-2 border-black bg-accent text-lg font-bold text-black transition-transform duration-300 motion-safe:group-hover:scale-125 motion-safe:group-hover:rotate-12"
                >
                  {step.number}
                </span>
                <h3 className="text-lg font-bold text-brand">{step.title}</h3>
                <p className="text-sm font-semibold text-accent-dark">
                  ({step.platform})
                </p>
                <p className="text-sm leading-relaxed text-neutral-800">
                  {step.description}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}