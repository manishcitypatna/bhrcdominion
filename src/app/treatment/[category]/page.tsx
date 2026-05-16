"use client";

import { useParams } from "next/navigation";
import { categories } from "@/data/categories";
import { treatments } from "@/data/treatments";

import CategoryHero from "@/components/treatment/category/CategoryHero";
import TreatmentGrid from "@/components/treatment/category/TreatmentGrid";
import CTA from "@/components/sections/cta";

export default function CategoryPage() {
  const params = useParams();
  const categorySlug = params.category as string;

  const category = categories.find(c => c.slug === categorySlug);
  const categoryTreatments = treatments.find(t => t.slug === categorySlug);

  if (!category || !categoryTreatments) {
    return <div className="p-20 text-center">Not Found</div>;
  }

  return (
    <main className="relative bg-bg-light min-h-screen overflow-x-hidden">

      <CategoryHero
        title={category.title}
        description={category.description}
      />

      <TreatmentGrid
        items={categoryTreatments.items}
        categorySlug={categorySlug}
      />

      <CTA />

    </main>
  );
}