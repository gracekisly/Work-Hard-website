import type { Metadata } from "next";
import Nav from "../_components/Nav";
import Footer from "../_components/Footer";

export const metadata: Metadata = {
  title: "Careers — Work Hard Company",
  description: "Work Hard Company is always looking for exceptional individuals who are ready to operate at the highest level.",
};

export default function CareersPage() {
  return (
    <>
      <Nav />
      <main>
        {/* ─── SECTION 5.1: HERO ─────────────────────────────────────────── */}
        <section
          className="relative min-h-[72vh] flex flex-col justify-center border-b border-border overflow-hidden"
          style={{
            background: "#07090C",
            backgroundImage:
              "radial-gradient(circle, rgba(197,169,122,0.07) 1px, transparent 1px)",
            backgroundSize: "28px 28px",
          }}
        >
          <div
            className="absolute inset-0 opacity-[0.15]"
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1541746972996-4e0b0f43e02a?w=1600&auto=format&fit=crop&q=80')",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />
          <div className="pointer-events-none absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-ink to-transparent" />
          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-ink to-transparent" />

          <div className="relative z-10 px-8 md:px-16 lg:px-24 max-w-screen-xl mx-auto w-full pt-40 pb-28 lg:pt-48 lg:pb-36">
            <div className="flex items-center gap-5 mb-10">
              <div className="h-px w-12 bg-gold/50" />
              <span className="text-sm tracking-[0.3em] uppercase text-gold">
                Join Us
              </span>
            </div>
            <h1
              className="font-display font-bold text-bone leading-[0.9] mb-10 max-w-4xl"
              style={{ fontSize: "clamp(3.5rem, 8vw, 8rem)" }}
            >
              Work Harder.<br />With Us.
            </h1>
            <p className="text-dim text-base md:text-lg leading-relaxed max-w-2xl font-light">
              Work Hard Company is always looking for exceptional individuals who
              are ready to operate at the highest level. If you&rsquo;re driven,
              adaptable, and committed to excellence, we&rsquo;d like to talk.
            </p>
          </div>
        </section>
        {/* ─── SECTION 5.2: WHY WORK HERE ────────────────────────────────── */}
        <section className="bg-surface py-28 lg:py-40 border-b border-border">
          <div className="px-8 md:px-16 lg:px-24 max-w-screen-xl mx-auto">
            <div className="flex items-center gap-5 mb-20">
              <div className="h-px w-12 bg-gold/40" />
              <span className="text-sm tracking-[0.25em] uppercase text-dim">
                Why Work Here
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-border">
              {[
                {
                  label: "Growth",
                  body: "We invest in our people the same way we invest in our clients: relentlessly and with measurable outcomes.",
                },
                {
                  label: "Impact",
                  body: "Every role at Work Hard Company is a high-impact role. We don't have passengers.",
                },
                {
                  label: "Culture",
                  body: "We work hard. We expect the same. In return, you'll be surrounded by the best.",
                },
              ].map(({ label, body }) => (
                <div key={label} className="bg-surface p-10 lg:p-14 flex flex-col gap-6">
                  <div className="w-1.5 h-1.5 bg-gold/70 rotate-45 flex-shrink-0" />
                  <div>
                    <h3 className="font-display text-2xl font-bold text-bone mb-4">
                      {label}
                    </h3>
                    <p className="text-dim text-base leading-relaxed">{body}</p>
                  </div>
                  <div className="h-px w-8 bg-gold/30 mt-auto" />
                </div>
              ))}
            </div>
          </div>
        </section>
        {/* ─── SECTION 5.3: OPEN ROLES ───────────────────────────────────── */}
        <section id="open-roles" className="bg-ink py-28 lg:py-40 border-b border-border">
          <div className="px-8 md:px-16 lg:px-24 max-w-screen-xl mx-auto">
            <div className="flex items-center gap-5 mb-20">
              <div className="h-px w-12 bg-gold/40" />
              <span className="text-sm tracking-[0.25em] uppercase text-dim">
                Open Roles
              </span>
            </div>

            <div className="w-full">
              {/* Header row */}
              <div className="grid grid-cols-[1fr_1fr_1fr_auto] gap-8 border-b border-border pb-4 mb-px">
                <span className="text-[13px] tracking-[0.25em] uppercase text-dim font-mono text-left">Position</span>
                <span className="text-[13px] tracking-[0.25em] uppercase text-dim font-mono text-left">Sector</span>
                <span className="text-[13px] tracking-[0.25em] uppercase text-dim font-mono text-left">Location</span>
                <span className="text-[13px] tracking-[0.25em] uppercase text-dim font-mono text-left invisible">Apply</span>
              </div>
              {/* Data rows */}
              {[
                { title: "Associate",  dept: "Solutions" },
                { title: "Engineer",   dept: "Revenue" },
                { title: "Manager",    dept: "Operations" },
                { title: "Associate",  dept: "Sales" },
                { title: "Secretary",  dept: "Strategy" },
                { title: "Engineer",   dept: "Corporate" },
                { title: "Analyst",    dept: "Technology" },
                { title: "Manager",    dept: "Consulting" },
                { title: "Associate",  dept: "Leadership" },
                { title: "Analyst",    dept: "People" },
              ].map(({ title, dept }, i) => (
                <div
                  key={i}
                  className="grid grid-cols-[1fr_1fr_1fr_auto] gap-8 items-center border-b border-border py-5 group hover:bg-white/[0.02] transition-colors duration-200"
                >
                  <span className="font-body text-lg font-bold text-bone tracking-wide">{title}</span>
                  <span className="text-[12px] tracking-[0.15em] uppercase text-dim/70">{dept}</span>
                  <span className="text-[12px] tracking-[0.15em] uppercase text-dim/70">Global / Remote</span>
                  <a
                    href="#"
                    className="text-[11px] tracking-[0.2em] uppercase text-gold/70
                               hover:text-gold transition-colors duration-200 whitespace-nowrap
                               focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gold"
                  >
                    Apply Now →
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>
        {/* ─── SECTION 5.4: APPLICATION PROCESS ─────────────────────────── */}
        <section className="bg-surface py-28 lg:py-40 border-b border-border">
          <div className="px-8 md:px-16 lg:px-24 max-w-screen-xl mx-auto">
            <div className="flex items-center gap-5 mb-20">
              <div className="h-px w-12 bg-gold/40" />
              <span className="text-sm tracking-[0.25em] uppercase text-dim">
                Our Process
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-border">
              {[
                { step: "01", label: "Apply",  body: "Submit your information." },
                { step: "02", label: "Assess", body: "We evaluate fit across a range of criteria." },
                { step: "03", label: "Engage", body: "Multi-stage conversations with our team." },
                { step: "04", label: "Offer",  body: "We move fast for the right candidates." },
              ].map(({ step, label, body }) => (
                <div key={step} className="bg-surface p-10 lg:p-12 flex flex-col gap-6">
                  <span className="text-[9px] tracking-[0.35em] uppercase text-dim/40 font-mono">
                    {step}
                  </span>
                  <div>
                    <h3 className="font-display text-2xl font-bold text-bone mb-3">
                      {label}
                    </h3>
                    <p className="text-dim text-base leading-relaxed">{body}</p>
                  </div>
                  <div className="h-px w-8 bg-gold/30 mt-auto" />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ─── SECTION 5.5: CAREERS CTA ──────────────────────────────────── */}
        <section
          className="relative py-32 lg:py-44 overflow-hidden border-b border-border"
          style={{
            background: "linear-gradient(135deg, #0D1117 0%, #07090C 50%, #0D1117 100%)",
          }}
        >
          <div
            className="pointer-events-none absolute top-0 right-0 w-[36rem] h-[36rem] opacity-10"
            style={{
              background: "radial-gradient(circle at top right, #C5A97A, transparent 65%)",
            }}
          />
          <div className="relative z-10 px-8 md:px-16 lg:px-24 max-w-screen-xl mx-auto text-center">
            <div className="flex items-center justify-center gap-5 mb-12">
              <div className="h-px w-12 bg-gold/40" />
              <span className="text-sm tracking-[0.25em] uppercase text-gold">
                Get In Touch
              </span>
              <div className="h-px w-12 bg-gold/40" />
            </div>
            <h2
              className="font-display font-bold text-bone leading-[0.93] mb-12 mx-auto"
              style={{ fontSize: "clamp(1.8rem, 2.8vw, 3rem)", maxWidth: "22ch" }}
            >
              Questions? Reach Out to Our Top Representatives.
            </h2>
            <a
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-4
                         bg-gold text-ink text-base tracking-[0.2em] uppercase font-bold
                         hover:bg-gold-bright transition-colors duration-200
                         focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold
                         focus-visible:ring-offset-2 focus-visible:ring-offset-ink
                         active:opacity-90"
            >
              Contact Us
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
