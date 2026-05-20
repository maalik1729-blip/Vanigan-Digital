# UI/UX Audit — Tamil Nadu Vanigargalin Sangamam (TNVS) Portal

**Project:** tnis-main · TanStack Start + Vite + Tailwind CSS v4  
**Audited Pages:** Home, Services, Membership, Voter ID / Card, Dashboard, Assistant, Wings, About, Contact  
**Audit Date:** 2026-05-20  
**Auditor Role:** Senior UI/UX Auditor

---

## Executive Summary

The TNVS portal serves Tamil Nadu traders with membership registration, ID card generation, welfare scheme access, and loan assistance. The codebase shows thoughtful bilingual (Tamil/English) design intent, uses a government-institutional colour palette (deep navy + gold/saffron), and has several premium micro-animations via Framer Motion. However, the portal suffers from **critical onboarding confusion**, **inconsistent component behaviour**, **missing real authentication**, **mock/placeholder data leaks**, **cognitive overload on the Membership and Voter ID forms**, and **serious mobile UX gaps**. These issues reduce trust, increase user drop-off, and create friction for the very non-technical, semi-literate rural trader audience the portal targets.

**Overall Severity Rating: 6.5 / 10 — Needs significant UX remediation before public launch.**

---

## Major UX Problems

### 1. 🔴 No Real Authentication — Dashboard Is Fully Fake (CRITICAL)
**Location:** `/dashboard`  
**Problem:** The dashboard accepts any string as an "EPIC ID" and stores it in localStorage. There is no real login, OTP verification, or identity check. Pressing "My Account" with no session shows `LoginPrompt` which has an email + password field — but no real backend. The session is just a localStorage key.  
**Why it matters:** Users who find this portal through Google will attempt to log in and either:
- Enter a random string and see fabricated data (Senthil Kumar N, fake activity), damaging trust.
- Confuse the demo data for real data and take actions based on it.

**User Impact:** Complete loss of trust if a user realises the dashboard data is hardcoded.  

### 2. 🔴 The Voter ID Page Is Labeled Inconsistently (CRITICAL)
**Location:** `/voter-id`  
**Problem:** The route is called "voter-id" but the page header says "Sangamam Membership Card Generator". The navigation link says "My Card" in English and "சங்கம அட்டை" in Tamil. The search box labels it "Member Database". The page footer of the generated card shows voter registration-style data fields (PART_NO, SECTION_NO, SERIAL_NO, ASSEMBLY_NO). These are civic voter roll fields — not trader association fields. Displaying them confuses users who don't understand the data origin.  
**Why it matters:** Users do not understand what they are generating — a trader membership card or a voter ID card.

### 3. 🔴 Membership Form Has Critical Step Confusion (HIGH)
**Location:** `/membership` — Step 4 button says "Pay & Submit" but it runs `step === 5 ? "Pay & Submit" : "Continue"` — so the button on step 4 actually says "Continue", not "Pay & Submit". The button code is mismatched.  
**Problem:** `step===5 ? "Pay & Submit" : "Continue"` — Step 5 is the success screen. The button at step 4 (payment review) says "Continue" when it should say "Pay ₹500".  
**Why it matters:** Users on the payment confirmation step don't see any payment affordance — they see "Continue" which suggests no payment is being taken.

### 4. 🔴 The Helpline Number Is Fake (HIGH)
**Location:** `SiteHeader.tsx`, `assistant.tsx`  
**Problem:** The helpline reads "1800-XXX-XXXX" — literally a placeholder. This appears in the top announcement bar on every page and in the Support Center sidebar. Non-technical users will attempt to call this.  
**Why it matters:** This is the single biggest trust signal a government-affiliated portal can offer. Displaying a placeholder number signals to users that this is not a real official organization.

