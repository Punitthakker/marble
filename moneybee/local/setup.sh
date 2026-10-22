#!/bin/bash
# First-time setup for the local MoneyBee Compliance stack.
# Creates .env (random secrets) and secrets/jwt.pem. Only needs Docker; safe to re-run.
set -euo pipefail
cd "$(dirname "$0")"

if [ -f .env ] && [ -f secrets/jwt.pem ]; then
  echo "Already set up. To start: docker compose up -d --remove-orphans"
  exit 0
fi

rand() { local s; s="$(head -c 4096 /dev/urandom | LC_ALL=C tr -dc 'A-Za-z0-9')"; printf '%s' "${s:0:$1}"; }

echo "Generating secrets (first run downloads a small helper image)..."
mkdir -p secrets
docker run --rm -v "$PWD/secrets:/out" alpine/openssl genrsa -out /out/jwt.pem 2048 2>/dev/null
chmod 644 secrets/jwt.pem

if [ ! -f .env ]; then
  cat > .env <<EOF
PG_PASSWORD=$(rand 32)
SESSION_SECRET=$(rand 64)
EOF
  chmod 600 .env
fi

cat <<EOF

Setup done.
Next: docker compose up -d --remove-orphans   (first start takes a few minutes)
Then open http://localhost:3737 and create your organisation and admin login on the first screen.
EOF
