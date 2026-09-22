import { motion } from "motion/react";

const stackGroups = [
  {
    title: "Frontend",
    technologies: [
      "React",
      "JavaScript",
      "HTML",
      "CSS",
      "Tailwind CSS",
    ],
  },
  {
    title: "Backend",
    technologies: [
      "Node.js",
      "Express",
      "ASP.NET Core",
      "C#",
      "Python",
      "FastAPI",
    ],
  },
  {
    title: "Database",
    technologies: [
      "MongoDB",
      "MySQL",
      "FAISS",
      "Pinecone",
    ],
  },
  {
    title: "AI / Tools",
    technologies: [
      "LangChain",
      "RAG",
      "Ollama",
      "n8n",
      "LINE Messaging API",
      "Git",
      "GitHub",
    ],
  },
];

export default function TechStack() {
  return (
    <section id="stack" className="section-shell">
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
          amount: 0.2,
        }}
        transition={{
          duration: 0.6,
        }}
      >
        <p className="section-kicker">
          Tech Stack / 03
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
          <h2 className="section-title max-w-3xl">
            Tools I use
            <br />
            to build things.
          </h2>

          <p
            className="
              max-w-md
              text-base
              leading-7
              text-[var(--color-muted)]
            "
          >
            Technologies and tools I have used across full-stack,
            business, and AI-focused projects.
          </p>
        </div>

        <div
          className="
            mt-12
            grid
            gap-4
            md:grid-cols-2
          "
        >
          {stackGroups.map((group, index) => (
            <motion.div
              key={group.title}
              initial={{
                opacity: 0,
                y: 20,
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
              className="
                rounded-[1.75rem]
                border
                border-[var(--color-border)]
                bg-[var(--color-surface)]
                p-6
                md:p-8
              "
            >
              <div className="flex items-center justify-between">
                <h3
                  className="
                    text-xl
                    font-bold
                    tracking-[-0.03em]
                    text-[var(--color-text)]
                  "
                >
                  {group.title}
                </h3>

                <span
                  className="
                    font-mono
                    text-xs
                    text-[var(--color-muted)]
                  "
                >
                  0{index + 1}
                </span>
              </div>

              <div className="mt-6 flex flex-wrap gap-2">
                {group.technologies.map((technology) => (
                  <span
                    key={technology}
                    className="
                      rounded-full
                      border
                      border-[var(--color-border)]
                      bg-[var(--color-surface-soft)]
                      px-3
                      py-1.5
                      text-sm
                      text-[var(--color-muted)]
                      transition-colors
                      duration-300
                      hover:border-[var(--color-accent)]
                      hover:text-[var(--color-text)]
                    "
                  >
                    {technology}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}