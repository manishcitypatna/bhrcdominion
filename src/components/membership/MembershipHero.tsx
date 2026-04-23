"use client";

export default function MembershipHero() {
    return (
        <section className="pt-[140px] pb-[80px] text-center">
            <div className="container-custom flex flex-col items-center gap-6">
                <h1 className="text-primary text-[36px] md:text-[64px] leading-[120%] tracking-tight">
                    Choose Your Level of Care
                </h1>

                <p className="text-primary/80 max-w-[420px] text-sm md:text-base px-4">
                    Every plan includes unlimited access to our care team and member-only privileges.
                </p>
            </div>
        </section>
    );
}