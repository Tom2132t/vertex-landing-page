import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/vertex-landing-page/',
  plugins: [react()]
});
