import { jsx, jsxs } from "react/jsx-runtime";
import { motion } from "framer-motion";
function Section({ children, className = "" }) {
  return /* @__PURE__ */ jsx(
    motion.section,
    {
      initial: { opacity: 0, y: 24 },
      whileInView: { opacity: 1, y: 0 },
      viewport: { once: true, margin: "-80px" },
      transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
      className: `max-w-7xl mx-auto px-4 ${className}`,
      children
    }
  );
}
function SectionLabel({ children }) {
  return /* @__PURE__ */ jsxs("div", { className: "inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-primary", children: [
    /* @__PURE__ */ jsx("span", { className: "w-6 h-px bg-gold" }),
    children
  ] });
}
export {
  Section as S,
  SectionLabel as a
};
