import type { CareerEntry, HomelabEntry, Project, SkillGroup } from '../types/content'

export const ui = {
  de: {
    nav: ['Über mich', 'Skills', 'Projekte', 'Homelab', 'Kontakt'],
    hello: 'Hallo, ich bin Michael Sibozo.', heroTitle: 'Webentwicklung,', heroAccent: 'Linux und Selfhosting.',
    intro: 'Angehender Fachinformatiker für Anwendungsentwicklung mit Fokus auf Webentwicklung, Linux und Selfhosting.',
    projectsButton: 'Projekte ansehen', contactButton: 'Kontakt aufnehmen',
    aboutLabel: '01 / Über mich', aboutTitle: 'Ein paar Worte über mich.',
    skillsLabel: '02 / Skills', skillsTitle: 'Womit ich arbeite.', skillsIntro: 'Technologien und Themen, mit denen ich in Ausbildung, Praxisphasen und eigenen Projekten gearbeitet habe.',
    projectsLabel: '03 / Projekte', projectsTitle: 'Meine Projekte.', projectsIntro: 'Ausgewählte Projekte aus Umschulung, Praxis und privaten Lernprojekten.',
    homelabLabel: '04 / Linux & Homelab', homelabTitle: 'Linux & Homelab.', homelabIntro: 'In meinem Homelab und auf eigenen VPS probiere ich Linux-Systeme, Dienste und Infrastrukturthemen praktisch aus. Nicht jedes Setup funktioniert auf Anhieb – gerade bei der Fehlersuche und Optimierung lerne ich viel über die Zusammenhänge.',
    contactLabel: '05 / Kontakt', contactTitle: 'Kontakt.', contactText: 'Aktuell suche ich den Berufseinstieg in der IT, idealerweise an der Schnittstelle von Linux, Webentwicklung, Support und Systemadministration. Bei Fragen oder Interesse freue ich mich über eine Nachricht.',
    live: 'Live', repository: 'Repository', legal: 'Rechtliches', top: 'Nach oben ↑', navigation: 'Navigation',
  },
  en: {
    nav: ['About', 'Skills', 'Projects', 'Homelab', 'Contact'],
    hello: "Hi, I'm Michael Sibozo.", heroTitle: 'Web development,', heroAccent: 'Linux and self-hosting.',
    intro: 'Aspiring IT specialist in application development focused on web development, Linux and self-hosting.',
    projectsButton: 'View projects', contactButton: 'Get in touch',
    aboutLabel: '01 / About', aboutTitle: 'A little about me.',
    skillsLabel: '02 / Skills', skillsTitle: 'What I work with.', skillsIntro: 'Technologies and topics I have worked with during training, practical placements and personal projects.',
    projectsLabel: '03 / Projects', projectsTitle: 'My projects.', projectsIntro: 'Selected work from my training, practical experience and personal learning projects.',
    homelabLabel: '04 / Linux & Homelab', homelabTitle: 'Linux & Homelab.', homelabIntro: 'In my homelab and on my own VPS instances, I explore Linux systems, services and infrastructure hands-on. Troubleshooting and optimization help me understand how the different parts work together.',
    contactLabel: '05 / Contact', contactTitle: 'Contact.', contactText: 'I am currently looking for an entry-level IT role at the intersection of Linux, web development, support and system administration. Feel free to get in touch if you have any questions or opportunities.',
    live: 'Live', repository: 'Repository', legal: 'Legal notice & privacy', top: 'Back to top ↑', navigation: 'Navigation',
  },
} as const

export const aboutEn = {
  lead: 'I am Michael Sibozo and currently completing my retraining as an IT specialist in application development.',
  paragraphs: [
    'The final written part of my Chamber of Commerce (IHK) examination is scheduled for November 2026.',
    'My practical placements took place at Systemhaus Ulm GmbH, with a focus on application development using PHP, Laravel, SQL and Livewire. I built a forum with CRUD functionality and contributed to an internal HR web application.',
    'I also gained experience in system-integration-related work, including IT support, ticket handling, device setup and customer appointments.',
    'My interest in technology began long before my retraining. I have built PCs, configured systems and solved technical problems for years. After working in consulting and customer service, I deliberately chose to move into IT and work directly with systems and software.',
    'Debian is my main operating system. I customize my work environment and spend my free time working on Linux setups, web projects, self-hosting and scripts. I learn most by setting things up myself, analyzing problems and implementing practical solutions.',
  ],
}

export const skillGroupsEn: SkillGroup[] = [
  { id: 'web-development', title: 'Web Development', description: 'The focus of my retraining, placements and personal projects.', skills: ['PHP', 'Laravel', 'Livewire', 'SQL', 'JavaScript', 'React', 'TypeScript', 'HTML', 'CSS', 'Git'] },
  { id: 'linux', title: 'Linux & Self-hosting', description: 'Topics I work with on my own systems and VPS instances.', skills: ['Debian', 'Shell', 'Nginx', 'Docker Basics', 'Nextcloud'] },
  { id: 'networking', title: 'Networking & Infrastructure', description: 'Foundations gained through work experience, my homelab and self-hosted services.', skills: ['DNS', 'TCP/IP Basics', 'Routers', 'Switches', 'VPN Basics', 'WireGuard', 'Reverse Proxy', 'Virtual Networks', 'Cloudflare'] },
  { id: 'support', title: 'IT Support & Communication', description: 'Many years of experience working with private and business customers.', skills: ['Ticket Systems', 'Device Setup', 'Active Directory / Windows Domains', 'Troubleshooting', 'Customer Support', 'VoIP', 'Cloud PBX'] },
]

