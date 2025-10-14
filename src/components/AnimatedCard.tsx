import { motion } from "framer-motion";
import { ReactNode } from "react";

interface AnimatedCardProps {
  children: ReactNode;
  delay?: number;
  className?: string;
  hover3d?: boolean;
}

const AnimatedCard = ({ children, delay = 0, className = "", hover3d = false }: AnimatedCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50, scale: 0.95 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{
        duration: 0.6,
        delay,
        ease: [0.23, 1, 0.32, 1]
      }}
      whileHover={hover3d ? {
        scale: 1.05,
        rotateY: 5,
        rotateX: 5,
        transition: { duration: 0.3 }
      } : {
        scale: 1.02,
        transition: { duration: 0.3 }
      }}
      className={`${hover3d ? 'card-3d' : ''} ${className}`}
      style={hover3d ? { transformStyle: "preserve-3d" } : {}}
    >
      {children}
    </motion.div>
  );
};

export default AnimatedCard;
