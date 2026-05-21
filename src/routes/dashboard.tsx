import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { useState } from "react";
import { Section } from "@/components/Section";
import {
  Download, FileText, CreditCard, Bell, ChevronRight, ShieldCheck,
  LogOut, ArrowLeft, Copy, Award, Users, Smartphone, Play,
  CheckCircle2, UserPlus, Sparkles, Clock, AlertCircle,
  Coins, Store, Rocket, ArrowRight, X
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { toast } from "sonner";
import { getSession, clearSession } from "@/lib/session";
import { LoginPrompt } from "@/components/LoginPrompt";
import { useLanguage } from "@/hooks/useLanguage";
import { DemoModeBanner } from "@/components/DemoModeBanner";
import { ActivityCard } from "@/components/ActivityCard";
import { StatusPill } from "@/components/StatusPill";
import { EmptyState } from "@/components/EmptyState";
import orgLogo from "@/assets/ChatGPT Image Mar 25, 2026, 05_31_25 PM (1).png";

export const Route = createFileRoute("/dashboard")({
  head: () => ({
    meta: [
      { title: "Member Dashboard · TN Vanigargalin Sangamam" },
      { name: "description", content: "Member dashboard — view your EPIC ID, download certificate, manage renewals and welfare claims." },
    ],
  }),
  component: Dashboard,
});

const ACTIVITIES = [
  { d: "12 May 2026", t: "Membership Renewal",        s: "Payment ₹500 · UPI Success",           status: "success" as const },
  { d: "08 May 2026", t: "Certificate Download",       s: "EPIC PNG Format",                       status: "success" as const },
  { d: "02 May 2026", t: "Welfare Claim Submission",   s: "Medical Aid Claim · Under Verification", status: "pending" as const },
  { d: "20 Apr 2026", t: "Profile Address Update",     s: "Shop Location Mylapore",                status: "info"    as const },
];

const NOTICES = [
  { t: "Annual General Meeting · Chennai",        d: "28 June 2026 · Mylapore Office" },
  { t: "Scholarship applications open for Member children", d: "Apply before 15 July 2026" },
  { t: "GST free helpdesk – direct advisory",     d: "Every Friday, 11AM – 1PM" },
];

function Dashboard() {
  const { t, language } = useLanguage();
  const navigate = useNavigate();
  const [epicId, setEpicId] = useState<string | null>(() => getSession());

  // Subsidized Loan Gated States
  const [showLoanCategories, setShowLoanCategories] = useState(true);
  const [isLoanModalOpen, setIsLoanModalOpen] = useState(false);
  const [loanModalSubject, setLoanModalSubject] = useState("");
  const [loanChatStep, setLoanChatStep] = useState(0);
  const [loanInputs, setLoanInputs] = useState({ name: "", phone: "", amount: "" });

  const openDashboardLoanModal = (type: "business" | "retail" | "young") => {
    let subject = "";
    if (type === "business") subject = t("வட்டியில்லா வணிகக் கடன் விண்ணப்பம்", "Interest-Free Business Loan Application");
    else if (type === "retail") subject = t("சில்லறை வணிகர்கள் கடன் விண்ணப்பம்", "Retail Trader Loan Application");
    else if (type === "young") subject = t("இளைய தொழில்முனைவோர் கடன் விண்ணப்பம்", "Young Entrepreneur Loan Application");
    
    setLoanModalSubject(subject);
    setLoanChatStep(1);
    setLoanInputs({ name: "Senthil Kumar N", phone: "+91 944 20 •• 44", amount: "" });
    setIsLoanModalOpen(true);
  };

  // Coordinator opt-in state
  const [isCoordinator, setIsCoordinator] = useState(() => {
    if (typeof window !== "undefined") {
      return localStorage.getItem("tnvs_is_coordinator") === "true";
    }
    return false;
  });
  const [copiedLink, setCopiedLink] = useState(false);

  const handleLogout = () => {
    clearSession();
    setEpicId(null);
    toast.success("Signed out successfully.");
  };

  const handleDownloadIdCard = () => {
    if (!epicId) return;
    navigate({ to: "/voter-id", search: { q: epicId } } as never);
  };

  const handleOptInCoordinator = () => {
    setIsCoordinator(true);
    localStorage.setItem("tnvs_is_coordinator", "true");
    toast.success(
      language === "ta"
        ? "ஒருங்கிணைப்பாளர் திட்டத்தில் இணைந்ததற்கு வாழ்த்துகள்! 🌟"
        : "Successfully opted in as a Coordinator! 🌟"
    );
  };

  if (!epicId) {
    return <LoginPrompt onLogin={(id) => setEpicId(id)} />;
  }

  // Use window.location.origin for referral URL — not a non-existent domain
  const referralUrl = `${typeof window !== "undefined" ? window.location.origin : ""}/refer/${epicId}`;

  const handleCopyLink = () => {
    navigator.clipboard.writeText(referralUrl).catch(() => {});
    setCopiedLink(true);
    toast.success(t("பரிந்துரை இணைப்பு நகலெடுக்கப்பட்டது! ✓", "Referral link copied successfully! ✓"));
    setTimeout(() => setCopiedLink(false), 2000);
  };

  return (
    <div className="min-h-screen">

      {/* Page Header */}
      <section className="border-b border-slate-200/60 bg-white">
        <div className="max-w-7xl mx-auto px-4 py-8 md:py-10">

          {/* Demo Mode Banner — full width, top of page */}
          <div className="mb-5">
            <DemoModeBanner />
          </div>

          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <Link
                to="/services"
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-primary hover:underline transition-all mb-2"
              >
                <ArrowLeft className="w-3.5 h-3.5" aria-hidden="true" />
                {t("சேவைகளுக்குத் திரும்பு", "Back to Services")}
              </Link>
              <div className="text-xs font-semibold uppercase tracking-widest text-primary">
                Member ID: {epicId}
              </div>
              <h1 className="mt-1 font-display text-2xl md:text-3xl font-bold text-slate-900 leading-tight">
                {t("வணக்கம், செந்தில் குமார் N", "Welcome, Senthil Kumar N")}
              </h1>
              <p className="font-tamil text-xs md:text-sm text-slate-500 mt-0.5">
                {t("உங்கள் உறுப்பினர் கணக்கு செயலில் உள்ளது.", "Your membership account is active.")}
              </p>
            </div>

            <div className="flex gap-2.5 flex-wrap">
              <button
                onClick={handleDownloadIdCard}
                className="btn-primary"
              >
                <Download className="w-4 h-4" aria-hidden="true" />
                {t("அட்டை பதிவிறக்கம்", "Download ID Card")}
              </button>
              <button
                onClick={handleLogout}
                className="btn-danger"
              >
                <LogOut className="w-4 h-4" aria-hidden="true" />
                {t("வெளியேறு", "Sign Out")}
              </button>
            </div>
          </div>
        </div>
      </section>

      <Section className="py-4">
        {/* Full-size stationary Dribbble-style Premium Hero Promo Banner */}
        <div className="relative overflow-hidden rounded-3xl bg-navy border border-blue-900/50 shadow-2xl flex flex-col justify-center max-w-7xl mx-auto p-8 md:p-12 min-h-[300px] select-none text-left bg-[radial-gradient(ellipse_at_top_right,var(--tw-gradient-stops))] from-blue-950 via-navy to-slate-950">
          
          {/* Tagline Row */}
          <div className="flex items-center gap-3">
            <div className="w-8 h-[2px] bg-amber-500 rounded-full"></div>
            <span className="bg-blue-600/30 text-blue-400 border border-blue-500/20 text-[10px] md:text-xs font-black uppercase tracking-widest px-3 py-1 rounded-[4px] font-sans">
              {t("உறுப்பினர் சிறப்பு சலுகை", "MEMBER SPECIAL OFFER")}
            </span>
          </div>

          {/* Large Serif Headline with Highlighted Loan Keywords */}
          <h1 className="mt-5 font-serif text-2xl md:text-4.5xl font-extrabold text-white leading-tight max-w-3xl">
            {language === "ta" ? (
              <>
                வட்டியில்லா <span className="text-amber-400 drop-shadow-[0_2px_10px_rgba(251,191,36,0.3)] select-all">கடன்</span> பெற்று உங்கள் தொழிலை வளர்க்கவும்.
              </>
            ) : (
              <>
                Grow your business with 0% <span className="text-amber-400 drop-shadow-[0_2px_10px_rgba(251,191,36,0.3)] select-all">Interest Loans</span>.
              </>
            )}
          </h1>

          {/* Features Row */}
          <div className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-3 text-xs md:text-sm text-slate-300 font-tamil font-semibold">
            <span className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse"></span>
              {t("வட்டியில்லா கடன்", "No Interest (0% Vatti)")}
            </span>
            <span className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse"></span>
              {t("மிகவும் எளிய ஆவணங்கள்", "Only Simple Documents Needed")}
            </span>
            <span className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse"></span>
              {t("வங்கி கிளைகளில் உடனடி அனுமதி", "Quick Approval at Your Branch")}
            </span>
            <span className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse"></span>
              {t("₹25 லட்சம் வரை பெறலாம்", "Get up to ₹25 Lakhs")}
            </span>
          </div>

          {/* CTA Action Button */}
          <div className="mt-8">
            <button
              onClick={() => {
                const section = document.getElementById("loan-categories-section");
                if (section) {
                  section.scrollIntoView({ behavior: "smooth" });
                  toast.success(t("கீழே உள்ள கடன் பிரிவைத் தேர்ந்தெடுத்து விண்ணப்பிக்கவும்!", "Select a loan category below to apply!"));
                }
              }}
              className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-[8px] text-sm font-bold text-white bg-blue-600 hover:bg-blue-500 hover:shadow-lg hover:shadow-blue-500/20 active:scale-[0.97] transition-all border border-blue-500/20 cursor-pointer"
            >
              <span>{t("கடனுக்கு விண்ணப்பிக்க →", "Apply for Loan Now →")}</span>
            </button>
          </div>

          {/* Subtle Decorative Geometric Glowing Circles */}
          <div className="absolute -top-12 -right-12 w-64 h-64 bg-blue-600/10 rounded-full blur-3xl pointer-events-none"></div>
          <div className="absolute -bottom-16 -left-16 w-80 h-80 bg-emerald-500/5 rounded-full blur-3xl pointer-events-none"></div>
        </div>
      </Section>

      <Section className="py-10">
        <div className="grid lg:grid-cols-12 gap-6">

          {/* LEFT COLUMN — Member Card + Quick Actions */}
          <div className="lg:col-span-5 space-y-6">

            {/* Member Card */}
            <div className="card-base card-accent-left p-5 md:p-6 relative overflow-hidden">
              <div className="flex justify-between items-start">
                <div>
                  <div className="text-xs font-bold uppercase tracking-wider text-slate-400">
                    {t("உறுப்பினர் அடையாள எண்", "Membership ID")}
                  </div>
                  <div className="font-mono text-xl font-bold text-primary mt-1 tracking-wider">
                    {epicId}
                  </div>
                </div>
                <div className="w-12 h-12 rounded-xl overflow-hidden border border-slate-100 p-1 bg-slate-50 shadow-xs">
                  <img src={orgLogo} alt="TNVS" className="w-full h-full object-contain" />
                </div>
              </div>

              <div className="mt-5 grid grid-cols-2 gap-3">
                <InfoCell label="Member Name"        value="Senthil Kumar N" />
                <InfoCell label="District"           value="Chennai" />
                <InfoCell label="Zone"               value="Chennai Zone" />
                <InfoCell label="Assembly"           value="Mylapore" />
                <InfoCell label="Registered Mobile"  value="+91 944 20 •• 44" />
                <InfoCell label="Member Class"       value="A+ Patron" />
              </div>

              <div className="mt-5 flex items-center justify-between border-t border-slate-100 pt-4">
                <div className="text-xs text-slate-500">
                  {t("வரை செல்லும்", "Valid till")}{" "}
                  <span className="text-slate-800 font-bold">04 Dec 2026</span>
                </div>
                <StatusPill status="active" label="ACTIVE" />
              </div>
            </div>

            {/* Quick Actions */}
            <div className="grid grid-cols-2 gap-3">
              <button
                onClick={() => toast.info("Your primary certificate has been automatically queued for download.")}
                className="card-base card-interactive p-4 text-left group min-h-[80px] cursor-pointer"
              >
                <FileText className="w-5 h-5 text-primary group-hover:scale-110 transition" aria-hidden="true" />
                <div className="text-sm font-semibold mt-2 text-slate-800">
                  {t("சான்றிதழ்", "Certificate")}
                </div>
                <div className="text-xs text-slate-400 mt-0.5">{t("PDF பதிவிறக்கம்", "Download PDF")}</div>
              </button>

              <button
                onClick={() => toast.info("Renewal window opens October 2026. Current membership valid till Dec 2026.")}
                className="card-base card-interactive p-4 text-left group min-h-[80px] cursor-pointer"
              >
                <CreditCard className="w-5 h-5 text-primary group-hover:scale-110 transition" aria-hidden="true" />
                <div className="text-sm font-semibold mt-2 text-slate-800">
                  {t("புதுப்பித்தல்", "Card Renewal")}
                </div>
                <div className="text-xs text-slate-400 mt-0.5">{t("ஆண்டுக் கட்டணம் ₹500", "Annual fee ₹500")}</div>
              </button>
            </div>

            {/* App Download */}
            <div className="card-base p-5 md:p-6 space-y-4">
              <div className="flex items-center gap-2 pb-2 border-b border-slate-100">
                <div className="w-8 h-8 rounded-xl bg-slate-100 text-primary flex items-center justify-center">
                  <Smartphone className="w-4 h-4" aria-hidden="true" />
                </div>
                <h3 className="font-display font-bold text-sm text-slate-800">
                  {t("எங்கள் ஆப்பை பதிவிறக்கவும்", "Download Our App")}
                </h3>
              </div>
              <p className="text-xs text-slate-500 leading-relaxed font-tamil">
                {t(
                  "சிறந்த அனுபவத்திற்கு Google Play Store இல் இருந்து அதிகாரப்பூர்வ வணிகம் ஆப்பை பதிவிறக்கவும்.",
                  "For the best experience, download the official Vanigam app from the Google Play Store."
                )}
              </p>
              <button
                onClick={() => toast.success(t("ஆப் விரைவில் கிடைக்கும்! 🚀", "App coming to Google Play Store soon! 🚀"))}
                className="w-full bg-slate-900 hover:bg-slate-800 text-white py-3 px-4 rounded-[10px] text-sm font-semibold flex items-center justify-center gap-2 transition active:scale-[0.98] min-h-[48px]"
              >
                <Play className="w-4 h-4 fill-white" aria-hidden="true" />
                <span className="font-tamil">{t("Play Store இல் பதிவிறக்கம்", "Download on Play Store")}</span>
              </button>
            </div>
          </div>

          {/* RIGHT COLUMN — Activity + Notices + Coordinator */}
          <div className="lg:col-span-7 space-y-6">

            {/* Recent Activity */}
            <div className="card-base p-5 md:p-6">
              <div className="flex items-center justify-between mb-4">
                <h2 className="font-display text-base font-bold text-slate-800">
                  {t("சமீபத்திய செயல்பாடுகள்", "Recent Activity")}
                </h2>
                <span className="text-xs bg-slate-50 text-slate-500 px-2.5 py-1 rounded-full font-semibold border border-slate-100">
                  {t("கடந்த 30 நாட்கள்", "Last 30 days")}
                </span>
              </div>

              {/* Desktop Table */}
              <div className="hidden md:block overflow-x-auto rounded-xl border border-slate-100">
                <table className="w-full text-left border-collapse" aria-label="Recent activity">
                  <thead>
                    <tr className="bg-slate-50 border-b border-slate-100">
                      <th className="px-4 py-3 text-xs font-semibold text-slate-400 uppercase tracking-wide">{t("தேதி", "Date")}</th>
                      <th className="px-4 py-3 text-xs font-semibold text-slate-400 uppercase tracking-wide">{t("விவரம்", "Description")}</th>
                      <th className="px-4 py-3 text-xs font-semibold text-slate-400 uppercase tracking-wide">{t("நிலை", "Status")}</th>
                    </tr>
                  </thead>
                  <tbody>
                    {ACTIVITIES.map((a) => (
                      <tr key={a.t} className="border-b border-slate-100 hover:bg-slate-50/60 transition">
                        <td className="px-4 py-3.5 text-xs text-slate-400 font-mono whitespace-nowrap tabular-nums">{a.d}</td>
                        <td className="px-4 py-3.5">
                          <div className="text-sm font-semibold text-slate-800">{a.t}</div>
                          <div className="text-xs text-slate-400 mt-0.5">{a.s}</div>
                        </td>
                        <td className="px-4 py-3.5">
                          <StatusPill status={a.status} />
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* Mobile Card List */}
              <div className="md:hidden divide-y divide-slate-100">
                {ACTIVITIES.map((a) => (
                  <ActivityCard
                    key={a.t}
                    date={a.d}
                    title={a.t}
                    subtitle={a.s}
                    status={a.status}
                  />
                ))}
              </div>
            </div>

            {/* Notices */}
            <div className="card-base p-5 md:p-6">
              <div className="flex items-center justify-between mb-4">
                <h2 className="font-display text-base font-bold text-slate-800 flex items-center gap-1.5">
                  <Bell className="w-4 h-4 text-gold" aria-hidden="true" />
                  {t("அறிவிப்புகள்", "Notices & Announcements")}
                </h2>
                <Link to="/services" className="text-xs text-primary font-semibold hover:underline">
                  {t("அனைத்தையும் காண்க", "View all")}
                </Link>
              </div>
              <div className="space-y-1">
                {NOTICES.map((n) => (
                  <div
                    key={n.t}
                    className="flex items-start justify-between gap-4 p-3 rounded-xl hover:bg-slate-50/60 transition cursor-pointer border border-transparent hover:border-slate-100"
                  >
                    <div>
                      <div className="text-sm font-semibold text-slate-700">{n.t}</div>
                      <div className="text-xs text-slate-400 mt-0.5">{n.d}</div>
                    </div>
                    <ChevronRight className="w-4 h-4 text-slate-400 shrink-0 mt-0.5" aria-hidden="true" />
                  </div>
                ))}
              </div>
            </div>

            {/* Welfare Coverage Banner */}
            <div className="bg-primary text-white rounded-[12px] p-5 md:p-6 border border-primary/20 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/8 rounded-full translate-x-1/3 -translate-y-1/3" aria-hidden="true" />
              <div className="relative flex items-start gap-4">
                <ShieldCheck className="w-6 h-6 text-gold shrink-0 mt-0.5" aria-hidden="true" />
                <div className="space-y-1">
                  <h3 className="font-display font-bold text-base text-slate-50">
                    {t("நலன் பாதுகாப்பு செயலில் உள்ளது", "Welfare Coverage Active")}
                  </h3>
                  <p className="text-xs text-primary-foreground/80 leading-relaxed">
                    {t(
                      "நீங்களும் உங்கள் பதிவுசெய்யப்பட்ட குடும்பமும் ₹2 லட்சம் குழு சுகாதார காப்பீட்டுத் திட்டத்தின் கீழ் ஏப்ரல் 2027 வரை முழுமையாக பாதுகாக்கப்படுகிறீர்கள்.",
                      "You and your registered trade family are fully covered under the association's ₹2 Lakh group health insurance scheme until April 2027."
                    )}
                  </p>
                </div>
              </div>
            </div>

            {/* Coordinator Widget — shown BELOW activity, not above */}
            {!isCoordinator ? (
              <div className="card-base p-5 md:p-6 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-24 h-24 bg-gold/5 rounded-full translate-x-1/3 -translate-y-1/3" aria-hidden="true" />
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-gold/10 text-gold flex items-center justify-center shrink-0">
                    <Award className="w-5 h-5" aria-hidden="true" />
                  </div>
                  <div className="space-y-3 flex-1">
                    <div>
                      <h3 className="font-display font-bold text-base text-slate-800">
                        {t("நிர்வாகியாக இணையுங்கள்", "Join as a Coordinator")}
                      </h3>
                      <p className="text-xs text-slate-500 leading-relaxed font-tamil mt-1">
                        {t(
                          "தலைமை ஏற்கத் தயாரா? உங்கள் பரிந்துரை லிங்க் மூலம் 25 வணிகர்களை ஒன்றிணைத்து, ஒருங்கிணைப்பாளர் பொறுப்பை பெற்றிடுங்கள்!",
                          "Ready to lead? Connect 25 traders using your unique referral link and earn the Coordinator title!"
                        )}
                      </p>
                    </div>
                    <button
                      onClick={handleOptInCoordinator}
                      className="btn-ghost text-sm"
                    >
                      <UserPlus className="w-4 h-4" aria-hidden="true" />
                      {language === "ta" ? "ஒருங்கிணைப்பாளராக இணையவும்" : "Activate Recruiter Status"}
                    </button>
                  </div>
                </div>
              </div>
            ) : (
              <div className="bg-slate-950 text-white rounded-[12px] p-5 md:p-6 shadow-md relative overflow-hidden border border-slate-800/80">
                <div className="absolute top-0 right-0 w-40 h-40 bg-primary/20 rounded-full blur-3xl" aria-hidden="true" />
                <div className="relative space-y-5">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 rounded-xl bg-gold/15 text-gold flex items-center justify-center">
                        <Award className="w-4 h-4" aria-hidden="true" />
                      </div>
                      <h3 className="font-display font-bold text-base text-gold">
                        {t("நிர்வாகியாக இணைய", "Become a Coordinator")}
                      </h3>
                    </div>
                    <span className="status-pill status-pending text-xs">
                      {t("ஒருங்கிணைப்பாளர்", "Coordinator")}
                    </span>
                  </div>

                  <div className="space-y-1.5">
                    <h4 className="font-display font-bold text-sm text-slate-100 flex items-center gap-1">
                      <Sparkles className="w-3.5 h-3.5 text-gold" aria-hidden="true" />
                      {t("தலைமை ஏற்கத் தயாரா?", "Ready to lead?")}
                    </h4>
                    <p className="text-xs text-slate-400 leading-relaxed font-tamil">
                      {t(
                        "உங்கள் பரிந்துரை லிங்க் மூலம் 25 வணிகர்களை ஒன்றிணைத்து, 'ஒருங்கிணைப்பாளர்' பொறுப்பை பெற்றிடுங்கள்!",
                        "Bring together 25 traders using your referral link and earn the 'Coordinator' title!"
                      )}
                    </p>
                  </div>

                  {/* Progress */}
                  <div className="bg-slate-900/60 p-4 rounded-xl border border-slate-800 space-y-3">
                    <div className="flex justify-between text-sm font-semibold">
                      <span className="text-gold">0 / 25</span>
                      <span className="text-xs text-slate-400 font-tamil">
                        {t("25 மேலும் பரிந்துரைகள் தேவை", "25 more referrals needed")}
                      </span>
                    </div>
                    <div className="w-full bg-slate-800 rounded-full h-2 overflow-hidden">
                      <div
                        className="bg-linear-to-r from-primary to-navy h-2 rounded-full"
                        style={{ width: "0%" }}
                        role="progressbar"
                        aria-valuenow={0}
                        aria-valuemin={0}
                        aria-valuemax={25}
                        aria-label="Referral progress: 0 of 25"
                      />
                    </div>
                  </div>

                  {/* Referral Link — uses real origin domain */}
                  <div className="space-y-2">
                    <label
                      htmlFor="referral-link"
                      className="text-xs text-slate-400 font-bold uppercase tracking-wider block"
                    >
                      {t("பரிந்துரை இணைப்பு", "Referral Link")}
                    </label>
                    <div className="flex gap-2">
                      <input
                        id="referral-link"
                        readOnly
                        type="text"
                        value={referralUrl}
                        className="flex-1 bg-slate-900 border border-slate-800 rounded-[10px] px-3.5 py-2.5 text-xs font-mono text-slate-300 focus:outline-none min-h-[44px]"
                        aria-label="Your referral link — read only"
                      />
                      <button
                        onClick={handleCopyLink}
                        className="bg-primary hover:bg-primary/90 text-white p-2.5 rounded-[10px] transition flex items-center justify-center shrink-0 min-w-[44px] min-h-[44px] cursor-pointer"
                        aria-label={t("நகலெடு", "Copy referral link")}
                      >
                        {copiedLink
                          ? <CheckCircle2 className="w-4 h-4 text-emerald-300" aria-hidden="true" />
                          : <Copy className="w-4 h-4" aria-hidden="true" />
                        }
                      </button>
                    </div>
                    <p className="text-xs text-slate-500 font-tamil">
                      {t(
                        "மேலும் உறுப்பினர்களை அழைக்க இந்த இணைப்பைப் பகிரவும்!",
                        "Share this link to invite more members!"
                      )}
                    </p>
                  </div>

                  {/* Referred Members — zero state (no mock data) */}
                  <div className="border-t border-slate-800 pt-4">
                    <div className="flex items-center gap-2 mb-3">
                      <Users className="w-4 h-4 text-slate-400" aria-hidden="true" />
                      <span className="text-sm font-semibold text-slate-300">
                        {t("பரிந்துரை உறுப்பினர்கள்", "Referred Members")}
                      </span>
                    </div>
                    <EmptyState
                      icon={Users}
                      title={t("இன்னும் பரிந்துரைகள் இல்லை", "No referrals yet")}
                      subtitle={t(
                        "உங்கள் பரிந்துரை இணைப்பை பகிர்ந்து உறுப்பினர்களை சேர்க்கவும்.",
                        "Share your referral link to start building your network."
                      )}
                    />
                  </div>
                </div>
              </div>
            )}

          </div>
        </div>

        {/* Full-width Loan Categories Row */}
        <div id="loan-categories-section" className="mt-10 pt-10 border-t border-slate-200/80 animate-fade-in scroll-mt-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
            <div>
              <h2 className="font-display text-lg md:text-xl font-bold text-slate-800 flex items-center gap-2">
                <Coins className="w-5 h-5 text-primary animate-bounce" />
                {t("கிடைக்கக்கூடிய கடன் திட்டங்கள்", "Available Loan Categories")}
              </h2>
              <p className="text-xs text-slate-500 font-tamil mt-1 leading-relaxed">
                {t("உங்கள் வணிக வளர்ச்சிக்கு தகுதியான உத்தியோகபூர்வ கடன் உதவிகள்", "Official subsidized loan categories tailored for your business growth")}
              </p>
            </div>
            <span className="text-xs bg-slate-100 text-slate-700 px-3 py-1 rounded-full font-bold border border-slate-200 uppercase tracking-wider self-start sm:self-center">
              3 {t("சேவைகள்", "services")}
            </span>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {/* Category 1: Interest-Free Business Loan */}
            <div className="card-base card-interactive p-5 bg-white border border-slate-200 hover:border-primary/30 flex flex-col justify-between min-h-[220px]">
              <div>
                <div className="w-10 h-10 rounded-xl bg-sky-50 text-sky-700 flex items-center justify-center">
                  <Coins className="w-5 h-5" />
                </div>
                <h3 className="font-display font-bold text-sm text-slate-800 mt-4 leading-tight">
                  {t("வட்டியில்லா வணிகக் கடன்", "Interest-Free Business Loan")}
                </h3>
                <p className="text-xs text-slate-500 leading-relaxed font-tamil mt-2">
                  {t(
                    "Proprietorship, Freelancers, Pvt Ltd மற்றும் இறக்குமதி ஏற்றுமதி வணிகங்களுக்கு ₹25 லட்சம் வரை வட்டி இல்லா கடன்.",
                    "Up to ₹25 lakh interest-free loan for Pvt Ltd, partnerships, import/export, proprietorships and freelancers."
                  )}
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-slate-100 flex justify-between items-center">
                <span className="text-[10px] font-bold text-slate-700 bg-slate-100 px-2.5 py-0.5 rounded-full uppercase">
                  {t("0% வட்டி", "0% Interest")}
                </span>
                <button
                  onClick={() => openDashboardLoanModal("business")}
                  className="inline-flex items-center gap-1 text-xs font-bold text-primary hover:gap-1.5 transition-all cursor-pointer"
                >
                  {t("விண்ணப்பம்", "Request / Apply")} <ArrowRight className="w-3.5 h-3.5 animate-pulse" />
                </button>
              </div>
            </div>

            {/* Category 2: Retail Trader Loan */}
            <div className="card-base card-interactive p-5 bg-white border border-slate-200 hover:border-primary/30 flex flex-col justify-between min-h-[220px]">
              <div>
                <div className="w-10 h-10 rounded-xl bg-indigo-50 text-indigo-700 flex items-center justify-center">
                  <Store className="w-5 h-5" />
                </div>
                <h3 className="font-display font-bold text-sm text-slate-800 mt-4 leading-tight">
                  {t("சில்லறை வணிகர்கள் கடன்", "Retail Trader Loan")}
                </h3>
                <p className="text-xs text-slate-500 leading-relaxed font-tamil mt-2">
                  {t(
                    "பதிவுசெய்யப்பட்ட சில்லறை வணிகர்களுக்கு குறைந்தபட்ச ஆவணங்களுடன் விரைவான கடன் அனுமதி.",
                    "Fast loan approval for registered retail traders with minimal documentation."
                  )}
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-slate-100 flex justify-between items-center">
                <span className="text-[10px] font-bold text-indigo-700 bg-indigo-50 px-2.5 py-0.5 rounded-full uppercase">
                  {t("எளிய ஆவணங்கள்", "Easy Docs")}
                </span>
                <button
                  onClick={() => openDashboardLoanModal("retail")}
                  className="inline-flex items-center gap-1 text-xs font-bold text-primary hover:gap-1.5 transition-all cursor-pointer"
                >
                  {t("விண்ணப்பம்", "Request / Apply")} <ArrowRight className="w-3.5 h-3.5 animate-pulse" />
                </button>
              </div>
            </div>

            {/* Category 3: Young Entrepreneur Loan */}
            <div className="card-base card-interactive p-5 bg-white border border-slate-200 hover:border-primary/30 flex flex-col justify-between min-h-[220px]">
              <div>
                <div className="w-10 h-10 rounded-xl bg-purple-50 text-purple-700 flex items-center justify-center">
                  <Rocket className="w-5 h-5" />
                </div>
                <h3 className="font-display font-bold text-sm text-slate-800 mt-4 leading-tight">
                  {t("இளைய தொழில்முனைவோர் கடன்", "Young Entrepreneur Loan")}
                </h3>
                <p className="text-xs text-slate-500 leading-relaxed font-tamil mt-2">
                  {t(
                    "40 வயதுக்குட்பட்ட இளைய தொழில்முனைவோருக்கு சிறப்பு மானியத்துடன் கூடிய நிதி உதவி திட்டம்.",
                    "Special subsidised loan scheme for entrepreneurs under 40 years."
                  )}
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-slate-100 flex justify-between items-center">
                <span className="text-[10px] font-bold text-purple-700 bg-purple-50 px-2.5 py-0.5 rounded-full uppercase">
                  {t("மானியம் உண்டு", "Subsidized")}
                </span>
                <button
                  onClick={() => openDashboardLoanModal("young")}
                  className="inline-flex items-center gap-1 text-xs font-bold text-primary hover:gap-1.5 transition-all cursor-pointer"
                >
                  {t("விண்ணப்பம்", "Request / Apply")} <ArrowRight className="w-3.5 h-3.5 animate-pulse" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* SEAMLESS CONVERSATIONAL LOAN MODAL */}
      <AnimatePresence>
        {isLoanModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center px-4 overflow-y-auto bg-slate-900/40 backdrop-blur-xs">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsLoanModalOpen(false)}
              className="fixed inset-0"
            />

            {/* Modal Dialog */}
            <motion.div
              initial={{ scale: 0.95, opacity: 0, y: 15 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 15 }}
              className="relative w-full max-w-md bg-white rounded-2xl border border-slate-200/80 shadow-2xl overflow-hidden z-10"
            >
              {/* Header */}
              <div className="bg-linear-to-r from-navy to-slate-950 px-5 py-4 text-white flex justify-between items-center">
                <div className="flex items-center gap-2">
                  <Coins className="w-5 h-5 text-gold animate-bounce" />
                  <div>
                    <h3 className="font-display font-bold text-sm text-gold leading-none">
                      {loanModalSubject}
                    </h3>
                    <p className="text-[10px] text-blue-300 font-tamil mt-1">
                      {t("உறுப்பினர் எளிய கடன் போர்டல்", "Subsidized Fast-Track Scheme")}
                    </p>
                  </div>
                </div>
                <button
                  onClick={() => setIsLoanModalOpen(false)}
                  className="w-7 h-7 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition cursor-pointer"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              {/* Chat Body & Multi-Step Wizard */}
              <div className="p-6 space-y-4 max-h-[380px] overflow-y-auto bg-slate-50/50">
                {/* Chat Bot Intro */}
                <div className="flex items-start gap-2.5">
                  <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center text-primary font-bold text-xs shrink-0">
                    AI
                  </div>
                  <div className="bg-white border border-slate-200/80 p-3 rounded-2xl rounded-tl-none shadow-xs text-xs text-slate-700 leading-relaxed font-tamil">
                    {t(
                      "வணக்கம்! நான் உங்கள் கடன் உதவியாளர். உங்களது கடன் விண்ணப்பத்தை எளிய 3 படிகளில் சமர்ப்பிக்கலாம். உங்கள் உறுப்பினர் விவரங்கள் ஏற்கனவே சரிபார்க்கப்பட்டன.",
                      "Hello! I am your loan assistant. You can submit your application in 3 simple steps. Your verified member profile is linked."
                    )}
                  </div>
                </div>

                {/* Step 1: Request Amount Input */}
                {loanChatStep >= 1 && (
                  <div className="space-y-3">
                    <div className="flex items-start gap-2.5">
                      <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center text-primary font-bold text-xs shrink-0">
                        AI
                      </div>
                      <div className="bg-white border border-slate-200/80 p-3 rounded-2xl rounded-tl-none shadow-xs text-xs text-slate-700 font-tamil">
                        {t("உங்களுக்கு தேவையான கடன் தொகையைத் தேர்ந்தெடுக்கவும் அல்லது உள்ளிடவும்:", "Please choose or enter your desired loan amount:")}
                      </div>
                    </div>

                    <div className="pl-10 grid grid-cols-3 gap-2">
                      {["₹2,00,000", "₹5,00,000", "₹10,00,000"].map((amt) => (
                        <button
                          key={amt}
                          type="button"
                          onClick={() => {
                            setLoanInputs({ ...loanInputs, amount: amt });
                            setLoanChatStep(2);
                          }}
                          className={`py-2 px-1 text-center rounded-lg border text-xs font-bold transition cursor-pointer ${
                            loanInputs.amount === amt
                              ? "bg-primary border-primary text-white"
                              : "bg-white border-slate-200 hover:bg-slate-50 text-slate-700"
                          }`}
                        >
                          {amt}
                        </button>
                      ))}
                    </div>

                    <div className="pl-10 flex gap-2">
                      <input
                        type="text"
                        placeholder={t("விருப்பத் தொகை (எ.கா. ₹15,00,000)", "Custom amount (e.g. ₹15,00,000)")}
                        value={loanInputs.amount}
                        onChange={(e) => setLoanInputs({ ...loanInputs, amount: e.target.value })}
                        className="flex-1 bg-white border border-slate-200 rounded-lg px-3 py-1.5 text-xs text-slate-800 placeholder-slate-400 focus:outline-none focus:border-primary"
                      />
                      {loanInputs.amount.trim() !== "" && loanChatStep === 1 && (
                        <button
                          type="button"
                          onClick={() => setLoanChatStep(2)}
                          className="bg-primary hover:bg-primary/95 text-white px-3 py-1.5 rounded-lg text-xs font-bold transition cursor-pointer"
                        >
                          {t("அடுத்து", "Next")}
                        </button>
                      )}
                    </div>
                  </div>
                )}

                {/* Step 2: Confirmation / Verification */}
                {loanChatStep >= 2 && (
                  <div className="space-y-3 animate-fade-in">
                    {/* User Amount Bubble */}
                    <div className="flex justify-end gap-2.5">
                      <div className="bg-primary text-white p-3 rounded-2xl rounded-tr-none shadow-xs text-xs font-semibold">
                        {loanInputs.amount}
                      </div>
                    </div>

                    <div className="flex items-start gap-2.5">
                      <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center text-primary font-bold text-xs shrink-0">
                        AI
                      </div>
                      <div className="bg-white border border-slate-200/80 p-3 rounded-2xl rounded-tl-none shadow-xs text-xs text-slate-700 font-tamil leading-relaxed">
                        {t(
                          `அருமை! உங்களது பதிவு செய்யப்பட்ட பெயர்: செந்தில் குமார் N மற்றும் கைபேசி எண்: +91 944 20 •• 44. இந்த விவரங்களுடன் கடன் கோரிக்கையைச் சமர்ப்பிக்கலாமா?`,
                          `Excellent! Your registered name is Senthil Kumar N and mobile: +91 944 20 •• 44. Shall we submit the request with these details?`
                        )}
                      </div>
                    </div>

                    <div className="pl-10 flex gap-2">
                      <button
                        type="button"
                        onClick={() => {
                          setLoanChatStep(3);
                          toast.success(
                            language === "ta"
                              ? "கடன் விண்ணப்பம் வெற்றிகரமாகச் சமர்ப்பிக்கப்பட்டது! 🚀"
                              : "Loan request submitted successfully! 🚀"
                          );
                        }}
                        className="bg-primary hover:bg-primary/90 text-white py-2 px-4 rounded-lg text-xs font-bold transition cursor-pointer flex-1"
                      >
                        {t("ஆம், சமர்ப்பி", "Yes, Submit Request")}
                      </button>
                      <button
                        type="button"
                        onClick={() => {
                          setIsLoanModalOpen(false);
                          toast.info(t("விண்ணப்பம் ரத்து செய்யப்பட்டது", "Application canceled"));
                        }}
                        className="bg-slate-200 hover:bg-slate-300 text-slate-700 py-2 px-3 rounded-lg text-xs font-bold transition cursor-pointer"
                      >
                        {t("ரத்து", "Cancel")}
                      </button>
                    </div>
                  </div>
                )}

                {/* Step 3: Success Screen */}
                {loanChatStep === 3 && (
                  <div className="space-y-3 animate-fade-in">
                    <div className="flex items-start gap-2.5">
                      <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center text-primary font-bold text-xs shrink-0">
                        AI
                      </div>
                      <div className="bg-emerald-50 border border-emerald-200/80 p-4 rounded-2xl rounded-tl-none shadow-xs text-xs text-emerald-800 font-tamil leading-relaxed space-y-2">
                        <p className="font-bold flex items-center gap-1.5 text-emerald-900">
                          <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                          {t("விண்ணப்பம் பெறப்பட்டது!", "Request Received!")}
                        </p>
                        <p>
                          {t(
                            "உங்களது குறிப்பு எண்: #L-998083. எங்கள் கடன் அதிகாரி 24 மணி நேரத்திற்குள் உங்களைத் தொடர்புகொள்வார். நன்றி!",
                            "Your reference number is #L-998083. Our loan officer will contact you within 24 hours. Thank you!"
                          )}
                        </p>
                      </div>
                    </div>
                    <div className="pl-10">
                      <button
                        type="button"
                        onClick={() => setIsLoanModalOpen(false)}
                        className="w-full bg-slate-900 hover:bg-slate-800 text-white py-2 rounded-lg text-xs font-bold transition cursor-pointer"
                      >
                        {t("மூடு", "Close")}
                      </button>
                    </div>
                  </div>
                )}
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}

function InfoCell({ label, value }: { label: string; value: string }) {
  return (
    <div className="bg-slate-50/60 p-3 rounded-xl border border-slate-100">
      <div className="text-xs font-bold uppercase tracking-wide text-slate-400">{label}</div>
      <div className="text-sm text-slate-800 font-semibold mt-0.5">{value}</div>
    </div>
  );
}
