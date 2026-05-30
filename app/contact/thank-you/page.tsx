import type { Metadata } from "next";
import Nav from "../../_components/Nav";
import Footer from "../../_components/Footer";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Inquiry Received — Work Hard Company",
  description: "Your inquiry has been received. Our team will be in touch shortly.",
};

export default function ThankYouPage() {
  return (
    <>
      <Nav />
      <main>
        <section
          className="relative min-h-screen flex flex-col justify-center border-b border-border overflow-hidden"
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
          <div
            className="pointer-events-none absolute bottom-0 left-0 w-[28rem] h-[28rem] opacity-[0.06]"
            style={{
              background: "radial-gradient(circle at bottom left, #C5A97A, transparent 65%)",
            }}
          />

          <div className="relative z-10 px-8 md:px-16 lg:px-24 max-w-screen-xl mx-auto w-full">
            <div className="max-w-2xl">
              <div className="flex items-center gap-5 mb-12">
                <div className="h-px w-12 bg-gold/50" />
                <span className="text-sm tracking-[0.3em] uppercase text-gold">
                  Inquiry Received
                </span>
              </div>

              <h1
                className="font-display font-bold text-bone leading-[0.9] mb-10"
                style={{ fontSize: "clamp(3rem, 6vw, 6rem)" }}
              >
                Your inquiry<br />has been sent.
              </h1>

              <p className="text-dim text-base md:text-lg leading-relaxed mb-16 font-light max-w-xl">
                Our top representatives will review your submission and get back
                to you shortly. Enterprise inquiries are typically addressed
                within one business day.
              </p>

              <div className="flex items-center gap-10">
                <Link
                  href="/"
                  className="inline-flex items-center justify-center px-8 py-4
                             bg-gold text-ink text-sm tracking-[0.2em] uppercase font-bold
                             hover:bg-gold-bright transition-colors duration-200
                             focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold
                             focus-visible:ring-offset-2 focus-visible:ring-offset-ink
                             active:opacity-90"
                >
                  Return Home
                </Link>
                <Link
                  href="/what-we-do"
                  className="text-sm tracking-[0.2em] uppercase text-dim
                             hover:text-bone transition-colors duration-200
                             focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gold"
                >
                  Explore Our Solutions →
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
