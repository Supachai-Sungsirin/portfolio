import { motion } from "motion/react";

export default function QuickAbout() {
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
          About / 01
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
          I build practical
          <br />

          web applications
          <br />

          and explore AI.
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
          I'm a fourth-year Computer Science student
          who enjoys turning ideas into practical
          applications and learning new technologies.
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
        <InfoCard
          number="01"
          title="Year 4"
          text="Computer Science"
        />

        <InfoCard
          number="02"
          title="Full-Stack"
          text="Web Development"
        />

        <InfoCard
          number="03"
          title="AI"
          text="Exploring Practical AI"
        />
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
          opacity-0
          transition-opacity
          duration-300
          group-hover:opacity-100
          bg-gradient-to-br
          from-blue-500/10
          via-transparent
          to-purple-500/10
        "
      />
    </motion.div>
  );
}