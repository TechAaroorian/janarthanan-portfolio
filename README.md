# 🌐 Janarthanan Soundhararajan — Interactive Engineering Portfolio & Resume

[![Live Demo](https://img.shields.io/badge/Live%20Site-janarthanan--dev.com-06B6D4?style=for-the-badge&logo=googlechrome&logoColor=white)](https://janarthanan-dev.com)
[![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![React](https://img.shields.io/badge/React_18/19-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://react.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev/)

> **Live Portfolio:** [https://janarthanan-dev.com](https://janarthanan-dev.com)  
> **Role Target:** Senior Frontend Engineer / Lead Frontend Architect / Solution Architect  
> **Experience:** Nearly 10 Years in Enterprise Web & Mobile Architecture

---

## 📌 Architectural Overview

This repository houses the source code for my interactive developer portfolio and executive web resume. Built from the ground up as a **high-performance, static SPA (Single Page Application)**, it demonstrates senior-level frontend engineering practices, custom animation math, clean state boundaries, and automated CI/CD deployment pipelines.

```

```

              ┌─────────────────────────────────────────────────────────┐
              │                 janarthanan-dev.com                     │
              └────────────────────────────┬────────────────────────────┘
                                           │
           ┌───────────────────────────────┴───────────────────────────────┐
           ▼                                                               ▼

```

┌───────────────────────────┐                                  ┌───────────────────────────┐
│   Web Portfolio Mode      │                                  │     Print/PDF Engine      │
│   (Interactive WebGL/UI)  │                                  │  (ATS-Friendly PDF)       │
└─────────────┬─────────────┘                                  └─────────────┬─────────────┘
│                                                              │
┌──────────────┴──────────────┐                                ┌──────────────┴──────────────┐
│ • Three.js Dynamic Canvas   │                                │ • Media Query CSS Isolation │
│ • Trigonometric Arc Radial  │                                │ • 2-Page Executive Template │
│ • D3 Skill Evolution        │                                │ • Pixel-Perfect PDF Export  │
│ • DEV.to REST Endpoint      │                                │ • Zero UI Overhead          │
└─────────────────────────────┘                                └─────────────────────────────┘

```

---

## 🔥 Key Technical Highlights

### 1. 🎨 3D Interactive WebGL Hero Canvas

* **Engine:** Three.js / Canvas Context
* **Implementation:** Lightweight WebGL particle field reactive to cursor parallax and system color mode changes (`dark` / `light`), optimized to run at 60 FPS without layout thrashing.

### 2. 🧭 Trigonometric Arc Radial Navigation (`FloatingNav.tsx`)

* **Mathematical Layout:** Renders navigation items along a semi-circular arc calculated dynamically using trigonometric functions (`Math.cos`, `Math.sin`).
* **Active Observer:** Integrated with `IntersectionObserver` API to track scroll depth across 7 page sections with fallback logic for bottom-of-page triggers.

### 3. 📰 Dynamic DEV.to Articles Integration (`DevToArticles.tsx`)

* **API Integration:** Fetches published articles live from DEV.to's CORS-enabled REST API (`https://dev.to/api/articles?username=...`).
* **UI Resilience:** Includes custom animated CSS loading skeletons, reaction metrics, reading-time calculation, and graceful error boundary fallbacks.

### 4. 🖨️ Dual-Engine Print & ATS Resume System

* **CSS Isolation:** Utilizes strict `@media print` rules and `print:hidden` tailwind wrappers to cleanly segregate the interactive web layout from the downloadable PDF template.
* **ATS Compliance:** Outputs an executive 2-page print layout directly via `window.print()`, formatted for human recruiters and automated Applicant Tracking Systems.

---

## 🛠️ Technology Stack

| Layer | Technologies Used |
| :--- | :--- |
| **Core Framework** | React 18/19, TypeScript (Strict Mode) |
| **Build Tooling** | Vite, SWC / Oxc |
| **Styling & Theme** | Tailwind CSS v3/v4, Glassmorphism, Dark/Light Mode Engine |
| **Graphics & Charts** | Three.js (WebGL), Lucide React Icons |
| **State & API** | React Hooks, Native Fetch (CORS REST Integration), IntersectionObserver |
| **Hosting & CI/CD** | GitHub Pages, Custom DNS (`janarthanan-dev.com`), Automated Deployment Workflow |

---

## 🚀 Local Development Setup

To run this application locally on your machine:

### 1. Clone the repository

```bash
git clone [https://github.com/TechAaroorian/janarthanan-portfolio.git](https://github.com/TechAaroorian/janarthanan-portfolio.git)
cd janarthanan-portfolio

```

### 2. Install dependencies

```bash
npm install

```

### 3. Start the Vite development server

```bash
npm run dev

```

Open `http://localhost:5173` in your browser.

### 4. Build for production

```bash
npm run build

```

---

## 📂 Project Directory Structure

```text
[janarthanan-dev.com/](https://janarthanan-dev.com/)
├── public/                  # Favicons, CNAME file for custom domain routing
├── src/
│   ├── components/
│   │   ├── education/       # Education history components
│   │   ├── experience/      # Role timeline & architectural achievements
│   │   ├── layout/          # Header, Hero Canvas, Theme Toggles
│   │   ├── skills/          # Skill matrix & D3 skill evolution visualizer
│   │   ├── summary/         # Professional executive summary
│   │   ├── ui/              # FloatingNav arc menu, buttons, skeletons
│   │   ├── DevToArticles.tsx# DEV.to REST API component
│   │   ├── Footer.tsx       # Glassmorphic footer & back-to-top trigger
│   │   └── PrintResume.tsx  # Pure CSS printable resume layout
│   ├── App.tsx              # Root application composition & layout boundaries
│   ├── main.tsx             # Vite React DOM root entry
│   └── index.css            # Global Tailwind directives & @media print rules
├── vite.config.ts           # Vite build & plugin configuration
└── package.json             # Scripts & production dependencies

```

---

## 📬 Contact & Technical Portfolio

* **Website:** [janarthanan-dev.com](https://janarthanan-dev.com)
* **Email:** [janarthanan1821993@gmail.com](mailto:janarthanan1821993%40gmail.com)
* **LinkedIn:** [Janarthanan Soundhararajan](https://www.linkedin.com/in/janarthanan-soundararajan-0544ab85/)
* **DEV.to:** [@janarthanan_soundararajan](https://dev.to/janarthanan_soundararajan)
* **Location:** Thiruvarur, Tamil Nadu, India (Open for Remote & Relocation)

---

© 2026 Janarthanan Soundhararajan. Designed and engineered with React, TypeScript, and Tailwind CSS.
