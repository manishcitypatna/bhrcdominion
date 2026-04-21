"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Phone, Mail, Youtube, Facebook, Instagram, X } from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative bg-[#1F3D57] text-white overflow-hidden">

      {/* CONTENT */}
      <div className="relative z-10 max-w-[1440px] mx-auto px-6 md:px-20 xl:px-[240px] py-16 md:py-20">

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* LEFT */}
          <div className="flex flex-col gap-6">

            <Image
              src="/images/landing_page/logo/logo_white.png"
              alt="logo"
              width={180}
              height={60}
              className="object-contain"
            />

            <div className="flex flex-col gap-4 text-white/80 text-sm">

              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-md border border-white/20 flex items-center justify-center">
                  <Phone size={16} />
                </div>
                <span>(480) 555-0103</span>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-md border border-white/20 flex items-center justify-center">
                  <Mail size={16} />
                </div>
                <span>hills.beverly@info.com</span>
              </div>

            </div>
          </div>

          {/* SERVICES */}
          <div className="flex flex-col gap-4 text-sm">
            <h4 className="text-white font-medium mb-2">Treatment</h4>

            <ul className="flex flex-col gap-2 text-white/70">
              <li><Link href="/treatment/injectables">Injectables</Link></li>
              <li><Link href="/treatment/facial">Facial treatment</Link></li>
              <li><Link href="/treatment/skin">Skin treatment</Link></li>
              <li><Link href="/treatment/laser">Laser treatments</Link></li>
              <li><Link href="/treatment/body">Body contouring</Link></li>
              <li><Link href="/treatment/regenerative">Regenerative therapies</Link></li>
              <li><Link href="/treatment/wellness">Hormone and wellness therapies</Link></li>
            </ul>
          </div>

          {/* QUICK LINKS */}
          <div className="flex flex-col gap-4 text-sm">
            <h4 className="text-white font-medium mb-2">Quick Links</h4>

            <ul className="flex flex-col gap-2 text-white/70">
              <li><Link href="/about">About Us</Link></li>
              <li><Link href="/blogs">Blogs</Link></li>
              <li><Link href="/careers">Careers</Link></li>
              <li><Link href="/">Home</Link></li>
              <li><Link href="/privacy-policy">Privacy Policy</Link></li>
              <li><Link href="/terms">Terms & Conditions</Link></li>
            </ul>
          </div>

          {/* NEWSLETTER */}
          <div className="flex flex-col gap-6">
            <h4 className="text-white font-medium">Subscribe Our Newsletter</h4>

            <div className="flex items-center border border-white/30 rounded-lg overflow-hidden">

              <input
                type="email"
                placeholder="Enter your email"
                className="bg-transparent px-4 py-3 text-sm outline-none w-full placeholder:text-white/50"
              />

              <button className="flex items-center gap-2 px-4 text-sm text-white hover:opacity-80 transition">
                Subscribe
                <ArrowRight size={16} />
              </button>

            </div>

            <div className="flex gap-3">
              {[Youtube, Facebook, Instagram, X].map((Icon, i) => (
                <div
                  key={i}
                  className="w-10 h-10 rounded-md border border-white/30 flex items-center justify-center hover:bg-white/10 transition cursor-pointer"
                >
                  <Icon size={16} />
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
      {/* BIG BACKGROUND LOGO (FIXED) 
      <div className="absolute bottom-0 left-0 w-full opacity-[0.06] pointer-events-none"> 
        <div className="relative w-full h-[180px] md:h-[220px] lg:h-[260px]"> 
          <Image src="/images/landing_page/logo/logo_white_footer.png" alt="bg-logo" fill className="object-contain object-bottom scale-110" /> 
        </div> 
      </div>*/}
    </footer>
  );
}