import CtaBand from "./components/CtaBand";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Image from "next/image";
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
        <section className="relative aspect-[1512/673] w-full overflow-hidden text-white">
          <Image
            src={heroImage}
            alt="JM Quality Construction exterior"
            fill
            className="object-cover object-[center_35%]"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/5 via-black/15 to-black/35" />
          <div className="relative mx-auto flex h-full w-full max-w-6xl flex-col items-start justify-end px-6 pb-16 pt-10 lg:px-10">
            <h1 className="font-display text-[100px] font-bold uppercase leading-[90px] tracking-[-0.02em] drop-shadow-md">
              JM Quality Construction
            </h1>
            <p className="mt-3 max-w-[640px] text-[19px] leading-none text-white/90">
              At JM Quality Construction, we specialize in modular installation,
              transportation and framing for commercial and residential projects.
            </p>
            <a
              className="mt-5 inline-flex min-w-[170px] items-center justify-center bg-[var(--brand-gold)] px-6 py-3 text-[18px] font-extrabold leading-none tracking-[0] text-white shadow-[0_10px_24px_rgba(0,0,0,0.25)] transition hover:bg-[var(--brand-gold-soft)]"
              href="#"
            >
              Our Services
            </a>
          </div>
        </section>
        <section className="bg-white text-[#3a2b22]">
          <div className="mx-auto w-full max-w-6xl px-6 py-16 lg:px-10 lg:py-20">
            <div className="text-center">
              <h2 className="font-display text-[60px] font-bold uppercase leading-none tracking-[0]">
                Full-Service Modular Installation,
                <br />
                Framing &amp; Transportation
              </h2>
              <p className="mx-auto mt-4 max-w-3xl text-[16px] leading-none text-[#6d6057]">
                Our northern Indiana-based team works with developers, builders
                and homeowners to set and complete structures with a focus on
                quality, timeliness and professionalism. Whether placing a
                modular home on its foundation, framing a commercial building or
                managing oversized transportation, we bring the expertise and
                reliability needed to get the job done right.
              </p>
              <p className="mx-auto mt-3 max-w-3xl text-[16px] leading-none text-[#6d6057]">
                With decades of industry experience, we’ve built a reputation
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
                    <div className="grid grid-cols-[8px_1fr] gap-x-3 gap-y-2">
                      <span className="row-start-2 h-8 w-[3px] bg-[var(--brand-gold)]" />
                      <p className="col-start-2 font-display text-[24px] font-normal uppercase leading-[26px] tracking-[0] text-[#3a2b22]">
                        {item.title}
                      </p>
                      <p className="col-start-2 text-[16px] leading-none text-[#6d6057] font-link">
                        {item.description}
                      </p>
                      <a
                        className="col-start-2 mt-3 inline-flex items-center justify-center bg-[var(--brand-gold)] px-6 py-2.5 text-[18px] font-extrabold leading-none tracking-[0] !text-white transition hover:bg-[var(--brand-gold-soft)]"
                        href="#"
                      >
                        Learn More
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        <section className="bg-[#f7efe3] text-[#3a2b22]">
          <div className="mx-auto w-full max-w-6xl px-6 py-16 lg:px-10 lg:py-20">
            <h2 className="text-center font-display text-[38px] font-bold uppercase leading-none tracking-[0] text-[#3a2b22]">
              Why Choose JM Quality Construction?
            </h2>
            <div className="mt-12 grid gap-10 lg:grid-cols-2">
              {[
                {
                  title: "Decades of Experience",
                  description:
                    "A team with over 80 years of combined industry expertise",
                  icon: iconStars,
                },
                {
                  title: "Proven Efficiency",
                  description:
                    "We show up on time, ready to work and get the job done right — the first time",
                  icon: iconClock,
                },
                {
                  title: "Comprehensive Coordination",
                  description:
                    "Handling permits, planning and site logistics for smooth execution",
                  icon: iconPeople,
                },
                {
                  title: "Trusted by Builders & Developers",
                  description:
                    "From local builds to remote commercial projects, we bring reliability to every job",
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
                      <p className="font-display text-[24px] font-normal uppercase leading-[26px] tracking-[0] text-[#3a2b22]">
                        {item.title}
                      </p>
                      <p className="mt-2 text-[16px] leading-none text-[#6d6057] font-link">
                        {item.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
            <div className="mt-12 flex justify-center">
              <a
                className="inline-flex items-center justify-center bg-[var(--brand-gold)] px-6 py-3 text-[18px] font-extrabold leading-none tracking-[0] !text-white shadow-[0_10px_24px_rgba(0,0,0,0.15)] transition hover:bg-[var(--brand-gold-soft)]"
                href="#"
              >
                Explore Our Other Services
              </a>
            </div>
          </div>
        </section>
        <section className="bg-white text-[#3a2b22]">
          <div className="mx-auto w-full max-w-6xl px-6 py-16 lg:px-10 lg:py-20">
            <h2 className="text-center font-display text-[38px] font-bold uppercase leading-none tracking-[0] text-[#3a2b22]">
              Our Work
            </h2>
            <div className="mt-10 grid gap-0 overflow-hidden border border-[#e7e1da] lg:grid-cols-4">
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
                  className="relative aspect-[4/3] w-full border border-[#e7e1da]"
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
