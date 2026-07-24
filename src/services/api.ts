import axios from 'axios';

// In production the contact endpoint is served by the Cloudflare Pages
// Function in functions/api/contact.ts; in local dev it's the Express
// server in backend/ (npm run dev there, listens on :4000).
export const api = axios.create({
  baseURL: import.meta.env.DEV ? 'http://localhost:4000/api' : '/api',
  headers: {
    'Content-Type': 'application/json'
  }
});
