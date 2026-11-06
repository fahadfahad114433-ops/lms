# Architecture — LMS Product (Path A)

## Why Path A (React + Laravel + MySQL)

Target hosting is Hostinger shared hosting (PHP + MySQL only):
Node.js runtime, PostgreSQL, Redis and Docker are not available there.
The owner approved switching the locked Next.js+NestJS stack to
**React (Next.js static export) + Laravel REST API + MySQL** so the product
can run on the hosting they already own. All LMS features remain achievable
(MasterStudy itself is PHP-based).

## Deployment Topology (target: learn.funnelsthatsell.com)

```
Browser
  │
  ├─ /            → web/out/            (Next.js static export: public site,
  │                                        /admin, /dashboard — all client-side)
  └─ /api/*       → api/public/index.php (Laravel REST API, same MySQL server)
```

- Frontend is 100% static (built locally, committed to repo, served by Apache)
- API is Laravel on the same hosting account, connecting to MySQL on localhost
- Auth: Laravel Sanctum (SPA cookie or token), roles: ADMIN / STUDENT (+INSTRUCTOR later)
- Queue: database driver + hPanel cron (`schedule:run` every minute)
- Media: server disk initially; Bunny CDN / Cloudflare R2 recommended later for videos

## Key Decisions

1. **Static export for frontend** — no Node needed on hosting; SEO for public
   pages handled via prerendered meta; dashboards are behind auth (SEO irrelevant).
2. **vendor/ is committed** — Hostinger hPanel Git deploy cannot run composer;
   committing vendor keeps deploys zero-command. node_modules and .env stay ignored.
3. **Database parity** — local dev uses SQLite (same Eloquent migrations);
   production uses MySQL via .env on the server only.
4. **Module-by-module development** — each module lands as a vertical slice
   (migration + model + controller + routes + tests + frontend pages) without
   breaking completed modules.

## Module Dependency Order

AUTH/USERS/ROLES + SETTINGS → everything
CATEGORIES → COURSES → ENROLLMENTS → PROGRESS → CERTIFICATES
ORDERS/PAYMENTS (+COUPONS) → ENROLLMENTS
QUIZZES/ASSIGNMENTS/SCORM → COURSES + PROGRESS
EMAIL (basic SMTP in Phase 1; full manager Phase 10)
SYNC/IMPORT → after COURSES schema is final
REPORTS/AUDIT → last (aggregate data)

## Coding Conventions

- API: Laravel Controllers per module under `app/Http/Controllers/Api/V1`,
  Form Requests for validation, API Resources for responses, Policies for authz
- Routes: `routes/api.php` prefixed `/v1/<module>`
- Frontend: `src/app/(public|admin|dashboard)`, `src/lib/api.ts` single API client,
  `src/components/{ui,public,admin,dashboard}`, TypeScript strict mode
- Every module ships: migration(s) + feature tests + updated docs in this folder
