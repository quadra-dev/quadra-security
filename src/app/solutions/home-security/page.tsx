"use client";

import Sidebar from "@/components/solutions/Sidebar";
import DownSidebar from "@/components/solutions/DownSidebar";
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
      {/* Header Banner Section */}
      <HeroBanner title="Home Security" />

      <div className="flex flex-col md:justify-center  md:flex-row gap-8">
        {/* Sidebar */}
        <motion.div
          className="w-full flex md:w-3/5 lg:w-full"
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
                Surveillance Solutions for Apartment & Real Estate
              </h3>
              <p className="mb-4">
                Security is not negotiable for real estate and contemporary
                apartments. Smart surveillance systems from us include{" "}
                <strong>AI-powered intrusion detection</strong>,{" "}
                <strong>license plate recognition for apartment parking</strong>
                , and <strong>24/7 apartment monitoring systems</strong>. From{" "}
                <strong>video intercom with CCTV</strong> at entrances to{" "}
                <strong>cloud-based CCTV for real estate security</strong>, we
                guarantee total coverage, remote access, and peace of mind—with
                all <strong>cost-effective CCTV installation</strong> choices.
              </p>

              <h4 className="font-semibold mb-2">Key Areas of Coverage</h4>
              <ul className="list-disc pl-6 space-y-2 text-sm">
                <li>
                  <strong>Apartment Entrances & Lobbies</strong>
                  <br />– <strong>Video intercom with CCTV</strong> guarantees
                  just authorised access.
                </li>
                <li>
                  <strong>Parking Areas & Gates</strong>
                  <br />– Use{" "}
                  <strong>ANPR camera or license plate recognition</strong> for
                  apartment parking to keep an eye on cars.
                </li>
                <li>
                  <strong>Elevators & Lift Lobbies</strong>
                  <br />– Install fisheye CCTV for elevator monitoring and{" "}
                  <strong>WDR cameras</strong> for lobby recognition.
                </li>
                <li>
                  <strong>Perimeters & Common Areas</strong>
                  <br />– AI-powered apartment security systems cover outdoor
                  areas with motion detection alerts for flats.
                </li>
                <li>
                  <strong>Clubhouse & Amenities Zones</strong>
                  <br />– Monitor shared spaces using{" "}
                  <strong>cloud-based CCTV</strong> for real estate security and{" "}
                  <strong>wireless CCTV systems</strong> for apartments.
                </li>
              </ul>

              <h4 className="font-semibold mt-6 mb-2">
                Challenges & Our Solutions
              </h4>

              <h5 className="font-semibold mt-4">
                Apartment Entrances & Lobbies
              </h5>
              <ul className="list-disc pl-6 text-sm space-y-1">
                <li>Unauthorized visitor access</li>
                <li>No real-time visitor communication</li>
                <li>Low light, poor face identification</li>
              </ul>
              <p className="mt-2 text-sm">
                <strong>Quadra Security Solutions:</strong> Two-way
                communication with <strong>video intercom</strong>, facial
                recognition entry, and <strong>WDR cameras</strong> for face
                clarity in any lighting.
              </p>

              <h5 className="font-semibold mt-4">Parking Areas & Gates</h5>
              <ul className="list-disc pl-6 text-sm space-y-1">
                <li>Unauthorized vehicle entry</li>
                <li>Manual tracking of parking spaces</li>
                <li>Delay in spotting VIP or prohibited cars</li>
              </ul>
              <p className="mt-2 text-sm">
                <strong>Solutions:</strong>{" "}
                <strong>ANPR camera for apartment parking</strong> with
                automatic number plate scanning and seamless access control.
              </p>

              <h5 className="font-semibold mt-4">Elevators & Lift Lobbies</h5>
              <ul className="list-disc pl-6 text-sm space-y-1">
                <li>Overcrowding in elevators and vandalism</li>
                <li>Lack of proof during events</li>
                <li>Limited visibility in confined spaces</li>
              </ul>
              <p className="mt-2 text-sm">
                <strong>Solutions:</strong> <strong>Fisheye CCTV</strong> for
                full 360° monitoring, <strong>night vision CCTV</strong> for
                dark footage, and <strong>IK10 dome cameras</strong> for
                durability.
              </p>

              <h5 className="font-semibold mt-4">Perimeters & Common Areas</h5>
              <ul className="list-disc pl-6 text-sm space-y-1">
                <li>Intrusion from open boundaries</li>
                <li>No real-time threat notifications</li>
                <li>Limited coverage in open regions</li>
              </ul>
              <p className="mt-2 text-sm">
                <strong>Solutions:</strong>{" "}
                <strong>AI-powered apartment security</strong>, motion detection
                alerts, and <strong>24/7 monitoring systems</strong> for safety.
              </p>

              <h5 className="font-semibold mt-4">
                Clubhouse & Amenities Zones
              </h5>
              <ul className="list-disc pl-6 text-sm space-y-1">
                <li>Abuse of common resources</li>
                <li>Unsupervised visitors or youngsters</li>
                <li>No remote access to activity logs</li>
              </ul>
              <p className="mt-2 text-sm">
                <strong>Solutions:</strong> Flexible{" "}
                <strong>wireless CCTV for flats</strong>,{" "}
                <strong>cloud-based CCTV</strong> for real estate, and{" "}
                <strong>remote monitoring CCTV</strong> from anywhere.
              </p>

              <h4 className="font-semibold mt-6 mb-2">Why Choose Us?</h4>
              <ul className="list-disc pl-6 space-y-2 text-sm">
                <li>
                  <strong>Best CCTV system</strong> for residential apartments
                </li>
                <li>
                  <strong>Affordable CCTV installation</strong> for large
                  societies
                </li>
                <li>
                  <strong>CP PLUS & Hikvision CCTV</strong> for real estate &
                  apartment security
                </li>
                <li>
                  Smart, scalable & <strong>future-proof security</strong> for
                  housing complexes
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
          className="bg-blue-700 hover:bg-blue-800  text-white font-medium py-2 px-6 rounded-full"
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
