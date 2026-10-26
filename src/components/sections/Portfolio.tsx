"use client";

import { useEffect, useRef, useState } from "react";
import { ArrowLeft, ArrowRight, ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import { works } from "@/lib/works";

export default function Portfolio() {
  const projectsRef = useRef<HTMLDivElement>(null);
  const [isAtEnd, setIsAtEnd] = useState(false);

  useEffect(() => {
    const projects = projectsRef.current;
    if (!projects) return;
    const rail = projects;

    function updateScrollDirection() {
      const maxScroll = rail.scrollWidth - rail.clientWidth;
      setIsAtEnd(maxScroll > 0 && rail.scrollLeft >= maxScroll - 2);
    }

    updateScrollDirection();
    rail.addEventListener("scroll", updateScrollDirection, { passive: true });
    const resizeObserver = new ResizeObserver(updateScrollDirection);
    resizeObserver.observe(rail);

    return () => {
      rail.removeEventListener("scroll", updateScrollDirection);
      resizeObserver.disconnect();
    };
  }, []);

  function scrollProjects() {
    const projects = projectsRef.current;
    if (!projects) return;

    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    const behavior = reducedMotion ? "auto" : "smooth";
    const maxScroll = projects.scrollWidth - projects.clientWidth;
    const atEnd = maxScroll > 0 && projects.scrollLeft >= maxScroll - 2;

    if (atEnd) {
      projects.scrollTo({ left: 0, behavior });
    } else {
      const nextScroll = Math.min(
        projects.scrollLeft + projects.clientWidth * 0.8,
        maxScroll,
      );
      projects.scrollTo({ left: nextScroll, behavior });
    }
  }

  return (
    <section
      id="work"
      className="relative bg-zinc-950 py-20 sm:py-24 md:py-28"
      aria-labelledby="portfolio-heading"
    >
      <div className="container relative z-10 mx-auto max-w-7xl px-6">
        <div className="mb-10 flex items-end justify-between gap-6 sm:mb-14 md:mb-16">
          <div className="max-w-3xl">
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-zinc-400">
              Selected work
            </p>
            <h2
              id="portfolio-heading"
              className="mb-5 text-4xl font-semibold leading-[1.08] tracking-tight text-white sm:text-5xl md:text-6xl"
            >
              Engineered for maximum impact.
            </h2>
            <p className="max-w-2xl text-base leading-relaxed text-zinc-400 sm:text-lg">
              Examine how we&apos;ve transformed bold concepts into
              high-performing digital realities.
            </p>
          </div>
          <button
            type="button"
            aria-label={isAtEnd ? "Return to first project" : "Scroll to more projects"}
            onClick={scrollProjects}
            className="portfolio-scroll-button mb-1 inline-flex h-12 w-12 shrink-0 items-center justify-center"
          >
            {isAtEnd ? (
              <ArrowLeft aria-hidden="true" size={20} />
            ) : (
              <ArrowRight aria-hidden="true" size={20} />
            )}
          </button>
        </div>

        <div
          ref={projectsRef}
          className="portfolio-projects grid grid-flow-col auto-cols-[88%] items-stretch overflow-x-auto pb-3 md:auto-cols-[calc((100%_-_1.25rem)/2)] xl:auto-cols-[calc((100%_-_2.5rem)/3)]"
          role="region"
          aria-label="Selected projects"
          tabIndex={0}
        >
          {works.map((work) => {
            const href = work.external
              ? work.link
              : `/case-studies/${work.slug}`;

            return (
              <Link
                key={work.slug}
                href={href}
                target={work.external ? "_blank" : undefined}
                rel={work.external ? "noopener noreferrer" : undefined}
                className="portfolio-card-link block h-full rounded-[8px] focus-visible:outline-none"
              >
                <article className="service-card portfolio-card flex h-full flex-col">
                  <div className="service-image relative aspect-[4/3] w-full overflow-hidden">
                    <Image
                      src={work.image}
                      alt={work.alt}
                      fill
                      sizes="(max-width: 767px) 88vw, (max-width: 1279px) 45vw, 30vw"
                      className="portfolio-image object-cover"
                    />
                    <span className="service-badge absolute bottom-4 left-4">
                      {work.category}
                    </span>
                    <span className="portfolio-card-arrow absolute right-6 top-6 flex h-12 w-12 items-center justify-center">
                      <ArrowUpRight aria-hidden="true" size={22} strokeWidth={2.5} />
                    </span>
                  </div>

                  <div className="service-card-content flex flex-1 flex-col">
                    <h3 className="mb-2 text-xl font-semibold tracking-tight text-white sm:text-[1.35rem]">
                      {work.title}
                    </h3>
                    <p className="service-description text-sm leading-5 text-zinc-400">
                      {work.desc}
                    </p>
                  </div>
                </article>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
