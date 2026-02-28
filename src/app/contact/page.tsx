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
    <div className="min-h-screen overflow-x-clip bg-[var(--brand-deep)] text-[var(--brand-cream)]">
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
          <div className="relative mx-auto flex h-full w-full max-w-6xl flex-col items-start justify-end px-4 pb-8 sm:px-6 lg:px-10 lg:pb-10">
            <h1 className="hero-heading">
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
          <div className="mx-auto w-full max-w-6xl px-4 py-14 sm:px-6 lg:px-10 lg:py-16">
            <div className="grid items-start gap-8 md:gap-10 xl:grid-cols-[1.1fr_0.9fr]">
              <div className="relative h-[240px] overflow-hidden border border-[#d8d0c4] bg-[#e0ddd6] sm:h-[300px] lg:h-[360px] xl:h-[390px]">
                <iframe
                  title="JM Quality Construction location map"
                  src="https://www.openstreetmap.org/export/embed.html?bbox=-86.25%2C41.35%2C-85.55%2C41.75&layer=mapnik&marker=41.5362%2C-85.7069"
                  className="absolute inset-0 z-10 h-full w-full border-0"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
                <div className="pointer-events-none absolute left-1/2 top-1/2 z-0 h-[82%] w-[82%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#ca7665]/85" />
              </div>

              <div>
                <h2 className="section-heading text-center text-[#2f241d]">
                  JM Quality Construction LLC
                </h2>
                <p className="mt-4 text-[15px] leading-[1.45] text-[#6d6057] font-body sm:text-[16px]">
                  At JM Quality Construction, we are committed to providing
                  first-rate construction and transportation services. Whether
                  you need modular installation, framing solutions or
                  oversized-load transportation, our team is ready to assist.
                  Get in touch today to discuss your project, request a quote
                  or schedule a consultation.
                </p>

                <dl className="mt-7 divide-y divide-[#dbd3c8] text-[15px] text-[#6d6057] font-body sm:text-[16px]">
                  {contactRows.map((row) => (
                    <div
                      key={row.label}
                      className="grid grid-cols-[72px_minmax(0,1fr)] gap-2.5 py-3 sm:grid-cols-[88px_minmax(0,1fr)] sm:gap-4"
                    >
                      <dt className="font-semibold text-[#56483f]">{row.label}</dt>
                      <dd className="break-words">{row.value}</dd>
                    </div>
                  ))}
                </dl>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-[#efefef]">
          <div className="mx-auto w-full max-w-6xl px-4 py-16 sm:px-6 lg:px-10 lg:py-20">
            <div className="max-w-3xl">
              <h2 className="section-heading text-center text-[#2f241d]">
                Tell Us About Your Project
              </h2>
              <p className="mt-4 max-w-2xl text-[15px] leading-[1.45] text-[#6d6057] font-body sm:text-[16px]">
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
