"use client";

import Sidebar from "@/components/solutions/Sidebar";
import React from "react";
import { motion } from "framer-motion";
import HeroBanner from "@/components/ui/hero-banner";
import DownSidebar from "@/components/solutions/DownSidebar";
import { useRouter } from "next/navigation";

const SolutionsPage = () => {
  
    const router = useRouter();
  const sidebarItems = [
    { label: "Home Security", path: "/solutions/home-security" },
    { label: "Industrial Security", path: "/solutions/industrial-security" },
    { label: "Real Estate Security", path: "/solutions/real-estate-security" },
    { label: "Retail Security", path: "/solutions/retail-security" },
    {
      label: "Hospitality / Health Care Security",
      path: "/solutions/hospitality-security",
    },
  ];

  return (
    <main className="bg-white font-[family-name:var(--font-urbanist)] font-urbanist text-gray-900 min-h-screen">
      {/* Header Banner Section */}
      <HeroBanner title="Real Estate Security" />

       <div className="flex flex-col md:justify-center p-6 md:flex-row gap-8">
        {/* Sidebar */}
         <motion.div
          className="w-full flex md:w-3/4 lg:w-full"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <Sidebar items={sidebarItems} />

          <motion.div
            className="bg-white rounded mx-auto"
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <motion.img
              src="/solutions/home-security/img1.png"
              alt="Hospitality Security Solutions"
              className="w-full md:w-[400px] mx-auto mb-6 rounded"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6 }}
            />

          <section className="mb-8">
            <h1 className="text-xl md:text-4xl font-extrabold mb-4 leading-tight">
              Surveillance Solutions for Apartment & Real Estate
            </h1>
            <p className="text-base md:text-lg leading-relaxed mb-4">
              Security is non-negotiable for real estate properties and
              contemporary apartments. Our smart surveillance systems combine
              AI-powered intrusion detection, license plate recognition for
              apartment parking, and 24/7 apartment monitoring to ensure total
              peace of mind.
            </p>
            <p className="text-base md:text-lg leading-relaxed">
              From video intercoms with CCTV at entrances to cloud-based remote
              monitoring, we guarantee comprehensive coverage and reliable,
              cost-effective CCTV installation options tailored to your needs.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl md:text-3xl font-semibold mb-5">
              Where to Install CCTV Cameras
            </h2>

            <ol className="list-decimal list-inside space-y-3 text-base md:text-lg leading-relaxed">
              <li>
                <strong>Apartment Entrances & Lobbies</strong> – Video intercoms
                with CCTV ensure authorized access only.
              </li>
              <li>
                <strong>Parking Areas & Gates</strong> – Automatic Number Plate
                Recognition (ANPR) cameras keep a watchful eye on vehicles.
              </li>
              <li>
                <strong>Elevators & Lift Lobbies</strong> – Fisheye CCTV cameras
                and WDR cameras monitor confined spaces effectively.
              </li>
              <li>
                <strong>Perimeters & Common Areas</strong> – AI-powered security
                systems provide motion detection and intrusion alerts.
              </li>
              <li>
                <strong>Clubhouse & Amenities Zones</strong> – Wireless and
                cloud-based CCTV systems enable monitoring of shared spaces.
              </li>
            </ol>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl md:text-3xl font-semibold mb-5">
              Detailed Solutions for Key Areas
            </h2>

            <article className="mb-6">
              <h3 className="text-xl font-semibold mb-2">
                Apartment Entrances & Lobbies
              </h3>
              <p className="mb-2 text-sm md:text-base text-gray-700 italic">
                Challenges: Unauthorized visitor access, poor visitor
                communication, low-light identification issues.
              </p>
              <ul className="list-disc pl-6 space-y-1 mb-4 text-base">
                <li>Two-way video intercom for secure visitor communication.</li>
                <li>Facial recognition entry systems for automated safe access.</li>
                <li>WDR cameras for crystal-clear images regardless of lighting.</li>
              </ul>
            </article>

            <article className="mb-6">
              <h3 className="text-xl font-semibold mb-2">
                Parking Areas & Gates
              </h3>
              <p className="mb-2 text-sm md:text-base text-gray-700 italic">
                Challenges: Unauthorized vehicle entry, manual parking space
                tracking, delayed VIP detection.
              </p>
              <ul className="list-disc pl-6 space-y-1 mb-4 text-base">
                <li>ANPR and license plate recognition to control vehicle entry.</li>
                <li>Hands-free, seamless resident gate access.</li>
                <li>Real-time alerts for unauthorized or suspicious vehicles.</li>
              </ul>
            </article>

            <article className="mb-6">
              <h3 className="text-xl font-semibold mb-2">
                Elevators & Lift Lobbies
              </h3>
              <p className="mb-2 text-sm md:text-base text-gray-700 italic">
                Challenges: Overcrowding, vandalism, limited visibility.
              </p>
              <ul className="list-disc pl-6 space-y-1 mb-4 text-base">
                <li>360° fisheye CCTV coverage for elevators.</li>
                <li>Night vision and vandal-proof dome cameras for enhanced safety.</li>
                <li>Reliable footage even in low-light or confined spaces.</li>
              </ul>
            </article>

            <article className="mb-6">
              <h3 className="text-xl font-semibold mb-2">
                Perimeters & Common Areas
              </h3>
              <p className="mb-2 text-sm md:text-base text-gray-700 italic">
                Challenges: Intrusion risks, no real-time alerts, limited area coverage.
              </p>
              <ul className="list-disc pl-6 space-y-1 mb-4 text-base">
                <li>AI-powered intelligent monitoring with motion detection.</li>
                <li>24/7 apartment monitoring for uninterrupted protection.</li>
                <li>Instant alerts for unusual activities in open areas.</li>
              </ul>
            </article>

            <article>
              <h3 className="text-xl font-semibold mb-2">
                Clubhouse & Amenities Zones
              </h3>
              <p className="mb-2 text-sm md:text-base text-gray-700 italic">
                Challenges: Abuse of shared resources, unsupervised visitors, lack of remote access.
              </p>
              <ul className="list-disc pl-6 space-y-1 text-base">
                <li>Wireless CCTV for flexible installation in common areas.</li>
                <li>Cloud-based systems enable remote monitoring from anywhere.</li>
                <li>Complete control over activity logs and footage access.</li>
              </ul>
            </article>
          </section>

          <section>
            <h2 className="text-2xl md:text-3xl font-semibold mb-5">
              Why Choose Quadro Security for Real Estate?
            </h2>
            <p className="text-base md:text-lg leading-relaxed mb-4">
              We deliver the best CCTV systems tailored for residential
              apartments and large housing societies. With trusted brands like
              CP PLUS and Hikvision, our smart, scalable solutions provide
              future-proof security to protect your property and loved ones.
            </p>
            <p className="text-base md:text-lg leading-relaxed">
              Affordable installation, professional support, and cutting-edge
              technology make us the preferred choice for real estate security.
              Trust Quadro Security for peace of mind in every corner of your
              community.
            </p>
          </section>
          </motion.div>
        </motion.div>
      </div>

      <div className="w-full my-6 flex justify-center">
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={()=>{router.push("/contact-us")}}
          className="bg-blue-700 hover:bg-blue-800 text-white font-semibold py-3 px-8 rounded-full shadow-lg transition-colors"
          aria-label="Get Free Consultation"
        >
          GET FREE CONSULTATION
        </motion.button>
      </div>
      <div className="lg:hidden w-full flex justify-center md:p-6">
        <DownSidebar items={sidebarItems} />
      </div>
    </main>
  );
};

export default SolutionsPage;
