export const siteConfig = {
  name: "Rubel Foridi",
  shortName: "Rubel",
  role: "Full Stack Developer",
  skills: [
    "Node.js",
    "Express.js",
    "MongoDB",
    "Redis",
    "AWS ECS",
    "React",
    "TypeScript",
  ],
  tagline:
    "Backend-focused Full Stack Developer with 2+ years of experience building and scaling high-traffic consumer platforms serving 1M+ active users. Expert in Node.js, Express.js, MongoDB, Redis, BullMQ, and AWS ECS with proven track record of payment gateway integrations and CI/CD automation.",

  availability: {
    open: true,
    email: "rubelforidi@gmail.com",
  },
  location: "Kolkata, West Bengal, India",
  phone: "+91 9064527720",
  socials: {
    github: "https://github.com/Rubel011",
    linkedin: "https://linkedin.com/in/rubel-foridi",
    portfolio: "https://rubelforidi.vercel.app",
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
    company: "Techaircraft Solution Pvt. Ltd.",
    website: "https://techaircraft.com",
    role: "Full Stack Developer",
    location: "Kolhapur, Maharashtra",
    type: "(Remote)",
    period: "Mar 2025 – Present",
    accomplishments: [
      "Built and scaled two live consumer platforms — SurveysIQ and Earneasy24 — serving 1M+ active users using Node.js, Express.js, MongoDB, and AWS ECS Fargate",
      "Engineered high-performance backend systems with Redis caching, BullMQ job queues, and MongoDB aggregation pipelines, eliminating 504 timeout errors and reducing API latency significantly",
      "Integrated multiple payment gateways (Razorpay, Easebuzz, Paytm, Instamojo) with end-to-end webhook processing, UPI deduplication logic, and real-time transaction reconciliation",
      "Designed and deployed CI/CD pipelines using GitHub Actions, AWS ECS Fargate, and CloudFront CDN, improving deployment reliability and reducing infrastructure costs",
      "Implemented FCM push notification batching for large-scale audience delivery",
    ],
    techStack: [
      "Node.js",
      "Express.js",
      "MongoDB",
      "Redis",
      "BullMQ",
      "AWS ECS",
      "CloudFront",
      "GitHub Actions",
    ],
  },
  {
    company: "Codestrup Infotech Pvt. Ltd.",
    website: "https://codestrup.com",
    role: "Backend Developer",
    location: "Pune, Maharashtra",
    type: "(Remote)",
    period: "Apr 2024 – Feb 2025",
    accomplishments: [
      "Integrated 10+ major payment gateways (Razorpay, PhonePe, Paytm, and others) delivering PCI-compliant transaction processing across 3+ consumer products with 99.9% uptime",
      "Architected and launched a referral system from scratch, achieving a 30%+ uplift in new user registrations within the first quarter of deployment",
      "Managed end-to-end deployment pipeline using AWS ECS, ECR, and Docker; reduced average deployment time by ~40% through pipeline automation and container layer caching",
      "Scaled backend architecture from ~5M to 14M+ users by restructuring MongoDB indexes, introducing connection pooling, and offloading async tasks to a queue-based worker model",
    ],
    techStack: [
      "Node.js",
      "Express.js",
      "MongoDB",
      "AWS ECS",
      "AWS ECR",
      "Docker",
      "Payment Gateways",
      "Redis",
    ],
  },
  {
    company: "Wexa AI",
    website: "https://wexa.ai",
    role: "Software Development Engineer",
    location: "Hyderabad, Telangana",
    type: "(Onsite) - Founder's office",
    period: "Jan 2024 – May 2024",
    accomplishments: [
      "Delivered 15+ responsive and accessible UI components using ShadCN/UI, directly translating Figma prototypes into production-ready code with pixel-perfect accuracy",
      "Reduced sprint backlog carryover by 20% through disciplined Jira task tracking and proactive cross-functional communication across engineering and design teams",
      "Improved cross-browser visual consistency across 8+ platform screens, eliminating layout regressions reported in QA cycles",
    ],
    techStack: [
      "React",
      "Next.js",
      "ShadCN/UI",
      "TypeScript",
      "Tailwind CSS",
      "Figma",
      "Jira",
    ],
  },
  {
    company: "Masai School",
    website: "https://masaischool.com",
    role: "Assessment Mentor (Assistantship Program)",
    location: "Bengaluru, India",
    type: "(Remote)",
    period: "Jun 2023 – Aug 2023",
    accomplishments: [
      "Earned competitive selection for the Assistantship Program — one of the top performers in a cohort of 200+ students",
      "Mentored 20+ peers across DSA, debugging, and full-stack coursework",
      "Ran weekly group learning sessions that measurably improved mentee assignment pass rates and reduced average debugging resolution time",
    ],
    techStack: ["DSA", "JavaScript", "React", "Node.js"],
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
      github: "https://github.com/Rubel011/Vetspot_veterinary-clinic_website",
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
      github: "https://github.com/Rubel011/RoamStay-Vacation_Rental_Platform",
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
