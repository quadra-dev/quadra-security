"use client"
import { motion } from "motion/react";
import Navbar from "@/components/header/Navbar";
import { ImagesSliderDemo } from "@/components/home/ImageSlider";
import Image from "next/image";

export default function Home() {
  return (
    <div className="font-[family-name:var(--font-geist-sans)]">
      <section className="h-screen">
        <ImagesSliderDemo />
      </section>
      <section className="h-screen bg-gradient-to-b from-[#2b388f] to-[#19156c]">
        <motion.p className="font-bold text-xl md:text-5xl text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 py-16">
          Unmatched Quality and Variety <br /> in <span className="text-amber-400">Services{" "}</span>
        </motion.p>
      </section>
    </div>
  );
}
