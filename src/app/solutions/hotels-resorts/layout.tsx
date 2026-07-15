import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Hotels & Resorts Security Solutions",
  description:
    "Protect your hotels and resorts with Quadra Security's advanced surveillance and AI-powered security solutions for 24/7 safety and peace of mind.",
};

export default function HotelsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
