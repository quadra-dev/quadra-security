// components/TestimonialsCarousel.tsx
"use client";

import React, { useRef, useState, useEffect } from "react";
import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

const testimonials = [
  {
    name: "XXXXX SINGH",
    message:
      "The team was at my DLF Phase 2 home within hours. Setup was quick, and now I can monitor my house from anywhere!",
    image: "/client.jpg", // replace with real image
  },
  {
    name: "XXXXX SINGH",
    message:
      "I trust them with all my properties. Quick setup, excellent support. Highly recommended!",
    image: "/client.jpg",
  },
  {
    name: "XXXXX SINGH",
    message:
      "Secure and seamless! Setup was efficient and now my family feels much safer.",
    image: "/client.jpg",
  },
];

export default function TestimonialsCarousel() {
  const [api, setApi] = useState<any>(null);
  const [current, setCurrent] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  
  const autoplayPlugin = useRef(
    Autoplay({
      delay: 3000,
      stopOnInteraction: false,
      stopOnMouseEnter: true,
    })
  );

  // Track current slide
  useEffect(() => {
    if (!api) return;
    
    const onSelect = () => {
      setCurrent(api.selectedScrollSnap());
    };
    
    api.on("select", onSelect);
    return () => {
      api.off("select", onSelect);
    };
  }, [api]);

  // Clean up autoplay on unmount
  useEffect(() => {
    return () => {
      if (api && autoplayPlugin.current) {
        autoplayPlugin.current.stop();
      }
    };
  }, [api]);

  return (
    <div 
      className="w-full max-w-4xl mx-auto px-4 py-8"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Carousel
        setApi={setApi}
        plugins={[autoplayPlugin.current]}
        opts={{
          align: "start",
          loop: true,
        }}
        className="w-full"
      >
        <CarouselContent>
          {testimonials.map((testimonial, index) => (
            <CarouselItem
              key={index}
              className="sm:basis-1/1 md:basis-1/2 lg:basis-1/3 p-2"
            >
              <div className="bg-white rounded-xl p-6 text-black shadow-lg h-full flex flex-col">
                <div className="flex items-center mb-4">
                  <div className="relative w-16 h-16 rounded-full overflow-hidden mr-4">
                    <Image
                      src={testimonial.image}
                      alt={testimonial.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <p className="font-semibold text-gray-800">
                    {testimonial.name}
                  </p>
                </div>
                <p className="text-sm italic flex-grow">"{testimonial.message}"</p>
                <div className="mt-4 flex">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <svg
                      key={star}
                      className="w-5 h-5 text-yellow-500"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="bg-purple-600 hover:bg-purple-700 text-white border-none" />
        <CarouselNext className="bg-purple-600 hover:bg-purple-700 text-white border-none" />
      </Carousel>

      {/* Dot indicators */}
      <div className="mt-6 flex justify-center gap-2">
        {testimonials.map((_, idx) => (
          <button
            key={idx}
            className={`w-3 h-3 rounded-full transition-colors ${
              idx === current ? "bg-purple-600" : "bg-gray-300"
            }`}
            onClick={() => api?.scrollTo(idx)}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
