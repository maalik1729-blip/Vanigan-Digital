# Component Execution Plan — Tamil Nadu Vanigargalin Sangamam (TNVS) Portal

**Source Design:** `outputs/03_visual_redesign_direction.md`  
**Role:** Senior Frontend Architect + Product Designer  
**Stack:** React + TanStack Router + Tailwind CSS v4 + Framer Motion  
**Goal:** Actionable, component-level implementation tasks with exact UI specifications

---

## Header Changes

### Component: `SiteHeader.tsx`

**Current Issues:**
- Logo asset has a ChatGPT timestamp filename with spaces — breaks in some environments
- Language switcher uses CSS hover — not accessible on mobile/touch
- `gov-stripe` is 1px (`h-1`) — effectively invisible
- Helpline shows `1800-XXX-XXXX` placeholder
- Announcement bar text is barely legible at 10px

**Redesign Goals:**
- Clean 3-zone header: announcement bar → brand/nav → (removed duplicate zones)
- Click-based language toggle
- Mobile: slimmer, hamburger triggers bottom-sheet overlay

**Exact UI Changes:**

1. **Rename logo asset:**
   ```
   Current: "ChatGPT Image Mar 25, 2026, 05_31_25 PM (1).png"
   New:     "tnvs-logo.png"
   ```

2. **Announcement bar:**
   - Height: `py-1.5` → `py-2`
   - Font: `text-[10px]` → `text-xs` (12px)
   - Left: "✦ Govt. Registered · Reg. No. 2012/TNVS" — replace placeholder text
   - Right: Real helpline or remove — never show `XXX`
   - Background: keep `bg-primary`

3. **gov-stripe:** Change `h-1` → `h-[3px]` and increase opacity, or remove — not both

4. **Language toggle:**
   ```tsx
   // REMOVE: CSS hover dropdown group
   // ADD: Click-based toggle button
   <button
     onClick={() => setLanguage(language === "ta" ? "en" : "ta")}
     aria-label={`Switch to ${language === "ta" ? "English" : "Tamil"}`}
     className="inline-flex items-center gap-1 px-3 py-2 rounded-lg text-xs font-semibold
                border border-slate-200 bg-white hover:bg-slate-50 text-slate-700 min-h-[44px]"
   >
     {language === "ta" ? "TA" : "EN"}
     <span className="text-slate-400">|</span>
     {language === "ta" ? "EN" : "TA"}
   </button>
   ```

5. **Nav links:** Change `text-xs md:text-sm` to fixed `text-sm` — never 12px nav links

6. **Mobile menu:** Convert from conditional `{open && <div>}` to a proper overlay with focus trap:
   ```tsx
   // Add: role="dialog", aria-modal="true", aria-label="Navigation menu"
   // Add: useEffect to trap focus when open
   // Add: Escape key closes menu
   // Position: fixed inset-0 bg-white z-50 (full screen) or bottom-sheet sliding from bottom
   ```

**Responsive Behavior:**
- `< 768px`: Show only logo + TA|EN toggle + hamburger
- `≥ 768px`: Show full nav, language toggle, My Account button

**Spacing Changes:**
- Brand zone: `py-3` → `py-4`
- Nav link height: keep `min-h-[44px]`
- My Account button: `min-h-[38px]` → `min-h-[44px]`

---

## Sidebar Changes

The TNVS portal currently has no true sidebar — the dashboard and assistant pages use inline-column layouts. The "sidebar" refers to the right-column panels.

**Dashboard Right Column (Activity + Notices):**
- Ensure `sticky top-24` behavior so it sticks while scrolling on desktop
- On mobile (< 1024px): fully flattened into the vertical flow (not sidebar at all)

**Assistant Right Column (Promo + Video + Contact):**
- Reduce the dark promo card bg from `bg-slate-950` → `bg-primary` (navy) for consistency
- Remove the YouTube-like video placeholder — replace with a descriptive text block about TNVS until real video is ready

---

## Navigation Improvements

### Component: `NAV` array in `SiteHeader.tsx`

