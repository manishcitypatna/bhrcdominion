"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Blog } from "@/data/blogsData";

export default function FeaturedSection({ blogs }: { blogs: Blog[] }) {
  // Use first 3-6 blogs for this section
  const featuredBlogs = blogs.slice(0, 6);
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      if (scrollRef.current) {
        const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
        const maxScroll = scrollWidth - clientWidth;
        
        // If we are at the end, scroll back to start
        if (scrollLeft >= maxScroll - 10) {
          scrollRef.current.scrollTo({ left: 0, behavior: "smooth" });
        } else {
          // Scroll by one item width
          const itemWidth = scrollRef.current.firstElementChild?.clientWidth || clientWidth;
          scrollRef.current.scrollBy({ left: itemWidth, behavior: "smooth" });
        }
      }
    }, 1000); // Scroll every 4 seconds

    return () => clearInterval(interval);
  }, [isPaused]);

  return (
    <section className="w-full bg-white">
      {/* Horizontal Scrollable Grid */}
      <div 
        ref={scrollRef}
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
        onTouchStart={() => setIsPaused(true)}
        onTouchEnd={() => setIsPaused(false)}
        className="flex overflow-x-auto no-scrollbar scroll-smooth"
      >
        {featuredBlogs.map((blog, index) => (
          <motion.div
            key={blog.id}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className="relative flex-shrink-0 w-full md:w-1/3 aspect-[16/10] md:aspect-auto md:h-[450px] group overflow-hidden"
          >
            <Image
              src={blog.image}
              alt={blog.imageAlt}
              fill
              className="object-cover transition-transform duration-1000 group-hover:scale-110"
            />
            
            {/* Semi-transparent Black Overlay */}
            <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition-colors duration-300" />
            
            {/* Content Over the Image */}
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-6 md:p-12 z-10">
              <span className="text-white/90 text-[10px] tracking-[0.3em] uppercase mb-6 font-bold">
                — {blog.category[0]} —
              </span>
              
              <h2 className="text-white text-[9px] sm:text-[11px] md:text-[12px] font-bilagike mb-3 max-w-[450px] leading-[1.3] text-balance">
                <Link href={`/blogs/${blog.slug}`} className="hover:text-white/80 transition-colors">
                  {blog.title}
                </Link>
              </h2>

              <p className="text-white/90 text-[11px] md:text-xs line-clamp-2 max-w-[380px] mb-5 font-light leading-relaxed shrink-0">
                {blog.description}
              </p>

              <span className="text-white/60 text-[10px] tracking-[0.2em] uppercase italic">
                {blog.date}
              </span>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Popular Text Below Section */}
      <div className="w-full py-6 md:py-8 bg-white flex justify-center items-center border-b border-gray-100 overflow-hidden">
        <h3 className="text-primary text-[8px] sm:text-[11px] md:text-[14px] tracking-normal sm:tracking-wider uppercase font-medium text-center px-1 whitespace-nowrap">
          POPULAR FROM BHRC DOMINION MED SPA
        </h3>
      </div>

      <style jsx global>{`
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .no-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </section>
  );
}
