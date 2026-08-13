import type { SkillGroup } from '../types/content'

export const skillGroups: SkillGroup[] = [
  {
    id: 'web-development',
    title: 'Webentwicklung',
    description: 'Schwerpunkt meiner Umschulung, Praxisphasen und eigenen Projekte.',
    skills: ['PHP', 'Laravel', 'Livewire', 'SQL', 'JavaScript', 'React', 'TypeScript', 'HTML', 'CSS', 'Git'],
  },
  {
    id: 'linux',
    title: 'Linux & Selfhosting',
    description: 'Damit beschäftige ich mich auf meinen eigenen Systemen und VPS-Instanzen.',
    skills: ['Debian', 'Shell', 'Nginx', 'Docker-Grundlagen', 'Nextcloud'],
  },
  {
    id: 'networking',
    title: 'Netzwerk & Infrastruktur',
    description: 'Grundlagen aus Berufserfahrung, Homelab und selbst betriebenen Diensten.',
    skills: ['DNS', 'TCP/IP-Grundlagen', 'Router', 'Switches', 'VPN-Grundlagen', 'WireGuard', 'Reverse Proxy', 'Virtuelle Netzwerke', 'Cloudflare'],
  },
  {
    id: 'support',
    title: 'IT-Support & Kommunikation',
    description: 'Langjährige Erfahrung im Kontakt mit Privat- und Geschäftskunden.',
    skills: ['Ticketsysteme', 'Geräteeinrichtung', 'Active Directory / Windows-Domänen', 'Fehleranalyse', 'Kundensupport', 'VoIP', 'Cloud PBX'],
  },
]
