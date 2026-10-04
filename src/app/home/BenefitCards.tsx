"use client";

import { useRef, useState } from "react";
import type { ReactElement } from "react";
import { BenefitIcon } from "./HomeIcons";
import type { BenefitItem } from "./homeContent";

export function BenefitCards({
  items,
}: {
  readonly items: readonly BenefitItem[];
}): ReactElement {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const [active, setActive] = useState<BenefitItem | null>(null);

  function open(item: BenefitItem): void {
    setActive(item);
    dialogRef.current?.showModal();
  }

  function close(): void {
    dialogRef.current?.close();
  }

  return (
    <>
      <ul className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {items.map((item) => (
          <li key={item.id}>
            <button
              type="button"
              onClick={() => open(item)}
              aria-haspopup="dialog"
              className="group relative flex h-full w-full cursor-pointer flex-col items-center gap-3 overflow-hidden rounded-2xl border border-brand/10 bg-white p-6 text-center shadow-sm transition-all duration-300 hover:border-brand/40 hover:shadow-xl focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand motion-safe:hover:-translate-y-2 motion-safe:hover:rotate-1 motion-safe:active:scale-95"
            >
              <span
                aria-hidden="true"
                className="absolute inset-x-0 top-0 h-1 origin-left bg-accent transition-transform duration-300 motion-safe:scale-x-0 motion-safe:group-hover:scale-x-100"
              />
              <BenefitIcon id={item.id} />
              <h3 className="text-base font-bold text-brand">{item.title}</h3>
              <p className="text-sm leading-relaxed text-neutral-800">
                {item.description}
              </p>
              <span className="text-xs font-semibold text-brand/70">
                Click to enlarge
              </span>
            </button>
          </li>
        ))}
      </ul>

      <dialog
        ref={dialogRef}
        aria-label={active ? active.title : "Benefit details"}
        onClose={() => setActive(null)}
        onClick={(event) => {
          if (event.target === dialogRef.current) close();
        }}
        className="m-auto w-[min(92vw,28rem)] rounded-3xl p-0 shadow-2xl backdrop:bg-black/50 backdrop:backdrop-blur-sm motion-safe:animate-zoom"
      >
        {active ? (
          <div className="flex flex-col items-center gap-5 p-10 text-center">
            <div className="scale-150 py-2">
              <BenefitIcon id={active.id} />
            </div>
            <h3 className="text-2xl font-bold text-brand">{active.title}</h3>
            <p className="text-neutral-800">{active.description}</p>
            <button
              type="button"
              onClick={close}
              className="rounded-full bg-brand px-6 py-2 text-sm font-semibold text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand"
            >
              Close
            </button>
          </div>
        ) : null}
      </dialog>
    </>
  );
}