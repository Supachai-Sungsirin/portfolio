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
          amount: 0.3,
        }}
        transition={{
          duration: 0.6,
        }}
      >
        <p className="section-kicker">
          {t.kicker}
        </p>

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
            max-w-2xl
            text-lg
            leading-8
            text-[var(--color-muted)]
          "
        >
          {t.description}
        </p>
      </motion.div>

      {/* Info Cards */}
      <div
        className="
          mt-14
          grid
          gap-4
          md:grid-cols-3
        "
      >
        {t.cards.map((card, index) => (
          <InfoCard
            key={card.title}
            number={`0${index + 1}`}
            title={card.title}
            text={card.text}
          />
        ))}
      </div>
    </section>
  );
}

function InfoCard({
  number,
  title,
  text,
}) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 25,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{
        once: true,
      }}
      whileHover={{
        y: -6,
      }}
      className="
        group
        relative
        overflow-hidden
        rounded-2xl
        border
        border-black/10
        bg-[var(--color-surface)]
        p-6
        transition
        dark:border-white/10
      "
    >
      <span
        className="
          font-mono
          text-xs
          text-blue-500
        "
      >
        {number}
      </span>

      <h3
        className="
          mt-8
          text-2xl
          font-bold
        "
      >
        {title}
      </h3>

      <p
        className="
          mt-2
          text-sm
          text-[var(--color-muted)]
        "
      >
        {text}
      </p>

      {/* Hover Glow */}
      <div
        className="
          pointer-events-none
          absolute
          inset-0
          bg-gradient-to-br
          from-blue-500/10
          via-transparent
          to-purple-500/10
          opacity-0
          transition-opacity
          duration-300
          group-hover:opacity-100
        "
      />
    </motion.div>
  );
}