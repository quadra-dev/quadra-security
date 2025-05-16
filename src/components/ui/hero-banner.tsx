"use client";

import React from "react";

interface HeroBannerProps {
  title: string;
  backgroundImage?: string;
}

const HeroBanner: React.FC<HeroBannerProps> = ({
  title,
  backgroundImage = "/hero-bg.png",
}) => {
  return (
    <div
      className="bg-gray-700 bg-opacity-80 bg-blend-overlay bg-cover bg-center py-24 md:py-20"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="container mx-auto text-center">
        <h1 className="text-3xl font-bold text-white mt-12">{title}</h1>
      </div>
    </div>
  );
};

export default HeroBanner;
