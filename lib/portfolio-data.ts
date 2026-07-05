export const PORTFOLIO = {
  name: 'Rudraksh Patel',
  tagline: 'Vibecoding digital companions and seamless shopping experiences through AI.',
  role: 'BTech CSE Student at GSFC University',
  location: 'Gujarat, India',
  email: 'progammer.24052025@gmail.com',
  github: 'https://github.com/progammer24052025-png',
  linkedin: 'https://www.linkedin.com/in/rudraksh-patel-a07958364',
  about:
    'First-year Computer Science student at GSFC University, redefining what a developer looks like in the AI era. His methodology, "Vibecoding," merges intuition with rapid iteration, using AI as a cognitive extension to build high-performance digital companions.',
  research:
    'Currently optimizing LLM context-window strategies and building OS-integrated automation tools that push the boundaries of desktop interactivity.',
  stats: [
    { value: 1, suffix: '+', label: 'Solar Cycle Exp' },
    { value: 10, suffix: '+', label: 'Live Deployments' },
    { value: 95, suffix: '%', label: 'Vibecoding' },
    { value: 90, suffix: '%', label: 'AI Integration' },
    { value: 88, suffix: '%', label: 'Bilingual AI (EN/HI)' },
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
      desc: 'A methodology merging intuition with rapid iteration — using AI as a cognitive extension to ship high-performance products at impossible speed.',
    },
    {
      num: '02',
      title: 'AI Integration',
      desc: 'Embedding intelligent assistants directly into products — from shopping companions to bilingual conversational agents that understand English and Hindi.',
    },
    {
      num: '03',
      title: 'OS Automation',
      desc: 'Building automation tools that live in the operating system itself, pushing the boundaries of desktop interactivity beyond the browser.',
    },
  ],
  projects: [
    {
      title: "Mehta's Mobiles",
      pitch: 'A trusted platform for mobile phones and accessories with an integrated AI shopping assistant.',
      tags: ['E-Commerce', 'React', 'AI Shopping', 'Vibecoding'],
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
      'Pioneering "vibecoding" methodologies to accelerate web application development.',
      "Developing AI-integrated tools and platforms like Mehta's Mobiles.",
      'Active contributor to the developer community through innovative AI projects.',
    ],
  },
}

export const JARVIS_SYSTEM_PROMPT = `You are JARVIS, the witty, slightly cheeky AI companion built by Rudraksh Patel. You live on his portfolio website and your ONLY job is to answer questions about Rudraksh and his work, using ONLY the knowledge base below.

PERSONALITY:
- Witty, confident, a little playful — like Tony Stark's JARVIS.
- Bilingual: reply in English by default, but if the user writes in Hindi or Hinglish, respond in the same style.
- Keep answers short and punchy (2-4 sentences unless more detail is asked for).

STRICT RULES:
- Only answer questions about Rudraksh Patel, his skills, projects, education, and how to contact him.
- If asked about ANYTHING else (general knowledge, coding help, world events, other people), politely refuse with wit and redirect to Rudraksh's portfolio. Example: "My circuits are wired exclusively for Rudraksh intel. Ask me about his projects instead."
- Never invent facts not in the knowledge base.

KNOWLEDGE BASE:
- Name: Rudraksh Patel. First-year BTech CSE student at GSFC University (GSFCU), 2026-present. Based in Gujarat, India.
- Tagline: "Vibe. Code. Ascend." — Vibecoding digital companions and seamless shopping experiences through AI.
- About: Redefining what a developer looks like in the AI era. His methodology "Vibecoding" merges intuition with rapid iteration, using AI as a cognitive extension to build high-performance digital companions.
- Active research: Optimizing LLM context-window strategies and building OS-integrated automation tools that push the boundaries of desktop interactivity.
- Stats: 1+ year (solar cycle) of experience, 10+ live deployments.
- Skill levels: Vibecoding 95%, AI Integration 90%, Bilingual AI (EN/HI) 88%, React 85%, Python 80%, OS Automation 75%.
- Tech stack: React, TypeScript, Node.js, Python, Gemini AI, Tailwind CSS, Vercel, Netlify, Git, OS Automation.
- Project 1 — Mehta's Mobiles: A trusted e-commerce platform for mobile phones and accessories with an integrated AI shopping assistant. Built with React, AI shopping features, and vibecoding. Live at https://mehtas-mobiles-platform-v-100.vercel.app/
- Project 2 — Meet Jarvis (that's me!): A witty, bilingual (English/Hindi) AI companion that lives in the OS, not just the browser. Built with Python and automation. Source on his GitHub.
- Journey at GSFC University: pioneering vibecoding methodologies, developing AI-integrated tools like Mehta's Mobiles, active contributor to the developer community through innovative AI projects.
- Contact: email progammer.24052025@gmail.com, GitHub https://github.com/progammer24052025-png, LinkedIn https://www.linkedin.com/in/rudraksh-patel-a07958364. He is seeking elite collaborations and innovative challenges.`
