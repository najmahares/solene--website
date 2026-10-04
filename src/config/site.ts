export const SITE = {
  name: "Solène",
  contactEmail: "solenecanopy@gmail.com",
  contactPhone: "+2567499930",
  location: "AkiraChix, Korongo Road, Nairobi",
} as const;

export type NavItem = {
  readonly label: string;
  readonly href: string;
};

export type OptionalLinkItem = {
  readonly label: string;
  readonly href?: string;
};

export const MAIN_NAV: readonly NavItem[] = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Contact Us", href: "/contact" },
];

export const HEADER_CTA: NavItem = { label: "Get Started", href: "/contact" };

export const PRODUCT_LINKS: readonly OptionalLinkItem[] = [
  { label: "Tracker Mobile App" },
  { label: "Gorilla Doctors PWA" },
];

export const TERMS_PATH = "/terms-and-conditions";
export const MAIN_CONTENT_ID = "main-content";