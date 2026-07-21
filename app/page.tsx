import { AchievementsSection } from "@/components/sections/achievements-section";
import { BackToTop } from "@/components/sections/back-to-top";
import { CertificationsSection } from "@/components/sections/certifications-section";
import { ContactSection } from "@/components/sections/contact-section";
import { EducationSection } from "@/components/sections/education-section";
import { ExperienceSection } from "@/components/sections/experience-section";
import { Footer } from "@/components/sections/footer";
import { HomeSection } from "@/components/sections/home-section";
import { Navbar } from "@/components/sections/navbar";
import { PageShell } from "@/components/sections/page-shell";
import { ProjectsSection } from "@/components/sections/projects-section";
import { ScrollProgress } from "@/components/sections/scroll-progress";
import { SkillsSection } from "@/components/sections/skills-section";
import { ThankYouSection } from "@/components/sections/thank-you-section";

const sections = [
  { id: "home", label: "Home" },
  { id: "skills", label: "Skills" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "education", label: "Education" },
  { id: "courses-certifications", label: "Courses & Certifications" },
  { id: "achievements", label: "Achievements" },
  { id: "contact", label: "Contact" },
];

export default function HomePage() {
  return (
    <>
      <ScrollProgress />
      <Navbar sections={sections} />
      <PageShell>
        <div className="noise-overlay">
          <HomeSection />
          <SkillsSection />
          <ExperienceSection />
          <ProjectsSection />
          <EducationSection />
          <CertificationsSection />
          <AchievementsSection />
          <ContactSection />
          <ThankYouSection />
          <Footer />
        </div>
      </PageShell>
      <BackToTop />
    </>
  );
}
