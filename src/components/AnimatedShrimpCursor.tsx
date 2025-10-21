import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const AnimatedShrimpCursor = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isPointer, setIsPointer] = useState(false);
  const cursorX = useMotionValue(0);
  const cursorY = useMotionValue(0);
  
  const springConfig = { damping: 25, stiffness: 200 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);
  
  const rotation = useMotionValue(0);
  const rotationSpring = useSpring(rotation, { damping: 20, stiffness: 150 });
  
  const scale = useMotionValue(1);
  const scaleSpring = useSpring(scale, { damping: 15, stiffness: 200 });
  
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
      
      // Add scale effect based on movement speed
      const speed = Math.sqrt(deltaX * deltaX + deltaY * deltaY);
      scale.set(Math.min(1 + speed * 0.002, 1.3));
      
      prevX.current = x;
      prevY.current = y;
      
      if (!isVisible) setIsVisible(true);
    };

    const hideCursor = () => setIsVisible(false);
    
    // Check if element is clickable
    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const isClickable = 
        target.tagName === 'BUTTON' || 
        target.tagName === 'A' || 
        target.onclick !== null ||
        target.style.cursor === 'pointer' ||
        target.classList.contains('cursor-pointer') ||
        target.closest('button') ||
        target.closest('a');
      
      setIsPointer(isClickable);
      scale.set(isClickable ? 1.3 : 1);
    };

    // Check initial state
    const checkInitialState = () => {
      const element = document.elementFromPoint(prevX.current, prevY.current);
      if (element) {
        const target = element as HTMLElement;
        const isClickable = 
          target.tagName === 'BUTTON' || 
          target.tagName === 'A' || 
          target.onclick !== null ||
          target.style.cursor === 'pointer' ||
          target.classList.contains('cursor-pointer') ||
          target.closest('button') ||
          target.closest('a');
        
        setIsPointer(isClickable);
        scale.set(isClickable ? 1.3 : 1);
      }
    };

    window.addEventListener("mousemove", moveCursor);
    window.addEventListener("mouseleave", hideCursor);
    window.addEventListener("mouseover", handleMouseOver);
    document.addEventListener("DOMContentLoaded", checkInitialState);
    
    // Check initial state after a short delay
    setTimeout(checkInitialState, 100);
    
    return () => {
      window.removeEventListener("mousemove", moveCursor);
      window.removeEventListener("mouseleave", hideCursor);
      window.removeEventListener("mouseover", handleMouseOver);
      document.removeEventListener("DOMContentLoaded", checkInitialState);
    };
  }, [cursorX, cursorY, rotation, scale, isVisible]);

  // Don't show cursor on mobile devices
  useEffect(() => {
    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
    if (isMobile) {
      setIsVisible(false);
    }
  }, []);

  if (!isVisible) return null;

  return (
    <motion.div
      className="fixed top-0 left-0 pointer-events-none z-[9999] hidden md:block"
      style={{
        x: cursorXSpring,
        y: cursorYSpring,
        translateX: "-50%",
        translateY: "-50%",
      }}
    >
      <motion.div
        style={{ 
          scale: scaleSpring,
          rotate: rotationSpring 
        }}
        animate={{
          scale: isPointer ? 1.3 : 1,
        }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
      >
        <motion.svg
          width="60"
          height="60"
          viewBox="0 0 120 120"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          initial={{ scale: 0, opacity: 0 }}
          animate={{ 
            scale: isPointer ? 1.1 : 1,
            opacity: 1 
          }}
          transition={{ duration: 0.3 }}
        >
          {/* Glow Effect */}
          <motion.circle
            cx="60"
            cy="60"
            r="45"
            fill="url(#glowGradient)"
            animate={{
              scale: [1, 1.3, 1],
              opacity: [0.1, 0.3, 0.1],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />

          {/* Shrimp Body - Main Curve */}
          <motion.path
            d="M 30 60 Q 40 48 55 52 Q 70 56 80 52 Q 90 48 95 55"
            stroke="url(#shrimpGradient)"
            strokeWidth="4"
            strokeLinecap="round"
            fill="none"
            animate={{
              d: [
                "M 30 60 Q 40 48 55 52 Q 70 56 80 52 Q 90 48 95 55",
                "M 30 60 Q 40 52 55 54 Q 70 54 80 54 Q 90 52 95 55",
                "M 30 60 Q 40 48 55 52 Q 70 56 80 52 Q 90 48 95 55",
              ],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />

          {/* Shrimp Body Fill */}
          <motion.path
            d="M 30 60 Q 40 48 55 52 Q 70 56 80 52 Q 90 48 95 55 L 95 65 Q 90 58 80 58 Q 70 62 55 58 Q 40 54 30 60 Z"
            fill="url(#shrimpFill)"
            opacity="0.8"
            animate={{
              opacity: [0.6, 0.9, 0.6],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
            }}
          />

          {/* Shrimp Segments */}
          <motion.path
            d="M 45 54 Q 47 60 45 66"
            stroke="url(#segmentGradient)"
            strokeWidth="2"
            strokeLinecap="round"
            animate={{ 
              opacity: [0.4, 1, 0.4],
            }}
            transition={{ duration: 1.5, repeat: Infinity }}
          />
          <motion.path
            d="M 60 54 Q 62 60 60 66"
            stroke="url(#segmentGradient)"
            strokeWidth="2"
            strokeLinecap="round"
            animate={{ 
              opacity: [0.5, 1, 0.5],
            }}
            transition={{ duration: 1.5, repeat: Infinity, delay: 0.2 }}
          />
          <motion.path
            d="M 75 54 Q 77 60 75 66"
            stroke="url(#segmentGradient)"
            strokeWidth="2"
            strokeLinecap="round"
            animate={{ 
              opacity: [0.6, 1, 0.6],
            }}
            transition={{ duration: 1.5, repeat: Infinity, delay: 0.4 }}
          />

          {/* Tail */}
          <motion.g
            animate={{
              rotate: [0, -5, 0],
            }}
            transition={{
              duration: 1,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <path
              d="M 95 55 L 105 50 L 110 55 L 105 60 Z"
              fill="url(#tailGradient)"
            />
          </motion.g>

          {/* Legs - Animated */}
          {[35, 50, 65, 80].map((x, i) => (
            <motion.line
              key={`leg-${i}`}
              x1={x}
              y1="62"
              x2={x}
              y2="72"
              stroke="url(#legGradient)"
              strokeWidth="1.5"
              strokeLinecap="round"
              animate={{
                y2: [72, 76, 72],
                opacity: [0.7, 1, 0.7],
              }}
              transition={{
                duration: 0.8,
                repeat: Infinity,
                delay: i * 0.15,
                ease: "easeInOut",
              }}
            />
          ))}

          {/* Antennae */}
          <motion.path
            d="M 30 60 Q 20 45 15 35"
            stroke="url(#antennaGradient)"
            strokeWidth="1.5"
            strokeLinecap="round"
            fill="none"
            animate={{
              pathLength: [0, 1, 1],
              opacity: [0, 1, 1],
            }}
            transition={{
              duration: 1,
              ease: "easeOut",
            }}
          />
          <motion.path
            d="M 30 60 Q 25 50 18 42"
            stroke="url(#antennaGradient)"
            strokeWidth="1.5"
            strokeLinecap="round"
            fill="none"
            animate={{
              pathLength: [0, 1, 1],
              opacity: [0, 1, 1],
            }}
            transition={{
              duration: 1,
              delay: 0.2,
              ease: "easeOut",
            }}
          />

          {/* Eye */}
          <motion.g
            animate={{
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
            }}
          >
            <circle cx="32" cy="58" r="3" fill="white" />
            <circle cx="32" cy="58" r="1.5" fill="#FF6B6B" />
          </motion.g>

          {/* Bubbles */}
          <motion.g
            animate={{
              y: [0, -10, 0],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <circle cx="50" cy="40" r="2" fill="#87CEEB" opacity="0.6" />
            <circle cx="70" cy="35" r="1.5" fill="#87CEEB" opacity="0.4" />
          </motion.g>

          {/* Gradients */}
          <defs>
            <linearGradient id="shrimpGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#FF6B6B" />
              <stop offset="50%" stopColor="#FF8E8E" />
              <stop offset="100%" stopColor="#FFAAAA" />
            </linearGradient>

            <linearGradient id="shrimpFill" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#FF6B6B" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#FF8E8E" stopOpacity="0.6" />
            </linearGradient>

            <linearGradient id="tailGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#FF8E8E" />
              <stop offset="100%" stopColor="#FF6B6B" />
            </linearGradient>

            <linearGradient id="segmentGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#FF6B6B" />
              <stop offset="100%" stopColor="#FF8E8E" />
            </linearGradient>

            <linearGradient id="legGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#FF8E8E" />
              <stop offset="100%" stopColor="#FF6B6B" />
            </linearGradient>

            <linearGradient id="antennaGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#FF6B6B" />
              <stop offset="100%" stopColor="#FF8E8E" />
            </linearGradient>

            <radialGradient id="glowGradient">
              <stop offset="0%" stopColor="#FF6B6B" stopOpacity="0.4" />
              <stop offset="70%" stopColor="#FF6B6B" stopOpacity="0.1" />
              <stop offset="100%" stopColor="#FF6B6B" stopOpacity="0" />
            </radialGradient>
          </defs>
        </motion.svg>
      </motion.div>
    </motion.div>
  );
};

export default AnimatedShrimpCursor;