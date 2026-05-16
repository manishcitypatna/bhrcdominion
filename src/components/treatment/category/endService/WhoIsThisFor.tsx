"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function WhoIsThisFor({ data }: any) {
  return (
    <section className="py-24 bg-bg-light overflow-hidden">
      <div className="container-custom">

        {/* SECTION HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.7,
            ease: "easeOut",
          }}
          className="max-w-3xl mx-auto text-center"
        >
          <h2 className="text-5xl md:text-6xl leading-[1] tracking-tight text-[#1d2b3a]">
            {data.title}
          </h2>

          <p className="mt-5 text-sm md:text-base text-gray-500 leading-relaxed">
            {data.description}
          </p>
        </motion.div>

        {/* CARD GRID */}
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-7 mt-16">

          {data.items.map((item: any, index: number) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: index * 0.08,
              }}
              className="group"
            >

              {/* IMAGE */}
              <div className="relative aspect-[4/3] overflow-hidden rounded-[8px] bg-primary">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                />
              </div>

              {/* CONTENT */}
              <div className="pt-5 px-1">

                <h3 className="text-lg sm:text-2xl leading-tight text-[#1d2b3a]">
                  {item.title}
                </h3>

                <p className="mt-2 text-xs sm:text-sm text-gray-500 leading-relaxed">
                  {item.description}
                </p>

              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}