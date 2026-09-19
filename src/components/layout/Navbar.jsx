import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { Menu, Plus, X } from "lucide-react";

import ThemeToggle from "../ui/ThemeToggle";
import { siteData } from "../../data/siteData";

export default function Navbar({ isDark, onThemeToggle }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [moreOpen, setMoreOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();

    window.addEventListener("scroll", onScroll, { passive: true });

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const closeMenus = () => {
    setMobileOpen(false);
    setMoreOpen(false);
  };

  return (
    <header className="pointer-events-none fixed inset-x-0 top-0 z-50 px-4 pt-4 md:px-6">
      <motion.nav
        layout
        className={`
          pointer-events-auto mx-auto flex max-w-6xl items-center justify-between
          rounded-2xl border px-4 transition-all duration-300 md:px-5
          ${
            scrolled
              ? "h-14 border-black/10 bg-white/80 shadow-lg shadow-black/[0.05] backdrop-blur-2xl dark:border-white/10 dark:bg-black/60 dark:shadow-black/30"
              : "h-16 border-transparent bg-transparent"
          }
        `}
      >
        <a
          href="#top"
          onClick={closeMenus}
          className="font-black tracking-[-0.04em] text-zinc-950 dark:text-white"
        >
          {siteData.personal.shortName}
        </a>

        <div className="hidden items-center gap-7 md:flex">
          {siteData.navigation.map((item) => (
            <a key={item.label} href={item.href} className="nav-link">
              {item.label}
            </a>
          ))}

          <div className="relative">
            <button
              type="button"
              onClick={() => setMoreOpen((value) => !value)}
              className="nav-link inline-flex items-center gap-1.5"
            >
              More
              <motion.span animate={{ rotate: moreOpen ? 45 : 0 }}>
                <Plus className="h-3.5 w-3.5" />
              </motion.span>
            </button>

            <AnimatePresence>
              {moreOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 8, scale: 0.98 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 8, scale: 0.98 }}
                  transition={{ duration: 0.18 }}
                  className="
                    absolute right-0 top-10 w-52 overflow-hidden rounded-2xl
                    border border-black/10 bg-white/95 p-2 shadow-2xl backdrop-blur-2xl
                    dark:border-white/10 dark:bg-zinc-950/95
                  "
                >
                  {siteData.moreLinks.map((item, index) => (
                    <motion.a
                      key={item.label}
                      href={item.href}
                      target={item.external ? "_blank" : undefined}
                      rel={item.external ? "noreferrer" : undefined}
                      onClick={closeMenus}
                      initial={{ opacity: 0, x: -5 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.035 }}
                      className="
                        block rounded-xl px-3 py-2.5 text-sm font-medium
                        text-zinc-600 transition hover:bg-zinc-100 hover:text-zinc-950
                        dark:text-zinc-400 dark:hover:bg-white/[0.07] dark:hover:text-white
                      "
                    >
                      {item.label}
                    </motion.a>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <ThemeToggle isDark={isDark} onToggle={onThemeToggle} />
        </div>

        <div className="flex items-center gap-2 md:hidden">
          <ThemeToggle isDark={isDark} onToggle={onThemeToggle} />

          <motion.button
            type="button"
            whileTap={{ scale: 0.92 }}
            onClick={() => setMobileOpen((value) => !value)}
            className="
              grid h-10 w-10 place-items-center rounded-full
              border border-black/10 bg-white/70 backdrop-blur-xl
              dark:border-white/10 dark:bg-white/[0.06]
            "
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </motion.button>
        </div>
      </motion.nav>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -8, scale: 0.98 }}
            transition={{ duration: 0.2 }}
            className="
              pointer-events-auto mx-auto mt-2 max-w-6xl overflow-hidden rounded-2xl
              border border-black/10 bg-white/95 p-3 shadow-2xl backdrop-blur-2xl
              dark:border-white/10 dark:bg-zinc-950/95 md:hidden
            "
          >
            {[...siteData.navigation, ...siteData.moreLinks].map((item, index) => (
              <motion.a
                key={`${item.label}-${index}`}
                href={item.href}
                target={item.external ? "_blank" : undefined}
                rel={item.external ? "noreferrer" : undefined}
                onClick={closeMenus}
                initial={{ opacity: 0, y: -4 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.03 }}
                className="
                  block rounded-xl px-4 py-3 font-semibold text-zinc-700
                  transition hover:bg-zinc-100
                  dark:text-zinc-300 dark:hover:bg-white/[0.07]
                "
              >
                {item.label}
              </motion.a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
