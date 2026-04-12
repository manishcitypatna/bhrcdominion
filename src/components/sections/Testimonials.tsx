"use client";

import { motion } from "framer-motion";
import { Star, ArrowUpRight, Play } from "lucide-react";
import Image from "next/image";

/* ================= TYPES ================= */

type TextItem = {
  type: "text";
  content: string;
  author: string;
  rating: number;
};

type ImageItem = {
  type: "image";
  author: string;
  tag: string;
  image: string;
};

type Item = TextItem | ImageItem;

/* ================= DATA ================= */

const columns: Item[][] = [
  // Column 1 → 2 text + 1 image
  [
    {
      type: "text",
      content:
        "The attention to detail and prompt responses have made every interaction smooth and enjoyable.",
      author: "James Mendoza",
      rating: 4,
    },
    {
      type: "text",
      content:
        "I've been a loyal client since 2020 and couldn't be happier with the service.",
      author: "Scarlett Walt",
      rating: 4,
    },
    {
      type: "image",
      author: "Brooke",
      tag: "Client since 2020",
      image: "/images/landing_page/testimonials/testimonials_1.png",
    },
  ],

  // Column 2 → text → image → text
  [
    {
      type: "text",
      content:
        "Their team consistently exceeds my expectations!",
      author: "Scarlett Walt",
      rating: 4,
    },
    {
      type: "image",
      author: "Brooke",
      tag: "Client since 2020",
      image: "/images/landing_page/testimonials/testimonials_1.png",
    },
    {
      type: "text",
      content:
        "Exceptional quality and reliable support have truly transformed our business.",
      author: "Amina Patel",
      rating: 5,
    },
  ],

  // Column 3 → image → 2 text
  [
    {
      type: "image",
      author: "Scarlett Walt",
      tag: "Client since 2020",
      image: "/images/landing_page/testimonials/testimonials_1.png",
    },
    {
      type: "text",
      content:
        "I've been a loyal client since 2020 and couldn't be happier.",
      author: "Scarlett Walt",
      rating: 4,
    },
    {
      type: "text",
      content:
        "Amazing experience every time.",
      author: "James Mendoza",
      rating: 4,
    },
  ],

  // Column 4 → 2 text + 1 image
  [
    {
      type: "text",
      content:
        "Highly recommend this team for their professionalism.",
      author: "Amina Patel",
      rating: 5,
    },
    {
      type: "text",
      content:
        "They truly care about their clients.",
      author: "Scarlett Walt",
      rating: 4,
    },
    {
      type: "image",
      author: "Brooke",
      tag: "Client since 2020",
      image: "/images/landing_page/testimonials/testimonials_1.png",
    },
  ],
];

/* ================= COMPONENT ================= */

export default function Testimonials() {
  return (
    <section className="py-[100px] bg-[#EBF5FF]">
      <div className="max-w-[1440px] mx-auto px-6">

        {/* Heading */}
        <h2 className="text-center text-primary text-[clamp(28px,4vw,48px)] font-heading mb-16">
          Testimonials
        </h2>

        {/* GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

          {columns.map((col, colIndex) => (
            <div key={colIndex} className="flex flex-col gap-6">

              {col.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >

                  {/* TEXT CARD */}
                  {item.type === "text" && (
                    <div className="bg-white p-6 rounded-[8px] border border-[#E5EEF6] flex flex-col gap-4">

                      {/* QUOTE WRAPPER */}
                      <div className="flex flex-col gap-2">

                        {/* Opening quote */}
                        <span className="text-[28px] leading-none text-primary/20">
                          “
                        </span>

                        {/* Content */}
                        <p className="text-[14px] leading-[1.5] text-primary">
                          {item.content}
                        </p>

                        {/* Closing quote */}
                        <span className="text-[28px] leading-none text-primary/20 self-end -mt-2">
                          ”
                        </span>

                      </div>

                      {/* Author + Rating */}
                      <div className="flex flex-col gap-2">
                        <span className="font-semibold text-primary text-[14px]">
                          {item.author}
                        </span>

                        <div className="flex gap-1">
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              size={14}
                              className={
                                i < item.rating
                                  ? "text-primary fill-primary"
                                  : "text-primary/30 fill-primary/30"
                              }
                            />
                          ))}
                        </div>
                      </div>
                    </div>
                  )}

                  {/* IMAGE CARD */}
                  {item.type === "image" && (
                    <div className="relative rounded-[8px] overflow-hidden group cursor-pointer">

                      <div className="relative aspect-[4/5]">
                        <Image
                          src={item.image}
                          alt={item.author}
                          fill
                          className="object-cover group-hover:scale-105 transition duration-700"
                        />
                      </div>

                      {/* Gradient */}
                      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/80" />

                      {/* Play */}
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-[42px] h-[42px] rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center">
                          <Play size={16} className="text-white fill-white" />
                        </div>
                      </div>

                      {/* Text */}
                      <div className="absolute bottom-5 left-5 text-white">
                        <h4 className="text-[15px] font-semibold">
                          {item.author}
                        </h4>
                        <p className="text-[12px] text-[#7899AD]">
                          {item.tag}
                        </p>
                      </div>
                    </div>
                  )}

                </motion.div>
              ))}

            </div>
          ))}

        </div>

        {/* Button */}
        <div className="mt-16 text-center">
          <button className="border border-[#2B5C8A] text-[#2B5C8A] px-6 py-2 rounded-[8px] text-sm flex items-center gap-2 mx-auto hover:bg-[#2B5C8A] hover:text-white transition">
            Learn More
            <ArrowUpRight size={16} />
          </button>
        </div>

      </div>
    </section>
  );
}