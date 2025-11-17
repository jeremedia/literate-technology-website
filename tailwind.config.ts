import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Editorial Futurism palette
        'electric-blue': '#0EA5E9',
        'terminal-green': '#00FF41',
        'amber-warning': '#F59E0B',
      },
      fontFamily: {
        // Display: Crimson Pro (serif, editorial)
        display: ['Crimson Pro', 'Georgia', 'serif'],
        // Body: Literata (readable serif)
        body: ['Literata', 'Georgia', 'serif'],
        // Code: JetBrains Mono
        mono: ['JetBrains Mono', 'Courier New', 'monospace'],
      },
      maxWidth: {
        'reading': '65ch',
      },
      typography: {
        DEFAULT: {
          css: {
            maxWidth: '65ch',
            color: '#000',
            lineHeight: '1.75',
            fontSize: '1.125rem',
          },
        },
      },
    },
  },
  plugins: [],
};

export default config;
