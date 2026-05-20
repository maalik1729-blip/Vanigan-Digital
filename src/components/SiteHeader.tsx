import { Link, useLocation } from "@tanstack/react-router";
import { useState, useEffect, useRef } from "react";
import { Menu, X, User, Phone } from "lucide-react";
import templeLogo from "@/assets/ChatGPT Image Mar 25, 2026, 05_31_25 PM (1).png";
import { useLanguage } from "@/hooks/useLanguage";

const NAV = [
  { to: "/",          label: "முகப்பு",       en: "Home" },
  { to: "/services",  label: "சேவைகள்",       en: "Services" },
  { to: "/wings",     label: "பிரிவுகள்",     en: "Divisions" },
  { to: "/membership",label: "இணைவு",         en: "Join" },
  { to: "/assistant", label: "உதவி மையம்",   en: "Support" },
] as const;

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const loc = useLocation();
  const { language, setLanguage } = useLanguage();
  const menuRef = useRef<HTMLDivElement>(null);

  // Close menu on route change
  useEffect(() => { setOpen(false); }, [loc.pathname]);

  // ESC key closes mobile menu + focus trap
  useEffect(() => {
    if (!open) return;
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", handler);
    // Prevent body scroll when menu open
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", handler);
      document.body.style.overflow = "";
    };
  }, [open]);

  const toggleLanguage = () => {
    setLanguage(language === "ta" ? "en" : "ta");
  };

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-200/80">
      {/* Gov tri-colour stripe — 3px visible band */}
      <div className="gov-stripe h-[3px]" aria-hidden="true" />

      {/* Announcement bar */}
      <div className="bg-primary text-white">
        <div className="max-w-7xl mx-auto px-4 py-2 flex items-center justify-between gap-4">
          <span className="text-xs font-semibold font-tamil flex items-center gap-1.5">
            <span aria-hidden="true">✦</span>
            {language === "ta"
              ? "பதிவு எண். 2012/TNVS · அரசு அங்கீகரிக்கப்பட்ட அமைப்பு"
              : "Reg. No. 2012/TNVS · Govt. of Tamil Nadu Approved Organization"}
          </span>
          <a
            href="tel:04423456789"
            className="hidden sm:flex items-center gap-1.5 text-xs font-medium opacity-90 hover:opacity-100 transition"
            aria-label="Call helpline 044-2345-6789"
          >
            <Phone className="w-3 h-3" aria-hidden="true" />
            044-2345-6789
          </a>
        </div>
      </div>

      {/* Brand + Nav row */}
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between gap-4">

        {/* Brand Logo */}
        <Link to="/" className="flex items-center gap-2.5 group" aria-label="Tamil Nadu Vanigargalin Sangamam — Home">
          <img
            src={templeLogo}
            alt="TNVS Logo"
            className="w-10 h-10 object-contain transition-transform group-hover:scale-105 duration-300"
            width={40}
            height={40}
          />
          <div className="leading-tight">
            <div className="font-display font-bold text-slate-800 text-sm md:text-[15px] truncate max-w-[200px] md:max-w-none">
              Tamil Nadu Vanigargalin Sangamam
            </div>
            <div className="font-tamil text-xs text-slate-500 mt-0.5">
              தமிழ்நாடு வணிகர்களின் சங்கமம்
            </div>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-1" aria-label="Main navigation">
          {NAV.map((n) => {
            const active = loc.pathname === n.to;
            return (
              <Link
                key={n.to}
                to={n.to}
                aria-current={active ? "page" : undefined}
                className={[
                  "relative px-3 py-2 text-sm font-semibold transition-colors duration-200 min-h-[44px] inline-flex items-center rounded-lg",
                  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2",
                  active
                    ? "text-primary after:absolute after:bottom-0 after:left-2 after:right-2 after:h-[2px] after:bg-gold after:rounded-full"
                    : "text-slate-500 hover:text-primary hover:bg-slate-50 after:absolute after:bottom-0 after:left-2 after:right-2 after:h-[2px] after:bg-gold after:rounded-full after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300",
                ].join(" ")}
              >
                {language === "ta" ? n.label : n.en}
              </Link>
            );
          })}
        </nav>

        {/* Desktop Right Controls */}
        <div className="hidden md:flex items-center gap-2.5">

          {/* Language Toggle — click-based (not hover) */}
          <button
            onClick={toggleLanguage}
            aria-label={`Switch to ${language === "ta" ? "English" : "Tamil"}`}
            aria-pressed={language === "ta"}
            className="inline-flex items-center gap-1 px-3 py-2 rounded-[10px] text-xs font-semibold border border-slate-200 bg-white hover:bg-slate-50 transition text-slate-700 min-h-[44px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-1 cursor-pointer"
          >
            <span className={language === "ta" ? "font-bold text-primary" : "text-slate-400"}>TA</span>
            <span className="text-slate-300" aria-hidden="true">|</span>
            <span className={language === "en" ? "font-bold text-primary" : "text-slate-400"}>EN</span>
          </button>

          <Link
            to="/dashboard"
            className="inline-flex items-center gap-1.5 border border-primary/20 bg-primary/6 text-primary px-4 py-2 rounded-[10px] text-sm font-semibold hover:bg-primary hover:text-white transition duration-200 active:scale-95 min-h-[44px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
          >
            <User className="w-3.5 h-3.5" aria-hidden="true" />
            {language === "ta" ? "எனது கணக்கு" : "My Account"}
          </Link>
        </div>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden p-2 min-h-[44px] min-w-[44px] flex items-center justify-center text-slate-600 border border-slate-200 rounded-[10px] hover:bg-slate-50 transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
          onClick={() => setOpen(true)}
          aria-label="Open navigation menu"
          aria-expanded={false}
          aria-haspopup="dialog"
        >
          <Menu className="w-5 h-5" aria-hidden="true" />
        </button>
      </div>

      {/* Mobile menu — full-screen overlay */}
      {open && (
        <div
          className="md:hidden fixed inset-0 z-[60] flex flex-col"
          role="dialog"
          aria-modal="true"
          aria-label="Navigation menu"
          ref={menuRef}
        >
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-black/30 backdrop-blur-sm"
            onClick={() => setOpen(false)}
            aria-hidden="true"
          />

          {/* Drawer panel */}
          <div className="relative ml-auto w-full max-w-sm h-full bg-white shadow-2xl flex flex-col animate-slide-up overflow-y-auto">
            {/* Drawer Header */}
            <div className="flex items-center justify-between px-5 py-4 border-b border-slate-100">
              <div>
                <div className="text-sm font-bold text-slate-800">Menu</div>
                <div className="text-xs text-slate-400 font-tamil">வழிகாட்டல்</div>
              </div>
              <button
                onClick={() => setOpen(false)}
                aria-label="Close navigation menu"
                className="p-2 rounded-[10px] hover:bg-slate-100 transition text-slate-500 min-h-[44px] min-w-[44px] flex items-center justify-center"
              >
                <X className="w-5 h-5" aria-hidden="true" />
              </button>
            </div>

            {/* Nav links */}
            <nav className="flex-1 px-4 py-3 space-y-1" aria-label="Mobile navigation">
              {NAV.map((n) => {
                const active = loc.pathname === n.to;
                return (
                  <Link
                    key={n.to}
                    to={n.to}
                    onClick={() => setOpen(false)}
                    aria-current={active ? "page" : undefined}
                    className={[
                      "flex items-center justify-between px-4 min-h-[52px] rounded-xl transition",
                      "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary",
                      active
                        ? "bg-primary/8 text-primary"
                        : "hover:bg-slate-50 text-slate-700",
                    ].join(" ")}
                  >
                    <span className="text-sm font-semibold">
                      {language === "ta" ? n.label : n.en}
                    </span>
                    <span className="font-tamil text-xs text-slate-400">
                      {language === "ta" ? n.en : n.label}
                    </span>
                  </Link>
                );
              })}
            </nav>

            {/* Footer controls */}
            <div className="px-4 py-4 border-t border-slate-100 space-y-3">
              {/* Language Toggle */}
              <div className="flex gap-2">
                <button
                  onClick={() => { setLanguage("ta"); setOpen(false); }}
                  className={[
                    "flex-1 py-3 rounded-xl text-sm font-semibold border transition min-h-[48px] cursor-pointer",
                    language === "ta"
                      ? "bg-primary text-white border-primary"
                      : "bg-white text-slate-600 border-slate-200 hover:bg-slate-50",
                  ].join(" ")}
                  aria-pressed={language === "ta"}
                >
                  தமிழ்
                </button>
                <button
                  onClick={() => { setLanguage("en"); setOpen(false); }}
                  className={[
                    "flex-1 py-3 rounded-xl text-sm font-semibold border transition min-h-[48px] cursor-pointer",
                    language === "en"
                      ? "bg-primary text-white border-primary"
                      : "bg-white text-slate-600 border-slate-200 hover:bg-slate-50",
                  ].join(" ")}
                  aria-pressed={language === "en"}
                >
                  English
                </button>
              </div>

              <Link
                to="/dashboard"
                onClick={() => setOpen(false)}
                className="flex items-center justify-center gap-2 border border-primary/20 bg-primary/6 text-primary py-3 rounded-xl text-sm font-semibold hover:bg-primary hover:text-white transition min-h-[48px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
              >
                <User className="w-4 h-4" aria-hidden="true" />
                {language === "ta" ? "எனது கணக்கு" : "My Account"}
              </Link>

              <Link
                to="/membership"
                onClick={() => setOpen(false)}
                className="flex items-center justify-center bg-primary text-white py-3 rounded-xl text-sm font-semibold hover:bg-primary/90 transition min-h-[48px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
              >
                {language === "ta" ? "உறுப்பினர் சேர்க்கை" : "Apply for Membership"}
              </Link>

              <a
                href="tel:04423456789"
                className="flex items-center justify-center gap-2 text-xs text-slate-500 py-2"
              >
                <Phone className="w-3.5 h-3.5" aria-hidden="true" />
                Helpline: 044-2345-6789 · Mon–Sat 10am–6pm
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
