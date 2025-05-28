/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { BlogPost } from "./page";
import { categories } from "@/constants/categories";
import { toast } from "sonner";
import HeroBanner from "@/components/ui/hero-banner";

export default function BlogClientComponent({
  blogPosts,
}: {
  blogPosts: BlogPost[];
}) {
  const [searchQuery, setSearchQuery] = useState("");

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    service: "",
    area: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);


  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
      setIsSubmitting(true)
    e.preventDefault();
    try {
      const res = await fetch("/api/site-visit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const result = await res.json();

      if (!res.ok) {
        toast.error(result.error || "Submission failed");
      } else {
        toast.success("Submitted successfully!");
        setFormData({ name: "", phone: "", service: "", area: "" }); // reset
      }
    } catch (err) {
      toast.error("Something went wrong!");

    } finally{
      setIsSubmitting(false);
    }
  };


  const formatDate = (dateString: string): string => {
    const date = new Date(dateString);
    return `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, "0")}-${String(date.getDate()).padStart(2, "0")}`;
  };

  return (
    <div className="min-h-screen bg-gray-50 font-[family-name:var(--font-urbanist)]">
      {/* Hero Section */}
      <HeroBanner title="Latest Posts" />

      {/* Blog Content */}
      <div className="container mx-auto py-12 px-4">
        <div className="flex flex-col lg:flex-row gap-12 max-w-7xl mx-auto">
          {/* Blog Posts - Main Section */}
          <div className="w-full lg:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-6">
            {blogPosts
              .filter((post) =>
                post.title.toLowerCase().includes(searchQuery.toLowerCase())
              )
              .map((post) => (
                <div
                  key={post._id}
                  className="bg-white rounded-lg overflow-hidden shadow-md"
                >
                  <div className="relative h-48 md:h-60">
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                      className="object-cover"
                    />
                    <div className="absolute top-3 left-3 bg-white text-black text-xs px-2 py-1 rounded">
                      {formatDate(post.publishedAt)}
                    </div>
                  </div>
                  <div className="p-4">
                    <h3 className="text-lg font-semibold text-gray-800 mb-2">
                      {post.title}
                    </h3>
                    <Link
                      href={`/blog/${post.slug}`}
                      className="text-indigo-600 text-sm font-medium flex items-center"
                    >
                      Read More
                      <svg
                        className="w-4 h-4 ml-1"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M14 5l7 7m0 0l-7 7m7-7H3"
                        />
                      </svg>
                    </Link>
                  </div>
                </div>
              ))}
          </div>

          {/* Sidebar */}
          <div className="w-full lg:w-1/3 space-y-8">
            {/* Search Box */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-lg text-black font-medium mb-4">Search</h2>
              <div className="flex">
                <input
                  type="text"
                  placeholder="Search for..."
                  className="flex-1 border border-gray-300 rounded-l-md px-4 text-gray-700 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
                <button className="bg-[#2313AC] text-white px-4 py-2 rounded-r-md hover:bg-blue-700 transition">
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    />
                  </svg>
                </button>
              </div>
            </div>

            {/* Quick Form */}
            <div className="p-6 rounded-lg border-2 bg-[#0F0644] w-full">
              <h3 className="text-lg font-semibold mb-4 text-white">
                Book Your Free Consultation Today
              </h3>
              <form className="space-y-4" onSubmit={handleSubmit}>
                <input
                  type="text"
                  name="name"
                  placeholder="Name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="bg-white p-2 w-full rounded text-[#393535] focus:outline-none focus:ring-2 focus:ring-blue-200"
                  required
                />
                <input
                  type="text"
                  name="phone"
                  placeholder="Phone No"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="bg-white p-2 w-full rounded text-[#393535] focus:outline-none focus:ring-2 focus:ring-blue-200"
                  required
                />
                <select
                  name="service"
                  value={formData.service}
                  onChange={handleInputChange}
                  className="bg-white p-2 w-full rounded text-[#393535] focus:outline-none focus:ring-2 focus:ring-blue-200"
                  required
                >
                  <option value="">Select Service</option>
                  <option value="Business Surveillance">
                    Business Surveillance
                  </option>
                  <option value="Home CCTV & Safety">Home CCTV & Safety</option>
                </select>
                <select
                  name="area"
                  value={formData.area}
                  onChange={handleInputChange}
                  className="bg-white p-2 w-full rounded text-[#393535] focus:outline-none focus:ring-2 focus:ring-blue-200"
                  required
                >
                  <option value="">Select Area</option>
                  <option value="Gurgaon">Gurgaon</option>
                  <option value="Delhi">Delhi</option>
                </select>
                <button
                  type="submit"
                  className="w-full bg-[#FFC43C] text-black font-medium py-2 rounded"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Submitting..." : "Submit"}
                </button>
              </form>
            </div>

            {/* Categories */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-lg font-medium text-black mb-4">
                Categories
              </h2>
              <ul className="space-y-3">
                {categories.map((category, index) => (
                  <li key={index}>
                    <Link
                      href={`/category/${category
                        .toLowerCase()
                        .replace(/\s+/g, "-")}`}
                      className="flex items-center text-gray-700 hover:text-indigo-600 transition"
                    >
                      <svg
                        className="w-4 h-4 mr-2 text-indigo-600"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                      {category}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
