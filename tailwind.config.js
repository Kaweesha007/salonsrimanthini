/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      'xs': '475px',
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    },
    extend: {
      colors: {
        // Brand Gold & Champagne
        gold: {
          50: 'var(--gold-50)',
          100: 'var(--gold-100)',
          200: 'var(--gold-200)',
          300: 'var(--gold-300)',
          400: 'var(--gold-400)',
          500: 'var(--gold-500)',
          600: 'var(--gold-600)',
          700: 'var(--gold-700)',
          800: 'var(--gold-800)',
          900: 'var(--gold-900)',
          DEFAULT: 'var(--gold-DEFAULT)',
        },
        champagne: {
          DEFAULT: 'var(--color-champagne)',
          light: 'var(--color-champagne-light)',
        },
        antique: {
          gold: 'var(--color-antique-gold)',
          bronze: 'var(--color-bronze-warm)',
        },

        // Editorial Noir & Obsidian
        noir: {
          50: 'var(--noir-50)',
          100: 'var(--noir-100)',
          200: 'var(--noir-200)',
          300: 'var(--noir-300)',
          400: 'var(--noir-400)',
          500: 'var(--noir-500)',
          600: 'var(--noir-600)',
          700: 'var(--noir-700)',
          800: 'var(--noir-800)',
          900: 'var(--noir-900)',
          950: 'var(--noir-950)',
          DEFAULT: 'var(--noir-DEFAULT)',
        },

        // Raw Silk & Warm Canvases
        surface: {
          canvas: 'var(--color-canvas)',
          subtle: 'var(--color-canvas-subtle)',
          warm: 'var(--color-canvas-warm)',
          pure: 'var(--color-surface-pure)',
          glass: 'var(--color-surface-glass)',
          'glass-dark': 'var(--color-surface-glass-dark)',
        },

        // Bridal Rose & Terracotta
        rose: {
          50: 'var(--rose-50)',
          100: 'var(--rose-100)',
          200: 'var(--rose-200)',
          300: 'var(--rose-300)',
          400: 'var(--rose-400)',
          500: 'var(--rose-500)',
          600: 'var(--rose-600)',
          700: 'var(--rose-700)',
          DEFAULT: 'var(--rose-DEFAULT)',
        },

        // Structural Hairlines
        rim: {
          hairline: 'var(--border-hairline)',
          subtle: 'var(--border-subtle)',
          gold: 'var(--border-gold-accent)',
        }
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', '"Playfair Display"', 'Georgia', 'serif'],
        display: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        sans: ['"Plus Jakarta Sans"', 'Inter', 'system-ui', 'sans-serif'],
        accent: ['"Italiana"', 'serif'],
      },
      letterSpacing: {
        'eyebrow': '0.22em',
        'luxury': '0.16em',
        'wide-caps': '0.12em',
        'tight-display': '-0.025em',
      },
      boxShadow: {
        'subtle': 'var(--shadow-subtle)',
        'elevated': 'var(--shadow-elevated)',
        'luxury': 'var(--shadow-luxury)',
        'glow': 'var(--shadow-glow)',
        'editorial': 'var(--shadow-editorial)',
      },
      borderRadius: {
        'xs': '4px',
        'sm': '8px',
        'md': '12px',
        'lg': '18px',
        'xl': '24px',
        '2xl': '32px',
        'pill': '9999px',
      },
      transitionTimingFunction: {
        'editorial': 'var(--ease-editorial)',
        'smooth': 'var(--ease-smooth)',
      }
    },
  },
  plugins: [],
}
