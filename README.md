# Vertex Landing Page

Full-stack SaaS landing page for GIS mapping and surveillance monitoring.

## Structure

- `frontend`: React + Vite + TypeScript + Tailwind CSS
- `backend`: Node.js + Express + TypeScript

## Run

### Backend

```bash
cd backend
npm install
npm run dev
```

Backend runs on `http://localhost:4000`.

### Frontend

```bash
cd frontend
npm install
npm run dev
```

Frontend runs on `http://localhost:5173`.

The frontend is configured to call the backend at `http://localhost:4000/api`.
