"use client";

import { motion } from "framer-motion";

export default function HighlightSection({ data }: any) {
  return (
    <section className="py-24 bg-[#edf3fa] overflow-hidden">
      <div className="container-custom">

        {/* HEADING */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.7,
            ease: "easeOut",
          }}
          className="text-center max-w-4xl mx-auto"
        >
          <h2 className="text-4xl md:text-6xl leading-[1.05] tracking-tight text-[#1d2b3a]">
            {data.title}
          </h2>
        </motion.div>

        {/* CONTENT CARD */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.8,
            delay: 0.1,
            ease: "easeOut",
          }}
          className="max-w-3xl mx-auto mt-10"
        >
          <div className="bg-white/90 backdrop-blur-sm rounded-2xl px-6 py-6 md:px-10 md:py-8 shadow-[0_10px_40px_rgba(15,23,42,0.04)] border border-white/60">

            <div className="space-y-5">
              {data.content.map((paragraph: string, index: number) => (
                <p
                  key={index}
                  className="text-[14px] md:text-[15px] leading-7 text-gray-600"
                >
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}