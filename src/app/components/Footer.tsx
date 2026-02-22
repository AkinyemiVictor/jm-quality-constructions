import Image from "next/image";
import logo from "../assets/logos/jm-quality-construction-footer.png";
import phoneIcon from "../assets/footer/phone.png";
import faxIcon from "../assets/footer/fax.png";
import mailIcon from "../assets/footer/mail.png";
import locationIcon from "../assets/footer/location.png";
import arrowIcon from "../assets/footer/arrow.png";

const contactItems = [
  { label: "260-638-5026", icon: phoneIcon, alt: "Phone" },
  { label: "574-642-3243", icon: faxIcon, alt: "Fax" },
  { label: "jason@shipshewanahomes.com", icon: mailIcon, alt: "Email" },
  {
    label: "P.O. Box 103\nMillersburg, IN 46543",
    icon: locationIcon,
    alt: "Location",
  },
];

const quickLinks = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "#" },
  { label: "News", href: "/news" },
  { label: "Contact", href: "#" },
];
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
              className="h-16 w-auto"
            />
            <p className="mt-6 max-w-sm text-[16px] leading-[1.2] text-white/80 font-body">
              Whether you need modular installation, framing solutions or
              oversized-load transportation, our team is ready to assist.
            </p>
          </div>

          <div>
            <p className="relative inline-block font-display text-[24px] font-bold uppercase leading-[26px] tracking-[0] text-[var(--brand-gold-soft)] after:mt-2 after:block after:h-[2px] after:w-8 after:bg-[var(--brand-gold-soft)]">
              Contact
            </p>
            <div className="mt-6 w-fit space-y-4 text-[16px] leading-[1.2] text-white/85 font-body mx-auto">
              {contactItems.map((item) => {
                return (
                  <div
                    key={item.label}
                    className="grid grid-cols-[16px_1fr] items-center gap-3"
                  >
                    <Image
                      src={item.icon}
                      alt={item.alt}
                      className="h-4 w-4 shrink-0 object-contain"
                    />
                    <span className="whitespace-pre-line text-left">
                      {item.label}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>

          <div>
            <p className="relative inline-block font-display text-[24px] font-bold uppercase leading-[26px] tracking-[0] text-[var(--brand-gold-soft)] after:mt-2 after:block after:h-[2px] after:w-8 after:bg-[var(--brand-gold-soft)]">
              Links
            </p>
            <ul className="mt-6 space-y-3 text-[16px] leading-[1.2] text-white/85 font-body">
              {quickLinks.map((item) => (
                <li key={item.label}>
                  <a
                    className="group flex items-center gap-3 font-body transition-colors hover:text-[var(--brand-gold)]"
                    href={item.href}
                  >
                    <span className="transition group-hover:translate-x-1">
                      <Image
                        src={arrowIcon}
                        alt=""
                        className="h-3 w-3 object-contain"
                      />
                    </span>
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="relative inline-block font-display text-[24px] font-bold uppercase leading-[26px] tracking-[0] text-[var(--brand-gold-soft)] after:mt-2 after:block after:h-[2px] after:w-8 after:bg-[var(--brand-gold-soft)]">
              Services
            </p>
            <ul className="mt-6 space-y-3 text-[16px] leading-[1.2] text-white/85 font-body">
              {services.map((item) => (
                <li key={item}>
                  <a
                    className="group flex items-center gap-3 font-body transition-colors hover:text-[var(--brand-gold)]"
                    href="#"
                  >
                    <span className="transition group-hover:translate-x-1">
                      <Image
                        src={arrowIcon}
                        alt=""
                        className="h-3 w-3 object-contain"
                      />
                    </span>
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-white/15 pt-6 font-body text-[16px] font-normal leading-[1.2] tracking-[0] text-white/70">
          &copy;2023 JM Quality Construction. All Rights Reserved
        </div>
      </div>
    </footer>
  );
}
