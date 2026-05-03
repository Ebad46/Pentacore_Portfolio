"use client";

import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";

const testimonials = [
  {
    name: "Michael Johnson",
    image: "https://images.ebadprince49.workers.dev/michel.png",
    quote:
      "Pentacore transformed our business with their exceptional web development services. Their team was professional, responsive, and delivered beyond our expectations.",
    stars: 5,
  },
  {
    name: "Sarah Williams",
    image: "https://images.ebadprince49.workers.dev/sara.png",
    quote:
      "Working with Pentacore was a game-changer for our startup. Their mobile app development expertise helped us launch our product ahead of schedule with outstanding quality.",
    stars: 5,
  },
  {
    name: "David Chen",
    image: "https://images.ebadprince49.workers.dev/david.png",
    quote:
      "The UI/UX design team at Pentacore completely revamped our user interface, resulting in a 40% increase in user engagement. Highly recommended!",
    stars: 5,
  },
  {
    name: "Jennifer Taylor",
    image: "https://images.ebadprince49.workers.dev/jen.png",
    quote:
      "We've worked with several development agencies in the past, but none have matched the level of expertise and dedication that Pentacore brings to the table.",
    stars: 4,
  },
  {
    name: "Robert Garcia",
    image: "https://images.ebadprince49.workers.dev/robert.png",
    quote:
      "The AI solutions provided by Pentacore have streamlined our operations and significantly reduced costs. Their team's technical knowledge is truly impressive.",
    stars: 5,
  },
];

export default function HomeReviews() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState(1);

  const active = testimonials[activeIndex];

  const stepTo = (nextIndex: number) => {
    if (nextIndex === activeIndex) return;
    setDirection(nextIndex > activeIndex ? 1 : -1);
    setActiveIndex(nextIndex);
  };

  const next = () => {
    setDirection(1);
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prev = () => {
    setDirection(-1);
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const dots = useMemo(() => testimonials.map((_, i) => i), []);

  return (
    <section id="home-reviews" className="py-20 md:py-24 bg-[#0b0e14] border-t border-white/[0.08]">
      <div className="container mx-auto px-6 max-w-5xl">
        <h2 className="text-center text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-white">
          What Our Great Customers Say
        </h2>
        <p className="mt-3 text-center text-sm sm:text-base text-white/55">Use arrows to switch reviews.</p>

        <div className="mt-8 hidden sm:grid sm:grid-cols-[auto_1fr_auto] items-center gap-3 sm:gap-4">
          <button
            type="button"
            onClick={prev}
            className="h-10 w-10 sm:h-11 sm:w-11 rounded-full border border-white/20 bg-white/5 text-white/80 hover:text-white hover:border-white/40 transition focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400/40"
            aria-label="Previous review"
          >
            <span className="mx-auto block text-lg leading-none">‹</span>
          </button>

          <div
            className="w-full text-left rounded-2xl border border-white/[0.08] bg-[#0f141c]/90 p-6 sm:p-8 md:p-10 shadow-xl shadow-black/35 transition hover:border-white/[0.16]"
          >
          <div className="relative min-h-[180px] sm:min-h-[150px]">
            <AnimatePresence mode="wait" initial={false}>
              <motion.blockquote
                key={activeIndex}
                initial={{ opacity: 0, x: direction > 0 ? 22 : -22 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: direction > 0 ? -22 : 22 }}
                transition={{ duration: 1.08, ease: "easeOut" }}
                className="absolute inset-0"
              >
                <div className="flex items-center gap-3 sm:gap-4">
                  <div className="h-12 w-12 sm:h-14 sm:w-14 overflow-hidden rounded-full ring-1 ring-white/20 bg-white/5">
                    <Image
                      src={active.image}
                      alt={active.name}
                      width={56}
                      height={56}
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="text-lg sm:text-xl font-semibold text-white">{active.name}</h3>
                    <p className="mt-1 text-sm tracking-widest text-amber-400/90" aria-label={`${active.stars} out of 5 stars`}>
                      {"⭐".repeat(active.stars)}
                      <span className="text-white/25">{"☆".repeat(5 - active.stars)}</span>
                    </p>
                  </div>
                </div>
                <p className="mt-5 text-base sm:text-lg leading-relaxed text-white/80">{active.quote}</p>
              </motion.blockquote>
            </AnimatePresence>
          </div>
          </div>

          <button
            type="button"
            onClick={next}
            className="h-10 w-10 sm:h-11 sm:w-11 rounded-full border border-white/20 bg-white/5 text-white/80 hover:text-white hover:border-white/40 transition focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400/40"
            aria-label="Next review"
          >
            <span className="mx-auto block text-lg leading-none">›</span>
          </button>
        </div>

        <div className="mt-8 sm:hidden">
          <div className="w-full text-left rounded-2xl border border-white/[0.08] bg-[#0f141c]/90 p-5 shadow-xl shadow-black/35 transition hover:border-white/[0.16]">
            <div className="relative min-h-[190px]">
              <AnimatePresence mode="wait" initial={false}>
                <motion.blockquote
                  key={`mobile-${activeIndex}`}
                  initial={{ opacity: 0, x: direction > 0 ? 18 : -18 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: direction > 0 ? -18 : 18 }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                  className="absolute inset-0"
                >
                  <div className="flex items-center gap-3">
                    <div className="h-11 w-11 overflow-hidden rounded-full ring-1 ring-white/20 bg-white/5">
                      <Image
                        src={active.image}
                        alt={active.name}
                        width={44}
                        height={44}
                        className="h-full w-full object-cover"
                      />
                    </div>
                    <div>
                      <h3 className="text-base font-semibold text-white">{active.name}</h3>
                      <p className="mt-1 text-xs tracking-widest text-amber-400/90" aria-label={`${active.stars} out of 5 stars`}>
                        {"⭐".repeat(active.stars)}
                        <span className="text-white/25">{"☆".repeat(5 - active.stars)}</span>
                      </p>
                    </div>
                  </div>
                  <p className="mt-4 text-sm leading-relaxed text-white/80">{active.quote}</p>
                </motion.blockquote>
              </AnimatePresence>
            </div>
          </div>

          <div className="mt-4 flex items-center justify-center gap-3">
            <button
              type="button"
              onClick={prev}
              className="h-10 w-10 rounded-full border border-white/20 bg-white/5 text-white/80 hover:text-white hover:border-white/40 transition focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400/40"
              aria-label="Previous review"
            >
              <span className="mx-auto block text-lg leading-none">‹</span>
            </button>
            <button
              type="button"
              onClick={next}
              className="h-10 w-10 rounded-full border border-white/20 bg-white/5 text-white/80 hover:text-white hover:border-white/40 transition focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400/40"
              aria-label="Next review"
            >
              <span className="mx-auto block text-lg leading-none">›</span>
            </button>
          </div>
        </div>

        <div className="mt-6 flex items-center justify-center gap-2.5">
          {dots.map((i) => {
            const isActive = i === activeIndex;
            return (
              <button
                key={i}
                type="button"
                aria-label={`Show review ${i + 1}`}
                onClick={() => stepTo(i)}
                className={`h-2.5 rounded-full transition-all duration-200 ${
                  isActive ? "w-7 bg-cyan-300" : "w-2.5 bg-white/30 hover:bg-white/50"
                }`}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
}
