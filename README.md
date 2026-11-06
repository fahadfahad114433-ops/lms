# LMS Product — Premium Learning Management System

White-label LMS software (MasterStudy-inspired feature set) — one master codebase,
independent installation per client, one-time license model.

## Stack (Path A — Hostinger shared hosting compatible)

| Layer | Technology |
|---|---|
| Frontend | Next.js (React 19, static export) + Tailwind CSS v4 |
| Backend | Laravel (PHP 8.3) REST API |
| Database | MySQL (production, Hostinger) / SQLite (local dev) |
| Jobs | Laravel Queue (database driver) + hPanel Cron |
| Email | Laravel Mail (SMTP) |
| Deployment | GitHub → Hostinger hPanel Git deploy |

## Repository Structure

```
lms-product/
├── api/               # Laravel REST API (backend)
│   └── app/           #   Modules: Auth, Users, Settings, Courses, Orders,
│                      #   Enrollments, Progress, Quizzes, Assignments, SCORM,
│                      #   Certificates, Email, Notifications, Sync, Reports...
├── web/               # Next.js static-export frontend
│   └── src/app/       #   (public)/ | /admin | /dashboard  (3 areas, 2 dashboards)
├── deployment/        # hPanel deploy guides, .htaccess templates, cron setup
├── documentation/     # Architecture decisions, module roadmap, conventions
└── README.md
```

## Business Rules (locked)

- ❌ No multi-tenancy, no tenant_id, no shared client databases
- ✅ One master codebase → fresh independent installation per client
- ✅ Exactly 2 dashboards: Admin (client CMS) + Student
- ✅ Instructors = admin-scoped role (no separate instructor dashboard)
- ✅ Central Course Repository = separate distribution service (course import
  copies content into the client's own DB/storage, fully independent afterwards)

## Module Roadmap

| Phase | Module | Status |
|---|---|---|
| 0 | Project scaffold + tooling + deployment pipeline | ✅ done |
| 1 | Auth, Users, Roles + basic SMTP mailer | ⬜ |
| 2 | Settings + white-label branding | ⬜ |
| 3 | Public website shell + course catalog (read-only) | ⬜ |
| 4 | Course builder + curriculum + media | ⬜ |
| 5 | Cart, checkout, orders, payments, coupons | ⬜ |
| 6 | Enrollments + progress + student dashboard | ⬜ |
| 7 | Quizzes + assignments | ⬜ |
| 8 | Certificates | ⬜ |
| 9 | SCORM management + player | ⬜ |
| 10 | Email manager + notifications | ⬜ |
| 11 | Central course repository + import/sync | ⬜ |
| 12 | Reports, audit logs, Zoom, reviews | ⬜ |

## Local Development

```bash
# API (Laravel) — local dev uses SQLite
cd api && php artisan serve

# Frontend (Next.js dev server)
cd web && npm run dev

# Frontend production build → out/ (static files for hosting)
cd web && npm run build
```

See `documentation/ARCHITECTURE.md` and `deployment/README.md` for details.
