import type { Metadata } from "next";
import { Urbanist } from "next/font/google";
import "./globals.css";
import ClientNavWrapper from "@/components/header/ClientNavWrapper";
import { Toaster } from "sonner";

const urbanist = Urbanist({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-urbanist",
});

export const metadata: Metadata = {
  title: "Quadra Security",
  description: "Your trusted partner in security solutions.",
  icons: {
    icon: "/favicon.ico", // path inside public folder
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${urbanist.variable} antialiased`}>
        <Toaster />
        <ClientNavWrapper>{children}</ClientNavWrapper>
      </body>
    </html>
  );
}
