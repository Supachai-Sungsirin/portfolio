import Navbar from "../components/layout/Navbar";
import MouseSpotlight from "../components/ui/MouseSpotlight";

import Hero from "../components/sections/Hero";
import QuickAbout from "../components/sections/QuickAbout";
import Projects from "../components/sections/Projects";
import TechStack from "../components/sections/TechStack";
import Education from "../components/sections/Education";
import Contact from "../components/sections/Contact";

import { useTheme } from "../hooks/useTheme";

export default function Home() {
  const {
    isDark,
    toggleTheme,
  } = useTheme();

  return (
    <div
      id="top"
      className="
        min-h-screen
        bg-[var(--color-bg)]
        text-[var(--color-text)]
      "
    >
      <MouseSpotlight />

      <Navbar
        isDark={isDark}
        onThemeToggle={toggleTheme}
      />

      <main>
        <Hero />

        <QuickAbout />

        <Projects />

        <TechStack />

        <Education />

        <Contact />
      </main>
    </div>
  );
}