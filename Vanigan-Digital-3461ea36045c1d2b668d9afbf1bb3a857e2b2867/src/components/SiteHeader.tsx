import { Link, useLocation } from "@tanstack/react-router";
import { useState, useEffect, useRef } from "react";
import { Menu, X, User, Phone, Sun, Moon } from "lucide-react";
import templeLogo from "@/assets/ChatGPT Image Mar 25, 2026, 05_31_25 PM (1).png";
import { useLanguage } from "@/hooks/useLanguage";
import { useTheme } from "@/hooks/useTheme";

const NAV = [
  { to: "/",          label: "முகப்பு",     en: "Home" },
  { to: "/services",  label: "சேவைகள்",     en: "Services" },
  { to: "/wings",     label: "பிரிவுகள்",   en: "Divisions" },
  { to: "/membership",label: "இணைவு",       en: "Join" },
  { to: "/assistant", label: "உதவி மையம்", en: "Support" },
] as const;

// ─── How many px the user must scroll before the hide logic activates ─────────
const SCROLL_THRESHOLD = 100;
// ─── Min upward scroll delta before we re-show the navbar ────────────────────
const SHOW_DELTA = 8;

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [hidden, setHidden] = useState(false);       // true = navbar slid up
  const [scrolled, setScrolled] = useState(false);   // true = past threshold (glass intensifies)

  const loc = useLocation();
  const { language, setLanguage } = useLanguage();
  const { theme, toggleTheme } = useTheme();
  const menuRef = useRef<HTMLDivElement>(null);

  // ─── Smart hide-on-scroll-down, show-on-scroll-up ──────────────────────────
  useEffect(() => {
    let lastY = window.scrollY;

    const onScroll = () => {
      const currentY = window.scrollY;
      const delta    = currentY - lastY;            // positive = scrolling down

      // Past threshold check
      setScrolled(currentY > SCROLL_THRESHOLD);

      if (currentY > SCROLL_THRESHOLD) {
        if (delta > 0) {
          // Scrolling DOWN → hide
          setHidden(true);
        } else if (delta < -SHOW_DELTA) {
          // Scrolling UP by enough → show
          setHidden(false);
        }
      } else {
        // Near top — always show
        setHidden(false);
      }

      lastY = currentY;
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => { setOpen(false); }, [loc.pathname]);

  // ESC closes mobile menu + lock body scroll
  useEffect(() => {
    if (!open) return;
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", handler);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", handler);
      document.body.style.overflow = "";
    };
  }, [open]);

  // Always show navbar when mobile menu is open
  const isVisible = !hidden || open;

  const toggleLanguage = () => setLanguage(language === "ta" ? "en" : "ta");

  return (
    <header
      style={{
        // Slide up by the full header height when hidden
        transform: isVisible ? "translateY(0)" : "translateY(-100%)",
        // Glassmorphism background — intensifies after scroll threshold
        background: scrolled
          ? "var(--header-bg-scrolled)"
          : "var(--header-bg-top)",
        // Stronger blur when scrolled
        backdropFilter: scrolled ? "blur(20px) saturate(180%)" : "blur(8px) saturate(120%)",
        WebkitBackdropFilter: scrolled ? "blur(20px) saturate(180%)" : "blur(8px) saturate(120%)",
        // Subtle border glow on scroll
        borderBottomColor: scrolled
          ? "var(--header-border-scrolled)"
          : "var(--header-border)",
        // Drop shadow appears on scroll
        boxShadow: scrolled
          ? "var(--header-shadow)"
          : "none",
      }}
      className={[
        "fixed top-0 left-0 right-0 z-50 border-b",
        "transition-[transform,background,backdrop-filter,box-shadow]",
        "duration-400 ease-[cubic-bezier(0.32,0.72,0,1)]",  // iOS-style decel curve
      ].join(" ")}
    >
      {/* Gov tri-colour stripe — always present */}
      <div className="gov-stripe h-[3px]" aria-hidden="true" />

      {/* Announcement ticker bar */}
      <div className="bg-primary text-white border-b border-primary-foreground/5 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 py-2 flex items-center justify-between gap-4">
          <span className="text-xs font-semibold font-tamil flex items-center gap-1.5 shrink-0 select-none border-r border-white/20 pr-4">
            <span aria-hidden="true" className="text-gold">✦</span>
            {language === "ta" ? "பதிவு எண். 2012/TNVS" : "Reg. No. 2012/TNVS"}
          </span>

          <div className="flex-1 overflow-hidden relative flex items-center h-4 mx-2">
            <div className="animate-marquee whitespace-nowrap flex gap-16 font-tamil text-xs">
              <span>
                {language === "ta"
                  ? "புதிய நலத்திட்டம்: ₹2 லட்சம் மருத்துவ காப்பீட்டுக்கு உடனே விண்ணப்பிக்கவும்! ✦ புதிய அரசு சுற்றறிக்கை: குறுந்தொழில் முனைவோருக்கான சிறப்பு ஜிஎஸ்டி சலுகை அறிவிப்பு! ✦ சங்கமத்தின் அதிகாரப்பூர்வ சான்றிதழ் வங்கி கடன் பெற செல்லுபடியாகும்! ✦ ஆண்டு பொதுக்குழு கூட்டம் ஜூன் 15 அன்று சென்னையில் நடைபெறும்! ✦ "
                  : "New Welfare Scheme: Apply for ₹2 Lakh Health Cover now! ✦ Latest Govt Circular: Special GST relief for micro-traders announced! ✦ TNVS Stamped Certificate is now legally valid for bank loan applications! ✦ Annual General Meeting to be held on June 15th at Chennai! ✦ "}
              </span>
              <span>
                {language === "ta"
                  ? "புதிய நலத்திட்டம்: ₹2 லட்சம் மருத்துவ காப்பீட்டுக்கு உடனே விண்ணப்பிக்கவும்! ✦ புதிய அரசு சுற்றறிக்கை: குறுந்தொழில் முனைவோருக்கான சிறப்பு ஜிஎஸ்டி சலுகை அறிவிப்பு! ✦ சங்கமத்தின் அதிகாரப்பூர்வ சான்றிதழ் வங்கி கடன் பெற செல்லுபடியாகும்! ✦ ஆண்டு பொதுக்குழு கூட்டம் ஜூன் 15 அன்று சென்னையில் நடைபெறும்! ✦ "
                  : "New Welfare Scheme: Apply for ₹2 Lakh Health Cover now! ✦ Latest Govt Circular: Special GST relief for micro-traders announced! ✦ TNVS Stamped Certificate is now legally valid for bank loan applications! ✦ Annual General Meeting to be held on June 15th at Chennai! ✦ "}
              </span>
            </div>
          </div>

          <a
            href="tel:04423456789"
            className="hidden sm:flex items-center gap-1.5 text-xs font-medium opacity-90 hover:opacity-100 transition shrink-0 select-none border-l border-white/20 pl-4"
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
                    : "text-slate-500 hover:text-primary hover:bg-slate-50/70 after:absolute after:bottom-0 after:left-2 after:right-2 after:h-[2px] after:bg-gold after:rounded-full after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300",
                ].join(" ")}
              >
                {language === "ta" ? n.label : n.en}
              </Link>
            );
          })}
        </nav>

        {/* Desktop Right Controls */}
        <div className="hidden md:flex items-center gap-2.5">

          {/* Language Toggle */}
          <button
            onClick={toggleLanguage}
            aria-label={`Switch to ${language === "ta" ? "English" : "Tamil"}`}
            aria-pressed={language === "ta"}
            className="inline-flex items-center gap-1 px-3 py-2 rounded-[10px] text-xs font-semibold border border-slate-200/80 bg-white/60 hover:bg-white/90 backdrop-blur-sm transition text-slate-700 min-h-[44px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-1 cursor-pointer"
          >
            <span className={language === "ta" ? "font-bold text-primary" : "text-slate-400"}>TA</span>
            <span className="text-slate-300" aria-hidden="true">|</span>
            <span className={language === "en" ? "font-bold text-primary" : "text-slate-400"}>EN</span>
          </button>

          {/* Theme Toggle */}
          <button
            onClick={toggleTheme}
            aria-label={`Switch to ${theme === "light" ? "dark" : "light"} mode`}
            className="inline-flex items-center justify-center p-2.5 rounded-[10px] border border-slate-200/80 bg-white/60 hover:bg-white/90 backdrop-blur-sm transition text-slate-700 min-h-[44px] min-w-[44px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-1 cursor-pointer"
          >
            {theme === "light" ? <Moon className="w-4 h-4 text-slate-600" /> : <Sun className="w-4 h-4 text-amber-500 animate-[spin_8s_linear_infinite]" />}
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
          className="md:hidden p-2 min-h-[44px] min-w-[44px] flex items-center justify-center text-slate-600 border border-slate-200/80 rounded-[10px] bg-white/60 backdrop-blur-sm hover:bg-white/90 transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
          onClick={() => setOpen(true)}
          aria-label="Open navigation menu"
          aria-expanded={open}
          aria-haspopup="dialog"
        >
          <Menu className="w-5 h-5" aria-hidden="true" />
        </button>
      </div>

      {/* ── Mobile menu — full-screen overlay ─────────────────────────────── */}
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

          {/* Drawer panel — glassmorphism */}
          <div
            className="relative ml-auto w-full max-w-sm h-full flex flex-col animate-slide-up overflow-y-auto"
            style={{
              background: "var(--drawer-bg)",
              backdropFilter: "blur(24px) saturate(200%)",
              WebkitBackdropFilter: "blur(24px) saturate(200%)",
              borderLeft: "1px solid var(--drawer-border)",
              boxShadow: "var(--drawer-shadow)",
            }}
          >
            {/* Drawer Header */}
            <div className="flex items-center justify-between px-5 py-4 border-b border-slate-100/80">
              <div>
                <div className="text-sm font-bold text-slate-800">Menu</div>
                <div className="text-xs text-slate-400 font-tamil">வழிகாட்டல்</div>
              </div>
              <button
                onClick={() => setOpen(false)}
                aria-label="Close navigation menu"
                className="p-2 rounded-[10px] hover:bg-slate-100/80 transition text-slate-500 min-h-[44px] min-w-[44px] flex items-center justify-center"
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
                        : "hover:bg-slate-50/80 text-slate-700",
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
            <div className="px-4 py-4 border-t border-slate-100/80 space-y-3">
              {/* Language Toggle */}
              <div className="flex gap-2">
                <button
                  onClick={() => { setLanguage("ta"); setOpen(false); }}
                  className={[
                    "flex-1 py-3 rounded-xl text-sm font-semibold border transition min-h-[48px] cursor-pointer",
                    language === "ta"
                      ? "bg-primary text-white border-primary"
                      : "bg-white/70 text-slate-600 border-slate-200/80 hover:bg-white/90",
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
                      : "bg-white/70 text-slate-600 border-slate-200/80 hover:bg-white/90",
                  ].join(" ")}
                  aria-pressed={language === "en"}
                >
                  English
                </button>
              </div>

              {/* Theme Toggle (Mobile) */}
              <button
                onClick={() => { toggleTheme(); setOpen(false); }}
                className="w-full flex items-center justify-center gap-2 border border-slate-200/80 bg-white/70 text-slate-700 py-3 rounded-xl text-sm font-semibold hover:bg-white/90 transition min-h-[48px] cursor-pointer"
              >
                {theme === "light" ? (
                  <>
                    <Moon className="w-4 h-4 text-slate-600" />
                    <span>{language === "ta" ? "இருண்ட பயன்முறை" : "Dark Mode"}</span>
                  </>
                ) : (
                  <>
                    <Sun className="w-4 h-4 text-amber-500 animate-[spin_8s_linear_infinite]" />
                    <span>{language === "ta" ? "ஒளி பயன்முறை" : "Light Mode"}</span>
                  </>
                )}
              </button>

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
