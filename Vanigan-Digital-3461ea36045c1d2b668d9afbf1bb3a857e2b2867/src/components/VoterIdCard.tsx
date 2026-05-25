import headerLogo from "@/assets/349b584e-1b60-469e-9e5d-8d124cb057cb.png";
import rightLogo from "@/assets/ChatGPT Image Mar 25, 2026, 05_31_25 PM (1).png";
import ownerSign from "@/assets/8bb61dfb-f349-4e0b-8501-560feae9f000.png";

export type Voter = {
  ID: number;
  ASSEMBLY_NO: string;
  ASSEMBLY_NAME: string;
  PART_NO: string;
  SECTION_NO: string;
  SERIAL_NO: string;
  HOUSE_NO: string;
  VOTER_NAME: string;
  RELATION_TYPE: string;
  RELATION_NAME: string;
  EPIC_NO: string;
  MOBILE_NUMBER: string;
  AGE: string;
  GENDER: string;
  PART_NAME: string;
  POLLING_STATION_NAME: string;
  POLLING_STATION_ADDRESS: string;
  MAIN_TOWN: string;
  WARD: string;
  POST_OFFICE: string;
  POLICE_STATION: string;
  DISTRICT: string;
  PIN_CODE: string;
  PHOTO_URL?: string;
  BLOOD_GROUP?: string;
};

export type Template = "front" | "back";

/* ── Brand colours ── */
const NAVY   = "#1e3a8a";
const NAVY_D = "#162d6e";
const GOLD   = "#d4b26f";
const GOLD_L = "#ebdca5";

/* ── Helpers ── */
function membershipNo(voter: Voter) {
  const base = voter.EPIC_NO.replace(/[^A-Z0-9]/gi, "").toUpperCase().slice(-6);
  const sn   = parseInt(voter.SERIAL_NO || "1").toString(16).padStart(2, "0").toUpperCase();
  return `TNVS-${base}${sn}`;
}

function regNo(voter: Voter) {
  return `${voter.SERIAL_NO}/2020`;
}

function PhotoBox({ photoUrl, size = 90 }: { photoUrl?: string; size?: number }) {
  return (
    <div style={{
      width: size, height: size * 1.2,
      border: `2px solid ${NAVY}`,
      borderRadius: 4,
      background: "#eef0f5",
      overflow: "hidden",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      flexShrink: 0,
    }}>
      {photoUrl ? (
        <img src={photoUrl} alt="Photo" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
      ) : (
        <img
          src={rightLogo}
          alt="TNVS Logo"
          style={{
            width: size * 0.75,
            height: size * 0.75,
            objectFit: "contain",
            opacity: 0.55,
            borderRadius: "50%",
          }}
        />
      )}
    </div>
  );
}

/* ══════════════════════════════════════════════
   MAIN EXPORT
══════════════════════════════════════════════ */
export function VoterIdCard({ voter, template }: { voter: Voter; template: Template }) {
  if (template === "back") return <GovBack voter={voter} />;
  return <GovFront voter={voter} />;
}

