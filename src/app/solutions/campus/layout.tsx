import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Campus Security Solutions",
  description:
    "Protect your educational institution with Quadra Security's comprehensive campus security solutions including AI monitoring, face recognition, GPS tracking, and more.",
};

export default function CampusLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
