# Visual Redesign Direction — Tamil Nadu Vanigargalin Sangamam (TNVS) Portal

**Source Strategy:** `outputs/02_ux_improvement_strategy.md`  
**Role:** Senior Product UI Designer  
**Reference Quality:** Linear, Stripe, Notion, Airtable — applied to a government/civic institutional context  
**Design Context:** Official government-affiliated trader portal for Tamil Nadu. Must feel trustworthy, premium, and accessible — not sterile/corporate and not festive/consumer.

---

## Visual Design Philosophy

The TNVS portal must balance two opposing forces:

**Institutional Trust** — The portal deals with official government recognition, ₹500 payments, certificates, welfare claims. It must feel like a *real organization* — precise, clean, and authoritative.

**Human Warmth** — The users are small traders, farmers, shop owners — people who are skeptical of complex digital interfaces. The design must feel *approachable*, *clear*, and *community-driven*.

**Reference:** The design philosophy closest to this is India's **COWIN portal redesign** meets **Linear** — systematic, clean, spacious, with a strong typographic hierarchy and confident use of a single brand color.

### Three Design Principles
1. **Clarity over decoration** — Remove ornamental elements that do not carry information
2. **One strong hierarchy** — Every page has a clear winner: the H1, the primary CTA
3. **Trustworthy restraint** — Premium design through negative space and consistent spacing, not through color complexity

---

## Typography Recommendations

### Type Scale (Define Once, Use Everywhere)
Replace the current ad-hoc font size mix with a strict 8-level scale:

```
display-2xl: 3.75rem / 60px — Hero H1 only
display-xl:  3rem    / 48px — Section H1
display-lg:  2.25rem / 36px — Page subtitles, section H2
display-md:  1.875rem / 30px — Card headings
display-sm:  1.5rem  / 24px — Sub-section H3
body-lg:     1.125rem / 18px — Lead paragraph
body-md:     1rem     / 16px — Default body
body-sm:     0.875rem / 14px — Secondary text, form labels
caption:     0.75rem  / 12px — Metadata, timestamps, tags
```

**Remove entirely:** `text-[9px]`, `text-[10px]`, `text-[11px]` — use `caption` (12px) as the minimum.

### Font Hierarchy
| Role | Font | Weight | Usage |
|------|------|--------|-------|
| Display (headings H1-H3) | Fraunces | 600 | All headings |
| Tamil Display | Noto Serif Tamil | 600 | Tamil headings |
| Body (UI text) | Inter | 400/500/600 | All body text, labels |
| Tamil Body | Noto Sans Tamil | 400/500 | Tamil body text |
| Mono | System monospace | 500 | EPIC IDs, codes |

**Rule:** Tamil text should always use `Noto Sans Tamil` for body and `Noto Serif Tamil` for headings. Never render Tamil in Fraunces or Inter.

### Uppercase Usage — Restrict Severely
Uppercase + letter-spacing should be used only for:
- Page-level `SectionLabel` tags (e.g. "OUR SERVICES")
- Table column headers

Remove uppercase tracking from: card subtexts, button labels, info row labels, stat sublabels.

---

## Layout System

### Grid
- Max content width: `1200px`
- Page padding: `24px` mobile / `40px` tablet / `80px` desktop
- Column grid: 12-column with `24px` gutters
- Section vertical rhythm: `80px` between sections on desktop, `48px` on mobile

### Spacing Scale (8px base)
Use `4px` increments: 4, 8, 12, 16, 20, 24, 32, 40, 48, 64, 80, 96, 120

**Remove:** `p-4.5`, `py-1.5`, `px-3.5`, `gap-4.5` — these are non-standard Tailwind values that either do nothing or are approximate.

### Content Zones
Every page should follow a 3-zone structure:
1. **Page Header Zone** — Title, breadcrumb, hero. Max `240px` height.
2. **Content Zone** — Primary page content in the 12-column grid.
3. **CTA / Anchor Zone** — Sticky or section-bottom CTA.

