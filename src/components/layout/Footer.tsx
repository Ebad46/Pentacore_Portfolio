import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-white/10 bg-gradient-to-b from-black via-[#050a14] to-black pt-20 pb-10">
      <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden" aria-hidden>
        {/* back glows — stay behind map */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_90%_60%_at_50%_30%,rgba(34,211,238,0.12),transparent_65%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_50%_at_70%_60%,rgba(99,102,241,0.08),transparent_60%)]" />
        {/* world map: size desktop (md+) — mobile par CSS se hidden */}
        <div
          className="footer-world-map-wrap pointer-events-none absolute left-0 right-0 top-0 z-[1] h-[min(50vh,480px)] min-h-[300px] items-center justify-center px-4 md:h-[min(55vh,560px)] md:min-h-[340px] lg:h-[min(62vh,680px)] lg:min-h-[400px] isolate"
        >
          <img
            src="/footer-world-map.svg"
            alt=""
            width={1280}
            height={720}
            decoding="async"
            className="mx-auto h-full max-h-full w-full max-w-[min(100%,1400px)] object-contain object-center opacity-[0.45] lg:max-w-[min(95%vw,1600px)]"
            style={{
              filter: "brightness(0.22)",
            }}
          />
        </div>
        <div className="absolute inset-0 z-[2] bg-[radial-gradient(circle_at_50%_35%,rgba(56,189,248,0.05),transparent_50%)] opacity-60 max-lg:opacity-30 motion-safe:animate-[pulse_9s_ease-in-out_infinite]" />
        {/* fade content from bottom only — was full overlay hiding map on small screens */}
        <div className="absolute bottom-0 left-0 right-0 z-[2] h-[45%] min-h-[140px] bg-gradient-to-t from-black via-black/50 to-transparent md:via-black/40" />
      </div>

      <div className="container relative z-10 mx-auto px-6 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="lg:col-span-2">
            <Link href="/" className="relative z-10 flex items-center gap-3 group">
          <div className="flex items-center gap-3 rounded-full border border-cyan-300/20 bg-slate-950/90 px-3 py-2 shadow-[0_0_20px_rgba(34,211,238,0.18)] transition-all duration-300 hover:border-cyan-200/40">
            <div className="relative flex h-12 w-12 items-center justify-center overflow-hidden rounded-2xl bg-slate-950/95 ring-1 ring-cyan-300/15 shadow-[0_0_18px_rgba(56,189,248,0.16)]">
              <Image src="/Logo.png" alt="Pentacore logo" width={44} height={44} className="object-contain" />
            </div>
            <div className="flex flex-col leading-tight">
              <span className="text-base font-semibold tracking-[0.24em] text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-sky-400 to-blue-500">
                PENTACORE
              </span>
              <span className="text-[10px] uppercase tracking-[0.32em] text-slate-200/70">
                SOLUTION
              </span>
            </div>
          </div>
        </Link>
           
           
          </div>

          <div>
            <h4 className="font-semibold mb-6 text-lg">Services</h4>
            <ul className="space-y-4 flex flex-col">
              <li><Link href="#services" className="text-white/60 hover:text-white flex items-center gap-1 group">Web Development <ArrowUpRight size={14} className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" /></Link></li>
              <li><Link href="#services" className="text-white/60 hover:text-white flex items-center gap-1 group">App Development <ArrowUpRight size={14} className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" /></Link></li>
              <li><Link href="#services" className="text-white/60 hover:text-white flex items-center gap-1 group">AI Solutions <ArrowUpRight size={14} className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" /></Link></li>
              <li><Link href="#process" className="text-white/60 hover:text-white flex items-center gap-1 group">Our Process <ArrowUpRight size={14} className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" /></Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-6 text-lg">Quick Links</h4>
            <div className="flex flex-col items-start gap-3">
              <a href="tel:+923345226644" className="h-11 px-4 rounded-full border border-white/20 flex items-center gap-3 text-white/70 hover:border-cyan-500 hover:bg-cyan-100 hover:text-black hover:shadow-xl hover:shadow-cyan-500/40 transition-all" aria-label="Phone">
                <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.79 19.79 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.12.9.34 1.78.65 2.62a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.46-1.22a2 2 0 0 1 2.11-.45c.84.31 1.72.53 2.62.65A2 2 0 0 1 22 16.92z" />
                </svg>
                <span className="text-sm font-medium">+92 334 5226644</span>
              </a>
              <a href="https://wa.me/923345226644" className="h-11 px-4 rounded-full border border-white/20 flex items-center gap-3 text-white/70 hover:border-cyan-500 hover:bg-cyan-100 hover:text-black hover:shadow-xl hover:shadow-cyan-500/40 transition-all" aria-label="WhatsApp" target="_blank" rel="noopener noreferrer">
                <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M20.52 3.48A11.78 11.78 0 0 0 12.06 0C5.52 0 .22 5.3.22 11.84c0 2.09.55 4.14 1.59 5.94L0 24l6.4-1.67a11.8 11.8 0 0 0 5.66 1.45h.01c6.53 0 11.84-5.3 11.84-11.84 0-3.16-1.23-6.13-3.39-8.46z" />
                  <path d="M17.19 14.78c-.27-.14-1.62-.8-1.87-.89-.25-.09-.43-.14-.61.14-.18.27-.7.89-.86 1.07-.16.18-.31.2-.58.07-.27-.14-1.14-.42-2.18-1.34-.81-.72-1.35-1.61-1.5-1.88-.16-.27-.02-.42.12-.56.12-.12.27-.31.41-.47.14-.16.18-.27.27-.45.09-.18.05-.34-.02-.47-.07-.14-.61-1.47-.84-2.01-.22-.52-.45-.45-.61-.46h-.52c-.18 0-.47.07-.72.34-.25.27-.95.93-.95 2.27s.97 2.64 1.11 2.82c.14.18 1.9 2.9 4.61 4.07.64.28 1.14.45 1.53.57.64.2 1.22.17 1.68.1.51-.08 1.62-.66 1.85-1.3.23-.64.23-1.18.16-1.3-.07-.11-.25-.18-.52-.32z" />
                </svg>
                <span className="text-sm font-medium">WhatsApp Chat</span>
              </a>
              <a href="mailto:pentacoresolutions6@gmail.com" className="h-11 px-4 rounded-full border border-white/20 flex items-center gap-3 text-white/70 hover:border-cyan-500 hover:bg-cyan-100 hover:text-black hover:shadow-xl hover:shadow-cyan-500/40 transition-all" aria-label="Email">
                <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M4 4h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2z" />
                  <path d="m22 6-10 7L2 6" />
                </svg>
                <span className="text-sm font-medium">pentacoresolutions6@gmail.com</span>
              </a>
              <a href="https://maps.google.com" className="h-11 px-4 rounded-full border border-white/20 flex items-center gap-3 text-white/70 hover:border-cyan-500 hover:bg-cyan-100 hover:text-black hover:shadow-xl hover:shadow-cyan-500/40 transition-all" aria-label="Map" target="_blank" rel="noopener noreferrer">
                <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 1 1 18 0z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
                <span className="text-sm font-medium">Our Location</span>
              </a>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 pt-8 border-t border-white/10 text-sm text-white/40">
          <p>© {new Date().getFullYear()} PentacoreSolution. All rights reserved.</p>
          <div className="flex flex-col items-center gap-3">
            <div className="flex gap-4 text-white/60">
              <a href="https://www.instagram.com/pentacoresolutions6/" className="hover:text-white transition-colors" aria-label="Instagram" target="_blank" rel="noopener noreferrer">
                <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                  <path d="M16 11.37a4 4 0 1 1-1.37-1.37 4 4 0 0 1 1.37 1.37z" />
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                </svg>
              </a>
              <a href="https://www.facebook.com/profile.php?id=61585096258728&sk=directory_basic_info" className="hover:text-white transition-colors" aria-label="Facebook" target="_blank" rel="noopener noreferrer">
                <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor" aria-hidden="true">
                  <path d="M13.5 22v-8h2.7l.4-3h-3.1V9.1c0-.9.3-1.5 1.6-1.5h1.7V5c-.3 0-1.3-.1-2.4-.1-2.4 0-4 1.4-4 4.1V11H8v3h2.4v8h3.1z" />
                </svg>
              </a>
              <a href="https://www.linkedin.com/company/pentacoresolutions/?viewAsMember=true" className="hover:text-white transition-colors" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer">
                <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor" aria-hidden="true">
                  <path d="M4.98 3.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM3 9h4v12H3zM9 9h3.8v1.7h.1c.5-1 1.9-2 3.8-2 4.1 0 4.8 2.7 4.8 6.2V21h-4v-5.6c0-1.3 0-3-1.8-3s-2.1 1.4-2.1 2.9V21H9z" />
                </svg>
              </a>
            </div>
            <div className="flex gap-6">
            <Link href="/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="/terms-and-conditions" className="hover:text-white transition-colors">Terms & Conditions</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
