/**
 * Shared Framer Motion animation variants for consistent animations across the site.
 */
import type { Variants } from "framer-motion";

/**
 * Standard section fade-up animation
 */
export const sectionVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

/**
 * Staggered container for child animations
 */
export const staggerContainer: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1 },
  },
};

/**
 * Item variants for use within staggered containers
 */
export const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

/**
 * Fade in animation (no y movement)
 */
export const fadeInVariants: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.5 } },
};

/**
 * Scale up animation for cards on hover
 */
export const scaleOnHover = {
  scale: 1.02,
  transition: { duration: 0.2 },
};

/**
 * Slide in from left
 */
export const slideInLeft: Variants = {
  hidden: { opacity: 0, x: -30 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
};

/**
 * Slide in from right
 */
export const slideInRight: Variants = {
  hidden: { opacity: 0, x: 30 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
};
