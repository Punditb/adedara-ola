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
  "/assets/about-DjlyqSuj.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"18f5-U7TFS+aVRBF95HzAHfztwSSG1iM"',
    "mtime": "2026-06-19T15:25:21.732Z",
    "size": 6389,
    "path": "../public/assets/about-DjlyqSuj.js"
  },
  "/robots.txt": {
    "type": "text/plain; charset=utf-8",
    "etag": '"17-ZZkCVrbr4BSdjt/K43J0tq8+Qq4"',
    "mtime": "2026-06-05T02:59:15.502Z",
    "size": 23,
    "path": "../public/robots.txt"
  },
  "/favicon.png": {
    "type": "image/png",
    "etag": '"a5f1-SdRVgJ1RuIN1Lp51kuHrreIfb7o"',
    "mtime": "2026-06-16T13:20:42.428Z",
    "size": 42481,
    "path": "../public/favicon.png"
  },
  "/assets/about-team-CEwl_7wr.jpg": {
    "type": "image/jpeg",
    "etag": '"1eb99-SrqKAiN5fD0KvueHI11bPwq/5Sg"',
    "mtime": "2026-06-19T15:25:21.732Z",
    "size": 125849,
    "path": "../public/assets/about-team-CEwl_7wr.jpg"
  },
  "/assets/about-team-GUVWTaAc.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"128-VBXJPNOy+rvWMgRXrow3voqw1LQ"',
    "mtime": "2026-06-19T15:25:21.733Z",
    "size": 296,
    "path": "../public/assets/about-team-GUVWTaAc.js"
  },
  "/assets/calendar-D3_dVlyP.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"178-e9KJrbFSGEhMNMCNXd3dNLfeQt0"',
    "mtime": "2026-06-19T15:25:21.734Z",
    "size": 376,
    "path": "../public/assets/calendar-D3_dVlyP.js"
  },
  "/assets/chart-column-Jz8A5Io5.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"1df-eiRg7AX94EdWByRUF9VxN1P1eFQ"',
    "mtime": "2026-06-19T15:25:21.733Z",
    "size": 479,
    "path": "../public/assets/chart-column-Jz8A5Io5.js"
  },
  "/assets/circle-check-DcXSzgln.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"af-mHGKxNFMYQilHwzlL4rild4m9BQ"',
    "mtime": "2026-06-19T15:25:21.734Z",
    "size": 175,
    "path": "../public/assets/circle-check-DcXSzgln.js"
  },
  "/assets/contact-1UYF-SZZ.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"11f1-vtFPfUeH2PDFzah5JWf9qnE5+OY"',
    "mtime": "2026-06-19T15:25:21.732Z",
    "size": 4593,
    "path": "../public/assets/contact-1UYF-SZZ.js"
  },
  "/assets/index-BU4m16Fi.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"52c8-NIWJFJDcc0kCYAyGC7xvc5BN/ns"',
    "mtime": "2026-06-19T15:25:21.732Z",
    "size": 21192,
    "path": "../public/assets/index-BU4m16Fi.js"
  },
  "/assets/hero-BG2zIWZ3.jpg": {
    "type": "image/jpeg",
    "etag": '"44f86-93YUDAGqeZvNhQ69J3qNd3bJDw4"',
    "mtime": "2026-06-19T15:25:21.732Z",
    "size": 282502,
    "path": "../public/assets/hero-BG2zIWZ3.jpg"
  },
  "/assets/insights-BaWZ6sGT.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"d5d-7ltv5vWkVGUBTXWyOu/mmxyQX20"',
    "mtime": "2026-06-19T15:25:21.731Z",
    "size": 3421,
    "path": "../public/assets/insights-BaWZ6sGT.js"
  },
  "/assets/investors-BX3ce-j5.jpg": {
    "type": "image/jpeg",
    "etag": '"1ec47-TTsD8glcKh57+Mx/vfSouvwRC5c"',
    "mtime": "2026-06-19T15:25:21.732Z",
    "size": 126023,
    "path": "../public/assets/investors-BX3ce-j5.jpg"
  },
  "/assets/investors-Cp-s2lY8.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"1529-wA2y6AZwvkd2RlkOsZRSWDPi2sQ"',
    "mtime": "2026-06-19T15:25:21.731Z",
    "size": 5417,
    "path": "../public/assets/investors-Cp-s2lY8.js"
  },
  "/assets/Layout-Cvoub2SF.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"2b22-35tA+nK5kv9IY3nn++InvN3zpFU"',
    "mtime": "2026-06-19T15:25:22.052Z",
    "size": 11042,
    "path": "../public/assets/Layout-Cvoub2SF.js"
  },
  "/assets/index-CaTdCO-m.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"57029-7f1P6LR5SImFh1J3jqOZs7einno"',
    "mtime": "2026-06-19T15:25:21.731Z",
    "size": 356393,
    "path": "../public/assets/index-CaTdCO-m.js"
  },
  "/assets/logo-ZFtjH1AD.png": {
    "type": "image/png",
    "etag": '"27a6b-wl2DuSBGorPGbv3LPeKqGpanoUM"',
    "mtime": "2026-06-19T15:25:21.731Z",
    "size": 162411,
    "path": "../public/assets/logo-ZFtjH1AD.png"
  },
  "/assets/maximize-2-BHqjwAgh.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"2ca-xTTGoBjbP49eZgc4cCQivhDIsJk"',
    "mtime": "2026-06-19T15:25:21.862Z",
    "size": 714,
    "path": "../public/assets/maximize-2-BHqjwAgh.js"
  },
  "/assets/project-infra-B_WTLqli.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"72-pZRv75nbOIYrihl26YkSJ7HnNzA"',
    "mtime": "2026-06-19T15:25:21.733Z",
    "size": 114,
    "path": "../public/assets/project-infra-B_WTLqli.js"
  },
  "/assets/project-construction-DpSZ71Bb.jpg": {
    "type": "image/jpeg",
    "etag": '"122e2-MMk0oQVAU8Zo3H3j7PHrQIcQbkc"',
    "mtime": "2026-06-19T15:25:21.729Z",
    "size": 74466,
    "path": "../public/assets/project-construction-DpSZ71Bb.jpg"
  },
  "/assets/project-commercial-mUi2RqxX.jpg": {
    "type": "image/jpeg",
    "etag": '"1d32d-JrWn89P87tjGQQA6ZdzULwgJUg0"',
    "mtime": "2026-06-19T15:25:21.727Z",
    "size": 119597,
    "path": "../public/assets/project-commercial-mUi2RqxX.jpg"
  },
  "/assets/project-mixed-DBUuaH3n.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"a4-s5svkWoz5H5XzV+iueA/Ak4wR+Y"',
    "mtime": "2026-06-19T15:25:21.734Z",
    "size": 164,
    "path": "../public/assets/project-mixed-DBUuaH3n.js"
  },
  "/assets/project-refurb-BHR8RFbt.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"39-dvUSYlb2xM5ZoYvB8ESxZRpt46A"',
    "mtime": "2026-06-19T15:25:21.733Z",
    "size": 57,
    "path": "../public/assets/project-refurb-BHR8RFbt.js"
  },
  "/assets/project-mixed-DwNuCAcy.jpg": {
    "type": "image/jpeg",
    "etag": '"3172c-mA0mr4b2aXIONXkaFHpE8e8BCO4"',
    "mtime": "2026-06-19T15:25:21.730Z",
    "size": 202540,
    "path": "../public/assets/project-mixed-DwNuCAcy.jpg"
  },
  "/assets/project-infra-CI2cn3zT.jpg": {
    "type": "image/jpeg",
    "etag": '"3af0a-Mr7MNyqJ5crhuN7DvO2d6XWK82Q"',
    "mtime": "2026-06-19T15:25:21.730Z",
    "size": 241418,
    "path": "../public/assets/project-infra-CI2cn3zT.jpg"
  },
  "/assets/project-residential-tPYWyo1a.jpg": {
    "type": "image/jpeg",
    "etag": '"3356c-h6vlvdJQ6UoGMg3VdXkOIcCBsUs"',
    "mtime": "2026-06-19T15:25:21.728Z",
    "size": 210284,
    "path": "../public/assets/project-residential-tPYWyo1a.jpg"
  },
  "/assets/project-refurb-CVO7x12L.jpg": {
    "type": "image/jpeg",
    "etag": '"1acf7-khnRrnQt7WQ22EDkNe9lj7yTv74"',
    "mtime": "2026-06-19T15:25:21.731Z",
    "size": 109815,
    "path": "../public/assets/project-refurb-CVO7x12L.jpg"
  },
  "/assets/projects-CuNyWLPB.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"cbb-/Wrfd5too8bks4yZ+QcCUmhYZUY"',
    "mtime": "2026-06-19T15:25:21.731Z",
    "size": 3259,
    "path": "../public/assets/projects-CuNyWLPB.js"
  },
  "/assets/services-DOvDJkza.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"2f3c-CjyL5UR7OtSCS36rH0hqBYyw2Wc"',
    "mtime": "2026-06-19T15:25:21.731Z",
    "size": 12092,
    "path": "../public/assets/services-DOvDJkza.js"
  },
  "/assets/properties-CI2aMAMo.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"c23-oYFjlZQKmCfqUdgF87qAC/iZnoQ"',
    "mtime": "2026-06-19T15:25:21.731Z",
    "size": 3107,
    "path": "../public/assets/properties-CI2aMAMo.js"
  },
  "/assets/target-D73vZB_r.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"28a-fPNiumbZoPn3mzeKnLkwz1ST5Hc"',
    "mtime": "2026-06-19T15:25:21.733Z",
    "size": 650,
    "path": "../public/assets/target-D73vZB_r.js"
  },
  "/assets/trending-up-DtVHb9Ml.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"b1-zgX8kc61nTs44O83oA1Y63O+KXs"',
    "mtime": "2026-06-19T15:25:21.733Z",
    "size": 177,
    "path": "../public/assets/trending-up-DtVHb9Ml.js"
  },
  "/assets/styles-pXzsP7qe.css": {
    "type": "text/css; charset=utf-8",
    "etag": '"1544c-vVUXh/Sad9Q6pl0ZBWuiTv2Xmms"',
    "mtime": "2026-06-19T15:25:21.731Z",
    "size": 87116,
    "path": "../public/assets/styles-pXzsP7qe.css"
  },
  "/assets/wrench-BoVNkGg-.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"4db-7LyUR6mzSfcRun5XSjMGuw1mmKo"',
    "mtime": "2026-06-19T15:25:21.732Z",
    "size": 1243,
    "path": "../public/assets/wrench-BoVNkGg-.js"
  },
  "/assets/_slug-BBZfNSn4.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"1372-2XahfRs3lpp8rwYVbqEN2M2lCNg"',
    "mtime": "2026-06-19T15:25:21.734Z",
    "size": 4978,
    "path": "../public/assets/_slug-BBZfNSn4.js"
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
