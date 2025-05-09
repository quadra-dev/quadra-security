"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
// import { Select } from "@/components/ui/select";
import { Phone, Mail, MapPin } from "lucide-react";
import { FaLocationDot } from "react-icons/fa6";
import { toast } from "react-hot-toast";
import { IoCall } from "react-icons/io5";
import { MdEmail } from "react-icons/md";
import { AiFillInstagram } from "react-icons/ai";
import { FaYoutube } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    mobile: "",
    email: "",
    service: "CCTV Installation",
    address: "",
    pincode: "",
    date: "",
    timeSlot: "",
  });

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (data.success) {
        toast.success("Your request has been submitted successfully!");
        setFormData({
          name: "",
          mobile: "",
          email: "",
          service: "CCTV Installation",
          address: "",
          pincode: "",
          date: "",
          timeSlot: "",
        });
      } else {
        toast.error("Something went wrong. Please try again.");
      }
    } catch (error) {
      console.error(error);
      toast.error("Error submitting the form.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full bg-white">
      {/* Banner Header */}
      <div className="bg-gray-700 bg-opacity-80 bg-blend-overlay bg-[url('/hero-bg.png')] bg-cover bg-center py-16">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl font-bold text-white">Contact Us</h1>
        </div>
      </div>

      <div className="max-w-6xl mx-auto p-6 flex flex-col md:flex-row gap-8 my-4">
        {/* Left Section - Form */}
        <div className="bg-[#F8F9FD] py-8 px-4 rounded-md">
          <div className="w-full">
            <div className="mb-4">
              <p className="text-sm text-[#13095C] mb-2">
                + CCTV Installation in Gurgaon and Delhi NCR
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <Input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your Name"
                  className="border-slate-300"
                  required
                />
                <Input
                  type="text"
                  name="mobile"
                  value={formData.mobile}
                  onChange={handleChange}
                  placeholder="Mobile Number"
                  className="border-slate-300"
                  required
                />
              </div>

              <Input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email Address"
                className="border-slate-300"
                required
              />

              <select
                name="service"
                value={formData.service}
                onChange={handleChange}
                className="w-full h-10 px-3 py-2 rounded-md border border-slate-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                required
              >
                <option value="CCTV Installation">CCTV Installation</option>
                <option value="Maintenance">Maintenance</option>
                <option value="Other">Other</option>
              </select>

              <Textarea
                name="address"
                value={formData.address}
                onChange={handleChange}
                placeholder="Enter street address and locality"
                className="border-slate-300 min-h-24"
                required
              />

              <div className="grid grid-cols-2 gap-4">
                <Input
                  type="text"
                  name="pincode"
                  value={formData.pincode}
                  onChange={handleChange}
                  placeholder="Enter Pincode"
                  className="border-slate-300"
                />
                <select
                  name="city"
                  className="w-full h-10 px-3 py-2 rounded-md border border-slate-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                >
                  <option value="Gurgaon">Gurgaon</option>
                  <option value="Delhi">Delhi</option>
                  <option value="Noida">Noida</option>
                </select>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <Input
                  type="date"
                  name="date"
                  value={formData.date}
                  onChange={handleChange}
                  className="border-slate-300"
                  required
                />
                <select
                  name="timeSlot"
                  value={formData.timeSlot}
                  onChange={handleChange}
                  className="w-full h-10 px-3 py-2 rounded-md border border-slate-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  required
                >
                  <option value="">Select time slot</option>
                  <option value="Morning (9am - 12pm)">
                    Morning (9am - 12pm)
                  </option>
                  <option value="Afternoon (12pm - 3pm)">
                    Afternoon (12pm - 3pm)
                  </option>
                  <option value="Evening (3pm - 6pm)">
                    Evening (3pm - 6pm)
                  </option>
                </select>
              </div>

              <Button
                type="submit"
                disabled={loading}
                className="w-full bg-indigo-900 hover:bg-indigo-800"
              >
                {loading ? "SUBMITTING..." : "SUBMIT"}
              </Button>
            </form>
          </div>
        </div>

        {/* Right Section - Contact Info and Map */}
        <div className="bg-[#F8F9FD] py-8 px-7 rounded-md h-[270px] w-[570px] ">
          <div className="w-full">
            <div className="flex space-y-4">
              <div className="mb-8 ml-9">
                <h2 className="font-normal text-lg uppercase mb-4 text-[#2B388F]">
                  GET IN TOUCH
                </h2>

                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="bg-[#2B388F] p-2 rounded-full">
                      <FaLocationDot className="text-white" />
                    </div>
                    <div>
                      <h3 className="font-medium text-sm">Office Location</h3>
                      <p className="text-sm">
                        Orion Tech Park, Sector 63, Noida
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="bg-[#2B388F] p-2 rounded-full">
                      <IoCall className="text-white" />
                    </div>
                    <div>
                      <h3 className="font-medium text-sm">Call Us Directly</h3>
                      <p className="text-sm">+91-9958343210</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="bg-[#2B388F] p-2 rounded-full">
                      <MdEmail className="text-white" />
                    </div>
                    <div>
                      <h3 className="font-medium text-sm">Send a Message</h3>
                      <p className="text-sm">contact@quadrasecurity.in</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mb-6 ml-9">
                <h2 className="font-normal text-lg uppercase mb-4 text-[#2B388F] ml-3">
                  SOCIAL LINKS
                </h2>
                <div className="flex flex-col gap-6 mb-4 ml-5">
                  <div className="flex items-center">
                    <div className="bg-[#2B388F] p-2 rounded-full">
                      <AiFillInstagram className="text-white w-4.3 h-4.3" />
                    </div>
                    <span className="text-md ml-2 ">Instagram</span>
                  </div>

                  <div className="flex items-center">
                    <div className="bg-[#2B388F] p-2 rounded-full">
                      <FaYoutube className="text-white w-4 h-4" />
                    </div>
                    <span className="text-md ml-2">YouTube</span>
                  </div>

                  <div className="flex items-center">
                    <div className="bg-[#2B388F] p-2 rounded-full">
                      <FaLinkedinIn className="text-white w-4 h-4" />
                    </div>
                    <span className="text-md ml-2">LinkedIn</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Map */}
        </div>
      </div>
    </div>
  );
}
