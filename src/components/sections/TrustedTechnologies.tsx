"use client";

import type { ReactNode } from "react";
import { motion, useReducedMotion } from "framer-motion";

const bg = "#0B0E14";
const headingColor = "#38bdf8";

function SpotMark() {
  return (
    <span className="inline-flex items-center gap-0.5 select-none">
      <span className="text-white font-semibold tracking-tight text-lg sm:text-xl">
        Sp
      </span>
      <span className="relative inline-flex h-[1.1em] w-[1.1em] items-center justify-center shrink-0">
        <svg viewBox="0 0 32 32" className="h-[1em] w-[1em] text-white" aria-hidden>
          <circle cx="16" cy="16" r="14" fill="none" stroke="currentColor" strokeWidth="1.5" />
          <circle cx="16" cy="10" r="2.2" fill="currentColor" />
          <circle cx="10" cy="20" r="2.2" fill="currentColor" />
          <circle cx="22" cy="20" r="2.2" fill="currentColor" />
          <path d="M16 12v4M12.5 18l3 2M19.5 18l-3 2" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
        </svg>
      </span>
      <span className="text-white font-semibold tracking-tight text-lg sm:text-xl">
        t
      </span>
    </span>
  );
}

function LogoMeta() {
  return (
    <span className="inline-flex items-center gap-1.5 text-white" aria-hidden>
      <span className="select-none text-2xl font-light leading-none sm:text-3xl" style={{ fontFamily: "Georgia, 'Times New Roman', serif" }} aria-hidden>
        ∞
      </span>
      <span className="text-lg font-semibold tracking-tight sm:text-xl">Meta</span>
    </span>
  );
}

function LogoNode() {
  return (
    <span className="inline-flex items-center gap-2 text-white" aria-hidden>
      <svg viewBox="0 0 24 28" className="h-6 w-6 shrink-0 sm:h-7 sm:w-7" fill="none" stroke="currentColor" strokeWidth={1.75} strokeLinejoin="round" aria-hidden>
        <polygon points="12,2 22,8 22,20 12,26 2,20 2,8" />
      </svg>
      <span className="font-mono text-base font-medium tracking-tight sm:text-lg">node.js</span>
    </span>
  );
}

function LogoPhp() {
  return (
    <span
      className="text-white font-bold italic text-xl sm:text-2xl tracking-tighter"
      style={{ fontFamily: "ui-sans-serif, system-ui, sans-serif" }}
    >
      php
    </span>
  );
}

function LogoPython() {
  return (
    <span className="inline-flex items-center gap-2.5 text-white" aria-hidden>
      <svg viewBox="0 0 32 32" className="h-7 w-7 shrink-0 sm:h-8 sm:w-8" fill="currentColor" aria-hidden>
        <path d="M15.6 4.2c-4.4 0-4.1 1.9-4.1 1.9v2h4.2v.7H9.8C6.9 8.8 6 10.6 6 13.2v1.9c0 3 2.1 3.5 2.9 3.5h1.8v-1.8c0-2.3 2-4.2 4.3-4.2h4.1c2 0 3.6-1.7 3.6-3.7V8.1c0-2-1.7-3.9-4.1-3.9h-3zm2.1 2.2h1.5c1.1 0 1.9.9 1.9 2v2.4c0 1-.8 1.9-1.9 1.9h-3.8c-1.7 0-3.1 1.4-3.1 3.1v.5H10c-.9 0-1.6-.7-1.6-1.6v-1.5c0-1.3 1.1-2.4 2.4-2.4h6.9V6.4z" />
        <path
          d="M16.4 27.8c4.4 0 4.1-1.9 4.1-1.9v-2H16.3v-.7h5.9c2.9 0 3.8-1.8 3.8-4.4v-1.9c0-3-2.1-3.5-2.9-3.5h-1.8v1.8c0 2.3-2 4.2-4.3 4.2h-4.1c-2 0-3.6 1.7-3.6 3.7v3.8c0 2 1.7 3.9 4.1 3.9h3zm-2.1-2.2h-1.5c-1.1 0-1.9-.9-1.9-2v-2.4c0-1 .8-1.9 1.9-1.9h3.8c1.7 0 3.1-1.4 3.1-3.1v-.5H22c.9 0 1.6.7 1.6 1.6v1.5c0 1.3-1.1 2.4-2.4 2.4h-6.9v3.4z"
          opacity={0.88}
        />
      </svg>
      <span className="text-lg font-medium lowercase tracking-wide sm:text-xl">python</span>
    </span>
  );
}

