import type { Config } from 'tailwindcss';

const labelWidths = {
  'label-2in': '2in',
  'label-3in': '3in',
  'label-4in': '4in',
  'label-6in': '6in'
};

const labelHeights = {
  'label-1in': '1in',
  'label-2in': '2in',
  'label-3in': '3in',
  'label-6in': '6in'
};

const config: Config = {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif']
      },
      maxWidth: {
        ...labelWidths
      },
      maxHeight: {
        ...labelHeights
      },
      spacing: {
        ...labelWidths,
        ...labelHeights
      },
      borderRadius: {
        label: '0.125in'
      },
      boxShadow: {
        label: '0 20px 45px -20px rgba(15, 23, 42, 0.65)'
      }
    }
  },
  plugins: []
};

export default config;
