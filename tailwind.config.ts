import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./src/**/*.{ts,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        ink: {
          DEFAULT: 'rgb(var(--ink) / <alpha-value>)',
          2: 'rgb(var(--ink-2) / <alpha-value>)',
        },
        paper: 'rgb(var(--paper) / <alpha-value>)',
        mist: 'rgb(var(--mist) / <alpha-value>)',
        line: 'rgb(var(--line) / <alpha-value>)',
        muted: 'rgb(var(--muted) / <alpha-value>)',
        accent: {
          DEFAULT: 'rgb(var(--accent) / <alpha-value>)',
          2: 'rgb(var(--accent-2) / <alpha-value>)',
        },
        success: 'rgb(var(--success) / <alpha-value>)',
      },
      fontFamily: {
        sans: ['var(--font-sans)', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        display: ['var(--font-display)', 'var(--font-sans)', 'system-ui', 'sans-serif'],
        mono: ['var(--font-mono)', 'ui-monospace', 'SFMono-Regular', 'monospace'],
        logo: ['var(--font-logo)', 'var(--font-display)', 'system-ui', 'sans-serif'],
      },
      maxWidth: {
        container: '1280px',
        prose: '70ch',
      },
      letterSpacing: {
        eyebrow: '0.18em',
      },
      fontSize: {
        display: ['clamp(2.5rem, 1.6rem + 3.8vw, 4.5rem)', { lineHeight: '1.04', letterSpacing: '-0.02em' }],
        'display-sm': ['clamp(2rem, 1.4rem + 2.6vw, 3.25rem)', { lineHeight: '1.08', letterSpacing: '-0.018em' }],
      },
      boxShadow: {
        card: '0 1px 2px rgb(10 26 47 / 0.04), 0 8px 24px -12px rgb(10 26 47 / 0.12)',
        lift: '0 2px 4px rgb(10 26 47 / 0.05), 0 18px 40px -16px rgb(10 26 47 / 0.22)',
      },
      keyframes: {
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(12px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        'fade-up': 'fade-up 0.6s ease-out both',
      },
    },
  },
  plugins: [],
};

export default config;
