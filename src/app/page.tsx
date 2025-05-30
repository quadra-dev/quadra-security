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

export default function Home() {
  const router = useRouter();
  const handleConsultationClick = () => {
    router.push("/contact-us");
  };

  const words1 = `Trusted CCTV Camera Installation & Repair Services in Gurgaon`;

  return (
    <div className="font-[family-name:var(--font-urbanist)]">
      {/* Section 1 - Hero */}
      <section className="min-h-screen md:h-screen bg-gradient-to-b from-[#0D053F] to-[#2917C9] md:flex justify-evenly items-center pt-20 md:pt-0">
        <div className="flex flex-col justify-center md:justify-start md:space-y-10 space-y-4 py-10 md:py-0">
          <div className="md:space-y-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.1 }}
            >
              <h1 className="md:hidden text-white text-center text-xl font-semibold px-4">
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
              transition={{ duration: 0.8, delay: 1 }}
            >
              <h2 className="md:hidden text-white text-lg text-center px-4">
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
        <div className="w-full md:w-auto flex justify-center pb-10 md:pb-0">
          <SiteVisitForm />
        </div>
      </section>

      {/* Section 2 - Solutions */}
      <section className="min-h-screen w-full bg-gradient-to-b from-[#2917C9] via-[#4830ce] to-[#151b7e] flex flex-col  items-center md:py-0">
        <motion.div className="space-y-4 md:w-1/2 w-full px-4 md:px-0">
          <h2 className="text-white md:text-4xl text-2xl text-center md:text-start">
            What we Offer
          </h2>
          <h1 className="text-yellow-500 md:text-5xl text-3xl font-semibold text-center md:text-start">
            Advanced Security Solutions
          </h1>
        </motion.div>
        <div className="flex justify-center w-full px-4 md:px-0">
          <SolutionsCarousel />
        </div>
      </section>

      {/* Section 3 - Services */}
      <section className="min-h-screen w-full bg-gradient-to-b from-[#151b7e] via-[#25419a] to-[#151b7e] flex flex-col justify-center items-center py-10 md:py-0">
        <motion.div className="space-y-4 md:w-1/2 w-full px-4 md:px-0">
          <h2 className="text-white md:text-4xl text-2xl text-center md:text-start">
            Check our
          </h2>
          <h1 className="text-yellow-500 md:text-5xl text-3xl font-semibold text-center md:text-start">
            Excellent Services
          </h1>
        </motion.div>
        <div className="flex justify-center w-full px-4 md:px-0">
          <ServiceCarousel />
        </div>
      </section>

      {/* Brands Section */}
      <section className="w-full bg-gradient-to-b from-[#151b7e] via-[#3f2eac] to-[#2917C9] flex flex-col justify-evenly items-center py-10 md:py-0">
        <BrandsCarousel />
      </section>

      {/* Why Choose Us */}
      <section className="bg-gradient-to-b from-[#2917C9] via-[#240D63] to-[#1e0c84] w-full text-white flex justify-center items-center md:py-20">
        <WhyChooseUs />
      </section>

      {/* Testimonials */}
      <section
        className="text-white w-full py-20 px-4 flex justify-center md:justify-start md:items-center bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/home/bg_img.png')" }}
      >
        <Testimonials />
      </section>

      <Chatbot />
    </div>
  );
}
