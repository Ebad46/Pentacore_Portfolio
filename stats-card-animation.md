# Stats Card Animation (About Us)

Yes, we can animate the stats card section smoothly.

## Recommended Animation Stack

- **Container reveal**: fade + slide-up on scroll
- **Each stat item**: staggered pop-in
- **Number pulse**: subtle scale animation
- **Optional count-up**: 0 se target number tak

---

## 1) Import updates in `src/app/about-us/page.tsx`

Use this import:

```tsx
import { motion } from "framer-motion";
```

---

## 2) Wrap stats card block with motion

Replace current stats wrapper:

```tsx
<div className="mt-16 rounded-[26px] ...">
```

with:

```tsx
<motion.div
  initial={{ opacity: 0, y: 30 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true, amount: 0.25 }}
  transition={{ duration: 0.6, ease: "easeOut" }}
  className="mt-16 rounded-[26px] border-2 border-cyan-400/70 bg-gradient-to-b from-[#161d33] to-[#121a30] p-7 shadow-[0_0_0_1px_rgba(34,211,238,0.15),0_0_35px_rgba(34,211,238,0.1)]"
>
```

And close it with `</motion.div>`.

---

## 3) Animate each stat card item

Inside `stats.map(...)`, replace item wrapper:

```tsx
<div key={item.label} className="text-center">
```

with:

```tsx
<motion.div
  key={item.label}
  className="text-center"
  initial={{ opacity: 0, y: 16, scale: 0.96 }}
  whileInView={{ opacity: 1, y: 0, scale: 1 }}
  viewport={{ once: true, amount: 0.25 }}
  transition={{ duration: 0.4 }}
>
```

and close with `</motion.div>`.

---

## 4) Subtle number pulse animation

Replace number paragraph:

```tsx
<p className="mt-3 text-5xl font-bold leading-none text-indigo-400">
  {item.value}
</p>
```

with:

```tsx
<motion.p
  className="mt-3 text-5xl font-bold leading-none text-indigo-400"
  animate={{ scale: [1, 1.04, 1] }}
  transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
>
  {item.value}
</motion.p>
```

---

## Optional: Count-up numbers

If you want real count-up animation (e.g. `0 -> 98%`), I can add a tiny reusable `CountUp` component and wire all 4 stats.

