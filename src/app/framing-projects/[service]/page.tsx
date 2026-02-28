import Image, { type StaticImageData } from "next/image";
import Link from "next/link";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import LightboxGallery from "../../components/LightboxGallery";
import stickBuiltImage from "../../assets/work/our-work-1.png";
import panelizedImage from "../../assets/work/our-work-8.png";
import multiStoryImage from "../../assets/work/our-work-7.png";
import craneImage from "../../assets/work/our-work-5.png";
import metalFrameImage from "../../assets/services/framing.png";
import iconCommitment from "../../assets/icons/commitment.png";
import iconFraming from "../../assets/icons/framing.png";
import iconReliable from "../../assets/icons/reliable.png";
import iconSeamless from "../../assets/icons/seamless.png";
import { notFound } from "next/navigation";

type BenefitItem = {
  title: string;
  description: string;
  icon?: StaticImageData;
};

type FramingDetailPageData = {
  heroTitle: string;
  introTitle: string;
  introParagraphs: string[];
  benefitsTitle: string;
  benefits: BenefitItem[];
  introImage: StaticImageData;
  secondaryImage: StaticImageData;
  projectImages: StaticImageData[];
};

const framingDetailPages: Record<string, FramingDetailPageData> = {
  "stick-built": {
    heroTitle: "Stick-Built Framing",
    introTitle: "On-Site Precision, Built to Last",
    introParagraphs: [
      "Stick-built framing remains one of the most trusted and versatile construction methods, offering flexibility, durability and full customization for both residential and commercial projects. At JM Quality Construction, we specialize in on-site framing, building every structure to meet state and local codes while maintaining the highest standards of craftsmanship.",
      "With stick-built framing, materials are delivered directly to the job site, allowing for hands-on quality control and easy integration with your project's architectural design.",
    ],
    benefitsTitle: "Why Choose Stick-Built Framing?",
    benefits: [
      {
        title: "Customizable Construction",
        description: "Built on-site to fit exact project specifications",
        icon: iconSeamless,
      },
      {
        title: "Precision and Flexibility",
        description:
          "Adjustments and modifications can be made throughout the process",
        icon: iconFraming,
      },
      {
        title: "Built to Code",
        description:
          "Ensuring compliance with all state and local building regulations",
        icon: iconCommitment,
      },
      {
        title: "Expert Craftsmanship",
        description: "Decades of experience delivering quality framing solutions",
        icon: iconReliable,
      },
    ],
    introImage: stickBuiltImage,
    secondaryImage: multiStoryImage,
    projectImages: [stickBuiltImage, multiStoryImage, craneImage],
  },
  panelized: {
    heroTitle: "Panelized Framing",
    introTitle: "Framing for Faster Builds",
    introParagraphs: [
      "Panelized framing offers a streamlined approach to construction, with wall and floor sections produced offsite and delivered to the construction site for assembly. At JM Quality Construction, we provide expert panelized framing solutions that reduce build time, improve quality control and deliver structural consistency across residential and commercial projects.",
      "Each pre-fabricated section is engineered to meet state and local codes, then transported to the job site for quick and precise installation according to manufacturer's diagrams. This method allows for faster project timelines, reduced material waste and a more controlled building process without sacrificing structural integrity or customization.",
    ],
    benefitsTitle: "Why Choose Panelized Framing?",
    benefits: [
      {
        title: "Faster Build Times",
        description: "Pre-assembled sections reduce on-site labor and delays",
        icon: iconSeamless,
      },
      {
        title: "Consistent Quality",
        description:
          "Manufactured in a controlled environment for precision and reliability",
        icon: iconReliable,
      },
      {
        title: "Cost-Effective",
        description: "Less material waste and improved job site efficiency",
        icon: iconCommitment,
      },
      {
        title: "Code-Compliant and Ready to Install",
        description:
          "Engineered to meet all state and local building regulations",
        icon: iconFraming,
      },
    ],
    introImage: panelizedImage,
    secondaryImage: craneImage,
    projectImages: [panelizedImage, multiStoryImage, stickBuiltImage],
  },
  "metal-buildings": {
    heroTitle: "Metal Buildings",
    introTitle: "Durability for Demanding Environments",
    introParagraphs: [
      "Metal buildings offer strength and versatility, making them a first choice for commercial, industrial and agricultural projects. At JM Quality Construction, we specialize in metal framing and construction, delivering high-performance structures that withstand the elements while providing cost-effective, low-maintenance solutions.",
      "Built similarly to stick-framed structures, with materials delivered to the job site for assembly, metal buildings use steel framing instead of wood, for enhanced durability and fire resistance. Whether for warehouses, workshops, storage facilities or custom commercial spaces, we provide metal buildings precisely engineered to your specifications.",
    ],
    benefitsTitle: "Why Choose Metal Buildings?",
    benefits: [
      {
        title: "Strength & Durability",
        description: "Resistant to fire, pests and harsh weather conditions",
        icon: iconReliable,
      },
      {
        title: "Low Maintenance & Cost-Effective",
        description: "Minimal upkeep compared to traditional wood-framed structures",
        icon: iconCommitment,
      },
      {
        title: "Customizable & Versatile",
        description:
          "Can be designed for various commercial, industrial and agricultural applications",
        icon: iconSeamless,
      },
      {
        title: "Fast & Efficient Construction",
        description:
          "Engineered for streamlined installation and long-term performance",
        icon: iconFraming,
      },
    ],
    introImage: metalFrameImage,
    secondaryImage: multiStoryImage,
    projectImages: [metalFrameImage, craneImage, panelizedImage],
  },
};