### 5. 🔴 Mock/Demo Data Is Visible to Real Users (HIGH)
**Location:** `voter-id.tsx` search tip, `dashboard.tsx` referral members  
**Problem:** The voter ID search tip says: *"Search 'Senthil Kumar' or 'RJE1234567' to load pre-configured voter profiles."* — This development hint is shown to real users. The coordinator dashboard shows two fake "Grace Supermarket" and "Royal Textile Hub" mock referral entries with "TNVS-MOCK-01" reference IDs.  
**Why it matters:** Users will copy "Senthil Kumar" into the search expecting to find themselves. Mock entries destroy trust in data accuracy.

---

## Major UI Problems

### 1. 🟠 Inconsistent Button Styles (HIGH)
**Problem:** The codebase defines `.btn-primary`, `.btn-secondary`, `.btn-ghost` CSS classes in `styles.css` but almost no component uses them. Every page constructs buttons with long inline Tailwind strings. This creates visual inconsistency — rounded-xl vs rounded-md vs rounded-lg, px-4.5 vs px-6 vs px-5, font-medium vs font-semibold vs font-bold all appearing in close proximity.  
**Specific issue:** `px-4.5` is used in multiple places but `4.5` is not a valid default Tailwind spacing step — this will output no padding.

### 2. 🟠 Logo Image Has Wrong File Name Exposed (MEDIUM)
**Location:** `SiteHeader.tsx`, `dashboard.tsx`, `membership.tsx`  
**Problem:** The header logo imports `"@/assets/ChatGPT Image Mar 25, 2026, 05_31_25 PM (1).png"` — a ChatGPT-generated image filename with spaces, parentheses, and a timestamp. This is a development asset, not a production logo. Users who inspect the page source will see this filename.  
**Why it matters:** It exposes the AI-generated nature of assets and signals amateur production quality.

### 3. 🟠 The `gov-stripe` Top Border Is Very Thin and Invisible on Small Screens (MEDIUM)
**Location:** `SiteHeader.tsx` — `<div className="gov-stripe h-1" />`  
**Problem:** A 1px-tall saffron-navy-saffron stripe renders at the very top of the header. It is invisible on most mobile screens and does not communicate "government" — it looks like a rendering artifact.

### 4. 🟠 Services Page — Category Headers Have No Semantic Weight (MEDIUM)
**Location:** `/services`  
**Problem:** The four service categories (Membership, Welfare, Business Support, Loan Assistance) are marked with `<h2>` but styled the same as body text. There is no visual separation between the category name and the service cards below it — just a thin `border-b`. Users scanning the page cannot quickly identify category boundaries.

### 5. 🟠 The Loan Banner on Homepage Is Visually Competing (MEDIUM)
**Location:** `/` — Emerald banner between Services and How It Works  
**Problem:** The bright emerald/teal gradient loan promo banner sits between two neutral content sections. Its high contrast interrupts the visual reading flow. The business type tags (Pvt Ltd, Partnership, etc.) are small, pill-shaped, and styled like inactive badges but are actually links. Their affordance is unclear.

---

## User Friction Points

### 1. Voter ID / Card Form — Two-Step Flow Is Confusing
The form forces users through a database search step before showing the manual entry form. The "Enter Manually" button is buried as a tertiary option next to "Search". A non-technical trader visiting for the first time will not understand they need to search for themselves first.

### 2. Membership Form Saves Draft But Never Notifies User
The form auto-saves to localStorage every keystroke. However, there is no visual indicator like "Draft saved ✓" or "Progress saved". When the user returns, they are dropped into the middle of a form step with no context about their previous session.

### 3. Dashboard "Download ID Card" Navigates to Voter ID Page
Clicking "Download ID Card" in the dashboard uses `navigate({ to: "/voter-id", search: { q: epicId } })`. This sends users to an entirely different page to complete the download. This cross-page redirect is unexpected — users expect to download directly from the dashboard.

