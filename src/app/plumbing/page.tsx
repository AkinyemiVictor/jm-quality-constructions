import Image, { type StaticImageData } from "next/image";
import Link from "next/link";
import CtaBand from "../components/CtaBand";
import Footer from "../components/Footer";
import Header from "../components/Header";
import heroImage from "../assets/work/our-work-2.png";
import serviceResidential from "../assets/services/residential.png";
import serviceCommercial from "../assets/services/commercial.png";
import serviceTransportation from "../assets/services/transportation.png";
import framingImage from "../assets/services/framing.png";
import work5 from "../assets/work/our-work-5.png";
import iconStars from "../assets/icons/splashing-star.png";
import iconPeople from "../assets/icons/men.png";
import iconClock from "../assets/icons/moving-clock.png";
import iconBuilding from "../assets/icons/cooperate-building.png";

type PlumbingServiceCard = {
  title: string;
  description: string;
  image: StaticImageData;
};

const plumbingServices: PlumbingServiceCard[] = [
  {
    title: "New Construction Plumbing",
    description:
      "Complete rough-in and finish plumbing for new homes, additions and semi commercial structures.",
    image: serviceResidential,
  },
  {
    title: "Kitchen & Bathroom Plumbing",
    description:
      "Fixture installation, faucet replacement, drain line hookups and remodel plumbing.",
    image: serviceCommercial,
  },
  {
    title: "Water Heaters",
    description:
      "Installation and replacement. Efficient solutions for standard and tankless water heaters.",
    image: framingImage,
  },
  {
    title: "Sump Pumps & Sewer Lines",
    description:
      "Prompt work from new drainage systems to sump pump and sewer service upgrades.",
    image: serviceTransportation,
  },
  {
    title: "Septic Systems",
    description: "Certified with Besler Dirtworks for septic installation and service.",
    image: work5,
  },
];

const processSteps = [
  {
    title: "Call Our Office",
    description: "Our team takes calls during regular business hours.",
  },
  {
    title: "Schedule a Visit",
    description: "We will discuss your project and arrange a time.",
  },
  {
    title: "On-Site Assessment",
    description: "Our plumber evaluates your needs and provides a clear estimate.",
  },
  {
    title: "Licensed Installation/Repair",
    description:
      "Work is completed to code, with the same quality standards that define our construction services.",
  },
];

const whyChooseItems = [
  {
    title: "Licensed Indiana Plumber",
    description:
      "Professional experience and trusted partners for Michigan properties",
    icon: iconBuilding,
  },
  {
    title: "Integrated Approach",
    description:
      "With our construction services for turnkey solutions",
    icon: iconPeople,
  },
  {
    title: "Straightforward Scheduling",
    description: "Available Monday through Friday, 9 a.m. to 5 p.m.",
    icon: iconStars,
  },
  {
    title: "Responsive Service",
    description: "Typically within 90 minutes of Millersburg, IN",
    icon: iconClock,
  },
];

