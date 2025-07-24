import { ThemeToggle } from "../components/ThemeToogle";
import { StarBackground } from "../components/StarBackGround";


export const Home = () => {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">

      {/* Theme toggle */}
      <ThemeToggle />
      {/* Background effects */}
      <StarBackground />
      {/* Navbar */}

      {/* Main content */}

      {/* Footer */}
    </div>
  );
};
