import { FaQuoteLeft } from "react-icons/fa";
import TestimonialsCarousel from "./TestimonialsCarousel";

const testimonials = [
  {
    name: "XXXXX SINGH",
    message:
      "The team was at my DLF Phase 2 home within hours. Setup was quick, and now I can monitor my house from anywhere!",
    image: "/client.jpg", // Replace with actual image path
  },
  {
    name: "XXXXX SINGH",
    message:
      "The team was at my DLF Phase 2 home within hours. Setup was quick, and now I can monitor my house from anywhere!",
    image: "/client.jpg",
  },
  {
    name: "XXXXX SINGH",
    message:
      "The team was at my DLF Phase 2 home within hours. Setup was quick, and now I can monitor my house from anywhere!",
    image: "/client.jpg",
  },
];

export default function Testimonials() {
  return (
    <>
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-8 items-center bg-blue-500 h-[500px] rounded-xl shadow-md">
        {/* Left Section */}
        <div className="relative">
          <div className="w-20 h-20 bg-yellow-400 rounded-full flex items-center justify-center text-3xl text-black font-bold absolute -top-10 -left-10">
            <FaQuoteLeft />
          </div>
          <div className="pl-14 mt-10">
            <h2 className="text-2xl font-semibold mb-4">
              What Our Clients Are Saying
            </h2>
            <p className="text-sm text-gray-200 max-w-sm">
              From gated societies to local businesses, our clients across
              Gurgaon trust us for fast, reliable, and secure CCTV
              installations.
            </p>
          </div>
        </div>
        <TestimonialsCarousel />
      </div>
   
    </>
  );
}
