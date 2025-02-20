"use client";
import { motion } from "framer-motion";

export const FadeIn = ({ children, delay = 0, y = 50, duration = 0.8 }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration, ease: "easeOut", delay }}
        >
            {children}
        </motion.div>
    );
};

export const ScaleUp = ({ children, delay = 0, duration = 0.5 }) => {
    return (
        <motion.div
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            transition={{ duration, ease: "easeOut", delay }}
        >
            {children}
        </motion.div>
    );
};

export const HoverScale = ({ children, scale = 1.1, tapScale = 0.9 }) => {
    return (
        <motion.div whileHover={{ scale }} whileTap={{ scale: tapScale }}>
            {children}
        </motion.div>
    );
};

export const slideInFromRight = {
    initial: { opacity: 0, x: 100 },
    animate: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: -100 },
};

export const fadeInEd = {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    exit: { opacity: 0 },
};
