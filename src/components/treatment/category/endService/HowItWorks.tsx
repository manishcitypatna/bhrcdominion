"use client";

import Image from "next/image";

export default function HowItWorks({ data }: any) {
  if (!data || !data.steps) return null;

  return (
    <section className="py-24 bg-white">
      <div className="container-custom">
        {/* HEADER */}
        <div className="text-center mb-20">
          <h2 className="text-[36px] md:text-[48px] font-serif text-primary mb-6 leading-tight">
            {data.title}
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto text-base md:text-lg leading-relaxed">
            {data.description}
          </p>
        </div>

        {/* STEPS GRID */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-x-12 lg:gap-x-20 gap-y-16">
          {data.steps.map((item: any, i: number) => (
            <div key={i} className="flex flex-col items-start text-left">
              {/* ICON CONTAINER */}
              <div className="w-16 h-16 flex items-center justify-center mb-8">
                <div className="relative w-8 h-8">
                  <Image 
                    src={item.image || `/images/endproductpageIcon/icon_0${(i % 3) + 1}.png`} 
                    alt={item.title}
                    fill
                    className="object-contain"
                  />
                </div>
              </div>

              {/* CONTENT */}
              <h3 className="text-2xl md:text-3xl font-serif text-primary mb-5 leading-tight">
                {item.title}
              </h3>
              <p className="text-gray-600 leading-relaxed text-[15px] md:text-base">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
