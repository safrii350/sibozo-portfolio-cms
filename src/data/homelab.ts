import type { HomelabEntry } from '../types/content'

export const homelabEntries: HomelabEntry[] = [
  {
    id: 'linux-workstation',
    title: 'Linux als tägliche Arbeitsumgebung',
    description: 'Debian ist mein Hauptsystem. Zuvor habe ich Ubuntu und Arch Linux genutzt und unterschiedliche Setups praktisch kennengelernt.',
    technologies: ['Debian', 'Wayland', 'Hyprland'],
    detail: 'Shell, Terminal, Dotfiles und Setup-Skripte passe ich an meinen eigenen Workflow an.',
  },
  {
    id: 'selfhosting',
    title: 'Dienste selbst betreiben',
    description: 'Auf eigenen Systemen und VPS-Instanzen habe ich verschiedene Dienste eingerichtet und deren Betrieb erprobt.',
    technologies: ['Nextcloud', 'Pi-hole', 'Guacamole'],
    detail: 'Dazu gehören DNS, Reverse Proxy, Updates und die grundlegende Absicherung der Dienste.',
  },
  {
    id: 'networking-monitoring',
    title: 'Netzwerk & Monitoring erproben',
    description: 'Virtuelle Maschinen, virtuelle Netzwerke und sichere Remote-Zugänge nutze ich als praktische Lernumgebung.',
    technologies: ['WireGuard', 'OpenVPN', 'Prometheus', 'Grafana'],
    detail: 'Monitoring und Containerisierung habe ich bisher grundlegend getestet und baue diese Kenntnisse weiter aus.',
  },
]
