export type TermsSection = {
  readonly id: string;
  readonly title: string;
  readonly paragraphs: readonly string[];
  readonly items?: readonly string[];
};

export const TERMS_META = {
  lastUpdated: "4 October 2026",
  version: "1.0",
  isDraft: false,
} as const;

export const CONTACT_SECTION = { id: "contact", title: "Contact us" } as const;

export const TERMS_SECTIONS: readonly TermsSection[] = [
  {
    id: "about-these-terms",
    title: "About these terms",
    paragraphs: [
      "Solène, a team at AkiraChix, provides this website and the Canopy platform. Canopy connects field observations, veterinary records and follow-up into a single traceable health case for mountain gorilla conservation.",
      "By using the website or the platform you agree to these terms. If you do not agree, please do not use them.",
    ],
    items: [
      "The public website (Home, About Us and Contact Us) is open to everyone.",
      "The tracker mobile app and the veterinary dashboard are for authorised staff only.",
    ],
  },
  {
    id: "authorised-access",
    title: "Accounts and authorised access",
    paragraphs: [
      "Access to the operational applications is granted by role and can be changed or removed at any time. Access ends when you leave the programme or change role.",
    ],
    items: [
      "Keep your sign-in details and device PIN private. Do not share your account or your device unlocked.",
      "Veterinary and management roles must use multi-factor authentication.",
      "Field sessions are tied to your enrolled device. Do not use another person's device or account.",
      "Report a lost, stolen or tampered-with device immediately, and no later than four hours after you notice.",
    ],
  },
  {
    id: "acceptable-use",
    title: "Acceptable use",
    paragraphs: [
      "You must use Canopy only for gorilla health, conservation and authorised research. You must not:",
    ],
    items: [
      "Try to access records, functions or accounts outside your role, including by changing identifiers in links or requests.",
      "Bypass, disable or test security controls without written permission.",
      "Copy, scrape, export or share data except through approved workflows.",
      "Submit false or deliberately misleading observations.",
      "Upload harmful code or unlawful content, or interfere with the service.",
      "Use any information from Canopy to locate gorillas for hunting, trade or any harmful purpose.",
    ],
  },
  {
    id: "sensitive-data",
    title: "Sensitive wildlife, health and personal data",
    paragraphs: [
      "Canopy handles three kinds of sensitive data: gorilla health records, precise gorilla locations, and staff personal data. Precise locations carry the highest protection because their disclosure could put gorillas at risk of poaching.",
    ],
    items: [
      "Locations are generalised by default. Seeing an exact location requires the right role, a stated reason and a fresh sign-in, and each reveal is recorded.",
      "Do not share, screenshot, copy or send precise locations or clinical details outside the approved workflows, including by messaging apps and email.",
      "Photos taken for evidence must be captured through the app. Location information embedded in photos is removed before they are stored.",
      "Notifications contain only a general event type. Sign in to the app to see details, and do not forward alerts.",
    ],
  },
  {
    id: "monitoring-and-audit",
    title: "Monitoring and audit records",
    paragraphs: [
      "We keep tamper-evident records of significant actions, such as sign-ins, access to records, location reveals, exports, case decisions and changes to data. We use them to protect gorillas and data, to hold actions to account and to investigate incidents.",
      "By using the operational applications you acknowledge this recording. Misuse of access may lead to suspension, disciplinary action or legal action.",
    ],
  },
  {
    id: "field-use-and-sync",
    title: "Field use and synchronisation",
    paragraphs: [
      "The tracker app works offline. An observation saved on your device is not confirmed until the server has acknowledged it, and the app shows whether each record is pending, synchronising, failed or confirmed.",
    ],
    items: [
      "Do not uninstall the app or clear its data while records are pending.",
      "Retrying is safe: the same observation will not be recorded twice.",
      "If a conflict occurs, the server's version is kept and the conflict is recorded so that it can be reviewed.",
      "Repeated incorrect PIN attempts erase the local data on the device. Synchronise pending records whenever you can.",
    ],
  },
  {
    id: "ai-features",
    title: "AI-assisted features",
    paragraphs: [
      "Some features may use AI to summarise information or suggest next steps. AI output is a suggestion, not a diagnosis or a veterinary decision, and it can be plausible but wrong.",
    ],
    items: [
      "AI features can only use information you are already permitted to see.",
      "Nothing generated by AI is added to a record until a qualified veterinarian reviews and accepts it.",
      "We do not send precise locations, staff personal data or direct gorilla identifiers to AI services.",
      "Do not try to use AI features to reach information or actions outside your permissions.",
    ],
  },
  {
    id: "third-party-services",
    title: "Third-party services",
    paragraphs: [
      "Canopy relies on third parties for services such as maps, weather, notifications and hosting. We send them only what is needed, and locations are rounded where they are involved.",
      "We do not control these services and cannot guarantee that they will always be available. Field observation capture is designed to keep working when they are not.",
    ],
  },
  {
    id: "website-and-contact-form",
    title: "Website and contact form",
    paragraphs: [
      "If you contact us through the website, we use your details only to respond to you and keep them no longer than needed. Please do not include health information, precise locations or other sensitive details in a message.",
      "Do not misuse the contact form, for example by sending spam or automated submissions.",
    ],
  },
  {
    id: "data-protection",
    title: "Data protection and your rights",
    paragraphs: [
      "We process personal data in line with the data protection laws that apply to our work: Rwanda Law No. 058/2021, the Uganda Data Protection and Privacy Act 2019, DRC Ordinance-Law No. 23/010, the Kenya Data Protection Act 2019 for staff data, and the GDPR where it applies.",
      "We collect only what is needed, keep it for the period set for its type, and delete it afterwards. Data is transferred across borders only where there is a legal basis, and the current pilot is limited to a single site.",
      "You can ask to access, correct or delete your personal data by contacting us. We aim to reply within thirty days. If personal data is breached, we will notify affected people and the authorities within the time the law requires.",
      "Data supplied by conservation partners is handled under our agreements with them, and you must follow those agreements.",
    ],
  },
  {
    id: "reporting-security-issues",
    title: "Reporting security issues",
    paragraphs: [
      "If you suspect a vulnerability, data exposure, lost credentials or a lost device, tell us straight away using the contact details below.",
    ],
    items: [
      "Do not try to exploit the issue or copy more data to prove it.",
      "Keep any evidence you have, but do not share sensitive data in your report.",
      "We may suspend access while we contain and investigate the issue.",
    ],
  },
  {
    id: "suspension",
    title: "Suspension and ending access",
    paragraphs: [
      "We may suspend or end your access at any time, for example if we suspect a compromise or misuse, or if your role changes. When your access ends, you must stop using Canopy and delete any Canopy data held on personal devices.",
    ],
  },
  {
    id: "intellectual-property",
    title: "Intellectual property",
    paragraphs: [
      "The Solène name, logo, website content and Canopy software belong to Solène or its licensors. You may not copy, modify or reuse them without written permission.",
    ],
  },
  {
    id: "disclaimers-and-liability",
    title: "Disclaimers and liability",
    paragraphs: [
      "We work to keep Canopy available and accurate, but we provide it as is and cannot promise it will always be uninterrupted or error-free. Canopy supports, and does not replace, the judgement of qualified veterinary and conservation staff.",
      "To the extent the law allows, Solène is not liable for indirect or consequential loss arising from use of the website or platform. Nothing in these terms limits liability that cannot be limited by law.",
    ],
  },
  {
    id: "changes-and-governing-law",
    title: "Changes and governing law",
    paragraphs: [
      "We may update these terms. The date at the top shows the latest version, and continuing to use Canopy after a change means you accept the updated terms.",
      "These terms are governed by the laws of [jurisdiction to be confirmed by legal review].",
    ],
  },
];