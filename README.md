# 🛡️ Army of Nix — Interactive Cyber Defense Platform

![License](https://img.shields.io/badge/license-MIT-green.svg)
![Status](https://img.shields.io/badge/status-Active--Development-brightgreen.svg)
![Theme](https://img.shields.io/badge/UI--Style-Cyberpunk%20%2F%20HUD-00FF66.svg)

**Army of Nix** is a Army of Nix is a cyber defense, telemetry, and information security education platform and initiative conceived locally to democratize digital hygiene and protection.
The ecosystem integrates free-access tools and practical learning aimed at individuals, students, startups, and small to medium-sized enterprises (SMEs) that lack the resources to access traditional cyber consulting.

---

## 🚀 Key Features

* **Interactive Network Scanner & Terminal Simulator:** 
  * Real-time terminal log outputs and assembler stream animations.
  * Multi-step lead capture workflow for corporate diagnostic requests.
* **Particle Constellation Canvas (`js/constellations.js`):**
  * Interactive background rendering connected node networks that respond dynamically to cursor movement.
* **Tactical Operations Chronogram:**
  * Interactive schedule tracking upcoming CTF competitions, cyber defense briefings, and open-source workshops.
* **Modular Multi-Page UI Structure:**
  * Responsive HUD frames and navigation for services, tools, contact, and company information.
* **Database & Telemetry Payload Readiness:**
  * Asynchronous JSON data pipeline built into form submissions to communicate securely with backend APIs and databases.

---

## 📂 Project Architecture

The project is structured following clean development practices for web applications:

```text
Army-of-nix/
│
├── index.html              # Main landing page & terminal scanner
├── about_us.html           # Company mission & team information
├── services.html          # Cyber defense & audit service modules
├── tools.html             # Diagnostic tools & utilities
├── contact.html           # Contact form & intake terminal
│
├── css/
│   └── style.css          # Core HUD, theme, and layout stylesheet
│
├── js/
│   ├── constellations.js  # Interactive particle mesh canvas engine
│   ├── matrix.js         # Matrix code stream background effect
│   ├── scanner.js        # Terminal log logic & lead flow controller
│   └── script.js         # Global navigation & general UI logic
│
└── img/                   # Asset storage for logos and media
    ├── Logo-central.jpg
    └── Logo-central_Nero.jpeg
