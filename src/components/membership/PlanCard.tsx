import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

type Plan = {
    title: string;
    price: number;
    features: string[];
    highlight?: string;
    theme?: "light" | "dark";
};

export default function PlanCard({
    title,
    price,
    features,
    highlight,
    theme = "light",
}: Plan) {
    const isDark = theme === "dark";

    return (
        <div
            className={`
        relative flex flex-col justify-between rounded-lg p-8 w-full max-w-[420px]
        ${isDark ? "bg-[#1A344D] text-white" : "bg-white text-primary"}
      `}
        >
            {/* Badge */}
            {highlight && (
                <div className="absolute top-0 right-0 bg-gradient-to-b from-[#1A344D] to-[#3C79B3] text-white text-xs px-3 py-1 rounded-bl">
                    {highlight}
                </div>
            )}

            {/* Content */}
            <div className="flex flex-col gap-6">
                <div>
                    <h3 className="text-[28px]">{title}</h3>

                    <p className="text-[36px] mt-2">
                        ${price}
                        <span className={`text-sm ml-1 ${isDark ? "text-white/50" : "text-[#7899AD]"}`}>
                            /month
                        </span>
                    </p>
                </div>

                <div className="border-t border-[#7899AD]/40" />

                <ul className="flex flex-col gap-3 text-sm">
                    {features.map((item, i) => (
                        <li key={i} className="flex gap-2">
                            <span>✔</span>
                            <span>{item}</span>
                        </li>
                    ))}
                </ul>
            </div>

            {/* CTA */}
            <a
                href="https://beverlyhillsrejuvenationrewards.repeatmd.app/signin?utm_source=ig&utm_medium=social&utm_content=link_in_bio&fbclid=PAZXh0bgNhZW0CMTEAc3J0YwZhcHBfaWQMMjU2MjgxMDQwNTU4AAGnQ7OruR28s819Pye5Qu-2p4nH7CuC-wuCYYtT1RiB3LbK11KvA8sg5bDMNd4_aem_9vw3ZXM6e3cwNxhoz5oogA"
                target="_blank"
                rel="noopener noreferrer"
            >
                <button
                    className={`
      mt-6 w-full h-12 rounded-md border flex items-center justify-center gap-2
      ${isDark ? "bg-[#EBF5FF] text-[#1A344D] border-[#EBF5FF]" : "border-[#2B5C8A] text-[#2B5C8A]"}
    `}
                >
                    Sign Up Now
                    <ArrowUpRight size={18} />
                </button>
            </a>
        </div>
    );
}