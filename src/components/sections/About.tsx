"use client";

import { useEffect, useRef, useState } from "react";
import type { CSSProperties } from "react";
import Link from "next/link";
import Image from "next/image";
import { assets } from "@/lib/site";
import CardIndex from "@/components/ui/CardIndex";

const principles = [
  {
    title: "Engineering that scales",
    description:
      "Thoughtful architecture, reliable integrations, and solutions built around actual business needs.",
  },
  {
    title: "UX with a purpose",
    description:
      "Intuitive user journeys, responsive interfaces, and experiences designed around people.",
  },
  {
    title: "Maintainable by design",
    description:
      "Reusable components, clear documentation, and structured code that is easier to extend.",
  },
  {
    title: "Security by design",
    description:
      "Appropriate access controls, careful credential handling, input validation, and security-conscious development.",
  },
  {
    title: "Clear communication",
    description:
      "Visible progress, aligned milestones, honest updates, and clear expectations at every stage.",
  },
  {
    title: "Beyond launch",
    description:
      "Deployment support, knowledge transfer, and clearly defined options for ongoing improvements.",
  },
];

export default function About() {
  const sectionRef = useRef<HTMLElement>(null);
  const cursorRef = useRef<HTMLDivElement>(null);
  const pointerFrameRef = useRef<number | null>(null);
  const cursorActiveRef = useRef(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isCursorActive, setIsCursorActive] = useState(false);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    if (typeof IntersectionObserver === "undefined") {
      let wasVisible = false;
      const checkVisibility = () => {
        const bounds = section.getBoundingClientRect();
        const isNowVisible = bounds.bottom > 0 && bounds.top < window.innerHeight;
        if (isNowVisible !== wasVisible) {
          wasVisible = isNowVisible;
          setIsVisible(isNowVisible);
        }
      };

      checkVisibility();
      window.addEventListener("scroll", checkVisibility, { passive: true });
      window.addEventListener("resize", checkVisibility, { passive: true });
      return () => {
        window.removeEventListener("scroll", checkVisibility);
        window.removeEventListener("resize", checkVisibility);
      };
    }

    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold: 0.01 },
    );
    observer.observe(section);

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section || !isVisible) {
      cursorActiveRef.current = false;
      setIsCursorActive(false);
      return;
    }
    const sectionElement = section;

    let scrollTimer: ReturnType<typeof setTimeout> | undefined;
    let isScrolling = false;

    function activateCursor(active: boolean) {
      if (cursorActiveRef.current === active) return;
      cursorActiveRef.current = active;
      setIsCursorActive(active);
    }

    function updateCursor(event: PointerEvent) {
      if (isScrolling || event.pointerType !== "mouse") return;

      const cursor = cursorRef.current;
      if (!cursor) return;

      const { clientX, clientY } = event;
      if (pointerFrameRef.current !== null) {
        cancelAnimationFrame(pointerFrameRef.current);
      }

      pointerFrameRef.current = requestAnimationFrame(() => {
        cursor.style.transform = `translate3d(${clientX}px, ${clientY}px, 0) translate(-50%, -50%)`;
        pointerFrameRef.current = null;
      });
      activateCursor(true);
    }

    function leaveSection() {
      activateCursor(false);
    }

    function handleScroll() {
      isScrolling = true;
      sectionElement.removeEventListener("pointermove", updateCursor);
      activateCursor(false);
      if (pointerFrameRef.current !== null) {
        cancelAnimationFrame(pointerFrameRef.current);
        pointerFrameRef.current = null;
      }
      if (scrollTimer) clearTimeout(scrollTimer);

      scrollTimer = setTimeout(() => {
        isScrolling = false;
        if (sectionElement.matches(":hover")) {
          sectionElement.addEventListener("pointermove", updateCursor, {
            passive: true,
          });
        }
      }, 160);
    }

    sectionElement.addEventListener("pointermove", updateCursor, { passive: true });
    sectionElement.addEventListener("pointerleave", leaveSection);
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      sectionElement.removeEventListener("pointermove", updateCursor);
      sectionElement.removeEventListener("pointerleave", leaveSection);
      window.removeEventListener("scroll", handleScroll);
      if (scrollTimer) clearTimeout(scrollTimer);
      if (pointerFrameRef.current !== null) {
        cancelAnimationFrame(pointerFrameRef.current);
        pointerFrameRef.current = null;
      }
      cursorActiveRef.current = false;
    };
  }, [isVisible]);

  return (
    <section
      ref={sectionRef}
      id="about"
      aria-labelledby="about-heading"
      className={`why-section relative overflow-hidden py-20 sm:py-24 md:py-28${isVisible ? " why-section--revealed" : ""}${isCursorActive ? " why-section--cursor-active" : ""}`}
    >
      <div
        ref={cursorRef}
        className="why-core-cursor"
        aria-hidden="true"
      >
        <span className="why-core-orbit why-core-orbit-outer" />
        <span className="why-core-orbit why-core-orbit-inner" />
        <span className="why-core-center">
          <Image
            src={assets.logo}
            alt=""
            width={32}
            height={29}
            sizes="32px"
            className="h-6 w-6 object-contain"
          />
        </span>
      </div>

      <div className="container relative z-10 mx-auto max-w-7xl px-6">
        <div className="mb-10 max-w-3xl sm:mb-14 md:mb-16">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-zinc-400">
            The Pentacore difference
          </p>
          <h2
            id="about-heading"
            className="why-heading mb-5 text-4xl font-semibold leading-[1.08] tracking-tight text-white sm:text-5xl md:text-6xl"
          >
            Built with purpose. Engineered for what&apos;s next.
          </h2>
          <p className="max-w-2xl text-base leading-relaxed text-zinc-400 sm:text-lg">
            Great technology isn&apos;t just about launching faster. It&apos;s
            about creating digital products and systems that remain useful,
            adaptable, and dependable as your business grows.
          </p>
        </div>

        <div className="why-principles-grid grid grid-cols-1 items-stretch md:grid-cols-2 xl:grid-cols-3">
          {principles.map(({ title, description }, index) => (
            <article
              key={title}
              className="why-principle-card"
              style={{ "--reveal-delay": `${index * 80}ms` } as CSSProperties}
            >
              <CardIndex index={index} />
              <h3 className="mb-3 text-xl font-semibold tracking-tight text-white">
                {title}
              </h3>
              <p className="text-sm leading-6 text-[#B5B5BC]">{description}</p>
            </article>
          ))}
        </div>

        <div className="why-cta mt-8 flex flex-col items-start justify-between gap-6 px-6 py-7 sm:flex-row sm:items-center sm:px-8 md:px-10">
          <div>
            <h3 className="mb-2 text-xl font-semibold tracking-tight text-white sm:text-2xl">
              A better way to build your next product.
            </h3>
            <p className="text-sm leading-relaxed text-[#B5B5BC] sm:text-base">
              Let&apos;s discuss your goals, constraints, and the right approach.
            </p>
          </div>
          <Link className="why-cta-link" href="/contact-us#contact-form">
            Start a project
            <span aria-hidden="true">→</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
