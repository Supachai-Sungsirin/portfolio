import { useState } from "react";

import { motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";

import { projects } from "../../data/siteData";
import { useLanguage } from "../../context/LanguageContext";
import { translations } from "../../data/translations";

import FeaturedProject from "./FeaturedProject";
import ProjectCard from "./ProjectCard";
import ProjectDetail from "./ProjectDetail";

export default function Projects() {
  const { language } = useLanguage();

  const t = translations[language].projects;

  const featuredProject = projects.find(
    (project) => project.featured
  );

  const otherProjects = projects.filter(
    (project) => !project.featured
  );

  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section
      id="work"
      className="
        mx-auto
        max-w-6xl
        px-5
        py-24
        md:px-6
        md:py-32
      "
    >
      {/* Header */}
      <motion.div
        initial={{
          opacity: 0,
          y: 30,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        viewport={{
          once: true,
          amount: 0.3,
        }}
        transition={{
          duration: 0.6,
        }}
      >
        {/* Section Kicker */}
        <p className="section-kicker">
          {t.kicker}
        </p>

        <div
          className="
            flex
            flex-col
            gap-6
            md:flex-row
            md:items-end
            md:justify-between
          "
        >
          {/* Heading */}
          <h2
            className="
              max-w-3xl
              text-4xl
              font-black
              leading-[1.05]
              tracking-[-0.05em]
              md:text-6xl
            "
          >
            {t.titleLine1}
            <br />
            {t.titleLine2}
          </h2>

          {/* Description */}
          <p
            className="
              max-w-md
              text-base
              leading-7
              text-[var(--color-muted)]
            "
          >
            {t.description}
          </p>
        </div>
      </motion.div>

      {/* Featured Project */}
      {featuredProject && (
        <div className="mt-12">
          <FeaturedProject
            project={featuredProject}
            onClick={() => setSelectedProject(featuredProject)}
          />
        </div>
      )}

      {/* Project Grid */}
      <div
        className="
          mt-4
          grid
          gap-4
          md:grid-cols-2
        "
      >
        {otherProjects.map((project, index) => (
          <ProjectCard
            key={project.id}
            project={project}
            index={index}
            onClick={() => setSelectedProject(project)}
          />
        ))}
      </div>

      {/* View GitHub */}
      <motion.div
        initial={{
          opacity: 0,
        }}
        whileInView={{
          opacity: 1,
        }}
        viewport={{
          once: true,
        }}
        transition={{
          delay: 0.2,
        }}
        className="
          mt-10
          flex
          justify-center
        "
      >
        <a
          href="https://github.com/Supachai-Sungsirin"
          target="_blank"
          rel="noopener noreferrer"
          className="
            group
            inline-flex
            items-center
            gap-2
            font-medium
            text-[var(--color-muted)]
            transition-colors
            hover:text-[var(--color-text)]
          "
        >
          {t.viewAll}

          <ArrowUpRight
            size={18}
            className="
              transition-transform
              group-hover:translate-x-1
              group-hover:-translate-y-1
            "
          />
        </a>
      </motion.div>

      {/* Project Detail Modal */}
      <ProjectDetail
        project={selectedProject}
        projects={projects}
        onClose={() => setSelectedProject(null)}
        onSelectProject={setSelectedProject}
      />
    </section>
  );
} 