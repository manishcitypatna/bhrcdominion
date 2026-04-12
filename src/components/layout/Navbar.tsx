"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, ChevronDown, ArrowUpRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

const menuItems = [
  { name: "Treatment Categories", hasDropdown: true },
  { name: "Services", hasDropdown: true },
  { name: "About Us", hasDropdown: false },
  { name: "Contact Us", hasDropdown: false },
];

export default function Navbar() {
  const [opacity, setOpacity] = useState(0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const heroHeight = 1105; // Defined in build_plan.txt
      const scrollY = window.scrollY;
      
      // Calculate opacity: 0 at top, linearly increasing until section 2
      // We want it to reach 0.3 (30%) by the time we hit the BlueBand section
      const maxOpacity = 0.5;
      const currentOpacity = Math.min(maxOpacity, (scrollY / heroHeight) * maxOpacity);
      
      setOpacity(currentOpacity);
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 w-full z-50 transition-all duration-300 flex items-center justify-between",
        "h-[72px] md:h-[88px] lg:h-[108px]",
        "px-5 md:px-[clamp(20px,6vw,80px)] lg:px-[clamp(20px,8vw,240px)]"
      )}
      style={{ 
        backgroundColor: `rgba(255, 255, 255, ${opacity})`,
        backdropFilter: opacity > 0 ? "blur(6px)" : "none",
        WebkitBackdropFilter: opacity > 0 ? "blur(8px)" : "none"
      }}
    >
      {/* Logo Container - Occupies left space */}
      <div className="flex-1 flex justify-start">
        <Link href="/" className="relative flex items-center shrink-0">
          <div className="relative w-[clamp(160px,20vw,308px)] aspect-[308/48]">
            <Image 
              src="/images/landing_page/logo/logo_blue.png" 
              alt="Beverly Hills Rejuvenation Center" 
              fill 
              className="object-contain object-left" 
            />
          </div>
        </Link>
      </div>

      {/* Menu Items - Centered */}
      <div className="hidden lg:flex items-center justify-center gap-8 mx-4">
        {menuItems.map((item) => (
          <Link
              key={item.name}
              href="#"
              className="flex items-center gap-1 text-[15px] font-medium transition-colors whitespace-nowrap"
              style={{ color: 'rgba(26, 52, 77, 0.65)' }}
            >
              {item.name}
              {item.hasDropdown && <ChevronDown size={14} className="opacity-50" />}
            </Link>
        ))}
      </div>

      {/* Right Actions - Occupies right space */}
      <div className="flex-1 flex justify-end">
        <div className="hidden lg:flex items-center gap-4">
          <a 
            href="tel:4805550103" 
            className="px-6 py-2.5 border border-primary/20 text-primary rounded-lg text-sm font-medium hover:bg-primary/5 transition-colors whitespace-nowrap"
          >
            (480) 555-0103
          </a>
          <button className="bg-primary text-white px-6 py-2.5 rounded-lg text-sm font-medium flex items-center gap-2 hover:bg-primary/90 transition-all shadow-lg shadow-primary/10 whitespace-nowrap">
            Request Consultation
            <ArrowUpRight size={18} />
          </button>
        </div>

        {/* Mobile Menu Toggle */}
        <button 
          className="lg:hidden text-primary p-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 w-full bg-white shadow-xl py-8 px-6 lg:hidden flex flex-col gap-6"
          >
            {menuItems.map((item) => (
              <Link
                key={item.name}
                href="#"
                className="text-lg font-medium text-text-dark border-b border-gray-100 pb-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <div className="flex flex-col gap-4 pt-4">
              <a 
                href="tel:4805550103" 
                className="w-full py-3 border border-primary text-primary rounded-md text-center font-medium"
              >
                (480) 555-0103
              </a>
              <button className="w-full bg-primary text-white py-3 rounded-md font-medium flex items-center justify-center gap-2">
                Request a Consultation
                <ArrowUpRight size={16} />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