### 4. Services Page Modals Have No Height Limit on Mobile
The service modals (`max-h-[75vh]` on body) are designed for desktop. On mobile (especially the Loan chatbot modal), the content overflow is not properly handled — the "Back" button at step 2 can become unreachable if the modal content is long.

### 5. Support Page Status Checker Always Returns "Senthil Kumar"
Any EPIC ID with more than 2 characters returns a hardcoded profile for "Senthil Kumar N, Chennai". A user entering their own ID sees someone else's name and data — a critical trust-breaking moment.

### 6. Language Switcher Uses Hover — Mobile Incompatible
The language dropdown in the header uses CSS `:hover` (`group-hover:opacity-100`) to show/hide. On touch devices, hover states do not exist. The dropdown never opens on mobile.

---

## Visual Hierarchy Problems

### 1. Heading Sizes Are Too Similar Across All Pages
`h1` at `text-3xl` and `h2` at `text-3xl md:text-4xl` — on many pages these resolve to the same size. The hierarchy from H1 → H2 → H3 is visually indistinct. The `font-display` (Fraunces) font applies to all headings equally with no size differentiation.

### 2. Stats Section on Homepage Has Low Impact
The four stat numbers (1,24,560+, 38 Districts, etc.) are displayed in small `text-2xl md:text-3xl` text inside a grid. These are the most powerful trust signals on the page — they should be significantly larger (text-5xl), with more visual prominence.

### 3. CTAs Are Not Visually Dominant Enough
On the homepage, there are two CTAs in the hero ("Get My Card" + "Apply Now"), two more in the CTA section at the bottom, and two in the middle loan banner. The nav bar also has "Join" and "My Account" links. This CTA flooding reduces the impact of any single action.

### 4. Service Cards Have Identical Visual Weight
All 12 service cards on the Services page look identical. There is no visual differentiation between primary services (Membership, Certificate Download) and secondary services (Shop Registration, Advisory Cell). High-priority services should be visually elevated.

### 5. Dashboard Info Grid Uses Tiny Text (10px)
The membership card inside the dashboard uses `text-[10px]` labels. At standard mobile viewing distance, 10px text is below the WCAG minimum of 12px for body text and nearly impossible to read.

---

## Typography Problems

### 1. Mixed Tamil Font Application
The app uses both `font-tamil` (Noto Serif/Sans Tamil) and inline `class="font-tamil"`. Some Tamil text appears in Fraunces (the display font) because the `lang="ta"` attribute is not set on the HTML root. Tamil characters in Fraunces render incorrectly or fall back to system fonts.

### 2. `text-[10px]` Used Extensively — Below Readable Threshold
10px text appears in: dashboard info labels, stat section subtext, activity table dates, FAQ badge text, membership stepper Tamil labels. For the primary audience (non-technical Indian traders, often older), this is unreadable.

### 3. No Visible Type Scale System
The CSS defines three font families but no type scale tokens (`--text-xs`, `--text-sm`, etc.). Font sizes are specified inline everywhere with inconsistent results: `text-xs`, `text-[10px]`, `text-[11px]`, `text-[9px]` all appear across the same view.

### 4. Uppercase Tracking Overused
The pattern `text-[10px] font-bold uppercase tracking-[0.18em]` or `tracking-wider` is used on nearly every label, section tag, and meta text. The eye has no resting point — everything is equally "shouted."

### 5. Font Weight Inconsistency in Buttons
Buttons use `font-medium`, `font-semibold`, and `font-bold` inconsistently within the same page. The styled `.btn-primary` uses `font-weight: 700` but most actual buttons override this with `font-semibold` (600).

---

## Accessibility Problems

### 1. Language Switcher Dropdown Is Keyboard Inaccessible
The language dropdown uses `group-hover:` CSS classes. It cannot be accessed via keyboard Tab + Enter. There is no `aria-expanded`, `aria-haspopup`, or focus management.