---

## Color Hierarchy

### Primary Palette (Keep — Refine Application)
The existing color system is good — the problem is in application consistency, not the colors themselves.

```
Primary (Navy):     oklch(0.30 0.14 255)  — #1B2E6B equivalent
Gold (Saffron):     oklch(0.82 0.10 85)   — #D4A94F equivalent
Background:         oklch(0.985 0.012 85) — warm off-white
Card:               #FFFFFF
Border:             oklch(0.88 0.015 90)  — warm light grey
```

### Color Role Rules (Strict)
| Color | Use ONLY for |
|-------|-------------|
| Primary Navy | Primary CTA buttons, active nav links, headings, key data (EPIC ID) |
| Gold | SectionLabel tags, decorative accents, step numbers, star ratings |
| Emerald | Success states only (not loan/green branding) |
| Amber | Warning states only |
| Red/Destructive | Error states only |
| Slate-50/100 | Page backgrounds, table headers |
| White | Cards, modals, form fields |

**Remove:** Random emerald/teal for the loan banner and coordinator widget. These create color chaos. Use the primary navy instead.

### Contrast — Fix Gold on White
Gold text on white background (`#D4A94F` on `#FFFFFF`) fails WCAG AA at 12px. Solutions:
- Use gold only for decorative elements (underlines, icons, borders) — never for body text
- When text on gold/yellow background: use the primary navy, not black
- Minimum: use `oklch(0.60 0.14 85)` (darker gold) for any gold text on white

---

## Navigation Redesign

### Desktop Header — Three Zone Header
```
[Announcement Bar] — Primary navy bg, white text, real helpline
[Brand + Nav]      — White bg, clean horizontal layout
```

**Announcement Bar (12px text):**
- Left: "✦ Government Registered — Reg. No. XXXX/2012"  
- Right: "Helpline: 1800-XXX-XXXX · Mon–Sat, 10am–6pm"

**Brand Zone:**
- Logo (proper named asset, not ChatGPT filename)
- Organisation name in two lines: English bold (14px) / Tamil light (12px)

**Nav Links (5 max):**
- Home · Services · Join · My Account · Support
- Active state: navy text + 2px gold underline
- Inactive: slate-500 → navy on hover (no underline on hover — just color change)

**Right Actions:**
- `TA | EN` toggle chip (not a dropdown)
- "My Account" ghost button — outlined navy

### Mobile Header
- Logo + Brand name (left)
- `TA|EN` toggle (center)
- Hamburger (right)
- Menu: full-screen overlay or bottom sheet — not a dropdown

---

## Dashboard Redesign

### Header Strip
Replace generic "Welcome back" with:
```
[Member ID: TNVS-XXXX]   ← small caption
Welcome, [Name]           ← H2 display font
Your account is active ✓  ← caption green
```
+ Action buttons: [Download ID Card] [Sign Out] — in header, not scattered

### Card Layout — 3-Column Grid on Desktop
```
Column 1 (4/12): Membership Card Panel
Column 2 (4/12): Quick Actions (Certificate, Renewal, Welfare Claim)
Column 3 (4/12): Recent Activity + Notices
```

On mobile: stack vertically with Quick Actions appearing first (before the activity log).

### Member Card Panel Redesign
The current card panel shows a gold top stripe + basic info grid. Redesign:
- Solid white card with a thin 4px left border in gold
- Member ID in `font-mono text-primary` — larger (16px)
- Status badge: pill with emerald fill + white text "ACTIVE"
- "Valid till" at the bottom with a subtle progress bar showing months remaining

### Remove Coordinator Widget From Default View
The coordinator opt-in should be:
1. Only shown after the user has been logged in for >7 days (localStorage check)
2. Shown as a collapsible panel, not an open card

---

## Card Component Redesign

### Unified Card System — 3 Variants

