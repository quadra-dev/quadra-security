"use client";

import { usePathname } from "next/navigation";
import Navbar from "./Navbar";
import HomeNavbar from "./HomeNavbar";
import Footer from "../footer/Footer";

export default function ClientNavWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  // Show HomeNavbar only on the homepage
  const isHome = pathname === "/";

  // Don't show any navbar for /studio and routes starting with /studio
  const isStudio = pathname.startsWith("/studio");

  return (
    <>
      {!isStudio && (isHome ? <HomeNavbar /> : <Navbar />)}
      {children}
      <Footer/>
    </>
  );
}
