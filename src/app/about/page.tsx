import Image from "next/image";
import Link from "next/link";
import CtaBand from "../components/CtaBand";
import Footer from "../components/Footer";
import Header from "../components/Header";
import LightboxGallery from "../components/LightboxGallery";
import heroImage from "../assets/hero/about hero image.jpg";
import featureImage from "../assets/modular experetise.png";
import iconCommitment from "../assets/icons/commitment.png";
import iconFraming from "../assets/icons/framing.png";
import iconReliable from "../assets/icons/reliable.png";
import iconSeamless from "../assets/icons/seamless.png";
import work1 from "../assets/work/our-work-1.png";
import work2 from "../assets/work/our-work-2.png";
import work3 from "../assets/work/our-work-3.png";
import work4 from "../assets/work/our-work-4.png";
import work5 from "../assets/work/our-work-5.png";
import work6 from "../assets/work/our-work-6.png";
import work7 from "../assets/work/our-work-7.png";
import work8 from "../assets/work/our-work-8.png";

const differentiators = [
  {
    title: "Seamless Modular Installation",
    description: "Complete residential and commercial modular home sets",
    icon: iconSeamless,
  },
  {
    title: "Framing & General Contracting",
    description: "Stick-built, panelized, and metal framing solutions",
    icon: iconFraming,
  },
  {
    title: "Reliable Transportation",
    description: "Oversized load transport, permitting, and on-site coordination",
    icon: iconReliable,
  },
  {
    title: "Commitment to Efficiency & Quality",
    description: "On time, professional, and always project-focused",
    icon: iconCommitment,
  },
];

const workImages = [work1, work2, work3, work4, work5, work6, work7, work8];

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-[var(--brand-deep)] text-[var(--brand-cream)]">
      <Header />

      <main className="bg-[#efefef] text-[#3a2b22]">
        <section className="relative h-[250px] w-full overflow-hidden text-white sm:h-[295px] lg:h-[340px]">
          <Image
            src={heroImage}
            alt="JM Quality Construction crew installation project"
            fill
            className="object-cover object-center"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/35 to-black/70" />
          <div className="relative mx-auto flex h-full w-full max-w-6xl flex-col items-start justify-end px-6 pb-8 lg:px-10 lg:pb-10">
            <h1 className="hero-heading">
              About Us
            </h1>
            <p className="mt-2 text-sm font-body text-white/80">
              <Link className="transition-colors hover:text-white" href="/">
                Home
              </Link>{" "}
              / <span className="text-[var(--brand-gold)]">About Us</span>
            </p>
          </div>
        </section>

        <section className="bg-[#efefef]">
          <div className="mx-auto w-full max-w-6xl px-6 py-14 lg:px-10 lg:py-16">
            <div className="grid items-center gap-8 lg:grid-cols-[1.15fr_0.85fr] lg:gap-10">
              <div className="relative aspect-[4/3] w-full overflow-hidden bg-[#d6d2ca] lg:aspect-square">
                <Image
                  src={featureImage}
                  alt="Modular installation project"
                  fill
                  className="object-cover"
                />
              </div>

              <div className="max-w-[560px]">
                <h2 className="section-heading text-[#2f241d]">
                  Modular Expertise. Quality Craftsmanship. Trusted Partnerships.
                </h2>
                <div className="mt-5 space-y-5 text-[16px] leading-[1.35] text-[#6d6057] font-body text-justify">
                  <p>
                    At JM Quality Construction, we specialize in modular
                    installation, framing and transportation, serving
                    residential and commercial projects across the country. An
                    extension of{" "}
                    <a
                      href="https://shipshewanahomes.com/"
                      target="_blank"
                      rel="noreferrer"
                      className="text-[var(--brand-gold)] transition-colors hover:text-[var(--brand-gold-soft)]"
                    >
                      Shipshewana Homes
                    </a>
                    , we are capable of taking the vision from concept to
                    completion, executing every project with the highest
                    standards of quality and integrity.
                  </p>
                  <p>
                    Whether setting modular homes on island and coastal
                    locations or delivering complex commercial installations, our
                    team is equipped to handle logistics and construction
                    details that bring your project to life.
                  </p>
                  <p>
                    With 80+ years of combined industry experience, we have
                    built a reputation for efficiency, professionalism and
                    dependability. Our team shows up ready to work, problem-solve
                    and execute with precision while keeping projects on time
                    and within budget.
                  </p>
                </div>
                <Link
                  href="/contact"
                  className="mt-7 inline-flex items-center justify-center bg-[var(--brand-gold)] px-8 py-3 text-[18px] font-extrabold leading-none tracking-[0] !text-white transition hover:bg-[var(--brand-gold-soft)]"
                >
                  Tell Us About Your Project
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-[#efefef]">
          <div className="mx-auto w-full max-w-6xl px-6 pb-14 lg:px-10 lg:pb-16">
            <div className="bg-[#ece7db] px-6 py-10 sm:px-10 lg:px-14 lg:py-12">
              <h2 className="section-heading text-center text-[#2f241d]">
                What Sets Us Apart?
              </h2>
              <div className="mt-8 grid gap-7 md:grid-cols-2">
                {differentiators.map((item) => (
                  <div
                    key={item.title}
                    className="flex flex-col items-center gap-4 text-center md:flex-row md:items-center md:gap-6 md:text-left"
                  >
                    <div className="flex aspect-square h-20 w-20 shrink-0 items-center justify-center rounded-full border border-[var(--brand-gold)] p-4">
                      <Image
                        src={item.icon}
                        alt=""
                        className="h-10 w-10 object-contain"
                      />
                    </div>
                    <div className="min-w-0 max-w-[520px]">
                      <p className="font-display text-[24px] font-normal uppercase leading-[26px] tracking-[0] text-[#2f241d]">
                        {item.title}
                      </p>
                      <p className="mt-1 text-[15px] leading-[1.3] text-[#6d6057] font-body">
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
          <div className="mx-auto w-full max-w-6xl px-6 pb-16 lg:px-10 lg:pb-20">
            <h2 className="section-heading text-center text-[#2f241d]">
              Our Work
            </h2>
            <LightboxGallery
              images={workImages.map((image, index) => ({
                src: image,
                alt: `JM Quality Construction project ${index + 1}`,
              }))}
              gridClassName="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4"
              itemClassName="relative aspect-[4/3] w-full border border-transparent"
              imageClassName="object-cover"
            />
          </div>
        </section>
      </main>

      <CtaBand />
      <Footer />
    </div>
  );
}
