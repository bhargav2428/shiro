import { motion, AnimatePresence } from "framer-motion";
import AnimatedShrimp from "@/components/AnimatedShrimp";
import { useEffect, useRef, useState } from "react";
import { useLocation } from "react-router-dom";

const DISPLAY_MS = 700; // minimal display time to avoid flicker

const TopLoadingBar = () => {
	const location = useLocation();
	const [visible, setVisible] = useState(false);
	const hideTimerRef = useRef<number | null>(null);

	useEffect(() => {
		// Show on every route change
		setVisible(true);
		if (hideTimerRef.current) {
			window.clearTimeout(hideTimerRef.current);
		}
		hideTimerRef.current = window.setTimeout(() => setVisible(false), DISPLAY_MS);
		return () => {
			if (hideTimerRef.current) {
				window.clearTimeout(hideTimerRef.current);
			}
		};
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [location.pathname]);

	return (
		<AnimatePresence>
			{visible && (
				<motion.div
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					exit={{ opacity: 0 }}
					transition={{ duration: 0.2 }}
					className="fixed left-0 right-0 top-0 z-[60]"
				>
					<div className="relative h-1 w-full overflow-hidden bg-primary/10">
						{/* Progress core (animated width) */}
						<motion.div
							initial={{ width: "0%" }}
							animate={{ width: ["0%", "65%", "85%", "100%"] }}
							transition={{ duration: DISPLAY_MS / 1000, ease: "easeInOut" }}
							className="h-full bg-gradient-to-r from-primary via-secondary to-accent"
						/>
						{/* Shimmer highlight */}
						<div className="pointer-events-none absolute inset-0 shimmer" />
					</div>
					{/* Tiny shrimp indicator at right edge */}
					<div className="absolute -top-3 right-2">
						<AnimatedShrimp size={28} color="text-accent" speed={2} />
					</div>
				</motion.div>
			)}
		</AnimatePresence>
	);
};

export default TopLoadingBar;


