# sibozo.de – Personal Portfolio CMS

## 1. Projektziel

Dieses Repository enthält das Projekt **sibozo.de – Personal Portfolio CMS**.

Ziel ist die Entwicklung einer persönlichen Portfolio-Web-App für **Michael Sibozo**. Die Website soll öffentlich als moderne One-Page-Portfolio-Seite dienen und später durch ein kleines geschütztes Adminpanel erweitert werden.

Die öffentliche Seite soll Bewerbungszwecken dienen und Michaels Profil in den Bereichen **Linux**, **Webentwicklung**, **Selfhosting**, **IT-Support** und **Systemadministration** darstellen.

Langfristig soll die Website nicht nur statisch gepflegt werden, sondern Inhalte wie Projekte, Screenshots, Skills und Homelab-Einträge über ein Adminpanel verwalten können.

---

## 2. Grundidee

Die Website besteht aus zwei Bereichen:

### Öffentlicher Bereich

Eine moderne One-Page-Portfolio-Website mit folgenden Sektionen:

1. Hero
2. Über mich
3. Skills
4. Projekte
5. Linux & Homelab
6. Kontakt

### Privater Adminbereich

Ein später geplanter geschützter Bereich unter `/admin`.

Dort sollen Inhalte gepflegt werden können, z. B.:

* Projekte
* Beschreibungen
* Screenshots
* Skills
* Homelab-Einträge
* Texte auf der Website

Der Adminbereich wird erst in einer späteren Phase umgesetzt.

---

## 3. Tech Stack

### Phase 1

Für die erste Version:

* React
* Vite
* JavaScript
* Vanilla CSS
* lokale Daten-Dateien
* kein Supabase
* kein Adminpanel
* kein Backend

### Spätere Phasen

Geplant:

* Supabase Auth
* Supabase Database
* Supabase Storage
* Adminpanel mit CRUD-Funktionalität
* Deployment auf Linux-VPS über CloudPanel/Nginx
* Domainverwaltung über Cloudflare

---

## 4. Designrichtung

Die Website soll nicht generisch oder wie ein typisches KI-Template wirken.

### Default-Design

Das Standarddesign soll sein:

* clean
* modern
* minimalistisch
* seriös
* bewerbungstauglich
* leichter Tech-Vibe
* gute Typografie
* dezente Akzentfarben
* responsive
* klare Sektionen
* moderne Buttons
* Cards mit eigener Designsprache
* keine übertriebenen Animationen

### Light/Dark Mode

Für das Default-Theme soll ein Light/Dark Mode vorbereitet werden.

Standardmäßig soll die Website eher neutral und seriös wirken. Light Mode ist als Standard sinnvoll, Dark Mode soll optional verfügbar sein.

### Retro Theme

Optional soll später ein Retro-Gimmick-Theme im Stil von Windows 98/2000 oder Y2K-Tech umgesetzt werden.

Das Retro-Theme ist kein Hauptdesign, sondern ein kreatives Zusatzfeature.

---

## 5. Inhaltlicher Kontext

### Person

Name: **Michael Sibozo**

Profil:

Michael Sibozo ist angehender Fachinformatiker für Anwendungsentwicklung mit starkem Interesse an Linux, Webentwicklung, Selfhosting und Systemadministration.

### Ausbildung

* Umschulung zum Fachinformatiker für Anwendungsentwicklung
* Bildungsträger: bfz gGmbH Ulm
* Zeitraum: 15.07.2024 bis 14.07.2026
* Betrieblicher Praxispartner: Systemhaus Ulm GmbH
* Fachpraktische Ausbildungsanteile abgeschlossen
* Betrieblicher Projektteil abgeschlossen
* Letzter schriftlicher Teil der IHK-Abschlussprüfung geplant für November 2026

### Bewerbungsschwerpunkt

Aktueller Fokus:

* Linux-Systemadministration
* IT-Support
* Webentwicklung
* Selfhosting
* Junior IT-Rollen

---

## 6. Praktische Erfahrung

Während der Praxisphasen bei der Systemhaus Ulm GmbH wurden unter anderem folgende Tätigkeiten ausgeführt:

* Mitarbeit im IT-Support
* Support-Telefon bedient
* einzelne Supportfälle bearbeitet
* Tickets geschrieben
* Geräte eingerichtet
* Software nach Vorgabe installiert
* Geräte in Domänen eingebunden
* Kundentermine begleitet
* Einblicke in FISI-nahe Tätigkeiten erhalten

