import PlanCard from "./PlanCard";

export default function MembershipPlans() {
  return (
    <section className="pb-[80px] md:pb-[120px]">
      
      <div className="
        container-custom 
        flex flex-col md:flex-row 
        gap-6 md:gap-8 
        items-center
      ">

        <PlanCard
          title="Beauty Club"
          price={149}
          highlight="Most Popular"
          features={[
            "Get $199 value every month",
            "Use on any med spa services",
            "Includes fillers, Morpheus8 & more",
            "Unused balance rolls over monthly",
            "Flexible usage across months",
          ]}
        />

        <PlanCard
          title="Beauty Club Plus"
          price={199}
          theme="dark"
          highlight="Best Value"
          features={[
            "Higher monthly treatment value",
            "Priority booking access",
            "Exclusive member-only perks",
            "Birthday & seasonal offers",
            "Bonus skincare benefits",
          ]}
        />
      </div>
    </section>
  );
}