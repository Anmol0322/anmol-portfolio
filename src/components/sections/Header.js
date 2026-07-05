import { useState } from "react";
import { PROFILE } from "@/data/portfolio";
import { motion, AnimatePresence } from "framer-motion";

const NAV = [
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "contact", label: "Contact" },
];

export default function Header({ activeSection }) {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleClick = (id) => (e) => {
    e.preventDefault();
    setMobileOpen(false);
    setTimeout(() => {
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }, 350);
  };

  return (
    <header
      data-testid="site-header"
      className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl bg-black/60 border-b"
      style={{ borderColor: "var(--border)" }}
    >
      <div className="max-w-[1400px] mx-auto flex items-center justify-between px-6 md:px-10 h-16">
        <a
          href="#home"
          onClick={handleClick("home")}
          data-testid="header-logo"
          className="font-mono-tech text-xs md:text-sm text-white"
        >
          {PROFILE.handle}
        </a>

        <nav className="hidden md:flex items-center gap-7">
          {NAV.map((n) => (
            <a
              key={n.id}
              href={`#${n.id}`}
              onClick={handleClick(n.id)}
              data-testid={`nav-link-${n.id}`}
              className={`font-mono-tech text-[11px] link-underline transition-colors ${
                activeSection === n.id ? "text-white" : "text-[#878787] hover:text-white"
              }`}
            >
              {n.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href={PROFILE.resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            data-testid="header-resume-btn"
            className="btn-brutal btn-brutal-primary !py-2 !px-4 text-[10px]"
          >
            Resume ↗
          </a>

          {/* Mobile hamburger */}
          <button
            className="md:hidden flex flex-col justify-center items-center w-8 h-8 gap-1.5"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            <span
              className={`block w-5 h-[1.5px] bg-white transition-transform duration-300 ${
                mobileOpen ? "rotate-45 translate-y-[4.5px]" : ""
              }`}
            />
            <span
              className={`block w-5 h-[1.5px] bg-white transition-opacity duration-300 ${
                mobileOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`block w-5 h-[1.5px] bg-white transition-transform duration-300 ${
                mobileOpen ? "-rotate-45 -translate-y-[4.5px]" : ""
              }`}
            />
          </button>
        </div>
      </div>

      {/* Mobile nav overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.nav
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden border-t overflow-hidden bg-black/95 backdrop-blur-xl"
            style={{ borderColor: "var(--border)" }}
          >
            <div className="flex flex-col px-6 py-6 gap-5">
              {NAV.map((n) => (
                <a
                  key={n.id}
                  href={`#${n.id}`}
                  onClick={handleClick(n.id)}
                  className={`font-mono-tech text-sm transition-colors ${
                    activeSection === n.id ? "text-white" : "text-[#878787]"
                  }`}
                >
                  {n.label}
                </a>
              ))}
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
