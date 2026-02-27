import Image, { type StaticImageData } from "next/image";
import Link from "next/link";
import { notFound, redirect } from "next/navigation";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import LightboxGallery from "../../components/LightboxGallery";
import serviceCommercial from "../../assets/services/commercial.png";
import serviceResidential from "../../assets/services/residential.png";
import serviceTransportation from "../../assets/services/transportation.png";
import serviceFraming from "../../assets/services/framing.png";
import servicesHeroImage from "../../assets/services/services hero image.jpg";
import work1 from "../../assets/work/our-work-1.png";
import work2 from "../../assets/work/our-work-2.png";
import work3 from "../../assets/work/our-work-3.png";
import work5 from "../../assets/work/our-work-5.png";
import work6 from "../../assets/work/our-work-6.png";
import work7 from "../../assets/work/our-work-7.png";
import blogImage from "../../assets/blog/blog pic06.jpg";
import iconTurnkey from "../../assets/icons/turnkey.png";
import iconSitePreparation from "../../assets/icons/site prepearation.png";
import iconExcavator from "../../assets/icons/excavator.png";
import iconGarages from "../../assets/icons/garages.png";
import iconCommitment from "../../assets/icons/commitment.png";
import iconFraming from "../../assets/icons/framing.png";
import iconReliable from "../../assets/icons/reliable.png";
import iconSeamless from "../../assets/icons/seamless.png";

type ServicePoint = {
  title: string;
  description: string;
  icon?: StaticImageData;
};

type ServicePageData = {
  heroTitle: string;
  introTitle: string;
  introParagraphs: string[];
  pointsTitle: string;
  points: ServicePoint[];
  introImage: StaticImageData;
  secondaryImage: StaticImageData;
  projectImages: StaticImageData[];
};

const servicePages: Record<string, ServicePageData> = {
  commercial: {
    heroTitle: "Commercial Construction",
    introTitle: "First-Rate Craftsmanship for Commercial Success",
    introParagraphs: [
      "JM Quality Construction provides comprehensive commercial construction services designed to meet the varying needs of businesses, developers and property owners.",
      "Whether it is modular commercial buildings, interior finishing or exterior additions such as garages and porches, we bring the expertise and reliability that your project demands. For local projects, our team can general contract the entire process or work with subcontractors to deliver top-tier results on time and within budget.",
      "From regional projects to nationwide commercial installations, we make certain each build is executed with a uniform attention to detail, no matter the project size.",
    ],
    pointsTitle: "Our Commercial Services",
    points: [
      {
        title: "Modular Commercial Installation",
        description: "Turnkey solutions for office buildings, retail spaces and more",
        icon: iconSeamless,
      },
      {
        title: "General Contracting",
        description: "Complete oversight for all aspects of your construction project",
        icon: iconFraming,
      },
      {
        title: "Interior Finishes",
        description: "High-quality work on interiors, exteriors, garages and porches",
        icon: iconCommitment,
      },
      {
        title: "Subcontractor Management",
        description: "We coordinate the best local trades for specialized tasks",
        icon: iconReliable,
      },
    ],
    introImage: serviceCommercial,
    secondaryImage: work7,
    projectImages: [serviceCommercial, work7, work1],
  },
  residential: {
    heroTitle: "Residential Construction",
    introTitle: "Building Homes, Strengthening Communities",
    introParagraphs: [
      "JM Quality Construction offers residential construction services for homeowners, builders and developers who need dependable execution and lasting workmanship.",
      "From modular home installation and set work to structural framing and finishing support, our crew keeps each phase organized and aligned with your schedule.",
      "Our goal is simple: deliver a high-quality residential project with clear communication, efficient coordination and reliable field performance.",
    ],
    pointsTitle: "Our Residential Services",
    points: [
      {
        title: "Turnkey Modular Installation",
        description: "Fast, efficient home setting within 90 minutes",
        icon: iconTurnkey,
      },
      {
        title: "Site Preparation & Permitting",
        description: "We handle building permits, site plans, and stakeouts",
        icon: iconSitePreparation,
      },
      {
        title: "Excavation & Foundations",
        description: "Complete grading, well, septic, HVAC, and electrical services",
        icon: iconExcavator,
      },
      {
        title: "Garages, Porches & Pole Barns",
        description: "Full residential add-ons and exterior finishing work",
        icon: iconGarages,
      },
    ],
    introImage: serviceResidential,
    secondaryImage: work2,
    projectImages: [serviceResidential, work2, work3],
  },
  transportation: {
    heroTitle: "Transportation Services",
    introTitle: "Expert Oversized-Load Transport, Managed from Start to Finish",
    introParagraphs: [
      "Transporting modular structures and oversized loads requires careful planning, permitting and execution. At JM Quality Construction, we handle every aspect of oversized-load transportation, helping your modules, equipment and prefabricated structures arrive safely, legally and on time.",
      "From route planning and permit acquisition to secure hauling and on-site delivery coordination, we provide a turnkey transport solution that meets state and federal regulations so you do not have to.",
    ],
    pointsTitle: "Our Transportation Services",
    points: [
      {
        title: "Route Planning & Logistics",
        description: "Mapping the safest, most efficient transport routes",
        icon: iconFraming,
      },
      {
        title: "Permit Handling & Compliance",
        description: "Securing all necessary state and local transport permits",
        icon: iconCommitment,
      },
      {
        title: "Secure & Experienced Hauling",
        description: "Reliable transport by skilled drivers trained in oversized loads",
        icon: iconReliable,
      },
      {
        title: "On-Site Delivery Coordination",
        description: "Providing a smooth arrival and setup at the project location",
        icon: iconSeamless,
      },
    ],
    introImage: serviceTransportation,
    secondaryImage: work5,
    projectImages: [serviceTransportation, work6, work5],
  },
  plumbing: {
    heroTitle: "Plumbing Services",
    introTitle: "Reliable Plumbing Support for Residential and Commercial Builds",
    introParagraphs: [
      "JM Quality Construction provides practical plumbing support as part of our broader project delivery services, helping teams keep installations aligned with schedule and code requirements.",
      "Whether you are coordinating plumbing on a modular install or a new construction project, we focus on clean execution, dependable communication and site-ready coordination.",
      "Our crew works with project stakeholders to keep plumbing scopes efficient, compliant and integrated with the full construction timeline.",
    ],
    pointsTitle: "Our Plumbing Services",
    points: [
      {
        title: "Plumbing Coordination",
        description: "Integrated scheduling with framing, transport and installation teams",
      },
      {
        title: "Code-Conscious Installation",
        description: "Work aligned with local requirements and inspection expectations",
      },
      {
        title: "Project-Ready Support",
        description: "Responsive field communication from rough-in through completion",
      },
      {
        title: "Residential and Commercial Scope",
        description: "Flexible support across home builds and light commercial projects",
      },
    ],
    introImage: serviceFraming,
    secondaryImage: blogImage,
    projectImages: [serviceFraming, blogImage, work1],
  },
};

