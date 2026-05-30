import type { Metadata } from "next";
import Nav from "../_components/Nav";
import Footer from "../_components/Footer";
import ContactForm from "../_components/ContactForm";

export const metadata: Metadata = {
  title: "Contact — Work Hard Company",
  description: "Reach out to Work Hard Company. Enterprise inquiries, partnerships, press, and talent — our team is ready to engage.",
};

export default function ContactPage() {
  return (
    <>
      <Nav />
      <main>
        {/* ─── SECTION 6.1: HERO ─────────────────────────────────────────── */}
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
            className="absolute inset-0 opacity-[0.12]"
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1497366216548-37526070297c?w=1600&auto=format&fit=crop&q=80')",
              backgroundSize: "cover",
              backgroundPosition: "center 40%",
            }}
          />
          <div className="pointer-events-none absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-ink to-transparent" />
          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-ink to-transparent" />

          <div className="relative z-10 px-8 md:px-16 lg:px-24 max-w-screen-xl mx-auto w-full pt-40 pb-28 lg:pt-48 lg:pb-36">
            <div className="flex items-center gap-5 mb-10">
              <div className="h-px w-12 bg-gold/50" />
              <span className="text-sm tracking-[0.3em] uppercase text-gold">
                Get In Touch
              </span>
            </div>
            <h1
              className="font-display font-bold text-bone leading-[0.9] mb-10 max-w-4xl"
              style={{ fontSize: "clamp(2rem, 8vw, 8rem)" }}
            >
              Start the<br />Conversation.
            </h1>
            <p className="text-dim text-base md:text-lg leading-relaxed max-w-2xl font-light">
              Whether you represent a global enterprise, a prospective partner, or
              are exploring a career with us — our team is ready to engage at the
              level your inquiry deserves.
            </p>
          </div>
        </section>

        {/* ─── SECTION 6.2: FORM + INFO ───────────────────────────────────── */}
        <section
          id="submit-inquiry"
          className="relative py-28 lg:py-40 border-b border-border overflow-hidden"
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
            <div className="grid grid-cols-1 lg:grid-cols-[1.6fr_1fr] gap-20 lg:gap-32 items-start">

              {/* Left: Form */}
              <div>
                <div className="flex items-center gap-5 mb-14">
                  <div className="h-px w-12 bg-gold/40" />
                  <span className="text-sm tracking-[0.25em] uppercase text-dim">
                    Submit an Inquiry
                  </span>
                </div>

                <ContactForm />
              </div>

              {/* Right: Info panel */}
              <div className="lg:pt-[4.5rem]">
                <div className="flex flex-col gap-12">

                  {/* HQ */}
                  <div className="flex flex-col gap-4 border-b border-border pb-10">
                    <span className="text-[11px] tracking-[0.25em] uppercase text-dim/60 font-mono">
                      Headquarters
                    </span>
                    <p className="text-bone text-base leading-relaxed font-light">
                      1 Enterprise Plaza<br />
                      New York, NY 10001
                    </p>
                  </div>

                  {/* Email contacts */}
                  <div className="flex flex-col gap-4 border-b border-border pb-10">
                    <span className="text-[11px] tracking-[0.25em] uppercase text-dim/60 font-mono">
                      Email
                    </span>
                    <div className="flex flex-col gap-3">
                      {[
                        { label: "General", address: "info@workhard.co" },
                        { label: "Press",   address: "press@workhard.co" },
                        { label: "Talent",  address: "talent@workhard.co" },
                      ].map(({ label, address }) => (
                        <div key={label} className="flex items-baseline gap-4">
                          <span className="text-[10px] tracking-[0.2em] uppercase text-dim/50 font-mono w-16 flex-shrink-0">
                            {label}
                          </span>
                          <a
                            href={`mailto:${address}`}
                            className="text-gold/80 text-sm hover:text-gold transition-colors duration-200
                                       focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gold focus-visible:rounded-sm"
                          >
                            {address}
                          </a>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Response time */}
                  <div className="flex flex-col gap-4">
                    <span className="text-[11px] tracking-[0.25em] uppercase text-dim/60 font-mono">
                      Response Time
                    </span>
                    <p className="text-dim text-sm leading-relaxed">
                      Enterprise inquiries receive a dedicated response within one
                      business day. All other inquiries are reviewed within 3–5
                      business days.
                    </p>
                  </div>

                </div>
              </div>

            </div>
          </div>
        </section>


      </main>
      <Footer />
    </>
  );
}
