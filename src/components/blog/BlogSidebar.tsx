"use client";

import { Instagram as InstaIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { blogsData } from "@/data/blogsData";

export default function BlogSidebar({ 
  selected, 
  onSelect 
}: { 
  selected: string; 
  onSelect: (category: string) => void 
}) {
  // Extract unique categories and their counts from real data
  const categoryCounts = blogsData.reduce((acc, blog) => {
    blog.category.forEach(cat => {
      acc[cat] = (acc[cat] || 0) + 1;
    });
    return acc;
  }, {} as Record<string, number>);

  const actualCategories = Object.entries(categoryCounts).map(([name, count]) => ({
    name,
    count
  })).sort((a, b) => b.count - a.count);

  const instaPosts = [
    { "image": "https://res.cloudinary.com/dcvco8nlz/image/upload/v1779187184/instaPost_1_tpapuz.png", link: "https://www.instagram.com/reel/DYSzb0mNaWG/", alt: "Medspa treatment room" },
  { image: "https://res.cloudinary.com/dcvco8nlz/image/upload/v1779187357/instaPost_2_bsazq7.png", link: "https://www.instagram.com/reel/DW97ZYDDVe4/", alt: "Facial treatment in progress" },
  { image: "https://res.cloudinary.com/dcvco8nlz/image/upload/v1779187580/instaPost_3_hqoirl.png", link: "https://www.instagram.com/reel/DWXdgD1kzFA/", alt: "Skincare product display" },
  { image: "https://res.cloudinary.com/dcvco8nlz/image/upload/v1779187685/instaPost_4_jfo9gh.png", link: "https://www.instagram.com/reel/DWHwNzbEYW-/", alt: "Client enjoying aesthetic service" },
  { image: "https://res.cloudinary.com/dcvco8nlz/image/upload/v1779187955/instaPost_6_sc4w3y.png", link: "https://www.instagram.com/reel/DSdSrOfk2fV/", alt: "Before and after results" },
  { image: "https://res.cloudinary.com/dcvco8nlz/image/upload/v1779188927/instaPost_7_osvgpk.png", link: "https://www.instagram.com/reel/DUZxK9fgCuq/", alt: "Botox treatment for men and women" },
  { image: "https://res.cloudinary.com/dcvco8nlz/image/upload/v1779189263/instaPost_5_gjuy0k.png", link: "https://www.instagram.com/reel/DUUMGIogLsM/", alt: "Botox for girlfriend or wife is best" },
  { image: "https://res.cloudinary.com/dcvco8nlz/image/upload/v1779189445/instaPost_8_zcp4tf.png", link: "https://www.instagram.com/reel/DUJRlX3lJaC/", alt: "Best anti-aging treatment" },
  { image: "https://res.cloudinary.com/dcvco8nlz/image/upload/v1779189722/instaPost_9_s1ys3f.png", link: "https://www.instagram.com/reel/DPPIcbDEXrn/", alt: "instantly refreshed, hydrated, and glowing skin" }
  ];

  return (
    <aside className="w-full lg:w-[320px] flex flex-col gap-12">
      
      {/* INSTAGRAM */}
      <div>
        <h4 className="text-[11px] tracking-[0.2em] uppercase font-bold text-center mb-6 text-primary relative">
          <span className="bg-white px-4 relative z-10">Instagram</span>
          <span className="absolute top-1/2 left-0 w-full h-[1px] bg-gray-100 -z-0" />
        </h4>
        <div className="grid grid-cols-3 gap-2">
          {instaPosts.map((post, i) => (
            <Link key={i} href={post.link} target="_blank" className="aspect-square relative overflow-hidden group">
              <Image 
                src={post.image} 
                alt={post.alt} 
                fill 
                className="object-cover transition-transform duration-500 group-hover:scale-110" 
              />
              <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <InstaIcon className="w-4 h-4 text-white" />
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* CATEGORIES */}
      <div>
        <h4 className="text-[11px] tracking-[0.2em] uppercase font-bold text-center mb-6 text-primary relative">
          <span className="bg-white px-4 relative z-10">Categories</span>
          <span className="absolute top-1/2 left-0 w-full h-[1px] bg-gray-100 -z-0" />
        </h4>
        <ul className="flex flex-col gap-3">
          <li 
            onClick={() => onSelect("All")}
            className={`flex justify-between items-center text-[13px] border-b border-gray-50 pb-2 transition-colors cursor-pointer ${selected === "All" ? "text-primary font-bold" : "text-gray-600 hover:text-primary"}`}
          >
            <span>All Categories</span>
            <span className="text-[11px] text-gray-400">({blogsData.length})</span>
          </li>
          {actualCategories.map((cat) => (
            <li 
              key={cat.name} 
              onClick={() => onSelect(cat.name)}
              className={`flex justify-between items-center text-[13px] border-b border-gray-50 pb-2 transition-colors cursor-pointer ${selected === cat.name ? "text-primary font-bold" : "text-gray-600 hover:text-primary"}`}
            >
              <span>{cat.name}</span>
              <span className="text-[11px] text-gray-400">({cat.count})</span>
            </li>
          ))}
        </ul>
      </div>

      {/* BANNER SPOT */}
      <div className="relative aspect-square w-full bg-gray-900 overflow-hidden group">
        <Image 
          src="https://res.cloudinary.com/dcvco8nlz/image/upload/v1779187580/instaPost_3_hqoirl.png" 
          alt="Banner" 
          fill 
          className="object-cover opacity-60 group-hover:scale-105 transition-transform duration-1000" 
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-6">
          <h5 className="text-white text-sm tracking-[0.2em] uppercase font-bold mb-2">Contact Now</h5>
          <p className="text-white/70 text-[10px] italic">For your transformation</p>
        </div>
      </div>

      {/* TAG CLOUD */}
      <div>
        <h4 className="text-[11px] tracking-[0.2em] uppercase font-bold text-center mb-6 text-primary relative">
          <span className="bg-white px-4 relative z-10">Tag Cloud</span>
          <span className="absolute top-1/2 left-0 w-full h-[1px] bg-gray-100 -z-0" />
        </h4>
        <div className="flex flex-wrap gap-2">
          {actualCategories.map((cat) => (
            <button 
              key={cat.name} 
              onClick={() => onSelect(cat.name)}
              className={`text-[10px] font-bold tracking-wider px-3 py-1 transition-colors uppercase ${selected === cat.name ? "bg-primary text-white" : "bg-black text-white hover:bg-gray-800"}`}
            >
              {cat.name}
            </button>
          ))}
        </div>
      </div>

    </aside>
  );
}
