import Image from "next/image";
import Link from "next/link";
import Header from "../components/Header";
import CtaBand from "../components/CtaBand";
import Footer from "../components/Footer";
import InquiryForm from "./InquiryForm";
import heroImage from "../assets/work/our-work-2.png";

const contactRows = [
  {
    label: "Address:",
    value: (
      <>
        P.O. Box 103
        <br />
        Millersburg, IN 46543
      </>
    ),
  },
  {
    label: "Email:",
    value: (
      <a className="transition-colors hover:text-[#3a2b22]" href="mailto:jason@shipshewanahomes.com">
        jason@shipshewanahomes.com
      </a>
    ),
  },
  {
    label: "Phone:",
    value: (
      <a className="transition-colors hover:text-[#3a2b22]" href="tel:2606385026">
        260-638-5026
      </a>
    ),
  },
  {
    label: "Fax:",
    value: "574-642-3243",
  },
  {
    label: "Hours:",
    value: "9 a.m.-5 p.m. Monday through Friday",
  },
];

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-[var(--brand-deep)] text-[var(--brand-cream)]">
      <Header />

      <main className="bg-[#efefef] text-[#3a2b22]">
        <section className="relative h-[250px] w-full overflow-hidden text-white sm:h-[285px] lg:h-[320px]">
          <Image
            src={heroImage}
            alt="JM Quality Construction transportation fleet"
            fill
            className="object-cover object-center"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/35 to-black/70" />
          <div className="relative mx-auto flex h-full w-full max-w-6xl flex-col items-start justify-end px-6 pb-8 lg:px-10 lg:pb-10">
            <h1 className="font-display text-[46px] font-bold uppercase leading-[0.85] tracking-[0] sm:text-[62px]">
              Contact Us
            </h1>
            <p className="mt-2 text-sm font-body text-white/80">
              <Link className="transition-colors hover:text-white" href="/">
                Home
              </Link>{" "}
              / <span className="text-[var(--brand-gold)]">Contact</span>
            </p>
          </div>
        </section>

        <section className="bg-[#ece8df]">
          <div className="mx-auto w-full max-w-6xl px-6 py-14 lg:px-10 lg:py-16">
            <div className="grid items-start gap-10 lg:grid-cols-[1.15fr_0.85fr]">
              <div className="relative h-[300px] overflow-hidden border border-[#d8d0c4] bg-[#e0ddd6] sm:h-[360px] lg:h-[390px]">
                <iframe
                  title="JM Quality Construction location map"
                  src="https://www.openstreetmap.org/export/embed.html?bbox=-86.25%2C41.35%2C-85.55%2C41.75&layer=mapnik&marker=41.5362%2C-85.7069"
                  className="absolute inset-0 h-full w-full border-0"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
                <div className="pointer-events-none absolute left-1/2 top-1/2 h-[82%] w-[82%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#ca7665]/35 mix-blend-multiply" />
              </div>

              <div>
                <h2 className="font-display text-[40px] font-bold uppercase leading-[0.9] tracking-[0] text-[#2f241d] sm:text-[54px] lg:text-[62px]">
                  JM Quality Construction LLC
                </h2>
                <p className="mt-4 text-[16px] leading-[1.3] text-[#6d6057] font-body">
                  At JM Quality Construction, we are committed to providing
                  first-rate construction and transportation services. Whether
                  you need modular installation, framing solutions or
                  oversized-load transportation, our team is ready to assist.
                  Get in touch today to discuss your project, request a quote
                  or schedule a consultation.
                </p>

                <dl className="mt-7 divide-y divide-[#dbd3c8] text-[16px] text-[#6d6057] font-body">
                  {contactRows.map((row) => (
                    <div key={row.label} className="grid grid-cols-[78px_1fr] gap-3 py-3 sm:grid-cols-[88px_1fr] sm:gap-4">
                      <dt className="font-semibold text-[#56483f]">{row.label}</dt>
                      <dd>{row.value}</dd>
                    </div>
                  ))}
                </dl>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-[#efefef]">
          <div className="mx-auto w-full max-w-6xl px-6 py-16 lg:px-10 lg:py-20">
            <div className="max-w-3xl">
              <h2 className="font-display text-[42px] font-bold uppercase leading-[0.9] tracking-[0] text-[#2f241d] sm:text-[60px] lg:text-[84px]">
                Tell Us About Your Project
              </h2>
              <p className="mt-4 max-w-2xl text-[16px] leading-[1.3] text-[#6d6057] font-body">
                To get started, call us or fill out the form below with your
                project details. Upload any relevant files, and one of our team
                members will reach out with a custom quote and next steps within
                48 hours.
              </p>
            </div>

            <InquiryForm />
          </div>
        </section>
      </main>

      <CtaBand />
      <Footer />
    </div>
  );
}
