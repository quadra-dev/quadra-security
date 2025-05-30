"use client";

import Sidebar from "@/components/solutions/Sidebar";
import React from "react";
import DownSidebar from "@/components/solutions/DownSidebar";
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
      <HeroBanner title="Hospitality / Health Care Security" />

      <div className="flex  flex-col md:flex-row gap-8 px-4 md:px-8  py-6">
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

            {/* Hospitality Content */}
            <div>
              <h2 className="text-xl md:text-2xl font-bold mb-4">
                Security Solutions for Hotels
              </h2>
              <p className="text-base md:text-lg mb-4">
                In the hospitality sector, guaranteeing safety while offering
                great guest experiences is not negotiable. Hotels and resorts
                face issues like unauthorized access, theft, and personnel
                management. Quadra Security delivers integrated hotel security
                systems tailored to secure every aspect of your property.
              </p>
              <p className="text-base md:text-lg mb-4">
                From advanced CCTV and alarm systems to cloud-based monitoring
                and digital key systems, we ensure your property runs safely and
                smoothly with real-time control.
              </p>

              <h3 className="text-lg md:text-xl font-semibold mt-6 mb-2">
                Key Security Zones & Solutions
              </h3>

              <ul className="list-disc pl-5 space-y-3 text-sm md:text-base">
                <li>
                  <strong>Parking Lots:</strong> Smart parking guidance,
                  ANPR-based license plate detection, and vehicle monitoring.
                </li>
                <li>
                  <strong>Lobbies & Receptions:</strong> Real-time surveillance,
                  access control for staff-only zones, and anti-theft alerts.
                </li>
                <li>
                  <strong>Public Areas:</strong> Hidden cameras with AI behavior
                  detection and integrated control platforms.
                </li>
                <li>
                  <strong>Meeting & Conference Rooms:</strong> Biometric access,
                  intrusion detection, and secure video monitoring.
                </li>
                <li>
                  <strong>Guest Corridors:</strong> RFID/mobile key access with
                  24/7 monitoring.
                </li>
                <li>
                  <strong>Storage Areas:</strong> Access logs, motion sensors,
                  and alarm integration.
                </li>
                <li>
                  <strong>Hotel Perimeter:</strong> Night vision-enabled
                  surveillance and intrusion alert systems.
                </li>
                <li>
                  <strong>Control Rooms:</strong> Centralized command centers
                  integrating video, access, analytics, and alerts.
                </li>
              </ul>

              <h3 className="text-lg md:text-xl font-semibold mt-6 mb-2">
                Why Choose Quadra Security?
              </h3>
              <ul className="list-disc pl-5 space-y-2 text-sm md:text-base">
                <li>
                  End-to-End Custom Solutions: From cybersecurity to IoT and AI
                  integrations.
                </li>
                <li>
                  Certified Experts: Technicians with experience in hospitality
                  security.
                </li>
                <li>
                  Regulatory Compliance: GDPR and hospitality compliance ready.
                </li>
                <li>24/7 Monitoring: With instant incident response.</li>
                <li>
                  Future-Ready Tech: Cloud-based control, smart locks, and
                  mobile integration.
                </li>
              </ul>

              {/* Healthcare Content */}
              <h2 className="text-xl md:text-2xl font-bold mt-10 mb-4">
                Security Solutions for Healthcare Facilities
              </h2>
              <p className="text-base md:text-lg mb-4">
                Healthcare institutions like hospitals and clinics demand
                top-tier security to protect patients, staff, sensitive medical
                records, and high-value assets. Quadra Security offers
                specialized healthcare security solutions that ensure patient
                safety while meeting the industry&apos;s rigorous regulatory and
                privacy standards.
              </p>

              <p className="text-base md:text-lg mb-4">
                Our systems are designed to provide non-intrusive yet powerful
                surveillance and access control in critical areas, ensuring a
                secure environment 24/7.
              </p>

              <h3 className="text-lg md:text-xl font-semibold mt-6 mb-2">
                Critical Healthcare Security Zones:
              </h3>
              <ul className="list-disc pl-5 space-y-3 text-sm md:text-base">
                <li>
                  <strong>Emergency & ICU Areas:</strong> Real-time video
                  surveillance, access control for authorized staff only.
                </li>
                <li>
                  <strong>Pharmacy & Inventory Rooms:</strong> Secure
                  authentication systems, alarm triggers for unauthorized
                  access.
                </li>
                <li>
                  <strong>Patient Rooms & Corridors:</strong> Monitoring for
                  visitor movement, behavioral analytics for fall detection or
                  aggression.
                </li>
                <li>
                  <strong>Hospital Perimeter:</strong> Motion-activated cameras
                  and intrusion alerts for round-the-clock protection.
                </li>
                <li>
                  <strong>Data & Record Rooms:</strong> Controlled access to
                  sensitive EHRs and backup servers.
                </li>
              </ul>

              <h3 className="text-lg md:text-xl font-semibold mt-6 mb-2">
                Benefits of Our Healthcare Security Systems:
              </h3>
              <ul className="list-disc pl-5 space-y-2 text-sm md:text-base">
                <li>
                  Enhanced Patient Safety: Real-time alerts to prevent incidents
                  and ensure rapid response.
                </li>
                <li>
                  HIPAA-Compliant Security: Protection of patient privacy and
                  sensitive medical records.
                </li>
                <li>
                  Integrated Emergency Protocols: Faster communication and
                  coordination during crises.
                </li>
                <li>
                  Staff Protection: Monitor staff-only areas and deter
                  aggression.
                </li>
                <li>
                  Future-Ready Tech: IoT-based wearable alert systems, mobile
                  monitoring, and cloud integration.
                </li>
              </ul>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* CTA Button */}
      <div className="w-full my-10 justify-center flex">
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={()=>{router.push("/contact-us")}}
          className="bg-blue-700 hover:bg-blue-800 text-white text-sm md:text-base font-medium py-2 px-6 rounded-full"
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
