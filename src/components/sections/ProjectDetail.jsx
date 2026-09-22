import { useEffect, useRef } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  Check,
  X,
} from "lucide-react";

export default function ProjectDetail({
  project,
  projects = [],
  onClose,
  onSelectProject,
}) {
  const modalRef = useRef(null);

  const currentIndex = project
    ? projects.findIndex((item) => item.id === project.id)
    : -1;

  const previousProject =
    currentIndex > 0 ? projects[currentIndex - 1] : null;

  const nextProject =
    currentIndex >= 0 && currentIndex < projects.length - 1
      ? projects[currentIndex + 1]
      : null;

  useEffect(() => {
    if (!project) return;

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        onClose();
        return;
      }

      if (event.key === "ArrowLeft" && previousProject) {
        onSelectProject(previousProject);
        return;
      }

      if (event.key === "ArrowRight" && nextProject) {
        onSelectProject(nextProject);
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [
    project,
    previousProject,
    nextProject,
    onClose,
    onSelectProject,
  ]);

  useEffect(() => {
    if (!project) return;

    const scrollContainer = modalRef.current;

    if (scrollContainer) {
      scrollContainer.scrollTop = 0;
    }
  }, [project]);

  useEffect(() => {
    if (!project) return;

    const originalOverflow = document.body.style.overflow;

    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = originalOverflow;
    };
  }, [project]);

  return (
    <AnimatePresence>
      {project && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="
            fixed
            inset-0
            z-[100]
            bg-black/50
            p-3
            backdrop-blur-md
            md:p-6
          "
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) {
              onClose();
            }
          }}
        >
          <motion.div
            ref={modalRef}
            role="dialog"
            aria-modal="true"
            aria-labelledby="project-detail-title"
            initial={{ opacity: 0, y: 30, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.98 }}
            transition={{
              duration: 0.3,
              ease: "easeOut",
            }}
            className="
              mx-auto
              flex
              h-full
              max-w-5xl
              flex-col
              overflow-y-auto
              scrollbar-hidden
              rounded-[1.75rem]
              border
              border-[var(--color-border)]
              bg-[var(--color-surface)]
              text-[var(--color-text)]
              shadow-2xl
            "
          >
            {/* Top Bar */}
            <div
              className="
                sticky
                top-0
                z-20
                flex
                items-center
                justify-between
                border-b
                border-[var(--color-border)]
                bg-[var(--color-surface)]
                px-5
                py-4
                md:px-8
              "
            >
              <button
                type="button"
                onClick={onClose}
                aria-label="Close project details"
                className="
                  group
                  inline-flex
                  items-center
                  gap-2
                  rounded-full
                  px-3
                  py-2
                  text-sm
                  text-[var(--color-muted)]
                  outline-none
                  transition-colors
                  hover:text-[var(--color-text)]
                  focus-visible:ring-2
                  focus-visible:ring-[var(--color-accent)]
                "
              >
                <ArrowLeft
                  size={17}
                  className="
                    transition-transform
                    duration-300
                    group-hover:-translate-x-1
                  "
                />
                Back
              </button>

              <div
                className="
                  font-mono
                  text-xs
                  text-[var(--color-muted)]
                "
              >
                {String(currentIndex + 1).padStart(2, "0")} /{" "}
                {String(projects.length).padStart(2, "0")}
              </div>

              <button
                type="button"
                onClick={onClose}
                aria-label="Close project details"
                className="
                  flex
                  h-9
                  w-9
                  items-center
                  justify-center
                  rounded-full
                  text-[var(--color-muted)]
                  outline-none
                  transition-colors
                  hover:bg-[var(--color-surface-soft)]
                  hover:text-[var(--color-text)]
                  focus-visible:ring-2
                  focus-visible:ring-[var(--color-accent)]
                "
              >
                <X size={18} />
              </button>
            </div>

            {/* Content */}
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35 }}
              className="
                flex-1
                px-5
                py-8
                md:px-10
                md:py-12
              "
            >
              {/* Header */}
              <div>
                <p
                  className="
                    font-mono
                    text-xs
                    uppercase
                    tracking-[0.2em]
                    text-[var(--color-accent)]
                  "
                >
                  {project.category}
                </p>

                <h2
                  id="project-detail-title"
                  className="
                    mt-4
                    max-w-4xl
                    whitespace-pre-line
                    text-5xl
                    font-black
                    leading-[0.92]
                    tracking-[-0.06em]
                    text-[var(--color-text)]
                    md:text-7xl
                  "
                >
                  {project.title}
                </h2>

                <p
                  className="
                    mt-6
                    max-w-3xl
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
                  my-10
                  h-px
                  bg-[var(--color-border)]
                "
              />

              {/* Overview */}
              <section>
                <SectionLabel>
                  Overview
                </SectionLabel>

                <p
                  className="
                    mt-4
                    max-w-3xl
                    text-sm
                    leading-7
                    text-[var(--color-muted)]
                    md:text-base
                  "
                >
                  {project.description}
                </p>
              </section>

              {/* Key Features */}
              <section className="mt-12">
                <SectionLabel>
                  Key Features
                </SectionLabel>

                <div
                  className="
                    mt-5
                    grid
                    gap-3
                    sm:grid-cols-2
                  "
                >
                  {project.highlights?.map((highlight) => (
                    <div
                      key={highlight}
                      className="
                        flex
                        items-start
                        gap-3
                        rounded-2xl
                        border
                        border-[var(--color-border)]
                        bg-[var(--color-surface-soft)]
                        p-4
                      "
                    >
                      <div
                        className="
                          mt-0.5
                          flex
                          h-6
                          w-6
                          shrink-0
                          items-center
                          justify-center
                          rounded-full
                          bg-blue-500/10
                          text-[var(--color-accent)]
                        "
                      >
                        <Check size={14} />
                      </div>

                      <span
                        className="
                          text-sm
                          leading-6
                          text-[var(--color-text)]
                        "
                      >
                        {highlight}
                      </span>
                    </div>
                  ))}
                </div>
              </section>

              {/* Tech Stack */}
              <section className="mt-12">
                <SectionLabel>
                  Tech Stack
                </SectionLabel>

                <div className="mt-5 flex flex-wrap gap-2">
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
                      "
                    >
                      {technology}
                    </span>
                  ))}
                </div>
              </section>

              {/* Repository */}
              <section className="mt-12">
                <div
                  className="
                    rounded-[1.5rem]
                    border
                    border-[var(--color-border)]
                    bg-[var(--color-surface-soft)]
                    p-5
                    md:p-6
                  "
                >
                  <div
                    className="
                      flex
                      flex-col
                      gap-5
                      md:flex-row
                      md:items-center
                      md:justify-between
                    "
                  >
                    <div>
                      <SectionLabel>
                        Repository
                      </SectionLabel>

                      <p
                        className="
                          mt-2
                          text-sm
                          text-[var(--color-muted)]
                        "
                      >
                        Explore the source code and implementation.
                      </p>
                    </div>

                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="
                        group
                        inline-flex
                        w-fit
                        items-center
                        gap-2
                        rounded-full
                        bg-[var(--color-text)]
                        px-5
                        py-2.5
                        text-sm
                        font-semibold
                        text-[var(--color-bg)]
                        transition-transform
                        duration-300
                        hover:-translate-y-0.5
                      "
                    >
                      View Repository
                      <ArrowUpRight
                        size={16}
                        className="
                          transition-transform
                          duration-300
                          group-hover:translate-x-1
                          group-hover:-translate-y-1
                        "
                      />
                    </a>
                  </div>
                </div>
              </section>
            </motion.div>

            {/* Previous / Next */}
            <div
              className="
                sticky
                bottom-0
                border-t
                border-[var(--color-border)]
                bg-[var(--color-surface)]
                px-5
                py-4
                md:px-8
              "
            >
              <div
                className="
                  flex
                  items-center
                  justify-between
                  gap-4
                "
              >
                <button
                  type="button"
                  disabled={!previousProject}
                  onClick={() => {
                    if (previousProject) {
                      onSelectProject(previousProject);
                    }
                  }}
                  className="
                    group
                    inline-flex
                    items-center
                    gap-2
                    rounded-full
                    px-3
                    py-2
                    text-sm
                    text-[var(--color-muted)]
                    outline-none
                    transition-colors
                    hover:text-[var(--color-text)]
                    disabled:pointer-events-none
                    disabled:opacity-30
                    focus-visible:ring-2
                    focus-visible:ring-[var(--color-accent)]
                  "
                >
                  <ArrowLeft
                    size={16}
                    className="
                      transition-transform
                      duration-300
                      group-hover:-translate-x-1
                    "
                  />
                  Previous
                </button>

                <button
                  type="button"
                  disabled={!nextProject}
                  onClick={() => {
                    if (nextProject) {
                      onSelectProject(nextProject);
                    }
                  }}
                  className="
                    group
                    inline-flex
                    items-center
                    gap-2
                    rounded-full
                    px-3
                    py-2
                    text-sm
                    text-[var(--color-muted)]
                    outline-none
                    transition-colors
                    hover:text-[var(--color-text)]
                    disabled:pointer-events-none
                    disabled:opacity-30
                    focus-visible:ring-2
                    focus-visible:ring-[var(--color-accent)]
                  "
                >
                  Next
                  <ArrowRight
                    size={16}
                    className="
                      transition-transform
                      duration-300
                      group-hover:translate-x-1
                    "
                  />
                </button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

function SectionLabel({ children }) {
  return (
    <h3
      className="
        font-mono
        text-xs
        uppercase
        tracking-[0.2em]
        text-[var(--color-accent)]
      "
    >
      {children}
    </h3>
  );
}