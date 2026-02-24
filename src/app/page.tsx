import CtaBand from "./components/CtaBand";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Image from "next/image";
import Link from "next/link";
import heroImage from "./assets/hero/image-bg.png";
import iconStars from "./assets/icons/splashing-star.png";
import iconClock from "./assets/icons/moving-clock.png";
import iconPeople from "./assets/icons/men.png";
import iconBuilding from "./assets/icons/cooperate-building.png";
import serviceCommercial from "./assets/services/commercial.png";
import serviceResidential from "./assets/services/residential.png";
import serviceTransportation from "./assets/services/transportation.png";
import serviceFraming from "./assets/services/framing.png";
import work1 from "./assets/work/our-work-1.png";
import work2 from "./assets/work/our-work-2.png";
import work3 from "./assets/work/our-work-3.png";
import work4 from "./assets/work/our-work-4.png";
import work5 from "./assets/work/our-work-5.png";
import work6 from "./assets/work/our-work-6.png";
import work7 from "./assets/work/our-work-7.png";
import work8 from "./assets/work/our-work-8.png";

export default function Home() {
  return (
    <div className="min-h-screen bg-[var(--brand-deep)] text-[var(--brand-cream)]">
      <Header />
      <main>
        <section className="relative h-[360px] w-full overflow-hidden text-white sm:h-[470px] lg:h-[673px]">
          <Image
            src={heroImage}
            alt="JM Quality Construction exterior"
            fill
            className="object-cover object-[center_35%]"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/5 via-black/15 to-black/35" />
          <div className="relative mx-auto flex h-full w-full max-w-6xl flex-col items-start justify-end px-6 pb-10 pt-10 sm:pb-12 lg:px-10 lg:pb-16">
            <h1 className="font-display text-[58px] font-bold uppercase leading-[0.88] tracking-[-0.02em] drop-shadow-md sm:text-[78px] lg:text-[100px] lg:leading-[90px]">
              JM Quality Construction
            </h1>
            <p className="mt-3 max-w-[640px] text-[16px] leading-[1.2] text-white/90 sm:text-[18px] lg:text-[19px]">
              At JM Quality Construction, we specialize in modular installation,
              transportation and framing for commercial and residential projects.
            </p>
            <Link
              className="mt-5 inline-flex min-w-[170px] items-center justify-center bg-[var(--brand-gold)] px-6 py-3 text-[18px] font-extrabold leading-none tracking-[0] text-white shadow-[0_10px_24px_rgba(0,0,0,0.25)] transition hover:bg-[var(--brand-gold-soft)]"
              href="/services"
            >
              Our Services
            </Link>
          </div>
        </section>
        <section className="bg-white text-[#3a2b22]">
          <div className="mx-auto w-full max-w-6xl px-6 py-16 lg:px-10 lg:py-20">
            <div className="text-center">
              <h2 className="font-display text-[42px] font-bold uppercase leading-none tracking-[0] sm:text-[52px] lg:text-[60px]">
                Full-Service Modular Installation,
                <br />
                Framing &amp; Transportation
              </h2>
              <p className="mx-auto mt-4 max-w-3xl text-[16px] leading-[1.2] text-[#6d6057]">
                Our northern Indiana-based team works with developers, builders
                and homeowners to set and complete structures with a focus on
                quality, timeliness and professionalism. Whether placing a
                modular home on its foundation, framing a commercial building or
                managing oversized transportation, we bring the expertise and
                reliability needed to get the job done right.
              </p>
              <p className="mx-auto mt-3 max-w-3xl text-[16px] leading-[1.2] text-[#6d6057]">
                With decades of industry experience, we&apos;ve built a reputation
                for delivering projects on schedule, minimizing downtime and
                maintaining the highest standards of workmanship.
              </p>
              <a
                className="mt-6 inline-flex items-center justify-center bg-[var(--brand-gold)] px-8 py-3 text-[18px] font-extrabold leading-none tracking-[0] !text-white shadow-[0_10px_24px_rgba(0,0,0,0.15)] transition hover:bg-[var(--brand-gold-soft)]"
                href="#"
              >
                Tell Us About Your Project
              </a>
            </div>

            <div className="mt-14 grid gap-8 lg:grid-cols-2">
              {[
                {
                  title: "Commercial",
                  image: serviceCommercial,
                  href: "/services/commercial",
                  description: (
                    <>
                      Turnkey solutions for developers and
                      <br />
                      commercial projects
                    </>
                  ),
                },
                {
                  title: "Residential",
                  image: serviceResidential,
                  href: "/services/residential",
                  description: (
                    <>
                      Assembly and installation of custom
                      <br />
                      modular house components
                    </>
                  ),
                },
                {
                  title: "Transportation",
                  image: serviceTransportation,
                  href: "/services/transportation",
                  description: (
                    <>
                      Safe, reliable transport for oversized
                      <br />
                      modular structures
                    </>
                  ),
                },
                {
                  title: "Framing",
                  image: serviceFraming,
                  href: "/framing-projects",
                  description: (
                    <>
                      Stick-built, panelized and metal framing for
                      <br />
                      residential and commercial builds
                    </>
                  ),
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className="overflow-hidden border border-[#e7e1da] bg-white shadow-[0_12px_30px_rgba(20,12,8,0.12)]"
                >
                  <div className="relative aspect-[527/365] w-full">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="px-6 py-6">
                    <p className="font-display text-[22px] font-normal uppercase leading-[26px] tracking-[0] text-[#3a2b22] sm:text-[24px]">
                      {item.title}
                    </p>
                    <p className="relative mt-2 text-[16px] leading-[1.2] text-[#6d6057] font-link">
                      <span
                        className="pointer-events-none absolute -left-6 top-0 h-full w-[3px] bg-[var(--brand-gold)]"
                        aria-hidden="true"
                      />
                      {item.description}
                    </p>
                    <Link
                      className="mt-4 inline-flex w-fit items-center justify-center bg-[var(--brand-gold)] px-6 py-2.5 text-[18px] font-extrabold leading-none tracking-[0] !text-white transition hover:bg-[var(--brand-gold-soft)]"
                      href={item.href}
                    >
                      Learn More
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        <section className="bg-[#f7efe3] text-[#3a2b22]">
          <div className="mx-auto w-full max-w-6xl px-6 py-16 lg:px-10 lg:py-20">
            <h2 className="text-center font-display text-[34px] font-bold uppercase leading-none tracking-[0] text-[#3a2b22] sm:text-[38px]">
              Why Choose JM Quality Construction?
            </h2>
            <div className="mt-12 grid gap-10 lg:grid-cols-2">
              {[
                {
                  title: "Decades of Experience",
                  description: (
                    <>
                      A team with over 80 years of combined
                      <br />
                      industry expertise
                    </>
                  ),
                  icon: iconStars,
                },
                {
                  title: "Proven Efficiency",
                  description: (
                    <>
                      We show up on time, ready to work and get
                      <br />
                      the job done right the first time
                    </>
                  ),
                  icon: iconClock,
                },
                {
                  title: "Comprehensive Coordination",
                  description: (
                    <>
                      Handling permits, planning and site
                      <br />
                      logistics for smooth execution
                    </>
                  ),
                  icon: iconPeople,
                },
                {
                  title: "Trusted by Builders & Developers",
                  description: (
                    <>
                      From local builds to remote commercial
                      <br />
                      projects, we bring reliability to every job
                    </>
                  ),
                  icon: iconBuilding,
                },
              ].map((item) => {
                const iconSrc = item.icon;
                return (
                  <div key={item.title} className="flex items-center gap-6">
                    <div className="flex aspect-square h-28 w-28 shrink-0 items-center justify-center rounded-full border border-[var(--brand-gold)]">
                      <Image
                        src={iconSrc}
                        alt=""
                        className="h-16 w-16 object-contain"
                      />
                    </div>
                    <div>
                      <p className="font-display text-[22px] font-normal uppercase leading-[26px] tracking-[0] text-[#3a2b22] sm:text-[24px]">
                        {item.title}
                      </p>
                      <p className="mt-2 text-[16px] leading-[1.2] text-[#6d6057] font-link">
                        {item.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
            <div className="mt-12 flex justify-center">
              <Link
                className="inline-flex items-center justify-center bg-[var(--brand-gold)] px-6 py-3 text-[18px] font-extrabold leading-none tracking-[0] !text-white shadow-[0_10px_24px_rgba(0,0,0,0.15)] transition hover:bg-[var(--brand-gold-soft)]"
                href="/services"
              >
                Explore Our Other Services
              </Link>
            </div>
          </div>
        </section>
        <section className="bg-white text-[#3a2b22]">
          <div className="mx-auto w-full max-w-6xl px-6 py-16 lg:px-10 lg:py-20">
            <h2 className="text-center font-display text-[34px] font-bold uppercase leading-none tracking-[0] text-[#3a2b22] sm:text-[38px]">
              Our Work
            </h2>
            <div className="mt-10 grid gap-0 overflow-hidden border border-transparent sm:grid-cols-2 lg:grid-cols-4">
              {[
                work1,
                work2,
                work3,
                work4,
                work5,
                work6,
                work7,
                work8,
              ].map((image, index) => (
                <div
                  key={`work-${index}`}
                  className="relative aspect-[4/3] w-full border border-transparent"
                >
                  <Image
                    src={image}
                    alt={`Our work ${index + 1}`}
                    fill
                    className="object-cover"
                  />
                </div>
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