function LogoReactNative() {
  return (
    <span className="inline-flex items-center gap-2 text-white" aria-hidden>
      <svg viewBox="0 0 24 24" className="h-7 w-7 shrink-0" fill="none" stroke="currentColor" strokeWidth="1.2" aria-hidden>
        <circle cx="12" cy="12" r="2.2" fill="currentColor" stroke="none" />
        <ellipse cx="12" cy="12" rx="10" ry="4" />
        <ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(60 12 12)" />
        <ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(120 12 12)" />
      </svg>
      <span className="whitespace-nowrap text-base font-medium tracking-tight sm:text-lg">React Native</span>
    </span>
  );
}

function LogoNextJs() {
  return (
    <span className="inline-flex items-center gap-2 text-white" aria-hidden>
      <svg viewBox="0 0 32 32" className="h-7 w-7 shrink-0" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinejoin="round" strokeLinecap="round" aria-hidden>
        <path d="M9 23V9l14 14V9" />
      </svg>
      <span className="text-lg font-semibold tracking-tight sm:text-xl">Next.js</span>
    </span>
  );
}

function LogoFigma() {
  return (
    <span className="inline-flex items-center gap-2 text-white" aria-hidden>
      <svg viewBox="0 0 32 48" className="h-9 w-6 shrink-0" fill="currentColor" aria-hidden>
        <circle cx="16" cy="14" r="10" />
        <circle cx="10" cy="30" r="10" />
        <circle cx="22" cy="30" r="10" />
        <circle cx="16" cy="38" r="10" />
      </svg>
      <span className="text-lg font-semibold tracking-tight sm:text-xl">Figma</span>
    </span>
  );
}

function LogoAws() {
  return (
    <span className="inline-flex flex-col items-center text-white" aria-hidden>
      <span className="text-xl font-medium lowercase tracking-wide sm:text-2xl">aws</span>
      <svg className="-mt-0.5 h-2 w-11 text-white/90 sm:w-12" viewBox="0 0 48 8" fill="none" aria-hidden>
        <path d="M2 5c10-3 34-3 46 0" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
      </svg>
    </span>
  );
}

function LogoZapier() {
  return (
    <span className="inline-flex items-center gap-2 text-white" aria-hidden>
      <svg viewBox="0 0 24 24" className="h-6 w-6 shrink-0 sm:h-7 sm:w-7" fill="none" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" strokeLinecap="round" aria-hidden>
        <path d="M13 2 3 14h8l-1 8 10-12h-8l1-8z" />
      </svg>
      <span className="text-lg font-bold tracking-tight sm:text-xl">Zapier</span>
    </span>
  );
}

function LogoShopify() {
  return (
    <span className="inline-flex items-center gap-2 text-white" aria-hidden>
      <svg viewBox="0 0 24 24" className="h-7 w-7 shrink-0" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinejoin="round" aria-hidden>
        <path d="M6 10h12v11a2 2 0 0 1 -2 2H8a2 2 0 0 1 -2 -2V10z" />
        <path d="M9 10V8a3 3 0 0 1 6 0v2" />
      </svg>
      <span className="text-lg font-semibold tracking-tight sm:text-xl">Shopify</span>
    </span>
  );
}

