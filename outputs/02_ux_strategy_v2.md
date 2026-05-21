# 02 — UX Strategy (v2 Run)

## Strategy Overview
The UX Strategy for the TNVS Trader Portal redesign focuses on reducing onboarding friction, optimizing user trust signals, and maintaining a high-performing mobile-first experience. Since the target audience includes regional traders who are primarily Tamil-speaking, mobile-dependent, and operating on low-to-medium-tier devices, the interface must prioritize high-contrast typography, large touch targets, minimal bundle footprints, and immediate interactive feedback.

---

## Navigation Architecture
- **Global Layout Integration**: Keep the current unified layout architecture where the navbar (`SiteHeader`) and footer (`SiteFooter`) are wrapped inside the TanStack Router root (`__root.tsx`).
- **Responsive Navigation Drawer**: On mobile widths (<768px), the navbar collapses into a side drawer with distinct navigation options and a high-contrast theme toggle. The mobile drawer must provide clear touch targets with a minimum height of `48px` for better thumb access.
- **Scroll Behavior**: Replace the heavy Lenis smooth scrolling library with native browser scrolling (`scroll-behavior: smooth` declared in CSS for anchor links) to improve browser rendering times and prevent scroll bugs on Android mobile devices.

---

## Registration Form Architecture
- **Multi-Step Separation**: The 5-stage registration process in `src/routes/membership.tsx` (Personal → Business → Documents → Review → Success) splits form fields into distinct progressive viewports, reducing visual clutter.
- **Form State Persistence**: Keep the current `localStorage` persistence layer. Form states are saved in real-time, allowing users to resume their registration if their cellular connection drops or they refresh the page.
- **38 Districts Data Constant**: We will define a complete, bilingual 38-district constant array `TN_DISTRICTS` structured as:
  ```typescript
  export const TN_DISTRICTS = [
    { value: "ariyalur", label: "அரியலூர் / Ariyalur" },
    ...
  ]
  ```
  This ensures that every trader in Tamil Nadu is represented and has an intuitive, readable district label in their primary language.

---

## Dashboard Auth Flow (Demo Mode)
- **Session Control**: Dashboard access is controlled by a simulated token stored in `sessionStorage` (handled in `src/lib/session.ts`).
- **Login Verification**: The `LoginPrompt` component allows logging in with an EPIC ID or a 10-digit mobile number. The system verifies this value, issues a simulated successful authentication token, and updates the local state to mount the dashboard dashboard interface.
- **PIN Input Validation**: For membership card creation and retrieval, we use a single overlay `<input type="text" pattern="[0-9]*" maxLength={4} />` mapped to four separate visual slots. The styling must provide focus states (pulsing borders) to clearly signal typing progress.

---

## Card Generator Flow
- **Auto-Population**: When a user queries their voter record on `/voter-id` and clicks the join link, the search query parameters (`name`, `epic`, etc.) are appended to the `/membership` route link.
- **API Fallback Search**: If the `/api/voter-search` API endpoint is unavailable, the card generator automatically falls back to searching client-side using `src/data/voters.json`. This guarantees functional continuity.
- **Design Cleanliness**: The printed card template layout must follow exact ID-card dimensions with highly legible text styles.

---

## Language Toggle Decision
We choose **Option A: Maintain Active Bilingual Hook (useLanguage)** with robust coverage.
- **Reasoning**: The codebase already contains an elegant `useLanguage` hook providing a `t(ta, en)` function used throughout the pages. Rather than deleting this functionality, we will retain it and fix any gaps (e.g. translation of the `DemoModeBanner` title) to ensure full bilingual coverage.
- **Pattern**: Every textual component must display headings, subtexts, and buttons in a bilingual `Tamil / English` layout or follow the `t(ta, en)` context switch pattern.

---

## Component Hierarchy Recommendations
- **SiteHeader**: Wraps Gov Stripe + Announcement Ticker + Navigation Bar.
- **SiteFooter**: Renders footer links and credentials.
- **DemoModeBanner**: Repositioned at the top of protected or mock-data views (like dashboard/assistant) to transparently signal preview states.
- **VoterIdCard**: Formats the membership card preview and prints it.

---

## State Management Recommendations
- **Bilingual State**: Managed via React Context in `LanguageProvider`.
- **Form State**: Managed in local React state with standard `localStorage` persistence updates on change.
- **Theme State**: Managed in `ThemeProvider` context (`light` | `dark`).

---

## Recommended UX Priorities (Top 10)
1. **Full District Support**: Add all 38 districts to the select options to prevent user drop-off in membership registration.
2. **Blue Info-Style Demo Banner**: Re-style the warning banner to a pleasant blue info layout, matching institutional trust design rules.
3. **Remove Lenis Scroll**: Strip Lenis wrapper to restore native, zero-lag scrolling on regional Android phones.
4. **Bilingual Notice Alignment**: Translate notice banner headers to Tamil/English dynamic labels.
5. **Standardized Tap Targets**: Force a minimum of `44px` height (`min-h-11`) on all buttons, select boxes, and anchors.
6. **Smooth Form Step Progress**: Highlight the current registration stepper step in primary navy and gold.
7. **Clean Input Focus Indicators**: Ensure inputs have high-visibility focus borders (`focus:border-primary focus:ring-4`).
8. **Mock Search Fallback Coverage**: Ensure name or EPIC queries resolve instantly to form fields.
9. **Accessibility Landmark Elements**: Use semantic tags `<main>`, `<header>`, `<footer>` with correct skip links.
10. **Font Display Swap**: Enforce `font-display: swap` for Google Fonts loading to prevent layout shifting on slow networks.
