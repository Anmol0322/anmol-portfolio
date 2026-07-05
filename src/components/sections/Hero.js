import { PROFILE } from "@/data/portfolio";
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export default function Hero() {
  const scrollTo = (id) => () => {
    const el = document.getElementById(id);
    if (el) window.scrollTo({ top: el.offsetTop - 60, behavior: "smooth" });
  };

  return (
    <section
      id="home"
      data-testid="hero-section"
      className="relative pt-32 pb-24 md:pt-40 md:pb-32 noise"
    >
      <div className="absolute inset-0 grid-overlay opacity-60 pointer-events-none" />
      <div className="relative max-w-[1400px] mx-auto px-6 md:px-10">
        {/* meta row */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-12 md:mb-20">
          <span data-testid="hero-meta-location" className="font-mono-tech text-[10px] text-[#878787]">
            {PROFILE.location}
          </span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-end">
          {/* Headline */}
          <motion.div
            className="lg:col-span-8"
            initial="hidden"
            animate="visible"
            variants={{ visible: { transition: { staggerChildren: 0.15 } } }}
          >
            <motion.h1
              variants={fadeUp}
              data-testid="hero-title"
              className="font-display text-[14vw] md:text-[10vw] lg:text-[8.5vw] leading-[0.85] text-white"
            >
              FULL STACK <br />
              <span style={{ color: "var(--accent)" }}>DEVELOPER.</span>
            </motion.h1>

            <motion.p
              variants={fadeUp}
              data-testid="hero-tagline"
              className="font-body text-base md:text-lg text-[#bdbdbd] mt-6 max-w-2xl leading-relaxed"
            >
              {PROFILE.tagline}{" "}
              I architect robust APIs, microservices, and FinTech platforms that handle real traffic, real money, and real deadlines.
            </motion.p>

            <motion.div variants={fadeUp} className="flex flex-wrap items-center gap-4 mt-10">
              <button
                onClick={scrollTo("projects")}
                data-testid="hero-view-work-btn"
                className="btn-brutal btn-brutal-primary"
              >
                View Work →
              </button>
              <button
                onClick={scrollTo("contact")}
                data-testid="hero-contact-btn"
                className="btn-brutal"
              >
                Get in touch
              </button>
            </motion.div>
          </motion.div>

          {/* Portrait + data block */}
          <motion.div
            className="lg:col-span-4"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            <div
              data-testid="hero-portrait"
              className="border relative aspect-[4/5] overflow-hidden"
              style={{ borderColor: "var(--border)" }}
            >
              <img
                src={PROFILE.portrait}
                alt="Portrait"
                className="w-full h-full object-cover grayscale contrast-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-4 flex items-center justify-between">
                <span className="font-mono-tech text-[10px] text-white">{PROFILE.shortName}</span>
                <span className="font-mono-tech text-[10px]" style={{ color: "var(--accent)" }}>
                  ● AVAILABLE
                </span>
              </div>
            </div>

            {/* Data row */}
            <div className="grid grid-cols-2 border-t-0 border" style={{ borderColor: "var(--border)" }}>
              <div className="p-4 border-r" style={{ borderColor: "var(--border)" }}>
                <p className="font-mono-tech text-[9px] text-[#878787]">EXPERIENCE</p>
                <p className="font-display text-3xl mt-1 text-white">{PROFILE.yearsExperience}</p>
              </div>
              <div className="p-4">
                <p className="font-mono-tech text-[9px] text-[#878787]">PROJECTS</p>
                <p className="font-display text-3xl mt-1 text-white">7+</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
