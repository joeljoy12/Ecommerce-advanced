import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { createRequire } from 'module'; // Added to correct the issue
import tailwindcss from '@tailwindcss/postcss'
import dotenv from 'dotenv';

dotenv.config();

export default defineConfig({
  plugins: [
    react(),
  ],
  css: {
    postcss: {
      plugins: [
        tailwindcss(),
      ],
    },
  },
  base: process.env.VITE_BASE_PATH || "Ecommerce-advanced", // Adjusted to use process.env
});
