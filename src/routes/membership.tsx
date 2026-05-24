import { createFileRoute, Link } from "@tanstack/react-router";
import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Check, ArrowLeft, ArrowRight, Download, FileCheck, Loader2, Upload, Camera, AlertCircle, RefreshCw } from "lucide-react";
import { toast } from "sonner";
import { useLanguage } from "@/hooks/useLanguage";
import ownerPhoto from "@/assets/349b584e-1b60-469e-9e5d-8d124cb057cb.png";
import orgLogo from "@/assets/ChatGPT Image Mar 25, 2026, 05_31_25 PM (1).png";
import signImg from "@/assets/8bb61dfb-f349-4e0b-8501-560feae9f000.png";
import { FloatingInput, FloatingTextarea, FloatingSelect } from "@/components/FloatingInput";
import { z } from "zod";
import { WINGS } from "@/data/wings";

const membershipSearchSchema = z.object({
  wing: z.string().optional(),
  name: z.string().optional(),
  epic: z.string().optional(),
  mobile: z.string().optional(),
  district: z.string().optional(),
  assembly: z.string().optional(),
  address: z.string().optional(),
});

export const Route = createFileRoute("/membership")({
  validateSearch: (search) => membershipSearchSchema.parse(search),
  head: () => ({
    meta: [
      { title: "Apply for Membership · TN Vanigargalin Sangamam" },
      { name: "description", content: "Apply online for Tamil Nadu Vanigargalin Sangamam membership in 5 minutes." },
    ],
  }),
  component: Membership,
});

const STEPS = [
  { n: 1, t: "Personal",   ta: "தனிநபர்" },
  { n: 2, t: "Business",   ta: "வணிகம்" },
  { n: 3, t: "Documents",  ta: "ஆவணம்" },
  { n: 4, t: "Review",     ta: "சரிபார்" },
  { n: 5, t: "Success",    ta: "சான்று" },
];

const DISTRICTS = [
  { en: "Ariyalur", ta: "அரியலூர்" },
  { en: "Chengalpattu", ta: "செங்கல்பட்டு" },
  { en: "Chennai", ta: "சென்னை" },
  { en: "Coimbatore", ta: "கோயம்புத்தூர்" },
  { en: "Cuddalore", ta: "கடலூர்" },
  { en: "Dharmapuri", ta: "தர்மபுரி" },
  { en: "Dindigul", ta: "திண்டுக்கல்" },
  { en: "Erode", ta: "ஈரோடு" },
  { en: "Kallakurichi", ta: "கள்ளக்குறிச்சி" },
  { en: "Kanchipuram", ta: "காஞ்சிபுரம்" },
  { en: "Kanyakumari", ta: "கன்னியாகுமரி" },
  { en: "Karur", ta: "கரூர்" },
  { en: "Krishnagiri", ta: "கிருஷ்ணகிரி" },
  { en: "Madurai", ta: "மதுரை" },
  { en: "Mayiladuthurai", ta: "மயிலாடுதுறை" },
  { en: "Nagapattinam", ta: "நாகப்பட்டினம்" },
  { en: "Namakkal", ta: "நாமக்கல்" },
  { en: "Nilgiris", ta: "நீலகிரி" },
  { en: "Perambalur", ta: "பெரம்பலூர்" },
  { en: "Pudukkottai", ta: "புதுக்கோட்டை" },
  { en: "Ramanathapuram", ta: "இராமநாதபுரம்" },
  { en: "Ranipet", ta: "இராணிப்பேட்டை" },
  { en: "Salem", ta: "சேலம்" },
  { en: "Sivaganga", ta: "சிவகங்கை" },
  { en: "Tenkasi", ta: "தென்காசி" },
  { en: "Thanjavur", ta: "தஞ்சாவூர்" },
  { en: "Theni", ta: "தேனி" },
  { en: "Thoothukudi", ta: "தூத்துக்குடி" },
  { en: "Tiruchirappalli", ta: "திருச்சிராப்பள்ளி" },
  { en: "Tirunelveli", ta: "திருநெல்வேலி" },
  { en: "Tirupathur", ta: "திருப்பத்தூர்" },
  { en: "Tiruppur", ta: "திருப்பூர்" },
  { en: "Tiruvallur", ta: "திருவள்ளூர்" },
  { en: "Tiruvannamalai", ta: "திருவண்ணாமலை" },
  { en: "Tiruvarur", ta: "திருவாரூர்" },
  { en: "Vellore", ta: "வேலூர்" },
  { en: "Viluppuram", ta: "விழுப்புரம்" },
  { en: "Virudhunagar", ta: "விருதுநகர்" },
];

