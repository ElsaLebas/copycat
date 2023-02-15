// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"lKzq4":[function(require,module,exports) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
module.bundle.HMR_BUNDLE_ID = "fe4256060641b553";
"use strict";
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE, chrome, browser, globalThis, __parcel__import__, __parcel__importScripts__, ServiceWorkerGlobalScope */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: {|[string]: mixed|};
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
interface ExtensionContext {
  runtime: {|
    reload(): void,
    getURL(url: string): string;
    getManifest(): {manifest_version: number, ...};
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
declare var __parcel__import__: (string) => Promise<void>;
declare var __parcel__importScripts__: (string) => Promise<void>;
declare var globalThis: typeof self;
declare var ServiceWorkerGlobalScope: Object;
*/ var OVERLAY_ID = "__parcel__error__overlay__";
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData[moduleName],
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData[moduleName] = undefined;
}
module.bundle.Module = Module;
module.bundle.hotData = {};
var checkedAssets, assetsToDispose, assetsToAccept /*: Array<[ParcelRequire, string]> */ ;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf("http") === 0 ? location.hostname : "localhost");
}
function getPort() {
    return HMR_PORT || location.port;
} // eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== "undefined") {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == "https:" && !/localhost|127.0.0.1|0.0.0.0/.test(hostname) ? "wss" : "ws";
    var ws = new WebSocket(protocol + "://" + hostname + (port ? ":" + port : "") + "/"); // Web extension context
    var extCtx = typeof chrome === "undefined" ? typeof browser === "undefined" ? null : browser : chrome; // Safari doesn't support sourceURL in error stacks.
    // eval may also be disabled via CSP, so do a quick check.
    var supportsSourceURL = false;
    try {
        (0, eval)('throw new Error("test"); //# sourceURL=test.js');
    } catch (err) {
        supportsSourceURL = err.stack.includes("test.js");
    } // $FlowFixMe
    ws.onmessage = async function(event) {
        checkedAssets = {} /*: {|[string]: boolean|} */ ;
        assetsToAccept = [];
        assetsToDispose = [];
        var data = JSON.parse(event.data);
        if (data.type === "update") {
            // Remove error overlay if there is one
            if (typeof document !== "undefined") removeErrorOverlay();
            let assets = data.assets.filter((asset)=>asset.envHash === HMR_ENV_HASH); // Handle HMR Update
            let handled = assets.every((asset)=>{
                return asset.type === "css" || asset.type === "js" && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear(); // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
                if (typeof window !== "undefined" && typeof CustomEvent !== "undefined") window.dispatchEvent(new CustomEvent("parcelhmraccept"));
                await hmrApplyUpdates(assets); // Dispose all old assets.
                let processedAssets = {} /*: {|[string]: boolean|} */ ;
                for(let i = 0; i < assetsToDispose.length; i++){
                    let id = assetsToDispose[i][1];
                    if (!processedAssets[id]) {
                        hmrDispose(assetsToDispose[i][0], id);
                        processedAssets[id] = true;
                    }
                } // Run accept callbacks. This will also re-execute other disposed assets in topological order.
                processedAssets = {};
                for(let i = 0; i < assetsToAccept.length; i++){
                    let id = assetsToAccept[i][1];
                    if (!processedAssets[id]) {
                        hmrAccept(assetsToAccept[i][0], id);
                        processedAssets[id] = true;
                    }
                }
            } else fullReload();
        }
        if (data.type === "error") {
            // Log parcel errors to console
            for (let ansiDiagnostic of data.diagnostics.ansi){
                let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                console.error("\uD83D\uDEA8 [parcel]: " + ansiDiagnostic.message + "\n" + stack + "\n\n" + ansiDiagnostic.hints.join("\n"));
            }
            if (typeof document !== "undefined") {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html); // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    ws.onerror = function(e) {
        console.error(e.message);
    };
    ws.onclose = function() {
        console.warn("[parcel] \uD83D\uDEA8 Connection to the HMR server was lost");
    };
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log("[parcel] ✨ Error resolved");
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement("div");
    overlay.id = OVERLAY_ID;
    let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    for (let diagnostic of diagnostics){
        let stack = diagnostic.frames.length ? diagnostic.frames.reduce((p, frame)=>{
            return `${p}
<a href="/__parcel_launch_editor?file=${encodeURIComponent(frame.location)}" style="text-decoration: underline; color: #888" onclick="fetch(this.href); return false">${frame.location}</a>
${frame.code}`;
        }, "") : diagnostic.stack;
        errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          🚨 ${diagnostic.message}
        </div>
        <pre>${stack}</pre>
        <div>
          ${diagnostic.hints.map((hint)=>"<div>\uD83D\uDCA1 " + hint + "</div>").join("")}
        </div>
        ${diagnostic.documentation ? `<div>📝 <a style="color: violet" href="${diagnostic.documentation}" target="_blank">Learn more</a></div>` : ""}
      </div>
    `;
    }
    errorHTML += "</div>";
    overlay.innerHTML = errorHTML;
    return overlay;
}
function fullReload() {
    if ("reload" in location) location.reload();
    else if (extCtx && extCtx.runtime && extCtx.runtime.reload) extCtx.runtime.reload();
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute("href", link.getAttribute("href").split("?")[0] + "?" + Date.now()); // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href = links[i].getAttribute("href");
            var hostname = getHostname();
            var servedFromHMRServer = hostname === "localhost" ? new RegExp("^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):" + getPort()).test(href) : href.indexOf(hostname + ":" + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrDownload(asset) {
    if (asset.type === "js") {
        if (typeof document !== "undefined") {
            let script = document.createElement("script");
            script.src = asset.url + "?t=" + Date.now();
            if (asset.outputFormat === "esmodule") script.type = "module";
            return new Promise((resolve, reject)=>{
                var _document$head;
                script.onload = ()=>resolve(script);
                script.onerror = reject;
                (_document$head = document.head) === null || _document$head === void 0 || _document$head.appendChild(script);
            });
        } else if (typeof importScripts === "function") {
            // Worker scripts
            if (asset.outputFormat === "esmodule") return import(asset.url + "?t=" + Date.now());
            else return new Promise((resolve, reject)=>{
                try {
                    importScripts(asset.url + "?t=" + Date.now());
                    resolve();
                } catch (err) {
                    reject(err);
                }
            });
        }
    }
}
async function hmrApplyUpdates(assets) {
    global.parcelHotUpdate = Object.create(null);
    let scriptsToRemove;
    try {
        // If sourceURL comments aren't supported in eval, we need to load
        // the update from the dev server over HTTP so that stack traces
        // are correct in errors/logs. This is much slower than eval, so
        // we only do it if needed (currently just Safari).
        // https://bugs.webkit.org/show_bug.cgi?id=137297
        // This path is also taken if a CSP disallows eval.
        if (!supportsSourceURL) {
            let promises = assets.map((asset)=>{
                var _hmrDownload;
                return (_hmrDownload = hmrDownload(asset)) === null || _hmrDownload === void 0 ? void 0 : _hmrDownload.catch((err)=>{
                    // Web extension bugfix for Chromium
                    // https://bugs.chromium.org/p/chromium/issues/detail?id=1255412#c12
                    if (extCtx && extCtx.runtime && extCtx.runtime.getManifest().manifest_version == 3) {
                        if (typeof ServiceWorkerGlobalScope != "undefined" && global instanceof ServiceWorkerGlobalScope) {
                            extCtx.runtime.reload();
                            return;
                        }
                        asset.url = extCtx.runtime.getURL("/__parcel_hmr_proxy__?url=" + encodeURIComponent(asset.url + "?t=" + Date.now()));
                        return hmrDownload(asset);
                    }
                    throw err;
                });
            });
            scriptsToRemove = await Promise.all(promises);
        }
        assets.forEach(function(asset) {
            hmrApply(module.bundle.root, asset);
        });
    } finally{
        delete global.parcelHotUpdate;
        if (scriptsToRemove) scriptsToRemove.forEach((script)=>{
            if (script) {
                var _document$head2;
                (_document$head2 = document.head) === null || _document$head2 === void 0 || _document$head2.removeChild(script);
            }
        });
    }
}
function hmrApply(bundle, asset) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === "css") reloadCSS();
    else if (asset.type === "js") {
        let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                let oldDeps = modules[asset.id][1];
                for(let dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    let id = oldDeps[dep];
                    let parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            if (supportsSourceURL) // Global eval. We would use `new Function` here but browser
            // support for source maps is better with eval.
            (0, eval)(asset.output);
             // $FlowFixMe
            let fn = global.parcelHotUpdate[asset.id];
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id) {
    let modules = bundle.modules;
    if (!modules) return;
    if (modules[id]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        let deps = modules[id][1];
        let orphans = [];
        for(let dep in deps){
            let parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        } // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id];
        delete bundle.cache[id]; // Now delete the orphans.
        orphans.forEach((id)=>{
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id);
}
function hmrAcceptCheck(bundle, id, depsByBundle) {
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
     // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    let parents = getParents(module.bundle.root, id);
    let accepted = false;
    while(parents.length > 0){
        let v = parents.shift();
        let a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else {
            // Otherwise, queue the parents in the next level upward.
            let p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push(...p);
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle, id, depsByBundle) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToDispose.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) {
        assetsToAccept.push([
            bundle,
            id
        ]);
        return true;
    }
}
function hmrDispose(bundle, id) {
    var cached = bundle.cache[id];
    bundle.hotData[id] = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData[id];
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData[id]);
    });
    delete bundle.cache[id];
}
function hmrAccept(bundle, id) {
    // Execute the module.
    bundle(id); // Run the accept callbacks in the new version of the module.
    var cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) {
            assetsToAlsoAccept.forEach(function(a) {
                hmrDispose(a[0], a[1]);
            }); // $FlowFixMe[method-unbinding]
            assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
        }
    });
}

},{}],"bNKaB":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
var _autocompleteJs = require("@algolia/autocomplete-js");
var _lite = require("algoliasearch/lite");
var _liteDefault = parcelHelpers.interopDefault(_lite);
var _autocompletePluginQuerySuggestions = require("@algolia/autocomplete-plugin-query-suggestions");
var _autocompletePluginRecentSearches = require("@algolia/autocomplete-plugin-recent-searches");
const searchClient = (0, _liteDefault.default)("ZH6901PX1J", "960f9fcf91cb1d368a9ab871cc9393a0");
const querySuggestionsPlugin = (0, _autocompletePluginQuerySuggestions.createQuerySuggestionsPlugin)({
    searchClient,
    indexName: "sandbox_index_query_suggestions"
});
const recentSearchesPlugin = (0, _autocompletePluginRecentSearches.createLocalStorageRecentSearchesPlugin)({
    key: "navbar",
    limit: 3
});
(0, _autocompleteJs.autocomplete)({
    container: "#autocomplete",
    openOnFocus: true,
    plugins: [
        querySuggestionsPlugin,
        recentSearchesPlugin
    ],
    placeholder: "Your search here...",
    // openOnFocus: true,
    getSources () {
        return [
            {
                sourceId: "products",
                getItems ({ query  }) {
                    return (0, _autocompleteJs.getAlgoliaResults)({
                        searchClient,
                        queries: [
                            {
                                indexName: "sandbox_index",
                                query
                            }
                        ]
                    });
                },
                getItemUrl ({ item  }) {
                    return item.url;
                },
                templates: {
                    item ({ item  }) {
                        return item.name;
                    }
                }
            }
        ];
    }
});

},{"@algolia/autocomplete-js":"3Syxs","algoliasearch/lite":"ehDkI","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3","@algolia/autocomplete-plugin-query-suggestions":"kDyli","@algolia/autocomplete-plugin-recent-searches":"lFtzN"}],"3Syxs":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _autocomplete = require("./autocomplete");
parcelHelpers.exportAll(_autocomplete, exports);
var _requesters = require("./requesters");
parcelHelpers.exportAll(_requesters, exports);
var _types = require("./types");
parcelHelpers.exportAll(_types, exports);

},{"./autocomplete":"8CeYd","./requesters":"24Y2H","./types":"8cK74","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"8CeYd":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "autocomplete", ()=>autocomplete);
var _autocompleteCore = require("@algolia/autocomplete-core");
var _autocompleteShared = require("@algolia/autocomplete-shared");
var _htm = require("htm");
var _htmDefault = parcelHelpers.interopDefault(_htm);
var _createAutocompleteDom = require("./createAutocompleteDom");
var _createEffectWrapper = require("./createEffectWrapper");
var _createReactiveWrapper = require("./createReactiveWrapper");
var _getDefaultOptions = require("./getDefaultOptions");
var _getPanelPlacementStyle = require("./getPanelPlacementStyle");
var _render = require("./render");
var _userAgents = require("./userAgents");
var _utils = require("./utils");
var _excluded = [
    "components"
];
function _objectWithoutProperties(source, excluded) {
    if (source == null) return {};
    var target = _objectWithoutPropertiesLoose(source, excluded);
    var key, i;
    if (Object.getOwnPropertySymbols) {
        var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
        for(i = 0; i < sourceSymbolKeys.length; i++){
            key = sourceSymbolKeys[i];
            if (excluded.indexOf(key) >= 0) continue;
            if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
            target[key] = source[key];
        }
    }
    return target;
}
function _objectWithoutPropertiesLoose(source, excluded) {
    if (source == null) return {};
    var target = {};
    var sourceKeys = Object.keys(source);
    var key, i;
    for(i = 0; i < sourceKeys.length; i++){
        key = sourceKeys[i];
        if (excluded.indexOf(key) >= 0) continue;
        target[key] = source[key];
    }
    return target;
}
function ownKeys(object, enumerableOnly) {
    var keys = Object.keys(object);
    if (Object.getOwnPropertySymbols) {
        var symbols = Object.getOwnPropertySymbols(object);
        enumerableOnly && (symbols = symbols.filter(function(sym) {
            return Object.getOwnPropertyDescriptor(object, sym).enumerable;
        })), keys.push.apply(keys, symbols);
    }
    return keys;
}
function _objectSpread(target) {
    for(var i = 1; i < arguments.length; i++){
        var source = null != arguments[i] ? arguments[i] : {};
        i % 2 ? ownKeys(Object(source), !0).forEach(function(key) {
            _defineProperty(target, key, source[key]);
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function(key) {
            Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
        });
    }
    return target;
}
function _defineProperty(obj, key, value) {
    if (key in obj) Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
    });
    else obj[key] = value;
    return obj;
}
function autocomplete(options) {
    var _createEffectWrapper1 = (0, _createEffectWrapper.createEffectWrapper)(), runEffect = _createEffectWrapper1.runEffect, cleanupEffects = _createEffectWrapper1.cleanupEffects, runEffects = _createEffectWrapper1.runEffects;
    var _createReactiveWrappe = (0, _createReactiveWrapper.createReactiveWrapper)(), reactive = _createReactiveWrappe.reactive, runReactives = _createReactiveWrappe.runReactives;
    var hasNoResultsSourceTemplateRef = (0, _autocompleteShared.createRef)(false);
    var optionsRef = (0, _autocompleteShared.createRef)(options);
    var onStateChangeRef = (0, _autocompleteShared.createRef)(undefined);
    var props = reactive(function() {
        return (0, _getDefaultOptions.getDefaultOptions)(optionsRef.current);
    });
    var isDetached = reactive(function() {
        return props.value.core.environment.matchMedia(props.value.renderer.detachedMediaQuery).matches;
    });
    var autocomplete = reactive(function() {
        return (0, _autocompleteCore.createAutocomplete)(_objectSpread(_objectSpread({}, props.value.core), {}, {
            onStateChange: function onStateChange(params) {
                var _onStateChangeRef$cur, _props$value$core$onS, _props$value$core;
                hasNoResultsSourceTemplateRef.current = params.state.collections.some(function(collection) {
                    return collection.source.templates.noResults;
                });
                (_onStateChangeRef$cur = onStateChangeRef.current) === null || _onStateChangeRef$cur === void 0 || _onStateChangeRef$cur.call(onStateChangeRef, params);
                (_props$value$core$onS = (_props$value$core = props.value.core).onStateChange) === null || _props$value$core$onS === void 0 || _props$value$core$onS.call(_props$value$core, params);
            },
            shouldPanelOpen: optionsRef.current.shouldPanelOpen || function(_ref) {
                var state = _ref.state;
                if (isDetached.value) return true;
                var hasItems = (0, _autocompleteShared.getItemsCount)(state) > 0;
                if (!props.value.core.openOnFocus && !state.query) return hasItems;
                var hasNoResultsTemplate = Boolean(hasNoResultsSourceTemplateRef.current || props.value.renderer.renderNoResults);
                return !hasItems && hasNoResultsTemplate || hasItems;
            },
            __autocomplete_metadata: {
                userAgents: (0, _userAgents.userAgents),
                options: options
            }
        }));
    });
    var lastStateRef = (0, _autocompleteShared.createRef)(_objectSpread({
        collections: [],
        completion: null,
        context: {},
        isOpen: false,
        query: "",
        activeItemId: null,
        status: "idle"
    }, props.value.core.initialState));
    var propGetters = {
        getEnvironmentProps: props.value.renderer.getEnvironmentProps,
        getFormProps: props.value.renderer.getFormProps,
        getInputProps: props.value.renderer.getInputProps,
        getItemProps: props.value.renderer.getItemProps,
        getLabelProps: props.value.renderer.getLabelProps,
        getListProps: props.value.renderer.getListProps,
        getPanelProps: props.value.renderer.getPanelProps,
        getRootProps: props.value.renderer.getRootProps
    };
    var autocompleteScopeApi = {
        setActiveItemId: autocomplete.value.setActiveItemId,
        setQuery: autocomplete.value.setQuery,
        setCollections: autocomplete.value.setCollections,
        setIsOpen: autocomplete.value.setIsOpen,
        setStatus: autocomplete.value.setStatus,
        setContext: autocomplete.value.setContext,
        refresh: autocomplete.value.refresh
    };
    var html = reactive(function() {
        return (0, _htmDefault.default).bind(props.value.renderer.renderer.createElement);
    });
    var dom = reactive(function() {
        return (0, _createAutocompleteDom.createAutocompleteDom)({
            autocomplete: autocomplete.value,
            autocompleteScopeApi: autocompleteScopeApi,
            classNames: props.value.renderer.classNames,
            environment: props.value.core.environment,
            isDetached: isDetached.value,
            placeholder: props.value.core.placeholder,
            propGetters: propGetters,
            setIsModalOpen: setIsModalOpen,
            state: lastStateRef.current,
            translations: props.value.renderer.translations
        });
    });
    function setPanelPosition() {
        (0, _utils.setProperties)(dom.value.panel, {
            style: isDetached.value ? {} : (0, _getPanelPlacementStyle.getPanelPlacementStyle)({
                panelPlacement: props.value.renderer.panelPlacement,
                container: dom.value.root,
                form: dom.value.form,
                environment: props.value.core.environment
            })
        });
    }
    function scheduleRender(state) {
        lastStateRef.current = state;
        var renderProps = {
            autocomplete: autocomplete.value,
            autocompleteScopeApi: autocompleteScopeApi,
            classNames: props.value.renderer.classNames,
            components: props.value.renderer.components,
            container: props.value.renderer.container,
            html: html.value,
            dom: dom.value,
            panelContainer: isDetached.value ? dom.value.detachedContainer : props.value.renderer.panelContainer,
            propGetters: propGetters,
            state: lastStateRef.current,
            renderer: props.value.renderer.renderer
        };
        var render = !(0, _autocompleteShared.getItemsCount)(state) && !hasNoResultsSourceTemplateRef.current && props.value.renderer.renderNoResults || props.value.renderer.render;
        (0, _render.renderSearchBox)(renderProps);
        (0, _render.renderPanel)(render, renderProps);
    }
    runEffect(function() {
        var environmentProps = autocomplete.value.getEnvironmentProps({
            formElement: dom.value.form,
            panelElement: dom.value.panel,
            inputElement: dom.value.input
        });
        (0, _utils.setProperties)(props.value.core.environment, environmentProps);
        return function() {
            (0, _utils.setProperties)(props.value.core.environment, Object.keys(environmentProps).reduce(function(acc, key) {
                return _objectSpread(_objectSpread({}, acc), {}, _defineProperty({}, key, undefined));
            }, {}));
        };
    });
    runEffect(function() {
        var panelContainerElement = isDetached.value ? props.value.core.environment.document.body : props.value.renderer.panelContainer;
        var panelElement = isDetached.value ? dom.value.detachedOverlay : dom.value.panel;
        if (isDetached.value && lastStateRef.current.isOpen) setIsModalOpen(true);
        scheduleRender(lastStateRef.current);
        return function() {
            if (panelContainerElement.contains(panelElement)) panelContainerElement.removeChild(panelElement);
        };
    });
    runEffect(function() {
        var containerElement = props.value.renderer.container;
        containerElement.appendChild(dom.value.root);
        return function() {
            containerElement.removeChild(dom.value.root);
        };
    });
    runEffect(function() {
        var debouncedRender = (0, _autocompleteShared.debounce)(function(_ref2) {
            var state = _ref2.state;
            scheduleRender(state);
        }, 0);
        onStateChangeRef.current = function(_ref3) {
            var state = _ref3.state, prevState = _ref3.prevState;
            if (isDetached.value && prevState.isOpen !== state.isOpen) setIsModalOpen(state.isOpen);
             // The outer DOM might have changed since the last time the panel was
            // positioned. The layout might have shifted vertically for instance.
            // It's therefore safer to re-calculate the panel position before opening
            // it again.
            if (!isDetached.value && state.isOpen && !prevState.isOpen) setPanelPosition();
             // We scroll to the top of the panel whenever the query changes (i.e. new
            // results come in) so that users don't have to.
            if (state.query !== prevState.query) {
                var scrollablePanels = props.value.core.environment.document.querySelectorAll(".aa-Panel--scrollable");
                scrollablePanels.forEach(function(scrollablePanel) {
                    if (scrollablePanel.scrollTop !== 0) scrollablePanel.scrollTop = 0;
                });
            }
            debouncedRender({
                state: state
            });
        };
        return function() {
            onStateChangeRef.current = undefined;
        };
    });
    runEffect(function() {
        var onResize = (0, _autocompleteShared.debounce)(function() {
            var previousIsDetached = isDetached.value;
            isDetached.value = props.value.core.environment.matchMedia(props.value.renderer.detachedMediaQuery).matches;
            if (previousIsDetached !== isDetached.value) update({});
            else requestAnimationFrame(setPanelPosition);
        }, 20);
        props.value.core.environment.addEventListener("resize", onResize);
        return function() {
            props.value.core.environment.removeEventListener("resize", onResize);
        };
    });
    runEffect(function() {
        if (!isDetached.value) return function() {};
        function toggleModalClassname(isActive) {
            dom.value.detachedContainer.classList.toggle("aa-DetachedContainer--modal", isActive);
        }
        function onChange(event) {
            toggleModalClassname(event.matches);
        }
        var isModalDetachedMql = props.value.core.environment.matchMedia(getComputedStyle(props.value.core.environment.document.documentElement).getPropertyValue("--aa-detached-modal-media-query"));
        toggleModalClassname(isModalDetachedMql.matches); // Prior to Safari 14, `MediaQueryList` isn't based on `EventTarget`,
        // so we must use `addListener` and `removeListener` to observe media query lists.
        // See https://developer.mozilla.org/en-US/docs/Web/API/MediaQueryList/addListener
        var hasModernEventListener = Boolean(isModalDetachedMql.addEventListener);
        hasModernEventListener ? isModalDetachedMql.addEventListener("change", onChange) : isModalDetachedMql.addListener(onChange);
        return function() {
            hasModernEventListener ? isModalDetachedMql.removeEventListener("change", onChange) : isModalDetachedMql.removeListener(onChange);
        };
    });
    runEffect(function() {
        requestAnimationFrame(setPanelPosition);
        return function() {};
    });
    function destroy() {
        cleanupEffects();
    }
    function update() {
        var updatedOptions = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
        cleanupEffects();
        var _props$value$renderer = props.value.renderer, components = _props$value$renderer.components, rendererProps = _objectWithoutProperties(_props$value$renderer, _excluded);
        optionsRef.current = (0, _utils.mergeDeep)(rendererProps, props.value.core, {
            // We need to filter out default components so they can be replaced with
            // a new `renderer`, without getting rid of user components.
            // @MAJOR Deal with registering components with the same name as the
            // default ones. If we disallow overriding default components, we'd just
            // need to pass all `components` here.
            components: (0, _utils.pickBy)(components, function(_ref4) {
                var value = _ref4.value;
                return !value.hasOwnProperty("__autocomplete_componentName");
            }),
            initialState: lastStateRef.current
        }, updatedOptions);
        runReactives();
        runEffects();
        autocomplete.value.refresh().then(function() {
            scheduleRender(lastStateRef.current);
        });
    }
    function setIsModalOpen(value) {
        requestAnimationFrame(function() {
            var prevValue = props.value.core.environment.document.body.contains(dom.value.detachedOverlay);
            if (value === prevValue) return;
            if (value) {
                props.value.core.environment.document.body.appendChild(dom.value.detachedOverlay);
                props.value.core.environment.document.body.classList.add("aa-Detached");
                dom.value.input.focus();
            } else {
                props.value.core.environment.document.body.removeChild(dom.value.detachedOverlay);
                props.value.core.environment.document.body.classList.remove("aa-Detached");
                autocomplete.value.setQuery("");
                autocomplete.value.refresh();
            }
        });
    }
    return _objectSpread(_objectSpread({}, autocompleteScopeApi), {}, {
        update: update,
        destroy: destroy
    });
}

},{"@algolia/autocomplete-core":"eH7jJ","@algolia/autocomplete-shared":"59T59","htm":"58er4","./createAutocompleteDom":"fEfqR","./createEffectWrapper":"71EHb","./createReactiveWrapper":"grTGt","./getDefaultOptions":"ei4ti","./getPanelPlacementStyle":"aVhxY","./render":"45iVn","./userAgents":"hqEHF","./utils":"fKU1x","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"eH7jJ":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _createAutocomplete = require("./createAutocomplete");
parcelHelpers.exportAll(_createAutocomplete, exports);
var _getDefaultProps = require("./getDefaultProps");
parcelHelpers.exportAll(_getDefaultProps, exports);
var _types = require("./types");
parcelHelpers.exportAll(_types, exports);

},{"./createAutocomplete":"SohsF","./getDefaultProps":"66IWD","./types":"79Luq","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"SohsF":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "createAutocomplete", ()=>createAutocomplete);
var _checkOptions = require("./checkOptions");
var _createStore = require("./createStore");
var _getAutocompleteSetters = require("./getAutocompleteSetters");
var _getDefaultProps = require("./getDefaultProps");
var _getPropGetters = require("./getPropGetters");
var _metadata = require("./metadata");
var _onInput = require("./onInput");
var _stateReducer = require("./stateReducer");
function ownKeys(object, enumerableOnly) {
    var keys = Object.keys(object);
    if (Object.getOwnPropertySymbols) {
        var symbols = Object.getOwnPropertySymbols(object);
        enumerableOnly && (symbols = symbols.filter(function(sym) {
            return Object.getOwnPropertyDescriptor(object, sym).enumerable;
        })), keys.push.apply(keys, symbols);
    }
    return keys;
}
function _objectSpread(target) {
    for(var i = 1; i < arguments.length; i++){
        var source = null != arguments[i] ? arguments[i] : {};
        i % 2 ? ownKeys(Object(source), !0).forEach(function(key) {
            _defineProperty(target, key, source[key]);
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function(key) {
            Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
        });
    }
    return target;
}
function _defineProperty(obj, key, value) {
    if (key in obj) Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
    });
    else obj[key] = value;
    return obj;
}
function createAutocomplete(options) {
    (0, _checkOptions.checkOptions)(options);
    var subscribers = [];
    var props = (0, _getDefaultProps.getDefaultProps)(options, subscribers);
    var store = (0, _createStore.createStore)((0, _stateReducer.stateReducer), props, onStoreStateChange);
    var setters = (0, _getAutocompleteSetters.getAutocompleteSetters)({
        store: store
    });
    var propGetters = (0, _getPropGetters.getPropGetters)(_objectSpread({
        props: props,
        refresh: refresh,
        store: store
    }, setters));
    function onStoreStateChange(_ref) {
        var prevState = _ref.prevState, state = _ref.state;
        props.onStateChange(_objectSpread({
            prevState: prevState,
            state: state,
            refresh: refresh
        }, setters));
    }
    function refresh() {
        return (0, _onInput.onInput)(_objectSpread({
            event: new Event("input"),
            nextState: {
                isOpen: store.getState().isOpen
            },
            props: props,
            query: store.getState().query,
            refresh: refresh,
            store: store
        }, setters));
    }
    props.plugins.forEach(function(plugin) {
        var _plugin$subscribe;
        return (_plugin$subscribe = plugin.subscribe) === null || _plugin$subscribe === void 0 ? void 0 : _plugin$subscribe.call(plugin, _objectSpread(_objectSpread({}, setters), {}, {
            refresh: refresh,
            onSelect: function onSelect(fn) {
                subscribers.push({
                    onSelect: fn
                });
            },
            onActive: function onActive(fn) {
                subscribers.push({
                    onActive: fn
                });
            }
        }));
    });
    (0, _metadata.injectMetadata)({
        metadata: (0, _metadata.getMetadata)({
            plugins: props.plugins,
            options: options
        }),
        environment: props.environment
    });
    return _objectSpread(_objectSpread({
        refresh: refresh
    }, propGetters), setters);
}

},{"./checkOptions":"dYRik","./createStore":"jHRzQ","./getAutocompleteSetters":"1FuiC","./getDefaultProps":"66IWD","./getPropGetters":"ghiHp","./metadata":"66SZT","./onInput":"6DlJz","./stateReducer":"iw5Pd","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"dYRik":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "checkOptions", ()=>checkOptions);
var _autocompleteShared = require("@algolia/autocomplete-shared");
function checkOptions(options) {
    (0, _autocompleteShared.warn)(!options.debug, "The `debug` option is meant for development debugging and should not be used in production.");
}

},{"@algolia/autocomplete-shared":"59T59","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"59T59":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _createRef = require("./createRef");
parcelHelpers.exportAll(_createRef, exports);
var _debounce = require("./debounce");
parcelHelpers.exportAll(_debounce, exports);
var _decycle = require("./decycle");
parcelHelpers.exportAll(_decycle, exports);
var _flatten = require("./flatten");
parcelHelpers.exportAll(_flatten, exports);
var _generateAutocompleteId = require("./generateAutocompleteId");
parcelHelpers.exportAll(_generateAutocompleteId, exports);
var _getAttributeValueByPath = require("./getAttributeValueByPath");
parcelHelpers.exportAll(_getAttributeValueByPath, exports);
var _getItemsCount = require("./getItemsCount");
parcelHelpers.exportAll(_getItemsCount, exports);
var _invariant = require("./invariant");
parcelHelpers.exportAll(_invariant, exports);
var _isEqual = require("./isEqual");
parcelHelpers.exportAll(_isEqual, exports);
var _maybePromise = require("./MaybePromise");
parcelHelpers.exportAll(_maybePromise, exports);
var _noop = require("./noop");
parcelHelpers.exportAll(_noop, exports);
var _userAgent = require("./UserAgent");
parcelHelpers.exportAll(_userAgent, exports);
var _userAgents = require("./userAgents");
parcelHelpers.exportAll(_userAgents, exports);
var _version = require("./version");
parcelHelpers.exportAll(_version, exports);
var _warn = require("./warn");
parcelHelpers.exportAll(_warn, exports);

},{"./createRef":"03oym","./debounce":"bf45i","./decycle":"9Ql5H","./flatten":"jZiCW","./generateAutocompleteId":"4baw4","./getAttributeValueByPath":"1o3Vw","./getItemsCount":"etmH8","./invariant":"cWfda","./isEqual":"74yQd","./MaybePromise":"4IWsu","./noop":"7T7MV","./UserAgent":"7KM8u","./userAgents":"4FPMn","./version":"j5UdY","./warn":"bcIkl","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"03oym":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "createRef", ()=>createRef);
function createRef(initialValue) {
    return {
        current: initialValue
    };
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gkKU3":[function(require,module,exports) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, "__esModule", {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === "default" || key === "__esModule" || dest.hasOwnProperty(key)) return;
        Object.defineProperty(dest, key, {
            enumerable: true,
            get: function() {
                return source[key];
            }
        });
    });
    return dest;
};
exports.export = function(dest, destName, get) {
    Object.defineProperty(dest, destName, {
        enumerable: true,
        get: get
    });
};

},{}],"bf45i":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "debounce", ()=>debounce);
function debounce(fn, time) {
    var timerId = undefined;
    return function() {
        for(var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++)args[_key] = arguments[_key];
        if (timerId) clearTimeout(timerId);
        timerId = setTimeout(function() {
            return fn.apply(void 0, args);
        }, time);
    };
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"9Ql5H":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * Decycles objects with circular references.
 * This is used to print cyclic structures in development environment only.
 */ parcelHelpers.export(exports, "decycle", ()=>decycle);
function _slicedToArray(arr, i) {
    return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
}
function _nonIterableRest() {
    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _unsupportedIterableToArray(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}
function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
function _iterableToArrayLimit(arr, i) {
    var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"];
    if (_i == null) return;
    var _arr = [];
    var _n = true;
    var _d = false;
    var _s, _e;
    try {
        for(_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true){
            _arr.push(_s.value);
            if (i && _arr.length === i) break;
        }
    } catch (err) {
        _d = true;
        _e = err;
    } finally{
        try {
            if (!_n && _i["return"] != null) _i["return"]();
        } finally{
            if (_d) throw _e;
        }
    }
    return _arr;
}
function _arrayWithHoles(arr) {
    if (Array.isArray(arr)) return arr;
}
function _typeof(obj) {
    "@babel/helpers - typeof";
    return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(obj) {
        return typeof obj;
    } : function(obj) {
        return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    }, _typeof(obj);
}
function decycle(obj) {
    var seen = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : new Set();
    if (!obj || _typeof(obj) !== "object") return obj;
    if (seen.has(obj)) return "[Circular]";
    var newSeen = seen.add(obj);
    if (Array.isArray(obj)) return obj.map(function(x) {
        return decycle(x, newSeen);
    });
    return Object.fromEntries(Object.entries(obj).map(function(_ref) {
        var _ref2 = _slicedToArray(_ref, 2), key = _ref2[0], value = _ref2[1];
        return [
            key,
            decycle(value, newSeen)
        ];
    }));
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"jZiCW":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "flatten", ()=>flatten);
function flatten(values) {
    return values.reduce(function(a, b) {
        return a.concat(b);
    }, []);
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"4baw4":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "generateAutocompleteId", ()=>generateAutocompleteId);
var autocompleteId = 0;
function generateAutocompleteId() {
    return "autocomplete-".concat(autocompleteId++);
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"1o3Vw":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "getAttributeValueByPath", ()=>getAttributeValueByPath);
function getAttributeValueByPath(record, path) {
    return path.reduce(function(current, key) {
        return current && current[key];
    }, record);
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"etmH8":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "getItemsCount", ()=>getItemsCount);
function getItemsCount(state) {
    if (state.collections.length === 0) return 0;
    return state.collections.reduce(function(sum, collection) {
        return sum + collection.items.length;
    }, 0);
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"cWfda":[function(require,module,exports) {
/**
 * Throws an error if the condition is not met in development mode.
 * This is used to make development a better experience to provide guidance as
 * to where the error comes from.
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "invariant", ()=>invariant);
function invariant(condition, message) {
    if (!condition) throw new Error("[Autocomplete] ".concat(typeof message === "function" ? message() : message));
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"74yQd":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "isEqual", ()=>isEqual);
function isPrimitive(obj) {
    return obj !== Object(obj);
}
function isEqual(first, second) {
    if (first === second) return true;
    if (isPrimitive(first) || isPrimitive(second) || typeof first === "function" || typeof second === "function") return first === second;
    if (Object.keys(first).length !== Object.keys(second).length) return false;
    for(var _i = 0, _Object$keys = Object.keys(first); _i < _Object$keys.length; _i++){
        var key = _Object$keys[_i];
        if (!(key in second)) return false;
        if (!isEqual(first[key], second[key])) return false;
    }
    return true;
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"4IWsu":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"7T7MV":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "noop", ()=>noop);
var noop = function noop() {};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"7KM8u":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"4FPMn":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "userAgents", ()=>userAgents);
var _version = require("./version");
var userAgents = [
    {
        segment: "autocomplete-core",
        version: (0, _version.version)
    }
];

},{"./version":"j5UdY","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"j5UdY":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "version", ()=>version);
var version = "1.7.4";

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"bcIkl":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "warnCache", ()=>warnCache);
/**
 * Logs a warning if the condition is not met.
 * This is used to log issues in development environment only.
 */ parcelHelpers.export(exports, "warn", ()=>warn);
var warnCache = {
    current: {}
};
function warn(condition, message) {
    if (condition) return;
    var sanitizedMessage = message.trim();
    var hasAlreadyPrinted = warnCache.current[sanitizedMessage];
    if (!hasAlreadyPrinted) {
        warnCache.current[sanitizedMessage] = true; // eslint-disable-next-line no-console
        console.warn("[Autocomplete] ".concat(sanitizedMessage));
    }
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"jHRzQ":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "createStore", ()=>createStore);
var _utils = require("./utils");
function ownKeys(object, enumerableOnly) {
    var keys = Object.keys(object);
    if (Object.getOwnPropertySymbols) {
        var symbols = Object.getOwnPropertySymbols(object);
        enumerableOnly && (symbols = symbols.filter(function(sym) {
            return Object.getOwnPropertyDescriptor(object, sym).enumerable;
        })), keys.push.apply(keys, symbols);
    }
    return keys;
}
function _objectSpread(target) {
    for(var i = 1; i < arguments.length; i++){
        var source = null != arguments[i] ? arguments[i] : {};
        i % 2 ? ownKeys(Object(source), !0).forEach(function(key) {
            _defineProperty(target, key, source[key]);
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function(key) {
            Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
        });
    }
    return target;
}
function _defineProperty(obj, key, value) {
    if (key in obj) Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
    });
    else obj[key] = value;
    return obj;
}
function createStore(reducer, props, onStoreStateChange) {
    var state = props.initialState;
    return {
        getState: function getState() {
            return state;
        },
        dispatch: function dispatch(action, payload) {
            var prevState = _objectSpread({}, state);
            state = reducer(state, {
                type: action,
                props: props,
                payload: payload
            });
            onStoreStateChange({
                state: state,
                prevState: prevState
            });
        },
        pendingRequests: (0, _utils.createCancelablePromiseList)()
    };
}

},{"./utils":"gd60Y","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gd60Y":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _createCancelablePromise = require("./createCancelablePromise");
parcelHelpers.exportAll(_createCancelablePromise, exports);
var _createCancelablePromiseList = require("./createCancelablePromiseList");
parcelHelpers.exportAll(_createCancelablePromiseList, exports);
var _createConcurrentSafePromise = require("./createConcurrentSafePromise");
parcelHelpers.exportAll(_createConcurrentSafePromise, exports);
var _getNextActiveItemId = require("./getNextActiveItemId");
parcelHelpers.exportAll(_getNextActiveItemId, exports);
var _getNormalizedSources = require("./getNormalizedSources");
parcelHelpers.exportAll(_getNormalizedSources, exports);
var _getActiveItem = require("./getActiveItem");
parcelHelpers.exportAll(_getActiveItem, exports);
var _isOrContainsNode = require("./isOrContainsNode");
parcelHelpers.exportAll(_isOrContainsNode, exports);
var _isSamsung = require("./isSamsung");
parcelHelpers.exportAll(_isSamsung, exports);
var _mapToAlgoliaResponse = require("./mapToAlgoliaResponse");
parcelHelpers.exportAll(_mapToAlgoliaResponse, exports);

},{"./createCancelablePromise":"gLzIw","./createCancelablePromiseList":"8etN5","./createConcurrentSafePromise":"4Cc3M","./getNextActiveItemId":"g57RT","./getNormalizedSources":"8mENM","./getActiveItem":"bFTMy","./isOrContainsNode":"5AASb","./isSamsung":"8H5bw","./mapToAlgoliaResponse":"gS8c5","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gLzIw":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "createCancelablePromise", ()=>createCancelablePromise);
parcelHelpers.export(exports, "cancelable", ()=>cancelable);
function createInternalCancelablePromise(promise, initialState) {
    var state = initialState;
    return {
        then: function then(onfulfilled, onrejected) {
            return createInternalCancelablePromise(promise.then(createCallback(onfulfilled, state, promise), createCallback(onrejected, state, promise)), state);
        },
        catch: function _catch(onrejected) {
            return createInternalCancelablePromise(promise.catch(createCallback(onrejected, state, promise)), state);
        },
        finally: function _finally(onfinally) {
            if (onfinally) state.onCancelList.push(onfinally);
            return createInternalCancelablePromise(promise.finally(createCallback(onfinally && function() {
                state.onCancelList = [];
                return onfinally();
            }, state, promise)), state);
        },
        cancel: function cancel() {
            state.isCanceled = true;
            var callbacks = state.onCancelList;
            state.onCancelList = [];
            callbacks.forEach(function(callback) {
                callback();
            });
        },
        isCanceled: function isCanceled() {
            return state.isCanceled === true;
        }
    };
}
function createCancelablePromise(executor) {
    return createInternalCancelablePromise(new Promise(function(resolve, reject) {
        return executor(resolve, reject);
    }), {
        isCanceled: false,
        onCancelList: []
    });
}
createCancelablePromise.resolve = function(value) {
    return cancelable(Promise.resolve(value));
};
createCancelablePromise.reject = function(reason) {
    return cancelable(Promise.reject(reason));
};
function cancelable(promise) {
    return createInternalCancelablePromise(promise, {
        isCanceled: false,
        onCancelList: []
    });
}
function createCallback(onResult, state, fallback) {
    if (!onResult) return fallback;
    return function callback(arg) {
        if (state.isCanceled) return arg;
        return onResult(arg);
    };
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"8etN5":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "createCancelablePromiseList", ()=>createCancelablePromiseList);
function createCancelablePromiseList() {
    var list = [];
    return {
        add: function add(cancelablePromise) {
            list.push(cancelablePromise);
            return cancelablePromise.finally(function() {
                list = list.filter(function(item) {
                    return item !== cancelablePromise;
                });
            });
        },
        cancelAll: function cancelAll() {
            list.forEach(function(promise) {
                return promise.cancel();
            });
        },
        isEmpty: function isEmpty() {
            return list.length === 0;
        }
    };
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"4Cc3M":[function(require,module,exports) {
/**
 * Creates a runner that executes promises in a concurrent-safe way.
 *
 * This is useful to prevent older promises to resolve after a newer promise,
 * otherwise resulting in stale resolved values.
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "createConcurrentSafePromise", ()=>createConcurrentSafePromise);
function createConcurrentSafePromise() {
    var basePromiseId = -1;
    var latestResolvedId = -1;
    var latestResolvedValue = undefined;
    return function runConcurrentSafePromise(promise) {
        basePromiseId++;
        var currentPromiseId = basePromiseId;
        return Promise.resolve(promise).then(function(x) {
            // The promise might take too long to resolve and get outdated. This would
            // result in resolving stale values.
            // When this happens, we ignore the promise value and return the one
            // coming from the latest resolved value.
            //
            // +----------------------------------+
            // |        100ms                     |
            // | run(1) +--->  R1                 |
            // |        300ms                     |
            // | run(2) +-------------> R2 (SKIP) |
            // |        200ms                     |
            // | run(3) +--------> R3             |
            // +----------------------------------+
            if (latestResolvedValue && currentPromiseId < latestResolvedId) return latestResolvedValue;
            latestResolvedId = currentPromiseId;
            latestResolvedValue = x;
            return x;
        });
    };
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"g57RT":[function(require,module,exports) {
/**
 * Returns the next active item ID from the current state.
 *
 * We allow circular keyboard navigation from the base index.
 * The base index can either be `null` (nothing is highlighted) or `0`
 * (the first item is highlighted).
 * The base index is allowed to get assigned `null` only if
 * `props.defaultActiveItemId` is `null`. This pattern allows to "stop"
 * by the actual query before navigating to other suggestions as seen on
 * Google or Amazon.
 *
 * @param moveAmount The offset to increment (or decrement) the last index
 * @param baseIndex The current index to compute the next index from
 * @param itemCount The number of items
 * @param defaultActiveItemId The default active index to fallback to
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "getNextActiveItemId", ()=>getNextActiveItemId);
function getNextActiveItemId(moveAmount, baseIndex, itemCount, defaultActiveItemId) {
    if (!itemCount) return null;
    if (moveAmount < 0 && (baseIndex === null || defaultActiveItemId !== null && baseIndex === 0)) return itemCount + moveAmount;
    var numericIndex = (baseIndex === null ? -1 : baseIndex) + moveAmount;
    if (numericIndex <= -1 || numericIndex >= itemCount) return defaultActiveItemId === null ? null : 0;
    return numericIndex;
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"8mENM":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "getNormalizedSources", ()=>getNormalizedSources);
var _autocompleteShared = require("@algolia/autocomplete-shared");
function ownKeys(object, enumerableOnly) {
    var keys = Object.keys(object);
    if (Object.getOwnPropertySymbols) {
        var symbols = Object.getOwnPropertySymbols(object);
        enumerableOnly && (symbols = symbols.filter(function(sym) {
            return Object.getOwnPropertyDescriptor(object, sym).enumerable;
        })), keys.push.apply(keys, symbols);
    }
    return keys;
}
function _objectSpread(target) {
    for(var i = 1; i < arguments.length; i++){
        var source = null != arguments[i] ? arguments[i] : {};
        i % 2 ? ownKeys(Object(source), !0).forEach(function(key) {
            _defineProperty(target, key, source[key]);
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function(key) {
            Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
        });
    }
    return target;
}
function _defineProperty(obj, key, value) {
    if (key in obj) Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
    });
    else obj[key] = value;
    return obj;
}
function _typeof(obj) {
    "@babel/helpers - typeof";
    return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(obj) {
        return typeof obj;
    } : function(obj) {
        return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    }, _typeof(obj);
}
function getNormalizedSources(getSources, params) {
    var seenSourceIds = [];
    return Promise.resolve(getSources(params)).then(function(sources) {
        (0, _autocompleteShared.invariant)(Array.isArray(sources), function() {
            return "The `getSources` function must return an array of sources but returned type ".concat(JSON.stringify(_typeof(sources)), ":\n\n").concat(JSON.stringify((0, _autocompleteShared.decycle)(sources), null, 2));
        });
        return Promise.all(sources // We allow `undefined` and `false` sources to allow users to use
        // `Boolean(query) && source` (=> `false`).
        // We need to remove these values at this point.
        .filter(function(maybeSource) {
            return Boolean(maybeSource);
        }).map(function(source) {
            (0, _autocompleteShared.invariant)(typeof source.sourceId === "string", "A source must provide a `sourceId` string.");
            if (seenSourceIds.includes(source.sourceId)) throw new Error("[Autocomplete] The `sourceId` ".concat(JSON.stringify(source.sourceId), " is not unique."));
            seenSourceIds.push(source.sourceId);
            var normalizedSource = _objectSpread({
                getItemInputValue: function getItemInputValue(_ref) {
                    var state = _ref.state;
                    return state.query;
                },
                getItemUrl: function getItemUrl() {
                    return undefined;
                },
                onSelect: function onSelect(_ref2) {
                    var setIsOpen = _ref2.setIsOpen;
                    setIsOpen(false);
                },
                onActive: (0, _autocompleteShared.noop)
            }, source);
            return Promise.resolve(normalizedSource);
        }));
    });
}

},{"@algolia/autocomplete-shared":"59T59","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"bFTMy":[function(require,module,exports) {
// We don't have access to the autocomplete source when we call `onKeyDown`
// or `onClick` because those are native browser events.
// However, we can get the source from the suggestion index.
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "getActiveItem", ()=>getActiveItem);
function getCollectionFromActiveItemId(state) {
    // Given 3 sources with respectively 1, 2 and 3 suggestions: [1, 2, 3]
    // We want to get the accumulated counts:
    // [1, 1 + 2, 1 + 2 + 3] = [1, 3, 3 + 3] = [1, 3, 6]
    var accumulatedCollectionsCount = state.collections.map(function(collections) {
        return collections.items.length;
    }).reduce(function(acc, collectionsCount, index) {
        var previousValue = acc[index - 1] || 0;
        var nextValue = previousValue + collectionsCount;
        acc.push(nextValue);
        return acc;
    }, []); // Based on the accumulated counts, we can infer the index of the suggestion.
    var collectionIndex = accumulatedCollectionsCount.reduce(function(acc, current) {
        if (current <= state.activeItemId) return acc + 1;
        return acc;
    }, 0);
    return state.collections[collectionIndex];
}
/**
 * Gets the highlighted index relative to a suggestion object (not the absolute
 * highlighted index).
 *
 * Example:
 *  [['a', 'b'], ['c', 'd', 'e'], ['f']]
 *                      ↑
 *         (absolute: 3, relative: 1)
 */ function getRelativeActiveItemId(_ref) {
    var state = _ref.state, collection = _ref.collection;
    var isOffsetFound = false;
    var counter = 0;
    var previousItemsOffset = 0;
    while(isOffsetFound === false){
        var currentCollection = state.collections[counter];
        if (currentCollection === collection) {
            isOffsetFound = true;
            break;
        }
        previousItemsOffset += currentCollection.items.length;
        counter++;
    }
    return state.activeItemId - previousItemsOffset;
}
function getActiveItem(state) {
    var collection = getCollectionFromActiveItemId(state);
    if (!collection) return null;
    var item = collection.items[getRelativeActiveItemId({
        state: state,
        collection: collection
    })];
    var source = collection.source;
    var itemInputValue = source.getItemInputValue({
        item: item,
        state: state
    });
    var itemUrl = source.getItemUrl({
        item: item,
        state: state
    });
    return {
        item: item,
        itemInputValue: itemInputValue,
        itemUrl: itemUrl,
        source: source
    };
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"5AASb":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "isOrContainsNode", ()=>isOrContainsNode);
function isOrContainsNode(parent, child) {
    return parent === child || parent.contains(child);
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"8H5bw":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "isSamsung", ()=>isSamsung);
var regex = /((gt|sm)-|galaxy nexus)|samsung[- ]/i;
function isSamsung(userAgent) {
    return Boolean(userAgent && userAgent.match(regex));
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gS8c5":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "mapToAlgoliaResponse", ()=>mapToAlgoliaResponse);
function ownKeys(object, enumerableOnly) {
    var keys = Object.keys(object);
    if (Object.getOwnPropertySymbols) {
        var symbols = Object.getOwnPropertySymbols(object);
        enumerableOnly && (symbols = symbols.filter(function(sym) {
            return Object.getOwnPropertyDescriptor(object, sym).enumerable;
        })), keys.push.apply(keys, symbols);
    }
    return keys;
}
function _objectSpread(target) {
    for(var i = 1; i < arguments.length; i++){
        var source = null != arguments[i] ? arguments[i] : {};
        i % 2 ? ownKeys(Object(source), !0).forEach(function(key) {
            _defineProperty(target, key, source[key]);
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function(key) {
            Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
        });
    }
    return target;
}
function _defineProperty(obj, key, value) {
    if (key in obj) Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
    });
    else obj[key] = value;
    return obj;
}
function mapToAlgoliaResponse(rawResults) {
    var results = rawResults.map(function(result) {
        var _hits;
        return _objectSpread(_objectSpread({}, result), {}, {
            hits: (_hits = result.hits) === null || _hits === void 0 ? void 0 : _hits.map(function(hit) {
                // Bring support for the Insights plugin.
                return _objectSpread(_objectSpread({}, hit), {}, {
                    __autocomplete_indexName: result.index,
                    __autocomplete_queryID: result.queryID
                });
            })
        });
    });
    return {
        results: results,
        hits: results.map(function(result) {
            return result.hits;
        }).filter(Boolean),
        facetHits: results.map(function(result) {
            var _facetHits;
            return (_facetHits = result.facetHits) === null || _facetHits === void 0 ? void 0 : _facetHits.map(function(facetHit) {
                // Bring support for the highlighting components.
                return {
                    label: facetHit.value,
                    count: facetHit.count,
                    _highlightResult: {
                        label: {
                            value: facetHit.highlighted
                        }
                    }
                };
            });
        }).filter(Boolean)
    };
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"1FuiC":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "getAutocompleteSetters", ()=>getAutocompleteSetters);
var _autocompleteShared = require("@algolia/autocomplete-shared");
function ownKeys(object, enumerableOnly) {
    var keys = Object.keys(object);
    if (Object.getOwnPropertySymbols) {
        var symbols = Object.getOwnPropertySymbols(object);
        enumerableOnly && (symbols = symbols.filter(function(sym) {
            return Object.getOwnPropertyDescriptor(object, sym).enumerable;
        })), keys.push.apply(keys, symbols);
    }
    return keys;
}
function _objectSpread(target) {
    for(var i = 1; i < arguments.length; i++){
        var source = null != arguments[i] ? arguments[i] : {};
        i % 2 ? ownKeys(Object(source), !0).forEach(function(key) {
            _defineProperty(target, key, source[key]);
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function(key) {
            Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
        });
    }
    return target;
}
function _defineProperty(obj, key, value) {
    if (key in obj) Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
    });
    else obj[key] = value;
    return obj;
}
function getAutocompleteSetters(_ref) {
    var store = _ref.store;
    var setActiveItemId = function setActiveItemId(value) {
        store.dispatch("setActiveItemId", value);
    };
    var setQuery = function setQuery(value) {
        store.dispatch("setQuery", value);
    };
    var setCollections = function setCollections(rawValue) {
        var baseItemId = 0;
        var value = rawValue.map(function(collection) {
            return _objectSpread(_objectSpread({}, collection), {}, {
                // We flatten the stored items to support calling `getAlgoliaResults`
                // from the source itself.
                items: (0, _autocompleteShared.flatten)(collection.items).map(function(item) {
                    return _objectSpread(_objectSpread({}, item), {}, {
                        __autocomplete_id: baseItemId++
                    });
                })
            });
        });
        store.dispatch("setCollections", value);
    };
    var setIsOpen = function setIsOpen(value) {
        store.dispatch("setIsOpen", value);
    };
    var setStatus = function setStatus(value) {
        store.dispatch("setStatus", value);
    };
    var setContext = function setContext(value) {
        store.dispatch("setContext", value);
    };
    return {
        setActiveItemId: setActiveItemId,
        setQuery: setQuery,
        setCollections: setCollections,
        setIsOpen: setIsOpen,
        setStatus: setStatus,
        setContext: setContext
    };
}

},{"@algolia/autocomplete-shared":"59T59","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"66IWD":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "getDefaultProps", ()=>getDefaultProps);
var _autocompleteShared = require("@algolia/autocomplete-shared");
var _utils = require("./utils");
function _toConsumableArray(arr) {
    return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
}
function _nonIterableSpread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _unsupportedIterableToArray(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}
function _iterableToArray(iter) {
    if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}
function _arrayWithoutHoles(arr) {
    if (Array.isArray(arr)) return _arrayLikeToArray(arr);
}
function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
function ownKeys(object, enumerableOnly) {
    var keys = Object.keys(object);
    if (Object.getOwnPropertySymbols) {
        var symbols = Object.getOwnPropertySymbols(object);
        enumerableOnly && (symbols = symbols.filter(function(sym) {
            return Object.getOwnPropertyDescriptor(object, sym).enumerable;
        })), keys.push.apply(keys, symbols);
    }
    return keys;
}
function _objectSpread(target) {
    for(var i = 1; i < arguments.length; i++){
        var source = null != arguments[i] ? arguments[i] : {};
        i % 2 ? ownKeys(Object(source), !0).forEach(function(key) {
            _defineProperty(target, key, source[key]);
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function(key) {
            Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
        });
    }
    return target;
}
function _defineProperty(obj, key, value) {
    if (key in obj) Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
    });
    else obj[key] = value;
    return obj;
}
function getDefaultProps(props, pluginSubscribers) {
    var _props$id;
    /* eslint-disable no-restricted-globals */ var environment = typeof window !== "undefined" ? window : {};
    /* eslint-enable no-restricted-globals */ var plugins = props.plugins || [];
    return _objectSpread(_objectSpread({
        debug: false,
        openOnFocus: false,
        placeholder: "",
        autoFocus: false,
        defaultActiveItemId: null,
        stallThreshold: 300,
        environment: environment,
        shouldPanelOpen: function shouldPanelOpen(_ref) {
            var state = _ref.state;
            return (0, _autocompleteShared.getItemsCount)(state) > 0;
        },
        reshape: function reshape(_ref2) {
            var sources = _ref2.sources;
            return sources;
        }
    }, props), {}, {
        // Since `generateAutocompleteId` triggers a side effect (it increments
        // an internal counter), we don't want to execute it if unnecessary.
        id: (_props$id = props.id) !== null && _props$id !== void 0 ? _props$id : (0, _autocompleteShared.generateAutocompleteId)(),
        plugins: plugins,
        // The following props need to be deeply defaulted.
        initialState: _objectSpread({
            activeItemId: null,
            query: "",
            completion: null,
            collections: [],
            isOpen: false,
            status: "idle",
            context: {}
        }, props.initialState),
        onStateChange: function onStateChange(params) {
            var _props$onStateChange;
            (_props$onStateChange = props.onStateChange) === null || _props$onStateChange === void 0 || _props$onStateChange.call(props, params);
            plugins.forEach(function(x) {
                var _x$onStateChange;
                return (_x$onStateChange = x.onStateChange) === null || _x$onStateChange === void 0 ? void 0 : _x$onStateChange.call(x, params);
            });
        },
        onSubmit: function onSubmit(params) {
            var _props$onSubmit;
            (_props$onSubmit = props.onSubmit) === null || _props$onSubmit === void 0 || _props$onSubmit.call(props, params);
            plugins.forEach(function(x) {
                var _x$onSubmit;
                return (_x$onSubmit = x.onSubmit) === null || _x$onSubmit === void 0 ? void 0 : _x$onSubmit.call(x, params);
            });
        },
        onReset: function onReset(params) {
            var _props$onReset;
            (_props$onReset = props.onReset) === null || _props$onReset === void 0 || _props$onReset.call(props, params);
            plugins.forEach(function(x) {
                var _x$onReset;
                return (_x$onReset = x.onReset) === null || _x$onReset === void 0 ? void 0 : _x$onReset.call(x, params);
            });
        },
        getSources: function getSources(params) {
            return Promise.all([].concat(_toConsumableArray(plugins.map(function(plugin) {
                return plugin.getSources;
            })), [
                props.getSources
            ]).filter(Boolean).map(function(getSources) {
                return (0, _utils.getNormalizedSources)(getSources, params);
            })).then(function(nested) {
                return (0, _autocompleteShared.flatten)(nested);
            }).then(function(sources) {
                return sources.map(function(source) {
                    return _objectSpread(_objectSpread({}, source), {}, {
                        onSelect: function onSelect(params) {
                            source.onSelect(params);
                            pluginSubscribers.forEach(function(x) {
                                var _x$onSelect;
                                return (_x$onSelect = x.onSelect) === null || _x$onSelect === void 0 ? void 0 : _x$onSelect.call(x, params);
                            });
                        },
                        onActive: function onActive(params) {
                            source.onActive(params);
                            pluginSubscribers.forEach(function(x) {
                                var _x$onActive;
                                return (_x$onActive = x.onActive) === null || _x$onActive === void 0 ? void 0 : _x$onActive.call(x, params);
                            });
                        }
                    });
                });
            });
        },
        navigator: _objectSpread({
            navigate: function navigate(_ref3) {
                var itemUrl = _ref3.itemUrl;
                environment.location.assign(itemUrl);
            },
            navigateNewTab: function navigateNewTab(_ref4) {
                var itemUrl = _ref4.itemUrl;
                var windowReference = environment.open(itemUrl, "_blank", "noopener");
                windowReference === null || windowReference === void 0 || windowReference.focus();
            },
            navigateNewWindow: function navigateNewWindow(_ref5) {
                var itemUrl = _ref5.itemUrl;
                environment.open(itemUrl, "_blank", "noopener");
            }
        }, props.navigator)
    });
}

},{"@algolia/autocomplete-shared":"59T59","./utils":"gd60Y","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"ghiHp":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "getPropGetters", ()=>getPropGetters);
var _autocompleteShared = require("@algolia/autocomplete-shared");
var _onInput = require("./onInput");
var _onKeyDown = require("./onKeyDown");
var _utils = require("./utils");
var _excluded = [
    "props",
    "refresh",
    "store"
], _excluded2 = [
    "inputElement",
    "formElement",
    "panelElement"
], _excluded3 = [
    "inputElement"
], _excluded4 = [
    "inputElement",
    "maxLength"
], _excluded5 = [
    "item",
    "source"
];
function ownKeys(object, enumerableOnly) {
    var keys = Object.keys(object);
    if (Object.getOwnPropertySymbols) {
        var symbols = Object.getOwnPropertySymbols(object);
        enumerableOnly && (symbols = symbols.filter(function(sym) {
            return Object.getOwnPropertyDescriptor(object, sym).enumerable;
        })), keys.push.apply(keys, symbols);
    }
    return keys;
}
function _objectSpread(target) {
    for(var i = 1; i < arguments.length; i++){
        var source = null != arguments[i] ? arguments[i] : {};
        i % 2 ? ownKeys(Object(source), !0).forEach(function(key) {
            _defineProperty(target, key, source[key]);
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function(key) {
            Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
        });
    }
    return target;
}
function _defineProperty(obj, key, value) {
    if (key in obj) Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
    });
    else obj[key] = value;
    return obj;
}
function _objectWithoutProperties(source, excluded) {
    if (source == null) return {};
    var target = _objectWithoutPropertiesLoose(source, excluded);
    var key, i;
    if (Object.getOwnPropertySymbols) {
        var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
        for(i = 0; i < sourceSymbolKeys.length; i++){
            key = sourceSymbolKeys[i];
            if (excluded.indexOf(key) >= 0) continue;
            if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
            target[key] = source[key];
        }
    }
    return target;
}
function _objectWithoutPropertiesLoose(source, excluded) {
    if (source == null) return {};
    var target = {};
    var sourceKeys = Object.keys(source);
    var key, i;
    for(i = 0; i < sourceKeys.length; i++){
        key = sourceKeys[i];
        if (excluded.indexOf(key) >= 0) continue;
        target[key] = source[key];
    }
    return target;
}
function getPropGetters(_ref) {
    var props = _ref.props, refresh = _ref.refresh, store = _ref.store, setters = _objectWithoutProperties(_ref, _excluded);
    var getEnvironmentProps = function getEnvironmentProps(providedProps) {
        var inputElement = providedProps.inputElement, formElement = providedProps.formElement, panelElement = providedProps.panelElement, rest = _objectWithoutProperties(providedProps, _excluded2);
        function onMouseDownOrTouchStart(event) {
            // The `onTouchStart`/`onMouseDown` events shouldn't trigger the `blur`
            // handler when it's not an interaction with Autocomplete.
            // We detect it with the following heuristics:
            // - the panel is closed AND there are no pending requests
            //   (no interaction with the autocomplete, no future state updates)
            // - OR the touched target is the input element (should open the panel)
            var isAutocompleteInteraction = store.getState().isOpen || !store.pendingRequests.isEmpty();
            if (!isAutocompleteInteraction || event.target === inputElement) return;
             // @TODO: support cases where there are multiple Autocomplete instances.
            // Right now, a second instance makes this computation return false.
            var isTargetWithinAutocomplete = [
                formElement,
                panelElement
            ].some(function(contextNode) {
                return (0, _utils.isOrContainsNode)(contextNode, event.target);
            });
            if (isTargetWithinAutocomplete === false) {
                store.dispatch("blur", null); // If requests are still pending when the user closes the panel, they
                // could reopen the panel once they resolve.
                // We want to prevent any subsequent query from reopening the panel
                // because it would result in an unsolicited UI behavior.
                if (!props.debug) store.pendingRequests.cancelAll();
            }
        }
        return _objectSpread({
            // We do not rely on the native `blur` event of the input to close the
            // panel, but rather on a custom `touchstart`/`mousedown` event outside
            // of the autocomplete elements.
            // This ensures we don't mistakenly interpret interactions within the
            // autocomplete (but outside of the input) as a signal to close the panel.
            // For example, clicking reset button causes an input blur, but if
            // `openOnFocus=true`, it shouldn't close the panel.
            // On touch devices, scrolling results (`touchmove`) causes an input blur
            // but shouldn't close the panel.
            onTouchStart: onMouseDownOrTouchStart,
            onMouseDown: onMouseDownOrTouchStart,
            // When scrolling on touch devices (mobiles, tablets, etc.), we want to
            // mimic the native platform behavior where the input is blurred to
            // hide the virtual keyboard. This gives more vertical space to
            // discover all the suggestions showing up in the panel.
            onTouchMove: function onTouchMove(event) {
                if (store.getState().isOpen === false || inputElement !== props.environment.document.activeElement || event.target === inputElement) return;
                inputElement.blur();
            }
        }, rest);
    };
    var getRootProps = function getRootProps(rest) {
        return _objectSpread({
            role: "combobox",
            "aria-expanded": store.getState().isOpen,
            "aria-haspopup": "listbox",
            "aria-owns": store.getState().isOpen ? "".concat(props.id, "-list") : undefined,
            "aria-labelledby": "".concat(props.id, "-label")
        }, rest);
    };
    var getFormProps = function getFormProps(providedProps) {
        var inputElement = providedProps.inputElement, rest = _objectWithoutProperties(providedProps, _excluded3);
        return _objectSpread({
            action: "",
            noValidate: true,
            role: "search",
            onSubmit: function onSubmit(event) {
                var _providedProps$inputE;
                event.preventDefault();
                props.onSubmit(_objectSpread({
                    event: event,
                    refresh: refresh,
                    state: store.getState()
                }, setters));
                store.dispatch("submit", null);
                (_providedProps$inputE = providedProps.inputElement) === null || _providedProps$inputE === void 0 || _providedProps$inputE.blur();
            },
            onReset: function onReset(event) {
                var _providedProps$inputE2;
                event.preventDefault();
                props.onReset(_objectSpread({
                    event: event,
                    refresh: refresh,
                    state: store.getState()
                }, setters));
                store.dispatch("reset", null);
                (_providedProps$inputE2 = providedProps.inputElement) === null || _providedProps$inputE2 === void 0 || _providedProps$inputE2.focus();
            }
        }, rest);
    };
    var getInputProps = function getInputProps(providedProps) {
        var _props$environment$na;
        function onFocus(event) {
            // We want to trigger a query when `openOnFocus` is true
            // because the panel should open with the current query.
            if (props.openOnFocus || Boolean(store.getState().query)) (0, _onInput.onInput)(_objectSpread({
                event: event,
                props: props,
                query: store.getState().completion || store.getState().query,
                refresh: refresh,
                store: store
            }, setters));
            store.dispatch("focus", null);
        }
        var _ref2 = providedProps || {}, inputElement = _ref2.inputElement, _ref2$maxLength = _ref2.maxLength, maxLength = _ref2$maxLength === void 0 ? 512 : _ref2$maxLength, rest = _objectWithoutProperties(_ref2, _excluded4);
        var activeItem = (0, _utils.getActiveItem)(store.getState());
        var userAgent = ((_props$environment$na = props.environment.navigator) === null || _props$environment$na === void 0 ? void 0 : _props$environment$na.userAgent) || "";
        var shouldFallbackKeyHint = (0, _utils.isSamsung)(userAgent);
        var enterKeyHint = activeItem !== null && activeItem !== void 0 && activeItem.itemUrl && !shouldFallbackKeyHint ? "go" : "search";
        return _objectSpread({
            "aria-autocomplete": "both",
            "aria-activedescendant": store.getState().isOpen && store.getState().activeItemId !== null ? "".concat(props.id, "-item-").concat(store.getState().activeItemId) : undefined,
            "aria-controls": store.getState().isOpen ? "".concat(props.id, "-list") : undefined,
            "aria-labelledby": "".concat(props.id, "-label"),
            value: store.getState().completion || store.getState().query,
            id: "".concat(props.id, "-input"),
            autoComplete: "off",
            autoCorrect: "off",
            autoCapitalize: "off",
            enterKeyHint: enterKeyHint,
            spellCheck: "false",
            autoFocus: props.autoFocus,
            placeholder: props.placeholder,
            maxLength: maxLength,
            type: "search",
            onChange: function onChange(event) {
                (0, _onInput.onInput)(_objectSpread({
                    event: event,
                    props: props,
                    query: event.currentTarget.value.slice(0, maxLength),
                    refresh: refresh,
                    store: store
                }, setters));
            },
            onKeyDown: function onKeyDown(event) {
                (0, _onKeyDown.onKeyDown)(_objectSpread({
                    event: event,
                    props: props,
                    refresh: refresh,
                    store: store
                }, setters));
            },
            onFocus: onFocus,
            // We don't rely on the `blur` event.
            // See explanation in `onTouchStart`/`onMouseDown`.
            // @MAJOR See if we need to keep this handler.
            onBlur: (0, _autocompleteShared.noop),
            onClick: function onClick(event) {
                // When the panel is closed and you click on the input while
                // the input is focused, the `onFocus` event is not triggered
                // (default browser behavior).
                // In an autocomplete context, it makes sense to open the panel in this
                // case.
                // We mimic this event by catching the `onClick` event which
                // triggers the `onFocus` for the panel to open.
                if (providedProps.inputElement === props.environment.document.activeElement && !store.getState().isOpen) onFocus(event);
            }
        }, rest);
    };
    var getLabelProps = function getLabelProps(rest) {
        return _objectSpread({
            htmlFor: "".concat(props.id, "-input"),
            id: "".concat(props.id, "-label")
        }, rest);
    };
    var getListProps = function getListProps(rest) {
        return _objectSpread({
            role: "listbox",
            "aria-labelledby": "".concat(props.id, "-label"),
            id: "".concat(props.id, "-list")
        }, rest);
    };
    var getPanelProps = function getPanelProps(rest) {
        return _objectSpread({
            onMouseDown: function onMouseDown(event) {
                // Prevents the `activeElement` from being changed to the panel so
                // that the blur event is not triggered, otherwise it closes the
                // panel.
                event.preventDefault();
            },
            onMouseLeave: function onMouseLeave() {
                store.dispatch("mouseleave", null);
            }
        }, rest);
    };
    var getItemProps = function getItemProps(providedProps) {
        var item = providedProps.item, source = providedProps.source, rest = _objectWithoutProperties(providedProps, _excluded5);
        return _objectSpread({
            id: "".concat(props.id, "-item-").concat(item.__autocomplete_id),
            role: "option",
            "aria-selected": store.getState().activeItemId === item.__autocomplete_id,
            onMouseMove: function onMouseMove(event) {
                if (item.__autocomplete_id === store.getState().activeItemId) return;
                store.dispatch("mousemove", item.__autocomplete_id);
                var activeItem = (0, _utils.getActiveItem)(store.getState());
                if (store.getState().activeItemId !== null && activeItem) {
                    var _item = activeItem.item, itemInputValue = activeItem.itemInputValue, itemUrl = activeItem.itemUrl, _source = activeItem.source;
                    _source.onActive(_objectSpread({
                        event: event,
                        item: _item,
                        itemInputValue: itemInputValue,
                        itemUrl: itemUrl,
                        refresh: refresh,
                        source: _source,
                        state: store.getState()
                    }, setters));
                }
            },
            onMouseDown: function onMouseDown(event) {
                // Prevents the `activeElement` from being changed to the item so it
                // can remain with the current `activeElement`.
                event.preventDefault();
            },
            onClick: function onClick(event) {
                var itemInputValue = source.getItemInputValue({
                    item: item,
                    state: store.getState()
                });
                var itemUrl = source.getItemUrl({
                    item: item,
                    state: store.getState()
                }); // If `getItemUrl` is provided, it means that the suggestion
                // is a link, not plain text that aims at updating the query.
                // We can therefore skip the state change because it will update
                // the `activeItemId`, resulting in a UI flash, especially
                // noticeable on mobile.
                var runPreCommand = itemUrl ? Promise.resolve() : (0, _onInput.onInput)(_objectSpread({
                    event: event,
                    nextState: {
                        isOpen: false
                    },
                    props: props,
                    query: itemInputValue,
                    refresh: refresh,
                    store: store
                }, setters));
                runPreCommand.then(function() {
                    source.onSelect(_objectSpread({
                        event: event,
                        item: item,
                        itemInputValue: itemInputValue,
                        itemUrl: itemUrl,
                        refresh: refresh,
                        source: source,
                        state: store.getState()
                    }, setters));
                });
            }
        }, rest);
    };
    return {
        getEnvironmentProps: getEnvironmentProps,
        getRootProps: getRootProps,
        getFormProps: getFormProps,
        getLabelProps: getLabelProps,
        getInputProps: getInputProps,
        getPanelProps: getPanelProps,
        getListProps: getListProps,
        getItemProps: getItemProps
    };
}

},{"@algolia/autocomplete-shared":"59T59","./onInput":"6DlJz","./onKeyDown":"ahwBt","./utils":"gd60Y","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"6DlJz":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "onInput", ()=>onInput);
var _reshape = require("./reshape");
var _resolve = require("./resolve");
var _utils = require("./utils");
var _excluded = [
    "event",
    "nextState",
    "props",
    "query",
    "refresh",
    "store"
];
function ownKeys(object, enumerableOnly) {
    var keys = Object.keys(object);
    if (Object.getOwnPropertySymbols) {
        var symbols = Object.getOwnPropertySymbols(object);
        enumerableOnly && (symbols = symbols.filter(function(sym) {
            return Object.getOwnPropertyDescriptor(object, sym).enumerable;
        })), keys.push.apply(keys, symbols);
    }
    return keys;
}
function _objectSpread(target) {
    for(var i = 1; i < arguments.length; i++){
        var source = null != arguments[i] ? arguments[i] : {};
        i % 2 ? ownKeys(Object(source), !0).forEach(function(key) {
            _defineProperty(target, key, source[key]);
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function(key) {
            Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
        });
    }
    return target;
}
function _defineProperty(obj, key, value) {
    if (key in obj) Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
    });
    else obj[key] = value;
    return obj;
}
function _objectWithoutProperties(source, excluded) {
    if (source == null) return {};
    var target = _objectWithoutPropertiesLoose(source, excluded);
    var key, i;
    if (Object.getOwnPropertySymbols) {
        var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
        for(i = 0; i < sourceSymbolKeys.length; i++){
            key = sourceSymbolKeys[i];
            if (excluded.indexOf(key) >= 0) continue;
            if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
            target[key] = source[key];
        }
    }
    return target;
}
function _objectWithoutPropertiesLoose(source, excluded) {
    if (source == null) return {};
    var target = {};
    var sourceKeys = Object.keys(source);
    var key, i;
    for(i = 0; i < sourceKeys.length; i++){
        key = sourceKeys[i];
        if (excluded.indexOf(key) >= 0) continue;
        target[key] = source[key];
    }
    return target;
}
var lastStalledId = null;
var runConcurrentSafePromise = (0, _utils.createConcurrentSafePromise)();
function onInput(_ref) {
    var event = _ref.event, _ref$nextState = _ref.nextState, nextState = _ref$nextState === void 0 ? {} : _ref$nextState, props = _ref.props, query = _ref.query, refresh = _ref.refresh, store = _ref.store, setters = _objectWithoutProperties(_ref, _excluded);
    if (lastStalledId) props.environment.clearTimeout(lastStalledId);
    var setCollections = setters.setCollections, setIsOpen = setters.setIsOpen, setQuery = setters.setQuery, setActiveItemId = setters.setActiveItemId, setStatus = setters.setStatus;
    setQuery(query);
    setActiveItemId(props.defaultActiveItemId);
    if (!query && props.openOnFocus === false) {
        var _nextState$isOpen;
        var collections = store.getState().collections.map(function(collection) {
            return _objectSpread(_objectSpread({}, collection), {}, {
                items: []
            });
        });
        setStatus("idle");
        setCollections(collections);
        setIsOpen((_nextState$isOpen = nextState.isOpen) !== null && _nextState$isOpen !== void 0 ? _nextState$isOpen : props.shouldPanelOpen({
            state: store.getState()
        })); // We make sure to update the latest resolved value of the tracked
        // promises to keep late resolving promises from "cancelling" the state
        // updates performed in this code path.
        // We chain with a void promise to respect `onInput`'s expected return type.
        var _request = (0, _utils.cancelable)(runConcurrentSafePromise(collections).then(function() {
            return Promise.resolve();
        }));
        return store.pendingRequests.add(_request);
    }
    setStatus("loading");
    lastStalledId = props.environment.setTimeout(function() {
        setStatus("stalled");
    }, props.stallThreshold); // We track the entire promise chain triggered by `onInput` before mutating
    // the Autocomplete state to make sure that any state manipulation is based on
    // fresh data regardless of when promises individually resolve.
    // We don't track nested promises and only rely on the full chain resolution,
    // meaning we should only ever manipulate the state once this concurrent-safe
    // promise is resolved.
    var request = (0, _utils.cancelable)(runConcurrentSafePromise(props.getSources(_objectSpread({
        query: query,
        refresh: refresh,
        state: store.getState()
    }, setters)).then(function(sources) {
        return Promise.all(sources.map(function(source) {
            return Promise.resolve(source.getItems(_objectSpread({
                query: query,
                refresh: refresh,
                state: store.getState()
            }, setters))).then(function(itemsOrDescription) {
                return (0, _resolve.preResolve)(itemsOrDescription, source.sourceId);
            });
        })).then((0, _resolve.resolve)).then(function(responses) {
            return (0, _resolve.postResolve)(responses, sources);
        }).then(function(collections) {
            return (0, _reshape.reshape)({
                collections: collections,
                props: props,
                state: store.getState()
            });
        });
    }))).then(function(collections) {
        var _nextState$isOpen2;
        // Parameters passed to `onInput` could be stale when the following code
        // executes, because `onInput` calls may not resolve in order.
        // If it becomes a problem we'll need to save the last passed parameters.
        // See: https://codesandbox.io/s/agitated-cookies-y290z
        setStatus("idle");
        setCollections(collections);
        var isPanelOpen = props.shouldPanelOpen({
            state: store.getState()
        });
        setIsOpen((_nextState$isOpen2 = nextState.isOpen) !== null && _nextState$isOpen2 !== void 0 ? _nextState$isOpen2 : props.openOnFocus && !query && isPanelOpen || isPanelOpen);
        var highlightedItem = (0, _utils.getActiveItem)(store.getState());
        if (store.getState().activeItemId !== null && highlightedItem) {
            var item = highlightedItem.item, itemInputValue = highlightedItem.itemInputValue, itemUrl = highlightedItem.itemUrl, source = highlightedItem.source;
            source.onActive(_objectSpread({
                event: event,
                item: item,
                itemInputValue: itemInputValue,
                itemUrl: itemUrl,
                refresh: refresh,
                source: source,
                state: store.getState()
            }, setters));
        }
    }).finally(function() {
        setStatus("idle");
        if (lastStalledId) props.environment.clearTimeout(lastStalledId);
    });
    return store.pendingRequests.add(request);
}

},{"./reshape":"60vn8","./resolve":"aCMNz","./utils":"gd60Y","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"60vn8":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "reshape", ()=>reshape);
var _autocompleteShared = require("@algolia/autocomplete-shared");
function ownKeys(object, enumerableOnly) {
    var keys = Object.keys(object);
    if (Object.getOwnPropertySymbols) {
        var symbols = Object.getOwnPropertySymbols(object);
        enumerableOnly && (symbols = symbols.filter(function(sym) {
            return Object.getOwnPropertyDescriptor(object, sym).enumerable;
        })), keys.push.apply(keys, symbols);
    }
    return keys;
}
function _objectSpread(target) {
    for(var i = 1; i < arguments.length; i++){
        var source = null != arguments[i] ? arguments[i] : {};
        i % 2 ? ownKeys(Object(source), !0).forEach(function(key) {
            _defineProperty(target, key, source[key]);
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function(key) {
            Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
        });
    }
    return target;
}
function _defineProperty(obj, key, value) {
    if (key in obj) Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
    });
    else obj[key] = value;
    return obj;
}
function reshape(_ref) {
    var collections = _ref.collections, props = _ref.props, state = _ref.state;
    // Sources are grouped by `sourceId` to conveniently pick them via destructuring.
    // Example: `const { recentSearchesPlugin } = sourcesBySourceId`
    var sourcesBySourceId = collections.reduce(function(acc, collection) {
        return _objectSpread(_objectSpread({}, acc), {}, _defineProperty({}, collection.source.sourceId, _objectSpread(_objectSpread({}, collection.source), {}, {
            getItems: function getItems() {
                // We provide the resolved items from the collection to the `reshape` prop.
                return (0, _autocompleteShared.flatten)(collection.items);
            }
        })));
    }, {});
    var reshapeSources = props.reshape({
        sources: Object.values(sourcesBySourceId),
        sourcesBySourceId: sourcesBySourceId,
        state: state
    }); // We reconstruct the collections with the items modified by the `reshape` prop.
    return (0, _autocompleteShared.flatten)(reshapeSources).filter(Boolean).map(function(source) {
        return {
            source: source,
            items: source.getItems()
        };
    });
}

},{"@algolia/autocomplete-shared":"59T59","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"aCMNz":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "preResolve", ()=>preResolve);
parcelHelpers.export(exports, "resolve", ()=>resolve);
parcelHelpers.export(exports, "postResolve", ()=>postResolve);
var _autocompleteShared = require("@algolia/autocomplete-shared");
var _utils = require("./utils");
function _typeof(obj) {
    "@babel/helpers - typeof";
    return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(obj) {
        return typeof obj;
    } : function(obj) {
        return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    }, _typeof(obj);
}
function _toConsumableArray(arr) {
    return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
}
function _nonIterableSpread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _unsupportedIterableToArray(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}
function _iterableToArray(iter) {
    if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}
function _arrayWithoutHoles(arr) {
    if (Array.isArray(arr)) return _arrayLikeToArray(arr);
}
function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
function ownKeys(object, enumerableOnly) {
    var keys = Object.keys(object);
    if (Object.getOwnPropertySymbols) {
        var symbols = Object.getOwnPropertySymbols(object);
        enumerableOnly && (symbols = symbols.filter(function(sym) {
            return Object.getOwnPropertyDescriptor(object, sym).enumerable;
        })), keys.push.apply(keys, symbols);
    }
    return keys;
}
function _objectSpread(target) {
    for(var i = 1; i < arguments.length; i++){
        var source = null != arguments[i] ? arguments[i] : {};
        i % 2 ? ownKeys(Object(source), !0).forEach(function(key) {
            _defineProperty(target, key, source[key]);
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function(key) {
            Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
        });
    }
    return target;
}
function _defineProperty(obj, key, value) {
    if (key in obj) Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
    });
    else obj[key] = value;
    return obj;
}
function isDescription(item) {
    return Boolean(item.execute);
}
function isRequesterDescription(description) {
    return Boolean(description === null || description === void 0 ? void 0 : description.execute);
}
function preResolve(itemsOrDescription, sourceId) {
    if (isRequesterDescription(itemsOrDescription)) return _objectSpread(_objectSpread({}, itemsOrDescription), {}, {
        requests: itemsOrDescription.queries.map(function(query) {
            return {
                query: query,
                sourceId: sourceId,
                transformResponse: itemsOrDescription.transformResponse
            };
        })
    });
    return {
        items: itemsOrDescription,
        sourceId: sourceId
    };
}
function resolve(items) {
    var packed = items.reduce(function(acc, current) {
        if (!isDescription(current)) {
            acc.push(current);
            return acc;
        }
        var searchClient = current.searchClient, execute = current.execute, requesterId = current.requesterId, requests = current.requests;
        var container = acc.find(function(item) {
            return isDescription(current) && isDescription(item) && item.searchClient === searchClient && Boolean(requesterId) && item.requesterId === requesterId;
        });
        if (container) {
            var _container$items;
            (_container$items = container.items).push.apply(_container$items, _toConsumableArray(requests));
        } else {
            var request = {
                execute: execute,
                requesterId: requesterId,
                items: requests,
                searchClient: searchClient
            };
            acc.push(request);
        }
        return acc;
    }, []);
    var values = packed.map(function(maybeDescription) {
        if (!isDescription(maybeDescription)) return Promise.resolve(maybeDescription);
        var _ref = maybeDescription, execute = _ref.execute, items = _ref.items, searchClient = _ref.searchClient;
        return execute({
            searchClient: searchClient,
            requests: items
        });
    });
    return Promise.all(values).then(function(responses) {
        return (0, _autocompleteShared.flatten)(responses);
    });
}
function postResolve(responses, sources) {
    return sources.map(function(source) {
        var matches = responses.filter(function(response) {
            return response.sourceId === source.sourceId;
        });
        var results = matches.map(function(_ref2) {
            var items = _ref2.items;
            return items;
        });
        var transform = matches[0].transformResponse;
        var items = transform ? transform((0, _utils.mapToAlgoliaResponse)(results)) : results;
        (0, _autocompleteShared.invariant)(Array.isArray(items), function() {
            return 'The `getItems` function from source "'.concat(source.sourceId, '" must return an array of items but returned type ').concat(JSON.stringify(_typeof(items)), ":\n\n").concat(JSON.stringify((0, _autocompleteShared.decycle)(items), null, 2), ".\n\nSee: https://www.algolia.com/doc/ui-libraries/autocomplete/core-concepts/sources/#param-getitems");
        });
        (0, _autocompleteShared.invariant)(items.every(Boolean), 'The `getItems` function from source "'.concat(source.sourceId, '" must return an array of items but returned ').concat(JSON.stringify(undefined), ".\n\nDid you forget to return items?\n\nSee: https://www.algolia.com/doc/ui-libraries/autocomplete/core-concepts/sources/#param-getitems"));
        return {
            source: source,
            items: items
        };
    });
}

},{"@algolia/autocomplete-shared":"59T59","./utils":"gd60Y","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"ahwBt":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "onKeyDown", ()=>onKeyDown);
var _onInput = require("./onInput");
var _utils = require("./utils");
var _excluded = [
    "event",
    "props",
    "refresh",
    "store"
];
function ownKeys(object, enumerableOnly) {
    var keys = Object.keys(object);
    if (Object.getOwnPropertySymbols) {
        var symbols = Object.getOwnPropertySymbols(object);
        enumerableOnly && (symbols = symbols.filter(function(sym) {
            return Object.getOwnPropertyDescriptor(object, sym).enumerable;
        })), keys.push.apply(keys, symbols);
    }
    return keys;
}
function _objectSpread(target) {
    for(var i = 1; i < arguments.length; i++){
        var source = null != arguments[i] ? arguments[i] : {};
        i % 2 ? ownKeys(Object(source), !0).forEach(function(key) {
            _defineProperty(target, key, source[key]);
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function(key) {
            Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
        });
    }
    return target;
}
function _defineProperty(obj, key, value) {
    if (key in obj) Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
    });
    else obj[key] = value;
    return obj;
}
function _objectWithoutProperties(source, excluded) {
    if (source == null) return {};
    var target = _objectWithoutPropertiesLoose(source, excluded);
    var key, i;
    if (Object.getOwnPropertySymbols) {
        var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
        for(i = 0; i < sourceSymbolKeys.length; i++){
            key = sourceSymbolKeys[i];
            if (excluded.indexOf(key) >= 0) continue;
            if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
            target[key] = source[key];
        }
    }
    return target;
}
function _objectWithoutPropertiesLoose(source, excluded) {
    if (source == null) return {};
    var target = {};
    var sourceKeys = Object.keys(source);
    var key, i;
    for(i = 0; i < sourceKeys.length; i++){
        key = sourceKeys[i];
        if (excluded.indexOf(key) >= 0) continue;
        target[key] = source[key];
    }
    return target;
}
function onKeyDown(_ref) {
    var event = _ref.event, props = _ref.props, refresh = _ref.refresh, store = _ref.store, setters = _objectWithoutProperties(_ref, _excluded);
    if (event.key === "ArrowUp" || event.key === "ArrowDown") {
        // eslint-disable-next-line no-inner-declarations
        var triggerScrollIntoView = function triggerScrollIntoView() {
            var nodeItem = props.environment.document.getElementById("".concat(props.id, "-item-").concat(store.getState().activeItemId));
            if (nodeItem) {
                if (nodeItem.scrollIntoViewIfNeeded) nodeItem.scrollIntoViewIfNeeded(false);
                else nodeItem.scrollIntoView(false);
            }
        }; // eslint-disable-next-line no-inner-declarations
        var triggerOnActive = function triggerOnActive() {
            var highlightedItem = (0, _utils.getActiveItem)(store.getState());
            if (store.getState().activeItemId !== null && highlightedItem) {
                var item = highlightedItem.item, itemInputValue = highlightedItem.itemInputValue, itemUrl = highlightedItem.itemUrl, source = highlightedItem.source;
                source.onActive(_objectSpread({
                    event: event,
                    item: item,
                    itemInputValue: itemInputValue,
                    itemUrl: itemUrl,
                    refresh: refresh,
                    source: source,
                    state: store.getState()
                }, setters));
            }
        }; // Default browser behavior changes the caret placement on ArrowUp and
        // ArrowDown.
        event.preventDefault(); // When re-opening the panel, we need to split the logic to keep the actions
        // synchronized as `onInput` returns a promise.
        if (store.getState().isOpen === false && (props.openOnFocus || Boolean(store.getState().query))) (0, _onInput.onInput)(_objectSpread({
            event: event,
            props: props,
            query: store.getState().query,
            refresh: refresh,
            store: store
        }, setters)).then(function() {
            store.dispatch(event.key, {
                nextActiveItemId: props.defaultActiveItemId
            });
            triggerOnActive(); // Since we rely on the DOM, we need to wait for all the micro tasks to
            // finish (which include re-opening the panel) to make sure all the
            // elements are available.
            setTimeout(triggerScrollIntoView, 0);
        });
        else {
            store.dispatch(event.key, {});
            triggerOnActive();
            triggerScrollIntoView();
        }
    } else if (event.key === "Escape") {
        // This prevents the default browser behavior on `input[type="search"]`
        // from removing the query right away because we first want to close the
        // panel.
        event.preventDefault();
        store.dispatch(event.key, null); // Hitting the `Escape` key signals the end of a user interaction with the
        // autocomplete. At this point, we should ignore any requests that are still
        // pending and could reopen the panel once they resolve, because that would
        // result in an unsolicited UI behavior.
        store.pendingRequests.cancelAll();
    } else if (event.key === "Tab") {
        store.dispatch("blur", null); // Hitting the `Escape` key signals the end of a user interaction with the
        // autocomplete. At this point, we should ignore any requests that are still
        // pending and could reopen the panel once they resolve, because that would
        // result in an unsolicited UI behavior.
        store.pendingRequests.cancelAll();
    } else if (event.key === "Enter") {
        // No active item, so we let the browser handle the native `onSubmit` form
        // event.
        if (store.getState().activeItemId === null || store.getState().collections.every(function(collection) {
            return collection.items.length === 0;
        })) {
            // If requests are still pending when the panel closes, they could reopen
            // the panel once they resolve.
            // We want to prevent any subsequent query from reopening the panel
            // because it would result in an unsolicited UI behavior.
            if (!props.debug) store.pendingRequests.cancelAll();
            return;
        } // This prevents the `onSubmit` event to be sent because an item is
        // highlighted.
        event.preventDefault();
        var _ref2 = (0, _utils.getActiveItem)(store.getState()), item = _ref2.item, itemInputValue = _ref2.itemInputValue, itemUrl = _ref2.itemUrl, source = _ref2.source;
        if (event.metaKey || event.ctrlKey) {
            if (itemUrl !== undefined) {
                source.onSelect(_objectSpread({
                    event: event,
                    item: item,
                    itemInputValue: itemInputValue,
                    itemUrl: itemUrl,
                    refresh: refresh,
                    source: source,
                    state: store.getState()
                }, setters));
                props.navigator.navigateNewTab({
                    itemUrl: itemUrl,
                    item: item,
                    state: store.getState()
                });
            }
        } else if (event.shiftKey) {
            if (itemUrl !== undefined) {
                source.onSelect(_objectSpread({
                    event: event,
                    item: item,
                    itemInputValue: itemInputValue,
                    itemUrl: itemUrl,
                    refresh: refresh,
                    source: source,
                    state: store.getState()
                }, setters));
                props.navigator.navigateNewWindow({
                    itemUrl: itemUrl,
                    item: item,
                    state: store.getState()
                });
            }
        } else if (event.altKey) ;
        else {
            if (itemUrl !== undefined) {
                source.onSelect(_objectSpread({
                    event: event,
                    item: item,
                    itemInputValue: itemInputValue,
                    itemUrl: itemUrl,
                    refresh: refresh,
                    source: source,
                    state: store.getState()
                }, setters));
                props.navigator.navigate({
                    itemUrl: itemUrl,
                    item: item,
                    state: store.getState()
                });
                return;
            }
            (0, _onInput.onInput)(_objectSpread({
                event: event,
                nextState: {
                    isOpen: false
                },
                props: props,
                query: itemInputValue,
                refresh: refresh,
                store: store
            }, setters)).then(function() {
                source.onSelect(_objectSpread({
                    event: event,
                    item: item,
                    itemInputValue: itemInputValue,
                    itemUrl: itemUrl,
                    refresh: refresh,
                    source: source,
                    state: store.getState()
                }, setters));
            });
        }
    }
}

},{"./onInput":"6DlJz","./utils":"gd60Y","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"66SZT":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "getMetadata", ()=>getMetadata);
parcelHelpers.export(exports, "injectMetadata", ()=>injectMetadata);
var _autocompleteShared = require("@algolia/autocomplete-shared");
function ownKeys(object, enumerableOnly) {
    var keys = Object.keys(object);
    if (Object.getOwnPropertySymbols) {
        var symbols = Object.getOwnPropertySymbols(object);
        enumerableOnly && (symbols = symbols.filter(function(sym) {
            return Object.getOwnPropertyDescriptor(object, sym).enumerable;
        })), keys.push.apply(keys, symbols);
    }
    return keys;
}
function _objectSpread(target) {
    for(var i = 1; i < arguments.length; i++){
        var source = null != arguments[i] ? arguments[i] : {};
        i % 2 ? ownKeys(Object(source), !0).forEach(function(key) {
            _defineProperty(target, key, source[key]);
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function(key) {
            Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
        });
    }
    return target;
}
function _defineProperty(obj, key, value) {
    if (key in obj) Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
    });
    else obj[key] = value;
    return obj;
}
function getMetadata(_ref) {
    var _, _options$__autocomple, _options$__autocomple2, _options$__autocomple3;
    var plugins = _ref.plugins, options = _ref.options;
    var optionsKey = (_ = (((_options$__autocomple = options.__autocomplete_metadata) === null || _options$__autocomple === void 0 ? void 0 : _options$__autocomple.userAgents) || [])[0]) === null || _ === void 0 ? void 0 : _.segment;
    var extraOptions = optionsKey ? _defineProperty({}, optionsKey, Object.keys(((_options$__autocomple2 = options.__autocomplete_metadata) === null || _options$__autocomple2 === void 0 ? void 0 : _options$__autocomple2.options) || {})) : {};
    return {
        plugins: plugins.map(function(plugin) {
            return {
                name: plugin.name,
                options: Object.keys(plugin.__autocomplete_pluginOptions || [])
            };
        }),
        options: _objectSpread({
            "autocomplete-core": Object.keys(options)
        }, extraOptions),
        ua: (0, _autocompleteShared.userAgents).concat(((_options$__autocomple3 = options.__autocomplete_metadata) === null || _options$__autocomple3 === void 0 ? void 0 : _options$__autocomple3.userAgents) || [])
    };
}
function injectMetadata(_ref3) {
    var _environment$navigato, _environment$navigato2;
    var metadata = _ref3.metadata, environment = _ref3.environment;
    var isMetadataEnabled = (_environment$navigato = environment.navigator) === null || _environment$navigato === void 0 ? void 0 : (_environment$navigato2 = _environment$navigato.userAgent) === null || _environment$navigato2 === void 0 ? void 0 : _environment$navigato2.includes("Algolia Crawler");
    if (isMetadataEnabled) {
        var metadataContainer = environment.document.createElement("meta");
        var headRef = environment.document.querySelector("head");
        metadataContainer.name = "algolia:metadata";
        setTimeout(function() {
            metadataContainer.content = JSON.stringify(metadata);
            headRef.appendChild(metadataContainer);
        }, 0);
    }
}

},{"@algolia/autocomplete-shared":"59T59","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"iw5Pd":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "stateReducer", ()=>stateReducer);
var _autocompleteShared = require("@algolia/autocomplete-shared");
var _getCompletion = require("./getCompletion");
var _utils = require("./utils");
function ownKeys(object, enumerableOnly) {
    var keys = Object.keys(object);
    if (Object.getOwnPropertySymbols) {
        var symbols = Object.getOwnPropertySymbols(object);
        enumerableOnly && (symbols = symbols.filter(function(sym) {
            return Object.getOwnPropertyDescriptor(object, sym).enumerable;
        })), keys.push.apply(keys, symbols);
    }
    return keys;
}
function _objectSpread(target) {
    for(var i = 1; i < arguments.length; i++){
        var source = null != arguments[i] ? arguments[i] : {};
        i % 2 ? ownKeys(Object(source), !0).forEach(function(key) {
            _defineProperty(target, key, source[key]);
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function(key) {
            Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
        });
    }
    return target;
}
function _defineProperty(obj, key, value) {
    if (key in obj) Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
    });
    else obj[key] = value;
    return obj;
}
var stateReducer = function stateReducer(state, action) {
    switch(action.type){
        case "setActiveItemId":
            return _objectSpread(_objectSpread({}, state), {}, {
                activeItemId: action.payload
            });
        case "setQuery":
            return _objectSpread(_objectSpread({}, state), {}, {
                query: action.payload,
                completion: null
            });
        case "setCollections":
            return _objectSpread(_objectSpread({}, state), {}, {
                collections: action.payload
            });
        case "setIsOpen":
            return _objectSpread(_objectSpread({}, state), {}, {
                isOpen: action.payload
            });
        case "setStatus":
            return _objectSpread(_objectSpread({}, state), {}, {
                status: action.payload
            });
        case "setContext":
            return _objectSpread(_objectSpread({}, state), {}, {
                context: _objectSpread(_objectSpread({}, state.context), action.payload)
            });
        case "ArrowDown":
            var nextState = _objectSpread(_objectSpread({}, state), {}, {
                activeItemId: action.payload.hasOwnProperty("nextActiveItemId") ? action.payload.nextActiveItemId : (0, _utils.getNextActiveItemId)(1, state.activeItemId, (0, _autocompleteShared.getItemsCount)(state), action.props.defaultActiveItemId)
            });
            return _objectSpread(_objectSpread({}, nextState), {}, {
                completion: (0, _getCompletion.getCompletion)({
                    state: nextState
                })
            });
        case "ArrowUp":
            var _nextState = _objectSpread(_objectSpread({}, state), {}, {
                activeItemId: (0, _utils.getNextActiveItemId)(-1, state.activeItemId, (0, _autocompleteShared.getItemsCount)(state), action.props.defaultActiveItemId)
            });
            return _objectSpread(_objectSpread({}, _nextState), {}, {
                completion: (0, _getCompletion.getCompletion)({
                    state: _nextState
                })
            });
        case "Escape":
            if (state.isOpen) return _objectSpread(_objectSpread({}, state), {}, {
                activeItemId: null,
                isOpen: false,
                completion: null
            });
            return _objectSpread(_objectSpread({}, state), {}, {
                activeItemId: null,
                query: "",
                status: "idle",
                collections: []
            });
        case "submit":
            return _objectSpread(_objectSpread({}, state), {}, {
                activeItemId: null,
                isOpen: false,
                status: "idle"
            });
        case "reset":
            return _objectSpread(_objectSpread({}, state), {}, {
                activeItemId: // we need to restore the highlighted index to the defaultActiveItemId. (DocSearch use-case)
                // Since we close the panel when openOnFocus=false
                // we lose track of the highlighted index. (Query-suggestions use-case)
                action.props.openOnFocus === true ? action.props.defaultActiveItemId : null,
                status: "idle",
                query: ""
            });
        case "focus":
            return _objectSpread(_objectSpread({}, state), {}, {
                activeItemId: action.props.defaultActiveItemId,
                isOpen: (action.props.openOnFocus || Boolean(state.query)) && action.props.shouldPanelOpen({
                    state: state
                })
            });
        case "blur":
            if (action.props.debug) return state;
            return _objectSpread(_objectSpread({}, state), {}, {
                isOpen: false,
                activeItemId: null
            });
        case "mousemove":
            return _objectSpread(_objectSpread({}, state), {}, {
                activeItemId: action.payload
            });
        case "mouseleave":
            return _objectSpread(_objectSpread({}, state), {}, {
                activeItemId: action.props.defaultActiveItemId
            });
        default:
            (0, _autocompleteShared.invariant)(false, "The reducer action ".concat(JSON.stringify(action.type), " is not supported."));
            return state;
    }
};

},{"@algolia/autocomplete-shared":"59T59","./getCompletion":"faKMA","./utils":"gd60Y","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"faKMA":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "getCompletion", ()=>getCompletion);
var _utils = require("./utils");
function getCompletion(_ref) {
    var _getActiveItem;
    var state = _ref.state;
    if (state.isOpen === false || state.activeItemId === null) return null;
    return ((_getActiveItem = (0, _utils.getActiveItem)(state)) === null || _getActiveItem === void 0 ? void 0 : _getActiveItem.itemInputValue) || null;
}

},{"./utils":"gd60Y","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"79Luq":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _autocompleteApi = require("./AutocompleteApi");
parcelHelpers.exportAll(_autocompleteApi, exports);
var _autocompleteCollection = require("./AutocompleteCollection");
parcelHelpers.exportAll(_autocompleteCollection, exports);
var _autocompleteContext = require("./AutocompleteContext");
parcelHelpers.exportAll(_autocompleteContext, exports);
var _autocompleteEnvironment = require("./AutocompleteEnvironment");
parcelHelpers.exportAll(_autocompleteEnvironment, exports);
var _autocompleteOptions = require("./AutocompleteOptions");
parcelHelpers.exportAll(_autocompleteOptions, exports);
var _autocompleteSource = require("./AutocompleteSource");
parcelHelpers.exportAll(_autocompleteSource, exports);
var _autocompletePropGetters = require("./AutocompletePropGetters");
parcelHelpers.exportAll(_autocompletePropGetters, exports);
var _autocompletePlugin = require("./AutocompletePlugin");
parcelHelpers.exportAll(_autocompletePlugin, exports);
var _autocompleteReshape = require("./AutocompleteReshape");
parcelHelpers.exportAll(_autocompleteReshape, exports);
var _autocompleteSetters = require("./AutocompleteSetters");
parcelHelpers.exportAll(_autocompleteSetters, exports);
var _autocompleteState = require("./AutocompleteState");
parcelHelpers.exportAll(_autocompleteState, exports);
var _autocompleteStore = require("./AutocompleteStore");
parcelHelpers.exportAll(_autocompleteStore, exports);
var _autocompleteSubscribers = require("./AutocompleteSubscribers");
parcelHelpers.exportAll(_autocompleteSubscribers, exports);

},{"./AutocompleteApi":"bZskC","./AutocompleteCollection":"9z6Jx","./AutocompleteContext":"jsDWg","./AutocompleteEnvironment":"50zbt","./AutocompleteOptions":"1fpkb","./AutocompleteSource":"3MW3B","./AutocompletePropGetters":"byZ8W","./AutocompletePlugin":"cr6ih","./AutocompleteReshape":"gKdoQ","./AutocompleteSetters":"3od6P","./AutocompleteState":"cqghE","./AutocompleteStore":"aCF9w","./AutocompleteSubscribers":"jtnxo","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"bZskC":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"9z6Jx":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"jsDWg":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"50zbt":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"1fpkb":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"3MW3B":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"byZ8W":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"cr6ih":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gKdoQ":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"3od6P":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"cqghE":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"aCF9w":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"jtnxo":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"58er4":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var n = function(t, s, r, e) {
    var u;
    s[0] = 0;
    for(var h = 1; h < s.length; h++){
        var p = s[h++], a = s[h] ? (s[0] |= p ? 1 : 2, r[s[h++]]) : s[++h];
        3 === p ? e[0] = a : 4 === p ? e[1] = Object.assign(e[1] || {}, a) : 5 === p ? (e[1] = e[1] || {})[s[++h]] = a : 6 === p ? e[1][s[++h]] += a + "" : p ? (u = t.apply(a, n(t, a, r, [
            "",
            null
        ])), e.push(u), a[0] ? s[0] |= 2 : (s[h - 2] = 0, s[h] = u)) : e.push(a);
    }
    return e;
}, t = new Map;
exports.default = function(s) {
    var r = t.get(this);
    return r || (r = new Map, t.set(this, r)), (r = n(this, r.get(s) || (r.set(s, r = function(n) {
        for(var t, s, r = 1, e = "", u = "", h = [
            0
        ], p = function(n) {
            1 === r && (n || (e = e.replace(/^\s*\n\s*|\s*\n\s*$/g, ""))) ? h.push(0, n, e) : 3 === r && (n || e) ? (h.push(3, n, e), r = 2) : 2 === r && "..." === e && n ? h.push(4, n, 0) : 2 === r && e && !n ? h.push(5, 0, !0, e) : r >= 5 && ((e || !n && 5 === r) && (h.push(r, 0, e, s), r = 6), n && (h.push(r, n, 0, s), r = 6)), e = "";
        }, a = 0; a < n.length; a++){
            a && (1 === r && p(), p(a));
            for(var l = 0; l < n[a].length; l++)t = n[a][l], 1 === r ? "<" === t ? (p(), h = [
                h
            ], r = 3) : e += t : 4 === r ? "--" === e && ">" === t ? (r = 1, e = "") : e = t + e[0] : u ? t === u ? u = "" : e += t : '"' === t || "'" === t ? u = t : ">" === t ? (p(), r = 1) : r && ("=" === t ? (r = 5, s = e, e = "") : "/" === t && (r < 5 || ">" === n[a][l + 1]) ? (p(), 3 === r && (h = h[0]), r = h, (h = h[0]).push(2, 0, r), r = 0) : " " === t || "	" === t || "\n" === t || "\r" === t ? (p(), r = 2) : e += t), 3 === r && "!--" === e && (r = 4, h = h[0]);
        }
        return p(), h;
    }(s)), r), arguments, [])).length > 1 ? r : r[0];
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"fEfqR":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "createAutocompleteDom", ()=>createAutocompleteDom);
var _elements = require("./elements");
var _getCreateDomElement = require("./getCreateDomElement");
var _utils = require("./utils");
function ownKeys(object, enumerableOnly) {
    var keys = Object.keys(object);
    if (Object.getOwnPropertySymbols) {
        var symbols = Object.getOwnPropertySymbols(object);
        enumerableOnly && (symbols = symbols.filter(function(sym) {
            return Object.getOwnPropertyDescriptor(object, sym).enumerable;
        })), keys.push.apply(keys, symbols);
    }
    return keys;
}
function _objectSpread(target) {
    for(var i = 1; i < arguments.length; i++){
        var source = null != arguments[i] ? arguments[i] : {};
        i % 2 ? ownKeys(Object(source), !0).forEach(function(key) {
            _defineProperty(target, key, source[key]);
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function(key) {
            Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
        });
    }
    return target;
}
function _defineProperty(obj, key, value) {
    if (key in obj) Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
    });
    else obj[key] = value;
    return obj;
}
function createAutocompleteDom(_ref) {
    var autocomplete = _ref.autocomplete, autocompleteScopeApi = _ref.autocompleteScopeApi, classNames = _ref.classNames, environment = _ref.environment, isDetached = _ref.isDetached, _ref$placeholder = _ref.placeholder, placeholder = _ref$placeholder === void 0 ? "Search" : _ref$placeholder, propGetters = _ref.propGetters, setIsModalOpen = _ref.setIsModalOpen, state = _ref.state, translations = _ref.translations;
    var createDomElement = (0, _getCreateDomElement.getCreateDomElement)(environment);
    var rootProps = propGetters.getRootProps(_objectSpread({
        state: state,
        props: autocomplete.getRootProps({})
    }, autocompleteScopeApi));
    var root = createDomElement("div", _objectSpread({
        class: classNames.root
    }, rootProps));
    var detachedContainer = createDomElement("div", {
        class: classNames.detachedContainer,
        onMouseDown: function onMouseDown(event) {
            event.stopPropagation();
        }
    });
    var detachedOverlay = createDomElement("div", {
        class: classNames.detachedOverlay,
        children: [
            detachedContainer
        ],
        onMouseDown: function onMouseDown() {
            setIsModalOpen(false);
            autocomplete.setIsOpen(false);
        }
    });
    var labelProps = propGetters.getLabelProps(_objectSpread({
        state: state,
        props: autocomplete.getLabelProps({})
    }, autocompleteScopeApi));
    var submitButton = createDomElement("button", {
        class: classNames.submitButton,
        type: "submit",
        title: translations.submitButtonTitle,
        children: [
            (0, _elements.SearchIcon)({
                environment: environment
            })
        ]
    });
    var label = createDomElement("label", _objectSpread({
        class: classNames.label,
        children: [
            submitButton
        ]
    }, labelProps));
    var clearButton = createDomElement("button", {
        class: classNames.clearButton,
        type: "reset",
        title: translations.clearButtonTitle,
        children: [
            (0, _elements.ClearIcon)({
                environment: environment
            })
        ]
    });
    var loadingIndicator = createDomElement("div", {
        class: classNames.loadingIndicator,
        children: [
            (0, _elements.LoadingIcon)({
                environment: environment
            })
        ]
    });
    var input = (0, _elements.Input)({
        class: classNames.input,
        environment: environment,
        state: state,
        getInputProps: propGetters.getInputProps,
        getInputPropsCore: autocomplete.getInputProps,
        autocompleteScopeApi: autocompleteScopeApi,
        isDetached: isDetached
    });
    var inputWrapperPrefix = createDomElement("div", {
        class: classNames.inputWrapperPrefix,
        children: [
            label,
            loadingIndicator
        ]
    });
    var inputWrapperSuffix = createDomElement("div", {
        class: classNames.inputWrapperSuffix,
        children: [
            clearButton
        ]
    });
    var inputWrapper = createDomElement("div", {
        class: classNames.inputWrapper,
        children: [
            input
        ]
    });
    var formProps = propGetters.getFormProps(_objectSpread({
        state: state,
        props: autocomplete.getFormProps({
            inputElement: input
        })
    }, autocompleteScopeApi));
    var form = createDomElement("form", _objectSpread({
        class: classNames.form,
        children: [
            inputWrapperPrefix,
            inputWrapper,
            inputWrapperSuffix
        ]
    }, formProps));
    var panelProps = propGetters.getPanelProps(_objectSpread({
        state: state,
        props: autocomplete.getPanelProps({})
    }, autocompleteScopeApi));
    var panel = createDomElement("div", _objectSpread({
        class: classNames.panel
    }, panelProps));
    if (isDetached) {
        var detachedSearchButtonIcon = createDomElement("div", {
            class: classNames.detachedSearchButtonIcon,
            children: [
                (0, _elements.SearchIcon)({
                    environment: environment
                })
            ]
        });
        var detachedSearchButtonPlaceholder = createDomElement("div", {
            class: classNames.detachedSearchButtonPlaceholder,
            textContent: placeholder
        });
        var detachedSearchButton = createDomElement("button", {
            type: "button",
            class: classNames.detachedSearchButton,
            onClick: function onClick() {
                setIsModalOpen(true);
            },
            children: [
                detachedSearchButtonIcon,
                detachedSearchButtonPlaceholder
            ]
        });
        var detachedCancelButton = createDomElement("button", {
            type: "button",
            class: classNames.detachedCancelButton,
            textContent: translations.detachedCancelButtonText,
            // Prevent `onTouchStart` from closing the panel
            // since it should be initiated by `onClick` only
            onTouchStart: function onTouchStart(event) {
                event.stopPropagation();
            },
            onClick: function onClick() {
                autocomplete.setIsOpen(false);
                setIsModalOpen(false);
            }
        });
        var detachedFormContainer = createDomElement("div", {
            class: classNames.detachedFormContainer,
            children: [
                form,
                detachedCancelButton
            ]
        });
        detachedContainer.appendChild(detachedFormContainer);
        root.appendChild(detachedSearchButton);
    } else root.appendChild(form);
    return {
        detachedContainer: detachedContainer,
        detachedOverlay: detachedOverlay,
        inputWrapper: inputWrapper,
        input: input,
        root: root,
        form: form,
        label: label,
        submitButton: submitButton,
        clearButton: clearButton,
        loadingIndicator: loadingIndicator,
        panel: panel
    };
}

},{"./elements":"hT37i","./getCreateDomElement":"dupN1","./utils":"fKU1x","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"hT37i":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _clearIcon = require("./ClearIcon");
parcelHelpers.exportAll(_clearIcon, exports);
var _input = require("./Input");
parcelHelpers.exportAll(_input, exports);
var _loadingIcon = require("./LoadingIcon");
parcelHelpers.exportAll(_loadingIcon, exports);
var _searchIcon = require("./SearchIcon");
parcelHelpers.exportAll(_searchIcon, exports);

},{"./ClearIcon":"dWjga","./Input":"lyL9J","./LoadingIcon":"f4T3P","./SearchIcon":"bK1wB","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"dWjga":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "ClearIcon", ()=>ClearIcon);
var ClearIcon = function ClearIcon(_ref) {
    var environment = _ref.environment;
    var element = environment.document.createElementNS("http://www.w3.org/2000/svg", "svg");
    element.setAttribute("class", "aa-ClearIcon");
    element.setAttribute("viewBox", "0 0 24 24");
    element.setAttribute("width", "18");
    element.setAttribute("height", "18");
    element.setAttribute("fill", "currentColor");
    var path = environment.document.createElementNS("http://www.w3.org/2000/svg", "path");
    path.setAttribute("d", "M5.293 6.707l5.293 5.293-5.293 5.293c-0.391 0.391-0.391 1.024 0 1.414s1.024 0.391 1.414 0l5.293-5.293 5.293 5.293c0.391 0.391 1.024 0.391 1.414 0s0.391-1.024 0-1.414l-5.293-5.293 5.293-5.293c0.391-0.391 0.391-1.024 0-1.414s-1.024-0.391-1.414 0l-5.293 5.293-5.293-5.293c-0.391-0.391-1.024-0.391-1.414 0s-0.391 1.024 0 1.414z");
    element.appendChild(path);
    return element;
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"lyL9J":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Input", ()=>Input);
var _getCreateDomElement = require("../getCreateDomElement");
var _utils = require("../utils");
var _excluded = [
    "autocompleteScopeApi",
    "environment",
    "classNames",
    "getInputProps",
    "getInputPropsCore",
    "isDetached",
    "state"
];
function ownKeys(object, enumerableOnly) {
    var keys = Object.keys(object);
    if (Object.getOwnPropertySymbols) {
        var symbols = Object.getOwnPropertySymbols(object);
        enumerableOnly && (symbols = symbols.filter(function(sym) {
            return Object.getOwnPropertyDescriptor(object, sym).enumerable;
        })), keys.push.apply(keys, symbols);
    }
    return keys;
}
function _objectSpread(target) {
    for(var i = 1; i < arguments.length; i++){
        var source = null != arguments[i] ? arguments[i] : {};
        i % 2 ? ownKeys(Object(source), !0).forEach(function(key) {
            _defineProperty(target, key, source[key]);
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function(key) {
            Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
        });
    }
    return target;
}
function _defineProperty(obj, key, value) {
    if (key in obj) Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
    });
    else obj[key] = value;
    return obj;
}
function _objectWithoutProperties(source, excluded) {
    if (source == null) return {};
    var target = _objectWithoutPropertiesLoose(source, excluded);
    var key, i;
    if (Object.getOwnPropertySymbols) {
        var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
        for(i = 0; i < sourceSymbolKeys.length; i++){
            key = sourceSymbolKeys[i];
            if (excluded.indexOf(key) >= 0) continue;
            if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
            target[key] = source[key];
        }
    }
    return target;
}
function _objectWithoutPropertiesLoose(source, excluded) {
    if (source == null) return {};
    var target = {};
    var sourceKeys = Object.keys(source);
    var key, i;
    for(i = 0; i < sourceKeys.length; i++){
        key = sourceKeys[i];
        if (excluded.indexOf(key) >= 0) continue;
        target[key] = source[key];
    }
    return target;
}
var Input = function Input(_ref) {
    var autocompleteScopeApi = _ref.autocompleteScopeApi, environment = _ref.environment, classNames = _ref.classNames, getInputProps = _ref.getInputProps, getInputPropsCore = _ref.getInputPropsCore, isDetached = _ref.isDetached, state = _ref.state, props = _objectWithoutProperties(_ref, _excluded);
    var createDomElement = (0, _getCreateDomElement.getCreateDomElement)(environment);
    var element = createDomElement("input", props);
    var inputProps = getInputProps(_objectSpread({
        state: state,
        props: getInputPropsCore({
            inputElement: element
        }),
        inputElement: element
    }, autocompleteScopeApi));
    (0, _utils.setProperties)(element, _objectSpread(_objectSpread({}, inputProps), {}, {
        onKeyDown: function onKeyDown(event) {
            // In detached mode we don't want to close the panel when hittin `Tab`.
            if (isDetached && event.key === "Tab") return;
            inputProps.onKeyDown(event);
        }
    }));
    return element;
};

},{"../getCreateDomElement":"dupN1","../utils":"fKU1x","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"dupN1":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "getCreateDomElement", ()=>getCreateDomElement);
var _utils = require("./utils");
var _excluded = [
    "children"
];
function _toConsumableArray(arr) {
    return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
}
function _nonIterableSpread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _unsupportedIterableToArray(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}
function _iterableToArray(iter) {
    if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}
function _arrayWithoutHoles(arr) {
    if (Array.isArray(arr)) return _arrayLikeToArray(arr);
}
function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
function _objectWithoutProperties(source, excluded) {
    if (source == null) return {};
    var target = _objectWithoutPropertiesLoose(source, excluded);
    var key, i;
    if (Object.getOwnPropertySymbols) {
        var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
        for(i = 0; i < sourceSymbolKeys.length; i++){
            key = sourceSymbolKeys[i];
            if (excluded.indexOf(key) >= 0) continue;
            if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
            target[key] = source[key];
        }
    }
    return target;
}
function _objectWithoutPropertiesLoose(source, excluded) {
    if (source == null) return {};
    var target = {};
    var sourceKeys = Object.keys(source);
    var key, i;
    for(i = 0; i < sourceKeys.length; i++){
        key = sourceKeys[i];
        if (excluded.indexOf(key) >= 0) continue;
        target[key] = source[key];
    }
    return target;
}
function getCreateDomElement(environment) {
    return function createDomElement(tagName, _ref) {
        var _ref$children = _ref.children, children = _ref$children === void 0 ? [] : _ref$children, props = _objectWithoutProperties(_ref, _excluded);
        var element = environment.document.createElement(tagName);
        (0, _utils.setProperties)(element, props);
        element.append.apply(element, _toConsumableArray(children));
        return element;
    };
}

},{"./utils":"fKU1x","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"fKU1x":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _getHTMLElement = require("./getHTMLElement");
parcelHelpers.exportAll(_getHTMLElement, exports);
var _mergeClassNames = require("./mergeClassNames");
parcelHelpers.exportAll(_mergeClassNames, exports);
var _mergeDeep = require("./mergeDeep");
parcelHelpers.exportAll(_mergeDeep, exports);
var _pickBy = require("./pickBy");
parcelHelpers.exportAll(_pickBy, exports);
var _setProperties = require("./setProperties");
parcelHelpers.exportAll(_setProperties, exports);

},{"./getHTMLElement":"5LR0S","./mergeClassNames":"ioFOf","./mergeDeep":"dB2gA","./pickBy":"9Qraf","./setProperties":"8UKdL","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"5LR0S":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "getHTMLElement", ()=>getHTMLElement);
var _autocompleteShared = require("@algolia/autocomplete-shared");
function getHTMLElement(environment, value) {
    if (typeof value === "string") {
        var element = environment.document.querySelector(value);
        (0, _autocompleteShared.invariant)(element !== null, "The element ".concat(JSON.stringify(value), " is not in the document."));
        return element;
    }
    return value;
}

},{"@algolia/autocomplete-shared":"59T59","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"ioFOf":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "mergeClassNames", ()=>mergeClassNames);
function mergeClassNames() {
    for(var _len = arguments.length, values = new Array(_len), _key = 0; _key < _len; _key++)values[_key] = arguments[_key];
    return values.reduce(function(acc, current) {
        Object.keys(current).forEach(function(key) {
            var accValue = acc[key];
            var currentValue = current[key];
            if (accValue !== currentValue) acc[key] = [
                accValue,
                currentValue
            ].filter(Boolean).join(" ");
        });
        return acc;
    }, {});
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"dB2gA":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "mergeDeep", ()=>mergeDeep);
function _toConsumableArray(arr) {
    return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
}
function _nonIterableSpread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _unsupportedIterableToArray(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}
function _iterableToArray(iter) {
    if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}
function _arrayWithoutHoles(arr) {
    if (Array.isArray(arr)) return _arrayLikeToArray(arr);
}
function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
function _typeof(obj) {
    "@babel/helpers - typeof";
    return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(obj) {
        return typeof obj;
    } : function(obj) {
        return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    }, _typeof(obj);
}
var isPlainObject = function isPlainObject(value) {
    return value && _typeof(value) === "object" && Object.prototype.toString.call(value) === "[object Object]";
};
function mergeDeep() {
    for(var _len = arguments.length, values = new Array(_len), _key = 0; _key < _len; _key++)values[_key] = arguments[_key];
    return values.reduce(function(acc, current) {
        Object.keys(current).forEach(function(key) {
            var accValue = acc[key];
            var currentValue = current[key];
            if (Array.isArray(accValue) && Array.isArray(currentValue)) acc[key] = accValue.concat.apply(accValue, _toConsumableArray(currentValue));
            else if (isPlainObject(accValue) && isPlainObject(currentValue)) acc[key] = mergeDeep(accValue, currentValue);
            else acc[key] = currentValue;
        });
        return acc;
    }, {});
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"9Qraf":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "pickBy", ()=>pickBy);
function ownKeys(object, enumerableOnly) {
    var keys = Object.keys(object);
    if (Object.getOwnPropertySymbols) {
        var symbols = Object.getOwnPropertySymbols(object);
        enumerableOnly && (symbols = symbols.filter(function(sym) {
            return Object.getOwnPropertyDescriptor(object, sym).enumerable;
        })), keys.push.apply(keys, symbols);
    }
    return keys;
}
function _objectSpread(target) {
    for(var i = 1; i < arguments.length; i++){
        var source = null != arguments[i] ? arguments[i] : {};
        i % 2 ? ownKeys(Object(source), !0).forEach(function(key) {
            _defineProperty(target, key, source[key]);
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function(key) {
            Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
        });
    }
    return target;
}
function _defineProperty(obj, key, value) {
    if (key in obj) Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
    });
    else obj[key] = value;
    return obj;
}
function _slicedToArray(arr, i) {
    return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
}
function _nonIterableRest() {
    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _unsupportedIterableToArray(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}
function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
function _iterableToArrayLimit(arr, i) {
    var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"];
    if (_i == null) return;
    var _arr = [];
    var _n = true;
    var _d = false;
    var _s, _e;
    try {
        for(_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true){
            _arr.push(_s.value);
            if (i && _arr.length === i) break;
        }
    } catch (err) {
        _d = true;
        _e = err;
    } finally{
        try {
            if (!_n && _i["return"] != null) _i["return"]();
        } finally{
            if (_d) throw _e;
        }
    }
    return _arr;
}
function _arrayWithHoles(arr) {
    if (Array.isArray(arr)) return arr;
}
function pickBy(obj, predicate) {
    return Object.entries(obj).reduce(function(acc, _ref) {
        var _ref2 = _slicedToArray(_ref, 2), key = _ref2[0], value = _ref2[1];
        if (predicate({
            key: key,
            value: value
        })) return _objectSpread(_objectSpread({}, acc), {}, _defineProperty({}, key, value));
        return acc;
    }, {});
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"8UKdL":[function(require,module,exports) {
/* eslint-disable */ /**
 * Touch-specific event aliases
 *
 * See https://w3c.github.io/touch-events/#extensions-to-the-globaleventhandlers-mixin
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * Set a property value on a DOM node
 */ parcelHelpers.export(exports, "setProperty", ()=>setProperty);
parcelHelpers.export(exports, "setProperties", ()=>setProperties);
parcelHelpers.export(exports, "setPropertiesWithoutEvents", ()=>setPropertiesWithoutEvents);
var TOUCH_EVENTS_ALIASES = [
    "ontouchstart",
    "ontouchend",
    "ontouchmove",
    "ontouchcancel"
];
/*
 * Taken from Preact
 *
 * See https://github.com/preactjs/preact/blob/6ab49d9020740127577bf4af66bf63f4af7f9fee/src/diff/props.js#L58-L151
 */ function setStyle(style, key, value) {
    if (value === null) style[key] = "";
    else if (typeof value !== "number") style[key] = value;
    else style[key] = value + "px";
}
/**
 * Proxy an event to hooked event handlers
 */ function eventProxy(event) {
    this._listeners[event.type](event);
}
function setProperty(dom, name, value) {
    var useCapture;
    var nameLower;
    var oldValue = dom[name];
    if (name === "style") {
        if (typeof value == "string") dom.style = value;
        else if (value === null) dom.style = "";
        else {
            for(name in value)if (!oldValue || value[name] !== oldValue[name]) setStyle(dom.style, name, value[name]);
        }
    } else if (name[0] === "o" && name[1] === "n") {
        useCapture = name !== (name = name.replace(/Capture$/, ""));
        nameLower = name.toLowerCase();
        if (nameLower in dom || TOUCH_EVENTS_ALIASES.includes(nameLower)) name = nameLower;
        name = name.slice(2);
        if (!dom._listeners) dom._listeners = {};
        dom._listeners[name] = value;
        if (value) {
            if (!oldValue) dom.addEventListener(name, eventProxy, useCapture);
        } else dom.removeEventListener(name, eventProxy, useCapture);
    } else if (name !== "list" && name !== "tagName" && // HTMLButtonElement.form and HTMLInputElement.form are read-only but can be set using
    // setAttribute
    name !== "form" && name !== "type" && name !== "size" && name !== "download" && name !== "href" && name in dom) dom[name] = value == null ? "" : value;
    else if (typeof value != "function" && name !== "dangerouslySetInnerHTML") {
        if (value == null || value === false && // ARIA-attributes have a different notion of boolean values.
        // The value `false` is different from the attribute not
        // existing on the DOM, so we can't remove it. For non-boolean
        // ARIA-attributes we could treat false as a removal, but the
        // amount of exceptions would cost us too many bytes. On top of
        // that other VDOM frameworks also always stringify `false`.
        !/^ar/.test(name)) dom.removeAttribute(name);
        else dom.setAttribute(name, value);
    }
}
function getNormalizedName(name) {
    switch(name){
        case "onChange":
            return "onInput";
        default:
            return name;
    }
}
function setProperties(dom, props) {
    for(var name in props)setProperty(dom, getNormalizedName(name), props[name]);
}
function setPropertiesWithoutEvents(dom, props) {
    for(var name in props)if (!(name[0] === "o" && name[1] === "n")) setProperty(dom, getNormalizedName(name), props[name]);
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"f4T3P":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "LoadingIcon", ()=>LoadingIcon);
var LoadingIcon = function LoadingIcon(_ref) {
    var environment = _ref.environment;
    var element = environment.document.createElementNS("http://www.w3.org/2000/svg", "svg");
    element.setAttribute("class", "aa-LoadingIcon");
    element.setAttribute("viewBox", "0 0 100 100");
    element.setAttribute("width", "20");
    element.setAttribute("height", "20");
    element.innerHTML = '<circle\n  cx="50"\n  cy="50"\n  fill="none"\n  r="35"\n  stroke="currentColor"\n  stroke-dasharray="164.93361431346415 56.97787143782138"\n  stroke-width="6"\n>\n  <animateTransform\n    attributeName="transform"\n    type="rotate"\n    repeatCount="indefinite"\n    dur="1s"\n    values="0 50 50;90 50 50;180 50 50;360 50 50"\n    keyTimes="0;0.40;0.65;1"\n  />\n</circle>';
    return element;
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"bK1wB":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "SearchIcon", ()=>SearchIcon);
var SearchIcon = function SearchIcon(_ref) {
    var environment = _ref.environment;
    var element = environment.document.createElementNS("http://www.w3.org/2000/svg", "svg");
    element.setAttribute("class", "aa-SubmitIcon");
    element.setAttribute("viewBox", "0 0 24 24");
    element.setAttribute("width", "20");
    element.setAttribute("height", "20");
    element.setAttribute("fill", "currentColor");
    var path = environment.document.createElementNS("http://www.w3.org/2000/svg", "path");
    path.setAttribute("d", "M16.041 15.856c-0.034 0.026-0.067 0.055-0.099 0.087s-0.060 0.064-0.087 0.099c-1.258 1.213-2.969 1.958-4.855 1.958-1.933 0-3.682-0.782-4.95-2.050s-2.050-3.017-2.050-4.95 0.782-3.682 2.050-4.95 3.017-2.050 4.95-2.050 3.682 0.782 4.95 2.050 2.050 3.017 2.050 4.95c0 1.886-0.745 3.597-1.959 4.856zM21.707 20.293l-3.675-3.675c1.231-1.54 1.968-3.493 1.968-5.618 0-2.485-1.008-4.736-2.636-6.364s-3.879-2.636-6.364-2.636-4.736 1.008-6.364 2.636-2.636 3.879-2.636 6.364 1.008 4.736 2.636 6.364 3.879 2.636 6.364 2.636c2.125 0 4.078-0.737 5.618-1.968l3.675 3.675c0.391 0.391 1.024 0.391 1.414 0s0.391-1.024 0-1.414z");
    element.appendChild(path);
    return element;
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"71EHb":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "createEffectWrapper", ()=>createEffectWrapper);
function createEffectWrapper() {
    var effects = [];
    var cleanups = [];
    function runEffect(fn) {
        effects.push(fn);
        var effectCleanup = fn();
        cleanups.push(effectCleanup);
    }
    return {
        runEffect: runEffect,
        cleanupEffects: function cleanupEffects() {
            var currentCleanups = cleanups;
            cleanups = [];
            currentCleanups.forEach(function(cleanup) {
                cleanup();
            });
        },
        runEffects: function runEffects() {
            var currentEffects = effects;
            effects = [];
            currentEffects.forEach(function(effect) {
                runEffect(effect);
            });
        }
    };
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"grTGt":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "createReactiveWrapper", ()=>createReactiveWrapper);
function createReactiveWrapper() {
    var reactives = [];
    return {
        reactive: function reactive(value1) {
            var current = value1();
            var reactive = {
                _fn: value1,
                _ref: {
                    current: current
                },
                get value () {
                    return this._ref.current;
                },
                set value (value){
                    this._ref.current = value;
                }
            };
            reactives.push(reactive);
            return reactive;
        },
        runReactives: function runReactives() {
            reactives.forEach(function(value1) {
                value1._ref.current = value1._fn();
            });
        }
    };
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"ei4ti":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "getDefaultOptions", ()=>getDefaultOptions);
var _autocompleteShared = require("@algolia/autocomplete-shared");
var _preact = require("preact");
var _components = require("./components");
var _utils = require("./utils");
var _excluded = [
    "classNames",
    "container",
    "getEnvironmentProps",
    "getFormProps",
    "getInputProps",
    "getItemProps",
    "getLabelProps",
    "getListProps",
    "getPanelProps",
    "getRootProps",
    "panelContainer",
    "panelPlacement",
    "render",
    "renderNoResults",
    "renderer",
    "detachedMediaQuery",
    "components",
    "translations"
];
function ownKeys(object, enumerableOnly) {
    var keys = Object.keys(object);
    if (Object.getOwnPropertySymbols) {
        var symbols = Object.getOwnPropertySymbols(object);
        enumerableOnly && (symbols = symbols.filter(function(sym) {
            return Object.getOwnPropertyDescriptor(object, sym).enumerable;
        })), keys.push.apply(keys, symbols);
    }
    return keys;
}
function _objectSpread(target) {
    for(var i = 1; i < arguments.length; i++){
        var source = null != arguments[i] ? arguments[i] : {};
        i % 2 ? ownKeys(Object(source), !0).forEach(function(key) {
            _defineProperty(target, key, source[key]);
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function(key) {
            Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
        });
    }
    return target;
}
function _defineProperty(obj, key, value) {
    if (key in obj) Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
    });
    else obj[key] = value;
    return obj;
}
function _objectWithoutProperties(source, excluded) {
    if (source == null) return {};
    var target = _objectWithoutPropertiesLoose(source, excluded);
    var key, i;
    if (Object.getOwnPropertySymbols) {
        var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
        for(i = 0; i < sourceSymbolKeys.length; i++){
            key = sourceSymbolKeys[i];
            if (excluded.indexOf(key) >= 0) continue;
            if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
            target[key] = source[key];
        }
    }
    return target;
}
function _objectWithoutPropertiesLoose(source, excluded) {
    if (source == null) return {};
    var target = {};
    var sourceKeys = Object.keys(source);
    var key, i;
    for(i = 0; i < sourceKeys.length; i++){
        key = sourceKeys[i];
        if (excluded.indexOf(key) >= 0) continue;
        target[key] = source[key];
    }
    return target;
}
var defaultClassNames = {
    clearButton: "aa-ClearButton",
    detachedCancelButton: "aa-DetachedCancelButton",
    detachedContainer: "aa-DetachedContainer",
    detachedFormContainer: "aa-DetachedFormContainer",
    detachedOverlay: "aa-DetachedOverlay",
    detachedSearchButton: "aa-DetachedSearchButton",
    detachedSearchButtonIcon: "aa-DetachedSearchButtonIcon",
    detachedSearchButtonPlaceholder: "aa-DetachedSearchButtonPlaceholder",
    form: "aa-Form",
    input: "aa-Input",
    inputWrapper: "aa-InputWrapper",
    inputWrapperPrefix: "aa-InputWrapperPrefix",
    inputWrapperSuffix: "aa-InputWrapperSuffix",
    item: "aa-Item",
    label: "aa-Label",
    list: "aa-List",
    loadingIndicator: "aa-LoadingIndicator",
    panel: "aa-Panel",
    panelLayout: "aa-PanelLayout aa-Panel--scrollable",
    root: "aa-Autocomplete",
    source: "aa-Source",
    sourceFooter: "aa-SourceFooter",
    sourceHeader: "aa-SourceHeader",
    sourceNoResults: "aa-SourceNoResults",
    submitButton: "aa-SubmitButton"
};
var defaultRender = function defaultRender(_ref, root) {
    var children = _ref.children, render = _ref.render;
    render(children, root);
};
var defaultRenderer = {
    createElement: (0, _preact.createElement),
    Fragment: (0, _preact.Fragment),
    render: (0, _preact.render)
};
function getDefaultOptions(options) {
    var _core$id;
    var classNames = options.classNames, container = options.container, getEnvironmentProps = options.getEnvironmentProps, getFormProps = options.getFormProps, getInputProps = options.getInputProps, getItemProps = options.getItemProps, getLabelProps = options.getLabelProps, getListProps = options.getListProps, getPanelProps = options.getPanelProps, getRootProps = options.getRootProps, panelContainer = options.panelContainer, panelPlacement = options.panelPlacement, render = options.render, renderNoResults = options.renderNoResults, renderer = options.renderer, detachedMediaQuery = options.detachedMediaQuery, components = options.components, translations = options.translations, core = _objectWithoutProperties(options, _excluded);
    /* eslint-disable no-restricted-globals */ var environment = typeof window !== "undefined" ? window : {};
    /* eslint-enable no-restricted-globals */ var containerElement = (0, _utils.getHTMLElement)(environment, container);
    (0, _autocompleteShared.invariant)(containerElement.tagName !== "INPUT", "The `container` option does not support `input` elements. You need to change the container to a `div`.");
    (0, _autocompleteShared.warn)(!(render && renderer && !(renderer !== null && renderer !== void 0 && renderer.render)), "You provided the `render` option but did not provide a `renderer.render`. Since v1.6.0, you can provide a `render` function directly in `renderer`.\nTo get rid of this warning, do any of the following depending on your use case.\n- If you are using the `render` option only to override Autocomplete's default `render` function, pass the `render` function into `renderer` and remove the `render` option.\n- If you are using the `render` option to customize the layout, pass your `render` function into `renderer` and use it from the provided parameters of the `render` option.\n- If you are using the `render` option to work with React 18, pass an empty `render` function into `renderer`.\nSee https://www.algolia.com/doc/ui-libraries/autocomplete/api-reference/autocomplete-js/autocomplete/#param-render");
    (0, _autocompleteShared.warn)(!renderer || render || renderer.Fragment && renderer.createElement && renderer.render, "You provided an incomplete `renderer` (missing: ".concat([
        !(renderer !== null && renderer !== void 0 && renderer.createElement) && "`renderer.createElement`",
        !(renderer !== null && renderer !== void 0 && renderer.Fragment) && "`renderer.Fragment`",
        !(renderer !== null && renderer !== void 0 && renderer.render) && "`renderer.render`"
    ].filter(Boolean).join(", "), "). This can cause rendering issues.") + "\nSee https://www.algolia.com/doc/ui-libraries/autocomplete/api-reference/autocomplete-js/autocomplete/#param-renderer");
    var defaultedRenderer = _objectSpread(_objectSpread({}, defaultRenderer), renderer);
    var defaultComponents = {
        Highlight: (0, _components.createHighlightComponent)(defaultedRenderer),
        ReverseHighlight: (0, _components.createReverseHighlightComponent)(defaultedRenderer),
        ReverseSnippet: (0, _components.createReverseSnippetComponent)(defaultedRenderer),
        Snippet: (0, _components.createSnippetComponent)(defaultedRenderer)
    };
    var defaultTranslations = {
        clearButtonTitle: "Clear",
        detachedCancelButtonText: "Cancel",
        submitButtonTitle: "Submit"
    };
    return {
        renderer: {
            classNames: (0, _utils.mergeClassNames)(defaultClassNames, classNames !== null && classNames !== void 0 ? classNames : {}),
            container: containerElement,
            getEnvironmentProps: getEnvironmentProps !== null && getEnvironmentProps !== void 0 ? getEnvironmentProps : function(_ref2) {
                var props = _ref2.props;
                return props;
            },
            getFormProps: getFormProps !== null && getFormProps !== void 0 ? getFormProps : function(_ref3) {
                var props = _ref3.props;
                return props;
            },
            getInputProps: getInputProps !== null && getInputProps !== void 0 ? getInputProps : function(_ref4) {
                var props = _ref4.props;
                return props;
            },
            getItemProps: getItemProps !== null && getItemProps !== void 0 ? getItemProps : function(_ref5) {
                var props = _ref5.props;
                return props;
            },
            getLabelProps: getLabelProps !== null && getLabelProps !== void 0 ? getLabelProps : function(_ref6) {
                var props = _ref6.props;
                return props;
            },
            getListProps: getListProps !== null && getListProps !== void 0 ? getListProps : function(_ref7) {
                var props = _ref7.props;
                return props;
            },
            getPanelProps: getPanelProps !== null && getPanelProps !== void 0 ? getPanelProps : function(_ref8) {
                var props = _ref8.props;
                return props;
            },
            getRootProps: getRootProps !== null && getRootProps !== void 0 ? getRootProps : function(_ref9) {
                var props = _ref9.props;
                return props;
            },
            panelContainer: panelContainer ? (0, _utils.getHTMLElement)(environment, panelContainer) : environment.document.body,
            panelPlacement: panelPlacement !== null && panelPlacement !== void 0 ? panelPlacement : "input-wrapper-width",
            render: render !== null && render !== void 0 ? render : defaultRender,
            renderNoResults: renderNoResults,
            renderer: defaultedRenderer,
            detachedMediaQuery: detachedMediaQuery !== null && detachedMediaQuery !== void 0 ? detachedMediaQuery : getComputedStyle(environment.document.documentElement).getPropertyValue("--aa-detached-media-query"),
            components: _objectSpread(_objectSpread({}, defaultComponents), components),
            translations: _objectSpread(_objectSpread({}, defaultTranslations), translations)
        },
        core: _objectSpread(_objectSpread({}, core), {}, {
            id: (_core$id = core.id) !== null && _core$id !== void 0 ? _core$id : (0, _autocompleteShared.generateAutocompleteId)(),
            environment: environment
        })
    };
}

},{"@algolia/autocomplete-shared":"59T59","preact":"26zcy","./components":"5K3sr","./utils":"fKU1x","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"26zcy":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Component", ()=>d);
parcelHelpers.export(exports, "Fragment", ()=>p);
parcelHelpers.export(exports, "cloneElement", ()=>q);
parcelHelpers.export(exports, "createContext", ()=>B);
parcelHelpers.export(exports, "createElement", ()=>h);
parcelHelpers.export(exports, "createRef", ()=>y);
parcelHelpers.export(exports, "h", ()=>h);
parcelHelpers.export(exports, "hydrate", ()=>S);
parcelHelpers.export(exports, "isValidElement", ()=>i);
parcelHelpers.export(exports, "options", ()=>l);
parcelHelpers.export(exports, "render", ()=>P);
parcelHelpers.export(exports, "toChildArray", ()=>x);
var n, l, u, i, t, o, r, f = {}, e = [], c = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;
function s(n, l) {
    for(var u in l)n[u] = l[u];
    return n;
}
function a(n) {
    var l = n.parentNode;
    l && l.removeChild(n);
}
function h(l, u, i) {
    var t, o, r, f = {};
    for(r in u)"key" == r ? t = u[r] : "ref" == r ? o = u[r] : f[r] = u[r];
    if (arguments.length > 2 && (f.children = arguments.length > 3 ? n.call(arguments, 2) : i), "function" == typeof l && null != l.defaultProps) for(r in l.defaultProps)void 0 === f[r] && (f[r] = l.defaultProps[r]);
    return v(l, f, t, o, null);
}
function v(n, i, t, o, r) {
    var f = {
        type: n,
        props: i,
        key: t,
        ref: o,
        __k: null,
        __: null,
        __b: 0,
        __e: null,
        __d: void 0,
        __c: null,
        __h: null,
        constructor: void 0,
        __v: null == r ? ++u : r
    };
    return null == r && null != l.vnode && l.vnode(f), f;
}
function y() {
    return {
        current: null
    };
}
function p(n) {
    return n.children;
}
function d(n, l) {
    this.props = n, this.context = l;
}
function _(n, l) {
    if (null == l) return n.__ ? _(n.__, n.__.__k.indexOf(n) + 1) : null;
    for(var u; l < n.__k.length; l++)if (null != (u = n.__k[l]) && null != u.__e) return u.__e;
    return "function" == typeof n.type ? _(n) : null;
}
function k(n) {
    var l, u;
    if (null != (n = n.__) && null != n.__c) {
        for(n.__e = n.__c.base = null, l = 0; l < n.__k.length; l++)if (null != (u = n.__k[l]) && null != u.__e) {
            n.__e = n.__c.base = u.__e;
            break;
        }
        return k(n);
    }
}
function b(n) {
    (!n.__d && (n.__d = !0) && t.push(n) && !g.__r++ || o !== l.debounceRendering) && ((o = l.debounceRendering) || setTimeout)(g);
}
function g() {
    for(var n; g.__r = t.length;)n = t.sort(function(n, l) {
        return n.__v.__b - l.__v.__b;
    }), t = [], n.some(function(n) {
        var l, u, i, t, o, r;
        n.__d && (o = (t = (l = n).__v).__e, (r = l.__P) && (u = [], (i = s({}, t)).__v = t.__v + 1, j(r, t, i, l.__n, void 0 !== r.ownerSVGElement, null != t.__h ? [
            o
        ] : null, u, null == o ? _(t) : o, t.__h), z(u, t), t.__e != o && k(t)));
    });
}
function w(n, l, u, i, t, o, r, c, s, a) {
    var h, y, d, k, b, g, w, x = i && i.__k || e, C = x.length;
    for(u.__k = [], h = 0; h < l.length; h++)if (null != (k = u.__k[h] = null == (k = l[h]) || "boolean" == typeof k ? null : "string" == typeof k || "number" == typeof k || "bigint" == typeof k ? v(null, k, null, null, k) : Array.isArray(k) ? v(p, {
        children: k
    }, null, null, null) : k.__b > 0 ? v(k.type, k.props, k.key, k.ref ? k.ref : null, k.__v) : k)) {
        if (k.__ = u, k.__b = u.__b + 1, null === (d = x[h]) || d && k.key == d.key && k.type === d.type) x[h] = void 0;
        else for(y = 0; y < C; y++){
            if ((d = x[y]) && k.key == d.key && k.type === d.type) {
                x[y] = void 0;
                break;
            }
            d = null;
        }
        j(n, k, d = d || f, t, o, r, c, s, a), b = k.__e, (y = k.ref) && d.ref != y && (w || (w = []), d.ref && w.push(d.ref, null, k), w.push(y, k.__c || b, k)), null != b ? (null == g && (g = b), "function" == typeof k.type && k.__k === d.__k ? k.__d = s = m(k, s, n) : s = A(n, k, d, x, b, s), "function" == typeof u.type && (u.__d = s)) : s && d.__e == s && s.parentNode != n && (s = _(d));
    }
    for(u.__e = g, h = C; h--;)null != x[h] && N(x[h], x[h]);
    if (w) for(h = 0; h < w.length; h++)M(w[h], w[++h], w[++h]);
}
function m(n, l, u) {
    for(var i, t = n.__k, o = 0; t && o < t.length; o++)(i = t[o]) && (i.__ = n, l = "function" == typeof i.type ? m(i, l, u) : A(u, i, i, t, i.__e, l));
    return l;
}
function x(n, l) {
    return l = l || [], null == n || "boolean" == typeof n || (Array.isArray(n) ? n.some(function(n) {
        x(n, l);
    }) : l.push(n)), l;
}
function A(n, l, u, i, t, o) {
    var r, f, e;
    if (void 0 !== l.__d) r = l.__d, l.__d = void 0;
    else if (null == u || t != o || null == t.parentNode) n: if (null == o || o.parentNode !== n) n.appendChild(t), r = null;
    else {
        for(f = o, e = 0; (f = f.nextSibling) && e < i.length; e += 1)if (f == t) break n;
        n.insertBefore(t, o), r = o;
    }
    return void 0 !== r ? r : t.nextSibling;
}
function C(n, l, u, i, t) {
    var o;
    for(o in u)"children" === o || "key" === o || o in l || H(n, o, null, u[o], i);
    for(o in l)t && "function" != typeof l[o] || "children" === o || "key" === o || "value" === o || "checked" === o || u[o] === l[o] || H(n, o, l[o], u[o], i);
}
function $(n, l, u) {
    "-" === l[0] ? n.setProperty(l, u) : n[l] = null == u ? "" : "number" != typeof u || c.test(l) ? u : u + "px";
}
function H(n, l, u, i, t) {
    var o;
    n: if ("style" === l) {
        if ("string" == typeof u) n.style.cssText = u;
        else {
            if ("string" == typeof i && (n.style.cssText = i = ""), i) for(l in i)u && l in u || $(n.style, l, "");
            if (u) for(l in u)i && u[l] === i[l] || $(n.style, l, u[l]);
        }
    } else if ("o" === l[0] && "n" === l[1]) o = l !== (l = l.replace(/Capture$/, "")), l = l.toLowerCase() in n ? l.toLowerCase().slice(2) : l.slice(2), n.l || (n.l = {}), n.l[l + o] = u, u ? i || n.addEventListener(l, o ? T : I, o) : n.removeEventListener(l, o ? T : I, o);
    else if ("dangerouslySetInnerHTML" !== l) {
        if (t) l = l.replace(/xlink(H|:h)/, "h").replace(/sName$/, "s");
        else if ("href" !== l && "list" !== l && "form" !== l && "tabIndex" !== l && "download" !== l && l in n) try {
            n[l] = null == u ? "" : u;
            break n;
        } catch (n) {}
        "function" == typeof u || (null == u || !1 === u && -1 == l.indexOf("-") ? n.removeAttribute(l) : n.setAttribute(l, u));
    }
}
function I(n) {
    this.l[n.type + !1](l.event ? l.event(n) : n);
}
function T(n) {
    this.l[n.type + !0](l.event ? l.event(n) : n);
}
function j(n, u, i, t, o, r, f, e, c) {
    var a, h, v, y, _, k, b, g, m, x, A, C, $, H, I, T = u.type;
    if (void 0 !== u.constructor) return null;
    null != i.__h && (c = i.__h, e = u.__e = i.__e, u.__h = null, r = [
        e
    ]), (a = l.__b) && a(u);
    try {
        n: if ("function" == typeof T) {
            if (g = u.props, m = (a = T.contextType) && t[a.__c], x = a ? m ? m.props.value : a.__ : t, i.__c ? b = (h = u.__c = i.__c).__ = h.__E : ("prototype" in T && T.prototype.render ? u.__c = h = new T(g, x) : (u.__c = h = new d(g, x), h.constructor = T, h.render = O), m && m.sub(h), h.props = g, h.state || (h.state = {}), h.context = x, h.__n = t, v = h.__d = !0, h.__h = [], h._sb = []), null == h.__s && (h.__s = h.state), null != T.getDerivedStateFromProps && (h.__s == h.state && (h.__s = s({}, h.__s)), s(h.__s, T.getDerivedStateFromProps(g, h.__s))), y = h.props, _ = h.state, v) null == T.getDerivedStateFromProps && null != h.componentWillMount && h.componentWillMount(), null != h.componentDidMount && h.__h.push(h.componentDidMount);
            else {
                if (null == T.getDerivedStateFromProps && g !== y && null != h.componentWillReceiveProps && h.componentWillReceiveProps(g, x), !h.__e && null != h.shouldComponentUpdate && !1 === h.shouldComponentUpdate(g, h.__s, x) || u.__v === i.__v) {
                    for(h.props = g, h.state = h.__s, u.__v !== i.__v && (h.__d = !1), h.__v = u, u.__e = i.__e, u.__k = i.__k, u.__k.forEach(function(n) {
                        n && (n.__ = u);
                    }), A = 0; A < h._sb.length; A++)h.__h.push(h._sb[A]);
                    h._sb = [], h.__h.length && f.push(h);
                    break n;
                }
                null != h.componentWillUpdate && h.componentWillUpdate(g, h.__s, x), null != h.componentDidUpdate && h.__h.push(function() {
                    h.componentDidUpdate(y, _, k);
                });
            }
            if (h.context = x, h.props = g, h.__v = u, h.__P = n, C = l.__r, $ = 0, "prototype" in T && T.prototype.render) {
                for(h.state = h.__s, h.__d = !1, C && C(u), a = h.render(h.props, h.state, h.context), H = 0; H < h._sb.length; H++)h.__h.push(h._sb[H]);
                h._sb = [];
            } else do h.__d = !1, C && C(u), a = h.render(h.props, h.state, h.context), h.state = h.__s;
            while (h.__d && ++$ < 25);
            h.state = h.__s, null != h.getChildContext && (t = s(s({}, t), h.getChildContext())), v || null == h.getSnapshotBeforeUpdate || (k = h.getSnapshotBeforeUpdate(y, _)), I = null != a && a.type === p && null == a.key ? a.props.children : a, w(n, Array.isArray(I) ? I : [
                I
            ], u, i, t, o, r, f, e, c), h.base = u.__e, u.__h = null, h.__h.length && f.push(h), b && (h.__E = h.__ = null), h.__e = !1;
        } else null == r && u.__v === i.__v ? (u.__k = i.__k, u.__e = i.__e) : u.__e = L(i.__e, u, i, t, o, r, f, c);
        (a = l.diffed) && a(u);
    } catch (n) {
        u.__v = null, (c || null != r) && (u.__e = e, u.__h = !!c, r[r.indexOf(e)] = null), l.__e(n, u, i);
    }
}
function z(n, u) {
    l.__c && l.__c(u, n), n.some(function(u) {
        try {
            n = u.__h, u.__h = [], n.some(function(n) {
                n.call(u);
            });
        } catch (n) {
            l.__e(n, u.__v);
        }
    });
}
function L(l, u, i, t, o, r, e, c) {
    var s, h, v, y = i.props, p = u.props, d = u.type, k = 0;
    if ("svg" === d && (o = !0), null != r) {
        for(; k < r.length; k++)if ((s = r[k]) && "setAttribute" in s == !!d && (d ? s.localName === d : 3 === s.nodeType)) {
            l = s, r[k] = null;
            break;
        }
    }
    if (null == l) {
        if (null === d) return document.createTextNode(p);
        l = o ? document.createElementNS("http://www.w3.org/2000/svg", d) : document.createElement(d, p.is && p), r = null, c = !1;
    }
    if (null === d) y === p || c && l.data === p || (l.data = p);
    else {
        if (r = r && n.call(l.childNodes), h = (y = i.props || f).dangerouslySetInnerHTML, v = p.dangerouslySetInnerHTML, !c) {
            if (null != r) for(y = {}, k = 0; k < l.attributes.length; k++)y[l.attributes[k].name] = l.attributes[k].value;
            (v || h) && (v && (h && v.__html == h.__html || v.__html === l.innerHTML) || (l.innerHTML = v && v.__html || ""));
        }
        if (C(l, p, y, o, c), v) u.__k = [];
        else if (k = u.props.children, w(l, Array.isArray(k) ? k : [
            k
        ], u, i, t, o && "foreignObject" !== d, r, e, r ? r[0] : i.__k && _(i, 0), c), null != r) for(k = r.length; k--;)null != r[k] && a(r[k]);
        c || ("value" in p && void 0 !== (k = p.value) && (k !== l.value || "progress" === d && !k || "option" === d && k !== y.value) && H(l, "value", k, y.value, !1), "checked" in p && void 0 !== (k = p.checked) && k !== l.checked && H(l, "checked", k, y.checked, !1));
    }
    return l;
}
function M(n, u, i) {
    try {
        "function" == typeof n ? n(u) : n.current = u;
    } catch (n) {
        l.__e(n, i);
    }
}
function N(n, u, i) {
    var t, o;
    if (l.unmount && l.unmount(n), (t = n.ref) && (t.current && t.current !== n.__e || M(t, null, u)), null != (t = n.__c)) {
        if (t.componentWillUnmount) try {
            t.componentWillUnmount();
        } catch (n) {
            l.__e(n, u);
        }
        t.base = t.__P = null, n.__c = void 0;
    }
    if (t = n.__k) for(o = 0; o < t.length; o++)t[o] && N(t[o], u, i || "function" != typeof n.type);
    i || null == n.__e || a(n.__e), n.__ = n.__e = n.__d = void 0;
}
function O(n, l, u) {
    return this.constructor(n, u);
}
function P(u, i, t) {
    var o, r, e;
    l.__ && l.__(u, i), r = (o = "function" == typeof t) ? null : t && t.__k || i.__k, e = [], j(i, u = (!o && t || i).__k = h(p, null, [
        u
    ]), r || f, f, void 0 !== i.ownerSVGElement, !o && t ? [
        t
    ] : r ? null : i.firstChild ? n.call(i.childNodes) : null, e, !o && t ? t : r ? r.__e : i.firstChild, o), z(e, u);
}
function S(n, l) {
    P(n, l, S);
}
function q(l, u, i) {
    var t, o, r, f = s({}, l.props);
    for(r in u)"key" == r ? t = u[r] : "ref" == r ? o = u[r] : f[r] = u[r];
    return arguments.length > 2 && (f.children = arguments.length > 3 ? n.call(arguments, 2) : i), v(l.type, f, t || l.key, o || l.ref, null);
}
function B(n, l) {
    var u = {
        __c: l = "__cC" + r++,
        __: n,
        Consumer: function(n, l) {
            return n.children(l);
        },
        Provider: function(n) {
            var u, i;
            return this.getChildContext || (u = [], (i = {})[l] = this, this.getChildContext = function() {
                return i;
            }, this.shouldComponentUpdate = function(n) {
                this.props.value !== n.value && u.some(b);
            }, this.sub = function(n) {
                u.push(n);
                var l = n.componentWillUnmount;
                n.componentWillUnmount = function() {
                    u.splice(u.indexOf(n), 1), l && l.call(n);
                };
            }), n.children;
        }
    };
    return u.Provider.__ = u.Consumer.contextType = u;
}
n = e.slice, l = {
    __e: function(n, l, u, i) {
        for(var t, o, r; l = l.__;)if ((t = l.__c) && !t.__) try {
            if ((o = t.constructor) && null != o.getDerivedStateFromError && (t.setState(o.getDerivedStateFromError(n)), r = t.__d), null != t.componentDidCatch && (t.componentDidCatch(n, i || {}), r = t.__d), r) return t.__E = t;
        } catch (l) {
            n = l;
        }
        throw n;
    }
}, u = 0, i = function(n) {
    return null != n && void 0 === n.constructor;
}, d.prototype.setState = function(n, l) {
    var u;
    u = null != this.__s && this.__s !== this.state ? this.__s : this.__s = s({}, this.state), "function" == typeof n && (n = n(s({}, u), this.props)), n && s(u, n), null != n && this.__v && (l && this._sb.push(l), b(this));
}, d.prototype.forceUpdate = function(n) {
    this.__v && (this.__e = !0, n && this.__h.push(n), b(this));
}, d.prototype.render = p, t = [], g.__r = 0, r = 0;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"5K3sr":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _highlight = require("./Highlight");
parcelHelpers.exportAll(_highlight, exports);
var _reverseHighlight = require("./ReverseHighlight");
parcelHelpers.exportAll(_reverseHighlight, exports);
var _reverseSnippet = require("./ReverseSnippet");
parcelHelpers.exportAll(_reverseSnippet, exports);
var _snippet = require("./Snippet");
parcelHelpers.exportAll(_snippet, exports);

},{"./Highlight":"bKGip","./ReverseHighlight":"b85bW","./ReverseSnippet":"fNt5i","./Snippet":"bThlx","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"bKGip":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "createHighlightComponent", ()=>createHighlightComponent);
var _autocompletePresetAlgolia = require("@algolia/autocomplete-preset-algolia");
function createHighlightComponent(_ref) {
    var createElement = _ref.createElement, Fragment = _ref.Fragment;
    function Highlight(_ref2) {
        var hit = _ref2.hit, attribute = _ref2.attribute, _ref2$tagName = _ref2.tagName, tagName = _ref2$tagName === void 0 ? "mark" : _ref2$tagName;
        return createElement(Fragment, {}, (0, _autocompletePresetAlgolia.parseAlgoliaHitHighlight)({
            hit: hit,
            attribute: attribute
        }).map(function(x, index) {
            return x.isHighlighted ? createElement(tagName, {
                key: index
            }, x.value) : x.value;
        }));
    }
    Highlight.__autocomplete_componentName = "Highlight";
    return Highlight;
}

},{"@algolia/autocomplete-preset-algolia":"lp3lw","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"lp3lw":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _highlight = require("./highlight");
parcelHelpers.exportAll(_highlight, exports);
var _requester = require("./requester");
parcelHelpers.exportAll(_requester, exports);
var _search = require("./search");
parcelHelpers.exportAll(_search, exports);

},{"./highlight":"5Fy50","./requester":"a8CYC","./search":"gwNho","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"5Fy50":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _highlightedHit = require("./HighlightedHit");
parcelHelpers.exportAll(_highlightedHit, exports);
var _parseAlgoliaHitHighlight = require("./parseAlgoliaHitHighlight");
parcelHelpers.exportAll(_parseAlgoliaHitHighlight, exports);
var _parseAlgoliaHitReverseHighlight = require("./parseAlgoliaHitReverseHighlight");
parcelHelpers.exportAll(_parseAlgoliaHitReverseHighlight, exports);
var _parseAlgoliaHitReverseSnippet = require("./parseAlgoliaHitReverseSnippet");
parcelHelpers.exportAll(_parseAlgoliaHitReverseSnippet, exports);
var _parseAlgoliaHitSnippet = require("./parseAlgoliaHitSnippet");
parcelHelpers.exportAll(_parseAlgoliaHitSnippet, exports);
var _snippetedHit = require("./SnippetedHit");
parcelHelpers.exportAll(_snippetedHit, exports);

},{"./HighlightedHit":"esH8u","./parseAlgoliaHitHighlight":"8oRZg","./parseAlgoliaHitReverseHighlight":"10MVc","./parseAlgoliaHitReverseSnippet":"hDmRU","./parseAlgoliaHitSnippet":"e5gtH","./SnippetedHit":"cZ7Rk","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"esH8u":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"8oRZg":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "parseAlgoliaHitHighlight", ()=>parseAlgoliaHitHighlight);
var _autocompleteShared = require("@algolia/autocomplete-shared");
var _parseAttribute = require("./parseAttribute");
function _toConsumableArray(arr) {
    return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
}
function _nonIterableSpread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _unsupportedIterableToArray(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}
function _iterableToArray(iter) {
    if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}
function _arrayWithoutHoles(arr) {
    if (Array.isArray(arr)) return _arrayLikeToArray(arr);
}
function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
function parseAlgoliaHitHighlight(_ref) {
    var hit = _ref.hit, attribute = _ref.attribute;
    var path = Array.isArray(attribute) ? attribute : [
        attribute
    ];
    var highlightedValue = (0, _autocompleteShared.getAttributeValueByPath)(hit, [
        "_highlightResult"
    ].concat(_toConsumableArray(path), [
        "value"
    ]));
    if (typeof highlightedValue !== "string") {
        (0, _autocompleteShared.warn)(false, 'The attribute "'.concat(path.join("."), '" described by the path ').concat(JSON.stringify(path), " does not exist on the hit. Did you set it in `attributesToHighlight`?") + "\nSee https://www.algolia.com/doc/api-reference/api-parameters/attributesToHighlight/");
        highlightedValue = (0, _autocompleteShared.getAttributeValueByPath)(hit, path) || "";
    }
    return (0, _parseAttribute.parseAttribute)({
        highlightedValue: highlightedValue
    });
}

},{"@algolia/autocomplete-shared":"59T59","./parseAttribute":"3rO3A","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"3rO3A":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "parseAttribute", ()=>parseAttribute);
var _constants = require("../constants");
/**
 * Creates a data structure that allows to concatenate similar highlighting
 * parts in a single value.
 */ function createAttributeSet() {
    var initialValue = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
    var value = initialValue;
    return {
        get: function get() {
            return value;
        },
        add: function add(part) {
            var lastPart = value[value.length - 1];
            if ((lastPart === null || lastPart === void 0 ? void 0 : lastPart.isHighlighted) === part.isHighlighted) value[value.length - 1] = {
                value: lastPart.value + part.value,
                isHighlighted: lastPart.isHighlighted
            };
            else value.push(part);
        }
    };
}
function parseAttribute(_ref) {
    var highlightedValue = _ref.highlightedValue;
    var preTagParts = highlightedValue.split((0, _constants.HIGHLIGHT_PRE_TAG));
    var firstValue = preTagParts.shift();
    var parts = createAttributeSet(firstValue ? [
        {
            value: firstValue,
            isHighlighted: false
        }
    ] : []);
    preTagParts.forEach(function(part) {
        var postTagParts = part.split((0, _constants.HIGHLIGHT_POST_TAG));
        parts.add({
            value: postTagParts[0],
            isHighlighted: true
        });
        if (postTagParts[1] !== "") parts.add({
            value: postTagParts[1],
            isHighlighted: false
        });
    });
    return parts.get();
}

},{"../constants":"hThxU","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"hThxU":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "HIGHLIGHT_PRE_TAG", ()=>HIGHLIGHT_PRE_TAG);
parcelHelpers.export(exports, "HIGHLIGHT_POST_TAG", ()=>HIGHLIGHT_POST_TAG);
var HIGHLIGHT_PRE_TAG = "__aa-highlight__";
var HIGHLIGHT_POST_TAG = "__/aa-highlight__";

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"10MVc":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "parseAlgoliaHitReverseHighlight", ()=>parseAlgoliaHitReverseHighlight);
var _parseAlgoliaHitHighlight = require("./parseAlgoliaHitHighlight");
var _reverseHighlightedParts = require("./reverseHighlightedParts");
function parseAlgoliaHitReverseHighlight(props) {
    return (0, _reverseHighlightedParts.reverseHighlightedParts)((0, _parseAlgoliaHitHighlight.parseAlgoliaHitHighlight)(props));
}

},{"./parseAlgoliaHitHighlight":"8oRZg","./reverseHighlightedParts":"lnI4J","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"lnI4J":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "reverseHighlightedParts", ()=>reverseHighlightedParts);
var _isPartHighlighted = require("./isPartHighlighted");
function ownKeys(object, enumerableOnly) {
    var keys = Object.keys(object);
    if (Object.getOwnPropertySymbols) {
        var symbols = Object.getOwnPropertySymbols(object);
        enumerableOnly && (symbols = symbols.filter(function(sym) {
            return Object.getOwnPropertyDescriptor(object, sym).enumerable;
        })), keys.push.apply(keys, symbols);
    }
    return keys;
}
function _objectSpread(target) {
    for(var i = 1; i < arguments.length; i++){
        var source = null != arguments[i] ? arguments[i] : {};
        i % 2 ? ownKeys(Object(source), !0).forEach(function(key) {
            _defineProperty(target, key, source[key]);
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function(key) {
            Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
        });
    }
    return target;
}
function _defineProperty(obj, key, value) {
    if (key in obj) Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
    });
    else obj[key] = value;
    return obj;
}
function reverseHighlightedParts(parts) {
    // We don't want to highlight the whole word when no parts match.
    if (!parts.some(function(part) {
        return part.isHighlighted;
    })) return parts.map(function(part) {
        return _objectSpread(_objectSpread({}, part), {}, {
            isHighlighted: false
        });
    });
    return parts.map(function(part, i) {
        return _objectSpread(_objectSpread({}, part), {}, {
            isHighlighted: !(0, _isPartHighlighted.isPartHighlighted)(parts, i)
        });
    });
}

},{"./isPartHighlighted":"hFlzN","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"hFlzN":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "isPartHighlighted", ()=>isPartHighlighted);
var htmlEscapes = {
    "&amp;": "&",
    "&lt;": "<",
    "&gt;": ">",
    "&quot;": '"',
    "&#39;": "'"
};
var hasAlphanumeric = new RegExp(/\w/i);
var regexEscapedHtml = /&(amp|quot|lt|gt|#39);/g;
var regexHasEscapedHtml = RegExp(regexEscapedHtml.source);
function unescape(value) {
    return value && regexHasEscapedHtml.test(value) ? value.replace(regexEscapedHtml, function(character) {
        return htmlEscapes[character];
    }) : value;
}
function isPartHighlighted(parts, i) {
    var _parts, _parts2;
    var current = parts[i];
    var isNextHighlighted = ((_parts = parts[i + 1]) === null || _parts === void 0 ? void 0 : _parts.isHighlighted) || true;
    var isPreviousHighlighted = ((_parts2 = parts[i - 1]) === null || _parts2 === void 0 ? void 0 : _parts2.isHighlighted) || true;
    if (!hasAlphanumeric.test(unescape(current.value)) && isPreviousHighlighted === isNextHighlighted) return isPreviousHighlighted;
    return current.isHighlighted;
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"hDmRU":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "parseAlgoliaHitReverseSnippet", ()=>parseAlgoliaHitReverseSnippet);
var _parseAlgoliaHitSnippet = require("./parseAlgoliaHitSnippet");
var _reverseHighlightedParts = require("./reverseHighlightedParts");
function parseAlgoliaHitReverseSnippet(props) {
    return (0, _reverseHighlightedParts.reverseHighlightedParts)((0, _parseAlgoliaHitSnippet.parseAlgoliaHitSnippet)(props));
}

},{"./parseAlgoliaHitSnippet":"e5gtH","./reverseHighlightedParts":"lnI4J","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"e5gtH":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "parseAlgoliaHitSnippet", ()=>parseAlgoliaHitSnippet);
var _autocompleteShared = require("@algolia/autocomplete-shared");
var _parseAttribute = require("./parseAttribute");
function _toConsumableArray(arr) {
    return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
}
function _nonIterableSpread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _unsupportedIterableToArray(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}
function _iterableToArray(iter) {
    if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}
function _arrayWithoutHoles(arr) {
    if (Array.isArray(arr)) return _arrayLikeToArray(arr);
}
function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
function parseAlgoliaHitSnippet(_ref) {
    var hit = _ref.hit, attribute = _ref.attribute;
    var path = Array.isArray(attribute) ? attribute : [
        attribute
    ];
    var highlightedValue = (0, _autocompleteShared.getAttributeValueByPath)(hit, [
        "_snippetResult"
    ].concat(_toConsumableArray(path), [
        "value"
    ]));
    if (typeof highlightedValue !== "string") {
        (0, _autocompleteShared.warn)(false, 'The attribute "'.concat(path.join("."), '" described by the path ').concat(JSON.stringify(path), " does not exist on the hit. Did you set it in `attributesToSnippet`?") + "\nSee https://www.algolia.com/doc/api-reference/api-parameters/attributesToSnippet/");
        highlightedValue = (0, _autocompleteShared.getAttributeValueByPath)(hit, path) || "";
    }
    return (0, _parseAttribute.parseAttribute)({
        highlightedValue: highlightedValue
    });
}

},{"@algolia/autocomplete-shared":"59T59","./parseAttribute":"3rO3A","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"cZ7Rk":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"a8CYC":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _createRequester = require("./createRequester");
parcelHelpers.exportAll(_createRequester, exports);
var _getAlgoliaFacets = require("./getAlgoliaFacets");
parcelHelpers.exportAll(_getAlgoliaFacets, exports);
var _getAlgoliaResults = require("./getAlgoliaResults");
parcelHelpers.exportAll(_getAlgoliaResults, exports);

},{"./createRequester":"l5lzp","./getAlgoliaFacets":"djZ2z","./getAlgoliaResults":"4sIr0","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"l5lzp":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "createRequester", ()=>createRequester);
function ownKeys(object, enumerableOnly) {
    var keys = Object.keys(object);
    if (Object.getOwnPropertySymbols) {
        var symbols = Object.getOwnPropertySymbols(object);
        enumerableOnly && (symbols = symbols.filter(function(sym) {
            return Object.getOwnPropertyDescriptor(object, sym).enumerable;
        })), keys.push.apply(keys, symbols);
    }
    return keys;
}
function _objectSpread(target) {
    for(var i = 1; i < arguments.length; i++){
        var source = null != arguments[i] ? arguments[i] : {};
        i % 2 ? ownKeys(Object(source), !0).forEach(function(key) {
            _defineProperty(target, key, source[key]);
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function(key) {
            Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
        });
    }
    return target;
}
function _defineProperty(obj, key, value) {
    if (key in obj) Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
    });
    else obj[key] = value;
    return obj;
}
function createRequester(fetcher, requesterId) {
    function execute(fetcherParams) {
        return fetcher({
            searchClient: fetcherParams.searchClient,
            queries: fetcherParams.requests.map(function(x) {
                return x.query;
            })
        }).then(function(responses) {
            return responses.map(function(response, index) {
                var _fetcherParams$reques = fetcherParams.requests[index], sourceId = _fetcherParams$reques.sourceId, transformResponse = _fetcherParams$reques.transformResponse;
                return {
                    items: response,
                    sourceId: sourceId,
                    transformResponse: transformResponse
                };
            });
        });
    }
    return function createSpecifiedRequester(requesterParams) {
        return function requester(requestParams) {
            return _objectSpread(_objectSpread({
                requesterId: requesterId,
                execute: execute
            }, requesterParams), requestParams);
        };
    };
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"djZ2z":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * Retrieves Algolia facet hits from multiple indices.
 */ parcelHelpers.export(exports, "getAlgoliaFacets", ()=>getAlgoliaFacets);
var _createAlgoliaRequester = require("./createAlgoliaRequester");
function ownKeys(object, enumerableOnly) {
    var keys = Object.keys(object);
    if (Object.getOwnPropertySymbols) {
        var symbols = Object.getOwnPropertySymbols(object);
        enumerableOnly && (symbols = symbols.filter(function(sym) {
            return Object.getOwnPropertyDescriptor(object, sym).enumerable;
        })), keys.push.apply(keys, symbols);
    }
    return keys;
}
function _objectSpread(target) {
    for(var i = 1; i < arguments.length; i++){
        var source = null != arguments[i] ? arguments[i] : {};
        i % 2 ? ownKeys(Object(source), !0).forEach(function(key) {
            _defineProperty(target, key, source[key]);
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function(key) {
            Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
        });
    }
    return target;
}
function _defineProperty(obj, key, value) {
    if (key in obj) Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
    });
    else obj[key] = value;
    return obj;
}
function getAlgoliaFacets(requestParams) {
    var requester = (0, _createAlgoliaRequester.createAlgoliaRequester)({
        transformResponse: function transformResponse(response) {
            return response.facetHits;
        }
    });
    var queries = requestParams.queries.map(function(query) {
        return _objectSpread(_objectSpread({}, query), {}, {
            type: "facet"
        });
    });
    return requester(_objectSpread(_objectSpread({}, requestParams), {}, {
        queries: queries
    }));
}

},{"./createAlgoliaRequester":"32HWJ","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"32HWJ":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "createAlgoliaRequester", ()=>createAlgoliaRequester);
var _search = require("../search");
var _createRequester = require("./createRequester");
var createAlgoliaRequester = (0, _createRequester.createRequester)((0, _search.fetchAlgoliaResults), "algolia");

},{"../search":"gwNho","./createRequester":"l5lzp","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gwNho":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _fetchAlgoliaResults = require("./fetchAlgoliaResults");
parcelHelpers.exportAll(_fetchAlgoliaResults, exports);

},{"./fetchAlgoliaResults":"51Rml","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"51Rml":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "fetchAlgoliaResults", ()=>fetchAlgoliaResults);
var _autocompleteShared = require("@algolia/autocomplete-shared");
var _constants = require("../constants");
var _excluded = [
    "params"
];
function ownKeys(object, enumerableOnly) {
    var keys = Object.keys(object);
    if (Object.getOwnPropertySymbols) {
        var symbols = Object.getOwnPropertySymbols(object);
        enumerableOnly && (symbols = symbols.filter(function(sym) {
            return Object.getOwnPropertyDescriptor(object, sym).enumerable;
        })), keys.push.apply(keys, symbols);
    }
    return keys;
}
function _objectSpread(target) {
    for(var i = 1; i < arguments.length; i++){
        var source = null != arguments[i] ? arguments[i] : {};
        i % 2 ? ownKeys(Object(source), !0).forEach(function(key) {
            _defineProperty(target, key, source[key]);
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function(key) {
            Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
        });
    }
    return target;
}
function _defineProperty(obj, key, value) {
    if (key in obj) Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
    });
    else obj[key] = value;
    return obj;
}
function _objectWithoutProperties(source, excluded) {
    if (source == null) return {};
    var target = _objectWithoutPropertiesLoose(source, excluded);
    var key, i;
    if (Object.getOwnPropertySymbols) {
        var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
        for(i = 0; i < sourceSymbolKeys.length; i++){
            key = sourceSymbolKeys[i];
            if (excluded.indexOf(key) >= 0) continue;
            if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
            target[key] = source[key];
        }
    }
    return target;
}
function _objectWithoutPropertiesLoose(source, excluded) {
    if (source == null) return {};
    var target = {};
    var sourceKeys = Object.keys(source);
    var key, i;
    for(i = 0; i < sourceKeys.length; i++){
        key = sourceKeys[i];
        if (excluded.indexOf(key) >= 0) continue;
        target[key] = source[key];
    }
    return target;
}
function _toConsumableArray(arr) {
    return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
}
function _nonIterableSpread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _unsupportedIterableToArray(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}
function _iterableToArray(iter) {
    if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}
function _arrayWithoutHoles(arr) {
    if (Array.isArray(arr)) return _arrayLikeToArray(arr);
}
function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
function fetchAlgoliaResults(_ref) {
    var searchClient = _ref.searchClient, queries = _ref.queries, _ref$userAgents = _ref.userAgents, userAgents = _ref$userAgents === void 0 ? [] : _ref$userAgents;
    if (typeof searchClient.addAlgoliaAgent === "function") {
        var algoliaAgents = [].concat(_toConsumableArray((0, _autocompleteShared.userAgents)), _toConsumableArray(userAgents));
        algoliaAgents.forEach(function(_ref2) {
            var segment = _ref2.segment, version = _ref2.version;
            searchClient.addAlgoliaAgent(segment, version);
        });
    }
    return searchClient.search(queries.map(function(searchParameters) {
        var params = searchParameters.params, headers = _objectWithoutProperties(searchParameters, _excluded);
        return _objectSpread(_objectSpread({}, headers), {}, {
            params: _objectSpread({
                hitsPerPage: 5,
                highlightPreTag: (0, _constants.HIGHLIGHT_PRE_TAG),
                highlightPostTag: (0, _constants.HIGHLIGHT_POST_TAG)
            }, params)
        });
    })).then(function(response) {
        return response.results;
    });
}

},{"@algolia/autocomplete-shared":"59T59","../constants":"hThxU","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"4sIr0":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "getAlgoliaResults", ()=>getAlgoliaResults);
var _createAlgoliaRequester = require("./createAlgoliaRequester");
var getAlgoliaResults = (0, _createAlgoliaRequester.createAlgoliaRequester)({
    transformResponse: function transformResponse(response) {
        return response.hits;
    }
});

},{"./createAlgoliaRequester":"32HWJ","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"b85bW":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "createReverseHighlightComponent", ()=>createReverseHighlightComponent);
var _autocompletePresetAlgolia = require("@algolia/autocomplete-preset-algolia");
function createReverseHighlightComponent(_ref) {
    var createElement = _ref.createElement, Fragment = _ref.Fragment;
    function ReverseHighlight(_ref2) {
        var hit = _ref2.hit, attribute = _ref2.attribute, _ref2$tagName = _ref2.tagName, tagName = _ref2$tagName === void 0 ? "mark" : _ref2$tagName;
        return createElement(Fragment, {}, (0, _autocompletePresetAlgolia.parseAlgoliaHitReverseHighlight)({
            hit: hit,
            attribute: attribute
        }).map(function(x, index) {
            return x.isHighlighted ? createElement(tagName, {
                key: index
            }, x.value) : x.value;
        }));
    }
    ReverseHighlight.__autocomplete_componentName = "ReverseHighlight";
    return ReverseHighlight;
}

},{"@algolia/autocomplete-preset-algolia":"lp3lw","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"fNt5i":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "createReverseSnippetComponent", ()=>createReverseSnippetComponent);
var _autocompletePresetAlgolia = require("@algolia/autocomplete-preset-algolia");
function createReverseSnippetComponent(_ref) {
    var createElement = _ref.createElement, Fragment = _ref.Fragment;
    function ReverseSnippet(_ref2) {
        var hit = _ref2.hit, attribute = _ref2.attribute, _ref2$tagName = _ref2.tagName, tagName = _ref2$tagName === void 0 ? "mark" : _ref2$tagName;
        return createElement(Fragment, {}, (0, _autocompletePresetAlgolia.parseAlgoliaHitReverseSnippet)({
            hit: hit,
            attribute: attribute
        }).map(function(x, index) {
            return x.isHighlighted ? createElement(tagName, {
                key: index
            }, x.value) : x.value;
        }));
    }
    ReverseSnippet.__autocomplete_componentName = "ReverseSnippet";
    return ReverseSnippet;
}

},{"@algolia/autocomplete-preset-algolia":"lp3lw","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"bThlx":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "createSnippetComponent", ()=>createSnippetComponent);
var _autocompletePresetAlgolia = require("@algolia/autocomplete-preset-algolia");
function createSnippetComponent(_ref) {
    var createElement = _ref.createElement, Fragment = _ref.Fragment;
    function Snippet(_ref2) {
        var hit = _ref2.hit, attribute = _ref2.attribute, _ref2$tagName = _ref2.tagName, tagName = _ref2$tagName === void 0 ? "mark" : _ref2$tagName;
        return createElement(Fragment, {}, (0, _autocompletePresetAlgolia.parseAlgoliaHitSnippet)({
            hit: hit,
            attribute: attribute
        }).map(function(x, index) {
            return x.isHighlighted ? createElement(tagName, {
                key: index
            }, x.value) : x.value;
        }));
    }
    Snippet.__autocomplete_componentName = "Snippet";
    return Snippet;
}

},{"@algolia/autocomplete-preset-algolia":"lp3lw","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"aVhxY":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "getPanelPlacementStyle", ()=>getPanelPlacementStyle);
function getPanelPlacementStyle(_ref) {
    var panelPlacement = _ref.panelPlacement, container = _ref.container, form = _ref.form, environment = _ref.environment;
    var containerRect = container.getBoundingClientRect(); // Some browsers have specificities to retrieve the document scroll position.
    // See https://stackoverflow.com/a/28633515/9940315
    var scrollTop = environment.pageYOffset || environment.document.documentElement.scrollTop || environment.document.body.scrollTop || 0;
    var top = scrollTop + containerRect.top + containerRect.height;
    switch(panelPlacement){
        case "start":
            return {
                top: top,
                left: containerRect.left
            };
        case "end":
            return {
                top: top,
                right: environment.document.documentElement.clientWidth - (containerRect.left + containerRect.width)
            };
        case "full-width":
            return {
                top: top,
                left: 0,
                right: 0,
                width: "unset",
                maxWidth: "unset"
            };
        case "input-wrapper-width":
            var formRect = form.getBoundingClientRect();
            return {
                top: top,
                left: formRect.left,
                right: environment.document.documentElement.clientWidth - (formRect.left + formRect.width),
                width: "unset",
                maxWidth: "unset"
            };
        default:
            throw new Error("[Autocomplete] The `panelPlacement` value ".concat(JSON.stringify(panelPlacement), " is not valid."));
    }
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"45iVn":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "renderSearchBox", ()=>renderSearchBox);
parcelHelpers.export(exports, "renderPanel", ()=>renderPanel);
/** @jsxRuntime classic */ /** @jsx renderer.createElement */ var _utils = require("./utils");
function _extends() {
    _extends = Object.assign || function(target) {
        for(var i = 1; i < arguments.length; i++){
            var source = arguments[i];
            for(var key in source)if (Object.prototype.hasOwnProperty.call(source, key)) target[key] = source[key];
        }
        return target;
    };
    return _extends.apply(this, arguments);
}
function ownKeys(object, enumerableOnly) {
    var keys = Object.keys(object);
    if (Object.getOwnPropertySymbols) {
        var symbols = Object.getOwnPropertySymbols(object);
        enumerableOnly && (symbols = symbols.filter(function(sym) {
            return Object.getOwnPropertyDescriptor(object, sym).enumerable;
        })), keys.push.apply(keys, symbols);
    }
    return keys;
}
function _objectSpread(target) {
    for(var i = 1; i < arguments.length; i++){
        var source = null != arguments[i] ? arguments[i] : {};
        i % 2 ? ownKeys(Object(source), !0).forEach(function(key) {
            _defineProperty(target, key, source[key]);
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function(key) {
            Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
        });
    }
    return target;
}
function _defineProperty(obj, key, value) {
    if (key in obj) Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
    });
    else obj[key] = value;
    return obj;
}
function renderSearchBox(_ref) {
    var autocomplete = _ref.autocomplete, autocompleteScopeApi = _ref.autocompleteScopeApi, dom = _ref.dom, propGetters = _ref.propGetters, state = _ref.state;
    (0, _utils.setPropertiesWithoutEvents)(dom.root, propGetters.getRootProps(_objectSpread({
        state: state,
        props: autocomplete.getRootProps({})
    }, autocompleteScopeApi)));
    (0, _utils.setPropertiesWithoutEvents)(dom.input, propGetters.getInputProps(_objectSpread({
        state: state,
        props: autocomplete.getInputProps({
            inputElement: dom.input
        }),
        inputElement: dom.input
    }, autocompleteScopeApi)));
    (0, _utils.setProperties)(dom.label, {
        hidden: state.status === "stalled"
    });
    (0, _utils.setProperties)(dom.loadingIndicator, {
        hidden: state.status !== "stalled"
    });
    (0, _utils.setProperties)(dom.clearButton, {
        hidden: !state.query
    });
}
function renderPanel(render, _ref2) {
    var autocomplete = _ref2.autocomplete, autocompleteScopeApi = _ref2.autocompleteScopeApi, classNames = _ref2.classNames, html = _ref2.html, dom = _ref2.dom, panelContainer = _ref2.panelContainer, propGetters = _ref2.propGetters, state = _ref2.state, components = _ref2.components, renderer = _ref2.renderer;
    if (!state.isOpen) {
        if (panelContainer.contains(dom.panel)) panelContainer.removeChild(dom.panel);
        return;
    } // We add the panel element to the DOM when it's not yet appended and that the
    // items are fetched.
    if (!panelContainer.contains(dom.panel) && state.status !== "loading") panelContainer.appendChild(dom.panel);
    dom.panel.classList.toggle("aa-Panel--stalled", state.status === "stalled");
    var sections = state.collections.filter(function(_ref3) {
        var source = _ref3.source, items = _ref3.items;
        return source.templates.noResults || items.length > 0;
    }).map(function(_ref4, sourceIndex) {
        var source = _ref4.source, items = _ref4.items;
        return renderer.createElement("section", {
            key: sourceIndex,
            className: classNames.source,
            "data-autocomplete-source-id": source.sourceId
        }, source.templates.header && renderer.createElement("div", {
            className: classNames.sourceHeader
        }, source.templates.header({
            components: components,
            createElement: renderer.createElement,
            Fragment: renderer.Fragment,
            items: items,
            source: source,
            state: state,
            html: html
        })), source.templates.noResults && items.length === 0 ? renderer.createElement("div", {
            className: classNames.sourceNoResults
        }, source.templates.noResults({
            components: components,
            createElement: renderer.createElement,
            Fragment: renderer.Fragment,
            source: source,
            state: state,
            html: html
        })) : renderer.createElement("ul", _extends({
            className: classNames.list
        }, propGetters.getListProps(_objectSpread({
            state: state,
            props: autocomplete.getListProps({})
        }, autocompleteScopeApi))), items.map(function(item) {
            var itemProps = autocomplete.getItemProps({
                item: item,
                source: source
            });
            return renderer.createElement("li", _extends({
                key: itemProps.id,
                className: classNames.item
            }, propGetters.getItemProps(_objectSpread({
                state: state,
                props: itemProps
            }, autocompleteScopeApi))), source.templates.item({
                components: components,
                createElement: renderer.createElement,
                Fragment: renderer.Fragment,
                item: item,
                state: state,
                html: html
            }));
        })), source.templates.footer && renderer.createElement("div", {
            className: classNames.sourceFooter
        }, source.templates.footer({
            components: components,
            createElement: renderer.createElement,
            Fragment: renderer.Fragment,
            items: items,
            source: source,
            state: state,
            html: html
        })));
    });
    var children = renderer.createElement(renderer.Fragment, null, renderer.createElement("div", {
        className: classNames.panelLayout
    }, sections), renderer.createElement("div", {
        className: "aa-GradientBottom"
    }));
    var elements = sections.reduce(function(acc, current) {
        acc[current.props["data-autocomplete-source-id"]] = current;
        return acc;
    }, {});
    render(_objectSpread(_objectSpread({
        children: children,
        state: state,
        sections: sections,
        elements: elements
    }, renderer), {}, {
        components: components,
        html: html
    }, autocompleteScopeApi), dom.panel);
}

},{"./utils":"fKU1x","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"hqEHF":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "userAgents", ()=>userAgents);
var _autocompleteShared = require("@algolia/autocomplete-shared");
var userAgents = [
    {
        segment: "autocomplete-js",
        version: (0, _autocompleteShared.version)
    }
];

},{"@algolia/autocomplete-shared":"59T59","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"24Y2H":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _getAlgoliaFacets = require("./getAlgoliaFacets");
parcelHelpers.exportAll(_getAlgoliaFacets, exports);
var _getAlgoliaResults = require("./getAlgoliaResults");
parcelHelpers.exportAll(_getAlgoliaResults, exports);

},{"./getAlgoliaFacets":"8NocL","./getAlgoliaResults":"4tl7s","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"8NocL":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * Retrieves Algolia facet hits from multiple indices.
 */ parcelHelpers.export(exports, "getAlgoliaFacets", ()=>getAlgoliaFacets);
var _createAlgoliaRequester = require("./createAlgoliaRequester");
function ownKeys(object, enumerableOnly) {
    var keys = Object.keys(object);
    if (Object.getOwnPropertySymbols) {
        var symbols = Object.getOwnPropertySymbols(object);
        enumerableOnly && (symbols = symbols.filter(function(sym) {
            return Object.getOwnPropertyDescriptor(object, sym).enumerable;
        })), keys.push.apply(keys, symbols);
    }
    return keys;
}
function _objectSpread(target) {
    for(var i = 1; i < arguments.length; i++){
        var source = null != arguments[i] ? arguments[i] : {};
        i % 2 ? ownKeys(Object(source), !0).forEach(function(key) {
            _defineProperty(target, key, source[key]);
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function(key) {
            Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
        });
    }
    return target;
}
function _defineProperty(obj, key, value) {
    if (key in obj) Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
    });
    else obj[key] = value;
    return obj;
}
function getAlgoliaFacets(requestParams) {
    var requester = (0, _createAlgoliaRequester.createAlgoliaRequester)({
        transformResponse: function transformResponse(response) {
            return response.facetHits;
        }
    });
    var queries = requestParams.queries.map(function(query) {
        return _objectSpread(_objectSpread({}, query), {}, {
            type: "facet"
        });
    });
    return requester(_objectSpread(_objectSpread({}, requestParams), {}, {
        queries: queries
    }));
}

},{"./createAlgoliaRequester":"fsJ9y","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"fsJ9y":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "createAlgoliaRequester", ()=>createAlgoliaRequester);
var _autocompletePresetAlgolia = require("@algolia/autocomplete-preset-algolia");
var _userAgents = require("../userAgents");
function ownKeys(object, enumerableOnly) {
    var keys = Object.keys(object);
    if (Object.getOwnPropertySymbols) {
        var symbols = Object.getOwnPropertySymbols(object);
        enumerableOnly && (symbols = symbols.filter(function(sym) {
            return Object.getOwnPropertyDescriptor(object, sym).enumerable;
        })), keys.push.apply(keys, symbols);
    }
    return keys;
}
function _objectSpread(target) {
    for(var i = 1; i < arguments.length; i++){
        var source = null != arguments[i] ? arguments[i] : {};
        i % 2 ? ownKeys(Object(source), !0).forEach(function(key) {
            _defineProperty(target, key, source[key]);
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function(key) {
            Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
        });
    }
    return target;
}
function _defineProperty(obj, key, value) {
    if (key in obj) Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
    });
    else obj[key] = value;
    return obj;
}
var createAlgoliaRequester = (0, _autocompletePresetAlgolia.createRequester)(function(params) {
    return (0, _autocompletePresetAlgolia.fetchAlgoliaResults)(_objectSpread(_objectSpread({}, params), {}, {
        userAgents: (0, _userAgents.userAgents)
    }));
}, "algolia");

},{"@algolia/autocomplete-preset-algolia":"lp3lw","../userAgents":"hqEHF","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"4tl7s":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "getAlgoliaResults", ()=>getAlgoliaResults);
var _createAlgoliaRequester = require("./createAlgoliaRequester");
var getAlgoliaResults = (0, _createAlgoliaRequester.createAlgoliaRequester)({
    transformResponse: function transformResponse(response) {
        return response.hits;
    }
});

},{"./createAlgoliaRequester":"fsJ9y","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"8cK74":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _autocompleteApi = require("./AutocompleteApi");
parcelHelpers.exportAll(_autocompleteApi, exports);
var _autocompleteClassNames = require("./AutocompleteClassNames");
parcelHelpers.exportAll(_autocompleteClassNames, exports);
var _autocompleteCollection = require("./AutocompleteCollection");
parcelHelpers.exportAll(_autocompleteCollection, exports);
var _autocompleteComponents = require("./AutocompleteComponents");
parcelHelpers.exportAll(_autocompleteComponents, exports);
var _autocompleteDom = require("./AutocompleteDom");
parcelHelpers.exportAll(_autocompleteDom, exports);
var _autocompleteOptions = require("./AutocompleteOptions");
parcelHelpers.exportAll(_autocompleteOptions, exports);
var _autocompletePlugin = require("./AutocompletePlugin");
parcelHelpers.exportAll(_autocompletePlugin, exports);
var _autocompletePropGetters = require("./AutocompletePropGetters");
parcelHelpers.exportAll(_autocompletePropGetters, exports);
var _autocompleteRender = require("./AutocompleteRender");
parcelHelpers.exportAll(_autocompleteRender, exports);
var _autocompleteRenderer = require("./AutocompleteRenderer");
parcelHelpers.exportAll(_autocompleteRenderer, exports);
var _autocompleteSource = require("./AutocompleteSource");
parcelHelpers.exportAll(_autocompleteSource, exports);
var _autocompleteState = require("./AutocompleteState");
parcelHelpers.exportAll(_autocompleteState, exports);
var _autocompleteTranslations = require("./AutocompleteTranslations");
parcelHelpers.exportAll(_autocompleteTranslations, exports);
var _highlightHitParams = require("./HighlightHitParams");
parcelHelpers.exportAll(_highlightHitParams, exports);

},{"./AutocompleteApi":"9PH6B","./AutocompleteClassNames":"1p0cB","./AutocompleteCollection":"5bmmV","./AutocompleteComponents":"cARCb","./AutocompleteDom":"duZcj","./AutocompleteOptions":"a34Ht","./AutocompletePlugin":"hL4WT","./AutocompletePropGetters":"2ubDr","./AutocompleteRender":"8ciX1","./AutocompleteRenderer":"3KaZb","./AutocompleteSource":"29qGC","./AutocompleteState":"imzQ1","./AutocompleteTranslations":"lG9me","./HighlightHitParams":"hgzci","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"9PH6B":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"1p0cB":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"5bmmV":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"cARCb":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"duZcj":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"a34Ht":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"hL4WT":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"2ubDr":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"8ciX1":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"3KaZb":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"29qGC":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"imzQ1":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"lG9me":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"hgzci":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"ehDkI":[function(require,module,exports) {
/*! algoliasearch-lite.umd.js | 4.14.3 | © Algolia, inc. | https://github.com/algolia/algoliasearch-client-javascript */ !function(e, t) {
    module.exports = t();
}(this, function() {
    "use strict";
    function e(e, t, r) {
        return t in e ? Object.defineProperty(e, t, {
            value: r,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = r, e;
    }
    function t(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
            var n = Object.getOwnPropertySymbols(e);
            t && (n = n.filter(function(t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })), r.push.apply(r, n);
        }
        return r;
    }
    function r(r) {
        for(var n = 1; n < arguments.length; n++){
            var o = null != arguments[n] ? arguments[n] : {};
            n % 2 ? t(Object(o), !0).forEach(function(t) {
                e(r, t, o[t]);
            }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(r, Object.getOwnPropertyDescriptors(o)) : t(Object(o)).forEach(function(e) {
                Object.defineProperty(r, e, Object.getOwnPropertyDescriptor(o, e));
            });
        }
        return r;
    }
    function n(e, t) {
        if (null == e) return {};
        var r, n, o = function(e, t) {
            if (null == e) return {};
            var r, n, o = {}, a = Object.keys(e);
            for(n = 0; n < a.length; n++)r = a[n], t.indexOf(r) >= 0 || (o[r] = e[r]);
            return o;
        }(e, t);
        if (Object.getOwnPropertySymbols) {
            var a = Object.getOwnPropertySymbols(e);
            for(n = 0; n < a.length; n++)r = a[n], t.indexOf(r) >= 0 || Object.prototype.propertyIsEnumerable.call(e, r) && (o[r] = e[r]);
        }
        return o;
    }
    function o(e, t) {
        return function(e) {
            if (Array.isArray(e)) return e;
        }(e) || function(e, t) {
            if (!(Symbol.iterator in Object(e) || "[object Arguments]" === Object.prototype.toString.call(e))) return;
            var r = [], n = !0, o = !1, a = void 0;
            try {
                for(var u, i = e[Symbol.iterator](); !(n = (u = i.next()).done) && (r.push(u.value), !t || r.length !== t); n = !0);
            } catch (e) {
                o = !0, a = e;
            } finally{
                try {
                    n || null == i.return || i.return();
                } finally{
                    if (o) throw a;
                }
            }
            return r;
        }(e, t) || function() {
            throw new TypeError("Invalid attempt to destructure non-iterable instance");
        }();
    }
    function a(e) {
        return function(e) {
            if (Array.isArray(e)) {
                for(var t = 0, r = new Array(e.length); t < e.length; t++)r[t] = e[t];
                return r;
            }
        }(e) || function(e) {
            if (Symbol.iterator in Object(e) || "[object Arguments]" === Object.prototype.toString.call(e)) return Array.from(e);
        }(e) || function() {
            throw new TypeError("Invalid attempt to spread non-iterable instance");
        }();
    }
    function u(e) {
        var t, r = "algoliasearch-client-js-".concat(e.key), n = function() {
            return void 0 === t && (t = e.localStorage || window.localStorage), t;
        }, a = function() {
            return JSON.parse(n().getItem(r) || "{}");
        };
        return {
            get: function(e, t) {
                var r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {
                    miss: function() {
                        return Promise.resolve();
                    }
                };
                return Promise.resolve().then(function() {
                    var r = JSON.stringify(e), n = a()[r];
                    return Promise.all([
                        n || t(),
                        void 0 !== n
                    ]);
                }).then(function(e) {
                    var t = o(e, 2), n = t[0], a = t[1];
                    return Promise.all([
                        n,
                        a || r.miss(n)
                    ]);
                }).then(function(e) {
                    return o(e, 1)[0];
                });
            },
            set: function(e, t) {
                return Promise.resolve().then(function() {
                    var o = a();
                    return o[JSON.stringify(e)] = t, n().setItem(r, JSON.stringify(o)), t;
                });
            },
            delete: function(e) {
                return Promise.resolve().then(function() {
                    var t = a();
                    delete t[JSON.stringify(e)], n().setItem(r, JSON.stringify(t));
                });
            },
            clear: function() {
                return Promise.resolve().then(function() {
                    n().removeItem(r);
                });
            }
        };
    }
    function i(e) {
        var t = a(e.caches), r = t.shift();
        return void 0 === r ? {
            get: function(e, t) {
                var r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {
                    miss: function() {
                        return Promise.resolve();
                    }
                }, n = t();
                return n.then(function(e) {
                    return Promise.all([
                        e,
                        r.miss(e)
                    ]);
                }).then(function(e) {
                    return o(e, 1)[0];
                });
            },
            set: function(e, t) {
                return Promise.resolve(t);
            },
            delete: function(e) {
                return Promise.resolve();
            },
            clear: function() {
                return Promise.resolve();
            }
        } : {
            get: function(e, n) {
                var o = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {
                    miss: function() {
                        return Promise.resolve();
                    }
                };
                return r.get(e, n, o).catch(function() {
                    return i({
                        caches: t
                    }).get(e, n, o);
                });
            },
            set: function(e, n) {
                return r.set(e, n).catch(function() {
                    return i({
                        caches: t
                    }).set(e, n);
                });
            },
            delete: function(e) {
                return r.delete(e).catch(function() {
                    return i({
                        caches: t
                    }).delete(e);
                });
            },
            clear: function() {
                return r.clear().catch(function() {
                    return i({
                        caches: t
                    }).clear();
                });
            }
        };
    }
    function s() {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {
            serializable: !0
        }, t = {};
        return {
            get: function(r, n) {
                var o = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {
                    miss: function() {
                        return Promise.resolve();
                    }
                }, a = JSON.stringify(r);
                if (a in t) return Promise.resolve(e.serializable ? JSON.parse(t[a]) : t[a]);
                var u = n(), i = o && o.miss || function() {
                    return Promise.resolve();
                };
                return u.then(function(e) {
                    return i(e);
                }).then(function() {
                    return u;
                });
            },
            set: function(r, n) {
                return t[JSON.stringify(r)] = e.serializable ? JSON.stringify(n) : n, Promise.resolve(n);
            },
            delete: function(e) {
                return delete t[JSON.stringify(e)], Promise.resolve();
            },
            clear: function() {
                return t = {}, Promise.resolve();
            }
        };
    }
    function c(e) {
        for(var t = e.length - 1; t > 0; t--){
            var r = Math.floor(Math.random() * (t + 1)), n = e[t];
            e[t] = e[r], e[r] = n;
        }
        return e;
    }
    function l(e, t) {
        return t ? (Object.keys(t).forEach(function(r) {
            e[r] = t[r](e);
        }), e) : e;
    }
    function f(e) {
        for(var t = arguments.length, r = new Array(t > 1 ? t - 1 : 0), n = 1; n < t; n++)r[n - 1] = arguments[n];
        var o = 0;
        return e.replace(/%s/g, function() {
            return encodeURIComponent(r[o++]);
        });
    }
    var h = {
        WithinQueryParameters: 0,
        WithinHeaders: 1
    };
    function d(e, t) {
        var r = e || {}, n = r.data || {};
        return Object.keys(r).forEach(function(e) {
            -1 === [
                "timeout",
                "headers",
                "queryParameters",
                "data",
                "cacheable"
            ].indexOf(e) && (n[e] = r[e]);
        }), {
            data: Object.entries(n).length > 0 ? n : void 0,
            timeout: r.timeout || t,
            headers: r.headers || {},
            queryParameters: r.queryParameters || {},
            cacheable: r.cacheable
        };
    }
    var m = {
        Read: 1,
        Write: 2,
        Any: 3
    }, p = 1, v = 2, y = 3;
    function g(e) {
        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : p;
        return r(r({}, e), {}, {
            status: t,
            lastUpdate: Date.now()
        });
    }
    function b(e) {
        return "string" == typeof e ? {
            protocol: "https",
            url: e,
            accept: m.Any
        } : {
            protocol: e.protocol || "https",
            url: e.url,
            accept: e.accept || m.Any
        };
    }
    var O = "GET", P = "POST";
    function q(e, t) {
        return Promise.all(t.map(function(t) {
            return e.get(t, function() {
                return Promise.resolve(g(t));
            });
        })).then(function(e) {
            var r = e.filter(function(e) {
                return function(e) {
                    return e.status === p || Date.now() - e.lastUpdate > 12e4;
                }(e);
            }), n = e.filter(function(e) {
                return function(e) {
                    return e.status === y && Date.now() - e.lastUpdate <= 12e4;
                }(e);
            }), o = [].concat(a(r), a(n));
            return {
                getTimeout: function(e, t) {
                    return (0 === n.length && 0 === e ? 1 : n.length + 3 + e) * t;
                },
                statelessHosts: o.length > 0 ? o.map(function(e) {
                    return b(e);
                }) : t
            };
        });
    }
    function w(e, t, n, o) {
        var u = [], i = function(e, t) {
            if (e.method === O || void 0 === e.data && void 0 === t.data) return;
            var n = Array.isArray(e.data) ? e.data : r(r({}, e.data), t.data);
            return JSON.stringify(n);
        }(n, o), s = function(e, t) {
            var n = r(r({}, e.headers), t.headers), o = {};
            return Object.keys(n).forEach(function(e) {
                var t = n[e];
                o[e.toLowerCase()] = t;
            }), o;
        }(e, o), c = n.method, l = n.method !== O ? {} : r(r({}, n.data), o.data), f = r(r(r({
            "x-algolia-agent": e.userAgent.value
        }, e.queryParameters), l), o.queryParameters), h = 0, d = function t(r, a) {
            var l = r.pop();
            if (void 0 === l) throw {
                name: "RetryError",
                message: "Unreachable hosts - your application id may be incorrect. If the error persists, contact support@algolia.com.",
                transporterStackTrace: A(u)
            };
            var d = {
                data: i,
                headers: s,
                method: c,
                url: S(l, n.path, f),
                connectTimeout: a(h, e.timeouts.connect),
                responseTimeout: a(h, o.timeout)
            }, m = function(e) {
                var t = {
                    request: d,
                    response: e,
                    host: l,
                    triesLeft: r.length
                };
                return u.push(t), t;
            }, p = {
                onSuccess: function(e) {
                    return function(e) {
                        try {
                            return JSON.parse(e.content);
                        } catch (t) {
                            throw function(e, t) {
                                return {
                                    name: "DeserializationError",
                                    message: e,
                                    response: t
                                };
                            }(t.message, e);
                        }
                    }(e);
                },
                onRetry: function(n) {
                    var o = m(n);
                    return n.isTimedOut && h++, Promise.all([
                        e.logger.info("Retryable failure", x(o)),
                        e.hostsCache.set(l, g(l, n.isTimedOut ? y : v))
                    ]).then(function() {
                        return t(r, a);
                    });
                },
                onFail: function(e) {
                    throw m(e), function(e, t) {
                        var r = e.content, n = e.status, o = r;
                        try {
                            o = JSON.parse(r).message;
                        } catch (e) {}
                        return function(e, t, r) {
                            return {
                                name: "ApiError",
                                message: e,
                                status: t,
                                transporterStackTrace: r
                            };
                        }(o, n, t);
                    }(e, A(u));
                }
            };
            return e.requester.send(d).then(function(e) {
                return function(e, t) {
                    return function(e) {
                        var t = e.status;
                        return e.isTimedOut || function(e) {
                            var t = e.isTimedOut, r = e.status;
                            return !t && 0 == ~~r;
                        }(e) || 2 != ~~(t / 100) && 4 != ~~(t / 100);
                    }(e) ? t.onRetry(e) : 2 == ~~(e.status / 100) ? t.onSuccess(e) : t.onFail(e);
                }(e, p);
            });
        };
        return q(e.hostsCache, t).then(function(e) {
            return d(a(e.statelessHosts).reverse(), e.getTimeout);
        });
    }
    function j(e) {
        var t = {
            value: "Algolia for JavaScript (".concat(e, ")"),
            add: function(e) {
                var r = "; ".concat(e.segment).concat(void 0 !== e.version ? " (".concat(e.version, ")") : "");
                return -1 === t.value.indexOf(r) && (t.value = "".concat(t.value).concat(r)), t;
            }
        };
        return t;
    }
    function S(e, t, r) {
        var n = T(r), o = "".concat(e.protocol, "://").concat(e.url, "/").concat("/" === t.charAt(0) ? t.substr(1) : t);
        return n.length && (o += "?".concat(n)), o;
    }
    function T(e) {
        return Object.keys(e).map(function(t) {
            var r;
            return f("%s=%s", t, (r = e[t], "[object Object]" === Object.prototype.toString.call(r) || "[object Array]" === Object.prototype.toString.call(r) ? JSON.stringify(e[t]) : e[t]));
        }).join("&");
    }
    function A(e) {
        return e.map(function(e) {
            return x(e);
        });
    }
    function x(e) {
        var t = e.request.headers["x-algolia-api-key"] ? {
            "x-algolia-api-key": "*****"
        } : {};
        return r(r({}, e), {}, {
            request: r(r({}, e.request), {}, {
                headers: r(r({}, e.request.headers), t)
            })
        });
    }
    var N = function(e) {
        var t = e.appId, n = function(e, t, r) {
            var n = {
                "x-algolia-api-key": r,
                "x-algolia-application-id": t
            };
            return {
                headers: function() {
                    return e === h.WithinHeaders ? n : {};
                },
                queryParameters: function() {
                    return e === h.WithinQueryParameters ? n : {};
                }
            };
        }(void 0 !== e.authMode ? e.authMode : h.WithinHeaders, t, e.apiKey), a = function(e) {
            var t = e.hostsCache, r = e.logger, n = e.requester, a = e.requestsCache, u = e.responsesCache, i = e.timeouts, s = e.userAgent, c = e.hosts, l = e.queryParameters, f = {
                hostsCache: t,
                logger: r,
                requester: n,
                requestsCache: a,
                responsesCache: u,
                timeouts: i,
                userAgent: s,
                headers: e.headers,
                queryParameters: l,
                hosts: c.map(function(e) {
                    return b(e);
                }),
                read: function(e, t) {
                    var r = d(t, f.timeouts.read), n = function() {
                        return w(f, f.hosts.filter(function(e) {
                            return 0 != (e.accept & m.Read);
                        }), e, r);
                    };
                    if (!0 !== (void 0 !== r.cacheable ? r.cacheable : e.cacheable)) return n();
                    var a = {
                        request: e,
                        mappedRequestOptions: r,
                        transporter: {
                            queryParameters: f.queryParameters,
                            headers: f.headers
                        }
                    };
                    return f.responsesCache.get(a, function() {
                        return f.requestsCache.get(a, function() {
                            return f.requestsCache.set(a, n()).then(function(e) {
                                return Promise.all([
                                    f.requestsCache.delete(a),
                                    e
                                ]);
                            }, function(e) {
                                return Promise.all([
                                    f.requestsCache.delete(a),
                                    Promise.reject(e)
                                ]);
                            }).then(function(e) {
                                var t = o(e, 2);
                                t[0];
                                return t[1];
                            });
                        });
                    }, {
                        miss: function(e) {
                            return f.responsesCache.set(a, e);
                        }
                    });
                },
                write: function(e, t) {
                    return w(f, f.hosts.filter(function(e) {
                        return 0 != (e.accept & m.Write);
                    }), e, d(t, f.timeouts.write));
                }
            };
            return f;
        }(r(r({
            hosts: [
                {
                    url: "".concat(t, "-dsn.algolia.net"),
                    accept: m.Read
                },
                {
                    url: "".concat(t, ".algolia.net"),
                    accept: m.Write
                }
            ].concat(c([
                {
                    url: "".concat(t, "-1.algolianet.com")
                },
                {
                    url: "".concat(t, "-2.algolianet.com")
                },
                {
                    url: "".concat(t, "-3.algolianet.com")
                }
            ]))
        }, e), {}, {
            headers: r(r(r({}, n.headers()), {
                "content-type": "application/x-www-form-urlencoded"
            }), e.headers),
            queryParameters: r(r({}, n.queryParameters()), e.queryParameters)
        }));
        return l({
            transporter: a,
            appId: t,
            addAlgoliaAgent: function(e, t) {
                a.userAgent.add({
                    segment: e,
                    version: t
                });
            },
            clearCache: function() {
                return Promise.all([
                    a.requestsCache.clear(),
                    a.responsesCache.clear()
                ]).then(function() {});
            }
        }, e.methods);
    }, C = function(e) {
        return function(t, r) {
            return t.method === O ? e.transporter.read(t, r) : e.transporter.write(t, r);
        };
    }, k = function(e) {
        return function(t) {
            var r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}, n = {
                transporter: e.transporter,
                appId: e.appId,
                indexName: t
            };
            return l(n, r.methods);
        };
    }, J = function(e) {
        return function(t, n) {
            var o = t.map(function(e) {
                return r(r({}, e), {}, {
                    params: T(e.params || {})
                });
            });
            return e.transporter.read({
                method: P,
                path: "1/indexes/*/queries",
                data: {
                    requests: o
                },
                cacheable: !0
            }, n);
        };
    }, E = function(e) {
        return function(t, o) {
            return Promise.all(t.map(function(t) {
                var a = t.params, u = a.facetName, i = a.facetQuery, s = n(a, [
                    "facetName",
                    "facetQuery"
                ]);
                return k(e)(t.indexName, {
                    methods: {
                        searchForFacetValues: R
                    }
                }).searchForFacetValues(u, i, r(r({}, o), s));
            }));
        };
    }, I = function(e) {
        return function(t, r, n) {
            return e.transporter.read({
                method: P,
                path: f("1/answers/%s/prediction", e.indexName),
                data: {
                    query: t,
                    queryLanguages: r
                },
                cacheable: !0
            }, n);
        };
    }, F = function(e) {
        return function(t, r) {
            return e.transporter.read({
                method: P,
                path: f("1/indexes/%s/query", e.indexName),
                data: {
                    query: t
                },
                cacheable: !0
            }, r);
        };
    }, R = function(e) {
        return function(t, r, n) {
            return e.transporter.read({
                method: P,
                path: f("1/indexes/%s/facets/%s/query", e.indexName, t),
                data: {
                    facetQuery: r
                },
                cacheable: !0
            }, n);
        };
    }, D = 1, W = 2, H = 3;
    function Q(e, t, n) {
        var o, a = {
            appId: e,
            apiKey: t,
            timeouts: {
                connect: 1,
                read: 2,
                write: 30
            },
            requester: {
                send: function(e) {
                    return new Promise(function(t) {
                        var r = new XMLHttpRequest;
                        r.open(e.method, e.url, !0), Object.keys(e.headers).forEach(function(t) {
                            return r.setRequestHeader(t, e.headers[t]);
                        });
                        var n, o = function(e, n) {
                            return setTimeout(function() {
                                r.abort(), t({
                                    status: 0,
                                    content: n,
                                    isTimedOut: !0
                                });
                            }, 1e3 * e);
                        }, a = o(e.connectTimeout, "Connection timeout");
                        r.onreadystatechange = function() {
                            r.readyState > r.OPENED && void 0 === n && (clearTimeout(a), n = o(e.responseTimeout, "Socket timeout"));
                        }, r.onerror = function() {
                            0 === r.status && (clearTimeout(a), clearTimeout(n), t({
                                content: r.responseText || "Network request failed",
                                status: r.status,
                                isTimedOut: !1
                            }));
                        }, r.onload = function() {
                            clearTimeout(a), clearTimeout(n), t({
                                content: r.responseText,
                                status: r.status,
                                isTimedOut: !1
                            });
                        }, r.send(e.data);
                    });
                }
            },
            logger: (o = H, {
                debug: function(e, t) {
                    return D >= o && console.debug(e, t), Promise.resolve();
                },
                info: function(e, t) {
                    return W >= o && console.info(e, t), Promise.resolve();
                },
                error: function(e, t) {
                    return console.error(e, t), Promise.resolve();
                }
            }),
            responsesCache: s(),
            requestsCache: s({
                serializable: !1
            }),
            hostsCache: i({
                caches: [
                    u({
                        key: "".concat("4.14.3", "-").concat(e)
                    }),
                    s()
                ]
            }),
            userAgent: j("4.14.3").add({
                segment: "Browser",
                version: "lite"
            }),
            authMode: h.WithinQueryParameters
        };
        return N(r(r(r({}, a), n), {}, {
            methods: {
                search: J,
                searchForFacetValues: E,
                multipleQueries: J,
                multipleSearchForFacetValues: E,
                customRequest: C,
                initIndex: function(e) {
                    return function(t) {
                        return k(e)(t, {
                            methods: {
                                search: F,
                                searchForFacetValues: R,
                                findAnswers: I
                            }
                        });
                    };
                }
            }
        }));
    }
    return Q.version = "4.14.3", Q;
});

},{}],"kDyli":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _createQuerySuggestionsPlugin = require("./createQuerySuggestionsPlugin");
parcelHelpers.exportAll(_createQuerySuggestionsPlugin, exports);
var _getTemplates = require("./getTemplates");
parcelHelpers.exportAll(_getTemplates, exports);

},{"./createQuerySuggestionsPlugin":"7BBqc","./getTemplates":"9IWzT","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"7BBqc":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "createQuerySuggestionsPlugin", ()=>createQuerySuggestionsPlugin);
var _autocompleteJs = require("@algolia/autocomplete-js");
var _autocompleteShared = require("@algolia/autocomplete-shared");
var _getTemplates = require("./getTemplates");
function ownKeys(object, enumerableOnly) {
    var keys = Object.keys(object);
    if (Object.getOwnPropertySymbols) {
        var symbols = Object.getOwnPropertySymbols(object);
        enumerableOnly && (symbols = symbols.filter(function(sym) {
            return Object.getOwnPropertyDescriptor(object, sym).enumerable;
        })), keys.push.apply(keys, symbols);
    }
    return keys;
}
function _objectSpread(target) {
    for(var i = 1; i < arguments.length; i++){
        var source = null != arguments[i] ? arguments[i] : {};
        i % 2 ? ownKeys(Object(source), !0).forEach(function(key) {
            _defineProperty(target, key, source[key]);
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function(key) {
            Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
        });
    }
    return target;
}
function _defineProperty(obj, key, value) {
    if (key in obj) Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
    });
    else obj[key] = value;
    return obj;
}
function _createForOfIteratorHelper(o, allowArrayLike) {
    var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"];
    if (!it) {
        if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {
            if (it) o = it;
            var i = 0;
            var F = function F() {};
            return {
                s: F,
                n: function n() {
                    if (i >= o.length) return {
                        done: true
                    };
                    return {
                        done: false,
                        value: o[i++]
                    };
                },
                e: function e(_e) {
                    throw _e;
                },
                f: F
            };
        }
        throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }
    var normalCompletion = true, didErr = false, err;
    return {
        s: function s() {
            it = it.call(o);
        },
        n: function n() {
            var step = it.next();
            normalCompletion = step.done;
            return step;
        },
        e: function e(_e2) {
            didErr = true;
            err = _e2;
        },
        f: function f() {
            try {
                if (!normalCompletion && it.return != null) it.return();
            } finally{
                if (didErr) throw err;
            }
        }
    };
}
function _unsupportedIterableToArray(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}
function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
function createQuerySuggestionsPlugin(options) {
    var _getOptions = getOptions(options), searchClient = _getOptions.searchClient, indexName = _getOptions.indexName, getSearchParams = _getOptions.getSearchParams, transformSource = _getOptions.transformSource, categoryAttribute = _getOptions.categoryAttribute, itemsWithCategories = _getOptions.itemsWithCategories, categoriesPerItem = _getOptions.categoriesPerItem;
    return {
        name: "aa.querySuggestionsPlugin",
        getSources: function getSources(_ref) {
            var query = _ref.query, setQuery = _ref.setQuery, refresh = _ref.refresh, state = _ref.state;
            function onTapAhead(item) {
                setQuery("".concat(item.query, " "));
                refresh();
            }
            return [
                transformSource({
                    source: {
                        sourceId: "querySuggestionsPlugin",
                        getItemInputValue: function getItemInputValue(_ref2) {
                            var item = _ref2.item;
                            return item.query;
                        },
                        getItems: function getItems() {
                            return (0, _autocompleteJs.getAlgoliaResults)({
                                searchClient: searchClient,
                                queries: [
                                    {
                                        indexName: indexName,
                                        query: query,
                                        params: getSearchParams({
                                            state: state
                                        })
                                    }
                                ],
                                transformResponse: function transformResponse(_ref3) {
                                    var hits = _ref3.hits;
                                    var querySuggestionsHits = hits[0];
                                    if (!query || !categoryAttribute) return querySuggestionsHits;
                                    return querySuggestionsHits.reduce(function(acc, current, i) {
                                        var items = [
                                            current
                                        ];
                                        if (i <= itemsWithCategories - 1) {
                                            var categories = (0, _autocompleteShared.getAttributeValueByPath)(current, Array.isArray(categoryAttribute) ? categoryAttribute : [
                                                categoryAttribute
                                            ]).map(function(x) {
                                                return x.value;
                                            }).slice(0, categoriesPerItem);
                                            var _iterator = _createForOfIteratorHelper(categories), _step;
                                            try {
                                                for(_iterator.s(); !(_step = _iterator.n()).done;){
                                                    var category = _step.value;
                                                    items.push(_objectSpread({
                                                        __autocomplete_qsCategory: category
                                                    }, current));
                                                }
                                            } catch (err) {
                                                _iterator.e(err);
                                            } finally{
                                                _iterator.f();
                                            }
                                        }
                                        acc.push.apply(acc, items);
                                        return acc;
                                    }, []);
                                }
                            });
                        },
                        templates: (0, _getTemplates.getTemplates)({
                            onTapAhead: onTapAhead
                        })
                    },
                    onTapAhead: onTapAhead,
                    state: state
                })
            ];
        },
        __autocomplete_pluginOptions: options
    };
}
function getOptions(options) {
    return _objectSpread({
        getSearchParams: function getSearchParams() {
            return {};
        },
        transformSource: function transformSource(_ref4) {
            var source = _ref4.source;
            return source;
        },
        itemsWithCategories: 1,
        categoriesPerItem: 1
    }, options);
}

},{"@algolia/autocomplete-js":"3Syxs","@algolia/autocomplete-shared":"59T59","./getTemplates":"9IWzT","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"9IWzT":[function(require,module,exports) {
/** @jsxRuntime classic */ /** @jsx createElement */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "getTemplates", ()=>getTemplates);
function getTemplates(_ref) {
    var onTapAhead = _ref.onTapAhead;
    return {
        item: function item(_ref2) {
            var item = _ref2.item, createElement = _ref2.createElement, components = _ref2.components;
            if (item.__autocomplete_qsCategory) return createElement("div", {
                className: "aa-ItemWrapper"
            }, createElement("div", {
                className: "aa-ItemContent aa-ItemContent--indented"
            }, createElement("div", {
                className: "aa-ItemContentSubtitle aa-ItemContentSubtitle--standalone"
            }, createElement("span", {
                className: "aa-ItemContentSubtitleIcon"
            }), createElement("span", null, "in", " ", createElement("span", {
                className: "aa-ItemContentSubtitleCategory"
            }, item.__autocomplete_qsCategory)))));
            return createElement("div", {
                className: "aa-ItemWrapper"
            }, createElement("div", {
                className: "aa-ItemContent"
            }, createElement("div", {
                className: "aa-ItemIcon aa-ItemIcon--noBorder"
            }, createElement("svg", {
                viewBox: "0 0 24 24",
                fill: "currentColor"
            }, createElement("path", {
                d: "M16.041 15.856c-0.034 0.026-0.067 0.055-0.099 0.087s-0.060 0.064-0.087 0.099c-1.258 1.213-2.969 1.958-4.855 1.958-1.933 0-3.682-0.782-4.95-2.050s-2.050-3.017-2.050-4.95 0.782-3.682 2.050-4.95 3.017-2.050 4.95-2.050 3.682 0.782 4.95 2.050 2.050 3.017 2.050 4.95c0 1.886-0.745 3.597-1.959 4.856zM21.707 20.293l-3.675-3.675c1.231-1.54 1.968-3.493 1.968-5.618 0-2.485-1.008-4.736-2.636-6.364s-3.879-2.636-6.364-2.636-4.736 1.008-6.364 2.636-2.636 3.879-2.636 6.364 1.008 4.736 2.636 6.364 3.879 2.636 6.364 2.636c2.125 0 4.078-0.737 5.618-1.968l3.675 3.675c0.391 0.391 1.024 0.391 1.414 0s0.391-1.024 0-1.414z"
            }))), createElement("div", {
                className: "aa-ItemContentBody"
            }, createElement("div", {
                className: "aa-ItemContentTitle"
            }, createElement(components.ReverseHighlight, {
                hit: item,
                attribute: "query"
            })))), createElement("div", {
                className: "aa-ItemActions"
            }, createElement("button", {
                className: "aa-ItemActionButton",
                title: 'Fill query with "'.concat(item.query, '"'),
                onClick: function onClick(event) {
                    event.preventDefault();
                    event.stopPropagation();
                    onTapAhead(item);
                }
            }, createElement("svg", {
                viewBox: "0 0 24 24",
                fill: "currentColor"
            }, createElement("path", {
                d: "M8 17v-7.586l8.293 8.293c0.391 0.391 1.024 0.391 1.414 0s0.391-1.024 0-1.414l-8.293-8.293h7.586c0.552 0 1-0.448 1-1s-0.448-1-1-1h-10c-0.552 0-1 0.448-1 1v10c0 0.552 0.448 1 1 1s1-0.448 1-1z"
            })))));
        }
    };
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"lFtzN":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _addHighlightedAttribute = require("./addHighlightedAttribute");
parcelHelpers.exportAll(_addHighlightedAttribute, exports);
var _createLocalStorageRecentSearchesPlugin = require("./createLocalStorageRecentSearchesPlugin");
parcelHelpers.exportAll(_createLocalStorageRecentSearchesPlugin, exports);
var _createRecentSearchesPlugin = require("./createRecentSearchesPlugin");
parcelHelpers.exportAll(_createRecentSearchesPlugin, exports);
var _getTemplates = require("./getTemplates");
parcelHelpers.exportAll(_getTemplates, exports);
var _search = require("./search");
parcelHelpers.exportAll(_search, exports);

},{"./addHighlightedAttribute":"iMgYs","./createLocalStorageRecentSearchesPlugin":"gT3kG","./createRecentSearchesPlugin":"2L1S7","./getTemplates":"8XaSk","./search":"CzUZD","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"iMgYs":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "addHighlightedAttribute", ()=>addHighlightedAttribute);
function ownKeys(object, enumerableOnly) {
    var keys = Object.keys(object);
    if (Object.getOwnPropertySymbols) {
        var symbols = Object.getOwnPropertySymbols(object);
        enumerableOnly && (symbols = symbols.filter(function(sym) {
            return Object.getOwnPropertyDescriptor(object, sym).enumerable;
        })), keys.push.apply(keys, symbols);
    }
    return keys;
}
function _objectSpread(target) {
    for(var i = 1; i < arguments.length; i++){
        var source = null != arguments[i] ? arguments[i] : {};
        i % 2 ? ownKeys(Object(source), !0).forEach(function(key) {
            _defineProperty(target, key, source[key]);
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function(key) {
            Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
        });
    }
    return target;
}
function _defineProperty(obj, key, value) {
    if (key in obj) Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
    });
    else obj[key] = value;
    return obj;
}
function addHighlightedAttribute(_ref) {
    var item = _ref.item, query = _ref.query;
    return _objectSpread(_objectSpread({}, item), {}, {
        _highlightResult: {
            label: {
                value: query ? item.label.replace(new RegExp(query.replace(/[-/\\^$*+?.()|[\]{}]/g, "\\$&"), "gi"), function(match) {
                    return "__aa-highlight__".concat(match, "__/aa-highlight__");
                }) : item.label
            }
        }
    });
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gT3kG":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "createLocalStorageRecentSearchesPlugin", ()=>createLocalStorageRecentSearchesPlugin);
var _constants = require("./constants");
var _createLocalStorage = require("./createLocalStorage");
var _createRecentSearchesPlugin = require("./createRecentSearchesPlugin");
var _search = require("./search");
function ownKeys(object, enumerableOnly) {
    var keys = Object.keys(object);
    if (Object.getOwnPropertySymbols) {
        var symbols = Object.getOwnPropertySymbols(object);
        enumerableOnly && (symbols = symbols.filter(function(sym) {
            return Object.getOwnPropertyDescriptor(object, sym).enumerable;
        })), keys.push.apply(keys, symbols);
    }
    return keys;
}
function _objectSpread(target) {
    for(var i = 1; i < arguments.length; i++){
        var source = null != arguments[i] ? arguments[i] : {};
        i % 2 ? ownKeys(Object(source), !0).forEach(function(key) {
            _defineProperty(target, key, source[key]);
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function(key) {
            Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
        });
    }
    return target;
}
function _defineProperty(obj, key, value) {
    if (key in obj) Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
    });
    else obj[key] = value;
    return obj;
}
function createLocalStorageRecentSearchesPlugin(options) {
    var _getOptions = getOptions(options), key = _getOptions.key, limit = _getOptions.limit, transformSource = _getOptions.transformSource, search = _getOptions.search, subscribe = _getOptions.subscribe;
    var storage = (0, _createLocalStorage.createLocalStorage)({
        key: [
            (0, _constants.LOCAL_STORAGE_KEY),
            key
        ].join(":"),
        limit: limit,
        search: search
    });
    var recentSearchesPlugin = (0, _createRecentSearchesPlugin.createRecentSearchesPlugin)({
        transformSource: transformSource,
        storage: storage,
        subscribe: subscribe
    });
    return _objectSpread(_objectSpread({}, recentSearchesPlugin), {}, {
        name: "aa.localStorageRecentSearchesPlugin",
        __autocomplete_pluginOptions: options
    });
}
function getOptions(options) {
    return _objectSpread({
        limit: 5,
        search: (0, _search.search),
        transformSource: function transformSource(_ref) {
            var source = _ref.source;
            return source;
        }
    }, options);
}

},{"./constants":"7gwd9","./createLocalStorage":"iPAw2","./createRecentSearchesPlugin":"2L1S7","./search":"CzUZD","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"7gwd9":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "LOCAL_STORAGE_KEY", ()=>LOCAL_STORAGE_KEY);
parcelHelpers.export(exports, "LOCAL_STORAGE_KEY_TEST", ()=>LOCAL_STORAGE_KEY_TEST);
var LOCAL_STORAGE_KEY = "AUTOCOMPLETE_RECENT_SEARCHES";
var LOCAL_STORAGE_KEY_TEST = "__AUTOCOMPLETE_RECENT_SEARCHES_PLUGIN_TEST_KEY__";

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"iPAw2":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "createLocalStorage", ()=>createLocalStorage);
var _getLocalStorage = require("./getLocalStorage");
function _toConsumableArray(arr) {
    return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
}
function _nonIterableSpread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _unsupportedIterableToArray(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}
function _iterableToArray(iter) {
    if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}
function _arrayWithoutHoles(arr) {
    if (Array.isArray(arr)) return _arrayLikeToArray(arr);
}
function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
function createLocalStorage(_ref) {
    var key = _ref.key, limit = _ref.limit, search = _ref.search;
    var storage = (0, _getLocalStorage.getLocalStorage)({
        key: key
    });
    return {
        onAdd: function onAdd(item) {
            storage.setItem([
                item
            ].concat(_toConsumableArray(storage.getItem())));
        },
        onRemove: function onRemove(id) {
            storage.setItem(storage.getItem().filter(function(x) {
                return x.id !== id;
            }));
        },
        getAll: function getAll() {
            var query = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "";
            return search({
                query: query,
                items: storage.getItem(),
                limit: limit
            }).slice(0, limit);
        }
    };
}

},{"./getLocalStorage":"fSk8j","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"fSk8j":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "getLocalStorage", ()=>getLocalStorage);
var _constants = require("./constants");
function isLocalStorageSupported() {
    try {
        localStorage.setItem((0, _constants.LOCAL_STORAGE_KEY_TEST), "");
        localStorage.removeItem((0, _constants.LOCAL_STORAGE_KEY_TEST));
        return true;
    } catch (error) {
        return false;
    }
}
function getLocalStorage(_ref) {
    var key = _ref.key;
    if (!isLocalStorageSupported()) return {
        setItem: function setItem() {},
        getItem: function getItem() {
            return [];
        }
    };
    return {
        setItem: function setItem(items) {
            return window.localStorage.setItem(key, JSON.stringify(items));
        },
        getItem: function getItem() {
            var items = window.localStorage.getItem(key);
            return items ? JSON.parse(items) : [];
        }
    };
}

},{"./constants":"7gwd9","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"2L1S7":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "createRecentSearchesPlugin", ()=>createRecentSearchesPlugin);
var _autocompleteShared = require("@algolia/autocomplete-shared");
var _createStorageApi = require("./createStorageApi");
var _getTemplates = require("./getTemplates");
function _toConsumableArray(arr) {
    return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
}
function _nonIterableSpread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _unsupportedIterableToArray(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}
function _iterableToArray(iter) {
    if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}
function _arrayWithoutHoles(arr) {
    if (Array.isArray(arr)) return _arrayLikeToArray(arr);
}
function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
function ownKeys(object, enumerableOnly) {
    var keys = Object.keys(object);
    if (Object.getOwnPropertySymbols) {
        var symbols = Object.getOwnPropertySymbols(object);
        enumerableOnly && (symbols = symbols.filter(function(sym) {
            return Object.getOwnPropertyDescriptor(object, sym).enumerable;
        })), keys.push.apply(keys, symbols);
    }
    return keys;
}
function _objectSpread(target) {
    for(var i = 1; i < arguments.length; i++){
        var source = null != arguments[i] ? arguments[i] : {};
        i % 2 ? ownKeys(Object(source), !0).forEach(function(key) {
            _defineProperty(target, key, source[key]);
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function(key) {
            Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
        });
    }
    return target;
}
function _defineProperty(obj, key, value) {
    if (key in obj) Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
    });
    else obj[key] = value;
    return obj;
}
function getDefaultSubcribe(store) {
    return function subscribe(_ref) {
        var onSelect = _ref.onSelect;
        onSelect(function(_ref2) {
            var item = _ref2.item, state = _ref2.state, source = _ref2.source;
            var inputValue = source.getItemInputValue({
                item: item,
                state: state
            });
            if (source.sourceId === "querySuggestionsPlugin" && inputValue) {
                var recentItem = {
                    id: inputValue,
                    label: inputValue,
                    category: item.__autocomplete_qsCategory
                };
                store.addItem(recentItem);
            }
        });
    };
}
function createRecentSearchesPlugin(options) {
    var _getOptions = getOptions(options), storage = _getOptions.storage, transformSource = _getOptions.transformSource, subscribe = _getOptions.subscribe;
    var store = (0, _createStorageApi.createStorageApi)(storage);
    var lastItemsRef = (0, _autocompleteShared.createRef)([]);
    return {
        name: "aa.recentSearchesPlugin",
        subscribe: subscribe !== null && subscribe !== void 0 ? subscribe : getDefaultSubcribe(store),
        onSubmit: function onSubmit(_ref3) {
            var state = _ref3.state;
            var query = state.query;
            if (query) {
                var recentItem = {
                    id: query,
                    label: query
                };
                store.addItem(recentItem);
            }
        },
        getSources: function getSources(_ref4) {
            var query = _ref4.query, setQuery = _ref4.setQuery, refresh = _ref4.refresh, state = _ref4.state;
            lastItemsRef.current = store.getAll(query);
            function onRemove(id) {
                store.removeItem(id);
                refresh();
            }
            function onTapAhead(item) {
                setQuery(item.label);
                refresh();
            }
            return Promise.resolve(lastItemsRef.current).then(function(items) {
                if (items.length === 0) return [];
                return [
                    transformSource({
                        source: {
                            sourceId: "recentSearchesPlugin",
                            getItemInputValue: function getItemInputValue(_ref5) {
                                var item = _ref5.item;
                                return item.label;
                            },
                            getItems: function getItems() {
                                return items;
                            },
                            templates: (0, _getTemplates.getTemplates)({
                                onRemove: onRemove,
                                onTapAhead: onTapAhead
                            })
                        },
                        onRemove: onRemove,
                        onTapAhead: onTapAhead,
                        state: state
                    })
                ];
            });
        },
        data: _objectSpread(_objectSpread({}, store), {}, {
            // @ts-ignore SearchOptions `facetFilters` is ReadonlyArray
            getAlgoliaSearchParams: function getAlgoliaSearchParams() {
                var _params$facetFilters, _params$hitsPerPage;
                var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
                // If the items returned by `store.getAll` are contained in a Promise,
                // we cannot provide the search params in time when this function is called
                // because we need to resolve the promise before getting the value.
                if (!Array.isArray(lastItemsRef.current)) {
                    (0, _autocompleteShared.warn)(false, "The `getAlgoliaSearchParams` function is not supported with storages that return promises in `getAll`.");
                    return params;
                }
                return _objectSpread(_objectSpread({}, params), {}, {
                    facetFilters: [].concat(_toConsumableArray((_params$facetFilters = params.facetFilters) !== null && _params$facetFilters !== void 0 ? _params$facetFilters : []), _toConsumableArray(lastItemsRef.current.map(function(item) {
                        return [
                            "objectID:-".concat(item.label)
                        ];
                    }))),
                    hitsPerPage: Math.max(1, ((_params$hitsPerPage = params.hitsPerPage) !== null && _params$hitsPerPage !== void 0 ? _params$hitsPerPage : 10) - lastItemsRef.current.length)
                });
            }
        }),
        __autocomplete_pluginOptions: options
    };
}
function getOptions(options) {
    return _objectSpread({
        transformSource: function transformSource(_ref6) {
            var source = _ref6.source;
            return source;
        }
    }, options);
}

},{"@algolia/autocomplete-shared":"59T59","./createStorageApi":"gg2wy","./getTemplates":"8XaSk","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gg2wy":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "createStorageApi", ()=>createStorageApi);
function createStorageApi(storage) {
    return {
        addItem: function addItem(item) {
            storage.onRemove(item.id);
            storage.onAdd(item);
        },
        removeItem: function removeItem(id) {
            storage.onRemove(id);
        },
        getAll: function getAll(query) {
            return storage.getAll(query);
        }
    };
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"8XaSk":[function(require,module,exports) {
/** @jsxRuntime classic */ /** @jsx createElement */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "getTemplates", ()=>getTemplates);
function getTemplates(_ref) {
    var onRemove = _ref.onRemove, onTapAhead = _ref.onTapAhead;
    return {
        item: function item(_ref2) {
            var item = _ref2.item, createElement = _ref2.createElement, components = _ref2.components;
            return createElement("div", {
                className: "aa-ItemWrapper"
            }, createElement("div", {
                className: "aa-ItemContent"
            }, createElement("div", {
                className: "aa-ItemIcon aa-ItemIcon--noBorder"
            }, createElement("svg", {
                viewBox: "0 0 24 24",
                fill: "currentColor"
            }, createElement("path", {
                d: "M12.516 6.984v5.25l4.5 2.672-0.75 1.266-5.25-3.188v-6h1.5zM12 20.016q3.281 0 5.648-2.367t2.367-5.648-2.367-5.648-5.648-2.367-5.648 2.367-2.367 5.648 2.367 5.648 5.648 2.367zM12 2.016q4.125 0 7.055 2.93t2.93 7.055-2.93 7.055-7.055 2.93-7.055-2.93-2.93-7.055 2.93-7.055 7.055-2.93z"
            }))), createElement("div", {
                className: "aa-ItemContentBody"
            }, createElement("div", {
                className: "aa-ItemContentTitle"
            }, createElement(components.ReverseHighlight, {
                hit: item,
                attribute: "label"
            }), item.category && createElement("span", {
                className: "aa-ItemContentSubtitle aa-ItemContentSubtitle--inline"
            }, createElement("span", {
                className: "aa-ItemContentSubtitleIcon"
            }), " in", " ", createElement("span", {
                className: "aa-ItemContentSubtitleCategory"
            }, item.category))))), createElement("div", {
                className: "aa-ItemActions"
            }, createElement("button", {
                className: "aa-ItemActionButton",
                title: "Remove this search",
                onClick: function onClick(event) {
                    event.preventDefault();
                    event.stopPropagation();
                    onRemove(item.id);
                }
            }, createElement("svg", {
                viewBox: "0 0 24 24",
                fill: "currentColor"
            }, createElement("path", {
                d: "M18 7v13c0 0.276-0.111 0.525-0.293 0.707s-0.431 0.293-0.707 0.293h-10c-0.276 0-0.525-0.111-0.707-0.293s-0.293-0.431-0.293-0.707v-13zM17 5v-1c0-0.828-0.337-1.58-0.879-2.121s-1.293-0.879-2.121-0.879h-4c-0.828 0-1.58 0.337-2.121 0.879s-0.879 1.293-0.879 2.121v1h-4c-0.552 0-1 0.448-1 1s0.448 1 1 1h1v13c0 0.828 0.337 1.58 0.879 2.121s1.293 0.879 2.121 0.879h10c0.828 0 1.58-0.337 2.121-0.879s0.879-1.293 0.879-2.121v-13h1c0.552 0 1-0.448 1-1s-0.448-1-1-1zM9 5v-1c0-0.276 0.111-0.525 0.293-0.707s0.431-0.293 0.707-0.293h4c0.276 0 0.525 0.111 0.707 0.293s0.293 0.431 0.293 0.707v1zM9 11v6c0 0.552 0.448 1 1 1s1-0.448 1-1v-6c0-0.552-0.448-1-1-1s-1 0.448-1 1zM13 11v6c0 0.552 0.448 1 1 1s1-0.448 1-1v-6c0-0.552-0.448-1-1-1s-1 0.448-1 1z"
            }))), createElement("button", {
                className: "aa-ItemActionButton",
                title: 'Fill query with "'.concat(item.label, '"'),
                onClick: function onClick(event) {
                    event.preventDefault();
                    event.stopPropagation();
                    onTapAhead(item);
                }
            }, createElement("svg", {
                viewBox: "0 0 24 24",
                fill: "currentColor"
            }, createElement("path", {
                d: "M8 17v-7.586l8.293 8.293c0.391 0.391 1.024 0.391 1.414 0s0.391-1.024 0-1.414l-8.293-8.293h7.586c0.552 0 1-0.448 1-1s-0.448-1-1-1h-10c-0.552 0-1 0.448-1 1v10c0 0.552 0.448 1 1 1s1-0.448 1-1z"
            })))));
        }
    };
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"CzUZD":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "search", ()=>search);
var _addHighlightedAttribute = require("./addHighlightedAttribute");
function search(_ref) {
    var query = _ref.query, items = _ref.items, limit = _ref.limit;
    if (!query) return items.slice(0, limit).map(function(item) {
        return (0, _addHighlightedAttribute.addHighlightedAttribute)({
            item: item,
            query: query
        });
    });
    return items.filter(function(item) {
        return item.label.toLowerCase().includes(query.toLowerCase());
    }).slice(0, limit).map(function(item) {
        return (0, _addHighlightedAttribute.addHighlightedAttribute)({
            item: item,
            query: query
        });
    });
}

},{"./addHighlightedAttribute":"iMgYs","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}]},["lKzq4","bNKaB"], "bNKaB", "parcelRequire94c2")

//# sourceMappingURL=index.0641b553.js.map
