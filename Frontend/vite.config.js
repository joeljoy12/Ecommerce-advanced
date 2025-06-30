import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/postcss';
import dotenv from 'dotenv';

dotenv.config();

export default defineConfig({
  plugins: [
    react(),
  ],

  root: './src',
  entry: 'main.jsx',
  css: {
    postcss: {
      plugins: [
        react(),tailwindcss(),
      ],
    },
  },
  base: import.meta.env.VITE_BASE_PATH || "/Ecommerce-advanced",
});