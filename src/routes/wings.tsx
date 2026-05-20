import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { Section, SectionLabel } from "@/components/Section";
import { Search, ArrowRight, ArrowLeft, Sparkles } from "lucide-react";
import { useLanguage } from "@/hooks/useLanguage";
import { WINGS } from "@/data/wings";
import { motion, AnimatePresence } from "framer-motion";

export const Route = createFileRoute("/wings")({
  head: () => ({
    meta: [
      { title: "Wings & Divisions · Tamil Nadu Vanigargalin Sangamam" },
      { name: "description", content: "Explore the 34 specialized wings of Tamil Nadu Vanigargalin Sangamam. Join your industrial or trade division today." },
    ],
  }),
  component: Wings,
});

const DEPARTMENTS = [
  {
    id: "professional",
    nameEn: "Professional Services",
    nameTa: "தொழில்முறைப் பிரிவுகள்",
    descEn: "Legal, technical, financial, and digital expert networks.",
    descTa: "சட்டம், தொழில்நுட்பம், நிதி மற்றும் டிஜிட்டல் சார்ந்த நிபுணர் கூட்டமைப்பு.",
    wings: ["women-entrepreneurs", "chartered-accountants", "doctors", "lawyers", "engineers", "information-technology", "young-entrepreneurs", "media-relations"]
  },
  {
    id: "agricultural",
    nameEn: "Agricultural & Food Industry",
    nameTa: "விவசாயம் மற்றும் உணவுப் பிரிவுகள்",
    descEn: "Farming, organic agro-trading, milk farmers, and restaurant owners.",
    descTa: "விவசாயிகள், இயற்கை உற்பத்தி, பால் பண்ணை மற்றும் உணவக உரிமையாளர்கள்.",
    wings: ["agriculture", "fishery", "nursery", "forest-timber", "food-restaurants", "fmcg-traders", "dairy-farmers"]
  },
  {
    id: "industrial",
    nameEn: "Industrial & Manufacturing Trade",
    nameTa: "தொழில் மற்றும் வர்த்தகப் பிரிவுகள்",
    descEn: "Heavy industrial manufacturers, textile weavers, logistics, and real estate developers.",
    descTa: "உற்பத்தியாளர்கள், நெசவாளர்கள், தளவாடங்கள் மற்றும் கட்டுமானத் துறை சார்ந்தவர்கள்.",
    wings: ["manufacturers", "real-estate", "infrastructure-builders", "electrical-hardware", "logistics-distributors", "export-import", "textile-weavers", "printing-packaging", "gold-jewellery"]
  },
  {
    id: "public",
    nameEn: "Public & General Services",
    nameTa: "பொது மற்றும் சமூகப் பிரிவுகள்",
    descEn: "Retailers, handloom craftsmen, tourism agencies, and workers unions.",
    descTa: "சிறு சில்லறை வணிகர்கள், கைத்தறி கலைஞர்கள், சுற்றுலா முகவர்கள் மற்றும் தொழிலாளர்கள்.",
    wings: ["labour", "differently-abled", "pharmacy-druggists", "education-academics", "tourism-travel", "sports-fitness", "handloom-handicrafts", "small-retailers", "hospitality-hoteliers"]
  }
];

