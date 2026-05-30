import Link from "next/link";

const columns = [
  {
    heading: "Company",
    links: ["Home", "Mission", "Our Team"],
    hrefs: ["/", "/mission", "/team"],
  },
  {
    heading: "Solutions",
    links: ["What We Do"],
    hrefs: ["/what-we-do"],
  },
  {
    heading: "Connect",
    links: ["Careers", "Contact"],
    hrefs: ["/careers", "/contact"],
  },
];

const legal = ["Privacy Policy", "Terms of Use", "Cookie Preferences"];

export default function Footer() {
  return (
    <footer className="bg-surface border-t border-border">
      <div className="px-8 md:px-16 lg:px-24 max-w-screen-xl mx-auto">
        <div className="py-16 lg:py-20 grid grid-cols-2 md:grid-cols-4 gap-10">
          <div className="col-span-2 md:col-span-1">
            <Link
              href="/"
              className="font-display text-sm font-bold text-bone tracking-tight mb-4 inline-block
                         hover:text-gold transition-colors duration-200
                         focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gold"
            >
              WORK HARD
            </Link>
            <p className="text-dim text-base leading-relaxed max-w-[200px] italic">
              Innovating at the edge of tomorrow.
            </p>
          </div>

          {columns.map(({ heading, links, hrefs }) => (
            <div key={heading}>
              <p className="text-sm tracking-[0.2em] uppercase text-gold/80 mb-5">
                {heading}
              </p>
              <ul className="space-y-3">
                {links.map((link, i) => (
                  <li key={link}>
                    <Link
                      href={hrefs[i]}
                      className="text-base text-dim hover:text-bone transition-colors duration-200
                                 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gold focus-visible:rounded-sm
                                 active:opacity-50"
                    >
                      {link}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="py-6 border-t border-border flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <p className="text-sm text-dim tracking-wide">
            © 2026 Work Hard Company. All rights reserved.
          </p>
          <div className="flex gap-6">
            {legal.map((item) => (
              <a
                key={item}
                href="#"
                className="text-sm text-dim hover:text-bone transition-colors duration-200
                           focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gold focus-visible:rounded-sm
                           active:opacity-50"
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
