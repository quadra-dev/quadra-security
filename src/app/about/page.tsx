// pages/about-us.tsx
import React from "react";
import Head from "next/head";
import Image from "next/image";
import HeroBanner from "@/components/ui/hero-banner";
import {
  FaShieldAlt,
  FaDesktop,
  FaBrain,
  FaCheck,
 
} from "react-icons/fa";

const AboutUs: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen">
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
        {/* About Company Section */}
        <section className="py-10 px-6 grid md:grid-cols-2 gap-8 items-center ml-20">
          <div>
            <h2 className="text-2xl font-bold text-gray-800 mb-2">
              About Quadra Security
            </h2>
            <h3 className="text-3xl font-bold text-indigo-800 mb-4">
              Guarding Homes & Businesses with Innovation
            </h3>
            <p className="text-gray-600 mb-6">
              At Quadra Security, we're committed to providing innovative
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
              <div className="flex items-start">
                <FaShieldAlt className="text-indigo-600 mr-2 mt-1" />
                <span className="text-gray-700">
                  Advanced & Trusted Protection
                </span>
              </div>
              <div className="flex items-start">
                <FaDesktop className="text-indigo-600 mr-2 mt-1" />
                <span className="text-gray-700">
                  Innovative Remote Monitoring
                </span>
              </div>
              <div className="flex items-start">
                <FaBrain className="text-indigo-600 mr-2 mt-1" />
                <span className="text-gray-700">Smart AI Integration</span>
              </div>
              <div className="flex items-start">
                <FaCheck className="text-indigo-600 mr-2 mt-1" />
                <span className="text-gray-700">100% Commitment</span>
              </div>
            </div>

            <button className="bg-yellow-500 hover:bg-yellow-600 text-gray-900 font-bold py-3 px-8 rounded-md">
              Contact Us
            </button>
          </div>

          <div className="flex flex-col gap-4">
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
          </div>
        </section>

        {/* How We Work Section */}
        <section className="bg-indigo-900 text-white py-12 px-6">
          <h2 className="text-2xl font-bold mb-8 text-center">HOW WE WORK</h2>
          <p className="text-center max-w-3xl mx-auto mb-12">
            At Quadra Security, we follow a comprehensive, consultation-focused
            methodology to ensure optimal protection for your assets. Our
            process integrates cutting-edge tech with highly trained
            professionals to deliver tailored security solutions for homes and
            businesses.
          </p>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="flex flex-col items-center text-center">
              <div className="bg-indigo-800 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                <span className="font-bold text-xl">01</span>
              </div>
              <h3 className="text-xl font-bold mb-3">
                Consultation & Assessment
              </h3>
              <p>
                We start by understanding your specific security needs through a
                detailed assessment of your property and vulnerabilities.
              </p>
            </div>

            <div className="flex flex-col items-center text-center">
              <div className="bg-indigo-800 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                <span className="font-bold text-xl">02</span>
              </div>
              <h3 className="text-xl font-bold mb-3">
                Design & Implementation
              </h3>
              <p>
                Our experts design a customized security solution and implement
                it with minimal disruption to your daily operations.
              </p>
            </div>

            <div className="flex flex-col items-center text-center">
              <div className="bg-indigo-800 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                <span className="font-bold text-xl">03</span>
              </div>
              <h3 className="text-xl font-bold mb-3">Support & Maintenance</h3>
              <p>
                We provide ongoing support and maintenance to ensure your
                security systems remain effective and up-to-date.
              </p>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-12 px-6">
          <div className="max-w-6xl mx-auto grid md:grid-cols-4 gap-8 text-center">
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center mb-4">
                <FaShieldAlt className="text-indigo-900 text-2xl" />
              </div>
              <h3 className="font-bold mb-2">Trusted Protection</h3>
              <p className="text-gray-600 text-sm">
                Reliable security systems you can count on
              </p>
            </div>

            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center mb-4">
                <FaDesktop className="text-indigo-900 text-2xl" />
              </div>
              <h3 className="font-bold mb-2">24/7 Monitoring</h3>
              <p className="text-gray-600 text-sm">
                Round-the-clock surveillance for complete peace of mind
              </p>
            </div>

            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center mb-4">
                <FaBrain className="text-indigo-900 text-2xl" />
              </div>
              <h3 className="font-bold mb-2">Smart Integration</h3>
              <p className="text-gray-600 text-sm">
                Seamlessly connect with your existing smart home systems
              </p>
            </div>

            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center mb-4">
                <FaCheck className="text-indigo-900 text-2xl" />
              </div>
              <h3 className="font-bold mb-2">100% Commitment</h3>
              <p className="text-gray-600 text-sm">
                Dedicated service from start to finish
              </p>
            </div>
          </div>
        </section>

        {/* Expert Security Section */}
        <section className="py-12 px-6 bg-indigo-900">
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8">
            <div>
              <Image
                src="/images/security-monitoring.png"
                alt="Security Monitoring Center"
                width={270}
                height={400}
                className="object-cover rounded-md mt-[-19px] ml-[100px]"
              />
            </div>

            <div className="ml-[-160px]">
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
                <div>
                  <h4 className="font-bold mb-2 text-white">Response Time</h4>
                  <div className="w-full bg-gray-300 rounded-full h-2">
                    <div
                      className="bg-indigo-600 h-2 rounded-full"
                      style={{ width: "95%" }}
                    ></div>
                  </div>
                </div>

                <div>
                  <h4 className="font-bold mb-2 text-white">Monitoring</h4>
                  <div className="w-full bg-gray-300 rounded-full h-2">
                    <div
                      className="bg-indigo-600 h-2 rounded-full"
                      style={{ width: "100%" }}
                    ></div>
                  </div>
                </div>

                <div>
                  <h4 className="font-bold mb-2 text-white">Support</h4>
                  <div className="w-full bg-gray-300 rounded-full h-2">
                    <div
                      className="bg-indigo-600 h-2 rounded-full"
                      style={{ width: "90%" }}
                    ></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <div className="bg-red-600 text-white text-center py-4 text-xs tracking-widest">
        CP PLUS CP PLUS CP PLUS CP PLUS CP PLUS CP PLUS
      </div>
    </div>
  );
};

export default AboutUs;
