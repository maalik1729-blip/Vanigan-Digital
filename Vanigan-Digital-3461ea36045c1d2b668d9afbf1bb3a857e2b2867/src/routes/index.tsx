import { createFileRoute, Link } from "@tanstack/react-router";
import { Section, SectionLabel } from "@/components/Section";
import templeLogo from "@/assets/temple-logo.png";
import {
  Award, ShieldCheck, Users, IdCard, ArrowRight,
  CheckCircle, Sparkles, Phone, Coins,
} from "lucide-react";
import { useLanguage } from "@/hooks/useLanguage";
import { AnimatedCounter } from "@/components/AnimatedCounter";
import { WordSwapper } from "@/components/WordSwapper";
import { HorizontalSteps } from "@/components/HorizontalSteps";
import { TestimonialCarousel } from "@/components/TestimonialCarousel";
import { ScrollReveal } from "@/components/ScrollReveal";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

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

const faqs = [
  {
    q: "சங்கத்தில் உறுப்பினராக எவ்வாறு விண்ணப்பிப்பது?",
    e: "How do I apply for membership?",
    a: "விண்ணப்பிக்க 'உறுப்பினர் சேர்க்கை' பொத்தானைக் கிளிக் செய்து, உங்கள் தனிப்பட்ட மற்றும் வணிக விவரங்களை நிரப்பவும். பின்னர் கடை புகைப்படம் மற்றும் அடையாளச் சான்றை பதிவேற்றி, ஆண்டுக் கட்டணத்தைச் செலுத்தினால், உங்கள் EPIC அடையாள அட்டையும் சான்றிதழும் உடனடியாக உருவாக்கப்படும்.",
    ae: "Click on 'Apply for Membership', fill in your personal and business details, upload a shop photo and a valid ID proof, pay the annual registration fee online, and your official EPIC ID card and certificate will be generated instantly."
  },
  {
    q: "உறுப்பினர் சேர்க்கைக்கு என்னென்ன ஆவணங்கள் தேவை?",
    e: "What documents are required for registration?",
    a: "விண்ணப்பிக்க செல்லுபடியாகும் அடையாளச் சான்று (ஆதார் அட்டை, வாக்காளர் அடையாள அட்டை அல்லது GSTIN) மற்றும் உங்கள் கடை/வணிகத்தின் முன்பக்க புகைப்படம் மட்டுமே போதுமானது.",
    ae: "You only need a valid government-issued ID proof (Aadhaar Card, Voter ID, or GSTIN) and a clear front photograph of your shop/business premises."
  },
  {
    q: "இந்த டிஜிட்டல் சான்றிதழ் சட்டப்பூர்வமாக செல்லுபடியாகுமா?",
    e: "Is the digital certificate legally valid?",
    a: "ஆம், தமிழ்நாடு வணிகர்களின் சங்கமம் பதிவு எண். 2012/TNVS கீழ் பதிவு செய்யப்பட்ட அதிகாரப்பூர்வ அமைப்பாகும். QR குறியீடு சரிபார்ப்புடன் கூடிய இந்த டிஜிட்டல் சான்றிதழ் வங்கி வணிகக் கடன்கள், வர்த்தக அங்கீகாரங்கள் மற்றும் அரசு நலத்திட்ட உதவிகளுக்குச் செல்லுபடியாகும்.",
    ae: "Yes, Tamil Nadu Vanigargalin Sangamam is a registered traders association (Reg No. 2012/TNVS). The QR-code-verified digital certificate is widely accepted for bank business loans, trade references, and government welfare benefits."
  },
  {
    q: "உறுப்பினர் அட்டை மற்றும் சான்றிதழ் செல்லுபடியாகும் காலம் எவ்வளவு?",
    e: "How long is the membership valid?",
    a: "சங்கத்தின் உறுப்பினர் சேர்க்கை பதிவு செய்த நாளிலிருந்து 1 வருடத்திற்குச் செல்லுபடியாகும். காலம் முடிவதற்குள் உங்கள் EPIC எண் மூலம் ஆன்லைனிலேயே எளிய முறையில் புதுப்பித்துக் கொள்ளலாம்.",
    ae: "Membership is valid for exactly 1 year from the date of registration. You can easily renew it online using your EPIC number before it expires."
  }
];

