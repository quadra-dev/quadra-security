"use client";
import type { NextPage } from "next";
import { ReactNode, useEffect, useRef } from "react";
import ServiceSection from "@/components/ServiceSection";
import ContactForm from "@/components/ContactForm";
import { initLineAnimation } from "@/animations/lineAnimation";
import HeroBanner from "@/components/ui/hero-banner";
import {
  FaVideo,
  FaFingerprint,
  FaCar,
  FaPhone,
  FaChalkboardTeacher,
  FaDoorOpen,
  FaSuitcase,
  FaBell,
  FaSearch,
  FaShieldAlt,
  FaRoad,
  FaLock,
} from "react-icons/fa";

interface ServiceItem {
  icon: ReactNode;
  title: string;
  description: string;
  features?: string[];
  imageUrl: string;
  detailedContent?: string; // optional extended content if needed
}

const Services: NextPage = () => {
  const pageRef = useRef<HTMLDivElement>(null);

  const services: ServiceItem[] = [
    {
      icon: <FaVideo />,
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
      imageUrl:
        "https://res.cloudinary.com/dggsp8ihg/image/upload/v1747296562/cctv_installation_and_surveillance_sit3ia.jpg",
    },
    {
      icon: <FaFingerprint />,
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
      imageUrl:
        "https://res.cloudinary.com/dggsp8ihg/image/upload/v1747296918/biometric_gc80fv.webp",
    },
    {
      icon: <FaCar />,
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
      imageUrl:
        "https://res.cloudinary.com/dggsp8ihg/image/upload/v1747296559/ANPR-camera_n4y4i9.webp",
    },
    {
      icon: <FaPhone />,
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
      imageUrl:
        "https://res.cloudinary.com/dggsp8ihg/image/upload/v1747296562/epabx_systems_zly2de.jpg",
    },
    {
      icon: <FaChalkboardTeacher />,
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
      imageUrl:
        "https://res.cloudinary.com/dggsp8ihg/image/upload/v1747296568/interactive_panels_bndiiu.png",
    },
    {
      icon: <FaDoorOpen />,
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
      imageUrl:
        "https://res.cloudinary.com/dggsp8ihg/image/upload/v1747296562/video_door_phones_d65vqh.jpg",
    },
    {
      icon: <FaSuitcase />,
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
      icon: <FaBell />,
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
      icon: <FaSearch />,
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
      imageUrl:
        "https://res.cloudinary.com/dggsp8ihg/image/upload/v1747296562/metal_detector_zczuoy.jpg",
    },
    {
      icon: <FaShieldAlt />,
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
      imageUrl:
        "https://res.cloudinary.com/dggsp8ihg/image/upload/v1747296559/Access_Control_enl7ep.webp",
    },
    {
      icon: <FaRoad />,
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
      imageUrl:
        "https://res.cloudinary.com/dggsp8ihg/image/upload/v1747296562/boom-barrier-banne_slefin.jpg",
    },
    {
      icon: <FaLock />,
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
      imageUrl:
        "https://res.cloudinary.com/dggsp8ihg/image/upload/v1747296561/Electronic-Door-Locks_x73dcl.webp",
    },
  ];

  useEffect(() => {
    if (pageRef.current) {
      initLineAnimation();
    }
  }, []);

  return (
    <main
      className="w-full font-[family-name:var(--font-urbanist)]"
      ref={pageRef}
    >
      <HeroBanner title="Our Services" />

      <section className="max-w-6xl mx-auto px-5 py-10 font-sans text-gray-800">
        <article className="mb-12 max-w-4xl mx-auto px-4 md:px-0 prose prose-lg prose-blue prose-headings:text-[#00246C] prose-headings:font-extrabold prose-headings:mb-4 prose-p:text-gray-700 prose-p:leading-relaxed prose-p:mb-6">
          <h1 className="text-3xl md:text-4xl leading-tight mb-6">
            Quadra Security: Committed to Safeguarding Your Home, Business, and
            Community
          </h1>

          <p>
            Quadra Security is dedicated to delivering cutting-edge security
            systems designed for reliability, efficiency, and peace of mind.
            Serving Gurgaon and nearby regions, we specialize in the design,
            installation, and maintenance of state-of-the-art security solutions
            tailored to your needs.
          </p>

          <p>
            We provide comprehensive security solutions for industrial,
            residential, and commercial properties to protect against
            unauthorized access, theft, and other threats. Whether you want to
            secure your business, apartment, or high-traffic area, we have you
            covered.
          </p>

          <blockquote className="border-l-4 border-[#00246C] pl-4 italic text-[#00246C] mb-6">
            Choosing Quadra Security means choosing peace of mind. We help you
            secure your assets and people while ensuring smooth day-to-day
            operations with our efficient and scalable access control systems
            for office or home use.
          </blockquote>
        </article>

        {services.map((service, index) => (
          <ServiceSection
            key={index}
            icon={service.icon}
            title={service.title}
            imageUrl={service.imageUrl}
            description={
              service.description +
              (service.detailedContent ? " " + service.detailedContent : "")
            }
            index={index}
            features={service.features ? service.features : []}
          />
        ))}
        <div className="max-w-4xl mt-16 mx-auto px-4 md:px-0 prose prose-lg prose-blue prose-headings:text-[#00246C] prose-headings:font-extrabold prose-headings:mb-4 prose-p:text-gray-700 prose-p:leading-relaxed prose-p:mb-6">
          <p>
            In addition to providing advanced security systems, we also share
            valuable tips and insights on enhancing safety at home and in the
            workplace. Visit our blog for the latest updates, expert advice, and
            industry best practices to stay informed and protected.
          </p>

          <p>
            <strong>Not sure which security solution is right for you?</strong>{" "}
            Our team is here to help. Reach out for a free consultation or
            on-site assessment, and let us recommend a tailored solution that
            fits your unique needs.
          </p>
        </div>
       <div className="mt-16">
        <ContactForm />
       </div>

      </section>
    </main>
  );
};

export default Services;
