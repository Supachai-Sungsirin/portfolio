import { useRef } from "react";
import { motion } from "motion/react";

export default function MagneticButton({
  children,
  href,
}) {
  const buttonRef = useRef(null);

  const handleMouseMove = (event) => {
    const button = buttonRef.current;

    if (!button) return;

    const rect = button.getBoundingClientRect();

    const x =
      event.clientX - rect.left - rect.width / 2;

    const y =
      event.clientY - rect.top - rect.height / 2;

    button.style.transform =
      `translate(${x * 0.15}px, ${y * 0.15}px)`;
  };

  const handleMouseLeave = () => {
    const button = buttonRef.current;

    if (!button) return;

    button.style.transform =
      "translate(0px, 0px)";
  };

  return (
    <a
      ref={buttonRef}
      href={href}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="
        magnetic-button
        inline-flex
        items-center
        gap-3
        rounded-full
        bg-zinc-950
        px-6
        py-3
        font-semibold
        text-white
        transition-transform
        duration-200
        dark:bg-white
        dark:text-zinc-950
      "
    >
      {children}
    </a>
  );
}