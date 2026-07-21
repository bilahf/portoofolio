import { ExperienceItem } from "./types";

export const experiences: ExperienceItem[] = [
  {
    company: "Astra Digital Studio",
    logo: "/images/experience/logo-pln.png",
    position: "Senior Frontend Engineer",
    employmentType: "Full-time",
    location: "Jakarta, Indonesia",
    duration: "2023 - Present",
    summary:
      "Leading frontend architecture and design system quality for internal products and customer-facing platforms.",
    responsibilities: [
      "Architected a scalable Next.js application foundation with reusable modules and stricter TypeScript patterns.",
      "Partnered with product and design to simplify dense workflows into faster, clearer user journeys.",
      "Introduced UI standards, performance budgets, and component documentation to reduce delivery friction.",
    ],
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion", "Supabase"],
    achievements: [
      "Improved Core Web Vitals across the main product suite and reduced layout instability significantly.",
      "Shortened onboarding time for new frontend contributors by standardizing project structure and conventions.",
    ],
  },
  {
    company: "Nusantara Commerce Lab",
    logo: "/images/experience/nusantara-commerce.svg",
    position: "Frontend Engineer",
    employmentType: "Full-time",
    location: "Surabaya, Indonesia",
    duration: "2021 - 2023",
    summary: "Built conversion-focused ecommerce interfaces and internal dashboards for regional business teams.",
    responsibilities: [
      "Developed responsive storefront and dashboard experiences with reusable React components.",
      "Worked closely with backend engineers to map APIs into resilient, user-friendly data flows.",
      "Optimized forms, search, and checkout experiences to reduce drop-off on key business funnels.",
    ],
    technologies: ["React", "TypeScript", "Bootstrap", "Laravel", "MySQL"],
    achievements: [
      "Shipped a new dashboard information architecture that reduced time-to-task for operations teams.",
    ],
  },
  {
    company: "Diskominfo Gresik",
    logo: "/images/experience/diskominfo.svg",
    position: "UI Developer Intern",
    employmentType: "Internship",
    location: "Gresik, Indonesia",
    duration: "2020 - 2021",
    summary: "Supported public-sector web initiatives with interface development, accessibility improvements, and QA.",
    responsibilities: [
      "Implemented responsive page layouts and reusable UI elements for informational portals.",
      "Helped document content patterns and usability issues found during internal reviews.",
    ],
    technologies: ["HTML", "CSS", "JavaScript", "Bootstrap"],
    achievements: ["Contributed to a more consistent public-facing interface across multiple content pages."],
  },
];
