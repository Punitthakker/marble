#!/bin/bash
# First-time setup for the local MoneyBee Compliance stack.
# Creates .env (random secrets + your admin login) and secrets/jwt.pem.
# Only needs Docker; safe to re-run (it won't overwrite an existing setup).
set -euo pipefail
cd "$(dirname "$0")"

if [ -f .env ]; then
  echo "Already set up (.env exists). To start: docker compose up -d"
  exit 0
fi

ADMIN_EMAIL="${1:-pt@moneybee.world}"
rand() { local s; s="$(head -c 4096 /dev/urandom | LC_ALL=C tr -dc 'A-Za-z0-9')"; printf '%s' "${s:0:$1}"; }
ADMIN_PASSWORD="$(rand 6)-$(rand 6)-$(rand 6)"

echo "Generating secrets (uses small helper images, first run downloads them)..."
mkdir -p secrets
docker run --rm -v "$PWD/secrets:/out" alpine/openssl genrsa -out /out/jwt.pem 2048 2>/dev/null
chmod 644 secrets/jwt.pem

# bcrypt hash of the admin password for the login service ($2y and $2a are the same algorithm)
HASH="$(docker run --rm httpd:2.4-alpine htpasswd -nbBC 10 "" "$ADMIN_PASSWORD" | tr -d ':\n' | sed 's/^\$2y\$/$2a$/')"

cat > .env <<EOF
ADMIN_EMAIL=$ADMIN_EMAIL
ADMIN_PASSWORD_HASH='$HASH'
PG_PASSWORD=$(rand 32)
OIDC_CLIENT_SECRET=$(rand 40)
SESSION_SECRET=$(rand 64)
EOF
chmod 600 .env

cat <<EOF

Setup done. Your admin login for http://localhost:3000 :
  Email:    $ADMIN_EMAIL
  Password: $ADMIN_PASSWORD

Save this password now; it is not stored anywhere in plain text.
Next: docker compose up -d   (first start takes a few minutes)
EOF
