export interface NavLink {
  id: string
  label: string
}

export interface Skill {
  name: string
  icon: string
  level: number
}

export interface SkillCategory {
  title: string
  color: string
  icon: string
  skills: Skill[]
}

export interface Project {
  id: number
  title: string
  description: string
  tags: string[]
  color: string
  github?: string
  live?: string
  featured: boolean
  icon: string
}

export interface TimelineEntry {
  type: 'education' | 'certification'
  title: string
  organization: string
  period: string
  description: string
  tags: string[]
  color: string
}

export interface ContactInfo {
  label: string
  value: string
  href: string | null
  color: string
  iconName: string
}

export interface PersonalInfo {
  name: string
  firstName: string
  lastName: string
  title: string
  tagline: string
  email: string
  phone: string
  location: string
  bio: string[]
  roles: string[]
  socials: Social[]
  facts: Fact[]
}

export interface Social {
  name: string
  href: string
  iconName: string
}

export interface Fact {
  icon: string
  label: string
  value: string
}

export interface ChatMessage {
  id: string
  role: 'user' | 'assistant'
  content: string
  timestamp: Date
}

export type AIProvider = 'groq' | 'gemini'

export interface AIConfig {
  provider: AIProvider
  apiKey: string
  model: string
}
