"use client";

import { useState, useRef } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const resultItems = [
  {
    title: "Derma fillers",
    subtitle: "Slide to compare results",
    before: "/images/landing_page/real_result/before_1.png",
    after: "/images/landing_page/real_result/after_1.png",
  },
  {
    title: "Spot Treatment",
    subtitle: "Slide to compare results",
    before: "/images/landing_page/real_result/before_2.png",
    after: "/images/landing_page/real_result/after_2.png",
  },
  {
    title: "Lash Lift",
    subtitle: "Slide to compare results",
    before: "/images/landing_page/real_result/before_3.png",
    after: "/images/landing_page/real_result/after_3.png",
  },
];

const BeforeAfterSlider = ({
  before,
  after,
}: {
  before: string;
  after: string;
}) => {
  const [sliderPos, setSliderPos] = useState(50);
  const containerRef = useRef<HTMLDivElement>(null);

  const updatePosition = (clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const pos = ((clientX - rect.left) / rect.width) * 100;
    setSliderPos(Math.max(0, Math.min(100, pos)));
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    updatePosition(e.clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    updatePosition(e.touches[0].clientX);
  };

  // 🔥 RESET TO CENTER
  const resetSlider = () => {
    setSliderPos(50);
  };

  return (
    <div
      ref={containerRef}
      className="relative w-full h-[500px] overflow-hidden rounded-[12px] cursor-ew-resize select-none"
      onMouseMove={handleMouseMove}
      onMouseLeave={resetSlider}
      onTouchMove={handleTouchMove}
      onTouchEnd={resetSlider}
    >
      {/* After */}
      <Image
        src={after}
        alt="After"
        fill
        className="object-cover"
      />

      {/* Before */}
      <div
        className="absolute inset-0"
        style={{ clipPath: `inset(0 ${100 - sliderPos}% 0 0)` }}
      >
        <Image
          src={before}
          alt="Before"
          fill
          className="object-cover"
        />
      </div>

      {/* Labels */}
      <div className="absolute top-4 left-4 bg-[#7899AD] text-white text-xs px-3 py-1 rounded-md z-20">
        Before
      </div>

      <div className="absolute top-4 right-4 bg-[#2B5C8A] text-white text-xs px-3 py-1 rounded-md z-20">
        After
      </div>

      {/* Slider Line */}
      <div
        className="absolute top-0 bottom-0 w-[3px] bg-white z-30 flex items-center justify-center"
        style={{ left: `${sliderPos}%` }}
      >
        {/* Handle */}
        <div className="flex gap-[3px] bg-[#2B5C8A] px-[3px] py-[6px] rounded-sm shadow-md">
          <div className="w-[2px] h-4 bg-white" />
          <div className="w-[2px] h-4 bg-white" />
        </div>
      </div>
    </div>
  );
};

export default function RealResults() {
  return (
    <section className="py-[100px] bg-white">
      <div className="max-w-[1200px] mx-auto px-6 text-center">
        
        {/* Header */}
        <div className="mb-16">
          <h2 className="text-primary text-[clamp(28px,4vw,48px)] leading-[1.2] mb-6 font-heading">
            Real Results. Real People
          </h2>

          <p className="text-text-muted text-[16px] md:text-[18px] leading-relaxed max-w-[700px] mx-auto">
            Witness the transformative power of our treatments through actual client results. <br />
            Your journey to radiance starts here.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 md:gap-6">
          {resultItems.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="flex flex-col items-center gap-6"
            >
              <div className="w-full max-w-[375px]">
                <BeforeAfterSlider
                  before={item.before}
                  after={item.after}
                />
              </div>

              <div className="text-center">
                <h3 className="text-primary text-[24px] md:text-[28px] leading-[1.2] font-heading">
                  {item.title}
                </h3>

                <p className="text-text-muted text-[14px] md:text-[16px] mt-2">
                  {item.subtitle}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}