# sibozo.de – Personal Portfolio CMS

Persönliche Portfolio-Webseite für Michael Sibozo. Die Anwendung präsentiert seinen Werdegang,
seine Kenntnisse in Webentwicklung, Linux und IT-Support sowie ausgewählte Projekte in einem
responsiven React-One-Pager.

Das Projekt befindet sich in Phase 1. Alle Inhalte werden derzeit aus lokalen, typisierten
Datendateien geladen. Supabase und ein geschütztes Adminpanel sind für spätere Phasen vorgesehen.

## Aktueller Funktionsumfang

- responsive One-Page-Portfolio-Seite
- Bereiche für Hero, Über mich, Skills, Projekte, Linux/Homelab und Kontakt
- beruflicher Werdegang als kompakte Timeline
- lokale Projektdaten einschließlich Traineebook und verlinkter Live-Projekte
- Sticky Navbar mit Smooth Scroll
- Mobile Navigation als einfahrendes Seitenpanel
- Dark Mode als Standard sowie Light- und KDE-3.x-inspiriertes Retro-Theme
- gespeicherte Theme-Auswahl im lokalen Browserspeicher
- deutsche und englische Portfolio-Inhalte mit Sprachschalter im Footer
- lokal ausgelieferte Schrift IBM Plex Mono für das Retro-Theme
- gemeinsame Seite für Impressum und Datenschutz unter `/rechtliches`
- responsive und zugängliche Bedienelemente

## Tech-Stack

- React
- TypeScript
- Vite
- Vanilla CSS
- IBM Plex Mono über Fontsource
- Font Awesome Icons über lokale React-Pakete
- ESLint

Es werden keine UI-Library, kein CSS-Framework und kein externes Font-CDN verwendet.

## Lokal starten

Voraussetzung ist eine aktuelle Node.js-LTS-Version.

```bash
npm install
npm run dev
```

Vite zeigt anschließend die lokale Entwicklungsadresse im Terminal an.

## Verfügbare Skripte

```bash
npm run dev      # Entwicklungsserver starten
npm run lint     # TypeScript- und React-Code mit ESLint prüfen
npm run build    # TypeScript prüfen und Produktions-Build erstellen
npm run preview  # Produktions-Build lokal ausführen
```

Der fertige Produktions-Build wird im Verzeichnis `dist` erzeugt.

## Projektstruktur

```text
src/
├── components/  # Navbar, ThemeSwitcher und Footer
├── data/        # Profil, Werdegang, Skills, Projekte und Homelab
├── pages/       # eigenständige Ansichten wie die Rechteseite
├── sections/    # öffentliche Bereiche des One-Pagers
├── styles/      # Basis-, Layout-, Komponenten- und Theme-Styles
├── types/       # gemeinsame TypeScript-Datenmodelle
├── App.tsx
└── main.tsx
```

## Inhalte pflegen

Die öffentlichen Inhalte liegen aktuell in `src/data`:

- `profile.ts`: Name, Rolle, Kontakt und Schwerpunkte
- `career.ts`: beruflicher Werdegang
- `skills.ts`: Kenntnisbereiche und Technologien
- `projects.ts`: Portfolio- und Live-Projekte
- `homelab.ts`: Linux-, Selfhosting- und Homelab-Erfahrungen

Diese lokale Datenstruktur bildet die Grundlage für die spätere Ablösung durch Supabase.

## Themes

Die Theme-Auswahl durchläuft mit einem Button folgende Reihenfolge:

```text
Dark → Light → Retro → Dark
```

Dark ist bei einem Erstbesuch das Standard-Theme. Das Retro-Theme orientiert sich gestalterisch an
klassischen KDE-3.x-Desktop-Oberflächen. Die Auswahl wird im `localStorage` des Browsers gespeichert.

## Sprachen

Deutsch ist die Standardsprache. Über den Schalter `DE / EN` im Footer kann die öffentliche
Portfolio-Seite vollständig auf Englisch angezeigt werden. Die Auswahl wird im `localStorage`
gespeichert. Impressum und Datenschutzerklärung bleiben auf Deutsch; in der englischen Ansicht wird
darauf ausdrücklich hingewiesen.

## Rechtliches

Impressum und Datenschutzerklärung sind gemeinsam unter `/rechtliches` erreichbar und im Footer
verlinkt. Vor dem öffentlichen Deployment müssen die Angaben noch an den tatsächlichen
Hosting-Anbieter und einen möglichen Cloudflare-Proxy angepasst werden.

Bei einer Nginx-Bereitstellung benötigt die Anwendung eine SPA-Fallback-Regel auf `index.html`,
damit `/rechtliches` auch bei einem direkten Seitenaufruf funktioniert.

## Noch nicht enthalten

- Supabase Auth, Database und Storage
- Adminpanel unter `/admin`
- Datenbankgestützte Inhalte und CRUD-Funktionen
- Bild-Uploads
- Backend-Logik
- Tracking oder Analyse-Dienste

## Weitere Planung

Der ausführliche Projektfahrplan befindet sich in [`PROJECT_PLAN.md`](./PROJECT_PLAN.md). Priorität
haben zunächst die inhaltliche und visuelle Finalisierung sowie das Deployment der öffentlichen
Portfolio-Seite. Supabase und das Adminpanel folgen getrennt in späteren Phasen.
