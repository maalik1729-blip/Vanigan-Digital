import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "@/hooks/useLanguage";

const wordsEn = ["trader", "business", "merchant", "retailer", "shopkeeper"];
const wordsTa = [
  "வணிகர்களுக்குத்",
  "வியாபாரிகளுக்குத்",
  "உறுப்பினர்களுக்குத்",
  "தொழில்முனைவோருக்குத்",
  "சிறு வணிகர்களுக்குத்",
];

export function WordSwapper() {
  const { language } = useLanguage();
  const [index, setIndex] = useState(0);

  const words = language === "ta" ? wordsTa : wordsEn;

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % words.length);
    }, 2800);
    return () => clearInterval(timer);
  }, [words.length]);

  // Reset index to 0 when language switches
  useEffect(() => {
    setIndex(0);
  }, [language]);

  const currentWord = words[index] || "";

  // Animation variants for smooth vertical slide & fade
  const variants = {
    enter: {
      y: 20,
      opacity: 0,
    },
    center: {
      y: 0,
      opacity: 1,
      transition: {
        y: { type: "spring", stiffness: 260, damping: 20 },
        opacity: { duration: 0.25 },
      },
    },
    exit: {
      y: -20,
      opacity: 0,
      transition: {
        y: { type: "spring", stiffness: 260, damping: 20 },
        opacity: { duration: 0.25 },
      },
    },
  };

  return (
    <span className="inline-flex flex-wrap items-baseline select-none">
      {language === "ta" ? (
        <span className="inline-flex flex-wrap items-center">
          <span className="relative inline-block min-w-[210px] sm:min-w-[250px] md:min-w-[290px] lg:min-w-[320px] h-[1.3em] overflow-hidden align-middle">
            <AnimatePresence mode="wait">
              <motion.span
                key={currentWord}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                className="absolute left-0 top-0 w-full text-left font-display animate-text-gradient bg-clip-text text-transparent bg-gradient-to-r from-gold via-amber-500 to-orange-500 bg-[length:200%_auto]"
              >
                {currentWord}
              </motion.span>
            </AnimatePresence>
          </span>
          <span className="ml-1">தேவையான அனைத்தும்.</span>
        </span>
      ) : (
        <span className="inline-flex flex-wrap items-center">
          <span>Everything a </span>
          <span className="relative inline-block min-w-[95px] sm:min-w-[125px] md:min-w-[155px] lg:min-w-[185px] h-[1.3em] overflow-hidden align-middle mx-1.5 md:mx-2">
            <AnimatePresence mode="wait">
              <motion.span
                key={currentWord}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                className="absolute left-0 top-0 w-full text-left font-display animate-text-gradient bg-clip-text text-transparent bg-gradient-to-r from-gold via-amber-500 to-orange-500 bg-[length:200%_auto]"
              >
                {currentWord}
              </motion.span>
            </AnimatePresence>
          </span>
          <span>needs.</span>
        </span>
      )}
    </span>
  );
}
