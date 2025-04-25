import Image from "next/image";
import { Button } from "@/components/ui/button";
import FancyButton from "./FancyButton";

export default function WhyChooseUs() {
  return (
 
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-8">
        {/* Left Content */}
        <div className="flex-1 space-y-6">
          {/* Heading */}
          <div className="flex items-center space-x-4">
            <div className="w-0 h-0 border-t-[15px] border-t-transparent border-b-[15px] border-b-transparent border-l-[20px] border-l-purple-500" />
            <h2 className="text-3xl font-bold">Why Choose Us</h2>
          </div>

          {/* Box with text */}
          <div className="bg-[#1C0B56] p-6 rounded-lg max-w-xs h-[300px] text-center">
            <p className="text-lg leading-relaxed">
              Professionals <br />
              protecting what <br />
              matters.
            </p>
          </div>

          {/* Book Now button */}
          <FancyButton className="px-14 py-3 ">
            Book Now
            </FancyButton>
        </div>

        {/* Bullet Points + Image */}
        <div className="flex-1 flex flex-col md:flex-row items-center gap-6">
          {/* Checklist */}
          <ul className="text-left text-white text-lg space-y-3">
            {[
              "Expertise You Can Trust",
              "Top-Notch Technology",
              "Fast & Hassle-Free Installation",
              "Certified & Vetted Technicians",
              "Flexible Plans, No Hidden Fees",
            ].map((point, i) => (
              <li key={i} className="flex items-start gap-2">
                <span className="text-yellow-400 text-xl mt-1">✔</span>
                <span>{point}</span>
              </li>
            ))}
          </ul>

          {/* Image */}
          <div className="w-full md:w-[300px] rounded-lg overflow-hidden">
            <Image
              src="/why-choose-us-camera.png" // Replace with your actual image path
              alt="Security Camera Installation"
              width={400}
              height={300}
              className="w-full h-auto object-cover rounded-lg"
            />
          </div>
        </div>
      </div>
  
  );
}
