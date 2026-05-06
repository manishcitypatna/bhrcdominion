"use client";

import { useState } from "react";
import Image from "next/image";
import { LANDING_PAGE_IMAGES } from "../../../public/images/landingPageImages";

type ActiveDot = {
  id: number;
  top: string;
  left: string;
  label: string;
  text: string;
};

export default function LookFeelYounger() {
  const [activeDots, setActiveDots] = useState<ActiveDot[]>([]);

  const hotspots: ActiveDot[] = [
    {
      id: 1,
      top: "calc(40.5% - 23%)",
      left: "calc(65.7% - 17%)",
      label: "Forehead",
      text: "Smooth and refine your forehead for a youthful look.",
    },
    {
      id: 2,
      top: "calc(36.1% - 23%)",
      left: "calc(66.4% - 17%)",
      label: "Brow Lift",
      text: "Lift and open your eyes with subtle enhancement.",
    },
    {
      id: 3,
      top: "calc(30.5% - 23%)",
      left: "calc(67.3% - 17%)",
      label: "Skin Glow",
      text: "Enhance radiance and texture for healthy skin.",
    },
    {
      id: 4,
      top: "calc(49.8% - 23%)",
      left: "calc(67.9% - 17%)",
      label: "Collagen Boost",
      text: "Stimulate collagen for firmer, tighter skin.",
    },
    {
      id: 5,
      top: "calc(62.4% - 23%)",
      left: "calc(68.2% - 17%)",
      label: "Body Sculpt",
      text: "Contour and define your natural body shape.",
    },
    {
      id: 6,
      top: "calc(73.3% - 23%)",
      left: "calc(68.0% - 17%)",
      label: "Skin Tightening",
      text: "Improve elasticity and smooth loose skin.",
    },
    {
      id: 7,
      top: "calc(51.7% - 23%)",
      left: "calc(64.4% - 17%)",
      label: "Hydration",
      text: "Deep hydration for soft and glowing skin.",
    },
    {
      id: 8,
      top: "calc(32.7% - 23%)",
      left: "calc(65.1% - 17%)",
      label: "Facial Balance",
      text: "Enhance symmetry for a refined facial profile.",
    },
  ];

  const handleClick = (dot: ActiveDot) => {
    setActiveDots((prev) => [...prev, dot]);

    setTimeout(() => {
      setActiveDots((prev) => prev.filter((d) => d.id !== dot.id));
    }, 3000);
  };

  return (
    <section className="w-full max-w-[1920px] mx-auto bg-white flex flex-col items-center">

      {/* Title */}
      <h2 className="mt-[64px] mb-[40px] font-heading text-[32px] md:text-[40px] lg:text-[48px] text-[#1A344D] text-center">
        Look & Feel Younger
      </h2>

      {/* Image Container */}
      <div className="relative w-full max-w-[1440px] aspect-[1440/617] rounded-[8px] overflow-hidden">

        {/* Image */}
        <Image
          src={LANDING_PAGE_IMAGES.LOOK_FEEL_YOUNGER.MAIN}
          alt=""
          fill
          className="object-contain"
        />

        {/* DOTS */}
        <div className="hidden md:block">
        {hotspots.map((dot) => (
          <div
            key={dot.id}
            onClick={() => handleClick(dot)}
            className="absolute w-[12px] h-[12px] border border-[#F1F5F9] rounded-full cursor-pointer z-20 
            hover:scale-110 transition-all duration-300 ease-out"
            style={{
              top: dot.top,
              left: dot.left,
              transform: "translate(-50%, -50%)",
            }}
          />
        ))}</div>

        {/* ACTIVE CARDS */}
        {activeDots.map((dot, index) => {
          const isRight = index % 2 === 0;

          return (
            <div
              key={`${dot.id}-${index}`}
              className="absolute z-30"
              style={{
                top: dot.top,
                left: dot.left,
                transform: "translate(-50%, -50%)",
              }}
            >
              {/* LINE */}
              <div
                className="absolute top-1/2 h-[1px] opacity-0 animate-line"
                style={{
                  backgroundColor: "#E2E8F0",
                  width: "140px",
                  left: isRight ? "0" : "auto",
                  right: isRight ? "auto" : "0",
                  transform: isRight
                    ? "translateY(-50%)"
                    : "translateY(-50%) translateX(-100%)",
                }}
              />

              {/* CARD */}
              <div
                className={`absolute backdrop-blur-md bg-white/80 text-black rounded-lg px-4 py-3 w-[220px] shadow-md 
                opacity-0 ${isRight ? "animate-card-right" : "animate-card-left"}`}
                style={{
                  left: isRight ? "150px" : "auto",
                  right: isRight ? "auto" : "150px",
                  top: "50%",
                  transform: "translateY(-50%)",
                }}
              >
                <p className="text-[11px] text-gray-500 mb-1">
                  {dot.label}
                </p>
                <p className="text-[13px] font-medium leading-snug line-clamp-2">
                  {dot.text}
                </p>
              </div>
            </div>
          );
        })}

        {/* BUTTON - Desktop */}
        <div className="hidden md:block absolute bottom-[24px] left-1/2 -translate-x-1/2 z-20">
          <button className="flex items-center justify-center gap-2 px-6 py-3 bg-primary text-white rounded-md font-medium transition-all duration-300 hover:bg-primary/90 hover:scale-[1.02] active:scale-[0.98]">
            Download Brochure
          </button>
        </div>

      </div>

      {/* BUTTON - Mobile */}
      <div className="md:hidden w-full px-6 mt-6">
        <button className="w-full flex items-center justify-center gap-2 py-4 bg-primary text-white rounded-md font-medium transition-all duration-300 active:scale-[0.98]">
          Download Brochure
        </button>
      </div>

      <div className="h-[40px] md:h-[80px]" />

      {/* ANIMATIONS */}
      <style jsx>{`
        @keyframes fadeLine {
          0% {
            opacity: 0;
            width: 0;
          }
          100% {
            opacity: 1;
            width: 140px;
          }
        }

        .animate-line {
          animation: fadeLine 0.4s ease-out forwards;
        }

        @keyframes slideRight {
          0% {
            opacity: 0;
            transform: translateY(-50%) translateX(20px);
          }
          100% {
            opacity: 1;
            transform: translateY(-50%) translateX(0);
          }
        }

        @keyframes slideLeft {
          0% {
            opacity: 0;
            transform: translateY(-50%) translateX(-20px);
          }
          100% {
            opacity: 1;
            transform: translateY(-50%) translateX(0);
          }
        }

        .animate-card-right {
          animation: slideRight 0.45s cubic-bezier(0.22, 1, 0.36, 1) forwards;
        }

        .animate-card-left {
          animation: slideLeft 0.45s cubic-bezier(0.22, 1, 0.36, 1) forwards;
        }
      `}</style>
    </section>
  );
}