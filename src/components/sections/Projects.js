import { PROJECTS } from "@/data/portfolio";
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export default function Projects() {
  return (
    <motion.section
      id="projects"
      data-testid="projects-section"
      className="py-24 md:py-32 border-t"
      style={{ borderColor: "var(--border)" }}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={{ visible: { transition: { staggerChildren: 0.15 } } }}
    >      <div className="max-w-[1400px] mx-auto px-6 md:px-10">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
          <div>
            <p className="section-label">[ 04 ] Selected Work</p>
            <h2 className="font-display text-5xl md:text-6xl mt-4 text-white">
              Projects<span style={{ color: "var(--accent)" }}>.</span>
            </h2>
          </div>

        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-0 border-t border-l" style={{ borderColor: "var(--border)" }}>
          {PROJECTS.map((p, idx) => (
            <motion.article
              key={p.code}
              variants={fadeUp}
              data-testid={`project-card-${idx}`}
              className="border-r border-b group flex flex-col"
              style={{ borderColor: "var(--border)" }}
            >
              <div className="relative aspect-[4/3] overflow-hidden border-b" style={{ borderColor: "var(--border)" }}>
                <img
                  src={p.image}
                  alt={p.title}
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500 group-hover:scale-105"
                />
                <span
                  className="absolute top-3 left-3 font-mono-tech text-[10px] px-2 py-1 bg-black text-white border"
                  style={{ borderColor: "var(--border)" }}
                >
                  {p.code}
                </span>
              </div>

              <div className="p-6 flex-1 flex flex-col">
                <p className="font-mono-tech text-[9px] text-[#878787] mb-2">{p.type}</p>
                <h3 className="font-display text-2xl text-white leading-tight">{p.title}</h3>
                <p className="font-body text-sm text-[#bdbdbd] mt-3 leading-relaxed">{p.summary}</p>

                <div className="mt-4 pt-4 border-t" style={{ borderColor: "var(--border)" }}>
                  <p className="font-mono-tech text-[9px] text-[#878787]">Impact</p>
                  <p className="font-body text-xs text-[#d5d5d5] mt-1.5">{p.impact}</p>
                </div>

                {p.metrics && (
                  <div className="flex flex-wrap gap-2 mt-4">
                    {p.metrics.map((m) => (
                      <span
                        key={m}
                        className="font-mono-tech text-[9px] px-2 py-1 text-white"
                        style={{ background: "var(--accent)", opacity: 0.9 }}
                      >
                        {m}
                      </span>
                    ))}
                  </div>
                )}

                <div className="flex flex-wrap gap-1.5 mt-5">
                  {p.stack.map((t) => (
                    <span
                      key={t}
                      className="font-mono-tech text-[9px] border px-2 py-0.5 text-white"
                      style={{ borderColor: "var(--border)" }}
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
