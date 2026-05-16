import Footer from "@/components/layout/Footer";
import ConsultationFormSection from "@/components/consultation/ConsultationFormSection";

export default function ConsultationPage() {
  return (
    <main className="relative bg-white min-h-screen overflow-x-hidden">

      {/* 🔥 PAGE HEADER (INLINE, SAME AS TREATMENTS STYLE) */}
      <section className="w-full py-[64px] md:py-[80px]">

        <div className="max-w-[1440px] mx-auto px-[clamp(20px,8vw,240px)]">

          <div className="flex justify-center text-center">

            <h1 className="
              text-primary 
              font-heading
              text-[clamp(48px,6vw,96px)] 
              leading-[1.05] 
              tracking-[1px]
            ">
              Consultation Form
            </h1>

          </div>

        </div>

      </section>

      <ConsultationFormSection />

    </main>
  );
}