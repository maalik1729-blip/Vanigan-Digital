import { jsxs, jsx, Fragment } from "react/jsx-runtime";
import { Link } from "@tanstack/react-router";
import { useState, useRef, useEffect } from "react";
import { a as SectionLabel, S as Section } from "./Section-3En1J6fj.js";
import { Users, FileCheck, Award, HeartPulse, GraduationCap, ShieldCheck, Building2, Scale, Briefcase, Coins, Store, Rocket, ArrowRight, X, QrCode, CheckCircle2, ShieldAlert, Check, Sparkles } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { u as useLanguage } from "./router-Jw4K1Btz.js";
import "@tanstack/react-query";
import "sonner";
import "zod";
const cats = [{
  label: "உறுப்பினர் சேர்க்கை",
  labelEn: "Membership",
  items: [{
    i: Users,
    t: "புதிய உறுப்பினர் சேர்க்கை",
    e: "New Membership",
    d: "ஆன்லைனில் 5 நிமிடங்களில் விண்ணப்பிக்கவும் - உடனடி EPIC ஐடி.",
    de: "Online application with instant EPIC ID.",
    to: "/membership"
  }, {
    i: FileCheck,
    t: "சான்றிதழ் பதிவிறக்கம்",
    e: "Certificate Download",
    d: "முத்திரையிடப்பட்ட டிஜிட்டல் சான்றிதழ் மற்றும் PDF அடையாள அட்டை.",
    de: "Stamped digital certificate and PDF ID card.",
    to: "/voter-id"
  }, {
    i: Award,
    t: "உறுப்பினர் புதுப்பித்தல்",
    e: "Membership Renewal",
    d: "ஒரே கிளிக்கில் UPI கட்டணம் மூலம் ஆண்டுதோறும் புதுப்பிக்கவும்.",
    de: "Renew yearly with one-click UPI payment.",
    modalType: "renewal"
  }]
}, {
  label: "நலத்திட்டங்கள்",
  labelEn: "Welfare Schemes",
  items: [{
    i: HeartPulse,
    t: "சுகாதார காப்பீடு",
    e: "Health Insurance",
    d: "உறுப்பினர்கள் மற்றும் குடும்பத்தினருக்கு ₹2 லட்சம் வரை மருத்துவக் காப்பீடு.",
    de: "Group cover up to ₹2 lakh for members and family.",
    modalType: "welfare"
  }, {
    i: GraduationCap,
    t: "கல்வி உதவித்தொகை",
    e: "Scholarships",
    d: "பதிவுசெய்யப்பட்ட வணிகர்களின் குழந்தைகளுக்கு ஆண்டு கல்வி உதவித்தொகை.",
    de: "Annual scholarships for children of registered traders.",
    modalType: "welfare"
  }, {
    i: ShieldCheck,
    t: "அவசர நிவாரண நிதி",
    e: "Emergency Aid",
    d: "48 மணி நேரத்திற்குள் தீ, வெள்ளம் மற்றும் இயற்கை பேரிடர் ஆதரவு.",
    de: "Fire, flood and bereavement support within 48 hours.",
    modalType: "welfare"
  }]
}, {
  label: "வணிக ஆதரவு",
  labelEn: "Business Support",
  items: [{
    i: Building2,
    t: "கடை பதிவு உதவி",
    e: "Shop Registration",
    d: "GST, கடை உரிமம், FSSAI, MSME தாக்கல் செய்வதற்கான உதவி.",
    de: "GST, shop & estd, FSSAI, MSME filing assistance.",
    modalType: "support"
  }, {
    i: Scale,
    t: "சட்ட ஆலோசனை",
    e: "Legal Advisory",
    d: "உறுப்பினர்களுக்கான இலவச சட்ட உதவி மற்றும் தகராறு தீர்வு.",
    de: "Free legal aid and dispute mediation for members.",
    modalType: "support"
  }, {
    i: Briefcase,
    t: "வணிகக் கண்காட்சிகள்",
    e: "Trade Exhibitions",
    d: "தயாரிப்புகளைக் காட்சிப்படுத்த மாவட்ட மற்றும் மாநில அளவிலான கண்காட்சிகள்.",
    de: "District and state level fairs to showcase products.",
    modalType: "support"
  }]
}, {
  label: "கடன் கோரிக்கை",
  labelEn: "Loan Assistance",
  items: [{
    i: Coins,
    t: "வட்டியில்லா வணிகக் கடன்",
    e: "Interest-Free Business Loan",
    d: "Pvt Ltd, கூட்டாண்மை, இறக்குமதி/ஏற்றுமதி, Proprietorship மற்றும் Freelancers-க்கு 25 லட்சம் வரை வட்டியில்லா கடன்.",
    de: "Up to ₹25 lakh interest-free loan for Pvt Ltd, partnerships, import/export, proprietorships and freelancers.",
    modalType: "loan"
  }, {
    i: Store,
    t: "சில்லறை வணிகர்கள் கடன்",
    e: "Retail Trader Loan",
    d: "பதிவுசெய்யப்பட்ட சில்லறை வணிகர்களுக்கு விரைவான கடன் அனுமதி — குறைந்தபட்ச ஆவணங்களுடன்.",
    de: "Fast loan approval for registered retail traders with minimal documentation.",
    modalType: "loan"
  }, {
    i: Rocket,
    t: "இளைய தொழில்முனைவோர் கடன்",
    e: "Young Entrepreneur Loan",
    d: "40 வயதுக்குட்பட்ட இளைய தொழில்முனைவோருக்கு சிறப்பு மானியக் கடன் திட்டம்.",
    de: "Special subsidised loan scheme for entrepreneurs under 40 years.",
    modalType: "loan"
  }]
}];
function Services() {
  const {
    t
  } = useLanguage();
  const [modal, setModal] = useState({
    type: null
  });
  const modalRef = useRef(null);
  const [step, setStep] = useState(1);
  const [loading, setLoading] = useState(false);
  const [formInput, setFormInput] = useState({
    epic: "",
    phone: "",
    name: "",
    details: "",
    document: "",
    loanType: "",
    loanAmount: "",
    businessType: ""
  });
  const [chatStep, setChatStep] = useState(0);
  const [businessName, setBusinessName] = useState("");
  const [selectedBusinessType, setSelectedBusinessType] = useState("");
  const openModal = (type, subject) => {
    setModal({
      type,
      subject
    });
    setStep(1);
    setFormInput({
      epic: "",
      phone: "",
      name: "",
      details: "",
      document: "",
      loanType: "",
      loanAmount: "",
      businessType: ""
    });
    setChatStep(0);
    setBusinessName("");
    setSelectedBusinessType("");
    setLoading(false);
  };
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        closeModal();
      }
    };
    if (modal.type) {
      window.addEventListener("keydown", handleKeyDown);
      modalRef.current?.focus();
    }
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [modal.type]);
  useEffect(() => {
    if (typeof window !== "undefined") {
      const params = new URLSearchParams(window.location.search);
      const service = params.get("service");
      const type = params.get("type");
      if (service === "loan") {
        setModal({
          type: "loan",
          subject: "Interest-Free Business Loan"
        });
        setStep(1);
        setFormInput({
          epic: "",
          phone: "",
          name: "",
          details: "",
          document: "",
          loanType: "",
          loanAmount: "",
          businessType: ""
        });
        setLoading(false);
        const typeMapping = {
          "pvt-ltd": "Pvt Ltd நிறுவனம்",
          "partnership": "கூட்டாண்மை வணிகம்",
          "import-export": "இறக்குமதி ஏற்றுமதி வணிகம்",
          "proprietorship": "தனியுரிமை வணிகம்",
          "freelancer": "சுயதொழிலாளர்"
        };
        if (type && typeMapping[type]) {
          setSelectedBusinessType(typeMapping[type]);
          setChatStep(2);
        } else {
          setChatStep(0);
        }
      }
    }
  }, []);
  const closeModal = () => {
    setModal({
      type: null
    });
  };
  const handleRenewalSubmit = (e) => {
    e.preventDefault();
    if (!formInput.epic || !formInput.phone) return;
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setStep(2);
    }, 1e3);
  };
  const handleWelfareSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setStep(2);
    }, 1200);
  };
  const handleSupportSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setStep(2);
    }, 1e3);
  };
  return /* @__PURE__ */ jsxs("div", { className: "relative min-h-screen", children: [
    /* @__PURE__ */ jsx("section", { className: "border-b border-border bg-secondary/40", children: /* @__PURE__ */ jsxs("div", { className: "max-w-7xl mx-auto px-4 py-16", children: [
      /* @__PURE__ */ jsx(SectionLabel, { children: t("சேவைகள்", "Services") }),
      /* @__PURE__ */ jsx("h1", { className: "mt-4 font-display text-4xl md:text-5xl font-semibold max-w-3xl", children: t("அனைத்து வணிகர்களுக்காகவும், அனைத்து மாவட்டங்களிலும் உருவாக்கப்பட்டது.", "Built for every vanigar, across every district.") }),
      /* @__PURE__ */ jsx("p", { className: "mt-4 text-muted-foreground max-w-2xl font-tamil text-[15px] leading-relaxed", children: t("தமிழ்நாடு முழுவதும் உள்ள அனைத்து வியாபாரிகளின் நலனுக்கான 9 உத்தியோகபூர்வ சேவைகள் — ஒரே இடத்தில்.", "Nine official services for the welfare of all traders across Tamil Nadu — all in one place.") })
    ] }) }),
    /* @__PURE__ */ jsx(Section, { className: "py-14 space-y-16", children: cats.map((cat) => /* @__PURE__ */ jsxs("div", { children: [
      /* @__PURE__ */ jsxs("div", { className: "flex items-baseline justify-between border-b-2 border-primary/20 pb-3 mb-6", children: [
        /* @__PURE__ */ jsx("h2", { className: "font-display text-2xl font-bold text-ink", children: t(cat.label, cat.labelEn) }),
        /* @__PURE__ */ jsxs("span", { className: "text-xs text-muted-foreground bg-white border border-slate-200 px-2.5 py-1 rounded-full font-medium", children: [
          cat.items.length,
          " ",
          t("சேவைகள்", "services")
        ] })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "grid sm:grid-cols-2 lg:grid-cols-3 gap-6", children: cat.items.map((s) => /* @__PURE__ */ jsxs("div", { className: "relative card-base card-interactive group p-6 flex flex-col justify-between min-h-[220px]", children: [
        s.e === "New Membership" && /* @__PURE__ */ jsx("span", { className: "absolute -top-3 left-4 bg-emerald-600 text-white text-xs font-bold px-2.5 py-0.5 rounded-full uppercase tracking-wider shadow-sm animate-pulse", children: t("இங்கே தொடங்கவும் · START HERE", "START HERE") }),
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("div", { className: "w-11 h-11 rounded-lg bg-primary/8 grid place-items-center text-primary transition-colors group-hover:bg-primary group-hover:text-white", children: /* @__PURE__ */ jsx(s.i, { className: "w-5 h-5" }) }),
          /* @__PURE__ */ jsx("h3", { className: "mt-4 font-display text-lg font-semibold text-ink", children: t(s.t, s.e) }),
          /* @__PURE__ */ jsx("p", { className: "mt-2 text-sm text-muted-foreground leading-relaxed", children: t(s.d, s.de) })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "mt-4 pt-3 border-t border-slate-50", children: s.to ? /* @__PURE__ */ jsxs(Link, { to: s.to, className: "inline-flex items-center gap-1 text-sm font-semibold text-primary group-hover:gap-2 transition-all", children: [
          t("செல்க", "Apply / Go"),
          " ",
          /* @__PURE__ */ jsx(ArrowRight, { className: "w-4 h-4" })
        ] }) : /* @__PURE__ */ jsxs("button", { onClick: () => openModal(s.modalType, t(s.t, s.e)), className: "inline-flex items-center gap-1 text-sm font-semibold text-primary group-hover:gap-2 transition-all", children: [
          t("விண்ணப்பிக்க", "Request / Apply"),
          " ",
          /* @__PURE__ */ jsx(ArrowRight, { className: "w-4 h-4" })
        ] }) })
      ] }, s.e)) })
    ] }, cat.label)) }),
    /* @__PURE__ */ jsx(AnimatePresence, { children: modal.type && /* @__PURE__ */ jsx("div", { className: "fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm", children: /* @__PURE__ */ jsxs(motion.div, { ref: modalRef, tabIndex: -1, role: "dialog", "aria-modal": "true", initial: {
      scale: 0.95,
      opacity: 0
    }, animate: {
      scale: 1,
      opacity: 1
    }, exit: {
      scale: 0.95,
      opacity: 0
    }, transition: {
      duration: 0.2
    }, className: "bg-white rounded-2xl w-full max-w-lg shadow-2xl overflow-hidden border border-slate-100 flex flex-col max-h-[calc(100vh-40px)] md:max-h-[85vh] focus:outline-none", children: [
      /* @__PURE__ */ jsxs("div", { className: "bg-primary text-primary-foreground px-6 py-4 flex items-center justify-between", children: [
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("h3", { className: "font-display font-semibold text-lg", children: modal.subject }),
          /* @__PURE__ */ jsx("span", { className: "text-xs opacity-75 font-tamil font-light", children: "வணிகர் சங்கம உத்தியோகபூர்வ சேவை" })
        ] }),
        /* @__PURE__ */ jsx("button", { onClick: closeModal, className: "p-1 rounded-full hover:bg-white/10 transition text-white/80 hover:text-white", "aria-label": "Close modal", children: /* @__PURE__ */ jsx(X, { className: "w-5 h-5" }) })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "p-6 flex-1 overflow-y-auto max-h-[calc(100vh-120px)] md:max-h-[70vh]", children: [
        modal.type === "renewal" && /* @__PURE__ */ jsxs("div", { children: [
          step === 1 && /* @__PURE__ */ jsxs("form", { onSubmit: handleRenewalSubmit, className: "space-y-4", children: [
            /* @__PURE__ */ jsxs("div", { className: "p-4 bg-sky-50 border border-sky-100 rounded-xl text-xs text-sky-800 space-y-1", children: [
              /* @__PURE__ */ jsx("p", { className: "font-semibold", children: "Membership Renewal Fees: ₹500/year" }),
              /* @__PURE__ */ jsx("p", { children: "Renewing updates your stamped digital trader certificate and grants emergency relief eligibility for the active year." })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "space-y-1.5", children: [
              /* @__PURE__ */ jsx("label", { className: "text-xs font-semibold text-slate-700", children: "Enter EPIC / ID No *" }),
              /* @__PURE__ */ jsx("input", { required: true, type: "text", className: "w-full border border-slate-200 rounded-lg px-3.5 py-2.5 text-sm uppercase focus:ring-2 focus:ring-primary/20 focus:border-primary focus:outline-none", placeholder: "e.g. TNVS9873", value: formInput.epic, onChange: (e) => setFormInput({
                ...formInput,
                epic: e.target.value
              }) })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "space-y-1.5", children: [
              /* @__PURE__ */ jsx("label", { className: "text-xs font-semibold text-slate-700", children: "Registered Mobile Number *" }),
              /* @__PURE__ */ jsx("input", { required: true, type: "tel", maxLength: 10, className: "w-full border border-slate-200 rounded-lg px-3.5 py-2.5 text-sm focus:ring-2 focus:ring-primary/20 focus:border-primary focus:outline-none", placeholder: "e.g. 9876543210", value: formInput.phone, onChange: (e) => setFormInput({
                ...formInput,
                phone: e.target.value.replace(/\D/g, "")
              }) })
            ] }),
            /* @__PURE__ */ jsx("button", { type: "submit", disabled: loading, className: "w-full bg-primary hover:bg-primary/95 text-white py-3 rounded-lg font-semibold transition text-sm shadow-md flex items-center justify-center gap-2", children: loading ? /* @__PURE__ */ jsx("span", { className: "w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" }) : /* @__PURE__ */ jsxs(Fragment, { children: [
              "Proceed to Payment (பணம் செலுத்துக) ",
              /* @__PURE__ */ jsx(ArrowRight, { className: "w-4 h-4" })
            ] }) })
          ] }),
          step === 2 && /* @__PURE__ */ jsxs("div", { className: "text-center space-y-5 py-4", children: [
            /* @__PURE__ */ jsxs("div", { className: "flex flex-col items-center justify-center", children: [
              /* @__PURE__ */ jsxs("div", { className: "relative p-4 bg-slate-50 border border-slate-200 rounded-xl shadow-inner mb-3", children: [
                /* @__PURE__ */ jsx(QrCode, { className: "w-40 h-40 text-slate-800" }),
                /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-white/5 backdrop-blur-[0.5px] flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity", children: /* @__PURE__ */ jsx("span", { className: "text-xs bg-slate-900 text-white px-2 py-1 rounded", children: "UPI Scan" }) })
              ] }),
              /* @__PURE__ */ jsx("span", { className: "text-xs bg-slate-100 text-slate-700 px-3 py-1 rounded-full font-semibold", children: "Payable: ₹500" })
            ] }),
            /* @__PURE__ */ jsx("p", { className: "text-xs text-muted-foreground max-w-sm mx-auto", children: "Scan this official TVK UPI QR code using GPay, PhonePe, Paytm, or BHIM to pay your ₹500 renewal fee." }),
            /* @__PURE__ */ jsxs("div", { className: "flex flex-col gap-2 pt-3", children: [
              /* @__PURE__ */ jsx("div", { className: "bg-amber-50 border border-amber-200 rounded-lg p-3 text-xs text-amber-800 text-center font-medium", children: t("UPI கட்டண ஒருங்கிணைப்பு விரைவில் வரும்", "UPI payment integration coming soon") }),
              /* @__PURE__ */ jsx("button", { onClick: () => setStep(1), className: "text-xs text-slate-500 hover:underline", children: "Go Back" })
            ] })
          ] }),
          step === 3 && /* @__PURE__ */ jsxs("div", { className: "text-center space-y-4 py-6", children: [
            /* @__PURE__ */ jsx("div", { className: "w-16 h-16 bg-emerald-100 border border-emerald-200 rounded-full flex items-center justify-center mx-auto shadow-sm", children: /* @__PURE__ */ jsx(CheckCircle2, { className: "w-10 h-10 text-emerald-800 animate-bounce" }) }),
            /* @__PURE__ */ jsx("h4", { className: "font-display font-semibold text-lg text-emerald-800", children: "Renewal Successful! (புதுப்பிக்கப்பட்டது)" }),
            /* @__PURE__ */ jsx("p", { className: "text-xs text-slate-600 max-w-sm mx-auto", children: "Thank you! Your TNVS membership renewal has been processed. Your digital card is active for the current calendar year." }),
            /* @__PURE__ */ jsxs("div", { className: "flex justify-center gap-3 pt-4", children: [
              /* @__PURE__ */ jsx(Link, { to: "/voter-id", search: {
                q: void 0
              }, onClick: closeModal, className: "bg-primary text-white px-4 py-2 rounded-lg text-xs font-semibold hover:bg-primary/95 transition shadow", children: "View Stamped Card" }),
              /* @__PURE__ */ jsx("button", { onClick: closeModal, className: "border border-slate-200 text-slate-700 px-4 py-2 rounded-lg text-xs hover:bg-slate-50 transition", children: "Close" })
            ] })
          ] })
        ] }),
        modal.type === "welfare" && /* @__PURE__ */ jsxs("div", { children: [
          step === 1 && /* @__PURE__ */ jsxs("form", { onSubmit: handleWelfareSubmit, className: "space-y-4", children: [
            /* @__PURE__ */ jsxs("div", { className: "p-3.5 bg-rose-50 border border-rose-100 rounded-xl text-xs text-rose-800 flex items-start gap-2", children: [
              /* @__PURE__ */ jsx(ShieldAlert, { className: "w-4 h-4 shrink-0 text-rose-600 mt-0.5" }),
              /* @__PURE__ */ jsx("p", { children: "Claims require a minimum of 6 months active association membership to get processed." })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "space-y-1.5", children: [
              /* @__PURE__ */ jsx("label", { className: "text-xs font-semibold text-slate-700 font-tamil", children: "உறுப்பினர் எண் / EPIC ID *" }),
              /* @__PURE__ */ jsx("input", { required: true, type: "text", className: "w-full border border-slate-200 rounded-lg px-3.5 py-2.5 text-sm uppercase focus:ring-2 focus:ring-primary/20 focus:border-primary focus:outline-none", placeholder: "e.g. TNVS7390", value: formInput.epic, onChange: (e) => setFormInput({
                ...formInput,
                epic: e.target.value
              }) })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "space-y-1.5", children: [
              /* @__PURE__ */ jsx("label", { className: "text-xs font-semibold text-slate-700 font-tamil", children: "வியாபாரி பெயர் / Trader Name *" }),
              /* @__PURE__ */ jsx("input", { required: true, type: "text", className: "w-full border border-slate-200 rounded-lg px-3.5 py-2.5 text-sm focus:ring-2 focus:ring-primary/20 focus:border-primary focus:outline-none", placeholder: "e.g. Senthil Kumar N", value: formInput.name, onChange: (e) => setFormInput({
                ...formInput,
                name: e.target.value
              }) })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "space-y-1.5", children: [
              /* @__PURE__ */ jsx("label", { className: "text-xs font-semibold text-slate-700 font-tamil", children: "உரிம ஆவணம் / Support Proof (Shop License / Aadhar) *" }),
              /* @__PURE__ */ jsx("div", { className: "flex items-center justify-center p-3 border border-dashed border-slate-300 bg-slate-50/50 rounded-lg text-center cursor-pointer hover:bg-slate-100 transition", children: /* @__PURE__ */ jsxs("span", { className: "text-xs text-muted-foreground flex items-center gap-1", children: [
                /* @__PURE__ */ jsx(FileCheck, { className: "w-4 h-4 text-primary" }),
                " Upload supporting PDF/Image"
              ] }) })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "space-y-1.5", children: [
              /* @__PURE__ */ jsx("label", { className: "text-xs font-semibold text-slate-700 font-tamil", children: "கோரிக்கை விவரம் / Claim Description" }),
              /* @__PURE__ */ jsx("textarea", { rows: 3, className: "w-full border border-slate-200 rounded-lg px-3.5 py-2.5 text-sm focus:ring-2 focus:ring-primary/20 focus:border-primary focus:outline-none", placeholder: "Brief details about the insurance cover or educational needs...", value: formInput.details, onChange: (e) => setFormInput({
                ...formInput,
                details: e.target.value
              }) })
            ] }),
            /* @__PURE__ */ jsx("button", { type: "submit", disabled: loading, className: "w-full bg-primary hover:bg-primary/95 text-white py-3 rounded-lg font-semibold transition text-sm shadow-md flex items-center justify-center gap-2", children: loading ? /* @__PURE__ */ jsx("span", { className: "w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" }) : /* @__PURE__ */ jsxs(Fragment, { children: [
              "Submit Welfare Application ",
              /* @__PURE__ */ jsx(Check, { className: "w-4 h-4" })
            ] }) })
          ] }),
          step === 2 && /* @__PURE__ */ jsxs("div", { className: "text-center space-y-4 py-6", children: [
            /* @__PURE__ */ jsx("div", { className: "w-16 h-16 bg-emerald-100 border border-emerald-200 rounded-full flex items-center justify-center mx-auto shadow-sm animate-pulse", children: /* @__PURE__ */ jsx(CheckCircle2, { className: "w-10 h-10 text-emerald-800" }) }),
            /* @__PURE__ */ jsx("h4", { className: "font-display font-semibold text-lg text-emerald-800", children: "Application Submitted! (விண்ணப்பம் சமர்ப்பிக்கப்பட்டது)" }),
            /* @__PURE__ */ jsxs("div", { className: "bg-slate-50 p-4 border border-slate-150 rounded-xl max-w-sm mx-auto text-left text-xs space-y-1 text-slate-700", children: [
              /* @__PURE__ */ jsxs("div", { children: [
                /* @__PURE__ */ jsx("strong", { children: "Application ID:" }),
                " TNVS-WEL-",
                Math.floor(Math.random() * 9e4) + 1e4
              ] }),
              /* @__PURE__ */ jsxs("div", { children: [
                /* @__PURE__ */ jsx("strong", { children: "Service:" }),
                " ",
                modal.subject
              ] }),
              /* @__PURE__ */ jsxs("div", { children: [
                /* @__PURE__ */ jsx("strong", { children: "Trader Name:" }),
                " ",
                formInput.name
              ] }),
              /* @__PURE__ */ jsx("div", { className: "pt-2 border-t border-slate-200 mt-2 text-muted-foreground", children: "Our regional Welfare Council will verify your documents and update your status in the Dashboard within 4-5 business days." })
            ] }),
            /* @__PURE__ */ jsx("button", { onClick: closeModal, className: "bg-primary text-white px-5 py-2 rounded-lg text-xs font-semibold hover:bg-primary/95 transition shadow mt-3", children: "Close Dashboard" })
          ] })
        ] }),
        modal.type === "support" && /* @__PURE__ */ jsxs("div", { children: [
          step === 1 && /* @__PURE__ */ jsxs("form", { onSubmit: handleSupportSubmit, className: "space-y-4", children: [
            /* @__PURE__ */ jsxs("div", { className: "p-3 bg-amber-50 border border-amber-100 rounded-xl text-xs text-amber-800 flex items-center gap-2", children: [
              /* @__PURE__ */ jsx(Sparkles, { className: "w-4 h-4 shrink-0 text-amber-600" }),
              /* @__PURE__ */ jsx("p", { children: "Get free advisory and assistance from expert TVK district committees." })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "space-y-1.5", children: [
              /* @__PURE__ */ jsx("label", { className: "text-xs font-semibold text-slate-700 font-tamil", children: "தொழில் / கடை பெயர் (Shop or Business Name) *" }),
              /* @__PURE__ */ jsx("input", { required: true, type: "text", className: "w-full border border-slate-200 rounded-lg px-3.5 py-2.5 text-sm focus:ring-2 focus:ring-primary/20 focus:border-primary focus:outline-none", placeholder: "e.g. Suman Agencies / சுமன் ஏஜென்சிஸ்", value: formInput.name, onChange: (e) => setFormInput({
                ...formInput,
                name: e.target.value
              }) })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "space-y-1.5", children: [
              /* @__PURE__ */ jsx("label", { className: "text-xs font-semibold text-slate-700 font-tamil", children: "உறுப்பினர் எண் / EPIC ID (If registered)" }),
              /* @__PURE__ */ jsx("input", { type: "text", className: "w-full border border-slate-200 rounded-lg px-3.5 py-2.5 text-sm uppercase focus:ring-2 focus:ring-primary/20 focus:border-primary focus:outline-none", placeholder: "e.g. TNVS9823", value: formInput.epic, onChange: (e) => setFormInput({
                ...formInput,
                epic: e.target.value
              }) })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "space-y-1.5", children: [
              /* @__PURE__ */ jsx("label", { className: "text-xs font-semibold text-slate-700 font-tamil", children: "கைபேசி எண் / Mobile *" }),
              /* @__PURE__ */ jsx("input", { required: true, type: "tel", maxLength: 10, className: "w-full border border-slate-200 rounded-lg px-3.5 py-2.5 text-sm focus:ring-2 focus:ring-primary/20 focus:border-primary focus:outline-none", placeholder: "e.g. 9876543210", value: formInput.phone, onChange: (e) => setFormInput({
                ...formInput,
                phone: e.target.value.replace(/\D/g, "")
              }) })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "space-y-1.5", children: [
              /* @__PURE__ */ jsx("label", { className: "text-xs font-semibold text-slate-700 font-tamil", children: "விவரங்கள் / Support Request Details *" }),
              /* @__PURE__ */ jsx("textarea", { rows: 3, required: true, className: "w-full border border-slate-200 rounded-lg px-3.5 py-2.5 text-sm focus:ring-2 focus:ring-primary/20 focus:border-primary focus:outline-none", placeholder: "Describe your issue or what support you need (GST help, MSME filing, dispute resolution etc.)...", value: formInput.details, onChange: (e) => setFormInput({
                ...formInput,
                details: e.target.value
              }) })
            ] }),
            /* @__PURE__ */ jsx("button", { type: "submit", disabled: loading, className: "w-full bg-primary hover:bg-primary/95 text-white py-3 rounded-lg font-semibold transition text-sm shadow-md flex items-center justify-center gap-2", children: loading ? /* @__PURE__ */ jsx("span", { className: "w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" }) : /* @__PURE__ */ jsxs(Fragment, { children: [
              "Submit Support Ticket ",
              /* @__PURE__ */ jsx(Check, { className: "w-4 h-4" })
            ] }) })
          ] }),
          step === 2 && /* @__PURE__ */ jsxs("div", { className: "text-center space-y-4 py-6", children: [
            /* @__PURE__ */ jsx("div", { className: "w-16 h-16 bg-emerald-100 border border-emerald-200 rounded-full flex items-center justify-center mx-auto shadow-sm", children: /* @__PURE__ */ jsx(CheckCircle2, { className: "w-10 h-10 text-emerald-800" }) }),
            /* @__PURE__ */ jsx("h4", { className: "font-display font-semibold text-lg text-emerald-800", children: "Request Sent Successfully! (அனுப்பப்பட்டது)" }),
            /* @__PURE__ */ jsxs("div", { className: "bg-slate-50 p-4 border border-slate-150 rounded-xl max-w-sm mx-auto text-left text-xs space-y-1.5 text-slate-700", children: [
              /* @__PURE__ */ jsxs("div", { children: [
                /* @__PURE__ */ jsx("strong", { children: "Ticket ID:" }),
                " TNVS-SUP-",
                Math.floor(Math.random() * 8e4) + 2e4
              ] }),
              /* @__PURE__ */ jsxs("div", { children: [
                /* @__PURE__ */ jsx("strong", { children: "Support:" }),
                " ",
                modal.subject
              ] }),
              /* @__PURE__ */ jsxs("div", { children: [
                /* @__PURE__ */ jsx("strong", { children: "Business:" }),
                " ",
                formInput.name
              ] }),
              /* @__PURE__ */ jsx("div", { className: "pt-2 border-t border-slate-200 mt-2 text-muted-foreground font-tamil", children: "உங்கள் விவரங்கள் மாவட்ட ஆலோசகருக்கு அனுப்பப்பட்டுள்ளது. 24 மணி நேரத்திற்குள் எங்களது மாவட்ட குழு உங்களைத் தொடர்பு கொள்ளும்." })
            ] }),
            /* @__PURE__ */ jsx("button", { onClick: closeModal, className: "bg-primary text-white px-5 py-2.5 rounded-lg text-xs font-semibold hover:bg-primary/95 transition shadow mt-3", children: "Close" })
          ] })
        ] }),
        modal.type === "loan" && /* @__PURE__ */ jsxs("div", { className: "space-y-6 font-tamil", children: [
          /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3 pb-3 border-b border-slate-100", children: [
            /* @__PURE__ */ jsx("div", { className: "w-10 h-10 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-800 shrink-0", children: /* @__PURE__ */ jsx(Coins, { className: "w-5 h-5" }) }),
            /* @__PURE__ */ jsxs("div", { className: "flex-1 flex justify-between items-baseline", children: [
              /* @__PURE__ */ jsxs("div", { children: [
                /* @__PURE__ */ jsx("h4", { className: "font-display font-bold text-base text-slate-800", children: "வட்டியில்லா வணிகக் கடன் திட்டம்" }),
                /* @__PURE__ */ jsx("span", { className: "text-xs text-emerald-800 font-semibold tracking-wide uppercase", children: "Interest-Free Business Loan" })
              ] }),
              chatStep > 0 && chatStep < 3 && /* @__PURE__ */ jsx("div", { className: "text-xs text-muted-foreground font-semibold font-sans", children: chatStep === 1 ? t("படி 1 / 3: வகை தேர்வு", "Step 1 of 3: Select Type") : t("படி 2 / 3: பெயர் உள்ளீடு", "Step 2 of 3: Enter Name") })
            ] })
          ] }),
          chatStep === 0 && /* @__PURE__ */ jsxs("div", { className: "space-y-5 animate-fade-in", children: [
            /* @__PURE__ */ jsxs("div", { className: "bg-gradient-to-br from-emerald-600 to-teal-700 text-white rounded-2xl p-5 shadow-sm space-y-3 relative overflow-hidden", children: [
              /* @__PURE__ */ jsx("div", { className: "absolute top-0 right-0 w-24 h-24 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2" }),
              /* @__PURE__ */ jsx("h5", { className: "font-display font-bold text-sm text-gold", children: "கடன் கோரிக்கை" }),
              /* @__PURE__ */ jsx("p", { className: "text-xs text-emerald-100 leading-relaxed font-tamil", children: "Pvt Ltd நிறுவனங்கள், கூட்டாண்மை வணிகங்கள், இறக்குமதி ஏற்றுமதி வணிகங்கள், தனியுரிமை (Proprietorship) மற்றும் சுயதொழிலாளர்களுக்கு (Freelancers) 25 லட்சம் வரை வட்டியில்லா கடன் வழங்குகிறோம்." })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "bg-slate-50 border border-slate-200 rounded-xl p-4 text-center space-y-3", children: [
              /* @__PURE__ */ jsx("p", { className: "text-xs font-bold text-slate-700 font-tamil", children: "கடன் விண்ணப்பிக்க விரும்புகிறீர்களா?" }),
              /* @__PURE__ */ jsxs("div", { className: "flex justify-center gap-3", children: [
                /* @__PURE__ */ jsx("button", { onClick: () => setChatStep(1), className: "bg-emerald-600 hover:bg-emerald-700 text-white font-semibold py-2.5 px-7 rounded-xl text-xs transition active:scale-95 shadow-sm cursor-pointer", children: "ஆம்" }),
                /* @__PURE__ */ jsx("button", { onClick: closeModal, className: "bg-white hover:bg-slate-50 text-slate-700 font-semibold py-2.5 px-7 rounded-xl text-xs transition active:scale-95 border border-slate-200 cursor-pointer", children: "இல்லை" })
              ] })
            ] })
          ] }),
          chatStep === 1 && /* @__PURE__ */ jsxs("div", { className: "space-y-4 animate-fade-in", children: [
            /* @__PURE__ */ jsx("div", { className: "flex items-center gap-2", children: /* @__PURE__ */ jsx("button", { onClick: () => setChatStep(0), className: "text-slate-400 hover:text-slate-600 text-xs flex items-center gap-1 cursor-pointer", children: "← Back" }) }),
            /* @__PURE__ */ jsx("div", { className: "bg-emerald-50/70 border border-emerald-100/50 rounded-xl p-4", children: /* @__PURE__ */ jsx("p", { className: "text-xs font-semibold text-emerald-950 font-tamil", children: "அருமை! உங்கள் வணிக வகையைத் தேர்ந்தெடுக்கவும்:" }) }),
            /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 gap-2.5 max-w-sm mx-auto", children: ["Pvt Ltd நிறுவனம்", "கூட்டாண்மை வணிகம்", "இறக்குமதி ஏற்றுமதி வணிகம்", "தனியுரிமை வணிகம்", "சுயதொழிலாளர்"].map((bType) => /* @__PURE__ */ jsx("button", { onClick: () => {
              setSelectedBusinessType(bType);
              setChatStep(2);
            }, className: "w-full text-left bg-white hover:bg-emerald-50 hover:text-emerald-800 text-slate-700 font-semibold py-3 px-4 rounded-xl text-xs transition border border-slate-200 hover:border-emerald-200 active:scale-[0.99] cursor-pointer shadow-sm", children: bType }, bType)) })
          ] }),
          chatStep === 2 && /* @__PURE__ */ jsxs("div", { className: "space-y-4 animate-fade-in", children: [
            /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between", children: [
              /* @__PURE__ */ jsx("button", { onClick: () => setChatStep(1), className: "text-slate-400 hover:text-slate-600 text-xs flex items-center gap-1 cursor-pointer", children: "← Back" }),
              /* @__PURE__ */ jsx("span", { className: "text-xs bg-emerald-100 text-emerald-800 font-bold px-2.5 py-0.5 rounded-full", children: selectedBusinessType })
            ] }),
            /* @__PURE__ */ jsx("div", { className: "bg-emerald-50/70 border border-emerald-100/50 rounded-xl p-4", children: /* @__PURE__ */ jsx("p", { className: "text-xs font-semibold text-emerald-950 font-tamil", children: "உங்கள் வணிகப் பெயரைப் பகிரவும்:" }) }),
            /* @__PURE__ */ jsxs("form", { onSubmit: (e) => {
              e.preventDefault();
              if (!businessName.trim()) return;
              setChatStep(3);
            }, className: "space-y-3 max-w-md mx-auto", children: [
              /* @__PURE__ */ jsx("input", { required: true, type: "text", className: "w-full border border-slate-200 rounded-xl px-4 py-3 text-xs focus:ring-2 focus:ring-emerald-600/20 focus:border-emerald-600 focus:outline-none bg-slate-50", placeholder: "e.g. grace market", value: businessName, onChange: (e) => setBusinessName(e.target.value) }),
              /* @__PURE__ */ jsx("button", { type: "submit", className: "w-full bg-emerald-600 hover:bg-emerald-700 text-white font-semibold py-3 rounded-xl text-xs transition active:scale-95 shadow-md cursor-pointer text-center", children: "சமர்ப்பி" })
            ] })
          ] }),
          chatStep === 3 && /* @__PURE__ */ jsxs("div", { className: "space-y-5 py-2 text-center animate-fade-in", children: [
            /* @__PURE__ */ jsx("div", { className: "w-16 h-16 bg-emerald-100 border border-emerald-200 rounded-full flex items-center justify-center mx-auto shadow-sm", children: /* @__PURE__ */ jsx(CheckCircle2, { className: "w-9 h-9 text-emerald-800" }) }),
            /* @__PURE__ */ jsx("div", { className: "space-y-2", children: /* @__PURE__ */ jsx("h4", { className: "font-display font-bold text-base text-emerald-900 leading-relaxed font-tamil px-4", children: "25 லட்சம் வட்டியில்லா கடனுக்கு விண்ணப்பித்ததற்கு நன்றி! எங்கள் குழு விரைவில் தொடர்பு கொள்ளும்." }) }),
            /* @__PURE__ */ jsxs("div", { className: "bg-slate-50 p-4 border border-slate-200 rounded-xl max-w-sm mx-auto text-left text-xs space-y-2 text-slate-700", children: [
              /* @__PURE__ */ jsxs("div", { className: "flex justify-between pb-1.5 border-b border-slate-200/60 text-xs font-bold text-slate-400 font-mono", children: [
                /* @__PURE__ */ jsx("span", { children: "APPLICATION RECEIPT" }),
                /* @__PURE__ */ jsx("span", { children: "STATUS: PENDING" })
              ] }),
              /* @__PURE__ */ jsxs("div", { children: [
                /* @__PURE__ */ jsx("strong", { children: "Application ID:" }),
                " TNVS-LOAN-",
                Math.floor(Math.random() * 9e4) + 1e4
              ] }),
              /* @__PURE__ */ jsxs("div", { children: [
                /* @__PURE__ */ jsx("strong", { children: "Business Type:" }),
                " ",
                selectedBusinessType
              ] }),
              /* @__PURE__ */ jsxs("div", { children: [
                /* @__PURE__ */ jsx("strong", { children: "Shop Name:" }),
                " ",
                businessName
              ] })
            ] }),
            /* @__PURE__ */ jsx("button", { onClick: closeModal, className: "bg-slate-800 hover:bg-slate-900 text-white font-semibold py-2.5 px-8 rounded-xl text-xs transition active:scale-95 shadow cursor-pointer mt-2", children: "Close" })
          ] })
        ] })
      ] })
    ] }) }) })
  ] });
}
export {
  Services as component
};
