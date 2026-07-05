import { PROFILE, EDUCATION } from "@/data/portfolio";

export default function EducationContact() {
  return (
    <section
      id="contact"
      data-testid="contact-section"
      className="py-24 md:py-32 border-t"
      style={{ borderColor: "var(--border)" }}
    >
      <div className="max-w-[1400px] mx-auto px-6 md:px-10">

        {/* Education */}
        <div className="mb-20" data-testid="education-block">
          <p className="section-label">[ 05 ] Education</p>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mt-4 border" style={{ borderColor: "var(--border)" }}>
            <div className="lg:col-span-8 p-6 md:p-8 lg:border-r" style={{ borderColor: "var(--border)" }}>
              <h3 className="font-display text-3xl md:text-4xl text-white">{EDUCATION.degree}</h3>
              <p className="font-body text-[#bdbdbd] mt-3">{EDUCATION.institution}</p>
            </div>
            <div className="lg:col-span-4 p-6 md:p-8 flex flex-col justify-center">
              <p className="font-mono-tech text-[10px] text-[#878787]">CGPA</p>
              <p className="font-display text-5xl md:text-6xl text-white mt-2" style={{ color: "var(--accent)" }}>
                {EDUCATION.cgpa.split(" ")[0]}
              </p>
              <p className="font-mono-tech text-[10px] text-[#878787] mt-1">/ 10.00</p>
            </div>
          </div>
        </div>

        {/* Contact */}
        <p className="section-label">[ 06 ] Contact</p>
        <h2
          data-testid="contact-heading"
          className="font-display text-6xl md:text-8xl lg:text-9xl text-white mt-4 leading-[0.85]"
        >
          LET&apos;S <br />
          <span style={{ color: "var(--accent)" }}>BUILD.</span>
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
