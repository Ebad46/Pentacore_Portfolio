import Image from "next/image";

const services = [
  {
    id: "web",
    badge: "Popular",
    title: "Web Development",
    description:
      "Custom, high-performance websites built with modern technologies. Fully responsive, SEO-friendly, and conversion-focused.",
    price: "$899",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=900&q=85",
    hoverImage: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=900&q=85",
    imageAlt: "Modern website analytics dashboard displayed on a laptop",
  },
  {
    id: "app",
    badge: "Trending",
    title: "App Development",
    description:
      "Native and cross-platform mobile applications for iOS & Android. Beautiful UI, smooth performance, and scalable architecture.",
    price: "$1,499",
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=900&q=85",
    hoverImage: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=900&q=85",
    imageAlt: "Smartphone displaying a polished mobile application interface",
  },
  {
    id: "automation",
    badge: "New",
    title: "AI Automation",
    description:
      "Intelligent automation solutions powered by AI. Streamline workflows, reduce manual work, and boost business efficiency.",
    price: "$1,299",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=900&q=85",
    hoverImage: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=900&q=85",
    imageAlt: "Artificial intelligence visualization with connected workflow data",
  },
  {
    id: "integration",
    badge: "AI",
    title: "AI Integration",
    description:
      "Integrate powerful AI capabilities into your existing products, workflows, and business systems to create smarter experiences.",
    price: "$999",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=900&q=85",
    hoverImage: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=900&q=85",
    imageAlt: "Server infrastructure representing connected business systems",
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
  return (
    <section
      id="services"
      className="services-section relative border-t border-white/5 bg-zinc-950 py-20 sm:py-24 md:py-28"
    >
      <div className="container relative z-10 mx-auto max-w-7xl px-6">
        <div className="mb-10 max-w-3xl sm:mb-14 md:mb-16">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-zinc-400">
            What we do
          </p>
          <h2 className="mb-5 text-4xl font-semibold leading-[1.08] tracking-tight text-white sm:text-5xl md:text-6xl">
            Technology built for what&apos;s next.
          </h2>
          <p className="max-w-2xl text-base leading-relaxed text-zinc-400 sm:text-lg">
            From digital products to intelligent workflows, we turn ambitious
            ideas into reliable solutions that move your business forward.
          </p>
        </div>

        <div className="services-grid grid grid-cols-1 items-stretch md:grid-cols-2 xl:grid-cols-4">
          {services.map((service) => (
            <article id={`service-${service.id}`} key={service.id} className="service-card flex h-full flex-col">
              <div className="service-image relative aspect-[4/3] w-full overflow-hidden">
                <Image
                  src={service.image}
                  alt={service.imageAlt}
                  fill
                  sizes="(max-width: 767px) 100vw, (max-width: 1279px) 50vw, 25vw"
                  className="service-image-layer service-image-primary object-cover"
                />
                <Image
                  src={service.hoverImage}
                  alt=""
                  aria-hidden="true"
                  fill
                  sizes="(max-width: 767px) 100vw, (max-width: 1279px) 50vw, 25vw"
                  className="service-image-layer service-image-secondary object-cover"
                />
                <span className="service-badge absolute bottom-4 left-4">
                  {service.badge}
                </span>
              </div>

              <div className="service-card-content flex flex-1 flex-col">
                <h3 className="mb-2 text-xl font-semibold tracking-tight text-white sm:text-[1.35rem]">
                  {service.title}
                </h3>
                <p className="service-description text-sm leading-5 text-zinc-400">
                  {service.description}
                </p>

                <div className="mt-auto pt-4">
                  <p className="text-sm text-zinc-400">
                    Starting from{" "}
                    <span className="font-semibold text-white">{service.price}</span>
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="services-process-panel mt-14 md:mt-20 rounded-3xl border border-white/10 bg-gradient-to-br from-[#071226] via-[#07192f] to-[#070d18] p-7 md:p-12 overflow-hidden relative">
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
                    <div
                      key={step.id}
                      className="absolute -translate-x-1/2 -translate-y-1/2 text-center"
                      style={{ left: `${mobileLeft}%`, top: `${mobileTop}%` }}
                    >
                      <div className="mx-auto w-10 h-10 rounded-xl border border-white/20 bg-[#081020]/90 flex items-center justify-center shadow-[0_0_20px_rgba(56,189,248,0.2)]">
                        <span className="text-sky-100">{step.icon}</span>
                      </div>
                      <p className="mt-1.5 text-xs text-white/85 font-medium">{step.label}</p>
                    </div>
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
                <path
                  d="M40 290 C238 358, 410 232, 602 126 C788 28, 998 24, 1160 96"
                  stroke="rgba(186,230,253,0.95)"
                  strokeWidth="1.8"
                  fill="none"
                  strokeLinecap="round"
                  pathLength={1}
                  className="process-path-draw"
                />
              </svg>

              <div
                aria-hidden="true"
                className="process-glow-sweep absolute top-[43%] left-[-18%] w-[40%] h-[2px] bg-gradient-to-r from-transparent via-cyan-300/80 to-transparent blur-[1px]"
              />

              {processSteps.map((step, index) => {
                return (
                  <div
                    key={step.id}
                    className="process-step absolute -translate-x-1/2 -translate-y-1/2 text-center group"
                    style={{
                      left: step.left,
                      top: step.top,
                      animationDelay: `${index * 0.08}s`,
                    }}
                  >
                    <div className="mx-auto w-12 h-12 lg:w-14 lg:h-14 rounded-xl lg:rounded-2xl border border-white/20 bg-[#081020]/85 backdrop-blur-md flex items-center justify-center shadow-[0_0_30px_rgba(56,189,248,0.2)] group-hover:shadow-[0_0_38px_rgba(52,211,153,0.26)] transition-all duration-300">
                      <span className="text-sky-100 group-hover:text-emerald-200 transition-colors duration-300">{step.icon}</span>
                    </div>
                    <p className="mt-2.5 text-xs lg:text-sm text-white/85 group-hover:text-white transition-colors duration-300 font-medium">
                      {step.label}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