const WING_CATEGORIES = [
  {
    id: "professional",
    nameEn: "Professional Services",
    nameTa: "தொழில்முறைப் பிரிவுகள்",
    wings: ["women-entrepreneurs", "chartered-accountants", "doctors", "lawyers", "engineers", "information-technology", "young-entrepreneurs", "media-relations"]
  },
  {
    id: "agricultural",
    nameEn: "Agricultural & Food",
    nameTa: "விவசாயம் மற்றும் உணவுப் பிரிவுகள்",
    wings: ["agriculture", "fishery", "nursery", "forest-timber", "food-restaurants", "fmcg-traders", "dairy-farmers"]
  },
  {
    id: "industrial",
    nameEn: "Industrial & Trade",
    nameTa: "தொழில் மற்றும் வர்த்தகப் பிரிவுகள்",
    wings: ["manufacturers", "real-estate", "infrastructure-builders", "electrical-hardware", "logistics-distributors", "export-import", "textile-weavers", "printing-packaging", "gold-jewellery"]
  },
  {
    id: "public",
    nameEn: "Public & Social Services",
    nameTa: "பொது மற்றும் சமூகப் பிரிவுகள்",
    wings: ["labour", "differently-abled", "pharmacy-druggists", "education-academics", "tourism-travel", "sports-fitness", "handloom-handicrafts", "small-retailers", "hospitality-hoteliers"]
  }
];

