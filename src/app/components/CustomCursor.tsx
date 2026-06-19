import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "motion/react";

export function CustomCursor() {
  const [isVisible, setIsVisible] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  const [isMobile, setIsMobile] = useState(true); // default true, check in effect

  // Use motion values for smooth tracking
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  // Springs for smooth movement
  const springConfigDot = { damping: 40, stiffness: 800, mass: 0.1 };
  const springConfigRing = { damping: 30, stiffness: 200, mass: 0.4 };

  const dotX = useSpring(cursorX, springConfigDot);
  const dotY = useSpring(cursorY, springConfigDot);
  const ringX = useSpring(cursorX, springConfigRing);
  const ringY = useSpring(cursorY, springConfigRing);

  useEffect(() => {
    // Check if it's a touch device
    if (window.matchMedia("(pointer: coarse)").matches) {
      setIsMobile(true);
      return;
    }
    setIsMobile(false);

    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        target.tagName.toLowerCase() === "button" ||
        target.tagName.toLowerCase() === "a" ||
        target.closest("button") ||
        target.closest("a") ||
        window.getComputedStyle(target).cursor === "pointer"
      ) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    window.addEventListener("mousemove", moveCursor);
    window.addEventListener("mouseover", handleMouseOver);
    document.addEventListener("mouseleave", handleMouseLeave);
    document.addEventListener("mouseenter", handleMouseEnter);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      window.removeEventListener("mouseover", handleMouseOver);
      document.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("mouseenter", handleMouseEnter);
    };
  }, [isVisible, cursorX, cursorY]);

  if (isMobile) return null;

  return (
    <>
      {/* Soft trailing ring */}
      <motion.div
        className="fixed top-0 left-0 w-10 h-10 border-2 border-[var(--primary)]/40 rounded-full pointer-events-none z-[9998]"
        style={{
          x: ringX,
          y: ringY,
          translateX: "-50%",
          translateY: "-50%",
          scale: isHovering ? 1.5 : 1,
          opacity: isVisible ? 1 : 0,
        }}
        transition={{ scale: { duration: 0.2 } }}
      />
      {/* Small glowing blue dot */}
      <motion.div
        className="fixed top-0 left-0 w-2.5 h-2.5 bg-[var(--primary)] rounded-full pointer-events-none z-[9999]"
        style={{
          x: dotX,
          y: dotY,
          translateX: "-50%",
          translateY: "-50%",
          scale: isHovering ? 0 : 1, // Shrink dot when hovering
          opacity: isVisible ? 1 : 0,
          boxShadow: "0 0 10px 2px rgba(79, 70, 229, 0.6)",
        }}
        transition={{ scale: { duration: 0.2 } }}
      />
    </>
  );
}
