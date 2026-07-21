import { LuAward, LuMedal, LuTrophy } from "react-icons/lu";
import { AchievementItem } from "./types";

export const achievements: AchievementItem[] = [
  {
    title: "Best Graduate - Informatics Engineering Program",
    description:
      "Recognized as the Best Graduate of the Informatics Engineering Program for outstanding academic performance and achievements throughout undergraduate study.",
    organization: "Universitas Muhammadiyah Gresik",
    year: "2026",
    icon: LuAward,
    image: "/images/achievements/pgm.png",
    certificateEnabled: true,
    certificateUrl: "https://drive.google.com/file/d/1lIUv1b6oSCrYv4fUaFryHtu55c7BCYZo/view?usp=drive_link",
  },
  {
    title: "Best Graduate - Faculty of Engineering",
    description:
      "Recognized as one of the Best Graduates of the Faculty of Engineering for outstanding academic performance and achievements during undergraduate study.",
    organization: "Universitas Muhammadiyah Gresik",
    year: "2026",
    icon: LuTrophy,
    image: "/images/achievements/piagam.jpeg",
    certificateEnabled: true,
    certificateUrl:
      "https://drive.google.com/file/d/1Z_C_64OGZmGYWrMljQGaZrH5E4vqzMMA/view?usp=drive_link",
  },
  {
    title: "Top 100 - SQL Hackathon",
    description:
      "Ranked among the Top 100 participants in a SQL Hackathon focused on analyzing sales performance and identifying business root causes through data analysis.",
    organization:
      "DQLAB",
    year: "2026",
    icon: LuMedal,
    image: "/images/achievements/srtf.png",
    certificateEnabled: true,
    certificateUrl: "https://drive.google.com/file/d/1WJK8mi4MfXS9O1n8PpiOrtEBtIPHA-zy/view?usp=drive_link",
  },
];