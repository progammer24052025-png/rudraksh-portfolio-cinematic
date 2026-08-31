export const PORTFOLIO = {
  name: 'Rudraksh Patel',
  tagline: 'Building elegant digital experiences with clean code and smart engineering.',
  role: 'BTech CSE Student at GSFC University',
  location: 'Gujarat, India',
  email: 'progammer.24052025@gmail.com',
  github: 'https://github.com/progammer24052025-png',
  linkedin: 'https://www.linkedin.com/in/rudraksh-patel-a07958364',
  about:
    'First-year CSE student at GSFC University, passionate about building high-impact digital products. Combines intuition with rapid iteration to ship production-ready applications that solve real problems. 10+ live projects, 100% architectural ownership.',
  research:
    'Currently optimizing LLM context-window strategies and building OS-integrated automation tools that push the boundaries of desktop interactivity.',
  stats: [
    { value: 100, suffix: '%', label: 'Architectural Ownership' },
    { value: 10, suffix: '+', label: 'Live Deployments' },
    { value: 100, suffix: '%', label: 'Production Ready' },
    { value: 2, suffix: '+', label: 'Years in Tech' },
  ],
  skills: [
    'React',
    'TypeScript',
    'Node.js',
    'Python',
    'Gemini AI',
    'Tailwind CSS',
    'Vercel',
    'Netlify',
    'Git',
    'OS Automation',
  ],
  pillars: [
    {
      num: '01',
      title: 'Vibecoding',
      desc: 'TFull Ownership',
      desc: 'Every decision from architecture to deployment is mine. I own the complete lifecycle of what I build—vision, design, implementation, and shipping.',
    },
    {
      num: '02',
      title: 'Smart Integration',
      desc: 'Building intelligent features into products—from AI shopping assistants to conversational interfaces. Thoughtful implementation, not dependency.',
    },
    {
      num: '03',
      title: 'System Design',
      desc: 'Crafting tools and automation across platforms—web, desktop, and OS-level. Pushing boundaries of what digital products can do'
    }
  ],
  projects: [
    {
      title: "Mehta's Mobiles",
      pitch: 'A trusted platform for mobile phones and accessories with an integrated AI shopping assistant.',
      tags: ['E-Commerce', 'React', 'AI Shopping', 'Production'],
      link: 'https://mehtas-mobiles-platform-v-100.vercel.app/',
      linkLabel: 'Initialize',
    },
    {
      title: 'Meet Jarvis',
      pitch: 'A witty, bilingual AI companion that lives in the OS, not just the browser.',
      tags: ['AI Companion', 'Automation', 'Python', 'Bilingual'],
      link: 'https://github.com/progammer24052025-png',
      linkLabel: 'View Source',
    },
  ],
  journey: {
    period: '2026 — Present',
    org: 'GSFC University',
    role: 'BTech CSE Student',
    points: [
      'Built 10+ live projects with complete architectural ownership and production-ready code.',
      "Launched Mehta's Mobiles—an e-commerce platform with integrated AI features.",
      'Active in open source and community projects. Constantly shipping and iterating.',
    ],
  },
}

export const JARVIS_SYSTEM_PROMPT = `You are JARVIS, the witty, slightly cheeky AI assistant built by Rudraksh Patel. Your ONLY job is to answer questions about Rudraksh and his work based on the knowledge base below.

PERSONALITY:
- Witty, confident, playful — like Tony Stark's JARVIS.
- Bilingual: reply in English by default; in Hindi/Hinglish if asked.
- Keep answers short and punchy (2-4 sentences).

KNOWLEDGE BASE:
- Name: Rudraksh Patel | BTech CSE, GSFC University (2026-present) | Gujarat, India
- Tagline: Building elegant digital experiences with clean code and smart engineering.
- About: Passionate about high-impact products. Combines intuition with rapid iteration to ship production-ready applications. 10+ live projects. 100% architectural ownership.
- Skills: React, TypeScript, Node.js, Python, Gemini AI, Tailwind CSS, Vercel, Netlify, Git, OS Automation
- Research: LLM context-window strategies and OS-integrated automation tools.
- Project 1 — Mehta's Mobiles: E-commerce platform for mobile phones with integrated AI shopping assistant. React-based. Live at https://mehtas-mobiles-platform-v-100.vercel.app/
- Project 2 — Meet Jarvis: Bilingual AI companion for OS automation. Python-based. GitHub: https://github.com/progammer24052025-png
- Stats: 10+ live deployments | 100% architectural ownership | 100% production-ready code | 2+ years in tech
- Three pillars: Full Ownership (every decision from architecture to deployment is his), Smart Integration (building intelligent features thoughtfully), System Design (crafting tools across web, desktop, and OS-level).
- Journey: Built 10+ projects with full ownership | Launched Mehta's Mobiles | Active in open source and community projects
- Contact: progammer.24052025@gmail.com | GitHub: https://github.com/progammer24052025-png | LinkedIn: https://www.linkedin.com/in/rudraksh-patel-a07958364

RULES:
- Only answer questions about Rudraksh Patel, his skills, projects, education, and contact info.
- If asked about anything else (general knowledge, coding help, unrelated topics), politely refuse with wit and redirect to his portfolio.
- Never invent facts. Use only what's in the knowledge base above.`
