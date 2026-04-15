"use client";

import { motion } from "framer-motion";

interface Category {
  name: string;
  services: any[];
}

interface DualMenuProps {
  categories: Category[];
  activeCategory: string;
  setActiveCategory: (name: string) => void;
  activeType: string;
  setActiveType: (type: string) => void;
}

export default function DualMenu({
  categories,
  activeCategory,
  setActiveCategory,
  activeType,
  setActiveType,
}: DualMenuProps) {
  const currentCategory = categories.find((c) => c.name === activeCategory);

  // Extract unique types for the current category
  const types = [
    "All",
    ...Array.from(
      new Set(currentCategory?.services?.flatMap((s) => s.type) || [])
    ),
  ];

  return (
    <section className="w-full bg-white sticky top-[103px] md:top-[119px] lg:top-[139px] z-[50] shadow-sm">
      <div className="max-w-[1440px] mx-auto px-6 md:px-20 xl:px-[240px]">
        
        {/* TOP ROW: AREAS */}
        <div className="flex items-center gap-8 md:gap-12 border-b border-gray-100 overflow-x-auto no-scrollbar py-4">
          {categories.map((cat) => {
            const isActive = activeCategory === cat.name;
            return (
              <button
                key={cat.name}
                onClick={() => {
                  setActiveCategory(cat.name);
                  setActiveType("All");
                }}
                className={`relative pb-2 whitespace-nowrap text-[14px] md:text-[16px] font-medium transition-colors ${
                  isActive ? "text-primary" : "text-primary/40 hover:text-primary/70"
                }`}
              >
                {cat.name}
                {isActive && (
                  <motion.div
                    layoutId="activeCategory"
                    className="absolute bottom-0 left-0 right-0 h-[2px] bg-primary"
                  />
                )}
              </button>
            );
          })}
        </div>

        {/* BOTTOM ROW: TYPES */}
        <div className="flex items-center gap-3 overflow-x-auto no-scrollbar py-4">
          {types.map((type) => {
            const isActive = activeType === type;
            return (
              <button
                key={type}
                onClick={() => setActiveType(type)}
                className={`px-5 py-1.5 rounded-full text-[13px] font-medium transition-all duration-300 border ${
                  isActive
                    ? "bg-primary text-white border-primary"
                    : "bg-transparent text-primary/60 border-primary/10 hover:border-primary/30"
                }`}
              >
                {type}
              </button>
            );
          })}
        </div>

      </div>
    </section>
  );
}
