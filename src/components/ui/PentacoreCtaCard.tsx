import Link from "next/link";
import Image from "next/image";

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
    <div className="relative pt-9 md:pt-50">
      <div
        aria-hidden="true"
        className="pointer-events-none select-none absolute inset-x-0 top-1 md:top-0 z-20 text-center text-[16vw] md:text-[15vw] font-extrabold tracking-tight leading-none"
      >
        <span className="inline-flex items-center bg-gradient-to-b from-white/[0.22] via-cyan-200/[0.12] to-transparent bg-clip-text text-transparent drop-shadow-[0_0_22px_rgba(56,189,248,0.12)]">
          <span>Pentac</span>
          <span className="mx-[0.000001em] inline-flex h-[0.75em] w-[0.75em] overflow-hidden  translate-y-[0.1em]">
            <Image
              src="https://images.ebadprince49.workers.dev/Logo.png"
              alt="o"
              width={96}
              height={96}
              className="h-full w-full object-contain"
            />
          </span>
          <span>re</span>
        </span>
      </div>

      <div className="relative z-30 rounded-[2rem] overflow-hidden border border-white/20 bg-gradient-to-r from-indigo-500/80 via-sky-500/70 to-emerald-400/70 p-8 md:p-12">
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
    </div>
  );
}
