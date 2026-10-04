import type { ReactElement } from "react";
import type { BenefitItem } from "./homeContent";

const common = {
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.6,
  strokeLinecap: "round",
  strokeLinejoin: "round",
  "aria-hidden": true,
  focusable: false,
} as const;

function PatternsIcon(): ReactElement {
  return (
    <svg {...common}>
      <circle cx="12" cy="12" r="3" />
      <path d="M12 2v3M12 19v3M2 12h3M19 12h3M4.9 4.9l2.1 2.1M17 17l2.1 2.1M4.9 19.1L7 17M17 7l2.1-2.1" />
    </svg>
  );
}

function CareIcon(): ReactElement {
  return (
    <svg {...common}>
      <path d="M12 3l7 3v5c0 4.5-3 8-7 10-4-2-7-5.5-7-10V6l7-3z" />
      <path d="M9 12l2 2 4-4" />
    </svg>
  );
}

function LocationIcon(): ReactElement {
  return (
    <svg {...common}>
      <path d="M12 21s7-6.2 7-11a7 7 0 10-14 0c0 4.8 7 11 7 11z" />
      <circle cx="12" cy="10" r="2.5" />
    </svg>
  );
}

function OfflineIcon(): ReactElement {
  return (
    <svg {...common}>
      <path d="M5 12.5a10 10 0 0114 0M8.5 16a5 5 0 017 0" />
      <circle cx="12" cy="19" r="0.8" />
      <path d="M3 3l18 18" />
    </svg>
  );
}

const icons: Record<BenefitItem["id"], () => ReactElement> = {
  patterns: PatternsIcon,
  care: CareIcon,
  location: LocationIcon,
  offline: OfflineIcon,
};

export function BenefitIcon({ id }: { readonly id: BenefitItem["id"] }): ReactElement {
  const Icon = icons[id];
  return (
    <span className="flex h-12 w-12 items-center justify-center rounded-full border border-brand text-brand transition-all duration-300 group-hover:bg-brand group-hover:text-white motion-safe:group-hover:scale-110 motion-safe:group-hover:-rotate-6">
      <Icon />
    </span>
  );
}