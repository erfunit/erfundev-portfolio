import React from "react";
import { useScroll, useSpring, motion } from "framer-motion";

const ScrollBar = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });
  return (
    <motion.div
      style={{ scaleX, transformOrigin: "left" }}
      className="fixed w-full z-[100] h-[2px] sm:h-[2px] md:h-[4px] bg-[#FFB800]"
    ></motion.div>
  );
};

export default ScrollBar;
