import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { useState } from "react";
import { Section } from "@/components/Section";
import {
  Download, FileText, CreditCard, Bell, ChevronRight, ShieldCheck,
  LogOut, ArrowLeft, Copy, Award, Users, Smartphone, Play,
  CheckCircle2, UserPlus, Sparkles, Clock, AlertCircle,
} from "lucide-react";
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

  // Coordinator opt-in state
  const [isCoordinator, setIsCoordinator] = useState(
    () => localStorage.getItem("tnvs_is_coordinator") === "true"
  );
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
    <div className="bg-slate-50/50 min-h-screen">

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
                <div className="w-8 h-8 rounded-xl bg-emerald-50 text-emerald-700 flex items-center justify-center">
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
                        className="bg-gradient-to-r from-emerald-500 to-teal-500 h-2 rounded-full"
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
      </Section>
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
