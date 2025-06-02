// src/app/blog/page.tsx
import { Suspense } from "react";
import { groq } from "next-sanity";
import { client } from "@/lib/sanityClient";
import BlogClientComponent from "./BlogClientComponent";
import Canonical from "@/utils/Canonical";

export const revalidate = 60;

// Blog post interface for TypeScript
export interface BlogPost {
  _id: string; 
  title: string; 
  publishedAt: string; 
  slug: string; 
  image: string; 
}

// Server Component for data fetching
export default async function BlogPage() {
  const query = groq`
    *[_type == "blog"] {
      _id,
      title,
      publishedAt,
      "slug": slug.current,
      "image": poster.asset->url
    }
  `;

  const blogPosts = await client.fetch(query);

  return (
    <>
    <Canonical/>
        <Suspense fallback={<div>Loading...</div>}>
      <BlogClientComponent blogPosts={blogPosts} />
    </Suspense>
    </>

  );
}
