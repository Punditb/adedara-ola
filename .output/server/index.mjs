globalThis.__nitro_main__ = import.meta.url;
import { N as NodeResponse, s as serve } from "./_libs/srvx.mjs";
import { H as HTTPError, d as defineHandler, t as toEventHandler, a as defineLazyEventHandler, b as H3Core } from "./_libs/h3.mjs";
import { d as decodePath, w as withLeadingSlash, a as withoutTrailingSlash, j as joinURL } from "./_libs/ufo.mjs";
import { promises } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, resolve } from "node:path";
import "node:http";
import "node:stream";
import "node:stream/promises";
import "node:https";
import "node:http2";
import "./_libs/rou3.mjs";
function lazyService(loader) {
  let promise, mod;
  return {
    fetch(req) {
      if (mod) {
        return mod.fetch(req);
      }
      if (!promise) {
        promise = loader().then((_mod) => mod = _mod.default || _mod);
      }
      return promise.then((mod2) => mod2.fetch(req));
    }
  };
}
const services = {
  ["ssr"]: lazyService(() => import("./_ssr/index.mjs"))
};
globalThis.__nitro_vite_envs__ = services;
const errorHandler$1 = (error, event) => {
  const res = defaultHandler(error, event);
  return new NodeResponse(typeof res.body === "string" ? res.body : JSON.stringify(res.body, null, 2), res);
};
function defaultHandler(error, event) {
  const unhandled = error.unhandled ?? !HTTPError.isError(error);
  const { status = 500, statusText = "" } = unhandled ? {} : error;
  if (status === 404) {
    const url = event.url || new URL(event.req.url);
    const baseURL = "/";
    if (/^\/[^/]/.test(baseURL) && !url.pathname.startsWith(baseURL)) {
      return {
        status: 302,
        headers: new Headers({ location: `${baseURL}${url.pathname.slice(1)}${url.search}` })
      };
    }
  }
  const headers2 = new Headers(unhandled ? {} : error.headers);
  headers2.set("content-type", "application/json; charset=utf-8");
  const jsonBody = unhandled ? {
    status,
    unhandled: true
  } : typeof error.toJSON === "function" ? error.toJSON() : {
    status,
    statusText,
    message: error.message
  };
  return {
    status,
    statusText,
    headers: headers2,
    body: {
      error: true,
      ...jsonBody
    }
  };
}
const errorHandlers = [errorHandler$1];
async function errorHandler(error, event) {
  for (const handler of errorHandlers) {
    try {
      const response = await handler(error, event, { defaultHandler });
      if (response) {
        return response;
      }
    } catch (error2) {
      console.error(error2);
    }
  }
}
const headers = ((m) => function headersRouteRule(event) {
  for (const [key2, value] of Object.entries(m.options || {})) {
    event.res.headers.set(key2, value);
  }
});
const assets = {
  "/favicon.png": {
    "type": "image/png",
    "etag": '"a5f1-SdRVgJ1RuIN1Lp51kuHrreIfb7o"',
    "mtime": "2026-06-16T13:20:42.428Z",
    "size": 42481,
    "path": "../public/favicon.png"
  },
  "/robots.txt": {
    "type": "text/plain; charset=utf-8",
    "etag": '"17-ZZkCVrbr4BSdjt/K43J0tq8+Qq4"',
    "mtime": "2026-06-05T02:59:15.502Z",
    "size": 23,
    "path": "../public/robots.txt"
  },
  "/assets/about-CU92cVDf.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"1654-8M7d/rJsUaIWDvLtKrXEAY3byPA"',
    "mtime": "2026-06-16T15:27:01.069Z",
    "size": 5716,
    "path": "../public/assets/about-CU92cVDf.js"
  },
  "/assets/about-team-BedCzSXD.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"128-od2cjazvbhaLYxCmT8dTbSY94AU"',
    "mtime": "2026-06-16T15:27:01.070Z",
    "size": 296,
    "path": "../public/assets/about-team-BedCzSXD.js"
  },
  "/assets/about-team-Btbw5ukX.jpg": {
    "type": "image/jpeg",
    "etag": '"23c5e-y5DI/mm14gDtN1lwsy8og2Z2Evw"',
    "mtime": "2026-06-16T15:27:01.068Z",
    "size": 146526,
    "path": "../public/assets/about-team-Btbw5ukX.jpg"
  },
  "/assets/calendar-BKrv3ELE.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"178-+5cceF16KLW56un0TaFXcTKRW9Q"',
    "mtime": "2026-06-16T15:27:01.070Z",
    "size": 376,
    "path": "../public/assets/calendar-BKrv3ELE.js"
  },
  "/assets/chart-column-EqXmWMSH.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"1df-10Nj3NW9j1fmwgzrFjHPoLV2CqQ"',
    "mtime": "2026-06-16T15:27:01.069Z",
    "size": 479,
    "path": "../public/assets/chart-column-EqXmWMSH.js"
  },
  "/assets/circle-check-UW4zCjXC.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"af-gzzQ+VB56Um365Lsv/S4c6p8/3I"',
    "mtime": "2026-06-16T15:27:01.070Z",
    "size": 175,
    "path": "../public/assets/circle-check-UW4zCjXC.js"
  },
  "/assets/contact-CSBnUyLk.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"119c-2Uw33/M10UGtBcovLUsa2uixpbk"',
    "mtime": "2026-06-16T15:27:01.069Z",
    "size": 4508,
    "path": "../public/assets/contact-CSBnUyLk.js"
  },
  "/assets/hero-CGUjWceZ.jpg": {
    "type": "image/jpeg",
    "etag": '"2d39d-TqBNONrKEl09QZhQc4OHgUv+y1Y"',
    "mtime": "2026-06-16T15:27:01.068Z",
    "size": 185245,
    "path": "../public/assets/hero-CGUjWceZ.jpg"
  },
  "/assets/index-bAcEVviF.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"5160-0E+cs9Zp36yvI736r/6V6UfU4Jg"',
    "mtime": "2026-06-16T15:27:01.070Z",
    "size": 20832,
    "path": "../public/assets/index-bAcEVviF.js"
  },
  "/assets/insights-hTXh9kNF.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"d35-l6ksZ3dewpnayJzIIiDTDSd4x9o"',
    "mtime": "2026-06-16T15:27:01.069Z",
    "size": 3381,
    "path": "../public/assets/insights-hTXh9kNF.js"
  },
  "/assets/investors-Dz7w5YQt.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"1529-g7WtJcVWkb6NIXAPxbIfkzSdNmA"',
    "mtime": "2026-06-16T15:27:01.069Z",
    "size": 5417,
    "path": "../public/assets/investors-Dz7w5YQt.js"
  },
  "/assets/investors-BX3ce-j5.jpg": {
    "type": "image/jpeg",
    "etag": '"1ec47-TTsD8glcKh57+Mx/vfSouvwRC5c"',
    "mtime": "2026-06-16T15:27:01.117Z",
    "size": 126023,
    "path": "../public/assets/investors-BX3ce-j5.jpg"
  },
  "/assets/Layout-B-xclzLE.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"2bc6-+3aKUWTKwR0DXLAVBo3AjpZyLmw"',
    "mtime": "2026-06-16T15:27:01.071Z",
    "size": 11206,
    "path": "../public/assets/Layout-B-xclzLE.js"
  },
  "/assets/maximize-2-BTktfU9v.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"2ca-NNmtFwfz5uCkivD+QxX6mf09TLU"',
    "mtime": "2026-06-16T15:27:01.070Z",
    "size": 714,
    "path": "../public/assets/maximize-2-BTktfU9v.js"
  },
  "/assets/project-commercial-mUi2RqxX.jpg": {
    "type": "image/jpeg",
    "etag": '"1d32d-JrWn89P87tjGQQA6ZdzULwgJUg0"',
    "mtime": "2026-06-16T15:27:01.067Z",
    "size": 119597,
    "path": "../public/assets/project-commercial-mUi2RqxX.jpg"
  },
  "/assets/index-CVkD84J3.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"57029-WRoPA9uXGTXlGuecj6cgvK7MzBY"',
    "mtime": "2026-06-16T15:27:01.069Z",
    "size": 356393,
    "path": "../public/assets/index-CVkD84J3.js"
  },
  "/assets/logo-ZFtjH1AD.png": {
    "type": "image/png",
    "etag": '"27a6b-wl2DuSBGorPGbv3LPeKqGpanoUM"',
    "mtime": "2026-06-16T15:27:01.068Z",
    "size": 162411,
    "path": "../public/assets/logo-ZFtjH1AD.png"
  },
  "/assets/project-construction-DpSZ71Bb.jpg": {
    "type": "image/jpeg",
    "etag": '"122e2-MMk0oQVAU8Zo3H3j7PHrQIcQbkc"',
    "mtime": "2026-06-16T15:27:01.068Z",
    "size": 74466,
    "path": "../public/assets/project-construction-DpSZ71Bb.jpg"
  },
  "/assets/project-infra-B_WTLqli.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"72-pZRv75nbOIYrihl26YkSJ7HnNzA"',
    "mtime": "2026-06-16T15:27:01.069Z",
    "size": 114,
    "path": "../public/assets/project-infra-B_WTLqli.js"
  },
  "/assets/project-refurb-BHR8RFbt.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"39-dvUSYlb2xM5ZoYvB8ESxZRpt46A"',
    "mtime": "2026-06-16T15:27:01.070Z",
    "size": 57,
    "path": "../public/assets/project-refurb-BHR8RFbt.js"
  },
  "/assets/project-mixed-DBUuaH3n.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"a4-s5svkWoz5H5XzV+iueA/Ak4wR+Y"',
    "mtime": "2026-06-16T15:27:01.070Z",
    "size": 164,
    "path": "../public/assets/project-mixed-DBUuaH3n.js"
  },
  "/assets/project-infra-CI2cn3zT.jpg": {
    "type": "image/jpeg",
    "etag": '"3af0a-Mr7MNyqJ5crhuN7DvO2d6XWK82Q"',
    "mtime": "2026-06-16T15:27:01.068Z",
    "size": 241418,
    "path": "../public/assets/project-infra-CI2cn3zT.jpg"
  },
  "/assets/project-mixed-DwNuCAcy.jpg": {
    "type": "image/jpeg",
    "etag": '"3172c-mA0mr4b2aXIONXkaFHpE8e8BCO4"',
    "mtime": "2026-06-16T15:27:01.068Z",
    "size": 202540,
    "path": "../public/assets/project-mixed-DwNuCAcy.jpg"
  },
  "/assets/project-refurb-CVO7x12L.jpg": {
    "type": "image/jpeg",
    "etag": '"1acf7-khnRrnQt7WQ22EDkNe9lj7yTv74"',
    "mtime": "2026-06-16T15:27:01.116Z",
    "size": 109815,
    "path": "../public/assets/project-refurb-CVO7x12L.jpg"
  },
  "/assets/project-residential-tPYWyo1a.jpg": {
    "type": "image/jpeg",
    "etag": '"3356c-h6vlvdJQ6UoGMg3VdXkOIcCBsUs"',
    "mtime": "2026-06-16T15:27:01.070Z",
    "size": 210284,
    "path": "../public/assets/project-residential-tPYWyo1a.jpg"
  },
  "/assets/projects-BE_o6ObU.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"bc7-GLNTCQOPix9uRli7v5ZKsvcy5Uk"',
    "mtime": "2026-06-16T15:27:01.069Z",
    "size": 3015,
    "path": "../public/assets/projects-BE_o6ObU.js"
  },
  "/assets/properties-BMx36BQN.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"c23-goNn5ajEMunUgb7mPy4N4v5c+r8"',
    "mtime": "2026-06-16T15:27:01.069Z",
    "size": 3107,
    "path": "../public/assets/properties-BMx36BQN.js"
  },
  "/assets/services-CDZD72Bd.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"1594-/33WnPn/yQDNkEcBEfTvoe0OiJk"',
    "mtime": "2026-06-16T15:27:01.069Z",
    "size": 5524,
    "path": "../public/assets/services-CDZD72Bd.js"
  },
  "/assets/styles-DAvyjxD9.css": {
    "type": "text/css; charset=utf-8",
    "etag": '"15471-9PDLFmSYkIh25/D9HyS9yv6HFN0"',
    "mtime": "2026-06-16T15:27:01.069Z",
    "size": 87153,
    "path": "../public/assets/styles-DAvyjxD9.css"
  },
  "/assets/target-BbevR-ss.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"28a-fU1gyM45Mo9Zj0nOofB5UMLCMds"',
    "mtime": "2026-06-16T15:27:01.070Z",
    "size": 650,
    "path": "../public/assets/target-BbevR-ss.js"
  },
  "/assets/trending-up-Bfuoelpy.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"b1-3UQBRfvxL/NbMwb2x8mREq55tqw"',
    "mtime": "2026-06-16T15:27:01.069Z",
    "size": 177,
    "path": "../public/assets/trending-up-Bfuoelpy.js"
  },
  "/assets/wrench-CZYNrKQ0.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"4db-BONTfYEVyB5k1ZPjryRiGOPcZ1I"',
    "mtime": "2026-06-16T15:27:01.069Z",
    "size": 1243,
    "path": "../public/assets/wrench-CZYNrKQ0.js"
  },
  "/assets/_slug-EEUviegL.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"1372-CkFgn7vMbf19/8xPylKQp+DqjEs"',
    "mtime": "2026-06-16T15:27:01.070Z",
    "size": 4978,
    "path": "../public/assets/_slug-EEUviegL.js"
  }
};
function readAsset(id) {
  const serverDir = dirname(fileURLToPath(globalThis.__nitro_main__));
  return promises.readFile(resolve(serverDir, assets[id].path));
}
const publicAssetBases = {};
function isPublicAssetURL(id = "") {
  if (assets[id]) {
    return true;
  }
  for (const base in publicAssetBases) {
    if (id.startsWith(base)) {
      return true;
    }
  }
  return false;
}
function getAsset(id) {
  return assets[id];
}
const METHODS = /* @__PURE__ */ new Set(["HEAD", "GET"]);
const EncodingMap = {
  gzip: ".gz",
  br: ".br",
  zstd: ".zst"
};
const _jqIc1M = defineHandler((event) => {
  if (event.req.method && !METHODS.has(event.req.method)) {
    return;
  }
  let id = decodePath(withLeadingSlash(withoutTrailingSlash(event.url.pathname)));
  let asset;
  const encodingHeader = event.req.headers.get("accept-encoding") || "";
  const encodings = [...encodingHeader.split(",").map((e) => EncodingMap[e.trim()]).filter(Boolean).sort(), ""];
  for (const encoding of encodings) {
    for (const _id of [id + encoding, joinURL(id, "index.html" + encoding)]) {
      const _asset = getAsset(_id);
      if (_asset) {
        asset = _asset;
        id = _id;
        break;
      }
    }
  }
  if (!asset) {
    if (isPublicAssetURL(id)) {
      event.res.headers.delete("Cache-Control");
      throw new HTTPError({ status: 404 });
    }
    return;
  }
  if (encodings.length > 1) {
    event.res.headers.append("Vary", "Accept-Encoding");
  }
  const ifNotMatch = event.req.headers.get("if-none-match") === asset.etag;
  if (ifNotMatch) {
    event.res.status = 304;
    event.res.statusText = "Not Modified";
    return "";
  }
  const ifModifiedSinceH = event.req.headers.get("if-modified-since");
  const mtimeDate = new Date(asset.mtime);
  if (ifModifiedSinceH && asset.mtime && new Date(ifModifiedSinceH) >= mtimeDate) {
    event.res.status = 304;
    event.res.statusText = "Not Modified";
    return "";
  }
  if (asset.type) {
    event.res.headers.set("Content-Type", asset.type);
  }
  if (asset.etag && !event.res.headers.has("ETag")) {
    event.res.headers.set("ETag", asset.etag);
  }
  if (asset.mtime && !event.res.headers.has("Last-Modified")) {
    event.res.headers.set("Last-Modified", mtimeDate.toUTCString());
  }
  if (asset.encoding && !event.res.headers.has("Content-Encoding")) {
    event.res.headers.set("Content-Encoding", asset.encoding);
  }
  if (asset.size > 0 && !event.res.headers.has("Content-Length")) {
    event.res.headers.set("Content-Length", asset.size.toString());
  }
  return readAsset(id);
});
const findRouteRules = /* @__PURE__ */ (() => {
  const $0 = [{ name: "headers", route: "/assets/**", handler: headers, options: { "cache-control": "public, max-age=31536000, immutable" } }];
  return (m, p) => {
    let r = [];
    if (p.charCodeAt(p.length - 1) === 47) p = p.slice(0, -1) || "/";
    let s = p.split("/"), l = s.length;
    if (l > 1) {
      if (s[1] === "assets") {
        r.unshift({ data: $0, params: { "_": s.slice(2).join("/") } });
      }
    }
    return r;
  };
})();
const _lazy_PEu4eQ = defineLazyEventHandler(() => import("./_chunks/ssr-renderer.mjs"));
const findRoute = /* @__PURE__ */ (() => {
  const data = { route: "/**", handler: _lazy_PEu4eQ };
  return ((_m, p) => {
    return { data, params: { "_": p.slice(1) } };
  });
})();
const globalMiddleware = [
  toEventHandler(_jqIc1M)
].filter(Boolean);
const APP_ID = "default";
function useNitroApp() {
  let instance = useNitroApp._instance;
  if (instance) {
    return instance;
  }
  instance = useNitroApp._instance = createNitroApp();
  globalThis.__nitro__ = globalThis.__nitro__ || {};
  globalThis.__nitro__[APP_ID] = instance;
  return instance;
}
function createNitroApp() {
  const hooks = void 0;
  const captureError = (error, errorCtx) => {
    if (errorCtx?.event) {
      const errors = errorCtx.event.req.context?.nitro?.errors;
      if (errors) {
        errors.push({
          error,
          context: errorCtx
        });
      }
    }
  };
  const h3App = createH3App({ onError(error, event) {
    return errorHandler(error, event);
  } });
  let appHandler = (req) => {
    req.context ||= {};
    req.context.nitro = req.context.nitro || { errors: [] };
    return h3App.fetch(req);
  };
  const app = {
    fetch: appHandler,
    h3: h3App,
    hooks,
    captureError
  };
  return app;
}
function createH3App(config) {
  const h3App = new H3Core(config);
  h3App["~findRoute"] = (event) => findRoute(event.req.method, event.url.pathname);
  h3App["~middleware"].push(...globalMiddleware);
  {
    h3App["~getMiddleware"] = (event, route) => {
      const pathname = event.url.pathname;
      const method = event.req.method;
      const middleware = [];
      {
        const routeRules = getRouteRules(method, pathname);
        event.context.routeRules = routeRules?.routeRules;
        if (routeRules?.routeRuleMiddleware.length) {
          middleware.push(...routeRules.routeRuleMiddleware);
        }
      }
      middleware.push(...h3App["~middleware"]);
      if (route?.data?.middleware?.length) {
        middleware.push(...route.data.middleware);
      }
      return middleware;
    };
  }
  return h3App;
}
function getRouteRules(method, pathname) {
  const m = findRouteRules(method, pathname);
  if (!m?.length) {
    return { routeRuleMiddleware: [] };
  }
  const routeRules = {};
  for (const layer of m) {
    for (const rule of layer.data) {
      const currentRule = routeRules[rule.name];
      if (currentRule) {
        if (rule.options === false) {
          delete routeRules[rule.name];
          continue;
        }
        if (typeof currentRule.options === "object" && typeof rule.options === "object") {
          currentRule.options = {
            ...currentRule.options,
            ...rule.options
          };
        } else {
          currentRule.options = rule.options;
        }
        currentRule.route = rule.route;
        currentRule.params = {
          ...currentRule.params,
          ...layer.params
        };
      } else if (rule.options !== false) {
        routeRules[rule.name] = {
          ...rule,
          params: layer.params
        };
      }
    }
  }
  const middleware = [];
  const orderedRules = Object.values(routeRules).sort((a, b) => (a.handler?.order || 0) - (b.handler?.order || 0));
  for (const rule of orderedRules) {
    if (rule.options === false || !rule.handler) {
      continue;
    }
    middleware.push(rule.handler(rule));
  }
  return {
    routeRules,
    routeRuleMiddleware: middleware
  };
}
function _captureError(error, type) {
  console.error(`[${type}]`, error);
  useNitroApp().captureError?.(error, { tags: [type] });
}
function trapUnhandledErrors() {
  process.on("unhandledRejection", (error) => _captureError(error, "unhandledRejection"));
  process.on("uncaughtException", (error) => _captureError(error, "uncaughtException"));
}
const tracingSrvxPlugins = [];
const _parsedPort = Number.parseInt(process.env.NITRO_PORT ?? process.env.PORT ?? "");
const port = Number.isNaN(_parsedPort) ? 3e3 : _parsedPort;
const host = process.env.NITRO_HOST || process.env.HOST;
const cert = process.env.NITRO_SSL_CERT;
const key = process.env.NITRO_SSL_KEY;
const nitroApp = useNitroApp();
serve({
  port,
  hostname: host,
  tls: cert && key ? {
    cert,
    key
  } : void 0,
  fetch: nitroApp.fetch,
  plugins: [...tracingSrvxPlugins]
});
trapUnhandledErrors();
const nodeServer = {};
export {
  nodeServer as default
};
