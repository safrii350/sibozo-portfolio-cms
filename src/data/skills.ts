import type { SkillGroup } from '../types/content'

export const skillGroups: SkillGroup[] = [
  {
    id: 'development',
    title: 'Entwicklung',
    description: 'Kenntnisse aus Ausbildung, Abschlussprojekt und eigenen Webprojekten.',
    skills: ['PHP', 'Laravel', 'JavaScript', 'React', 'HTML', 'CSS', 'SQL'],
  },
  {
    id: 'linux',
    title: 'Linux & Selfhosting',
    description: 'Privat eingerichtet, betrieben und durch eigene Projekte vertieft.',
    skills: ['Debian', 'Docker-Grundlagen', 'Nginx', 'Cloudflare', 'Nextcloud', 'WireGuard'],
  },
  {
    id: 'support',
    title: 'IT-Support & Systeme',
    description: 'Praktische Einblicke während der betrieblichen Ausbildungsphasen.',
    skills: ['Ticketsysteme', 'Geräteeinrichtung', 'Windows-Domänen', 'Kundensupport', 'Git'],
  },
]
