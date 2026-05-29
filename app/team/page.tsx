import type { Metadata } from "next";
import Nav from "../_components/Nav";
import Footer from "../_components/Footer";

export const metadata: Metadata = {
  title: "Our Team — Work Hard Company",
  description: "Our leadership team brings decades of combined expertise across technology, finance, operations, and strategic transformation.",
};

type Entry = {
  photo: string;
  tenure: string;
  isSecretary?: boolean;
};

const px = (id: string, path?: string) =>
  `https://images.pexels.com/photos/${id}/${path ?? `pexels-photo-${id}`}.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop`;

const us = (id: string) =>
  `https://images.unsplash.com/${id}?w=300&auto=format&fit=crop&q=80`;

const previousManagers: Entry[] = [
  { photo: us("photo-1500648767791-00dcc994a43e"), tenure: "Jul 9–10, 2026" },
  { photo: us("photo-1472099645785-5658abf4ff4e"), tenure: "Jul 8, 2026" },
  { photo: us("photo-1519345182560-3f2917c472ef"), tenure: "Jul 6–7, 2026" },
  { photo: us("photo-1506794778202-cad84cf45f1d"), tenure: "Jul 5, 2026" },
  { photo: us("photo-1507003211169-0a1dd7228f2d"), tenure: "Jul 3–4, 2026" },
  { photo: us("photo-1494790108377-be9c29b29330"), tenure: "Jul 2, 2026" },
  { photo: us("photo-1534528741775-53994a69daeb"), tenure: "Jun 30–Jul 1, 2026" },
  { photo: us("photo-1570295999919-56ceb5ecca61"), tenure: "Jun 29, 2026" },
  { photo: us("photo-1580489944761-15a19d654956"), tenure: "Jun 27–28, 2026" },
  { photo: us("photo-1524504388940-b1c1722653e1"), tenure: "Jun 26, 2026" },
  { photo: us("photo-1539571696357-5a69c17a67c6"), tenure: "Jun 24–25, 2026" },
  { photo: us("photo-1508243771214-6e95d137426b"), tenure: "Jun 23, 2026" },
  { photo: us("photo-1568602471122-7832951cc4c5"), tenure: "Jun 21–22, 2026" },
  // index 13
  { photo: us("photo-1573497019940-1c28c88b4f3e"), tenure: "Jan 14, 2021 – Present", isSecretary: true },
  { photo: px("7468194"),                          tenure: "Jun 20, 2026" },
  { photo: px("10816007"),                         tenure: "Jun 18–19, 2026" },
  { photo: px("29852852", "pexels-photo-29852852/free-photo-of-professional-studio-portrait-of-woman"), tenure: "Jun 17, 2026" },
  { photo: us("photo-1589279715734-6631a314dfa2"), tenure: "Jun 15–16, 2026" },
  { photo: px("29852895", "pexels-photo-29852895/free-photo-of-professional-corporate-headshot-of-smiling-woman"), tenure: "Jun 14, 2026" },
  { photo: us("photo-1566753323558-f4e0952af115"), tenure: "Jun 12–13, 2026" },
  { photo: px("9304685"),                          tenure: "Jun 11, 2026" },
  { photo: px("26872232", "pexels-photo-26872232/free-photo-of-portrait-of-a-businessman"), tenure: "Jun 9–10, 2026" },
  { photo: px("31869537", "pexels-photo-31869537/free-photo-of-portrait-of-smiling-woman-in-business-attire"), tenure: "Jun 8, 2026" },
  { photo: px("4797690"),                          tenure: "Jun 6–7, 2026" },
  { photo: px("30198184", "pexels-photo-30198184/free-photo-of-confident-woman-in-black-outfit-portrait"), tenure: "Jun 5, 2026" },
  { photo: px("37148308", "pexels-photo-37148308/free-photo-of-portrait-of-a-business-professional-in-suit"), tenure: "Jun 3–4, 2026" },
  { photo: px("26989515", "pexels-photo-26989515/free-photo-of-portrait-of-brunette-woman-in-black-shirt"), tenure: "Jun 2, 2026" },
  { photo: us("photo-1600180758890-6b94519a8ba6"), tenure: "May 31–Jun 1, 2026" },
  { photo: px("5804201"),                          tenure: "May 30, 2026" },
  { photo: us("photo-1617925357736-8a4ea869b800"), tenure: "May 28–29, 2026" },
];

