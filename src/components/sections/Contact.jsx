import { motion } from "motion/react";
import { ArrowUpRight, Mail, FileText } from "lucide-react";
import { useLanguage } from "../../context/LanguageContext";
import { translations } from "../../data/translations";

const contactLinks = [
  {
    key: "email",
    value: "supachaisun.dev@gmail.com",
    href: "mailto:supachaisun.dev@gmail.com",
    icon: Mail,
  },
  {
    key: "github",
    value: "github.com/Supachai-Sungsirin",
    href: "https://github.com/Supachai-Sungsirin",
  },
  {
    key: "linkedin",
    value: "linkedin.com/in/supachai-sungsirin-56219a436",
    href: "https://www.linkedin.com/in/supachai-sungsirin-56219a436/",
  },
];

export default function Contact() {
  const { language } = useLanguage();
  const t = translations[language].contact;

  const contactLabels = {
    email: t.email,
    github: t.github,
    linkedin: t.linkedin,
  };

  return (
    <section
      id="contact"
      className="
        section-shell
        min-h-[60svh]
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
        {/* Section Header */}
        <p className="section-kicker">
          {t.kicker}
        </p>

        <div
          className="
            mt-8
            overflow-hidden
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
              flex
              flex-col
              gap-10
              lg:flex-row
              lg:items-end
              lg:justify-between
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
                {t.status}
              </p>

              <h2
                className="
                  mt-4
                  max-w-3xl
                  text-5xl
                  font-black
                  leading-[0.95]
                  tracking-[-0.06em]
                  text-[var(--color-text)]
                  md:text-7xl
                "
              >
                {t.titleLine1}
                <br />
                {t.titleLine2}
              </h2>

              <p
                className="
                  mt-6
                  max-w-xl
                  text-base
                  leading-7
                  text-[var(--color-muted)]
                  md:text-lg
                "
              >
                {t.description}
              </p>
            </div>

            {/* Get in Touch */}
            <a
              href="mailto:supachaisun.dev@gmail.com"
              className="
                group
                inline-flex
                w-fit
                shrink-0
                items-center
                gap-3
                rounded-full
                bg-[var(--color-text)]
                px-6
                py-3.5
                text-sm
                font-semibold
                text-[var(--color-bg)]
                transition-transform
                duration-300
                hover:-translate-y-1
              "
            >
              {t.button}

              <ArrowUpRight
                size={18}
                className="
                  transition-transform
                  duration-300
                  group-hover:translate-x-1
                  group-hover:-translate-y-1
                "
              />
            </a>
          </div>

          {/* Contact Links */}
          <div
            className="
              mt-10
              grid
              border-t
              border-[var(--color-border)]
              pt-6
              md:grid-cols-3
            "
          >
            {contactLinks.map((link) => {
              const Icon = link.icon;

              return (
                <a
                  key={link.key}
                  href={link.href}
                  target={
                    link.href.startsWith("http")
                      ? "_blank"
                      : undefined
                  }
                  rel={
                    link.href.startsWith("http")
                      ? "noopener noreferrer"
                      : undefined
                  }
                  className="
                    group
                    flex
                    items-center
                    gap-4
                    border-b
                    border-[var(--color-border)]
                    py-4
                    md:border-b-0
                    md:border-r
                    md:px-6
                    md:first:pl-0
                    md:last:border-r-0
                  "
                >
                  <div
                    className="
                      flex
                      h-10
                      w-10
                      shrink-0
                      items-center
                      justify-center
                      rounded-xl
                      border
                      border-[var(--color-border)]
                      bg-[var(--color-surface-soft)]
                      text-[var(--color-muted)]
                      transition-colors
                      duration-300
                      group-hover:text-[var(--color-text)]
                    "
                  >
                    {Icon ? (
                      <Icon size={17} />
                    ) : (
                      <ArrowUpRight size={17} />
                    )}
                  </div>

                  <div className="min-w-0">
                    <p
                      className="
                        text-xs
                        font-medium
                        text-[var(--color-muted)]
                      "
                    >
                      {contactLabels[link.key]}
                    </p>

                    <p
                      className="
                        mt-1
                        truncate
                        text-sm
                        text-[var(--color-text)]
                      "
                    >
                      {link.value}
                    </p>
                  </div>
                </a>
              );
            })}
          </div>

          {/* Resume */}
          <div
            className="
              mt-6
              flex
              flex-wrap
              gap-3
            "
          >
            <a
              href="https://drive.google.com/file/d/1pPh_X2JQsqo73B_uEchAYVQ8HXU0Y39e/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="
                inline-flex
                items-center
                gap-2
                rounded-full
                border
                border-[var(--color-border)]
                bg-[var(--color-surface-soft)]
                px-4
                py-2.5
                text-sm
                font-medium
                text-[var(--color-text)]
                transition-all
                duration-300
                hover:-translate-y-0.5
                hover:border-[var(--color-accent)]
              "
            >
              <FileText size={16} />
              {t.resume}
            </a>
          </div>
        </div>
      </motion.div>
    </section>
  );
}