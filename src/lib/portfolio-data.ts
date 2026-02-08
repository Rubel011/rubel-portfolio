export const siteConfig = {
  name: "Rubel Foridi",
  role: "Full Stack Developer",
  skills: ["Full Stack", "Backend", "DevOps"],
  tagline:
    "A passionate full-stack developer crafting modern, performant web experiences with clean code, thoughtful design, and polished UI powered by shadcn/ui.",
  // "Building scalable backends and stunning frontends — clean code, modern design, and pixel-perfect UI with shadcn/ui."
  // "From robust APIs to beautiful interfaces — crafting performant web experiences with clean code, thoughtful design, and shadcn/ui."
  availability: {
    open: true,
    email: "rubelforidi@gmail.com",
  },
  location: "Bangalore, India",
  socials: {
    github: "https://github.com/Rubel011",
    linkedin: "https://www.linkedin.com/in/rubel-foridi/",
    resume: "#",
  },
  meetingLink: "#",
};

export const navLinks = [
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Blog", href: "#blog" },
  { label: "Contact", href: "#contact" },
];

export const experiences = [
  {
    company: "Acme Corp",
    role: "Senior Frontend Developer",
    type: "Remote",
    period: "Jan 2024 - Present",
    accomplishments: [
      "Led the redesign of the main product dashboard, improving user engagement by 40%",
      "Built a reusable component library with 50+ components following Atomic Design principles",
    ],
    techStack: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Redux Toolkit",
      "React Query",
    ],
  },
  {
    company: "StartupXYZ",
    role: "Full Stack Developer",
    type: "Hybrid",
    period: "Jun 2022 - Dec 2023",
    accomplishments: [
      "Designed and implemented RESTful APIs handling 10K+ requests per minute",
      "Reduced page load time by 60% through code splitting and lazy loading strategies",
    ],
    techStack: ["React", "Node.js", "PostgreSQL", "Docker", "AWS"],
  },
];

export const projects = [
  {
    title: "CloudSync",
    description:
      "A real-time collaborative workspace with AI-powered document editing, team management, and seamless cloud synchronization across devices.",
    techStack: [
      "Next.js",
      "TypeScript",
      "PostgreSQL",
      "Redis",
      "Docker",
      "OpenAI",
      "Tailwind CSS",
      "Prisma",
    ],
    links: { live: "#", github: "#" },
    gradient:
      "linear-gradient(135deg, rgb(37 99 235 / 0.2), rgb(147 51 234 / 0.2))",
  },
  {
    title: "DevMetrics",
    description:
      "An analytics platform for engineering teams to track code quality, deployment frequency, and team productivity with customizable dashboards.",
    techStack: [
      "React",
      "Node.js",
      "MongoDB",
      "D3.js",
      "Docker",
      "GraphQL",
      "Tailwind CSS",
    ],
    links: { live: "#", github: "#" },
    gradient:
      "linear-gradient(135deg, rgb(16 185 129 / 0.2), rgb(6 182 212 / 0.2))",
  },
];

export const blogPosts = [
  {
    title: "Building Scalable Frontend Architecture with Next.js",
    excerpt:
      "A deep dive into structuring large-scale Next.js applications with modular architecture, shared components, and efficient state management.",
    date: "2025-01-15",
    slug: "#",
  },
  {
    title: "Modern CSS: From Tailwind to Design Systems",
    excerpt:
      "Exploring how utility-first CSS frameworks like Tailwind CSS can be leveraged to build consistent, maintainable design systems.",
    date: "2024-12-20",
    slug: "#",
  },
];