/* ══════════════════════════════════════════════
   FRONT — Government Official Style
══════════════════════════════════════════════ */
function GovFront({ voter }: { voter: Voter }) {
  const name     = voter.VOTER_NAME.replace(/\s*-\s*$/, "").trim();
  const mno      = membershipNo(voter);
  const rno      = regNo(voter);
  const district = voter.DISTRICT
    ? voter.DISTRICT.charAt(0).toUpperCase() + voter.DISTRICT.slice(1).toLowerCase()
    : "Chennai";
  const assembly = voter.ASSEMBLY_NAME || "Mylapore";
  const qrData   = encodeURIComponent(`${name}|${mno}|${assembly}|${district}`);
  const qrUrl    = `https://api.qrserver.com/v1/create-qr-code/?size=56x56&data=${qrData}&color=1e3a8a&bgcolor=ffffff&margin=3`;

  return (
    <div style={{
      width: 360, height: 228,
      borderRadius: 10,
      overflow: "hidden",
      fontFamily: "Inter, sans-serif",
      boxSizing: "border-box",
      flexShrink: 0,
      boxShadow: "0 6px 28px rgba(0,0,0,0.25)",
      display: "flex",
      flexDirection: "column",
      background: "#fff",
      border: "1.5px solid #dce3f0",
    }}>

      {/* ── Header ── */}
      <div style={{
        background: NAVY,
        padding: "7px 12px",
        display: "flex",
        alignItems: "center",
        gap: 8,
        minHeight: 52,
      }}>
        {/* Left logo */}
        <div style={{
          width: 36, height: 36, borderRadius: "50%",
          border: "2px solid rgba(255,255,255,0.35)",
          background: "#fff",
          display: "flex", alignItems: "center", justifyContent: "center",
          overflow: "hidden", flexShrink: 0,
        }}>
          <img src={headerLogo} alt="Logo" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
        </div>

        {/* Centre text */}
        <div style={{ flex: 1, textAlign: "center" }}>
          <div style={{ fontSize: 12, fontWeight: 800, color: "#fff", letterSpacing: "0.01em", lineHeight: 1.3 }}>
            தமிழ்நாடு வணிகர்களின் சங்கமம்
          </div>
          <div style={{ fontSize: 8, color: "rgba(255,255,255,0.65)", marginTop: 2, letterSpacing: "0.03em" }}>
            TAMILNADU VANIGARGALIN SANGAMAM
          </div>
          <div style={{ fontSize: 7.5, color: GOLD_L, marginTop: 1 }}>
            பதிவு எண்: {rno}
          </div>
        </div>

        {/* Right logo */}
        <img src={rightLogo} alt="Emblem"
          style={{ width: 38, height: 38, objectFit: "contain", borderRadius: "50%", flexShrink: 0 }} />
      </div>

      {/* ── Gold accent line ── */}
      <div style={{ height: 3, background: `linear-gradient(90deg, ${GOLD}, ${GOLD_L}, ${GOLD})` }} />

      {/* ── Body ── */}
      <div style={{ flex: 1, display: "flex", padding: "8px 12px 6px", gap: 12 }}>

        {/* Left: Photo */}
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 4 }}>
          <PhotoBox photoUrl={voter.PHOTO_URL} size={74} />
          <span style={{ fontSize: 7, color: "#888", letterSpacing: "0.05em", textTransform: "uppercase" }}>
            Member Photo
          </span>
        </div>

        {/* Right: Details */}
        <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: 3 }}>
          {/* Name */}
          <div>
            <div style={{ fontSize: 6.5, color: "#888", textTransform: "uppercase", letterSpacing: "0.08em" }}>Member Name</div>
            <div style={{ fontSize: 13, fontWeight: 800, color: "#111", letterSpacing: "0.01em", lineHeight: 1.2 }}>
              {name}
            </div>
          </div>

          {/* EPIC */}
          <Row label="EPIC No" value={voter.EPIC_NO} mono />

          <div style={{ display: "flex", gap: 10 }}>
            <Row label="Assembly" value={assembly} />
            <Row label="District" value={district} />
          </div>

          <div style={{ display: "flex", gap: 10 }}>
            <Row label="Age" value={voter.AGE + " yrs"} />
            <Row label="Gender" value={voter.GENDER || "—"} />
            <Row label="Blood" value={voter.BLOOD_GROUP || "—"} />
          </div>

          {/* QR bottom-right */}
          <div style={{ marginTop: "auto", display: "flex", justifyContent: "flex-end" }}>
            <img src={qrUrl} alt="QR" width="52" height="52"
              style={{ borderRadius: 4, border: `1px solid #dce3f0` }} />
          </div>
        </div>
      </div>

      {/* ── Footer ── */}
      <div style={{
        background: NAVY_D,
        padding: "4px 12px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
      }}>
        <div>
          <span style={{ fontSize: 7, color: "rgba(255,255,255,0.55)", textTransform: "uppercase", letterSpacing: "0.06em" }}>
            Membership No:{" "}
          </span>
          <span style={{ fontSize: 8, color: GOLD_L, fontWeight: 700, fontFamily: "monospace", letterSpacing: "0.05em" }}>
            {mno}
          </span>
        </div>
        <div style={{ fontSize: 7, color: "rgba(255,255,255,0.55)" }}>
          Valid: 2024 – 2026
        </div>
      </div>
    </div>
  );
}

/* ── Helper row component ── */
function Row({ label, value, mono }: { label: string; value: string; mono?: boolean }) {
  return (
    <div>
      <div style={{ fontSize: 6.5, color: "#888", textTransform: "uppercase", letterSpacing: "0.08em" }}>{label}</div>
      <div style={{
        fontSize: 9, fontWeight: 600, color: "#1a1a1a",
        fontFamily: mono ? "monospace" : "inherit",
        letterSpacing: mono ? "0.05em" : undefined,
      }}>
        {value || "—"}
      </div>
    </div>
  );
}

