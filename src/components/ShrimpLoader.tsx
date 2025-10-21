// components/ShrimpLoader.tsx
import { motion } from "framer-motion";

const ShrimpLoader = () => {
  return (
    <div className="fixed inset-0 bg-white z-50 flex items-center justify-center">
      <div className="text-center">
        {/* Shrimp Animation */}
        <motion.div
          className="w-16 h-8 bg-gradient-to-r from-orange-400 to-red-500 rounded-full relative mx-auto mb-4"
          animate={{
            scale: [1, 1.2, 1],
            x: [-20, 20, -20],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          {/* Shrimp details */}
          <motion.div
            className="absolute -left-2 top-1/2 transform -translate-y-1/2 w-4 h-4 bg-white rounded-full"
            animate={{ rotate: 360 }}
            transition={{ duration: 1, repeat: Infinity }}
          />
          <motion.div
            className="absolute -right-1 top-0 w-2 h-2 bg-red-600 rounded-full"
            animate={{ opacity: [0, 1, 0] }}
            transition={{ duration: 0.5, repeat: Infinity }}
          />
        </motion.div>
        
        {/* Loading text */}
        <motion.p
          className="text-gray-600 font-medium"
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          Loading...
        </motion.p>
      </div>
    </div>
  );
};

export default ShrimpLoader;