"use client";

import Image from "next/image";
import { ABOUT_PAGE_IMAGES } from "../../../public/images/aboutPageImages";

const news = [
  {
    img: ABOUT_PAGE_IMAGES.NEWS.ITEM_1,
    title: "BHRC CEO Shares Leadership Insights",
  },
  {
    img: ABOUT_PAGE_IMAGES.NEWS.ITEM_2,
    title: "Ribbon Cutting Celebration",
  },
  {
    img: ABOUT_PAGE_IMAGES.NEWS.ITEM_3,
    title: "Regenerative Health Discussions",
  },
];

export default function NewsSection() {
  return (
    <section className="w-full bg-bg-light py-[80px] md:py-[100px]">
      <div className="container-custom">

        <div className="flex justify-between items-center mb-12">
          <h2 className="text-primary font-heading text-[clamp(28px,4vw,48px)]">
            News & Media
          </h2>

          <button className="border border-accent px-4 py-2 rounded-md text-accent">
            Learn More →
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {news.map((item, i) => (
            <div key={i} className="bg-white rounded-lg overflow-hidden shadow-md">
              
              <div className="relative h-[240px]">
                <Image src={item.img} alt="news" fill className="object-cover" />
              </div>

              <div className="p-4">
                <h3 className="text-primary font-heading text-[18px] mb-3">
                  {item.title}
                </h3>

                <span className="text-primary/70 text-sm underline">
                  Read More →
                </span>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}