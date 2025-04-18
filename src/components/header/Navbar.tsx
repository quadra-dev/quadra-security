import React from "react";
import Image from "next/image";
import { InstagramIcon, LinkedinIcon, WatchIcon, YoutubeIcon } from "lucide-react";
const Navbar = () => {
  return (
    <div className="h-16 bg-black">
        <div className="h-full w-full flex items-center justify-between">
        <div className="flex gap-2 p-4">
        <Image
          src="/logo_white.svg"
          width={32}
          height={32}
          alt="Picture of the author"
        />
        <div className="flex flex-col justify-start">
          <p className="text-white font-semibold text-sm">QUADRA</p>
          <p className="text-amber-400 font-bold text-sm">SECURITY</p>
        </div>
      </div>
      <div className="flex p-4 gap-3">
        <InstagramIcon/>
        <YoutubeIcon/>
        <WatchIcon/>
        <LinkedinIcon/>
      </div>
        </div>
      

      <nav></nav>
    </div>
  );
};

export default Navbar;
