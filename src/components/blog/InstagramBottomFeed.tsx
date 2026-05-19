"use client";

import Image from "next/image";
import Link from "next/link";
import { Instagram as InstaIcon } from "lucide-react";

const instaPosts = [
  { image: "https://res.cloudinary.com/dcvco8nlz/image/upload/v1779187184/instaPost_1_tpapuz.png", link: "https://www.instagram.com/reel/DYSzb0mNaWG/", alt: "Medspa treatment room" },
  { image: "https://res.cloudinary.com/dcvco8nlz/image/upload/v1779187357/instaPost_2_bsazq7.png", link: "https://www.instagram.com/reel/DW97ZYDDVe4/", alt: "Facial treatment in progress" },
  { image: "https://res.cloudinary.com/dcvco8nlz/image/upload/v1779187580/instaPost_3_hqoirl.png", link: "https://www.instagram.com/reel/DWXdgD1kzFA/", alt: "Skincare product display" },
  { image: "https://res.cloudinary.com/dcvco8nlz/image/upload/v1779187685/instaPost_4_jfo9gh.png", link: "https://www.instagram.com/reel/DWHwNzbEYW-/", alt: "Client enjoying aesthetic service" },
  { image: "https://res.cloudinary.com/dcvco8nlz/image/upload/v1779187955/instaPost_6_sc4w3y.png", link: "https://www.instagram.com/reel/DSdSrOfk2fV/", alt: "Before and after results" },
  { image: "https://res.cloudinary.com/dcvco8nlz/image/upload/v1779188927/instaPost_7_osvgpk.png", link: "https://www.instagram.com/reel/DUZxK9fgCuq/", alt: "Botox treatment for men and women" },
  { image: "https://res.cloudinary.com/dcvco8nlz/image/upload/v1779189263/instaPost_5_gjuy0k.png", link: "https://www.instagram.com/reel/DUUMGIogLsM/", alt: "Botox for girlfriend or wife is best" },
  { image: "https://res.cloudinary.com/dcvco8nlz/image/upload/v1779189445/instaPost_8_zcp4tf.png", link: "https://www.instagram.com/reel/DUJRlX3lJaC/", alt: "Best anti-aging treatment" }
];

export default function InstagramBottomFeed() {
  return (
    <section className="w-full bg-white pt-16">
      {/* Section Title */}
      <div className="w-full py-10 border-t border-gray-100 flex flex-col items-center gap-3">
        <h2 className="text-primary text-[clamp(32px,4vw,48px)] font-heading text-center">
          Follow Us On Instagram
        </h2>
        <p className="text-primary/60 text-sm md:text-base italic tracking-widest uppercase">
          @bhrc_dominion
        </p>
      </div>

      <div className="flex overflow-x-auto no-scrollbar scroll-smooth border-t border-gray-100">
        {instaPosts.map((post, i) => (
          <Link 
            key={i} 
            href={post.link} 
            target="_blank"
            className="relative w-[70%] sm:w-[40%] md:w-[25%] lg:w-[15%] aspect-square group flex-shrink-0 cursor-pointer"
          >
            <Image 
              src={post.image} 
              alt={post.alt} 
              fill 
              className="object-cover transition-transform duration-700 group-hover:scale-110" 
            />
            <div className="absolute inset-0 bg-primary/10 flex items-center justify-center">
              <div className="bg-white/90 p-3 rounded-full shadow-sm">
                <InstaIcon className="w-5 h-5 text-primary" />
              </div>
            </div>
          </Link>
        ))}
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
    </section>
  );
}
