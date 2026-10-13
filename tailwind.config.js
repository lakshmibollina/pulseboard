/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,jsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ['Sora', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        body: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      colors: {
        brand: {
          50: '#eef4ff',
          100: '#dce7fd',
          200: '#c0d4fc',
          300: '#94b8fa',
          400: '#6193f6',
          500: '#3d71f1',
          600: '#2857e5',
          700: '#2145d2',
          800: '#233aab',
          900: '#223686',
        },
        ink: {
          50: '#f6f7f9',
          100: '#eceef2',
          200: '#d5dae2',
          300: '#b1bac9',
          400: '#8694ab',
          500: '#677790',
          600: '#525f76',
          700: '#434e61',
          800: '#3a4252',
          900: '#1e2430',
        },
      },
      boxShadow: {
        soft: '0 20px 60px -20px rgba(40, 87, 229, 0.25)',
        card: '0 8px 30px -12px rgba(30, 36, 48, 0.18)',
        lift: '0 24px 48px -16px rgba(30, 36, 48, 0.25)',
      },
    },
  },
  plugins: [],
}