export default function TeamPage() {
  return (
    <>
      <Nav />
      <main>
        {/* ─── SECTION 3.1: HERO ─────────────────────────────────────────── */}
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
            className="absolute inset-0 opacity-[0.18]"
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1506073828772-2f85239b6d2d?w=1600&auto=format&fit=crop&q=80')",
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
                Leadership
              </span>
            </div>
            <h1
              className="font-display font-bold text-bone leading-[0.9] mb-10 max-w-4xl"
              style={{ fontSize: "clamp(3.5rem, 8vw, 8rem)" }}
            >
              The People Behind<br />the Work
            </h1>
            <p className="text-dim text-base md:text-lg leading-relaxed max-w-2xl font-light">
              Our leadership team brings decades of combined expertise across technology,
              finance, operations, and strategic transformation. They are united by a
              single belief: that working hard is the only way forward.
            </p>
          </div>
        </section>

        {/* ─── CURRENT MANAGER ───────────────────────────────────────────── */}
        <section className="bg-surface py-28 lg:py-40 border-b border-border">
          <div className="px-8 md:px-16 lg:px-24 max-w-screen-xl mx-auto">
            <div className="flex items-center gap-5 mb-20">
              <div className="h-px w-12 bg-gold/40" />
              <span className="text-sm tracking-[0.25em] uppercase text-dim">
                Current Manager
              </span>
            </div>
            <div>
              <div className="w-56">
                <div
                  className="w-full aspect-square mb-5"
                  style={{
                    backgroundImage:
                      "url('https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&auto=format&fit=crop&q=80')",
                    backgroundSize: "cover",
                    backgroundPosition: "center top",
                  }}
                />
                <h3 className="font-body text-lg font-bold text-bone mb-1">
                  Manager
                </h3>
                <p className="text-[12px] tracking-[0.12em] uppercase text-gold/90">
                  Since Jul 11, 2026
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ─── PREVIOUS MANAGERS ─────────────────────────────────────────── */}
        <section className="bg-ink py-28 lg:py-40 border-b border-border">
          <div className="px-8 md:px-16 lg:px-24 max-w-screen-xl mx-auto">
            <div className="flex items-center gap-5 mb-20">
              <div className="h-px w-12 bg-gold/40" />
              <span className="text-sm tracking-[0.25em] uppercase text-dim">
                Previous Managers
              </span>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-px bg-border">
              {previousManagers.map(({ photo, tenure, isSecretary }, i) => (
                <div key={i} className="bg-ink p-5 flex flex-col gap-3">
                  <div
                    className="w-full aspect-square"
                    style={{
                      backgroundImage: `url('${photo}')`,
                      backgroundSize: "cover",
                      backgroundPosition: "center top",
                      filter: isSecretary ? "none" : "grayscale(1)",
                    }}
                  />
                  <div>
                    <p className="font-body text-[15px] font-bold text-bone leading-snug mb-1">
                      {isSecretary ? "Secretary" : "Manager"}
                    </p>
                    <p className="text-[11px] tracking-[0.1em] uppercase text-dim/70">
                      {tenure}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ─── SECTION 3.4: CULTURE BLURB ────────────────────────────────── */}
        <section className="bg-surface py-28 lg:py-36 border-b border-border">
          <div className="px-8 md:px-16 lg:px-24 max-w-screen-xl mx-auto">
            <div className="max-w-2xl">
              <h2
                className="font-display font-bold text-bone leading-[0.93] mb-8"
                style={{ fontSize: "clamp(2rem, 3.5vw, 3.5rem)" }}
              >
                A Team Built to Win
              </h2>
              <p className="text-dim text-base leading-relaxed mb-10">
                We hire for drive. We develop for impact. Our team is our most
                critical infrastructure — and we invest in it accordingly.
              </p>
              <a
                href="/careers"
                className="inline-flex items-center gap-3 text-sm tracking-[0.2em] uppercase text-gold
                           hover:text-gold-bright transition-colors duration-200
                           focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold
                           focus-visible:ring-offset-2 focus-visible:ring-offset-surface"
              >
                See Open Roles
                <span aria-hidden>→</span>
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
