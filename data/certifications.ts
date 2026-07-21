import { CertificationItem } from "./types";

export const certifications: CertificationItem[] = [
  {
    image: "/images/certifications/cert-frontend.svg",
    name: "Advanced Frontend Engineering",
    organization: "Dicoding Indonesia",
    issueDate: "March 2026",
    credentialId: "FE-2026-1942",
    skillsLearned: ["Frontend Architecture", "Performance Optimization", "Accessibility", "Component Design"],
    certificateEnabled: true,
    certificateUrl: "https://example.com",
  },
  {
    image: "/images/certifications/cert-cloud.svg",
    name: "Cloud Fundamentals for Web Applications",
    organization: "Google Cloud Skills Boost",
    issueDate: "October 2025",
    credentialId: "GCP-5518",
    skillsLearned: ["Cloud Deployment", "Monitoring Basics", "Scalable Web Delivery"],
    certificateEnabled: true,
    certificateUrl: "https://example.com",
  },
  {
    image: "/images/certifications/cert-uiux.svg",
    name: "UI Design Systems and Product Thinking",
    organization: "Coursera",
    issueDate: "June 2024",
    credentialId: "",
    skillsLearned: ["Design Systems", "Interaction Patterns", "Information Architecture"],
    certificateEnabled: false,
    certificateUrl: "",
  },
];
