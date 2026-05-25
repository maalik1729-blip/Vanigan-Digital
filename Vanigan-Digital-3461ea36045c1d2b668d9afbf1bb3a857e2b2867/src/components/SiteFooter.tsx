import { Link } from "@tanstack/react-router";
import { useLanguage } from "@/hooks/useLanguage";

export function SiteFooter() {
  const { t } = useLanguage();
  
  return (
    <footer className="mt-16 border-t border-slate-200/80 bg-primary text-slate-100">
      {/* Saffron/Gold stripe */}
      <div className="gov-stripe h-[3px]" aria-hidden="true" />
      
      <div className="max-w-7xl mx-auto px-4 py-16 grid grid-cols-1 md:grid-cols-5 gap-10">
        
        {/* Main Logo section */}
        <div className="md:col-span-2 space-y-4">
          <h3 className="font-display text-xl font-bold text-white">Tamil Nadu Vanigargalin Sangamam</h3>
          <div className="font-tamil text-xs text-slate-300 mt-1">தமிழ்நாடு வணிகர்களின் சங்கமம்</div>
          
          <p className="text-xs md:text-sm text-slate-300 leading-relaxed max-w-sm">
            {t(
              "தமிழ்நாடு முழுவதும் உள்ள வணிகர்களை ஒன்றிணைக்கும் ஒரு பதிவுசெய்யப்பட்ட சங்கம் - உறுப்பினர் சேர்க்கை, சான்றிதழ், வாதாடுதல் மற்றும் நலத்திட்ட சேவைகளை வழங்குகிறது.",
              "A registered association uniting traders across Tamil Nadu — providing membership, certification, advocacy and welfare services."
            )}
          </p>
        </div>

        {/* Category 1: Services */}
        <div className="space-y-3.5">
          <div className="text-xs font-bold uppercase tracking-wider text-gold opacity-95">
            {t("சேவைகள்", "Services")}
          </div>
          <ul className="space-y-2 text-xs text-slate-300">
            <li>
              <Link to="/membership" className="hover:underline hover:text-white transition duration-200">
                {t("புதிய உறுப்பினர் சேர்க்கை", "New Membership")}
              </Link>
            </li>
            <li>
              <Link to="/services" className="hover:underline hover:text-white transition duration-200">
                {t("சான்றிதழ் பதிவிறக்கம்", "Certificate Download")}
              </Link>
            </li>
            <li>
              <Link to="/wings" className="hover:underline hover:text-white transition duration-200">
                {t("சங்கமப் பிரிவுகள்", "Wings & Divisions")}
              </Link>
            </li>
            <li>
              <Link to="/dashboard" className="hover:underline hover:text-white transition duration-200">
                {t("உறுப்பினர் டாஷ்போர்டு", "Member Dashboard")}
              </Link>
            </li>
          </ul>
        </div>

        {/* Category 2: Association */}
        <div className="space-y-3.5">
          <div className="text-xs font-bold uppercase tracking-wider text-gold opacity-95">
            {t("சங்கம்", "Association")}
          </div>
          <ul className="space-y-2 text-xs text-slate-300">
            <li>
              <Link to="/assistant" className="hover:underline hover:text-white transition duration-200">
                {t("உதவி மையம்", "Support Hub Portal")}
              </Link>
            </li>
            <li>
              <a href="#about" className="hover:underline hover:text-white transition duration-200">
                {t("சங்கத்தின் நன்மைகள்", "Member Benefits")}
              </a>
            </li>
            <li>
              <a href="#terms" className="hover:underline hover:text-white transition duration-200">
                {t("விதிமுறைகள் மற்றும் நிபந்தனைகள்", "Rules & Guidelines")}
              </a>
            </li>
            <li>
              <a href="#privacy" className="hover:underline hover:text-white transition duration-200">
                {t("தனியுரிமைக் கொள்கை", "Privacy Policy")}
              </a>
            </li>
          </ul>
        </div>

        {/* Category 3: Office */}
        <div className="space-y-3.5">
          <div className="text-xs font-bold uppercase tracking-wider text-gold opacity-95">
            {t("அலுவலகம்", "Office")}
          </div>
          <ul className="space-y-2 text-xs text-slate-300 leading-relaxed">
            <li className="text-slate-200">{t("மயிலாப்பூர், சென்னை — 600 004", "Mylapore, Chennai — 600 004")}</li>
            <li>
              <a href="tel:04423456789" className="text-slate-200 hover:text-white transition">
                {t("உதவி எண்: 044-2345-6789", "Helpline: 044-2345-6789")}
              </a>
            </li>
            <li><a href="mailto:info@tnvs.gov.in" className="hover:text-white transition">info@tnvs.gov.in</a></li>
            <li className="text-slate-400">{t("திங்கள்–சனி · 10:00 – 18:00", "Mon–Sat · 10:00 – 18:00")}</li>
          </ul>
        </div>

      </div>

      {/* Footer Bottom copyright section */}
      <div className="border-t border-slate-800/80 bg-slate-950/40">
        <div className="max-w-7xl mx-auto px-4 py-4 text-xs text-slate-400 flex flex-wrap justify-between gap-3">
          <span>© {new Date().getFullYear()} TN Vanigargalin Sangamam. {t("அனைத்து உரிமைகளும் பாதுகாக்கப்பட்டவை.", "All rights reserved.")}</span>
          <span className="font-semibold text-slate-300 text-xs">{t("தமிழ்நாடு அரசு · பதிவுசெய்யப்பட்ட சங்கம்", "Government of Tamil Nadu · Registered Society")}</span>
        </div>
      </div>
    </footer>
  );
}
