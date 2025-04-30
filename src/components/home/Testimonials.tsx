import { FaQuoteLeft } from "react-icons/fa";
import { TestimonialsCarousel } from "./TestimonialsCarousel";
import { Quote } from "lucide-react";

export default function Testimonials() {
  return (
    <div className="lg:w-3/4 lg:h-3/4 h-1/2 bg-gradient-to-b w-full from-[#100756] to-[#210eaf] lg:ml-20 md:flex md:justify-start ">
      <div className="flex items-center justify-center bg-[#fff815] lg:h-24 lg:w-24 w-20 h-20 rounded-full z-20 relative lg:-top-12 -top-10 left-6 lg:left-16">
        <FaQuoteLeft className="text-black lg:text-3xl" />
      </div>
      <div className="h-full backdrop-blur-sm md:backdrop-blur-none md:w-1/2 flex flex-col md:justify-center space-y-4">
        <div className="lg:space-y-3 space-y-4">
          <h1 className="md:hidden lg:text-3xl text-xl text-center ">
            What our clients are saying{" "}
          </h1>
          <h1 className="hidden md:block lg:text-3xl ">
            What our clients <br />
            are saying{" "}
          </h1>
          <p className="lg:text-xl hidden md:block">
            From gated societies to local businesses,
            <br /> our clients across Gurgaon trust us for fast, reliable,{" "}
            <br />
            and secure CCTV installations.
          </p>
          <p className="md:hidden lg:text-xl text-center w-full">
            From gated societies to local businesses,
            <br /> our clients across{" "}
            <strong className="text-yellow-500">GURGAON</strong> trust
            <br /> us for fast, reliable, and secure
            <br /> CCTV installations.
          </p>
        </div>
        <div className="md:hidden z-20 flex relative lg:justify-center lg:items-center lg:w-1/8 md:-right-[200px]">
          <TestimonialsCarousel />
        </div>
      </div>
      <div className="hidden md:flex z-20 relative lg:justify-center lg:items-center lg:w-1/8 w-32 md:-right-[200px]">
        <TestimonialsCarousel />
      </div>
    </div>
  );
}
