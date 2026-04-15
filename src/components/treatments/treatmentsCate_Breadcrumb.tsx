"use client";

import Link from "next/link";

interface BreadcrumbProps {
  category: string;
  type: string;
}

export default function Breadcrumb({ category, type }: BreadcrumbProps) {
  return (
    <div className="bg-white border-b border-gray-50">
      <div className="max-w-[1440px] mx-auto px-6 md:px-20 xl:px-[240px] py-4">
        <nav className="flex items-center gap-2 text-[12px] uppercase tracking-widest font-bold text-primary/30">
          <Link href="/" className="hover:text-primary transition-colors">Home</Link>
          <span>/</span>
          <Link href="/treatments" className="hover:text-primary transition-colors">Treatments</Link>
          <span>/</span>
          <span className="text-primary/60">{category}</span>
          {type !== "All" && (
            <>
              <span>/</span>
              <span className="text-primary">{type}</span>
            </>
          )}
        </nav>
      </div>
    </div>
  );
}