### 2. Icon-Only Buttons Have No Labels
Several buttons use icons without visible text and no `aria-label`:
- The copy button in the coordinator referral field
- The close `✕` button inside the webcam modal
- The "Remove photo" button overlay on the voter ID form photo

### 3. Form Errors Use Red Color Alone
Error states show red borders and red text. There is no icon or shape indicator accompanying the red — fails WCAG 1.4.1 (Use of Color).

### 4. Mobile Menu Has No Focus Trap
The mobile overlay menu (`open && <div>`) renders as a block element but does not trap focus. A screen reader user tabbing through the page will tab past the overlay into hidden page content.

### 5. No `aria-live` Regions for Dynamic Content
The membership status checker (Assistant page), the voter ID search results, and toast notifications are all dynamically inserted without `aria-live` regions. Screen readers will not announce these updates.

### 6. `<select>` Elements on Membership Form Cannot Be Styled Accessibly
The wing/business type `<select>` uses optgroup labels styled with CSS classnames (`className="font-bold..."`) — optgroup styling is not applied by browsers. The user sees un-styled grouped options.

### 7. Color Contrast — Gold on White (#d4b26f on white)
The gold accent color (`oklch(0.82 0.10 85)`) on a white or near-white background fails WCAG AA contrast ratio (4.5:1) for small text. This appears in the stat section subtext, service card hover text, and SectionLabel components.

---

## Mobile Responsiveness Problems

### 1. Stepper Overflows on Small Screens (Membership)
The 5-step stepper has `overflow-x-auto` but each step is `min-w-[72px]`. On a 375px phone, 5 × 72px = 360px + gaps — the stepper is barely scrollable. The connector line `hidden md:block` disappears on mobile, leaving floating circles with no visual connection.

### 2. Header Logo Text Truncates on 375px Width
The brand name "Tamil Nadu Vanigargalin Sangamam" in the header at `text-[14px]` overflows on very narrow screens (320px) and wraps awkwardly.

### 3. The Loan Banner Business Type Tags Overflow on Mobile
On the homepage loan banner, the tags (Pvt Ltd, Partnership, Import/Export, Proprietorship, Freelancer) wrap into multiple rows on mobile. The `flex-wrap` works but the visual result on small screens is a chaotic cluster of pills beneath the heading.

### 4. Dashboard 12-Column Grid Collapses Poorly
The dashboard uses `lg:grid-cols-12` with col-span-5 and col-span-7. On tablet (768px-1023px), this collapses to a single column, stacking the member card above the activity table. The member card alone fills the viewport — the activity section requires heavy scrolling before being seen.

### 5. Voter ID Form — Two-Column Grid on Step 1 Is Cramped on Mobile
The form fields use `md:grid-cols-2 gap-5` — on mobile, these stack into a single column. However, some fields like "Age" (short number) and "Gender" (short select) are given full-width rows on mobile, wasting space and increasing form length unnecessarily.

### 6. Webcam Modal Is Not Optimized for Mobile
The webcam selfie modal has a fixed `aspect-square` video preview. On mobile portrait, this can push the "Capture Photo" button partially off screen. The modal has no max-height constraint relative to the viewport on small screens.

---

## Cognitive Load Analysis

### 1. Homepage Has 5 Distinct Sections Fighting for Attention
Hero → Stats → Services Grid (7 cards) → Loan Banner → How It Works (4 steps) → Final CTA. A first-time user has no idea what to do first. The "Get My Card" and "Apply Now" CTAs are immediately visible but the page continues scrolling with more offers. There is no single clear next action.

### 2. Navigation Has 6 Items — Too Many for a Focused App
Home, Services, Wings, My Card, Join, Support — 6 top-level nav items. "Wings" is unexplained (it means business divisions). "My Card" and "Join" are often confused (users who want to join think "My Card" is how they get their membership card). "Support" sounds like technical support, not the general assistant/FAQ page.

