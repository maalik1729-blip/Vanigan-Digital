import { jsx, jsxs, Fragment } from "react/jsx-runtime";
import { Link } from "@tanstack/react-router";
import { useState, useRef, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { AlertTriangle, ArrowLeft, UserPlus, Camera, Upload, Share2, Printer, User, Hash, Building2, MapPin, Phone } from "lucide-react";
import { o as orgLogo, u as useLanguage, R as Route } from "./router-Jw4K1Btz.js";
import { toast } from "sonner";
import { a as SectionLabel, S as Section } from "./Section-3En1J6fj.js";
import { s as signImg, o as ownerPhoto } from "./8bb61dfb-f349-4e0b-8501-560feae9f000-B-CYicWI.js";
import "@tanstack/react-query";
import "zod";
const NAVY = "#1e3a8a";
const NAVY_D = "#162d6e";
const GOLD = "#d4b26f";
const GOLD_L = "#ebdca5";
function membershipNo(voter) {
  const base = voter.EPIC_NO.replace(/[^A-Z0-9]/gi, "").toUpperCase().slice(-6);
  const sn = parseInt(voter.SERIAL_NO || "1").toString(16).padStart(2, "0").toUpperCase();
  return `TNVS-${base}${sn}`;
}
function regNo(voter) {
  return `${voter.SERIAL_NO}/2020`;
}
function PhotoBox({ photoUrl, size = 90 }) {
  return /* @__PURE__ */ jsx("div", { style: {
    width: size,
    height: size * 1.2,
    border: `2px solid ${NAVY}`,
    borderRadius: 4,
    background: "#eef0f5",
    overflow: "hidden",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    flexShrink: 0
  }, children: photoUrl ? /* @__PURE__ */ jsx("img", { src: photoUrl, alt: "Photo", style: { width: "100%", height: "100%", objectFit: "cover" } }) : /* @__PURE__ */ jsx(
    "img",
    {
      src: orgLogo,
      alt: "TNVS Logo",
      style: {
        width: size * 0.75,
        height: size * 0.75,
        objectFit: "contain",
        opacity: 0.55,
        borderRadius: "50%"
      }
    }
  ) });
}
function VoterIdCard({ voter, template }) {
  if (template === "back") return /* @__PURE__ */ jsx(GovBack, { voter });
  return /* @__PURE__ */ jsx(GovFront, { voter });
}
function GovFront({ voter }) {
  const name = voter.VOTER_NAME.replace(/\s*-\s*$/, "").trim();
  const mno = membershipNo(voter);
  const rno = regNo(voter);
  const district = voter.DISTRICT ? voter.DISTRICT.charAt(0).toUpperCase() + voter.DISTRICT.slice(1).toLowerCase() : "Chennai";
  const assembly = voter.ASSEMBLY_NAME || "Mylapore";
  const qrData = encodeURIComponent(`${name}|${mno}|${assembly}|${district}`);
  const qrUrl = `https://api.qrserver.com/v1/create-qr-code/?size=56x56&data=${qrData}&color=1e3a8a&bgcolor=ffffff&margin=3`;
  return /* @__PURE__ */ jsxs("div", { style: {
    width: 360,
    height: 228,
    borderRadius: 10,
    overflow: "hidden",
    fontFamily: "Inter, sans-serif",
    boxSizing: "border-box",
    flexShrink: 0,
    boxShadow: "0 6px 28px rgba(0,0,0,0.25)",
    display: "flex",
    flexDirection: "column",
    background: "#fff",
    border: "1.5px solid #dce3f0"
  }, children: [
    /* @__PURE__ */ jsxs("div", { style: {
      background: NAVY,
      padding: "7px 12px",
      display: "flex",
      alignItems: "center",
      gap: 8,
      minHeight: 52
    }, children: [
      /* @__PURE__ */ jsx("div", { style: {
        width: 36,
        height: 36,
        borderRadius: "50%",
        border: "2px solid rgba(255,255,255,0.35)",
        background: "#fff",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        overflow: "hidden",
        flexShrink: 0
      }, children: /* @__PURE__ */ jsx("img", { src: ownerPhoto, alt: "Logo", style: { width: "100%", height: "100%", objectFit: "cover" } }) }),
      /* @__PURE__ */ jsxs("div", { style: { flex: 1, textAlign: "center" }, children: [
        /* @__PURE__ */ jsx("div", { style: { fontSize: 12, fontWeight: 800, color: "#fff", letterSpacing: "0.01em", lineHeight: 1.3 }, children: "தமிழ்நாடு வணிகர்களின் சங்கமம்" }),
        /* @__PURE__ */ jsx("div", { style: { fontSize: 8, color: "rgba(255,255,255,0.65)", marginTop: 2, letterSpacing: "0.03em" }, children: "TAMILNADU VANIGARGALIN SANGAMAM" }),
        /* @__PURE__ */ jsxs("div", { style: { fontSize: 7.5, color: GOLD_L, marginTop: 1 }, children: [
          "பதிவு எண்: ",
          rno
        ] })
      ] }),
      /* @__PURE__ */ jsx(
        "img",
        {
          src: orgLogo,
          alt: "Emblem",
          style: { width: 38, height: 38, objectFit: "contain", borderRadius: "50%", flexShrink: 0 }
        }
      )
    ] }),
    /* @__PURE__ */ jsx("div", { style: { height: 3, background: `linear-gradient(90deg, ${GOLD}, ${GOLD_L}, ${GOLD})` } }),
    /* @__PURE__ */ jsxs("div", { style: { flex: 1, display: "flex", padding: "8px 12px 6px", gap: 12 }, children: [
      /* @__PURE__ */ jsxs("div", { style: { display: "flex", flexDirection: "column", alignItems: "center", gap: 4 }, children: [
        /* @__PURE__ */ jsx(PhotoBox, { photoUrl: voter.PHOTO_URL, size: 74 }),
        /* @__PURE__ */ jsx("span", { style: { fontSize: 7, color: "#888", letterSpacing: "0.05em", textTransform: "uppercase" }, children: "Member Photo" })
      ] }),
      /* @__PURE__ */ jsxs("div", { style: { flex: 1, display: "flex", flexDirection: "column", gap: 3 }, children: [
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("div", { style: { fontSize: 6.5, color: "#888", textTransform: "uppercase", letterSpacing: "0.08em" }, children: "Member Name" }),
          /* @__PURE__ */ jsx("div", { style: { fontSize: 13, fontWeight: 800, color: "#111", letterSpacing: "0.01em", lineHeight: 1.2 }, children: name })
        ] }),
        /* @__PURE__ */ jsx(Row, { label: "EPIC No", value: voter.EPIC_NO, mono: true }),
        /* @__PURE__ */ jsxs("div", { style: { display: "flex", gap: 10 }, children: [
          /* @__PURE__ */ jsx(Row, { label: "Assembly", value: assembly }),
          /* @__PURE__ */ jsx(Row, { label: "District", value: district })
        ] }),
        /* @__PURE__ */ jsxs("div", { style: { display: "flex", gap: 10 }, children: [
          /* @__PURE__ */ jsx(Row, { label: "Age", value: voter.AGE + " yrs" }),
          /* @__PURE__ */ jsx(Row, { label: "Gender", value: voter.GENDER || "—" }),
          /* @__PURE__ */ jsx(Row, { label: "Blood", value: voter.BLOOD_GROUP || "—" })
        ] }),
        /* @__PURE__ */ jsx("div", { style: { marginTop: "auto", display: "flex", justifyContent: "flex-end" }, children: /* @__PURE__ */ jsx(
          "img",
          {
            src: qrUrl,
            alt: "QR",
            width: "52",
            height: "52",
            style: { borderRadius: 4, border: `1px solid #dce3f0` }
          }
        ) })
      ] })
    ] }),
    /* @__PURE__ */ jsxs("div", { style: {
      background: NAVY_D,
      padding: "4px 12px",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between"
    }, children: [
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsxs("span", { style: { fontSize: 7, color: "rgba(255,255,255,0.55)", textTransform: "uppercase", letterSpacing: "0.06em" }, children: [
          "Membership No:",
          " "
        ] }),
        /* @__PURE__ */ jsx("span", { style: { fontSize: 8, color: GOLD_L, fontWeight: 700, fontFamily: "monospace", letterSpacing: "0.05em" }, children: mno })
      ] }),
      /* @__PURE__ */ jsx("div", { style: { fontSize: 7, color: "rgba(255,255,255,0.55)" }, children: "Valid: 2024 – 2026" })
    ] })
  ] });
}
function Row({ label, value, mono }) {
  return /* @__PURE__ */ jsxs("div", { children: [
    /* @__PURE__ */ jsx("div", { style: { fontSize: 6.5, color: "#888", textTransform: "uppercase", letterSpacing: "0.08em" }, children: label }),
    /* @__PURE__ */ jsx("div", { style: {
      fontSize: 9,
      fontWeight: 600,
      color: "#1a1a1a",
      fontFamily: mono ? "monospace" : "inherit",
      letterSpacing: mono ? "0.05em" : void 0
    }, children: value || "—" })
  ] });
}
function GovBack({ voter }) {
  const name = voter.VOTER_NAME.replace(/\s*-\s*$/, "").trim();
  const mno = membershipNo(voter);
  const mobile = voter.MOBILE_NUMBER && voter.MOBILE_NUMBER !== "-" ? voter.MOBILE_NUMBER : "—";
  const address = voter.HOUSE_NO ? `No ${voter.HOUSE_NO}, ${voter.MAIN_TOWN || voter.DISTRICT}`.toLowerCase().replace(/\b\w/g, (c) => c.toUpperCase()) : voter.POLLING_STATION_ADDRESS?.split(",")[0] || "—";
  const birthYear = (/* @__PURE__ */ new Date()).getFullYear() - parseInt(voter.AGE || "0");
  const qrData = encodeURIComponent(`${name}|${mno}|${voter.ASSEMBLY_NAME}|${voter.DISTRICT}`);
  const qrUrl = `https://api.qrserver.com/v1/create-qr-code/?size=68x68&data=${qrData}&color=1e3a8a&bgcolor=ffffff&margin=4`;
  const rows = [
    ["Date of Birth", `01 / 01 / ${birthYear}`],
    ["Age", voter.AGE + " yrs"],
    ["Blood Group", voter.BLOOD_GROUP || "—"],
    ["Address", address],
    ["Mobile", mobile],
    ["Assembly", voter.ASSEMBLY_NAME || "—"],
    ["District", voter.DISTRICT || "—"]
  ];
  return /* @__PURE__ */ jsxs("div", { style: {
    width: 360,
    height: 228,
    borderRadius: 10,
    overflow: "hidden",
    fontFamily: "Inter, sans-serif",
    boxSizing: "border-box",
    flexShrink: 0,
    boxShadow: "0 6px 28px rgba(0,0,0,0.25)",
    display: "flex",
    flexDirection: "column",
    background: "#fff",
    border: "1.5px solid #dce3f0"
  }, children: [
    /* @__PURE__ */ jsx("div", { style: { height: 3, background: `linear-gradient(90deg, ${GOLD}, ${GOLD_L}, ${GOLD})` } }),
    /* @__PURE__ */ jsxs("div", { style: {
      background: NAVY,
      padding: "5px 12px",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between"
    }, children: [
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("div", { style: { fontSize: 9, fontWeight: 700, color: "#fff" }, children: name }),
        /* @__PURE__ */ jsx("div", { style: { fontSize: 7.5, color: GOLD_L, fontFamily: "monospace" }, children: mno })
      ] }),
      /* @__PURE__ */ jsx("div", { style: { fontSize: 7.5, color: "rgba(255,255,255,0.65)" }, children: "TNVS Member Card · Back" })
    ] }),
    /* @__PURE__ */ jsxs("div", { style: { flex: 1, display: "flex", padding: "8px 12px 6px", gap: 10 }, children: [
      /* @__PURE__ */ jsx("div", { style: { flex: 1 }, children: rows.map(([label, value]) => /* @__PURE__ */ jsxs("div", { style: { display: "flex", gap: 6, marginBottom: 4, alignItems: "baseline" }, children: [
        /* @__PURE__ */ jsx("span", { style: {
          fontSize: 7.5,
          color: NAVY,
          fontWeight: 700,
          width: 72,
          flexShrink: 0,
          textTransform: "uppercase",
          letterSpacing: "0.04em"
        }, children: label }),
        /* @__PURE__ */ jsx("span", { style: { fontSize: 7.5, color: "#444", marginRight: 4 }, children: ":" }),
        /* @__PURE__ */ jsx("span", { style: { fontSize: 8.5, color: "#111", fontWeight: 500 }, children: value })
      ] }, label)) }),
      /* @__PURE__ */ jsxs("div", { style: { display: "flex", flexDirection: "column", alignItems: "flex-end", justifyContent: "space-between" }, children: [
        /* @__PURE__ */ jsx("img", { src: orgLogo, alt: "Logo", style: { width: 42, height: 42, objectFit: "contain", borderRadius: "50%" } }),
        /* @__PURE__ */ jsx("div", { style: { textAlign: "right" }, children: /* @__PURE__ */ jsx(
          "img",
          {
            src: qrUrl,
            alt: "QR",
            width: "64",
            height: "64",
            style: { borderRadius: 4, border: `1px solid #dce3f0`, display: "block" }
          }
        ) })
      ] })
    ] }),
    /* @__PURE__ */ jsxs("div", { style: {
      background: NAVY_D,
      padding: "4px 12px",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between"
    }, children: [
      /* @__PURE__ */ jsx("div", { style: { fontSize: 7, color: "rgba(255,255,255,0.5)", fontStyle: "italic", maxWidth: 200 }, children: "If found, please return to: No 5/79, Cinerama Melumanam Kovil St, Saidapet, Chennai-600015" }),
      /* @__PURE__ */ jsxs("div", { style: { textAlign: "right" }, children: [
        /* @__PURE__ */ jsx("img", { src: signImg, alt: "Sign", style: { height: 20, objectFit: "contain", filter: "brightness(0) invert(1)", opacity: 0.8, display: "block" } }),
        /* @__PURE__ */ jsx("div", { style: { fontSize: 6.5, color: GOLD_L, fontWeight: 700 }, children: "SENTHIL KUMAR N" }),
        /* @__PURE__ */ jsx("div", { style: { fontSize: 6, color: "rgba(255,255,255,0.55)" }, children: "State President" })
      ] })
    ] })
  ] });
}
const votersData = [
  {
    ID: 1001,
    ASSEMBLY_NO: "25",
    ASSEMBLY_NAME: "Mylapore",
    PART_NO: "1",
    SECTION_NO: "1",
    SERIAL_NO: "12",
    HOUSE_NO: "104/A",
    VOTER_NAME: "Senthil Kumar",
    RELATION_TYPE: "Father",
    RELATION_NAME: "Natarajan",
    EPIC_NO: "RJE1234567",
    MOBILE_NUMBER: "9876543210",
    AGE: "45",
    GENDER: "Male",
    BLOOD_GROUP: "O+",
    PART_NAME: "TNVS Zone",
    POLLING_STATION_NAME: "Mylapore High School",
    POLLING_STATION_ADDRESS: "12, Kutchery Road, Mylapore, Chennai - 600004",
    MAIN_TOWN: "Chennai",
    WARD: "122",
    POST_OFFICE: "Mylapore",
    POLICE_STATION: "E1 Mylapore",
    DISTRICT: "Chennai",
    PIN_CODE: "600004"
  },
  {
    ID: 1002,
    ASSEMBLY_NO: "25",
    ASSEMBLY_NAME: "Mylapore",
    PART_NO: "1",
    SECTION_NO: "1",
    SERIAL_NO: "34",
    HOUSE_NO: "12/5",
    VOTER_NAME: "Anbu Chezhian",
    RELATION_TYPE: "Father",
    RELATION_NAME: "Chinnasamy",
    EPIC_NO: "RJE7654321",
    MOBILE_NUMBER: "9444012345",
    AGE: "38",
    GENDER: "Male",
    BLOOD_GROUP: "A+",
    PART_NAME: "TNVS Zone",
    POLLING_STATION_NAME: "Mylapore High School",
    POLLING_STATION_ADDRESS: "45, Luz Church Road, Mylapore, Chennai - 600004",
    MAIN_TOWN: "Chennai",
    WARD: "122",
    POST_OFFICE: "Mylapore",
    POLICE_STATION: "E1 Mylapore",
    DISTRICT: "Chennai",
    PIN_CODE: "600004"
  },
  {
    ID: 1003,
    ASSEMBLY_NO: "25",
    ASSEMBLY_NAME: "Mylapore",
    PART_NO: "2",
    SECTION_NO: "1",
    SERIAL_NO: "56",
    HOUSE_NO: "288",
    VOTER_NAME: "Rajeshwari S",
    RELATION_TYPE: "Husband",
    RELATION_NAME: "Srinivasan",
    EPIC_NO: "RJE9876543",
    MOBILE_NUMBER: "9840123456",
    AGE: "42",
    GENDER: "Female",
    BLOOD_GROUP: "B+",
    PART_NAME: "TNVS Zone",
    POLLING_STATION_NAME: "Mylapore High School",
    POLLING_STATION_ADDRESS: "88, Royapettah High Road, Mylapore, Chennai - 600004",
    MAIN_TOWN: "Chennai",
    WARD: "123",
    POST_OFFICE: "Royapettah",
    POLICE_STATION: "E1 Mylapore",
    DISTRICT: "Chennai",
    PIN_CODE: "600004"
  }
];
function FieldError({ message, id }) {
  return /* @__PURE__ */ jsxs(
    "div",
    {
      id,
      role: "alert",
      className: "flex items-center gap-1.5 mt-1.5",
      "aria-live": "polite",
      children: [
        /* @__PURE__ */ jsx(AlertTriangle, { className: "w-3.5 h-3.5 text-red-500 shrink-0", "aria-hidden": "true" }),
        /* @__PURE__ */ jsx("span", { className: "text-xs font-medium text-red-600", children: message })
      ]
    }
  );
}
function Skeleton({ className = "", ...props }) {
  return /* @__PURE__ */ jsx(
    "div",
    {
      className: `animate-skeleton rounded-md ${className}`,
      ...props
    }
  );
}
function VoterIdPage() {
  const {
    t
  } = useLanguage();
  const {
    q
  } = Route.useSearch();
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [isSearching, setIsSearching] = useState(false);
  const [errors, setErrors] = useState({});
  const [showForm, setShowForm] = useState(true);
  const [formStep, setFormStep] = useState(1);
  const [isCompilingCard, setIsCompilingCard] = useState(false);
  const [formData, setFormData] = useState({
    VOTER_NAME: "",
    RELATION_TYPE: "Father",
    RELATION_NAME: "",
    EPIC_NO: "",
    MOBILE_NUMBER: "",
    AGE: "",
    GENDER: "Male",
    BLOOD_GROUP: "O+",
    HOUSE_NO: "",
    POLLING_STATION_ADDRESS: "",
    ASSEMBLY_NAME: "",
    DISTRICT: "Chennai",
    PIN_CODE: "",
    PHOTO_URL: ""
  });
  const handleFieldChange = (field, value) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value
    }));
    if (errors[field]) {
      setErrors((prev) => {
        const next = {
          ...prev
        };
        delete next[field];
        return next;
      });
    }
  };
  const [selected, setSelected] = useState(null);
  const [shareMsg, setShareMsg] = useState("");
  const cardRef = useRef(null);
  const frontRef = useRef(null);
  const backRef = useRef(null);
  const handlePhotoChange = (e) => {
    const file = e.target.files?.[0];
    if (file) {
      if (file.size > 5 * 1024 * 1024) {
        toast.error(t("புகைப்படம் 5MB-க்குள் இருக்க வேண்டும்", "Photo must be under 5MB"));
        return;
      }
      const allowed = ["image/jpeg", "image/png", "image/webp"];
      if (!allowed.includes(file.type)) {
        toast.error(t("தயவுசெய்து JPG, PNG அல்லது WebP படத்தை பதிவேற்றவும்", "Please upload a JPG, PNG or WebP image"));
        return;
      }
      const reader = new FileReader();
      reader.onloadend = () => {
        setFormData((prev) => ({
          ...prev,
          PHOTO_URL: reader.result
        }));
      };
      reader.readAsDataURL(file);
    }
  };
  const populateForm = (v) => {
    setFormData({
      VOTER_NAME: v.VOTER_NAME,
      RELATION_TYPE: v.RELATION_TYPE || "Father",
      RELATION_NAME: v.RELATION_NAME || "",
      EPIC_NO: v.EPIC_NO,
      MOBILE_NUMBER: v.MOBILE_NUMBER || "",
      AGE: v.AGE,
      GENDER: v.GENDER || "Male",
      BLOOD_GROUP: v.BLOOD_GROUP || "O+",
      HOUSE_NO: v.HOUSE_NO || "",
      POLLING_STATION_ADDRESS: v.POLLING_STATION_ADDRESS || "",
      ASSEMBLY_NAME: v.ASSEMBLY_NAME || "",
      DISTRICT: v.DISTRICT || "",
      PIN_CODE: v.PIN_CODE || "",
      PHOTO_URL: v.PHOTO_URL || ""
    });
    setErrors({});
    setShowForm(true);
    toast.success(t("விவரங்கள் தானாக நிரப்பப்பட்டன", "Details populated successfully!"));
  };
  useEffect(() => {
    if (q) {
      setSearchQuery(q);
      const autoSearch = async () => {
        setIsSearching(true);
        try {
          const res = await fetch(`/api/voter-search?epic=${encodeURIComponent(q)}`);
          if (!res.ok) throw new Error("API failed");
          const data = await res.json();
          if (data.voters && data.voters.length > 0) {
            populateForm(data.voters[0]);
            return;
          }
        } catch (err) {
          const match = votersData.find((v) => v.EPIC_NO?.toUpperCase() === q.toUpperCase());
          if (match) {
            populateForm(match);
          }
        } finally {
          setIsSearching(false);
        }
      };
      autoSearch();
    }
  }, [q]);
  const handleSearch = async () => {
    const queryTerm = searchQuery.trim();
    if (!queryTerm) return;
    setSearchResults([]);
    setIsSearching(true);
    try {
      const params = new URLSearchParams();
      if (/^[a-zA-Z0-9]{3,20}$/.test(queryTerm)) {
        params.append("epic", queryTerm);
      } else {
        params.append("name", queryTerm);
      }
      const res = await fetch(`/api/voter-search?${params.toString()}`);
      if (!res.ok) throw new Error("API failed");
      const data = await res.json();
      if (data.voters) {
        setSearchResults(data.voters);
        if (data.voters.length === 0) {
          toast.info(t("பொருந்தும் பதிவுகள் எதுவும் கிடைக்கவில்லை", "No matching records found"));
          setShowForm(true);
        }
        return;
      }
    } catch (err) {
      const queryLower = queryTerm.toLowerCase();
      const isEpic = /^[a-zA-Z0-9]{3,20}$/.test(queryTerm);
      const filtered = votersData.filter((v) => {
        if (isEpic) {
          return v.EPIC_NO?.toLowerCase() === queryLower;
        } else {
          return v.VOTER_NAME?.toLowerCase().includes(queryLower);
        }
      });
      setSearchResults(filtered);
      if (filtered.length === 0) {
        toast.info(t("பொருந்தும் பதிவுகள் எதுவும் கிடைக்கவில்லை", "No matching records found"));
        setShowForm(true);
      }
    } finally {
      setIsSearching(false);
    }
  };
  const selectVoter = (v) => {
    populateForm(v);
    setSearchResults([]);
    setSearchQuery("");
  };
  const validate = () => {
    const newErrors = {};
    const name = (formData.VOTER_NAME || "").trim();
    const epic = (formData.EPIC_NO || "").trim();
    const age = (formData.AGE || "").trim();
    const mobile = (formData.MOBILE_NUMBER || "").trim();
    const assembly = (formData.ASSEMBLY_NAME || "").trim();
    const district = (formData.DISTRICT || "").trim();
    const address = (formData.POLLING_STATION_ADDRESS || "").trim();
    if (!name) {
      newErrors.VOTER_NAME = t("தயவுசெய்து உங்கள் முழுப் பெயரை உள்ளிடவும்", "Please enter your full name");
    } else if (!/^[a-zA-Z\s.\u0B80-\u0BFF]+$/.test(name)) {
      newErrors.VOTER_NAME = t("பெயரில் எழுத்துக்கள் மற்றும் இடைவெளிகள் மட்டுமே இருக்க வேண்டும்", "Full name can only contain letters, dots, and spaces");
    }
    if (!epic) {
      newErrors.EPIC_NO = t("தயவுசெய்து EPIC / ID எண்ணை உள்ளிடவும்", "Please enter EPIC / ID No");
    } else if (!/^[a-zA-Z]{3}\d{7}$/.test(epic)) {
      newErrors.EPIC_NO = t("EPIC எண் வடிவத்தில் இருக்க வேண்டும்: முதல் 3 எழுத்துக்கள் மற்றும் அடுத்த 7 எண்கள் (எ.கா: RJE1234567)", "EPIC No must be in the format: first 3 letters followed by 7 digits (e.g. RJE1234567)");
    }
    if (mobile && !/^[6-9]\d{9}$/.test(mobile)) {
      newErrors.MOBILE_NUMBER = t("சரியான 10 இலக்க கைபேசி எண்ணை உள்ளிடவும்", "Mobile number must be a valid 10-digit number starting with 6-9");
    }
    if (!age) {
      newErrors.AGE = t("தயவுசெய்து உங்கள் வயதை உள்ளிடவும்", "Please enter your age");
    } else {
      const ageNum = parseInt(age);
      if (isNaN(ageNum) || ageNum < 18 || ageNum > 120) {
        newErrors.AGE = t("வயது 18 முதல் 120 வரை இருக்க வேண்டும்", "Age must be between 18 and 120");
      }
    }
    if (assembly && !/^[a-zA-Z\s.\u0B80-\u0BFF]+$/.test(assembly)) {
      newErrors.ASSEMBLY_NAME = t("தொகுதி பெயரில் எழுத்துக்கள் மற்றும் இடைவெளிகள் மட்டுமே இருக்க வேண்டும்", "Assembly name should contain only letters, dots, and spaces");
    }
    if (district && !/^[a-zA-Z\s.\u0B80-\u0BFF]+$/.test(district)) {
      newErrors.DISTRICT = t("மாவட்ட பெயரில் எழுத்துக்கள் மற்றும் இடைவெளிகள் மட்டுமே இருக்க வேண்டும்", "District should contain only letters, dots, and spaces");
    }
    if (!address) {
      newErrors.POLLING_STATION_ADDRESS = t("தயவுசெய்து உங்கள் முகவரியை உள்ளிடவும்", "Please enter your address");
    }
    setErrors(newErrors);
    const errorKeys = Object.keys(newErrors);
    if (errorKeys.length > 0) {
      const firstErrorField = errorKeys[0];
      toast.error(newErrors[firstErrorField]);
      return false;
    }
    return true;
  };
  const handleDetailsNext = () => {
    if (validate()) {
      setFormStep(2);
    }
  };
  const handleGenerate = (e) => {
    e.preventDefault();
    if (!formData.PHOTO_URL) {
      toast.error(t("தயவுசெய்து புகைப்படத்தை பதிவேற்றவும்", "Please upload a photo"));
      return;
    }
    if (!validate()) return;
    const generatedVoter = {
      ID: Math.floor(Math.random() * 1e4),
      ASSEMBLY_NO: "25",
      ASSEMBLY_NAME: formData.ASSEMBLY_NAME || "Mylapore",
      PART_NO: "1",
      SECTION_NO: "1",
      SERIAL_NO: Math.floor(Math.random() * 100).toString(),
      HOUSE_NO: formData.HOUSE_NO || "",
      VOTER_NAME: formData.VOTER_NAME || "",
      RELATION_TYPE: formData.RELATION_TYPE || "Father",
      RELATION_NAME: formData.RELATION_NAME || "",
      EPIC_NO: formData.EPIC_NO || "RJE" + Math.floor(Math.random() * 1e7),
      MOBILE_NUMBER: formData.MOBILE_NUMBER || "",
      AGE: formData.AGE || "30",
      GENDER: formData.GENDER || "Male",
      BLOOD_GROUP: formData.BLOOD_GROUP || "O+",
      PART_NAME: "TNVS Zone",
      POLLING_STATION_NAME: formData.POLLING_STATION_ADDRESS || "Chennai",
      POLLING_STATION_ADDRESS: formData.POLLING_STATION_ADDRESS || "",
      MAIN_TOWN: formData.DISTRICT || "CHENNAI",
      WARD: "",
      POST_OFFICE: "",
      POLICE_STATION: "",
      DISTRICT: formData.DISTRICT || "CHENNAI",
      PIN_CODE: formData.PIN_CODE || "600000",
      PHOTO_URL: formData.PHOTO_URL
    };
    setIsCompilingCard(true);
    setSelected(generatedVoter);
    setTimeout(() => {
      setIsCompilingCard(false);
      setTimeout(() => {
        cardRef.current?.scrollIntoView({
          behavior: "smooth",
          block: "start"
        });
      }, 50);
    }, 800);
  };
  const mno = (v) => `TNVS-${v.EPIC_NO.replace(/[^A-Z0-9]/gi, "").toUpperCase().slice(-6)}${parseInt(v.SERIAL_NO || "1").toString(16).padStart(2, "0").toUpperCase()}`;
  const handlePrint = () => {
    if (!frontRef.current || !backRef.current || !selected) return;
    const name = selected.VOTER_NAME.replace(/\s*-\s*$/, "").trim();
    const frontHtml = frontRef.current.innerHTML;
    const backHtml = backRef.current.innerHTML;
    const w = window.open("", "_blank", "width=800,height=600");
    if (!w) return;
    w.document.write(`<!DOCTYPE html>
      <html>
        <head>
          <title>Sangamam Card — ${name}</title>
          <style>
            @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap');
            * { box-sizing: border-box; margin: 0; padding: 0; }
            body { 
              display: flex; 
              flex-direction: column; 
              align-items: center; 
              justify-content: center; 
              min-height: 100vh; 
              gap: 40px; 
              padding: 20px; 
              background: #f0f2f5;
              font-family: 'Inter', sans-serif;
            }
            .card-wrapper {
              box-shadow: 0 4px 20px rgba(0,0,0,0.15);
              border-radius: 10px;
              background: #fff;
              overflow: hidden;
            }
            @media print {
              body { 
                background: #fff; 
                min-height: auto;
                padding: 0;
                gap: 30px;
              }
              .card-wrapper {
                box-shadow: none;
                page-break-inside: avoid;
              }
              /* Ensure colored backgrounds print correctly */
              * {
                -webkit-print-color-adjust: exact !important;
                print-color-adjust: exact !important;
              }
            }
          </style>
        </head>
        <body>
          <div class="card-wrapper">${frontHtml}</div>
          <div class="card-wrapper">${backHtml}</div>
          <script>
            window.onload = () => {
              setTimeout(() => {
                window.print();
              }, 400);
            };
          <\/script>
        </body>
      </html>`);
    w.document.close();
  };
  const handleShare = async () => {
    if (!selected) return;
    const name = selected.VOTER_NAME.replace(/\s*-\s*$/, "").trim();
    const text = `சங்கம உறுப்பினர் அட்டை
Per: ${name}
Membership: ${mno(selected)}
Assembly: ${selected.ASSEMBLY_NAME}, ${selected.DISTRICT}`;
    if (navigator.share) {
      await navigator.share({
        title: `Sangamam Card — ${name}`,
        text,
        url: window.location.href
      }).catch(() => null);
    } else {
      await navigator.clipboard.writeText(text).catch(() => null);
      setShareMsg("நகலெடுக்கப்பட்டது / Copied!");
      setTimeout(() => setShareMsg(""), 2500);
    }
  };
  return /* @__PURE__ */ jsxs("div", { children: [
    /* @__PURE__ */ jsx("section", { className: "border-b border-border bg-secondary/40", children: /* @__PURE__ */ jsxs("div", { className: "max-w-6xl mx-auto px-4 py-12", children: [
      /* @__PURE__ */ jsx("div", { className: "mb-4", children: /* @__PURE__ */ jsxs(Link, { to: "/services", className: "inline-flex items-center gap-1.5 text-xs font-semibold text-primary hover:text-primary/80 transition-all", children: [
        /* @__PURE__ */ jsx(ArrowLeft, { className: "w-3.5 h-3.5" }),
        " ",
        t("சேவைகளுக்குத் திரும்பு", "Back to Services")
      ] }) }),
      /* @__PURE__ */ jsx(SectionLabel, { children: "தமிழ்நாடு வணிகர்களின் சங்கமம்" }),
      /* @__PURE__ */ jsx("h1", { className: "mt-3 font-display text-3xl md:text-4xl font-semibold text-ink", children: "Sangamam Membership Card Generator" }),
      /* @__PURE__ */ jsx("p", { className: "font-tamil text-lg text-foreground/70 mt-1", children: "சங்கம அட்டை உருவாக்கி" }),
      /* @__PURE__ */ jsx("p", { className: "mt-3 text-sm text-muted-foreground max-w-xl", children: "Fill in your details to instantly generate a printable Tamilnadu Vanigargalin Sangamam (TNVS) membership ID card — Front and Back." })
    ] }) }),
    /* @__PURE__ */ jsx(Section, { className: "py-10", children: /* @__PURE__ */ jsxs("div", { className: "max-w-3xl mx-auto", children: [
      /* @__PURE__ */ jsxs("div", { className: "paper rounded-xl p-6 md:p-8 mb-10 border border-border shadow-sm", children: [
        /* @__PURE__ */ jsxs("div", { className: "mb-6 border-b border-border pb-4", children: [
          /* @__PURE__ */ jsxs("h2", { className: "text-xl font-display font-semibold flex items-center gap-2", children: [
            /* @__PURE__ */ jsx(UserPlus, { className: "w-5 h-5 text-primary" }),
            " Member Details"
          ] }),
          /* @__PURE__ */ jsx("p", { className: "text-sm text-muted-foreground mt-1", children: "Enter the member's information below." })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "mb-6 bg-slate-50 border border-slate-200/80 rounded-lg p-4", children: [
          /* @__PURE__ */ jsx("label", { className: "block text-xs font-semibold text-primary uppercase tracking-wider mb-2", children: t("உறுப்பினர் தேடல் (விருப்பத்தேர்வு)", "Search Member Database (Optional)") }),
          /* @__PURE__ */ jsxs("div", { className: "flex gap-2", children: [
            /* @__PURE__ */ jsx("input", { type: "text", placeholder: t("EPIC ID அல்லது பெயரை உள்ளிடவும்...", "Enter EPIC ID or name..."), value: searchQuery, onChange: (e) => setSearchQuery(e.target.value), onKeyDown: (e) => e.key === "Enter" && (e.preventDefault(), handleSearch()), className: "flex-1 border border-input bg-background rounded-md px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary/40" }),
            /* @__PURE__ */ jsx("button", { type: "button", onClick: handleSearch, disabled: isSearching, className: "bg-primary/10 text-primary hover:bg-primary/20 px-4 py-2 rounded-md text-sm font-medium transition shrink-0", children: isSearching ? t("தேடுகிறது...", "Searching...") : t("தேடுக", "Search") }),
            !showForm && /* @__PURE__ */ jsx("button", { type: "button", onClick: () => setShowForm(true), className: "bg-muted text-muted-foreground hover:bg-muted/80 px-4 py-2 rounded-md text-sm font-medium transition shrink-0", children: t("தவிர்க்கவும்", "Enter Manually") })
          ] }),
          /* @__PURE__ */ jsx("p", { className: "text-xs text-muted-foreground mt-1.5", children: t("குறிப்பு: 'Senthil Kumar' அல்லது 'RJE1234567' எனத் தட்டச்சு செய்து கோப்பில் சேமிக்கப்பட்ட விவரங்களை மீட்டெடுக்கவும்.", "Tip: Search 'Senthil Kumar' or 'RJE1234567' to load pre-configured voter profiles.") }),
          searchResults.length > 0 && /* @__PURE__ */ jsx("div", { className: "mt-3 border border-border bg-card rounded-md divide-y divide-border overflow-hidden max-h-48 overflow-y-auto", children: searchResults.map((v) => /* @__PURE__ */ jsxs("button", { type: "button", onClick: () => selectVoter(v), className: "w-full text-left px-3 py-2.5 hover:bg-muted/60 transition flex justify-between items-center text-xs", children: [
            /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsx("span", { className: "font-semibold text-slate-800", children: v.VOTER_NAME }),
              /* @__PURE__ */ jsx("span", { className: "text-slate-400 mx-2", children: "|" }),
              /* @__PURE__ */ jsx("span", { className: "font-mono text-primary font-medium", children: v.EPIC_NO })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "text-muted-foreground", children: [
              v.ASSEMBLY_NAME,
              ", ",
              v.DISTRICT
            ] })
          ] }, v.ID)) }),
          isSearching && /* @__PURE__ */ jsxs("div", { className: "mt-3 border border-border bg-card rounded-md divide-y divide-border overflow-hidden p-3 space-y-4", children: [
            /* @__PURE__ */ jsxs("div", { className: "flex justify-between items-center", children: [
              /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2 w-full", children: [
                /* @__PURE__ */ jsx(Skeleton, { className: "w-1/3 h-4" }),
                /* @__PURE__ */ jsx("span", { className: "text-slate-200", children: "|" }),
                /* @__PURE__ */ jsx(Skeleton, { className: "w-1/4 h-4" })
              ] }),
              /* @__PURE__ */ jsx(Skeleton, { className: "w-1/4 h-4 text-right" })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "flex justify-between items-center", children: [
              /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2 w-full", children: [
                /* @__PURE__ */ jsx(Skeleton, { className: "w-1/4 h-4" }),
                /* @__PURE__ */ jsx("span", { className: "text-slate-200", children: "|" }),
                /* @__PURE__ */ jsx(Skeleton, { className: "w-1/3 h-4" })
              ] }),
              /* @__PURE__ */ jsx(Skeleton, { className: "w-1/5 h-4 text-right" })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "flex justify-between items-center", children: [
              /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2 w-full", children: [
                /* @__PURE__ */ jsx(Skeleton, { className: "w-2/5 h-4" }),
                /* @__PURE__ */ jsx("span", { className: "text-slate-200", children: "|" }),
                /* @__PURE__ */ jsx(Skeleton, { className: "w-1/5 h-4" })
              ] }),
              /* @__PURE__ */ jsx(Skeleton, { className: "w-1/4 h-4 text-right" })
            ] })
          ] })
        ] }),
        showForm && /* @__PURE__ */ jsxs("form", { onSubmit: handleGenerate, noValidate: true, className: "space-y-5", children: [
          formStep === 1 && /* @__PURE__ */ jsxs(Fragment, { children: [
            /* @__PURE__ */ jsxs("div", { className: "grid md:grid-cols-2 gap-5", children: [
              /* @__PURE__ */ jsxs("div", { className: "space-y-1.5", children: [
                /* @__PURE__ */ jsx("label", { className: "text-sm font-medium", children: "Full Name (பெயர்) *" }),
                /* @__PURE__ */ jsx("input", { required: true, type: "text", pattern: "^[a-zA-Z\\s.\\u0B80-\\u0BFF]+$", title: "Name should contain only letters, dots, and spaces (பெயரில் எழுத்துக்கள் மற்றும் இடைவெளிகள் மட்டுமே இருக்க வேண்டும்)", value: formData.VOTER_NAME, onChange: (e) => handleFieldChange("VOTER_NAME", e.target.value), className: `w-full border rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 ${errors.VOTER_NAME ? "border-red-500 bg-red-50/10 focus:ring-red-200" : "border-input bg-background focus:ring-primary/40"}`, placeholder: "e.g. Senthil Kumar / செந்தில் குமார்" }),
                errors.VOTER_NAME && /* @__PURE__ */ jsx(FieldError, { message: errors.VOTER_NAME })
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "space-y-1.5", children: [
                /* @__PURE__ */ jsx("label", { className: "text-sm font-medium", children: "EPIC / ID No *" }),
                /* @__PURE__ */ jsx("input", { required: true, type: "text", pattern: "^[a-zA-Z]{3}\\d{7}$", title: "EPIC No must be 3 letters followed by 7 digits (எ.கா: RJE1234567)", value: formData.EPIC_NO, onChange: (e) => handleFieldChange("EPIC_NO", e.target.value.toUpperCase()), className: `w-full border rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 uppercase ${errors.EPIC_NO ? "border-red-500 bg-red-50/10 focus:ring-red-200" : "border-input bg-background focus:ring-primary/40"}`, placeholder: "e.g. RJE1234567" }),
                errors.EPIC_NO && /* @__PURE__ */ jsx(FieldError, { message: errors.EPIC_NO })
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "space-y-1.5", children: [
                /* @__PURE__ */ jsx("label", { className: "text-sm font-medium", children: "Mobile Number (கைபேசி எண்)" }),
                /* @__PURE__ */ jsx("input", { type: "tel", pattern: "^[6-9]\\d{9}$", maxLength: 10, title: "Please enter a valid 10-digit mobile number starting with 6-9 (6-9 இல் தொடங்கும் 10 இலக்க கைபேசி எண்)", value: formData.MOBILE_NUMBER, onChange: (e) => handleFieldChange("MOBILE_NUMBER", e.target.value.replace(/\D/g, "")), className: `w-full border rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 ${errors.MOBILE_NUMBER ? "border-red-500 bg-red-50/10 focus:ring-red-200" : "border-input bg-background focus:ring-primary/40"}`, placeholder: "e.g. 9876543210" }),
                errors.MOBILE_NUMBER && /* @__PURE__ */ jsx(FieldError, { message: errors.MOBILE_NUMBER })
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "space-y-1.5", children: [
                /* @__PURE__ */ jsx("label", { className: "text-sm font-medium", children: "Age (வயது) *" }),
                /* @__PURE__ */ jsx("input", { type: "number", required: true, min: "18", max: "120", title: "Age must be between 18 and 120 (வயது 18 முதல் 120 வரை இருக்க வேண்டும்)", value: formData.AGE, onChange: (e) => handleFieldChange("AGE", e.target.value), className: `w-full border rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 ${errors.AGE ? "border-red-500 bg-red-50/10 focus:ring-red-200" : "border-input bg-background focus:ring-primary/40"}`, placeholder: "Age" }),
                errors.AGE && /* @__PURE__ */ jsx(FieldError, { message: errors.AGE })
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "space-y-1.5", children: [
                /* @__PURE__ */ jsx("label", { className: "text-sm font-medium", children: "Gender (பாலினம்)" }),
                /* @__PURE__ */ jsxs("select", { value: formData.GENDER, onChange: (e) => handleFieldChange("GENDER", e.target.value), className: "w-full border border-input bg-background rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary/40", children: [
                  /* @__PURE__ */ jsx("option", { children: "Male" }),
                  /* @__PURE__ */ jsx("option", { children: "Female" }),
                  /* @__PURE__ */ jsx("option", { children: "Other" })
                ] })
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "space-y-1.5", children: [
                /* @__PURE__ */ jsx("label", { className: "text-sm font-medium", children: "Blood Group (இரத்த வகை)" }),
                /* @__PURE__ */ jsxs("select", { value: formData.BLOOD_GROUP, onChange: (e) => handleFieldChange("BLOOD_GROUP", e.target.value), className: "w-full border border-input bg-background rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary/40", children: [
                  /* @__PURE__ */ jsx("option", { children: "O+" }),
                  /* @__PURE__ */ jsx("option", { children: "O-" }),
                  /* @__PURE__ */ jsx("option", { children: "A+" }),
                  /* @__PURE__ */ jsx("option", { children: "A-" }),
                  /* @__PURE__ */ jsx("option", { children: "B+" }),
                  /* @__PURE__ */ jsx("option", { children: "B-" }),
                  /* @__PURE__ */ jsx("option", { children: "AB+" }),
                  /* @__PURE__ */ jsx("option", { children: "AB-" })
                ] })
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "space-y-1.5", children: [
                /* @__PURE__ */ jsx("label", { className: "text-sm font-medium", children: "Assembly Name (தொகுதி)" }),
                /* @__PURE__ */ jsx("input", { type: "text", pattern: "^[a-zA-Z\\s.\\u0B80-\\u0BFF]+$", title: "Assembly should contain only letters, dots, and spaces (தொகுதி பெயர் எழுத்துக்கள் மற்றும் இடைவெளிகளில் இருக்க வேண்டும்)", value: formData.ASSEMBLY_NAME, onChange: (e) => handleFieldChange("ASSEMBLY_NAME", e.target.value), className: `w-full border rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 ${errors.ASSEMBLY_NAME ? "border-red-500 bg-red-50/10 focus:ring-red-200" : "border-input bg-background focus:ring-primary/40"}`, placeholder: "e.g. Mylapore / மயிலாப்பூர்" }),
                errors.ASSEMBLY_NAME && /* @__PURE__ */ jsx(FieldError, { message: errors.ASSEMBLY_NAME })
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "space-y-1.5", children: [
                /* @__PURE__ */ jsx("label", { className: "text-sm font-medium", children: "District (மாவட்டம்)" }),
                /* @__PURE__ */ jsx("input", { type: "text", pattern: "^[a-zA-Z\\s.\\u0B80-\\u0BFF]+$", title: "District should contain only letters, dots, and spaces (மாவட்டம் பெயர் எழுத்துக்கள் மற்றும் இடைவெளிகளில் இருக்க வேண்டும்)", value: formData.DISTRICT, onChange: (e) => handleFieldChange("DISTRICT", e.target.value), className: `w-full border rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 ${errors.DISTRICT ? "border-red-500 bg-red-50/10 focus:ring-red-200" : "border-input bg-background focus:ring-primary/40"}`, placeholder: "e.g. Chennai / சென்னை" }),
                errors.DISTRICT && /* @__PURE__ */ jsx(FieldError, { message: errors.DISTRICT })
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "md:col-span-2 space-y-1.5", children: [
                /* @__PURE__ */ jsx("label", { className: "text-sm font-medium", children: "Address (முகவரி)" }),
                /* @__PURE__ */ jsx("textarea", { rows: 2, required: true, value: formData.POLLING_STATION_ADDRESS, onChange: (e) => handleFieldChange("POLLING_STATION_ADDRESS", e.target.value), className: `w-full border rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 ${errors.POLLING_STATION_ADDRESS ? "border-red-500 bg-red-50/10 focus:ring-red-200" : "border-input bg-background focus:ring-primary/40"}`, placeholder: "Full address (e.g. கதவு எண், தெரு பெயர், ஊர், பின்கோடு)..." }),
                errors.POLLING_STATION_ADDRESS && /* @__PURE__ */ jsx(FieldError, { message: errors.POLLING_STATION_ADDRESS })
              ] })
            ] }),
            /* @__PURE__ */ jsx("div", { className: "pt-4 flex justify-end", children: /* @__PURE__ */ jsx("button", { type: "button", onClick: handleDetailsNext, className: "bg-primary text-primary-foreground px-6 py-2.5 rounded-md font-medium hover:bg-primary/90 transition shadow-sm", children: t("அடுத்து (புகைப்படம்)", "Next (Upload Photo)") }) })
          ] }),
          formStep === 2 && /* @__PURE__ */ jsxs(Fragment, { children: [
            /* @__PURE__ */ jsxs("div", { className: "flex flex-col items-center justify-center p-4 border border-dashed border-border rounded-lg bg-muted/30 mb-4", children: [
              formData.PHOTO_URL ? /* @__PURE__ */ jsxs("div", { className: "relative w-24 h-24 rounded-full overflow-hidden border-2 border-primary mb-3", children: [
                /* @__PURE__ */ jsx("img", { src: formData.PHOTO_URL, alt: "Preview", className: "w-full h-full object-cover" }),
                /* @__PURE__ */ jsx("button", { type: "button", onClick: () => setFormData((prev) => ({
                  ...prev,
                  PHOTO_URL: ""
                })), className: "absolute inset-0 bg-black/40 text-white flex items-center justify-center text-xs opacity-0 hover:opacity-100 transition-opacity", children: "Remove" })
              ] }) : /* @__PURE__ */ jsxs("div", { className: "w-24 h-24 rounded-full border border-dashed border-border flex flex-col items-center justify-center bg-card mb-3 text-muted-foreground", children: [
                /* @__PURE__ */ jsx(Camera, { className: "w-8 h-8 mb-1" }),
                /* @__PURE__ */ jsx("span", { className: "text-xs", children: "No Photo" })
              ] }),
              /* @__PURE__ */ jsxs("label", { className: "cursor-pointer inline-flex items-center gap-1.5 bg-primary/10 text-primary hover:bg-primary/20 px-3 py-1.5 rounded-md text-xs font-medium transition", children: [
                /* @__PURE__ */ jsx(Upload, { className: "w-3.5 h-3.5" }),
                "Upload Photo (உரிமையாளர் படம்)",
                /* @__PURE__ */ jsx("input", { type: "file", accept: "image/*", onChange: handlePhotoChange, className: "hidden" })
              ] })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "pt-4 flex justify-between", children: [
              /* @__PURE__ */ jsx("button", { type: "button", onClick: () => setFormStep(1), className: "bg-muted text-muted-foreground px-6 py-2.5 rounded-md font-medium hover:bg-muted/80 transition shadow-sm", children: t("பின்செல்க", "Back") }),
              /* @__PURE__ */ jsx("button", { type: "submit", className: "bg-primary text-primary-foreground px-6 py-2.5 rounded-md font-medium hover:bg-primary/90 transition shadow-sm", children: t("அடையாள அட்டை உருவாக்கு", "Generate ID Card") })
            ] })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxs(AnimatePresence, { children: [
        isCompilingCard && /* @__PURE__ */ jsxs(motion.div, { initial: {
          opacity: 0,
          y: 20
        }, animate: {
          opacity: 1,
          y: 0
        }, exit: {
          opacity: 0
        }, transition: {
          duration: 0.2
        }, className: "paper rounded-xl overflow-hidden mt-8 border border-border shadow-sm", children: [
          /* @__PURE__ */ jsx("div", { className: "gov-stripe h-1" }),
          /* @__PURE__ */ jsxs("div", { className: "p-6 md:p-8", children: [
            /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between mb-6 flex-wrap gap-3", children: [
              /* @__PURE__ */ jsxs("div", { className: "space-y-2 w-1/3", children: [
                /* @__PURE__ */ jsx(Skeleton, { className: "h-4 w-1/2" }),
                /* @__PURE__ */ jsx(Skeleton, { className: "h-6 w-3/4" }),
                /* @__PURE__ */ jsx(Skeleton, { className: "h-4 w-1/3" })
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "flex gap-2", children: [
                /* @__PURE__ */ jsx(Skeleton, { className: "h-10 w-28" }),
                /* @__PURE__ */ jsx(Skeleton, { className: "h-10 w-28" })
              ] })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "grid lg:grid-cols-12 gap-8", children: [
              /* @__PURE__ */ jsxs("div", { className: "lg:col-span-5 space-y-4", children: [
                /* @__PURE__ */ jsx(Skeleton, { className: "h-4 w-1/3" }),
                /* @__PURE__ */ jsxs("div", { className: "space-y-3", children: [
                  /* @__PURE__ */ jsx(Skeleton, { className: "h-10 w-full" }),
                  /* @__PURE__ */ jsx(Skeleton, { className: "h-10 w-full" }),
                  /* @__PURE__ */ jsx(Skeleton, { className: "h-10 w-full" }),
                  /* @__PURE__ */ jsx(Skeleton, { className: "h-10 w-full" }),
                  /* @__PURE__ */ jsx(Skeleton, { className: "h-10 w-full" })
                ] })
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "lg:col-span-7 flex flex-col items-center gap-6", children: [
                /* @__PURE__ */ jsxs("div", { className: "w-full", children: [
                  /* @__PURE__ */ jsx(Skeleton, { className: "h-4 w-1/4 mx-auto mb-2" }),
                  /* @__PURE__ */ jsx("div", { className: "flex justify-center", children: /* @__PURE__ */ jsx(Skeleton, { className: "h-[210px] w-full max-w-[340px] rounded-xl" }) })
                ] }),
                /* @__PURE__ */ jsxs("div", { className: "w-full border-t border-border/60 pt-5", children: [
                  /* @__PURE__ */ jsx(Skeleton, { className: "h-4 w-1/4 mx-auto mb-2" }),
                  /* @__PURE__ */ jsx("div", { className: "flex justify-center", children: /* @__PURE__ */ jsx(Skeleton, { className: "h-[210px] w-full max-w-[340px] rounded-xl" }) })
                ] })
              ] })
            ] })
          ] })
        ] }, "skeleton-generator"),
        selected && !isCompilingCard && /* @__PURE__ */ jsxs(motion.div, { ref: cardRef, initial: {
          opacity: 0,
          y: 20
        }, animate: {
          opacity: 1,
          y: 0
        }, exit: {
          opacity: 0,
          y: 20
        }, transition: {
          duration: 0.3
        }, className: "paper rounded-xl overflow-hidden mt-8", children: [
          /* @__PURE__ */ jsx("div", { className: "gov-stripe h-1" }),
          /* @__PURE__ */ jsxs("div", { className: "p-6 md:p-8", children: [
            /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between mb-6 flex-wrap gap-3", children: [
              /* @__PURE__ */ jsxs("div", { children: [
                /* @__PURE__ */ jsx(SectionLabel, { children: "ID Card Generated · அட்டை தயார்" }),
                /* @__PURE__ */ jsx("h2", { className: "mt-1 font-display text-2xl font-semibold", children: selected.VOTER_NAME.replace(/\s*-\s*$/, "").trim() }),
                /* @__PURE__ */ jsx("p", { className: "font-mono text-sm text-primary mt-0.5", children: `TNVS-${selected.EPIC_NO.replace(/[^A-Z0-9]/gi, "").toUpperCase().slice(-6)}${parseInt(selected.SERIAL_NO || "1").toString(16).padStart(2, "0").toUpperCase()}` })
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "flex flex-wrap gap-2 items-center", children: [
                shareMsg && /* @__PURE__ */ jsx("span", { className: "text-xs text-primary font-medium", children: shareMsg }),
                /* @__PURE__ */ jsx(Link, { to: "/membership", search: {
                  name: selected.VOTER_NAME,
                  epic: selected.EPIC_NO,
                  mobile: selected.MOBILE_NUMBER || "",
                  district: selected.DISTRICT || "",
                  assembly: selected.ASSEMBLY_NAME || "",
                  address: selected.POLLING_STATION_ADDRESS || ""
                }, className: "inline-flex items-center gap-2 bg-slate-950 text-gold px-4 py-2.5 rounded-md font-semibold text-xs hover:bg-slate-900 transition shadow-sm border border-slate-800", children: "🌟 Premium Member Card" }),
                /* @__PURE__ */ jsxs("button", { onClick: handleShare, className: "inline-flex items-center gap-2 border border-border bg-card px-4 py-2.5 rounded-md font-medium text-sm hover:bg-muted transition", children: [
                  /* @__PURE__ */ jsx(Share2, { className: "w-4 h-4" }),
                  " நண்பரைப் பரிந்துரை / Share"
                ] }),
                /* @__PURE__ */ jsxs("button", { onClick: handlePrint, className: "inline-flex items-center gap-2 bg-primary text-primary-foreground px-5 py-2.5 rounded-md font-medium hover:bg-primary/90 transition", children: [
                  /* @__PURE__ */ jsx(Printer, { className: "w-4 h-4" }),
                  " Print / Download PDF"
                ] })
              ] })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "grid lg:grid-cols-12 gap-8", children: [
              /* @__PURE__ */ jsxs("div", { className: "lg:col-span-5", children: [
                /* @__PURE__ */ jsx("h3", { className: "font-medium text-sm text-muted-foreground uppercase tracking-wider mb-4", children: "Member Details · உறுப்பினர் விவரம்" }),
                /* @__PURE__ */ jsxs("div", { className: "space-y-3", children: [
                  /* @__PURE__ */ jsx(DetailRow, { icon: /* @__PURE__ */ jsx(User, { className: "w-4 h-4" }), label: "Member Name", value: selected.VOTER_NAME.replace(/\s*-\s*$/, "").trim() }),
                  /* @__PURE__ */ jsx(DetailRow, { icon: /* @__PURE__ */ jsx(Hash, { className: "w-4 h-4" }), label: "EPIC Number", value: selected.EPIC_NO, mono: true }),
                  /* @__PURE__ */ jsx(DetailRow, { icon: /* @__PURE__ */ jsx(Hash, { className: "w-4 h-4" }), label: "Age / Gender / Blood", value: `${selected.AGE} yrs · ${selected.GENDER} · ${selected.BLOOD_GROUP || "—"}` }),
                  /* @__PURE__ */ jsx(DetailRow, { icon: /* @__PURE__ */ jsx(Building2, { className: "w-4 h-4" }), label: "Assembly", value: `${selected.ASSEMBLY_NAME}` }),
                  /* @__PURE__ */ jsx(DetailRow, { icon: /* @__PURE__ */ jsx(MapPin, { className: "w-4 h-4" }), label: "District", value: `${selected.DISTRICT}` }),
                  /* @__PURE__ */ jsx(DetailRow, { icon: /* @__PURE__ */ jsx(MapPin, { className: "w-4 h-4" }), label: "Address", value: selected.POLLING_STATION_ADDRESS }),
                  selected.MOBILE_NUMBER && selected.MOBILE_NUMBER !== "-" && /* @__PURE__ */ jsx(DetailRow, { icon: /* @__PURE__ */ jsx(Phone, { className: "w-4 h-4" }), label: "Mobile", value: selected.MOBILE_NUMBER })
                ] })
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "lg:col-span-7", children: [
                /* @__PURE__ */ jsx("h3", { className: "font-medium text-sm text-muted-foreground uppercase tracking-wider mb-5", children: "உறுப்பினர் அட்டை · Membership Card" }),
                /* @__PURE__ */ jsxs("div", { className: "flex flex-col items-center gap-6 rounded-xl p-2", children: [
                  /* @__PURE__ */ jsxs("div", { className: "w-full", children: [
                    /* @__PURE__ */ jsx("p", { className: "text-xs font-semibold text-muted-foreground uppercase tracking-widest mb-2.5 text-center", children: "முன்பக்கம் · FRONT" }),
                    /* @__PURE__ */ jsx("div", { ref: frontRef, className: "flex justify-center overflow-x-auto", children: /* @__PURE__ */ jsx(VoterIdCard, { voter: selected, template: "front" }) })
                  ] }),
                  /* @__PURE__ */ jsxs("div", { className: "w-full border-t border-border/60 pt-5", children: [
                    /* @__PURE__ */ jsx("p", { className: "text-xs font-semibold text-muted-foreground uppercase tracking-widest mb-2.5 text-center", children: "பின்பக்கம் · BACK" }),
                    /* @__PURE__ */ jsx("div", { ref: backRef, className: "flex justify-center overflow-x-auto", children: /* @__PURE__ */ jsx(VoterIdCard, { voter: selected, template: "back" }) })
                  ] })
                ] })
              ] })
            ] })
          ] })
        ] }, "generator")
      ] })
    ] }) })
  ] });
}
function DetailRow({
  icon,
  label,
  value,
  mono
}) {
  if (!value) return null;
  return /* @__PURE__ */ jsxs("div", { className: "flex items-start gap-3 py-2 border-b border-border/50 last:border-0", children: [
    /* @__PURE__ */ jsx("span", { className: "text-muted-foreground mt-0.5 shrink-0", children: icon }),
    /* @__PURE__ */ jsxs("div", { className: "flex-1 min-w-0", children: [
      /* @__PURE__ */ jsx("div", { className: "text-xs text-muted-foreground uppercase tracking-wide", children: label }),
      /* @__PURE__ */ jsx("div", { className: `text-sm text-ink font-medium wrap-break-word mt-0.5 ${mono ? "font-mono tracking-wide" : ""}`, children: value })
    ] })
  ] });
}
export {
  VoterIdPage as component
};
