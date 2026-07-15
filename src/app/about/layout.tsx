import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about Quadra Security – your trusted partner in home and commercial surveillance, offering innovative and reliable security solutions in Gurugram.",
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
