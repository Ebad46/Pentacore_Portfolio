import DeferredTubesBackground from "@/components/ui/DeferredTubesBackground";
import Noise from "@/components/ui/Noise";

export default function Hero() {
  return (
    <section className="hero-section relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      <DeferredTubesBackground />

      <div className="absolute inset-0 z-[1] overflow-hidden pointer-events-none">
        <div className="absolute top-[10%] left-[10%] w-[40vw] h-[40vw] max-w-[600px] max-h-[600px] bg-blue-600/10 rounded-full blur-[120px] mix-blend-screen opacity-50 motion-safe:animate-pulse" style={{ animationDuration: "8s" }} />
        <div className="absolute bottom-[10%] right-[10%] w-[30vw] h-[30vw] max-w-[500px] max-h-[500px] bg-purple-600/10 rounded-full blur-[100px] mix-blend-screen opacity-50 motion-safe:animate-pulse" style={{ animationDuration: "6s" }} />
        <Noise />
      </div>

      <div className="container mx-auto px-6 max-w-6xl relative z-10 flex flex-col items-center text-center mt-10 md:mt-0">
        <div className="flex flex-col items-center w-full">
          <div className="mb-6 md:mb-8">
            <span className="px-4 py-2 rounded-full border border-white/10 bg-black/40 text-xs md:text-sm font-medium uppercase tracking-widest text-white/80 backdrop-blur-xl shadow-lg">
              Engineering Digital Excellence
            </span>
          </div>

          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-6xl font-bold tracking-tighter mb-6 md:mb-8 leading-[1.05] max-w-5xl">
            BUILD SMARTER DIGITAL SOLUTIONS,<br />
            <span className="hero-heading-accent text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-300 to-white">
              AUTOMATE WHAT SLOW YOU DOWN.
            </span><br />

          </h1>

          <p className="text-base sm:text-lg md:text-xl text-white/60 max-w-2xl mx-auto mb-8 md:mb-10 leading-relaxed font-light">
            We design and develop digital products, mobile applications and AI-powered workflows that help businesses operate more efficiently and turn ambitious ideas into working solutions.
          </p>
          <a
            href="#work"
            className="inline-flex items-center justify-center rounded-full border border-white/80 bg-white px-7 py-4 text-base font-semibold text-zinc-950 shadow-[0_0_30px_rgba(255,255,255,0.18)] transition-colors hover:bg-blue-100 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-blue-400/60"
          >
            Explore Our Work
          </a>
        </div>
      </div>

      <div className="absolute bottom-5 left-1/2 -translate-x-1/2 z-10 flex-col items-center gap-2 pointer-events-none hidden md:flex">
        <span className="text-[10px] uppercase tracking-widest text-white/40">Scroll</span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-white/40 to-transparent" />
      </div>
    </section>
  );
}
