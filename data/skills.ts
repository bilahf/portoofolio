import {
  SiFigma,
  SiFlutter,
  SiGit,
  SiGithub,
  SiHtml5,
  SiJavascript,
  SiLaravel,
  SiMysql,
  SiPhp,
  SiPostgresql,
  SiPython,
  SiReact,
  SiSupabase,
  SiTailwindcss,
} from "react-icons/si";
import { FaJava } from "react-icons/fa6";
import {
  LuBrain,
  LuChartBar,
  LuCode,
  LuDatabase,
  LuSheet,
  LuWorkflow,
} from "react-icons/lu";
import { Skill } from "./types";

export const skillCategories = [
  "Programming & Software Development",
  "AI & Automation",
  "Data & Database",
  "Tools & Design",
  "Languages",
] as const;

export const skills: Skill[] = [
  // ==========================================
  // PROGRAMMING & SOFTWARE DEVELOPMENT
  // ==========================================
  {
    name: "JavaScript",
    category: "Programming & Software Development",
    icon: SiJavascript,
    proficiency: "Intermediate",
  },
  {
    name: "Python",
    category: "Programming & Software Development",
    icon: SiPython,
    proficiency: "Intermediate",
  },
  {
    name: "PHP",
    category: "Programming & Software Development",
    icon: SiPhp,
    proficiency: "Intermediate",
  },
  {
    name: "Java",
    category: "Programming & Software Development",
    icon: FaJava,
    proficiency: "Intermediate",
  },
  {
    name: "Laravel",
    category: "Programming & Software Development",
    icon: SiLaravel,
    proficiency: "Intermediate",
  },
  {
    name: "Flutter",
    category: "Programming & Software Development",
    icon: SiFlutter,
    proficiency: "Intermediate",
  },
  {
    name: "React",
    category: "Programming & Software Development",
    icon: SiReact,
    proficiency: "Intermediate",
  },
  {
    name: "HTML",
    category: "Programming & Software Development",
    icon: SiHtml5,
    proficiency: "Advanced",
  },
 

  // ==========================================
  // AI & AUTOMATION
  // ==========================================
  {
    name: "n8n",
    category: "AI & Automation",
    icon: LuWorkflow,
    proficiency: "Intermediate",
  },
  {
    name: "LangGraph",
    category: "AI & Automation",
    icon: LuBrain,
    proficiency: "Intermediate",
  },
  {
    name: "AI Agents",
    category: "AI & Automation",
    icon: LuBrain,
    proficiency: "Intermediate",
  },
  {
    name: "API Integration",
    category: "AI & Automation",
    icon: LuCode,
    proficiency: "Intermediate",
  },

  // ==========================================
  // DATA & DATABASE
  // ==========================================
  {
    name: "SQL",
    category: "Data & Database",
    icon: LuDatabase,
    proficiency: "Intermediate",
  },
  {
    name: "Excel",
    category: "Data & Database",
    icon: LuSheet,
    proficiency: "Advanced",
  },
  {
    name: "Power BI",
    category: "Data & Database",
    icon: LuChartBar,
    proficiency: "Intermediate",
  },
  {
    name: "Supabase",
    category: "Data & Database",
    icon: SiSupabase,
    proficiency: "Intermediate",
  },
  {
    name: "MySQL",
    category: "Data & Database",
    icon: SiMysql,
    proficiency: "Intermediate",
  },
  
  {
    name: "Firebase",
    category: "Data & Database",
    icon: LuDatabase,
    proficiency: "Intermediate",
  },
  {
    name: "DBeaver",
    category: "Data & Database",
    icon: LuDatabase,
    proficiency: "Intermediate",
  },

  // ==========================================
  // TOOLS & DESIGN
  // ==========================================
  {
    name: "Git",
    category: "Tools & Design",
    icon: SiGit,
    proficiency: "Intermediate",
  },
  {
    name: "GitHub",
    category: "Tools & Design",
    icon: SiGithub,
    proficiency: "Intermediate",
  },
  {
    name: "VS Code",
    category: "Tools & Design",
    icon: LuCode,
    proficiency: "Advanced",
  },
  {
    name: "Figma",
    category: "Tools & Design",
    icon: SiFigma,
    proficiency: "Intermediate",
  },
  {
    name: "Canva",
    category: "Tools & Design",
    icon: LuCode,
    proficiency: "Advanced",
  },
  {
    name: "Adobe Illustrator",
    category: "Tools & Design",
    icon: LuCode,
    proficiency: "Intermediate",
  },
  {
    name: "CorelDRAW",
    category: "Tools & Design",
    icon: LuCode,
    proficiency: "Intermediate",
  },

  // ==========================================
  // LANGUAGES
  // ==========================================
  {
    name: "Indonesian",
    category: "Languages",
    icon: LuCode,
    proficiency: "Native",
  },
  {
    name: "English",
    category: "Languages",
    icon: LuCode,
    proficiency: "Intermediate",
  },
  {
    name: "Mandarin",
    category: "Languages",
    icon: LuCode,
    proficiency: "Basic",
  },
];