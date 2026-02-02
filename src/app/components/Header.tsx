import Image from "next/image";
import logo from "../assets/jm-quality-construction 1.png";

const primaryLinks = [
  "Commercial",
  "Residential",
  "Framing Projects",
  "Transportation",
  "Plumbing",
];

const secondaryLinks = ["Home", "About", "Blog", "Contact"];

export default function Header() {
  return (
    <header className="relative z-20 bg-[var(--brand-gold)] text-[var(--brand-cream)]">
      <div className="mx-auto w-full max-w-6xl px-6 lg:px-10">
        <div className="relative flex flex-wrap items-center justify-between gap-6 pb-9 pt-6 lg:flex-nowrap">
          <Image
            src={logo}
            alt="JM Quality Construction"
            className="h-16 w-auto"
            priority
          />

          <nav className="nav-primary hidden flex-1 items-center justify-end gap-8 text-[1.05rem] uppercase tracking-[0.18em] text-[var(--brand-cream)] lg:flex">
            {primaryLinks.map((link) => (
              <a key={link} className="transition hover:text-white/80" href="#">
                {link}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-3 text-xs uppercase tracking-[0.26em] lg:hidden">
            <span className="h-2 w-2 rotate-45 bg-[var(--brand-cream)]" />
            <span>Menu</span>
          </div>
        </div>
      </div>

      <div className="pointer-events-none absolute bottom-0 left-0 z-30 w-full">
        <div className="nav-links angled-nav absolute right-0 top-0 hidden h-[40px] w-[600px] translate-y-1/2 items-center gap-8 bg-[var(--brand-dark)] px-8 text-[0.82rem] leading-none tracking-[0.12em] text-[var(--brand-cream)] shadow-[0_12px_30px_rgba(0,0,0,0.35)] md:flex">
          <span className="h-2.5 w-2.5 rotate-45 bg-white" />
          {secondaryLinks.map((link) => (
            <a
              key={link}
              className="transition hover:text-white/80 first:ml-10"
              href="#"
            >
              {link}
            </a>
          ))}
        </div>
      </div>
    </header>
  );
}
