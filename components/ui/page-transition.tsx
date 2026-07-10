"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";

// Applies a lightweight initial page-enter animation without affecting layout.
export function PageTransition({ children }: { children: ReactNode }) {
  return (
    <motion.main
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </motion.main>
  );
}
