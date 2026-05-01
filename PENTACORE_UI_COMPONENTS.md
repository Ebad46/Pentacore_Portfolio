# Pentacore Solutions Reusable UI Components

Use this guide to add a consistent Pentacore visual section on any page.

## 1) Reusable Wrapper Component

Create file: `src/components/ui/PentacoreSectionShell.tsx`

```tsx
import { ReactNode } from "react";

type PentacoreSectionShellProps = {
  children: ReactNode;
  className?: string;
};

export default function PentacoreSectionShell({
  children,
  className = "",
}: PentacoreSectionShellProps) {
  return (
    <section className={`relative overflow-hidden rounded-[2rem] border border-violet-400/25 bg-[#06051a] p-6 md:p-10 shadow-[0_0_60px_rgba(124,58,237,0.2)] ${className}`}>
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_40%,rgba(59,130,246,0.25),transparent_45%),radial-gradient(circle_at_70%_60%,rgba(167,139,250,0.22),transparent_45%)]" />
      <div className="relative z-10">{children}</div>
    </section>
  );
}
```

---

## 2) Reusable Pentacore CTA Card (like screenshot)

Create file: `src/components/ui/PentacoreCtaCard.tsx`

```tsx
import Link from "next/link";

type PentacoreCtaCardProps = {
  title?: string;
  primaryHref?: string;
  secondaryHref?: string;
};

export default function PentacoreCtaCard({
  title = "Ready to start working together with our team?",
  primaryHref = "/contact-us",
  secondaryHref = "/#services",
}: PentacoreCtaCardProps) {
  return (
    <div className="relative rounded-[2rem] overflow-hidden border border-white/20 bg-gradient-to-r from-indigo-500/80 via-sky-500/70 to-emerald-400/70 p-8 md:p-12">
      <div className="pointer-events-none absolute inset-0 bg-black/15" />

      <div className="relative z-10">
        <h2 className="text-3xl md:text-5xl font-bold leading-tight text-white max-w-3xl">
          {title}
        </h2>

        <div className="mt-8 flex flex-wrap gap-3">
          <Link
            href={primaryHref}
            className="rounded-full bg-cyan-400 px-6 py-3 text-sm font-semibold text-slate-950 hover:bg-cyan-300 transition"
          >
            Contact Us
          </Link>
          <Link
            href={secondaryHref}
            className="rounded-full bg-white/90 px-6 py-3 text-sm font-semibold text-slate-900 hover:bg-white transition"
          >
            Our Services
          </Link>
        </div>
      </div>
    </div>
  );
}
```

---

## 3) Brand Watermark Text (A3-style large background text)

Create file: `src/components/ui/PentacoreWatermark.tsx`

```tsx
type PentacoreWatermarkProps = {
  text?: string;
};

export default function PentacoreWatermark({
  text = "Pentacore Solutions",
}: PentacoreWatermarkProps) {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none select-none absolute inset-x-0 top-0 text-center text-[12vw] font-bold tracking-tight text-white/[0.04] leading-none"
    >
      {text}
    </div>
  );
}
```

---

## 4) Use on Any Screen

Example in any page (e.g. `src/app/contact-us/page.tsx`):

```tsx
import PentacoreSectionShell from "@/components/ui/PentacoreSectionShell";
import PentacoreWatermark from "@/components/ui/PentacoreWatermark";
import PentacoreCtaCard from "@/components/ui/PentacoreCtaCard";

export default function ExamplePage() {
  return (
    <main className="bg-black min-h-screen py-16">
      <div className="container mx-auto px-6 max-w-7xl relative">
        <PentacoreWatermark />

        <PentacoreSectionShell className="mt-20">
          <PentacoreCtaCard />
        </PentacoreSectionShell>
      </div>
    </main>
  );
}
```

---

## 5) Quick Notes

- Keep wrapper + gradients same on all pages for brand consistency.
- Change only title and button links per page.
- If needed, make dark/light variants using props (`variant="dark"` etc).
- You can place these components in Home, About, Contact, Services, Portfolio, and Footer CTA blocks.