/* ══════════════════════════════════════════════
   BACK — Government Official Style
══════════════════════════════════════════════ */
function GovBack({ voter }: { voter: Voter }) {
  const name     = voter.VOTER_NAME.replace(/\s*-\s*$/, "").trim();
  const mno      = membershipNo(voter);
  const mobile   = voter.MOBILE_NUMBER && voter.MOBILE_NUMBER !== "-" ? voter.MOBILE_NUMBER : "—";
  const address  = voter.HOUSE_NO
    ? `No ${voter.HOUSE_NO}, ${voter.MAIN_TOWN || voter.DISTRICT}`.toLowerCase().replace(/\b\w/g, c => c.toUpperCase())
    : voter.POLLING_STATION_ADDRESS?.split(",")[0] || "—";
  const birthYear = new Date().getFullYear() - parseInt(voter.AGE || "0");
  const qrData    = encodeURIComponent(`${name}|${mno}|${voter.ASSEMBLY_NAME}|${voter.DISTRICT}`);
  const qrUrl     = `https://api.qrserver.com/v1/create-qr-code/?size=68x68&data=${qrData}&color=1e3a8a&bgcolor=ffffff&margin=4`;

  const rows: [string, string][] = [
    ["Date of Birth",  `01 / 01 / ${birthYear}`],
    ["Age",            voter.AGE + " yrs"],
    ["Blood Group",    voter.BLOOD_GROUP || "—"],
    ["Address",        address],
    ["Mobile",         mobile],
    ["Assembly",       voter.ASSEMBLY_NAME || "—"],
    ["District",       voter.DISTRICT || "—"],
  ];

  return (
    <div style={{
      width: 360, height: 228,
      borderRadius: 10,
      overflow: "hidden",
      fontFamily: "Inter, sans-serif",
      boxSizing: "border-box",
      flexShrink: 0,
      boxShadow: "0 6px 28px rgba(0,0,0,0.25)",
      display: "flex",
      flexDirection: "column",
      background: "#fff",
      border: "1.5px solid #dce3f0",
    }}>

      {/* Top accent */}
      <div style={{ height: 3, background: `linear-gradient(90deg, ${GOLD}, ${GOLD_L}, ${GOLD})` }} />

      {/* Sub-header strip */}
      <div style={{
        background: NAVY,
        padding: "5px 12px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
      }}>
        <div>
          <div style={{ fontSize: 9, fontWeight: 700, color: "#fff" }}>{name}</div>
          <div style={{ fontSize: 7.5, color: GOLD_L, fontFamily: "monospace" }}>{mno}</div>
        </div>
        <div style={{ fontSize: 7.5, color: "rgba(255,255,255,0.65)" }}>
          TNVS Member Card · Back
        </div>
      </div>

      {/* Body */}
      <div style={{ flex: 1, display: "flex", padding: "8px 12px 6px", gap: 10 }}>

        {/* Details table */}
        <div style={{ flex: 1 }}>
          {rows.map(([label, value]) => (
            <div key={label} style={{ display: "flex", gap: 6, marginBottom: 4, alignItems: "baseline" }}>
              <span style={{
                fontSize: 7.5, color: NAVY, fontWeight: 700,
                width: 72, flexShrink: 0,
                textTransform: "uppercase", letterSpacing: "0.04em",
              }}>
                {label}
              </span>
              <span style={{ fontSize: 7.5, color: "#444", marginRight: 4 }}>:</span>
              <span style={{ fontSize: 8.5, color: "#111", fontWeight: 500 }}>{value}</span>
            </div>
          ))}
        </div>

        {/* Right: Logo + QR + Signature */}
        <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-end", justifyContent: "space-between" }}>
          <img src={rightLogo} alt="Logo" style={{ width: 42, height: 42, objectFit: "contain", borderRadius: "50%" }} />
          <div style={{ textAlign: "right" }}>
            <img src={qrUrl} alt="QR" width="64" height="64"
              style={{ borderRadius: 4, border: `1px solid #dce3f0`, display: "block" }} />
          </div>
        </div>
      </div>

      {/* Signature + Footer */}
      <div style={{
        background: NAVY_D,
        padding: "4px 12px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
      }}>
        <div style={{ fontSize: 7, color: "rgba(255,255,255,0.5)", fontStyle: "italic", maxWidth: 200 }}>
          If found, please return to: No 5/79, Cinerama Melumanam Kovil St, Saidapet, Chennai-600015
        </div>
        <div style={{ textAlign: "right" }}>
          <img src={ownerSign} alt="Sign" style={{ height: 20, objectFit: "contain", filter: "brightness(0) invert(1)", opacity: 0.8, display: "block" }} />
          <div style={{ fontSize: 6.5, color: GOLD_L, fontWeight: 700 }}>SENTHIL KUMAR N</div>
          <div style={{ fontSize: 6, color: "rgba(255,255,255,0.55)" }}>State President</div>
        </div>
      </div>
    </div>
  );
}
