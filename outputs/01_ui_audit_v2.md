# 01 — TNVS Frontend UI Audit (v2 Run)

## Executive Summary
This UI Audit provides an in-depth code and architecture analysis of the Tamil Nadu Vanigargalin Sangamam (TNVS) Member Portal frontend. The target audience of this portal consists of Tamil Nadu traders (35-55 age range) who are mostly mobile-first, using medium-to-low-tier Android devices, primarily literate in Tamil, and operating under varying network conditions. 

The application is built on React 19, Tailwind CSS v4, and TanStack Router/Start. The audit focuses on layout performance, design systems consistency, bilingual behavior, mobile touch readiness, and dead-weight dependencies.

---

## Design Token Findings
Brand custom properties (Navy `#0A1F44` and Gold `#C9A84C`) are partially configured in `src/styles.css` using HSL/oklch values. However, several hardcoded inline hex values and Tailwind arbitrary classes are scattered across routes and components:

1. **`src/routes/dashboard.tsx`** [Severity: HIGH]
   - Uses hardcoded dark blue arbitrary colors: `bg-[#06225C]`, `via-[#06225C]`, `to-[#06225C]`. These violate token encapsulation.
2. **`src/routes/voter-id.tsx`** [Severity: MEDIUM]
   - Uses raw hex styles for background emulation: `#f0f2f5` (line 342) and `#fff` (lines 348, 353).
3. **`src/components/VoterIdCard.tsx`** [Severity: LOW]
   - Defines raw hex color string constants for card layout rendering: `const NAVY = "#1e3a8a";`, `const NAVY_D = "#162d6e";`, `const GOLD = "#d4b26f";`, `const GOLD_L = "#ebdca5";`. Also uses inline styling with `#dce3f0`, `#fff`, `#111`, `#888` for layout borders and textual segments.
4. **`src/routes/membership.tsx`** [Severity: LOW]
   - Hardcoded hex styles are used inside the 2D Canvas drawing API context (`ctx.fillStyle = "#1e3a8a"`, `#ebdca5`, etc.) to render the membership card file for download. This is expected behavior for raw canvas generation but should align with the defined visual theme colors.
5. **`src/styles.css`** [Severity: LOW]
   - Hardcoded background fallback `#ffffff` is declared on input and button elements (lines 334, 406).

---

## Component Duplication Findings
- **Navigation Bar**: The main navigation bar (`SiteHeader`) is a shared layout component imported in `src/routes/__root.tsx` and wrapped globally. It is not duplicated in individual route files.
- **Footer**: The footer (`SiteFooter`) is a shared layout component imported in `src/routes/__root.tsx` and wrapped globally. No duplication.
- **Announcement Ticker / Utility Strip**: Built directly into the `SiteHeader.tsx` shell, rendering persistent registration information and helpline links globally. No duplication.

---

## Critical Functional Bugs

