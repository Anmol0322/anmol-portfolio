import { SKILLS } from "@/data/portfolio";
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

export default function Skills() {
  return (
    <motion.section
      id="skills"
      data-testid="skills-section"
      className="py-24 md:py-32 border-t"
      style={{ borderColor: "var(--border)" }}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={{ visible: { transition: { staggerChildren: 0.08 } } }}
    >
      <div className="max-w-[1400px] mx-auto px-6 md:px-10">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
          <div>
            <p className="section-label">[ 02 ] Stack</p>
            <h2 className="font-display text-5xl md:text-6xl mt-4 text-white">
              Tools<span style={{ color: "var(--accent)" }}>.</span>
            </h2>
          </div>
          <p className="font-body text-[#878787] max-w-md text-sm">
            A working set sharpened on production. Not exhaustive — just what I reach for daily.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 border-t border-l" style={{ borderColor: "var(--border)" }}>
          {SKILLS.map((s, idx) => (
            <motion.div
              key={s.group}
              variants={fadeUp}
              data-testid={`skill-card-${idx}`}
              className="border-r border-b p-6 md:p-8 flex flex-col gap-5 min-h-[200px]"
              style={{ borderColor: "var(--border)" }}
            >
              <div className="flex items-center justify-between">
                <p className="font-mono-tech text-[10px] text-[#878787]">
                  {String(idx + 1).padStart(2, "0")} / {s.group}
                </p>
                <span className="font-mono-tech text-[10px]" style={{ color: "var(--accent)" }}>●</span>
              </div>
              <div className="flex flex-wrap gap-2 mt-auto">
                {s.items.map((item) => (
                  <span
                    key={item}
                    className="font-mono-tech text-[10px] border px-2.5 py-1 text-white"
                    style={{ borderColor: "var(--border)" }}
                  >
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
