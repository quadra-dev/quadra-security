import { client } from "@/sanity/lib/client";
import { PortableText } from "@portabletext/react";
import Link from "next/link";

interface PageProps {
  params: {
    slug: string;
  };
}

export default async function BlogDetailPage(props: PageProps) {
  const { params } = props;

  const blog = await client.fetch(
    `
    *[_type == "blog" && slug.current == $slug][0] {
      title,
      publishedAt,
      poster { asset->{url} },
      Content
    }
  `,
    { slug: params.slug }
  );

  if (!blog) {
    return <div className="p-8">Blog not found.</div>;
  }

  const categories = [
    "Business Surveillance",
    "Biometric & Fingerprint Access",
    "Home CCTV & Safety",
    "Residential & Commercial Security",
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gray-700 bg-opacity-80 bg-blend-overlay bg-[url('/hero-bg.png')] bg-cover bg-center py-16">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl font-bold text-white">{blog.title}</h1>
        </div>
      </div>
      <div className="bg-white container mx-auto p-8 grid grid-cols-1 lg:grid-cols-3 gap-12">
        {/* LEFT CONTENT */}
        <div className="lg:col-span-2 ml-[40px]">
          {blog.poster && (
            <img
              src={blog.poster.asset.url}
              alt={blog.title}
              className="rounded-sm mb-6 w-[900px] h-[500px]"
            />
          )}

          <div className="flex items-center text-sm font-medium text-[#2B388F] mb-8">
            <p>
              {new Date(blog.publishedAt).toLocaleDateString("en-GB", {
                day: "2-digit",
                month: "short",
                year: "numeric",
              })}
            </p>
            <span className="mx-2">|</span>
            <p>Security</p> {/* Hardcoded Category for now */}
          </div>

          <div className="prose prose-lg max-w-none text-[#575757] font-serif leading-5.5 space-y-6">
            <PortableText value={blog.Content} />
          </div>
        </div>

        {/* RIGHT SIDEBAR */}
        <div className="space-y-8 ml-[40px]">
          {/* Search Box */}

          {/* Quick Contact Form */}
          <div className="p-4 rounded-lg  border-2 bg-[#6590cd] w-[370px]">
            <h3 className="text-lg font-semibold mb-4 ml-[15px]">
              Book Your Free Consultation Today
            </h3>
            <form className="space-y-4">
              <input
                type="text"
                placeholder="Name"
                className=" bg-white p-2 w-full rounded text-[#393535] focus:outline-none focus:ring-2 focus:ring-blue-200"
              />
              <input
                type="text"
                placeholder="Phone No"
                className="bg-white p-2 w-full rounded text-[#393535] focus:outline-none focus:ring-2 focus:ring-blue-200"
              />
              <select className="bg-white p-2 w-full rounded text-[#393535] focus:outline-none focus:ring-2 focus:ring-blue-200">
                <option>Select Service</option>
                <option>Business Surveillance</option>
                <option>Home CCTV & Safety</option>
              </select>
              <select className="bg-white p-2 w-full rounded text-[#393535] focus:outline-none focus:ring-2 focus:ring-blue-200">
                <option>Select Area</option>
                <option>Gurgaon</option>
                <option>Delhi</option>
              </select>
              <button
                type="submit"
                className="w-full bg-[#FFC43C] text-black font-medium py-2 rounded"
              >
                Submit
              </button>
            </form>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-lg font-medium text-black mb-4">Categories</h2>
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
  );
}