**Current items:** Home · Services · Wings · My Card · Join · Support  
**New items:** Home · Services · Divisions · Join · My Account · Support

**Changes:**
```tsx
// CHANGE:
{ to: "/wings", label: "பிரிவுகள்", en: "Wings" }
// TO:
{ to: "/wings", label: "பிரிவுகள்", en: "Divisions" }

// CHANGE:
{ to: "/voter-id", label: "சங்கம அட்டை", en: "My Card" }
// REMOVE this item — merge into My Account/Dashboard

// ADD tooltip on "Divisions":
title="Business sector groups / வணிக பிரிவுகள்"
```

**Active State:**
- Current: `text-primary after:bg-gold after:h-0.5` (gold underline)
- Keep this — it's a good pattern. Just ensure the underline is `2px` thick, not `0.5` (~1px)
- Change: `after:h-0.5` → `after:h-[2px]`

**Mobile Bottom Sheet Menu:**
```tsx
// Structure:
<div role="dialog" aria-modal="true" className="fixed inset-0 z-50">
  <div className="absolute inset-0 bg-black/40" onClick={() => setOpen(false)} />
  <div className="absolute bottom-0 left-0 right-0 bg-white rounded-t-2xl pb-safe-bottom">
    <div className="h-1 w-12 bg-slate-200 rounded-full mx-auto mt-3" /> {/* drag handle */}
    <nav className="p-4 space-y-1">
      {NAV.map(...)} {/* each link: full-width, 52px min-height */}
    </nav>
    {/* Language toggle + My Account at bottom */}
  </div>
</div>
```

---

## Dashboard Card Changes

### Component: Dashboard member card panel (`dashboard.tsx` lines 116–143)

**Current Issues:**
- Gold stripe at top is decorative only, adds no information
- Member info labels are `text-[10px]` — too small
- "Welcome back" heading has no personalization
- Status badge "ACTIVE" uses `text-[10px]`

**Exact UI Changes:**

1. **Card Header:**
   ```tsx
   // BEFORE: gold stripe div + flex between MembershipID and logo
   // AFTER:
   <div className="flex items-start justify-between">
     <div>
       <div className="text-xs text-slate-400 uppercase tracking-wide">Member ID</div>
       <div className="font-mono text-lg font-bold text-primary mt-0.5">{epicId}</div>
     </div>
     <span className="text-[11px] font-bold px-2.5 py-1 rounded-full
                      bg-emerald-50 text-emerald-700 border border-emerald-200">
       ● ACTIVE
     </span>
   </div>
   ```

2. **Info Grid:** Change `text-[10px]` labels to `text-xs` (12px). Change `p-2.5` to `p-3`.

3. **Page Header section:**
   ```tsx
   // CHANGE: "Welcome back"
   // TO: "Welcome, {name}" — requires pulling name from session or profile
   <h1 className="mt-1 font-display text-2xl md:text-3xl font-bold">
     {t("வணக்கம்", "Welcome back")} {/* replace with name when auth is real */}
   </h1>
   ```

4. **Quick Action Cards (Certificate + Renewal):**
   - Change `p-5` to `p-4`
   - Add hover border: `hover:border-primary/30`
   - Ensure icon scales: keep `group-hover:scale-110`

