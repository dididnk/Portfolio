import { ThemeToggle } from "../components/ThemeToogle";
import { StarBackground } from "../components/StarBackGround";
import { Navbar } from "../components/Navbar";
import { HeroSection } from "../components/HeroSection";
import { AboutSection } from "../components/AboutSection";
import { SkillsSsection } from "../components/SkillsSection";
import { ProjectsSection } from "../components/ProjectsSection";


export const Home = () => {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">

      {/* Theme toggle */}
      <ThemeToggle />
      {/* Background effects */}
      <StarBackground />
      {/* Navbar */}
      <Navbar />
      {/* Main content */}
      <main>
        <HeroSection />
        <AboutSection />
        <SkillsSsection />
        <ProjectsSection/>
      </main>
      {/* Footer */}
    </div>
  );
};
