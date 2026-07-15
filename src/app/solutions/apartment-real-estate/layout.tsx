import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Apartment & Real Estate Security Solutions",
  description:
    "Explore comprehensive apartment and real estate security solutions including CCTV surveillance, biometric access control, and 24/7 monitoring by Quadra Security in Gurugram.",
};

export default function ApartmentLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
