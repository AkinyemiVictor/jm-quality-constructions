import blog1 from "../assets/blog/blog pic01.jpg";
import blog2 from "../assets/blog/blog pic02.jpg";
import blog3 from "../assets/blog/blog pic03.jpg";
import blog5 from "../assets/blog/blog pic05.jpg";
import blog6 from "../assets/blog/blog pic06.jpg";
import blog7 from "../assets/blog/blog pic07.jpg";

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
  image: typeof blog1;
  sections: NewsSection[];
};

export const newsPosts: NewsPost[] = [
  {
    slug: "project-spotlight-modular-set-completed",
    title: "Project Spotlight: Modular Set Completed",
    excerpt:
      "A recent modular set in northern Indiana highlights our focus on safety, sequencing, and clean finish coordination.",
    date: "June 12, 2024",
    category: "Project Update",
    image: blog3,
    sections: [
      {
        title: "Project Scope",
        body: [
          "This project included transport, crane set, structural tie-in, and weatherproofing for a two-piece residential modular home in Millersburg, Indiana.",
          "Because the site had limited approach room and nearby utility lines, we finalized a detailed placement plan before delivery day to avoid delays and rework.",
        ],
      },
      {
        title: "Execution and Timeline",
        body: [
          "Our transportation and set crews staged arrivals in sequence so each module moved directly from delivery to lift position with minimal idle time.",
          "Both modules were leveled, fastened, and sealed the same day, allowing interior finish teams to begin on schedule the next morning.",
        ],
      },
      {
        title: "Outcome",
        body: [
          "Final trim and punch coordination were completed with the builder using a closeout checklist focused on alignment, moisture control, and connection quality.",
          "The client received a clean handoff with no critical corrections, keeping the overall build timeline intact.",
        ],
      },
    ],
  },
  {
    slug: "fleet-update-oversized-haul-upgrades",
    title: "Fleet Update: Oversized Haul Upgrades",
    excerpt:
      "Recent transportation upgrades improve load stability, route flexibility, and on-site turnaround for oversized modules.",
    date: "May 28, 2024",
    category: "Transportation",
    image: blog5,
    sections: [
      {
        title: "What Was Added",
        body: [
          "We upgraded key hauling equipment, including reinforced tie-down configurations, improved lighting, and updated trailer hardware for oversized module movement.",
          "These changes give our crews better control during loading, transport, and final placement staging.",
        ],
      },
      {
        title: "Operational Impact",
        body: [
          "The updated setup shortens turnaround at delivery sites by reducing repositioning steps and improving crane-ready module alignment.",
          "Permit routing is also smoother across multi-county deliveries because escorts, timing, and route clearances can be planned with tighter accuracy.",
        ],
      },
      {
        title: "Safety and Compliance",
        body: [
          "Each upgraded unit now follows revised pre-trip checks for securement, lighting, and permit verification before dispatch.",
          "This keeps compliance consistent and lowers risk during long-haul and restricted-access moves.",
        ],
      },
    ],
  },
  {
    slug: "framing-crew-expands-for-spring-builds",
    title: "Framing Crew Expands for Spring Builds",
    excerpt:
      "We are expanding framing capacity to meet spring demand across residential and light commercial projects.",
    date: "April 18, 2024",
    category: "Framing",
    image: blog7,
    sections: [
      {
        title: "Team Expansion Plan",
        body: [
          "Our spring pipeline includes overlapping starts, so we added experienced foremen and carpenters to support parallel framing schedules.",
          "New team members bring practical field experience in wood framing, panelized systems, and mixed structural layouts.",
        ],
      },
      {
        title: "Training and Standards",
        body: [
          "Every incoming crew member completes our safety and quality onboarding process before joining active jobs.",
          "That includes layout verification, fastening standards, framing tolerance checks, and daily production reporting.",
        ],
      },
      {
        title: "Capacity Gains for Clients",
        body: [
          "With larger crews, we can mobilize faster and maintain schedule continuity when projects shift phases.",
          "Clients benefit from shorter wait times, tighter trade coordination, and more predictable framing completion dates.",
        ],
      },
    ],
  },
  {
    slug: "safety-first-coordination-on-multi-site-jobs",
    title: "Safety-First Coordination on Multi-Site Jobs",
    excerpt:
      "Our multi-site workflow now uses tighter planning, communication, and safety controls to keep projects moving with fewer disruptions.",
    date: "March 22, 2024",
    category: "Operations",
    image: blog1,
    sections: [
      {
        title: "Site Readiness Workflow",
        body: [
          "Each project now goes through a structured readiness review covering access paths, lift zones, traffic flow, and emergency response points.",
          "We complete this review before crews mobilize so site conditions and responsibilities are clear before work begins.",
        ],
      },
      {
        title: "Daily Coordination Cadence",
        body: [
          "Field leads run daily briefings with builders, transportation teams, and trade partners to confirm sequence, hazards, and handoff timing.",
          "That routine reduces last-minute changes and keeps crews aligned across multiple active locations.",
        ],
      },
      {
        title: "Risk Reduction Results",
        body: [
          "With standardized checklists and communication points, we have reduced preventable site interruptions and improved schedule reliability.",
          "Most importantly, crews maintain safer working conditions while still meeting production targets.",
        ],
      },
    ],
  },
  {
    slug: "residential-install-timeline-milestones",
    title: "Residential Install Timeline Milestones",
    excerpt:
      "From foundation prep through final tie-in, this timeline shows how we keep residential installs predictable and efficient.",
    date: "February 9, 2024",
    category: "Residential",
    image: blog6,
    sections: [
      {
        title: "Pre-Set Milestones",
        body: [
          "Before delivery, we verify foundation dimensions, anchor locations, access clearances, and crane setup points against approved plans.",
          "Utility coordination is completed early so electrical, plumbing, and service tie-ins do not delay set-day progress.",
        ],
      },
      {
        title: "Set-Day Sequence",
        body: [
          "Modules are delivered in lift order, set into place, and aligned to tolerance before structural fastening begins.",
          "Our team then completes weather sealing and confirms level conditions across key interior reference points.",
        ],
      },
      {
        title: "Post-Set Handoff",
        body: [
          "After placement, we walk the builder through a closeout checklist covering connections, sealing, and readiness for finish trades.",
          "This handoff process supports clean inspections and keeps the remaining build phases on schedule.",
        ],
      },
    ],
  },
  {
    slug: "commercial-framing-progress-update",
    title: "Commercial Framing Progress Update",
    excerpt:
      "This commercial framing update shows how disciplined sequencing keeps production high without sacrificing quality control.",
    date: "January 30, 2024",
    category: "Commercial",
    image: blog2,
    sections: [
      {
        title: "Current Progress Snapshot",
        body: [
          "The project has advanced from slab and structural layout into active wall and roof framing, with multiple zones running in parallel.",
          "Material deliveries are timed by area to keep crews productive and reduce congestion on site.",
        ],
      },
      {
        title: "Coordination with Trades",
        body: [
          "We coordinate daily with the general contractor and MEP teams to maintain clear access for inspections and upcoming rough-ins.",
          "That coordination keeps framing progress aligned with the broader construction schedule.",
        ],
      },
      {
        title: "Quality Assurance",
        body: [
          "Supervisors perform routine checks for layout accuracy, fastening patterns, and structural connection details at each completed phase.",
          "These controls help us deliver consistent framing quality while maintaining schedule momentum.",
        ],
      },
    ],
  },
];

export function getNewsPost(slug: string) {
  return newsPosts.find((post) => post.slug === slug);
}
