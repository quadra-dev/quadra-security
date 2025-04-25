"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import FancyButton from "../home/FancyButton";

const Navbar = () => {
  const pathname = usePathname();
  
  const navItems = [
    { name: "Home", path: "/" },
    { name: "Solutions", path: "/solutions" },
    { name: "Services", path: "/services" },
    { name: "Blogs", path: "/blogs" },
    { name: "About Us", path: "/about" },
    { name: "Contact Us", path: "/contact" },
  ];

  return (
    <div className="h-16 bg-transparent backdrop-blur-2xl fixed z-50 w-screen font-[family-name:var(--font-urbanist)]">
      <div className="h-full w-full flex items-center justify-between p-6">
        <div className="flex gap-1">
          <Image
            src="/logo_white.svg"
            width={24}
            height={24}
            alt="Picture of the author"
          />
          <div className="flex flex-col justify-start">
            <p className="text-white font-semibold text-md">
              Quadra <span className="text-yellow-500">Security</span>
            </p>
          </div>
        </div>
        <div className="">
          <nav>
          <ul className="flex text-white text-md justify-evenly gap-10">
  {navItems.map((item) => (
    <li key={item.name}>
      <Link 
        href={item.path}
        className={`px-3 py-1 rounded-xl transition-colors duration-300 ${
          pathname === item.path
            ? "bg-yellow-500 text-black font-semibold"
            : "hover:bg-yellow-500 hover:text-black"
        }`}
      >
        {item.name}
      </Link>
    </li>
  ))}
</ul>
          </nav>
        </div>

        <div className="flex gap-3 items-center ">
          <FancyButton className="py-2 px-3 text-sm rounded-sm">Get your Quotation Today</FancyButton>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
