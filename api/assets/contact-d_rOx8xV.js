import { jsxs, jsx, Fragment } from "react/jsx-runtime";
import { useState } from "react";
import { a as SectionLabel, S as Section } from "./Section-3En1J6fj.js";
import { MapPin, Phone, Mail, Clock, Loader2 } from "lucide-react";
import { toast } from "sonner";
import "framer-motion";
function Contact() {
  const [sending, setSending] = useState(false);
  const handleSubmit = async (e) => {
    e.preventDefault();
    setSending(true);
    await new Promise((r) => setTimeout(r, 1500));
    setSending(false);
    toast.success("Message sent! We’ll respond within 2 business days.");
    e.target.reset();
  };
  return /* @__PURE__ */ jsxs("div", { children: [
    /* @__PURE__ */ jsx("section", { className: "border-b border-border bg-secondary/40", children: /* @__PURE__ */ jsxs("div", { className: "max-w-7xl mx-auto px-4 py-16", children: [
      /* @__PURE__ */ jsx(SectionLabel, { children: "Contact · தொடர்பு" }),
      /* @__PURE__ */ jsx("h1", { className: "mt-4 font-display text-4xl md:text-5xl font-semibold", children: "We're here to help." }),
      /* @__PURE__ */ jsx("p", { className: "font-tamil mt-3 text-foreground/75", children: "எந்த உதவிக்கும் தயங்காமல் தொடர்பு கொள்ளுங்கள்." })
    ] }) }),
    /* @__PURE__ */ jsxs(Section, { className: "py-14 grid lg:grid-cols-5 gap-10", children: [
      /* @__PURE__ */ jsx("div", { className: "lg:col-span-2 space-y-4", children: [{
        i: MapPin,
        t: "Head Office",
        d: "TN Vanigargalin Sangamam,\nNo. 24, North Mada Street,\nMylapore, Chennai — 600 004"
      }, {
        i: Phone,
        t: "Helpline",
        d: "1800-XXX-XXXX (Toll-free)\n+91 91944 20044"
      }, {
        i: Mail,
        t: "Email",
        d: "info@tnvs.gov.in\nsupport@tnvs.gov.in"
      }, {
        i: Clock,
        t: "Office Hours",
        d: "Monday – Saturday\n10:00 AM – 6:00 PM"
      }].map((c) => /* @__PURE__ */ jsxs("div", { className: "paper rounded-xl p-5 flex gap-4", children: [
        /* @__PURE__ */ jsx("div", { className: "w-10 h-10 rounded-md bg-primary/8 grid place-items-center text-primary shrink-0", children: /* @__PURE__ */ jsx(c.i, { className: "w-5 h-5" }) }),
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("div", { className: "font-display font-semibold", children: c.t }),
          /* @__PURE__ */ jsx("div", { className: "text-sm text-muted-foreground whitespace-pre-line mt-1 leading-relaxed", children: c.d })
        ] })
      ] }, c.t)) }),
      /* @__PURE__ */ jsxs("form", { className: "lg:col-span-3 paper rounded-xl p-8 space-y-5", onSubmit: handleSubmit, children: [
        /* @__PURE__ */ jsx("h2", { className: "font-display text-2xl font-semibold", children: "Send us a message" }),
        /* @__PURE__ */ jsx("p", { className: "font-tamil text-sm text-muted-foreground -mt-3", children: "எங்களுக்கு செய்தி அனுப்புங்கள்" }),
        /* @__PURE__ */ jsxs("div", { className: "grid sm:grid-cols-2 gap-4", children: [
          /* @__PURE__ */ jsxs("label", { className: "flex flex-col gap-1.5", children: [
            /* @__PURE__ */ jsx("span", { className: "text-xs font-medium", children: "Your Name" }),
            /* @__PURE__ */ jsx("input", { className: inp, required: true })
          ] }),
          /* @__PURE__ */ jsxs("label", { className: "flex flex-col gap-1.5", children: [
            /* @__PURE__ */ jsx("span", { className: "text-xs font-medium", children: "Mobile" }),
            /* @__PURE__ */ jsx("input", { className: inp, required: true })
          ] })
        ] }),
        /* @__PURE__ */ jsxs("label", { className: "flex flex-col gap-1.5", children: [
          /* @__PURE__ */ jsx("span", { className: "text-xs font-medium", children: "Email" }),
          /* @__PURE__ */ jsx("input", { type: "email", className: inp })
        ] }),
        /* @__PURE__ */ jsxs("label", { className: "flex flex-col gap-1.5", children: [
          /* @__PURE__ */ jsx("span", { className: "text-xs font-medium", children: "Subject" }),
          /* @__PURE__ */ jsx("select", { className: inp, children: ["Membership", "Certificate", "Welfare claim", "Other"].map((s) => /* @__PURE__ */ jsx("option", { children: s }, s)) })
        ] }),
        /* @__PURE__ */ jsxs("label", { className: "flex flex-col gap-1.5", children: [
          /* @__PURE__ */ jsx("span", { className: "text-xs font-medium", children: "Message" }),
          /* @__PURE__ */ jsx("textarea", { className: inp + " min-h-[120px]", required: true })
        ] }),
        /* @__PURE__ */ jsx("button", { type: "submit", disabled: sending, className: "inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-md font-medium hover:bg-primary/90 transition disabled:opacity-60 min-h-[44px]", children: sending ? /* @__PURE__ */ jsxs(Fragment, { children: [
          /* @__PURE__ */ jsx(Loader2, { className: "w-4 h-4 animate-spin" }),
          " Sending…"
        ] }) : "Send message" })
      ] })
    ] })
  ] });
}
const inp = "w-full border border-input bg-background rounded-md px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-ring/40 focus:border-primary transition";
export {
  Contact as component
};
