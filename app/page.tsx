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
  {
    id: "courses-certifications",
    label: "Courses & Certifications",
  },
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
          <section id="home" className="scroll-mt-28">
            <HomeSection />
          </section>

          <section id="skills" className="scroll-mt-28">
            <SkillsSection />
          </section>

          <section id="experience" className="scroll-mt-28">
            <ExperienceSection />
          </section>

          <section id="projects" className="scroll-mt-28">
            <ProjectsSection />
          </section>

          <section id="education" className="scroll-mt-28">
            <EducationSection />
          </section>

          <section
            id="courses-certifications"
            className="scroll-mt-28"
          >
            <CertificationsSection />
          </section>

          <section id="achievements" className="scroll-mt-28">
            <AchievementsSection />
          </section>

          <section id="contact" className="scroll-mt-28">
            <ContactSection />
          </section>

          <ThankYouSection />

          <Footer />
        </div>
      </PageShell>

      <BackToTop />
    </>
  );
}