### 3. Dual Language Creates Double Content Everywhere
The bilingual approach displays both Tamil and English text side by side in many places (step labels show English + Tamil subtext, form labels show "Full Name / பெயர்"). This doubles the reading length for every item and creates visual noise for users who understand only one language.

### 4. The Coordinator Feature Is Confusing and Premature
The dashboard presents the "Join as Coordinator" opt-in immediately upon login, before the user has even viewed their membership card. The coordinator concept (recruit 25 members to earn a title) is a gamification mechanic that users have no context for at this moment.

### 5. Loan Application Is a 3-Step Chatbot Inside a Modal
The loan application flow (yes/no → business type selection → business name input → success) is embedded in a modal with limited height. This conversational UI conflicts with the formal government portal tone of the rest of the application.

---

## Trust & Clarity Issues

### 1. "Government Registered · Estd. 2012" — No Verification Link
The homepage SectionLabel claims "Government Registered." No registration number, government order number, or verification URL is provided. For a portal handling ₹500 payments, this claim needs substantiation.

### 2. Payment Flow Is Simulated — "Simulate Successful Payment" Button
The renewal modal shows a QR code then a green "Simulate Successful Payment" button. This is clearly a development prototype shipped to users. A user who pays ₹500 via UPI to a real account and then clicks this button will think their payment processed when it has not been tracked.

### 3. Certificate Download Is a Canvas Drawing — No Legal Seal
The membership certificate is drawn via HTML Canvas with Georgia font, a placeholder logo image, and a static "SENTHIL KUMAR N — Founder & State President" signature block. There is no digital signature, no QR verification code, no government stamp — it can be recreated by anyone with Inspect > Edit.

### 4. The Referral URL Domain Does Not Exist
The coordinator widget generates referral links like `https://vanigan.digital/refer/...`. This domain does not exist. Users who share this link get a 404. This damages credibility when shared with potential members.

### 5. Helpline and Emergency Contact Are Placeholder
As noted above, `1800-XXX-XXXX` appears in header, footer, assistant page. The application also lists "Govt. of Tamil Nadu Approved Organization" in the header without any accompanying registration credential.

---

## Recommended Priority Fixes

| Priority | Issue | Page | Effort |
|----------|-------|------|--------|
| 🔴 P1 | Replace fake helpline with real number | Header, Assistant | Low |
| 🔴 P1 | Remove development search tip from Voter ID page | voter-id | Low |
| 🔴 P1 | Remove mock referral member cards | dashboard | Low |
| 🔴 P1 | Fix "Pay & Submit" button label on step 4 | membership | Low |
| 🔴 P1 | Remove "Simulate Successful Payment" button in production | services | Medium |
| 🔴 P1 | Replace fabricated status checker with real API or clear demo notice | assistant | Medium |
| 🟠 P2 | Add real authentication or clear "demo mode" banner | dashboard | High |
| 🟠 P2 | Standardize button styles using existing .btn-* classes | All pages | Medium |
| 🟠 P2 | Fix language switcher to use click instead of hover | SiteHeader | Low |
| 🟠 P2 | Increase minimum font size — remove all text-[9px] and text-[10px] | All pages | Medium |
| 🟠 P2 | Add aria-label to all icon-only buttons | All pages | Low |
| 🟠 P2 | Add aria-live regions for dynamic search results | voter-id, assistant | Medium |
| 🟡 P3 | Rename assets — remove ChatGPT filename from imports | SiteHeader | Low |
| 🟡 P3 | Differentiate stat numbers — increase to text-5xl | index | Low |
| 🟡 P3 | Simplify navigation — remove or rename "Wings" | SiteHeader | Low |
| 🟡 P3 | Improve mobile stepper for membership form | membership | Medium |
| 🟡 P3 | Add "Draft saved ✓" toast when form auto-saves | membership | Low |
| 🟡 P3 | Add trust signals — registration number, gov order reference | index, footer | Medium |
