import MembershipHero from "@/components/membership/MembershipHero";
import MembershipPlans from "@/components/membership/MembershipPlans";
import MembershipCTA from "@/components/membership/MembershipCTA";
import MembershipFAQ from "@/components/membership/MembershipFAQ";

export default function MembershipPage() {
    return (
        <main className="bg-[#EBF5FF]">
            <MembershipHero />
            <MembershipPlans />
            <MembershipFAQ />
            <MembershipCTA />
        </main>
    );
}