"use client";

import { useState, useMemo } from "react";
import BlogJournalHero from "@/components/blog/BlogJournalHero";
import CategoryBar from "@/components/blog/CategoryBar";
import FeaturedSection from "@/components/blog/FeaturedSection";
import BlogSidebar from "@/components/blog/BlogSidebar";
import BlogPostCard from "@/components/blog/BlogPostCard";
import InstagramBottomFeed from "@/components/blog/InstagramBottomFeed";
import { blogsData } from "@/data/blogsData";

export default function BlogsPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [visibleCount, setVisibleCount] = useState(15);

  // 1. Featured Blogs (Fixed based on data flag, ignoring filters)
  const featuredBlogs = useMemo(() => {
    return blogsData.filter(blog => blog.isFeatured);
  }, []);

  // 2. All Blogs for the list (Filtered & Sorted)
  const listBlogs = useMemo(() => {
    // Sort by date (Latest first)
    const sorted = [...blogsData].sort((a, b) => {
      const dateA = new Date(a.date).getTime();
      const dateB = new Date(b.date).getTime();
      return dateB - dateA;
    });

    // Filter by category
    const filtered = selectedCategory === "All"
      ? sorted
      : sorted.filter((blog) =>
          blog.category.includes(selectedCategory)
        );
    
    // Reset visible count when category changes
    return filtered;
  }, [selectedCategory]);

  // Derived state for the visible portion of the list
  const visibleBlogs = useMemo(() => {
    return listBlogs.slice(0, visibleCount);
  }, [listBlogs, visibleCount]);

  const handleLoadMore = () => {
    setVisibleCount(prev => prev + 15);
  };

  const handleCategorySelect = (category: string) => {
    setSelectedCategory(category);
    setVisibleCount(15); // Reset to 15 when category changes
  };

  return (
    <main className="relative bg-white min-h-screen">
      
      {/* 1. HERO SECTION (The Med Spa Journal) */}
      <BlogJournalHero />

      {/* 2. CATEGORY BAR (Scrollable) */}
      <CategoryBar 
        selected={selectedCategory} 
        onSelect={handleCategorySelect} 
      />

      {/* 3. FEATURED SECTION (Fixed, only blogs with isFeatured: true) */}
      <FeaturedSection blogs={featuredBlogs} />

      {/* 4. MAIN CONTENT AREA (Grid + Sidebar) */}
      <section className="bg-bg-primary py-16">
        <div className="max-w-[1200px] mx-auto px-6 flex flex-col lg:flex-row gap-16">

          {/* LEFT COLUMN (GRID) */}
          <div className="flex-1">
            
            {/* GRID OF ALL POSTS - SCROLLABLE LIST */}
            <div className="flex flex-col gap-12">
              {visibleBlogs.length > 0 ? (
                visibleBlogs.map((blog, index) => (
                  <BlogPostCard key={blog.id} blog={blog} variant="small" index={index} />
                ))
              ) : (
                <div className="py-20 text-center text-gray-400 italic">
                  No articles found in this category.
                </div>
              )}
            </div>

            {/* LOAD MORE BUTTON */}
            {listBlogs.length > visibleCount && (
              <div className="mt-16">
                <button 
                  onClick={handleLoadMore}
                  className="w-full h-14 border border-gray-100 bg-gray-50/50 hover:bg-primary hover:text-white transition-all duration-500 text-primary text-[11px] tracking-[0.3em] font-bold uppercase flex items-center justify-center"
                >
                  Load More
                </button>
              </div>
            )}

          </div>

          {/* RIGHT COLUMN (SIDEBAR) */}
          <div className="lg:w-[320px]">
            <BlogSidebar 
              selected={selectedCategory}
              onSelect={handleCategorySelect}
            />
          </div>

        </div>
      </section>

      {/* BOTTOM INSTAGRAM FEED */}
      <InstagramBottomFeed />

    </main>
  );
}
