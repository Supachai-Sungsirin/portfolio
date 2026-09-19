import { Moon, Sun } from "lucide-react";
import { motion } from "motion/react";

export default function ThemeToggle({ isDark, onToggle }) {
  return (
    <motion.button
      type="button"
      onClick={onToggle}
      whileHover={{ scale: 1.06 }}
      whileTap={{ scale: 0.94 }}
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
      className="
        grid h-10 w-10 place-items-center rounded-full
        border border-black/10 bg-white/70 text-zinc-900
        shadow-sm backdrop-blur-xl transition-colors
        dark:border-white/10 dark:bg-white/[0.06] dark:text-zinc-100
      "
    >
      <motion.span
        key={isDark ? "sun" : "moon"}
        initial={{ opacity: 0, rotate: -30, scale: 0.75 }}
        animate={{ opacity: 1, rotate: 0, scale: 1 }}
        transition={{ duration: 0.2 }}
      >
        {isDark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
      </motion.span>
    </motion.button>
  );
}
