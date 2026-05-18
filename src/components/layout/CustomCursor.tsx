import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export function CustomCursor() {
  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const sx = useSpring(x, { damping: 25, stiffness: 350, mass: 0.4 });
  const sy = useSpring(y, { damping: 25, stiffness: 350, mass: 0.4 });
  const [hovering, setHovering] = useState(false);

  useEffect(() => {
    const move = (e: MouseEvent) => {
      x.set(e.clientX - 12);
      y.set(e.clientY - 12);
      const t = e.target as HTMLElement;
      setHovering(!!t.closest("a, button, [data-cursor='hover']"));
    };
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, [x, y]);

  return (
    <motion.div
      style={{ translateX: sx, translateY: sy }}
      animate={{ scale: hovering ? 2.4 : 1, opacity: hovering ? 0.4 : 1 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      className="pointer-events-none fixed left-0 top-0 z-[200] hidden h-6 w-6 rounded-full bg-primary mix-blend-difference md:block"
    />
  );
}
