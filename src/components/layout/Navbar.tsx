"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import Image from "next/image";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About us", href: "/about-us" },
    // { name: "Process", href: "/#process" },
    { name: "Contact Us", href: "/contact-us" },
  ];

  const sectionNavLinks = navLinks.filter((link) => link.name !== "Home");

  const servicesGroups = [
    {
      title: "DESIGN & BRANDING",
      items: ["Website Design", "Mobile App UI/UX Design", "Graphic Design", "Illustration Design"],
    },
    {
      title: "WEB DEVELOPMENT",
      items: ["Frontend Development", "Backend Development", "CMS Development", "Web App"],
    },
    {
      title: "TECH & MULTIMEDIA",
      items: ["AI & Machine Learning", "Data Visualization", "Video Animation", "API & Systems Integration"],
    },
    {
      title: "DIGITAL MARKETING",
      items: ["Search Engine Optimization", "SMM (Facebook & Instagram)", "Google AdWords (PPC)", "Marketing (Tiktok, Youtube, Amazon)"],
    },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "bg-black/70 backdrop-blur-md border-b border-white/5 py-4" : "bg-transparent py-6"
        }`}
    >
      <div className="container mx-auto px-6 max-w-7xl flex items-center justify-between">
        <Link href="/" className="relative z-10 flex items-center gap-3 group">
          <div className="flex items-center gap-3 rounded-full border border-cyan-300/20 bg-slate-950/90 px-3 py-2 shadow-[0_0_20px_rgba(34,211,238,0.18)] transition-all duration-300 hover:border-cyan-200/40">
            <div className="relative flex h-12 w-12 items-center justify-center overflow-hidden rounded-2xl bg-slate-950/95 ring-1 ring-cyan-300/15 shadow-[0_0_18px_rgba(56,189,248,0.16)]">
              <Image src="https://images.ebadprince49.workers.dev/Logo.png" alt="Pentacore logo" width={44} height={44} className="object-contain" />
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

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          <Link
            href="/"
            className="text-sm font-medium text-white/70 hover:text-white transition-colors"
          >
            Home
          </Link>
          <div
            className="relative"
            onMouseEnter={() => setServicesOpen(true)}
            onMouseLeave={() => setServicesOpen(false)}
          >
            <button
              type="button"
              onClick={() => setServicesOpen((prev) => !prev)}
              className="text-sm font-medium text-white/70 hover:text-white transition-colors flex items-center gap-1"
            >
              Services
              <span className={`text-xs transition-transform duration-200 ${servicesOpen ? "rotate-180" : ""}`}>▾</span>
            </button>

            <AnimatePresence>
              {servicesOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  transition={{ duration: 0.2 }}
                  className="absolute left-1/2 top-full mt-4 w-[980px] max-w-[92vw] -translate-x-1/2 rounded-2xl border border-cyan-400/20 bg-[#101b30]/95 backdrop-blur-md shadow-[0_22px_70px_rgba(0,0,0,0.55)] overflow-hidden"
                >
                  <div className="grid grid-cols-4 gap-10 p-7 pb-8">
                    {servicesGroups.map((group) => (
                      <div key={group.title}>
                        <h4 className="text-sm font-semibold tracking-wide text-white/55 mb-5">{group.title}</h4>
                        <ul className="space-y-3.5">
                          {group.items.map((item) => (
                            <li key={item} className="text-white/85 text-[1.05rem] leading-snug hover:text-cyan-300 transition-colors cursor-default">
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>

                  <div className="flex items-center justify-between border-t border-cyan-400/15 px-7 py-5 bg-[#0f1a2d]/90">
                    <div>
                      <h4 className="text-4xl font-bold tracking-tight text-white">OUR OFFERINGS</h4>
                      <p className="mt-2 text-white/75 text-lg">
                        From backend systems to mobile apps and AI automations — we design, build, and optimize modern software tailored for your business goals.
                      </p>
                    </div>
                    {/* <Link
                      href="/"
                      className="shrink-0 ml-8 px-8 py-3 rounded-full bg-cyan-400 text-[#0a1426] font-bold text-lg hover:bg-cyan-300 transition-colors"
                      onClick={() => setServicesOpen(false)}
                    >
                      Get in Touch
                    </Link> */}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {sectionNavLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-white/70 hover:text-white transition-colors"
            >
              {link.name}
            </Link>
          ))}
        </nav>

        <div className="hidden md:flex items-center">
          <Link
            href="/contact-us"
            className="flex items-center gap-3 rounded-full border border-cyan-500/60  bg-slate-950/90 px-3 py-2 shadow-[0_0_20px_rgba(34,211,238,0.18)] transition-all duration-300 hover:border-cyan-200/40 text-sm font-semibold text-base font-semibold tracking-[0.24em] text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-sky-400 to-blue-500"
          >
            LET'S DISCUSS
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden relative z-10 p-2 text-white/80 hover:text-white"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Nav Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 right-0 bg-zinc-950 border-b border-white/10 p-6 md:hidden flex flex-col gap-6"
          >
            <button
              type="button"
              className="text-lg font-medium text-white/80 hover:text-white text-left"
              onClick={() => setMobileServicesOpen((prev) => !prev)}
            >
              <span className="flex items-center justify-between">
                Services
                <span className={`text-sm transition-transform duration-200 ${mobileServicesOpen ? "rotate-180" : ""}`}>▾</span>
              </span>
            </button>
            {mobileServicesOpen && (
              <div className="rounded-xl border border-white/10 bg-white/[0.02] p-4 space-y-5">
                {servicesGroups.map((group) => (
                  <div key={group.title}>
                    <h4 className="text-xs font-semibold tracking-[0.12em] text-white/45 mb-2">{group.title}</h4>
                    <ul className="space-y-1.5">
                      {group.items.map((item) => (
                        <li key={item} className="text-sm text-white/80">
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            )}

            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-lg font-medium text-white/80 hover:text-white"
                onClick={() => {
                  setMobileMenuOpen(false);
                  setMobileServicesOpen(false);
                }}
              >
                {link.name}
              </Link>
            ))}
            <Link
              href="/#contact"
              className="w-full text-center px-5 py-3 bg-white text-black font-semibold rounded-lg text-sm"
              onClick={() => {
                setMobileMenuOpen(false);
                setMobileServicesOpen(false);
              }}
            >
              Start Your Project
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
