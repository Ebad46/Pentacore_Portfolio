import Link from "next/link";
import CardIndex from "@/components/ui/CardIndex";

const challenges = [
  {
    id: "website",
    category: "Digital presence",
    title: "Your website isn’t delivering results.",
    description:
      "Outdated design, poor mobile experience, or visitors who never become customers.",
    solutions: [{ label: "Web Development", href: "#service-web" }],
  },
  {
    id: "mobile",
    category: "Mobile product",
    title: "You need an app built for growth.",
    description:
      "You’re ready to launch a product or make your services accessible on mobile.",
    solutions: [{ label: "App Development", href: "#service-app" }],
  },
  {
    id: "operations",
    category: "Business operations",
    title: "Your team is stuck doing repetitive work.",
    description:
      "Manual data entry, repetitive follow-ups, disconnected tools, and slow workflows.",
    solutions: [
      { label: "AI Automation", href: "#service-automation" },
      { label: "Integrations", href: "#service-integration" },
    ],
  },
  {
    id: "support",
    category: "Customer support",
    title: "Your customers wait too long for answers.",
    description:
      "Support teams are overwhelmed, repetitive questions pile up, and leads go unanswered.",
    solutions: [{ label: "AI Agents & Chatbots", href: "#service-automation" }],
  },
];

export default function BusinessChallenges() {
  return (
    <section
      aria-labelledby="business-challenges-heading"
      className="challenges-section border-t border-white/5 py-20 sm:py-24 md:py-28"
    >
      <div className="container mx-auto max-w-7xl px-6">
        <div className="mb-10 max-w-3xl sm:mb-14 md:mb-16">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-zinc-400">
            Technology that solves real challenges
          </p>
          <h2
            id="business-challenges-heading"
            className="mb-5 text-4xl font-semibold leading-[1.08] tracking-tight text-white sm:text-5xl md:text-6xl"
          >
            What&apos;s holding your business back?
          </h2>
          <p className="max-w-2xl text-base leading-relaxed text-zinc-400 sm:text-lg">
            From digital experiences that underperform to operations that slow
            you down, we turn business challenges into practical technology
            solutions.
          </p>
        </div>

        <div className="challenges-grid grid grid-cols-1 items-stretch md:grid-cols-2 xl:grid-cols-4">
          {challenges.map((challenge, index) => (
            <article
              key={challenge.id}
              className="challenge-card flex h-full flex-col"
            >
              <CardIndex index={index} />
              <p className="mb-3 text-xs font-medium uppercase tracking-[0.14em] text-zinc-400">
                {challenge.category}
              </p>
              <h3 className="mb-3 text-xl font-semibold leading-snug tracking-tight text-white">
                {challenge.title}
              </h3>
              <p className="mb-7 text-sm leading-6 text-zinc-400">
                {challenge.description}
              </p>
              <div className="mt-auto flex flex-wrap gap-x-5 gap-y-3">
                {challenge.solutions.map((solution) => (
                  <Link
                    key={solution.label}
                    className="challenge-link inline-flex items-center gap-2 text-sm font-medium"
                    href={solution.href}
                  >
                    {solution.label}
                    <span aria-hidden="true">→</span>
                  </Link>
                ))}
              </div>
            </article>
          ))}
        </div>

        <figure className="challenges-video mt-8">
          <video
            aria-label="A video about the challenges of manual business tasks"
            className="block aspect-video w-full"
            controls
            playsInline
            preload="metadata"
          >
            <source
              src="/Are_you_still_drowning_in_manual_tasks_Youre_not_a%20(online-video-cutter.com).mp4"
              type="video/mp4"
            />
            Your browser does not support the video element.
          </video>
        </figure>

        <div className="challenges-cta mt-8 flex flex-col items-start justify-between gap-5 px-6 py-6 sm:flex-row sm:items-center sm:px-8">
          <p className="text-base font-medium leading-relaxed text-white sm:text-lg">
            Not sure which solution fits your business? Let&apos;s discuss your
            challenge.
          </p>
          <Link
            className="challenge-cta-link inline-flex shrink-0 items-center gap-3 text-sm font-semibold"
            href="/contact-us#contact-form"
          >
            Start a conversation
            <span aria-hidden="true">→</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
