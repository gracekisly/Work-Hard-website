import Nav from "./_components/Nav";
import Footer from "./_components/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        {/* ─── SECTION 1.1: HERO ─────────────────────────────────────────── */}
        <section className="relative h-screen min-h-[700px] overflow-hidden">
          {/* Background image via CSS (avoids Next.js optimization proxy) */}
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1920&q=80')",
            }}
          />

          {/* Gradient overlays — layered for depth */}
          <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/80 to-ink/30" />
          <div className="absolute inset-0 bg-gradient-to-b from-ink/50 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-r from-ink/40 via-transparent to-transparent" />

          {/* Content anchored to lower-left */}
          <div className="relative z-10 h-full flex flex-col justify-end pb-24 lg:pb-32 px-8 md:px-16 lg:px-24 max-w-screen-xl mx-auto w-full">
            <p
              className="text-gold text-base tracking-[0.25em] uppercase font-medium mb-8"
              style={{ animation: "fade-up 0.9s ease both" }}
            >
              The Global Leader in Enterprise Solutions
            </p>

            <h1
              className="font-display font-bold text-bone leading-[0.92] mb-8
                         text-[clamp(3.5rem,7vw,7rem)] max-w-5xl"
              style={{ animation: "fade-up 0.9s 0.12s ease both" }}
            >
              We Provide Innovative Solutions
            </h1>

            <p
              className="text-dim text-base md:text-lg max-w-2xl mb-12 leading-relaxed font-light"
              style={{ animation: "fade-up 0.9s 0.24s ease both" }}
            >
              Work Hard Company operates at the convergence of technology,
              finance, strategy, and people — delivering outcomes that redefine
              what&rsquo;s possible across every sector.
            </p>

            <div
              className="flex flex-col sm:flex-row gap-4"
              style={{ animation: "fade-up 0.9s 0.36s ease both" }}
            >
              <a
                href="/what-we-do"
                className="inline-flex items-center justify-center px-8 py-4
                           bg-gold text-ink text-base tracking-[0.2em] uppercase font-semibold
                           hover:bg-gold-bright transition-colors duration-200
                           focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 focus-visible:ring-offset-ink
                           active:opacity-90"
              >
                Explore What We Do
              </a>
              <a
                href="/team"
                className="inline-flex items-center justify-center px-8 py-4
                           border border-bone/25 text-bone text-base tracking-[0.2em] uppercase font-semibold
                           hover:border-bone/60 hover:bg-white/5 transition-colors duration-200
                           focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-bone/50 focus-visible:ring-offset-1 focus-visible:ring-offset-ink
                           active:bg-white/10"
              >
                Meet Our Team
              </a>
            </div>
          </div>

          {/* Scroll indicator */}
          <div className="absolute bottom-8 right-8 md:right-16 lg:right-24 z-10 flex flex-col items-center gap-3">
            <span className="text-[9px] tracking-[0.3em] uppercase text-dim/50 [writing-mode:vertical-rl]">
              Scroll
            </span>
            <svg
              width="1"
              height="48"
              viewBox="0 0 1 48"
              className="text-gold/30"
              style={{ animation: "bounce-down 2s ease-in-out infinite" }}
            >
              <line x1="0.5" y1="0" x2="0.5" y2="48" stroke="currentColor" strokeWidth="1" />
            </svg>
          </div>
        </section>

        {/* ─── SECTION 1.2: STATS TICKER ─────────────────────────────────── */}
        <div className="relative bg-surface border-y border-border overflow-hidden">
          <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-24 z-10
                          bg-gradient-to-r from-surface to-transparent" />
          <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-24 z-10
                          bg-gradient-to-l from-surface to-transparent" />

          <div
            className="flex whitespace-nowrap py-5"
            style={{ animation: "ticker-scroll 45s linear infinite" }}
          >
            {[
              "$4.2B revenue last fiscal quarter",
              "127 countries served",
              "30,000+ enterprise clients worldwide",
              "$2.3T in assets managed across our global network",
              "340% YoY growth in enterprise deployments",
              "$4.2B revenue last fiscal quarter",
              "127 countries served",
              "30,000+ enterprise clients worldwide",
              "$2.3T in assets managed across our global network",
              "340% YoY growth in enterprise deployments",
            ].map((stat, i) => (
              <span
                key={i}
                className="inline-flex items-center text-base tracking-[0.12em] uppercase text-bone/70"
              >
                <span className="px-10">{stat}</span>
                <span className="text-gold/50 text-base font-light">·</span>
              </span>
            ))}
          </div>
        </div>

        {/* ─── SECTION 1.3: MARQUEE STATEMENT ────────────────────────────── */}
        <section className="bg-ink py-28 lg:py-40 overflow-hidden border-b border-border">
          <div className="px-8 md:px-16 lg:px-24 max-w-screen-xl mx-auto">
            <div className="flex items-center gap-6 mb-16">
              <div className="h-px w-12 bg-gold/40" />
              <span className="text-sm tracking-[0.25em] uppercase text-dim">
                Our Philosophy
              </span>
            </div>

            <p
              className="font-display font-bold text-bone leading-[0.9]"
              style={{ fontSize: "clamp(2.8rem, 5.5vw, 6.5rem)" }}
            >
              Managing
              <br />
              modernization —
              <br />
              <span className="text-gold">one breakthrough</span>
              <br />
              at a time.
            </p>
          </div>
        </section>

        {/* ─── SECTION 1.4: PILLAR CARDS ─────────────────────────────────── */}
        <section className="bg-ink py-28 lg:py-36 border-b border-border">
          <div className="px-8 md:px-16 lg:px-24 max-w-screen-xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-border">
              {[
                {
                  label: "01",
                  title: "Scale",
                  body: "We operate where others can't. Our infrastructure supports the enterprises that support the world.",
                  icon: (
                    <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
                      <path d="M14 2L26 8V20L14 26L2 20V8L14 2Z" stroke="currentColor" strokeWidth="1" strokeLinejoin="round"/>
                      <path d="M14 2V26M2 8L14 14L26 8" stroke="currentColor" strokeWidth="1"/>
                    </svg>
                  ),
                },
                {
                  label: "02",
                  title: "Trust",
                  body: "78% of Fortune 500 companies trust our platform. The other 22% are in conversations with us.",
                  icon: (
                    <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
                      <path d="M14 3L4 7V14C4 19.52 8.48 24.74 14 26C19.52 24.74 24 19.52 24 14V7L14 3Z" stroke="currentColor" strokeWidth="1" strokeLinejoin="round"/>
                      <path d="M9 14L12.5 17.5L19 11" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  ),
                },
                {
                  label: "03",
                  title: "Impact",
                  body: "1.4 million hours of productivity unlocked for clients in 2025 alone. Results at scale.",
                  icon: (
                    <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
                      <path d="M14 3V14L20 20" stroke="currentColor" strokeWidth="1" strokeLinecap="round"/>
                      <circle cx="14" cy="14" r="11" stroke="currentColor" strokeWidth="1"/>
                      <path d="M14 3L16 7H12L14 3Z" fill="currentColor"/>
                    </svg>
                  ),
                },
              ].map(({ label, title, body, icon }) => (
                <div
                  key={title}
                  className="bg-ink p-10 lg:p-14 flex flex-col gap-8 group
                             hover:bg-surface transition-colors duration-300"
                  style={{
                    boxShadow: "inset 0 1px 0 rgba(197,169,122,0.06)",
                  }}
                >
                  <div className="flex items-start justify-between">
                    <span className="text-gold opacity-60">{icon}</span>
                    <span className="text-[9px] tracking-[0.35em] uppercase text-ghost font-mono">
                      {label}
                    </span>
                  </div>

                  <div>
                    <h3 className="font-display text-3xl font-bold text-bone mb-4">
                      {title}
                    </h3>
                    <p className="text-dim text-base leading-relaxed">{body}</p>
                  </div>

                  <div className="h-px w-8 bg-gold/30 group-hover:w-16 transition-[width] duration-500" />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ─── SECTION 1.5: SECONDARY STATS ───────────────────────────────── */}
        <section className="bg-surface py-28 lg:py-36 border-b border-border">
          <div className="px-8 md:px-16 lg:px-24 max-w-screen-xl mx-auto">
            <div className="flex items-center gap-6 mb-20">
              <div className="h-px w-12 bg-gold/40" />
              <span className="text-sm tracking-[0.25em] uppercase text-dim">
                By the Numbers
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-border">
              {[
                { value: "#1", label: "in customer satisfaction across 12 consecutive quarters" },
                { value: "94%", label: "reduction in client operational inefficiency" },
                { value: "$18.2B", label: "total contract value secured in 2025" },
                { value: "99.97%", label: "uptime across all infrastructure" },
              ].map(({ value, label }) => (
                <div key={value} className="bg-surface p-10 lg:p-12">
                  <p
                    className="font-display font-bold text-gold leading-none mb-4"
                    style={{ fontSize: "clamp(2.5rem, 4.5vw, 5rem)" }}
                  >
                    {value}
                  </p>
                  <p className="text-dim text-base leading-relaxed max-w-[200px]">{label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
        {/* ─── SECTION 1.6: INDUSTRY PRESENCE TEASER ─────────────────────── */}
        <section className="bg-ink py-28 lg:py-36 border-b border-border">
          <div className="px-8 md:px-16 lg:px-24 max-w-screen-xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
              {/* Left: text */}
              <div>
                <div className="flex items-center gap-6 mb-12">
                  <div className="h-px w-12 bg-gold/40" />
                  <span className="text-sm tracking-[0.25em] uppercase text-dim">
                    Global Presence
                  </span>
                </div>
                <h2
                  className="font-display font-bold text-bone leading-[0.93] mb-8"
                  style={{ fontSize: "clamp(2rem, 4vw, 4rem)" }}
                >
                  Wherever Business Happens, We&rsquo;re Already There
                </h2>
                <p className="text-dim text-base leading-relaxed mb-10 max-w-lg">
                  From AI-native infrastructure to legacy systems transformation,
                  from high-frequency financial operations to human capital
                  management — Work Hard Company is the connective tissue of the
                  modern enterprise.
                </p>
                <a
                  href="/what-we-do"
                  className="inline-flex items-center gap-3 text-base tracking-[0.2em] uppercase text-gold
                             hover:text-gold-bright transition-colors duration-200
                             focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gold focus-visible:rounded-sm
                             active:opacity-60 group"
                >
                  See What We Do
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="group-hover:translate-x-1 transition-transform duration-200">
                    <path d="M3 8H13M13 8L9 4M13 8L9 12" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </a>
              </div>

              {/* Right: abstract grid visual */}
              <div className="relative hidden lg:block h-72">
                <svg width="100%" height="100%" viewBox="0 0 480 288" fill="none" xmlns="http://www.w3.org/2000/svg" className="opacity-20">
                  {/* Fine grid */}
                  {Array.from({ length: 13 }).map((_, i) => (
                    <line key={`v${i}`} x1={i * 40} y1="0" x2={i * 40} y2="288" stroke="#C5A97A" strokeWidth="0.5"/>
                  ))}
                  {Array.from({ length: 8 }).map((_, i) => (
                    <line key={`h${i}`} x1="0" y1={i * 40} x2="480" y2={i * 40} stroke="#C5A97A" strokeWidth="0.5"/>
                  ))}
                  {/* Accent nodes — representing global presence */}
                  {[
                    [80, 80], [200, 40], [360, 120], [120, 200], [280, 160], [440, 80], [40, 240], [320, 240],
                  ].map(([cx, cy], i) => (
                    <circle key={i} cx={cx} cy={cy} r="3" fill="#C5A97A" opacity="0.9"/>
                  ))}
                  {/* Connection lines */}
                  <polyline points="80,80 200,40 360,120 280,160 320,240" stroke="#C5A97A" strokeWidth="0.5" opacity="0.6"/>
                  <polyline points="80,80 120,200 40,240" stroke="#C5A97A" strokeWidth="0.5" opacity="0.4"/>
                  <polyline points="360,120 440,80" stroke="#C5A97A" strokeWidth="0.5" opacity="0.4"/>
                </svg>
                {/* Fade out bottom */}
                <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-ink to-transparent" />
              </div>
            </div>
          </div>
        </section>

        {/* ─── SECTION 1.7: CLIENT MARQUEE ────────────────────────────────── */}
        <section className="bg-surface py-14 lg:py-18 border-b border-border">
          {/* Label */}
          <div className="flex items-center justify-center gap-5 mb-10 px-8">
            <div className="h-px w-10 bg-gold/30" />
            <span className="text-sm tracking-[0.25em] uppercase text-dim">
              Trusted by Global Leaders
            </span>
            <div className="h-px w-10 bg-gold/30" />
          </div>

          {/* Marquee — full bleed, no max-w */}
          <div className="relative overflow-hidden">
            {/* Edge fades — wider than the ticker for a more gradual reveal */}
            <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-40 z-10
                            bg-gradient-to-r from-surface to-transparent" />
            <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-40 z-10
                            bg-gradient-to-l from-surface to-transparent" />

            <div
              className="flex whitespace-nowrap py-4"
              style={{ animation: "ticker-scroll 85s linear infinite" }}
            >
              {[
                "Meridian Group", "Vantage Capital", "Nexus Global", "Stratos Partners",
                "Ashford Holdings", "Crestline Advisors", "Pinnacle Global", "Luminary Capital",
                "Vertex Solutions", "Empire Strategy Group",
                "Meridian Group", "Vantage Capital", "Nexus Global", "Stratos Partners",
                "Ashford Holdings", "Crestline Advisors", "Pinnacle Global", "Luminary Capital",
                "Vertex Solutions", "Empire Strategy Group",
              ].map((name, i) => (
                <span
                  key={i}
                  className="inline-flex items-center font-display text-2xl text-bone/50 tracking-[0.08em]"
                  style={{ fontVariantCaps: "small-caps" }}
                >
                  <span className="px-14">{name}</span>
                  <span
                    className="text-gold/35 font-light"
                    style={{ fontSize: "1.1rem" }}
                  >
                    ·
                  </span>
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* ─── SECTION 1.8: CTA BANNER ────────────────────────────────────── */}
        <section
          className="py-32 lg:py-44 relative overflow-hidden border-b border-border"
          style={{
            background: "linear-gradient(135deg, #0D1117 0%, #07090C 50%, #101820 100%)",
          }}
        >
          {/* Subtle corner accent */}
          <div className="pointer-events-none absolute top-0 right-0 w-96 h-96 opacity-10"
            style={{
              background: "radial-gradient(circle at top right, #C5A97A, transparent 70%)",
            }}
          />

          <div className="relative z-10 px-8 md:px-16 lg:px-24 max-w-screen-xl mx-auto text-center">
            <p className="text-sm tracking-[0.3em] uppercase text-gold/60 mb-8">
              Get Started
            </p>
            <h2
              className="font-display font-bold text-bone leading-[0.93] mb-8 mx-auto"
              style={{ fontSize: "clamp(2.5rem, 4.5vw, 5.5rem)", maxWidth: "14ch" }}
            >
              Ready to Work Hard?
            </h2>
            <p className="text-dim text-base mb-12 max-w-md mx-auto leading-relaxed">
              Join the enterprises already operating at the next level.
            </p>
            <a
              href="/contact"
              className="inline-flex items-center justify-center px-10 py-5
                         bg-gold text-ink text-base tracking-[0.2em] uppercase font-bold
                         hover:bg-gold-bright transition-colors duration-200
                         focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 focus-visible:ring-offset-ink
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
