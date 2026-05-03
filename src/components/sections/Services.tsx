"use client";

import { motion, Variants } from "framer-motion";
import Image from "next/image";

const services = [
  {
    id: "web",
    category: "Web Development",
    date: "Sep 1, 2025",
    title: "The Future of Web Development: Trends to Watch in 2023",
    image: "https://images.ebadprince49.workers.dev/web.jfif",
  },
  {
    id: "app",
    category: "Mobile Development",
    date: "Apr 28, 2025",
    title: "Cross-Platform vs Native Mobile Development: Making the Right Choice",
    image: "https://images.ebadprince49.workers.dev/mob.jpeg",
  },
  {
    id: "ai",
    category: "AI Integration",
    date: "Sep 1, 2025",
    title: "AI-Powered Products: Practical Automation for Modern Businesses",
    image: "https://images.ebadprince49.workers.dev/ai.jfif",
  },
];

const processSteps = [
  {
    id: "strategize",
    label: "Strategize",
    icon: (
      <svg viewBox="0 0 24 24" className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="8" />
        <path d="M12 8v4l2.5 2.5" />
      </svg>
    ),
    left: "6%",
    top: "66%",
  },
  {
    id: "design",
    label: "Design",
    icon: (
      <svg viewBox="0 0 24 24" className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 20h4l10-10-4-4L4 16v4z" />
        <path d="M13 7l4 4" />
      </svg>
    ),
    left: "22%",
    top: "66%",
  },
  {
    id: "develop",
    label: "Develop",
    icon: (
      <svg viewBox="0 0 24 24" className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M8 8l-4 4 4 4" />
        <path d="M16 8l4 4-4 4" />
      </svg>
    ),
    left: "38%",
    top: "40%",
  },
  {
    id: "test",
    label: "Test",
    icon: (
      <svg viewBox="0 0 24 24" className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M8 3h8" />
        <path d="M10 3v4l-4 6a5 5 0 0 0 4 8h4a5 5 0 0 0 4-8l-4-6V3" />
      </svg>
    ),
    left: "54%",
    top: "12%",
  },
  {
    id: "launch",
    label: "Launch",
    icon: (
      <svg viewBox="0 0 24 24" className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M5 15c4-8 8-10 14-10-1 6-3 10-11 14l-3-4z" />
        <path d="M10 14l4-4" />
      </svg>
    ),
    left: "70%",
    top: "1%",
  },
  {
    id: "iterate",
    label: "Iterate",
    icon: (
      <svg viewBox="0 0 24 24" className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 12a8 8 0 0 1 14-5" />
        <path d="M18 3v4h-4" />
        <path d="M20 12a8 8 0 0 1-14 5" />
        <path d="M6 21v-4h4" />
      </svg>
    ),
    left: "86%",
    top: "-1%",
  },
];