export const projectsEn: Project[] = [
  { id: 'traineebook', title: 'Traineebook', description: 'A web application where trainees can write and submit weekly training reports. Trainers can review, approve or reject them.', technologies: ['PHP', 'Laravel', 'Blade', 'JavaScript', 'MySQL'], status: 'Abschlussprojekt', featured: true },
  { id: 'portfolio-cms', title: 'sibozo.de', description: 'My personal portfolio built as a React one-pager. I plan to manage its content through a small Supabase admin panel.', technologies: ['React', 'TypeScript', 'Vanilla CSS', 'Vite'], status: 'In Entwicklung' },
  { id: 'vista-aero-frutiger', title: 'Vista World', description: 'A small desktop world in the browser inspired by Windows Vista and Frutiger Aero, with interactive windows, a start menu and desktop icons.', technologies: ['HTML', 'CSS', 'JavaScript'], status: 'Live', url: 'https://windowsvista.pages.dev/' },
  { id: 'wizbase', title: 'Wizbase', description: 'A web app for keeping notes, guides and useful knowledge organized and easy to find again.', technologies: ['HTML', 'CSS', 'React'], status: 'Live', url: 'https://wizbase.pages.dev/' },
  { id: 'linux-setup', title: 'Linux Setup', description: 'A Bash script that automates a fresh Linux workstation setup, including terminal tools and my personal dotfiles.', technologies: ['Bash', 'Shell', 'Git', 'Dotfiles', 'Oh My Posh', 'Fastfetch'], status: 'Privates Projekt' },
]

export const homelabEn: HomelabEntry[] = [
  { id: 'linux-workstation', title: 'Linux Workstation', description: 'A ThinkPad E15 running Debian 13 is my only and daily computer. Depending on the task, I use KDE Plasma on X11 or my Hyprland setup on Wayland.', technologies: ['Debian 13', 'KDE Plasma', 'X11', 'Wayland', 'Hyprland', 'Shell', 'Dotfiles'], detail: 'I use this workstation to develop web projects and manage my VPS instances and self-hosted services.' },
  { id: 'vps-selfhosting', title: 'Linux, VPS & Self-hosting', description: 'I have set up and operated services on several VPS instances, including Nextcloud, Apache Guacamole, Cloudron and CloudPanel.', technologies: ['Linux', 'VPS', 'Nextcloud', 'Guacamole', 'Cloudron', 'CloudPanel', 'Nginx'], detail: 'This includes installation, configuration, updates and publishing my own services.' },
  { id: 'network-security', title: 'Networking & Security', description: 'I have created virtual machines and isolated virtual networks for test environments and explored different network services.', technologies: ['DNS', 'Firewall', 'Pi-hole', 'OpenVPN', 'WireGuard', 'VMs'], detail: 'This includes DNS configuration, filtering and secure remote access through VPNs.' },
  { id: 'containers-monitoring-ai', title: 'Containers, Monitoring & Local AI', description: 'I use Docker to run services and development tools and to assemble my own setups.', technologies: ['Docker', 'Prometheus', 'Grafana', 'Ollama', 'Open WebUI', 'n8n', 'Langflow'], detail: 'I have set up and tested monitoring, automation and local AI applications in private environments.' },
]

export const careerEn: CareerEntry[] = [
  { id: 'concentrix', period: '09/2022 – 09/2023', company: 'Concentrix GmbH', role: 'Meta Marketing/Tech Pro', description: 'Advised SMEs on Meta advertising campaigns and set up technical marketing tools.' },
  { id: 'invacon', period: '04/2022 – 09/2022', company: 'Invacon Dialog Marketing GmbH', role: 'Customer Service Agent', description: 'Handled customer enquiries about BMW services by phone.' },
  { id: 'homechannel24', period: '09/2020 – 03/2022', company: 'Homechannel24 GmbH', role: 'Vodafone Care Agent', description: 'Provided front- and back-office support and assisted new and existing team members as a subject matter contact.' },
  { id: 'telekom', period: '09/2016 – 02/2020', company: 'Deutsche Telekom Service GmbH', role: 'SME Account Advisor', description: 'Provided technical and commercial support for business customers covering telecommunications, networking, VoIP and Cloud PBX.' },
  { id: 'druckertankstellen', period: '08/2011 – 01/2015', company: 'Druckertankstellen Rhein-Main', role: 'Retail & Technical Service', description: 'Sold, maintained and repaired printers, PCs, notebooks and accessories.' },
]
