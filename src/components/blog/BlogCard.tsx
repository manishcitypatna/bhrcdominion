"use client";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { Blog } from "@/data/blogsData";

export default function BlogCard({ blog, index }: { blog: Blog; index: number }) {

  // ✅ DESCRIPTION TRUNCATE (190 chars)
  const truncatedDesc =
    blog.description.length > 190
      ? blog.description.slice(0, 190) + "..."
      : blog.description;

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      className="h-full flex flex-col gap-3 group"
    >

      {/* IMAGE */}
      <div className="relative w-full h-[200px] rounded-[8px] overflow-hidden">
        <Image
          src={blog.image}
          alt={blog.title}
          fill
          className="
            object-cover 
            transition-transform duration-700 
            group-hover:scale-105
          "
        />
      </div>

      {/* CONTENT */}
      <div className="flex flex-col flex-1">

        {/* META */}
        <p className="text-[12px] text-primary/60 mb-1">
          {blog.category} | {blog.date}
        </p>

        {/* TITLE (2 LINES MAX) */}
        <h3 className="
          text-primary 
          font-medium 
          text-[16px] 
          leading-[1.4]
          line-clamp-2
          overflow-hidden
          mb-1
        ">
          {blog.title}
        </h3>

        {/* DESCRIPTION (190 CHARS) */}
        <p className="text-primary/70 text-[14px] leading-[1.5] mb-3">
          {truncatedDesc}
        </p>

        {/* BUTTON (ALIGNED BOTTOM) */}
        <Link
          href={`/blogs/${blog.slug}`}
          className="
                    mt-auto
                    w-fit 
                    text-[13px] 
                    text-primary 
                    border border-primary/30 
                    px-3 py-1.5 
                    rounded-md 
                    hover:bg-primary hover:text-white 
                    transition
                  ">
          Read More →
        </Link>

      </div>

    </motion.div>
  );
}