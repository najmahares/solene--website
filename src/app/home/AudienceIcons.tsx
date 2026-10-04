import type { ReactElement } from "react";
import type { AudienceItem } from "./homeContent";

const common = {
  width: 20,
  height: 20,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.8,
  strokeLinecap: "round",
  strokeLinejoin: "round",
  "aria-hidden": true,
  focusable: false,
} as const;

function BinocularsIcon(): ReactElement {
  return (
    <svg {...common}>
      <circle cx="6.5" cy="15.5" r="3.5" />
      <circle cx="17.5" cy="15.5" r="3.5" />
      <path d="M10 15.5h4M6.5 12 8 5h2v6M17.5 12 16 5h-2v6" />
    </svg>
  );
}

function StethoscopeIcon(): ReactElement {
  return (
    <svg {...common}>
      <path d="M6 3v6a4 4 0 0 0 8 0V3M6 3H5M14 3h1M10 13v2a4 4 0 0 0 8 0v-1" />
      <circle cx="18" cy="12" r="2" />
    </svg>
  );
}

const icons: Record<AudienceItem["id"], () => ReactElement> = {
  trackers: BinocularsIcon,
  veterinarians: StethoscopeIcon,
};

export function AudienceIcon({ id }: { readonly id: AudienceItem["id"] }): ReactElement {
  const Icon = icons[id];
  return (
    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-brand text-white transition-transform duration-300 motion-safe:group-hover:scale-110 motion-safe:group-hover:-rotate-6">
      <Icon />
    </span>
  );
}