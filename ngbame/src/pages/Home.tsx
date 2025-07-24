import { ThemeToggle } from "../components/ThemeToogle";
import { StarBackground } from "../components/StarBackGround";
import { Navbar } from "../components/Navbar";
import { HeroSection } from "../components/HeroSection";


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
      </main>
      {/* Footer */}
    </div>
  );
};