Diese Inhalte sollen auf der Website sachlich und bewerbungstauglich dargestellt werden.

---

## 7. Abschlussprojekt

### Projektname

**Traineebook**

### Beschreibung

Traineebook ist eine webbasierte Anwendung zur Erstellung, Verwaltung und Freigabe digitaler Ausbildungsnachweise.

### Tech Stack

* PHP
* Laravel
* Blade
* HTML
* CSS
* JavaScript
* MySQL/MariaDB

### Funktionen

* Wochenberichte erstellen
* Wochenberichte bearbeiten
* Wochenberichte einreichen
* Berichte durch Ausbilder prüfen
* Berichte freigeben oder ablehnen
* rollenbasiertes Zugriffskonzept
* E-Mail-Benachrichtigungen
* PDF-Export für freigegebene Berichte

Traineebook soll als wichtiges Projekt auf der Website dargestellt werden.

---

## 8. Linux- und Homelab-Erfahrung

Michael beschäftigt sich privat intensiv mit Linux, Selfhosting und Systemadministration.

Relevante Inhalte:

* Debian als Hauptbetriebssystem
* vorher Ubuntu und Arch Linux genutzt
* Wayland/Hyprland-Umgebung individuell eingerichtet
* Terminal- und Shell-Konfiguration angepasst
* Dotfiles verwendet beziehungsweise erstellt
* Setup-Skripte für persönliche Linux-Arbeitsumgebungen
* Erfahrung mit VPS-Systemen
* Cloudflare DNS
* CloudPanel/Nginx
* Pi-hole
* Nextcloud
* Apache Guacamole
* OpenVPN/WireGuard
* Docker-Grundlagen
* Prometheus/Grafana getestet
* virtuelle Maschinen getestet
* virtuelle Netzwerke getestet

Diese Inhalte sollen nicht übertrieben dargestellt werden. Formulierungen sollen ehrlich bleiben, z. B. „erste Erfahrungen“, „privat getestet“, „eingerichtet“, „betrieben“ oder „Grundlagen“.

---

## 9. Geplante Projektphasen

## Phase 1 – Öffentliche Frontend-Basis

Ziel:

Eine erste lauffähige öffentliche One-Page-Portfolio-Website erstellen.

Umfang:

* React + Vite initialisieren
* Vanilla CSS verwenden
* saubere Komponentenstruktur erstellen
* lokale Daten-Dateien verwenden
* One-Pager mit Smooth Scroll
* responsive Layout
* Theme-System vorbereiten
* Light/Dark Mode vorbereiten
* Retro-Theme nur strukturell vorbereiten
* reale Dummy-Inhalte einfügen

Noch nicht enthalten:

* kein Supabase
* kein Adminpanel
* kein Login
* keine Upload-Funktion
* keine Datenbank
* kein Backend

Gewünschte Komponenten:

* Navbar
* ThemeSwitcher
* Hero
* About
* Skills
* Projects
* Homelab
* Contact
* Footer

Gewünschte Daten-Dateien:

* `data/profile.js`
* `data/skills.js`
* `data/projects.js`
* `data/homelab.js`

Ziel dieser Phase ist eine schnell sichtbare, bewerbungstaugliche erste Version.

---

## Phase 2 – Deployment-Grundlage

Ziel:

Die öffentliche Website auf einem Linux-VPS veröffentlichen.

Geplante Umgebung:

* Linux-VPS
* CloudPanel
* Nginx
* Cloudflare DNS
* SSL über Let’s Encrypt

Aufgaben:

* Build erstellen
* Website über CloudPanel/Nginx bereitstellen
* Domain `sibozo.de` verbinden
* HTTPS aktivieren
* einfache Deployment-Dokumentation schreiben

Dokumentation:

* `docs/server-setup.md`
* `docs/deployment.md`
* `docs/cloudflare-dns.md`

---

## Phase 3 – Security und Server-Basis

Ziel:

Den VPS bewusst schlank, stabil und sicher betreiben.

Geplante Maßnahmen:

* SSH absichern
* starke Passwörter oder SSH-Key-Login nutzen
* Firewall konfigurieren
* Fail2Ban einrichten
* automatische Sicherheitsupdates prüfen
* grundlegendes Monitoring verwenden

