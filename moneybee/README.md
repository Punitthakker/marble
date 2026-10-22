# MoneyBee Compliance

MoneyBee's internal transaction monitoring, screening and case management platform, built on
[Marble](https://github.com/checkmarble/marble) with MoneyBee branding.

## Licence (read first)

Marble is licensed under the **Elastic License 2.0**. This deployment is for **MoneyBee's own
compliance operations only** (monitoring MoneyBee's own merchants and transactions).

- Do not offer it to third parties (clients, partners, other PSPs) as a hosted or managed service
  without a commercial licence from Marble.
- Do not remove or obscure Marble's licence or copyright notices. The rebrand layer keeps the
  LICENSE files and adds a visible "Powered by Marble" line on the sign-in screen.

## What's here

| Path | Purpose |
|---|---|
| `rebrand.py` | Applies MoneyBee look and feel to an unmodified Marble frontend checkout. Fails loudly if an upstream file it patches has changed. |
| `brand/` | MoneyBee logos, favicons, Inter Tight font (OFL). |
| `Dockerfile.front` | App image from the prebuilt bundle in `dist/app` (builds on small builders). |
| `Dockerfile.front.source` | Full source build of the official frontend plus rebrand (needs about 8 GB RAM to build). |
| `build-front.sh` | Rebuilds `dist/app` from a Marble frontend tag with the rebrand applied. |
| `dex/` | Dex OIDC login service (Marble supports OIDC, so no Firebase is needed). |
| `site/` | MoneyBee Compliance public website (Netlify). |

## Run it locally with Docker

Needs Docker Desktop (Mac/Windows) or Docker Engine (Linux), about 4 GB free RAM.

```bash
cd moneybee/local
./setup.sh                 # first time: creates secrets and prints your admin login
docker compose up -d       # first start builds images and takes a few minutes
```

Open http://localhost:3737 and sign in with the email and password `setup.sh` printed.
Stop with `docker compose down`; data is kept in Docker volumes (`down -v` deletes it).
The login service runs at http://dex.localtest.me:5556, a public name that always points to
your own computer.

## Render services (workspace "My Workspace", region Frankfurt)

| Service | Source | Notes |
|---|---|---|
| moneybee-compliance-db | Render Postgres 17 | PostGIS and other extensions are created by Marble's migrations |
| moneybee-compliance-auth | `moneybee/dex/Dockerfile` | Dex OIDC login |
| moneybee-compliance-api | `moneybee/Dockerfile.api` | Wraps the official backend image; runs migrations, then API server and worker together (`api-entrypoint.sh`) |
| moneybee-compliance-app | `moneybee/Dockerfile.front` | MoneyBee-branded UI (prebuilt bundle) |

Redis is optional in this Marble version and is not deployed. File storage uses local paths, which are
ephemeral on Render; move to an S3 bucket before relying on case-file uploads.

Sanctions screening (OpenSanctions/yente + Elasticsearch, about 2 GB RAM) is not deployed yet;
add it, or use the OpenSanctions hosted API via `OPENSANCTIONS_API_KEY`, when screening goes live.

## Upgrading Marble

1. Bump `MARBLE_VERSION` in `Dockerfile.api` (match the backend tag in upstream `docker-compose.yaml`).
2. Run `moneybee/build-front.sh <frontend tag>`, commit `dist/app`, and bump `FRONT_VERSION` in `Dockerfile.front`.
3. Deploy. Render does not auto-deploy this repo; trigger deploys from the dashboard. If `rebrand.py` fails, an upstream file it patches changed; update the pattern.

## Adding users

Login runs through Dex. Today it has one static admin. To let staff sign in with Google Workspace or
Microsoft accounts, add a Dex connector in `dex/config.yaml`. Users must also be invited inside the
app (Settings → Users) with the same email.
