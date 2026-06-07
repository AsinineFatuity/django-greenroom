# django-greenroom

A cloneable Django + React bootstrap for hybrid web apps. Django serves the SPA shell; Vite builds the frontend; Mantine and Redux give you a working UI layer on day one.

Named after Django's green — this is the room where your app gets ready before showtime.

## Stack

| Layer | Tech |
|-------|------|
| Backend | Django 6, python-decouple |
| Frontend | React 19, TypeScript, Vite 8 |
| UI | Mantine 9, Tailwind CSS 4, Tabler Icons |
| State | Redux Toolkit |
| Integration | django-vite, session + CSRF cookie auth (SPA-ready) |
| Tooling | [uv](https://docs.astral.sh/uv/) (Python), pnpm (Node) |

## Prerequisites

- Python 3.12+
- [uv](https://docs.astral.sh/uv/getting-started/installation/)
- [pnpm](https://pnpm.io/installation)
- Node.js 20+ (for Vite)

## Quick start

### 1. Clone and rename

```bash
git clone <your-repo-url> my-project
cd my-project
```

After cloning, rename project-specific bits to match your app:

- `pyproject.toml` → `name`
- `project/` → your Django package name (update imports in `manage.py`, `wsgi.py`, `asgi.py`)
- `production.py` → `ALLOWED_HOSTS`
- Home page copy in `frontend/src/pages/Home.tsx`

### 2. Environment

```bash
cp env.example .env
cp frontend/.env.example frontend/.env
```

**`.env` (Django)**

| Variable | Description |
|----------|-------------|
| `SECRET_KEY` | Django secret key. Generate one at [djecrety.ir](https://djecrety.ir/). |
| `ENVIRONMENT` | `development` or `production`. Controls which settings module loads. |

**`frontend/.env` (Vite)**

| Variable | Description |
|----------|-------------|
| `VITE_NODE_ENV` | `development` or `production` |
| `VITE_BASE_API_URL` | Django backend URL, e.g. `http://127.0.0.1:8000` |

### 3. Install dependencies

```bash
uv sync
pnpm install
```

### 4. Database

```bash
uv run python manage.py migrate
uv run python manage.py createsuperuser  # optional
```

### 5. Run (development)

Use two terminals:

```bash
# Terminal 1 — Vite dev server (HMR)
pnpm dev

# Terminal 2 — Django
uv run python manage.py runserver
```

Open [http://127.0.0.1:8000](http://127.0.0.1:8000).

In development, django-vite proxies assets from the Vite dev server on port `5173`.

## Production build

```bash
pnpm build
uv run python manage.py collectstatic --noinput
ENVIRONMENT=production uv run python manage.py migrate
```

Serve with your WSGI server of choice (gunicorn, uvicorn, etc.) with `ENVIRONMENT=production`.

Production settings enable HTTPS redirects, secure cookies, and HSTS. Update `ALLOWED_HOSTS` in `project/settings/production.py` before deploying.

## Project structure

```
django-greenroom/
├── project/                  # Django project package
│   ├── settings/
│   │   ├── base.py           # Shared settings
│   │   ├── config.py         # SECRET_KEY from env
│   │   ├── development.py    # Dev overrides (ALLOWED_HOSTS=*, no SSL)
│   │   └── production.py     # Prod security headers + SSL
│   ├── urls.py               # SPA catch-all routes
│   ├── wsgi.py
│   └── asgi.py
├── frontend/
│   ├── index.tsx             # React entry
│   ├── App.tsx
│   └── src/
│       ├── components/       # Mantine theme, loader, toast
│       ├── pages/
│       ├── routes/
│       ├── redux/            # Store, slices, listener middleware
│       ├── graphql/          # GraphQL client + example queries
│       └── hooks/
├── templates/
│   └── home.html             # Django shell — loads Vite assets
├── static/css/main.css       # Tailwind entry
├── dist/                     # Vite build output (gitignored)
├── vite.config.mjs
├── pyproject.toml
├── package.json
├── env.example
└── manage.py
```

## What's included

- **SPA routing** — Django serves `home.html` at `/` and `/app/*`; React Router handles client-side navigation.
- **Session auth ready** — CSRF cookie exposed to JS (`CSRF_COOKIE_HTTPONLY = False`); axios/GraphQL client send `X-CSRFToken` with credentials.
- **Redux patterns** — Loading overlay, feedback toast via Mantine notifications, listener middleware for async thunk success/error toasts.
- **GraphQL client** — Multipart upload support. Wire up your backend (Strawberry, Graphene, etc.) and point `VITE_BASE_API_URL` at it.
- **Split settings** — `ENVIRONMENT` env var selects `development` or `production` settings automatically via `manage.py`, `wsgi.py`, and `asgi.py`.

## Scripts

| Command | Description |
|---------|-------------|
| `pnpm dev` | Start Vite dev server |
| `pnpm build` | Production frontend build → `dist/` |
| `pnpm preview` | Preview production build locally |
| `pnpm clean` | Clear `static/*` |
| `uv run python manage.py runserver` | Start Django |
| `uv run python manage.py migrate` | Run migrations |

## Roadmap

This is a working base that improves over time. Planned additions:

- README-driven rename script
- Docker Compose
- CI (lint, build, test)
- Example API endpoint (REST or GraphQL)
- Health check route
- PostgreSQL via `DATABASE_URL`

## License

MIT