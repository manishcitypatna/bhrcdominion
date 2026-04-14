"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Blog } from "@/data/blogsData";

export default function FeaturedBlogCard({ blog }: { blog: Blog }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="w-full flex justify-between items-center gap-[80px]"
    >

      {/* IMAGE (BASED ON CARD SYSTEM) */}
      <div className="w-[600px] h-[420px] relative rounded-[8px] overflow-hidden flex-shrink-0">
        <Image
          src={blog.image}
          alt={blog.title}
          fill
          className="object-cover scale-[1.04]"
        />
      </div>

      {/* CONTENT (CENTERED VERTICALLY) */}
      <div className="w-[480px] flex flex-col gap-[16px]">

        {/* TOP GROUP */}
        <div className="flex flex-col gap-[6px]">

          <p className="text-[18px] font-medium leading-[120%] text-primary/80">
            {blog.category} | {blog.date}
          </p>

          <h2 className="text-[24px] font-heading leading-[120%] text-primary">
            {blog.title}
          </h2>

        </div>

        {/* BOTTOM GROUP */}
        <div className="flex flex-col gap-[24px]">

          <p className="text-[16px] leading-[130%] text-primary/80">
            {blog.description}
          </p>

          <button className="
            w-[130px] h-[42px]
            border border-primary 
            rounded-[8px]
            text-[14px] 
            text-primary 
            flex items-center justify-center
            hover:bg-primary hover:text-white 
            transition
          ">
            Read More →
          </button>

        </div>

      </div>

    </motion.div>
  );
}