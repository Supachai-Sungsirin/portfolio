import { motion } from "motion/react";

import { ArrowUpRight, Code2 } from "lucide-react";

import { useLanguage } from "../../context/LanguageContext";
import { translations } from "../../data/translations";

export default function ProjectCard({ project, index, onClick }) {
  const { language } = useLanguage();

  const t = translations[language].projects;

  const localizedProject =
    project?.translations?.[language] || project;

  const accentClasses = {
    green: "from-emerald-500/20 to-transparent",
    purple: "from-purple-500/20 to-transparent",
    orange: "from-orange-500/20 to-transparent",
    blue: "from-blue-500/20 to-transparent",
    cyan: "from-cyan-500/20 via-sky-500/5 to-transparent",
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      onClick();
    }
  };

  return (
    <motion.article
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
      onKeyDown={handleKeyDown}
      role="button"
      tabIndex={0}
      aria-label={`${t.viewDetails}: ${
        localizedProject.shortTitle || localizedProject.title
      }`}
      className="
        group
        relative
        min-h-[340px]
        cursor-pointer
        overflow-hidden
        rounded-[1.75rem]
        border
        border-[var(--color-border)]
        bg-[var(--color-surface)]
        p-6
        text-[var(--color-text)]
        outline-none
        transition-all
        duration-300
        hover:shadow-xl
        focus-visible:ring-2
        focus-visible:ring-[var(--color-accent)]
        focus-visible:ring-offset-2
        focus-visible:ring-offset-[var(--color-bg)]
        md:p-8
      "
    >
      {/* Accent Gradient */}
      <div
        className={`
          absolute
          inset-0
          bg-gradient-to-br
          ${
            accentClasses[project.accent] ||
            "from-blue-500/20 to-transparent"
          }
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

      {/* Content */}
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
        <div className="flex items-start justify-between">
          {/* Project Number */}
          <div
            className="
              flex
              h-11
              w-11
              items-center
              justify-center
              rounded-xl
              border
              border-[var(--color-border)]
              bg-[var(--color-surface-soft)]
              font-mono
              text-xs
              text-[var(--color-muted)]
              transition-all
              duration-300
              group-hover:scale-110
              group-hover:rotate-3
            "
          >
            0{index + 1}
          </div>

          {/* Arrow */}
          <ArrowUpRight
            size={20}
            className="
              text-[var(--color-muted)]
              transition-all
              duration-300
              group-hover:translate-x-1
              group-hover:-translate-y-1
              group-hover:text-[var(--color-text)]
            "
          />
        </div>

        {/* Project Information */}
        <div>
          {/* Category */}
          <p
            className="
              mb-3
              font-mono
              text-[10px]
              uppercase
              tracking-[0.2em]
              text-[var(--color-accent)]
            "
          >
            {localizedProject.category}
          </p>

          {/* Title */}
          <h3
            className="
              whitespace-pre-line
              text-3xl
              font-black
              leading-[1]
              tracking-[-0.04em]
              text-[var(--color-text)]
              md:text-4xl
            "
          >
            {localizedProject.title}
          </h3>

          {/* Description */}
          <p
            className="
              mt-5
              max-w-sm
              text-sm
              leading-6
              text-[var(--color-muted)]
            "
          >
            {localizedProject.description}
          </p>
        </div>

        {/* Technologies */}
        <div
          className="
            flex
            items-end
            justify-between
            border-t
            border-[var(--color-border)]
            pt-5
          "
        >
          <div className="flex flex-wrap gap-x-3 gap-y-1">
            {project.technologies.slice(0, 3).map((technology) => (
              <span
                key={technology}
                className="
                  text-xs
                  text-[var(--color-muted)]
                  transition-colors
                  duration-300
                  group-hover:text-[var(--color-text)]
                "
              >
                {technology}
              </span>
            ))}
          </div>

          <Code2
            size={18}
            className="
              shrink-0
              text-[var(--color-muted)]
              transition-colors
              duration-300
              group-hover:text-[var(--color-text)]
            "
          />
        </div>
      </div>
    </motion.article>
  );
}