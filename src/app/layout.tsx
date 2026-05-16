import type { Metadata } from "next";
import { Inter, Figtree, DM_Serif_Display } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import TopStrip from "@/components/layout/TopStrip";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const figtree = Figtree({
  subsets: ["latin"],
  variable: "--font-figtree",
  display: "swap",
});

const dmSerif = DM_Serif_Display({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-dm-serif",
  display: "swap",
});

const bilagike = localFont({
  src: [
    {
      path: "../fonts/Bilagike.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../fonts/Bilagike.otf",
      weight: "400",
      style: "normal",
    },
  ],
  variable: "--font-bilagike",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Beverly Hills Rejuvenation Center",
  description: "Experience the Difference",
  icons: {
    icon: "/icons/fevicone.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`
          ${inter.variable} 
          ${figtree.variable} 
          ${dmSerif.variable} 
          ${bilagike.variable} 
          antialiased
        `}
      >
        <header className="sticky top-0 z-[999] w-full bg-white">
          <TopStrip />
          <Navbar />
        </header>
        {children}
        <Footer />
      </body>
    </html>
  );
}