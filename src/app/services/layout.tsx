import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Services",
  description:
    "Explore Quadra Security's full range of security services including CCTV installation, biometric systems, ANPR cameras, EPABX, metal detectors, and more in Gurugram and Delhi NCR.",
};

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