**Variant 1: Service Card (used on Home + Services pages)**
```
Background: white
Border: 1px solid oklch(0.88 0.015 90)
Border-radius: 12px
Padding: 24px
Shadow: 0 1px 0 border, 0 4px 16px -8px rgba(0,0,0,0.08)
Hover: border-color → primary/30, shadow-lg, translate-y(-2px)
```
- Icon: 40×40px rounded-8 with primary/8 bg, primary icon
- Title: `display-md` (24px), navy
- Description: `body-sm` (14px), slate-600
- CTA: ghost text link "Apply →" that becomes "→" (arrow moves right on hover)

**Variant 2: Dashboard Stat Card (small)**
```
Background: white
Border: 1px solid border-color
Border-radius: 10px
Padding: 16px
```
- Label: `caption` (12px), uppercase, slate-400
- Value: `body-lg` (18px), font-semibold, primary

**Variant 3: Info Card (Dashboard member card, notifications)**
```
Background: white
Left border accent: 4px solid gold (or primary, or emerald based on type)
Border-radius: 12px
Padding: 20px 24px
No box shadow — border-only approach
```

---

## Table Redesign

### Activity Table (Dashboard)
**Current:** HTML `<table>` with small monospace dates and a colored status dot in the last column.  
**Redesigned:**

**Desktop:** Keep table, but:
- Header row: `body-sm` 12px, uppercase, slate-400, no background (just a bottom border)
- Data rows: `body-sm` 14px, 48px row height, hover: `bg-slate-50/60`
- Date column: `font-mono` 13px, slate-400
- Status column: Pill badge (not a dot) — "Success / Pending / Info" with appropriate color fill

**Mobile:** Replace table entirely with stacked Activity Cards:
```
[Date — right]
[Activity Title — bold]
[Reference — secondary text]
[Status pill — right aligned]
```

---

## Form Redesign

### Input Fields
```
Height: 48px (all inputs, selects)
Border: 1px solid oklch(0.88 0.015 90)
Border-radius: 10px
Padding: 12px 16px
Font: 14px Inter 500
Background: white (not slate-50/30 — too muted)
Focus: border-color primary, ring: 3px primary/10
Error: border-color red-500, bg-red-50/30
Success: border-color emerald-500, show ✓ icon inside right edge
```

### Label Style
```
Font: 12px Inter 600
Color: slate-600
Margin-bottom: 6px
```
Remove the bilingual label pattern `Full Name / பெயர்` — use just the English label with a Tamil tooltip or placeholder. Exception: forms on pages where Tamil is the primary language.

### Form Error Messages
```
Font: 12px
Color: red-600
Icon: ⚠ AlertTriangle (16px) to the left
Margin-top: 4px
```

### Step Indicator (Membership Form)
**Current:** 5 circles in a row with connecting line.  
**Redesigned:**
- Circles: 36px diameter (not 40px — saves mobile space)
- Use step number until completed → use ✓ checkmark when done
- Active step: primary fill with white number, ring of 3px primary/20
- Connector line: visible on mobile (use `grid` layout instead of `flex + absolute line`)
- Step labels: English only on desktop, Tamil only on mobile

---

## Button System

### Three-Button System (Strictly Enforced)

**Primary Button**
```
Background: primary navy
Text: white, 14px, font-600
Padding: 12px 20px
Border-radius: 10px
Min-height: 48px
Shadow: 0 1px 2px rgba(0,0,0,0.15)
Hover: primary × 0.88 (6% darker)
Active: scale(0.97)
Icon: allowed, must be 16px, left of text (or right for directional →)
```

**Secondary / Outlined Button**
```
Background: transparent
Border: 1.5px solid primary
Text: primary, 14px, font-600
Padding: 12px 20px
Border-radius: 10px
Min-height: 48px
Hover: primary/6 background
```

**Ghost Button (text link style)**
```
Background: none
Border: none
Text: primary, 14px, font-600
Padding: 0
Underline on hover
Used for: "Back to Services", "View all →" links
```

