import { notFound } from "next/navigation";

export default function SubTreatmentPage({
  params,
}: {
  params: { category: string; slug: string };
}) {
  const { category, slug } = params;

  // Simple formatting for display
  const displayCategory = category.replace(/-/g, " ").toUpperCase();
  const displaySlug = slug.replace(/-/g, " ").replace(/\b\w/g, (l) => l.toUpperCase());

  return (
    <div className="bg-bg-light min-h-screen pt-[120px] pb-[80px]">
      <div className="max-w-[1440px] mx-auto px-[clamp(20px,8vw,240px)]">
        <div className="bg-white rounded-[12px] p-[40px] md:p-[60px] shadow-sm border border-gray-100">
          <nav className="flex gap-2 text-sm text-primary/50 mb-8">
            <span>Treatment</span>
            <span>/</span>
            <span className="capitalize">{displayCategory.toLowerCase()}</span>
            <span>/</span>
            <span className="text-primary font-medium">{displaySlug}</span>
          </nav>
          
          <h1 className="text-primary font-heading text-[clamp(32px,5vw,64px)] leading-[1.1] mb-6">
            {displaySlug}
          </h1>
          
          <div className="prose prose-lg max-w-none text-primary/70">
            <p className="text-xl mb-8">
              Experience the best in {displayCategory.toLowerCase()} with our professional {displaySlug} treatments.
            </p>
            <p>
              This is a dedicated page for {displaySlug}. We are currently updating this page with detailed information about the procedure, benefits, and what to expect during your visit.
            </p>
            <p>
              At Beverly Hills Rejuvenation Center, we use the latest technology and expert techniques to ensure you receive the highest quality care and natural-looking results.
            </p>
          </div>

          <div className="mt-12 p-8 bg-bg-light rounded-[8px] border border-primary/10">
            <h3 className="text-primary font-semibold text-lg mb-4">Interested in {displaySlug}?</h3>
            <p className="text-primary/70 mb-6">Schedule a consultation with our specialists to learn if this treatment is right for you.</p>
            <button className="bg-primary text-white px-8 py-3 rounded-lg font-medium hover:bg-primary/90 transition-all">
              Book a Consultation
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
