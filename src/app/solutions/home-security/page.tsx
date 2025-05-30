"use client";

import Sidebar from "@/components/solutions/Sidebar";
import DownSidebar from "@/components/solutions/DownSidebar";
import React from "react";
import { motion } from "framer-motion";
import HeroBanner from "@/components/ui/hero-banner";
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
    <div className="bg-white font-[family-name:var(--font-urbanist)] text-gray-800 min-h-screen">
      <HeroBanner title="Home Security" />

      <div className="flex flex-col md:justify-center md:flex-row gap-8">
        <motion.div
          className="w-full flex md:w-3/5 lg:w-full"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <Sidebar items={sidebarItems} />

          <motion.div
            className="bg-white rounded p-6 text-base md:text-lg lg:text-xl leading-relaxed"
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <motion.img
              src="/solutions/home-security/img1.png"
              alt="Home Security"
              className="w-full md:w-[400px] mx-auto mb-6"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6 }}
            />

            <div>
              <h3 className="font-bold text-xl lg:text-2xl mb-3">
                Comprehensive Surveillance Solutions for Modern Apartments &
                Real Estate
              </h3>

              <p className="mb-4">
                In today’s dynamic living environments,{" "}
                <strong>security is paramount</strong>. Our smart surveillance
                systems are tailored specifically for apartment complexes and
                real estate properties. They combine advanced{" "}
                <strong>AI-driven technologies</strong> with high-definition
                video monitoring to ensure every corner of your residential or
                commercial space is under watch.
              </p>

              <p className="mb-4">
                Whether you&apos;re securing a high-rise apartment building, a gated
                villa community, or a residential society, our systems deliver
                real-time protection and intelligent alerts—minimizing response
                times and enhancing resident confidence.
              </p>

              <h4 className="font-semibold text-lg lg:text-xl mb-2">
                Key Areas of Coverage
              </h4>
              <ul className="list-disc pl-6 space-y-3">
                <li>
                  <strong>Apartment Entrances & Lobbies</strong>
                  <br />– <strong>Video intercom with CCTV</strong> guarantees
                  just authorised access.
                </li>
                <li>
                  <strong>Parking Areas & Gates</strong>
                  <br />– Use <strong>ANPR camera</strong> for apartment parking
                  to keep an eye on cars.
                </li>
                <li>
                  <strong>Elevators & Lift Lobbies</strong>
                  <br />– Install fisheye CCTV and <strong>
                    WDR cameras
                  </strong>{" "}
                  for lobby recognition.
                </li>
                <li>
                  <strong>Perimeters & Common Areas</strong>
                  <br />– AI-powered apartment security with motion detection
                  alerts.
                </li>
                <li>
                  <strong>Clubhouse & Amenities Zones</strong>
                  <br />– Monitor shared spaces with{" "}
                  <strong>cloud-based CCTV</strong>.
                </li>
              </ul>

              <h4 className="font-semibold text-lg lg:text-xl mt-6 mb-2">
                Challenges & Our Solutions
              </h4>

              {/* Section Template */}
              {[
                {
                  title: "Apartment Entrances & Lobbies",
                  issues: [
                    "Unauthorized visitor access",
                    "No real-time visitor communication",
                    "Low light, poor face identification",
                  ],
                  solution:
                    "Two-way video intercom, facial recognition, and WDR cameras for clear visibility in all conditions.",
                },
                {
                  title: "Parking Areas & Gates",
                  issues: [
                    "Unauthorized vehicle entry",
                    "Manual tracking of parking spaces",
                    "Delay in spotting VIP or prohibited cars",
                  ],
                  solution:
                    "ANPR cameras for license plate scanning and automatic access control.",
                },
                {
                  title: "Elevators & Lift Lobbies",
                  issues: [
                    "Overcrowding and vandalism",
                    "Lack of proof during incidents",
                    "Limited visibility",
                  ],
                  solution:
                    "Fisheye and night-vision CCTV for 360° coverage and durable IK10 dome cameras.",
                },
                {
                  title: "Perimeters & Common Areas",
                  issues: [
                    "Intrusion from open boundaries",
                    "No real-time threat notifications",
                    "Limited outdoor coverage",
                  ],
                  solution:
                    "AI-powered motion detection and 24/7 monitoring systems.",
                },
                {
                  title: "Clubhouse & Amenities Zones",
                  issues: [
                    "Abuse of common resources",
                    "Unsupervised visitors",
                    "No remote access to activity logs",
                  ],
                  solution:
                    "Wireless CCTV with cloud storage and remote access from anywhere.",
                },
              ].map(({ title, issues, solution }) => (
                <div key={title} className="mt-6">
                  <h5 className="font-semibold text-lg">{title}</h5>
                  <ul className="list-disc pl-6 space-y-1 mt-2">
                    {issues.map((issue, i) => (
                      <li key={i}>{issue}</li>
                    ))}
                  </ul>
                  <p className="mt-2">
                    <strong>Solutions:</strong> {solution}
                  </p>
                </div>
              ))}

              <h4 className="font-semibold text-lg lg:text-xl mt-6 mb-2">
                Why Choose Us?
              </h4>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  <strong>Best CCTV system</strong> for residential apartments
                </li>
                <li>
                  <strong>Affordable CCTV installation</strong> for large
                  societies
                </li>
                <li>
                  <strong>CP PLUS & Hikvision CCTV</strong> for real estate &
                  apartments
                </li>
                <li>
                  Smart, scalable & <strong>future-proof security</strong>{" "}
                  solutions
                </li>
              </ul>
            </div>
          </motion.div>
        </motion.div>
      </div>

      <div className="w-full p-6 justify-center flex">
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={()=>{router.push("/contact-us")}}
          className="bg-blue-700 hover:bg-blue-800 text-white font-medium py-2 px-6 rounded-full text-base md:text-lg"
        >
          GET FREE CONSULTATION
        </motion.button>
      </div>

      <div className="lg:hidden w-full flex justify-center md:p-6">
        <DownSidebar items={sidebarItems} />
      </div>
    </div>
  );
};

export default SolutionsPage;