**Destructive Button** (sign out, delete)
```
Background: red-50
Border: 1px solid red-200
Text: red-700, 14px
Min-height: 48px
Hover: red-100 background
```

### Rules
- Only one Primary button per visible screen section
- Never two Primary buttons adjacent to each other
- Gold background buttons (current "Apply Now") → Convert to Primary navy
- Exception: The homepage dual-CTA can use primary + outlined (not primary + gold)

---

## Mobile-first Design Adjustments

### Breakpoints
```
xs:  < 375px  — single-column only
sm:  375–639  — mobile (primary target)
md:  640–1023 — tablet
lg:  1024+    — desktop
```

### Mobile-specific UI Changes
1. **Header:** Slim bar (56px) — logo + toggle + hamburger only
2. **Navigation:** Bottom sheet, not dropdown
3. **Forms:** Single column, 48px inputs, full-width buttons
4. **Cards:** Full-width with 16px horizontal padding, no hover effects
5. **Tables:** Replace with vertical card lists
6. **Modals:** Bottom sheet on mobile (slide from bottom, not center popup)
7. **Stats bar:** 2×2 grid (not 4-column) with larger numbers

### Touch Targets
Minimum `48×48px` for all interactive elements.  
Minimum `44px` for secondary/ghost elements.  
Never `38px`, `36px`, or `32px` for user-tappable items.

---

## UI Consistency Rules

### The "One Rule Per Token" Principle
1. One border-radius system: `sm=6px, md=8px, lg=12px, xl=16px, full=9999px`
2. One shadow system: `xs, sm, md, lg` — defined once in CSS variables
3. One spacing unit: `4px` base — all spacing is multiples of 4
4. One status color per meaning: emerald=success, amber=warning, red=error, blue=info

### Component Naming Convention
All reusable components should be named and referenced:
- `<ServiceCard>` — not inline divs
- `<MembershipBadge>` — the ACTIVE/PENDING status pill
- `<SectionLabel>` — already exists, keep using it consistently
- `<FormField>` — wrapper for label + input + error (already exists as `<Field>`)
- `<StepIndicator>` — the 5-step membership stepper
- `<ActivityRow>` / `<ActivityCard>` (mobile) — dashboard activity items

### No Utility-Only Components
All components should use the design system tokens, not raw Tailwind utilities. The `btn-primary`, `btn-secondary`, `btn-ghost` classes in `styles.css` should be the only button styling used — not inline `bg-primary text-white px-6 py-3.5 rounded-md` etc.

---

## Visual Simplification Opportunities

### 1. Remove or Simplify the gov-stripe
The 1px tri-colour stripe at the top of the header is too thin to read. Either:
- Increase to `h-1.5` (6px) so it's actually visible
- Or remove it and use a single 3px gold bottom-border on the announcement bar

### 2. Background Pattern — Reduce or Remove
The `body` has a `radial-gradient` dot pattern background (`24px × 24px` grid). This creates noise behind cards and form fields. Reduce opacity from `0.018` to `0.01` or remove entirely — the parchment background colour alone is sufficient.

### 3. Loan Banner — Remove From Homepage
The emerald loan banner on the homepage competes with everything. Move to:
- A card within the Services page under "Loan Assistance"
- A persistent notification strip (not emerald) in the dashboard sidebar for logged-in members

### 4. Remove Duplicate "Join" Calls to Action
"Join" appears in: hero CTA, bottom CTA section, mobile menu, nav bar, loan banner. Reduce to:
- Nav bar: "Join" link
- Hero: "Apply for Membership" primary button
- Everywhere else: remove or replace with contextual CTAs

### 5. Simplify the Homepage Services Grid
7 service cards on the homepage is too many. Show only 3 (the most accessed: Membership, Get My Card, Welfare Schemes). Link to "View all services →" for the rest.
