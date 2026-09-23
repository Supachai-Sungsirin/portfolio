import { motion } from "motion/react";

import { useLanguage } from "../../context/LanguageContext";
import { translations } from "../../data/translations";

export default function QuickAbout() {
  const { language } = useLanguage();
  const t = translations[language].about;

  return (
    <section
      id="about"
      className="
        mx-auto
        max-w-6xl
        px-5
        py-24
        md:px-6
        md:py-32
      "
    >
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
        <p className="section-kicker">{t.kicker}</p>

        <h2
          className="
            max-w-4xl
            text-4xl
            font-black
            leading-[1.05]
            tracking-[-0.05em]
            md:text-6xl
          "
        >
          {t.titleLine1}
          <br />
          {t.titleLine2}
          <br />
          {t.titleLine3}
        </h2>

        <p
          className="
            mt-8
            max-w-3xl
            text-lg
            leading-8
            text-[var(--color-muted)]
            md:text-xl
            md:leading-9
          "
        >
          {t.description}
        </p>

        <motion.div
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
            delay: 0.1,
          }}
          className="
            mt-10
            flex
            flex-col
            gap-5
            rounded-[1.5rem]
            border
            border-[var(--color-border)]
            bg-[var(--color-surface)]
            p-5
            md:flex-row
            md:items-center
            md:justify-between
            md:p-6
          "
        >
          <div>
            <p
              className="
                font-mono
                text-[10px]
                uppercase
                tracking-[0.2em]
                text-[var(--color-accent)]
              "
            >
              {t.currently.label}
            </p>

            <p
              className="
                mt-2
                text-base
                font-semibold
                text-[var(--color-text)]
              "
            >
              {t.currently.title}
            </p>

            <p
              className="
                mt-1
                text-sm
                text-[var(--color-muted)]
              "
            >
              {t.currently.subtitle}
            </p>
          </div>

          <div
            className="
              inline-flex
              w-fit
              items-center
              gap-2
              rounded-full
              border
              border-[var(--color-border)]
              bg-[var(--color-surface-soft)]
              px-4
              py-2
              text-xs
              font-medium
              text-[var(--color-accent)]
            "
          >
            <span
              className="
                h-2
                w-2
                rounded-full
                bg-[var(--color-accent)]
              "
            />

            {t.currently.status}
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}