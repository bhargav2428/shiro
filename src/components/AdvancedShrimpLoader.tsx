// components/AdvancedShrimpLoader.tsx
import { motion } from "framer-motion";

const AdvancedShrimpLoader = () => {
  return (
    <div className="fixed inset-0 bg-gradient-to-br from-blue-50 to-cyan-100 z-50 flex items-center justify-center">
      <div className="text-center">
        {/* Ocean background */}
        <div className="relative w-32 h-16 bg-gradient-to-b from-blue-300 to-blue-500 rounded-lg mb-8 overflow-hidden">
          {/* Wave animation */}
          <motion.div
            className="absolute top-0 left-0 w-full h-4 bg-blue-200 opacity-60"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
          
          {/* Swimming shrimp */}
          <motion.div
            className="absolute top-1/2 left-4 w-12 h-6 bg-gradient-to-r from-orange-400 to-red-500 rounded-full"
            animate={{
              x: [0, 80, 0],
              rotate: [0, 5, 0, -5, 0],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            {/* Shrimp tail */}
            <div className="absolute -left-2 top-1/2 transform -translate-y-1/2 w-4 h-4 bg-orange-300 rounded-full" />
            {/* Shrimp antenna */}
            <motion.div
              className="absolute -top-2 left-4 w-1 h-3 bg-orange-500"
              animate={{ rotate: [0, 30, 0] }}
              transition={{ duration: 0.5, repeat: Infinity }}
            />
          </motion.div>
        </div>

        <motion.h2
          className="text-2xl font-bold text-gray-800 mb-2"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Ocean Harvest
        </motion.h2>
        
        <motion.p
          className="text-gray-600"
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          Preparing something amazing...
        </motion.p>
      </div>
    </div>
  );
};

export default AdvancedShrimpLoader;