### 1. Incomplete District Selector Dropdown (Severity: CRITICAL)
- **File**: [membership.tsx](file:///d:/ziya/TNVS/src/routes/membership.tsx#L43)
- **Line Context**: `const DISTRICTS = ["Chennai","Coimbatore","Madurai","Trichy","Salem","Erode","Tirunelveli","Vellore"];`
- **Impact**: Only 8 of the 38 Tamil Nadu districts are present. Traders from the remaining 30 districts (e.g. Ariyalur, Chengalpattu, Vellore, etc.) are unable to select their corresponding administrative location, blocking successful registration.

### 2. Missing Translation in Demo Mode Notice (Severity: MEDIUM)
- **File**: [DemoModeBanner.tsx](file:///d:/ziya/TNVS/src/components/DemoModeBanner.tsx#L34)
- **Impact**: While the language toggle in `SiteHeader` successfully updates the application language context (`ta` | `en`), the label `⚠️ Demo / Preview Mode` in the warning banner is hardcoded in English, failing to display a translated equivalent in Tamil mode.

---

## Animation & Performance Findings

### 1. Lenis Smooth Scroll Performance (Severity: HIGH)
- **Files**: [__root.tsx](file:///d:/ziya/TNVS/src/routes/__root.tsx#L13) and [LenisProvider.tsx](file:///d:/ziya/TNVS/src/components/LenisProvider.tsx)
- **Impact**: Lenis smooth scroll runs a global requestAnimationFrame loop. On ₹8,000–₹15,000 Android devices with 4G/3G connections, this script creates major scroll lag, conflicts with native scrolling, and should be removed.

### 2. Framer Motion Performance Risk (Severity: MEDIUM)
- **Imports**: `framer-motion` is imported in 11 files:
  - `src/routes/index.tsx`, `membership.tsx`, `wings.tsx`, `dashboard.tsx`, `voter-id.tsx`, `assistant.tsx`, `services.tsx`
  - `src/components/WordSwapper.tsx`, `Section.tsx`, `ScrollReveal.tsx`, `HorizontalSteps.tsx`
- **Impact**: Pure decorative scroll fades and entrance shifts consume unnecessary main-thread performance. These should be replaced with GPU-accelerated CSS keyframe transitions wherever possible, retaining Framer Motion only for step indicators or functional interactive layouts.

---

## Dead Dependency Findings
The package configuration defines 26 separate `@radix-ui/*` dependencies. Of these, **25 are dead weight** (the only custom shadcn files under `src/components/ui/` that import them are never referenced in the primary routes):

* **Used**: `@radix-ui/react-accordion` (via `src/routes/index.tsx`) and `@radix-ui/react-slot` (via `src/components/ui/button.tsx` in `carousel.tsx`).
* **Unused (Dead Weight)**:
  - `@radix-ui/react-alert-dialog`
  - `@radix-ui/react-aspect-ratio`
  - `@radix-ui/react-avatar`
  - `@radix-ui/react-checkbox`
  - `@radix-ui/react-collapsible`
  - `@radix-ui/react-context-menu`
  - `@radix-ui/react-dialog`
  - `@radix-ui/react-dropdown-menu`
  - `@radix-ui/react-hover-card`
  - `@radix-ui/react-label`
  - `@radix-ui/react-menubar`
  - `@radix-ui/react-navigation-menu`
  - `@radix-ui/react-popover`
  - `@radix-ui/react-progress`
  - `@radix-ui/react-radio-group`
  - `@radix-ui/react-scroll-area`
  - `@radix-ui/react-select` (standard HTML select is used in `FloatingInput.tsx`)
  - `@radix-ui/react-separator`
  - `@radix-ui/react-slider`
  - `@radix-ui/react-switch`
  - `@radix-ui/react-tabs`
  - `@radix-ui/react-toggle`
  - `@radix-ui/react-toggle-group`
  - `@radix-ui/react-tooltip`

---

## Mobile Layout Findings
- **Touch Target Sizing**: Essential interactive boundaries (buttons, form inputs) mostly comply with `min-h-[44px]`. The navigation links in `SiteHeader` specify `min-h-[44px]` (Desktop) but require verification on mobile screens where elements collapse.
- **Stats Grid Wrapping**: `grid-cols-2 md:grid-cols-4` in the home stats row wraps correctly to mobile grids, preventing overflow.

---

## Prioritized Fix List

1. **[CRITICAL] membership.tsx**: Replace the hardcoded `DISTRICTS` list with the full 38-district Tamil Nadu bilingual mapping (`தமிழ் / English`).
2. **[HIGH] __root.tsx & LenisProvider.tsx**: Remove Lenis smooth scrolling configuration. Add native `scroll-behavior: smooth` to `src/styles.css` for anchor jumps.
3. **[HIGH] DemoModeBanner.tsx**: Redesign the warning banner to a sleek, blue info container using CSS tokens and Lucide Info icon. Add translation to the banner heading.
4. **[HIGH] dashboard.tsx**: Replace the arbitrary background styles (`bg-[#06225C]`) with a semantic CSS custom property (`var(--color-primary)` or Tailwind token utility).
5. **[MEDIUM] Framer Motion optimization**: Remove Framer Motion scroll and fade components in sections that can easily be expressed in standard CSS animations.
