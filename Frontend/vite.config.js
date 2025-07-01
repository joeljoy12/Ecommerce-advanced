import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from 'tailwindcss';
import dotenv from 'dotenv';


 const env = dotenv.config()
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(),tailwindcss(),],
  base:env.VITE_BASE_PATH ||'/Dashboard-advanced'
});
