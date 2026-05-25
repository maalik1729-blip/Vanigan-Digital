import { motion } from "framer-motion";
import type { ReactNode } from "react";

export function Section({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={`max-w-7xl mx-auto px-4 ${className}`}
    >
      {children}
    </motion.section>
  );
}

export function SectionLabel({ children }: { children: ReactNode }) {
  return (
    <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-primary">
      <span className="w-6 h-px bg-gold" />
      {children}
    </div>
  );
}
