import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import { useLocation, Link, createRootRouteWithContext, useRouter, HeadContent, Scripts, Outlet, createFileRoute, lazyRouteComponent, createRouter } from "@tanstack/react-router";
import { jsx, jsxs, Fragment } from "react/jsx-runtime";
import { useState, useEffect, createContext, useContext, useRef } from "react";
import { Phone, Moon, Sun, User, Menu, X, Info, Heart, GraduationCap, ShieldAlert, ArrowLeft, Sparkles, HelpCircle, ChevronDown, Search, CheckCircle2, MapPin, Award, Check, ArrowRight, FileText } from "lucide-react";
import { Toaster } from "sonner";
import { z } from "zod";
import { AnimatePresence, motion } from "framer-motion";
const appCss = "/assets/styles-Oh1rMIBV.css";
const orgLogo = "/assets/ChatGPT%20Image%20Mar%2025_%202026_%2005_31_25%20PM%20(1)-eYUcaO9-.png";
const LanguageContext = createContext(void 0);
function LanguageProvider({ children }) {
  const [language, setLanguageState] = useState(() => {
    if (typeof window !== "undefined") {
      const saved = localStorage.getItem("app_lang");
      return saved === "en" || saved === "ta" ? saved : "ta";
    }
    return "ta";
  });
  const setLanguage = (lang) => {
    setLanguageState(lang);
    if (typeof window !== "undefined") {
      localStorage.setItem("app_lang", lang);
      document.documentElement.lang = lang;
    }
  };
  useEffect(() => {
    if (typeof window !== "undefined") {
      document.documentElement.lang = language;
    }
  }, [language]);
  const t = (ta, en) => {
    return language === "ta" ? ta : en;
  };
  return /* @__PURE__ */ jsx(LanguageContext.Provider, { value: { language, setLanguage, t }, children });
}
function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}
const ThemeContext = createContext(void 0);
function ThemeProvider({ children }) {
  const [theme, setThemeState] = useState(() => {
    if (typeof window !== "undefined") {
      const saved = localStorage.getItem("app_theme");
      if (saved === "light" || saved === "dark") {
        return saved;
      }
      const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
      return prefersDark ? "dark" : "light";
    }
    return "light";
  });
  const setTheme = (newTheme) => {
    setThemeState(newTheme);
    if (typeof window !== "undefined") {
      localStorage.setItem("app_theme", newTheme);
    }
  };
  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };
  useEffect(() => {
    if (typeof window !== "undefined") {
      const root = document.documentElement;
      if (theme === "dark") {
        root.classList.add("dark");
      } else {
        root.classList.remove("dark");
      }
    }
  }, [theme]);
  return /* @__PURE__ */ jsx(ThemeContext.Provider, { value: { theme, setTheme, toggleTheme }, children });
}
function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
}
const NAV = [
  { to: "/", label: "முகப்பு", en: "Home" },
  { to: "/services", label: "சேவைகள்", en: "Services" },
  { to: "/wings", label: "பிரிவுகள்", en: "Divisions" },
  { to: "/membership", label: "இணைவு", en: "Join" },
  { to: "/assistant", label: "உதவி மையம்", en: "Support" }
];
const SCROLL_THRESHOLD = 100;
function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const loc = useLocation();
  const { language, setLanguage } = useLanguage();
  const { theme, toggleTheme } = useTheme();
  const menuRef = useRef(null);
  useEffect(() => {
    let lastY = window.scrollY;
    const onScroll = () => {
      const currentY = window.scrollY;
      const delta = currentY - lastY;
      setScrolled(currentY > SCROLL_THRESHOLD);
      if (currentY > SCROLL_THRESHOLD) {
        if (delta > 0) {
          setHidden(true);
        } else if (delta < -8) {
          setHidden(false);
        }
      } else {
        setHidden(false);
      }
      lastY = currentY;
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  useEffect(() => {
    setOpen(false);
  }, [loc.pathname]);
  useEffect(() => {
    if (!open) return;
    const handler = (e) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", handler);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", handler);
      document.body.style.overflow = "";
    };
  }, [open]);
  const isVisible = !hidden || open;
  const toggleLanguage = () => setLanguage(language === "ta" ? "en" : "ta");
  return /* @__PURE__ */ jsxs(
    "header",
    {
      style: {
        // Slide up by the full header height when hidden
        transform: isVisible ? "translateY(0)" : "translateY(-100%)",
        // Glassmorphism background — intensifies after scroll threshold
        background: scrolled ? "var(--header-bg-scrolled)" : "var(--header-bg-top)",
        // Stronger blur when scrolled
        backdropFilter: scrolled ? "blur(20px) saturate(180%)" : "blur(8px) saturate(120%)",
        WebkitBackdropFilter: scrolled ? "blur(20px) saturate(180%)" : "blur(8px) saturate(120%)",
        // Subtle border glow on scroll
        borderBottomColor: scrolled ? "var(--header-border-scrolled)" : "var(--header-border)",
        // Drop shadow appears on scroll
        boxShadow: scrolled ? "var(--header-shadow)" : "none"
      },
      className: [
        "fixed top-0 left-0 right-0 z-50 border-b",
        "transition-[transform,background,backdrop-filter,box-shadow]",
        "duration-400 ease-[cubic-bezier(0.32,0.72,0,1)]"
        // iOS-style decel curve
      ].join(" "),
      children: [
        /* @__PURE__ */ jsx("div", { className: "gov-stripe h-[3px]", "aria-hidden": "true" }),
        /* @__PURE__ */ jsx("div", { className: "bg-primary text-white border-b border-primary-foreground/5 overflow-hidden", children: /* @__PURE__ */ jsxs("div", { className: "max-w-7xl mx-auto px-4 py-2 flex items-center justify-between gap-4", children: [
          /* @__PURE__ */ jsxs("span", { className: "text-xs font-semibold font-tamil flex items-center gap-1.5 shrink-0 select-none border-r border-white/20 pr-4", children: [
            /* @__PURE__ */ jsx("span", { "aria-hidden": "true", className: "text-gold", children: "✦" }),
            language === "ta" ? "பதிவு எண். 2012/TNVS" : "Reg. No. 2012/TNVS"
          ] }),
          /* @__PURE__ */ jsx("div", { className: "flex-1 overflow-hidden relative flex items-center h-4 mx-2", children: /* @__PURE__ */ jsxs("div", { className: "animate-marquee whitespace-nowrap flex gap-16 font-tamil text-xs", children: [
            /* @__PURE__ */ jsx("span", { children: language === "ta" ? "புதிய நலத்திட்டம்: ₹2 லட்சம் மருத்துவ காப்பீட்டுக்கு உடனே விண்ணப்பிக்கவும்! ✦ புதிய அரசு சுற்றறிக்கை: குறுந்தொழில் முனைவோருக்கான சிறப்பு ஜிஎஸ்டி சலுகை அறிவிப்பு! ✦ சங்கமத்தின் அதிகாரப்பூர்வ சான்றிதழ் வங்கி கடன் பெற செல்லுபடியாகும்! ✦ ஆண்டு பொதுக்குழு கூட்டம் ஜூன் 15 அன்று சென்னையில் நடைபெறும்! ✦ " : "New Welfare Scheme: Apply for ₹2 Lakh Health Cover now! ✦ Latest Govt Circular: Special GST relief for micro-traders announced! ✦ TNVS Stamped Certificate is now legally valid for bank loan applications! ✦ Annual General Meeting to be held on June 15th at Chennai! ✦ " }),
            /* @__PURE__ */ jsx("span", { children: language === "ta" ? "புதிய நலத்திட்டம்: ₹2 லட்சம் மருத்துவ காப்பீட்டுக்கு உடனே விண்ணப்பிக்கவும்! ✦ புதிய அரசு சுற்றறிக்கை: குறுந்தொழில் முனைவோருக்கான சிறப்பு ஜிஎஸ்டி சலுகை அறிவிப்பு! ✦ சங்கமத்தின் அதிகாரப்பூர்வ சான்றிதழ் வங்கி கடன் பெற செல்லுபடியாகும்! ✦ ஆண்டு பொதுக்குழு கூட்டம் ஜூன் 15 அன்று சென்னையில் நடைபெறும்! ✦ " : "New Welfare Scheme: Apply for ₹2 Lakh Health Cover now! ✦ Latest Govt Circular: Special GST relief for micro-traders announced! ✦ TNVS Stamped Certificate is now legally valid for bank loan applications! ✦ Annual General Meeting to be held on June 15th at Chennai! ✦ " })
          ] }) }),
          /* @__PURE__ */ jsxs(
            "a",
            {
              href: "tel:04423456789",
              className: "hidden sm:flex items-center gap-1.5 text-xs font-medium opacity-90 hover:opacity-100 transition shrink-0 select-none border-l border-white/20 pl-4",
              "aria-label": "Call helpline 044-2345-6789",
              children: [
                /* @__PURE__ */ jsx(Phone, { className: "w-3 h-3", "aria-hidden": "true" }),
                "044-2345-6789"
              ]
            }
          )
        ] }) }),
        /* @__PURE__ */ jsxs("div", { className: "max-w-7xl mx-auto px-4 py-3 flex items-center justify-between gap-4", children: [
          /* @__PURE__ */ jsxs(Link, { to: "/", className: "flex items-center gap-2.5 group", "aria-label": "Tamil Nadu Vanigargalin Sangamam — Home", children: [
            /* @__PURE__ */ jsx(
              "img",
              {
                src: orgLogo,
                alt: "TNVS Logo",
                className: "w-10 h-10 object-contain transition-transform group-hover:scale-105 duration-300",
                width: 40,
                height: 40
              }
            ),
            /* @__PURE__ */ jsxs("div", { className: "leading-tight", children: [
              /* @__PURE__ */ jsx("div", { className: "font-display font-bold text-slate-800 text-sm md:text-[15px] truncate max-w-[200px] md:max-w-none", children: "Tamil Nadu Vanigargalin Sangamam" }),
              /* @__PURE__ */ jsx("div", { className: "font-tamil text-xs text-slate-500 mt-0.5", children: "தமிழ்நாடு வணிகர்களின் சங்கமம்" })
            ] })
          ] }),
          /* @__PURE__ */ jsx("nav", { className: "hidden md:flex items-center gap-1", "aria-label": "Main navigation", children: NAV.map((n) => {
            const active = loc.pathname === n.to;
            return /* @__PURE__ */ jsx(
              Link,
              {
                to: n.to,
                "aria-current": active ? "page" : void 0,
                className: [
                  "relative px-3 py-2 text-sm font-semibold transition-colors duration-200 min-h-[44px] inline-flex items-center rounded-lg",
                  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2",
                  active ? "text-primary after:absolute after:bottom-0 after:left-2 after:right-2 after:h-[2px] after:bg-gold after:rounded-full" : "text-slate-500 hover:text-primary hover:bg-slate-50/70 after:absolute after:bottom-0 after:left-2 after:right-2 after:h-[2px] after:bg-gold after:rounded-full after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300"
                ].join(" "),
                children: language === "ta" ? n.label : n.en
              },
              n.to
            );
          }) }),
          /* @__PURE__ */ jsxs("div", { className: "hidden md:flex items-center gap-2.5", children: [
            /* @__PURE__ */ jsxs(
              "button",
              {
                onClick: toggleLanguage,
                "aria-label": `Switch to ${language === "ta" ? "English" : "Tamil"}`,
                "aria-pressed": language === "ta",
                className: "inline-flex items-center gap-1 px-3 py-2 rounded-[10px] text-xs font-semibold border border-slate-200/80 bg-white/60 hover:bg-white/90 backdrop-blur-sm transition text-slate-700 min-h-[44px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-1 cursor-pointer",
                children: [
                  /* @__PURE__ */ jsx("span", { className: language === "ta" ? "font-bold text-primary" : "text-slate-400", children: "TA" }),
                  /* @__PURE__ */ jsx("span", { className: "text-slate-300", "aria-hidden": "true", children: "|" }),
                  /* @__PURE__ */ jsx("span", { className: language === "en" ? "font-bold text-primary" : "text-slate-400", children: "EN" })
                ]
              }
            ),
            /* @__PURE__ */ jsx(
              "button",
              {
                onClick: toggleTheme,
                "aria-label": `Switch to ${theme === "light" ? "dark" : "light"} mode`,
                className: "inline-flex items-center justify-center p-2.5 rounded-[10px] border border-slate-200/80 bg-white/60 hover:bg-white/90 backdrop-blur-sm transition text-slate-700 min-h-[44px] min-w-[44px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-1 cursor-pointer",
                children: theme === "light" ? /* @__PURE__ */ jsx(Moon, { className: "w-4 h-4 text-slate-600" }) : /* @__PURE__ */ jsx(Sun, { className: "w-4 h-4 text-amber-500 animate-[spin_8s_linear_infinite]" })
              }
            ),
            /* @__PURE__ */ jsxs(
              Link,
              {
                to: "/dashboard",
                className: "inline-flex items-center gap-1.5 border border-primary/20 bg-primary/6 text-primary px-4 py-2 rounded-[10px] text-sm font-semibold hover:bg-primary hover:text-white transition duration-200 active:scale-95 min-h-[44px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2",
                children: [
                  /* @__PURE__ */ jsx(User, { className: "w-3.5 h-3.5", "aria-hidden": "true" }),
                  language === "ta" ? "எனது கணக்கு" : "My Account"
                ]
              }
            )
          ] }),
          /* @__PURE__ */ jsx(
            "button",
            {
              className: "md:hidden p-2 min-h-[44px] min-w-[44px] flex items-center justify-center text-slate-600 border border-slate-200/80 rounded-[10px] bg-white/60 backdrop-blur-sm hover:bg-white/90 transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary",
              onClick: () => setOpen(true),
              "aria-label": "Open navigation menu",
              "aria-expanded": open,
              "aria-haspopup": "dialog",
              children: /* @__PURE__ */ jsx(Menu, { className: "w-5 h-5", "aria-hidden": "true" })
            }
          )
        ] }),
        open && /* @__PURE__ */ jsxs(
          "div",
          {
            className: "md:hidden fixed inset-0 z-[60] flex flex-col",
            role: "dialog",
            "aria-modal": "true",
            "aria-label": "Navigation menu",
            ref: menuRef,
            children: [
              /* @__PURE__ */ jsx(
                "div",
                {
                  className: "absolute inset-0 bg-black/30 backdrop-blur-sm",
                  onClick: () => setOpen(false),
                  "aria-hidden": "true"
                }
              ),
              /* @__PURE__ */ jsxs(
                "div",
                {
                  className: "relative ml-auto w-full max-w-sm h-full flex flex-col animate-slide-up overflow-y-auto",
                  style: {
                    background: "var(--drawer-bg)",
                    backdropFilter: "blur(24px) saturate(200%)",
                    WebkitBackdropFilter: "blur(24px) saturate(200%)",
                    borderLeft: "1px solid var(--drawer-border)",
                    boxShadow: "var(--drawer-shadow)"
                  },
                  children: [
                    /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between px-5 py-4 border-b border-slate-100/80", children: [
                      /* @__PURE__ */ jsxs("div", { children: [
                        /* @__PURE__ */ jsx("div", { className: "text-sm font-bold text-slate-800", children: "Menu" }),
                        /* @__PURE__ */ jsx("div", { className: "text-xs text-slate-400 font-tamil", children: "வழிகாட்டல்" })
                      ] }),
                      /* @__PURE__ */ jsx(
                        "button",
                        {
                          onClick: () => setOpen(false),
                          "aria-label": "Close navigation menu",
                          className: "p-2 rounded-[10px] hover:bg-slate-100/80 transition text-slate-500 min-h-[44px] min-w-[44px] flex items-center justify-center",
                          children: /* @__PURE__ */ jsx(X, { className: "w-5 h-5", "aria-hidden": "true" })
                        }
                      )
                    ] }),
                    /* @__PURE__ */ jsx("nav", { className: "flex-1 px-4 py-3 space-y-1", "aria-label": "Mobile navigation", children: NAV.map((n) => {
                      const active = loc.pathname === n.to;
                      return /* @__PURE__ */ jsxs(
                        Link,
                        {
                          to: n.to,
                          onClick: () => setOpen(false),
                          "aria-current": active ? "page" : void 0,
                          className: [
                            "flex items-center justify-between px-4 min-h-[52px] rounded-xl transition",
                            "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary",
                            active ? "bg-primary/8 text-primary" : "hover:bg-slate-50/80 text-slate-700"
                          ].join(" "),
                          children: [
                            /* @__PURE__ */ jsx("span", { className: "text-sm font-semibold", children: language === "ta" ? n.label : n.en }),
                            /* @__PURE__ */ jsx("span", { className: "font-tamil text-xs text-slate-400", children: language === "ta" ? n.en : n.label })
                          ]
                        },
                        n.to
                      );
                    }) }),
                    /* @__PURE__ */ jsxs("div", { className: "px-4 py-4 border-t border-slate-100/80 space-y-3", children: [
                      /* @__PURE__ */ jsxs("div", { className: "flex gap-2", children: [
                        /* @__PURE__ */ jsx(
                          "button",
                          {
                            onClick: () => {
                              setLanguage("ta");
                              setOpen(false);
                            },
                            className: [
                              "flex-1 py-3 rounded-xl text-sm font-semibold border transition min-h-[48px] cursor-pointer",
                              language === "ta" ? "bg-primary text-white border-primary" : "bg-white/70 text-slate-600 border-slate-200/80 hover:bg-white/90"
                            ].join(" "),
                            "aria-pressed": language === "ta",
                            children: "தமிழ்"
                          }
                        ),
                        /* @__PURE__ */ jsx(
                          "button",
                          {
                            onClick: () => {
                              setLanguage("en");
                              setOpen(false);
                            },
                            className: [
                              "flex-1 py-3 rounded-xl text-sm font-semibold border transition min-h-[48px] cursor-pointer",
                              language === "en" ? "bg-primary text-white border-primary" : "bg-white/70 text-slate-600 border-slate-200/80 hover:bg-white/90"
                            ].join(" "),
                            "aria-pressed": language === "en",
                            children: "English"
                          }
                        )
                      ] }),
                      /* @__PURE__ */ jsx(
                        "button",
                        {
                          onClick: () => {
                            toggleTheme();
                            setOpen(false);
                          },
                          className: "w-full flex items-center justify-center gap-2 border border-slate-200/80 bg-white/70 text-slate-700 py-3 rounded-xl text-sm font-semibold hover:bg-white/90 transition min-h-[48px] cursor-pointer",
                          children: theme === "light" ? /* @__PURE__ */ jsxs(Fragment, { children: [
                            /* @__PURE__ */ jsx(Moon, { className: "w-4 h-4 text-slate-600" }),
                            /* @__PURE__ */ jsx("span", { children: language === "ta" ? "இருண்ட பயன்முறை" : "Dark Mode" })
                          ] }) : /* @__PURE__ */ jsxs(Fragment, { children: [
                            /* @__PURE__ */ jsx(Sun, { className: "w-4 h-4 text-amber-500 animate-[spin_8s_linear_infinite]" }),
                            /* @__PURE__ */ jsx("span", { children: language === "ta" ? "ஒளி பயன்முறை" : "Light Mode" })
                          ] })
                        }
                      ),
                      /* @__PURE__ */ jsxs(
                        Link,
                        {
                          to: "/dashboard",
                          onClick: () => setOpen(false),
                          className: "flex items-center justify-center gap-2 border border-primary/20 bg-primary/6 text-primary py-3 rounded-xl text-sm font-semibold hover:bg-primary hover:text-white transition min-h-[48px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary",
                          children: [
                            /* @__PURE__ */ jsx(User, { className: "w-4 h-4", "aria-hidden": "true" }),
                            language === "ta" ? "எனது கணக்கு" : "My Account"
                          ]
                        }
                      ),
                      /* @__PURE__ */ jsx(
                        Link,
                        {
                          to: "/membership",
                          onClick: () => setOpen(false),
                          className: "flex items-center justify-center bg-primary text-white py-3 rounded-xl text-sm font-semibold hover:bg-primary/90 transition min-h-[48px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary",
                          children: language === "ta" ? "உறுப்பினர் சேர்க்கை" : "Apply for Membership"
                        }
                      ),
                      /* @__PURE__ */ jsxs(
                        "a",
                        {
                          href: "tel:04423456789",
                          className: "flex items-center justify-center gap-2 text-xs text-slate-500 py-2",
                          children: [
                            /* @__PURE__ */ jsx(Phone, { className: "w-3.5 h-3.5", "aria-hidden": "true" }),
                            "Helpline: 044-2345-6789 · Mon–Sat 10am–6pm"
                          ]
                        }
                      )
                    ] })
                  ]
                }
              )
            ]
          }
        )
      ]
    }
  );
}
function SiteFooter() {
  const { t } = useLanguage();
  return /* @__PURE__ */ jsxs("footer", { className: "mt-16 border-t border-slate-200/80 bg-primary text-slate-100", children: [
    /* @__PURE__ */ jsx("div", { className: "gov-stripe h-[3px]", "aria-hidden": "true" }),
    /* @__PURE__ */ jsxs("div", { className: "max-w-7xl mx-auto px-4 py-16 grid grid-cols-1 md:grid-cols-5 gap-10", children: [
      /* @__PURE__ */ jsxs("div", { className: "md:col-span-2 space-y-4", children: [
        /* @__PURE__ */ jsx("h3", { className: "font-display text-xl font-bold text-white", children: "Tamil Nadu Vanigargalin Sangamam" }),
        /* @__PURE__ */ jsx("div", { className: "font-tamil text-xs text-slate-300 mt-1", children: "தமிழ்நாடு வணிகர்களின் சங்கமம்" }),
        /* @__PURE__ */ jsx("p", { className: "text-xs md:text-sm text-slate-300 leading-relaxed max-w-sm", children: t(
          "தமிழ்நாடு முழுவதும் உள்ள வணிகர்களை ஒன்றிணைக்கும் ஒரு பதிவுசெய்யப்பட்ட சங்கம் - உறுப்பினர் சேர்க்கை, சான்றிதழ், வாதாடுதல் மற்றும் நலத்திட்ட சேவைகளை வழங்குகிறது.",
          "A registered association uniting traders across Tamil Nadu — providing membership, certification, advocacy and welfare services."
        ) })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "space-y-3.5", children: [
        /* @__PURE__ */ jsx("div", { className: "text-xs font-bold uppercase tracking-wider text-gold opacity-95", children: t("சேவைகள்", "Services") }),
        /* @__PURE__ */ jsxs("ul", { className: "space-y-2 text-xs text-slate-300", children: [
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(Link, { to: "/membership", className: "hover:underline hover:text-white transition duration-200", children: t("புதிய உறுப்பினர் சேர்க்கை", "New Membership") }) }),
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(Link, { to: "/services", className: "hover:underline hover:text-white transition duration-200", children: t("சான்றிதழ் பதிவிறக்கம்", "Certificate Download") }) }),
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(Link, { to: "/wings", className: "hover:underline hover:text-white transition duration-200", children: t("சங்கமப் பிரிவுகள்", "Wings & Divisions") }) }),
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(Link, { to: "/dashboard", className: "hover:underline hover:text-white transition duration-200", children: t("உறுப்பினர் டாஷ்போர்டு", "Member Dashboard") }) })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "space-y-3.5", children: [
        /* @__PURE__ */ jsx("div", { className: "text-xs font-bold uppercase tracking-wider text-gold opacity-95", children: t("சங்கம்", "Association") }),
        /* @__PURE__ */ jsxs("ul", { className: "space-y-2 text-xs text-slate-300", children: [
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(Link, { to: "/assistant", className: "hover:underline hover:text-white transition duration-200", children: t("உதவி மையம்", "Support Hub Portal") }) }),
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "#about", className: "hover:underline hover:text-white transition duration-200", children: t("சங்கத்தின் நன்மைகள்", "Member Benefits") }) }),
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "#terms", className: "hover:underline hover:text-white transition duration-200", children: t("விதிமுறைகள் மற்றும் நிபந்தனைகள்", "Rules & Guidelines") }) }),
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "#privacy", className: "hover:underline hover:text-white transition duration-200", children: t("தனியுரிமைக் கொள்கை", "Privacy Policy") }) })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "space-y-3.5", children: [
        /* @__PURE__ */ jsx("div", { className: "text-xs font-bold uppercase tracking-wider text-gold opacity-95", children: t("அலுவலகம்", "Office") }),
        /* @__PURE__ */ jsxs("ul", { className: "space-y-2 text-xs text-slate-300 leading-relaxed", children: [
          /* @__PURE__ */ jsx("li", { className: "text-slate-200", children: t("மயிலாப்பூர், சென்னை — 600 004", "Mylapore, Chennai — 600 004") }),
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "tel:04423456789", className: "text-slate-200 hover:text-white transition", children: t("உதவி எண்: 044-2345-6789", "Helpline: 044-2345-6789") }) }),
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "mailto:info@tnvs.gov.in", className: "hover:text-white transition", children: "info@tnvs.gov.in" }) }),
          /* @__PURE__ */ jsx("li", { className: "text-slate-400", children: t("திங்கள்–சனி · 10:00 – 18:00", "Mon–Sat · 10:00 – 18:00") })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "border-t border-slate-800/80 bg-slate-950/40", children: /* @__PURE__ */ jsxs("div", { className: "max-w-7xl mx-auto px-4 py-4 text-xs text-slate-400 flex flex-wrap justify-between gap-3", children: [
      /* @__PURE__ */ jsxs("span", { children: [
        "© ",
        (/* @__PURE__ */ new Date()).getFullYear(),
        " TN Vanigargalin Sangamam. ",
        t("அனைத்து உரிமைகளும் பாதுகாக்கப்பட்டவை.", "All rights reserved.")
      ] }),
      /* @__PURE__ */ jsx("span", { className: "font-semibold text-slate-300 text-xs", children: t("தமிழ்நாடு அரசு · பதிவுசெய்யப்பட்ட சங்கம்", "Government of Tamil Nadu · Registered Society") })
    ] }) })
  ] });
}
function NotFoundComponent() {
  return /* @__PURE__ */ jsx("div", { className: "flex min-h-[70vh] items-center justify-center px-4", children: /* @__PURE__ */ jsxs("div", { className: "max-w-md text-center", children: [
    /* @__PURE__ */ jsx("h1", { className: "text-7xl font-display font-bold text-primary", children: "404" }),
    /* @__PURE__ */ jsx("h2", { className: "mt-4 text-xl font-semibold", children: "பக்கம் காணப்படவில்லை" }),
    /* @__PURE__ */ jsx("p", { className: "mt-2 text-sm text-muted-foreground", children: "The page you're looking for doesn't exist." }),
    /* @__PURE__ */ jsx(Link, { to: "/", className: "mt-6 inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:bg-primary/90", children: "முகப்பு / Go home" })
  ] }) });
}
function ErrorComponent({ error, reset }) {
  console.error(error);
  const router2 = useRouter();
  return /* @__PURE__ */ jsx("div", { className: "flex min-h-[70vh] items-center justify-center px-4", children: /* @__PURE__ */ jsxs("div", { className: "max-w-md text-center", children: [
    /* @__PURE__ */ jsx("h1", { className: "text-xl font-semibold", children: "Something went wrong" }),
    /* @__PURE__ */ jsx("p", { className: "mt-2 text-sm text-muted-foreground", children: "Try refreshing or head back home." }),
    /* @__PURE__ */ jsxs("div", { className: "mt-6 flex justify-center gap-2", children: [
      /* @__PURE__ */ jsx("button", { onClick: () => {
        router2.invalidate();
        reset();
      }, className: "rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:bg-primary/90", children: "Try again" }),
      /* @__PURE__ */ jsx("a", { href: "/", className: "rounded-md border border-input bg-background px-4 py-2 text-sm font-medium hover:bg-accent", children: "Go home" })
    ] })
  ] }) });
}
const Route$9 = createRootRouteWithContext()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Tamil Nadu Vanigargalin Sangamam — Trader Membership Portal" },
      { name: "description", content: "Official portal for Tamil Nadu Vanigargalin Sangamam. Apply for membership, download certificates, access services and trader welfare." }
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "icon", href: "/favicon.png", type: "image/png" },
      { rel: "apple-touch-icon", href: "/favicon.png" }
    ]
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent
});
function RootShell({ children }) {
  return /* @__PURE__ */ jsxs("html", { lang: "ta", children: [
    /* @__PURE__ */ jsx("head", { children: /* @__PURE__ */ jsx(HeadContent, {}) }),
    /* @__PURE__ */ jsxs("body", { children: [
      children,
      /* @__PURE__ */ jsx(Scripts, {})
    ] })
  ] });
}
function RootComponent() {
  const { queryClient } = Route$9.useRouteContext();
  return /* @__PURE__ */ jsx(QueryClientProvider, { client: queryClient, children: /* @__PURE__ */ jsx(LanguageProvider, { children: /* @__PURE__ */ jsx(ThemeProvider, { children: /* @__PURE__ */ jsx(RootInner, {}) }) }) });
}
function RootInner() {
  const { language } = useLanguage();
  const location = useLocation();
  useEffect(() => {
    if (typeof document !== "undefined") {
      document.documentElement.lang = language;
    }
  }, [language]);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsxs("div", { className: "min-h-screen flex flex-col pt-[85px]", children: [
      /* @__PURE__ */ jsx("a", { href: "#main-content", className: "sr-only focus:not-sr-only focus:absolute focus:top-3 focus:left-3 focus:z-100 focus:px-4 focus:py-2 focus:bg-primary focus:text-primary-foreground focus:rounded-md focus:text-sm focus:font-medium", children: "Skip to main content" }),
      /* @__PURE__ */ jsx(SiteHeader, {}),
      /* @__PURE__ */ jsx("main", { id: "main-content", className: "flex-1", children: /* @__PURE__ */ jsx(Outlet, {}) }),
      /* @__PURE__ */ jsx(SiteFooter, {})
    ] }),
    /* @__PURE__ */ jsx(Toaster, { position: "bottom-right", richColors: true, closeButton: true })
  ] });
}
const $$splitComponentImporter$7 = () => import("./wings-Cy5T343P.js");
const Route$8 = createFileRoute("/wings")({
  head: () => ({
    meta: [{
      title: "Wings & Divisions · Tamil Nadu Vanigargalin Sangamam"
    }, {
      name: "description",
      content: "Explore the specialized wings and regional constituencies of Tamil Nadu Vanigargalin Sangamam."
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$7, "component")
});
const $$splitComponentImporter$6 = () => import("./voter-id-BJplttDH.js");
const Route$7 = createFileRoute("/voter-id")({
  validateSearch: (search) => {
    return {
      q: search.q ? search.q : void 0
    };
  },
  head: () => ({
    meta: [{
      title: "Sangamam Membership Card · TNVS Portal"
    }, {
      name: "description",
      content: "Generate Tamilnadu Vanigargalin Sangamam membership ID cards."
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$6, "component")
});
const $$splitComponentImporter$5 = () => import("./services-K24Sunk-.js");
const Route$6 = createFileRoute("/services")({
  head: () => ({
    meta: [{
      title: "Services · Tamil Nadu Vanigargalin Sangamam"
    }, {
      name: "description",
      content: "Membership, certification, welfare schemes, legal advisory and business support services for Tamil Nadu traders."
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$5, "component")
});
const $$splitComponentImporter$4 = () => import("./membership-NNYhFJgA.js");
const membershipSearchSchema = z.object({
  wing: z.string().optional(),
  name: z.string().optional(),
  epic: z.string().optional(),
  mobile: z.string().optional(),
  district: z.string().optional(),
  assembly: z.string().optional(),
  address: z.string().optional()
});
const Route$5 = createFileRoute("/membership")({
  validateSearch: (search) => membershipSearchSchema.parse(search),
  head: () => ({
    meta: [{
      title: "Apply for Membership · TN Vanigargalin Sangamam"
    }, {
      name: "description",
      content: "Apply online for Tamil Nadu Vanigargalin Sangamam membership in 5 minutes."
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$4, "component")
});
const $$splitComponentImporter$3 = () => import("./dashboard-BUs4nKqU.js");
const Route$4 = createFileRoute("/dashboard")({
  head: () => ({
    meta: [{
      title: "Member Dashboard · TN Vanigargalin Sangamam"
    }, {
      name: "description",
      content: "Member dashboard — view your EPIC ID, download certificate, manage renewals and welfare claims."
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$3, "component")
});
const $$splitComponentImporter$2 = () => import("./contact-d_rOx8xV.js");
const Route$3 = createFileRoute("/contact")({
  head: () => ({
    meta: [{
      title: "Contact · TN Vanigargalin Sangamam"
    }, {
      name: "description",
      content: "Get in touch — head office in Mylapore, Chennai. Helpline, email and district offices."
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$2, "component")
});
function DemoModeBanner({
  message = "Preview Mode — This dashboard shows demo data. Real data will be available after official launch.",
  messageTa = "முன்னோட்ட பயன்முறை — இந்த டாஷ்போர்டு மாதிரி தரவைக் காட்டுகிறது. அதிகாரப்பூர்வ வெளியீட்டிற்குப் பிறகு உண்மையான தரவு கிடைக்கும்.",
  dismissible = true
}) {
  const [dismissed, setDismissed] = useState(false);
  const { language } = useLanguage();
  if (dismissed) return null;
  return /* @__PURE__ */ jsxs(
    "div",
    {
      role: "status",
      "aria-label": "Demo mode notice",
      className: "flex items-start gap-3 bg-surface-info border border-border-info rounded-xl p-4 text-sm text-text-info shadow-xs animate-fade-in",
      children: [
        /* @__PURE__ */ jsx(
          Info,
          {
            className: "w-5 h-5 shrink-0 mt-0.5 text-text-info",
            "aria-hidden": "true"
          }
        ),
        /* @__PURE__ */ jsxs("div", { className: "flex-1 min-w-0 text-left", children: [
          /* @__PURE__ */ jsx("p", { className: "text-sm font-semibold text-text-info", children: language === "ta" ? "முன்னோட்ட பயன்முறை / Demo & Preview Mode" : "Demo & Preview Mode / முன்னோட்ட பயன்முறை" }),
          /* @__PURE__ */ jsx("p", { className: "text-xs text-text-info/90 mt-1 leading-relaxed font-tamil", children: messageTa }),
          /* @__PURE__ */ jsx("p", { className: "text-xs text-text-info/90 mt-0.5 leading-relaxed", children: message })
        ] }),
        dismissible && /* @__PURE__ */ jsx(
          "button",
          {
            onClick: () => setDismissed(true),
            "aria-label": "Dismiss demo mode notice",
            className: "shrink-0 p-1 rounded-lg hover:bg-text-info/10 transition text-text-info",
            children: /* @__PURE__ */ jsx(X, { className: "w-4 h-4", "aria-hidden": "true" })
          }
        )
      ]
    }
  );
}
const Route$2 = createFileRoute("/assistant")({
  head: () => ({
    meta: [
      { title: "Support Center · TN Vanigargalin Sangamam" },
      { name: "description", content: "Get instant help, verify membership status, view welfare schemes, and read FAQs in Tamil and English." }
    ]
  }),
  component: Assistant
});
function Assistant() {
  const { language, t } = useLanguage();
  const [epicSearch, setEpicSearch] = useState("");
  const [checkedProfile, setCheckedProfile] = useState(null);
  const [isSearching, setIsSearching] = useState(false);
  const [searchError, setSearchError] = useState("");
  const [activeFaq, setActiveFaq] = useState(null);
  const handleCheckStatus = (e) => {
    e.preventDefault();
    if (!epicSearch.trim()) return;
    setIsSearching(true);
    setSearchError("");
    setCheckedProfile(null);
    setTimeout(() => {
      setIsSearching(false);
      const query = epicSearch.trim().toUpperCase();
      if (query.length > 2) {
        setCheckedProfile({
          name: "Senthil Kumar N (Demo Profile)",
          mobile: "+91 944 20 •• 44",
          district: "Chennai",
          epic: query.startsWith("TNVS") ? query : `TNVS-${query}`,
          timeline: [
            { label: t("விண்ணப்பம் பெறப்பட்டது", "Application Received"), desc: t("அனைத்து விவரங்களும் பெறப்பட்டன", "Submitted successfully"), completed: true, date: "May 12" },
            { label: t("சரிபார்ப்பு பணி", "Under Verification"), desc: t("மாவட்ட நிர்வாக ஒப்புதல் பெற்றது", "Approved by district team"), completed: true, date: "May 14" },
            { label: t("அட்டை உருவாக்கப்பட்டது", "Card Generated"), desc: t("செயலில் உள்ள உறுப்பினர் அட்டை", "Active and downloadable"), completed: true, date: "May 15" }
          ]
        });
      } else {
        setSearchError(t("சரியான EPIC ID அல்லது கைபேசி எண்ணை உள்ளிடவும்.", "Please enter a valid EPIC ID or Mobile Number."));
      }
    }, 800);
  };
  const welfareSchemes = [
    {
      title: t("சுகாதார காப்பீடு", "Health Insurance"),
      desc: t("உங்களுக்கும் உங்கள் குடும்பத்திற்கும் ₹2,00,000 வரை ரொக்கமில்லா மருத்துவமனை அனுமதி.", "Cashless hospitalization up to ₹2,00,000 for your family."),
      icon: /* @__PURE__ */ jsx(Heart, { className: "w-5 h-5 text-rose-500", "aria-hidden": "true" }),
      bg: "bg-rose-50/50 border-rose-100"
    },
    {
      title: t("கல்வி உதவித்தொகை", "Educational Scholarship"),
      desc: t("செயலில் உள்ள வணிகர்களின் குழந்தைகளுக்கு ஆண்டுக்கு ₹15,000 வரை உதவித்தொகை.", "Up to ₹15,000 per year for children of active traders."),
      icon: /* @__PURE__ */ jsx(GraduationCap, { className: "w-5 h-5 text-indigo-500", "aria-hidden": "true" }),
      bg: "bg-indigo-50/50 border-indigo-100"
    },
    {
      title: t("அவசர நிவாரண நிதி", "Emergency Relief Fund"),
      desc: t("கடை தீ விபத்து அல்லது இயற்கை பேரிடர் ஏற்பட்டால் 48 மணி நேரத்திற்குள் உடனடி நிவாரணம்.", "Immediate disaster/shop fire support within 48 hours."),
      icon: /* @__PURE__ */ jsx(ShieldAlert, { className: "w-5 h-5 text-amber-500", "aria-hidden": "true" }),
      bg: "bg-amber-50/50 border-amber-100"
    }
  ];
  const faqs = [
    {
      q: t("தேவையான ஆவணங்கள் என்னென்ன?", "What documents are required for application?"),
      a: t("புதிய உறுப்பினர் சேர்க்கைக்கு: 1. ஆதார் அட்டை, 2. கடை உரிமம் அல்லது GST சான்று, 3. பாஸ்போர்ட் அளவு புகைப்படம்.", "For new membership: 1. Aadhaar Card, 2. Shop License or GST certificate, 3. Passport size photo.")
    },
    {
      q: t("உறுப்பினர் சேர்க்கை மற்றும் புதுப்பித்தல் கட்டணம் எவ்வளவு?", "How much is the membership registration fee?"),
      a: t("வருடாந்திர உறுப்பினர் கட்டணம் ₹500 மட்டுமே. வருடாந்திர புதுப்பித்தல் கட்டணமும் ₹500 ஆகும். இரண்டையும் ஆன்லைனில் பாதுகாப்பாக செலுத்தலாம்.", "The annual membership registration fee is ₹500 only. Renewal fees are also ₹500 per year, payable securely online.")
    },
    {
      q: t("நலத்திட்டங்கள் பெற தகுதி என்ன?", "What is the eligibility for welfare schemes?"),
      a: t("நலத்திட்டங்களுக்கு தகுதி பெற, நீங்கள் குறைந்தபட்சம் 6 மாதங்கள் செயலில் உள்ள உறுப்பினராக இருக்க வேண்டும் மற்றும் உங்கள் சந்தாக்கள் நிலுவையின்றி இருக்க வேண்டும்.", "To qualify for welfare, you must be a registered member for at least 6 months, and hold an Active Membership Card (no pending dues).")
    },
    {
      q: t("உறுப்பினர் சான்றிதழை எவ்வாறு பதிவிறக்கம் செய்வது?", "How do I download my membership certificate?"),
      a: t("விண்ணப்பம் அங்கீகரிக்கப்பட்டதும், உங்கள் உத்தியோகபூர்வ சான்றிதழை உங்கள் உறுப்பினர் டாஷ்போர்டில் இருந்தோ அல்லது சேவைகள் பக்கத்திலிருந்தோ எந்த நேரத்திலும் பதிவிறக்கம் செய்யலாம்.", "Once approved, you can instantly download your official stamped membership certificate from the Services page or your dashboard.")
    }
  ];
  return /* @__PURE__ */ jsxs("div", { className: "max-w-5xl mx-auto px-4 py-8 space-y-8", children: [
    /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsxs(Link, { to: "/services", className: "inline-flex items-center gap-1.5 text-xs font-semibold text-primary hover:underline transition-all", children: [
      /* @__PURE__ */ jsx(ArrowLeft, { className: "w-3.5 h-3.5", "aria-hidden": "true" }),
      " ",
      t("சேவைகளுக்குத் திரும்பு", "Back to Services")
    ] }) }),
    /* @__PURE__ */ jsxs("div", { className: "text-center space-y-3 max-w-2xl mx-auto", children: [
      /* @__PURE__ */ jsxs("div", { className: "inline-flex items-center gap-2 bg-primary/10 text-primary px-3.5 py-1.5 rounded-full text-xs font-semibold", children: [
        /* @__PURE__ */ jsx(Sparkles, { className: "w-4 h-4 text-primary animate-pulse", "aria-hidden": "true" }),
        /* @__PURE__ */ jsx("span", { children: t("சங்கம உதவி மற்றும் சேவை மையம்", "Support & Service Center") })
      ] }),
      /* @__PURE__ */ jsx("h1", { className: "font-display text-3xl md:text-4xl font-bold text-slate-800 leading-tight", children: t("உங்களுக்கு எவ்வாறு உதவ முடியும்?", "How can we help you today?") }),
      /* @__PURE__ */ jsx("p", { className: "text-xs md:text-sm text-slate-500 leading-relaxed font-tamil", children: t(
        "உறுப்பினர் சேர்க்கை, நலத்திட்டங்கள் மற்றும் கணக்கு சரிபார்ப்புகளை விரைவாக செய்ய உங்கள் உத்தியோகபூர்வ உதவி மையம்.",
        "Your official support center to check membership, verify status, and explore welfare schemes instantly."
      ) })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-3 gap-6", children: [
      /* @__PURE__ */ jsxs("div", { className: "lg:col-span-2 space-y-6", children: [
        /* @__PURE__ */ jsxs("div", { className: "bg-white border border-slate-200/80 rounded-2xl p-5 md:p-6 shadow-sm space-y-4", children: [
          /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2 pb-3 border-b border-slate-100", children: [
            /* @__PURE__ */ jsx("div", { className: "w-8 h-8 rounded-lg bg-amber-50 text-amber-500 flex items-center justify-center border border-amber-100", children: /* @__PURE__ */ jsx(HelpCircle, { className: "w-4 h-4", "aria-hidden": "true" }) }),
            /* @__PURE__ */ jsx("h3", { className: "font-display font-bold text-base text-slate-800", children: t("அடிக்கடி கேட்கப்படும் கேள்விகள் (FAQs)", "Frequently Asked Questions") })
          ] }),
          /* @__PURE__ */ jsx("div", { className: "space-y-2.5", children: faqs.map((faq, idx) => {
            const isOpen = activeFaq === idx;
            return /* @__PURE__ */ jsxs(
              "div",
              {
                className: `border rounded-xl overflow-hidden transition duration-300 bg-white ${isOpen ? "border-primary/30 ring-4 ring-primary/5" : "border-slate-100 hover:bg-slate-50/40"}`,
                children: [
                  /* @__PURE__ */ jsxs(
                    "button",
                    {
                      onClick: () => setActiveFaq(isOpen ? null : idx),
                      className: "w-full px-4 py-3.5 flex items-center justify-between text-left gap-3 cursor-pointer min-h-[44px]",
                      "aria-expanded": isOpen,
                      children: [
                        /* @__PURE__ */ jsx("span", { className: "text-xs font-bold text-slate-700 leading-snug font-tamil", children: faq.q }),
                        /* @__PURE__ */ jsx(
                          ChevronDown,
                          {
                            className: `w-4 h-4 text-slate-400 shrink-0 transition-transform duration-300 ${isOpen ? "rotate-180 text-primary" : ""}`,
                            "aria-hidden": "true"
                          }
                        )
                      ]
                    }
                  ),
                  /* @__PURE__ */ jsx(AnimatePresence, { initial: false, children: isOpen && /* @__PURE__ */ jsx(
                    motion.div,
                    {
                      initial: { height: 0, opacity: 0 },
                      animate: { height: "auto", opacity: 1 },
                      exit: { height: 0, opacity: 0 },
                      transition: { duration: 0.25 },
                      children: /* @__PURE__ */ jsx("div", { className: "px-4 pb-4 pt-1.5 border-t border-slate-100 text-xs text-slate-500 leading-relaxed font-tamil", children: faq.a })
                    }
                  ) })
                ]
              },
              idx
            );
          }) })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "bg-white border border-slate-200/80 rounded-2xl p-5 md:p-6 shadow-sm space-y-5", children: [
          /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2 pb-3 border-b border-slate-100", children: [
            /* @__PURE__ */ jsx("div", { className: "w-8 h-8 rounded-lg bg-emerald-50 text-emerald-800 flex items-center justify-center border border-emerald-100", children: /* @__PURE__ */ jsx(Search, { className: "w-4 h-4", "aria-hidden": "true" }) }),
            /* @__PURE__ */ jsx("h3", { className: "font-display font-bold text-base text-slate-800", children: t("உறுப்பினர் நிலை சரிபார்த்தல்", "Verify Membership Status") })
          ] }),
          /* @__PURE__ */ jsx("p", { className: "text-xs text-slate-500 leading-relaxed font-tamil", children: t(
            "உங்கள் உறுப்பினர் நிலையை அறிய, தயவுசெய்து உங்கள் EPIC ID / மொபைல் எண்ணை உள்ளிடவும்:",
            "To check your membership status, please enter your EPIC ID or registered Mobile Number below:"
          ) }),
          /* @__PURE__ */ jsxs("form", { onSubmit: handleCheckStatus, className: "flex gap-2 max-w-md", children: [
            /* @__PURE__ */ jsx(
              "input",
              {
                required: true,
                type: "text",
                value: epicSearch,
                onChange: (e) => setEpicSearch(e.target.value),
                placeholder: t("e.g. TNVS-782 அல்லது கைபேசி எண்", "e.g. TNVS-782 or Mobile Number"),
                className: "flex-1 border border-slate-200 bg-slate-50/30 rounded-xl px-4 py-3 text-xs md:text-sm focus:outline-none focus:ring-4 focus:ring-primary/10 focus:border-primary transition duration-300 min-h-[44px]"
              }
            ),
            /* @__PURE__ */ jsx(
              "button",
              {
                type: "submit",
                disabled: isSearching,
                className: "bg-primary hover:bg-primary/95 text-white font-bold py-2.5 px-5 rounded-xl text-xs active:scale-95 transition cursor-pointer min-h-[44px]",
                children: isSearching ? t("சரிபார்க்கிறது...", "Verifying...") : t("தேடுக", "Verify")
              }
            )
          ] }),
          /* @__PURE__ */ jsx("div", { className: "mt-1", children: /* @__PURE__ */ jsx(DemoModeBanner, { message: t("விண்ணப்ப நிலை சரிபார்ப்பு தற்போது டெமோ பயன்முறையில் உள்ளது.", "Membership status checking is currently simulated for demo purposes.") }) }),
          searchError && /* @__PURE__ */ jsxs("div", { className: "p-3 bg-red-50 text-red-700 text-xs font-semibold rounded-xl border border-red-100 flex items-center gap-2 font-tamil animate-fade-in", children: [
            /* @__PURE__ */ jsx(ShieldAlert, { className: "w-4 h-4 text-red-500 shrink-0", "aria-hidden": "true" }),
            searchError
          ] }),
          /* @__PURE__ */ jsx(AnimatePresence, { children: checkedProfile && /* @__PURE__ */ jsxs(
            motion.div,
            {
              initial: { opacity: 0, y: 10 },
              animate: { opacity: 1, y: 0 },
              exit: { opacity: 0 },
              className: "p-5 bg-slate-50/50 border border-slate-200/60 rounded-2xl space-y-5 shadow-xs",
              children: [
                /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between border-b border-slate-100 pb-3", children: [
                  /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2 text-slate-800 font-bold text-xs md:text-sm", children: [
                    /* @__PURE__ */ jsx(CheckCircle2, { className: "w-5 h-5 text-emerald-800", "aria-hidden": "true" }),
                    /* @__PURE__ */ jsx("span", { children: t("உறுப்பினர் கணக்கு செயலில் உள்ளது", "Active Profile (Demo)") })
                  ] }),
                  /* @__PURE__ */ jsx("span", { className: "text-xs bg-emerald-50 text-emerald-800 border border-emerald-100 font-bold px-2.5 py-0.5 rounded-full uppercase tracking-wider", children: t("சரிபார்க்கப்பட்டது", "Verified") })
                ] }),
                /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-2 gap-4 text-xs", children: [
                  /* @__PURE__ */ jsxs("div", { className: "bg-white p-3 rounded-xl border border-slate-100 flex items-center gap-2.5 shadow-xs", children: [
                    /* @__PURE__ */ jsx(User, { className: "w-4 h-4 text-slate-400 shrink-0", "aria-hidden": "true" }),
                    /* @__PURE__ */ jsxs("div", { children: [
                      /* @__PURE__ */ jsx("div", { className: "text-xs uppercase font-bold text-slate-400", children: "Name" }),
                      /* @__PURE__ */ jsx("div", { className: "font-semibold text-slate-700", children: checkedProfile.name })
                    ] })
                  ] }),
                  /* @__PURE__ */ jsxs("div", { className: "bg-white p-3 rounded-xl border border-slate-100 flex items-center gap-2.5 shadow-xs", children: [
                    /* @__PURE__ */ jsx(Phone, { className: "w-4 h-4 text-slate-400 shrink-0", "aria-hidden": "true" }),
                    /* @__PURE__ */ jsxs("div", { children: [
                      /* @__PURE__ */ jsx("div", { className: "text-xs uppercase font-bold text-slate-400", children: "Mobile" }),
                      /* @__PURE__ */ jsx("div", { className: "font-semibold text-slate-700", children: checkedProfile.mobile })
                    ] })
                  ] }),
                  /* @__PURE__ */ jsxs("div", { className: "bg-white p-3 rounded-xl border border-slate-100 flex items-center gap-2.5 shadow-xs", children: [
                    /* @__PURE__ */ jsx(MapPin, { className: "w-4 h-4 text-slate-400 shrink-0", "aria-hidden": "true" }),
                    /* @__PURE__ */ jsxs("div", { children: [
                      /* @__PURE__ */ jsx("div", { className: "text-xs uppercase font-bold text-slate-400", children: "District" }),
                      /* @__PURE__ */ jsx("div", { className: "font-semibold text-slate-700", children: checkedProfile.district })
                    ] })
                  ] }),
                  /* @__PURE__ */ jsxs("div", { className: "bg-white p-3 rounded-xl border border-slate-100 flex items-center gap-2.5 shadow-xs", children: [
                    /* @__PURE__ */ jsx(Award, { className: "w-4 h-4 text-emerald-800 shrink-0", "aria-hidden": "true" }),
                    /* @__PURE__ */ jsxs("div", { children: [
                      /* @__PURE__ */ jsx("div", { className: "text-xs uppercase font-bold text-slate-400", children: "EPIC ID" }),
                      /* @__PURE__ */ jsx("div", { className: "font-mono font-bold text-emerald-850", children: checkedProfile.epic })
                    ] })
                  ] })
                ] }),
                /* @__PURE__ */ jsxs("div", { className: "border-t border-slate-100 pt-5 space-y-4", children: [
                  /* @__PURE__ */ jsx("div", { className: "text-xs uppercase font-bold tracking-wider text-slate-450", children: "Application Progress Timeline" }),
                  /* @__PURE__ */ jsx("div", { className: "space-y-4", children: checkedProfile.timeline.map((step, idx) => /* @__PURE__ */ jsxs("div", { className: "flex gap-3 relative", children: [
                    idx < checkedProfile.timeline.length - 1 && /* @__PURE__ */ jsx("div", { className: "absolute left-3.5 top-7 bottom-0 w-0.5 bg-emerald-100" }),
                    /* @__PURE__ */ jsx("div", { className: "w-7 h-7 rounded-full bg-emerald-50 text-emerald-800 border border-emerald-100 flex items-center justify-center shrink-0", children: /* @__PURE__ */ jsx(Check, { className: "w-3.5 h-3.5", "aria-hidden": "true" }) }),
                    /* @__PURE__ */ jsxs("div", { className: "flex-1", children: [
                      /* @__PURE__ */ jsxs("div", { className: "flex justify-between items-baseline", children: [
                        /* @__PURE__ */ jsx("h4", { className: "text-xs font-bold text-slate-800 leading-snug", children: step.label }),
                        /* @__PURE__ */ jsx("span", { className: "text-xs text-slate-400 font-mono", children: step.date })
                      ] }),
                      /* @__PURE__ */ jsx("p", { className: "text-xs text-slate-500 leading-relaxed font-tamil mt-0.5", children: step.desc })
                    ] })
                  ] }, idx)) })
                ] }),
                /* @__PURE__ */ jsxs("div", { className: "flex flex-wrap gap-2 pt-4 border-t border-slate-100", children: [
                  /* @__PURE__ */ jsxs(
                    Link,
                    {
                      to: "/voter-id",
                      search: { q: checkedProfile.epic },
                      className: "text-xs bg-emerald-600 hover:bg-emerald-700 text-white px-4 py-2.5 rounded-xl font-bold inline-flex items-center gap-1.5 transition shadow-sm active:scale-95 cursor-pointer min-h-[38px]",
                      children: [
                        t("அட்டை பெறுக", "Get ID Card"),
                        " ",
                        /* @__PURE__ */ jsx(ArrowRight, { className: "w-3.5 h-3.5" })
                      ]
                    }
                  ),
                  /* @__PURE__ */ jsxs(
                    Link,
                    {
                      to: "/services",
                      className: "text-xs bg-white border border-slate-200 text-slate-700 hover:bg-slate-50 px-4 py-2.5 rounded-xl font-bold inline-flex items-center gap-1.5 transition active:scale-95 cursor-pointer min-h-[38px]",
                      children: [
                        /* @__PURE__ */ jsx(FileText, { className: "w-3.5 h-3.5 text-slate-400" }),
                        " ",
                        t("சான்றிதழ் பெறுக", "Download Certificate")
                      ]
                    }
                  )
                ] })
              ]
            }
          ) })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "bg-white border border-slate-200/80 rounded-2xl p-5 md:p-6 shadow-sm space-y-5", children: [
          /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2 pb-3 border-b border-slate-100", children: [
            /* @__PURE__ */ jsx("div", { className: "w-8 h-8 rounded-lg bg-indigo-50 text-indigo-600 flex items-center justify-center border border-indigo-100", children: /* @__PURE__ */ jsx(Heart, { className: "w-4 h-4", "aria-hidden": "true" }) }),
            /* @__PURE__ */ jsx("h3", { className: "font-display font-bold text-base text-slate-800", children: t("சங்கமத்தின் சிறப்பு நலத்திட்டங்கள்", "Official Welfare Schemes") })
          ] }),
          /* @__PURE__ */ jsx("p", { className: "text-xs text-slate-500 leading-relaxed font-tamil", children: t(
            "தமிழ்நாடு வணிகர்களின் சங்கமம் உறுப்பினர்களுக்கு 3 முக்கிய நலத்திட்டங்களை வழங்குகிறது:",
            "Tamilnadu Vanigargalin Sangamam offers three core welfare schemes to all verified active members:"
          ) }),
          /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-4", children: welfareSchemes.map((scheme, idx) => /* @__PURE__ */ jsxs(
            "div",
            {
              className: `p-4 border rounded-2xl shadow-xs hover:shadow-sm transition flex flex-col justify-between space-y-3 ${scheme.bg}`,
              children: [
                /* @__PURE__ */ jsxs("div", { className: "space-y-2", children: [
                  /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
                    /* @__PURE__ */ jsx("div", { className: "p-1.5 bg-white rounded-lg border border-slate-100 shrink-0", children: scheme.icon }),
                    /* @__PURE__ */ jsx("h4", { className: "font-display font-bold text-xs text-slate-800 leading-tight", children: scheme.title })
                  ] }),
                  /* @__PURE__ */ jsx("p", { className: "text-xs text-slate-600 leading-relaxed font-tamil", children: scheme.desc })
                ] }),
                /* @__PURE__ */ jsx(
                  Link,
                  {
                    to: "/services",
                    className: "text-xs text-primary font-bold hover:underline inline-flex items-center gap-1 pt-1 cursor-pointer",
                    children: t("மேலும் அறிய →", "Learn more →")
                  }
                )
              ]
            },
            idx
          )) })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "space-y-6", children: [
        /* @__PURE__ */ jsxs("div", { className: "bg-gradient-to-br from-slate-900 to-slate-950 text-white rounded-2xl p-6 shadow-md space-y-4 relative overflow-hidden border border-slate-800", children: [
          /* @__PURE__ */ jsx("div", { className: "absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full blur-xl", "aria-hidden": "true" }),
          /* @__PURE__ */ jsxs("div", { className: "relative space-y-3", children: [
            /* @__PURE__ */ jsx("span", { className: "text-xs bg-gold/20 border border-gold/15 text-gold px-2.5 py-1 rounded-full font-bold uppercase tracking-wider", children: t("உறுப்பினர் சேர்க்கை", "Join Sangamam") }),
            /* @__PURE__ */ jsx("h3", { className: "font-display font-bold text-base leading-snug", children: t("5 நிமிடங்களில் ஆன்லைனில் விண்ணப்பிக்கவும்", "Apply Online in 5 Minutes") }),
            /* @__PURE__ */ jsx("p", { className: "text-xs text-slate-400 leading-relaxed font-tamil", children: t(
              "உங்களிடம் ஆதார் அட்டை, வணிக முகவரி சான்று மற்றும் புகைப்படம் தயாராக இருக்க வேண்டும். உடனே டிஜிட்டல் உறுப்பினர் அட்டை பெற்றிடுங்கள்.",
              "Submit details online, generate your digital ID card instantly, and receive your official framed certificate."
            ) }),
            /* @__PURE__ */ jsx("div", { className: "pt-2", children: /* @__PURE__ */ jsxs(
              Link,
              {
                to: "/membership",
                className: "w-full bg-white hover:bg-slate-100 text-slate-900 font-bold py-2.5 px-4 rounded-xl text-xs transition shadow-md active:scale-95 inline-flex items-center justify-center gap-2 cursor-pointer min-h-[40px]",
                children: [
                  t("விண்ணப்பிக்க தொடங்கவும்", "Start Application"),
                  /* @__PURE__ */ jsx(ArrowRight, { className: "w-4 h-4 text-slate-900", "aria-hidden": "true" })
                ]
              }
            ) })
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "bg-white border border-slate-200/80 rounded-2xl p-5 shadow-sm space-y-4", children: [
          /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2 pb-2 border-b border-slate-100", children: [
            /* @__PURE__ */ jsx("div", { className: "w-7 h-7 rounded-lg bg-emerald-50 flex items-center justify-center text-emerald-700 border border-emerald-100", children: /* @__PURE__ */ jsx(Award, { className: "w-3.5 h-3.5 text-emerald-800", "aria-hidden": "true" }) }),
            /* @__PURE__ */ jsx("h4", { className: "font-display font-bold text-xs text-slate-800", children: t("சங்கமத்தின் பணிகள்", "Advocacy & Services") })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "space-y-3", children: [
            /* @__PURE__ */ jsxs("div", { className: "text-xs text-slate-600 leading-relaxed", children: [
              /* @__PURE__ */ jsx("strong", { children: t("வணிகர் நலன் பாதுகாப்பு:", "Trader Welfare Advocacy:") }),
              " ",
              t("வணிகர்களின் உரிமைகளைப் பாதுகாக்கவும், அரசாங்க வர்த்தக கொள்கைகளில் நியாயமான பிரதிநிதித்துவத்தை உறுதி செய்யவும் அர்ப்பணிக்கப்பட்ட அமைப்பு.", "Protecting trader rights, facilitating policies, and ensuring representation across government forums.")
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "text-xs text-slate-600 leading-relaxed", children: [
              /* @__PURE__ */ jsx("strong", { children: t("உடனடி சான்றிதழ்கள்:", "Instant Certification:") }),
              " ",
              t("சங்கத்தின் பதிவு செய்யப்பட்ட உறுப்பினராகி, உங்கள் உத்தியோகபூர்வ கடைச் சான்றிதழைப் பதிவிறக்கிக் கொள்ளலாம்.", "Enroll online to get your membership certificate stamped and issued within minutes.")
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "bg-slate-50 border border-slate-200 rounded-2xl p-5 space-y-3", children: [
          /* @__PURE__ */ jsx("h4", { className: "font-display font-bold text-xs text-slate-800 font-tamil", children: t("அவசர உதவிக்கு தொடர்பு கொள்ளவும்", "Need Urgent Assistance?") }),
          /* @__PURE__ */ jsx("p", { className: "text-xs text-slate-500 leading-relaxed font-tamil", children: t(
            "நலத்திட்டங்கள் அல்லது அவசர நிவாரணம் பற்றிய கூடுதல் சந்தேகங்களுக்கு எங்கள் மாவட்ட அலுவலகத்தை அழைக்கவும்:",
            "For further queries regarding emergency fire relief, education, or insurance claims, call our official helpline:"
          ) }),
          /* @__PURE__ */ jsxs("div", { className: "bg-white p-3 rounded-xl border border-slate-200/60 flex items-center gap-2.5", children: [
            /* @__PURE__ */ jsx(Phone, { className: "w-4 h-4 text-primary shrink-0", "aria-hidden": "true" }),
            /* @__PURE__ */ jsxs("div", { className: "text-xs", children: [
              /* @__PURE__ */ jsx("div", { className: "font-bold text-slate-700", children: "044-2345-6789" }),
              /* @__PURE__ */ jsx("div", { className: "text-xs text-slate-400 font-medium", children: "Landline · Mon-Sat 10am-6pm" })
            ] })
          ] })
        ] })
      ] })
    ] })
  ] });
}
const $$splitComponentImporter$1 = () => import("./about-wt2nR-dk.js");
const Route$1 = createFileRoute("/about")({
  head: () => ({
    meta: [{
      title: "About · Tamil Nadu Vanigargalin Sangamam"
    }, {
      name: "description",
      content: "Learn about the mission, vision and history of Tamil Nadu Vanigargalin Sangamam — Tamil Nadu's official traders association."
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$1, "component")
});
const $$splitComponentImporter = () => import("./index-mvzKzn-4.js");
const Route = createFileRoute("/")({
  head: () => ({
    meta: [{
      title: "Tamil Nadu Vanigargalin Sangamam — Official Trader Portal"
    }, {
      name: "description",
      content: "Join Tamil Nadu's official traders association. Membership, certificates, advocacy and welfare for vanigars across the state."
    }, {
      property: "og:title",
      content: "Tamil Nadu Vanigargalin Sangamam"
    }, {
      property: "og:description",
      content: "Official portal for trader membership, services and welfare."
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter, "component")
});
const WingsRoute = Route$8.update({
  id: "/wings",
  path: "/wings",
  getParentRoute: () => Route$9
});
const VoterIdRoute = Route$7.update({
  id: "/voter-id",
  path: "/voter-id",
  getParentRoute: () => Route$9
});
const ServicesRoute = Route$6.update({
  id: "/services",
  path: "/services",
  getParentRoute: () => Route$9
});
const MembershipRoute = Route$5.update({
  id: "/membership",
  path: "/membership",
  getParentRoute: () => Route$9
});
const DashboardRoute = Route$4.update({
  id: "/dashboard",
  path: "/dashboard",
  getParentRoute: () => Route$9
});
const ContactRoute = Route$3.update({
  id: "/contact",
  path: "/contact",
  getParentRoute: () => Route$9
});
const AssistantRoute = Route$2.update({
  id: "/assistant",
  path: "/assistant",
  getParentRoute: () => Route$9
});
const AboutRoute = Route$1.update({
  id: "/about",
  path: "/about",
  getParentRoute: () => Route$9
});
const IndexRoute = Route.update({
  id: "/",
  path: "/",
  getParentRoute: () => Route$9
});
const rootRouteChildren = {
  IndexRoute,
  AboutRoute,
  AssistantRoute,
  ContactRoute,
  DashboardRoute,
  MembershipRoute,
  ServicesRoute,
  VoterIdRoute,
  WingsRoute
};
const routeTree = Route$9._addFileChildren(rootRouteChildren)._addFileTypes();
const getRouter = () => {
  const queryClient = new QueryClient();
  const router2 = createRouter({
    routeTree,
    context: { queryClient },
    scrollRestoration: true,
    defaultPreloadStaleTime: 0
  });
  return router2;
};
const router = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  getRouter
}, Symbol.toStringTag, { value: "Module" }));
export {
  DemoModeBanner as D,
  Route$7 as R,
  Route$5 as a,
  orgLogo as o,
  router as r,
  useLanguage as u
};
