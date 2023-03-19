import { defineConfig } from 'windicss/helpers'

export default defineConfig({
  preflight: true,
  attributify: false,
  theme: {
    extend: {
      colors: {
        'brand-dark-green': '#274c5b',
        'brand-light-green': '#7eb693',
        'brand-yellow': '#efd372',
        'brand-light-1': '#f9f8f8',
        'brand-light-2': '#eff6f1',
        'brand-light-3': '#d4d4d4',
        'brand-dark': '#525c60',
      },
    },
  },
})
