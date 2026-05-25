import { jsx, jsxs, Fragment } from "react/jsx-runtime";
import { Link } from "@tanstack/react-router";
import { a as SectionLabel, S as Section } from "./Section-3En1J6fj.js";
import { ArrowLeft, ArrowRight, Star, Quote, Award, ChevronDown, Users, IdCard, ShieldCheck, Sparkles, Phone, Coins, CheckCircle } from "lucide-react";
import { u as useLanguage } from "./router-Jw4K1Btz.js";
import * as React from "react";
import React__default, { useState, useRef, useEffect } from "react";
import { AnimatePresence, motion, useScroll, useTransform } from "framer-motion";
import useEmblaCarousel from "embla-carousel-react";
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { Slot } from "@radix-ui/react-slot";
import { cva } from "class-variance-authority";
import * as AccordionPrimitive from "@radix-ui/react-accordion";
import "@tanstack/react-query";
import "sonner";
import "zod";
const templeLogo = "/assets/temple-logo-Byfbgmri.png";
function AnimatedCounter({ value, duration = 2e3 }) {
  const [displayValue, setDisplayValue] = useState("0");
  const elementRef = useRef(null);
  const hasAnimated = useRef(false);
  useEffect(() => {
    const prefixMatch = value.match(/^[^\d]+/);
    const prefix = prefixMatch ? prefixMatch[0] : "";
    const suffixMatch = value.match(/[^\d.]+$/);
    const suffix = suffixMatch ? suffixMatch[0] : "";
    const numericStr = value.replace(prefix, "").replace(suffix, "").replace(/,/g, "");
    const targetNumber = parseFloat(numericStr);
    if (isNaN(targetNumber)) {
      setDisplayValue(value);
      return;
    }
    const decimalMatch = numericStr.match(/\.(\d+)/);
    const decimals = decimalMatch ? decimalMatch[1].length : 0;
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          let startTime = null;
          const animate = (timestamp) => {
            if (!startTime) startTime = timestamp;
            const progress = timestamp - startTime;
            const percentage = Math.min(progress / duration, 1);
            const easeProgress = percentage * (2 - percentage);
            const currentValue = easeProgress * targetNumber;
            let formattedNumber = "";
            if (decimals > 0) {
              formattedNumber = currentValue.toFixed(decimals);
            } else {
              const rounded = Math.floor(currentValue);
              formattedNumber = rounded.toLocaleString("en-IN");
            }
            setDisplayValue(`${prefix}${formattedNumber}${suffix}`);
            if (progress < duration) {
              requestAnimationFrame(animate);
            } else {
              setDisplayValue(value);
            }
          };
          requestAnimationFrame(animate);
        }
      },
      { threshold: 0.1 }
    );
    if (elementRef.current) {
      observer.observe(elementRef.current);
    }
    return () => {
      observer.disconnect();
    };
  }, [value, duration]);
  return /* @__PURE__ */ jsx("span", { ref: elementRef, children: displayValue });
}
const wordsEn = ["trader", "business", "merchant", "retailer", "shopkeeper"];
const wordsTa = [
  "வணிகர்களுக்குத்",
  "வியாபாரிகளுக்குத்",
  "உறுப்பினர்களுக்குத்",
  "தொழில்முனைவோருக்குத்",
  "சிறு வணிகர்களுக்குத்"
];
function WordSwapper() {
  const { language } = useLanguage();
  const [index, setIndex] = useState(0);
  const words = language === "ta" ? wordsTa : wordsEn;
  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % words.length);
    }, 2800);
    return () => clearInterval(timer);
  }, [words.length]);
  useEffect(() => {
    setIndex(0);
  }, [language]);
  const currentWord = words[index] || "";
  const variants = {
    enter: {
      y: 20,
      opacity: 0
    },
    center: {
      y: 0,
      opacity: 1,
      transition: {
        y: { type: "spring", stiffness: 260, damping: 20 },
        opacity: { duration: 0.25 }
      }
    },
    exit: {
      y: -20,
      opacity: 0,
      transition: {
        y: { type: "spring", stiffness: 260, damping: 20 },
        opacity: { duration: 0.25 }
      }
    }
  };
  return /* @__PURE__ */ jsx("span", { className: "inline-flex flex-wrap items-baseline select-none", children: language === "ta" ? /* @__PURE__ */ jsxs("span", { className: "inline-flex flex-wrap items-center", children: [
    /* @__PURE__ */ jsx("span", { className: "relative inline-block min-w-[210px] sm:min-w-[250px] md:min-w-[290px] lg:min-w-[320px] h-[1.3em] overflow-hidden align-middle", children: /* @__PURE__ */ jsx(AnimatePresence, { mode: "wait", children: /* @__PURE__ */ jsx(
      motion.span,
      {
        variants,
        initial: "enter",
        animate: "center",
        exit: "exit",
        className: "absolute left-0 top-0 w-full text-left font-display animate-text-gradient bg-clip-text text-transparent bg-gradient-to-r from-gold via-amber-500 to-orange-500 bg-[length:200%_auto]",
        children: currentWord
      },
      currentWord
    ) }) }),
    /* @__PURE__ */ jsx("span", { className: "ml-1", children: "தேவையான அனைத்தும்." })
  ] }) : /* @__PURE__ */ jsxs("span", { className: "inline-flex flex-wrap items-center", children: [
    /* @__PURE__ */ jsx("span", { children: "Everything a " }),
    /* @__PURE__ */ jsx("span", { className: "relative inline-block min-w-[95px] sm:min-w-[125px] md:min-w-[155px] lg:min-w-[185px] h-[1.3em] overflow-hidden align-middle mx-1.5 md:mx-2", children: /* @__PURE__ */ jsx(AnimatePresence, { mode: "wait", children: /* @__PURE__ */ jsx(
      motion.span,
      {
        variants,
        initial: "enter",
        animate: "center",
        exit: "exit",
        className: "absolute left-0 top-0 w-full text-left font-display animate-text-gradient bg-clip-text text-transparent bg-gradient-to-r from-gold via-amber-500 to-orange-500 bg-[length:200%_auto]",
        children: currentWord
      },
      currentWord
    ) }) }),
    /* @__PURE__ */ jsx("span", { children: "needs." })
  ] }) });
}
const HOW_IT_WORKS = [
  { n: "01", t: "தகவல் நிரப்புக", e: "Fill your details", td: "பெயர், கைபேசி, மாவட்டம், வணிக வகை.", d: "Name, mobile, district, business type." },
  { n: "02", t: "ஆவணம் சமர்ப்பிக்க", e: "Upload documents", td: "அடையாளச் சான்று, கடை புகைப்படம், வணிகச் சான்று.", d: "ID proof, shop photo, business proof." },
  { n: "03", t: "பணம் செலுத்தவும்", e: "Pay the fee", td: "பாதுகாப்பான UPI கட்டணம் — ₹500/ஆண்டு.", d: "Secure UPI payment — ₹500/year." },
  { n: "04", t: "சான்றிதழ் பெறு", e: "Get certificate", td: "உடனடி டிஜிட்டல் சான்றிதழ் + EPIC அடையாள அட்டை.", d: "Instant digital certificate + EPIC ID." }
];
function HorizontalSteps() {
  const { t } = useLanguage();
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef
  });
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-58%"]);
  return /* @__PURE__ */ jsx("section", { ref: targetRef, className: "relative h-[200vh] lg:h-[260vh] bg-slate-50/30 dark:bg-slate-900/5", children: /* @__PURE__ */ jsx("div", { className: "sticky top-0 h-screen flex items-center overflow-hidden", children: /* @__PURE__ */ jsxs("div", { className: "max-w-7xl mx-auto px-4 w-full grid lg:grid-cols-12 gap-10 items-center", children: [
    /* @__PURE__ */ jsxs("div", { className: "lg:col-span-4 space-y-4", children: [
      /* @__PURE__ */ jsx(SectionLabel, { children: t("எப்படி பெறுவது", "How it works") }),
      /* @__PURE__ */ jsx("h2", { className: "font-display text-3xl md:text-4xl font-semibold leading-tight text-ink", children: t(
        "4 எளிய படிகளில் பதிவுசெய்யப்பட்ட உறுப்பினராகுங்கள்.",
        "Become a registered member in 4 simple steps."
      ) }),
      /* @__PURE__ */ jsx("p", { className: "text-sm text-muted-foreground leading-relaxed", children: t(
        "மொத்த நேரம்: 5 நிமிடங்கள் · கட்டணம்: ₹500/ஆண்டு. உங்கள் வணிகத்தை எளிதாக டிஜிட்டல் மயமாக்குங்கள்.",
        "Total time: ~5 minutes · Fee: ₹500/year. Seamless digital onboarding for your shop."
      ) }),
      /* @__PURE__ */ jsxs("div", { className: "hidden lg:flex items-center gap-2 text-xs text-muted-foreground pt-4", children: [
        /* @__PURE__ */ jsx("span", { className: "w-8 h-[1px] bg-muted-foreground/30 animate-pulse" }),
        /* @__PURE__ */ jsx("span", { children: t("கீழே உருட்டவும் (Scroll Down)", "Scroll down to see steps") })
      ] })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "lg:col-span-8 overflow-hidden relative py-6 select-none", children: /* @__PURE__ */ jsx(motion.div, { style: { x }, className: "flex gap-6 w-max pr-12", children: HOW_IT_WORKS.map((step, idx) => /* @__PURE__ */ jsxs(
      "div",
      {
        className: "w-[280px] sm:w-[320px] p-6 bg-card border border-border rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 flex flex-col justify-between h-[260px] relative group",
        children: [
          /* @__PURE__ */ jsx("div", { className: "absolute top-0 right-0 w-16 h-16 bg-gradient-to-br from-gold/10 to-transparent rounded-tr-2xl rounded-bl-full" }),
          /* @__PURE__ */ jsxs("div", { className: "flex justify-between items-center", children: [
            /* @__PURE__ */ jsx("span", { className: "font-display text-3xl font-bold text-gold/80 dark:text-gold/90 group-hover:scale-110 transition duration-300", children: step.n }),
            /* @__PURE__ */ jsx("span", { className: "text-[10px] uppercase tracking-wider font-semibold bg-muted px-2 py-0.5 rounded text-muted-foreground", children: t(`படி ${idx + 1}`, `Step ${idx + 1}`) })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "space-y-2 mt-4", children: [
            /* @__PURE__ */ jsx("h3", { className: "font-display font-semibold text-ink text-base sm:text-lg", children: t(step.t, step.e) }),
            /* @__PURE__ */ jsx("p", { className: "text-xs sm:text-sm text-muted-foreground leading-relaxed font-tamil", children: t(step.td, step.d) })
          ] }),
          idx < 3 && /* @__PURE__ */ jsx("div", { className: "absolute top-1/2 -right-6 w-6 h-[1.5px] border-t-2 border-dashed border-border pointer-events-none hidden sm:block" })
        ]
      },
      step.n
    )) }) })
  ] }) }) });
}
function cn(...inputs) {
  return twMerge(clsx(inputs));
}
const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium cursor-pointer transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 disabled:cursor-not-allowed [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground shadow hover:bg-primary/90",
        destructive: "bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",
        outline: "border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground",
        secondary: "bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline"
      },
      size: {
        default: "h-9 px-4 py-2",
        sm: "h-8 rounded-md px-3 text-xs",
        lg: "h-10 rounded-md px-8",
        icon: "h-9 w-9"
      }
    },
    defaultVariants: {
      variant: "default",
      size: "default"
    }
  }
);
const Button = React.forwardRef(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return /* @__PURE__ */ jsx(Comp, { className: cn(buttonVariants({ variant, size, className })), ref, ...props });
  }
);
Button.displayName = "Button";
const CarouselContext = React.createContext(null);
function useCarousel() {
  const context = React.useContext(CarouselContext);
  if (!context) {
    throw new Error("useCarousel must be used within a <Carousel />");
  }
  return context;
}
const Carousel = React.forwardRef(({ orientation = "horizontal", opts, setApi, plugins, className, children, ...props }, ref) => {
  const [carouselRef, api] = useEmblaCarousel(
    {
      ...opts,
      axis: orientation === "horizontal" ? "x" : "y"
    },
    plugins
  );
  const [canScrollPrev, setCanScrollPrev] = React.useState(false);
  const [canScrollNext, setCanScrollNext] = React.useState(false);
  const onSelect = React.useCallback((api2) => {
    if (!api2) {
      return;
    }
    setCanScrollPrev(api2.canScrollPrev());
    setCanScrollNext(api2.canScrollNext());
  }, []);
  const scrollPrev = React.useCallback(() => {
    api?.scrollPrev();
  }, [api]);
  const scrollNext = React.useCallback(() => {
    api?.scrollNext();
  }, [api]);
  const handleKeyDown = React.useCallback(
    (event) => {
      if (event.key === "ArrowLeft") {
        event.preventDefault();
        scrollPrev();
      } else if (event.key === "ArrowRight") {
        event.preventDefault();
        scrollNext();
      }
    },
    [scrollPrev, scrollNext]
  );
  React.useEffect(() => {
    if (!api || !setApi) {
      return;
    }
    setApi(api);
  }, [api, setApi]);
  React.useEffect(() => {
    if (!api) {
      return;
    }
    onSelect(api);
    api.on("reInit", onSelect);
    api.on("select", onSelect);
    return () => {
      api?.off("select", onSelect);
    };
  }, [api, onSelect]);
  return /* @__PURE__ */ jsx(
    CarouselContext.Provider,
    {
      value: {
        carouselRef,
        api,
        opts,
        orientation: orientation || (opts?.axis === "y" ? "vertical" : "horizontal"),
        scrollPrev,
        scrollNext,
        canScrollPrev,
        canScrollNext
      },
      children: /* @__PURE__ */ jsx(
        "div",
        {
          ref,
          onKeyDownCapture: handleKeyDown,
          className: cn("relative", className),
          role: "region",
          "aria-roledescription": "carousel",
          ...props,
          children
        }
      )
    }
  );
});
Carousel.displayName = "Carousel";
const CarouselContent = React.forwardRef(
  ({ className, ...props }, ref) => {
    const { carouselRef, orientation } = useCarousel();
    return /* @__PURE__ */ jsx("div", { ref: carouselRef, className: "overflow-hidden", children: /* @__PURE__ */ jsx(
      "div",
      {
        ref,
        className: cn(
          "flex",
          orientation === "horizontal" ? "-ml-4" : "-mt-4 flex-col",
          className
        ),
        ...props
      }
    ) });
  }
);
CarouselContent.displayName = "CarouselContent";
const CarouselItem = React.forwardRef(
  ({ className, ...props }, ref) => {
    const { orientation } = useCarousel();
    return /* @__PURE__ */ jsx(
      "div",
      {
        ref,
        role: "group",
        "aria-roledescription": "slide",
        className: cn(
          "min-w-0 shrink-0 grow-0 basis-full",
          orientation === "horizontal" ? "pl-4" : "pt-4",
          className
        ),
        ...props
      }
    );
  }
);
CarouselItem.displayName = "CarouselItem";
const CarouselPrevious = React.forwardRef(
  ({ className, variant = "outline", size = "icon", ...props }, ref) => {
    const { orientation, scrollPrev, canScrollPrev } = useCarousel();
    return /* @__PURE__ */ jsxs(
      Button,
      {
        ref,
        variant,
        size,
        className: cn(
          "absolute  h-8 w-8 rounded-full",
          orientation === "horizontal" ? "-left-12 top-1/2 -translate-y-1/2" : "-top-12 left-1/2 -translate-x-1/2 rotate-90",
          className
        ),
        disabled: !canScrollPrev,
        onClick: scrollPrev,
        ...props,
        children: [
          /* @__PURE__ */ jsx(ArrowLeft, { className: "h-4 w-4" }),
          /* @__PURE__ */ jsx("span", { className: "sr-only", children: "Previous slide" })
        ]
      }
    );
  }
);
CarouselPrevious.displayName = "CarouselPrevious";
const CarouselNext = React.forwardRef(
  ({ className, variant = "outline", size = "icon", ...props }, ref) => {
    const { orientation, scrollNext, canScrollNext } = useCarousel();
    return /* @__PURE__ */ jsxs(
      Button,
      {
        ref,
        variant,
        size,
        className: cn(
          "absolute h-8 w-8 rounded-full",
          orientation === "horizontal" ? "-right-12 top-1/2 -translate-y-1/2" : "-bottom-12 left-1/2 -translate-x-1/2 rotate-90",
          className
        ),
        disabled: !canScrollNext,
        onClick: scrollNext,
        ...props,
        children: [
          /* @__PURE__ */ jsx(ArrowRight, { className: "h-4 w-4" }),
          /* @__PURE__ */ jsx("span", { className: "sr-only", children: "Next slide" })
        ]
      }
    );
  }
);
CarouselNext.displayName = "CarouselNext";
const trader1 = "/assets/trader1-5W4ugSmI.png";
const trader2 = "/assets/trader2-Bvwwwnus.png";
const trader3 = "/assets/trader3-DtXUGZNP.png";
const TESTIMONIALS = [
  {
    id: 1,
    name: "Senthil Kumar",
    nameTa: "செந்தில் குமார்",
    role: "Grocery Store Owner",
    roleTa: "மளிகைக் கடை உரிமையாளர்",
    location: "Mylapore, Chennai",
    locationTa: "மயிலாப்பூர், சென்னை",
    image: trader1,
    text: "The digital ID card and certificate give instant credibility. It was extremely helpful when applying for my business expansion loan.",
    textTa: "டிஜிட்டல் அடையாள அட்டை மற்றும் சான்றிதழ் உடனடி அங்கீகாரத்தை வழங்குகிறது. கடன் விண்ணப்பத்திற்கு இது எனக்கு மிகவும் உதவியாக இருந்தது.",
    rating: 5
  },
  {
    id: 2,
    name: "Rajeshwari S",
    nameTa: "ராஜேஸ்வரி S",
    role: "Textile Merchant",
    roleTa: "ஜவுளி வியாபாரி",
    location: "Nelpettai, Madurai",
    locationTa: "நெல்பேட்டை, மதுரை",
    image: trader2,
    text: "The association's welfare schemes and health insurance are a huge safety net for small merchants like us. Registration took only 5 minutes.",
    textTa: "சங்கத்தின் நலத்திட்டங்கள் மற்றும் மருத்துவக் காப்பீடு எங்களைப் போன்ற சிறு வணிகர்களுக்கு ஒரு பெரிய பாதுகாப்பு வளையமாகும். 5 நிமிடங்களில் பதிவு செய்ய முடிந்தது.",
    rating: 5
  },
  {
    id: 3,
    name: "Anbu Chezhian",
    nameTa: "அன்பு செழியன்",
    role: "Hardware & Tools Dealer",
    roleTa: "ஹார்டுவேர் மற்றும் கருவிகள் வியாபாரி",
    location: "Gandhipuram, Coimbatore",
    locationTa: "காந்திபுரம், கோயம்புத்தூர்",
    image: trader3,
    text: "I registered online and got my stamped certificate instantly. The government recognition and transparency in TNVS is outstanding.",
    textTa: "நான் ஆன்லைனில் பதிவு செய்து, எனது முத்திரையிடப்பட்ட சான்றிதழை உடனடியாகப் பெற்றேன். TNVS-ன் அரசு அங்கீகாரம் மற்றும் வெளிப்படைத்தன்மை சிறப்பானது.",
    rating: 5
  }
];
function TestimonialCarousel() {
  const { language } = useLanguage();
  const [api, setApi] = useState();
  useEffect(() => {
    if (!api) return;
    const interval = setInterval(() => {
      api.scrollNext();
    }, 5e3);
    return () => clearInterval(interval);
  }, [api]);
  return /* @__PURE__ */ jsx("div", { className: "w-full max-w-5xl mx-auto px-4 md:px-12 relative py-8", children: /* @__PURE__ */ jsxs(
    Carousel,
    {
      setApi,
      opts: {
        align: "start",
        loop: true
      },
      className: "w-full",
      children: [
        /* @__PURE__ */ jsx(CarouselContent, { className: "-ml-2 md:-ml-4", children: TESTIMONIALS.map((t) => /* @__PURE__ */ jsx(CarouselItem, { className: "pl-2 md:pl-4 md:basis-1/2 lg:basis-1/2", children: /* @__PURE__ */ jsxs("div", { className: "h-full bg-white border border-slate-100 rounded-3xl p-6 md:p-8 shadow-sm flex flex-col justify-between relative group hover:shadow-md transition-shadow duration-300", children: [
          /* @__PURE__ */ jsx("div", { className: "absolute top-0 right-0 w-24 h-24 bg-primary/2 rounded-bl-full -z-10 group-hover:bg-primary/4 transition-colors" }),
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between mb-4", children: [
              /* @__PURE__ */ jsx("div", { className: "flex gap-0.5 text-amber-500", children: [...Array(t.rating)].map((_, i) => /* @__PURE__ */ jsx(Star, { className: "w-4 h-4 fill-amber-500" }, i)) }),
              /* @__PURE__ */ jsx(Quote, { className: "w-8 h-8 text-primary/10 group-hover:text-primary/25 transition-colors" })
            ] }),
            /* @__PURE__ */ jsxs("p", { className: "text-slate-600 text-sm md:text-base italic leading-relaxed mb-6 font-tamil", children: [
              '"',
              language === "ta" ? t.textTa : t.text,
              '"'
            ] })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-4 pt-4 border-t border-slate-50", children: [
            /* @__PURE__ */ jsxs("div", { className: "relative", children: [
              /* @__PURE__ */ jsx(
                "img",
                {
                  src: t.image,
                  alt: language === "ta" ? t.nameTa : t.name,
                  className: "w-12 h-12 rounded-full object-cover border-2 border-primary/10 shadow-sm"
                }
              ),
              /* @__PURE__ */ jsx("div", { className: "absolute -bottom-1 -right-1 bg-gold text-white p-0.5 rounded-full shadow-sm", children: /* @__PURE__ */ jsx(Award, { className: "w-3 h-3 text-gold-foreground" }) })
            ] }),
            /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsx("h4", { className: "font-display font-semibold text-slate-800 text-sm md:text-base leading-tight", children: language === "ta" ? t.nameTa : t.name }),
              /* @__PURE__ */ jsx("p", { className: "text-xs text-slate-500 mt-0.5", children: language === "ta" ? t.roleTa : t.role }),
              /* @__PURE__ */ jsx("p", { className: "text-[10px] text-primary/80 font-semibold tracking-wide uppercase mt-0.5", children: language === "ta" ? t.locationTa : t.location })
            ] })
          ] })
        ] }) }, t.id)) }),
        /* @__PURE__ */ jsxs("div", { className: "hidden md:flex justify-end gap-2 mt-6", children: [
          /* @__PURE__ */ jsx(CarouselPrevious, { className: "static translate-y-0 h-10 w-10 border-slate-200 text-slate-600 hover:bg-slate-50" }),
          /* @__PURE__ */ jsx(CarouselNext, { className: "static translate-y-0 h-10 w-10 border-slate-200 text-slate-600 hover:bg-slate-50" })
        ] })
      ]
    }
  ) });
}
function ScrollReveal({
  children,
  direction = "up",
  className = "",
  stagger = false
}) {
  const animClass = direction === "scale" || direction === "fade" ? "animate-fade-in" : "animate-slide-up";
  if (stagger && React__default.Children.count(children) > 1) {
    return /* @__PURE__ */ jsx("div", { className, children: React__default.Children.map(children, (child, i) => /* @__PURE__ */ jsx("div", { className: animClass, style: { animationDelay: `${i * 0.05}s` }, children: child }, i)) });
  }
  return /* @__PURE__ */ jsx("div", { className: `${animClass} ${className}`, children });
}
const Accordion = AccordionPrimitive.Root;
const AccordionItem = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(AccordionPrimitive.Item, { ref, className: cn("border-b", className), ...props }));
AccordionItem.displayName = "AccordionItem";
const AccordionTrigger = React.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ jsx(AccordionPrimitive.Header, { className: "flex", children: /* @__PURE__ */ jsxs(
  AccordionPrimitive.Trigger,
  {
    ref,
    className: cn(
      "flex flex-1 items-center justify-between py-4 text-sm font-medium cursor-pointer transition-all hover:underline text-left [&[data-state=open]>svg]:rotate-180",
      className
    ),
    ...props,
    children: [
      children,
      /* @__PURE__ */ jsx(ChevronDown, { className: "h-4 w-4 shrink-0 text-muted-foreground transition-transform duration-200" })
    ]
  }
) }));
AccordionTrigger.displayName = AccordionPrimitive.Trigger.displayName;
const AccordionContent = React.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ jsx(
  AccordionPrimitive.Content,
  {
    ref,
    className: "overflow-hidden text-sm data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down",
    ...props,
    children: /* @__PURE__ */ jsx("div", { className: cn("pb-4 pt-0", className), children })
  }
));
AccordionContent.displayName = AccordionPrimitive.Content.displayName;
const stats = [{
  v: "1,24,560+",
  l: "Registered Members",
  t: "உறுப்பினர்கள்"
}, {
  v: "38",
  l: "Districts Covered",
  t: "மாவட்டங்கள்"
}, {
  v: "12+",
  l: "Years of Service",
  t: "ஆண்டுகள்"
}, {
  v: "₹8.4Cr",
  l: "Welfare Disbursed",
  t: "நலன் நிதி"
}];
const faqs = [{
  q: "சங்கத்தில் உறுப்பினராக எவ்வாறு விண்ணப்பிப்பது?",
  e: "How do I apply for membership?",
  a: "விண்ணப்பிக்க 'உறுப்பினர் சேர்க்கை' பொத்தானைக் கிளிக் செய்து, உங்கள் தனிப்பட்ட மற்றும் வணிக விவரங்களை நிரப்பவும். பின்னர் கடை புகைப்படம் மற்றும் அடையாளச் சான்றை பதிவேற்றி, ஆண்டுக் கட்டணத்தைச் செலுத்தினால், உங்கள் EPIC அடையாள அட்டையும் சான்றிதழும் உடனடியாக உருவாக்கப்படும்.",
  ae: "Click on 'Apply for Membership', fill in your personal and business details, upload a shop photo and a valid ID proof, pay the annual registration fee online, and your official EPIC ID card and certificate will be generated instantly."
}, {
  q: "உறுப்பினர் சேர்க்கைக்கு என்னென்ன ஆவணங்கள் தேவை?",
  e: "What documents are required for registration?",
  a: "விண்ணப்பிக்க செல்லுபடியாகும் அடையாளச் சான்று (ஆதார் அட்டை, வாக்காளர் அடையாள அட்டை அல்லது GSTIN) மற்றும் உங்கள் கடை/வணிகத்தின் முன்பக்க புகைப்படம் மட்டுமே போதுமானது.",
  ae: "You only need a valid government-issued ID proof (Aadhaar Card, Voter ID, or GSTIN) and a clear front photograph of your shop/business premises."
}, {
  q: "இந்த டிஜிட்டல் சான்றிதழ் சட்டப்பூர்வமாக செல்லுபடியாகுமா?",
  e: "Is the digital certificate legally valid?",
  a: "ஆம், தமிழ்நாடு வணிகர்களின் சங்கமம் பதிவு எண். 2012/TNVS கீழ் பதிவு செய்யப்பட்ட அதிகாரப்பூர்வ அமைப்பாகும். QR குறியீடு சரிபார்ப்புடன் கூடிய இந்த டிஜிட்டல் சான்றிதழ் வங்கி வணிகக் கடன்கள், வர்த்தக அங்கீகாரங்கள் மற்றும் அரசு நலத்திட்ட உதவிகளுக்குச் செல்லுபடியாகும்.",
  ae: "Yes, Tamil Nadu Vanigargalin Sangamam is a registered traders association (Reg No. 2012/TNVS). The QR-code-verified digital certificate is widely accepted for bank business loans, trade references, and government welfare benefits."
}, {
  q: "உறுப்பினர் அட்டை மற்றும் சான்றிதழ் செல்லுபடியாகும் காலம் எவ்வளவு?",
  e: "How long is the membership valid?",
  a: "சங்கத்தின் உறுப்பினர் சேர்க்கை பதிவு செய்த நாளிலிருந்து 1 வருடத்திற்குச் செல்லுபடியாகும். காலம் முடிவதற்குள் உங்கள் EPIC எண் மூலம் ஆன்லைனிலேயே எளிய முறையில் புதுப்பித்துக் கொள்ளலாம்.",
  ae: "Membership is valid for exactly 1 year from the date of registration. You can easily renew it online using your EPIC number before it expires."
}];
const MockupCard = () => {
  return /* @__PURE__ */ jsxs("div", { className: "relative w-full aspect-[1.586/1] bg-gradient-to-br from-slate-900 via-slate-800 to-primary text-gold rounded-xl p-4 shadow-xl border border-slate-700/50 overflow-hidden group/mockup transition-all duration-500 hover:scale-[1.03] hover:-rotate-1 select-none", children: [
    /* @__PURE__ */ jsx("div", { className: "absolute top-0 right-0 w-24 h-24 bg-gold/10 rounded-full blur-2xl" }),
    /* @__PURE__ */ jsxs("div", { className: "flex justify-between items-start", children: [
      /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-1.5", children: [
        /* @__PURE__ */ jsx("div", { className: "w-5 h-5 rounded-full bg-white/10 flex items-center justify-center border border-white/20", children: /* @__PURE__ */ jsx("span", { className: "text-[8px] font-bold text-white", children: "TN" }) }),
        /* @__PURE__ */ jsxs("div", { className: "leading-none", children: [
          /* @__PURE__ */ jsx("div", { className: "text-[7px] font-semibold text-white uppercase tracking-wider", children: "TNVS" }),
          /* @__PURE__ */ jsx("div", { className: "text-[5px] text-slate-400", children: "TRADER UNION" })
        ] })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "text-[6px] font-mono text-gold-foreground bg-gold px-1.5 py-0.5 rounded leading-none font-bold", children: "ACTIVE MEMBER" })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "mt-5 flex gap-2.5 items-center", children: [
      /* @__PURE__ */ jsx("div", { className: "w-9 h-9 rounded-full bg-slate-700/60 border border-slate-600/50 flex items-center justify-center overflow-hidden shrink-0", children: /* @__PURE__ */ jsx(Users, { className: "w-4 h-4 text-slate-400" }) }),
      /* @__PURE__ */ jsxs("div", { className: "space-y-0.5 min-w-0", children: [
        /* @__PURE__ */ jsx("div", { className: "text-[9px] font-bold text-white truncate", children: "Senthil Kumar" }),
        /* @__PURE__ */ jsx("div", { className: "text-[6px] text-slate-400 font-mono", children: "TNVS-RJE38271A" }),
        /* @__PURE__ */ jsx("div", { className: "text-[6px] text-slate-400", children: "District: Chennai" })
      ] })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "absolute bottom-0 left-0 right-0 h-1.5 bg-gradient-to-r from-primary via-gold to-primary" })
  ] });
};
const TOP_SERVICES = [{
  i: Users,
  t: "புதிய உறுப்பினர் சேர்க்கை",
  e: "Apply for Membership",
  d: "Apply online in 5 minutes — get your official EPIC ID and stamped certificate instantly.",
  td: "5 நிமிடங்களில் ஆன்லைனில் விண்ணப்பிக்கவும் — உடனடி EPIC ID மற்றும் சான்றிதழ் பெறுங்கள்.",
  to: "/membership",
  badge: "START HERE",
  className: "md:col-span-2"
}, {
  i: IdCard,
  t: "சங்கம அட்டை பெறுக",
  e: "Get My Membership Card",
  d: "Search by name or EPIC — generate your official TNVS front & back membership card instantly.",
  td: "பெயர் அல்லது EPIC மூலம் தேடுங்கள் — உங்கள் அதிகாரப்பூர்வ TNVS உறுப்பினர் அட்டையை உருவாக்குங்கள்.",
  to: "/voter-id",
  badge: "INSTANT",
  className: "md:col-span-1 md:row-span-2",
  isTall: true
}, {
  i: Award,
  t: "உறுப்பினர் நலத்திட்டங்கள்",
  e: "Welfare Schemes",
  d: "Insurance, scholarships and emergency aid for members and their families across Tamil Nadu.",
  td: "காப்பீடு, உதவித்தொகை மற்றும் அவசர நிவாரணம் — உங்களுக்கும் குடும்பத்திற்கும்.",
  to: "/services",
  badge: null,
  className: "md:col-span-1"
}, {
  i: Coins,
  t: "வட்டி இல்லா வணிகக் கடன்",
  e: "Interest-Free Loans",
  d: "Access micro-credit schemes and interest-free business loans for small traders.",
  td: "குறுந்தொழில் மற்றும் சிறு வணிகர்களுக்கான வட்டி இல்லா கடன் மற்றும் நிதி உதவிகள்.",
  to: "/services",
  badge: "NEW",
  className: "md:col-span-1"
}];
function Home() {
  const {
    language,
    t
  } = useLanguage();
  return /* @__PURE__ */ jsxs("div", { children: [
    /* @__PURE__ */ jsxs("section", { className: "relative overflow-hidden border-b border-border", children: [
      /* @__PURE__ */ jsxs("div", { "aria-hidden": "true", className: "pointer-events-none", children: [
        /* @__PURE__ */ jsx("div", { className: "absolute -top-24 -right-24 w-[420px] h-[420px] rounded-full opacity-[0.07]", style: {
          background: "radial-gradient(circle, oklch(0.30 0.14 255) 0%, transparent 70%)"
        } }),
        /* @__PURE__ */ jsx("div", { className: "absolute -bottom-16 -left-16 w-[300px] h-[300px] rounded-full opacity-[0.06]", style: {
          background: "radial-gradient(circle, oklch(0.78 0.12 85) 0%, transparent 70%)"
        } }),
        /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-primary/[0.015]" })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "relative max-w-7xl mx-auto px-4 pt-14 pb-18 grid lg:grid-cols-12 gap-10 items-center", children: [
        /* @__PURE__ */ jsxs("div", { className: "lg:col-span-7 animate-slide-up", children: [
          /* @__PURE__ */ jsx(SectionLabel, { children: t("அரசு அங்கீகரிக்கப்பட்டது · பதிவு எண். 2012/TNVS", "Government Registered · Reg. No. 2012/TNVS") }),
          /* @__PURE__ */ jsx("h1", { className: "mt-5 font-display text-4xl sm:text-5xl lg:text-6xl font-semibold leading-[1.06] text-ink", children: language === "ta" ? /* @__PURE__ */ jsxs(Fragment, { children: [
            "தமிழ்நாடு வணிகர்களின்",
            " ",
            /* @__PURE__ */ jsx("span", { className: "animate-text-gradient", children: "அதிகாரப்பூர்வ இல்லம்." })
          ] }) : /* @__PURE__ */ jsxs(Fragment, { children: [
            "The ",
            /* @__PURE__ */ jsx("span", { className: "animate-text-gradient", children: "official home" }),
            " of Tamil Nadu's traders."
          ] }) }),
          /* @__PURE__ */ jsx("p", { className: "font-tamil text-lg sm:text-xl mt-4 text-foreground/80 leading-snug", children: t("தமிழ்நாடு வணிகர்களின் சங்கமம் — அரசு அங்கீகரிக்கப்பட்ட உத்தியோகபூர்வ அமைப்பு.", "Tamil Nadu Vanigargalin Sangamam — Govt. Approved Official Organization.") }),
          /* @__PURE__ */ jsx("p", { className: "mt-4 text-base text-muted-foreground max-w-xl leading-relaxed", children: t("உறுப்பினர் சேர்க்கைக்கு விண்ணப்பிக்கவும், உங்கள் அதிகாரப்பூர்வ சான்றிதழைப் பதிவிறக்கவும், நலத்திட்டங்களை அணுகவும் — அனைத்தும் ஒரே நம்பகமான போர்ட்டலில்.", "Apply for membership, download your official certificate, access welfare schemes — all from one trusted portal.") }),
          /* @__PURE__ */ jsxs("div", { className: "mt-8 flex flex-wrap items-center gap-6", children: [
            /* @__PURE__ */ jsxs(Link, { to: "/membership", className: "btn-primary text-base px-6 inline-flex", children: [
              /* @__PURE__ */ jsx(Users, { className: "w-4 h-4", "aria-hidden": "true" }),
              t("உறுப்பினர் சேர்க்கைக்கு விண்ணப்பிக்க", "Apply for Membership"),
              /* @__PURE__ */ jsx(ArrowRight, { className: "w-4 h-4", "aria-hidden": "true" })
            ] }),
            /* @__PURE__ */ jsxs(Link, { to: "/voter-id", search: {
              q: void 0
            }, className: "text-sm font-semibold text-primary hover:underline inline-flex items-center gap-1.5", children: [
              /* @__PURE__ */ jsx(IdCard, { className: "w-4 h-4", "aria-hidden": "true" }),
              t("ஏற்கனவே உறுப்பினரா? என் அட்டை பெறுக →", "Already a member? Get your card →")
            ] })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "mt-6 flex flex-wrap gap-x-5 gap-y-2 text-xs text-muted-foreground", children: [
            /* @__PURE__ */ jsxs("span", { className: "flex items-center gap-1.5", children: [
              /* @__PURE__ */ jsx(ShieldCheck, { className: "w-4 h-4 text-primary", "aria-hidden": "true" }),
              t("தமிழக அரசால் அங்கீகரிக்கப்பட்டது", "Govt. of Tamil Nadu approved")
            ] }),
            /* @__PURE__ */ jsxs("span", { className: "flex items-center gap-1.5", children: [
              /* @__PURE__ */ jsx(Sparkles, { className: "w-4 h-4 text-gold", "aria-hidden": "true" }),
              t("உடனடி டிஜிட்டல் சான்றிதழ்", "Instant digital certificate")
            ] }),
            /* @__PURE__ */ jsxs("span", { className: "flex items-center gap-1.5", children: [
              /* @__PURE__ */ jsx(Phone, { className: "w-4 h-4 text-slate-400", "aria-hidden": "true" }),
              /* @__PURE__ */ jsx("a", { href: "tel:04423456789", className: "hover:text-primary transition", children: "044-2345-6789" })
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "lg:col-span-5 flex items-center justify-center animate-fade-in", children: /* @__PURE__ */ jsx("img", { src: templeLogo, alt: "Tamil Nadu Vanigargalin Sangamam emblem", className: "w-full max-w-[400px] h-auto object-contain", width: 400, height: 400 }) })
      ] })
    ] }),
    /* @__PURE__ */ jsx(Section, { className: "py-12", children: /* @__PURE__ */ jsx("div", { className: "grid grid-cols-2 md:grid-cols-4 gap-px bg-border rounded-2xl overflow-hidden paper p-0", children: stats.map((s, idx) => /* @__PURE__ */ jsxs(ScrollReveal, { delay: idx * 0.09, direction: "up", blur: true, className: "bg-card p-6 text-center", children: [
      /* @__PURE__ */ jsx("div", { className: "font-display text-4xl md:text-5xl font-semibold text-primary tabular-nums", children: /* @__PURE__ */ jsx(AnimatedCounter, { value: s.v }) }),
      /* @__PURE__ */ jsx("div", { className: "text-xs text-muted-foreground mt-2 uppercase tracking-wider font-semibold", children: t(s.t, s.l) })
    ] }, s.l)) }) }),
    /* @__PURE__ */ jsx(Section, { className: "py-12 border-t border-border", children: /* @__PURE__ */ jsxs("div", { className: "max-w-4xl mx-auto text-center space-y-8", children: [
      /* @__PURE__ */ jsxs(ScrollReveal, { direction: "up", blur: true, children: [
        /* @__PURE__ */ jsx(SectionLabel, { children: t("வரவேற்பு உரை", "Welcome Message") }),
        /* @__PURE__ */ jsx("h2", { className: "mt-3 font-display text-2xl md:text-3.5xl font-bold text-slate-800 leading-tight", children: t("அதிகாரப்பூர்வ வரவேற்பு உரை மற்றும் அறிமுகம்", "Official Welcome Address & Introduction") }),
        /* @__PURE__ */ jsx("p", { className: "mt-2 text-xs md:text-sm text-slate-500 font-tamil max-w-xl mx-auto leading-relaxed", children: t("தமிழ்நாடு வணிகர்களின் சங்கமம் அமைப்பின் நோக்கங்கள் மற்றும் சேவைகள் பற்றிய அதிகாரப்பூர்வ நேரடி அறிமுக வீடியோ.", "Watch our official welcome video to learn about the objectives and welfare schemes of the Tamil Nadu Traders association.") })
      ] }),
      /* @__PURE__ */ jsx(ScrollReveal, { direction: "scale", delay: 0.12, duration: 0.8, blur: true, children: /* @__PURE__ */ jsx("div", { className: "relative rounded-3xl overflow-hidden border border-slate-200/80 shadow-2xl aspect-video bg-slate-950/90 group ring-4 ring-slate-100", children: /* @__PURE__ */ jsx("video", { className: "w-full h-full object-cover", controls: true, preload: "metadata", src: "/welcome_video.mp4" }) }) })
    ] }) }),
    /* @__PURE__ */ jsx(HorizontalSteps, {}),
    /* @__PURE__ */ jsxs(Section, { className: "py-16 border-t border-border", children: [
      /* @__PURE__ */ jsxs(ScrollReveal, { direction: "up", blur: true, className: "flex items-end justify-between flex-wrap gap-4 mb-10", children: [
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx(SectionLabel, { children: t("எங்கள் சேவைகள்", "Our Services") }),
          /* @__PURE__ */ jsx("h2", { className: "mt-3 font-display text-3xl md:text-4xl font-semibold", children: /* @__PURE__ */ jsx(WordSwapper, {}) })
        ] }),
        /* @__PURE__ */ jsxs(Link, { to: "/services", className: "text-primary text-sm font-semibold hover:underline inline-flex items-center gap-1", children: [
          t("அனைத்து சேவைகளையும் காண்க", "View all services"),
          /* @__PURE__ */ jsx(ArrowRight, { className: "w-4 h-4", "aria-hidden": "true" })
        ] })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "relative space-y-10 max-w-4xl mx-auto py-8", children: TOP_SERVICES.map((s, idx) => /* @__PURE__ */ jsx("div", { className: "sticky w-full", style: {
        top: `${96 + idx * 32}px`,
        zIndex: idx + 10
      }, children: /* @__PURE__ */ jsxs(Link, { to: s.to, className: "card-base card-interactive group p-6 sm:p-8 flex flex-col md:flex-row justify-between items-center gap-6 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 w-full min-h-[220px] bg-card border border-border shadow-2xl transition-all duration-300", children: [
        /* @__PURE__ */ jsxs("div", { className: "space-y-4 flex-1 text-left", children: [
          /* @__PURE__ */ jsxs("div", { className: "flex items-start gap-4", children: [
            /* @__PURE__ */ jsx("div", { className: "w-12 h-12 rounded-xl bg-primary/8 grid place-items-center text-primary group-hover:bg-primary group-hover:text-white transition shrink-0", children: /* @__PURE__ */ jsx(s.i, { className: "w-6 h-6", "aria-hidden": "true" }) }),
            /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2.5 flex-wrap", children: [
                /* @__PURE__ */ jsx("h3", { className: "font-display text-xl font-semibold text-ink", children: t(s.t, s.e) }),
                s.badge && /* @__PURE__ */ jsx("span", { className: "text-[10px] font-bold text-primary bg-primary/8 border border-primary/20 px-2 py-0.5 rounded-full uppercase tracking-wide", children: s.badge })
              ] }),
              /* @__PURE__ */ jsx("p", { className: "mt-2 text-sm text-muted-foreground leading-relaxed max-w-xl font-tamil", children: t(s.td, s.d) })
            ] })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "pt-2 pl-16 inline-flex items-center gap-1 text-sm font-semibold text-primary group-hover:gap-2 transition-all", children: [
            t("தொடரவும்", "Proceed"),
            /* @__PURE__ */ jsx(ArrowRight, { className: "w-4 h-4", "aria-hidden": "true" })
          ] })
        ] }),
        s.isTall && /* @__PURE__ */ jsx("div", { className: "w-full md:w-[280px] shrink-0 mt-4 md:mt-0", children: /* @__PURE__ */ jsx(MockupCard, {}) })
      ] }) }, s.e)) })
    ] }),
    /* @__PURE__ */ jsxs(Section, { className: "py-16 border-t border-border bg-slate-50/40", children: [
      /* @__PURE__ */ jsxs(ScrollReveal, { direction: "up", className: "text-center mb-10", children: [
        /* @__PURE__ */ jsx(SectionLabel, { children: t("உறுப்பினர் வெற்றிக் கதைகள்", "Member Success Stories") }),
        /* @__PURE__ */ jsx("h2", { className: "mt-3 font-display text-3xl md:text-4xl font-semibold text-ink", children: t("வணிகர்களின் உண்மை அனுபவங்கள்.", "Real experiences from real traders.") }),
        /* @__PURE__ */ jsx("p", { className: "mt-2 text-sm text-muted-foreground", children: t("சங்கத்தில் இணைந்த பிறகு தங்கள் வணிகத்தில் வளர்ச்சி கண்ட உறுப்பினர்களின் கருத்துக்கள்.", "Feedback from members who experienced growth in their businesses after joining.") })
      ] }),
      /* @__PURE__ */ jsx(ScrollReveal, { direction: "up", delay: 0.1, children: /* @__PURE__ */ jsx(TestimonialCarousel, {}) })
    ] }),
    /* @__PURE__ */ jsx(Section, { className: "py-16 border-t border-border", children: /* @__PURE__ */ jsxs("div", { className: "max-w-4xl mx-auto", children: [
      /* @__PURE__ */ jsxs(ScrollReveal, { direction: "up", className: "text-center mb-10", children: [
        /* @__PURE__ */ jsx(SectionLabel, { children: t("அடிக்கடி கேட்கப்படும் கேள்விகள்", "Frequently Asked Questions") }),
        /* @__PURE__ */ jsx("h2", { className: "mt-3 font-display text-3xl md:text-4xl font-semibold text-ink", children: t("உங்களுக்கு ஏதேனும் சந்தேகங்கள் உள்ளதா?", "Have questions? We have answers.") }),
        /* @__PURE__ */ jsx("p", { className: "mt-2 text-sm text-muted-foreground", children: t("சங்கத்தில் இணைவது மற்றும் அதன் பயன்கள் பற்றிய பொதுவான கேள்விகள்.", "Common questions about joining the association and its benefits.") })
      ] }),
      /* @__PURE__ */ jsx(ScrollReveal, { direction: "up", delay: 0.1, children: /* @__PURE__ */ jsx(Accordion, { type: "single", collapsible: true, className: "w-full space-y-4", children: faqs.map((faq, index) => /* @__PURE__ */ jsxs(AccordionItem, { value: `faq-${index}`, className: "border border-slate-200/80 rounded-2xl px-5 bg-white shadow-sm hover:border-primary/20 transition-all duration-200", children: [
        /* @__PURE__ */ jsx(AccordionTrigger, { className: "font-display font-semibold text-slate-800 text-sm md:text-base py-5 hover:no-underline hover:text-primary", children: t(faq.q, faq.e) }),
        /* @__PURE__ */ jsx(AccordionContent, { className: "text-slate-600 text-xs md:text-sm leading-relaxed pb-5 border-t border-slate-50 pt-3 font-tamil", children: t(faq.a, faq.ae) })
      ] }, index)) }) })
    ] }) }),
    /* @__PURE__ */ jsx(Section, { className: "py-16", children: /* @__PURE__ */ jsx(ScrollReveal, { direction: "scale", duration: 0.7, className: "w-full", children: /* @__PURE__ */ jsxs("div", { className: "relative overflow-hidden rounded-2xl bg-primary text-primary-foreground p-10 md:p-14", children: [
      /* @__PURE__ */ jsx("div", { className: "absolute inset-0 opacity-10 bg-black/20", "aria-hidden": "true" }),
      /* @__PURE__ */ jsxs("div", { className: "relative max-w-2xl", children: [
        /* @__PURE__ */ jsx(SectionLabel, { children: /* @__PURE__ */ jsx("span", { className: "text-gold", children: t("இன்றே இணையுங்கள்", "Join today") }) }),
        /* @__PURE__ */ jsx("h2", { className: "mt-3 font-display text-3xl md:text-4xl font-semibold", children: t("ஒன்றாக நிற்போம். பலத்துடன் வணிகம் செய்வோம்.", "Stand together. Trade with strength.") }),
        /* @__PURE__ */ jsx("div", { className: "mt-4 flex flex-wrap gap-2 text-xs text-primary-foreground/70", children: [t("உடனடி சான்றிதழ்", "Instant certificate"), t("₹2 லட்சம் காப்பீடு", "₹2L health cover"), t("₹500/ஆண்டு", "₹500/year"), t("38 மாவட்டங்கள்", "38 districts")].map((item) => /* @__PURE__ */ jsxs("span", { className: "flex items-center gap-1", children: [
          /* @__PURE__ */ jsx(CheckCircle, { className: "w-3.5 h-3.5 text-gold", "aria-hidden": "true" }),
          item
        ] }, item)) }),
        /* @__PURE__ */ jsx("div", { className: "mt-7", children: /* @__PURE__ */ jsxs(Link, { to: "/membership", className: "btn-primary bg-gold text-gold-foreground hover:bg-gold/90 text-base px-7", children: [
          t("உறுப்பினர் சேர்க்கைக்கு விண்ணப்பிக்கவும்", "Apply for Membership"),
          /* @__PURE__ */ jsx(ArrowRight, { className: "w-4 h-4", "aria-hidden": "true" })
        ] }) })
      ] })
    ] }) }) })
  ] });
}
export {
  Home as component
};
