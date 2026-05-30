import type { Metadata } from "next";
import Nav from "../_components/Nav";
import Footer from "../_components/Footer";

export const metadata: Metadata = {
  title: "Our Mission — Work Hard Company",
  description: "Managing modernization. One breakthrough at a time.",
};

export default function MissionPage() {
  return (
    <>
      <Nav />
      <main>
        {/* ─── SECTION 2.1: HERO ──────────────────────────────────────────── */}
        <section
          className="relative min-h-[72vh] flex flex-col justify-center border-b border-border overflow-hidden"
          style={{
            background: "#07090C",
            backgroundImage:
              "radial-gradient(circle, rgba(197,169,122,0.07) 1px, transparent 1px)",
            backgroundSize: "28px 28px",
          }}
        >
          {/* Background stock image */}
          <div
            className="absolute inset-0 opacity-[0.18]"
            style={{
              backgroundImage: "url('https://images.unsplash.com/photo-1518770660439-4636190af475?w=1600&auto=format&fit=crop&q=80')",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />
          {/* Top vignette so nav stays readable */}
          <div className="pointer-events-none absolute inset-x-0 top-0 h-40
                          bg-gradient-to-b from-ink to-transparent" />
          {/* Bottom vignette */}
          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-32
                          bg-gradient-to-t from-ink to-transparent" />

          <div className="relative z-10 px-8 md:px-16 lg:px-24 max-w-screen-xl mx-auto w-full
                          pt-40 pb-28 lg:pt-48 lg:pb-36">
            {/* Eyebrow */}
            <div className="flex items-center gap-5 mb-10">
              <div className="h-px w-12 bg-gold/50" />
              <span className="text-sm tracking-[0.3em] uppercase text-gold">
                Who We Are
              </span>
            </div>

            {/* H1 */}
            <h1
              className="font-display font-bold text-bone leading-[0.9] mb-10 max-w-4xl"
              style={{ fontSize: "clamp(2rem, 8vw, 8rem)" }}
            >
              Our<br />Mission
            </h1>

            {/* Mission statement */}
            <p className="text-dim text-base md:text-lg leading-relaxed max-w-2xl font-light">
              At Work Hard Company, our mission is to deliver mission-critical
              solutions that enable enterprises to achieve their strategic
              objectives through best-in-class operational frameworks and
              next-generation capability deployment.
            </p>
          </div>
        </section>
        {/* ─── SECTION 2.2: PULL-QUOTE STATEMENT ─────────────────────────── */}
        <section className="bg-surface py-28 lg:py-40 border-b border-border">
          <div className="px-8 md:px-16 lg:px-24 max-w-screen-xl mx-auto">
            <div className="max-w-4xl">
              <div className="border-l-2 border-gold pl-10 lg:pl-14">
                <blockquote
                  className="font-display font-bold text-bone leading-[1.12]"
                  style={{ fontSize: "clamp(1.6rem, 3.2vw, 3rem)" }}
                >
                  We exist at the intersection of ambition and execution. We
                  don&rsquo;t just solve problems — we transform the way problems
                  are understood, approached, and ultimately resolved.
                </blockquote>
              </div>
            </div>
          </div>
        </section>

        {/* ─── SECTION 2.3: THREE VALUES ──────────────────────────────────── */}
        <section className="bg-ink py-28 lg:py-40 border-b border-border">
          <div className="px-8 md:px-16 lg:px-24 max-w-screen-xl mx-auto">
            <div className="flex items-center gap-5 mb-20">
              <div className="h-px w-12 bg-gold/40" />
              <span className="text-sm tracking-[0.25em] uppercase text-gold">
                Our Values
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-16 lg:gap-24">
              {[
                {
                  title: "Integrity",
                  body: "We operate with full transparency across all stakeholder interfaces, ensuring alignment at every level of the organizational value chain.",
                  icon: (
                    <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
                      <line x1="4" y1="12" x2="28" y2="12" stroke="currentColor" strokeWidth="1"/>
                      <line x1="4" y1="20" x2="28" y2="20" stroke="currentColor" strokeWidth="1"/>
                      <line x1="16" y1="4" x2="16" y2="28" stroke="currentColor" strokeWidth="1" strokeDasharray="2 3"/>
                      <circle cx="16" cy="12" r="2.5" fill="currentColor"/>
                      <circle cx="16" cy="20" r="2.5" fill="currentColor"/>
                    </svg>
                  ),
                },
                {
                  title: "Innovation",
                  body: "Innovating at the edge of tomorrow means never accepting the limitations of today. Our teams are empowered to challenge conventional paradigms.",
                  icon: (
                    <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
                      <path d="M16 28V16M16 16L8 24M16 16L24 24" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M16 4L16 12" stroke="currentColor" strokeWidth="1" strokeLinecap="round"/>
                      <path d="M10 7L16 4L22 7" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"/>
                      <circle cx="16" cy="16" r="3" stroke="currentColor" strokeWidth="1"/>
                    </svg>
                  ),
                },
                {
                  title: "Excellence",
                  body: "Excellence is not a destination. It is a continuous operational posture embedded in everything we deliver, every quarter, in every market.",
                  icon: (
                    <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
                      <path d="M16 4L18.5 12H27L20.5 17L23 25L16 20L9 25L11.5 17L5 12H13.5L16 4Z" stroke="currentColor" strokeWidth="1" strokeLinejoin="round"/>
                    </svg>
                  ),
                },
              ].map(({ title, body, icon }) => (
                <div key={title} className="flex flex-col gap-7">
                  <span className="text-gold">{icon}</span>
                  <div>
                    <h3 className="font-display text-2xl font-bold text-bone mb-4">
                      {title}
                    </h3>
                    <p className="text-dim text-base leading-relaxed">{body}</p>
                  </div>
                  <div className="h-px w-8 bg-gold/25" />
                </div>
              ))}
            </div>
          </div>
        </section>
        {/* ─── SECTION 2.4: PHILOSOPHY ────────────────────────────────────── */}
        <section className="bg-surface py-28 lg:py-40 border-b border-border">
          <div className="px-8 md:px-16 lg:px-24 max-w-screen-xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-28 items-start">

              {/* Left: text */}
              <div>
                <div className="flex items-center gap-5 mb-12">
                  <div className="h-px w-12 bg-gold/40" />
                  <span className="text-sm tracking-[0.25em] uppercase text-gold">
                    Philosophy
                  </span>
                </div>
                <h2
                  className="font-display font-bold text-bone leading-[0.93] mb-10"
                  style={{ fontSize: "clamp(2rem, 4vw, 3.5rem)" }}
                >
                  The Work Hard Philosophy
                </h2>
                <p className="text-dim text-base leading-relaxed mb-6">
                  We believe that sustainable enterprise growth is achieved not
                  through individual moments of disruption, but through
                  consistent, disciplined, high-velocity execution across every
                  function of the organization.
                </p>
                <p className="text-dim text-base leading-relaxed">
                  Work Hard Company was founded on the principle that the most
                  complex challenges require the most rigorous frameworks. Our
                  proprietary methodologies, developed over years of cross-sector
                  engagement, allow us to bring clarity to ambiguity and
                  structure to uncertainty.
                </p>
              </div>

              {/* Right: abstract analytics visual */}
              <div className="border border-border bg-raised p-8 lg:p-10"
                style={{ boxShadow: "inset 0 1px 0 rgba(197,169,122,0.05)" }}>
                <p className="text-[10px] tracking-[0.3em] uppercase text-dim mb-8">
                  Work Hard Analytics Platform™
                </p>
                <div className="flex flex-col gap-7">
                  {[
                    { label: "Platform Velocity Index", pct: 94, display: "↑ 94%" },
                    { label: "Operational Yield Rate", pct: 78, display: "↑ 78%" },
                    { label: "Client Outcome Score", pct: 99, display: "↑ 99%" },
                    { label: "Framework Efficiency", pct: 61, display: "↑ 61%" },
                  ].map(({ label, pct, display }) => (
                    <div key={label}>
                      <div className="flex justify-between items-baseline mb-2.5">
                        <span className="text-xs tracking-[0.15em] uppercase text-dim">
                          {label}
                        </span>
                        <span className="font-display text-base font-bold text-gold">
                          {display}
                        </span>
                      </div>
                      {/* Track */}
                      <div className="relative h-px bg-border w-full">
                        <div
                          className="absolute left-0 top-0 h-px bg-gold/50"
                          style={{ width: `${pct}%` }}
                        />
                        {/* Endpoint dot */}
                        <div
                          className="absolute top-1/2 -translate-y-1/2 w-1.5 h-1.5 bg-gold/70 rotate-45"
                          style={{ left: `${pct}%`, marginLeft: "-3px" }}
                        />
                      </div>
                    </div>
                  ))}
                </div>

                {/* Bottom decorative grid */}
                <div className="mt-10 pt-8 border-t border-border grid grid-cols-3 sm:grid-cols-3 gap-4">
                  {[
                    { label: "Markets", val: "127" },
                    { label: "Clients", val: "30K+" },
                    { label: "Uptime", val: "99.97%" },
                  ].map(({ label, val }) => (
                    <div key={label}>
                      <p className="font-display font-bold text-gold text-xl leading-none mb-1">
                        {val}
                      </p>
                      <p className="text-[10px] tracking-[0.15em] uppercase text-dim">
                        {label}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Philosophy stock image */}
            <div className="mt-16 relative h-56 lg:h-72 overflow-hidden">
              <div
                className="absolute inset-0"
                style={{
                  backgroundImage: "url('https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=1400&auto=format&fit=crop&q=80')",
                  backgroundSize: "cover",
                  backgroundPosition: "center 40%",
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-r from-surface via-transparent to-surface" />
              <div className="absolute inset-0 bg-gradient-to-t from-surface/80 via-transparent to-surface/60" />
            </div>
          </div>
        </section>

        {/* ─── SECTION 2.5: TIMELINE ──────────────────────────────────────── */}
        <section className="bg-ink py-28 lg:py-36 border-b border-border">
          <div className="px-8 md:px-16 lg:px-24 max-w-screen-xl mx-auto">
            <div className="flex items-center gap-5 mb-20">
              <div className="h-px w-12 bg-gold/40" />
              <span className="text-sm tracking-[0.25em] uppercase text-gold">
                Our History
              </span>
            </div>

            {/* Timeline — 4 columns */}
            <div className="relative">

              <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8">
                {[
                  {
                    year: "2011",
                    description:
                      "Work Hard Company founded with a bold vision and a small team of visionaries.",
                  },
                  {
                    year: "2015",
                    description:
                      "Expanded into new verticals, establishing global footholds across 40+ markets.",
                  },
                  {
                    year: "2019",
                    description:
                      "Achieved enterprise scale. Launched our core platform suite.",
                  },
                  {
                    year: "2023",
                    description:
                      "Crossed $10B in total contract value. Named a leader in 6 Gartner Magic Quadrants.",
                  },
                ].map(({ year, description }) => (
                  <div key={year}>
                    {/* Diamond marker + year */}
                    <div className="flex items-center gap-3 mb-6 relative z-10">
                      <div className="w-[9px] h-[9px] rotate-45 border border-gold/60 bg-ink flex-shrink-0" />
                      <span className="font-display text-xl font-bold text-gold">
                        {year}
                      </span>
                    </div>
                    <p className="text-dim text-base leading-relaxed">
                      {description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
        {/* ─── SECTION 2.6: MISSION CTA ───────────────────────────────────── */}
        <section
          className="relative py-32 lg:py-44 overflow-hidden border-b border-border"
          style={{
            background: "linear-gradient(135deg, #0D1117 0%, #07090C 50%, #0D1117 100%)",
          }}
        >
          {/* Radial gold accent — bottom-left this time, different from home */}
          <div
            className="pointer-events-none absolute bottom-0 left-0 w-[36rem] h-[36rem] opacity-10"
            style={{
              background:
                "radial-gradient(circle at bottom left, #C5A97A, transparent 65%)",
            }}
          />

          <div className="relative z-10 px-8 md:px-16 lg:px-24 max-w-screen-xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">

              {/* Left: text */}
              <div>
                <div className="flex items-center gap-5 mb-12">
                  <div className="h-px w-12 bg-gold/40" />
                  <span className="text-sm tracking-[0.25em] uppercase text-gold">
                    Get Involved
                  </span>
                </div>

                <h2
                  className="font-display font-bold text-bone leading-[0.93] mb-8"
                  style={{ fontSize: "clamp(2rem, 2.8vw, 3rem)" }}
                >
                  A Mission Worth<br />Working Hard For
                </h2>

                <p className="text-dim text-base leading-relaxed mb-12 max-w-lg">
                  If you believe in what we&rsquo;re building, we&rsquo;d love to
                  talk.
                </p>

                <div className="flex flex-col sm:flex-row gap-4">
                  <a
                    href="/careers"
                    className="inline-flex items-center justify-center px-8 py-4
                               bg-gold text-ink text-base tracking-[0.2em] uppercase font-bold
                               hover:bg-gold-bright transition-colors duration-200
                               focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 focus-visible:ring-offset-ink
                               active:opacity-90"
                  >
                    Join Our Team
                  </a>
                  <a
                    href="/contact"
                    className="inline-flex items-center justify-center px-8 py-4
                               border border-bone/25 text-bone text-base tracking-[0.2em] uppercase font-bold
                               hover:border-bone/60 hover:bg-white/5 transition-colors duration-200
                               focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-bone/50 focus-visible:ring-offset-1 focus-visible:ring-offset-ink
                               active:bg-white/10"
                  >
                    Contact Us
                  </a>
                </div>
              </div>

              {/* Right: image */}
              <div
                className="h-56 sm:h-72 lg:h-96 overflow-hidden"
                style={{
                  backgroundImage: "url('https://images.unsplash.com/photo-1555963153-11ff60182d08?w=900&auto=format&fit=crop&q=80')",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
