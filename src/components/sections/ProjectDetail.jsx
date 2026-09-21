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
  const scrollRef = useRef(null);

  const currentIndex = project
    ? projects.findIndex((item) => item.id === project.id)
    : -1;

  const previousProject =
    currentIndex > 0 ? projects[currentIndex - 1] : null;

  const nextProject =
    currentIndex >= 0 && currentIndex < projects.length - 1
      ? projects[currentIndex + 1]
      : null;

  // Keyboard navigation + Escape
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

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [
    project,
    onClose,
    onSelectProject,
    previousProject,
    nextProject,
  ]);

  // Scroll back to the top when changing project
  useEffect(() => {
    if (!project || !scrollRef.current) return;

    scrollRef.current.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, [project?.id]);

  return (
    <AnimatePresence>
      {project && (
        <>
          {/* Backdrop */}
          <motion.div
            className="
              fixed
              inset-0
              z-[100]
              bg-black/50
              backdrop-blur-md
            "
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />

          {/* Modal */}
          <motion.div
            className="
              fixed
              inset-0
              z-[101]
              flex
              items-center
              justify-center
              p-3
              sm:p-6
              lg:p-10
            "
            initial={{
              opacity: 0,
              scale: 0.96,
              y: 20,
            }}
            animate={{
              opacity: 1,
              scale: 1,
              y: 0,
            }}
            exit={{
              opacity: 0,
              scale: 0.96,
              y: 20,
            }}
            transition={{
              duration: 0.3,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            <div
              className="
                relative
                flex
                h-full
                max-h-[900px]
                w-full
                max-w-5xl
                flex-col
                overflow-hidden
                rounded-[2rem]
                border
                border-[var(--color-border)]
                bg-[var(--color-surface)]
                shadow-2xl
              "
              onClick={(event) => event.stopPropagation()}
            >
              {/* Top Bar */}
              <div
                className="
                  flex
                  shrink-0
                  items-center
                  justify-between
                  border-b
                  border-[var(--color-border)]
                  px-5
                  py-4
                  md:px-7
                "
              >
                <button
                  type="button"
                  onClick={onClose}
                  className="
                    group
                    flex
                    items-center
                    gap-2
                    text-sm
                    font-semibold
                    text-[var(--color-muted)]
                    transition-colors
                    hover:text-[var(--color-text)]
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
                    text-[10px]
                    font-semibold
                    tracking-[0.2em]
                    text-[var(--color-muted)]
                  "
                >
                  PROJECT {currentIndex >= 0 ? `${currentIndex + 1} / ${projects.length}` : ""}
                </div>

                <button
                  type="button"
                  onClick={onClose}
                  className="
                    flex
                    h-9
                    w-9
                    items-center
                    justify-center
                    rounded-full
                    border
                    border-[var(--color-border)]
                    text-[var(--color-muted)]
                    transition-all
                    hover:bg-[var(--color-surface-soft)]
                    hover:text-[var(--color-text)]
                  "
                  aria-label="Close project details"
                >
                  <X size={17} />
                </button>
              </div>

              {/* Scroll Area */}
              <div
                ref={scrollRef}
                className="
                  min-h-0
                  flex-1
                  overflow-y-auto
                  overscroll-contain
                  px-5
                  py-8
                  sm:px-8
                  sm:py-10
                  md:px-12
                  md:py-12
                "
              >
                {/* Project Content Animation */}
                <AnimatePresence mode="wait" initial={false}>
                  <motion.div
                    key={project.id}
                    initial={{
                      opacity: 0,
                      y: 12,
                    }}
                    animate={{
                      opacity: 1,
                      y: 0,
                    }}
                    exit={{
                      opacity: 0,
                      y: -12,
                    }}
                    transition={{
                      duration: 0.28,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                  >
                    {/* Header */}
                    <div className="max-w-4xl">
                      <p
                        className="
                          mb-4
                          font-mono
                          text-xs
                          font-bold
                          uppercase
                          tracking-[0.2em]
                          text-blue-600
                          dark:text-blue-400
                        "
                      >
                        {project.category}
                      </p>

                      <h2
                        className="
                          whitespace-pre-line
                          text-4xl
                          font-black
                          leading-[0.92]
                          tracking-[-0.055em]
                          text-[var(--color-text)]
                          sm:text-5xl
                          md:text-7xl
                        "
                      >
                        {project.title}
                      </h2>

                      <p
                        className="
                          mt-7
                          max-w-2xl
                          text-base
                          leading-7
                          text-[var(--color-muted)]
                          md:text-lg
                          md:leading-8
                        "
                      >
                        {project.longDescription || project.description}
                      </p>
                    </div>

                    {/* Divider */}
                    <div
                      className="
                        my-10
                        h-px
                        bg-[var(--color-border)]
                      "
                    />

                    {/* Overview */}
                    <section>
                      <SectionLabel>Overview</SectionLabel>

                      <p
                        className="
                          max-w-3xl
                          text-sm
                          leading-7
                          text-[var(--color-muted)]
                          md:text-base
                          md:leading-8
                        "
                      >
                        {project.description}
                      </p>
                    </section>

                    {/* Highlights */}
                    {project.highlights?.length > 0 && (
                      <section className="mt-10">
                        <SectionLabel>Key Features</SectionLabel>

                        <div
                          className="
                            grid
                            gap-3
                            sm:grid-cols-2
                          "
                        >
                          {project.highlights.map((item, index) => (
                            <div
                              key={index}
                              className="
                                flex
                                items-start
                                gap-3
                                rounded-2xl
                                border
                                border-[var(--color-border)]
                                bg-[var(--color-surface-soft)]
                                p-4
                                transition-transform
                                duration-300
                                hover:-translate-y-1
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
                                  text-blue-600
                                  dark:text-blue-400
                                "
                              >
                                <Check size={13} />
                              </div>

                              <span
                                className="
                                  text-sm
                                  font-medium
                                  leading-6
                                  text-[var(--color-text)]
                                "
                              >
                                {item}
                              </span>
                            </div>
                          ))}
                        </div>
                      </section>
                    )}

                    {/* Tech Stack */}
                    <section className="mt-10">
                      <SectionLabel>Tech Stack</SectionLabel>

                      <div className="flex flex-wrap gap-2">
                        {project.technologies?.map((tech) => (
                          <span
                            key={tech}
                            className="
                              rounded-full
                              border
                              border-[var(--color-border)]
                              bg-[var(--color-surface-soft)]
                              px-4
                              py-2
                              font-mono
                              text-xs
                              font-medium
                              text-[var(--color-text)]
                            "
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </section>

                    {/* Repository */}
                    {project.github && (
                      <div
                        className="
                          mt-12
                          flex
                          flex-col
                          gap-4
                          border-t
                          border-[var(--color-border)]
                          pt-7
                          sm:flex-row
                          sm:items-center
                          sm:justify-between
                        "
                      >
                        <div>
                          <p
                            className="
                              font-mono
                              text-xs
                              uppercase
                              tracking-[0.15em]
                              text-[var(--color-muted)]
                            "
                          >
                            Source Code
                          </p>

                          <p
                            className="
                              mt-1
                              text-sm
                              font-semibold
                              text-[var(--color-text)]
                            "
                          >
                            View this project on GitHub
                          </p>
                        </div>

                        <a
                          href={project.github}
                          target="_blank"
                          rel="noreferrer"
                          className="
                            group
                            inline-flex
                            items-center
                            justify-center
                            gap-2
                            rounded-full
                            bg-[var(--color-text)]
                            px-5
                            py-3
                            text-sm
                            font-semibold
                            text-[var(--color-bg)]
                            transition-all
                            duration-300
                            hover:-translate-y-0.5
                            hover:shadow-lg
                          "
                        >
                          <span>View on GitHub</span>
                          <ArrowUpRight
                            size={15}
                            className="
                              transition-transform
                              duration-300
                              group-hover:translate-x-0.5
                              group-hover:-translate-y-0.5
                            "
                          />
                        </a>
                      </div>
                    )}
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Previous / Next */}
              <div
                className="
                  shrink-0
                  border-t
                  border-[var(--color-border)]
                  px-5
                  py-5
                  sm:px-8
                  md:px-12
                "
              >
                <div className="flex items-center justify-between gap-4">
                  {/* Previous */}
                  <button
                    type="button"
                    disabled={!previousProject}
                    onClick={() => onSelectProject(previousProject)}
                    className="
                      group
                      flex
                      min-w-0
                      items-center
                      gap-3
                      text-left
                      transition-opacity
                      disabled:pointer-events-none
                      disabled:opacity-30
                    "
                  >
                    <ArrowLeft
                      size={18}
                      className="
                        shrink-0
                        transition-transform
                        duration-300
                        group-hover:-translate-x-1
                      "
                    />

                    <div className="min-w-0">
                      <p
                        className="
                          text-[10px]
                          font-medium
                          uppercase
                          tracking-[0.2em]
                          text-[var(--color-muted)]
                        "
                      >
                        Previous
                      </p>

                      <p
                        className="
                          mt-1
                          max-w-[150px]
                          truncate
                          text-sm
                          font-medium
                          text-[var(--color-text)]
                          sm:max-w-[220px]
                        "
                      >
                        {previousProject?.shortTitle ||
                          previousProject?.title ||
                          "Previous Project"}
                      </p>
                    </div>
                  </button>

                  {/* Project counter */}
                  <span
                    className="
                      hidden
                      font-mono
                      text-[10px]
                      font-medium
                      tracking-[0.15em]
                      text-[var(--color-muted)]
                      sm:block
                    "
                  >
                    {currentIndex >= 0
                      ? `${String(currentIndex + 1).padStart(2, "0")} / ${String(projects.length).padStart(2, "0")}`
                      : ""}
                  </span>

                  {/* Next */}
                  <button
                    type="button"
                    disabled={!nextProject}
                    onClick={() => onSelectProject(nextProject)}
                    className="
                      group
                      flex
                      min-w-0
                      items-center
                      gap-3
                      text-right
                      transition-opacity
                      disabled:pointer-events-none
                      disabled:opacity-30
                    "
                  >
                    <div className="min-w-0">
                      <p
                        className="
                          text-[10px]
                          font-medium
                          uppercase
                          tracking-[0.2em]
                          text-[var(--color-muted)]
                        "
                      >
                        Next
                      </p>

                      <p
                        className="
                          mt-1
                          max-w-[150px]
                          truncate
                          text-sm
                          font-medium
                          text-[var(--color-text)]
                          sm:max-w-[220px]
                        "
                      >
                        {nextProject?.shortTitle ||
                          nextProject?.title ||
                          "Next Project"}
                      </p>
                    </div>

                    <ArrowRight
                      size={18}
                      className="
                        shrink-0
                        transition-transform
                        duration-300
                        group-hover:translate-x-1
                      "
                    />
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}

/* ========================================
   SMALL COMPONENTS
======================================== */

function SectionLabel({ children }) {
  return (
    <h3
      className="
        mb-4
        font-mono
        text-xs
        font-bold
        uppercase
        tracking-[0.18em]
        text-blue-600
        dark:text-blue-400
      "
    >
      {children}
    </h3>
  );
}
