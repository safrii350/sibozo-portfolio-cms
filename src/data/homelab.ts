import type { HomelabEntry } from '../types/content'

export const homelabEntries: HomelabEntry[] = [
  {
    id: 'linux-workstation',
    title: 'Linux Workstation',
    description:
      'Ein ThinkPad E15 mit Debian 13 ist mein einziges und täglich genutztes Computersystem. Je nach Aufgabe arbeite ich mit KDE Plasma unter X11 oder mit meiner Hyprland-Umgebung unter Wayland.',
    technologies: ['Debian 13', 'KDE Plasma', 'X11', 'Wayland', 'Hyprland', 'Shell', 'Dotfiles'],
    detail:
      'Von dieser Workstation aus entwickle ich Webprojekte und verwalte meine VPS sowie selbst gehosteten Dienste.',
  },
  {
    id: 'vps-selfhosting',
    title: 'Linux, VPS & Selfhosting',
    description:
      'Auf mehreren VPS habe ich unterschiedliche Dienste eingerichtet und betrieben, darunter Nextcloud, Apache Guacamole, Cloudron und CloudPanel.',
    technologies: ['Linux', 'VPS', 'Nextcloud', 'Guacamole', 'Cloudron', 'CloudPanel', 'Nginx'],
    detail:
      'Dabei habe ich mich mit Installation, Konfiguration, Updates und der Veröffentlichung eigener Dienste beschäftigt.',
  },
  {
    id: 'network-security',
    title: 'Netzwerk & Sicherheit',
    description:
      'Für meine Testumgebungen habe ich virtuelle Maschinen und eigene virtuelle Netzwerke eingerichtet und darin verschiedene Netzwerkdienste ausprobiert.',
    technologies: ['DNS', 'Firewall', 'Pi-hole', 'OpenVPN', 'WireGuard', 'VMs'],
    detail:
      'Dazu gehören DNS-Konfiguration, Werbe- und DNS-Filterung sowie sichere Zugänge über VPN.',
  },
  {
    id: 'containers-monitoring-ai',
    title: 'Container, Monitoring & lokale KI',
    description:
      'Mit Docker habe ich verschiedene Dienste und Entwicklungswerkzeuge betrieben und eigene Setups zusammengestellt.',
    technologies: ['Docker', 'Prometheus', 'Grafana', 'Ollama', 'Open WebUI', 'n8n', 'Langflow'],
    detail:
      'Monitoring, Automatisierung und lokale KI-Anwendungen habe ich in privaten Umgebungen eingerichtet und getestet.',
  },
]
