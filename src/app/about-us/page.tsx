 "use client";

import { useEffect, useRef, useState } from "react";
import PrivacyHero from "@/components/sections/PrivacyHero";
import CTA from "@/components/sections/CTA";
import HomeReviews from "@/components/sections/HomeReviews";

function CountUp({
  end,
  suffix = "",
  duration = 1400,
}: {
  end: number;
  suffix?: string;
  duration?: number;
}) {
  const [value, setValue] = useState(0);
  const [hasStarted, setHasStarted] = useState(false);
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const node = ref.current;
    if (!node || hasStarted) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setHasStarted(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [hasStarted]);

  useEffect(() => {
    if (!hasStarted) return;

    let startTime: number | null = null;
    let frameId = 0;

    const step = (time: number) => {
      if (startTime === null) startTime = time;
      const progress = Math.min((time - startTime) / duration, 1);
      setValue(Math.round(end * progress));

      if (progress < 1) {
        frameId = requestAnimationFrame(step);
      }
    };

    frameId = requestAnimationFrame(step);
    return () => cancelAnimationFrame(frameId);
  }, [hasStarted, end, duration]);

  return (
    <span ref={ref}>
      {value.toLocaleString()}
      {suffix}
    </span>
  );
}

export default function AboutPage() {
  const imagePaths = {
    vision:
      "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1200&q=80",
    engineering: "https://images.ebadprince49.workers.dev/engi.png",
    innovation: "https://images.ebadprince49.workers.dev/inovate.png",
    iteration: "https://images.ebadprince49.workers.dev/itrate.png",
  };

  const stats = [
    { icon: "star", end: 98, suffix: "%", label: "Customer Satisfaction" },
    { icon: "doc", end: 150, suffix: "+", label: "Successful Projects" },
    { icon: "users", end: 100000, suffix: "+", label: "Users Served" },
    { icon: "happy", end: 40, suffix: "+", label: "Happy Clients" },
  ];

  return (
    <main className="relative flex min-h-screen flex-col overflow-x-clip bg-black">
      <PrivacyHero
        hideEyebrow
        titleTop="ABOUT"
        titleBottom="US"/>

      <section className="relative overflow-hidden bg-black py-14 md:py-20">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,#1d4ed833,transparent_55%)]" />
        <div className="container relative z-10 mx-auto max-w-7xl px-6">
          <div className="mx-auto max-w-5xl text-center">
            <h1 className="mt-5 text-4xl font-semibold leading-tight text-white sm:text-5xl md:text-6xl lg:text-7xl">
              Building polished, scalable products with modern frontend precision.
            </h1>
            <div className="mx-auto mt-6 max-w-4xl text-base leading-relaxed text-white/70 sm:text-lg md:text-xl">
              <p>
                We build responsive websites, scalable mobile apps, and robust backend systems that reflect your bold vision and earn customer trust.
              </p>
            </div>
          </div>

          <div className="mt-10 grid gap-4 sm:grid-cols-3">
            <div className="rounded-[28px] border border-white/10 bg-white/5 p-6 text-left shadow-[0_18px_45px_rgba(15,23,42,0.45)] backdrop-blur-xl transition-transform duration-300 hover:-translate-y-1 hover:border-cyan-300/40">
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-cyan-300">Responsive UI</p>
              <p className="mt-4 text-base leading-relaxed text-white/80">
                Interfaces designed to adapt seamlessly across mobile, tablet, and desktop with modern accessibility and performance practices.
              </p>
            </div>
            <div className="rounded-[28px] border border-white/10 bg-white/5 p-6 text-left shadow-[0_18px_45px_rgba(15,23,42,0.45)] backdrop-blur-xl transition-transform duration-300 hover:-translate-y-1 hover:border-cyan-300/40">
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-cyan-300">Modern Engineering</p>
              <p className="mt-4 text-base leading-relaxed text-white/80">
                Clean, maintainable code and reliable deploy pipelines that keep your product fast, secure, and future-proof.
              </p>
            </div>
            <div className="rounded-[28px] border border-white/10 bg-white/5 p-6 text-left shadow-[0_18px_45px_rgba(15,23,42,0.45)] backdrop-blur-xl transition-transform duration-300 hover:-translate-y-1 hover:border-cyan-300/40">
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-cyan-300">Growth Focus</p>
              <p className="mt-4 text-base leading-relaxed text-white/80">
                We build products with measurable business impact, from conversion-driven design to intelligent data workflows.
              </p>
            </div>
          </div>

          <div className="mt-16 rounded-[26px] border-2 border-cyan-400/70 bg-gradient-to-b from-[#161d33] to-[#121a30] p-7 shadow-[0_0_0_1px_rgba(34,211,238,0.15),0_0_35px_rgba(34,211,238,0.1)]">
            <div className="grid gap-7 sm:grid-cols-2 lg:grid-cols-4">
              {stats.map((item) => {
                return (
                  <div key={item.label} className="text-center">
                    <div className="mx-auto flex h-10 w-10 items-center justify-center text-3xl leading-none text-cyan-400/85">
                      {item.icon === "star" && "☆"}
                      {item.icon === "doc" && "📄"}
                      {item.icon === "users" && "👥"}
                      {item.icon === "happy" && "☺"}
                    </div>
                    <p className="mt-3 text-5xl font-bold leading-none text-indigo-400">
                      <CountUp end={item.end} suffix={item.suffix} />
                    </p>
                    <p className="mt-2 text-sm font-medium text-white/85">
                      {item.label}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="mt-16 rounded-3xl border border-cyan-400/20 bg-[#09162a]/80 p-6 sm:p-8 md:p-10">
            <div className="grid items-center gap-8 lg:grid-cols-2 lg:gap-10">
              <div>
                <h2 className="text-3xl font-bold leading-tight text-white sm:text-4xl">
                  From Vision <span className="text-cyan-400">To Impact</span>
                </h2>
                <p className="mt-6 text-lg leading-relaxed text-white/80">
                  Founded in 2025, Pentacore was built on a clear mission - to
                  deliver AI-powered custom solutions that transform how
                  businesses operate and grow. From scalable backend systems to
                  intuitive web experiences, high-performance mobile apps, and
                  intelligent AI integrations, we design technology around your
                  unique goals.
                </p>
                <p className="mt-6 text-lg leading-relaxed text-white/80">
                  What started as a passionate idea has quickly grown into a
                  trusted digital partner for businesses across industries. Our
                  edge lies in blending technical precision with creative
                  problem-solving, ensuring every solution is future-ready.
                </p>
              </div>
              <div className="space-y-4">
                <div className="rounded-[28px] border border-cyan-300/40 bg-white/5 p-3">
                  <img
                    src={imagePaths.vision}
                    alt="Vision to impact"
                    className="h-full min-h-[280px] w-full rounded-2xl border border-dashed border-cyan-300/35 object-cover"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="mt-10">
            <div className="flex items-center justify-between">
              <h1 className="text-4xl font-bold text-cyan-400">What We Believe In</h1>
            </div>

             <div className="mt-6 w-full px-4 sm:px-6 lg:px-0">
      {/* Mobile: Single column stack */}
      {/* Tablet/Desktop: Grid layout */}
      <div className="grid gap-4 md:gap-5 lg:gap-4 grid-cols-1 lg:grid-cols-[1fr_0.95fr]">
        
        {/* Main Card - Engineering */}
        <div className="relative overflow-hidden rounded-2xl sm:rounded-3xl border border-cyan-300/30 bg-[#061327] shadow-[0_12px_28px_rgba(0,0,0,0.45)] sm:shadow-[0_16px_38px_rgba(0,0,0,0.5)]">
          {/* Image Section */}
          <div className="flex h-48 sm:h-64 lg:h-74 items-center justify-center bg-gradient-to-br from-[#5e73d7] via-[#4f87d1] to-[#35bfd5]">
            <img
              src={imagePaths.engineering}
              alt="Best-in-class engineering"
              className="h-40 w-40 sm:h-48 sm:w-48 lg:h-54 lg:w-54 object-contain drop-shadow-[0_0_10px_rgba(255,255,255,0.45)]"
            />
          </div>
 
          {/* Text Section */}
          <div className="border-t border-cyan-300/20 bg-[#050f1e] p-3 sm:p-4 lg:p-4">
            <p className="text-xl sm:text-2xl font-bold text-white leading-tight">
              Best-in-Class Engineering
            </p>
            <p className="mt-2 sm:mt-2 text-base sm:text-lg lg:text-[19px] leading-relaxed text-white/80">
              We write clean, maintainable, and scalable code - optimized for speed,
              security, and performance.
            </p>
          </div>
 
          {/* Corner accent */}
          <div className="absolute bottom-0 right-0 h-3 w-10 sm:h-4 sm:w-12 rounded-tl-lg sm:rounded-tl-xl border-l border-t border-cyan-300/35 bg-[#05101e]" />
        </div>
 
        {/* Right Column - Stack on mobile, 2 cards on tablet+ */}
        <div className="space-y-4 md:space-y-5">
          
          {/* Card 2 - Innovation */}
          <div className="relative overflow-hidden rounded-xl sm:rounded-2xl border border-cyan-300/30 bg-[#061327] shadow-[0_12px_28px_rgba(0,0,0,0.45)]">
            {/* Grid layout: stacked on mobile, side-by-side on tablet+ */}
            <div className="grid grid-cols-1 sm:grid-cols-[240px_1fr] lg:grid-cols-[300px_1fr] min-h-auto sm:min-h-[106px] gap-0">
              {/* Image Container */}
              <div className="flex h-40 sm:h-auto sm:min-h-[106px] items-center justify-center bg-gradient-to-br from-[#59d6c8] to-[#4ca8c0]">
                <img
                  src={imagePaths.innovation}
                  alt="Innovation with purpose"
                  className="h-32 w-32 sm:h-40 sm:w-40 lg:h-52 lg:w-52 object-contain drop-shadow-[0_0_10px_rgba(255,255,255,0.4)]"
                />
              </div>
 
              {/* Text Container */}
              <div className="bg-[#050f1e] p-3 sm:p-3 lg:p-4 flex flex-col justify-center">
                <p className="text-lg sm:text-xl lg:text-2xl font-bold text-white leading-tight">
                  Innovation with Purpose
                </p>
                <p className="mt-1 sm:mt-2 text-sm sm:text-base lg:text-[19px] leading-relaxed text-white/85">
                  We use cutting-edge tools and frameworks not for buzzwords, but to
                  deliver measurable outcomes.
                </p>
              </div>
            </div>
 
            {/* Corner accent */}
            <div className="absolute bottom-0 right-0 h-3 w-8 sm:h-4 sm:w-10 rounded-tl-lg sm:rounded-tl-xl border-l border-t border-cyan-300/30 bg-[#05101e]" />
          </div>
 
          {/* Card 3 - Iteration */}
          <div className="relative overflow-hidden rounded-xl sm:rounded-2xl border border-cyan-300/30 bg-[#061327] shadow-[0_12px_28px_rgba(0,0,0,0.45)]">
            {/* Grid layout: stacked on mobile, side-by-side on tablet+ */}
            <div className="grid grid-cols-1 sm:grid-cols-[240px_1fr] lg:grid-cols-[300px_1fr] min-h-auto sm:min-h-[106px] gap-0">
              {/* Image Container */}
              <div className="flex h-40 sm:h-auto sm:min-h-[106px] items-center justify-center bg-gradient-to-br from-[#5f74d9] to-[#4a95d1]">
                <img
                  src={imagePaths.iteration}
                  alt="Iteration always"
                  className="h-32 w-32 sm:h-40 sm:w-40 lg:h-52 lg:w-52 object-contain drop-shadow-[0_0_10px_rgba(255,255,255,0.4)]"
                />
              </div>
 
              {/* Text Container */}
              <div className="bg-[#050f1e] p-3 sm:p-3 lg:p-4 flex flex-col justify-center">
                <p className="text-lg sm:text-xl lg:text-2xl font-bold text-white leading-tight">
                  Iteration, Always
                </p>
                <p className="mt-1 sm:mt-2 text-sm sm:text-base lg:text-[19px] leading-relaxed text-white/75">
                  Your product should evolve as users do. We monitor and refine
                  continuously after launch.
                </p>
              </div>
            </div>
 
            {/* Corner accent */}
            <div className="absolute bottom-0 right-0 h-3 w-8 sm:h-4 sm:w-10 rounded-tl-lg sm:rounded-tl-xl border-l border-t border-cyan-300/30 bg-[#05101e]" />
          </div>
        </div>
      </div>
    </div>
          </div>
        </div>
      </section>

      <CTA />

      <div className="container mx-auto mb-24 max-w-7xl px-6">
        <div className="rounded-2xl border border-white/10 bg-[#0b0e14]">
          <HomeReviews />
        </div>
      </div>
    </main>
  );
}
