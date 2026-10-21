FROM ghcr.io/dexidp/dex:v2.46.0
USER root
RUN mkdir -p /var/dex && chown -R 1001:1001 /var/dex
COPY moneybee/dex/config.yaml /etc/dex/moneybee.yaml
CMD ["dex", "serve", "/etc/dex/moneybee.yaml"]
