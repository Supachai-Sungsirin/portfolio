import { motion } from "motion/react";
import { ArrowUpRight, Code2, Layers } from "lucide-react";

import { useLanguage } from "../../context/LanguageContext";
import { translations } from "../../data/translations";

export default function FeaturedProject({ project, onClick }) {
  const { language } = useLanguage();

  const t = translations[language].projects;

  const localizedProject =
    project?.translations?.[language] || project;

  const titleLines = localizedProject.title.split("\n");

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
        block
        min-h-[520px]
        cursor-pointer
        overflow-hidden
        rounded-[2rem]
        border
        border-[var(--color-border)]
        bg-[var(--color-surface)]
        p-6
        text-[var(--color-text)]
        outline-none
        transition-colors
        duration-300
        focus-visible:ring-2
        focus-visible:ring-[var(--color-accent)]
        focus-visible:ring-offset-2
        focus-visible:ring-offset-[var(--color-bg)]
        md:p-10
      "
    >
      {/* Background Gradient */}
      <div
        className="
          absolute
          inset-0
          bg-gradient-to-br
          from-blue-600/10
          via-transparent
          to-indigo-600/5
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
          bg-blue-500/10
          blur-[120px]
          transition-transform
          duration-700
          group-hover:scale-125
        "
      />

      {/* Grid */}
      <div className="pointer-events-none absolute inset-0 project-grid" />

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
        <div className="flex items-start justify-between">
          <div>
            {/* Featured Badge */}
            <div
              className="
                inline-flex
                items-center
                gap-2
                rounded-full
                border
                border-[var(--color-border)]
                bg-[var(--color-surface-soft)]
                px-3
                py-1.5
                font-mono
                text-xs
                text-[var(--color-accent)]
                transition-colors
                duration-300
              "
            >
              <Layers size={14} />
              {t.featured}
            </div>

            {/* Category */}
            <p className="mt-4 text-sm text-[var(--color-muted)]">
              {localizedProject.category}
            </p>
          </div>

          {/* Arrow */}
          <div
            className="
              flex
              h-12
              w-12
              shrink-0
              items-center
              justify-center
              rounded-full
              border
              border-[var(--color-border)]
              bg-[var(--color-surface-soft)]
              text-[var(--color-text)]
              transition-all
              duration-300
              group-hover:rotate-45
              group-hover:bg-[var(--color-text)]
              group-hover:text-[var(--color-bg)]
            "
          >
            <ArrowUpRight size={20} />
          </div>
        </div>

        {/* Main Content */}
        <div>
          <div className="overflow-hidden">
            <h3
              className="
                whitespace-pre-line
                text-5xl
                font-black
                leading-[0.9]
                tracking-[-0.06em]
                text-[var(--color-text)]
                md:text-8xl
              "
            >
              {titleLines.map((line, index) => (
                <span key={index} className="block">
                  {line}
                </span>
              ))}
            </h3>
          </div>

          {/* Description */}
          <p
            className="
              mt-8
              max-w-xl
              text-base
              leading-7
              text-[var(--color-muted)]
              md:text-lg
            "
          >
            {localizedProject.longDescription}
          </p>
        </div>

        {/* Bottom */}
        <div
          className="
            flex
            flex-col
            gap-6
            border-t
            border-[var(--color-border)]
            pt-6
            md:flex-row
            md:items-end
            md:justify-between
          "
        >
          {/* Technologies */}
          <div className="flex flex-wrap gap-2">
            {localizedProject.technologies?.map((technology) => (
              <span
                key={technology}
                className="
                  rounded-full
                  border
                  border-[var(--color-border)]
                  bg-[var(--color-surface-soft)]
                  px-3
                  py-1.5
                  text-xs
                  font-medium
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

          {/* Repository */}
          <div
            className="
              flex
              items-center
              gap-2
              text-sm
              text-[var(--color-muted)]
              transition-colors
              duration-300
              group-hover:text-[var(--color-text)]
            "
          >
            <Code2 size={16} />
            {t.viewRepository}
          </div>
        </div>
      </div>
    </motion.article>
  );
}