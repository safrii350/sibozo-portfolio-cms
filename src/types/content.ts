export type Project = {
  id: string
  title: string
  description: string
  technologies: string[]
  status: 'Abschlussprojekt' | 'In Entwicklung' | 'Privates Projekt' | 'Live'
  featured?: boolean
  url?: string
  repositoryUrl?: string
}

export type SkillGroup = {
  id: string
  title: string
  description: string
  skills: string[]
}

export type HomelabEntry = {
  id: string
  title: string
  description: string
  technologies: string[]
  detail: string
}

export type Profile = {
  name: string
  role: string
  location: string
  email: string
  introduction: string
  focus: string[]
}

export type CareerEntry = {
  id: string
  period: string
  company: string
  role: string
  description: string
}

export type Theme = 'light' | 'dark' | 'retro'
