import forms from '@tailwindcss/forms';
import type {Config} from 'tailwindcss';

const config: Config = {
  content: ['./src/**/*.{ts,tsx}', './messages/**/*.json'],
  theme: {
    extend: {
      colors: {
        academy: {
          red: '#D40535',
          black: '#161719',
          graphite: '#111827',
          soft: '#F6F7F9',
          border: '#E5E7EB',
          text: '#5F6368',
          pattern: '#EEF0F3'
        }
      },
      boxShadow: {
        soft: '0 18px 50px rgba(17, 24, 39, 0.08)'
      }
    }
  },
  plugins: [forms]
};

export default config;
