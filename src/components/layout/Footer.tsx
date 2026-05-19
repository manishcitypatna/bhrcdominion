"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Phone, Mail, Facebook, Instagram } from "lucide-react";
import { LANDING_PAGE_IMAGES } from "../../../public/images/landingPageImages";

export default function Footer() {
  return (
    <footer className="relative bg-[#1F3D57] text-white overflow-hidden">

      {/* CONTENT */}
      <div className="relative z-10 container-custom py-16 md:py-20">

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* LEFT */}
          <div className="flex flex-col gap-6">

            <Image
              src={LANDING_PAGE_IMAGES.LOGOS.WHITE}
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
              <li><Link href="/treatment/skin-rejuvenation">Skin Rejuvenation</Link></li>
              <li><Link href="/treatment/laser-treatments">Laser Treatments</Link></li>
              <li><Link href="/treatment/facial-services">Facial Services</Link></li>
              <li><Link href="/treatment/body-services">Body Services</Link></li>
              <li><Link href="/treatment/regenerative-therapies">Regenerative Therapies</Link></li>
              <li><Link href="/treatment/wellness-therapies">Wellness Therapies</Link></li>
            </ul>
          </div>

          {/* QUICK LINKS */}
          <div className="flex flex-col gap-4 text-sm">
            <h4 className="text-white font-medium mb-2">Quick Links</h4>

            <ul className="flex flex-col gap-2 text-white/70">
              <li><Link href="/blogs">Blogs</Link></li>
              <li><Link href="/membership">Membership</Link></li>
              <li><Link href="/contact">Contact</Link></li>
              <li><Link href="/about">About</Link></li>
              <li><Link href="/treatment/facial-services">Facial Services</Link></li>
              <li><Link href="/treatment/body-services">Body Services</Link></li>
              <li><Link href="/treatment/regenerative-therapies">Regenerative Therapies</Link></li>
              <li><Link href="/treatment/wellness-therapies">Wellness Therapies</Link></li>
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
              <Link 
                href="https://www.facebook.com/bhrcdominion/?ref=NONE_xav_ig_profile_page_web#"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-md border border-white/30 flex items-center justify-center hover:bg-white/10 transition cursor-pointer"
              >
                <Facebook size={16} />
              </Link>
              <Link 
                href="https://www.instagram.com/bhrc_dominion"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-md border border-white/30 flex items-center justify-center hover:bg-white/10 transition cursor-pointer"
              >
                <Instagram size={16} />
              </Link>
            </div>
          </div>

        </div>
      </div>
    </footer>
  );
}