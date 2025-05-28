"use client";

import Sidebar from "@/components/solutions/Sidebar";
import React from "react";
import { motion } from "framer-motion";
import HeroBanner from "@/components/ui/hero-banner";

const SolutionsPage = () => {
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
      {/* Header with background image */}
      <HeroBanner title="Retail Security" />

      <div className="flex flex-col md:flex-row gap-8">
        {/* Sidebar */}
        <motion.div
          className="w-full flex md:w-3/4 lg:w-full"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <Sidebar items={sidebarItems} />

          {/* Main content */}
          <motion.div
            className="bg-white rounded p-6"
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
              <h3 className="font-bold text-lg mb-3">
                CCTV Solutions for Retail
              </h3>
              <p className="mb-4">
                <strong>Protect People. Prevent Loss. Power Growth.</strong>
              </p>
              <p className="mb-4">
                CCTV solutions for retail help you protect assets, prevent
                fraud, stop shoplifting, and improve customer safety. Quadra
                Security offers smart, adaptable systems for 24/7 monitoring,
                analytics, and retail optimization.
              </p>

              <h4 className="font-semibold mt-4 mb-2">
                Where Do You Need CCTV in Retail?
              </h4>
              <ul className="list-disc pl-6 mb-4">
                <li>
                  <strong>Store Entrances & Exits:</strong> Prevent theft,
                  manage flagged individuals, and reduce fraudulent claims.
                </li>
                <li>
                  <strong>Checkout & Cash Counters:</strong> Capture every
                  transaction and resolve disputes with audio/video recording.
                </li>
                <li>
                  <strong>Aisles & Store Interiors:</strong> Monitor blind spots
                  and staff activity, prevent inventory loss.
                </li>
                <li>
                  <strong>Perimeter & Loading Zones:</strong> Stop break-ins,
                  theft, and vandalism even in low-light.
                </li>
                <li>
                  <strong>Shopping Mall Common Areas:</strong> Manage crowds and
                  improve safety across wide areas.
                </li>
                <li>
                  <strong>Stockrooms & Back Offices:</strong> Secure access,
                  inventory, and respond to emergencies instantly.
                </li>
              </ul>

              <h4 className="font-semibold mt-4 mb-2">
                Advanced Intelligence with Video Analytics
              </h4>
              <ul className="list-disc pl-6 mb-4">
                <li>
                  Retail heatmaps & footfall counting for insights and planning
                </li>
                <li>
                  Real-time alerts & visual analytics for smarter decisions
                </li>
                <li>Seamless integration with POS and business tools</li>
              </ul>

              <h4 className="font-semibold mb-2">
                Why Choose Quadra Security?
              </h4>
              <ul className="list-disc pl-6 space-y-2 text-sm">
                <li>End-to-end smart retail security solutions</li>
                <li>Expert deployment & support across locations</li>
                <li>Cloud-based surveillance with mobile access</li>
                <li>Compatible with retail management tools and POS systems</li>
                <li>Trusted by top stores for scalable solutions</li>
              </ul>
            </div>
          </motion.div>
        </motion.div>
      </div>
      <div className="w-full m-6 justify-center flex">
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-blue-700 hover:bg-blue-800  text-white font-medium py-2 px-6 rounded-full"
        >
          GET FREE CONSULTATION
        </motion.button>
      </div>
    </div>
  );
};

export default SolutionsPage;
