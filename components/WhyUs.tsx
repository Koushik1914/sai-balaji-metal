import { ScrollSection } from "@/components/ScrollSection";
import { WHY_US } from "@/lib/constants";

export function WhyUs() {
  return (
    <ScrollSection id="why-us" className="bg-[#1F1F1F] py-24 text-white">
      <div className="mx-auto max-w-6xl px-6">
        <p className="text-center font-heading text-xs font-bold uppercase tracking-[0.2em] text-[#D97706]">
          Why Choose Us
        </p>
        <h2 className="mt-3 text-center font-heading text-3xl font-bold uppercase tracking-wide sm:text-4xl">
          Quality You Can Build On
        </h2>

        <div className="mt-14 grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {WHY_US.map((item) => (
            <div key={item.title} className="flex flex-col gap-3">
              <span className="text-2xl" aria-hidden>
                {item.emoji}
              </span>
              <h3 className="font-heading text-lg font-semibold">
                {item.title}
              </h3>
              <p className="font-body text-sm leading-[1.7] text-[#C8CED4]">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </ScrollSection>
  );
}
