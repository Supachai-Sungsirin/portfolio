import { motion, useScroll, useTransform } from "motion/react";
import { ArrowDown } from "lucide-react";

import MagneticButton from "../ui/MagneticButton";
import ScrollIndicator from "../ui/ScrollIndicator";

export default function Hero() {
  const { scrollY } = useScroll();

  const opacity = useTransform(
    scrollY,
    [0, 400],
    [1, 0]
  );

  const scale = useTransform(
    scrollY,
    [0, 400],
    [1, 0.92]
  );

  const blur = useTransform(
    scrollY,
    [0, 400],
    ["blur(0px)", "blur(10px)"]
  );

  return (
    <section
        className="
            relative
            flex
            min-h-[100svh]
            overflow-hidden
            px-5
            pt-20
            pb-24
            sm:pt-24
            md:px-6
            md:pt-28
            md:pb-28
            lg:items-center
            lg:pt-24
        "
    >
      {/* Background Glow */}

      <div
        className="
          pointer-events-none
          absolute
          left-1/2
          top-1/2
          h-[500px]
          w-[500px]
          -translate-x-1/2
          -translate-y-1/2
          rounded-full
          bg-indigo-500/10
          blur-[120px]
        "
      />

      {/* Grid */}

      <div
        className="
          pointer-events-none
          absolute
          inset-0
          grid-pattern
          opacity-50
          dark:opacity-30
        "
      />

      {/* Content */}

      <motion.div
        style={{
            opacity,
            scale,
            filter: blur,
        }}
        className="
            relative
            z-10
            mx-auto
            w-full
            max-w-6xl
            pt-10
            sm:pt-14
            md:pt-20
            lg:pt-0
        "
        >
        {/* Label */}

        <motion.p
          initial={{
            opacity: 0,
            y: 20,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.5,
          }}
          className="
            mb-6
            font-mono
            text-xs
            font-semibold
            uppercase
            tracking-[0.25em]
            text-blue-600
            dark:text-blue-400
          "
        >
          Portfolio / 2026
        </motion.p>

        {/* Name */}

        <div className="overflow-hidden">
          <motion.h1
            initial={{
              y: "110%",
            }}
            animate={{
              y: 0,
            }}
            transition={{
              duration: 0.8,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="
              text-[clamp(4rem,11vw,10rem)]
              font-black
              leading-[0.78]
              tracking-[-0.08em]
            "
          >
            SUPACHAI.
          </motion.h1>
        </div>

        <div className="overflow-hidden">
          <motion.h1
            initial={{
              y: "110%",
            }}
            animate={{
              y: 0,
            }}
            transition={{
              duration: 0.8,
              delay: 0.1,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="
              text-[clamp(4rem,11vw,10rem)]
              font-black
              leading-[0.78]
              tracking-[-0.08em]
              text-zinc-300
              dark:text-zinc-700
            "
          >
            SUNGSIRIN
          </motion.h1>
        </div>

        {/* Bottom */}

        <motion.div
          initial={{
            opacity: 0,
            y: 20,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.5,
            delay: 0.45,
          }}
          className="
            mt-10
            flex
            flex-col
            gap-6
            md:flex-row
            md:items-end
            md:justify-between
          "
        >
          <div className="max-w-xl">
            <p
              className="
                text-lg
                leading-8
                text-[var(--color-muted)]
                md:text-xl
              "
            >
              Computer Science Student.
              <br />

              Full-Stack & AI Developer.
            </p>

            <div
              className="
                mt-4
                inline-flex
                items-center
                gap-2
                rounded-full
                border
                border-emerald-500/20
                bg-emerald-500/10
                px-3
                py-1.5
                text-xs
                font-bold
                text-emerald-600
                dark:text-emerald-400
              "
            >
              <span
                className="
                  h-2
                  w-2
                  animate-pulse
                  rounded-full
                  bg-emerald-500
                "
              />

              Open for Co-op
            </div>
          </div>

          <MagneticButton href="#work">
            Explore Work

            <ArrowDown size={18} />
          </MagneticButton>
        </motion.div>
      </motion.div>

      <ScrollIndicator />
    </section>
  );
}