"use client";

import { useState, useMemo } from "react";
import { notFound } from "next/navigation";
import { treatmentsData } from "@/data/treatmentsCategory";

import Hero from "@/components/treatments/treatmentsCate_Hero";
import BrandMarquee from "@/components/treatments/treatmentsCate_BrandMarquee";
import DualMenu from "@/components/treatments/treatmentsCate_DualMenu";
import Breadcrumb from "@/components/treatments/treatmentsCate_Breadcrumb";
import ServiceSection from "@/components/treatments/treatmentsCate_ServiceSection";
import CTA from "@/components/treatments/treatmentsCate_CTA";

export default function DynamicTreatmentsCategoryPage({
  params,
}: {
  params: { slug: string };
}) {
  const data = (treatmentsData as Record<string, any>)[params.slug];

  // Fallback or 404 for non-existent slugs
  if (!data) {
    return notFound();
  }

  // Set default active category based on data
  const defaultCategory = data.categories[0]?.name || "";
  const [activeCategory, setActiveCategory] = useState(defaultCategory);
  const [activeType, setActiveType] = useState("All");

  // Update activeCategory when slug changes
  useMemo(() => {
    setActiveCategory(data.categories[0]?.name || "");
    setActiveType("All");
  }, [params.slug, data.categories]);

  // Get current category data
  const currentCategoryData = useMemo(() => 
    data.categories.find((cat: any) => cat.name === activeCategory),
    [activeCategory, data.categories]
  );

  // Filter services based on activeType
  const filteredServices = useMemo(() => {
    if (!currentCategoryData) return [];
    if (activeType === "All") return currentCategoryData.services;
    return currentCategoryData.services.filter((s: any) => s.type.includes(activeType));
  }, [currentCategoryData, activeType]);

  return (
    <main className="w-full pt-[103px] md:pt-[119px] lg:pt-[139px]">
      <Hero data={{ ...data.hero, title: data.title, description: data.description }} />
      <BrandMarquee brands={data.brands} />
      <Breadcrumb category={activeCategory} type={activeType} />

      <DualMenu
        categories={data.categories}
        activeCategory={activeCategory}
        setActiveCategory={setActiveCategory}
        activeType={activeType}
        setActiveType={setActiveType}
      />

      <ServiceSection services={filteredServices} />

      <CTA />
    </main>
  );
}
