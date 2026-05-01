"use client";

import Image from "next/image";

export default function CTA() {
  return (
    <section id="contact" className="py-14 md:py-7 relative bg-black overflow-hidden border-t border-white/10">
      {/* Deep abstract glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[80vw] max-w-3xl max-h-3xl bg-gradient-to-br from-blue-600/10 via-transparent to-purple-600/10 blur-[100px] rounded-full pointer-events-none" />
      
      {/* Grid lines */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none" />

      <div className="container mx-auto px 2 max-w-9xl relative z-10 text-center">
        <div
          aria-hidden="true"
          className="mb-8 pointer-events-none select-none text-center text-[19vw] md:text-[15vw] font-extrabold tracking-tight leading-none"
        >
          <span className="inline-flex items-center bg-gradient-to-b from-white/[0.22] via-cyan-200/[0.12] to-transparent bg-clip-text text-transparent drop-shadow-[0_0_22px_rgba(56,189,248,0.12)]">
            <span>Pentac</span>
            <span className="mx-[0.000001em] inline-flex h-[0.75em] w-[0.75em] overflow-hidden translate-y-[0.1em]">
              <Image
                src="/Logo.png"
                alt="o"
                width={96}
                height={96}
                className="h-full w-full object-contain"
              />
            </span>
            <span>re</span>
          </span>
        </div>

      </div>
    </section>
  );
}
