import { client } from "@/lib/sanityClient";
import { PortableText } from "@portabletext/react";
import HeroBanner from "@/components/ui/hero-banner";
import Link from "next/link";
import type { Metadata } from "next";
import ConsultationForm from "@/components/blog/ConsultationForm";

export const revalidate = 60;

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const blog = await client.fetch(
    `*[_type == "blog" && slug.current == $slug][0]{ title }`,
    { slug }
  );

  return {
    title: blog?.title || "Blog",
    description: blog?.title
      ? `Read more about ${blog.title}`
      : "Read our blog post.",
  };
}

export default async function BlogDetailPage({ params }: Props) {
  const { slug } = await params;

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
    <div className="min-h-screen bg-gray-50">
      <HeroBanner title={blog.title} />

      <div className="bg-white container mx-auto px-4 sm:px-6 lg:px-8 py-8 grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left content */}
        <div className="lg:col-span-2">
          {blog.poster && (
            <img
              src={blog.poster.asset.url}
              alt={blog.title}
              className="rounded-md mb-6 w-full h-auto max-h-[500px] object-cover"
            />
          )}

          <div className="flex flex-wrap items-center text-sm font-medium text-[#2B388F] mb-4 sm:mb-6">
            <p>
              {new Date(blog.publishedAt).toLocaleDateString("en-GB", {
                day: "2-digit",
                month: "short",
                year: "numeric",
              })}
            </p>
            <span className="mx-2 hidden sm:inline">|</span>
            <p>Security</p>
          </div>

          <div className="prose prose-lg max-w-none text-[#575757] font-serif leading-6 space-y-6">
            <PortableText value={blog.Content} />
          </div>
        </div>

        {/* Right Sidebar */}
        <div className="space-y-8">
          <ConsultationForm />

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

export async function generateStaticParams() {
  const slugs = await client.fetch(`*[_type == "blog"]{ "slug": slug.current }`);
  return slugs.map((item: { slug: string }) => ({
    slug: item.slug,
  }));
}
