import Image, { type StaticImageData } from "next/image";
import Link from "next/link";
import CtaBand from "../components/CtaBand";
import Footer from "../components/Footer";
import Header from "../components/Header";
import heroImage from "../assets/work/our-work-7.png";
import stickBuiltImage from "../assets/work/our-work-1.png";
import panelizedImage from "../assets/work/our-work-8.png";
import metalBuildingImage from "../assets/services/framing.png";

type FramingService = {
  title: string;
  description: string;
  bullets: string[];
  image: StaticImageData;
  href: string;
};

const framingServices: FramingService[] = [
  {
    title: "Stick-Built",
    description:
      "Materials are delivered to the job site and constructed on location, with adherence to state and local codes.",
    bullets: [
      "Traditional wood framing for residential and commercial buildings",
      "Fully customizable structures built to exact specifications",
      "Built directly on-site for maximum flexibility and quality control",
    ],
    image: stickBuiltImage,
    href: "/framing-projects/stick-built",
  },
  {
    title: "Panelized",
    description:
      "Pre-fabricated wall and floor sections are manufactured offsite and delivered for quick and organized on-site assembly.",
    bullets: [
      "Faster build times with factory-assembled components",
      "Consistent quality and reduced material waste",
      "Structured installation following manufacturer diagrams",
    ],
    image: panelizedImage,
    href: "/framing-projects/panelized",
  },
  {
    title: "Metal Buildings",
    description:
      "Built on-site with durability in mind, metal framing offers a strong, low-maintenance solution for residential, commercial and industrial structures.",
    bullets: [
      "Highly durable and weather-resistant structural framing",
      "Cost-effective and energy-efficient building systems",
      "Ideal for warehouses, industrial buildings and specialty projects",
    ],
    image: metalBuildingImage,
    href: "/framing-projects/metal-buildings",
  },
];

export default function FramingProjectsPage() {
  return (
    <div className="min-h-screen bg-[var(--brand-deep)] text-[var(--brand-cream)]">
      <Header />
      <main className="bg-[#efefef] text-[#3a2b22]">
        <section className="relative h-[320px] w-full overflow-hidden text-white sm:h-[360px] lg:h-[430px]">
          <Image
            src={heroImage}
            alt="Framing project in progress"
            fill
            className="object-cover object-center"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/40 to-black/75" />
          <div className="relative mx-auto flex h-full w-full max-w-6xl flex-col items-start justify-end px-6 pb-8 lg:px-10 lg:pb-11">
            <h1 className="font-display text-[58px] font-bold uppercase leading-[0.9] tracking-[-0.02em] sm:text-[76px] lg:text-[100px]">
              Framing Projects
            </h1>
            <p className="mt-2 text-sm font-body text-white/80">
              <Link className="transition-colors hover:text-white" href="/">
                Home
              </Link>{" "}
              /{" "}
              <span className="text-[var(--brand-gold)]">Framing Projects</span>
            </p>
          </div>
        </section>

        <section className="bg-[#efefef]">
          <div className="mx-auto w-full max-w-6xl px-6 py-14 lg:px-10 lg:py-16">
            <div className="mx-auto max-w-4xl text-center">
              <h2 className="text-center font-display text-[60px] font-bold leading-[1] tracking-[0] text-[#2f241d]">
                Expert Framing Solutions for Any Build
              </h2>
              <p className="mx-auto mt-5 max-w-3xl text-[16px] leading-[1.3] text-[#6d6057] font-body">
                Strong, precise framing is the foundation of every well-built
                structure. At JM Quality Construction, we offer stick-built,
                panelized and metal framing solutions, making certain your
                project is built to the highest industry standards.
              </p>
              <p className="mx-auto mt-4 max-w-3xl text-[16px] leading-[1.3] text-[#6d6057] font-body">
                Whether you are building a single-family home, a large-scale
                commercial structure or a durable metal facility, our
                experienced team delivers efficient, code-compliant framing
                tailored to your specific needs.
              </p>
              <a
                className="mt-8 inline-flex items-center justify-center bg-[var(--brand-gold)] px-8 py-3 text-[18px] font-extrabold leading-none tracking-[0] !text-white shadow-[0_10px_24px_rgba(0,0,0,0.15)] transition hover:bg-[var(--brand-gold-soft)]"
                href="#"
              >
                Tell Us About Your Project
              </a>
            </div>

            <div className="mt-14 space-y-8 lg:space-y-10">
              {framingServices.map((service, index) => (
                <article
                  key={service.title}
                  className={`border border-[#e3ddd5] shadow-[0_8px_20px_rgba(20,12,8,0.08)] ${
                    index === 1 ? "bg-[#efe9de]" : "bg-white"
                  }`}
                >
                  <div className="grid gap-6 px-6 py-7 md:grid-cols-[260px_1fr] md:items-center md:px-8 md:py-9 lg:grid-cols-[290px_1fr]">
                    <div className="relative aspect-[295/149] w-full overflow-hidden bg-[#d8d1c7]">
                      <Image
                        src={service.image}
                        alt={service.title}
                        fill
                        className="object-cover"
                      />
                    </div>

                    <div className="grid gap-5 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)] lg:gap-8">
                      <div>
                        <Link href={service.href}>
                          <h3 className="font-display text-[32px] font-bold leading-[1] tracking-[0] text-[#2f241d] transition-colors hover:text-[var(--brand-gold)]">
                            {service.title}
                          </h3>
                        </Link>
                        <p className="mt-3 text-[16px] leading-[1.28] text-[#6d6057] font-body">
                          {service.description}
                        </p>
                        <Link
                          className="mt-4 inline-flex h-[21px] w-[119px] items-center justify-start gap-2 font-display text-[21px] font-bold uppercase leading-[1] tracking-[0] text-[var(--brand-gold)] transition hover:text-[var(--brand-gold-soft)]"
                          href={service.href}
                        >
                          Learn More <span aria-hidden="true">-&gt;</span>
                        </Link>
                      </div>

                      <ul className="space-y-4 text-[15px] leading-[1.28] text-[#6d6057] font-body">
                        {service.bullets.map((item) => (
                          <li
                            key={item}
                            className="relative pl-5 before:absolute before:left-0 before:top-[8px] before:h-[4px] before:w-[4px] before:rounded-full before:bg-[#84776d]"
                          >
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      </main>
      <CtaBand />
      <Footer />
    </div>
  );
}
