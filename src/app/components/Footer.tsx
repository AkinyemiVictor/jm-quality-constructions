import type { SVGProps } from "react";
import Image from "next/image";
import logo from "../assets/jm-quality-construction 1.png";

const contactItems = [
  { label: "260-638-5026", icon: PhoneIcon },
  { label: "574-642-3243", icon: FaxIcon },
  { label: "jason@shipshewanahomes.com", icon: MailIcon },
  { label: "P.O. Box 103\nMillersburg, IN 46543", icon: PinIcon },
];

const quickLinks = ["Home", "About Us", "News", "Contact"];
const services = [
  "Framing",
  "Commercial Construction",
  "Residential Construction",
  "Transportation",
  "Plumbing",
];

export default function Footer() {
  return (
    <footer className="bg-[var(--brand-dark)] text-[var(--brand-cream)]">
      <div className="mx-auto w-full max-w-6xl px-6 py-14 lg:px-10">
        <div className="grid gap-12 lg:grid-cols-[1.2fr_0.9fr_0.7fr_0.9fr]">
          <div>
            <Image
              src={logo}
              alt="JM Quality Construction"
              className="h-12 w-auto"
            />
            <p className="mt-6 max-w-sm text-sm leading-relaxed text-white/80">
              Whether you need modular installation, framing solutions or
              oversized-load transportation, our team is ready to assist.
            </p>
          </div>

          <div>
            <p className="relative inline-block text-sm uppercase tracking-[0.32em] text-[var(--brand-gold-soft)] after:mt-2 after:block after:h-[2px] after:w-8 after:bg-[var(--brand-gold-soft)]">
              Contact
            </p>
            <div className="mt-6 space-y-4 text-sm text-white/85">
              {contactItems.map((item) => {
                const Icon = item.icon;
                return (
                  <div key={item.label} className="flex items-start gap-3">
                    <span className="mt-0.5 flex h-7 w-7 items-center justify-center rounded-full border border-[var(--brand-gold-soft)]/50 text-[var(--brand-gold-soft)]">
                      <Icon className="h-3.5 w-3.5" />
                    </span>
                    <span className="whitespace-pre-line">{item.label}</span>
                  </div>
                );
              })}
            </div>
          </div>

          <div>
            <p className="relative inline-block text-sm uppercase tracking-[0.32em] text-[var(--brand-gold-soft)] after:mt-2 after:block after:h-[2px] after:w-8 after:bg-[var(--brand-gold-soft)]">
              Links
            </p>
            <ul className="mt-6 space-y-2 text-sm text-white/85">
              {quickLinks.map((item) => (
                <li key={item}>
                  <a className="group flex items-center gap-2" href="#">
                    <span className="text-[var(--brand-gold-soft)] transition group-hover:translate-x-1">
                      &gt;
                    </span>
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="relative inline-block text-sm uppercase tracking-[0.32em] text-[var(--brand-gold-soft)] after:mt-2 after:block after:h-[2px] after:w-8 after:bg-[var(--brand-gold-soft)]">
              Services
            </p>
            <ul className="mt-6 space-y-2 text-sm text-white/85">
              {services.map((item) => (
                <li key={item}>
                  <a className="group flex items-center gap-2" href="#">
                    <span className="text-[var(--brand-gold-soft)] transition group-hover:translate-x-1">
                      &gt;
                    </span>
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-white/15 pt-6 text-xs tracking-[0.14em] text-white/70">
          &copy;2023 JM Quality Construction. All Rights Reserved
        </div>
      </div>
    </footer>
  );
}

type IconProps = SVGProps<SVGSVGElement>;

function PhoneIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" {...props}>
      <path
        d="M5 5h4l2 4-2 2a11 11 0 005 5l2-2 4 2v4c0 1-1 2-2 2-8.3 0-15-6.7-15-15 0-1 1-2 2-2z"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function FaxIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" {...props}>
      <path
        d="M7 7V4h10v3M6 10h12a2 2 0 012 2v6H4v-6a2 2 0 012-2z"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M8 14h8M8 17h5"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
    </svg>
  );
}

function MailIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" {...props}>
      <path
        d="M4 6h16v12H4z"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M4 7l8 6 8-6"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function PinIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" {...props}>
      <path
        d="M12 21s6-6 6-11a6 6 0 10-12 0c0 5 6 11 6 11z"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="12" cy="10" r="2.5" strokeWidth="1.6" />
    </svg>
  );
}