5. **Mobile Layout (< 1024px):**
   - Member card: full-width stacked
   - Quick actions: 2-column grid (not stacked — they're short enough)
   - Activity table: convert to card list (see Table Improvements)

**Interaction Improvements:**
- "Download ID Card" button: navigate directly to `/voter-id?q={epicId}` (current behavior is correct — just improve label: "Get My Card / என் அட்டை")
- Add `title` attribute to all action buttons

---

## Table Improvements

### Component: Activity table in `dashboard.tsx` (lines 203–225)

**Current Issues:**
- `text-[10px] font-mono` for dates — too small
- No empty state
- Status dot (2px circle) is too small to distinguish at a glance
- Table overflows on mobile even with `overflow-x-auto`

**Exact Desktop Changes:**
```tsx
// thead row:
<th className="px-4 py-3 text-[11px] font-semibold text-slate-400 uppercase tracking-wide">

// tbody row height: add explicit min-height via padding
<tr className="border-b border-slate-100 hover:bg-slate-50/60 transition">
  <td className="px-4 py-3.5 text-sm text-slate-500 font-mono">{a.d}</td>
  <td className="px-4 py-3.5 text-sm font-semibold text-slate-800">{a.t}</td>
  <td className="px-4 py-3.5">
    // Replace 2px dot with pill badge:
    <span className={`text-[11px] font-semibold px-2 py-0.5 rounded-full
      ${a.status === "success" ? "bg-emerald-50 text-emerald-700 border border-emerald-200" :
        a.status === "pending" ? "bg-amber-50 text-amber-700 border border-amber-200" :
        "bg-blue-50 text-blue-700 border border-blue-200"}`}>
      {a.s}
    </span>
  </td>
</tr>
```

**Mobile Activity Card (< 768px):**
```tsx
// Replace <table> with:
<div className="divide-y divide-slate-100">
  {ACTIVITIES.map(a => (
    <div key={a.t} className="py-3 flex items-start justify-between gap-3">
      <div className="flex-1 min-w-0">
        <div className="text-sm font-semibold text-slate-800">{a.t}</div>
        <div className="text-xs text-slate-400 mt-0.5">{a.s}</div>
      </div>
      <div className="flex flex-col items-end gap-1 shrink-0">
        <span className={`status-pill`}>{statusLabel[a.status]}</span>
        <span className="text-[11px] text-slate-400 font-mono">{a.d}</span>
      </div>
    </div>
  ))}
</div>
```

---

## Form Improvements

### Components: `voter-id.tsx`, `membership.tsx`, `services.tsx` modals

**Universal Input Style (replace all current variants):**
```tsx
const inputClass = `
  w-full border border-slate-200 bg-white rounded-[10px] px-4 py-3
  text-sm font-medium text-slate-800
  placeholder:text-slate-400 placeholder:font-normal
  focus:outline-none focus:border-primary focus:ring-[3px] focus:ring-primary/10
  transition duration-200
  min-h-[48px]
`;

const inputErrorClass = `
  border-red-400 bg-red-50/20
  focus:border-red-400 focus:ring-red-200/50
`;
```

**Error Message Component:**
```tsx
function FieldError({ message }: { message: string }) {
  return (
    <div className="flex items-center gap-1.5 mt-1.5">
      <AlertTriangle className="w-3.5 h-3.5 text-red-500 shrink-0" />
      <span className="text-xs text-red-600 font-medium">{message}</span>
    </div>
  );
}
```

**Membership Form — Pre-Form Preview Panel:**
```tsx
// Add before step 1 renders (at top of form container):
{step === 1 && !hasStarted && (
  <div className="bg-primary/4 border border-primary/15 rounded-xl p-5 mb-6">
    <h3 className="font-semibold text-sm text-primary">What you'll receive:</h3>
    <ul className="mt-3 space-y-2">
      {["Official TNVS Membership Certificate", "Digital ID Card (Front & Back)",
        "Your unique EPIC Membership ID", "Access to welfare schemes"].map(item => (
        <li key={item} className="flex items-center gap-2 text-sm text-slate-700">
          <Check className="w-4 h-4 text-emerald-600 shrink-0" />
          {item}
        </li>
      ))}
    </ul>
    <div className="mt-4 flex gap-4 text-xs text-slate-500">
      <span>⏱ ~5 minutes</span>
      <span>💳 ₹500 annual fee</span>
    </div>
  </div>
)}
```

**Membership Stepper — Mobile Fix:**
```tsx
// Replace flex + absolute line with grid layout:
<div className="grid grid-cols-5 gap-2 relative">
  {STEPS.map((s, i) => (
    <div key={s.n} className="flex flex-col items-center">
      {/* Connector line: use border-top on all but first */}
      {i > 0 && (
        <div className={`h-[2px] w-full absolute top-5 left-0 -translate-x-1/2
          ${step > s.n ? "bg-primary" : "bg-slate-200"}`} />
      )}
      <div className={`w-9 h-9 rounded-full grid place-items-center text-sm font-bold
        border-2 relative z-10
        ${done ? "bg-primary text-white border-primary" :
          active ? "bg-white text-primary border-primary ring-4 ring-primary/10" :
          "bg-white text-slate-400 border-slate-200"}`}>
        {done ? <Check className="w-4 h-4" /> : s.n}
      </div>
      <div className="text-[10px] sm:text-xs font-semibold mt-1.5 text-center
                      truncate w-full text-center">
        {language === "ta" ? s.ta : s.t}
      </div>
    </div>
  ))}
</div>
```

---

## Button System Improvements

**Enforce the 3-class system from `styles.css`. Replace all inline button classes.**

**Find and replace pattern (across all route files):**

```
FIND:    "bg-primary text-white ... px-... py-... rounded-..."
REPLACE: className="btn-primary"

FIND:    "border border-primary ... text-primary ... bg-transparent"
REPLACE: className="btn-secondary"

FIND:    "text-primary hover:underline ... text-xs font-semibold"
REPLACE: className="btn-ghost"
```

**Update `.btn-primary` in `styles.css`:**
```css
.btn-primary {
  /* existing rules + fix: */
  padding: 0.75rem 1.25rem;   /* 12px 20px */
  border-radius: 0.625rem;    /* 10px */
  font-size: 0.875rem;        /* 14px */
  min-height: 48px;
  /* Remove: font-size: 0.75rem (12px is too small for primary CTA) */
}
```

**Step 4 membership button fix:**
```tsx
// CHANGE:
<>{step===5 ? "Pay & Submit" : "Continue"}</>
// TO:
<>{step===4 ? `Pay ₹500 · Submit` : step===5 ? "Download Certificate" : "Continue"}</>
```

---

## Modal Improvements

### Component: Services modals (`services.tsx` lines 239–711)

**Current Issues:**
- Modal appears as center-floating card on all screen sizes
- `max-h-[75vh]` on body — content cuts off unexpectedly
- No ESC key close
- No focus trap
- Loan chatbot changes from conversational to form feel inconsistently

**Exact Changes:**

1. **Modal wrapper — add keyboard handler:**
```tsx
useEffect(() => {
  const handler = (e: KeyboardEvent) => { if (e.key === "Escape") closeModal(); };
  document.addEventListener("keydown", handler);
  return () => document.removeEventListener("keydown", handler);
}, [modal.type]);
```

2. **Modal body height:**
```tsx
// CHANGE:
className="p-6 flex-1 overflow-y-auto max-h-[75vh]"
// TO:
className="p-6 flex-1 overflow-y-auto max-h-[calc(100vh-200px)] md:max-h-[70vh]"
```

3. **Mobile — bottom sheet:**
```tsx
// For sm screens, position modal as bottom sheet:
className="bg-white w-full max-w-lg md:rounded-2xl rounded-t-2xl
           md:mx-auto md:my-auto
           fixed bottom-0 md:static md:relative"
```

4. **Remove "Simulate Successful Payment" in production:**
```tsx
// Wrap in development guard:
{import.meta.env.DEV && (
  <button onClick={...}>Simulate Successful Payment</button>
)}
```

5. **Add progress indicator to Loan chatbot:**
```tsx
// Show: "Step 1 of 3 · Business Type"
<div className="text-[11px] text-slate-400 text-center">
  Step {chatStep + 1} of 3
</div>
```

---

## Empty State Improvements

**Current:** No empty states exist — missing records, zero results, empty activity, etc. all show nothing or a static text message.

**Add EmptyState component:**
```tsx
function EmptyState({ icon, title, subtitle, action }: {
  icon: React.ReactNode;
  title: string;
  subtitle?: string;
  action?: React.ReactNode;
}) {
  return (
    <div className="flex flex-col items-center justify-center py-12 text-center">
      <div className="w-14 h-14 rounded-2xl bg-slate-100 flex items-center justify-center
                      text-slate-400 mb-4">
        {icon}
      </div>
      <h3 className="text-sm font-semibold text-slate-700">{title}</h3>
      {subtitle && <p className="text-xs text-slate-400 mt-1 max-w-xs">{subtitle}</p>}
      {action && <div className="mt-4">{action}</div>}
    </div>
  );
}
```

**Usage locations:**
- Voter ID search: 0 results → `<EmptyState icon={<Search />} title="No records found" subtitle="Try searching by name instead of EPIC ID" action={<button>Enter Manually →</button>} />`
- Dashboard referral members (0 state): Replace "Mock members shown below" text
- Activity log if empty: `<EmptyState icon={<Clock />} title="No activity yet" />`

---

## Error State Improvements

**Current:** Errors show only in toast notifications (`sonner`) — they disappear after 4 seconds. Form field errors are sometimes shown inline, sometimes only as toasts.

**Standardize:**
1. **Always** show field-level inline errors (never toast-only for form validation)
2. Toast errors for: API failures, payment failures, network errors
3. Inline errors for: every form field validation failure

**Network Error Banner (API down):**
```tsx
{apiError && (
  <div className="bg-red-50 border border-red-200 rounded-xl p-4 flex items-start gap-3">
    <AlertCircle className="w-5 h-5 text-red-500 shrink-0 mt-0.5" />
    <div>
      <div className="text-sm font-semibold text-red-700">Connection Error</div>
      <div className="text-xs text-red-600 mt-0.5">
        Unable to reach the voter database. Showing local results.
      </div>
    </div>
  </div>
)}
```

---

## Responsive Design Tasks

### Task List by Component

| Component | Current Breakpoint Issue | Fix |
|-----------|-------------------------|-----|
| `SiteHeader` | Logo text wraps at 320px | Truncate org name with `truncate` class at xs |
| Membership stepper | 5 circles overflow at 375px | Use abbreviated labels + grid layout (see above) |
| Homepage services grid | `sm:grid-cols-2 lg:grid-cols-3` leaves orphan card | Limit to 3 cards on homepage |
| Loan banner pills | `flex-wrap` creates messy cluster | Horizontal scroll on mobile: `overflow-x-auto flex-nowrap` |
| Dashboard grid | `lg:grid-cols-12` leaves blank col-span-7 on tablet | Add `md:grid-cols-1` explicit stacking |
| Activity table | Overflows on mobile despite `overflow-x-auto` | Replace with card list on mobile (< 768px) |
| Voter ID form | `md:grid-cols-2` wastes space on mobile | Use single column on mobile, 2-column on md+ |
| Services modals | Center popup on mobile | Bottom sheet on mobile |

---

## Mobile Interaction Improvements

### 1. Swipe to Close Modals on Mobile
Add touch swipe-down gesture to close bottom-sheet modals:
```tsx
// Use touch events or a library like @radix-ui/react-dialog with Vaul (already in deps)
import { Drawer } from "vaul"; // already installed!
// Replace AnimatePresence modal with Vaul Drawer on mobile
```

### 2. Add Loading Skeletons for Search Results
Currently, the voter search shows nothing during the 800ms search delay, then results appear. Add skeleton cards:
```tsx
{isSearching && (
  <div className="space-y-2 mt-3">
    {[1,2,3].map(i => (
      <div key={i} className="h-12 rounded-lg bg-slate-100 animate-pulse" />
    ))}
  </div>
)}
```

### 3. Form Auto-Save Notification
```tsx
// After each localStorage write (debounced 1.5s):
const showDraftSaved = useCallback(
  debounce(() => {
    setDraftSaved(true);
    setTimeout(() => setDraftSaved(false), 2000);
  }, 1500),
  []
);

// Render near stepper:
{draftSaved && (
  <div className="flex items-center gap-1.5 text-[11px] text-emerald-600 transition">
    <CheckCircle2 className="w-3.5 h-3.5" />
    Draft saved automatically
  </div>
)}
```

---

## Frontend Handoff Notes

### Critical Code Bugs to Fix First
1. **`px-4.5` is invalid Tailwind spacing** — Tailwind v4 with default config has no `4.5` step. Replace with `px-[18px]` or `px-5` (20px). Affects: dashboard buttons, membership header buttons.
2. **Step 4 button label bug** — `step===5 ? "Pay & Submit" : "Continue"` (line 696 in `membership.tsx`). Fix to `step===4 ? "Pay ₹500 & Submit" : "Continue"`.
3. **Language hover dropdown** — CSS hover not accessible. Must be click-based (SiteHeader line 70–91).
4. **`mix-blend-multiply` on hero logo** — this may make the logo invisible on dark backgrounds. Test with actual logo asset.
5. **`font-tamil` inconsistently applied** — not all Tamil text has this class; some Thai text renders in Inter or Fraunces.

### Asset Rename Required
```
OLD: "ChatGPT Image Mar 25, 2026, 05_31_25 PM (1).png" (used in SiteHeader, dashboard, membership)
NEW: "tnvs-logo.png"

OLD: "349b584e-1b60-469e-9e5d-8d124cb057cb.png" (used in membership — owner photo)
NEW: "founder-photo.png" (or remove if not a real person photo)

OLD: "8bb61dfb-f349-4e0b-8501-560feae9f000.png" (signature image in membership)
NEW: "tnvs-signature.png"
```

### CSS Variables to Add
```css
/* Add to :root in styles.css */
--font-size-caption: 0.75rem;   /* 12px — minimum allowed */
--font-size-body-sm: 0.875rem;  /* 14px */
--font-size-body-md: 1rem;      /* 16px */
--font-size-body-lg: 1.125rem;  /* 18px */

--spacing-touch: 48px;          /* minimum touch target */
--spacing-touch-secondary: 44px;

--border-radius-input: 0.625rem;  /* 10px */
--border-radius-card: 0.75rem;    /* 12px */
--border-radius-modal: 1rem;      /* 16px */
```

---

## Component Priority Order

Execute in this sequence to maximize impact-per-hour:

| Order | Component | File | Priority |
|-------|-----------|------|----------|
| 1 | Fix fake helpline + remove debug search tip | `SiteHeader.tsx`, `voter-id.tsx`, `assistant.tsx` | 🔴 Critical |
| 2 | Fix Step 4 payment button label | `membership.tsx` | 🔴 Critical |
| 3 | Fix language switcher to click-based | `SiteHeader.tsx` | 🔴 Critical |
| 4 | Replace all `text-[9px]` / `text-[10px]` with `text-xs` | All routes | 🔴 Critical |
| 5 | Add `aria-label` to icon-only buttons | All routes | 🟠 High |
| 6 | Add `FieldError` component + use across all forms | `voter-id.tsx`, `membership.tsx` | 🟠 High |
| 7 | Fix `px-4.5` to valid Tailwind values | All routes | 🟠 High |
| 8 | Rename asset files | `SiteHeader.tsx`, `dashboard.tsx`, `membership.tsx` | 🟠 High |
| 9 | Add Draft Saved indicator to membership form | `membership.tsx` | 🟡 Medium |
| 10 | Add EmptyState component + use in voter-id, dashboard | New component | 🟡 Medium |
| 11 | Mobile activity table → card list | `dashboard.tsx` | 🟡 Medium |
| 12 | Pre-form "What you get" panel | `membership.tsx` | 🟡 Medium |
| 13 | Membership stepper mobile layout fix | `membership.tsx` | 🟡 Medium |
| 14 | Modal → Vaul Drawer on mobile | `services.tsx` | 🟡 Medium |
| 15 | Standardize all buttons to `.btn-*` classes | All routes | 🟡 Medium |
| 16 | Loading skeleton for search | `voter-id.tsx`, `assistant.tsx` | 🟡 Medium |
| 17 | Remove `gov-stripe h-1` or increase to `h-[3px]` | `SiteHeader.tsx` | 🟢 Low |
| 18 | Add keyboard ESC close to modals | `services.tsx` | 🟢 Low |
| 19 | Reduce body dot-pattern opacity | `styles.css` | 🟢 Low |
| 20 | Reduce homepage services grid to 3 cards | `index.tsx` | 🟢 Low |
