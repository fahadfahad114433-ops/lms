# Deployment Guide — Hostinger hPanel (learn.funnelsthatsell.com)

SSH from cloud/automation environments is blocked by Hostinger, so deployment
uses **GitHub + hPanel Git integration** (browser) — no local machine needed.

## One-time setup (owner does in browser)

1. **Database:** hPanel → Databases → MySQL Databases → create DB
   (e.g. `u681973664_lms`) + user + password. Note the credentials.
2. **Git deploy:** hPanel → Advanced → Git → Create repository:
   - Source: GitHub repo (`<user>/lms-product`, branch `main`)
   - Target folder: `domains/learn.funnelsthatsell.com/app`
   - Enable automatic deployment on push.
3. **API .env:** copy `api/.env.example` → `api/.env` on the server via
   hPanel File Manager, fill in MySQL credentials + `APP_URL` + `SANCTUM` vars.
4. **First install (hPanel Terminal, one time):**
   ```bash
   cd ~/domains/learn.funnelsthatsell.com/app/api
   php artisan key:generate --force
   php artisan migrate --force
   php artisan storage:link
   ```
5. **Routing (.htaccess):** in `domains/learn.funnelsthatsell.com/public_html`
   place the `.htaccess` from `deployment/htaccess/` — it maps
   `/` → static frontend (`app/web/out`) and `/api/*` → `app/api/public`.
6. **Cron (later phases):** hPanel → Advanced → Cron Jobs:
   `* * * * * php ~/domains/learn.funnelsthatsell.com/app/api/artisan schedule:run`

## Every release

- Push to `main` → hPanel auto-deploys files.
- If migrations changed: hPanel Terminal → `php artisan migrate --force`
  (or a secured `/api/v1/deploy` endpoint run by the owner — planned).
- If frontend changed: rebuild `web/out` locally and commit the built files.

## Notes

- PHP version in hPanel → PHP Configuration: set 8.2+ (8.3 recommended).
- `APP_DEBUG=false` and `APP_ENV=production` on the server.
- WordPress currently installed on the domain stays untouched until LMS launch.
