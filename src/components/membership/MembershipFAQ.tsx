import FAQItem from "./FAQItem";
import { membershipFaqs } from "@/data/membership_faq";

export default function MembershipFAQ() {
  return (
    <section className="py-[120px] bg-[#EBF5FF]">
      <div className="container-custom">
        <h2 className="text-[48px] text-primary mb-8">
          Frequently Asked Questions
        </h2>

        <div>
          {membershipFaqs.map((faq, i) => (
            <FAQItem
              key={i}
              question={faq.question}
              answer={faq.answer}
            />
          ))}
        </div>
      </div>
    </section>
  );
}