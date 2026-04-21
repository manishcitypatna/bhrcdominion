export default function FacialServicesPage() {
  return (
    <div className="bg-bg-light min-h-screen pt-[120px] pb-[80px]">
      <div className="max-w-[1440px] mx-auto px-[clamp(20px,8vw,240px)]">
        <div className="bg-white rounded-[12px] p-[40px] md:p-[60px] shadow-sm border border-gray-100">
          <h1 className="text-primary font-heading text-[clamp(32px,5vw,64px)] leading-[1.1] mb-6">
            FACIAL SERVICES
          </h1>
          <p className="text-xl text-primary/70 mb-8">
            Expert facials and peels tailored to your unique skin type and goals.
          </p>
          <div className="p-8 bg-bg-light rounded-[8px] border border-primary/10">
            <p className="text-primary/70">From Hydrafacial to Chemical Peels, experience the best in skin rejuvenation.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