// Only 3 top services on homepage — full list on /services
const MockupCard = () => {
  return (
    <div className="relative w-full aspect-[1.586/1] bg-gradient-to-br from-slate-900 via-slate-800 to-primary text-gold rounded-xl p-4 shadow-xl border border-slate-700/50 overflow-hidden group/mockup transition-all duration-500 hover:scale-[1.03] hover:-rotate-1 select-none">
      {/* Background Saffron Gold Accent Corner */}
      <div className="absolute top-0 right-0 w-24 h-24 bg-gold/10 rounded-full blur-2xl" />
      {/* Header */}
      <div className="flex justify-between items-start">
        <div className="flex items-center gap-1.5">
          <div className="w-5 h-5 rounded-full bg-white/10 flex items-center justify-center border border-white/20">
            <span className="text-[8px] font-bold text-white">TN</span>
          </div>
          <div className="leading-none">
            <div className="text-[7px] font-semibold text-white uppercase tracking-wider">TNVS</div>
            <div className="text-[5px] text-slate-400">TRADER UNION</div>
          </div>
        </div>
        <div className="text-[6px] font-mono text-gold-foreground bg-gold px-1.5 py-0.5 rounded leading-none font-bold">
          ACTIVE MEMBER
        </div>
      </div>
      {/* Body Details */}
      <div className="mt-5 flex gap-2.5 items-center">
        {/* Mock Avatar */}
        <div className="w-9 h-9 rounded-full bg-slate-700/60 border border-slate-600/50 flex items-center justify-center overflow-hidden shrink-0">
          <Users className="w-4 h-4 text-slate-400" />
        </div>
        <div className="space-y-0.5 min-w-0">
          <div className="text-[9px] font-bold text-white truncate">Senthil Kumar</div>
          <div className="text-[6px] text-slate-400 font-mono">TNVS-RJE38271A</div>
          <div className="text-[6px] text-slate-400">District: Chennai</div>
        </div>
      </div>
      {/* Footer stripe */}
      <div className="absolute bottom-0 left-0 right-0 h-1.5 bg-gradient-to-r from-primary via-gold to-primary" />
    </div>
  );
};

const TOP_SERVICES = [
  {
    i: Users,
    t: "புதிய உறுப்பினர் சேர்க்கை",
    e: "Apply for Membership",
    d: "Apply online in 5 minutes — get your official EPIC ID and stamped certificate instantly.",
    td: "5 நிமிடங்களில் ஆன்லைனில் விண்ணப்பிக்கவும் — உடனடி EPIC ID மற்றும் சான்றிதழ் பெறுங்கள்.",
    to: "/membership",
    badge: "START HERE",
    className: "md:col-span-2",
  },
  {
    i: IdCard,
    t: "சங்கம அட்டை பெறுக",
    e: "Get My Membership Card",
    d: "Search by name or EPIC — generate your official TNVS front & back membership card instantly.",
    td: "பெயர் அல்லது EPIC மூலம் தேடுங்கள் — உங்கள் அதிகாரப்பூர்வ TNVS உறுப்பினர் அட்டையை உருவாக்குங்கள்.",
    to: "/voter-id",
    badge: "INSTANT",
    className: "md:col-span-1 md:row-span-2",
    isTall: true,
  },
  {
    i: Award,
    t: "உறுப்பினர் நலத்திட்டங்கள்",
    e: "Welfare Schemes",
    d: "Insurance, scholarships and emergency aid for members and their families across Tamil Nadu.",
    td: "காப்பீடு, உதவித்தொகை மற்றும் அவசர நிவாரணம் — உங்களுக்கும் குடும்பத்திற்கும்.",
    to: "/services",
    badge: null,
    className: "md:col-span-1",
  },
  {
    i: Coins,
    t: "வட்டி இல்லா வணிகக் கடன்",
    e: "Interest-Free Loans",
    d: "Access micro-credit schemes and interest-free business loans for small traders.",
    td: "குறுந்தொழில் மற்றும் சிறு வணிகர்களுக்கான வட்டி இல்லா கடன் மற்றும் நிதி உதவிகள்.",
    to: "/services",
    badge: "NEW",
    className: "md:col-span-1",
  },
];

