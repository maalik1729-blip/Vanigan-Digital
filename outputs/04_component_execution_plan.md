# Header Changes

- **Current Issue**: The page header contains nested navigations that look cluttered on desktop and are poorly integrated into the overall page wrapper.
- **Redesign Goal**: Create a single, responsive, glassmorphic header pinned to the top of the viewport.
- **UI Changes**:
  - Apply `sticky top-0 z-50 backdrop-blur-md bg-white/75 border-b border-slate-200/60` to the header element in `__root.tsx`.
  - Place a premium vector SVG logo of the association on the left.
- **Interaction Improvements**: Link elements transition color on hover (`hover:text-primary transition-all duration-300`). Active links display a smooth bottom sliding bar.
- **Responsive Behavior**: Collapses into a clean drawer triggered by a standard humburger menu on screen widths below `md` (768px).

---

# Sidebar Changes

- **Current Issue**: The administrative dashboard features a heavy, dark-colored navigation sidebar that creates high visual contrast against the main content, making it look outdated.
- **Redesign Goal**: Implement a sleek, low-impact light sidebar that aligns with standard modern dashboards (e.g. Linear/Notion).
- **UI Changes**:
  - Set background to `bg-slate-50`, with a right border: `border-r border-slate-200/60`.
  - Navigation links utilize a clean icon-and-label layout, with the active route highlighted by a soft primary navy background pill (`bg-primary/5 text-primary`).
- **Responsive Behavior**: Completely slides out of view on mobile viewports, accessible via a top navigation menu drawer.

---

# Navigation Improvements

- **Redesign Goal**: Streamline navigation steps between different user modes (public voter, applicant, administrator).
- **UI Changes**:
  - Add active focus styles: `focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2`.
  - Ensure all navigation links utilize distinct `id` attributes to simplify testing workflows.

---

# Dashboard Card Changes

- **Current Issue**: Metric cards on `/dashboard` are identical in style and shape, making it difficult to distinguish between core statistics and secondary counts.
- **Redesign Goal**: Implement a responsive card grid with clear size classifications.
- **UI Changes**:
  - Primary Metric Card: Height set to `min-h-[160px]`, spans 2 grid slots on large viewports, utilizes a deep blue background with gold accents.
  - Secondary Card: Styled in light gray, clean layout displaying count metrics alongside simple up/down indicators.
- **Interaction Improvements**: Subtle hover scaling: `hover:-translate-y-1 hover:shadow-sm transition-transform ease-out duration-300`.

---

# Table Improvements

- **Current Issue**: The constituency breakdown table on `/wings` lacks responsive row hovers and visual sorting highlights.
- **Redesign Goal**: Implement a high-readability interactive data table.
- **UI Changes**:
  - Add sorting icon indicators beside interactive column headers.
  - Voter count numerical columns utilize `font-mono tabular-nums text-right` to ensure decimal columns align perfectly.
  - Inject interactive stacked gender ratio bars (navy for male, rose for female) directly into each constituency row.
- **Responsive Behavior**: On mobile layouts, hide the wide table columns and render simplified, highly legible information cards displaying constituency names and total counts.

---

# Form Improvements

- **Current Issue**: The 4-digit security PIN validation on `/membership` uses separate single-digit input boxes that do not support standard auto-focus or keyboard copy-paste.
- **Redesign Goal**: Create a friction-free PIN input experience.
- **UI Changes**:
  - Render a single `<input type="text" pattern="[0-9]*" maxLength={4} />` with zero opacity positioned directly over four beautiful, styled placeholder slot boxes.
- **Interaction Improvements**:
  - When the user types, the placeholder boxes display the entered numbers sequentially, with the active digit showing a pulsing blue border.
  - Native mobile keyboards open automatically, and standard clipboard paste events are supported out of the box.

---

# Button System Improvements

- **Redesign Goal**: Establish a consistent hierarchy for buttons across all pages.
- **UI Changes**:
  - Primary Button: `bg-primary hover:bg-primary/95 text-white px-5 py-2.5 rounded-lg text-xs md:text-sm font-semibold transition-all duration-300 min-h-[44px]`.
  - Secondary Button: `bg-white border border-slate-200 text-slate-700 hover:bg-slate-50 px-5 py-2.5 rounded-lg text-xs md:text-sm font-semibold transition-all duration-300 min-h-[44px]`.

---

# Modal Improvements

- **Current Issue**: Floating modals (such as voter detail profiles or chat expansion boxes) pop up aggressively without animation, blocking parent page scrolling.
- **Redesign Goal**: Implement smooth, non-intrusive dialog overlays.
- **UI Changes**:
  - Backdrop: `fixed inset-0 bg-slate-900/40 backdrop-blur-xs z-50`.
  - Modal Box: Center-aligned, utilizing a smooth scale-up entry animation (Framer Motion: `initial={{ scale: 0.95, opacity: 0 }}`).
- **Interaction Improvements**: Clicking the overlay backdrop or pressing the `Escape` key automatically closes the active modal dialog.

---

# Empty State Improvements

- **Current Issue**: When voter lookups or division filters return empty lists, the interface simply displays blank white screens with basic system text.
- **Redesign Goal**: Provide helpful, localized empty-state cards.
- **UI Changes**:
  - Render a clean slate card featuring a muted icon, a supportive message in both Tamil and English, and a clear button to clear active filters.

---

# Error State Improvements

- **Redesign Goal**: Display clear, localized, and actionable validation notifications.
- **UI Changes**:
  - Input boxes containing invalid data display a soft red border and trigger a subtle shake animation. Helpful error messages are rendered below in red, detailing the exact formatting requirements.

---

# Responsive Design Tasks

1. **Category Pill Wrapping**: Category filters on mobile layouts should wrap naturally or operate as a side-scrolling container with fade indicators, preventing page width overflow.
2. **Form Layout Adjustments**: Convert multi-column forms into structured single-column lists on mobile viewports.

---

# Mobile Interaction Improvements

- Ensure all buttons, links, and filtering pills adhere to a minimum tap height of **44px** to improve mobile usability.
- Avoid relying on desktop hover triggers for showing tooltips; implement clean, tap-to-reveal states instead.

---

# Frontend Handoff Notes

- **Tailwind Config Extensions**:
  - Configure modern HSL color tokens directly in `tailwind.config.js`:
    ```javascript
    colors: {
      primary: 'hsl(215, 85%, 25%)',
      gold: 'hsl(38, 92%, 50%)',
    }
    ```
- **Framer Motion Presets**: All transitions utilize a standard spring curve:
  ```javascript
  transition: { type: "spring", stiffness: 300, damping: 30 }
  ```

---

# Component Priority Order

| Priority | Component | Page | Impact |
|---|---|---|---|
| **1** | Single PIN Input Box | `/membership` | Resolves critical input friction on the card validation step. |
| **2** | Translucent Header App Bar | `__root.tsx` | Implements a consistent navigation shell across the entire portal. |
| **3** | Constituency Data Table | `/wings` | Enhances readability of dense voter data lists. |
| **4** | Dynamic Stat Card Grid | `/dashboard` | Organizes administrative metrics clearly. |
| **5** | Mobile Bottom Dialog Sheets | `/assistant` | Optimizes mobile chat assistant layout. |
