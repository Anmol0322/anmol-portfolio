import { PROFILE } from "@/data/portfolio";

export default function EducationContact() {
  return (
    <section
      id="contact"
      data-testid="contact-section"
      className="py-24 md:py-32 border-t"
      style={{ borderColor: "var(--border)" }}
    >
      <div className="max-w-[1400px] mx-auto px-6 md:px-10">

        {/* Contact */}
        <p className="section-label">[ 05 ] Contact</p>
        <h2
          data-testid="contact-heading"
          className="font-display text-6xl md:text-8xl lg:text-9xl text-white mt-4 leading-[0.85]"
        >
          LET&apos;S <br />
          <span style={{ color: "var(--accent)" }}>CONNECT.</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-12">
          <div>
            <p className="font-mono-tech text-[10px] text-[#878787]">Email</p>
            <a
              href={`mailto:${PROFILE.email}`}
              data-testid="contact-email-link"
              className="font-display text-xl md:text-2xl text-white link-underline break-all"
            >
              {PROFILE.email}
            </a>
          </div>
          <div>
            <p className="font-mono-tech text-[10px] text-[#878787]">Phone</p>
            <a
              href={`tel:${PROFILE.phone.replace(/\s+/g, "")}`}
              data-testid="contact-phone-link"
              className="font-display text-xl md:text-2xl text-white link-underline"
            >
              {PROFILE.phone}
            </a>
          </div>
          <div>
            <p className="font-mono-tech text-[10px] text-[#878787]">LinkedIn</p>
            <a
              href={PROFILE.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              data-testid="contact-linkedin-link"
              className="font-display text-xl md:text-2xl text-white link-underline"
            >
              /{PROFILE.linkedinHandle} ↗
            </a>
          </div>
          <div>
            <p className="font-mono-tech text-[10px] text-[#878787]">GitHub</p>
            <a
              href={PROFILE.github}
              target="_blank"
              rel="noopener noreferrer"
              data-testid="contact-github-link"
              className="font-display text-xl md:text-2xl text-white link-underline"
            >
              /{PROFILE.githubHandle} ↗
            </a>
          </div>
          <div>
            <p className="font-mono-tech text-[10px] text-[#878787]">Location</p>
            <p className="font-display text-xl md:text-2xl text-white">{PROFILE.location}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
