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
    <div className="bg-white font-[family-name:var(--font-urbanist)] text-gray-800 min-h-screen">
      {/* Hero Section */}
      <HeroBanner title="Retail Security Solutions" />

    <div className="flex flex-col md:justify-center md:flex-row gap-8">
        {/* Sidebar */}
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


          <div className="space-y-6 text-base md:text-lg">
            <div>
              <h3 className="text-xl font-bold mb-2">
                CCTV Solutions for Retail
              </h3>
              <p>
                <strong>Protect People. Prevent Loss. Power Growth.</strong>
              </p>
              <p>
                In today&apos;s fast-paced and theft-prone retail environment,
                closing doors isn&apos;t enough. Whether it’s a small retail outlet
                or a multi-level mall, safeguarding your people, assets, and
                operations is essential. With increasing threats like internal
                theft, shoplifting, and false claims, smart CCTV systems have
                become a cornerstone of efficient retail management.
              </p>
              <p>
                <strong>Quadra Security</strong> offers intelligent, adaptable
                CCTV systems that go beyond recording — offering real-time
                analytics, alerts, and integration with your business tools.
              </p>
            </div>

            <div>
              <h4 className="font-semibold text-lg mb-2">
                Key Areas for CCTV Deployment in Retail
              </h4>

              <ul className="list-disc pl-6 space-y-4">
                <li>
                  <strong>Store Entrances & Exits:</strong> Face detection
                  cameras, 4K resolution clarity, and motion alerts help
                  identify flagged individuals and prevent unnoticed shoplifting
                  or false injury claims.
                </li>
                <li>
                  <strong>Checkout & Cash Counters:</strong> Integrated POS
                  surveillance with audio/video ensures transparency in
                  transactions and prevents fraud.
                </li>
                <li>
                  <strong>Aisles & Interiors:</strong> Use fisheye and
                  AI-powered shoplifting prevention cameras to monitor staff
                  activity and eliminate blind spots.
                </li>
                <li>
                  <strong>Perimeter & Loading Zones:</strong> Vandal-proof
                  outdoor cameras with PTZ tracking and night vision defend
                  against break-ins and theft.
                </li>
                <li>
                  <strong>Common Mall Areas:</strong> People counting cameras
                  and centralized cloud-based systems manage large footfalls and
                  enhance public safety.
                </li>
                <li>
                  <strong>Stockrooms & Offices:</strong> Secure sensitive zones
                  with edge recording systems, integrated panic buttons, and
                  H.265 NVRs for efficient footage storage.
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-lg mb-2">
                Advanced Intelligence with Video Analytics
              </h4>
              <ul className="list-disc pl-6 space-y-2">
                <li>Retail heatmaps to understand customer behavior</li>
                <li>Footfall counting for staff and sales forecasting</li>
                <li>Data-driven inventory and workforce planning</li>
                <li>Visual merchandising analytics for layout optimization</li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-lg mb-2">
                Why Choose Quadra Security for Retail?
              </h4>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  End-to-end retail surveillance & smart security solutions
                </li>
                <li>Expert installations tailored for malls and stores</li>
                <li>Real-time access via cloud-based monitoring</li>
                <li>Seamless POS & retail management tool integration</li>
                <li>
                  Trusted partner for scalable retail deployments across India
                </li>
              </ul>
            </div>
          </div>
        </motion.div>
           </motion.div>
        
      </div>

      {/* CTA Button */}
      <div className="w-full my-8 justify-center flex">
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => {
            router.push("contact-us");
          }}
          className="bg-blue-700 hover:bg-blue-800 text-white font-medium py-3 px-8 rounded-full shadow-md"
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
