import { motion } from "motion/react";

import {
  ArrowUpRight,
  Code2,
  Layers,
} from "lucide-react";


export default function FeaturedProject({
  project,
}) {

  const titleLines =
    project.title.split("\n");


  return (

    <motion.a

      href={project.github}

      target="_blank"

      rel="noopener noreferrer"

      initial={{
        opacity: 0,
        y: 40,
      }}

      whileInView={{
        opacity: 1,
        y: 0,
      }}

      viewport={{
        once: true,
        amount: 0.2,
      }}

      transition={{
        duration: 0.7,
      }}

      whileHover={{
        y: -4,
      }}

      className="
        group

        relative
        block

        min-h-[520px]

        overflow-hidden

        rounded-[2rem]

        border
        border-white/10

        bg-zinc-950

        p-6

        text-white

        md:p-10
      "
    >


      {/* Background */}

      <div
        className="
          absolute
          inset-0

          bg-gradient-to-br

          from-blue-600/20
          via-transparent
          to-indigo-600/10

          opacity-70

          transition-opacity
          duration-500

          group-hover:opacity-100
        "
      />


      {/* Glow */}

      <div
        className="
          pointer-events-none

          absolute

          -right-32
          -top-32

          h-96
          w-96

          rounded-full

          bg-blue-500/20

          blur-[120px]

          transition-transform
          duration-700

          group-hover:scale-125
        "
      />


      {/* Grid */}

      <div
        className="
          pointer-events-none

          absolute
          inset-0

          project-grid
        "
      />


      {/* Content */}

      <div
        className="
          relative

          z-10

          flex
          min-h-[470px]

          flex-col

          justify-between
        "
      >


        {/* Top */}

        <div
          className="
            flex
            items-start
            justify-between
          "
        >

          <div>

            <div
              className="
                inline-flex

                items-center
                gap-2

                rounded-full

                border
                border-white/10

                bg-white/5

                px-3
                py-1.5

                font-mono
                text-xs

                text-blue-300
              "
            >

              <Layers size={14} />

              FEATURED PROJECT

            </div>


            <p
              className="
                mt-4

                text-sm

                text-zinc-400
              "
            >
              {project.category}
            </p>

          </div>


          <div
            className="
              flex
              h-12
              w-12

              items-center
              justify-center

              rounded-full

              border
              border-white/10

              bg-white/5

              transition-all
              duration-300

              group-hover:rotate-45
              group-hover:bg-white
              group-hover:text-black
            "
          >

            <ArrowUpRight size={20} />

          </div>

        </div>



        {/* Middle */}

        <div>

          <div
            className="
              overflow-hidden
            "
          >

            <h3
              className="
                whitespace-pre-line

                text-5xl
                font-black

                leading-[0.9]

                tracking-[-0.06em]

                md:text-8xl
              "
            >

              {titleLines.map(
                (line, index) => (

                  <span
                    key={index}
                    className="block"
                  >

                    {line}

                  </span>

                )
              )}

            </h3>

          </div>


          <p
            className="
              mt-8

              max-w-xl

              text-base
              leading-7

              text-zinc-400

              md:text-lg
            "
          >

            {project.longDescription}

          </p>

        </div>



        {/* Bottom */}

        <div
          className="
            flex
            flex-col
            gap-6

            border-t
            border-white/10

            pt-6

            md:flex-row
            md:items-end
            md:justify-between
          "
        >


          {/* Technologies */}

          <div
            className="
              flex
              flex-wrap
              gap-2
            "
          >

            {project.technologies.map(
              (technology) => (

                <span
                  key={technology}

                  className="
                    rounded-full

                    border
                    border-white/10

                    bg-white/5

                    px-3
                    py-1.5

                    text-xs
                    font-medium

                    text-zinc-300
                  "
                >

                  {technology}

                </span>

              )
            )}

          </div>



          {/* GitHub */}

          <div
            className="
              flex
              items-center
              gap-2

              text-sm

              text-zinc-400
            "
          >

            <Code2 size={16} />

            View Repository

          </div>

        </div>

      </div>

    </motion.a>

  );

}