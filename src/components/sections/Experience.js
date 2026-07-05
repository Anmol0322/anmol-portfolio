import { EXPERIENCE } from "@/data/portfolio";
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export default function Experience() {
  return (
    <motion.section
      id="experience"
      data-testid="experience-section"
      className="py-24 md:py-32 border-t"
      style={{ borderColor: "var(--border)" }}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
    >
      <div className="max-w-[1400px] mx-auto px-6 md:px-10">
        <div className="mb-12">
          <p className="section-label">[ 03 ] Work</p>
          <h2 className="font-display text-5xl md:text-6xl mt-4 text-white">
            Experience<span style={{ color: "var(--accent)" }}>.</span>
          </h2>
        </div>

        <motion.div variants={fadeUp} className="border" style={{ borderColor: "var(--border)" }}>
          {EXPERIENCE.map((exp, idx) => (
            <div
              key={idx}
              data-testid={`experience-item-${idx}`}
              className="grid grid-cols-1 lg:grid-cols-12 gap-6 p-6 md:p-10"
            >
              <div className="lg:col-span-3">
                <p className="font-mono-tech text-[10px] text-[#878787]">{exp.period}</p>
                <h3 className="font-display text-2xl md:text-3xl text-white mt-3">{exp.company}</h3>
                <p className="font-mono-tech text-[11px] mt-2" style={{ color: "var(--accent)" }}>
                  {exp.role}
                </p>
                {exp.companyDesc && (
                  <p className="font-body text-xs text-[#878787] mt-3 leading-relaxed">
                    {exp.companyDesc}
                  </p>
                )}
              </div>

              <div className="lg:col-span-9 lg:border-l lg:pl-10" style={{ borderColor: "var(--border)" }}>
                <ul className="space-y-3">
                  {exp.bullets.map((b, i) => (
                    <li key={i} className="flex gap-3 items-start font-body text-[#d5d5d5] text-sm md:text-base leading-relaxed">
                      <span className="font-mono-tech text-[10px] mt-1.5" style={{ color: "var(--accent)" }}>
                        ›
                      </span>
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
                <div className="flex flex-wrap gap-2 mt-6">
                  {exp.stack.map((t) => (
                    <span
                      key={t}
                      className="font-mono-tech text-[10px] border px-2.5 py-1 text-white"
                      style={{ borderColor: "var(--border)" }}
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
}
