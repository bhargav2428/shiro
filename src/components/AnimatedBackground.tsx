import { memo, useMemo } from "react";
import { motion } from "framer-motion";

const AnimatedBackground = () => {
  const blobs = useMemo(() => Array.from({ length: 3 }), []);

  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      {/* Gradient wash */}
      <div className="absolute inset-0 opacity-[0.08] dark:opacity-[0.12]" style={{ background: "var(--gradient-ocean)" }} />

      {/* Soft animated blobs */}
      {blobs.map((_, i) => (
        <motion.div
          key={i}
          initial={{
            x: Math.random() * 800 - 400,
            y: Math.random() * 600 - 300,
            scale: 0.8 + Math.random() * 0.6,
            opacity: 0.25,
          }}
          animate={{
            x: [null, Math.random() * 800 - 400],
            y: [null, Math.random() * 600 - 300],
            scale: [null, 0.9 + Math.random() * 0.6],
            opacity: [0.15, 0.25, 0.15],
          }}
          transition={{ duration: 20 + Math.random() * 10, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
          className="absolute w-[40rem] h-[40rem] blur-3xl rounded-full"
          style={{
            background: i % 2 === 0 ? "radial-gradient(circle at 30% 30%, hsl(var(--primary)/0.35), transparent 60%)" : "radial-gradient(circle at 70% 70%, hsl(var(--secondary)/0.35), transparent 60%)",
            top: i === 0 ? "10%" : i === 1 ? "50%" : "70%",
            left: i === 0 ? "-10%" : i === 1 ? "60%" : "20%",
          }}
        />
      ))}

      {/* Subtle vignette */}
      <div className="absolute inset-0 pointer-events-none" style={{
        background: "radial-gradient(100% 120% at 50% 10%, transparent 30%, rgba(0,0,0,0.08) 100%)"
      }} />
    </div>
  );
};

export default memo(AnimatedBackground);


