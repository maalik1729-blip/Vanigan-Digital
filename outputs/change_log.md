# TNVS UI Redesign Pipeline Change Log (v2 Run)

This file contains the chronological log of all changes, creations, and deletions made to the Tamil Nadu Vanigargalin Sangamam (TNVS) Trader Portal repository during the implementation of the UI Redesign Pipeline.

---

### [2026-05-21 17:10:00 +05:30] — Stage 3: Design Tokens Implementation
* **[MODIFY]** [src/styles.css](file:///d:/ziya/TNVS/src/styles.css)
  * Defined primary design tokens (`--radius-input`, `--radius-card`, `--radius-modal`, `--radius-pill`, `--spacing-touch`, `--spacing-touch-sm`) inside the `:root` pseudo-class.
  * Added semantic variables for Deep Navy, Saffron Gold, and Demo Info states (`--navy`, `--navy-light`, `--gold-light`, `--info`, `--info-border`, `--info-foreground`).
  * Extended Tailwind v4 using `@theme inline` with CSS properties: `--color-navy`, `--color-navy-light`, `--color-gold`, `--color-gold-light`, `--color-surface-info`, `--color-border-info`, `--color-text-info`.
  * Added hardware-accelerated animations `.animate-fade-in` and `.animate-slide-up` under `@layer utilities`.

---

### [2026-05-21 17:50:00 +05:30] — Stage 4: Component Fixes Implementation

* **[MODIFY]** [src/routes/__root.tsx](file:///d:/ziya/TNVS/src/routes/__root.tsx)
  * Removed `LenisProvider` imports and wrappers.
  * Added a lightweight React `useEffect` scroll restoration to top on route change.

* **[DELETE]** [src/components/LenisProvider.tsx](file:///d:/ziya/TNVS/src/components/LenisProvider.tsx)
  * Deleted the unused scroll framework file to optimize main-thread scrolling performance.

* **[MODIFY]** [src/routes/membership.tsx](file:///d:/ziya/TNVS/src/routes/membership.tsx)
  * Expanded `DISTRICTS` to include all 38 districts of Tamil Nadu.
  * Configured the select options to render bilingually (`Tamil / English`) based on the active language state, while preserving standard form data keys.
  * Corrected select container tags.

* **[MODIFY]** [src/components/DemoModeBanner.tsx](file:///d:/ziya/TNVS/src/components/DemoModeBanner.tsx)
  * Restyled banner to a premium blue information prompt using semantic `--color-surface-info`, `--color-border-info`, and `--color-text-info` variables.
  * Swapped the `AlertTriangle` warning icon with the standard Lucide `Info` icon.
  * Standardized notices and headings bilingually using `useLanguage()`.

* **[MODIFY]** [src/routes/dashboard.tsx](file:///d:/ziya/TNVS/src/routes/dashboard.tsx)
  * Replaced hardcoded navy brand hex codes `#06225C` in the Hero Special Offer banner, referral progress bar, and loan modal header with semantic token class utilities (`bg-navy`, `from-navy`, `via-navy`, `to-navy`).

* **[MODIFY]** [src/routes/index.tsx](file:///d:/ziya/TNVS/src/routes/index.tsx)
  * Cleaned up heavy Framer Motion scroll hooks (`useScroll`, `useTransform`, `useSpring`, `scrollYProgress`) from the homepage hero component.
  * Substituted decorative motion tags in the hero content and emblem block with standard HTML tags styled with GPU-accelerated animations (`animate-slide-up` and `animate-fade-in`).

* **[MODIFY]** [src/components/ScrollReveal.tsx](file:///d:/ziya/TNVS/src/components/ScrollReveal.tsx)
  * Refactored global `<ScrollReveal>` component to execute as a pure, high-performance CSS-only wrapper.
  * Eliminated all Framer Motion bindings, intersection observer events, and scroll calculation overhead, replacing them with standard elements using hardware-accelerated CSS animations, optimization-testing all sub-views at once.
