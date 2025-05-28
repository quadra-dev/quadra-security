import { client } from "@/lib/sanityClient";
import { PortableText } from "@portabletext/react";
import HeroBanner from "@/components/ui/hero-banner";
import Link from "next/link";
import type { Metadata } from "next";

type Props = {
  params: Promise<{ slug: string }>; // ✅ Updated for Next.js 15
};

// ✅ Updated generateMetadata to handle async params
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params; // ✅ Await the params

  const blog = await client.fetch(
    `*[_type == "blog" && slug.current == $slug][0]{
      title
    }`,
    { slug }
  );

  return {
    title: blog?.title || "Blog",
    description: blog?.title
      ? `Read more about ${blog.title}`
      : "Read our blog post.",
  };
}

// ✅ Updated page component to handle async params
export default async function BlogDetailPage({ params }: Props) {
  const { slug } = await params; // ✅ Await the params

  const blog = await client.fetch(
    `*[_type == "blog" && slug.current == $slug][0] {
      title,
      publishedAt,
      poster { asset->{url} },
      Content
    }`,
    { slug }
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
  <div className="min-h-screen bg-gray-50 font-[family-name:var(--font-urbanist)]">
  <HeroBanner title={blog.title} />

  <div className="bg-white container mx-auto px-4 sm:px-6 lg:px-8 py-8 grid grid-cols-1 lg:grid-cols-3 gap-12">
    {/* Main Blog Content */}
    <div className="lg:col-span-2">
      {blog.poster && (
        <img
          src={blog.poster.asset.url}
          alt={blog.title}
          className="rounded-sm mb-6 w-full max-h-[500px] object-cover"
        />
      )}

      <div className="flex flex-wrap items-center text-sm font-medium text-[#2B388F] mb-8">
        <p>
          {new Date(blog.publishedAt).toLocaleDateString("en-GB", {
            day: "2-digit",
            month: "short",
            year: "numeric",
          })}
        </p>
        <span className="mx-2 hidden sm:inline">|</span>
        <p className="mt-1 sm:mt-0 sm:ml-2">Security</p>
      </div>

      <div className="prose prose-lg max-w-none text-[#575757] font-serif leading-6 space-y-6">
        <PortableText value={blog.Content} />
      </div>
    </div>

    {/* Sidebar */}
    <div className="space-y-8">
      {/* Form */}
      <div className="p-4 rounded-lg border-2 bg-[#6590cd]">
        <h3 className="text-lg font-semibold mb-4 text-white">
          Book Your Free Consultation Today
        </h3>
        <form className="space-y-4">
          <input
            type="text"
            placeholder="Name"
            className="bg-white p-2 w-full rounded text-[#393535] focus:outline-none focus:ring-2 focus:ring-blue-200"
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

      {/* Categories */}
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-lg font-medium text-black mb-4">Categories</h2>
        <ul className="space-y-3">
          {categories.map((category, index) => (
            <li key={index}>
              <Link
                href={`/category/${category.toLowerCase().replace(/\s+/g, "-")}`}
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

// ✅ generateStaticParams remains the same
export async function generateStaticParams() {
  const slugs = await client.fetch(
    `*[_type == "blog"]{ "slug": slug.current }`
  );
  return slugs.map((item: { slug: string }) => ({
    slug: item.slug,
  }));
}
