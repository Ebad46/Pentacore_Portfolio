export type BlogPost = {
  slug: string;
  title: string;
  category: string;
  date: string;
  excerpt: string;
  featured: boolean;
  /** Longer body for detail page (plain paragraphs) */
  body: string[];
};

export const blogCategories = [
  "All",
  "Web Development",
  "App Development",
  "UI/UX Design",
  "Artificial Intelligence",
  "Technology Strategy",
  "Business",
] as const;

export const blogPosts: BlogPost[] = [
  {
    slug: "future-of-web-development-2023",
    title: "The Future of Web Development: Trends to Watch in 2023",
    category: "Web Development",
    date: "June 15, 2023",
    excerpt:
      "The web development landscape is constantly evolving, with new technologies, frameworks, and methodologies emerging at a rapid pace. Staying ahead of these trends is crucial for developers, businesses, and organizations looking to create modern, efficient, and user-friendly web experiences.",
    featured: true,
    body: [
      "The web development landscape is constantly evolving, with new technologies, frameworks, and methodologies emerging at a rapid pace. Staying ahead of these trends is crucial for developers, businesses, and organizations looking to create modern, efficient, and user-friendly web experiences.",
      "From serverless architectures to WebAssembly and progressive web apps, discover how these innovations are revolutionizing the digital landscape and providing new opportunities for creating powerful, engaging user experiences that were previously impossible to achieve on the web.",
      "Teams that invest in performance budgets, edge rendering, and accessible design systems will ship faster and retain users better than those that treat the web as a static brochure.",
    ],
  },
  {
    slug: "mastering-user-experience-intuitive-interfaces",
    title: "Mastering User Experience: Principles for Designing Intuitive Interfaces",
    category: "UI/UX Design",
    date: "August 8, 2023",
    excerpt:
      "Great interfaces feel obvious the first time you use them. This article covers hierarchy, feedback, and consistency—the foundations of intuitive UX.",
    featured: true,
    body: [
      "Great interfaces feel obvious the first time you use them. Users should never have to guess what a control does or where to look for help.",
      "Establish clear visual hierarchy, predictable patterns, and immediate feedback for every action. Test with real people early and often.",
    ],
  },
  {
    slug: "ai-transforming-software-development",
    title: "How AI is Transforming Software Development Practices",
    category: "Artificial Intelligence",
    date: "September 3, 2023",
    excerpt:
      "From code completion to automated testing, AI is reshaping how teams design, build, and ship software—without replacing the need for sound engineering judgment.",
    featured: true,
    body: [
      "From code completion to automated testing, AI is reshaping how teams design, build, and ship software.",
      "The most effective teams treat AI as a copilot: it accelerates drafts and exploration, while humans own architecture, security, and product tradeoffs.",
    ],
  },
  {
    slug: "cross-platform-vs-native-mobile",
    title: "Cross-Platform vs Native Mobile Development: Making the Right Choice",
    category: "App Development",
    date: "July 21, 2023",
    excerpt:
      "Choosing between cross-platform and native depends on your performance targets, team skills, and time-to-market. Here is a practical framework.",
    featured: false,
    body: [
      "Cross-platform frameworks can reach two platforms from one codebase, while native stacks offer maximum control over platform APIs and animations.",
      "If your app is graphics-heavy or relies on cutting-edge OS features, lean native. If you need fast iteration across iOS and Android with shared business logic, cross-platform may win.",
    ],
  },
  {
    slug: "building-scalable-applications-architecture",
    title: "Building Scalable Applications: Architecture Best Practices",
    category: "Technology Strategy",
    date: "October 12, 2023",
    excerpt:
      "Scalability is not only about traffic—it is about modularity, observability, and safe deploys. Learn patterns that keep systems healthy as you grow.",
    featured: false,
    body: [
      "Scalability is not only about traffic—it is about modularity, observability, and safe deploys.",
      "Invest in clear service boundaries, caching where it matters, and metrics that tell you when to scale out before users feel pain.",
    ],
  },
  {
    slug: "digital-transformation-reshaping-business",
    title: "Digital Transformation: How Technology is Reshaping Business Models",
    category: "Business",
    date: "November 5, 2023",
    excerpt:
      "Digital transformation is less about tools and more about operating models—how decisions, data, and customer feedback flow through your organization.",
    featured: false,
    body: [
      "Digital transformation is less about tools and more about operating models.",
      "Leaders who align incentives around customer outcomes and measurable experiments move faster than those who fund one-off IT projects without ownership.",
    ],
  },
];

export function getBlogBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find((p) => p.slug === slug);
}

export function getFeaturedPosts(): BlogPost[] {
  return blogPosts.filter((p) => p.featured);
}

export function getLatestPosts(excludeSlugs?: string[]): BlogPost[] {
  const exclude = new Set(excludeSlugs ?? []);
  return blogPosts.filter((p) => !exclude.has(p.slug));
}