const logos: { id: string; label: string; node: ReactNode }[] = [
  { id: "spot", label: "Spot", node: <SpotMark /> },
  { id: "meta", label: "Meta", node: <LogoMeta /> },
  { id: "node", label: "Node.js", node: <LogoNode /> },
  { id: "php", label: "PHP", node: <LogoPhp /> },
  { id: "python", label: "Python", node: <LogoPython /> },
  { id: "react-native", label: "React Native", node: <LogoReactNative /> },
  { id: "nextjs", label: "Next.js", node: <LogoNextJs /> },
  { id: "figma", label: "Figma", node: <LogoFigma /> },
  { id: "aws", label: "AWS", node: <LogoAws /> },
  { id: "zapier", label: "Zapier", node: <LogoZapier /> },
  { id: "shopify", label: "Shopify", node: <LogoShopify /> },
];

function LogoRow({
  logos: items,
  suffix,
  ariaHidden,
}: {
  logos: typeof logos;
  suffix: string;
  ariaHidden?: boolean;
}) {
  return (
    <ul
      className="flex shrink-0 items-center gap-x-12 sm:gap-x-16 md:gap-x-24"
      aria-hidden={ariaHidden}
    >
      {items.map(({ id, label, node }) => (
        <li
          key={`${id}${suffix}`}
          className="flex items-center opacity-95 [&_svg]:shrink-0"
          aria-label={ariaHidden ? undefined : label}
        >
          {node}
        </li>
      ))}
    </ul>
  );
}

const MARQUEE_DURATION_SEC = 42;

export default function TrustedTechnologies() {
  const reduceMotion = useReducedMotion();

  return (
    <section
      className="relative w-full border-y border-white/[0.06]"
      style={{ backgroundColor: bg }}
      aria-labelledby="trusted-tech-heading"
    >
      <div className="container mx-auto max-w-6xl px-6 pt-10 text-center sm:pt-12 md:pt-14">
        <motion.h2
          id="trusted-tech-heading"
          initial={{ opacity: 0, y: reduceMotion ? 0 : 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
          className="mx-auto max-w-3xl text-lg font-semibold leading-snug tracking-tight sm:text-xl md:text-2xl"
          style={{ color: headingColor }}
        >
          Built With Technologies We Trust
        </motion.h2>
      </div>

      <div className="relative left-1/2 mt-8 w-screen max-w-[100vw] -translate-x-1/2 sm:mt-10">
        <div
          className="pointer-events-none absolute inset-y-0 left-0 z-10 w-12 bg-gradient-to-r sm:w-20"
          style={{ background: `linear-gradient(to right, ${bg}, transparent)` }}
        />
        <div
          className="pointer-events-none absolute inset-y-0 right-0 z-10 w-12 bg-gradient-to-l sm:w-20"
          style={{ background: `linear-gradient(to left, ${bg}, transparent)` }}
        />

        <div className="overflow-hidden py-3 sm:py-4">
          {reduceMotion ? (
            <ul className="mx-auto flex max-w-6xl flex-wrap items-center justify-center gap-x-10 gap-y-6 px-6 sm:gap-x-12">
              {logos.map(({ id, label, node }) => (
                <li key={id} className="flex items-center opacity-95 [&_svg]:shrink-0" aria-label={label}>
                  {node}
                </li>
              ))}
            </ul>
          ) : (
            <motion.div
              className="flex w-max will-change-transform"
              animate={{ x: ["0%", "-50%"] }}
              transition={{
                duration: MARQUEE_DURATION_SEC,
                repeat: Infinity,
                ease: "linear",
              }}
            >
              <LogoRow logos={logos} suffix="" />
              <LogoRow logos={logos} suffix="-dup" ariaHidden />
            </motion.div>
          )}
        </div>
      </div>

      <div className="container mx-auto max-w-6xl px-6 pb-10 sm:pb-12 md:pb-14">
        <div className="h-px w-full bg-white/10" />

        <motion.p
          initial={{ opacity: 0, y: reduceMotion ? 0 : 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45, delay: 0.06, ease: [0.22, 1, 0.36, 1] }}
          className="mx-auto mt-6 max-w-3xl text-center text-sm leading-relaxed text-white/90 sm:mt-8 sm:text-base"
        >
          From AI models to full-stack frameworks, we use technologies that are secure, scalable, and trusted by millions.
        </motion.p>
      </div>
    </section>
  );
}
