import { motion } from "motion/react";
import { ArrowUpRight, Code2, Layers } from "lucide-react";

export default function FeaturedProject({ project, onClick }) {
  const titleLines = project.title.split("\n");

  const handleKeyDown = (event) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      onClick();
    }
  };

  return (
    <motion.article
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.7 }}
      whileHover={{ y: -4 }}
      onClick={onClick}
      onKeyDown={handleKeyDown}
      role="button"
      tabIndex={0}
      aria-label={`View details for ${project.shortTitle || project.title}`}
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

      <div className="pointer-events-none absolute inset-0 project-grid" />

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
        <div className="flex items-start justify-between">
          <div>
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
              FEATURED PROJECT
            </div>

            <p className="mt-4 text-sm text-[var(--color-muted)]">
              {project.category}
            </p>
          </div>

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
            {project.longDescription}
          </p>
        </div>

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
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((technology) => (
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
            View Repository
          </div>
        </div>
      </div>
    </motion.article>
  );
}