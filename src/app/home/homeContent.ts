export interface BenefitItem {
  readonly id: "patterns" | "care" | "location" | "offline";
  readonly title: string;
  readonly description: string;
}

export interface FlowStep {
  readonly id: string;
  readonly number: number;
  readonly title: string;
  readonly platform: string;
  readonly description: string;
}

export const heroContent = {
  headingLine1: "Healthier gorillas.",
  headingLine2: "Stronger tomorrows.",
  body: "Solène is a secure, offline-capable platform that connects field observations, veterinary records and follow-up care, helping conservation teams monitor, track and follow up on mountain gorilla health.",
  ctaLabel: "Learn More",
  ctaHref: "#canopy",
} as const;

export const introContent = {
  heading: "Canopy: built for the field, designed for impact.",
  body: "Canopy is a secure digital health record and tracking system for mountain gorilla conservation. It brings together field reports, veterinary care and follow-up tasks in one connected platform.",
} as const;

export const benefits: readonly BenefitItem[] = [
  {
    id: "patterns",
    title: "Spot patterns earlier",
    description: "Surface recurring health signs for veterinary review.",
  },
  {
    id: "care",
    title: "Coordinate care",
    description:
      "Give vets the full picture, from field notes to medical histories.",
  },
  {
    id: "location",
    title: "Protect sensitive locations",
    description: "Exact locations are hidden by default.",
  },
  {
    id: "offline",
    title: "Work offline",
    description: "Capture data in the forest and sync when there is a signal.",
  },
];

export const flowSteps: readonly FlowStep[] = [
  {
    id: "field-tracker",
    number: 1,
    title: "Field Tracker",
    platform: "Mobile app",
    description:
      "Trackers log observations, photos and notes, even offline, and records are held on the device until they can sync.",
  },
  {
    id: "sync",
    number: 2,
    title: "Sync",
    platform: "Backend",
    description:
      "When a signal is available, records sync securely to the Canopy backend with unique record IDs to prevent duplicates.",
  },
  {
    id: "veterinarian",
    number: 3,
    title: "Veterinarian",
    platform: "Web app",
    description:
      "Authorised vets review reports and medical history through a secure dashboard with multi-factor authentication.",
  },
  {
    id: "review",
    number: 4,
    title: "Review",
    platform: "Rules engine",
    description:
      "Recurring signs over time are flagged for veterinary review so teams can follow up early.",
  },
];