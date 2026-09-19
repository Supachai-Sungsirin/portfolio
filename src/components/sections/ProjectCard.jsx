import { motion } from "motion/react";

import {
  ArrowUpRight,
  Code2,
} from "lucide-react";

export default function ProjectCard({ project, index, onClick }) {
  const accentClasses = {
    green: `
        from-emerald-500/20
        to-transparent
    `,

    purple: `
        from-purple-500/20
        to-transparent
    `,

    orange: `
        from-orange-500/20
        to-transparent
    `,

    blue: `
        from-blue-500/20
        to-transparent
    `,

    cyan: `
        from-cyan-500/20
        via-sky-500/5
        to-transparent
    `,
  };

  return (
    <motion.a
      href={project.github}
      target="_blank"
      rel="noopener noreferrer"
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
        amount: 0.2,
      }}
      transition={{
        duration: 0.5,
        delay: index * 0.08,
      }}
      whileHover={{
        y: -6,
      }}
      onClick={onClick}
      className="
        group
        relative

        min-h-[340px]

        overflow-hidden

        rounded-[1.75rem]

        border
        border-[var(--color-border)]

        bg-[var(--color-surface)]

        p-6

        transition-all
        duration-300

        hover:shadow-xl

        md:p-8
        "
    >
      {/* Gradient */}

      <div
        className={`
          absolute
          inset-0

          bg-gradient-to-br

          ${accentClasses[project.accent]}

          opacity-0

          transition-opacity
          duration-500

          group-hover:opacity-100
        `}
      />

      {/* Decorative Circle */}

      <div
        className="
            absolute

            -right-20
            -top-20

            h-56
            w-56

            rounded-full

            border
            border-[var(--color-border)]

            opacity-50

            transition-transform
            duration-700

            group-hover:scale-125
        "
      />

      <div
        className="
          relative

          z-10

          flex
          h-full

          min-h-[290px]

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
          <div
            className="
                flex
                h-11
                w-11
                items-center
                justify-center

                rounded-xl

                border
                border-black/10

                bg-black/[0.03]

                font-mono
                text-xs

                transition-all
                duration-300

                group-hover:scale-110
                group-hover:rotate-3

                dark:border-white/10
                dark:bg-white/5
                "
          >
            0{index + 1}
          </div>

          <ArrowUpRight
            size={20}
            className="
                transition-transform
                duration-300

                group-hover:translate-x-1
                group-hover:-translate-y-1
                "
          />
        </div>

        {/* Content */}

        <div>
          <p
            className="
              mb-3

              font-mono

              text-[10px]

              uppercase

              tracking-[0.2em]

              text-blue-500
            "
          >
            {project.category}
          </p>

          <h3
            className="
              whitespace-pre-line

              text-3xl
              font-black

              leading-[1]

              tracking-[-0.04em]

              md:text-4xl
            "
          >
            {project.title}
          </h3>

          <p
            className="
              mt-5

              max-w-sm

              text-sm
              leading-6

              text-[var(--color-muted)]
            "
          >
            {project.description}
          </p>
        </div>

        {/* Tech */}

        <div
          className="
            flex

            items-end

            justify-between

            border-t

            border-black/10

            pt-5

            dark:border-white/10
          "
        >
          <div
            className="
              flex
              flex-wrap
              gap-2
            "
          >
            {project.technologies.slice(0, 3).map((technology) => (
              <span
                key={technology}
                className="
                      text-xs

                      text-[var(--color-muted)]
                    "
              >
                {technology}
              </span>
            ))}
          </div>

          <Code2
            size={18}
            className="
              text-[var(--color-muted)]
            "
          />
        </div>
      </div>
    </motion.a>
  );
}
