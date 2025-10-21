import { motion } from "framer-motion";
import { useMemo } from "react";

type AnimatedShrimpProps = {
  className?: string;
  size?: number; // width in px
  color?: string; // tailwind color token class e.g. text-accent
  bubbleCount?: number;
  speed?: number; // motion speed multiplier
};

// Stylized vector shrimp with subtle swim cycle and bubbles
const AnimatedShrimp = ({
  className = "",
  size = 360,
  color = "text-accent",
  bubbleCount = 10,
  speed = 1,
}: AnimatedShrimpProps) => {
  const bubbles = useMemo(() => Array.from({ length: bubbleCount }), [bubbleCount]);

  // Random helpers (stable per render)
  const randoms = useMemo(
    () => bubbles.map(() => ({
      x: Math.random() * 300 - 150,
      delay: Math.random() * 4,
      dur: 6 + Math.random() * 6,
      size: 2 + Math.random() * 3,
      opacity: 0.2 + Math.random() * 0.4,
    })),
    [bubbles]
  );

  const swimDuration = 4 / Math.max(speed, 0.2);

  return (
    <div className={className} style={{ width: size, height: size * (260 / 360) }}>
      <svg
        viewBox="0 0 360 260"
        width={size}
        height={size * (260 / 360)}
        className="overflow-visible"
      >
        {/* Bubbles */}
        {randoms.map((b, i) => (
          <motion.circle
            key={i}
            cx={280 + b.x}
            cy={220}
            r={b.size}
            fill="white"
            opacity={b.opacity}
            animate={{
              cy: [220, 20],
              x: [0, 10, -10, 0],
              opacity: [b.opacity, b.opacity * 0.8, b.opacity],
            }}
            transition={{
              duration: b.dur / speed,
              repeat: Infinity,
              ease: "easeInOut",
              delay: b.delay,
            }}
          />
        ))}

        {/* Shrimp group - gentle bobbing and forward/back sway */}
        <motion.g
          initial={{ y: 0 }}
          animate={{ y: [0, -4, 0, 4, 0] }}
          transition={{ duration: swimDuration, repeat: Infinity, ease: "easeInOut" }}
        >
          {/* Body */}
          <g className={color}>
            {/* Head ellipse */}
            <motion.ellipse
              cx="110"
              cy="130"
              rx="45"
              ry="35"
              className="fill-current"
              initial={{ rotate: 0 }}
              animate={{ rotate: [0, -2, 0, 2, 0] }}
              transition={{ duration: swimDuration, repeat: Infinity, ease: "easeInOut" }}
            />
            {/* Eye */}
            <circle cx="128" cy="120" r="4" fill="white" />
            <circle cx="128" cy="120" r="2" fill="black" />

            {/* Segmented abdomen */}
            {[0, 1, 2, 3].map((seg, idx) => (
              <motion.path
                key={seg}
                d={`M ${150 + idx * 28} 120 C ${165 + idx * 28} 90, ${165 + idx * 28} 150, ${190 + idx * 28} 120`}
                strokeWidth="16"
                className="fill-none stroke-current"
                strokeLinecap="round"
                initial={{ rotate: 0 }}
                animate={{ rotate: [0, -2, 0, 2, 0] }}
                transition={{ duration: swimDuration, repeat: Infinity, ease: "easeInOut" }}
              />
            ))}

            {/* Tail fin */}
            <motion.g
              initial={{ rotate: 0 }}
              animate={{ rotate: [0, 5, 0, -5, 0] }}
              transition={{ duration: swimDuration * 0.8, repeat: Infinity, ease: "easeInOut" }}
              transform="translate(270, 120)"
            >
              <path d="M 0 0 C 15 -20, 30 -20, 45 0 C 30 20, 15 20, 0 0 Z" className="fill-current" />
              <path d="M 10 0 C 18 -10, 27 -10, 35 0 C 27 10, 18 10, 10 0 Z" fill="white" opacity="0.2" />
            </motion.g>

            {/* Antennae */}
            {[0, 1].map((a) => (
              <motion.path
                key={a}
                d={`M 75 ${110 + a * 8} C 30 ${70 + a * 10}, 20 ${40 + a * 8}, 8 ${20 + a * 6}`}
                className="stroke-current"
                strokeWidth="2"
                fill="none"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: [0.6, 1, 0.6] }}
                transition={{ duration: swimDuration, repeat: Infinity, ease: "easeInOut" }}
                opacity={0.8}
              />
            ))}

            {/* Legs */}
            {[0, 1, 2].map((l) => (
              <motion.line
                key={l}
                x1={110}
                y1={145 + l * 6}
                x2={85}
                y2={155 + l * 6}
                className="stroke-current"
                strokeWidth="3"
                strokeLinecap="round"
                initial={{ rotate: 0 }}
                animate={{ rotate: [5, -5, 5] }}
                transition={{ duration: 1.2 / speed, repeat: Infinity, ease: "easeInOut", delay: l * 0.1 }}
                opacity={0.8}
              />
            ))}
          </g>
        </motion.g>
      </svg>
    </div>
  );
};

export default AnimatedShrimp;

