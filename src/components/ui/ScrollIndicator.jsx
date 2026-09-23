import { motion } from "motion/react";

export default function ScrollIndicator() {
  return (
    <div
      className="
        pointer-events-none
        absolute
        inset-x-0
        bottom-4
        z-20

        flex
        justify-center

        sm:bottom-5
        md:bottom-6
        lg:bottom-8
      "
    >
      <motion.div
        className="
          flex
          flex-col
          items-center
          gap-2
        "
        animate={{
          y: [0, 8, 0],
        }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <span
          className="
            font-mono
            text-[10px]
            uppercase
            tracking-[0.25em]
            text-zinc-400
          "
        >
          Scroll
        </span>

        <div
          className="
            h-8
            w-px
            bg-gradient-to-b
            from-zinc-400
            to-transparent
          "
        />
      </motion.div>
    </div>
  );
}