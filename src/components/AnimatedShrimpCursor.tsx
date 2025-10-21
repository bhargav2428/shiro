import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const AnimatedShrimpCursor = () => {
  const [isVisible, setIsVisible] = useState(false);
  const cursorX = useMotionValue(0);
  const cursorY = useMotionValue(0);
  
  const springConfig = { damping: 25, stiffness: 150 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);
  
  const rotation = useMotionValue(0);
  const rotationSpring = useSpring(rotation, { damping: 20, stiffness: 100 });
  
  const prevX = useRef(0);
  const prevY = useRef(0);

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      const x = e.clientX;
      const y = e.clientY;
      
      // Calculate rotation based on movement direction
      const deltaX = x - prevX.current;
      const deltaY = y - prevY.current;
      const angle = Math.atan2(deltaY, deltaX) * (180 / Math.PI);
      
      cursorX.set(x);
      cursorY.set(y);
      rotation.set(angle);
      
      prevX.current = x;
      prevY.current = y;
      
      if (!isVisible) setIsVisible(true);
    };

    const hideCursor = () => setIsVisible(false);
    
    window.addEventListener("mousemove", moveCursor);
    window.addEventListener("mouseleave", hideCursor);
    
    return () => {
      window.removeEventListener("mousemove", moveCursor);
      window.removeEventListener("mouseleave", hideCursor);
    };
  }, [cursorX, cursorY, rotation, isVisible]);

  if (!isVisible) return null;

  return (
    <motion.div
      className="fixed top-0 left-0 pointer-events-none z-[9999] mix-blend-difference"
      style={{
        x: cursorXSpring,
        y: cursorYSpring,
        translateX: "-50%",
        translateY: "-50%",
      }}
    >
      <motion.svg
        width="80"
        height="80"
        viewBox="0 0 120 120"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{ rotate: rotationSpring }}
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.3 }}
      >
        {/* Shrimp Body - Main Curve */}
        <motion.path
          d="M 25 60 Q 35 45 50 50 Q 65 55 75 50 Q 85 45 95 50"
          stroke="url(#shrimpGradient)"
          strokeWidth="4"
          strokeLinecap="round"
          fill="none"
          animate={{
            d: [
              "M 25 60 Q 35 45 50 50 Q 65 55 75 50 Q 85 45 95 50",
              "M 25 60 Q 35 48 50 52 Q 65 52 75 52 Q 85 48 95 50",
              "M 25 60 Q 35 45 50 50 Q 65 55 75 50 Q 85 45 95 50",
            ],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* Shrimp Segments */}
        <motion.path
          d="M 40 52 Q 42 58 40 64"
          stroke="url(#shrimpGradient)"
          strokeWidth="2"
          strokeLinecap="round"
          animate={{ opacity: [0.6, 1, 0.6] }}
          transition={{ duration: 2, repeat: Infinity }}
        />
        <motion.path
          d="M 55 52 Q 57 58 55 64"
          stroke="url(#shrimpGradient)"
          strokeWidth="2"
          strokeLinecap="round"
          animate={{ opacity: [0.7, 1, 0.7] }}
          transition={{ duration: 2, repeat: Infinity, delay: 0.1 }}
        />
        <motion.path
          d="M 70 52 Q 72 58 70 64"
          stroke="url(#shrimpGradient)"
          strokeWidth="2"
          strokeLinecap="round"
          animate={{ opacity: [0.8, 1, 0.8] }}
          transition={{ duration: 2, repeat: Infinity, delay: 0.2 }}
        />

        {/* Tail */}
        <motion.path
          d="M 95 50 L 100 45 M 95 50 L 102 50 M 95 50 L 100 55"
          stroke="url(#tailGradient)"
          strokeWidth="3"
          strokeLinecap="round"
          animate={{
            d: [
              "M 95 50 L 100 45 M 95 50 L 102 50 M 95 50 L 100 55",
              "M 95 50 L 102 43 M 95 50 L 105 50 M 95 50 L 102 57",
              "M 95 50 L 100 45 M 95 50 L 102 50 M 95 50 L 100 55",
            ],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* Legs - Animated */}
        {[30, 45, 60, 75].map((x, i) => (
          <motion.line
            key={`leg-${i}`}
            x1={x}
            y1="58"
            x2={x}
            y2="68"
            stroke="url(#shrimpGradient)"
            strokeWidth="1.5"
            strokeLinecap="round"
            animate={{
              y2: [68, 72, 68],
            }}
            transition={{
              duration: 1,
              repeat: Infinity,
              delay: i * 0.1,
              ease: "easeInOut",
            }}
          />
        ))}

        {/* Antennae */}
        <motion.path
          d="M 25 60 Q 18 50 15 40"
          stroke="url(#antennaGradient)"
          strokeWidth="2"
          strokeLinecap="round"
          fill="none"
          animate={{
            d: [
              "M 25 60 Q 18 50 15 40",
              "M 25 60 Q 20 48 18 38",
              "M 25 60 Q 18 50 15 40",
            ],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.path
          d="M 25 60 Q 18 55 12 48"
          stroke="url(#antennaGradient)"
          strokeWidth="2"
          strokeLinecap="round"
          fill="none"
          animate={{
            d: [
              "M 25 60 Q 18 55 12 48",
              "M 25 60 Q 20 53 15 46",
              "M 25 60 Q 18 55 12 48",
            ],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 0.5,
          }}
        />

        {/* Eye */}
        <motion.circle
          cx="28"
          cy="58"
          r="2"
          fill="white"
          animate={{
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
          }}
        />

        {/* Gradients */}
        <defs>
          <linearGradient id="shrimpGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#FF6B9D" />
            <stop offset="50%" stopColor="#FF8A80" />
            <stop offset="100%" stopColor="#FFA07A" />
          </linearGradient>
          <linearGradient id="tailGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#FFA07A" />
            <stop offset="100%" stopColor="#FF4500" />
          </linearGradient>
          <linearGradient id="antennaGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#FF6B9D" />
            <stop offset="100%" stopColor="#FF8A80" />
          </linearGradient>
        </defs>

        {/* Glow Effect */}
        <motion.circle
          cx="60"
          cy="58"
          r="40"
          fill="url(#glowGradient)"
          opacity="0.3"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <defs>
          <radialGradient id="glowGradient">
            <stop offset="0%" stopColor="#FF6B9D" stopOpacity="0.6" />
            <stop offset="100%" stopColor="#FF6B9D" stopOpacity="0" />
          </radialGradient>
        </defs>
      </motion.svg>
    </motion.div>
  );
};

export default AnimatedShrimpCursor;
