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
      <div className="w-[1100px] max-w-[110vw] bg-white rounded-[12px] shadow-2xl border border-gray-100 p-[32px]">

        {/* ================= SERVICES ================= */}
        {type === "services" && (
          <div className="flex gap-[32px]">

            {/* FEATURED */}
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
                href="/services/skin"
                className="text-sm text-primary font-medium hover:underline"
              >
                Learn More →
              </Link>

            </div>

            {/* ALL SERVICE CATEGORIES */}
            <div className="flex-1 grid grid-cols-2 lg:grid-cols-4 xl:grid-cols-7 gap-[24px]">

              {data.columns.map((col, index) => {
                // Determine the slug for services
                let serviceSlug = col.heading.toLowerCase().replace(/ & /g, "-").replace(/ /g, "-");
                const serviceHref = `/services/${serviceSlug}`;

                return (
                  <div key={index} className="flex flex-col gap-[8px]">

                    {/* ✅ CLICKABLE HEADING */}
                    <Link
                      href={serviceHref}
                      className="text-primary text-[14px] font-semibold hover:underline"
                    >
                      {col.heading}
                    </Link>

                    <div className="flex flex-col gap-[6px]">
                      {col.items.map((item, i) => (
                        <Link
                          key={i}
                          href={serviceHref}
                          className="text-[13px] text-primary/70 hover:text-primary transition"
                        >
                          {item}
                        </Link>
                      ))}
                    </div>

                  </div>
                );
              })}

            </div>

          </div>
        )}

        {/* ================= TREATMENTS ================= */}
        {type === "treatments" && (
          <div className="flex gap-[32px]">

            {/* FEATURED */}
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
                Face & Neck
              </h3>

              <p className="text-[13px] text-primary/70 leading-[1.5]">
                Rejuvenate your appearance with our specialized face and neck treatments.
              </p>

              <Link
                href="/treatments/face-neck"
                className="text-sm text-primary font-medium hover:underline"
              >
                Explore More →
              </Link>

            </div>

            {/* ALL TREATMENT CATEGORIES */}
            <div className="flex-1 grid grid-cols-2 lg:grid-cols-4 gap-[24px]">

              {data.columns.map((col, index) => {
                // Determine the slug for treatments
                let treatmentSlug = col.heading.toLowerCase().replace(/ & /g, "-").replace(/ /g, "-");
                const treatmentHref = `/treatments/${treatmentSlug}`;

                return (
                  <div key={index} className="flex flex-col gap-[8px]">

                    {/* ✅ CLICKABLE HEADING */}
                    <Link
                      href={treatmentHref}
                      className="text-primary text-[14px] font-semibold hover:underline"
                    >
                      {col.heading}
                    </Link>

                    <div className="flex flex-col gap-[6px]">
                      {col.items.map((item, i) => (
                        <Link
                          key={i}
                          href={treatmentHref}
                          className="text-[13px] text-primary/70 hover:text-primary transition"
                        >
                          {item}
                        </Link>
                      ))}
                    </div>

                  </div>
                );
              })}

            </div>

          </div>
        )}

      </div>
    </div>
  );
}
