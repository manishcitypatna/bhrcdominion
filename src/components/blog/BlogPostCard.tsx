"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Link as CopyIcon, Check } from "lucide-react";
import { Blog } from "@/data/blogsData";
import { motion, AnimatePresence } from "framer-motion";

interface BlogPostCardProps {
  blog: Blog;
  variant?: "large" | "small";
  index?: number;
}

export default function BlogPostCard({ blog, variant = "small", index = 0 }: BlogPostCardProps) {
  const isLarge = variant === "large";
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    const url = typeof window !== 'undefined' ? window.location.origin + '/blogs/' + blog.slug : '';
    navigator.clipboard.writeText(url);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className={`flex flex-col bg-white ${isLarge ? "mb-16 items-center text-center" : "mb-12 md:flex-row md:items-start md:text-left text-center"}`}
    >
      {/* IMAGE */}
      <Link 
        href={`/blogs/${blog.slug}`}
        className={`relative overflow-hidden group flex-shrink-0 ${
          isLarge 
            ? "w-full aspect-[16/10] mb-8" 
            : "w-full md:w-[320px] aspect-[16/11] mb-6 md:mb-0 md:mr-8"
        }`}
      >
        <Image
          src={blog.image}
          alt={blog.imageAlt}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-105"
        />
        {!isLarge && (
          <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        )}
      </Link>

      {/* CONTENT */}
      <div className={`${isLarge ? "max-w-[700px]" : "flex-1"} px-4 md:px-0`}>
        {/* CATEGORY */}
        <span className={`text-[10px] tracking-[0.2em] uppercase text-gray-400 font-bold mb-3 block ${isLarge ? "" : "md:inline-block"}`}>
          — {blog.category[0]} —
        </span>

        {/* TITLE */}
        <h3 className={`${isLarge ? "text-3xl md:text-4xl" : "text-xl md:text-2xl"} font-heading text-primary mb-4 leading-tight`}>
          <Link href={`/blogs/${blog.slug}`} className="hover:text-primary/70 transition-colors">
            {blog.title}
          </Link>
        </h3>

        {/* META */}
        <div className={`flex items-center gap-2 text-[10px] tracking-[0.1em] uppercase text-gray-400 italic mb-6 ${isLarge ? "justify-center" : "justify-center md:justify-start"}`}>
          <span className="text-primary/60 font-medium not-italic">Admin</span>
          <span>/</span>
          <span>{blog.date}</span>
        </div>

        {/* DESCRIPTION */}
        <div className={`text-gray-600 leading-relaxed mb-8 ${isLarge ? "text-base" : "text-sm"}`}>
          {isLarge ? (
            <p className="first-letter:text-5xl first-letter:font-heading first-letter:float-left first-letter:mr-3 first-letter:text-primary">
              {blog.description}
            </p>
          ) : (
            <p className="line-clamp-3">
              {blog.description}
            </p>
          )}
        </div>

        {/* BUTTONS / SOCIAL */}
        {isLarge ? (
          <div className="flex flex-col items-center gap-8">
            <Link
              href={`/blogs/${blog.slug}`}
              className="bg-primary text-white text-[11px] tracking-[0.2em] font-bold px-8 py-3 hover:bg-primary/90 transition-colors"
            >
              VIEW POST
            </Link>
            
            <div className="flex items-center gap-2 border-t border-gray-100 pt-8 w-full justify-center">
              <button 
                onClick={handleCopy}
                className="flex items-center gap-2 text-[11px] tracking-[0.2em] font-bold text-gray-400 hover:text-primary transition-all duration-300 group/share relative"
              >
                <span>SHARE</span>
                <div className="relative w-4 h-4">
                  <AnimatePresence mode="wait">
                    {copied ? (
                      <motion.div
                        key="check"
                        initial={{ opacity: 0, scale: 0.5 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.5 }}
                        className="absolute inset-0"
                      >
                        <Check className="w-4 h-4 text-green-500" />
                      </motion.div>
                    ) : (
                      <motion.div
                        key="copy"
                        initial={{ opacity: 0, scale: 0.5 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.5 }}
                        className="absolute inset-0"
                      >
                        <CopyIcon className="w-4 h-4" />
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
                {copied && (
                  <motion.span
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="absolute -top-8 left-1/2 -translate-x-1/2 text-[9px] bg-primary text-white px-2 py-1 rounded"
                  >
                    Copied!
                  </motion.span>
                )}
              </button>
            </div>
          </div>
        ) : (
          <div className={`flex items-center gap-4 border-t border-gray-100 pt-4 mt-2 ${isLarge ? "justify-center" : "justify-center md:justify-start"}`}>
            <button 
              onClick={handleCopy}
              className="flex items-center gap-2 text-[10px] tracking-[0.1em] font-bold text-gray-400 hover:text-primary transition-all duration-300 group/share relative"
            >
              <span>SHARE</span>
              <div className="relative w-3.5 h-3.5">
                <AnimatePresence mode="wait">
                  {copied ? (
                    <motion.div
                      key="check"
                      initial={{ opacity: 0, scale: 0.5 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.5 }}
                      className="absolute inset-0"
                    >
                      <Check className="w-3.5 h-3.5 text-green-500" />
                    </motion.div>
                  ) : (
                    <motion.div
                      key="copy"
                      initial={{ opacity: 0, scale: 0.5 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.5 }}
                      className="absolute inset-0"
                    >
                      <CopyIcon className="w-3.5 h-3.5" />
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
              {copied && (
                <motion.span
                  initial={{ opacity: 0, x: 10 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="ml-2 text-[9px] text-green-500 font-medium"
                >
                  Link Copied!
                </motion.span>
              )}
            </button>
          </div>
        )}
      </div>
    </motion.div>
  );
}
