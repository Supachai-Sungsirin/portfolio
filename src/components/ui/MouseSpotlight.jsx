import { useEffect, useState } from "react";
import { motion } from "motion/react";

export default function MouseSpotlight() {
  const [position, setPosition] = useState({
    x: -500,
    y: -500,
  });

  useEffect(() => {
    const handleMouseMove = (event) => {
      setPosition({
        x: event.clientX,
        y: event.clientY,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <motion.div
      className="pointer-events-none fixed inset-0 z-0 hidden md:block"
      animate={{
        background: `
          radial-gradient(
            500px circle at ${position.x}px ${position.y}px,
            rgba(99, 102, 241, 0.12),
            transparent 70%
          )
        `,
      }}
      transition={{
        type: "tween",
        ease: "linear",
        duration: 0.15,
      }}
    />
  );
}