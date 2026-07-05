import { PROFILE } from "@/data/portfolio";
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export default function About() {
  return (
    <motion.section
      id="about"
      data-testid="about-section"
      className="py-24 md:py-32"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={{ visible: { transition: { staggerChildren: 0.15 } } }}
    >
      <div className="max-w-[1400px] mx-auto px-6 md:px-10">
        {/* Section header */}
        <motion.div variants={fadeUp} className="mb-12">
          <p className="section-label" data-testid="about-label">[ 01 ] About</p>
          <h2 className="font-display text-5xl md:text-7xl mt-4 text-white">
            I build systems that<br />
            <span style={{ color: "var(--accent)" }}>survive scale.</span>
          </h2>
        </motion.div>

        {/* Main content grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* About text */}
          <motion.div
            variants={fadeUp}
            className="lg:col-span-7 border p-8 md:p-10"
            style={{ borderColor: "var(--border)" }}
          >
            <p
              data-testid="about-paragraph"
              className="font-body text-base md:text-lg text-[#d5d5d5] leading-relaxed"
            >
              {PROFILE.about}
            </p>
            <div className="divider-h my-6" />
            <div className="flex flex-wrap gap-6">
              <div>
                <p className="font-mono-tech text-[9px] text-[#878787]">FOCUS</p>
                <p className="font-body text-sm text-white mt-1">Backend-heavy Full Stack</p>
              </div>
              <div>
                <p className="font-mono-tech text-[9px] text-[#878787]">APPROACH</p>
                <p className="font-body text-sm text-white mt-1">Ship fast, break nothing</p>
              </div>
              <div>
                <p className="font-mono-tech text-[9px] text-[#878787]">PRINCIPLE</p>
                <p className="font-body text-sm text-white mt-1">Clean code > clever code</p>
              </div>
            </div>
          </motion.div>

          {/* Stats grid */}
          <motion.div variants={fadeUp} className="lg:col-span-5">
            <div className="grid grid-cols-2 gap-0 border h-full" style={{ borderColor: "var(--border)" }}>
              <div className="p-6 md:p-8 border-r border-b flex flex-col justify-center" style={{ borderColor: "var(--border)" }}>
                <p className="font-mono-tech text-[9px] text-[#878787]">YEARS</p>
                <p className="font-display text-5xl text-white mt-2">{PROFILE.yearsExperience}</p>
                <p className="font-mono-tech text-[9px] text-[#878787] mt-1">SHIPPING CODE</p>
              </div>
              <div className="p-6 md:p-8 border-b flex flex-col justify-center" style={{ borderColor: "var(--border)" }}>
                <p className="font-mono-tech text-[9px] text-[#878787]">DOMAIN</p>
                <p className="font-display text-2xl text-white mt-2">FinTech</p>
                <p className="font-display text-2xl" style={{ color: "var(--accent)" }}>/ CRM</p>
              </div>
              <div className="p-6 md:p-8 border-r flex flex-col justify-center" style={{ borderColor: "var(--border)" }}>
                <p className="font-mono-tech text-[9px] text-[#878787]">PRIMARY STACK</p>
                <p className="font-body text-sm text-white mt-2 leading-relaxed">Node · NestJS · PostgreSQL · AWS · C#</p>
              </div>
              <div className="p-6 md:p-8 flex flex-col justify-center">
                <p className="font-mono-tech text-[9px] text-[#878787]">BASED IN</p>
                <p className="font-display text-xl text-white mt-2">Vadodara</p>
                <p className="font-mono-tech text-[9px] text-[#878787] mt-1">GUJARAT, IN</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}
