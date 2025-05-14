"use client";
import type { NextPage } from "next";
import Head from "next/head";
import { useEffect, useRef } from "react";
import ServiceSection from "@/components/ServiceSection";
import ContactForm from "@/components/ContactFormm";
import { initLineAnimation } from "@/animations/lineAnimation";
import Footer from "@/components/footer/Footer";

interface ServiceItem {
  icon: string;
  title: string;
  description: string;
  features: string[];
  imageUrl: string;
}

const Services: NextPage = () => {
  const pageRef = useRef<HTMLDivElement>(null);

 const services: ServiceItem[] = [
  {
    icon: "📹",
    title: "CCTV & Surveillance",
    description:
      "We provide cutting-edge CCTV solutions including IP, analog, and 4G/WiFi surveillance systems. Ensure round-the-clock monitoring of your premises with high-quality imaging and smart analytics.",
    features: [
      "HD/4K Installation",
      "4G, WiFi, and Solar-Powered Cameras",
      "Remote Monitoring",
      "Night Vision & Motion Detection",
      "Cloud & Local Storage Options",
    ],
    imageUrl: "/images/cctv-installer.png",
  },
  {
    icon: "🧬",
    title: "Biometric Systems",
    description:
      "Secure your facility with our biometric access control solutions including fingerprint, facial recognition, and multimodal systems for accurate identification and attendance tracking.",
    features: [
      "Fingerprint & Facial Recognition",
      "Multimodal Biometric Access",
      "Door Lock Integration",
      "Attendance Management",
      "Security & Data Logging",
    ],
    imageUrl: "/images/biometric-system.jpg",
  },
  {
    icon: "🚘",
    title: "ANPR (Automatic Number Plate Recognition)",
    description:
      "Deploy ANPR cameras to capture and identify vehicle number plates in real time. Ideal for parking, tolls, and secured entry points.",
    features: [
      "Real-Time Plate Recognition",
      "High-Speed Camera Integration",
      "Database Matching",
      "Barrier Integration",
      "Analytics Dashboard",
    ],
    imageUrl: "/images/anpr-camera.jpg",
  },
  {
    icon: "📞",
    title: "EPABX Systems",
    description:
      "Modernize internal communication with our EPABX systems. Suitable for organizations of all sizes looking for seamless call routing and extension management.",
    features: [
      "Analog & IP EPABX Systems",
      "Scalable Extensions",
      "Voicemail & Call Logs",
      "Intercom & Paging",
      "Repair & Installation Services",
    ],
    imageUrl: "/images/epabx-system.jpg",
  },
  {
    icon: "🖥️",
    title: "Interactive Display Panels",
    description:
      "Engage users with high-definition interactive panels designed for conference rooms, education, and command centers.",
    features: [
      "Touch-Enabled Display",
      "Multi-Device Connectivity",
      "Smart Board Capabilities",
      "Integrated OS and Apps",
      "Wall Mount & Stand Options",
    ],
    imageUrl: "/images/interactive-panel.jpg",
  },
  {
    icon: "📞",
    title: "Video Door Phones",
    description:
      "Enhance home or office security with our video door phone systems. See and communicate with visitors before granting access.",
    features: [
      "HD Video Calling",
      "Intercom Support",
      "Remote Unlocking",
      "Wi-Fi Enabled Options",
      "Multiple Indoor Units",
    ],
    imageUrl: "/images/video-door-phone.jpg",
  },
  {
    icon: "🛅",
    title: "Baggage Scanners",
    description:
      "Ensure safety with high-resolution X-ray baggage scanners ideal for malls, offices, and transport hubs.",
    features: [
      "Dual View Imaging",
      "Automatic Threat Detection",
      "Real-Time Scanning",
      "Maintenance Support",
      "High Throughput Rate",
    ],
    imageUrl: "/images/baggage-scanner.jpg",
  },
  {
    icon: "🚨",
    title: "Alarm Systems",
    description:
      "Protect property and personnel with advanced alarm systems. Detect intrusion, fire, and unauthorized access instantly.",
    features: [
      "Intruder & Panic Alarms",
      "Door/Window Sensors",
      "24/7 Monitoring",
      "Mobile Notifications",
      "Fire & Smoke Detection",
    ],
    imageUrl: "/images/security-alarms.jpg",
  },
  {
    icon: "🔍",
    title: "Metal Detectors",
    description:
      "Deploy handheld and walkthrough metal detectors for reliable screening in secure environments such as events, schools, and offices.",
    features: [
      "High Sensitivity Scanning",
      "Portable & Walkthrough Options",
      "Gold & Weapon Detection",
      "Adjustable Thresholds",
      "Rechargeable Models",
    ],
    imageUrl: "/images/metal-detector.jpg",
  },
  {
    icon: "🧱",
    title: "Access Control Systems",
    description:
      "Control who enters your premises with secure and customizable access control systems for doors, gates, and turnstiles.",
    features: [
      "RFID & Biometric Entry",
      "Centralized Access Management",
      "Time-Based Permissions",
      "Integration with Door Locks",
      "Audit Logs & Reports",
    ],
    imageUrl: "/images/access-control.jpg",
  },
  {
    icon: "⛔",
    title: "Boom Barriers & Toll Solutions",
    description:
      "Automated boom barriers and toll management systems for gated communities, industrial complexes, and parking areas.",
    features: [
      "ANPR Integration",
      "Fast-Action Barriers",
      "Remote Control Access",
      "Toll Payment Systems",
      "Access Logging",
    ],
    imageUrl: "/images/boom-barrier.jpg",
  },
  {
    icon: "🔒",
    title: "Electronic Door Locks",
    description:
      "Upgrade to keyless entry with our range of electronic door locks that support fingerprint, RFID, PIN, and smartphone control.",
    features: [
      "Biometric & PIN Access",
      "Remote Unlocking",
      "Auto-Lock Mechanism",
      "Battery Backup",
      "Tamper Alerts",
    ],
    imageUrl: "/images/electronic-door-lock.jpg",
  },
];


  useEffect(() => {
    if (pageRef.current) {
      initLineAnimation();
    }
  }, []);

  return (
    <main className="w-full font-[family-name:var(--font-urbanist)]">
      <div className="bg-gray-700 bg-opacity-80 bg-blend-overlay bg-[url('/hero-bg.png')] bg-cover bg-center py-24 md:py-32">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl font-bold text-white">Our Services</h1>
        </div>
      </div>
      <div className="w-full max-w-6xl mx-auto px-5 font-sans text-gray-800">
        {services.map((service, index) => (
          <ServiceSection
            key={index}
            icon={service.icon}
            title={service.title}
            description={service.description}
            features={service.features}
            imageUrl={service.imageUrl}
            index={index}
          />
        ))}
      </div>

      <div className="bg-gradient-to-b to-[#2716be] from-[#0e0542] p-8 mt-16 border-b ">
        <h2 className="text-2xl font-bold mb-8 text-white text-center tracking-widest">
          Schedule a Free Site Visit
        </h2>
        <ContactForm />
      </div>
      
    </main>
  );
};

export default Services;
