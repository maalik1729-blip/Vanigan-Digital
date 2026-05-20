import { createFileRoute } from "@tanstack/react-router";
import { Section, SectionLabel } from "@/components/Section";
import { Target, Heart, Eye } from "lucide-react";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About · Tamil Nadu Vanigargalin Sangamam" },
      { name: "description", content: "Learn about the mission, vision and history of Tamil Nadu Vanigargalin Sangamam — Tamil Nadu's official traders association." },
    ],
  }),
  component: About,
});

function About() {
  return (
    <div>
      <section className="border-b border-border bg-secondary/40">
        <div className="max-w-7xl mx-auto px-4 py-16">
          <SectionLabel>About · எங்களைப் பற்றி</SectionLabel>
          <h1 className="mt-4 font-display text-4xl md:text-5xl font-semibold max-w-3xl">A century-old movement, a modern portal.</h1>
          <p className="font-tamil mt-4 text-xl text-foreground/75 max-w-3xl">தமிழ்நாடு வணிகர்களின் ஒற்றுமை — ஒரு பாரம்பரியம், ஒரு பொறுப்பு.</p>
        </div>
      </section>

      <Section className="py-16">
        <div className="grid md:grid-cols-3 gap-6">
          {[
            { i: Eye, t: "Our Vision", ta: "எங்கள் கனவு", d: "To be the most trusted voice and welfare body for every trader in Tamil Nadu — from the smallest petty shop to large wholesale merchants." },
            { i: Target, t: "Our Mission", ta: "எங்கள் நோக்கம்", d: "Deliver simple, transparent, government-backed services that protect traders, formalize businesses, and unlock welfare benefits." },
            { i: Heart, t: "Our Values", ta: "எங்கள் கொள்கைகள்", d: "Honesty in service, equality across districts, respect for tradition, and uncompromising trust in every digital interaction." },
          ].map((b) => (
            <div key={b.t} className="paper rounded-xl p-6">
              <div className="w-11 h-11 rounded-md bg-gold/15 grid place-items-center text-gold-foreground"><b.i className="w-5 h-5 text-primary" /></div>
              <h3 className="mt-4 font-display text-xl font-semibold">{b.t}</h3>
              <div className="font-tamil text-sm text-primary">{b.ta}</div>
              <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{b.d}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section className="py-16">
        <div className="grid lg:grid-cols-12 gap-10">
          <div className="lg:col-span-4">
            <SectionLabel>Our Journey</SectionLabel>
            <h2 className="mt-3 font-display text-3xl font-semibold">Twelve years, thirty-eight districts.</h2>
          </div>
          <div className="lg:col-span-8 space-y-6">
            {[
              { y: "2012", t: "Foundation", d: "Established in Chennai by a council of 24 trader associations." },
              { y: "2016", t: "Statewide Expansion", d: "District chapters formed in all 38 districts of Tamil Nadu." },
              { y: "2019", t: "Welfare Fund Launch", d: "₹2 Cr corpus established for trader emergency and family support." },
              { y: "2023", t: "Digital Portal", d: "End-to-end online membership, payments and certificate delivery." },
              { y: "2025", t: "1.2 Lakh Members", d: "Crossed 1,24,560 registered members across all categories." },
            ].map((m) => (
              <div key={m.y} className="flex gap-6 items-start">
                <div className="font-display text-xl font-semibold text-gold w-20 shrink-0">{m.y}</div>
                <div className="border-l border-border pl-6 pb-2 flex-1">
                  <div className="font-semibold text-ink">{m.t}</div>
                  <div className="text-sm text-muted-foreground mt-1">{m.d}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Section>
    </div>
  );
}
