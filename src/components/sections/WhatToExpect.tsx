"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const items = [
  {
    id: 1,
    title: "Arrival Lounge",
    image: "/images/landing_page/whatToExpectInside/whatToExpectInside_1.png",
  },
  {
    id: 2,
    title: "Consultation Suites",
    image: "/images/landing_page/whatToExpectInside/whatToExpectInside_2.png",
  },
  {
    id: 3,
    title: "Treatment Studios",
    image: "/images/landing_page/whatToExpectInside/whatToExpectInside_3.png",
  },
  {
    id: 4,
    title: "Skin Preparation Lounge",
    image: "/images/landing_page/whatToExpectInside/whatToExpectInside_4.png",
  },
  {
    id: 5,
    title: "Recovery / Aftercare Lounge",
    image: "/images/landing_page/whatToExpectInside/whatToExpectInside_5.png",
  },
];

export default function WhatToExpect() {
  const [active, setActive] = useState(1);

  return (
    <section className="w-full bg-bg-light py-[100px]">
      {/* Wider container for proper alignment */}
      <div className="max-w-[1440px] mx-auto px-6">

        {/* Layout */}
        <div className="grid grid-cols-1 md:grid-cols-[1fr_520px] items-center gap-10 md:gap-[120px]">

          {/* LEFT */}
          <div className="flex flex-col gap-[48px] max-w-[560px]">

            {/* Heading */}
            <div className="flex flex-col gap-[24px]">
              <h2 className="text-primary text-[clamp(32px,4vw,48px)] leading-[1.2] font-heading text-left">
                What to expect inside
              </h2>

              <p className="text-primary/80 text-[16px] md:text-[18px] leading-[1.6]">
                As you step inside, warmth, stillness, and subtle detail draw you into a space where every experience is measured, precise, and quietly indulgent.
              </p>
            </div>

            {/* LIST */}
            <div className="flex flex-col gap-[28px]">
              {items.map((item) => {
                const isActive = active === item.id;

                return (
                  <div
                    key={item.id}
                    onMouseEnter={() => setActive(item.id)}
                    onClick={() => setActive(item.id)} // fallback for touch
                    className="flex items-center gap-[26px] cursor-pointer"
                  >
                    {/* NUMBER */}
                    <span
                      className={`text-[22px] transition-all ${
                        isActive
                          ? "text-primary"
                          : "text-primary/40 hover:text-primary"
                      }`}
                    >
                      {String(item.id).padStart(2, "0")}
                    </span>

                    {/* TEXT */}
                    <h3
                      className={`text-[22px] md:text-[26px] font-heading transition-all ${
                        isActive
                          ? "text-primary"
                          : "text-primary/40 hover:text-primary"
                      }`}
                    >
                      {item.title}
                    </h3>
                  </div>
                );
              })}
            </div>
          </div>

          {/* RIGHT IMAGE */}
          <div className="flex justify-end">
            <div className="relative w-full max-w-[520px]
h-[300px] md:h-[540px] rounded-[12px] overflow-hidden">

              {/* Smooth fade transition */}
              <motion.div
                key={active}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.35 }}
                className="absolute inset-0"
              >
                <Image
                  src={items.find((i) => i.id === active)?.image || ""}
                  alt="Preview"
                  fill
                  className="object-cover"
                />
              </motion.div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}