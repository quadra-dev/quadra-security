import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Retail Security Solutions",
  description:
    "Protect your retail business with Quadra Security's advanced security solutions. AI-powered surveillance, access control, and 24/7 monitoring tailored for retail environments.",
};

export default function RetailLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
