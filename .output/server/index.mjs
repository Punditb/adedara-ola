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
  "/assets/about-CAQyUN12.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"16e2-MsO3Hxpjnv93yUvqV7uoZt2ae/A"',
    "mtime": "2026-07-18T04:22:47.373Z",
    "size": 5858,
    "path": "../public/assets/about-CAQyUN12.js"
  },
  "/assets/arrow-left-BtPgFzwm.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"a7-6gt8F9bn9IFkB1heTEYNF2eKJkQ"',
    "mtime": "2026-07-18T04:22:47.373Z",
    "size": 167,
    "path": "../public/assets/arrow-left-BtPgFzwm.js"
  },
  "/assets/about-team-Be32ki-q.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"128-RA/JyVoGUXZyeMUWiDiNRG2m5vA"',
    "mtime": "2026-07-18T04:22:47.373Z",
    "size": 296,
    "path": "../public/assets/about-team-Be32ki-q.js"
  },
  "/assets/book-consultation-BWayrFMY.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"a8e-JBIl62XUL9TTAE9bh7I+pslveXk"',
    "mtime": "2026-07-18T04:22:47.373Z",
    "size": 2702,
    "path": "../public/assets/book-consultation-BWayrFMY.js"
  },
  "/assets/chart-column-CkRJcVth.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"1df-zwZhdkEzbB+pmJ0tTjEdLzvvLmc"',
    "mtime": "2026-07-18T04:22:47.373Z",
    "size": 479,
    "path": "../public/assets/chart-column-CkRJcVth.js"
  },
  "/assets/circle-check-hpjjdzBn.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"af-i8HG6uPF4y79aCohQ6YVjWGNN9I"',
    "mtime": "2026-07-18T04:22:47.373Z",
    "size": 175,
    "path": "../public/assets/circle-check-hpjjdzBn.js"
  },
  "/assets/clock-DO9bkYax.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"a6-30fSAXuASTK/8bXOyEJVaWLax0Y"',
    "mtime": "2026-07-18T04:22:47.373Z",
    "size": 166,
    "path": "../public/assets/clock-DO9bkYax.js"
  },
  "/assets/handshake-BDdXICpN.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"68c-bes3B3l4c782Wrn7CZGWSMbxiwY"',
    "mtime": "2026-07-18T04:22:47.373Z",
    "size": 1676,
    "path": "../public/assets/handshake-BDdXICpN.js"
  },
  "/assets/contact-ChpbQt6j.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"159f-em+DomGoROwIeXA5DtgCilfE2mM"',
    "mtime": "2026-07-18T04:22:47.373Z",
    "size": 5535,
    "path": "../public/assets/contact-ChpbQt6j.js"
  },
  "/assets/hero-BG2zIWZ3.jpg": {
    "type": "image/jpeg",
    "etag": '"44f86-93YUDAGqeZvNhQ69J3qNd3bJDw4"',
    "mtime": "2026-07-18T04:22:47.373Z",
    "size": 282502,
    "path": "../public/assets/hero-BG2zIWZ3.jpg"
  },
  "/assets/index-C5HVfIAF.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"863-AZMPss7YFbuhmrs/Xpd/DQrNdlQ"',
    "mtime": "2026-07-18T04:22:47.373Z",
    "size": 2147,
    "path": "../public/assets/index-C5HVfIAF.js"
  },
  "/assets/index-Clhtw2Jv.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"4850-tTNKsWMb+J5O9TLA48MUYY2CkXM"',
    "mtime": "2026-07-18T04:22:47.373Z",
    "size": 18512,
    "path": "../public/assets/index-Clhtw2Jv.js"
  },
  "/assets/insights-CwKBh0H4.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"67-5TSE+/fi6qqmInWcVFJuGaYowmo"',
    "mtime": "2026-07-18T04:22:47.373Z",
    "size": 103,
    "path": "../public/assets/insights-CwKBh0H4.js"
  },
  "/assets/insights-BA91eDmg.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"85ec-SRylaLAaCq2ZqDkKxVD1cZLiZto"',
    "mtime": "2026-07-18T04:22:47.373Z",
    "size": 34284,
    "path": "../public/assets/insights-BA91eDmg.js"
  },
  "/assets/investors-C-BE7nn4.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"1900-ccDH4zLcEMt+W9KGqZBoZAdPVBU"',
    "mtime": "2026-07-18T04:22:47.373Z",
    "size": 6400,
    "path": "../public/assets/investors-C-BE7nn4.js"
  },
  "/assets/index-B6R3bbog.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"57459-3j/Bcs19OuqEjMyJD2VWcFlmH98"',
    "mtime": "2026-07-18T04:22:47.373Z",
    "size": 357465,
    "path": "../public/assets/index-B6R3bbog.js"
  },
  "/assets/Layout-BwSdFYyK.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"3324-9TYVeKnUtTGSVgTE4LGtV8FKZQI"',
    "mtime": "2026-07-18T04:22:47.373Z",
    "size": 13092,
    "path": "../public/assets/Layout-BwSdFYyK.js"
  },
  "/assets/project-commercial-DAowRjgs.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"3d-na77BILbPxoXm0m7E8EYaGgZnV8"',
    "mtime": "2026-07-18T04:22:47.373Z",
    "size": 61,
    "path": "../public/assets/project-commercial-DAowRjgs.js"
  },
  "/assets/project-commercial-mUi2RqxX.jpg": {
    "type": "image/jpeg",
    "etag": '"1d32d-JrWn89P87tjGQQA6ZdzULwgJUg0"',
    "mtime": "2026-07-18T04:22:47.373Z",
    "size": 119597,
    "path": "../public/assets/project-commercial-mUi2RqxX.jpg"
  },
  "/assets/logo-ZFtjH1AD.png": {
    "type": "image/png",
    "etag": '"27a6b-wl2DuSBGorPGbv3LPeKqGpanoUM"',
    "mtime": "2026-07-18T04:22:47.373Z",
    "size": 162411,
    "path": "../public/assets/logo-ZFtjH1AD.png"
  },
  "/assets/project-construction-DpSZ71Bb.jpg": {
    "type": "image/jpeg",
    "etag": '"122e2-MMk0oQVAU8Zo3H3j7PHrQIcQbkc"',
    "mtime": "2026-07-18T04:22:47.373Z",
    "size": 74466,
    "path": "../public/assets/project-construction-DpSZ71Bb.jpg"
  },
  "/assets/investors-C9Dfj_2X.jpg": {
    "type": "image/jpeg",
    "etag": '"7aafc-Mzr3wMIgCEZo7a/scq0UXM2Ztd4"',
    "mtime": "2026-07-18T04:22:47.373Z",
    "size": 502524,
    "path": "../public/assets/investors-C9Dfj_2X.jpg"
  },
  "/assets/about-team-B0_pgOfZ.jpg": {
    "type": "image/jpeg",
    "etag": '"8f1c4-e6top/WPHEEXnFKc/OJ/AnLbTqU"',
    "mtime": "2026-07-18T04:22:47.373Z",
    "size": 586180,
    "path": "../public/assets/about-team-B0_pgOfZ.jpg"
  },
  "/assets/project-mixed-BPMb3fBQ.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"71-213seAA3QNA0qdnbF2mUzarEhqc"',
    "mtime": "2026-07-18T04:22:47.373Z",
    "size": 113,
    "path": "../public/assets/project-mixed-BPMb3fBQ.js"
  },
  "/assets/project-infra-CI2cn3zT.jpg": {
    "type": "image/jpeg",
    "etag": '"3af0a-Mr7MNyqJ5crhuN7DvO2d6XWK82Q"',
    "mtime": "2026-07-18T04:22:47.373Z",
    "size": 241418,
    "path": "../public/assets/project-infra-CI2cn3zT.jpg"
  },
  "/assets/project-refurb-CVO7x12L.jpg": {
    "type": "image/jpeg",
    "etag": '"1acf7-khnRrnQt7WQ22EDkNe9lj7yTv74"',
    "mtime": "2026-07-18T04:22:47.373Z",
    "size": 109815,
    "path": "../public/assets/project-refurb-CVO7x12L.jpg"
  },
  "/assets/project-mixed-DwNuCAcy.jpg": {
    "type": "image/jpeg",
    "etag": '"3172c-mA0mr4b2aXIONXkaFHpE8e8BCO4"',
    "mtime": "2026-07-18T04:22:47.373Z",
    "size": 202540,
    "path": "../public/assets/project-mixed-DwNuCAcy.jpg"
  },
  "/assets/projects-cAWRJE57.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"755-QpYxBsbSFaChCNcfbPlm9F4qi4k"',
    "mtime": "2026-07-18T04:22:47.373Z",
    "size": 1877,
    "path": "../public/assets/projects-cAWRJE57.js"
  },
  "/assets/properties-BG8OFV6y.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"1a9-pdhAU9PZjtSAV6XAnbnFsbKqtos"',
    "mtime": "2026-07-18T04:22:47.373Z",
    "size": 425,
    "path": "../public/assets/properties-BG8OFV6y.js"
  },
  "/assets/project-residential-tPYWyo1a.jpg": {
    "type": "image/jpeg",
    "etag": '"3356c-h6vlvdJQ6UoGMg3VdXkOIcCBsUs"',
    "mtime": "2026-07-18T04:22:47.373Z",
    "size": 210284,
    "path": "../public/assets/project-residential-tPYWyo1a.jpg"
  },
  "/assets/services-BFs4qnmo.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"3aef-qpUtioKmeRPOGljPE4ajXRgA1wM"',
    "mtime": "2026-07-18T04:22:47.373Z",
    "size": 15087,
    "path": "../public/assets/services-BFs4qnmo.js"
  },
  "/assets/sparkles-DWMHc2Ri.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"1f0-iWD3OrmJ+ARaM2EcmPPvb+qbnVY"',
    "mtime": "2026-07-18T04:22:47.373Z",
    "size": 496,
    "path": "../public/assets/sparkles-DWMHc2Ri.js"
  },
  "/assets/target-C9Kc64e8.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"28a-3gzBfTelsCOe42XOr4fVh08pNM0"',
    "mtime": "2026-07-18T04:22:47.373Z",
    "size": 650,
    "path": "../public/assets/target-C9Kc64e8.js"
  },
  "/assets/styles-Cy1SDqGg.css": {
    "type": "text/css; charset=utf-8",
    "etag": '"1619e-W3gYYV2l55+bj8vUtYG1uG/EFKc"',
    "mtime": "2026-07-18T04:22:47.373Z",
    "size": 90526,
    "path": "../public/assets/styles-Cy1SDqGg.css"
  },
  "/assets/real-estate-economics-CZZ4zGOe.jpg": {
    "type": "image/jpeg",
    "etag": '"5d7cb-GskPDQYQ978T31W78kl011Hxh2k"',
    "mtime": "2026-07-18T04:22:47.373Z",
    "size": 382923,
    "path": "../public/assets/real-estate-economics-CZZ4zGOe.jpg"
  },
  "/assets/trending-up-DHSdIPzM.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"b1-nhcjaH30tqvKAFlLnBbESsRGUrU"',
    "mtime": "2026-07-18T04:22:47.373Z",
    "size": 177,
    "path": "../public/assets/trending-up-DHSdIPzM.js"
  },
  "/assets/_slug-lKw0h_uV.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"15c7-uHZuw2RwW8Xls7vZL8dz6lJ2/t0"',
    "mtime": "2026-07-18T04:22:47.373Z",
    "size": 5575,
    "path": "../public/assets/_slug-lKw0h_uV.js"
  },
  "/assets/_slug-_UFlioWv.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"1c55-e3rPok+lU6S4z25y2yeb/vMAJeU"',
    "mtime": "2026-07-18T04:22:47.373Z",
    "size": 7253,
    "path": "../public/assets/_slug-_UFlioWv.js"
  },
  "/assets/project-construction-site-Fm2RrxMh.jpg": {
    "type": "image/jpeg",
    "etag": '"c1bb3-KEYDl6zkZC3YVEkRqHrtohPIKVw"',
    "mtime": "2026-07-18T04:22:47.373Z",
    "size": 793523,
    "path": "../public/assets/project-construction-site-Fm2RrxMh.jpg"
  },
  "/assets/real-estate-value-BNZnh-nC.jpg": {
    "type": "image/jpeg",
    "etag": '"cb77b-EyHpXSZJZHP2XQ/9hGJG4aSSjhc"',
    "mtime": "2026-07-18T04:22:47.389Z",
    "size": 833403,
    "path": "../public/assets/real-estate-value-BNZnh-nC.jpg"
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
