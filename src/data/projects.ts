import type { Project } from '../types/content'

export const projects: Project[] = [
  {
    id: 'traineebook',
    title: 'Traineebook',
    description:
      'Mit Traineebook können Auszubildende ihre Wochenberichte online schreiben und einreichen. Ausbilder können die Berichte anschließend prüfen, freigeben oder ablehnen.',
    technologies: ['PHP', 'Laravel', 'Blade', 'JavaScript', 'MySQL'],
    status: 'Abschlussprojekt',
    featured: true,
    url: 'https://traineebook.pages.dev/',
    linkType: 'documentation',
  },
  {
    id: 'portfolio-cms',
    title: 'sibozo.de',
    description:
      'Mein persönliches Portfolio als React-One-Pager. Später möchte ich die Inhalte über ein kleines Adminpanel mit Supabase verwalten.',
    technologies: ['React', 'TypeScript', 'Vanilla CSS', 'Vite'],
    status: 'In Entwicklung',
  },
  {
    id: 'vista-aero-frutiger',
    title: 'Vista World',
    description:
      'Eine kleine Desktop-Welt im Browser, inspiriert von Windows Vista und Frutiger Aero. Fenster, Startmenü, Desktop-Icons und weitere Details lassen sich direkt ausprobieren.',
    technologies: ['HTML', 'CSS', 'JavaScript'],
    status: 'Live',
    url: 'https://windowsvista.pages.dev/',
  },
  {
    id: 'wizbase',
    title: 'Wizbase',
    description:
      'Eine Web-App für Notizen, Anleitungen und Wissen, das ich nicht jedes Mal neu suchen möchte. Die Einträge lassen sich übersichtlich sammeln und später wiederfinden.',
    technologies: ['HTML', 'CSS', 'React'],
    status: 'Live',
    url: 'https://wizbase.pages.dev/',
  },
  {
    id: 'quizify',
    title: 'Quizify',
    description:
      'Eine moderne Quiz-App zur Vorbereitung auf die IHK-Abschlussprüfung für Fachinformatiker Anwendungsentwicklung. Sie kombiniert freie Eingaben und Multiple-Choice-Fragen mit Themes, Audio-Feedback, Fortschrittsanzeige und PDF-Export.',
    technologies: ['Python', 'PySimpleGUI'],
    status: 'Privates Projekt',
    repositoryUrl: 'https://github.com/safrii350/quizify',
  },
]
