import work1 from "../assets/work/our-work-1.png";
import work2 from "../assets/work/our-work-2.png";
import work3 from "../assets/work/our-work-3.png";
import work4 from "../assets/work/our-work-4.png";
import work5 from "../assets/work/our-work-5.png";
import work6 from "../assets/work/our-work-6.png";

export type NewsSection = {
  title: string;
  body: string[];
};

export type NewsPost = {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  category: string;
  image: typeof work1;
  sections: NewsSection[];
};

export const newsPosts: NewsPost[] = [
  {
    slug: "project-spotlight-modular-set-completed",
    title: "Project Spotlight: Modular Set Completed",
    excerpt:
      "A recent modular install in northern Indiana highlights our focus on safe, efficient placement and finish coordination.",
    date: "June 12, 2024",
    category: "Project Update",
    image: work1,
    sections: [
      {
        title: "Overview",
        body: [
          "Our crew completed a two-module set for a residential client in Millersburg, Indiana. The project required precise crane placement, tight street access, and close coordination with local utilities.",
          "By staging the delivery in advance and pre-planning the lift sequence, we reduced on-site downtime and kept the schedule aligned with the builder’s interior finish timeline.",
        ],
      },
      {
        title: "What Went Right",
        body: [
          "A pre-lift walk-through with the transportation team ensured clear turn paths and safe positioning for the set. We also coordinated with the foundation team to confirm anchor placement and tolerances.",
          "The modules were secured, leveled, and weather-sealed the same day, allowing follow-on trades to begin without delay.",
        ],
      },
      {
        title: "Next Steps",
        body: [
          "We are preparing the framing and trim package for the interior crew, along with a final inspection checklist to keep quality consistent across all phases.",
        ],
      },
    ],
  },
  {
    slug: "fleet-update-oversized-haul-upgrades",
    title: "Fleet Update: Oversized Haul Upgrades",
    excerpt:
      "New transport equipment helps us move large modules with improved scheduling and on-site turnaround.",
    date: "May 28, 2024",
    category: "Transportation",
    image: work2,
    sections: [
      {
        title: "Why It Matters",
        body: [
          "Oversized load transportation is a critical part of modular installation. We’ve upgraded several trailers and securing systems to better handle larger modules and tighter delivery windows.",
          "These updates improve routing flexibility, reduce repositioning time at the jobsite, and help us keep projects moving on schedule.",
        ],
      },
      {
        title: "Upgrades Included",
        body: [
          "We added enhanced tie-down points, improved lighting for early-morning staging, and updated escort coordination to meet multi-county permit requirements.",
          "The improvements also make it easier to stage modules in complex urban or rural sites with limited access.",
        ],
      },
    ],
  },
  {
    slug: "framing-crew-expands-for-spring-builds",
    title: "Framing Crew Expands for Spring Builds",
    excerpt:
      "We are adding skilled carpenters to meet demand for residential and commercial framing projects.",
    date: "April 18, 2024",
    category: "Framing",
    image: work3,
    sections: [
      {
        title: "Meeting Demand",
        body: [
          "The spring schedule is filling up fast, so we’re expanding our framing team to keep quality high and timelines tight.",
          "New crew members bring experience in panelized, stick-built, and metal framing systems.",
        ],
      },
      {
        title: "How This Helps Clients",
        body: [
          "More crews mean faster mobilization, tighter sequencing with other trades, and fewer delays due to labor constraints.",
          "We’re also investing in safety training to keep job sites productive and compliant.",
        ],
      },
    ],
  },
  {
    slug: "safety-first-coordination-on-multi-site-jobs",
    title: "Safety-First Coordination on Multi-Site Jobs",
    excerpt:
      "Our team continues to refine staging, permits, and site logistics to keep projects on track.",
    date: "March 22, 2024",
    category: "Operations",
    image: work4,
    sections: [
      {
        title: "Smarter Staging",
        body: [
          "Multi-site projects require careful planning across permits, traffic control, and on-site staging. We’ve refined our checklists to reduce risk and keep crews aligned.",
          "Each site now receives a pre-arrival briefing covering lift points, access routes, and safety procedures.",
        ],
      },
      {
        title: "Consistent Communication",
        body: [
          "We coordinate daily with builders, inspectors, and transportation partners to reduce surprises and keep workflows steady.",
        ],
      },
    ],
  },
  {
    slug: "residential-install-timeline-milestones",
    title: "Residential Install Timeline Milestones",
    excerpt:
      "From foundation prep to final placement, see how we streamline modular home installs.",
    date: "February 9, 2024",
    category: "Residential",
    image: work5,
    sections: [
      {
        title: "Preparation",
        body: [
          "We start with a detailed site review, confirming foundation dimensions, crane access, and local permit requirements.",
          "Utilities are coordinated early to minimize conflicts during set day.",
        ],
      },
      {
        title: "Set Day Execution",
        body: [
          "Modules arrive staged and ready for lift. Our crew secures the placement quickly, seals the structure, and confirms leveling before handoff.",
        ],
      },
    ],
  },
  {
    slug: "commercial-framing-progress-update",
    title: "Commercial Framing Progress Update",
    excerpt:
      "A fast-paced build shows how our framing partners accelerate timelines without sacrificing quality.",
    date: "January 30, 2024",
    category: "Commercial",
    image: work6,
    sections: [
      {
        title: "On-Site Highlights",
        body: [
          "This commercial project moved from foundation to full framing in weeks thanks to coordinated material delivery and clear sequencing.",
          "Our crew worked closely with the general contractor to align inspections and reduce downtime.",
        ],
      },
      {
        title: "Quality Controls",
        body: [
          "We continue to check alignment, fastener schedules, and structural connections at each phase to maintain high standards.",
        ],
      },
    ],
  },
];

export function getNewsPost(slug: string) {
  return newsPosts.find((post) => post.slug === slug);
}
