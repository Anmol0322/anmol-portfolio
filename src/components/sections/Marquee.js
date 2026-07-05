import { MARQUEE_TECH } from "@/data/portfolio";

export default function Marquee() {
  const items = [...MARQUEE_TECH, ...MARQUEE_TECH];
  return (
    <section
      data-testid="marquee-section"
      className="border-y overflow-hidden no-scrollbar relative"
      style={{ borderColor: "var(--border)" }}
    >
      <div className="marquee-track py-5">
        {items.map((t, i) => (
          <span
            key={i}
            className="font-mono-tech text-xs px-8 inline-flex items-center gap-8 text-[#878787]"
          >
            {t}
            <span style={{ color: "var(--accent)" }}>///</span>
          </span>
        ))}
      </div>
    </section>
  );
}
