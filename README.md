# Sparsh Sanghavi — 3D Portfolio

Personal portfolio website built with React, TypeScript, Three.js, React Three Fiber, and GSAP. Features an animated 3D character scene, scroll-driven interactions, custom cursor, and smooth transitions.

Live site: [https://github.com/Sparshs48/3d-portfolio](https://github.com/Sparshs48/3d-portfolio)

## About

Software Engineer with 3+ years of experience in Java, Spring Boot, Node.js, React, and cloud-native systems (AWS, Azure, Docker, Kubernetes). Currently at Findways, USA. M.S. Computer Software Engineering — Northeastern University.

## Tech Stack

### Core
- React 18
- TypeScript
- Vite

### Animation and 3D
- GSAP + `@gsap/react`
- Three.js
- `@react-three/fiber`
- `@react-three/drei`
- `@react-three/postprocessing`
- `@react-three/rapier`

### Supporting Libraries
- `react-icons`
- `react-fast-marquee`
- `@vercel/analytics`

## Project Structure

```text
.
├── public/
│   ├── models/                    # 3D character model + HDR environment
│   ├── images/                    # Project images and tech stack icons
│   └── Sparsh_Sanghavi_Resume.pdf
├── src/
│   ├── components/
│   │   ├── Character/             # 3D scene + character logic/utilities
│   │   ├── styles/                # Component CSS files
│   │   ├── About.tsx
│   │   ├── Career.tsx
│   │   ├── Contact.tsx
│   │   ├── Landing.tsx
│   │   ├── MainContainer.tsx
│   │   ├── Navbar.tsx
│   │   ├── TechStack.tsx
│   │   ├── WhatIDo.tsx
│   │   └── Work.tsx
│   ├── context/
│   ├── data/
│   ├── App.tsx
│   └── main.tsx
├── package.json
└── vite.config.ts
```

## Getting Started

### Prerequisites
- Node.js 18+
- npm 9+

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/Sparshs48/3d-portfolio.git
   cd 3d-portfolio
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Start the development server:

   ```bash
   npm run dev
   ```

4. Open `http://localhost:5173` in your browser.

## Available Scripts

- `npm run dev` — Start Vite dev server
- `npm run build` — Type-check and build for production
- `npm run preview` — Preview the production build locally
- `npm run lint` — Run ESLint

## Deployment

```bash
npm run build
```

Deploy the `dist/` folder to Netlify, Vercel, or Cloudflare Pages.

## License

MIT
