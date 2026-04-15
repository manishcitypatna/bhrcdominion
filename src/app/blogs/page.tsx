"use client";

import { useState } from "react";
import Footer from "@/components/layout/Footer";
import FeaturedBlogCard from "@/components/blog/FeaturedBlogCard";
import BlogGrid from "@/components/blog/BlogGrid";
import BlogSidebar from "@/components/blog/BlogSidebar";
import { blogsData, featuredBlog } from "@/data/blogsData";

export default function BlogsPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  // ✅ FILTER LOGIC
  const filteredBlogs =
    selectedCategory === "All"
      ? blogsData
      : blogsData.filter((blog) =>
          blog.category.includes(selectedCategory)
        );

  return (
    <div className="bg-bg-light min-h-screen">

      {/* HEADER */}
      <section className="w-full pt-[103px] md:pt-[119px] lg:pt-[139px] pb-[60px] bg-white">
        <div className="max-w-[1440px] mx-auto px-[clamp(20px,8vw,240px)]">
          <h1 className="text-primary font-heading text-[clamp(48px,6vw,96px)]">
            Blogs
          </h1>
        </div>
      </section>

      {/* FEATURED */}
      <section className="pb-[80px] bg-white">
        <div className="max-w-[1440px] mx-auto px-[clamp(20px,8vw,240px)]">
          <FeaturedBlogCard blog={featuredBlog} />
        </div>
      </section>

      {/* MAIN */}
      <section className="bg-bg-light py-[80px]">
        <div className="max-w-[1440px] mx-auto px-[clamp(20px,8vw,240px)] flex gap-10">

          {/* SIDEBAR */}
          <BlogSidebar
            selected={selectedCategory}
            onSelect={setSelectedCategory}
          />

          {/* GRID */}
          <BlogGrid blogs={filteredBlogs} />

        </div>
      </section>

    </div>
  );
}