import Navbar from "../components/layout/Navbar";

import MouseSpotlight from "../components/ui/MouseSpotlight";

import Hero from "../components/sections/Hero";

import QuickAbout from "../components/sections/QuickAbout";

import Projects from "../components/sections/Projects";

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


        {/* Tech Stack */}

        <section
          id="stack"

          className="section-shell"
        >

          <p className="section-kicker">
            Tech Stack
          </p>


          <h2 className="section-title">
            Coming soon.
          </h2>

        </section>



        {/* Education */}

        <section
          id="education"

          className="section-shell"
        >

          <p className="section-kicker">
            Education
          </p>


          <h2 className="section-title">
            Sripatum University.
          </h2>

        </section>



        {/* Contact */}

        <section
          id="contact"

          className="
            section-shell

            min-h-[60svh]
          "
        >

          <p className="section-kicker">
            Contact / 03
          </p>


          <h2 className="section-title">
            Let's build something useful.
          </h2>

        </section>

      </main>

    </div>

  );

}