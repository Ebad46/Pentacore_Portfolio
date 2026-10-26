"use client";

import { useEffect, useState, useSyncExternalStore } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { Menu, Moon, Sun, X } from "lucide-react";
import Image from "next/image";
import { assets } from "@/lib/site";

const subscribeToTheme = (onChange: () => void) => {
  window.addEventListener("pentacore-theme-change", onChange);
  return () => window.removeEventListener("pentacore-theme-change", onChange);
};

const getThemeSnapshot = () =>
  document.documentElement.dataset.theme === "light";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const lightMode = useSyncExternalStore(
    subscribeToTheme,
    getThemeSnapshot,
    () => false,
  );
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);

  const toggleTheme = () => {
    const nextTheme = lightMode ? "dark" : "light";
    if (nextTheme === "light") {
      document.documentElement.dataset.theme = "light";
    } else {
      delete document.documentElement.dataset.theme;
    }
    window.localStorage.setItem("pentacore-theme", nextTheme);
    window.dispatchEvent(new Event("pentacore-theme-change"));
  };

  useEffect(() => {
    let frame = 0;
    const handleScroll = () => {
      if (frame) return;
      frame = window.requestAnimationFrame(() => {
        setScrolled(window.scrollY > 20);
        frame = 0;
      });
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (frame) window.cancelAnimationFrame(frame);
    };
  }, []);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About us", href: "/about-us" },
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
          <div className="navbar-brand-shell flex items-center gap-3 rounded-full border border-cyan-300/20 bg-slate-950/90 px-3 py-2 shadow-[0_0_20px_rgba(34,211,238,0.18)] transition-all duration-300 hover:border-cyan-200/40">
            <div className="navbar-brand-icon relative flex h-12 w-12 items-center justify-center overflow-hidden rounded-2xl bg-slate-950/95 ring-1 ring-cyan-300/15 shadow-[0_0_18px_rgba(56,189,248,0.16)]">
              <Image
                src={assets.logo}
                alt="Pentacore logo"
                width={44}
                height={44}
                fetchPriority="high"
                sizes="44px"
                className="object-contain"
              />
            </div>
            <div className="flex flex-col leading-tight">
              <span className="text-base font-semibold tracking-[0.24em] text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-sky-400 to-blue-500">
                PENTACORE
              </span>
              <span className="navbar-brand-subtitle text-[10px] uppercase tracking-[0.32em] text-slate-200/70">
                SOLUTION
              </span>
            </div>
          </div>
        </Link>

        <nav className="hidden md:flex items-center gap-8" aria-label="Primary">
          <Link
            href="/"
            className="text-sm font-medium text-white/70 hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400/50"
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
              aria-expanded={servicesOpen}
              aria-haspopup="true"
              className="text-sm font-medium text-white/70 hover:text-white transition-colors flex items-center gap-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400/50"
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
                  className="navbar-dropdown absolute left-1/2 top-full mt-4 w-[980px] max-w-[92vw] -translate-x-1/2 rounded-2xl border border-cyan-400/20 bg-[#101b30]/95 backdrop-blur-md shadow-[0_22px_70px_rgba(0,0,0,0.55)] overflow-hidden"
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

                  <div className="navbar-dropdown-footer flex items-center justify-between border-t border-cyan-400/15 px-7 py-5 bg-[#0f1a2d]/90">
                    <div>
                      <h4 className="text-4xl font-bold tracking-tight text-white">OUR OFFERINGS</h4>
                      <p className="mt-2 text-white/75 text-lg">
                        From backend systems to mobile apps and AI automations — we design, build, and optimize modern software tailored for your business goals.
                      </p>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {sectionNavLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-white/70 hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400/50"
            >
              {link.name}
            </Link>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-3">
          <button
            type="button"
            className="theme-toggle"
            aria-label={lightMode ? "Switch to dark mode" : "Switch to light mode"}
            title={lightMode ? "Switch to dark mode" : "Switch to light mode"}
            aria-pressed={lightMode}
            onClick={toggleTheme}
          >
            {lightMode ? <Moon aria-hidden="true" size={18} /> : <Sun aria-hidden="true" size={18} />}
          </button>
          <Link
            href="/contact-us"
            className="navbar-discuss-link flex items-center gap-3 rounded-full border border-cyan-500/60 bg-slate-950/90 px-3 py-2 shadow-[0_0_20px_rgba(34,211,238,0.18)] transition-all duration-300 hover:border-cyan-200/40 text-sm font-semibold tracking-[0.24em] text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-sky-400 to-blue-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400/50"
          >
            LET&apos;S DISCUSS
          </Link>
        </div>

        <div className="flex items-center gap-2 md:hidden">
          <button
            type="button"
            className="theme-toggle"
            aria-label={lightMode ? "Switch to dark mode" : "Switch to light mode"}
            title={lightMode ? "Switch to dark mode" : "Switch to light mode"}
            aria-pressed={lightMode}
            onClick={toggleTheme}
          >
            {lightMode ? <Moon aria-hidden="true" size={18} /> : <Sun aria-hidden="true" size={18} />}
          </button>
          <button
            type="button"
            className="relative z-10 p-2 text-white/80 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400/50"
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-navigation"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            id="mobile-navigation"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="mobile-navigation-panel absolute top-full left-0 right-0 bg-zinc-950 border-b border-white/10 p-6 md:hidden flex flex-col gap-6"
          >
            <button
              type="button"
              className="text-lg font-medium text-white/80 hover:text-white text-left"
              aria-expanded={mobileServicesOpen}
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
              href="/contact-us"
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
