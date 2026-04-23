"use client";

import { megaMenuData } from "@/data/menuData";
import Link from "next/link";
import Image from "next/image";

// ✅ CATEGORY SLUG (handles uppercase safely)
const getCategorySlug = (heading: string) => {
  return heading.toLowerCase().trim().replace(/\s+/g, "-");
};

// ✅ ITEM SLUG (clean + safe)
const generateSlug = (text: string) => {
  return text
    .toLowerCase()
    .replace(/&/g, "and")
    .replace(/w\//g, "with-")
    .replace(/\//g, "-")
    .replace(/[()]/g, "")
    .replace(/[^a-z0-9\s-]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-");
};

export default function MegaMenu({ type }: { type: string }) {
  const data = megaMenuData[type as keyof typeof megaMenuData];
  if (!data) return null;

  return (
    <div className="absolute left-1/2 top-[calc(100%+16px)] -translate-x-1/2 z-[1000]">
      
      {/* ARROW */}
      <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-4 h-4 bg-white rotate-45 border-l border-t border-gray-200"></div>

      {/* MENU CONTAINER */}
      <div className="w-[1200px] max-w-[115vw] bg-white rounded-[12px] shadow-2xl border border-gray-100 p-[32px]">

        <div className="flex gap-[32px]">

          {/* LEFT FEATURED CARD */}
          <div className="hidden md:flex flex-col gap-[16px] w-[240px] shrink-0">
            <div className="relative w-full h-[140px] rounded-[8px] overflow-hidden">
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
              Our most popular skin resurfacing treatment.
            </p>

            <Link
              href="/treatment/skin-rejuvenation/co2-cartessa-coolpeel"
              className="text-sm text-primary font-medium hover:underline"
            >
              Learn More →
            </Link>
          </div>

          {/* RIGHT GRID */}
          <div className="flex-1 grid grid-cols-2 lg:grid-cols-4 gap-x-[24px] gap-y-[32px]">

            {data.columns.map((col, index) => {
              const categorySlug = getCategorySlug(col.heading);

              // ✅ SAFETY CHECK (prevents undefined routes)
              if (!categorySlug) return null;

              return (
                <div key={index} className="flex flex-col gap-[12px]">

                  {/* CATEGORY LINK */}
                  <Link
                    href={`/treatment/${categorySlug}`}
                    className="text-primary text-[14px] font-bold hover:underline tracking-wider"
                  >
                    {col.heading}
                  </Link>

                  {/* SUB ITEMS */}
                  <div className="flex flex-col gap-[8px]">
                    {col.items.map((item, i) => {
                      const itemSlug = generateSlug(item);

                      if (!itemSlug) return null;

                      return (
                        <Link
                          key={i}
                          href={`/treatment/${categorySlug}/${itemSlug}`}
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