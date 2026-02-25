import Image, { type StaticImageData } from "next/image";
import Link from "next/link";
import { notFound, redirect } from "next/navigation";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import serviceCommercial from "../../assets/services/commercial.png";
import serviceResidential from "../../assets/services/residential.png";
import serviceTransportation from "../../assets/services/transportation.png";
import serviceFraming from "../../assets/services/framing.png";
import work1 from "../../assets/work/our-work-1.png";
import work2 from "../../assets/work/our-work-2.png";
import work3 from "../../assets/work/our-work-3.png";
import work5 from "../../assets/work/our-work-5.png";
import work6 from "../../assets/work/our-work-6.png";
import work7 from "../../assets/work/our-work-7.png";
import blogImage from "../../assets/blog/blog pic06.jpg";

type ServicePoint = {
  title: string;
  description: string;
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
      },
      {
        title: "General Contracting",
        description: "Complete oversight for all aspects of your construction project",
      },
      {
        title: "Interior Finishes",
        description: "High-quality work on interiors, exteriors, garages and porches",
      },
      {
        title: "Subcontractor Management",
        description: "We coordinate the best local trades for specialized tasks",
      },
    ],
    introImage: serviceCommercial,
    secondaryImage: work7,
    projectImages: [serviceCommercial, work7, work1],
  },
  residential: {
    heroTitle: "Residential Construction",
    introTitle: "Quality Homes Built with Precision and Care",
    introParagraphs: [
      "JM Quality Construction offers residential construction services for homeowners, builders and developers who need dependable execution and lasting workmanship.",
      "From modular home installation and set work to structural framing and finishing support, our crew keeps each phase organized and aligned with your schedule.",
      "Our goal is simple: deliver a high-quality residential project with clear communication, efficient coordination and reliable field performance.",
    ],
    pointsTitle: "Our Residential Services",
    points: [
      {
        title: "Modular Home Installation",
        description: "Accurate set and placement for custom modular homes",
      },
      {
        title: "Site Coordination",
        description: "Smooth sequencing with builders, trades and inspectors",
      },
      {
        title: "Framing and Structural Work",
        description: "Dependable stick-built and panelized framing support",
      },
      {
        title: "Finish and Completion Support",
        description: "Detail-focused final work to keep your build moving",
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
      },
      {
        title: "Permit Handling & Compliance",
        description: "Securing all necessary state and local transport permits",
      },
      {
        title: "Secure & Experienced Hauling",
        description: "Reliable transport by skilled drivers trained in oversized loads",
      },
      {
        title: "On-Site Delivery Coordination",
        description: "Providing a smooth arrival and setup at the project location",
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

  if (!page) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-[var(--brand-deep)] text-[var(--brand-cream)]">
      <Header />
      <main className="bg-[#efefef] text-[#2f241d]">
        <section className="mx-auto w-full max-w-6xl px-6 pb-8 pt-8 lg:px-10 lg:pb-10 lg:pt-10">
          <div className="relative overflow-hidden bg-[#d5d5d5]">
            <Image
              src={page.introImage}
              alt={page.heroTitle}
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-black/35" />
            <div className="relative flex min-h-[240px] items-center justify-center px-6 text-center sm:min-h-[320px] lg:min-h-[380px]">
              <h1 className="font-display text-[44px] font-bold uppercase leading-[0.9] tracking-[0] text-white sm:text-[62px] lg:text-[86px]">
                {page.heroTitle}
              </h1>
            </div>
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
              <h2 className="font-display text-[34px] font-bold uppercase leading-[0.9] tracking-[0] text-[#2f241d] sm:text-[44px] lg:text-[58px]">
                {page.introTitle}
              </h2>
              <div className="mt-4 space-y-4 text-[16px] leading-[1.3] text-[#5f544c] font-body">
                {page.introParagraphs.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
              <Link
                className="mt-5 inline-flex items-center justify-center bg-[#d7d7d7] px-5 py-2.5 text-[17px] font-semibold leading-none !text-[#29211c] transition hover:bg-[#cbcbcb]"
                href="/contact"
              >
                Tell Us About Your Project
              </Link>
            </div>
          </div>

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
                className="mt-6 inline-flex items-center justify-center bg-[#d7d7d7] px-5 py-2.5 text-[17px] font-semibold leading-none !text-[#29211c] transition hover:bg-[#cbcbcb]"
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
        </section>

        <section className="mx-auto w-full max-w-6xl px-6 py-10 lg:px-10 lg:py-12">
          <h3 className="text-center font-display text-[34px] font-bold uppercase leading-[0.9] tracking-[0] text-[#2f241d] sm:text-[46px] lg:text-[54px]">
            View Our Past Projects
          </h3>
          <div className="mt-7 grid gap-4 md:grid-cols-3 lg:gap-5">
            {page.projectImages.map((projectImage, index) => (
              <div
                key={`${page.heroTitle}-project-${index}`}
                className="relative aspect-[16/9] w-full overflow-hidden bg-[#d2d2d2]"
              >
                <Image
                  src={projectImage}
                  alt={`${page.heroTitle} past project ${index + 1}`}
                  fill
                  className="object-cover"
                />
              </div>
            ))}
          </div>
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
              className="mt-6 inline-flex items-center justify-center bg-[#d7d7d7] px-5 py-2.5 text-[17px] font-semibold leading-none !text-[#29211c] transition hover:bg-[#cbcbcb]"
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