const HOW_IT_WORKS = [
  { n: "01", t: "தகவல் நிரப்புக", e: "Fill your details",    td: "பெயர், கைபேசி, மாவட்டம், வணிக வகை.", d: "Name, mobile, district, business type." },
  { n: "02", t: "ஆவணம் சமர்ப்பிக்க", e: "Upload documents", td: "அடையாளச் சான்று, கடை புகைப்படம், வணிகச் சான்று.", d: "ID proof, shop photo, business proof." },
  { n: "03", t: "பணம் செலுத்தவும்", e: "Pay the fee",        td: "பாதுகாப்பான UPI கட்டணம் — ₹500/ஆண்டு.", d: "Secure UPI payment — ₹500/year." },
  { n: "04", t: "சான்றிதழ் பெறு", e: "Get certificate",      td: "உடனடி டிஜிட்டல் சான்றிதழ் + EPIC அடையாள அட்டை.", d: "Instant digital certificate + EPIC ID." },
];

function Home() {
  const { language, t } = useLanguage();

  return (
    <div>
      {/* HERO */}
      <section className="relative overflow-hidden border-b border-border">

        {/* ── Ambient background orbs — give the hero depth & warmth ───── */}
        <div aria-hidden="true" className="pointer-events-none">
          {/* Large navy orb — top-right */}
          <div className="absolute -top-24 -right-24 w-[420px] h-[420px] rounded-full opacity-[0.07]"
            style={{ background: "radial-gradient(circle, oklch(0.30 0.14 255) 0%, transparent 70%)" }}
          />
          {/* Gold accent orb — bottom-left */}
          <div className="absolute -bottom-16 -left-16 w-[300px] h-[300px] rounded-full opacity-[0.06]"
            style={{ background: "radial-gradient(circle, oklch(0.78 0.12 85) 0%, transparent 70%)" }}
          />
          {/* Subtle dot pattern overlay */}
          <div className="absolute inset-0 bg-primary/[0.015]" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 pt-14 pb-18 grid lg:grid-cols-12 gap-10 items-center">

          <div className="lg:col-span-7 animate-slide-up">
            <SectionLabel>
              {t("அரசு அங்கீகரிக்கப்பட்டது · பதிவு எண். 2012/TNVS", "Government Registered · Reg. No. 2012/TNVS")}
            </SectionLabel>

            <h1 className="mt-5 font-display text-4xl sm:text-5xl lg:text-6xl font-semibold leading-[1.06] text-ink">
              {language === "ta" ? (
                <>
                  தமிழ்நாடு வணிகர்களின்{" "}
                  <span className="animate-text-gradient">
                    அதிகாரப்பூர்வ இல்லம்.
                  </span>
                </>
              ) : (
                <>
                  The <span className="animate-text-gradient">official home</span> of Tamil Nadu's traders.
                </>
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
            <div className="mt-8 flex flex-wrap items-center gap-6">
              <Link
                to="/membership"
                className="btn-primary text-base px-6 inline-flex"
              >
                <Users className="w-4 h-4" aria-hidden="true" />
                {t("உறுப்பினர் சேர்க்கைக்கு விண்ணப்பிக்க", "Apply for Membership")}
                <ArrowRight className="w-4 h-4" aria-hidden="true" />
              </Link>
              <Link
                to="/voter-id"
                search={{ q: undefined }}
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
          </div>

          <div className="lg:col-span-5 flex items-center justify-center animate-fade-in">
            <img
              src={templeLogo}
              alt="Tamil Nadu Vanigargalin Sangamam emblem"
              className="w-full max-w-[400px] h-auto object-contain"
              width={400}
              height={400}
            />
          </div>
        </div>
      </section>

      {/* STATS — moved above services for stronger trust signal */}
      <Section className="py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-border rounded-2xl overflow-hidden paper p-0">
          {stats.map((s, idx) => (
            <ScrollReveal
              key={s.l}
              delay={idx * 0.09}
              direction="up"
              blur
              className="bg-card p-6 text-center"
            >
              <div className="font-display text-4xl md:text-5xl font-semibold text-primary tabular-nums">
                <AnimatedCounter value={s.v} />
              </div>
              <div className="text-xs text-muted-foreground mt-2 uppercase tracking-wider font-semibold">
                {t(s.t, s.l)}
              </div>
            </ScrollReveal>
          ))}
        </div>
      </Section>

      {/* WELCOME VIDEO SECTION */}
      <Section className="py-12 border-t border-border">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <ScrollReveal direction="up" blur>
            <SectionLabel>{t("வரவேற்பு உரை", "Welcome Message")}</SectionLabel>
            <h2 className="mt-3 font-display text-2xl md:text-3.5xl font-bold text-slate-800 leading-tight">
              {t("அதிகாரப்பூர்வ வரவேற்பு உரை மற்றும் அறிமுகம்", "Official Welcome Address & Introduction")}
            </h2>
            <p className="mt-2 text-xs md:text-sm text-slate-500 font-tamil max-w-xl mx-auto leading-relaxed">
              {t(
                "தமிழ்நாடு வணிகர்களின் சங்கமம் அமைப்பின் நோக்கங்கள் மற்றும் சேவைகள் பற்றிய அதிகாரப்பூர்வ நேரடி அறிமுக வீடியோ.",
                "Watch our official welcome video to learn about the objectives and welfare schemes of the Tamil Nadu Traders association."
              )}
            </p>
          </ScrollReveal>
          <ScrollReveal direction="scale" delay={0.12} duration={0.8} blur>
            <div className="relative rounded-3xl overflow-hidden border border-slate-200/80 shadow-2xl aspect-video bg-slate-950/90 group ring-4 ring-slate-100">
              <video
                className="w-full h-full object-cover"
                controls
                preload="metadata"
                src="/welcome_video.mp4"
              />
            </div>
          </ScrollReveal>
        </div>
      </Section>

      {/* HOW IT WORKS — Horizontal scroll-linked steps */}
      <HorizontalSteps />

      {/* TOP 3 SERVICES */}
      <Section className="py-16 border-t border-border">
        <ScrollReveal direction="up" blur className="flex items-end justify-between flex-wrap gap-4 mb-10">
          <div>
            <SectionLabel>{t("எங்கள் சேவைகள்", "Our Services")}</SectionLabel>
            <h2 className="mt-3 font-display text-3xl md:text-4xl font-semibold">
              <WordSwapper />
            </h2>
          </div>
          <Link
            to="/services"
            className="text-primary text-sm font-semibold hover:underline inline-flex items-center gap-1"
          >
            {t("அனைத்து சேவைகளையும் காண்க", "View all services")}
            <ArrowRight className="w-4 h-4" aria-hidden="true" />
          </Link>
        </ScrollReveal>

        <div className="relative space-y-10 max-w-4xl mx-auto py-8">
          {TOP_SERVICES.map((s, idx) => (
            <div
              key={s.e}
              className="sticky w-full"
              style={{
                top: `${96 + idx * 32}px`,
                zIndex: idx + 10,
              }}
            >
              <Link
                to={s.to}
                className="card-base card-interactive group p-6 sm:p-8 flex flex-col md:flex-row justify-between items-center gap-6 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 w-full min-h-[220px] bg-card border border-border shadow-2xl transition-all duration-300"
              >
                <div className="space-y-4 flex-1 text-left">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-primary/8 grid place-items-center text-primary group-hover:bg-primary group-hover:text-white transition shrink-0">
                      <s.i className="w-6 h-6" aria-hidden="true" />
                    </div>
                    <div>
                      <div className="flex items-center gap-2.5 flex-wrap">
                        <h3 className="font-display text-xl font-semibold text-ink">{t(s.t, s.e)}</h3>
                        {s.badge && (
                          <span className="text-[10px] font-bold text-primary bg-primary/8 border border-primary/20 px-2 py-0.5 rounded-full uppercase tracking-wide">
                            {s.badge}
                          </span>
                        )}
                      </div>
                      <p className="mt-2 text-sm text-muted-foreground leading-relaxed max-w-xl font-tamil">{t(s.td, s.d)}</p>
                    </div>
                  </div>
                  <div className="pt-2 pl-16 inline-flex items-center gap-1 text-sm font-semibold text-primary group-hover:gap-2 transition-all">
                    {t("தொடரவும்", "Proceed")}
                    <ArrowRight className="w-4 h-4" aria-hidden="true" />
                  </div>
                </div>
                {s.isTall && (
                  <div className="w-full md:w-[280px] shrink-0 mt-4 md:mt-0">
                    <MockupCard />
                  </div>
                )}
              </Link>
            </div>
          ))}
        </div>
      </Section>

      {/* TESTIMONIALS SECTION */}
      <Section className="py-16 border-t border-border bg-slate-50/40">
        <ScrollReveal direction="up" className="text-center mb-10">
          <SectionLabel>{t("உறுப்பினர் வெற்றிக் கதைகள்", "Member Success Stories")}</SectionLabel>
          <h2 className="mt-3 font-display text-3xl md:text-4xl font-semibold text-ink">
            {t("வணிகர்களின் உண்மை அனுபவங்கள்.", "Real experiences from real traders.")}
          </h2>
          <p className="mt-2 text-sm text-muted-foreground">
            {t("சங்கத்தில் இணைந்த பிறகு தங்கள் வணிகத்தில் வளர்ச்சி கண்ட உறுப்பினர்களின் கருத்துக்கள்.", "Feedback from members who experienced growth in their businesses after joining.")}
          </p>
        </ScrollReveal>
        <ScrollReveal direction="up" delay={0.1}>
          <TestimonialCarousel />
        </ScrollReveal>
      </Section>

      {/* FAQ SECTION */}
      <Section className="py-16 border-t border-border">
        <div className="max-w-4xl mx-auto">
          <ScrollReveal direction="up" className="text-center mb-10">
            <SectionLabel>{t("அடிக்கடி கேட்கப்படும் கேள்விகள்", "Frequently Asked Questions")}</SectionLabel>
            <h2 className="mt-3 font-display text-3xl md:text-4xl font-semibold text-ink">
              {t("உங்களுக்கு ஏதேனும் சந்தேகங்கள் உள்ளதா?", "Have questions? We have answers.")}
            </h2>
            <p className="mt-2 text-sm text-muted-foreground">
              {t("சங்கத்தில் இணைவது மற்றும் அதன் பயன்கள் பற்றிய பொதுவான கேள்விகள்.", "Common questions about joining the association and its benefits.")}
            </p>
          </ScrollReveal>

          <ScrollReveal direction="up" delay={0.1}>
            <Accordion type="single" collapsible className="w-full space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem
                  key={index}
                  value={`faq-${index}`}
                  className="border border-slate-200/80 rounded-2xl px-5 bg-white shadow-sm hover:border-primary/20 transition-all duration-200"
                >
                  <AccordionTrigger className="font-display font-semibold text-slate-800 text-sm md:text-base py-5 hover:no-underline hover:text-primary">
                    {t(faq.q, faq.e)}
                  </AccordionTrigger>
                  <AccordionContent className="text-slate-600 text-xs md:text-sm leading-relaxed pb-5 border-t border-slate-50 pt-3 font-tamil">
                    {t(faq.a, faq.ae)}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </ScrollReveal>
        </div>
      </Section>

      {/* CTA */}
      <Section className="py-16">
        <ScrollReveal direction="scale" duration={0.7} className="w-full">
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
        </ScrollReveal>
      </Section>
    </div>
  );
}
