export const siteConfig = {
  name: "Rubel Foridi",
  role: "Full Stack Developer",
  skills: ["Full Stack", "Backend", "DevOps"],
  tagline:
    "I design and build scalable backend systems and modern full-stack web applications with Node.js and React, combining clean code, thoughtful system design, and high-quality UI using shadcn/ui on cloud-native infrastructure.",

  //     Version 1. Clean and Professional

  // I build scalable backend systems and high-performance full-stack web applications using Node.js, React, and modern cloud infrastructure, with clean architecture and polished, production-ready UI powered by shadcn/ui.

  // Version 2. Confident and Outcome-Focused

  // I design and build scalable backend systems and modern full-stack web applications with Node.js and React, combining clean code, thoughtful system design, and high-quality UI using shadcn/ui on cloud-native infrastructure.

  // Version 3. Strong Personal Brand

  // Full-stack developer focused on scalable backend architecture and modern web applications. I build fast, reliable systems with Node.js, React, and cloud-native infrastructure, delivering clean code, thoughtful design, and polished UI using shadcn/ui.

  // Version 4. Bold and Senior-Leaning

  // I build scalable, cloud-native backend systems and modern full-stack web applications with Node.js and React, emphasizing performance, maintainability, and clean architecture, backed by thoughtful UX and polished UI using shadcn/ui.
  availability: {
    open: true,
    email: "rubelforidi@gmail.com",
  },
  location: "Bangalore, India",
  socials: {
    github: "https://github.com/Rubel011",
    linkedin: "https://linkedin.com",
    resume:
      "https://drive.google.com/file/d/1NB33EV8fyFEyqE2YpketzAROuZfDS_WH/view?usp=sharing",
  },
  meetingLink: "#",
};

export const navLinks = [
  { label: "About", href: "/#about" },
  { label: "Projects", href: "/projects" },
  { label: "Blog", href: "/#blog" },
  { label: "Contact", href: "/#contact" },
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
    title: "Airmeet: Video Chat App",
    description:
      "Built a real-time video conferencing platform enabling users to create and join chat rooms with live text, voice, and video communication. Integrated Agora API for low-latency streaming and implemented a Node.js backend with MongoDB for user and room management.",
    image: "/images/projects/airmeet.png",
    techStack: [
      "Html",
      "Css",
      "JavaScript",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Agora API",
    ],
    repo: "Rubel011/Air-Meet-Video-Chat-app",
    links: {
      live: "https://airmeetup.netlify.app/",
      github: "https://github.com/Rubel011/Air-Meet-Video-Chat-app",
    },
    gradient:
      "linear-gradient(135deg, rgb(37 99 235 / 0.2), rgb(147 51 234 / 0.2))",
  },
  {
    title: "Vetspot: Veterinary Clinic",
    description:
      "Developed a full-featured veterinary clinic management system with role-based access for admins and doctors. Includes appointment scheduling, patient records, billing and invoicing, inventory tracking, and analytics — deployed on AWS for scalable performance.",
    image: "/images/projects/vetspot.jpg",
    techStack: [
      "Html",
      "Css",
      "JavaScript",
      "Node.js",
      "Express.js",
      "MongoDB",
      "AWS",
    ],
    repo: "Rubel011/Vetspot_veterinary-clinic_website",
    links: {
      live: "https://unarmed-science-115.vercel.app/",
      github:
        "https://github.com/Rubel011/Vetspot_veterinary-clinic_website",
    },
    gradient:
      "linear-gradient(135deg, rgb(16 185 129 / 0.2), rgb(6 182 212 / 0.2))",
  },
  {
    title: "Crystaline: E-commerce",
    description:
      "Led a team to deliver a fully responsive jewelry e-commerce platform in five days. Features include product browsing with category filters, a shopping cart, and a streamlined checkout flow — powered by a mock API for rapid prototyping.",
    image: "/images/projects/crystaline.png",
    techStack: ["Html", "Css", "JavaScript", "Mock API"],
    repo: "Rubel011/Crystaline_e-commerce_jewellery-website",
    links: {
      live: "https://crystaline.vercel.app/",
      github:
        "https://github.com/Rubel011/Crystaline_e-commerce_jewellery-website",
    },
    gradient:
      "linear-gradient(135deg, rgb(234 179 8 / 0.2), rgb(249 115 22 / 0.2))",
  },
  {
    title: "Social-Savant: Grow Socially",
    description:
      "Solo-built a social media growth platform with publishing tools, audience analytics, and engagement tracking. Features multi-platform scheduling, follower growth insights, and an admin dashboard backed by a Node.js REST API and MongoDB.",
    image: "/images/projects/social-savant.jpg",
    techStack: [
      "Html",
      "Css",
      "JavaScript",
      "Node.js",
      "Express.js",
      "MongoDB",
    ],
    repo: "Rubel011/Social-Savant_grow-socially",
    links: {
      live: "https://socialsavant.vercel.app/",
      github: "https://github.com/Rubel011/Social-Savant_grow-socially",
    },
    gradient:
      "linear-gradient(135deg, rgb(244 63 94 / 0.2), rgb(251 146 60 / 0.2))",
  },
  {
    title: "Trippora: Hotel Rent Website",
    description:
      "Collaborated on a hotel and vacation rental booking platform with location-based search, check-in/check-out date selection, and a curated top destinations section. Focused on delivering a clean, intuitive UI for a seamless booking experience.",
    image: "/images/projects/trippora.jpg",
    techStack: ["Html", "Css", "JavaScript"],
    repo: "Rubel011/Trippora_Hotel-rent-website",
    links: {
      live: "https://trippora.vercel.app/",
      github: "https://github.com/Rubel011/Trippora_Hotel-rent-website",
    },
    gradient:
      "linear-gradient(135deg, rgb(139 92 246 / 0.2), rgb(236 72 153 / 0.2))",
  },
  {
    title: "RoamStay: AI-Powered Vacation Rentals",
    description:
      "Built an AI-powered accommodation discovery platform using Python Flask and Generative AI. Users can search and browse unique stays — from cozy cottages to luxury villas — with intelligent recommendations driven by natural language queries and MongoDB-backed listings.",
    image: "/images/projects/roamstay.jpg",
    techStack: [
      "Html",
      "Css",
      "JavaScript",
      "Python",
      "Flask",
      "MongoDB",
      "Gen AI",
    ],
    repo: "Rubel011/RoamStay-Vacation_Rental_Platform",
    links: {
      live: "https://vacation-rental-platform-kappa.vercel.app/",
      github:
        "https://github.com/Rubel011/RoamStay-Vacation_Rental_Platform",
    },
    gradient:
      "linear-gradient(135deg, rgb(14 165 233 / 0.2), rgb(34 197 94 / 0.2))",
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