Kein Ziel dieser Phase:

* kein überladener Server
* keine unnötigen Dienste
* keine komplexe Infrastruktur
* keine große Homelab-Umgebung auf diesem Bewerbungsserver

Dokumentation:

* `docs/security-hardening.md`
* optional `docs/monitoring.md`

---

## Phase 4 – Supabase-Anbindung

Ziel:

Die bisher lokalen Daten später durch Supabase-Daten ersetzen.

Geplante Supabase-Bereiche:

* Auth
* Database
* Storage

Mögliche Tabellen:

### `projects`

* id
* title
* slug
* description
* tech_stack
* github_url
* demo_url
* image_url
* sort_order
* published
* created_at
* updated_at

### `homelab_entries`

* id
* title
* category
* description
* tools
* image_url
* published
* created_at
* updated_at

### `skills`

* id
* name
* category
* sort_order
* visible

Sicherheit:

* Row Level Security beachten
* öffentliche Seite darf nur veröffentlichte Inhalte lesen
* Adminaktionen nur für authentifizierten Admin
* keine geheimen Keys im Frontend
* nur Supabase anon key im Frontend verwenden

Dokumentation:

* `docs/supabase-setup.md`

---

## Phase 5 – Adminpanel

Ziel:

Ein geschütztes Adminpanel unter `/admin` erstellen.

Geplante Funktionen:

* Admin-Login
* Dashboard
* Projekte erstellen
* Projekte bearbeiten
* Projekte löschen
* Projekte veröffentlichen/verstecken
* Homelab-Einträge erstellen
* Homelab-Einträge bearbeiten
* Homelab-Einträge löschen
* Screenshots/Bilder hochladen
* Inhalte auf der öffentlichen Seite pflegen

Wichtig:

`/admin` ist kein Sicherheitsmechanismus. Die Sicherheit muss über Authentifizierung, Supabase Policies und saubere Zugriffsregeln umgesetzt werden.

---

## Phase 6 – Feinschliff und Bewerbungsversion

Ziel:

Die Website als professionelle Bewerbungsseite finalisieren.

Aufgaben:

* Texte überarbeiten
* Projekte priorisieren
* Screenshots ergänzen
* README verbessern
* GitHub-Repo aufräumen
* Deployment-Dokumentation fertigstellen
* Mobile-Ansicht testen
* Performance prüfen
* Rechtschreibung prüfen
* Kontaktmöglichkeiten prüfen

Wichtig:

Die Website muss nicht perfekt sein. Sie muss stabil, seriös, verständlich und online sein.

---

## 10. Arbeitsweise für den Coding-Agent

Der Agent soll:

* immer zuerst planen
* keine großen Änderungen ohne Freigabe durchführen
* schrittweise arbeiten
* keine unnötig komplexen Lösungen vorschlagen
* keine Supabase-Integration vor Phase 4 beginnen
* kein Adminpanel vor Phase 5 beginnen
* keine UI-Library verwenden
* keine fertigen Templates verwenden
* Vanilla CSS mit CSS-Variablen bevorzugen
* saubere Komponentenstruktur nutzen
* auf responsive Design achten
* semantisches HTML beachten
* zugängliche UI-Komponenten bauen
* keine Git-Commits ausführen, außer es wird ausdrücklich verlangt
* auf Deutsch erklären, was gemacht wird

---

## 11. Priorität

Die wichtigste Priorität ist eine schnelle, sichtbare und bewerbungstaugliche Version.

Reihenfolge:

1. öffentliche Website sichtbar machen
2. Design und Inhalte stabilisieren
3. Deployment durchführen
4. danach Supabase/Adminpanel ergänzen

Nicht zuerst:

* Adminpanel
* Datenbank
* Auth
* Uploads
* komplexe Animationen
* perfekte Theme-Systeme
* zu viele Dienste auf dem VPS

---

## 12. Kurzbeschreibung für README

**sibozo.de – Personal Portfolio CMS**

Personal Portfolio CMS for sibozo.de built with React, Supabase and Vanilla CSS.

The project starts as a clean one-page portfolio website and is planned to evolve into a small portfolio CMS with Supabase Auth, database-backed content, image uploads and a protected admin panel.

The website is intended to present Michael Sibozo’s background in web development, Linux, selfhosting, IT support and system administration.
