import { ScrollSection } from "@/components/ScrollSection";
import { ABOUT, STATS } from "@/lib/constants";

export function About() {
  return (
    <ScrollSection id="about" className="bg-[#F8F9FA] py-24">
      <div className="mx-auto grid max-w-6xl gap-14 px-6 lg:grid-cols-2 lg:items-center">
        <div>
          <p className="font-heading text-xs font-bold uppercase tracking-[0.2em] text-[#D97706]">
            {ABOUT.label}
          </p>
          <h2 className="mt-3 font-heading text-3xl font-bold uppercase tracking-wide text-[#1F1F1F] sm:text-4xl">
            {ABOUT.heading}
          </h2>
          <p className="mt-6 font-body text-base leading-[1.7] text-[#5C6770]">
            {ABOUT.body}
          </p>
        </div>

        <div className="grid grid-cols-2 gap-4">
          {STATS.map((s) => (
            <div
              key={s.label}
              className="rounded-2xl border border-[#E2E4E6] bg-white p-6 shadow-sm"
            >
              <p className="font-heading text-3xl font-bold text-[#D97706] sm:text-4xl">
                {s.value}
              </p>
              <p className="mt-2 font-body text-sm leading-snug text-[#5C6770]">
                {s.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </ScrollSection>
  );
}