export default function Services() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const cardVariants: Variants = {
    hidden: { opacity: 0, y: 30, scale: 0.95 },
    visible: { 
      opacity: 1, 
      y: 0, 
      scale: 1,
      transition: { type: "spring" as const, stiffness: 50, damping: 20 }
    }
  };

  return (
    <section id="services" className="py-24 md:py-32 relative bg-zinc-950 border-t border-white/5 ">
      <div className="container mx-auto px-6 max-w-7xl relative z-10 -mt-16">
        <div className="mb-16 md:mb-24 lg:w-2/3">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 tracking-tight leading-[1.1]">
              Built for your next<br className="hidden sm:block" /> stage of growth
            </h2>
            <p className="text-lg sm:text-xl text-white/60 font-light max-w-2xl leading-relaxed">
              Get the legitimacy of a market leader, while staying lean and agile. We bring design, development, and intelligent automation together in one cohesive unit.
            </p>
          </motion.div>
        </div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
        >
          {services.map((service) => (
            <motion.div
              key={service.id}
              variants={cardVariants}
              whileHover={{ y: -8 }}
              className="group"
            >
              <article className="overflow-hidden rounded-[22px] border border-white/[0.08] bg-[#070f1f] transition-all duration-300 group-hover:border-white/20 group-hover:shadow-[0_18px_40px_rgba(0,0,0,0.45)]">
                <div className="relative aspect-[16/9] w-full overflow-hidden bg-[#0b1424]">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#061121]/70 via-transparent to-transparent" />
                </div>

                <div className="p-5 sm:p-6 md:p-7">
                  <div className="flex items-center justify-between gap-4 text-white/90">
                    <p className="flex items-center gap-2 text-base sm:text-lg font-medium">
                      <span className="h-3 w-3 rounded-full bg-gradient-to-r from-fuchsia-400 to-amber-300" />
                      {service.category}
                    </p>
                    <span className="text-2xl leading-none text-white/55">-</span>
                    <p className="text-base sm:text-lg font-medium text-white/90">{service.date}</p>
                  </div>

                  <h3 className="mt-5 text-[1.95rem] sm:text-[2.15rem] leading-tight tracking-tight font-semibold text-white">
                    {service.title}
                  </h3>
                </div>
              </article>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
          className="mt-14 md:mt-20 rounded-3xl border border-white/10 bg-gradient-to-br from-[#071226] via-[#07192f] to-[#070d18] p-7 md:p-12 overflow-hidden relative"
        >
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute -top-16 left-[10%] w-56 h-56 bg-blue-500/15 blur-[100px]" />
            <div className="absolute top-8 right-[8%] w-56 h-56 bg-emerald-400/10 blur-[100px]" />
            <div className="absolute bottom-0 left-1/3 w-40 h-40 bg-sky-400/10 blur-[90px]" />
          </div>

          <div className="relative z-10 text-center mx-auto max-w-4xl">
            <p className="text-[11px] sm:text-xs tracking-[0.28em] text-white/55 font-semibold uppercase mb-4">Our Process</p>
            <h3 className="text-2xl sm:text-3xl md:text-5xl font-bold tracking-tight leading-tight mb-5">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-cyan-200 to-emerald-200">
                HOW WE BUILD SOFTWARE THAT DELIVERS RESULTS
              </span>
            </h3>
            <p className="text-white/65 text-sm sm:text-base leading-relaxed max-w-3xl mx-auto">
              Driven by innovation and excellence. Our process is simple yet powerful, delivering robust and highly effective results every time.
            </p>
          </div>

          <div className="relative z-10 mt-12 md:mt-14">
            <div className="md:hidden relative overflow-x-auto pb-3">
              <div className="relative min-w-[640px] h-[130px] px-3">
                <svg
                  className="absolute inset-0 w-full h-full"
                  viewBox="0 0 640 130"
                  preserveAspectRatio="none"
                  aria-hidden="true"
                >
                  <defs>
                    <linearGradient id="processNeonPathMobile" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.75" />
                      <stop offset="55%" stopColor="#38bdf8" stopOpacity="0.95" />
                      <stop offset="100%" stopColor="#34d399" stopOpacity="0.95" />
                    </linearGradient>
                  </defs>
                  <path
                    d="M16 106 C118 132, 206 96, 306 56 C402 18, 520 10, 624 34"
                    stroke="url(#processNeonPathMobile)"
                    strokeWidth="3"
                    fill="none"
                    strokeLinecap="round"
                  />
                </svg>

                {processSteps.map((step, index) => {
                  const mobileLeft = 7 + index * 17.5;
                  const mobileTop = 69 - index * 8.5;
                  return (
                    <motion.div
                      key={step.id}
                      className="absolute -translate-x-1/2 -translate-y-1/2 text-center"
                      style={{ left: `${mobileLeft}%`, top: `${mobileTop}%` }}
                      initial={{ opacity: 0, y: 12 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: index * 0.06 }}
                      whileHover={{ y: -3 }}
                    >
                      <div className="mx-auto w-10 h-10 rounded-xl border border-white/20 bg-[#081020]/90 flex items-center justify-center shadow-[0_0_20px_rgba(56,189,248,0.2)]">
                        <span className="text-sky-100">{step.icon}</span>
                      </div>
                      <p className="mt-1.5 text-xs text-white/85 font-medium">{step.label}</p>
                    </motion.div>
                  );
                })}
              </div>
            </div>

            <div className="hidden md:block relative h-[280px] lg:h-[320px]">
              <svg
                className="absolute inset-0 w-full h-full"
                viewBox="0 0 1200 360"
                preserveAspectRatio="none"
                aria-hidden="true"
              >
                <defs>
                  <linearGradient id="processNeonPath" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.75" />
                    <stop offset="55%" stopColor="#38bdf8" stopOpacity="0.95" />
                    <stop offset="100%" stopColor="#34d399" stopOpacity="0.95" />
                  </linearGradient>
                  <filter id="lineGlow" x="-30%" y="-30%" width="160%" height="160%">
                    <feGaussianBlur stdDeviation="7" result="blur" />
                    <feMerge>
                      <feMergeNode in="blur" />
                      <feMergeNode in="SourceGraphic" />
                    </feMerge>
                  </filter>
                </defs>
                <path
                  d="M40 290 C238 358, 410 232, 602 126 C788 28, 998 24, 1160 96"
                  stroke="url(#processNeonPath)"
                  strokeWidth="4"
                  fill="none"
                  filter="url(#lineGlow)"
                  strokeLinecap="round"
                />
                <motion.path
                  d="M40 290 C238 358, 410 232, 602 126 C788 28, 998 24, 1160 96"
                  stroke="rgba(186,230,253,0.95)"
                  strokeWidth="1.8"
                  fill="none"
                  strokeLinecap="round"
                  initial={{ pathLength: 0 }}
                  whileInView={{ pathLength: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.5, ease: "easeOut" }}
                />
              </svg>

              <motion.div
                aria-hidden="true"
                className="absolute top-[43%] left-[-18%] w-[40%] h-[2px] bg-gradient-to-r from-transparent via-cyan-300/80 to-transparent blur-[1px]"
                animate={{ left: ["-18%", "100%"] }}
                transition={{ duration: 4.2, repeat: Infinity, ease: "linear" }}
              />

              {processSteps.map((step, index) => {
                return (
                  <motion.div
                    key={step.id}
                    className="absolute -translate-x-1/2 -translate-y-1/2 text-center group"
                    style={{ left: step.left, top: step.top }}
                    initial={{ opacity: 0, y: 14 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.45, delay: index * 0.08 }}
                    whileHover={{ y: -6 }}
                  >
                    <div className="mx-auto w-12 h-12 lg:w-14 lg:h-14 rounded-xl lg:rounded-2xl border border-white/20 bg-[#081020]/85 backdrop-blur-md flex items-center justify-center shadow-[0_0_30px_rgba(56,189,248,0.2)] group-hover:shadow-[0_0_38px_rgba(52,211,153,0.26)] transition-all duration-300">
                      <span className="text-sky-100 group-hover:text-emerald-200 transition-colors duration-300">{step.icon}</span>
                    </div>
                    <p className="mt-2.5 text-xs lg:text-sm text-white/85 group-hover:text-white transition-colors duration-300 font-medium">
                      {step.label}
                    </p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
