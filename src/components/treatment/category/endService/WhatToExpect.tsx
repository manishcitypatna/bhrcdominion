"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function WhatToExpect({ data }: any) {
  return (
    <section className="py-24 bg-bg-light overflow-hidden">
      <div className="container-custom">

        {/* CENTER HEADING */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.7,
            ease: "easeOut",
          }}
          className="text-center max-w-3xl mx-auto"
        >
          <h2 className="text-5xl md:text-6xl leading-[1] tracking-tight text-[#1d2b3a]">
            {data.title}
          </h2>

          <p className="mt-5 text-sm md:text-base text-gray-500 leading-relaxed">
            {data.description}
          </p>
        </motion.div>

        {/* CONTENT */}
        <div className="mt-20 grid lg:grid-cols-[0.95fr_1.05fr] gap-10 xl:gap-14 items-start">

          {/* LEFT TIMELINE */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.7,
              ease: "easeOut",
            }}
            className="max-w-2xl"
          >

            <div className="relative">

              {/* Vertical Line */}
              <div className="absolute left-[17px] top-3 bottom-3 w-px bg-[#d7dde4]" />

              <div className="space-y-12">
                {data.points.map((point: any, index: number) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.5,
                      delay: index * 0.12,
                    }}
                    className="relative flex gap-5"
                  >

                    {/* Number */}
                    <div className="relative z-10 flex-shrink-0">
                      <div className="w-9 h-9 rounded-full bg-[#16324a] text-white flex items-center justify-center text-sm font-medium shadow-sm">
                        {index + 1}
                      </div>
                    </div>

                    {/* Text */}
                    <div className="pt-1">
                      <h4 className="text-xl text-[#1d2b3a]">
                        {point.title}
                      </h4>

                      <p className="mt-3 text-[15px] leading-8 text-gray-500 max-w-lg">
                        {point.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* RIGHT IMAGE */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.8,
              ease: "easeOut",
            }}
            className="relative h-[420px] md:h-[620px] rounded-[6px] overflow-hidden"
          >
            <Image
              src={data.image}
              alt={data.title}
              fill
              className="object-cover"
            />
          </motion.div>

        </div>
      </div>
    </section>
  );
}