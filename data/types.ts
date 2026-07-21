import { IconType } from "react-icons";

export type SocialLinks = {
  linkedin?: string;
  github?: string;
  instagram?: string;
};

export type Profile = {
  name: string;
  shortName: string;
  title: string;
  intro: string;
  bio: string;
  location: string;
  availability: string;
  profileImage: string;
  resumeUrl: string;
  stats: Array<{ label: string; value: string }>;
  socials: SocialLinks;
};

export type Skill = {
  name: string;
  category:
    | "Programming & Software Development"
    | "AI & Automation"
    | "Data & Database"
    | "Tools & Design"
    | "Languages";
  icon: IconType;
  proficiency?: string;
};

export type ExperienceItem = {
  company: string;
  logo: string;
  position: string;
  employmentType: string;
  location: string;
  duration: string;
  summary: string;
  responsibilities: string[];
  technologies: string[];
  achievements?: string[];
};

export type ProjectItem = {
  image: string;
  title: string;
  description: string;
  technologies: string[];
  languages: string[];
  features: string[];
  status: string;
  year: string;
  githubEnabled: boolean;
  githubUrl?: string;
  liveDemoEnabled: boolean;
  liveDemoUrl?: string;
  category: string;
};

export type EducationItem = {
  institution: string;
  logo: string;
  degree: string;
  major: string;
  duration: string;
  gpa?: string;
  activities: string[];
  coursework: string[];
};

export type CertificationItem = {
  image: string;
  name: string;
  organization: string;
  issueDate: string;
  credentialId?: string;
  skillsLearned: string[];
  certificateEnabled: boolean;
  certificateUrl?: string;
};

export type AchievementItem = {
  title: string;
  description: string;
  organization: string;
  year: string;
  icon: IconType;
  image: string;
  certificateEnabled?: boolean;
  certificateUrl?: string;
};

export type ContactDetails = {
  phone: string;
  email: string;
  linkedin?: string;
  github?: string;
  instagram?: string;
  location: string;
};
