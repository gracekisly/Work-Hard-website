import type { Metadata } from "next";
import Nav from "../_components/Nav";
import Footer from "../_components/Footer";

export const metadata: Metadata = {
  title: "What We Do — Work Hard Company",
  description: "Work Hard Company operates across every sector of the modern economy.",
};

export default function WhatWeDoPage() {
  return (
    <>
      <Nav />
      <main>
        {/* ─── SECTION 4.1: HERO ──────────────────────────────────────────── */}
        <section
          className="relative min-h-[72vh] flex flex-col justify-center border-b border-border overflow-hidden"
          style={{
            background: "#07090C",
            backgroundImage:
              "radial-gradient(circle, rgba(197,169,122,0.07) 1px, transparent 1px)",
            backgroundSize: "28px 28px",
          }}
        >
          {/* Background image */}
          <div
            className="absolute inset-0 opacity-[0.15]"
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1600&auto=format&fit=crop&q=80')",
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
                Our Solutions
              </span>
            </div>
            <h1
              className="font-display font-bold text-bone leading-[0.9] mb-10 max-w-4xl"
              style={{ fontSize: "clamp(2rem, 8vw, 8rem)" }}
            >
              Everything.<br />Optimized.
            </h1>
            <p className="text-dim text-base md:text-lg leading-relaxed max-w-2xl font-light">
              Work Hard Company operates across every sector of the modern economy.
              Our platform-agnostic, industry-neutral approach means we bring the
              same transformative rigor to artificial intelligence as we do to
              financial services, consulting, sales acceleration, and beyond.
            </p>
          </div>
        </section>

        {/* ─── SECTION 4.2: INDUSTRY CARDS ────────────────────────────────── */}
        <section className="bg-surface py-28 lg:py-40 border-b border-border">
          <div className="px-8 md:px-16 lg:px-24 max-w-screen-xl mx-auto">
            <div className="flex items-center gap-5 mb-20">
              <div className="h-px w-12 bg-gold/40" />
              <span className="text-sm tracking-[0.25em] uppercase text-dim">
                Our Services
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-border">
              {[
                {
                  num: "01",
                  title: "Artificial Intelligence & Machine Learning",
                  body: "We help enterprises operationalize AI at scale, aligning model deployment with business objectives across the full data lifecycle.",
                },
                {
                  num: "02",
                  title: "Financial Services & Capital Markets",
                  body: "From risk architecture to treasury optimization, our financial solutions create resilience across complex capital structures.",
                },
                {
                  num: "03",
                  title: "Enterprise Technology",
                  body: "We modernize the technology backbone of global organizations, ensuring infrastructure keeps pace with ambition.",
                },
                {
                  num: "04",
                  title: "Management Consulting",
                  body: "Our consulting practice delivers strategic clarity and executable roadmaps to organizations facing inflection points.",
                },
                {
                  num: "05",
                  title: "Sales Transformation",
                  body: "We unlock revenue potential through systematic pipeline engineering and go-to-market alignment.",
                },
                {
                  num: "06",
                  title: "Human Capital Solutions",
                  body: "People are infrastructure. We treat workforce strategy as a performance variable, not a cost center.",
                },
                {
                  num: "07",
                  title: "Regulatory & Compliance",
                  body: "Navigating complexity is our core competency. We help clients operate confidently within evolving regulatory environments.",
                },
                {
                  num: "08",
                  title: "Supply Chain & Operations",
                  body: "End-to-end visibility, optimized throughput, and operational resilience — delivered at global scale.",
                },
              ].map(({ num, title, body }) => (
                <div key={num} className="bg-surface p-10 lg:p-14 flex flex-col gap-6">
                  <span className="text-[9px] tracking-[0.35em] uppercase text-dim/40 font-mono">
                    {num}
                  </span>
                  <div>
                    <h3 className="font-display text-xl font-bold text-bone mb-4">
                      {title}
                    </h3>
                    <p className="text-dim text-base leading-relaxed">{body}</p>
                  </div>
                  <div className="h-px w-8 bg-gold/30 mt-auto" />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ─── SECTION 4.3: PLATFORM OVERVIEW ─────────────────────────────── */}
        <section className="bg-ink py-28 lg:py-40 border-b border-border">
          <div className="px-8 md:px-16 lg:px-24 max-w-screen-xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-28 items-start">

              {/* Left: heading + body */}
              <div>
                <div className="flex items-center gap-5 mb-12">
                  <div className="h-px w-12 bg-gold/40" />
                  <span className="text-sm tracking-[0.25em] uppercase text-dim">
                    The Platform
                  </span>
                </div>
                <h2
                  className="font-display font-bold text-bone leading-[0.93] mb-10"
                  style={{ fontSize: "clamp(2rem, 3.5vw, 3.5rem)" }}
                >
                  Powered by the<br /><span className="text-gold">Work Hard</span> Platform
                </h2>
                <p className="text-dim text-base leading-relaxed">
                  Our proprietary platform integrates seamlessly with your existing
                  systems, providing a unified layer of intelligence, automation, and
                  insight. Built for enterprise. Designed for scale. Trusted by the
                  organizations that run the world.
                </p>
              </div>

              {/* Right: feature list */}
              <div className="flex flex-col lg:pt-4">
                {[
                  "Real-time enterprise data orchestration",
                  "AI-assisted decision intelligence",
                  "Cross-functional workflow automation",
                ].map((feature, i) => (
                  <div
                    key={i}
                    className="flex items-start gap-6 border-t border-border py-8"
                  >
                    <div className="w-1.5 h-1.5 bg-gold/70 rotate-45 flex-shrink-0 mt-[0.4rem]" />
                    <p className="font-display text-bone text-lg font-bold leading-snug">
                      {feature}
                    </p>
                  </div>
                ))}
                <div className="border-t border-border" />
              </div>
            </div>
          </div>
        </section>

        {/* ─── SECTION 4.4: CTA ────────────────────────────────────────────── */}
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

          <div className="relative z-10 px-8 md:px-16 lg:px-24 max-w-screen-xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">

              {/* Left: text */}
              <div>
                <div className="flex items-center gap-5 mb-12">
                  <div className="h-px w-12 bg-gold/40" />
                  <span className="text-sm tracking-[0.25em] uppercase text-gold">
                    Get Started
                  </span>
                </div>
                <h2
                  className="font-display font-bold text-bone leading-[0.93] mb-8"
                  style={{ fontSize: "clamp(2rem, 2.8vw, 3rem)" }}
                >
                  Whatever Your Challenge,<br />We&rsquo;ve Solved It Before
                </h2>
                <p className="text-dim text-base leading-relaxed mb-12 max-w-lg">
                  Let&rsquo;s discuss what Work Hard Company can do for your organization.
                </p>
                <a
                  href="/contact"
                  className="inline-flex items-center justify-center px-8 py-4
                             bg-gold text-ink text-base tracking-[0.2em] uppercase font-bold
                             hover:bg-gold-bright transition-colors duration-200
                             focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 focus-visible:ring-offset-ink
                             active:opacity-90"
                >
                  Contact Us
                </a>
              </div>

              {/* Right: image */}
              <div
                className="h-56 sm:h-72 lg:h-96 overflow-hidden"
                style={{
                  backgroundImage: "url('https://images.unsplash.com/photo-1507668077129-56e32842fceb?w=900&auto=format&fit=crop&q=80')",
                  backgroundSize: "cover",
                  backgroundPosition: "center 55%",
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
