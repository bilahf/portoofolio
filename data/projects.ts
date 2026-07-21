import { ProjectItem } from "./types";

export const projectFilters = ["All", "Product", "Dashboard", "Commerce", "Mobile"] as const;

export const projects: ProjectItem[] = [
  {
    image: "/images/projects/project-workspace.svg",
    title: "OpsBoard Workspace",
    description:
      "A multi-role operations dashboard for logistics teams with modular analytics, task orchestration, and role-aware views.",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Supabase", "Framer Motion"],
    languages: ["TypeScript", "SQL"],
    features: ["Role-based dashboards", "Advanced filters", "Task management", "Responsive data tables"],
    status: "Production",
    year: "2026",
    githubEnabled: false,
    githubUrl: "",
    liveDemoEnabled: true,
    liveDemoUrl: "https://example.com",
    category: "Dashboard",
  },
  {
    image: "/images/projects/project-commerce.svg",
    title: "Atelier Commerce",
    description:
      "A premium ecommerce storefront focused on editorial product storytelling, clear conversion paths, and mobile-first performance.",
    technologies: ["React", "Tailwind CSS", "Laravel", "MySQL"],
    languages: ["TypeScript", "PHP"],
    features: ["Editorial landing pages", "Product discovery", "Checkout optimization", "CMS integration"],
    status: "Shipped",
    year: "2025",
    githubEnabled: true,
    githubUrl: "https://github.com/",
    liveDemoEnabled: true,
    liveDemoUrl: "https://example.com",
    category: "Commerce",
  },
  {
    image: "/images/projects/project-design-system.svg",
    title: "Northstar Design System",
    description:
      "A shared component and guidelines library that standardized UI quality, reduced inconsistency, and accelerated delivery.",
    technologies: ["Next.js", "TypeScript", "Storybook", "Figma Tokens"],
    languages: ["TypeScript"],
    features: ["Reusable components", "Design tokens", "Usage documentation", "Accessibility patterns"],
    status: "Internal",
    year: "2024",
    githubEnabled: false,
    githubUrl: "",
    liveDemoEnabled: false,
    liveDemoUrl: "",
    category: "Product",
  },
  {
    image: "/images/projects/project-mobile.svg",
    title: "Field Task Mobile",
    description:
      "A lightweight mobile workflow companion for field operators to capture updates, validate forms, and sync progress.",
    technologies: ["Flutter", "Supabase", "Figma"],
    languages: ["Dart"],
    features: ["Offline-friendly flows", "Task checklists", "Photo attachments", "Sync status feedback"],
    status: "Pilot",
    year: "2023",
    githubEnabled: true,
    githubUrl: "https://github.com/",
    liveDemoEnabled: false,
    liveDemoUrl: "",
    category: "Mobile",
  },
];
