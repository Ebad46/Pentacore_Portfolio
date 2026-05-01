# Footer background: dotted world map — kaise lagta hai?

Reference jaisa footer jisme **dark navy background** ke upar **halftone / dotted world map** dikhe aur **halka glow** feel ho, wo aksar yeh cheezein combine karke banta hai.

## Ye “vector animation” hai?

**Zaroori nahi.**

- **Zyada common:** ek **SVG ya PNG** (dotted map) jo footer ke **peeche layer** par hai — kabhi-kabhi bilkul static hota hai.
- **Glow** aksar **design se** aata hai: map ke dots **background se thode zyada bright** (cyan/blue tint) hon to glow jaisa lagta hai.
- **Animation** optional hoti hai: agar ho to aksar **simple CSS** (`opacity`, `filter`, `transform`) — poora map path-by-path animate karna kam common hai.
- **Heavy animation** (Lottie, complex SVG animate) tab use hoti hai jab client ne explicitly motion maangi ho.

## Glow kyun dikhta hai?

Static image par bhi ye techniques glow enhance karti hain:

| Technique | Effect |
|-----------|--------|
| Map ki **opacity** ~0.15–0.35 | Background blend, soft look |
| **Radial gradient** overlay (blue/cyan) | Center ya edges par “light pool” |
| **`filter: drop-shadow()`** ya **`blur()`** halke layer par | Soft halo |
| **`mix-blend-mode: screen` / `plus-lighter`** | Dots ko “light” jaisa dikhana |
| **CSS `@keyframes`** se opacity/filter pulse | Slow “breathing” glow (optional) |

Matlab glow = **graphic contrast + CSS**, sirf “SVG animation” ka naam nahi.

## Implementation options (practical)

### 1) Background image (sabse seedha)

- Dotted world map ka **transparent PNG** ya **SVG** export karo (stock sites par “dotted world map svg/png” milta hai).
- Footer ko `position: relative`, andar **absolute** div:

```tsx
<footer className="relative overflow-hidden bg-[#0a1628]">
  <div
    aria-hidden
    className="pointer-events-none absolute inset-0 bg-[url(/world-map-dots.svg)] bg-center bg-no-repeat bg-[length:90%] opacity-25"
  />
  <div className="relative z-10">{/* links, columns */}</div>
</footer>
```

Glow ke liye upar wale div par extra classes try karo: `mix-blend-screen`, ya ek aur layer with `bg-gradient-radial from-cyan-500/20 to-transparent`.

### 2) Pure SVG inline (control zyada)

- Ek hi **SVG** file me world map paths + halftone dot pattern (design tool se).
- React me inline SVG ya `next/image` / `Image` se import.
- **Animate** karna ho to `<animate>` / CSS `animation` sirf **opacity** ya **filter** par — poori geography animate karna zaroori nahi.

### 3) CSS-only faux map (approximate)

- Poora realistic map **CSS se mushkil** hai; reference jaisa dotted map **asset ke bina** replicate karna rarely worth it.
- Production me **SVG/PNG asset** prefer karo.

## Pentacore footer me lagaane ka flow

1. Asset `public/` me rakho, e.g. `public/footer-world-map.svg`.
2. `src/components/layout/Footer.tsx` ke outer `<footer>` ko `relative overflow-hidden` do.
3. Map layer `absolute inset-0`, `pointer-events-none`, `z-0`.
4. Existing content wale wrapper ko `relative z-10`.
5. Glow ke liye **optional** second layer: radial gradient + halka `blur` ya `opacity` animation.

---

**Short answer:** Image me jo map hai wo **aksar ek dotted SVG/PNG background layer** hai; **glow** zyada tar **bright dots + opacity/gradients/filters** se hai. **Vector animation** optional hai — zaroori nahi ke wo ho.