export default function PlumbingPage() {
  return (
    <div className="min-h-screen bg-[var(--brand-deep)] text-[var(--brand-cream)]">
      <Header />

      <main className="bg-[#efefef] text-[#3a2b22]">
        <section className="relative h-[260px] w-full overflow-hidden text-white sm:h-[310px] lg:h-[430px]">
          <Image
            src={heroImage}
            alt="Plumbing service work"
            fill
            className="object-cover object-center"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/45 to-black/75" />
          <div className="relative mx-auto flex h-full w-full max-w-6xl flex-col items-start justify-end px-6 pb-8 lg:px-10 lg:pb-11">
            <h1 className="font-display text-[48px] font-bold uppercase leading-[0.85] tracking-[0] sm:text-[66px] lg:text-[90px]">
              Plumbing
            </h1>
            <p className="mt-2 text-sm font-body text-white/80">
              <Link className="transition-colors hover:text-white" href="/">
                Home
              </Link>{" "}
              / <span className="text-[var(--brand-gold)]">Plumbing</span>
            </p>
          </div>
        </section>

        <section className="bg-[#efefef]">
          <div className="mx-auto w-full max-w-6xl px-6 py-14 lg:px-10 lg:py-16">
            <div className="mx-auto max-w-4xl text-center">
              <h2 className="font-display text-[40px] font-bold uppercase leading-[0.9] tracking-[0] text-[#2f241d] sm:text-[56px] lg:text-[68px]">
                Reliable Plumbing, Backed By Licensed Expertise
              </h2>
              <p className="mx-auto mt-4 max-w-3xl text-[16px] leading-[1.3] text-[#6d6057] font-body">
                From new construction installs to repair and replacement work,
                JM Quality Construction delivers high-quality plumbing services
                you can trust. Our team handles every project in-house with a
                licensed Indiana plumber. We also accept calls from Michigan
                homeowners.
              </p>
            </div>

            <div className="mt-12 grid gap-7 md:grid-cols-3">
              {plumbingServices.slice(0, 3).map((card) => (
                <article
                  key={card.title}
                  className="overflow-hidden border border-[#ddd6ce] bg-[#efefef] shadow-[0_6px_16px_rgba(30,22,16,0.12)]"
                >
                  <div className="relative aspect-[4/3] w-full">
                    <Image src={card.image} alt={card.title} fill className="object-cover" />
                  </div>
                  <div className="px-6 py-5">
                    <h3 className="font-display text-[28px] font-bold uppercase leading-[0.9] tracking-[0] text-[#2f241d] sm:text-[32px] lg:text-[36px]">
                      {card.title}
                    </h3>
                    <p className="relative mt-2 min-h-[58px] pl-3 text-[15px] leading-[1.2] text-[#6d6057] font-body">
                      <span
                        className="pointer-events-none absolute left-0 top-0 h-full w-[2px] bg-[var(--brand-gold)]"
                        aria-hidden="true"
                      />
                      {card.description}
                    </p>
                    <Link
                      href="/contact"
                      className="mt-4 inline-flex min-w-[122px] items-center justify-center bg-[var(--brand-gold)] px-6 py-2.5 text-[18px] font-extrabold leading-none tracking-[0] !text-white transition hover:bg-[var(--brand-gold-soft)]"
                    >
                      Learn More
                    </Link>
                  </div>
                </article>
              ))}
            </div>

            <div className="mt-7 grid gap-7 md:grid-cols-3">
              {plumbingServices.slice(3, 5).map((card) => (
                <article
                  key={card.title}
                  className="overflow-hidden border border-[#ddd6ce] bg-[#efefef] shadow-[0_6px_16px_rgba(30,22,16,0.12)]"
                >
                  <div className="relative aspect-[4/3] w-full">
                    <Image src={card.image} alt={card.title} fill className="object-cover" />
                  </div>
                  <div className="px-6 py-5">
                    <h3 className="font-display text-[28px] font-bold uppercase leading-[0.9] tracking-[0] text-[#2f241d] sm:text-[32px] lg:text-[36px]">
                      {card.title}
                    </h3>
                    <p className="relative mt-2 min-h-[58px] pl-3 text-[15px] leading-[1.2] text-[#6d6057] font-body">
                      <span
                        className="pointer-events-none absolute left-0 top-0 h-full w-[2px] bg-[var(--brand-gold)]"
                        aria-hidden="true"
                      />
                      {card.description}
                    </p>
                    <Link
                      href="/contact"
                      className="mt-4 inline-flex min-w-[122px] items-center justify-center bg-[var(--brand-gold)] px-6 py-2.5 text-[18px] font-extrabold leading-none tracking-[0] !text-white transition hover:bg-[var(--brand-gold-soft)]"
                    >
                      Learn More
                    </Link>
                  </div>
                </article>
              ))}

              <article className="border border-transparent bg-transparent px-2 py-3">
                <h3 className="font-display text-[30px] font-bold uppercase leading-[0.9] tracking-[0] text-[#2f241d] sm:text-[40px]">
                  What We Don&apos;t Do
                </h3>
                <ul className="mt-4 space-y-2 text-[15px] leading-[1.2] text-[#6d6057] font-body">
                  <li>- 24-hour Emergency Calls</li>
                  <li>- Drain Cleanouts</li>
                  <li>- Well Systems</li>
                </ul>
              </article>
            </div>
          </div>
        </section>

        <section className="bg-[#efefef]">
          <div className="mx-auto w-full max-w-6xl px-6 pb-14 lg:px-10 lg:pb-16">
            <div className="bg-[#ece7db] px-6 py-10 sm:px-10 lg:px-14 lg:py-12">
              <h2 className="text-center font-display text-[36px] font-bold uppercase leading-[0.9] tracking-[0] text-[#2f241d] sm:text-[48px] lg:text-[60px]">
                Why Choose JM Quality Construction Plumbing?
              </h2>
              <div className="mt-8 grid gap-6 md:grid-cols-2">
                {whyChooseItems.map((item) => (
                  <div key={item.title} className="flex items-center gap-4">
                    <div className="flex h-20 w-20 shrink-0 items-center justify-center rounded-full border border-[var(--brand-gold)] p-4">
                      <Image src={item.icon} alt="" className="h-10 w-10 object-contain" />
                    </div>
                    <div>
                      <p className="font-display text-[20px] font-bold uppercase leading-[0.95] text-[#2f241d] sm:text-[24px]">
                        {item.title}
                      </p>
                      <p className="mt-1 text-[14px] leading-[1.2] text-[#6d6057] font-body">
                        {item.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-8 text-center">
                <Link
                  href="/services"
                  className="inline-flex items-center justify-center bg-[var(--brand-gold)] px-8 py-3 text-[18px] font-extrabold leading-none tracking-[0] !text-white transition hover:bg-[var(--brand-gold-soft)]"
                >
                  Explore our Services
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-[#efefef]">
          <div className="mx-auto w-full max-w-6xl px-6 pb-14 lg:px-10 lg:pb-16">
            <h2 className="text-center font-display text-[36px] font-bold uppercase leading-[0.9] tracking-[0] text-[#2f241d] sm:text-[48px] lg:text-[60px]">
              Our Process
            </h2>
            <div className="mt-6 grid gap-5 md:grid-cols-4">
              {processSteps.map((step, index) => (
                <div key={step.title} className="relative border-l-4 border-[var(--brand-gold)] pl-4">
                  <p className="font-display text-[18px] font-bold uppercase leading-none tracking-[0] text-[#2f241d]">
                    {index + 1}. {step.title}
                  </p>
                  <p className="mt-2 text-[14px] leading-[1.2] text-[#6d6057] font-body">
                    {step.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-[#efefef]">
          <div className="mx-auto w-full max-w-3xl px-6 pb-16 lg:pb-20">
            <h2 className="font-display text-[36px] font-bold uppercase leading-[0.9] tracking-[0] text-[#2f241d] sm:text-[48px] lg:text-[60px]">
              Contact JM Quality Construction Plumbing
            </h2>

            <form className="mt-7 space-y-4">
              <div>
                <label className="block text-[15px] font-semibold text-[#2f241d] font-body" htmlFor="plumbing-name">
                  Full Name
                </label>
                <input id="plumbing-name" name="name" type="text" className="mt-1 h-11 w-full border border-[#b9b2a8] bg-white px-3 text-[15px] text-[#3a2b22] outline-none transition focus:border-[var(--brand-gold)]" />
              </div>

              <div>
                <label className="block text-[15px] font-semibold text-[#2f241d] font-body" htmlFor="plumbing-email">
                  Email
                </label>
                <input id="plumbing-email" name="email" type="email" className="mt-1 h-11 w-full border border-[#b9b2a8] bg-white px-3 text-[15px] text-[#3a2b22] outline-none transition focus:border-[var(--brand-gold)]" />
              </div>

              <div>
                <label className="block text-[15px] font-semibold text-[#2f241d] font-body" htmlFor="plumbing-phone">
                  Phone
                </label>
                <input id="plumbing-phone" name="phone" type="tel" className="mt-1 h-11 w-full border border-[#b9b2a8] bg-white px-3 text-[15px] text-[#3a2b22] outline-none transition focus:border-[var(--brand-gold)]" />
              </div>

              <div>
                <label className="block text-[15px] font-semibold text-[#2f241d] font-body" htmlFor="plumbing-address">
                  Address
                </label>
                <input id="plumbing-address" name="address" type="text" className="mt-1 h-11 w-full border border-[#b9b2a8] bg-white px-3 text-[15px] text-[#3a2b22] outline-none transition focus:border-[var(--brand-gold)]" />
              </div>

              <div>
                <label className="block text-[15px] font-semibold text-[#2f241d] font-body" htmlFor="plumbing-service">
                  Service Needed
                </label>
                <input id="plumbing-service" name="service" type="text" className="mt-1 h-11 w-full border border-[#b9b2a8] bg-white px-3 text-[15px] text-[#3a2b22] outline-none transition focus:border-[var(--brand-gold)]" />
              </div>

              <div>
                <label className="block text-[15px] font-semibold text-[#2f241d] font-body" htmlFor="plumbing-needs">
                  Project Needs
                </label>
                <p className="mt-0.5 text-[12px] leading-none text-[#8f8578] font-body">
                  Brief description of scope, timeline, or specific needs
                </p>
                <textarea id="plumbing-needs" name="needs" rows={5} className="mt-1 w-full border border-[#b9b2a8] bg-white px-3 py-2 text-[15px] text-[#3a2b22] outline-none transition focus:border-[var(--brand-gold)]" />
              </div>

              <div>
                <label className="block text-[15px] font-semibold text-[#2f241d] font-body" htmlFor="plumbing-photos">
                  Upload Photos
                </label>
                <p className="mt-0.5 text-[12px] leading-none text-[#8f8578] font-body">
                  Accepted formats: jpg, png
                </p>
                <div className="mt-2 grid gap-3 sm:grid-cols-[1fr_auto]">
                  <input id="plumbing-photos" name="photos" type="file" className="h-11 w-full border border-[#b9b2a8] bg-white px-3 py-2 text-[14px] text-[#3a2b22] file:mr-4 file:border-0 file:bg-[#efefef] file:px-3 file:py-1.5 file:text-[14px] file:font-medium file:text-[#3a2b22]" />
                  <button type="button" className="inline-flex h-11 min-w-[110px] items-center justify-center bg-[#7f7f7f] px-5 text-[16px] font-extrabold leading-none tracking-[0] !text-white transition hover:bg-[#6f6f6f]">
                    Upload
                  </button>
                </div>
              </div>

              <button type="submit" className="mt-2 inline-flex h-11 min-w-[126px] items-center justify-center bg-[var(--brand-gold)] px-7 text-[16px] font-extrabold leading-none tracking-[0] !text-white transition hover:bg-[var(--brand-gold-soft)]">
                Submit
              </button>
            </form>
          </div>
        </section>
      </main>

      <CtaBand />
      <Footer />
    </div>
  );
}
