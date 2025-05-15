/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { useEffect, useState } from "react";
import SolutionCard from "./SolutionCard";

const solutions = [
  {
    imageSrc: "https://res.cloudinary.com/dggsp8ihg/image/upload/v1747294413/home_security_ba6wve.jpg",
    title: "Home Security",
    description:
      "Comprehensive surveillance and alarm solutions for residences, ensuring your family’s safety around the clock.",
    features: [
      "24/7 Monitoring",
      "Smart Door Sensors",
      "Remote Access Control",
    ],
    path: "/solutions/home-security",
  },
  {
    imageSrc: "https://res.cloudinary.com/dggsp8ihg/image/upload/v1747294436/industrial_security_tr7ojd.jpg",
    title: "Industrial Security",
    description:
      "Robust security systems designed for factories, warehouses, and industrial estates to deter unauthorized access.",
    features: [
      "Perimeter Intrusion Detection",
      "HD Surveillance",
      "Fire and Hazard Alerts",
    ],
    path: "/solutions/industrial-security",
  },
  {
    imageSrc: "https://res.cloudinary.com/dggsp8ihg/image/upload/v1747294413/real_estate_security_fwf9kz.jpg",
    title: "Real Estate Security",
    description:
      "Advanced surveillance for residential and commercial properties under development or in operation.",
    features: [
      "Construction Site Monitoring",
      "Access Management",
      "Night Vision Cameras",
    ],
    path: "/solutions/real-estate-security",
  },
  {
    imageSrc: "https://res.cloudinary.com/dggsp8ihg/image/upload/v1747294424/retail_security_uv3hjp.jpg",
    title: "Retail Security",
    description:
      "Customized CCTV and theft prevention systems for shops, malls, and stores to reduce shrinkage.",
    features: [
      "Customer Behavior Monitoring",
      "POS Integration",
      "Panic Button Systems",
    ],
    path: "/solutions/retail-security",
  },
  {
    imageSrc: "https://res.cloudinary.com/dggsp8ihg/image/upload/v1747294427/hospital_security_iroejb.jpg",
    title: "Hospitality / Health Care Security",
    description:
      "Discreet and effective surveillance tailored for hospitals, clinics, hotels, and resorts to protect guests and patients.",
    features: [
      "Visitor Management Systems",
      "Emergency Response Integration",
      "Surveillance with Privacy Zones",
    ],
    path: "/solutions/hospitality-security",
  },
];



const SolutionsCarousel = () => {
  const [api, setApi] = useState<any>(null);
  const [current, setCurrent] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    if (!api || isHovered) {
      return;
    }

    // Set up autoplay
    const interval = setInterval(() => {
      api.scrollNext();
    }, 3000);

    return () => clearInterval(interval);
  }, [api, isHovered]);

  useEffect(() => {
    if (!api) {
      return;
    }

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap());
    });
  }, [api]);

  return (
    <div 
      className="relative px-6 py-10 w-[300px] md:w-auto rounded-xl"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Carousel
        setApi={setApi}
        className="w-full max-w-5xl mx-auto"
        opts={{
          align: "start",
          loop: true,
          skipSnaps: false,
        }}
      >
        <CarouselContent className="-ml-2 md:-ml-4">
          {solutions.map((service, index) => (
            <CarouselItem key={index} className="pl-2 md:pl-4 md:basis-1/3">
              <div className="p-1">
                <SolutionCard {...service} />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="bg-[#211a7d] hover:bg-[#2d26a0] h-6 w-6 m-3 text-white border-none" />
        <CarouselNext className="bg-[#211a7d] hover:bg-[#2d26a0]  m-3 h-6 w-6 text-white border-none" />
      </Carousel>

      {/* Dot indicators */}
      <div className="mt-6 flex justify-center gap-2">
        {solutions.map((_, idx) => (
          <div 
            key={idx}
            className={`w-3 h-3 rounded-full cursor-pointer transition-colors ${
              idx === current ? "bg-yellow-400" : "bg-white/80"
            }`}
            onClick={() => api?.scrollTo(idx)}
          />
        ))}
      </div>
    </div>
  );
};

export default SolutionsCarousel;
