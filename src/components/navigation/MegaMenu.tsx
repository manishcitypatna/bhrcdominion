"use client";

import { megaMenuData } from "./menuData";
import Link from "next/link";
import Image from "next/image";

export default function MegaMenu({ type }: { type: string }) {
  const data = megaMenuData[type as keyof typeof megaMenuData];
  if (!data) return null;

  return (
    <div className="absolute left-1/2 top-[calc(100%+16px)] -translate-x-1/2 z-[1000]">

      {/* 🔺 ARROW */}
      <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-4 h-4 bg-white rotate-45 border-l border-t border-gray-200"></div>

      {/* 🧊 PANEL */}
      <div className="w-[1100px] max-w-[95vw] bg-white rounded-[12px] shadow-2xl border border-gray-100 p-[32px]">

        {/* ================= SERVICES ================= */}
        {type === "services" && (
          <div className="flex gap-[32px]">

            {/* 🔥 FEATURED */}
            <div className="hidden md:flex flex-col gap-[16px] w-[260px] shrink-0">

              <div className="relative w-full h-[160px] rounded-[8px] overflow-hidden">
                <Image
                  src="/images/Navbar/section2_2.jpg"
                  alt="CO2 Laser"
                  fill
                  className="object-cover"
                />
              </div>

              <h3 className="text-primary text-[16px] font-semibold">
                CO2 Laser
              </h3>

              <p className="text-[13px] text-primary/70 leading-[1.5]">
                Our most popular skin resurfacing treatment for smoother, younger-looking skin.
              </p>

              <Link
                href="#"
                className="text-sm text-primary font-medium hover:underline"
              >
                Learn More →
              </Link>

            </div>

            {/* 🧩 ALL SERVICE CATEGORIES */}
            <div className="flex-1 grid grid-cols-2 md:grid-cols-3 gap-[24px]">

              {data.columns.map((col, index) => (
                <div key={index} className="flex flex-col gap-[8px]">

                  <h3 className="text-primary text-[14px] font-semibold">
                    {col.heading}
                  </h3>

                  <div className="flex flex-col gap-[6px]">
                    {col.items.map((item, i) => (
                      <Link
                        key={i}
                        href="#"
                        className="text-[13px] text-primary/70 hover:text-primary transition"
                      >
                        {item}
                      </Link>
                    ))}
                  </div>

                </div>
              ))}

            </div>

          </div>
        )}

        
{/* ================= TREATMENTS ================= */}
{type === "treatments" && (
  <div className="flex gap-[32px]">

    {/* 🔥 FEATURED IMAGE */}
    <div className="hidden md:flex flex-col gap-[16px] w-[260px] shrink-0">

      <div className="relative w-full h-[160px] rounded-[8px] overflow-hidden">
        <Image
          src="/images/Navbar/section2_2.jpg"
          alt="Face Treatments"
          fill
          className="object-cover"
        />
      </div>

      <h3 className="text-primary text-[16px] font-semibold">
        Face & Neck Treatments
      </h3>

      <p className="text-[13px] text-primary/70">
        Targeted treatments designed to enhance facial harmony and skin health.
      </p>

    </div>

    {/* 🧩 CATEGORY LIST */}
    <div className="flex-1 grid grid-cols-2 md:grid-cols-2 gap-[24px]">

      {data.columns.map((col, index) => (
        <div key={index} className="flex flex-col gap-[10px]">

          <h3 className="text-primary text-[14px] font-semibold">
            {col.heading}
          </h3>

          <div className="flex flex-col gap-[6px]">
            {col.items.map((item, i) => (
              <Link
                key={i}
                href="#"
                className="text-[13px] text-primary/70 hover:text-primary transition"
              >
                {item}
              </Link>
            ))}
          </div>

          {/* CTA */}
          {"cta" in col && (
            <Link
              href="#"
              className="text-primary font-medium text-sm mt-2 hover:underline"
            >
              {col.cta} →
            </Link>
          )}

        </div>
      ))}

    </div>

  </div>
)}

      </div>
    </div>
  );
}