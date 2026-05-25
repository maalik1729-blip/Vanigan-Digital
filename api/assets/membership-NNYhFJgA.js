import { jsxs, jsx, Fragment } from "react/jsx-runtime";
import { Link } from "@tanstack/react-router";
import { useId, useState, useRef, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowLeft, RefreshCw, Check, Camera, Upload, Loader2, Download, FileCheck, ArrowRight } from "lucide-react";
import { toast } from "sonner";
import { u as useLanguage, a as Route, o as orgLogo } from "./router-BoIqs0hK.js";
import { o as ownerPhoto, s as signImg } from "./8bb61dfb-f349-4e0b-8501-560feae9f000-B-CYicWI.js";
import { W as WINGS } from "./wings-CwMPnkIc.js";
import "@tanstack/react-query";
import "zod";
function useFloatingLabel(externalValue) {
  const [focused, setFocused] = useState(false);
  const hasValue = externalValue !== void 0 && externalValue !== "";
  const floated = focused || hasValue;
  return { focused, setFocused, floated };
}
function FloatingInput({ label, error, success, value, onChange, className = "", ...props }) {
  const id = useId();
  const { focused, setFocused, floated } = useFloatingLabel(value);
  const borderColor = error ? "border-red-400" : success ? "border-emerald-400" : focused ? "border-primary" : "border-slate-200";
  const ringColor = error ? "ring-red-400/15" : focused ? "ring-primary/10" : "ring-transparent";
  return /* @__PURE__ */ jsxs("div", { className: "relative", children: [
    /* @__PURE__ */ jsx(
      "input",
      {
        id,
        value,
        onChange,
        onFocus: () => setFocused(true),
        onBlur: () => setFocused(false),
        placeholder: " ",
        className: [
          "peer w-full bg-white border rounded-xl px-4 pt-[22px] pb-[10px]",
          "text-sm font-medium text-slate-800 outline-none min-h-[56px]",
          "transition-all duration-200",
          `${borderColor} ring-4 ${ringColor}`,
          className
        ].join(" "),
        ...props
      }
    ),
    /* @__PURE__ */ jsx(
      "label",
      {
        htmlFor: id,
        className: [
          "absolute left-4 font-medium pointer-events-none select-none",
          "transition-all duration-200 ease-[cubic-bezier(0.4,0,0.2,1)]",
          floated ? "top-[8px] text-[10px] tracking-wide font-semibold " + (error ? "text-red-500" : focused ? "text-primary" : "text-slate-400") : "top-[17px] text-sm text-slate-400"
        ].join(" "),
        children: label
      }
    ),
    error && /* @__PURE__ */ jsx("p", { className: "mt-1 text-[11px] font-medium text-red-500 pl-1", children: error })
  ] });
}
function FloatingTextarea({ label, error, value, onChange, className = "", ...props }) {
  const id = useId();
  const { focused, setFocused, floated } = useFloatingLabel(value);
  const borderColor = error ? "border-red-400" : focused ? "border-primary" : "border-slate-200";
  const ringColor = error ? "ring-red-400/15" : focused ? "ring-primary/10" : "ring-transparent";
  return /* @__PURE__ */ jsxs("div", { className: "relative", children: [
    /* @__PURE__ */ jsx(
      "textarea",
      {
        id,
        value,
        onChange,
        onFocus: () => setFocused(true),
        onBlur: () => setFocused(false),
        placeholder: " ",
        className: [
          "peer w-full bg-white border rounded-xl px-4 pt-[26px] pb-[10px]",
          "text-sm font-medium text-slate-800 outline-none resize-none",
          "transition-all duration-200",
          `${borderColor} ring-4 ${ringColor}`,
          className
        ].join(" "),
        ...props
      }
    ),
    /* @__PURE__ */ jsx(
      "label",
      {
        htmlFor: id,
        className: [
          "absolute left-4 font-medium pointer-events-none select-none",
          "transition-all duration-200 ease-[cubic-bezier(0.4,0,0.2,1)]",
          floated ? "top-[8px] text-[10px] tracking-wide font-semibold " + (error ? "text-red-500" : focused ? "text-primary" : "text-slate-400") : "top-[18px] text-sm text-slate-400"
        ].join(" "),
        children: label
      }
    ),
    error && /* @__PURE__ */ jsx("p", { className: "mt-1 text-[11px] font-medium text-red-500 pl-1", children: error })
  ] });
}
function FloatingSelect({ label, error, value, onChange, children, className = "", ...props }) {
  const id = useId();
  const { focused, setFocused } = useFloatingLabel(value);
  const borderColor = error ? "border-red-400" : focused ? "border-primary" : "border-slate-200";
  const ringColor = error ? "ring-red-400/15" : focused ? "ring-primary/10" : "ring-transparent";
  return /* @__PURE__ */ jsxs("div", { className: "relative", children: [
    /* @__PURE__ */ jsx(
      "select",
      {
        id,
        value,
        onChange,
        onFocus: () => setFocused(true),
        onBlur: () => setFocused(false),
        className: [
          "w-full bg-white border rounded-xl px-4 pt-[22px] pb-[10px]",
          "text-sm font-medium text-slate-800 outline-none min-h-[56px]",
          "transition-all duration-200 appearance-none cursor-pointer",
          `${borderColor} ring-4 ${ringColor}`,
          className
        ].join(" "),
        ...props,
        children
      }
    ),
    /* @__PURE__ */ jsx(
      "label",
      {
        htmlFor: id,
        className: [
          "absolute left-4 font-semibold pointer-events-none select-none",
          "transition-all duration-200 top-[8px] text-[10px] tracking-wide",
          focused ? "text-primary" : "text-slate-400"
        ].join(" "),
        children: label
      }
    ),
    /* @__PURE__ */ jsx("span", { className: "absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-slate-400", children: /* @__PURE__ */ jsx("svg", { width: "14", height: "14", viewBox: "0 0 14 14", fill: "none", children: /* @__PURE__ */ jsx("path", { d: "M3 5l4 4 4-4", stroke: "currentColor", strokeWidth: "1.5", strokeLinecap: "round", strokeLinejoin: "round" }) }) }),
    error && /* @__PURE__ */ jsx("p", { className: "mt-1 text-[11px] font-medium text-red-500 pl-1", children: error })
  ] });
}
const STEPS = [{
  n: 1,
  t: "Personal",
  ta: "தனிநபர்"
}, {
  n: 2,
  t: "Business",
  ta: "வணிகம்"
}, {
  n: 3,
  t: "Documents",
  ta: "ஆவணம்"
}, {
  n: 4,
  t: "Review",
  ta: "சரிபார்"
}, {
  n: 5,
  t: "Success",
  ta: "சான்று"
}];
const DISTRICTS = [{
  en: "Ariyalur",
  ta: "அரியலூர்"
}, {
  en: "Chengalpattu",
  ta: "செங்கல்பட்டு"
}, {
  en: "Chennai",
  ta: "சென்னை"
}, {
  en: "Coimbatore",
  ta: "கோயம்புத்தூர்"
}, {
  en: "Cuddalore",
  ta: "கடலூர்"
}, {
  en: "Dharmapuri",
  ta: "தர்மபுரி"
}, {
  en: "Dindigul",
  ta: "திண்டுக்கல்"
}, {
  en: "Erode",
  ta: "ஈரோடு"
}, {
  en: "Kallakurichi",
  ta: "கள்ளக்குறிச்சி"
}, {
  en: "Kanchipuram",
  ta: "காஞ்சிபுரம்"
}, {
  en: "Kanyakumari",
  ta: "கன்னியாகுமரி"
}, {
  en: "Karur",
  ta: "கரூர்"
}, {
  en: "Krishnagiri",
  ta: "கிருஷ்ணகிரி"
}, {
  en: "Madurai",
  ta: "மதுரை"
}, {
  en: "Mayiladuthurai",
  ta: "மயிலாடுதுறை"
}, {
  en: "Nagapattinam",
  ta: "நாகப்பட்டினம்"
}, {
  en: "Namakkal",
  ta: "நாமக்கல்"
}, {
  en: "Nilgiris",
  ta: "நீலகிரி"
}, {
  en: "Perambalur",
  ta: "பெரம்பலூர்"
}, {
  en: "Pudukkottai",
  ta: "புதுக்கோட்டை"
}, {
  en: "Ramanathapuram",
  ta: "இராமநாதபுரம்"
}, {
  en: "Ranipet",
  ta: "இராணிப்பேட்டை"
}, {
  en: "Salem",
  ta: "சேலம்"
}, {
  en: "Sivaganga",
  ta: "சிவகங்கை"
}, {
  en: "Tenkasi",
  ta: "தென்காசி"
}, {
  en: "Thanjavur",
  ta: "தஞ்சாவூர்"
}, {
  en: "Theni",
  ta: "தேனி"
}, {
  en: "Thoothukudi",
  ta: "தூத்துக்குடி"
}, {
  en: "Tiruchirappalli",
  ta: "திருச்சிராப்பள்ளி"
}, {
  en: "Tirunelveli",
  ta: "திருநெல்வேலி"
}, {
  en: "Tirupathur",
  ta: "திருப்பத்தூர்"
}, {
  en: "Tiruppur",
  ta: "திருப்பூர்"
}, {
  en: "Tiruvallur",
  ta: "திருவள்ளூர்"
}, {
  en: "Tiruvannamalai",
  ta: "திருவண்ணாமலை"
}, {
  en: "Tiruvarur",
  ta: "திருவாரூர்"
}, {
  en: "Vellore",
  ta: "வேலூர்"
}, {
  en: "Viluppuram",
  ta: "விழுப்புரம்"
}, {
  en: "Virudhunagar",
  ta: "விருதுநகர்"
}];
const WING_CATEGORIES = [{
  id: "professional",
  nameEn: "Professional Services",
  nameTa: "தொழில்முறைப் பிரிவுகள்",
  wings: ["women-entrepreneurs", "chartered-accountants", "doctors", "lawyers", "engineers", "information-technology", "young-entrepreneurs", "media-relations"]
}, {
  id: "agricultural",
  nameEn: "Agricultural & Food",
  nameTa: "விவசாயம் மற்றும் உணவுப் பிரிவுகள்",
  wings: ["agriculture", "fishery", "nursery", "forest-timber", "food-restaurants", "fmcg-traders", "dairy-farmers"]
}, {
  id: "industrial",
  nameEn: "Industrial & Trade",
  nameTa: "தொழில் மற்றும் வர்த்தகப் பிரிவுகள்",
  wings: ["manufacturers", "real-estate", "infrastructure-builders", "electrical-hardware", "logistics-distributors", "export-import", "textile-weavers", "printing-packaging", "gold-jewellery"]
}, {
  id: "public",
  nameEn: "Public & Social Services",
  nameTa: "பொது மற்றும் சமூகப் பிரிவுகள்",
  wings: ["labour", "differently-abled", "pharmacy-druggists", "education-academics", "tourism-travel", "sports-fitness", "handloom-handicrafts", "small-retailers", "hospitality-hoteliers"]
}];
function Membership() {
  const {
    t,
    language
  } = useLanguage();
  const search = Route.useSearch();
  const [step, setStep] = useState(() => {
    if (typeof window !== "undefined") {
      const saved = localStorage.getItem("tnvs_form_step");
      return saved ? Math.min(5, Math.max(1, parseInt(saved, 10))) : 1;
    }
    return 1;
  });
  const [form, setForm] = useState(() => {
    const baseForm = {
      name: search.name || "",
      mobile: search.mobile || "",
      email: "",
      district: search.district || "Chennai",
      shop: "",
      type: "Retail",
      address: search.address || "",
      years: "",
      wing: search.wing || ""
    };
    if (search.name || search.epic) {
      return baseForm;
    }
    if (typeof window !== "undefined") {
      const saved = localStorage.getItem("tnvs_form_data");
      if (saved) {
        try {
          const parsed = JSON.parse(saved);
          return {
            ...baseForm,
            ...parsed
          };
        } catch (e) {
          return baseForm;
        }
      }
    }
    return baseForm;
  });
  const [docs, setDocs] = useState({
    idProof: null,
    shopPhoto: null,
    bizProof: null,
    selfie: null
  });
  const [useWebcam, setUseWebcam] = useState(false);
  const [webcamCapturing, setWebcamCapturing] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [pin, setPin] = useState("");
  const epicRef = useRef(search.epic || "TN-VS-" + Math.floor(1e7 + Math.random() * 89999999));
  const epic = epicRef.current;
  const upd = (k, v) => setForm({
    ...form,
    [k]: v
  });
  useEffect(() => {
    if (search.name && search.epic) {
      toast.success(language === "ta" ? "தேர்தல் தரவுத்தளத்திலிருந்து விவரங்கள் வெற்றிகரமாக இறக்குமதி செய்யப்பட்டன!" : "Details imported successfully from Voter Database!");
    }
  }, [search.name, search.epic, language]);
  useEffect(() => {
    localStorage.setItem("tnvs_form_data", JSON.stringify(form));
  }, [form]);
  useEffect(() => {
    localStorage.setItem("tnvs_form_step", step.toString());
  }, [step]);
  const clearDraft = () => {
    if (window.confirm(language === "ta" ? "உங்கள் படிவத் தகவல்களை நீக்க விரும்புகிறீர்களா?" : "Are you sure you want to clear your registration draft?")) {
      localStorage.removeItem("tnvs_form_data");
      localStorage.removeItem("tnvs_form_step");
      setForm({
        name: "",
        mobile: "",
        email: "",
        district: "Chennai",
        shop: "",
        type: "Retail",
        address: "",
        years: "",
        wing: ""
      });
      setDocs({
        idProof: null,
        shopPhoto: null,
        bizProof: null,
        selfie: null
      });
      setStep(1);
      toast.success(language === "ta" ? "படிவம் மீட்டமைக்கப்பட்டது" : "Form draft reset successfully");
    }
  };
  const validate = () => {
    if (step === 1) {
      if (!form.name.trim()) {
        toast.error(language === "ta" ? "உங்கள் முழுப் பெயரை உள்ளிடவும்" : "Enter your full name");
        return false;
      }
      if (!/^\d{10}$/.test(form.mobile.replace(/\D/g, "").slice(-10))) {
        toast.error(language === "ta" ? "சரியான 10-இலக்க மொபைல் எண்ணை உள்ளிடவும்" : "Enter valid 10-digit mobile");
        return false;
      }
      if (!form.email.includes("@")) {
        toast.error(language === "ta" ? "சரியான மின்னஞ்சல் முகவரியை உள்ளிடவும்" : "Enter valid email");
        return false;
      }
    }
    if (step === 2) {
      if (!form.shop.trim()) {
        toast.error(language === "ta" ? "வணிகப் பெயரை உள்ளிடவும்" : "Enter shop/business name");
        return false;
      }
      if (!form.wing) {
        toast.error(language === "ta" ? "தயவுசெய்து வணிகப் பிரிவைத் தேர்ந்தெடுக்கவும்" : "Please select your business wing");
        return false;
      }
    }
    if (step === 3) {
      const missing = [!docs.idProof && (language === "ta" ? "அடையாள ஆவணம்" : "Aadhaar / Voter ID"), !docs.shopPhoto && (language === "ta" ? "கடை புகைப்படம்" : "Shop Front Photo"), !docs.bizProof && (language === "ta" ? "வணிக சான்று" : "Business Proof"), !docs.selfie && (language === "ta" ? "பாஸ்போர்ட் புகைப்படம்" : "Passport Photo")].filter(Boolean);
      if (missing.length) {
        toast.error(`${language === "ta" ? "ஆவணங்களைப் பதிவேற்றவும்: " : "Please upload: "}${missing.join(", ")}`);
        return false;
      }
    }
    return true;
  };
  const next = () => {
    if (validate()) setStep((s) => Math.min(5, s + 1));
  };
  const back = () => setStep((s) => Math.max(1, s - 1));
  const handlePaySubmit = async () => {
    if (!validate()) return;
    if (pin.length !== 4) {
      toast.error(language === "ta" ? "தயவுசெய்து 4-இலக்க பாதுகாப்பு PIN ஐ உள்ளிடவும்" : "Please create a valid 4-digit security PIN");
      return;
    }
    setSubmitting(true);
    await new Promise((r) => setTimeout(r, 2e3));
    setSubmitting(false);
    localStorage.setItem("tnvs_last_epic", epic);
    localStorage.removeItem("tnvs_form_data");
    localStorage.removeItem("tnvs_form_step");
    setStep(5);
  };
  const downloadCertificate = () => {
    const W = 900, H = 700;
    const canvas = document.createElement("canvas");
    canvas.width = W;
    canvas.height = H;
    const ctx = canvas.getContext("2d");
    const draw = () => {
      ctx.fillStyle = "#1e3a8a";
      ctx.fillRect(0, 0, W, H);
      ctx.fillStyle = "#fff";
      ctx.fillRect(16, 16, W - 32, H - 32);
      ctx.fillStyle = "#ebdca5";
      ctx.fillRect(16, 16, W - 32, 8);
      ctx.fillStyle = "#1e3a8a";
      ctx.textAlign = "center";
      ctx.font = "bold 24px Georgia, serif";
      ctx.fillText("TAMILNADU VANIGARGALIN SANGAMAM", W / 2, 60);
      ctx.fillStyle = "#d4b26f";
      ctx.font = "bold 15px Georgia, serif";
      ctx.fillText("MEMBERSHIP CERTIFICATE", W / 2, 90);
      ctx.fillStyle = "#333";
      ctx.font = "italic 16px Georgia, serif";
      ctx.fillText("This is to certify that", W / 2, 140);
      ctx.fillStyle = "#1e3a8a";
      ctx.font = "bold 26px Georgia, serif";
      ctx.fillText(form.name.toUpperCase(), W / 2, 185);
      ctx.fillStyle = "#333";
      ctx.font = "italic 15px Georgia, serif";
      ctx.fillText("is officially enrolled as an esteemed member of", W / 2, 230);
      ctx.fillText("Tamilnadu Vanigargalin Sangamam.", W / 2, 252);
      ctx.strokeStyle = "#e2e8f0";
      ctx.lineWidth = 1.5;
      ctx.strokeRect(100, 290, W - 200, 200);
      ctx.textAlign = "left";
      ctx.fillStyle = "#555";
      ctx.font = "15px Georgia, serif";
      ctx.fillText("Membership ID / EPIC:", 120, 330);
      ctx.fillStyle = "#1e3a8a";
      ctx.font = "bold 16px monospace";
      ctx.fillText(epic, 310, 330);
      ctx.fillStyle = "#555";
      ctx.font = "15px Georgia, serif";
      ctx.fillText("District / Location:", 120, 370);
      ctx.fillStyle = "#1e3a8a";
      ctx.font = "bold 15px Georgia, serif";
      ctx.fillText(form.district, 310, 370);
      const wingData = WINGS.find((w) => w.id === form.wing);
      if (wingData) {
        ctx.fillStyle = "#555";
        ctx.font = "15px Georgia, serif";
        ctx.fillText("Business Division / Wing:", 120, 410);
        ctx.fillStyle = "#1e3a8a";
        ctx.font = "bold 14px Georgia, serif";
        ctx.fillText(wingData.nameEn, 310, 410);
      }
      if (form.shop) {
        ctx.fillStyle = "#555";
        ctx.font = "15px Georgia, serif";
        ctx.fillText("Shop / Business Name:", 120, 450);
        ctx.fillStyle = "#1e3a8a";
        ctx.font = "bold 15px Georgia, serif";
        ctx.fillText(form.shop, 310, 450);
      }
      ctx.textAlign = "center";
      ctx.fillStyle = "#666";
      ctx.font = "13px Georgia, serif";
      const date = (/* @__PURE__ */ new Date()).toLocaleDateString("en-IN", {
        year: "numeric",
        month: "long",
        day: "numeric"
      });
      ctx.fillText("Issued on: " + date, W / 2, 530);
      ctx.strokeStyle = "#1e3a8a";
      ctx.lineWidth = 1;
      ctx.beginPath();
      ctx.moveTo(W / 2 - 80, 545);
      ctx.lineTo(W / 2 + 80, 545);
      ctx.stroke();
      ctx.fillStyle = "#1e3a8a";
      ctx.font = "bold 12px Georgia, serif";
      ctx.textAlign = "center";
      ctx.fillText("SENTHIL KUMAR N", W / 2, 570);
      ctx.fillStyle = "#555";
      ctx.font = "11px Georgia, serif";
      ctx.fillText("Founder & State President", W / 2, 586);
      ctx.fillText("Tamilnadu Vanigargalin Sangamam", W / 2, 601);
      ctx.fillText("No 5/79, Saidapet, Chennai - 600015", W / 2, 617);
      const link = document.createElement("a");
      link.download = "membership-certificate-" + epic + ".png";
      link.href = canvas.toDataURL("image/png");
      link.click();
    };
    const imgLeft = new Image();
    imgLeft.src = ownerPhoto;
    const imgRight = new Image();
    imgRight.src = orgLogo;
    const imgSign = new Image();
    imgSign.src = signImg;
    let loaded = 0;
    const totalImgs = 3;
    const onLoad = () => {
      loaded++;
      if (loaded === totalImgs) {
        draw();
        const ph = 72, pw = 72;
        ctx.save();
        ctx.beginPath();
        ctx.arc(45 + pw / 2, 40 + ph / 2, ph / 2, 0, Math.PI * 2);
        ctx.clip();
        ctx.drawImage(imgLeft, 45, 40, pw, ph);
        ctx.restore();
        ctx.strokeStyle = "rgba(30,58,138,0.2)";
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.arc(45 + pw / 2, 40 + ph / 2, ph / 2, 0, Math.PI * 2);
        ctx.stroke();
        ctx.drawImage(imgRight, W - 45 - pw, 40, pw, ph);
        const sw = 110, sh = 44;
        ctx.drawImage(imgSign, W / 2 - sw / 2, 545 - sh - 3, sw, sh);
        ctx.fillStyle = "#1e3a8a";
        ctx.font = "bold 12px Georgia, serif";
        ctx.textAlign = "center";
        ctx.fillText("SENTHIL KUMAR N", W / 2, 570);
        ctx.fillStyle = "#555";
        ctx.font = "11px Georgia, serif";
        ctx.fillText("Founder & State President", W / 2, 586);
        ctx.fillText("Tamilnadu Vanigargalin Sangamam", W / 2, 601);
        const link2 = document.createElement("a");
        link2.download = "membership-certificate-" + epic + ".png";
        link2.href = canvas.toDataURL("image/png");
        link2.click();
      }
    };
    imgLeft.onload = onLoad;
    imgRight.onload = onLoad;
    imgSign.onload = onLoad;
    imgLeft.onerror = imgRight.onerror = imgSign.onerror = () => {
      loaded++;
      if (loaded === totalImgs) draw();
    };
  };
  const handleSelfieSimulate = () => {
    setWebcamCapturing(true);
    setTimeout(() => {
      setDocs((prev) => ({
        ...prev,
        selfie: "Selfie Image (Captured Live via Webcam Scanner)"
      }));
      setWebcamCapturing(false);
      setUseWebcam(false);
      toast.success(language === "ta" ? "புகைப்படம் வெற்றிகரமாக எடுக்கப்பட்டது ✓" : "Selfie captured successfully ✓");
    }, 1800);
  };
  return /* @__PURE__ */ jsxs("div", { className: "min-h-screen", children: [
    /* @__PURE__ */ jsx("section", { className: "border-b border-slate-200/60 bg-white shadow-xs", children: /* @__PURE__ */ jsxs("div", { className: "max-w-5xl mx-auto px-4 py-8 md:py-10 flex flex-col md:flex-row md:items-center justify-between gap-4", children: [
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("div", { className: "mb-2", children: /* @__PURE__ */ jsxs(Link, { to: "/services", className: "inline-flex items-center gap-1.5 text-xs font-semibold text-primary hover:underline transition-all", children: [
          /* @__PURE__ */ jsx(ArrowLeft, { className: "w-3.5 h-3.5" }),
          " ",
          t("சேவைகளுக்குத் திரும்பு", "Back to Services")
        ] }) }),
        /* @__PURE__ */ jsx("div", { className: "text-xs font-semibold uppercase tracking-[0.18em] text-primary", children: "Apply · இணைய" }),
        /* @__PURE__ */ jsx("h1", { className: "mt-1 font-display text-2xl md:text-3xl font-bold text-slate-900 leading-tight", children: "Member Registration" }),
        /* @__PURE__ */ jsx("p", { className: "font-tamil text-xs md:text-sm text-slate-500 mt-0.5", children: "5 நிமிடத்தில் உறுப்பினராக பதிவு செய்யுங்கள்." })
      ] }),
      step < 5 && /* @__PURE__ */ jsxs("button", { onClick: clearDraft, className: "inline-flex items-center gap-1.5 self-start md:self-center border border-slate-200 bg-white hover:bg-slate-50 text-slate-600 px-3 py-1.5 rounded-lg text-xs font-semibold transition cursor-pointer min-h-[38px]", children: [
        /* @__PURE__ */ jsx(RefreshCw, { className: "w-3.5 h-3.5 text-slate-400" }),
        language === "ta" ? "படிவத்தை மீட்டமை" : "Reset Draft"
      ] })
    ] }) }),
    /* @__PURE__ */ jsxs("div", { className: "max-w-5xl mx-auto px-4 py-10", children: [
      /* @__PURE__ */ jsx("div", { className: "mb-10 bg-white rounded-2xl border border-slate-200/60 p-4 md:p-5 shadow-xs", children: /* @__PURE__ */ jsxs("div", { className: "relative flex items-center justify-between overflow-x-auto pb-2 gap-4", children: [
        /* @__PURE__ */ jsx("div", { className: "absolute top-1/2 left-0 right-0 h-0.5 bg-slate-100 -translate-y-1/2 hidden md:block" }),
        STEPS.map((s, i) => {
          const done = step > s.n, active = step === s.n;
          return /* @__PURE__ */ jsx("div", { className: "flex items-center shrink-0 relative z-10", children: /* @__PURE__ */ jsxs("div", { className: "flex flex-col items-center min-w-[72px]", children: [
            /* @__PURE__ */ jsx("div", { className: `w-10 h-10 rounded-full grid place-items-center text-sm font-semibold border-2 transition duration-300 ${done ? "bg-primary text-white border-primary shadow-xs" : active ? "border-primary text-primary bg-white shadow-md ring-4 ring-primary/5" : "border-slate-200 text-slate-400 bg-white"}`, children: done ? /* @__PURE__ */ jsx(Check, { className: "w-4 h-4" }) : s.n }),
            /* @__PURE__ */ jsx("div", { className: `mt-1.5 text-xs font-semibold ${active ? "text-primary" : "text-slate-500"}`, children: s.t }),
            /* @__PURE__ */ jsx("div", { className: `text-xs font-tamil mt-0.5 ${active ? "text-primary/80" : "text-slate-400"}`, children: s.ta })
          ] }) }, s.n);
        })
      ] }) }),
      /* @__PURE__ */ jsxs("div", { className: "bg-white rounded-2xl border border-slate-200/80 p-5 md:p-10 shadow-sm min-h-[460px] flex flex-col justify-between", children: [
        /* @__PURE__ */ jsx(AnimatePresence, { mode: "wait", children: /* @__PURE__ */ jsxs(motion.div, { initial: {
          opacity: 0,
          y: 10
        }, animate: {
          opacity: 1,
          y: 0
        }, exit: {
          opacity: 0,
          y: -10
        }, transition: {
          duration: 0.2
        }, children: [
          step === 1 && /* @__PURE__ */ jsxs(Form, { title: "Personal Details", ta: "தனிநபர் தகவல்கள்", children: [
            /* @__PURE__ */ jsx(FloatingInput, { label: "Full Name / பெயர்", value: form.name, onChange: (e) => upd("name", e.target.value), autoComplete: "name" }),
            /* @__PURE__ */ jsx(FloatingInput, { label: "Mobile / கைபேசி", value: form.mobile, onChange: (e) => upd("mobile", e.target.value), inputMode: "numeric", maxLength: 10 }),
            /* @__PURE__ */ jsx(FloatingInput, { label: "Email / மின்னஞ்சல்", type: "email", value: form.email, onChange: (e) => upd("email", e.target.value), autoComplete: "email" }),
            /* @__PURE__ */ jsx(FloatingSelect, { label: "District / மாவட்டம்", value: form.district, onChange: (e) => upd("district", e.target.value), children: DISTRICTS.map((d) => /* @__PURE__ */ jsx("option", { value: d.en, children: language === "ta" ? `${d.ta} / ${d.en}` : `${d.en} / ${d.ta}` }, d.en)) })
          ] }),
          step === 2 && /* @__PURE__ */ jsxs(Form, { title: "Business Details", ta: "வணிக விவரங்கள்", children: [
            /* @__PURE__ */ jsx(FloatingInput, { label: "Shop / Business Name (கடை பெயர்)", value: form.shop, onChange: (e) => upd("shop", e.target.value) }),
            /* @__PURE__ */ jsx(FloatingSelect, { label: "Business Type / வகை", value: form.type, onChange: (e) => upd("type", e.target.value), children: ["Retail", "Wholesale", "Manufacturing", "Service", "Online"].map((d) => /* @__PURE__ */ jsx("option", { children: d }, d)) }),
            /* @__PURE__ */ jsxs(FloatingSelect, { label: "Wing / பிரிவு", value: form.wing, onChange: (e) => upd("wing", e.target.value), children: [
              /* @__PURE__ */ jsx("option", { value: "", children: "-- Select Wing / பிரிவு --" }),
              WING_CATEGORIES.map((category) => /* @__PURE__ */ jsx("optgroup", { label: language === "ta" ? category.nameTa : category.nameEn, children: WINGS.filter((w) => category.wings.includes(w.id)).map((w) => /* @__PURE__ */ jsx("option", { value: w.id, children: language === "ta" ? w.nameTa : w.nameEn }, w.id)) }, category.id))
            ] }),
            /* @__PURE__ */ jsx(FloatingInput, { label: "Years in Business (அனுபவம்)", value: form.years, onChange: (e) => upd("years", e.target.value), inputMode: "numeric" }),
            /* @__PURE__ */ jsx("div", { className: "md:col-span-2", children: /* @__PURE__ */ jsx(FloatingTextarea, { label: "Shop Address / முகவரி", value: form.address, onChange: (e) => upd("address", e.target.value), rows: 3 }) })
          ] }),
          step === 3 && /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("h2", { className: "font-display text-2xl font-bold text-slate-800", children: "Upload Documents" }),
            /* @__PURE__ */ jsx("p", { className: "font-tamil text-xs md:text-sm text-slate-500 mb-6", children: "ஆவணங்களை பதிவேற்றவும்" }),
            /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-5", children: [
              /* @__PURE__ */ jsxs("div", { className: "col-span-full border border-slate-200/80 rounded-2xl p-5 bg-slate-50/50 flex flex-col md:flex-row gap-5 items-center", children: [
                /* @__PURE__ */ jsx("div", { className: "w-24 h-24 rounded-full bg-slate-100 border border-slate-200 flex items-center justify-center text-slate-400 shrink-0 relative overflow-hidden", children: docs.selfie ? /* @__PURE__ */ jsxs("div", { className: "absolute inset-0 bg-emerald-50 flex flex-col items-center justify-center text-emerald-800", children: [
                  /* @__PURE__ */ jsx(Check, { className: "w-7 h-7" }),
                  /* @__PURE__ */ jsx("span", { className: "text-xs font-semibold mt-1", children: "Photo Added" })
                ] }) : /* @__PURE__ */ jsx(Camera, { className: "w-8 h-8" }) }),
                /* @__PURE__ */ jsxs("div", { className: "flex-1 space-y-2 text-center md:text-left", children: [
                  /* @__PURE__ */ jsx("div", { className: "font-semibold text-sm text-slate-800", children: "Owner Passport Size Photo" }),
                  /* @__PURE__ */ jsx("p", { className: "text-xs text-slate-500 leading-relaxed font-tamil", children: "நேரடியாக வெப்கேம் மூலம் புகைப்படம் எடுக்கலாம் அல்லது கோப்பாக பதிவேற்றலாம்." }),
                  /* @__PURE__ */ jsxs("div", { className: "flex flex-wrap gap-2 pt-1 justify-center md:justify-start", children: [
                    /* @__PURE__ */ jsxs("button", { type: "button", onClick: () => {
                      setUseWebcam(true);
                    }, className: "inline-flex items-center gap-1.5 bg-primary/10 text-primary hover:bg-primary/20 px-3.5 py-2 rounded-lg text-xs font-semibold transition cursor-pointer min-h-[38px]", children: [
                      /* @__PURE__ */ jsx(Camera, { className: "w-3.5 h-3.5" }),
                      language === "ta" ? "கேமரா மூலம் எடு" : "Capture with Webcam"
                    ] }),
                    /* @__PURE__ */ jsxs("label", { className: "inline-flex items-center gap-1.5 border border-slate-200 bg-white hover:bg-slate-50 text-slate-700 px-3.5 py-2 rounded-lg text-xs font-semibold transition cursor-pointer min-h-[38px]", children: [
                      /* @__PURE__ */ jsx(Upload, { className: "w-3.5 h-3.5 text-slate-400" }),
                      language === "ta" ? "கோப்பைத் தேர்ந்தெடு" : "Upload File",
                      /* @__PURE__ */ jsx("input", { type: "file", accept: "image/jpeg,image/png,image/webp", className: "hidden", onChange: (e) => {
                        const file = e.target.files?.[0];
                        if (!file) return;
                        if (file.size > 5 * 1024 * 1024) {
                          toast.error("Photo must be under 5MB");
                          return;
                        }
                        const allowed = ["image/jpeg", "image/png", "image/webp"];
                        if (!allowed.includes(file.type)) {
                          toast.error("Please upload a JPG, PNG or WebP image");
                          return;
                        }
                        setDocs((prev) => ({
                          ...prev,
                          selfie: file
                        }));
                        toast.success("Passport photo uploaded ✓");
                      } })
                    ] })
                  ] })
                ] })
              ] }),
              useWebcam && /* @__PURE__ */ jsx("div", { className: "fixed inset-0 z-100 bg-slate-900/80 backdrop-blur-sm grid place-items-center p-4", children: /* @__PURE__ */ jsxs("div", { className: "bg-white rounded-2xl p-5 max-w-sm w-full text-center space-y-4 shadow-xl border border-slate-100", children: [
                /* @__PURE__ */ jsxs("div", { className: "flex justify-between items-center pb-2 border-b border-slate-100", children: [
                  /* @__PURE__ */ jsx("span", { className: "font-bold text-sm text-slate-800", children: "Selfie Camera Scanner" }),
                  /* @__PURE__ */ jsx("button", { onClick: () => setUseWebcam(false), className: "text-slate-400 hover:text-slate-600 text-xs font-semibold", children: "✕ Close" })
                ] }),
                /* @__PURE__ */ jsxs("div", { className: "aspect-square bg-slate-950 rounded-xl relative overflow-hidden flex items-center justify-center", children: [
                  /* @__PURE__ */ jsx("div", { className: "w-40 h-40 rounded-full border-4 border-dashed border-primary/60 animate-pulse absolute" }),
                  /* @__PURE__ */ jsx("div", { className: "absolute top-1/2 left-0 right-0 h-0.5 bg-primary/40 -translate-y-1/2 animate-bounce" }),
                  webcamCapturing ? /* @__PURE__ */ jsxs("div", { className: "text-white text-xs space-y-2", children: [
                    /* @__PURE__ */ jsx(Loader2, { className: "w-6 h-6 animate-spin mx-auto text-primary" }),
                    /* @__PURE__ */ jsx("span", { children: "Scanning Face..." })
                  ] }) : /* @__PURE__ */ jsx("span", { className: "text-slate-500 text-xs", children: "Position your face inside the circle" })
                ] }),
                /* @__PURE__ */ jsx("p", { className: "text-xs text-slate-500", children: "Align your face inside the scanning circle" }),
                /* @__PURE__ */ jsxs("button", { type: "button", onClick: handleSelfieSimulate, disabled: webcamCapturing, className: "w-full inline-flex justify-center items-center gap-1.5 bg-primary text-white hover:bg-primary/90 px-4 py-3 rounded-xl text-sm font-semibold transition", children: [
                  webcamCapturing ? /* @__PURE__ */ jsx(Loader2, { className: "w-4 h-4 animate-spin" }) : /* @__PURE__ */ jsx(Camera, { className: "w-4 h-4" }),
                  "Capture Photo"
                ] })
              ] }) }),
              [{
                k: "idProof",
                l: "Aadhaar / Voter ID Document",
                ta: "அடையாள ஆவணம்",
                accept: "image/*,application/pdf"
              }, {
                k: "shopPhoto",
                l: "Shop Front Photo Document",
                ta: "கடை புகைப்படம்",
                accept: "image/*"
              }, {
                k: "bizProof",
                l: "Business Proof (GST / License)",
                ta: "வணிக சான்று",
                accept: "image/*,application/pdf"
              }].map((d) => /* @__PURE__ */ jsxs("div", { className: "border-2 border-dashed border-slate-200 hover:border-primary/50 rounded-2xl p-6 text-center hover:bg-slate-50/50 transition cursor-pointer relative group flex flex-col items-center justify-center gap-3 min-h-[140px]", onDragOver: (e) => {
                e.preventDefault();
              }, onDrop: (e) => {
                e.preventDefault();
                const file = e.dataTransfer.files?.[0];
                if (file) {
                  setDocs((prev) => ({
                    ...prev,
                    [d.k]: file
                  }));
                  toast.success(`${file.name} uploaded ✓`);
                }
              }, children: [
                /* @__PURE__ */ jsx("div", { className: "w-12 h-12 rounded-full bg-primary/5 text-primary flex items-center justify-center group-hover:scale-110 transition duration-300", children: /* @__PURE__ */ jsx(Upload, { className: "w-5 h-5" }) }),
                /* @__PURE__ */ jsxs("div", { children: [
                  /* @__PURE__ */ jsx("div", { className: "font-semibold text-sm text-slate-800", children: d.l }),
                  /* @__PURE__ */ jsx("div", { className: "font-tamil text-xs text-slate-400 mt-0.5", children: d.ta })
                ] }),
                docs[d.k] ? /* @__PURE__ */ jsxs("div", { className: "text-xs text-emerald-800 bg-emerald-50 px-3 py-1 rounded-full font-medium flex items-center gap-1 border border-emerald-100", children: [
                  /* @__PURE__ */ jsx(Check, { className: "w-3.5 h-3.5" }),
                  " ",
                  docs[d.k].name
                ] }) : /* @__PURE__ */ jsxs("div", { className: "text-xs text-slate-400 font-medium", children: [
                  "Drag & drop or ",
                  /* @__PURE__ */ jsx("span", { className: "text-primary hover:underline font-semibold", children: "browse" })
                ] }),
                /* @__PURE__ */ jsx("input", { type: "file", accept: d.accept, className: "absolute inset-0 w-full h-full opacity-0 cursor-pointer", onChange: (e) => {
                  const file = e.target.files?.[0];
                  if (!file) return;
                  if (file.size > 5 * 1024 * 1024) {
                    toast.error("File must be under 5MB");
                    return;
                  }
                  setDocs((prev) => ({
                    ...prev,
                    [d.k]: file
                  }));
                  toast.success(`${file.name} uploaded ✓`);
                } })
              ] }, d.k))
            ] })
          ] }),
          step === 4 && /* @__PURE__ */ jsxs(Form, { title: "Review Details", ta: "விவரங்களை சரிபார்க்கவும்", children: [
            /* @__PURE__ */ jsx("div", { className: "col-span-full grid md:grid-cols-2 gap-4 bg-slate-50/50 rounded-2xl p-5 border border-slate-200/80", children: [["Full Name (பெயர்)", form.name || "—"], ["Mobile (கைபேசி)", form.mobile || "—"], ["Email (மின்னஞ்சல்)", form.email || "—"], ["District (மாவட்டம்)", form.district], ["Shop / Business Name", form.shop || "—"], ["Business Type", form.type], ["Wing / பிரிவு", WINGS.find((w) => w.id === form.wing)?.[language === "ta" ? "nameTa" : "nameEn"] || "—"], ["Years in Business", form.years || "—"], ["Shop Address", form.address || "—"]].map(([k, v]) => /* @__PURE__ */ jsxs("div", { className: "bg-white p-4 rounded-xl border border-slate-100 shadow-xs", children: [
              /* @__PURE__ */ jsx("div", { className: "text-xs font-bold uppercase tracking-wider text-slate-400", children: k }),
              /* @__PURE__ */ jsx("div", { className: "mt-1 text-xs md:text-sm text-slate-800 font-semibold break-all", children: v })
            ] }, k)) }),
            /* @__PURE__ */ jsx("div", { className: "col-span-full border-t border-slate-100 pt-6 mt-4", children: /* @__PURE__ */ jsxs("div", { className: "max-w-xs mx-auto text-center space-y-3", children: [
              /* @__PURE__ */ jsx("label", { className: "block text-xs font-bold uppercase tracking-wider text-slate-500", children: language === "ta" ? "பாதுகாப்பு PIN குறியீட்டை உருவாக்கவும் (4 இலக்கங்கள்)" : "Create Security PIN (4 Digits) *" }),
              /* @__PURE__ */ jsx("p", { className: "text-[11px] text-slate-400 leading-normal font-tamil", children: language === "ta" ? "உறுப்பினர் அட்டை மற்றும் தகவல்களைப் பாதுகாக்க 4-இலக்க PIN ஐ உள்ளிடவும்." : "Set a 4-digit PIN to secure your digital membership card." }),
              /* @__PURE__ */ jsxs("div", { className: "relative inline-block w-48 mt-2", children: [
                /* @__PURE__ */ jsx("input", { type: "text", pattern: "[0-9]*", maxLength: 4, value: pin, onChange: (e) => {
                  const val = e.target.value.replace(/\D/g, "");
                  setPin(val);
                }, className: "absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10", autoComplete: "one-time-code" }),
                /* @__PURE__ */ jsx("div", { className: "flex justify-between gap-3", children: [0, 1, 2, 3].map((index) => {
                  const char = pin[index] || "";
                  const isFocused = pin.length === index;
                  return /* @__PURE__ */ jsx("div", { className: `w-10 h-12 rounded-xl border text-lg font-bold flex items-center justify-center transition-all duration-200 ${isFocused ? "border-primary ring-4 ring-primary/10 scale-105" : char ? "border-emerald-300 bg-emerald-50/30 text-emerald-900" : "border-slate-200 bg-slate-50/50 text-slate-400"}`, children: char ? "•" : "" }, index);
                }) })
              ] })
            ] }) }),
            /* @__PURE__ */ jsxs("div", { className: "col-span-full mt-4 bg-linear-to-br from-emerald-50 to-teal-50 border border-emerald-100 rounded-2xl p-5 shadow-xs", children: [
              /* @__PURE__ */ jsxs("div", { className: "flex justify-between items-baseline", children: [
                /* @__PURE__ */ jsx("span", { className: "font-semibold text-emerald-800 text-sm", children: "Annual Membership Fee" }),
                /* @__PURE__ */ jsx("span", { className: "font-display text-2xl font-bold text-emerald-950", children: "₹ 500" })
              ] }),
              /* @__PURE__ */ jsx("div", { className: "text-xs text-emerald-600/90 mt-1", children: "Secure payment via UPI / Netbanking / Credit Card" }),
              /* @__PURE__ */ jsx("div", { className: "mt-3 p-3 bg-amber-50 border border-amber-100 rounded-xl text-xs text-amber-700", children: '⚠️ UPI integration is in progress. Clicking "Pay ₹500 & Submit" will complete your application in preview mode — no real charge is processed yet.' })
            ] })
          ] }),
          step === 5 && /* @__PURE__ */ jsxs("div", { className: "text-center py-6 max-w-lg mx-auto", children: [
            /* @__PURE__ */ jsx("div", { className: "w-20 h-20 rounded-full bg-emerald-50 text-emerald-800 border border-emerald-100 grid place-items-center mx-auto shadow-sm", children: /* @__PURE__ */ jsx(Check, { className: "w-10 h-10" }) }),
            /* @__PURE__ */ jsx("h2", { className: "mt-6 font-display text-2xl md:text-3xl font-bold text-slate-800 leading-tight", children: "Welcome aboard!" }),
            /* @__PURE__ */ jsx("p", { className: "font-tamil text-xs md:text-sm text-slate-500 mt-1", children: "உறுப்பினராக பதிவு வெற்றிகரமாக முடிந்தது." }),
            /* @__PURE__ */ jsxs("div", { className: "mt-8 bg-white/80 border border-slate-200/80 rounded-2xl p-6 text-left shadow-sm relative overflow-hidden", children: [
              /* @__PURE__ */ jsx("div", { className: "absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full translate-x-1/3 -translate-y-1/3" }),
              /* @__PURE__ */ jsx("div", { className: "text-xs uppercase font-bold tracking-wider text-slate-400", children: "Your Official EPIC ID" }),
              /* @__PURE__ */ jsx("div", { className: "font-mono text-2xl font-bold text-primary tracking-wider mt-1", children: epic }),
              /* @__PURE__ */ jsxs("div", { className: "border-t border-slate-100 mt-4 pt-4 space-y-2", children: [
                /* @__PURE__ */ jsxs("div", { className: "text-xs text-slate-500 flex justify-between", children: [
                  "Name: ",
                  /* @__PURE__ */ jsx("span", { className: "text-slate-800 font-semibold", children: form.name || "Member" })
                ] }),
                /* @__PURE__ */ jsxs("div", { className: "text-xs text-slate-500 flex justify-between", children: [
                  "District: ",
                  /* @__PURE__ */ jsx("span", { className: "text-slate-800 font-semibold", children: form.district })
                ] })
              ] })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "mt-8 flex justify-center gap-3 flex-wrap", children: [
              /* @__PURE__ */ jsxs("button", { onClick: downloadCertificate, className: "inline-flex items-center gap-2 bg-primary text-white hover:bg-primary/95 px-5 py-3.5 rounded-xl text-xs font-semibold shadow-md active:scale-95 transition cursor-pointer min-h-[44px]", children: [
                /* @__PURE__ */ jsx(Download, { className: "w-4 h-4" }),
                " Download Certificate"
              ] }),
              /* @__PURE__ */ jsxs(Link, { to: "/dashboard", className: "inline-flex items-center gap-2 border border-slate-200 bg-white text-slate-700 hover:bg-slate-50 px-5 py-3.5 rounded-xl text-xs font-semibold shadow-sm active:scale-95 transition cursor-pointer min-h-[44px]", children: [
                /* @__PURE__ */ jsx(FileCheck, { className: "w-4 h-4" }),
                " Go to Dashboard"
              ] })
            ] })
          ] })
        ] }, step) }),
        step < 5 && /* @__PURE__ */ jsxs("div", { className: "mt-10 pt-6 border-t border-slate-100 flex justify-between", children: [
          /* @__PURE__ */ jsxs("button", { onClick: back, disabled: step === 1 || submitting, className: "inline-flex items-center gap-1.5 px-4 py-2.5 text-xs font-semibold text-slate-500 hover:text-slate-800 disabled:opacity-40 min-h-[44px] cursor-pointer", children: [
            /* @__PURE__ */ jsx(ArrowLeft, { className: "w-4 h-4" }),
            " Back"
          ] }),
          /* @__PURE__ */ jsx("button", { onClick: step === 4 ? handlePaySubmit : next, disabled: submitting, className: "inline-flex items-center gap-2 bg-primary text-white hover:bg-primary/95 px-6 py-2.5 rounded-xl text-xs font-semibold active:scale-95 transition min-h-[44px] cursor-pointer shadow-sm", children: submitting ? /* @__PURE__ */ jsxs(Fragment, { children: [
            /* @__PURE__ */ jsx(Loader2, { className: "w-4 h-4 animate-spin" }),
            " Processing…"
          ] }) : step === 4 ? /* @__PURE__ */ jsxs(Fragment, { children: [
            "Pay ₹500 & Submit ",
            /* @__PURE__ */ jsx(ArrowRight, { className: "w-4 h-4" })
          ] }) : /* @__PURE__ */ jsxs(Fragment, { children: [
            "Continue ",
            /* @__PURE__ */ jsx(ArrowRight, { className: "w-4 h-4" })
          ] }) })
        ] })
      ] })
    ] })
  ] });
}
function Form({
  title,
  ta,
  children
}) {
  return /* @__PURE__ */ jsxs("div", { className: "space-y-4", children: [
    /* @__PURE__ */ jsxs("div", { children: [
      /* @__PURE__ */ jsx("h2", { className: "font-display text-2xl font-bold text-slate-800", children: title }),
      /* @__PURE__ */ jsx("p", { className: "font-tamil text-xs md:text-sm text-slate-500", children: ta })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "grid md:grid-cols-2 gap-5 pt-3", children })
  ] });
}
export {
  Membership as component
};