function Wings() {
  const { t, language } = useLanguage();
  const [query, setQuery] = useState("");
  const [selectedDept, setSelectedDept] = useState<string>("all");

  const filteredWings = WINGS.filter((w) => {
    const term = query.toLowerCase();
    return (
      w.nameEn.toLowerCase().includes(term) ||
      w.nameTa.toLowerCase().includes(term) ||
      w.descriptionEn.toLowerCase().includes(term) ||
      w.descriptionTa.toLowerCase().includes(term)
    );
  });

  return (
    <div className="relative min-h-screen bg-slate-50/50">
      <section className="border-b border-slate-200/60 bg-white">
        <div className="max-w-7xl mx-auto px-4 py-12 md:py-16">
          <div className="mb-4">
            <Link to="/services" className="inline-flex items-center gap-1.5 text-xs font-semibold text-primary hover:underline transition-all">
              <ArrowLeft className="w-3.5 h-3.5" /> {t("சேவைகளுக்குத் திரும்பு", "Back to Services")}
            </Link>
          </div>
          
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-3 py-1 rounded-full text-xs font-semibold">
            <Sparkles className="w-3.5 h-3.5 text-primary animate-pulse" />
            <span>{t("துணைப் பிரிவுகள்", "Specialized Wings")}</span>
          </div>
          
          <h1 className="mt-3 font-display text-3xl md:text-5xl font-bold text-slate-800 leading-tight max-w-3xl">
            {t("வணிகர்களின் சங்கமத்தின் 34 பிரிவுகள்", "34 Organizational Wings")}
          </h1>
          
          <p className="mt-4 text-xs md:text-sm text-slate-500 max-w-2xl font-tamil leading-relaxed">
            {t(
              "உங்கள் வணிகத்தின் தன்மைக்கு ஏற்ற பிரிவைத் தேர்ந்தெடுத்து, அதற்கான சிறப்புச் சலுகைகள், சட்ட ஆலோசனைகள் மற்றும் தொழில் கூட்டுறவு வாய்ப்புகளைப் பெறுங்கள்.",
              "Choose the wing that fits your business type to access specialized support, trade benefits, advisory services, and specific networking channels."
            )}
          </p>

          {/* Search bar */}
          <div className="mt-8 max-w-xl relative">
            <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none">
              <Search className="h-4 w-4 text-slate-400" />
            </div>
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder={t("பிரிவைத் தேடுக... (எ.கா: மகளிர், IT, உணவகம்)", "Search wings... (e.g. Women, IT, Restaurant)")}
              className="block w-full pl-10 pr-3 py-3.5 border border-slate-200 rounded-xl bg-white shadow-xs focus:outline-none focus:ring-4 focus:ring-primary/10 focus:border-primary text-xs md:text-sm transition duration-300 min-h-[44px]"
            />
          </div>

          {/* Category Filter Tabs */}
          <div className="mt-6 flex gap-2 flex-wrap pb-1 overflow-x-auto">
            <button
              onClick={() => setSelectedDept("all")}
              className={`px-4 py-2 rounded-xl text-xs font-semibold transition cursor-pointer min-h-[36px] border ${
                selectedDept === "all" 
                  ? "bg-primary text-white border-primary shadow-xs" 
                  : "bg-white border-slate-200 text-slate-600 hover:bg-slate-50"
              }`}
            >
              {t("அனைத்துப் பிரிவுகளும்", "All Departments")}
            </button>
            {DEPARTMENTS.map(dept => (
              <button
                key={dept.id}
                onClick={() => setSelectedDept(dept.id)}
                className={`px-4 py-2 rounded-xl text-xs font-semibold transition cursor-pointer min-h-[36px] border ${
                  selectedDept === dept.id 
                    ? "bg-primary text-white border-primary shadow-xs" 
                    : "bg-white border-slate-200 text-slate-600 hover:bg-slate-50"
                }`}
              >
                {language === "ta" ? dept.nameTa : dept.nameEn}
              </button>
            ))}
          </div>
        </div>
      </section>

      <Section className="py-12">
        {filteredWings.length === 0 ? (
          <div className="text-center py-16 bg-white border border-slate-250/60 rounded-2xl p-6 shadow-xs max-w-md mx-auto">
            <div className="text-slate-400 text-sm font-semibold">{t("பிரிவுகள் எதுவும் காணப்படவில்லை.", "No matching wings found.")}</div>
            <button onClick={() => setQuery("")} className="mt-3 text-xs text-primary font-bold hover:underline">
              {t("அனைத்தையும் காட்டு", "Clear Search & View All")}
            </button>
          </div>
        ) : (
          <div className="space-y-12">
            {DEPARTMENTS.filter(d => selectedDept === "all" || selectedDept === d.id).map(dept => {
              const deptWings = filteredWings.filter(w => dept.wings.includes(w.id));
              if (deptWings.length === 0) return null;

              return (
                <div key={dept.id} className="space-y-6">
                  {/* Department Title header */}
                  <div className="border-b border-slate-200/80 pb-3">
                    <h2 className="font-display text-lg md:text-xl font-bold text-slate-800 leading-snug">
                      {language === "ta" ? dept.nameTa : dept.nameEn}
                    </h2>
                    <p className="text-xs text-slate-400 mt-0.5 leading-relaxed font-tamil">
                      {language === "ta" ? dept.descTa : dept.descEn}
                    </p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    <AnimatePresence>
                      {deptWings.map((w, index) => {
                        const Icon = w.icon;
                        return (
                          <motion.div
                            key={w.id}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.2, delay: Math.min(index * 0.02, 0.15) }}
                            className="bg-white border border-slate-200 rounded-2xl p-5 md:p-6 shadow-xs group hover:shadow-md hover:border-primary/45 transition duration-300 flex flex-col justify-between min-h-[190px]"
                          >
                            <div className="space-y-3">
                              <div className="w-10 h-10 rounded-xl bg-primary/5 text-primary grid place-items-center transition duration-300 group-hover:bg-primary group-hover:text-white">
                                <Icon className="w-4 h-4" />
                              </div>
                              <h3 className="font-display font-bold text-sm md:text-base text-slate-800 leading-snug">
                                {language === "ta" ? w.nameTa : w.nameEn}
                              </h3>
                              <p className="text-xs text-slate-500 leading-relaxed font-tamil">
                                {language === "ta" ? w.descriptionTa : w.descriptionEn}
                              </p>
                            </div>
                            
                            <div className="mt-4 pt-3.5 border-t border-slate-100 flex items-center justify-between">
                              <Link
                                to="/membership"
                                search={{ wing: w.id }}
                                className="inline-flex items-center gap-1.5 text-xs font-bold text-primary hover:underline transition-all cursor-pointer min-h-[30px]"
                              >
                                {t("இணைவு / Join", "Join Wing")} <ArrowRight className="w-3.5 h-3.5" />
                              </Link>
                            </div>
                          </motion.div>
                        );
                      })}
                    </AnimatePresence>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </Section>

      {/* Coordinator CTA section matching referral widget */}
      <Section className="py-12 border-t border-slate-200/80 bg-white">
        <div className="bg-slate-950 text-white rounded-2xl p-6 md:p-10 flex flex-col md:flex-row items-center justify-between gap-6 shadow-md border border-slate-800">
          <div className="space-y-2 text-center md:text-left">
            <span className="bg-gold/25 border border-gold/15 text-gold text-xs font-bold px-2.5 py-1 rounded-full uppercase tracking-wider">நிர்வாகியாக இணைய</span>
            <h2 className="font-display text-2xl font-bold leading-tight">தலைமை ஏற்கத் தயாரா?</h2>
            <p className="text-xs md:text-sm text-slate-350 max-w-xl font-tamil leading-relaxed">
              உங்கள் பரிந்துரை லிங்க் மூலம் 25 வணிகர்களை ஒன்றிணைத்து, தமிழ்நாடு வணிகர்களின் சங்கமத்தில் 'ஒருங்கிணைப்பாளர்' பொறுப்பை பெற்றிடுங்கள்!
            </p>
          </div>
          <Link
            to="/dashboard"
            className="bg-white hover:bg-slate-100 text-slate-900 px-6 py-3.5 rounded-xl font-bold text-xs transition shadow-md shrink-0 inline-flex items-center gap-1.5 min-h-[44px]"
          >
            {t("டாஷ்போர்டுக்கு செல்க", "Go to Dashboard")} <ArrowRight className="w-4 h-4 text-slate-900" />
          </Link>
        </div>
      </Section>
    </div>
  );
}
