"use client";
import { motion } from "framer-motion";
import SiteVisitForm from "@/components/home/Form";
import FancyButton from "@/components/home/FancyButton";
import ServiceCarousel from "@/components/home/ServiceCarousel";
import SolutionsCarousel from "@/components/home/SolutionsCrousel";
import BrandsCarousel from "@/components/home/BrandsCarousel";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import Testimonials from "@/components/home/Testimonials";
import { useRouter } from "next/navigation";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
import Chatbot from "@/components/Chatbot";
// import { useRef } from "react";

export default function Home() {
  const router = useRouter();
  const handleConsultationClick = () => {
    // Handle the button click event here
    router.push("/contact-us");
  };
  //  const ref = useRef(null);
  // const isInView = useInView(ref, { once: true });
  const words1 = `Trusted CCTV Camera Installation & Repair Services in Gurgaon`;
  return (
    <div className="font-[family-name:var(--font-urbanist)]">
      {/* Section 1 */}
      <section className="h-screen bg-gradient-to-b from-[#0D053F] to-[#2917C9] md:flex justify-evenly items-center">
        <div className="flex md:h-auto flex-col justify-center md:justify-start md:space-y-10 space-y-4 py-20  md:py-0">
          <div className="md:space-y-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.1 }}
            >
              <h1 className="md:hidden text-white text-center text-xl font-semibold">
                <TextGenerateEffect words={words1} className="p-2" />
              </h1>
              <h1 className="hidden md:block text-white lg:text-5xl font-semibold">
                Trusted CCTV Camera <br /> Installation & Repair
                <br />
                Services In
                <span className="ml-4 font-bold text-yellow-500">Gurgaon</span>
              </h1>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1 }} // delay AFTER heading
            >
              <h2 className="md:hidden text-white text-lg text-center">
                Get Free Site Visit in Gurgaon and <br /> Delhi NCR
              </h2>
              <h2 className="hidden md:block text-white text-3xl">
                Secure Your Home & Business <br /> with Expert CCTV Solutions
              </h2>
            </motion.div>
          </div>

          <motion.div
            className="flex w-full justify-center items-center md:w-auto md:block md:justify-start md:items-start"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 2 }}
          >
            <FancyButton
              className="py-2 md:py-4 px-8 md:px-10"
              onClick={handleConsultationClick}
            >
              Book your free consultation
            </FancyButton>
          </motion.div>
        </div>
        <div className="w-full md:w-auto flex justify-center ">
          <SiteVisitForm />
        </div>
      </section>
      {/* Section 1 */}
      {/* section 2 */}
      <section className="h-screen w-screen bg-gradient-to-b from-[#2917C9] via-[#300571] to-[#151b7e] flex flex-col justify-center items-center ">
        <motion.div className="space-y-4 md:w-1/2 w-full mt-56 md:mt-0">
          <h2 className="text-white md:text-4xl text-2xl text-center md:text-start">
            What we Offer
          </h2>
          <h1 className="text-yellow-500 md:text-5xl text-3xl font-semibold text-center md:text-start">
            Advanced Security Solutions
          </h1>
        </motion.div>
        <div className="flex justify-center w-full">
          <SolutionsCarousel />
        </div>
      </section>
      <section className="h-screen w-screen bg-gradient-to-b from-[#151b7e] via-[#300571] to-[#151b7e] flex flex-col justify-center items-center ">
        <motion.div className="space-y-4 md:w-1/2 w-full mt-56 md:mt-0">
          <h2 className="text-white md:text-4xl text-2xl text-center md:text-start">
            Check our
          </h2>
          <h1 className="text-yellow-500 md:text-5xl text-3xl font-semibold text-center md:text-start">
            Excellent Services
          </h1>
        </motion.div>
        <div className="flex justify-center w-full">
          <ServiceCarousel />
        </div>
      </section>
      <section className=" w-screen bg-gradient-to-b from-[#151b7e] via-[#0D053F] to-[#2917C9] flex flex-col justify-evenly items-center ">
        <BrandsCarousel />
      </section>
      <section className="bg-gradient-to-b from-[#2917C9] via-[#240D63] to-[#0B0146] w-screen text-white flex justify-center items-center h-[250vh] md:h-[150vh]">
        <WhyChooseUs />
      </section>
      <section
        className=" text-white h-screen w-screen md:py-10 py-14 px-4 flex justify-center
         md:justify-start md:items-center bg-cover bg-center bg-no-repeat "
        style={{ backgroundImage: "url('/home/bg_img.png')" }} // replace with your actual image path
      >
        <Testimonials />
      </section>
      <Chatbot />
    </div>
  );
}