function Membership() {
  const { t, language } = useLanguage();
  const search = Route.useSearch();

  // 1. Form Progress Auto-Saving via LocalStorage
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
      wing: search.wing || "",
    };
    if (search.name || search.epic) {
      return baseForm;
    }
    if (typeof window !== "undefined") {
      const saved = localStorage.getItem("tnvs_form_data");
      if (saved) {
        try {
          const parsed = JSON.parse(saved);
          return { ...baseForm, ...parsed };
        } catch (e) {
          return baseForm;
        }
      }
    }
    return baseForm;
  });

  const [docs, setDocs] = useState<Record<string, File | string | null>>({ 
    idProof: null, 
    shopPhoto: null, 
    bizProof: null,
    selfie: null 
  });
  
  const [useWebcam, setUseWebcam] = useState(false);
  const [webcamCapturing, setWebcamCapturing] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [pin, setPin] = useState("");

  const epicRef = useRef(search.epic || "TN-VS-" + Math.floor(10000000 + Math.random() * 89999999));
  const epic = epicRef.current;
  const upd = (k: string, v: string) => setForm({ ...form, [k]: v });

  useEffect(() => {
    if (search.name && search.epic) {
      toast.success(
        language === "ta"
          ? "தேர்தல் தரவுத்தளத்திலிருந்து விவரங்கள் வெற்றிகரமாக இறக்குமதி செய்யப்பட்டன!"
          : "Details imported successfully from Voter Database!"
      );
    }
  }, [search.name, search.epic, language]);

  // Persistence triggers
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
        name: "", mobile: "", email: "", district: "Chennai",
        shop: "", type: "Retail", address: "", years: "", wing: ""
      });
      setDocs({ idProof: null, shopPhoto: null, bizProof: null, selfie: null });
      setStep(1);
      toast.success(language === "ta" ? "படிவம் மீட்டமைக்கப்பட்டது" : "Form draft reset successfully");
    }
  };

  /* ── Validation ── */
  const validate = (): boolean => {
    if (step === 1) {
      if (!form.name.trim()) { 
        toast.error(language === "ta" ? "உங்கள் முழுப் பெயரை உள்ளிடவும்" : "Enter your full name"); 
        return false; 
      }
      if (!/^\d{10}$/.test(form.mobile.replace(/\D/g,"").slice(-10))) { 
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
      const missing = [
        !docs.idProof && (language === "ta" ? "அடையாள ஆவணம்" : "Aadhaar / Voter ID"), 
        !docs.shopPhoto && (language === "ta" ? "கடை புகைப்படம்" : "Shop Front Photo"), 
        !docs.bizProof && (language === "ta" ? "வணிக சான்று" : "Business Proof"),
        !docs.selfie && (language === "ta" ? "பாஸ்போர்ட் புகைப்படம்" : "Passport Photo")
      ].filter(Boolean);
      if (missing.length) { 
        toast.error(`${language === "ta" ? "ஆவணங்களைப் பதிவேற்றவும்: " : "Please upload: "}${missing.join(", ")}`); 
        return false; 
      }
    }
    return true;
  };

  const next = () => { if (validate()) setStep(s => Math.min(5, s + 1)); };
  const back = () => setStep(s => Math.max(1, s - 1));

  const handlePaySubmit = async () => {
    if (!validate()) return;
    if (pin.length !== 4) {
      toast.error(
        language === "ta"
          ? "தயவுசெய்து 4-இலக்க பாதுகாப்பு PIN ஐ உள்ளிடவும்"
          : "Please create a valid 4-digit security PIN"
      );
      return;
    }
    setSubmitting(true);
    await new Promise(r => setTimeout(r, 2000));
    setSubmitting(false);
    localStorage.setItem("tnvs_last_epic", epic);
    
    // Clear draft storage upon success
    localStorage.removeItem("tnvs_form_data");
    localStorage.removeItem("tnvs_form_step");
    setStep(5);
  };

  /* ── Certificate download ── */
  const downloadCertificate = () => {
    const W = 900, H = 700;
    const canvas = document.createElement("canvas");
    canvas.width = W; canvas.height = H;
    const ctx = canvas.getContext("2d")!;

    const draw = () => {
      // Draw border
      ctx.fillStyle = "#1e3a8a"; ctx.fillRect(0, 0, W, H);
      ctx.fillStyle = "#fff"; ctx.fillRect(16, 16, W-32, H-32);

      // Decorative top stripe
      ctx.fillStyle = "#ebdca5"; ctx.fillRect(16, 16, W-32, 8);

      // Card Header
      ctx.fillStyle = "#1e3a8a"; ctx.textAlign = "center"; ctx.font = "bold 24px Georgia, serif";
      ctx.fillText("TAMILNADU VANIGARGALIN SANGAMAM", W/2, 60);
      
      ctx.fillStyle = "#d4b26f"; ctx.font = "bold 15px Georgia, serif";
      ctx.fillText("MEMBERSHIP CERTIFICATE", W/2, 90);

      // Certificate Main text
      ctx.fillStyle = "#333"; ctx.font = "italic 16px Georgia, serif";
      ctx.fillText("This is to certify that", W/2, 140);

      ctx.fillStyle = "#1e3a8a"; ctx.font = "bold 26px Georgia, serif";
      ctx.fillText(form.name.toUpperCase(), W/2, 185);

      ctx.fillStyle = "#333"; ctx.font = "italic 15px Georgia, serif";
      ctx.fillText("is officially enrolled as an esteemed member of", W/2, 230);
      ctx.fillText("Tamilnadu Vanigargalin Sangamam.", W/2, 252);

      // Details Box
      ctx.strokeStyle = "#e2e8f0"; ctx.lineWidth = 1.5;
      ctx.strokeRect(100, 290, W-200, 200);

      ctx.textAlign = "left"; ctx.fillStyle = "#555"; ctx.font = "15px Georgia, serif";
      ctx.fillText("Membership ID / EPIC:", 120, 330);
      ctx.fillStyle = "#1e3a8a"; ctx.font = "bold 16px monospace";
      ctx.fillText(epic, 310, 330);

      ctx.fillStyle = "#555"; ctx.font = "15px Georgia, serif";
      ctx.fillText("District / Location:", 120, 370);
      ctx.fillStyle = "#1e3a8a"; ctx.font = "bold 15px Georgia, serif";
      ctx.fillText(form.district, 310, 370);

      const wingData = WINGS.find(w => w.id === form.wing);
      if (wingData) {
        ctx.fillStyle = "#555"; ctx.font = "15px Georgia, serif";
        ctx.fillText("Business Division / Wing:", 120, 410);
        ctx.fillStyle = "#1e3a8a"; ctx.font = "bold 14px Georgia, serif";
        ctx.fillText(wingData.nameEn, 310, 410);
      }
      
      if (form.shop) {
        ctx.fillStyle = "#555"; ctx.font = "15px Georgia, serif";
        ctx.fillText("Shop / Business Name:", 120, 450);
        ctx.fillStyle = "#1e3a8a"; ctx.font = "bold 15px Georgia, serif";
        ctx.fillText(form.shop, 310, 450);
      }

      // Issue date
      ctx.textAlign = "center"; ctx.fillStyle = "#666"; ctx.font = "13px Georgia, serif";
      const date = new Date().toLocaleDateString("en-IN", {year:"numeric",month:"long",day:"numeric"});
      ctx.fillText("Issued on: " + date, W/2, 530);

      // Signature line
      ctx.strokeStyle = "#1e3a8a"; ctx.lineWidth = 1;
      ctx.beginPath(); ctx.moveTo(W/2-80, 545); ctx.lineTo(W/2+80, 545); ctx.stroke();

      // Company info below signature
      ctx.fillStyle = "#1e3a8a"; ctx.font = "bold 12px Georgia, serif"; ctx.textAlign = "center";
      ctx.fillText("SENTHIL KUMAR N", W/2, 570);
      ctx.fillStyle = "#555"; ctx.font = "11px Georgia, serif";
      ctx.fillText("Founder & State President", W/2, 586);
      ctx.fillText("Tamilnadu Vanigargalin Sangamam", W/2, 601);
      ctx.fillText("No 5/79, Saidapet, Chennai - 600015", W/2, 617);

      // Trigger download
      const link = document.createElement("a");
      link.download = "membership-certificate-" + epic + ".png";
      link.href = canvas.toDataURL("image/png");
      link.click();
    };

    // Load static assets
    const imgLeft  = new Image(); imgLeft.src  = ownerPhoto;
    const imgRight = new Image(); imgRight.src = orgLogo;
    const imgSign  = new Image(); imgSign.src  = signImg;
    let loaded = 0;
    const totalImgs = 3;
    
    const onLoad = () => {
      loaded++;
      if (loaded === totalImgs) {
        draw();

        // circular clip owner
        const ph = 72, pw = 72;
        ctx.save();
        ctx.beginPath();
        ctx.arc(45 + pw/2, 40 + ph/2, ph/2, 0, Math.PI*2);
        ctx.clip();
        ctx.drawImage(imgLeft, 45, 40, pw, ph);
        ctx.restore();
        ctx.strokeStyle = "rgba(30,58,138,0.2)"; ctx.lineWidth = 2;
        ctx.beginPath(); ctx.arc(45+pw/2, 40+ph/2, ph/2, 0, Math.PI*2); ctx.stroke();

        // Right org logo
        ctx.drawImage(imgRight, W-45-pw, 40, pw, ph);

        // Signature image — centred
        const sw = 110, sh = 44;
        ctx.drawImage(imgSign, W/2 - sw/2, 545 - sh - 3, sw, sh);

        // Re-draw company info
        ctx.fillStyle = "#1e3a8a"; ctx.font = "bold 12px Georgia, serif"; ctx.textAlign = "center";
        ctx.fillText("SENTHIL KUMAR N", W/2, 570);
        ctx.fillStyle = "#555"; ctx.font = "11px Georgia, serif";
        ctx.fillText("Founder & State President", W/2, 586);
        ctx.fillText("Tamilnadu Vanigargalin Sangamam", W/2, 601);

        // Final download with images
        const link2 = document.createElement("a");
        link2.download = "membership-certificate-" + epic + ".png";
        link2.href = canvas.toDataURL("image/png");
        link2.click();
      }
    };
    imgLeft.onload  = onLoad;
    imgRight.onload = onLoad;
    imgSign.onload  = onLoad;
    imgLeft.onerror = imgRight.onerror = imgSign.onerror = () => { loaded++; if (loaded===totalImgs) draw(); };
  };

  /* ── File handlers ── */
  const handleFile = (key: string) => (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] ?? null;
    setDocs(prev => ({ ...prev, [key]: file }));
    if (file) toast.success(`${file.name} uploaded ✓`);
  };

  const handleSelfieSimulate = () => {
    setWebcamCapturing(true);
    setTimeout(() => {
      setDocs(prev => ({ ...prev, selfie: "Selfie Image (Captured Live via Webcam Scanner)" }));
      setWebcamCapturing(false);
      setUseWebcam(false);
      toast.success(language === "ta" ? "புகைப்படம் வெற்றிகரமாக எடுக்கப்பட்டது ✓" : "Selfie captured successfully ✓");
    }, 1800);
  };

  return (
    <div className="min-h-screen">
      <section className="border-b border-slate-200/60 bg-white shadow-xs">
        <div className="max-w-5xl mx-auto px-4 py-8 md:py-10 flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <div className="mb-2">
              <Link to="/services" className="inline-flex items-center gap-1.5 text-xs font-semibold text-primary hover:underline transition-all">
                <ArrowLeft className="w-3.5 h-3.5" /> {t("சேவைகளுக்குத் திரும்பு", "Back to Services")}
              </Link>
            </div>
            <div className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">Apply · இணைய</div>
            <h1 className="mt-1 font-display text-2xl md:text-3xl font-bold text-slate-900 leading-tight">Member Registration</h1>
            <p className="font-tamil text-xs md:text-sm text-slate-500 mt-0.5">5 நிமிடத்தில் உறுப்பினராக பதிவு செய்யுங்கள்.</p>
          </div>
          {step < 5 && (
            <button
              onClick={clearDraft}
              className="inline-flex items-center gap-1.5 self-start md:self-center border border-slate-200 bg-white hover:bg-slate-50 text-slate-600 px-3 py-1.5 rounded-lg text-xs font-semibold transition cursor-pointer min-h-[38px]"
            >
              <RefreshCw className="w-3.5 h-3.5 text-slate-400" />
              {language === "ta" ? "படிவத்தை மீட்டமை" : "Reset Draft"}
            </button>
          )}
        </div>
      </section>

      <div className="max-w-5xl mx-auto px-4 py-10">
        
        {/* Sleek Horizontal badges Stepper (Timeline) */}
        <div className="mb-10 bg-white rounded-2xl border border-slate-200/60 p-4 md:p-5 shadow-xs">
          <div className="relative flex items-center justify-between overflow-x-auto pb-2 gap-4">
            <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-slate-100 -translate-y-1/2 hidden md:block" />
            {STEPS.map((s, i) => {
              const done = step > s.n, active = step === s.n;
              return (
                <div key={s.n} className="flex items-center shrink-0 relative z-10">
                  <div className="flex flex-col items-center min-w-[72px]">
                    <div 
                      className={`w-10 h-10 rounded-full grid place-items-center text-sm font-semibold border-2 transition duration-300 ${
                        done 
                          ? "bg-primary text-white border-primary shadow-xs" 
                          : active 
                            ? "border-primary text-primary bg-white shadow-md ring-4 ring-primary/5" 
                            : "border-slate-200 text-slate-400 bg-white"
                      }`}
                    >
                      {done ? <Check className="w-4 h-4" /> : s.n}
                    </div>
                    <div className={`mt-1.5 text-xs font-semibold ${active ? "text-primary" : "text-slate-500"}`}>{s.t}</div>
                    <div className={`text-xs font-tamil mt-0.5 ${active ? "text-primary/80" : "text-slate-400"}`}>{s.ta}</div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Form Container */}
        <div className="bg-white rounded-2xl border border-slate-200/80 p-5 md:p-10 shadow-sm min-h-[460px] flex flex-col justify-between">
          <AnimatePresence mode="wait">
            <motion.div key={step} initial={{opacity:0,y:10}} animate={{opacity:1,y:0}} exit={{opacity:0,y:-10}} transition={{duration:0.2}}>

              {/* Step 1 — Personal */}
              {step===1 && (
                <Form title="Personal Details" ta="தனிநபர் தகவல்கள்">
                  <FloatingInput
                    label="Full Name / பெயர்"
                    value={form.name}
                    onChange={e => upd("name", e.target.value)}
                    autoComplete="name"
                  />
                  <FloatingInput
                    label="Mobile / கைபேசி"
                    value={form.mobile}
                    onChange={e => upd("mobile", e.target.value)}
                    inputMode="numeric"
                    maxLength={10}
                  />
                  <FloatingInput
                    label="Email / மின்னஞ்சல்"
                    type="email"
                    value={form.email}
                    onChange={e => upd("email", e.target.value)}
                    autoComplete="email"
                  />
                  <FloatingSelect
                    label="District / மாவட்டம்"
                    value={form.district}
                    onChange={e => upd("district", e.target.value)}
                  >
                    {DISTRICTS.map(d => (
                      <option key={d.en} value={d.en}>
                        {language === "ta" ? `${d.ta} / ${d.en}` : `${d.en} / ${d.ta}`}
                      </option>
                    ))}
                  </FloatingSelect>
                </Form>
              )}

              {/* Step 2 — Business Details */}
              {step===2 && (
                <Form title="Business Details" ta="வணிக விவரங்கள்">
                  <FloatingInput
                    label="Shop / Business Name (கடை பெயர்)"
                    value={form.shop}
                    onChange={e => upd("shop", e.target.value)}
                  />
                  <FloatingSelect
                    label="Business Type / வகை"
                    value={form.type}
                    onChange={e => upd("type", e.target.value)}
                  >
                    {["Retail","Wholesale","Manufacturing","Service","Online"].map(d => <option key={d}>{d}</option>)}
                  </FloatingSelect>

                  <FloatingSelect
                    label="Wing / பிரிவு"
                    value={form.wing}
                    onChange={e => upd("wing", e.target.value)}
                  >
                    <option value="">-- Select Wing / பிரிவு --</option>
                    {WING_CATEGORIES.map(category => (
                      <optgroup
                        key={category.id}
                        label={language === "ta" ? category.nameTa : category.nameEn}
                      >
                        {WINGS.filter(w => category.wings.includes(w.id)).map(w => (
                          <option key={w.id} value={w.id}>
                            {language === "ta" ? w.nameTa : w.nameEn}
                          </option>
                        ))}
                      </optgroup>
                    ))}
                  </FloatingSelect>

                  <FloatingInput
                    label="Years in Business (அனுபவம்)"
                    value={form.years}
                    onChange={e => upd("years", e.target.value)}
                    inputMode="numeric"
                  />
                  <div className="md:col-span-2">
                    <FloatingTextarea
                      label="Shop Address / முகவரி"
                      value={form.address}
                      onChange={e => upd("address", e.target.value)}
                      rows={3}
                    />
                  </div>
                </Form>
              )}

              {/* Step 3 — Documents with camera/upload toggle fallbacks */}
              {step===3 && (
                <div>
                  <h2 className="font-display text-2xl font-bold text-slate-800">Upload Documents</h2>
                  <p className="font-tamil text-xs md:text-sm text-slate-500 mb-6">ஆவணங்களை பதிவேற்றவும்</p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    
                    {/* Selfie Webcam scanner / Drag fallback container */}
                    <div className="col-span-full border border-slate-200/80 rounded-2xl p-5 bg-slate-50/50 flex flex-col md:flex-row gap-5 items-center">
                      <div className="w-24 h-24 rounded-full bg-slate-100 border border-slate-200 flex items-center justify-center text-slate-400 shrink-0 relative overflow-hidden">
                        {docs.selfie ? (
                          <div className="absolute inset-0 bg-emerald-50 flex flex-col items-center justify-center text-emerald-800">
                            <Check className="w-7 h-7" />
                            <span className="text-xs font-semibold mt-1">Photo Added</span>
                          </div>
                        ) : (
                          <Camera className="w-8 h-8" />
                        )}
                      </div>
                      
                      <div className="flex-1 space-y-2 text-center md:text-left">
                        <div className="font-semibold text-sm text-slate-800">Owner Passport Size Photo</div>
                        <p className="text-xs text-slate-500 leading-relaxed font-tamil">
                          நேரடியாக வெப்கேம் மூலம் புகைப்படம் எடுக்கலாம் அல்லது கோப்பாக பதிவேற்றலாம்.
                        </p>
                        
                        <div className="flex flex-wrap gap-2 pt-1 justify-center md:justify-start">
                          <button
                            type="button"
                            onClick={() => { setUseWebcam(true); }}
                            className="inline-flex items-center gap-1.5 bg-primary/10 text-primary hover:bg-primary/20 px-3.5 py-2 rounded-lg text-xs font-semibold transition cursor-pointer min-h-[38px]"
                          >
                            <Camera className="w-3.5 h-3.5" /> 
                            {language === "ta" ? "கேமரா மூலம் எடு" : "Capture with Webcam"}
                          </button>
                          
                          <label className="inline-flex items-center gap-1.5 border border-slate-200 bg-white hover:bg-slate-50 text-slate-700 px-3.5 py-2 rounded-lg text-xs font-semibold transition cursor-pointer min-h-[38px]">
                            <Upload className="w-3.5 h-3.5 text-slate-400" />
                            {language === "ta" ? "கோப்பைத் தேர்ந்தெடு" : "Upload File"}
                            <input 
                              type="file" 
                              accept="image/jpeg,image/png,image/webp" 
                              className="hidden" 
                              onChange={(e) => {
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
                                setDocs(prev => ({ ...prev, selfie: file }));
                                toast.success("Passport photo uploaded ✓");
                              }} 
                            />
                          </label>
                        </div>
                      </div>
                    </div>

                    {/* Camera Modal Simulator overlay */}
                    {useWebcam && (
                      <div className="fixed inset-0 z-100 bg-slate-900/80 backdrop-blur-sm grid place-items-center p-4">
                        <div className="bg-white rounded-2xl p-5 max-w-sm w-full text-center space-y-4 shadow-xl border border-slate-100">
                          <div className="flex justify-between items-center pb-2 border-b border-slate-100">
                            <span className="font-bold text-sm text-slate-800">Selfie Camera Scanner</span>
                            <button onClick={() => setUseWebcam(false)} className="text-slate-400 hover:text-slate-600 text-xs font-semibold">✕ Close</button>
                          </div>
                          
                          {/* Face circle scanner mask overlay */}
                          <div className="aspect-square bg-slate-950 rounded-xl relative overflow-hidden flex items-center justify-center">
                            <div className="w-40 h-40 rounded-full border-4 border-dashed border-primary/60 animate-pulse absolute" />
                            <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-primary/40 -translate-y-1/2 animate-bounce" />
                            {webcamCapturing ? (
                              <div className="text-white text-xs space-y-2">
                                <Loader2 className="w-6 h-6 animate-spin mx-auto text-primary" />
                                <span>Scanning Face...</span>
                              </div>
                            ) : (
                              <span className="text-slate-500 text-xs">Position your face inside the circle</span>
                            )}
                          </div>
                          
                          <p className="text-xs text-slate-500">Align your face inside the scanning circle</p>
                          <button
                            type="button"
                            onClick={handleSelfieSimulate}
                            disabled={webcamCapturing}
                            className="w-full inline-flex justify-center items-center gap-1.5 bg-primary text-white hover:bg-primary/90 px-4 py-3 rounded-xl text-sm font-semibold transition"
                          >
                            {webcamCapturing ? <Loader2 className="w-4 h-4 animate-spin" /> : <Camera className="w-4 h-4" />}
                            Capture Photo
                          </button>
                        </div>
                      </div>
                    )}

                    {/* Standard Files Uploader Inputs with dashed drag zones */}
                    {[
                      { k:"idProof",   l:"Aadhaar / Voter ID Document",    ta:"அடையாள ஆவணம்",  accept:"image/*,application/pdf" },
                      { k:"shopPhoto", l:"Shop Front Photo Document",      ta:"கடை புகைப்படம்", accept:"image/*" },
                      { k:"bizProof",  l:"Business Proof (GST / License)", ta:"வணிக சான்று",    accept:"image/*,application/pdf" },
                    ].map(d => (
                      <div
                        key={d.k}
                        className="border-2 border-dashed border-slate-200 hover:border-primary/50 rounded-2xl p-6 text-center hover:bg-slate-50/50 transition cursor-pointer relative group flex flex-col items-center justify-center gap-3 min-h-[140px]"
                        onDragOver={(e) => { e.preventDefault(); }}
                        onDrop={(e) => {
                          e.preventDefault();
                          const file = e.dataTransfer.files?.[0];
                          if (file) {
                            setDocs(prev => ({ ...prev, [d.k]: file }));
                            toast.success(`${file.name} uploaded ✓`);
                          }
                        }}
                      >
                    <div className="w-12 h-12 rounded-full bg-primary/5 text-primary flex items-center justify-center group-hover:scale-110 transition duration-300">
                          <Upload className="w-5 h-5" />
                        </div>
                        <div>
                          <div className="font-semibold text-sm text-slate-800">{d.l}</div>
                           <div className="font-tamil text-xs text-slate-400 mt-0.5">{d.ta}</div>
                        </div>
                        {docs[d.k] ? (
                          <div className="text-xs text-emerald-800 bg-emerald-50 px-3 py-1 rounded-full font-medium flex items-center gap-1 border border-emerald-100">
                            <Check className="w-3.5 h-3.5" /> {(docs[d.k] as File).name}
                          </div>
                        ) : (
                          <div className="text-xs text-slate-400 font-medium">
                            Drag & drop or <span className="text-primary hover:underline font-semibold">browse</span>
                          </div>
                        )}
                        <input
                          type="file"
                          accept={d.accept}
                          className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                          onChange={(e) => {
                            const file = e.target.files?.[0];
                            if (!file) return;
                            if (file.size > 5 * 1024 * 1024) {
                              toast.error("File must be under 5MB");
                              return;
                            }
                            setDocs(prev => ({ ...prev, [d.k]: file }));
                            toast.success(`${file.name} uploaded ✓`);
                          }}
                        />
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Step 4 — Review Details */}
              {step===4 && (
                <Form title="Review Details" ta="விவரங்களை சரிபார்க்கவும்">
                  <div className="col-span-full grid md:grid-cols-2 gap-4 bg-slate-50/50 rounded-2xl p-5 border border-slate-200/80">
                    {[
                      ["Full Name (பெயர்)", form.name || "—"],
                      ["Mobile (கைபேசி)", form.mobile || "—"],
                      ["Email (மின்னஞ்சல்)", form.email || "—"],
                      ["District (மாவட்டம்)", form.district],
                      ["Shop / Business Name", form.shop || "—"],
                      ["Business Type", form.type],
                      ["Wing / பிரிவு", WINGS.find(w => w.id === form.wing)?.[language === "ta" ? "nameTa" : "nameEn"] || "—"],
                      ["Years in Business", form.years || "—"],
                      ["Shop Address", form.address || "—"]
                    ].map(([k,v])=>(
                      <div key={k} className="bg-white p-4 rounded-xl border border-slate-100 shadow-xs">
                        <div className="text-xs font-bold uppercase tracking-wider text-slate-400">{k}</div>
                        <div className="mt-1 text-xs md:text-sm text-slate-800 font-semibold break-all">{v}</div>
                      </div>
                    ))}
                  </div>

                  {/* 4-Digit Security PIN Validation Gate */}
                  <div className="col-span-full border-t border-slate-100 pt-6 mt-4">
                    <div className="max-w-xs mx-auto text-center space-y-3">
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-500">
                        {language === "ta" ? "பாதுகாப்பு PIN குறியீட்டை உருவாக்கவும் (4 இலக்கங்கள்)" : "Create Security PIN (4 Digits) *"}
                      </label>
                      <p className="text-[11px] text-slate-400 leading-normal font-tamil">
                        {language === "ta"
                          ? "உறுப்பினர் அட்டை மற்றும் தகவல்களைப் பாதுகாக்க 4-இலக்க PIN ஐ உள்ளிடவும்."
                          : "Set a 4-digit PIN to secure your digital membership card."}
                      </p>
                      
                      <div className="relative inline-block w-48 mt-2">
                        {/* Invisible input overlay */}
                        <input
                          type="text"
                          pattern="[0-9]*"
                          maxLength={4}
                          value={pin}
                          onChange={(e) => {
                            const val = e.target.value.replace(/\D/g, "");
                            setPin(val);
                          }}
                          className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10"
                          autoComplete="one-time-code"
                        />
                        
                        {/* 4 beautiful custom slot boxes */}
                        <div className="flex justify-between gap-3">
                          {[0, 1, 2, 3].map((index) => {
                            const char = pin[index] || "";
                            const isFocused = pin.length === index;
                            return (
                              <div
                                key={index}
                                className={`w-10 h-12 rounded-xl border text-lg font-bold flex items-center justify-center transition-all duration-200 ${
                                  isFocused
                                    ? "border-primary ring-4 ring-primary/10 scale-105"
                                    : char
                                    ? "border-emerald-300 bg-emerald-50/30 text-emerald-900"
                                    : "border-slate-200 bg-slate-50/50 text-slate-400"
                                }`}
                              >
                                {char ? "•" : ""}
                              </div>
                            );
                          })}
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="col-span-full mt-4 bg-linear-to-br from-emerald-50 to-teal-50 border border-emerald-100 rounded-2xl p-5 shadow-xs">
                    <div className="flex justify-between items-baseline">
                      <span className="font-semibold text-emerald-800 text-sm">Annual Membership Fee</span>
                      <span className="font-display text-2xl font-bold text-emerald-950">₹ 500</span>
                    </div>
                    <div className="text-xs text-emerald-600/90 mt-1">Secure payment via UPI / Netbanking / Credit Card</div>
                    <div className="mt-3 p-3 bg-amber-50 border border-amber-100 rounded-xl text-xs text-amber-700">
                      ⚠️ UPI integration is in progress. Clicking "Pay ₹500 &amp; Submit" will complete your application in preview mode — no real charge is processed yet.
                    </div>
                  </div>
                </Form>
              )}

              {/* Step 5 — Success Certificate page */}
              {step===5 && (
                <div className="text-center py-6 max-w-lg mx-auto">
                  <div className="w-20 h-20 rounded-full bg-emerald-50 text-emerald-800 border border-emerald-100 grid place-items-center mx-auto shadow-sm">
                    <Check className="w-10 h-10" />
                  </div>
                  <h2 className="mt-6 font-display text-2xl md:text-3xl font-bold text-slate-800 leading-tight">Welcome aboard!</h2>
                  <p className="font-tamil text-xs md:text-sm text-slate-500 mt-1">உறுப்பினராக பதிவு வெற்றிகரமாக முடிந்தது.</p>
                  
                  <div className="mt-8 bg-white/80 border border-slate-200/80 rounded-2xl p-6 text-left shadow-sm relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full translate-x-1/3 -translate-y-1/3" />
                     <div className="text-xs uppercase font-bold tracking-wider text-slate-400">Your Official EPIC ID</div>
                    <div className="font-mono text-2xl font-bold text-primary tracking-wider mt-1">{epic}</div>
                    
                    <div className="border-t border-slate-100 mt-4 pt-4 space-y-2">
                      <div className="text-xs text-slate-500 flex justify-between">Name: <span className="text-slate-800 font-semibold">{form.name || "Member"}</span></div>
                      <div className="text-xs text-slate-500 flex justify-between">District: <span className="text-slate-800 font-semibold">{form.district}</span></div>
                    </div>
                  </div>
                  
                  <div className="mt-8 flex justify-center gap-3 flex-wrap">
                    <button 
                      onClick={downloadCertificate} 
                      className="inline-flex items-center gap-2 bg-primary text-white hover:bg-primary/95 px-5 py-3.5 rounded-xl text-xs font-semibold shadow-md active:scale-95 transition cursor-pointer min-h-[44px]"
                    >
                      <Download className="w-4 h-4" /> Download Certificate
                    </button>
                    
                    <Link 
                      to="/dashboard" 
                      className="inline-flex items-center gap-2 border border-slate-200 bg-white text-slate-700 hover:bg-slate-50 px-5 py-3.5 rounded-xl text-xs font-semibold shadow-sm active:scale-95 transition cursor-pointer min-h-[44px]"
                    >
                      <FileCheck className="w-4 h-4" /> Go to Dashboard
                    </Link>
                  </div>
                </div>
              )}
            </motion.div>
          </AnimatePresence>

          {/* Stepper Buttons */}
          {step < 5 && (
            <div className="mt-10 pt-6 border-t border-slate-100 flex justify-between">
              <button 
                onClick={back} 
                disabled={step===1||submitting} 
                className="inline-flex items-center gap-1.5 px-4 py-2.5 text-xs font-semibold text-slate-500 hover:text-slate-800 disabled:opacity-40 min-h-[44px] cursor-pointer"
              >
                <ArrowLeft className="w-4 h-4" /> Back
              </button>
              
              <button
                onClick={step===4 ? handlePaySubmit : next}
                disabled={submitting}
                className="inline-flex items-center gap-2 bg-primary text-white hover:bg-primary/95 px-6 py-2.5 rounded-xl text-xs font-semibold active:scale-95 transition min-h-[44px] cursor-pointer shadow-sm"
              >
                {submitting ? (
                  <><Loader2 className="w-4 h-4 animate-spin" /> Processing…</>
                ) : step === 4 ? (
                  <>Pay ₹500 &amp; Submit <ArrowRight className="w-4 h-4" /></>
                ) : (
                  <>Continue <ArrowRight className="w-4 h-4" /></>
                )}
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

const inp = "w-full border border-slate-200 bg-slate-50/30 rounded-xl px-4 py-3 text-xs md:text-sm focus:outline-none focus:ring-4 focus:ring-primary/10 focus:border-primary transition duration-300 placeholder:text-slate-400 min-h-[44px]";

function Form({ title, ta, children }: { title: string; ta: string; children: React.ReactNode }) {
  return (
    <div className="space-y-4">
      <div>
        <h2 className="font-display text-2xl font-bold text-slate-800">{title}</h2>
        <p className="font-tamil text-xs md:text-sm text-slate-500">{ta}</p>
      </div>
      <div className="grid md:grid-cols-2 gap-5 pt-3">{children}</div>
    </div>
  );
}

function Field({ label, children, full }: { label: string; children: React.ReactNode; full?: boolean }) {
  return (
    <label className={`flex flex-col gap-1.5 ${full?"col-span-full":""}`}>
      <span className="text-xs font-semibold text-slate-600">{label}</span>
      {children}
    </label>
  );
}
