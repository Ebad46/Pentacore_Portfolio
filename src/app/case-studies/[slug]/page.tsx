import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";

import { getWorkBySlug, works } from "@/lib/works";

type CaseStudyPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return works.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({
  params,
}: CaseStudyPageProps): Promise<Metadata> {
  const { slug } = await params;
  const work = getWorkBySlug(slug);

  if (!work) {
    return { title: "Case Study" };
  }

  return {
    title: work.title,
    description: work.overview,
    alternates: { canonical: `/case-studies/${work.slug}` },
    openGraph: {
      title: work.title,
      description: work.overview,
      type: "article",
    },
  };
}

export default async function CaseStudy({ params }: CaseStudyPageProps) {
  const { slug } = await params;
  const work = getWorkBySlug(slug);

  if (!work) {
    notFound();
  }

  return (
    <main className="relative min-h-screen overflow-hidden bg-black pb-24 pt-32 text-white">
      <div className="pointer-events-none absolute left-0 top-0 h-[500px] w-full bg-gradient-to-b from-blue-900/20 to-transparent" />

      <div className="container relative z-10 mx-auto max-w-4xl px-6">
        <Link
          href="/#work"
          className="group mb-12 inline-flex items-center gap-2 text-sm font-medium text-white/50 transition-colors hover:text-white"
        >
          <ArrowLeft size={16} className="transition-transform group-hover:-translate-x-1" />
          Back to Deployments
        </Link>

        <div className="case-study-intro">
          <div className="mb-6 flex items-center gap-3">
            <div className="h-2 w-2 rounded-full bg-blue-500 shadow-[0_0_10px_rgba(59,130,246,0.8)]" />
            <p className="text-sm font-semibold uppercase tracking-widest text-white/60">
              Case Study
            </p>
          </div>

          <h1 className="mb-8 text-5xl font-bold leading-[1.1] tracking-tight md:text-7xl">
            {work.title}
          </h1>
          <p className="mb-16 max-w-2xl text-xl font-light leading-relaxed text-white/60 md:text-2xl">
            {work.overview}
          </p>
        </div>

        <div className="case-study-visual relative mb-16 aspect-video w-full overflow-hidden rounded-3xl border border-white/10 bg-zinc-900 shadow-2xl">
          <Image
            src={work.image}
            alt={work.alt}
            fill
            sizes="(max-width: 768px) 100vw, 896px"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/30" />
        </div>

        <div className="case-study-details grid grid-cols-1 gap-12 md:grid-cols-3">
          <div className="prose prose-invert max-w-none md:col-span-2">
            <h2 className="mb-4 text-2xl font-bold">The Challenge</h2>
            <p className="mb-8 leading-relaxed text-white/70">
              We crafted the {work.category.toLowerCase()} experience to solve the client&apos;s
              key pain points with speed, usability, and reliability.
            </p>
            <h2 className="mb-4 text-2xl font-bold">Our Approach</h2>
            <p className="leading-relaxed text-white/70">{work.desc}</p>
          </div>

          <div className="h-fit rounded-2xl border border-white/10 bg-zinc-950 p-8">
            <h2 className="mb-6 text-lg font-bold tracking-tight">Deployment Stats</h2>
            <ul className="space-y-6">
              <li>
                <p className="mb-1 text-sm uppercase tracking-wider text-white/50">Tech Stack</p>
                <p className="font-medium">{work.tech}</p>
              </li>
              <li>
                <p className="mb-1 text-sm uppercase tracking-wider text-white/50">Timeline</p>
                <p className="font-medium">{work.timeline}</p>
              </li>
              <li>
                <p className="mb-1 text-sm uppercase tracking-wider text-white/50">Impact</p>
                <p className="font-medium text-emerald-400">{work.impact}</p>
              </li>
            </ul>
            {work.link ? (
              <div className="mt-8">
                <a
                  href={work.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center rounded-full bg-blue-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-blue-500"
                >
                  Visit project link
                </a>
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </main>
  );
}
