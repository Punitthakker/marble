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
| `Dockerfile.front` | Builds the official frontend at `FRONT_VERSION`, applies the rebrand, outputs the app image. |
| `dex/` | Dex OIDC login service (Marble supports OIDC, so no Firebase is needed). |
| `site/` | MoneyBee Compliance public website (Netlify). |

## Railway services (project `moneybee-compliance`)

| Service | Source | Notes |
|---|---|---|
| PostGIS | `postgis` template | Marble requires PostGIS |
| Redis | `redis` template | Cache |
| dex | `moneybee/dex/Dockerfile` | Volume at `/var/dex` |
| api | image `europe-west1-docker.pkg.dev/marble-infra/marble/marble-backend:<tag>` | Start: `/app --migrations --server` |
| worker | same image | Start: `/app --worker` |
| app | `moneybee/Dockerfile.front` | Public UI |

Sanctions screening (OpenSanctions/yente + Elasticsearch, about 2 GB RAM) is not deployed yet;
add it, or use the OpenSanctions hosted API via `OPENSANCTIONS_API_KEY`, when screening goes live.

## Upgrading Marble

1. Bump the backend image tag on `api` and `worker` (match `docker-compose.yaml` upstream).
2. Bump `FRONT_VERSION` in `Dockerfile.front` to the matching frontend tag.
3. Deploy. If `rebrand.py` fails, an upstream file it patches changed; update the pattern.

## Adding users

Login runs through Dex. Today it has one static admin. To let staff sign in with Google Workspace or
Microsoft accounts, add a Dex connector in `dex/config.yaml`. Users must also be invited inside the
app (Settings → Users) with the same email.
