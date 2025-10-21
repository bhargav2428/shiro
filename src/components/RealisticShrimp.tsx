import React from "react";
import { motion, useReducedMotion } from "framer-motion";

/**
 * RealisticShrimp component
 * - Motion-enabled SVG built from multiple motion elements (tail, segments, fins, antennae, eye)
 * - Uses prefers-reduced-motion to provide a static PNG fallback
 * - Accepts size prop to control rendered width
 *
 * Place this file in src/components/RealisticShrimp.tsx
 */

type Props = {
  size?: number; // width in px
  className?: string;
  fallbackSrc?: string; // optional PNG fallback path
};

const RealisticShrimp: React.FC<Props> = ({ size = 360, className = "", fallbackSrc = "/assets/shrimp-fallback.png" }) => {
  const prefersReduced = useReducedMotion();
  const height = Math.round(size * 0.56);

  if (prefersReduced && fallbackSrc) {
    // Static fallback image for reduced motion / low-power devices
    return (
      <img
        src={fallbackSrc}
        width={size}
        height={height}
        alt="Shrimp illustration"
        className={className + " select-none pointer-events-none"}
        style={{ objectFit: "contain" }}
        aria-hidden={false}
      />
    );
  }

  // Animation variants for segments
  const swim = {
    rotate: [0, 4, 0, -4, 0],
    transition: { duration: 2.2, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" },
  };

  const tailSway = {
    rotate: [-3, 8, -3],
    transition: { duration: 1.6, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" },
  };

  const antennaeSway = {
    rotate: [-6, 10, -6],
    transition: { duration: 1.3, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" },
  };

  const finFlutter = {
    rotate: [-2, 5, -2],
    transition: { duration: 1.1, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" },
  };

  return (
    <motion.div
      className={className + " pointer-events-none select-none"}
      style={{ width: size, height }}
      animate={swim}
      aria-hidden="true"
    >
      <svg
        width={size}
        height={height}
        viewBox="0 0 900 504"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        role="img"
        preserveAspectRatio="xMidYMid meet"
      >
        <defs>
          <linearGradient id="bodyGrad_comp" x1="0" x2="1">
            <stop offset="0%" stopColor="#00bfa6" />
            <stop offset="55%" stopColor="#0077ff" />
            <stop offset="100%" stopColor="#7a4dff" />
          </linearGradient>
          <linearGradient id="segGrad_comp" x1="0" x2="1">
            <stop offset="0%" stopColor="#ffffff" stopOpacity="0.18" />
            <stop offset="100%" stopColor="#000000" stopOpacity="0.06" />
          </linearGradient>
          <filter id="softShadow_comp" x="-50%" y="-50%" width="200%" height="200%">
            <feDropShadow dx="0" dy="8" stdDeviation="18" floodColor="#002240" floodOpacity="0.12" />
          </filter>
          <radialGradient id="eyeGrad_comp" cx="50%" cy="30%">
            <stop offset="0%" stopColor="#ffffff" stopOpacity="0.95" />
            <stop offset="40%" stopColor="#cfefff" stopOpacity="0.9" />
            <stop offset="100%" stopColor="#036" stopOpacity="1" />
          </radialGradient>
        </defs>

        {/* Root translation so component scales nicely */}
        <g transform="translate(40,30)">
          {/* Tail + body group - the tail has its own sway */}
          <motion.g animate={tailSway} style={{ originX: "40%", originY: "60%" }} filter="url(#softShadow_comp)">
            <path
              d="M70 260 C40 230 40 190 100 170 C180 140 260 140 340 160 C430 185 520 190 620 190 C700 190 760 210 760 260 C760 300 700 330 620 330 C540 330 460 320 380 300 C290 280 190 280 110 270 Z"
              fill="url(#bodyGrad_comp)"
              opacity="0.99"
            />
            <g opacity="0.18" fill="url(#segGrad_comp)">
              <ellipse cx="470" cy="220" rx="120" ry="40" transform="rotate(-12 470 220)" />
              <ellipse cx="320" cy="200" rx="80" ry="28" transform="rotate(-8 320 200)" />
            </g>
          </motion.g>

          {/* Body segments: each segment can have a small local sway for realism */}
          <g id="bodySegments">
            <motion.ellipse
              cx="500"
              cy="210"
              rx="110"
              ry="62"
              fill="url(#bodyGrad_comp)"
              opacity="0.99"
              animate={{ rotate: [0, 2, 0, -2, 0] }}
              transition={{ duration: 2.2, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
              style={{ originX: "40%", originY: "50%" }}
            />
            <motion.ellipse
              cx="430"
              cy="200"
              rx="100"
              ry="58"
              fill="url(#bodyGrad_comp)"
              opacity="0.99"
              animate={{ rotate: [0, 1.6, 0, -1.6, 0] }}
              transition={{ duration: 2.2, repeat: Infinity, repeatType: "reverse", ease: "easeInOut", delay: 0.08 }}
              style={{ originX: "42%", originY: "50%" }}
            />
            <motion.ellipse
              cx="350"
              cy="190"
              rx="92"
              ry="52"
              fill="url(#bodyGrad_comp)"
              opacity="0.99"
              animate={{ rotate: [0, 1.2, 0, -1.2, 0] }}
              transition={{ duration: 2.2, repeat: Infinity, repeatType: "reverse", ease: "easeInOut", delay: 0.14 }}
              style={{ originX: "44%", originY: "50%" }}
            />
            <motion.ellipse
              cx="270"
              cy="180"
              rx="84"
              ry="46"
              fill="url(#bodyGrad_comp)"
              opacity="0.99"
              animate={{ rotate: [0, 0.8, 0, -0.8, 0] }}
              transition={{ duration: 2.2, repeat: Infinity, repeatType: "reverse", ease: "easeInOut", delay: 0.22 }}
              style={{ originX: "46%", originY: "50%" }}
            />
          </g>

          {/* Segment separators */}
          <g fill="#ffffff" opacity="0.06">
            <path d="M330 145 q20 10 10 24" stroke="#ffffff" strokeWidth="3" strokeOpacity="0.06" fill="none" />
            <path d="M410 153 q18 12 8 26" stroke="#ffffff" strokeWidth="3" strokeOpacity="0.06" fill="none" />
            <path d="M480 164 q18 14 10 28" stroke="#ffffff" strokeWidth="3" strokeOpacity="0.06" fill="none" />
          </g>

          {/* Legs */}
          <g id="legs" stroke="#ffffffcc" strokeWidth="6" strokeLinecap="round" opacity="0.9" transform="translate(0,70)">
            <path d="M260 260 q30 40 60 26" />
            <path d="M300 264 q30 44 66 28" />
            <path d="M340 268 q36 48 72 30" />
          </g>

          {/* Fins - flutter independently */}
          <motion.g id="fins" animate={finFlutter} style={{ originX: "35%", originY: "45%" }}>
            <path d="M200 170 q-60 -20 -80 10 q40 20 80 -10z" fill="#ffffff" opacity="0.06" />
            <path d="M200 190 q-60 12 -78 40 q46 -6 78 -40z" fill="#000000" opacity="0.04" />
          </motion.g>

          {/* Head + antennae + eye - antennae animate */}
          <g id="head" transform="translate(520,120)">
            <path d="M120 40 q80 -30 120 -8 q-30 20 -120 8z" fill="url(#bodyGrad_comp)" opacity="0.99" />

            <motion.g id="antennae" animate={antennaeSway} style={{ originX: "10%", originY: "20%" }} stroke="#ffffffcc" strokeWidth="5" strokeLinecap="round" fill="none">
              <path d="M140 20 q70 -90 160 -70" />
              <path d="M130 34 q120 -40 200 8" />
            </motion.g>

            <g id="eye" transform="translate(160,40)">
              <circle cx="0" cy="0" r="16" fill="url(#eyeGrad_comp)" />
              <circle cx="-2" cy="-4" r="4" fill="#ffffff" opacity="0.9" />
            </g>

            <path d="M70 60 q40 30 120 12" fill="#000000" opacity="0.06" />
          </g>
        </g>
      </svg>
    </motion.div>
  );
};

export default RealisticShrimp;
