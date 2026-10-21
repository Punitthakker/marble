#!/bin/bash
# Run DB migrations, then the Marble API server and task-queue worker side by side.
# If either process exits, stop the other and exit non-zero so the platform restarts us.
set -u
/app --migrations || exit 1
/app --worker & WORKER=$!
/app --server & SERVER=$!
trap 'kill -TERM $WORKER $SERVER 2>/dev/null; wait; exit 0' TERM INT
wait -n $WORKER $SERVER
echo "[entrypoint] a Marble process exited; shutting down" >&2
kill -TERM $WORKER $SERVER 2>/dev/null
wait
exit 1
