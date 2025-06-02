import type { Metadata } from "next";
import { Urbanist } from "next/font/google";
import "./globals.css";
import ClientNavWrapper from "@/components/header/ClientNavWrapper";
import { Toaster } from "sonner";
import { Analytics } from "@vercel/analytics/next";


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
      <head>
        <meta
          name="google-site-verification"
          content="4SZyundM086TBwsSBgTjzQ2x29phDN6SJFUuDhb87WY"
        />
      </head>
      <body className={`${urbanist.variable} antialiased`}>
        <Analytics />
        <Toaster />
        <ClientNavWrapper>{children}</ClientNavWrapper>
      </body>
    </html>
  );
}
