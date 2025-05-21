"use client";

import React from "react";
import Head from "next/head";
import Image from "next/image";
import HeroBanner from "@/components/ui/hero-banner";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { FaShieldAlt, FaDesktop, FaBrain, FaCheck } from "react-icons/fa";

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

const AboutUs: React.FC = () => {
  const router = useRouter();
  const handleContactUs = () => {
    router.push("/contact-us");
  };

  return (
    <motion.div
      className="flex flex-col min-h-screen"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <Head>
        <title>About Us | Quadra Security</title>
        <meta
          name="description"
          content="About Quadra Security - Guarding homes & businesses with innovation"
        />
      </Head>

      {/* Header Banner Section */}
      <HeroBanner title="About Us" />

      {/* Main Content Section */}
      <main className="flex-grow">
        <motion.section
          className="py-10 px-6 grid md:grid-cols-2 gap-8 items-center md:ml-20"
          initial="hidden"
          whileInView="visible"
          transition={{ staggerChildren: 0.2 }}
          viewport={{ once: true }}
        >
          <motion.div variants={fadeInUp}>
            <h2 className="text-2xl font-bold text-gray-800 mb-2">
              About Quadra Security
            </h2>
            <h3 className="text-3xl font-bold text-indigo-800 mb-4">
              Guarding Homes & Businesses with Innovation
            </h3>
            <p className="text-gray-600 mb-6">
              At Quadra Security, we&rsquo;re committed to providing innovative
              security solutions that protect what matters most. With over 15
              years of experience in the industry, we bring the latest
              technology and expert knowledge to safeguard your property.
            </p>
            <p className="text-gray-600 mb-6">
              We pride ourselves on creating customized solutions for each
              client, understanding that every home and business has unique
              security requirements and challenges that call for specific
              solutions.
            </p>

            <div className="grid grid-cols-2 gap-4 mb-8">
              {[
                { text: "Advanced & Trusted Protection", Icon: FaShieldAlt },
                { text: "Innovative Remote Monitoring", Icon: FaDesktop },
                { text: "Smart AI Integration", Icon: FaBrain },
                { text: "100% Commitment", Icon: FaCheck }
              ].map(({ text, Icon }, i) => (
                <motion.div key={i} className="flex items-start" variants={fadeInUp}>
                  <Icon className="text-indigo-600 mr-2 mt-1" />
                  <span className="text-gray-700">{text}</span>
                </motion.div>
              ))}
            </div>

            <motion.button
              onClick={handleContactUs}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-yellow-500 hover:bg-yellow-600 text-gray-900 font-bold py-3 px-8 rounded-md"
            >
              Contact Us
            </motion.button>
          </motion.div>

          <motion.div
            className="flex flex-col gap-4"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="grid grid-cols-2 gap-2">
              <Image
                src="/images/grid.png"
                alt="Security"
                width={500}
                height={300}
                className="rounded-lg"
              />
              <Image
                src="/images/security-technician.png"
                alt="Security"
                width={231}
                height={50}
                className="rounded-lg"
              />
            </div>
          </motion.div>
        </motion.section>

        {/* HOW WE WORK Section */}
        <motion.section
          className="bg-indigo-900 text-white py-12 px-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ staggerChildren: 0.15 }}
        >
          <motion.h2
            className="text-2xl font-bold mb-8 text-center"
            variants={fadeInUp}
          >
            HOW WE WORK
          </motion.h2>
          <motion.p
            className="text-center max-w-3xl mx-auto mb-12"
            variants={fadeInUp}
          >
            At Quadra Security, we follow a comprehensive, consultation-focused
            methodology to ensure optimal protection for your assets. Our
            process integrates cutting-edge tech with highly trained
            professionals to deliver tailored security solutions for homes and
            businesses.
          </motion.p>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              ["Consultation & Assessment", "We start by understanding your specific security needs through a detailed assessment of your property and vulnerabilities."],
              ["Design & Implementation", "Our experts design a customized security solution and implement it with minimal disruption to your daily operations."],
              ["Support & Maintenance", "We provide ongoing support and maintenance to ensure your security systems remain effective and up-to-date."]
            ].map(([title, desc], i) => (
              <motion.div
                key={i}
                className="flex flex-col items-center text-center"
                variants={fadeInUp}
              >
                <div className="bg-indigo-800 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                  <span className="font-bold text-xl">{`0${i + 1}`}</span>
                </div>
                <h3 className="text-xl font-bold mb-3">{title}</h3>
                <p>{desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Features Section */}
        <motion.section
          className="py-12 px-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ staggerChildren: 0.15 }}
        >
          <div className="max-w-6xl mx-auto grid md:grid-cols-4 gap-8 text-center">
            {([
              { Icon: FaShieldAlt, title: "Trusted Protection", desc: "Reliable security systems you can count on" },
              { Icon: FaDesktop, title: "24/7 Monitoring", desc: "Round-the-clock surveillance for complete peace of mind" },
              { Icon: FaBrain, title: "Smart Integration", desc: "Seamlessly connect with your existing smart home systems" },
              { Icon: FaCheck, title: "100% Commitment", desc: "Dedicated service from start to finish" }
            ] as const).map(({ Icon, title, desc }, i) => (
              <motion.div
                key={i}
                className="flex flex-col items-center"
                variants={fadeInUp}
              >
                <div className="w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center mb-4">
                  <Icon className="text-indigo-900 text-2xl" />
                </div>
                <h3 className="font-bold mb-2">{title}</h3>
                <p className="text-gray-600 text-sm">{desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Expert Security Section */}
        <motion.section
          className="py-12 px-6 bg-indigo-900"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <Image
                src="/images/security-monitoring.png"
                alt="Security Monitoring Center"
                width={270}
                height={400}
                className="object-cover rounded-md mt-[-19px] md:ml-[100px]"
              />
            </motion.div>

            <motion.div
              className="md:ml-[-160px]"
              variants={fadeInUp}
              transition={{ duration: 0.4 }}
            >
              <h2 className="text-2xl font-bold text-white mb-6">
                Our Expert Security
              </h2>
              <p className="text-white mb-8">
                We employ only the most qualified security professionals to
                design, install and monitor our advanced security systems. Our
                team stays updated with the latest industry developments to
                provide cutting-edge protection.
              </p>

              <div className="space-y-4">
                {[
                  ["Response Time", "95%"],
                  ["Monitoring", "100%"],
                  ["Support", "90%"]
                ].map(([label, value], i) => (
                  <div key={i}>
                    <h4 className="font-bold mb-2 text-white">{label}</h4>
                    <div className="w-full bg-gray-300 rounded-full h-2">
                      <motion.div
                        className="bg-indigo-600 h-2 rounded-full"
                        style={{ width: value }}
                        initial={{ width: 0 }}
                        whileInView={{ width: value }}
                        transition={{ duration: 0.6 }}
                      ></motion.div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </motion.section>
      </main>
    </motion.div>
  );
};

export default AboutUs;
