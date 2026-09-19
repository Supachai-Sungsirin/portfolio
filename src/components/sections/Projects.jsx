import { motion } from "motion/react";

import { ArrowUpRight } from "lucide-react";

import { projects } from "../../data/siteData";

import FeaturedProject from "./FeaturedProject";

import ProjectCard from "./ProjectCard";

import { useState } from "react";

import ProjectDetail from "./ProjectDetail";

export default function Projects() {

  const featuredProject = projects.find(
    (project) => project.featured
  );

  const otherProjects = projects.filter(
    (project) => !project.featured
  );

  const [selectedProject, setSelectedProject] =
  useState(null);


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

        <p className="section-kicker">
          Selected Work / 02
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
            Things I've built
            <br />

            along the way.
          </h2>


          <p
            className="
              max-w-md
              text-base
              leading-7
              text-[var(--color-muted)]
            "
          >
            A collection of full-stack systems,
            business applications, and AI experiments.
          </p>

        </div>

      </motion.div>



      {/* Featured Project */}

      {featuredProject && (

        <div className="mt-12">

          <FeaturedProject
            project={featuredProject}
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

        {otherProjects.map(
          (project, index) => (
            <ProjectCard project={project}onClick={() => setSelectedProject(project)}/>
          )
        )}

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

          View all projects on GitHub

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

      <ProjectDetail project={selectedProject} onClose={() => setSelectedProject(null)}/>

    </section>

  );

}