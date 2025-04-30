import { Gem, Clock, Smartphone, Users } from "lucide-react";
import Image from "next/image";
import React from "react";

const WhyChooseUs = () => {
  const features = [
    {
      icon: <Gem className="text-yellow-400 w-8 h-8" />,
      text: "Premium Quality Equipment",
    },
    {
      icon: <Clock className="text-yellow-400 w-8 h-8" />,
      text: "Quick & Easy Installation",
    },
    {
      icon: <Smartphone className="text-yellow-400 w-8 h-8" />,
      text: "Remote Monitoring Access",
    },
    {
      icon: <Users className="text-yellow-400 w-8 h-8" />,
      text: "Customer-Centric Support",
    },
  ];

  return (
    <div className="w-screen items-center flex flex-col md:justify-center  justify-center gap-y-8">
      {/* Top Title */}
      <div className="flex items-center space-x-4 mb-6">
        <div className="w-0 h-0 border-t-[15px] border-t-transparent border-b-[15px] border-b-transparent border-l-[20px] border-l-purple-500" />
        <h1 className="text-white md:text-3xl  text-2xl font-semibold">
          <p style={{ wordSpacing: "5px" }} className="">
            The Best in <span className="text-yellow-500">GURGAON</span>
          </p>
        </h1>
      </div>

      {/* Main Content */}
      <div className="flex flex-col lg:flex-row items-center justify-center gap-12">
        {/* Left Side: Image */}
        <div className="relative flex flex-col items-center justify-center">
          <div className=" w-[250px] h-[250px] md:w-[500px] md:h-[500px] bg-transparent rounded-full flex justify-center z-20 items-center relative">
            <Image
              src="/home/why-choose-us.png" // <-- your camera+mobile combined image (save it)
              alt="Camera and Mobile"
              layout="fill"
              objectFit="cover"
              className="rounded-full "
            />
          </div>
          {/* Circle Text */}
          <div className="absolute md:top-1/2  md:left-0 z-40 transform md:-translate-y-1/2 md:-translate-x-1/3 md:bg-white bg-black/50 md:text-[#180648] text-white w-32 h-32 flex justify-center items-center rounded-full text-center font-semibold">
            WHY
            <br />
            CHOOSE
            <br />
            US
          </div>
        </div>
        {/* Right Side: Features */}
        <div className="flex flex-col md:space-y-6 space-y-4">
          {/* Feature 1 */}
          <div className="flex items-center gap-4 z-40 relative md:right-[150px]">
            <div className="bg-white rounded-full w-12 h-12 md:w-20 md:h-20 flex justify-center items-center">
              <Gem className="text-yellow-400 md:w-8 md:h-8" />
            </div>
            <hr className="w-24 hidden md:block" />
            <span className="text-white text-sm md:text-lg font-medium">
              Premium Quality Equipment
            </span>
          </div>

          {/* Feature 2 */}
          <div className="flex items-center md:gap-4 gap-2 z-40 relative md:right-[100px]">
            <div className="bg-white rounded-full  w-12 h-12 md:w-20 md:h-20 flex justify-center items-center">
              <Clock className="text-yellow-400 md:w-8 md:h-8" />
            </div>
            <hr className="w-24 hidden md:block" />
            <span className="text-white text-sm md:text-lg font-medium">
              Quick & Easy Installation
            </span>
          </div>

          {/* Feature 3 */}
          <div className="flex items-center gap-4 z-40 relative md:right-[100px]">
            <div className="bg-white rounded-full w-12 h-12 md:w-20 md:h-20   flex justify-center items-center">
              <Smartphone className="text-yellow-400 md:w-8 md:h-8" />
            </div>
            <hr className="w-24 hidden md:block" />
            <span className="text-white text-sm md:text-lg font-medium">
              Remote Monitoring Access
            </span>
          </div>

          {/* Feature 4 */}
          <div className="flex items-center gap-4 z-40 relative md:right-[150px]">
            <div className="bg-white rounded-full w-12 h-12 md:w-20 md:h-20  flex justify-center items-center">
              <Users className="text-yellow-400 md:w-8 md:h-8" />
            </div>
            <hr className="w-24 hidden md:block" />
            <span className="text-white text-sm md:text-lg font-medium">
              Customer-Centric Support
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;
