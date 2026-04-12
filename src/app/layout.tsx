import type { Metadata } from "next";
import { Inter, Figtree, DM_Serif_Display } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";

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
  src: "../../public/fonts/Bilagike.woff2",
  variable: "--font-bilagike",
  display: "swap",
  fallback: ["DM Serif Display", "serif"],
});

export const metadata: Metadata = {
  title: "Beverly Hills Rejuvenation Center",
  description: "Experience the Difference",
  icons: {
    icon: "/icons/fevicone.png",
    shortcut: "/icons/fevicone.png",
    apple: "/icons/fevicone.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${figtree.variable} ${dmSerif.variable} ${bilagike.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
