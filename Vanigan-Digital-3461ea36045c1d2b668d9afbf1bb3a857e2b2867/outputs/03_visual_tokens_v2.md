# 03 — Design Tokens + Visual Direction (v2 Run)

## Token System
Visual tokens are encapsulated as CSS custom properties in the `:root` and `.dark` selectors of `src/styles.css` to act as the single source of truth for all brand and structural styling:

```css
:root {
  /* Colors */
  --primary:            oklch(0.30 0.14 255);       /* Navy Accent */
  --primary-foreground: oklch(0.985 0.012 85);
  
  --secondary:            oklch(0.95 0.02 245);
  --secondary-foreground: oklch(0.28 0.06 255);
  
  --gold:            oklch(0.78 0.12 85);           /* Gold Accent */
  --gold-foreground: oklch(0.14 0.020 252);
  
  --navy:            oklch(0.30 0.14 255);          /* Brand Navy alias */
  --navy-light:      oklch(0.40 0.14 255);
  --gold-light:      oklch(0.85 0.10 85);
  
  /* Demo Banner Tokens */
  --info:            oklch(0.95 0.03 240);          /* Blue 50-equivalent */
  --info-border:     oklch(0.85 0.08 240);          /* Blue 200-equivalent */
  --info-foreground: oklch(0.30 0.12 245);          /* Blue 800-equivalent */

  /* Structural Radii */
  --radius:          0.5rem;
  --radius-input:    0.625rem;                      /* 10px */
  --radius-card:     0.75rem;                       /* 12px */
  --radius-modal:    1rem;                          /* 16px */
  --radius-pill:     9999px;

  /* Interactive Spacing (Touch Targets) */
  --spacing-touch:    48px;                         /* Primary */
  --spacing-touch-sm: 44px;                         /* Secondary */
}
```

---

## Tailwind v4 @theme Extension
We extend the inline theme in `src/styles.css` using the `@theme inline` directive to expose custom CSS custom properties as Tailwind utility utility classes:

```css
@theme inline {
  --radius-sm: calc(var(--radius) - 4px);
  --radius-md: calc(var(--radius) - 2px);
  --radius-lg: var(--radius);
  --radius-xl: calc(var(--radius) + 4px);
  
  --color-background: var(--background);
  --color-foreground: var(--foreground);
  --color-card: var(--card);
  --color-card-foreground: var(--card-foreground);
  
  --color-primary: var(--primary);
  --color-primary-foreground: var(--primary-foreground);
  --color-secondary: var(--secondary);
  --color-secondary-foreground: var(--secondary-foreground);
  
  /* Brand Tokens */
  --color-navy: var(--navy);
  --color-navy-light: var(--navy-light);
  --color-gold: var(--gold);
  --color-gold-light: var(--gold-light);
  
  /* Info / Demo Banner colors */
  --color-surface-info: var(--info);
  --color-border-info: var(--info-border);
  --color-text-info: var(--info-foreground);
}
```

---

## Component Class Specifications

1. **Utility Bar / Announcement Strip**
   * **Container**: `bg-primary text-white border-b border-primary-foreground/5 py-2`
   * **Typography**: `text-xs font-semibold font-tamil`
   * **Link states**: `hover:text-gold transition`

2. **Navigation Bar**
   * **Container**: `fixed top-0 left-0 right-0 z-50 border-b backdrop-blur-md bg-white/75`
   * **Desktop Items**: `px-3 py-2 text-sm font-semibold transition-colors text-slate-500 hover:text-primary hover:bg-slate-50/70 rounded-lg min-h-[44px]`
   * **Mobile Toggle**: `p-2 rounded-lg text-slate-500 hover:text-primary hover:bg-slate-100 min-h-[44px] min-w-[44px]`

3. **Hero Section**
   * **Container**: `relative overflow-hidden border-b border-border py-14 lg:py-20 bg-card`
   * **Headline**: `font-display text-4xl sm:text-5xl lg:text-6xl font-semibold leading-[1.06] text-ink`
   * **Subtext**: `font-tamil text-lg sm:text-xl text-foreground/80 mt-4 leading-snug`

4. **Stats Row**
   * **Container**: `grid grid-cols-2 md:grid-cols-4 gap-px bg-border rounded-2xl overflow-hidden paper p-0`
   * **Card Wrapper**: `bg-card p-6 text-center`
   * **Stat Number**: `font-display text-4xl md:text-5xl font-semibold text-primary tabular-nums`

5. **Service Card**
   * **Container**: `card-base card-interactive p-6 flex flex-col justify-between h-full`
   * **Title**: `font-display text-xl font-bold text-slate-800`
   * **Body**: `text-sm text-slate-500 mt-2 leading-relaxed`

6. **Wing Card**
   * **Container**: `card-base card-interactive p-5 flex items-center justify-between`
   * **Badge text**: `text-sm font-semibold text-primary`

7. **Registration Stepper Indicator**
   * **Stepper Bar**: `flex items-center justify-between max-w-lg mx-auto mb-8`
   * **Step Bubble**: `w-9 h-9 rounded-full flex items-center justify-center text-sm font-semibold border-2 transition-all duration-300`
   * **Active**: `border-primary bg-primary text-primary-foreground font-bold shadow-sm`
   * **Completed**: `border-emerald-500 bg-emerald-500 text-white`
   * **Inactive**: `border-slate-200 bg-slate-50 text-slate-400`

8. **Form Input Field**
   * **Field input**: `input-base font-medium text-slate-800 focus:border-primary focus:ring-4 focus:ring-primary/10 transition-all duration-200`

9. **Primary Button**
   * **Button**: `btn-primary px-6 py-3 font-semibold text-sm rounded-xl min-h-[48px]`

10. **Secondary Button**
    * **Button**: `btn-secondary px-6 py-3 font-semibold text-sm rounded-xl border border-border min-h-[48px]`

11. **Dashboard Member Card**
    * **Card Body**: `relative overflow-hidden rounded-3xl bg-linear-to-r from-primary to-slate-900 border border-blue-900/50 shadow-2xl p-6 md:p-8 select-none text-left`

12. **Demo Mode Banner**
    * **Banner Box**: `flex items-start gap-3 bg-surface-info border border-border-info rounded-xl p-4 text-sm text-text-info shadow-xs animate-fade-in`
    * **Banner Icon**: `w-5 h-5 shrink-0 mt-0.5 text-text-info`

13. **Footer**
    * **Container**: `bg-slate-950 text-slate-400 border-t border-slate-900 py-12`

---

## What Replaces Framer Motion
To optimize scroll performance on cellular connections, global scroll fades and structural transition nodes are replaced with hardware-accelerated CSS animations:
- **`animate-fade-in`**: Executes a standard keyframe slide-up opacity transition.
- **`animate-slide-up`**: Handles a larger vertical translation entry.
- Decorative scroll triggers in ` wings.tsx` and `services.tsx` are refactored to standard `div` containers using these native classes, completely removing runtime JS animation computation.

---

## Font Strategy
- **Tamil Render Font**: Google Fonts `Noto Sans Tamil` (sans-serif) and `Noto Serif Tamil` (serif) are loaded in the styles sheet.
- **Display Setting**: Configure `display=swap` on the import parameter to ensure immediate layout rendering with system-level font fallbacks during asset fetch:
  ```css
  @import url('https://fonts.googleapis.com/css2?family=Noto+Serif+Tamil:wght@400;500;600&family=Noto+Sans+Tamil:wght@400;500;600&family=Inter:wght@400;500;600;700&display=swap');
  ```
- **Preload Hints**: Handled via browser pre-connect statements inside route HTML files to optimize resource request speed.
