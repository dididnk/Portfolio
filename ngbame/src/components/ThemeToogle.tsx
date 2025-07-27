import { useEffect, useState } from "react";
import { Sun, Moon } from "lucide-react";
import { cn } from "../lib/utils";

export const ThemeToggle = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Check local storage for theme preference
  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");

    if (storedTheme === "dark") {
      document.documentElement.classList.add("dark");
      document.documentElement.classList.remove("light");
      setIsDarkMode(true);
    } else {
      document.documentElement.classList.add("light");
      document.documentElement.classList.remove("dark");
      setIsDarkMode(false);
    }
  }, []);

  // Toggle theme function
  const toggleTheme = () => {
    if (isDarkMode) {
      document.documentElement.classList.remove("dark");
      document.documentElement.classList.add("light");
      localStorage.setItem("theme", "light");
      setIsDarkMode(false);
    } else {
      document.documentElement.classList.add("dark");
      document.documentElement.classList.remove("light");
      localStorage.setItem("theme", "dark");
      setIsDarkMode(true);
    }
  };

  return (
    <button
      onClick={toggleTheme}
      className={cn(
        "fixed max-sm:hidden top-5 right-5 z-50 p-2 rounded-full transition-colors duration-300",
        "focus:outline-hidden"
      )}
    >
      {isDarkMode ? (
        <Sun className="h-6 w-6 text-yellow-300" />
      ) : (
        <Moon className="h-6 w-6 text-blue-900" />
      )}
    </button>
  );
};
