"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import logo from "../assets/logos/jm-quality-construction.png";

const primaryLinks = [
  { label: "Commercial", href: "/services/commercial" },
  { label: "Residential", href: "/services/residential" },
  { label: "Framing Projects", href: "/framing-projects" },
  { label: "Transportation", href: "/services/transportation" },
  { label: "Plumbing", href: "/plumbing" },
];

const secondaryLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="relative z-20 bg-[var(--brand-gold)] text-[var(--brand-cream)]">
      <div className="mx-auto w-full max-w-6xl px-6 lg:px-10">
        <div className="relative flex flex-wrap items-center justify-between gap-6 pb-9 pt-6 min-[1048px]:flex-nowrap">
          <Image
            src={logo}
            alt="JM Quality Construction"
            className="h-16 w-auto max-[868px]:h-12"
            priority
          />

          <nav className="nav-primary hidden flex-1 items-center justify-end gap-8 text-[24px] leading-[26px] font-normal uppercase tracking-[0] text-[var(--brand-cream)] min-[1048px]:flex">
            {primaryLinks.map((link) => (
              <Link
                key={link.label}
                className="text-center transition-colors hover:text-[var(--brand-dark)]"
                href={link.href}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <button
            type="button"
            className="hamburger-menu inline-flex items-center gap-3 text-[24px] leading-none uppercase tracking-[0.26em] min-[1048px]:hidden max-[868px]:gap-2 max-[868px]:text-[18px]"
            aria-expanded={menuOpen}
            aria-label="Toggle navigation menu"
            onClick={() => setMenuOpen((prev) => !prev)}
          >
            <span className="h-4 w-4 rotate-45 bg-[var(--brand-cream)] max-[868px]:h-3 max-[868px]:w-3" />
            <span>{menuOpen ? "Close" : "Menu"}</span>
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className="border-t border-white/15 bg-[var(--brand-dark)] min-[1048px]:hidden">
          <div className="mx-auto grid w-full max-w-6xl gap-1 px-6 py-4">
            {primaryLinks.map((link) => (
              <Link
                key={`mobile-primary-${link.label}`}
                className="rounded-sm px-2 py-2 text-[15px] uppercase tracking-[0.04em] transition-colors hover:bg-white/10 hover:text-[var(--brand-gold)]"
                href={link.href}
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <span className="my-2 h-px w-full bg-white/20" aria-hidden="true" />
            {secondaryLinks.map((link) => (
              <Link
                key={`mobile-secondary-${link.label}`}
                className="rounded-sm px-2 py-2 text-[14px] transition-colors hover:bg-white/10 hover:text-[var(--brand-gold)]"
                href={link.href}
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      )}

      <div className="pointer-events-none absolute bottom-0 left-0 z-30 w-full">
        <div className="nav-links angled-nav pointer-events-auto absolute right-0 top-0 hidden h-[40px] w-[600px] translate-y-1/2 items-center gap-8 bg-[var(--brand-dark)] px-8 text-[16px] leading-none font-normal tracking-[0] text-[var(--brand-cream)] shadow-[0_12px_30px_rgba(0,0,0,0.35)] min-[1048px]:flex">
          <span className="h-2.5 w-2.5 rotate-45 bg-white" />
          {secondaryLinks.map((link) => (
            <Link
              key={link.label}
              className="text-center transition-colors hover:text-[var(--brand-gold)] first:ml-10"
              href={link.href}
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </header>
  );
}
