import Image, { type StaticImageData } from "next/image";
import Link from "next/link";
import CtaBand from "../components/CtaBand";
import Footer from "../components/Footer";
import Header from "../components/Header";
import heroImage from "../assets/work/our-work-7.png";
import serviceCommercial from "../assets/services/commercial.png";
import serviceResidential from "../assets/services/residential.png";
import serviceTransportation from "../assets/services/transportation.png";
import serviceFraming from "../assets/services/framing.png";

type ServiceCard = {
  title: string;
  description: string;
  image: StaticImageData;
  href: string;
};

const serviceCards: ServiceCard[] = [
  {
    title: "Commercial",
    description: "Turnkey solutions for developers and commercial projects",
    image: serviceCommercial,
    href: "/services/commercial",
  },
  {
    title: "Residential",
    description: "Assembly and installation of custom modular house components",
    image: serviceResidential,
    href: "/services/residential",
  },
  {
    title: "Transportation",
    description: "Safe, reliable transport for oversized modular structures",
    image: serviceTransportation,
    href: "/services/transportation",
  },
  {
    title: "Framing",
    description:
      "Site-built and modular framing for residential and commercial builds",
    image: serviceFraming,
    href: "/framing-projects",
  },
];

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-[var(--brand-deep)] text-[var(--brand-cream)]">
      <Header />

      <main className="bg-[#efefef] text-[#3a2b22]">
        <section className="relative h-[250px] w-full overflow-hidden text-white sm:h-[310px] lg:h-[430px]">
          <Image
            src={heroImage}
            alt="JM Quality Construction service work"
            fill
            className="object-cover object-center"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/40 to-black/70" />
          <div className="relative mx-auto flex h-full w-full max-w-6xl flex-col items-start justify-end px-6 pb-8 lg:px-10 lg:pb-11">
            <h1 className="font-display text-[50px] font-bold uppercase leading-[0.85] tracking-[0] sm:text-[68px] lg:text-[92px]">
              Our Services
            </h1>
            <p className="mt-2 text-sm font-body text-white/80">
              <Link className="transition-colors hover:text-white" href="/">
                Home
              </Link>{" "}
              / <span className="text-[var(--brand-gold)]">Services</span>
            </p>
          </div>
        </section>

        <section className="bg-[#efefef]">
          <div className="mx-auto w-full max-w-6xl px-6 py-14 lg:px-10 lg:py-16">
            <div className="grid gap-7 md:grid-cols-2">
              {serviceCards.map((card) => (
                <article
                  key={card.title}
                  className="overflow-hidden border border-[#ddd6ce] bg-[#efefef] shadow-[0_6px_16px_rgba(30,22,16,0.12)]"
                >
                  <div className="relative aspect-[527/365] w-full">
                    <Image
                      src={card.image}
                      alt={card.title}
                      fill
                      className="object-cover"
                    />
                  </div>

                  <div className="px-6 py-6">
                    <h2 className="font-display text-[34px] font-bold uppercase leading-[0.9] tracking-[0] text-[#2f241d] sm:text-[40px] lg:text-[48px]">
                      {card.title}
                    </h2>
                    <p className="relative mt-2 max-w-[430px] pl-3 text-[16px] leading-[1.2] text-[#6d6057] font-body">
                      <span
                        className="pointer-events-none absolute left-0 top-0 h-full w-[2px] bg-[var(--brand-gold)]"
                        aria-hidden="true"
                      />
                      {card.description}
                    </p>
                    <Link
                      href={card.href}
                      className="mt-5 inline-flex min-w-[142px] items-center justify-center bg-[var(--brand-gold)] px-6 py-2.5 text-[18px] font-extrabold leading-none tracking-[0] !text-white transition hover:bg-[var(--brand-gold-soft)]"
                    >
                      Learn More
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-[#efefef]">
          <div className="mx-auto w-full max-w-6xl px-6 pb-16 text-center lg:px-10 lg:pb-20">
            <h2 className="font-display text-[40px] font-bold uppercase leading-[0.9] tracking-[0] text-[#2f241d] sm:text-[60px] lg:text-[96px]">
              Expert Construction, Modular Installation & Transportation Solutions
            </h2>
            <p className="mx-auto mt-5 max-w-4xl text-[16px] leading-[1.25] text-[#6d6057] font-body">
              At JM Quality Construction, we provide full-service modular
              installation, framing and transportation solutions for
              residential, commercial and industrial projects. Whether you need
              a turnkey home, a custom-built structure or transport logistics
              for modular buildings, we bring the experience and professionalism
              required to get the job done right the first time.
            </p>
            <p className="mx-auto mt-4 max-w-4xl text-[16px] leading-[1.25] text-[#6d6057] font-body">
              Our services cover everything from permitting and site preparation
              to complete installation and finishing work, providing a smooth
              construction process from start to finish.
            </p>
            <Link
              href="/contact"
              className="mt-8 inline-flex items-center justify-center bg-[var(--brand-gold)] px-8 py-3 text-[18px] font-extrabold leading-none tracking-[0] !text-white transition hover:bg-[var(--brand-gold-soft)]"
            >
              Tell Us About Your Project
            </Link>
          </div>
        </section>
      </main>

      <CtaBand />
      <Footer />
    </div>
  );
}
