import type { Project } from '../types/content'

export const projects: Project[] = [
  {
    id: 'traineebook',
    title: 'Traineebook',
    description:
      'Eine webbasierte Anwendung zur Erstellung, Verwaltung und Freigabe digitaler Ausbildungsnachweise. Auszubildende können Wochenberichte einreichen, während Ausbilder diese prüfen, freigeben oder ablehnen.',
    technologies: ['PHP', 'Laravel', 'Blade', 'JavaScript', 'MySQL'],
    status: 'Abschlussprojekt',
    featured: true,
  },
  {
    id: 'portfolio-cms',
    title: 'sibozo.de',
    description:
      'Dieses persönliche Portfolio entsteht als schlanker React-One-Pager und wird später um ein eigenes CMS mit Supabase erweitert.',
    technologies: ['React', 'TypeScript', 'Vanilla CSS', 'Vite'],
    status: 'In Entwicklung',
  },
  {
    id: 'vista-aero-frutiger',
    title: 'Vista Aero Frutiger',
    description:
      'Eine interaktive Browser-Hommage an Windows Vista, Frutiger Aero und die optimistische Desktop-Ästhetik der späten 2000er – mit Fenstern, Startmenü, Desktop-Icons und kleinen spielerischen Details.',
    technologies: ['HTML', 'CSS', 'JavaScript'],
    status: 'Live',
    url: 'https://windowsvista.pages.dev/',
  },
  {
    id: 'wizbase',
    title: 'Wizbase',
    description:
      'Eine persönliche Wissensdatenbank und Notiz-Web-App, in der sich unterschiedliche Notizen, Anleitungen und hilfreiche Informationen übersichtlich festhalten und wiederfinden lassen.',
    technologies: ['HTML', 'CSS', 'React'],
    status: 'Live',
    url: 'https://wizbase.pages.dev/',
  },
  {
    id: 'linux-setup',
    title: 'Persönliches Linux-Setup',
    description:
      'Individuell eingerichtete Debian-Arbeitsumgebung mit Hyprland, angepasster Shell, Dotfiles und kleinen Setup-Skripten.',
    technologies: ['Debian', 'Hyprland', 'Shell', 'Dotfiles'],
    status: 'Privates Projekt',
  },
]
