import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Section, SectionLabel } from "@/components/Section";
import templeLogo from "@/assets/temple-logo.png";
import {
  Award, ShieldCheck, Users, IdCard, ArrowRight,
  CheckCircle, Sparkles, Phone,
} from "lucide-react";
import { useLanguage } from "@/hooks/useLanguage";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Tamil Nadu Vanigargalin Sangamam — Official Trader Portal" },
      { name: "description", content: "Join Tamil Nadu's official traders association. Membership, certificates, advocacy and welfare for vanigars across the state." },
      { property: "og:title", content: "Tamil Nadu Vanigargalin Sangamam" },
      { property: "og:description", content: "Official portal for trader membership, services and welfare." },
    ],
  }),
  component: Home,
});

const stats = [
  { v: "1,24,560+", l: "Registered Members", t: "உறுப்பினர்கள்" },
  { v: "38",         l: "Districts Covered",  t: "மாவட்டங்கள்" },
  { v: "12+",        l: "Years of Service",   t: "ஆண்டுகள்" },
  { v: "₹8.4Cr",    l: "Welfare Disbursed",  t: "நலன் நிதி" },
];

// Only 3 top services on homepage — full list on /services
const TOP_SERVICES = [
  {
    i: Users,
    t: "புதிய உறுப்பினர்",
    e: "New Membership",
    d: "Apply online in 5 minutes — get your official EPIC ID and stamped certificate instantly.",
    td: "5 நிமிடங்களில் ஆன்லைனில் விண்ணப்பிக்கவும் — உடனடி EPIC ID மற்றும் சான்றிதழ் பெறுங்கள்.",
    to: "/membership",
    badge: "START HERE",
  },
  {
    i: IdCard,
    t: "சங்கம அட்டை பெறுக",
    e: "Get My Membership Card",
    d: "Search by name or EPIC — generate your official TNVS front & back membership card instantly.",
    td: "பெயர் அல்லது EPIC மூலம் தேடுங்கள் — உங்கள் அதிகாரப்பூர்வ TNVS உறுப்பினர் அட்டையை உருவாக்குங்கள்.",
    to: "/voter-id",
    badge: null,
  },
  {
    i: Award,
    t: "நலத்திட்டங்கள்",
    e: "Welfare Schemes",
    d: "Insurance, scholarships and emergency aid for members and their families across Tamil Nadu.",
    td: "காப்பீடு, உதவித்தொகை மற்றும் அவசர நிவாரணம் — உங்களுக்கும் குடும்பத்திற்கும்.",
    to: "/services",
    badge: null,
  },
];

const HOW_IT_WORKS = [
  { n: "01", t: "தகவல் நிரப்புக", e: "Fill your details",    td: "பெயர், கைபேசி, மாவட்டம், வணிக வகை.", d: "Name, mobile, district, business type." },
  { n: "02", t: "ஆவணம் சமர்ப்பிக்க", e: "Upload documents", td: "அடையாளச் சான்று, கடை புகைப்படம், வணிகச் சான்று.", d: "ID proof, shop photo, business proof." },
  { n: "03", t: "பணம் செலுத்தவும்", e: "Pay the fee",        td: "பாதுகாப்பான UPI கட்டணம் — ₹500/ஆண்டு.", d: "Secure UPI payment — ₹500/year." },
  { n: "04", t: "சான்றிதழ் பெறு", e: "Get certificate",      td: "உடனடி டிஜிட்டல் சான்றிதழ் + EPIC அடையாள அட்டை.", d: "Instant digital certificate + EPIC ID." },
];

