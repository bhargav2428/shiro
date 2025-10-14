import { motion, useScroll, useTransform } from "framer-motion";
import { ReactNode, useRef } from "react";

interface ParallaxSectionProps {
  children: ReactNode;
  speed?: number;
  className?: string;
}

const ParallaxSection = ({ children, speed = 0.5, className = "" }: ParallaxSectionProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, -100 * speed]);

  return (
    <div ref={ref} className={`parallax-container ${className}`}>
      <motion.div style={{ y }}>
        {children}
      </motion.div>
    </div>
  );
};

export default ParallaxSection;