export function generateStaticParams() {
  return Object.keys(framingDetailPages).map((service) => ({ service }));
}

export default async function FramingDetailPage({
  params,
}: {
  params: Promise<{ service: string }>;
}) {
  const resolvedParams = await params;
  const page = framingDetailPages[resolvedParams.service];

  if (!page) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-[var(--brand-deep)] text-[var(--brand-cream)]">
      <Header />

      <main className="bg-[#efefef] text-[#2f241d]">
        <section className="relative h-[250px] w-full overflow-hidden text-white sm:h-[310px] lg:h-[430px]">
          <Image
            src={page.introImage}
            alt={page.heroTitle}
            fill
            className="object-cover object-center"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/40 to-black/70" />
          <div className="relative mx-auto flex h-full w-full max-w-6xl flex-col items-start justify-end px-6 pb-8 lg:px-10 lg:pb-11">
            <h1 className="hero-heading text-white">
              {page.heroTitle}
            </h1>
            <p className="mt-2 text-sm font-body text-white/80">
              <Link className="transition-colors hover:text-white" href="/">
                Home
              </Link>{" "}
              /{" "}
              <Link className="transition-colors hover:text-white" href="/framing-projects">
                Framing Projects
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
              <h2 className="section-heading text-[#2f241d]">
                {page.introTitle}
              </h2>
              <div className="mt-4 space-y-4 text-[16px] leading-[1.3] text-[#5f544c] font-body">
                {page.introParagraphs.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
              <a
                className="mt-5 inline-flex items-center justify-center bg-[var(--brand-gold)] px-6 py-2.5 text-[18px] font-extrabold leading-none tracking-[0] !text-white transition hover:bg-[var(--brand-gold-soft)]"
                href="#"
              >
                Request a Quote
              </a>
            </div>
          </div>

          <div className="mt-12 bg-[#ece7db] px-5 py-10 sm:px-8 lg:px-14 lg:py-12">
            <h3 className="section-heading text-center text-[#2f241d]">
              {page.benefitsTitle}
            </h3>
            <ul className="mx-auto mt-8 grid max-w-4xl gap-6 md:grid-cols-2 md:gap-x-8 lg:gap-x-10">
              {page.benefits.map((benefit) => (
                <li
                  key={benefit.title}
                  className="flex flex-col items-center gap-4 text-center md:flex-row md:items-center md:gap-6 md:text-left"
                >
                  <div className="flex aspect-square h-20 w-20 shrink-0 items-center justify-center rounded-full border border-[var(--brand-gold)] p-4">
                    <Image
                      src={benefit.icon ?? iconSeamless}
                      alt=""
                      className="h-10 w-10 object-contain"
                    />
                  </div>
                  <div className="max-w-[520px]">
                    <p className="font-display text-[20px] font-bold uppercase leading-[0.95] tracking-[0] text-[#2f241d] sm:text-[24px]">
                      {benefit.title}
                    </p>
                    <p className="mt-1 text-[16px] leading-[1.2] text-[#6d6057] font-body">
                      {benefit.description}
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
                Explore Our Services
              </Link>
            </div>
          </div>
        </section>

        <section className="mx-auto w-full max-w-6xl px-6 py-10 lg:px-10 lg:py-12">
          <h3 className="section-heading text-center text-[#2f241d]">
            View Our Past Projects
          </h3>
          <LightboxGallery
            images={page.projectImages.map((projectImage, index) => ({
              src: projectImage,
              alt: `${page.heroTitle} past project ${index + 1}`,
            }))}
            gridClassName="mt-7 grid gap-4 md:grid-cols-3"
            itemClassName="relative aspect-[16/9] w-full overflow-hidden bg-[#d2d2d2]"
            imageClassName="object-cover"
          />
        </section>

        <section className="pb-16 pt-8 lg:pb-20">
          <div className="mx-auto w-full max-w-4xl px-6 text-center lg:px-10">
            <h3 className="section-heading text-[#2f241d]">
              Get Your Project Moving
            </h3>
            <p className="mx-auto mt-4 max-w-3xl text-[16px] leading-[1.25] text-[#5f544c] font-body">
              For modular installation, expert framing or reliable
              transportation services, JM Quality Construction delivers
              efficient, forward-thinking solutions backed by decades of
              experience.
            </p>
            <a
              className="mt-6 inline-flex items-center justify-center bg-[var(--brand-gold)] px-6 py-2.5 text-[18px] font-extrabold leading-none tracking-[0] !text-white transition hover:bg-[var(--brand-gold-soft)]"
              href="#"
            >
              Request a Quote
            </a>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
