import { motion } from "framer-motion";
import AnimatedShrimp from "@/components/AnimatedShrimp";

const LoadingScreen = () => {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-br from-primary via-secondary to-accent"
    >
      <div className="relative flex flex-col items-center gap-4">
        <AnimatedShrimp size={220} color="text-white" className="drop-shadow-xl" speed={1.4} />
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: [0, 1, 0.6, 1] }}
          transition={{ duration: 1.2, repeat: Infinity, ease: "easeInOut" }}
          className="text-white/90 font-semibold tracking-wide"
        >
          Loading
        </motion.span>
      </div>
    </motion.div>
  );
};

export default LoadingScreen;
