"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, ChevronDown, ArrowUpRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import MegaMenu from "@/components/navigation/MegaMenu";

const menuItems = [
  { name: "Treatment", hasDropdown: true },
  { name: "About Us", hasDropdown: false },
  { name: "Contact Us", hasDropdown: false },
];

export default function Navbar() {
  const [opacity, setOpacity] = useState(0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const maxOpacity = 0.95; // More solid for visibility
      const currentOpacity = Math.min(maxOpacity, (scrollY / 100) * maxOpacity);
      setOpacity(currentOpacity);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="relative" onMouseLeave={() => setActiveMenu(null)}>
      <nav
        className={cn(
          "fixed top-[31px] left-0 w-full z-[999] transition-all duration-300 flex items-center justify-between",
          "h-[72px] md:h-[88px] lg:h-[108px]",
          "px-6 md:px-20 xl:px-[240px]"
        )}
        style={{
          backgroundColor: `rgba(255, 255, 255, ${opacity})`,
          backdropFilter: opacity > 0 ? "blur(6px)" : "none",
          WebkitBackdropFilter: opacity > 0 ? "blur(8px)" : "none"
        }}
      >
        {/* Logo */}
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

        {/* Menu */}
        <div className="hidden lg:flex items-center justify-center gap-8 mx-4">
          {menuItems.map((item) => {

            let href = "#";
            if (item.name === "Treatment") href = "/treatment";
            else if (item.name === "About Us") href = "/about";
            else if (item.name === "Contact Us") href = "/contact";

            return (
              <div
                key={item.name}
                className="relative"
                onMouseEnter={() => {
                  if (item.name === "Treatment") setActiveMenu("treatment");
                  else setActiveMenu(null);
                }}
              >
                <Link
                  href={href}
                  className="flex items-center gap-1 text-[15px] font-medium whitespace-nowrap"
                  style={{ color: "rgba(26, 52, 77, 0.65)" }}
                >
                  {item.name}
                  {item.hasDropdown && <ChevronDown size={14} className="opacity-50" />}
                </Link>

                {/* MEGA MENU */}
                {activeMenu === "treatment" && item.name === "Treatment" && (
                  <MegaMenu type="treatment" />
                )}
              </div>
            );
          })}
        </div>

        {/* Right side */}
        <div className="flex-1 flex justify-end">
          <div className="hidden lg:flex items-center gap-4">

            <a
              href="tel:4805550103"
              className="px-6 py-2.5 border border-primary/20 text-primary rounded-lg text-sm font-medium hover:bg-primary/5 transition-colors whitespace-nowrap"
            >
              (210)-888-8889
            </a>

            <Link
              href="/consultation"
              className="bg-primary text-white px-6 py-2.5 rounded-lg text-sm font-medium flex items-center gap-2 hover:bg-primary/90 transition-all shadow-lg shadow-primary/10 whitespace-nowrap"
            >
              Request Consultation
              <ArrowUpRight size={18} />
            </Link>

          </div>

          {/* Mobile toggle */}
          <button
            className="lg:hidden text-primary p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="absolute top-full left-0 w-full bg-white shadow-xl py-8 px-6 lg:hidden flex flex-col gap-6"
            >
              {menuItems.map((item) => {

                let href = "#";
                if (item.name === "Treatment") href = "/treatment";
                else if (item.name === "About Us") href = "/about";
                else if (item.name === "Contact Us") href = "/contact";

                return (
                  <Link
                    key={item.name}
                    href={href}
                    className="text-lg font-medium text-text-dark border-b border-gray-100 pb-2"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                );
              })}

              <div className="flex flex-col gap-4 pt-4">

                <a
                  href="tel:4805550103"
                  className="w-full py-3 border border-primary text-primary rounded-md text-center font-medium"
                >
                  (480) 555-0103
                </a>

                <Link
                  href="/consultation"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="w-full bg-primary text-white py-3 rounded-md font-medium flex items-center justify-center gap-2"
                >
                  Request a Consultation
                  <ArrowUpRight size={16} />
                </Link>

              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </div>
  );
}