import { PORTFOLIO } from './portfolio-data'

/**
 * Extracts and formats all portfolio content for Jarvis context
 * This serves as the RAG (Retrieval Augmented Generation) knowledge base
 */
export function getJarvisContext(): string {
  const {
    name,
    tagline,
    email,
    github,
    linkedin,
    about,
    research,
    skills,
    stats,
    pillars,
    projects,
    journey,
  } = PORTFOLIO

  const formattedStats = stats.map((s) => `${s.value}${s.suffix} ${s.label}`).join(' | ')

  const formattedSkills = skills.join(', ')

  const formattedPillars = pillars
    .map((p) => `${p.num}. ${p.title}: ${p.desc}`)
    .join('\n')

  const formattedProjects = projects
    .map(
      (p) =>
        `- ${p.title}: ${p.pitch}\n  Tags: ${p.tags.join(', ')}\n  Link: ${p.link}`,
    )
    .join('\n')

  const formattedJourneyPoints = journey.points.join('\n- ')

  return `
PORTFOLIO KNOWLEDGE BASE FOR JARVIS
===================================

PERSONAL INFO:
- Name: ${name}
- Email: ${email}
- GitHub: ${github}
- LinkedIn: ${linkedin}
- Tagline: ${tagline}

ABOUT:
${about}

RESEARCH & INTERESTS:
${research}

CORE STATISTICS:
${formattedStats}

TECHNICAL SKILLS:
${formattedSkills}

THREE PILLARS OF APPROACH:
${formattedPillars}

PROJECTS:
${formattedProjects}

CURRENT JOURNEY (${journey.period}):
Role: ${journey.role} at ${journey.org}
- ${formattedJourneyPoints}

ADDITIONAL CONTEXT:
- Building high-impact digital products with complete architectural ownership
- Production-ready code across 10+ live deployments
- AI integration as a feature, not a dependency
- Bilingual capability: English and Hindi
- Always open to elite collaborations and innovative challenges
`
}

/**
 * Get a brief version of context for quick reference
 */
export function getJarvisBriefContext(): string {
  const { name, email, github, linkedin, skills } = PORTFOLIO
  return `${name} | ${email} | GitHub: ${github} | LinkedIn: ${linkedin} | Skills: ${skills.slice(0, 5).join(', ')}`
}
