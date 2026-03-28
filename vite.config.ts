import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
const preservePreloads = () => ({
  name: "preserve-preloads",
  transformIndexHtml(html: string) {
    if (!html.includes('character.enc')) {
      return html.replace(
        '</head>',
        '  <link rel="preload" href="/models/character.enc?v=2" as="fetch" crossorigin="anonymous" />\n  </head>'
      );
    }
    return html;
  },
});

export default defineConfig({
  plugins: [react(), preservePreloads()],
  server: {
    allowedHosts: true,
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          "three-core": ["three"],
          "react-three": [
            "@react-three/fiber",
            "@react-three/drei",
            "@react-three/postprocessing",
          ],
          "rapier": ["@react-three/rapier"],
          "gsap": ["gsap"],
          "react-vendor": ["react", "react-dom"],
        },
      },
    },
  },
});
