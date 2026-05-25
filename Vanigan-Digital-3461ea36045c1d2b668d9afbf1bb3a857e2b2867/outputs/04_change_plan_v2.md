# 04 — Component Fixes + Execution Plan (v2 Run)

This document chronicles the implementation and code changes executed in **Stage 4 (Component Fixes)** of the TNVS UI Redesign Pipeline. All updates were completed strictly on the frontend (within the `src/` folder) and configured to be robust, bilingual, and accessible.

---

## Completed Improvements

### 1. CSS Design Tokens Integration
* **Files Modified**: [dashboard.tsx](file:///d:/ziya/TNVS/src/routes/dashboard.tsx)
* **Changes**: Checked and updated hardcoded navy color values `#06225C` to use semantic visual tokens `--navy` (exposed via the `@theme inline` in `src/styles.css` as `bg-navy`, `from-navy`, `via-navy`, `to-navy`).
  * Removed `bg-[#06225C]` and `via-[#06225C]` in the premium hero promo banner.
  * Replaced `to-[#06225C]` in the referral progress bar.
  * Replaced `from-[#06225C]` in the simple loan modal header.

### 2. Complete 38-District selector in Registration Form
* **Files Modified**: [membership.tsx](file:///d:/ziya/TNVS/src/routes/membership.tsx)
* **Changes**: Replaced the original limited 8-district hardcoded array with a complete bilingual 38-district database representing all official administrative districts in Tamil Nadu in both Tamil and English (e.g., `அரியலூர் / Ariyalur` up to `விருதுநகர் / Virudhunagar`).
* **UX Improvement**: Dropdown displays districts adapted to the user's active language choice (e.g., `சென்னை / Chennai` in Tamil mode or `Chennai / சென்னை` in English mode). Selection stores the correct administrative key `"Chennai"`.

### 3. Restructured DemoModeBanner component
* **Files Modified**: [DemoModeBanner.tsx](file:///d:/ziya/TNVS/src/components/DemoModeBanner.tsx)
* **Changes**: Transformed the amber triangle warning banner into a premium blue information box.
  * Replaced the Lucide `AlertTriangle` icon with a standard `Info` icon.
  * Styled the container with semantic CSS custom properties: `bg-surface-info` (`--info`), `border-border-info` (`--info-border`), and `text-text-info` (`--info-foreground`).
  * Translated all notices, warning headings, and labels bilingually using the `useLanguage` hook.

### 4. Strip Lenis Smooth Scrolling
* **Files Modified**: [__root.tsx](file:///d:/ziya/TNVS/src/routes/__root.tsx)
* **Files Deleted**: [LenisProvider.tsx](file:///d:/ziya/TNVS/src/components/LenisProvider.tsx)
* **Changes**: Completely stripped the heavy `Lenis` smooth scrolling wrapper, reducing runtime JS event listeners and frame stutters.
* **Fallbacks**: Introduced standard immediate scroll-to-top transition on routing location path changes inside the `RootInner` render loop:
  ```typescript
  const location = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);
  ```

### 5. Reduce Framer Motion Overhead
* **Files Modified**: 
  * [index.tsx](file:///d:/ziya/TNVS/src/routes/index.tsx)
  * [ScrollReveal.tsx](file:///d:/ziya/TNVS/src/components/ScrollReveal.tsx)
* **Changes**: Replaced high-overhead parallax and entry scroll reveals with lightweight CSS transitions.
  * Replaced hero text and emblem parallax animations in `index.tsx` with standard container tags utilizing hardware-accelerated `.animate-slide-up` and `.animate-fade-in` CSS animations.
  * Completely refactored the global `<ScrollReveal>` component to be a pure CSS-only wrapper. Substituted Framer Motion's `whileInView`, intersection observer bindings, and state checks with immediate, snappy, and zero-stutter native CSS animations, optimizing scrolling performance across all wing and service routes at once.

---

## Modified / Created / Deleted File List

1. **[MODIFY]** [styles.css](file:///d:/ziya/TNVS/src/styles.css) (Design tokens and animations - completed in Stage 3)
2. **[MODIFY]** [__root.tsx](file:///d:/ziya/TNVS/src/routes/__root.tsx) (Removed LenisProvider, added route scroll fallback)
3. **[MODIFY]** [membership.tsx](file:///d:/ziya/TNVS/src/routes/membership.tsx) (Added 38 administrative districts bilingually)
4. **[MODIFY]** [DemoModeBanner.tsx](file:///d:/ziya/TNVS/src/components/DemoModeBanner.tsx) (Restyled banner using blue semantic info variables and bilingual headers)
5. **[MODIFY]** [dashboard.tsx](file:///d:/ziya/TNVS/src/routes/dashboard.tsx) (Applied semantic navy variables, cleaned up hex codes)
6. **[MODIFY]** [index.tsx](file:///d:/ziya/TNVS/src/routes/index.tsx) (Replaced Framer Motion hero entries with native CSS transitions)
7. **[MODIFY]** [ScrollReveal.tsx](file:///d:/ziya/TNVS/src/components/ScrollReveal.tsx) (Refactored global ScrollReveal to use high-performance, GPU-accelerated CSS animations)
8. **[DELETE]** [LenisProvider.tsx](file:///d:/ziya/TNVS/src/components/LenisProvider.tsx) (Removed scroll framework file)
