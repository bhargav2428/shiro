import { motion } from "framer-motion";

const LoadingScreen = () => {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-br from-primary via-secondary to-accent"
    >
      <div className="relative">
        {/* Morphing blob */}
        <motion.div
          className="w-32 h-32 bg-white/20 backdrop-blur-lg morph-loader"
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        
        {/* Inner spinning circle */}
        <motion.div
          className="absolute inset-0 flex items-center justify-center"
          animate={{ rotate: 360 }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "linear"
          }}
        >
          <div className="w-16 h-16 border-4 border-white/30 border-t-white rounded-full" />
        </motion.div>

        {/* Logo/Text */}
        <motion.div
          className="absolute inset-0 flex items-center justify-center"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          <span className="text-white font-bold text-2xl">Shrimpact</span>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default LoadingScreen;
