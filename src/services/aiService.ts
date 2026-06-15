import type { ChatMessage } from '@/types'
import { AI_SYSTEM_PROMPT } from '@/constants/data'

interface ProviderConfig {
  provider: 'groq' | 'gemini'
  apiKey: string
  model: string
}

function getProviders(): ProviderConfig[] {
  const providers: ProviderConfig[] = []

  const groqKey = import.meta.env.VITE_GROQ_API_KEY
  if (groqKey) {
    providers.push({ provider: 'groq', apiKey: groqKey, model: 'llama-3.1-8b-instant' })
  }

  const geminiKey = import.meta.env.VITE_GEMINI_API_KEY
  if (geminiKey) {
    providers.push({ provider: 'gemini', apiKey: geminiKey, model: 'gemini-2.0-flash' })
  }

  return providers
}

async function callGroq(
  messages: { role: string; content: string }[],
  apiKey: string,
  model: string
): Promise<string> {
  const res = await fetch('https://api.groq.com/openai/v1/chat/completions', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${apiKey}`,
    },
    body: JSON.stringify({
      model,
      messages,
      max_tokens: 1024,
      temperature: 0.7,
    }),
  })

  if (!res.ok) {
    throw new Error(`Groq API error: ${res.status}`)
  }

  const data = await res.json()
  return data.choices[0]?.message?.content ?? ''
}

async function callGemini(
  messages: { role: string; content: string }[],
  apiKey: string,
  model: string
): Promise<string> {
  const contents = messages
    .filter((m) => m.role !== 'system')
    .map((m) => ({
      role: m.role === 'assistant' ? 'model' : 'user',
      parts: [{ text: m.content }],
    }))

  const systemInstruction = messages.find((m) => m.role === 'system')

  const res = await fetch(
    `https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent?key=${apiKey}`,
    {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        contents,
        systemInstruction: systemInstruction
          ? { parts: [{ text: systemInstruction.content }] }
          : undefined,
        generationConfig: {
          maxOutputTokens: 1024,
          temperature: 0.7,
        },
      }),
    }
  )

  if (!res.ok) {
    throw new Error(`Gemini API error: ${res.status}`)
  }

  const data = await res.json()
  return data.candidates?.[0]?.content?.parts?.[0]?.text ?? ''
}

async function callProvider(
  config: ProviderConfig,
  messages: { role: string; content: string }[]
): Promise<string> {
  if (config.provider === 'groq') {
    return callGroq(messages, config.apiKey, config.model)
  }
  return callGemini(messages, config.apiKey, config.model)
}

export async function sendMessage(
  chatHistory: ChatMessage[],
  userMessage: string
): Promise<string> {
  const providers = getProviders()

  const messages = [
    { role: 'system', content: AI_SYSTEM_PROMPT },
    ...chatHistory.map((m) => ({ role: m.role, content: m.content })),
    { role: 'user', content: userMessage },
  ]

  // Try each provider in order: Groq -> Gemini -> Local fallback
  for (const provider of providers) {
    try {
      const response = await callProvider(provider, messages)
      if (response) return response
    } catch (err) {
      console.warn(`${provider.provider} failed, trying next provider...`, err)
    }
  }

  // All API providers failed (or none configured) — use local fallback
  console.warn('All AI providers failed. Using local fallback responses.')
  return getLocalResponse(userMessage)
}

export function isAIConfigured(): boolean {
  return getProviders().length > 0
}

function getLocalResponse(message: string): string {
  const lower = message.toLowerCase()

  if (lower.includes('hello') || lower.includes('hi') || lower.includes('hey')) {
    return "Hey there! 👋 I'm Akash's portfolio assistant. I can tell you about his skills, projects, education, and more. What would you like to know?"
  }
  if (lower.includes('name') || lower.includes('who')) {
    return "I'm the AI assistant for **Akash Singh's** portfolio! Akash is a CSE Enthusiast and Full Stack Developer based in Agra, Uttar Pradesh, India. He's currently pursuing B.Tech in Computer Science & Engineering from PK University."
  }
  if (lower.includes('skill') || lower.includes('tech') || lower.includes('know') || lower.includes('stack')) {
    return "Akash is proficient in:\n\n**Programming Languages:** Python, C, Java, JavaScript, SQL\n\n**Frontend:** React.js, HTML5, CSS3, Bootstrap, Tailwind CSS, Responsive Web Design\n\n**Tools & Utilities:** Postman, JIRA, Power BI, Firebase, MS-Office\n\n**AI Productivity:** ChatGPT, Claude AI, GitHub Copilot, AI-Assisted Development Tools\n\n**Competencies:** Effective Communication, Team Collaboration, Analytical Thinking, Problem Solving, Time Management"
  }
  if (lower.includes('project')) {
    return "Akash has built these key projects:\n\n**1. Krishna Nursery Website** (HTML, CSS, JavaScript)\nA fully responsive nursery website with product catalog, shopping cart, payment integration, form validations, and cross-browser compatibility.\n\n**2. Personal Portfolio Website** (HTML, CSS, JavaScript)\nA professional portfolio with interactive UI components, smooth navigation, responsive layouts, and performance optimization."
  }
  if (lower.includes('education') || lower.includes('study') || lower.includes('college') || lower.includes('university') || lower.includes('degree')) {
    return "**Education:**\n\n🎓 **B.Tech in Computer Science & Engineering**\n📍 PK University, Shivpuri, Madhya Pradesh, India\n📅 Jul 2022 – Jun 2026\n\nFocused on software development, data structures, algorithms, and web technologies."
  }
  if (lower.includes('contact') || lower.includes('email') || lower.includes('phone') || lower.includes('reach') || lower.includes('connect')) {
    return "You can reach Akash at:\n\n📧 **Email:** akashsinghask2001@gmail.com\n📱 **Phone:** +91 8477926811\n📍 **Location:** Agra, Uttar Pradesh, India"
  }
  if (lower.includes('hire') || lower.includes('freelance') || lower.includes('available') || lower.includes('work') || lower.includes('job')) {
    return "Yes! Akash is currently **available for both freelance projects and full-time opportunities**. He's passionate about web development and building innovative digital solutions. Reach out at akashsinghask2001@gmail.com to discuss your project!"
  }
  if (lower.includes('interest') || lower.includes('hobby') || lower.includes('passion')) {
    return "Akash's interests include:\n\n💻 **Coding & Web Designing** — building modern, responsive web applications\n🤖 **Exploring AI Tools** — leveraging ChatGPT, Claude AI, and GitHub Copilot\n🌐 **Internet Research** — staying updated with emerging technologies\n\nHe's passionate about continuously learning and crafting innovative digital solutions!"
  }
  if (lower.includes('language') || lower.includes('speak')) {
    return "Akash speaks **Hindi** and **English** fluently."
  }
  if (lower.includes('location') || lower.includes('where') || lower.includes('city') || lower.includes('live')) {
    return "Akash is based in **Agra, Uttar Pradesh, India** 📍"
  }
  if (lower.includes('resume') || lower.includes('cv') || lower.includes('download')) {
    return "You can download Akash's resume by clicking the **Download Resume** button in the About section or the **Resume** button in the navigation bar at the top of the page!"
  }

  return "I'm Akash's portfolio assistant! I can tell you about his **skills**, **projects**, **education**, **interests**, and **contact info**. What would you like to know?\n\n*Try asking things like: 'What are his skills?', 'Tell me about his projects', or 'How can I contact him?'*"
}
