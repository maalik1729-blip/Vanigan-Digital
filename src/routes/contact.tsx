import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Section, SectionLabel } from "@/components/Section";
import { Phone, Mail, MapPin, Clock, Loader2 } from "lucide-react";
import { toast } from "sonner";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact · TN Vanigargalin Sangamam" },
      { name: "description", content: "Get in touch — head office in Mylapore, Chennai. Helpline, email and district offices." },
    ],
  }),
  component: Contact,
});

function Contact() {
  const [sending, setSending] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSending(true);
    await new Promise((r) => setTimeout(r, 1500));
    setSending(false);
    toast.success("Message sent! We’ll respond within 2 business days.");
    (e.target as HTMLFormElement).reset();
  };

  return (
    <div>
      <section className="border-b border-border bg-secondary/40">
        <div className="max-w-7xl mx-auto px-4 py-16">
          <SectionLabel>Contact · தொடர்பு</SectionLabel>
          <h1 className="mt-4 font-display text-4xl md:text-5xl font-semibold">We're here to help.</h1>
          <p className="font-tamil mt-3 text-foreground/75">எந்த உதவிக்கும் தயங்காமல் தொடர்பு கொள்ளுங்கள்.</p>
        </div>
      </section>

      <Section className="py-14 grid lg:grid-cols-5 gap-10">
        <div className="lg:col-span-2 space-y-4">
          {[
            { i: MapPin, t: "Head Office", d: "TN Vanigargalin Sangamam,\nNo. 24, North Mada Street,\nMylapore, Chennai — 600 004" },
            { i: Phone, t: "Helpline", d: "1800-XXX-XXXX (Toll-free)\n+91 91944 20044" },
            { i: Mail, t: "Email", d: "info@tnvs.gov.in\nsupport@tnvs.gov.in" },
            { i: Clock, t: "Office Hours", d: "Monday – Saturday\n10:00 AM – 6:00 PM" },
          ].map((c) => (
            <div key={c.t} className="paper rounded-xl p-5 flex gap-4">
              <div className="w-10 h-10 rounded-md bg-primary/8 grid place-items-center text-primary shrink-0"><c.i className="w-5 h-5" /></div>
              <div>
                <div className="font-display font-semibold">{c.t}</div>
                <div className="text-sm text-muted-foreground whitespace-pre-line mt-1 leading-relaxed">{c.d}</div>
              </div>
            </div>
          ))}
        </div>

        <form className="lg:col-span-3 paper rounded-xl p-8 space-y-5" onSubmit={handleSubmit}>
          <h2 className="font-display text-2xl font-semibold">Send us a message</h2>
          <p className="font-tamil text-sm text-muted-foreground -mt-3">எங்களுக்கு செய்தி அனுப்புங்கள்</p>
          <div className="grid sm:grid-cols-2 gap-4">
            <label className="flex flex-col gap-1.5">
              <span className="text-xs font-medium">Your Name</span>
              <input className={inp} required />
            </label>
            <label className="flex flex-col gap-1.5">
              <span className="text-xs font-medium">Mobile</span>
              <input className={inp} required />
            </label>
          </div>
          <label className="flex flex-col gap-1.5">
            <span className="text-xs font-medium">Email</span>
            <input type="email" className={inp} />
          </label>
          <label className="flex flex-col gap-1.5">
            <span className="text-xs font-medium">Subject</span>
            <select className={inp}>
              {["Membership", "Certificate", "Welfare claim", "Other"].map((s) => <option key={s}>{s}</option>)}
            </select>
          </label>
          <label className="flex flex-col gap-1.5">
            <span className="text-xs font-medium">Message</span>
            <textarea className={inp + " min-h-[120px]"} required />
          </label>
          <button
            type="submit"
            disabled={sending}
            className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-md font-medium hover:bg-primary/90 transition disabled:opacity-60 min-h-[44px]"
          >
            {sending ? <><Loader2 className="w-4 h-4 animate-spin" /> Sending…</> : "Send message"}
          </button>
        </form>
      </Section>
    </div>
  );
}

const inp = "w-full border border-input bg-background rounded-md px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-ring/40 focus:border-primary transition";
