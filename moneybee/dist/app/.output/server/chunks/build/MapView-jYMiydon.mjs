import { M as reactExports, Q as jsxRuntimeExports } from "./server.mjs";
import { u as useTheme } from "./ThemeContext-DjRULCu0.mjs";
import { M as Map$1, a as Marker } from "./maplibre-gl-BcA3NZzV.mjs";
import { I as Icon } from "./Tabs-CzpyUi7T.mjs";
import { C as CARTO_BASEMAP } from "./DataField-BczNbAhi.mjs";
import "node:async_hooks";
import "node:stream";
import "node:stream/web";
import "util";
import "crypto";
import "async_hooks";
import "stream";
import "./config--RFGchua.mjs";
import "./short-uuid-fTZYJj_k.mjs";
import "./services-middleware-nMulUXHZ.mjs";
import "node:crypto";
import "./use-callback-ref-DoQNLci-.mjs";
import "./sharpstate.es-C0BW2AZi.mjs";
import "./formatDistanceStrict-DEEeAR-Y.mjs";
import "./create-context-k6HmQ6bB.mjs";
import "./Spinner-DmLieYoS.mjs";
import "./data-9UajV2HK.mjs";
import "./query-BmG5BEas.mjs";
import "./auth-middleware-eNRVfU3l.mjs";
import "./logger.server-DV14d0iZ.mjs";
import "node:os";
import "node:events";
import "node:diagnostics_channel";
import "fs";
import "events";
import "path";
import "assert";
import "worker_threads";
import "module";
import "node:fs";
import "node:path";
import "node:url";
import "url";
import "buffer";
import "./data-BXamdbTM.mjs";
import "./useQuery-Bb0AEcpf.mjs";
import "./useBaseQuery-BqF2iw7Y.mjs";
import "./useServerFn-oRH5Nw97.mjs";
import "./tryCatch-CFf1qt2b.mjs";
import "./isNonNullish-DgEqPJBU.mjs";
import "./Switch-BV-_0Knl.mjs";
import "./data-model-Dfj0lN5a.mjs";
import "./mapToObj-C7dg8HnM.mjs";
import "./omit-qKVZGDJg.mjs";
import "./hasAtLeast-BmuNoqMd.mjs";
function MapView({ latitude, longitude, mapHeight }) {
  const { theme } = useTheme();
  const mapRef = reactExports.useRef(null);
  reactExports.useEffect(() => {
    if (!mapRef.current) return;
    mapRef.current.flyTo({ center: [longitude, latitude], duration: 1e3 });
  }, [latitude, longitude]);
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "isolate overflow-hidden rounded-lg border border-grey-border bg-surface-card", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
    Map$1,
    {
      ref: mapRef,
      initialViewState: { latitude, longitude, zoom: 5 },
      style: { width: "100%", height: mapHeight },
      mapStyle: CARTO_BASEMAP[theme],
      children: /* @__PURE__ */ jsxRuntimeExports.jsx(Marker, { longitude, latitude, anchor: "bottom", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { icon: "map-pin", className: "size-4 text-red-primary" }) })
    }
  ) });
}
export {
  MapView
};
