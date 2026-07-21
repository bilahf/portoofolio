import { LuAward, LuMedal, LuTrophy } from "react-icons/lu";
import { AchievementItem } from "./types";

export const achievements: AchievementItem[] = [
  {
    title: "Best Graduate in Informatics",
    description: "Recognized for strong academic performance, final project quality, and active contribution to campus initiatives.",
    organization: "University of Muhammadiyah Gresik",
    year: "2021",
    icon: LuAward,
    image: "/images/achievements/achievement-graduate.svg",
    certificateEnabled: false,
    certificateUrl: "",
  },
  {
    title: "Hackathon Finalist",
    description: "Reached the final round with a civic-tech concept focused on making regional information services easier to access.",
    organization: "East Java Innovation Week",
    year: "2022",
    icon: LuTrophy,
    image: "/images/achievements/achievement-hackathon.svg",
    certificateEnabled: true,
    certificateUrl: "https://example.com",
  },
  {
    title: "Volunteer Appreciation Award",
    description: "Awarded for mentoring junior learners in frontend fundamentals and product thinking workshops.",
    organization: "Community Dev Circle",
    year: "2024",
    icon: LuMedal,
    image: "/images/achievements/achievement-volunteer.svg",
    certificateEnabled: false,
    certificateUrl: "",
  },
];
