import { motion } from "motion/react";

export default function Education() {
  return (
    <section id="education" className="section-shell">
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
          Education / 04
        </p>

        <div
          className="
            mt-8
            rounded-[2rem]
            border
            border-[var(--color-border)]
            bg-[var(--color-surface)]
            p-6
            md:p-10
          "
        >
          <div
            className="
              grid
              gap-8
              md:grid-cols-2
            "
          >
            <div className="flex flex-col justify-between gap-8">
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
                Bachelor's Degree
              </p>

              <h2
                className="
                  mt-4
                  text-4xl
                  font-black
                  leading-[1]
                  tracking-[-0.05em]
                  text-[var(--color-text)]
                  md:text-6xl
                "
              >
                Computer
                <br />
                Science.
              </h2>

              <p
                className="
                  mt-5
                  text-base
                  text-[var(--color-muted)]
                "
              >
                Sripatum University
              </p>
              </div>

              <div className="flex flex-wrap items-center gap-2">
                <span
                  className="
                    font-mono
                    text-sm
                    text-[var(--color-muted)]
                  "
                >
                  4th Year
                </span>

                <span
                  className="
                    inline-flex
                    rounded-full
                    border
                    border-[var(--color-border)]
                    bg-[var(--color-surface-soft)]
                    px-3
                    py-1.5
                    text-xs
                    font-medium
                    text-[var(--color-accent)]
                  "
                >
                  GPA 3.85
                </span>
              </div>
            </div>

            <div
              className="
                flex
                flex-col
                justify-between
                gap-8
                border-t
                border-[var(--color-border)]
                pt-8
                md:border-l
                md:border-t-0
                md:pl-8
                md:pt-0
              "
            >
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
                  Secondary Education
                </p>

                <h2
                  className="
                    mt-4
                    text-4xl
                    font-black
                    leading-[1]
                    tracking-[-0.05em]
                    text-[var(--color-text)]
                    md:text-6xl
                  "
                >
                  Science
                  <br />
                  Mathematics.
                </h2>

                <p
                  className="
                    mt-5
                    text-base
                    text-[var(--color-muted)]
                  "
                >
                  Nadee Wittaya School
                </p>
              </div>

              <div className="flex flex-wrap items-center gap-2">
                <span
                  className="
                    font-mono
                    text-sm
                    text-[var(--color-muted)]
                  "
                >
                  2021 - 2023
                </span>

                <span
                  className="
                    inline-flex
                    rounded-full
                    border
                    border-[var(--color-border)]
                    bg-[var(--color-surface-soft)]
                    px-3
                    py-1.5
                    text-xs
                    font-medium
                    text-[var(--color-accent)]
                  "
                >
                  GPA 3.16
                </span>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}