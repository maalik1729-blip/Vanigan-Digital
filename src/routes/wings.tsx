import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { Section, SectionLabel } from "@/components/Section";
import { Search, ArrowRight, ArrowLeft, Sparkles, MapPin, Globe, Users, Award, ShieldCheck } from "lucide-react";
import { useLanguage } from "@/hooks/useLanguage";
import { WINGS } from "@/data/wings";
import { ZONE_BREAKDOWN } from "@/data/zones";
import { motion, AnimatePresence } from "framer-motion";

export const Route = createFileRoute("/wings")({
  head: () => ({
    meta: [
      { title: "Wings & Divisions · Tamil Nadu Vanigargalin Sangamam" },
      { name: "description", content: "Explore the specialized wings and regional constituencies of Tamil Nadu Vanigargalin Sangamam." },
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
    wings: ["agriculture", "restaurant-owners", "marine-business", "tribal-entrepreneurs", "distributors"]
  },
  {
    id: "industrial",
    nameEn: "Industrial & Manufacturing Trade",
    nameTa: "தொழில் மற்றும் வர்த்தகப் பிரிவுகள்",
    descEn: "Heavy industrial manufacturers, textile weavers, logistics, and real estate developers.",
    descTa: "உற்பத்தியாளர்கள், நெசவாளர்கள், தளவாடங்கள் மற்றும் கட்டுமானத் துறை சார்ந்தவர்கள்.",
    wings: ["manufacturers", "import-export", "weavers", "printing-press", "computer-mobile", "insurance-finance"]
  },
  {
    id: "public",
    nameEn: "Public & General Services",
    nameTa: "பொது மற்றும் சமூகப் பிரிவுகள்",
    descEn: "Retailers, handloom craftsmen, tourism agencies, and workers unions.",
    descTa: "சிறு சில்லறை வணிகர்கள், கைத்தறி கலைஞர்கள், சுற்றுலா முகவர்கள் மற்றும் தொழிலாளர்கள்.",
    wings: ["labour", "differently-abled", "transgender-entrepreneurs", "pharmacists", "educators", "tourism-transport", "sports-business", "shop-owners", "street-vendors", "hotels-lodgings", "beauty-fitness", "central-govt-relations", "state-govt-relations", "cottage-industry", "digital-advertisers"]
  }
];

function Wings() {
  const { t, language } = useLanguage();
  const [activeTab, setActiveTab] = useState<"wings" | "zones">("wings");

  // Wings State
  const [query, setQuery] = useState("");
  const [selectedDept, setSelectedDept] = useState<string>("all");

  // Zones State
  const [zoneQuery, setZoneQuery] = useState("");
  const [selectedZone, setSelectedZone] = useState<string>("all");
  const [selectedDistrict, setSelectedDistrict] = useState<string>("all");

  // Unique Zones list
  const uniqueZones = Array.from(new Set(ZONE_BREAKDOWN.map(item => item.zone)));

  // Available districts based on selected zone
  const availableDistricts = Array.from(
    new Set(
      ZONE_BREAKDOWN
        .filter(item => selectedZone === "all" || item.zone === selectedZone)
        .map(item => item.district)
    )
  );

  // Total statistics for Zones breakdown
  const statsZonesCount = uniqueZones.length;
  const statsDistrictsCount = Array.from(new Set(ZONE_BREAKDOWN.map(item => item.district))).length;
  const statsACCount = ZONE_BREAKDOWN.length;
  const statsVotersSum = ZONE_BREAKDOWN.reduce((sum, item) => sum + item.total, 0);

  // Filter wings
  const filteredWings = WINGS.filter((w) => {
    const term = query.toLowerCase();
    return (
      w.nameEn.toLowerCase().includes(term) ||
      w.nameTa.toLowerCase().includes(term) ||
      w.descriptionEn.toLowerCase().includes(term) ||
      w.descriptionTa.toLowerCase().includes(term)
    );
  });

  // Filter zones/constituencies
  const filteredZones = ZONE_BREAKDOWN.filter((item) => {
    const term = zoneQuery.toLowerCase();
    const matchesSearch =
      item.constituency.toLowerCase().includes(term) ||
      item.district.toLowerCase().includes(term) ||
      item.zone.toLowerCase().includes(term) ||
      item.ac_no.toString().includes(term);

    const matchesZone = selectedZone === "all" || item.zone === selectedZone;
    const matchesDistrict = selectedDistrict === "all" || item.district === selectedDistrict;

    return matchesSearch && matchesZone && matchesDistrict;
  });

  return (
    <div className="relative min-h-screen">
      {/* Header section with tab switcher */}
      <section className="border-b border-slate-200/60 bg-white">
        <div className="max-w-7xl mx-auto px-4 py-10 md:py-12">
          <div className="mb-4">
            <Link to="/services" className="inline-flex items-center gap-1.5 text-xs font-semibold text-primary hover:underline transition-all">
              <ArrowLeft className="w-3.5 h-3.5" /> {t("சேவைகளுக்குத் திரும்பு", "Back to Services")}
            </Link>
          </div>

          <div className="flex border-b border-slate-200 mb-8">
            <button
              onClick={() => setActiveTab("wings")}
              className={`pb-4 px-6 font-display text-sm md:text-base font-bold transition-all relative cursor-pointer ${
                activeTab === "wings" ? "text-primary" : "text-slate-400 hover:text-slate-600"
              }`}
            >
              {t("34 வணிகப் பிரிவுகள்", "34 Specialized Wings")}
              {activeTab === "wings" && (
                <motion.div
                  layoutId="activeTabUnderline"
                  className="absolute bottom-0 left-0 right-0 h-0.75 bg-primary rounded-full"
                />
              )}
            </button>
            <button
              onClick={() => setActiveTab("zones")}
              className={`pb-4 px-6 font-display text-sm md:text-base font-bold transition-all relative cursor-pointer ${
                activeTab === "zones" ? "text-primary" : "text-slate-400 hover:text-slate-600"
              }`}
            >
              {t("மண்டல வாரியான தொகுதிகள்", "Regional Zone Breakdown")}
              {activeTab === "zones" && (
                <motion.div
                  layoutId="activeTabUnderline"
                  className="absolute bottom-0 left-0 right-0 h-0.75 bg-primary rounded-full"
                />
              )}
            </button>
          </div>

          {activeTab === "wings" ? (
            <div>
              <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-3 py-1 rounded-full text-xs font-semibold">
                <Sparkles className="w-3.5 h-3.5 text-primary animate-pulse" />
                <span>{t("துணைப் பிரிவுகள்", "Specialized Wings")}</span>
              </div>
              
              <h1 className="mt-3 font-display text-2xl md:text-4xl font-bold text-slate-800 leading-tight max-w-3xl">
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
                  className="block w-full pl-10 pr-3 py-3 border border-slate-200 rounded-xl bg-white shadow-xs focus:outline-none focus:ring-4 focus:ring-primary/10 focus:border-primary text-xs md:text-sm transition duration-300 min-h-[44px]"
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
          ) : (
            <div>
              <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-3 py-1 rounded-full text-xs font-semibold">
                <Globe className="w-3.5 h-3.5 text-primary" />
                <span>{t("புவியியல் கவரேஜ்", "Geographical Coverage")}</span>
              </div>
              
              <h1 className="mt-3 font-display text-2xl md:text-4xl font-bold text-slate-800 leading-tight max-w-3xl">
                {t("தமிழக மண்டல மற்றும் தொகுதி வாரியான பகுப்பாய்வு", "Tamil Nadu Zone & Constituency Breakdown")}
              </h1>
              
              <p className="mt-4 text-xs md:text-sm text-slate-500 max-w-2xl font-tamil leading-relaxed">
                {t(
                  "தமிழ்நாடு வணிகர்களின் சங்கமம் அமைப்பின் கீழ் செயல்படும் அதிகாரப்பூர்வ மண்டலங்கள், மாவட்டங்கள் மற்றும் சட்டமன்ற தொகுதிகளின் முழு விவரங்கள்.",
                  "Explore the full regional coverage of our association, mapped strictly by regional zones, covered districts, and corresponding legislative assembly constituencies."
                )}
              </p>

              {/* Statistics Panel */}
              <div className="mt-8 grid grid-cols-2 gap-4 max-w-md">
                <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 text-center shadow-xs">
                  <div className="text-xl md:text-2xl font-bold text-primary tabular-nums">{statsZonesCount}</div>
                  <div className="text-xxs uppercase tracking-wider text-slate-400 font-semibold mt-1">
                    {t("அதிகாரப்பூர்வ மண்டலங்கள்", "Regional Zones")}
                  </div>
                </div>
                <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 text-center shadow-xs">
                  <div className="text-xl md:text-2xl font-bold text-primary tabular-nums">{statsDistrictsCount}</div>
                  <div className="text-xxs uppercase tracking-wider text-slate-400 font-semibold mt-1">
                    {t("உள்ளடக்கிய மாவட்டங்கள்", "Districts Covered")}
                  </div>
                </div>
              </div>

              {/* Zone Filter pills */}
              <div className="mt-8 flex flex-col md:flex-row gap-4 items-start md:items-center justify-between">
                {/* Constituency Search */}
                <div className="w-full md:max-w-md relative">
                  <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none">
                    <Search className="h-4 w-4 text-slate-400" />
                  </div>
                  <input
                    type="text"
                    value={zoneQuery}
                    onChange={(e) => {
                      setZoneQuery(e.target.value);
                    }}
                    placeholder={t("தொகுதி, மாவட்டம் அல்லது மண்டலம் தேடுக...", "Search constituency, district or zone...")}
                    className="block w-full pl-10 pr-3 py-3 border border-slate-200 rounded-xl bg-white shadow-xs focus:outline-none focus:ring-4 focus:ring-primary/10 focus:border-primary text-xs md:text-sm transition duration-300 min-h-[44px]"
                  />
                </div>
              </div>

              {/* Zone Selector tabs */}
              <div className="mt-6 flex gap-2 flex-wrap pb-1 overflow-x-auto">
                <button
                  onClick={() => {
                    setSelectedZone("all");
                    setSelectedDistrict("all");
                  }}
                  className={`px-4 py-2 rounded-xl text-xs font-semibold transition cursor-pointer min-h-[36px] border ${
                    selectedZone === "all" 
                      ? "bg-primary text-white border-primary shadow-xs" 
                      : "bg-white border-slate-200 text-slate-600 hover:bg-slate-50"
                  }`}
                >
                  {t("அனைத்து மண்டலங்களும்", "All Zones")}
                </button>
                {uniqueZones.map(zone => (
                  <button
                    key={zone}
                    onClick={() => {
                      setSelectedZone(zone);
                      setSelectedDistrict("all");
                    }}
                    className={`px-4 py-2 rounded-xl text-xs font-semibold transition cursor-pointer min-h-[36px] border ${
                      selectedZone === zone 
                        ? "bg-primary text-white border-primary shadow-xs" 
                        : "bg-white border-slate-200 text-slate-600 hover:bg-slate-50"
                    }`}
                  >
                    {zone}
                  </button>
                ))}
              </div>

              {/* District pills based on selected zone */}
              <div className="mt-4 flex gap-1.5 flex-wrap pb-1 overflow-x-auto">
                <button
                  onClick={() => setSelectedDistrict("all")}
                  className={`px-3 py-1.5 rounded-full text-xxs font-bold transition cursor-pointer border ${
                    selectedDistrict === "all" 
                      ? "bg-slate-800 border-slate-800 text-white shadow-xs" 
                      : "bg-slate-100 border-slate-200 text-slate-600 hover:bg-slate-250"
                  }`}
                >
                  {t("அனைத்து மாவட்டங்களும்", "All Districts")}
                </button>
                {availableDistricts.map(district => (
                  <button
                    key={district}
                    onClick={() => setSelectedDistrict(district)}
                    className={`px-3 py-1.5 rounded-full text-xxs font-bold transition cursor-pointer border ${
                      selectedDistrict === district 
                        ? "bg-slate-800 border-slate-800 text-white shadow-xs" 
                        : "bg-slate-100 border-slate-200 text-slate-600 hover:bg-slate-250"
                    }`}
                  >
                    {district}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      <Section className="py-8">
        {activeTab === "wings" ? (
          <div>
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
                                className="card-base card-interactive group p-5 md:p-6 flex flex-col justify-between min-h-[190px]"
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
          </div>
        ) : (
          <div>
            {filteredZones.length === 0 ? (
              <div className="text-center py-16 bg-white border border-slate-250/60 rounded-2xl p-6 shadow-xs max-w-md mx-auto">
                <div className="text-slate-400 text-sm font-semibold">{t("தொகுதிகள் எதுவும் காணப்படவில்லை.", "No matching constituencies found.")}</div>
                <button 
                  onClick={() => {
                    setZoneQuery("");
                    setSelectedZone("all");
                    setSelectedDistrict("all");
                  }} 
                  className="mt-3 text-xs text-primary font-bold hover:underline"
                >
                  {t("வடிகட்டிகளை நீக்கு", "Clear Filters & View All")}
                </button>
              </div>
            ) : (
              <div className="bg-white border border-slate-200 rounded-2xl shadow-xs overflow-hidden">
                {/* Mobile Grid Layout */}
                <div className="block md:hidden divide-y divide-slate-100">
                  {filteredZones.slice(0, 100).map((item) => (
                    <div key={`${item.ac_no}-${item.constituency}`} className="p-4 space-y-2">
                      <div className="flex justify-between items-start">
                        <div>
                          <div className="text-xxs font-bold text-slate-400 tracking-wider">AC #{item.ac_no}</div>
                          <h4 className="font-bold text-sm text-slate-800 font-display leading-tight">{item.constituency}</h4>
                        </div>
                        <span className="text-xxs font-bold bg-primary/10 text-primary px-2 py-0.5 rounded-full">
                          {item.zone}
                        </span>
                      </div>
                      <div className="flex justify-between text-xxs text-slate-500 font-semibold">
                        <span>{t("மாவட்டம்", "District")}: {item.district}</span>
                        <span className="text-slate-800 font-bold">{t("மொத்தம்", "Total")}: {item.total.toLocaleString()}</span>
                      </div>
                      {/* Gender breakdown bar */}
                      {(() => {
                        const malePct = Math.round((item.male / item.total) * 100);
                        const femalePct = 100 - malePct;
                        return (
                          <div className="space-y-1">
                            <div className="flex justify-between text-[10px] text-slate-400">
                              <span>M: {malePct}%</span>
                              <span>F: {femalePct}%</span>
                            </div>
                            <div className="w-full bg-slate-100 h-1.5 rounded-full overflow-hidden flex">
                              <div className="bg-primary h-full" style={{ width: `${malePct}%` }} />
                              <div className="bg-rose-400 h-full" style={{ width: `${femalePct}%` }} />
                            </div>
                          </div>
                        );
                      })()}
                    </div>
                  ))}
                  {filteredZones.length > 100 && (
                    <div className="p-4 text-center text-xs text-slate-400 bg-slate-50 font-semibold font-tamil">
                      {t(`மேலும் ${filteredZones.length - 100} தொகுதிகள் உள்ளன...`, `And ${filteredZones.length - 100} more constituencies matches...`)}
                    </div>
                  )}
                </div>

                {/* Desktop Responsive Table Layout */}
                <div className="hidden md:block overflow-x-auto">
                  <table className="w-full text-left border-collapse">
                    <thead>
                      <tr className="bg-slate-50 border-b border-slate-200 text-xxs uppercase tracking-wider text-slate-400 font-bold">
                        <th className="py-3 px-5 w-20">AC No</th>
                        <th className="py-3 px-5">{t("சட்டமன்ற தொகுதி", "Constituency")}</th>
                        <th className="py-3 px-5">{t("மாவட்டம்", "District")}</th>
                        <th className="py-3 px-5">{t("மண்டலம்", "Zone")}</th>
                        <th className="py-3 px-5 w-32">{t("பாலின விகிதம் (ஆண் / பெண்)", "Gender Ratio (M / F)")}</th>
                        <th className="py-3 px-5 text-right w-36">{t("மொத்த வாக்காளர்கள்", "Total Voters")}</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100 text-xs md:text-sm text-slate-650">
                      {filteredZones.slice(0, 100).map((item) => {
                        const malePct = Math.round((item.male / item.total) * 100);
                        const femalePct = 100 - malePct;
                        return (
                          <tr key={`${item.ac_no}-${item.constituency}`} className="hover:bg-slate-50/50 transition">
                            <td className="py-3.5 px-5 font-bold text-slate-400 tabular-nums">#{item.ac_no}</td>
                            <td className="py-3.5 px-5 font-bold font-display text-slate-800">{item.constituency}</td>
                            <td className="py-3.5 px-5 font-semibold text-slate-600">{item.district}</td>
                            <td className="py-3.5 px-5">
                              <span className="text-[10px] font-bold bg-slate-100 text-slate-600 px-2 py-0.5 rounded-md uppercase tracking-wider">
                                {item.zone}
                              </span>
                            </td>
                            <td className="py-3.5 px-5">
                              <div className="space-y-1">
                                <div className="flex justify-between text-[10px] text-slate-400 font-semibold">
                                  <span>{malePct}%</span>
                                  <span>{femalePct}%</span>
                                </div>
                                <div className="w-full bg-slate-100 h-1.5 rounded-full overflow-hidden flex" title={`Male: ${item.male.toLocaleString()} | Female: ${item.female.toLocaleString()}`}>
                                  <div className="bg-primary h-full" style={{ width: `${malePct}%` }} />
                                  <div className="bg-rose-400 h-full" style={{ width: `${femalePct}%` }} />
                                </div>
                              </div>
                            </td>
                            <td className="py-3.5 px-5 text-right font-bold text-slate-800 tabular-nums">
                              {item.total.toLocaleString()}
                            </td>
                          </tr>
                        );
                      })}
                      {filteredZones.length > 100 && (
                        <tr>
                          <td colSpan={6} className="py-4 text-center text-xs text-slate-450 bg-slate-50 font-semibold font-tamil">
                            {t(`மேலும் ${filteredZones.length - 100} சட்டமன்ற தொகுதிகள் உள்ளன...`, `And ${filteredZones.length - 100} more assembly constituencies matches...`)}
                          </td>
                        </tr>
                      )}
                    </tbody>
                  </table>
                </div>
              </div>
            )}
          </div>
        )}
      </Section>

      {/* Coordinator CTA section */}
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
