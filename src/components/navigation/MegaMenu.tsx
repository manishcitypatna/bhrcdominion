"use client";

import { megaMenuData } from "@/data/menuData";
import Link from "next/link";
import Image from "next/image";

export default function MegaMenu({ type }: { type: string }) {
  const data = megaMenuData[type as keyof typeof megaMenuData];
  if (!data) return null;

  return (
    <div className="absolute left-1/2 top-[calc(100%+16px)] -translate-x-1/2 z-[1000]">
      {/* ARROW */}
      <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-4 h-4 bg-white rotate-45 border-l border-t border-gray-200"></div>

      {/* PANEL */}
      <div className="w-[1200px] max-w-[115vw] bg-white rounded-[12px] shadow-2xl border border-gray-100 p-[32px]">
        {/* ================= TREATMENT ================= */}
        <div className="flex gap-[32px]">
          {/* FEATURED */}
          <div className="hidden md:flex flex-col gap-[16px] w-[240px] shrink-0">
            <div className="relative w-full h-[140px] rounded-[8px] overflow-hidden">
              <Image
                src="/images/Navbar/section2_2.jpg"
                alt="CO2 Laser"
                fill
                className="object-cover"
              />
            </div>
            <h3 className="text-primary text-[16px] font-semibold">CO2 Laser</h3>
            <p className="text-[13px] text-primary/70 leading-[1.5]">
              Our most popular skin resurfacing treatment for smoother, younger-looking skin.
            </p>
            <Link
              href="/treatment/skin-rejuvenation/co2-laser"
              className="text-sm text-primary font-medium hover:underline"
            >
              Learn More →
            </Link>
          </div>

          {/* ALL TREATMENT CATEGORIES */}
          <div className="flex-1 grid grid-cols-2 lg:grid-cols-4 gap-x-[24px] gap-y-[32px]">
            {data.columns.map((col, index) => {
              // slug for category
              const categorySlug = col.heading.toLowerCase().replace(/ /g, "-");
              const categoryHref = `/treatment/${categorySlug}`;

              return (
                <div key={index} className="flex flex-col gap-[12px]">
                  {/* ✅ CLICKABLE CATEGORY HEADING */}
                  <Link
                    href={categoryHref}
                    className="text-primary text-[14px] font-bold hover:underline tracking-wider"
                  >
                    {col.heading}
                  </Link>

                  <div className="flex flex-col gap-[8px]">
                    {col.items.map((item, i) => {
                      // slug for sub-treatment
                      const itemSlug = item
                        .toLowerCase()
                        .replace(/ \/ /g, "-")
                        .replace(/\//g, "-")
                        .replace(/ & /g, "-")
                        .replace(/\( /g, "-")
                        .replace(/ \)/g, "-")
                        .replace(/\(/g, "-")
                        .replace(/\)/g, "-")
                        .replace(/ /g, "-");
                      
                      const itemHref = `/treatment/${categorySlug}/${itemSlug}`;

                      return (
                        <Link
                          key={i}
                          href={itemHref}
                          className="text-[13px] text-primary/70 hover:text-primary transition-colors leading-tight"
                        >
                          {item}
                        </Link>
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
