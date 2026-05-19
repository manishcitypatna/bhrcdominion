"use client";

import { useRef, useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const categories = [
  "All",
  "Botox",
  "Skin Care",
  "Hair Restoration",
  "Body Contouring",
  "Weight Loss",
  "Anti Aging",
  "Microneedling",
  "Wellness",
  "Wrinkle Prevention",
  "Dermal Fillers",
  "Laser Treatments",
  "Facials",
];

export default function CategoryBar({
  selected,
  onSelect,
}: {
  selected: string;
  onSelect: (category: string) => void;
}) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const [showRightArrow, setShowRightArrow] = useState(true);

  const checkScroll = () => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
      setShowLeftArrow(scrollLeft > 0);
      setShowRightArrow(scrollLeft < scrollWidth - clientWidth - 5);
    }
  };

  useEffect(() => {
    checkScroll();
    window.addEventListener("resize", checkScroll);
    return () => window.removeEventListener("resize", checkScroll);
  }, []);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const scrollAmount = 200;
      scrollRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="w-full bg-white border-b border-gray-100 sticky top-[var(--header-height,0px)] z-40">
      <div className="max-w-[1440px] mx-auto relative flex items-center h-16 px-4 md:px-12">
        
        {/* Left Arrow */}
        {showLeftArrow && (
          <button
            onClick={() => scroll("left")}
            className="absolute left-0 md:left-4 z-10 bg-white/90 p-2 text-primary hover:scale-110 transition-transform"
          >
            <ChevronLeft className="w-6 h-6 stroke-[3px]" />
          </button>
        )}

        {/* Scrollable Area */}
        <div
          ref={scrollRef}
          onScroll={checkScroll}
          className="flex-1 overflow-x-auto no-scrollbar flex items-center gap-8 px-4 scroll-smooth"
        >
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => onSelect(cat)}
              className={`
                whitespace-nowrap text-[13px] tracking-[0.15em] uppercase font-bold transition-all
                ${selected === cat 
                  ? "text-primary border-b-2 border-primary py-1" 
                  : "text-primary/60 hover:text-primary"}
              `}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Right Arrow */}
        {showRightArrow && (
          <button
            onClick={() => scroll("right")}
            className="absolute right-0 md:right-4 z-10 bg-white/90 p-2 text-primary hover:scale-110 transition-transform"
          >
            <ChevronRight className="w-6 h-6 stroke-[3px]" />
          </button>
        )}
      </div>

      <style jsx global>{`
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .no-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </div>
  );
}