export function generateStaticParams() {
  return Object.keys(servicePages).map((service) => ({ service }));
}

export default async function ServiceDetailPage({
  params,
}: {
  params: Promise<{ service: string }>;
}) {
  const resolvedParams = await params;

  if (resolvedParams.service === "plumbing") {
    redirect("/plumbing");
  }

  const page = servicePages[resolvedParams.service];
  const usesIconPointsSection = ["residential", "commercial", "transportation"].includes(
    resolvedParams.service,
  );

  if (!page) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-[var(--brand-deep)] text-[var(--brand-cream)]">
      <Header />
      <main className="bg-[#efefef] text-[#2f241d]">
        <section className="relative h-[250px] w-full overflow-hidden text-white sm:h-[310px] lg:h-[430px]">
          <Image
            src={servicesHeroImage}
            alt={page.heroTitle}
            fill
            className="object-cover object-center"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/40 to-black/70" />
          <div className="relative mx-auto flex h-full w-full max-w-6xl flex-col items-start justify-end px-6 pb-8 lg:px-10 lg:pb-11">
            <h1 className="font-display text-[44px] font-bold uppercase leading-[1] tracking-[0] text-white sm:text-[52px] lg:text-[60px]">
              {page.heroTitle}
            </h1>
            <p className="mt-2 text-sm font-body text-white/80">
              <Link className="transition-colors hover:text-white" href="/">
                Home
              </Link>{" "}
              /{" "}
              <Link className="transition-colors hover:text-white" href="/services">
                Services
              </Link>{" "}
              / <span className="text-[var(--brand-gold)]">{page.heroTitle}</span>
            </p>
          </div>
        </section>

        <section className="mx-auto w-full max-w-6xl px-6 py-8 lg:px-10 lg:py-10">
          <div className="grid items-center gap-8 lg:grid-cols-2 lg:gap-10">
            <div className="relative aspect-[16/9] w-full overflow-hidden bg-[#d2d2d2]">
              <Image
                src={page.introImage}
                alt={page.introTitle}
                fill
                className="object-cover"
              />
            </div>

            <div>
              <h2 className="font-display text-[32px] font-bold leading-[1] tracking-[0] text-[#2f241d]">
                {page.introTitle}
              </h2>
              <div className="mt-4 space-y-4 text-[16px] leading-[1.3] text-[#5f544c] font-body">
                {page.introParagraphs.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
              <Link
                className="mt-5 inline-flex items-center justify-center bg-[var(--brand-gold)] px-6 py-2.5 text-[18px] font-extrabold leading-none tracking-[0] !text-white transition hover:bg-[var(--brand-gold-soft)]"
                href="/contact"
              >
                Tell Us About Your Project
              </Link>
            </div>
          </div>

          {usesIconPointsSection ? (
            <div className="mt-12 bg-[#ece7db] px-5 py-10 sm:px-8 lg:px-14 lg:py-12">
              <h3 className="text-center font-display text-[36px] font-bold uppercase leading-[0.9] tracking-[0] text-[#2f241d] sm:text-[48px]">
                {page.pointsTitle}
              </h3>
              <ul className="mx-auto mt-8 grid max-w-4xl gap-6 md:grid-cols-2 md:gap-x-8 lg:gap-x-10">
                {page.points.map((item) => (
                  <li key={item.title} className="flex items-center gap-4">
                    <div className="flex aspect-square h-20 w-20 shrink-0 items-center justify-center rounded-full border border-[var(--brand-gold)] p-4">
                      {item.icon ? (
                        <Image src={item.icon} alt="" className="h-10 w-10 object-contain" />
                      ) : (
                        <span className="h-2 w-2 rounded-full bg-[var(--brand-gold)]" aria-hidden="true" />
                      )}
                    </div>
                    <div>
                      <p className="font-display text-[20px] font-bold uppercase leading-[0.95] tracking-[0] text-[#2f241d] sm:text-[24px]">
                        {item.title}
                      </p>
                      <p className="mt-1 text-[16px] leading-[1.2] text-[#6d6057] font-body">
                        {item.description}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>
              <div className="mt-9 text-center">
                <Link
                  className="inline-flex items-center justify-center bg-[var(--brand-gold)] px-8 py-3 text-[18px] font-extrabold leading-none tracking-[0] !text-white transition hover:bg-[var(--brand-gold-soft)]"
                  href="/services"
                >
                  Explore Our Other Services
                </Link>
              </div>
            </div>
          ) : (
            <div className="mt-12 grid items-center gap-8 lg:grid-cols-2 lg:gap-10">
              <div>
                <h3 className="font-display text-[32px] font-bold uppercase leading-[0.9] tracking-[0] text-[#2f241d] sm:text-[42px] lg:text-[52px]">
                  {page.pointsTitle}
                </h3>
                <ul className="mt-5 space-y-4 text-[#2f241d] font-body">
                  {page.points.map((item) => (
                    <li key={item.title}>
                      <p className="text-[18px] font-bold leading-[1] font-display uppercase text-[#2f241d] sm:text-[21px]">
                        {item.title}
                      </p>
                      <p className="mt-1 text-[16px] leading-[1.25] text-[#5f544c]">
                        {item.description}
                      </p>
                    </li>
                  ))}
                </ul>
                <Link
                  className="mt-6 inline-flex items-center justify-center bg-[var(--brand-gold)] px-6 py-2.5 text-[18px] font-extrabold leading-none tracking-[0] !text-white transition hover:bg-[var(--brand-gold-soft)]"
                  href="/services"
                >
                  Explore Our Services
                </Link>
              </div>

              <div className="relative aspect-[16/9] w-full overflow-hidden bg-[#d2d2d2]">
                <Image
                  src={page.secondaryImage}
                  alt={`${page.heroTitle} project`}
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          )}
        </section>

        <section className="mx-auto w-full max-w-6xl px-6 py-10 lg:px-10 lg:py-12">
          <h3 className="text-center font-display text-[34px] font-bold uppercase leading-[0.9] tracking-[0] text-[#2f241d] sm:text-[46px] lg:text-[54px]">
            View Our Past Projects
          </h3>
          <LightboxGallery
            images={page.projectImages.map((projectImage, index) => ({
              src: projectImage,
              alt: `${page.heroTitle} past project ${index + 1}`,
            }))}
            gridClassName="mt-7 grid gap-4 md:grid-cols-3 lg:gap-5"
            itemClassName="relative aspect-[16/9] w-full overflow-hidden bg-[#d2d2d2]"
            imageClassName="object-cover"
          />
        </section>

        <section className="pb-16 pt-8 lg:pb-20">
          <div className="mx-auto w-full max-w-4xl px-6 text-center lg:px-10">
            <h3 className="font-display text-[34px] font-bold uppercase leading-[0.9] tracking-[0] text-[#2f241d] sm:text-[48px] lg:text-[58px]">
              Get Your Project Moving
            </h3>
            <p className="mx-auto mt-4 max-w-3xl text-[16px] leading-[1.25] text-[#5f544c] font-body">
              For modular installation, expert framing or reliable
              transportation services, JM Quality Construction delivers
              efficient, forward-thinking solutions backed by decades of
              experience.
            </p>
            <Link
              className="mt-6 inline-flex items-center justify-center bg-[var(--brand-gold)] px-6 py-2.5 text-[18px] font-extrabold leading-none tracking-[0] !text-white transition hover:bg-[var(--brand-gold-soft)]"
              href="/contact"
            >
              Request a Quote
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
