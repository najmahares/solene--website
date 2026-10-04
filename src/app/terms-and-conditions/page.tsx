import type { Metadata } from "next";
import { TermsDocument } from "@/features/terms/TermsDocument";

export const metadata: Metadata = {
  title: "Terms and Conditions | Solène",
  description: "The terms that apply when you use the Solène website and the Canopy platform.",
};

export default function TermsAndConditionsPage() {
  return <TermsDocument />;
}