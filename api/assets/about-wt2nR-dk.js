import { jsxs, jsx } from "react/jsx-runtime";
import { a as SectionLabel, S as Section } from "./Section-3En1J6fj.js";
import { Eye, Target, Heart } from "lucide-react";
import "framer-motion";
function About() {
  return /* @__PURE__ */ jsxs("div", { children: [
    /* @__PURE__ */ jsx("section", { className: "border-b border-border bg-secondary/40", children: /* @__PURE__ */ jsxs("div", { className: "max-w-7xl mx-auto px-4 py-16", children: [
      /* @__PURE__ */ jsx(SectionLabel, { children: "About · எங்களைப் பற்றி" }),
      /* @__PURE__ */ jsx("h1", { className: "mt-4 font-display text-4xl md:text-5xl font-semibold max-w-3xl", children: "A century-old movement, a modern portal." }),
      /* @__PURE__ */ jsx("p", { className: "font-tamil mt-4 text-xl text-foreground/75 max-w-3xl", children: "தமிழ்நாடு வணிகர்களின் ஒற்றுமை — ஒரு பாரம்பரியம், ஒரு பொறுப்பு." })
    ] }) }),
    /* @__PURE__ */ jsx(Section, { className: "py-16", children: /* @__PURE__ */ jsx("div", { className: "grid md:grid-cols-3 gap-6", children: [{
      i: Eye,
      t: "Our Vision",
      ta: "எங்கள் கனவு",
      d: "To be the most trusted voice and welfare body for every trader in Tamil Nadu — from the smallest petty shop to large wholesale merchants."
    }, {
      i: Target,
      t: "Our Mission",
      ta: "எங்கள் நோக்கம்",
      d: "Deliver simple, transparent, government-backed services that protect traders, formalize businesses, and unlock welfare benefits."
    }, {
      i: Heart,
      t: "Our Values",
      ta: "எங்கள் கொள்கைகள்",
      d: "Honesty in service, equality across districts, respect for tradition, and uncompromising trust in every digital interaction."
    }].map((b) => /* @__PURE__ */ jsxs("div", { className: "paper rounded-xl p-6", children: [
      /* @__PURE__ */ jsx("div", { className: "w-11 h-11 rounded-md bg-gold/15 grid place-items-center text-gold-foreground", children: /* @__PURE__ */ jsx(b.i, { className: "w-5 h-5 text-primary" }) }),
      /* @__PURE__ */ jsx("h3", { className: "mt-4 font-display text-xl font-semibold", children: b.t }),
      /* @__PURE__ */ jsx("div", { className: "font-tamil text-sm text-primary", children: b.ta }),
      /* @__PURE__ */ jsx("p", { className: "mt-3 text-sm text-muted-foreground leading-relaxed", children: b.d })
    ] }, b.t)) }) }),
    /* @__PURE__ */ jsx(Section, { className: "py-16", children: /* @__PURE__ */ jsxs("div", { className: "grid lg:grid-cols-12 gap-10", children: [
      /* @__PURE__ */ jsxs("div", { className: "lg:col-span-4", children: [
        /* @__PURE__ */ jsx(SectionLabel, { children: "Our Journey" }),
        /* @__PURE__ */ jsx("h2", { className: "mt-3 font-display text-3xl font-semibold", children: "Twelve years, thirty-eight districts." })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "lg:col-span-8 space-y-6", children: [{
        y: "2012",
        t: "Foundation",
        d: "Established in Chennai by a council of 24 trader associations."
      }, {
        y: "2016",
        t: "Statewide Expansion",
        d: "District chapters formed in all 38 districts of Tamil Nadu."
      }, {
        y: "2019",
        t: "Welfare Fund Launch",
        d: "₹2 Cr corpus established for trader emergency and family support."
      }, {
        y: "2023",
        t: "Digital Portal",
        d: "End-to-end online membership, payments and certificate delivery."
      }, {
        y: "2025",
        t: "1.2 Lakh Members",
        d: "Crossed 1,24,560 registered members across all categories."
      }].map((m) => /* @__PURE__ */ jsxs("div", { className: "flex gap-6 items-start", children: [
        /* @__PURE__ */ jsx("div", { className: "font-display text-xl font-semibold text-gold w-20 shrink-0", children: m.y }),
        /* @__PURE__ */ jsxs("div", { className: "border-l border-border pl-6 pb-2 flex-1", children: [
          /* @__PURE__ */ jsx("div", { className: "font-semibold text-ink", children: m.t }),
          /* @__PURE__ */ jsx("div", { className: "text-sm text-muted-foreground mt-1", children: m.d })
        ] })
      ] }, m.y)) })
    ] }) })
  ] });
}
export {
  About as component
};