function Home() {
  const { t } = useLanguage();

  return (
    <div>
      {/* HERO */}
      <section className="relative overflow-hidden border-b border-border">
        <div className="absolute inset-0 -z-10 bg-primary/3" aria-hidden="true" />
        <div className="max-w-7xl mx-auto px-4 pt-14 pb-18 grid lg:grid-cols-12 gap-10 items-center">

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-7"
          >
            <SectionLabel>
              {t("அரசு அங்கீகரிக்கப்பட்டது · பதிவு எண். 2012/TNVS", "Government Registered · Reg. No. 2012/TNVS")}
            </SectionLabel>

            <h1 className="mt-5 font-display text-4xl sm:text-5xl lg:text-6xl font-semibold leading-[1.06] text-ink">
              {t(
                "தமிழ்நாடு வணிகர்களின் அதிகாரப்பூர்வ இல்லம்.",
                "The official home of Tamil Nadu's traders."
              )}
            </h1>

            <p className="font-tamil text-lg sm:text-xl mt-4 text-foreground/80 leading-snug">
              {t(
                "தமிழ்நாடு வணிகர்களின் சங்கமம் — அரசு அங்கீகரிக்கப்பட்ட உத்தியோகபூர்வ அமைப்பு.",
                "Tamil Nadu Vanigargalin Sangamam — Govt. Approved Official Organization."
              )}
            </p>

            <p className="mt-4 text-base text-muted-foreground max-w-xl leading-relaxed">
              {t(
                "உறுப்பினர் சேர்க்கைக்கு விண்ணப்பிக்கவும், உங்கள் அதிகாரப்பூர்வ சான்றிதழைப் பதிவிறக்கவும், நலத்திட்டங்களை அணுகவும் — அனைத்தும் ஒரே நம்பகமான போர்ட்டலில்.",
                "Apply for membership, download your official certificate, access welfare schemes — all from one trusted portal."
              )}
            </p>

            {/* Single primary CTA + secondary text link */}
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Link
                to="/membership"
                className="btn-primary text-base px-6"
              >
                <Users className="w-4 h-4" aria-hidden="true" />
                {t("உறுப்பினர் சேர்க்கைக்கு விண்ணப்பிக்க", "Apply for Membership")}
                <ArrowRight className="w-4 h-4" aria-hidden="true" />
              </Link>
              <Link
                to="/voter-id"
                search={{}}
                className="text-sm font-semibold text-primary hover:underline inline-flex items-center gap-1.5"
              >
                <IdCard className="w-4 h-4" aria-hidden="true" />
                {t("ஏற்கனவே உறுப்பினரா? என் அட்டை பெறுக →", "Already a member? Get your card →")}
              </Link>
            </div>

            {/* Trust signals */}
            <div className="mt-6 flex flex-wrap gap-x-5 gap-y-2 text-xs text-muted-foreground">
              <span className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-primary" aria-hidden="true" />
                {t("தமிழக அரசால் அங்கீகரிக்கப்பட்டது", "Govt. of Tamil Nadu approved")}
              </span>
              <span className="flex items-center gap-1.5">
                <Sparkles className="w-4 h-4 text-gold" aria-hidden="true" />
                {t("உடனடி டிஜிட்டல் சான்றிதழ்", "Instant digital certificate")}
              </span>
              <span className="flex items-center gap-1.5">
                <Phone className="w-4 h-4 text-slate-400" aria-hidden="true" />
                <a href="tel:04423456789" className="hover:text-primary transition">044-2345-6789</a>
              </span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="lg:col-span-5 flex items-center justify-center"
          >
            <img
              src={templeLogo}
              alt="Tamil Nadu Vanigargalin Sangamam emblem"
              className="w-full max-w-[400px] h-auto object-contain"
              width={400}
              height={400}
            />
          </motion.div>
        </div>
      </section>

      {/* STATS — moved above services for stronger trust signal */}
      <Section className="py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-border rounded-2xl overflow-hidden paper p-0">
          {stats.map((s) => (
            <div key={s.l} className="bg-card p-6 text-center">
              <div className="font-display text-4xl md:text-5xl font-semibold text-primary tabular-nums">
                {s.v}
              </div>
              <div className="text-xs text-muted-foreground mt-2 uppercase tracking-wider font-semibold">
                {t(s.t, s.l)}
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* HOW IT WORKS — moved before services so users understand first */}
      <Section className="py-16 border-t border-border">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <SectionLabel>{t("எப்படி பெறுவது", "How it works")}</SectionLabel>
            <h2 className="mt-3 font-display text-3xl md:text-4xl font-semibold">
              {t(
                "4 எளிய படிகளில் பதிவுசெய்யப்பட்ட உறுப்பினராகுங்கள்.",
                "Become a registered member in 4 simple steps."
              )}
            </h2>
            <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
              {t(
                "மொத்த நேரம்: 5 நிமிடங்கள் · கட்டணம்: ₹500/ஆண்டு",
                "Total time: ~5 minutes · Fee: ₹500/year"
              )}
            </p>
          </div>
          <div className="space-y-5">
            {HOW_IT_WORKS.map((step) => (
              <div key={step.n} className="flex gap-5 items-start">
                <div
                  className="font-display text-2xl text-gold font-semibold w-12 shrink-0"
                  aria-hidden="true"
                >
                  {step.n}
                </div>
                <div className="flex-1 border-l border-border pl-5 pb-1">
                  <div className="font-tamil font-semibold text-ink">{t(step.t, step.e)}</div>
                  <div className="text-sm text-muted-foreground mt-1">{t(step.td, step.d)}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* TOP 3 SERVICES */}
      <Section className="py-16 border-t border-border">
        <div className="flex items-end justify-between flex-wrap gap-4 mb-10">
          <div>
            <SectionLabel>{t("எங்கள் சேவைகள்", "Our Services")}</SectionLabel>
            <h2 className="mt-3 font-display text-3xl md:text-4xl font-semibold">
              {t("வணிகர்களுக்குத் தேவையான அனைத்தும்.", "Everything a trader needs.")}
            </h2>
          </div>
          <Link
            to="/services"
            className="text-primary text-sm font-semibold hover:underline inline-flex items-center gap-1"
          >
            {t("அனைத்து சேவைகளையும் காண்க", "View all services")}
            <ArrowRight className="w-4 h-4" aria-hidden="true" />
          </Link>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {TOP_SERVICES.map((s) => (
            <Link
              key={s.e}
              to={s.to}
              className="card-base card-interactive group p-6 flex flex-col justify-between min-h-[220px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
            >
              <div>
                <div className="flex items-start justify-between gap-2 mb-4">
                  <div className="w-11 h-11 rounded-xl bg-primary/8 grid place-items-center text-primary group-hover:bg-primary group-hover:text-white transition">
                    <s.i className="w-5 h-5" aria-hidden="true" />
                  </div>
                  {s.badge && (
                    <span className="text-xs font-bold text-primary bg-primary/8 border border-primary/20 px-2.5 py-0.5 rounded-full uppercase tracking-wide">
                      {s.badge}
                    </span>
                  )}
                </div>
                <h3 className="font-display text-lg font-semibold text-ink">{t(s.t, s.e)}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{t(s.td, s.d)}</p>
              </div>
              <div className="mt-4 pt-3 border-t border-slate-100 inline-flex items-center gap-1 text-sm font-semibold text-primary group-hover:gap-2 transition-all">
                {t("செல்க", "Apply / Go")}
                <ArrowRight className="w-4 h-4" aria-hidden="true" />
              </div>
            </Link>
          ))}
        </div>
      </Section>

      {/* CTA */}
      <Section className="py-16">
        <div className="relative overflow-hidden rounded-2xl bg-primary text-primary-foreground p-10 md:p-14">
          <div className="absolute inset-0 opacity-10 bg-black/20" aria-hidden="true" />
          <div className="relative max-w-2xl">
            <SectionLabel>
              <span className="text-gold">{t("இன்றே இணையுங்கள்", "Join today")}</span>
            </SectionLabel>
            <h2 className="mt-3 font-display text-3xl md:text-4xl font-semibold">
              {t("ஒன்றாக நிற்போம். பலத்துடன் வணிகம் செய்வோம்.", "Stand together. Trade with strength.")}
            </h2>
            <div className="mt-4 flex flex-wrap gap-2 text-xs text-primary-foreground/70">
              {[
                t("உடனடி சான்றிதழ்", "Instant certificate"),
                t("₹2 லட்சம் காப்பீடு", "₹2L health cover"),
                t("₹500/ஆண்டு", "₹500/year"),
                t("38 மாவட்டங்கள்", "38 districts"),
              ].map((item) => (
                <span key={item} className="flex items-center gap-1">
                  <CheckCircle className="w-3.5 h-3.5 text-gold" aria-hidden="true" />
                  {item}
                </span>
              ))}
            </div>
            <div className="mt-7">
              <Link
                to="/membership"
                className="btn-primary bg-gold text-gold-foreground hover:bg-gold/90 text-base px-7"
              >
                {t("உறுப்பினர் சேர்க்கைக்கு விண்ணப்பிக்கவும்", "Apply for Membership")}
                <ArrowRight className="w-4 h-4" aria-hidden="true" />
              </Link>
            </div>
          </div>
        </div>
      </Section>
    </div>
  );
}
