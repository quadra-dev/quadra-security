'use client';

import { Gem, Clock, Smartphone, Users } from "lucide-react";
import Image from "next/image";
import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

const WhyChooseUs = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const fadeInVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.div
      ref={ref}
      variants={fadeInVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="w-screen items-center flex flex-col md:justify-center justify-center gap-y-8"
    >
      {/* Top Title */}
      <div className="flex items-center space-x-4 mb-6">
        <div className="w-0 h-0 border-t-[15px] border-t-transparent border-b-[15px] border-b-transparent border-l-[20px] border-l-purple-500" />
        <h1 className="text-white md:text-3xl text-2xl font-semibold">
          <p style={{ wordSpacing: "5px" }}>
            The Best in <span className="text-yellow-500">GURGAON</span>
          </p>
        </h1>
      </div>

      {/* Main Content */}
      <div className="flex flex-col lg:flex-row items-center justify-center gap-12">
        {/* Left Side: Image */}
        <div className="relative flex flex-col items-center justify-center">
          <div className="w-[250px] h-[250px] md:w-[500px] md:h-[500px] bg-transparent rounded-full flex justify-center z-20 items-center relative">
            <Image
              src="/home/why-choose-us.png"
              alt="Camera and Mobile"
              layout="fill"
              objectFit="cover"
              className="rounded-full"
            />
          </div>
          {/* Circle Text */}
          <div className="absolute md:top-1/2 md:left-0 z-40 transform md:-translate-y-1/2 md:-translate-x-1/3 md:bg-white bg-black/50 md:text-[#180648] text-white w-32 h-32 flex justify-center items-center rounded-full text-center font-semibold">
            WHY
            <br />
            CHOOSE
            <br />
            US
          </div>
        </div>

        {/* Right Side: Features */}
        <div className="flex flex-col md:space-y-6 space-y-4">
          {[
            { icon: <Gem />, text: "Premium Quality Equipment", shift: 150 },
            { icon: <Clock />, text: "Quick & Easy Installation", shift: 100 },
            { icon: <Smartphone />, text: "Remote Monitoring Access", shift: 100 },
            { icon: <Users />, text: "Customer-Centric Support", shift: 150 },
          ].map((feature, index) => (
            <motion.div
              key={feature.text}
              className={`flex items-center gap-4 z-40 relative md:right-[${feature.shift}px]`}
              variants={fadeInVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              transition={{ duration: 0.4 + index * 0.2, delay: 0.2 * index }}
            >
              <div className="bg-white rounded-full w-12 h-12 md:w-20 md:h-20 flex justify-center items-center">
                {React.cloneElement(feature.icon, {
                  className: "text-yellow-400 md:w-8 md:h-8",
                })}
              </div>
              <hr className="w-24 hidden md:block" />
              <span className="text-white text-sm md:text-lg font-medium">
                {feature.text}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default WhyChooseUs;
