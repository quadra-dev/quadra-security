import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Comprehensive Bank Security Solutions",
  description:
    "Bank Security solutions by Quadra Security offering CCTV, biometric access, 24/7 monitoring & more.",
};

export default function BankLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
