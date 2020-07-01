(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("PushapeJS", [], factory);
	else if(typeof exports === 'object')
		exports["PushapeJS"] = factory();
	else
		root["PushapeJS"] = factory();
})(window, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 9);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() { return __decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function() { return __param; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function() { return __metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function() { return __generator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__createBinding", function() { return __createBinding; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function() { return __exportStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return __spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function() { return __spreadArrays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function() { return __await; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function() { return __asyncGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function() { return __asyncDelegator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function() { return __asyncValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() { return __makeTemplateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function() { return __importStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function() { return __importDefault; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__classPrivateFieldGet", function() { return __classPrivateFieldGet; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__classPrivateFieldSet", function() { return __classPrivateFieldSet; });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __createBinding(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}

function __exportStar(m, exports) {
    for (var p in m) if (p !== "default" && !exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}

function __classPrivateFieldGet(receiver, privateMap) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to get private field on non-instance");
    }
    return privateMap.get(receiver);
}

function __classPrivateFieldSet(receiver, privateMap, value) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to set private field on non-instance");
    }
    privateMap.set(receiver, value);
    return value;
}


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

(function (global, factory) {
   true ? factory(exports) :
  undefined;
}(this, function (exports) { 'use strict';

  function toArray(arr) {
    return Array.prototype.slice.call(arr);
  }

  function promisifyRequest(request) {
    return new Promise(function(resolve, reject) {
      request.onsuccess = function() {
        resolve(request.result);
      };

      request.onerror = function() {
        reject(request.error);
      };
    });
  }

  function promisifyRequestCall(obj, method, args) {
    var request;
    var p = new Promise(function(resolve, reject) {
      request = obj[method].apply(obj, args);
      promisifyRequest(request).then(resolve, reject);
    });

    p.request = request;
    return p;
  }

  function promisifyCursorRequestCall(obj, method, args) {
    var p = promisifyRequestCall(obj, method, args);
    return p.then(function(value) {
      if (!value) return;
      return new Cursor(value, p.request);
    });
  }

  function proxyProperties(ProxyClass, targetProp, properties) {
    properties.forEach(function(prop) {
      Object.defineProperty(ProxyClass.prototype, prop, {
        get: function() {
          return this[targetProp][prop];
        },
        set: function(val) {
          this[targetProp][prop] = val;
        }
      });
    });
  }

  function proxyRequestMethods(ProxyClass, targetProp, Constructor, properties) {
    properties.forEach(function(prop) {
      if (!(prop in Constructor.prototype)) return;
      ProxyClass.prototype[prop] = function() {
        return promisifyRequestCall(this[targetProp], prop, arguments);
      };
    });
  }

  function proxyMethods(ProxyClass, targetProp, Constructor, properties) {
    properties.forEach(function(prop) {
      if (!(prop in Constructor.prototype)) return;
      ProxyClass.prototype[prop] = function() {
        return this[targetProp][prop].apply(this[targetProp], arguments);
      };
    });
  }

  function proxyCursorRequestMethods(ProxyClass, targetProp, Constructor, properties) {
    properties.forEach(function(prop) {
      if (!(prop in Constructor.prototype)) return;
      ProxyClass.prototype[prop] = function() {
        return promisifyCursorRequestCall(this[targetProp], prop, arguments);
      };
    });
  }

  function Index(index) {
    this._index = index;
  }

  proxyProperties(Index, '_index', [
    'name',
    'keyPath',
    'multiEntry',
    'unique'
  ]);

  proxyRequestMethods(Index, '_index', IDBIndex, [
    'get',
    'getKey',
    'getAll',
    'getAllKeys',
    'count'
  ]);

  proxyCursorRequestMethods(Index, '_index', IDBIndex, [
    'openCursor',
    'openKeyCursor'
  ]);

  function Cursor(cursor, request) {
    this._cursor = cursor;
    this._request = request;
  }

  proxyProperties(Cursor, '_cursor', [
    'direction',
    'key',
    'primaryKey',
    'value'
  ]);

  proxyRequestMethods(Cursor, '_cursor', IDBCursor, [
    'update',
    'delete'
  ]);

  // proxy 'next' methods
  ['advance', 'continue', 'continuePrimaryKey'].forEach(function(methodName) {
    if (!(methodName in IDBCursor.prototype)) return;
    Cursor.prototype[methodName] = function() {
      var cursor = this;
      var args = arguments;
      return Promise.resolve().then(function() {
        cursor._cursor[methodName].apply(cursor._cursor, args);
        return promisifyRequest(cursor._request).then(function(value) {
          if (!value) return;
          return new Cursor(value, cursor._request);
        });
      });
    };
  });

  function ObjectStore(store) {
    this._store = store;
  }

  ObjectStore.prototype.createIndex = function() {
    return new Index(this._store.createIndex.apply(this._store, arguments));
  };

  ObjectStore.prototype.index = function() {
    return new Index(this._store.index.apply(this._store, arguments));
  };

  proxyProperties(ObjectStore, '_store', [
    'name',
    'keyPath',
    'indexNames',
    'autoIncrement'
  ]);

  proxyRequestMethods(ObjectStore, '_store', IDBObjectStore, [
    'put',
    'add',
    'delete',
    'clear',
    'get',
    'getAll',
    'getKey',
    'getAllKeys',
    'count'
  ]);

  proxyCursorRequestMethods(ObjectStore, '_store', IDBObjectStore, [
    'openCursor',
    'openKeyCursor'
  ]);

  proxyMethods(ObjectStore, '_store', IDBObjectStore, [
    'deleteIndex'
  ]);

  function Transaction(idbTransaction) {
    this._tx = idbTransaction;
    this.complete = new Promise(function(resolve, reject) {
      idbTransaction.oncomplete = function() {
        resolve();
      };
      idbTransaction.onerror = function() {
        reject(idbTransaction.error);
      };
      idbTransaction.onabort = function() {
        reject(idbTransaction.error);
      };
    });
  }

  Transaction.prototype.objectStore = function() {
    return new ObjectStore(this._tx.objectStore.apply(this._tx, arguments));
  };

  proxyProperties(Transaction, '_tx', [
    'objectStoreNames',
    'mode'
  ]);

  proxyMethods(Transaction, '_tx', IDBTransaction, [
    'abort'
  ]);

  function UpgradeDB(db, oldVersion, transaction) {
    this._db = db;
    this.oldVersion = oldVersion;
    this.transaction = new Transaction(transaction);
  }

  UpgradeDB.prototype.createObjectStore = function() {
    return new ObjectStore(this._db.createObjectStore.apply(this._db, arguments));
  };

  proxyProperties(UpgradeDB, '_db', [
    'name',
    'version',
    'objectStoreNames'
  ]);

  proxyMethods(UpgradeDB, '_db', IDBDatabase, [
    'deleteObjectStore',
    'close'
  ]);

  function DB(db) {
    this._db = db;
  }

  DB.prototype.transaction = function() {
    return new Transaction(this._db.transaction.apply(this._db, arguments));
  };

  proxyProperties(DB, '_db', [
    'name',
    'version',
    'objectStoreNames'
  ]);

  proxyMethods(DB, '_db', IDBDatabase, [
    'close'
  ]);

  // Add cursor iterators
  // TODO: remove this once browsers do the right thing with promises
  ['openCursor', 'openKeyCursor'].forEach(function(funcName) {
    [ObjectStore, Index].forEach(function(Constructor) {
      // Don't create iterateKeyCursor if openKeyCursor doesn't exist.
      if (!(funcName in Constructor.prototype)) return;

      Constructor.prototype[funcName.replace('open', 'iterate')] = function() {
        var args = toArray(arguments);
        var callback = args[args.length - 1];
        var nativeObject = this._store || this._index;
        var request = nativeObject[funcName].apply(nativeObject, args.slice(0, -1));
        request.onsuccess = function() {
          callback(request.result);
        };
      };
    });
  });

  // polyfill getAll
  [Index, ObjectStore].forEach(function(Constructor) {
    if (Constructor.prototype.getAll) return;
    Constructor.prototype.getAll = function(query, count) {
      var instance = this;
      var items = [];

      return new Promise(function(resolve) {
        instance.iterateCursor(query, function(cursor) {
          if (!cursor) {
            resolve(items);
            return;
          }
          items.push(cursor.value);

          if (count !== undefined && items.length == count) {
            resolve(items);
            return;
          }
          cursor.continue();
        });
      });
    };
  });

  function openDb(name, version, upgradeCallback) {
    var p = promisifyRequestCall(indexedDB, 'open', [name, version]);
    var request = p.request;

    if (request) {
      request.onupgradeneeded = function(event) {
        if (upgradeCallback) {
          upgradeCallback(new UpgradeDB(request.result, event.oldVersion, request.transaction));
        }
      };
    }

    return p.then(function(db) {
      return new DB(db);
    });
  }

  function deleteDb(name) {
    return promisifyRequestCall(indexedDB, 'deleteDatabase', [name]);
  }

  exports.openDb = openDb;
  exports.deleteDb = deleteDb;

  Object.defineProperty(exports, '__esModule', { value: true });

}));


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {

Object.defineProperty(exports, '__esModule', { value: true });

var tslib = __webpack_require__(0);

/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @fileoverview Firebase constants.  Some of these (@defines) can be overridden at compile-time.
 */
var CONSTANTS = {
    /**
     * @define {boolean} Whether this is the client Node.js SDK.
     */
    NODE_CLIENT: false,
    /**
     * @define {boolean} Whether this is the Admin Node.js SDK.
     */
    NODE_ADMIN: false,
    /**
     * Firebase SDK Version
     */
    SDK_VERSION: '${JSCORE_VERSION}'
};

/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * Throws an error if the provided assertion is falsy
 */
var assert = function (assertion, message) {
    if (!assertion) {
        throw assertionError(message);
    }
};
/**
 * Returns an Error object suitable for throwing.
 */
var assertionError = function (message) {
    return new Error('Firebase Database (' +
        CONSTANTS.SDK_VERSION +
        ') INTERNAL ASSERT FAILED: ' +
        message);
};

/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var stringToByteArray = function (str) {
    // TODO(user): Use native implementations if/when available
    var out = [];
    var p = 0;
    for (var i = 0; i < str.length; i++) {
        var c = str.charCodeAt(i);
        if (c < 128) {
            out[p++] = c;
        }
        else if (c < 2048) {
            out[p++] = (c >> 6) | 192;
            out[p++] = (c & 63) | 128;
        }
        else if ((c & 0xfc00) === 0xd800 &&
            i + 1 < str.length &&
            (str.charCodeAt(i + 1) & 0xfc00) === 0xdc00) {
            // Surrogate Pair
            c = 0x10000 + ((c & 0x03ff) << 10) + (str.charCodeAt(++i) & 0x03ff);
            out[p++] = (c >> 18) | 240;
            out[p++] = ((c >> 12) & 63) | 128;
            out[p++] = ((c >> 6) & 63) | 128;
            out[p++] = (c & 63) | 128;
        }
        else {
            out[p++] = (c >> 12) | 224;
            out[p++] = ((c >> 6) & 63) | 128;
            out[p++] = (c & 63) | 128;
        }
    }
    return out;
};
/**
 * Turns an array of numbers into the string given by the concatenation of the
 * characters to which the numbers correspond.
 * @param bytes Array of numbers representing characters.
 * @return Stringification of the array.
 */
var byteArrayToString = function (bytes) {
    // TODO(user): Use native implementations if/when available
    var out = [];
    var pos = 0, c = 0;
    while (pos < bytes.length) {
        var c1 = bytes[pos++];
        if (c1 < 128) {
            out[c++] = String.fromCharCode(c1);
        }
        else if (c1 > 191 && c1 < 224) {
            var c2 = bytes[pos++];
            out[c++] = String.fromCharCode(((c1 & 31) << 6) | (c2 & 63));
        }
        else if (c1 > 239 && c1 < 365) {
            // Surrogate Pair
            var c2 = bytes[pos++];
            var c3 = bytes[pos++];
            var c4 = bytes[pos++];
            var u = (((c1 & 7) << 18) | ((c2 & 63) << 12) | ((c3 & 63) << 6) | (c4 & 63)) -
                0x10000;
            out[c++] = String.fromCharCode(0xd800 + (u >> 10));
            out[c++] = String.fromCharCode(0xdc00 + (u & 1023));
        }
        else {
            var c2 = bytes[pos++];
            var c3 = bytes[pos++];
            out[c++] = String.fromCharCode(((c1 & 15) << 12) | ((c2 & 63) << 6) | (c3 & 63));
        }
    }
    return out.join('');
};
// We define it as an object literal instead of a class because a class compiled down to es5 can't
// be treeshaked. https://github.com/rollup/rollup/issues/1691
// Static lookup maps, lazily populated by init_()
var base64 = {
    /**
     * Maps bytes to characters.
     */
    byteToCharMap_: null,
    /**
     * Maps characters to bytes.
     */
    charToByteMap_: null,
    /**
     * Maps bytes to websafe characters.
     * @private
     */
    byteToCharMapWebSafe_: null,
    /**
     * Maps websafe characters to bytes.
     * @private
     */
    charToByteMapWebSafe_: null,
    /**
     * Our default alphabet, shared between
     * ENCODED_VALS and ENCODED_VALS_WEBSAFE
     */
    ENCODED_VALS_BASE: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ' + 'abcdefghijklmnopqrstuvwxyz' + '0123456789',
    /**
     * Our default alphabet. Value 64 (=) is special; it means "nothing."
     */
    get ENCODED_VALS() {
        return this.ENCODED_VALS_BASE + '+/=';
    },
    /**
     * Our websafe alphabet.
     */
    get ENCODED_VALS_WEBSAFE() {
        return this.ENCODED_VALS_BASE + '-_.';
    },
    /**
     * Whether this browser supports the atob and btoa functions. This extension
     * started at Mozilla but is now implemented by many browsers. We use the
     * ASSUME_* variables to avoid pulling in the full useragent detection library
     * but still allowing the standard per-browser compilations.
     *
     */
    HAS_NATIVE_SUPPORT: typeof atob === 'function',
    /**
     * Base64-encode an array of bytes.
     *
     * @param input An array of bytes (numbers with
     *     value in [0, 255]) to encode.
     * @param webSafe Boolean indicating we should use the
     *     alternative alphabet.
     * @return The base64 encoded string.
     */
    encodeByteArray: function (input, webSafe) {
        if (!Array.isArray(input)) {
            throw Error('encodeByteArray takes an array as a parameter');
        }
        this.init_();
        var byteToCharMap = webSafe
            ? this.byteToCharMapWebSafe_
            : this.byteToCharMap_;
        var output = [];
        for (var i = 0; i < input.length; i += 3) {
            var byte1 = input[i];
            var haveByte2 = i + 1 < input.length;
            var byte2 = haveByte2 ? input[i + 1] : 0;
            var haveByte3 = i + 2 < input.length;
            var byte3 = haveByte3 ? input[i + 2] : 0;
            var outByte1 = byte1 >> 2;
            var outByte2 = ((byte1 & 0x03) << 4) | (byte2 >> 4);
            var outByte3 = ((byte2 & 0x0f) << 2) | (byte3 >> 6);
            var outByte4 = byte3 & 0x3f;
            if (!haveByte3) {
                outByte4 = 64;
                if (!haveByte2) {
                    outByte3 = 64;
                }
            }
            output.push(byteToCharMap[outByte1], byteToCharMap[outByte2], byteToCharMap[outByte3], byteToCharMap[outByte4]);
        }
        return output.join('');
    },
    /**
     * Base64-encode a string.
     *
     * @param input A string to encode.
     * @param webSafe If true, we should use the
     *     alternative alphabet.
     * @return The base64 encoded string.
     */
    encodeString: function (input, webSafe) {
        // Shortcut for Mozilla browsers that implement
        // a native base64 encoder in the form of "btoa/atob"
        if (this.HAS_NATIVE_SUPPORT && !webSafe) {
            return btoa(input);
        }
        return this.encodeByteArray(stringToByteArray(input), webSafe);
    },
    /**
     * Base64-decode a string.
     *
     * @param input to decode.
     * @param webSafe True if we should use the
     *     alternative alphabet.
     * @return string representing the decoded value.
     */
    decodeString: function (input, webSafe) {
        // Shortcut for Mozilla browsers that implement
        // a native base64 encoder in the form of "btoa/atob"
        if (this.HAS_NATIVE_SUPPORT && !webSafe) {
            return atob(input);
        }
        return byteArrayToString(this.decodeStringToByteArray(input, webSafe));
    },
    /**
     * Base64-decode a string.
     *
     * In base-64 decoding, groups of four characters are converted into three
     * bytes.  If the encoder did not apply padding, the input length may not
     * be a multiple of 4.
     *
     * In this case, the last group will have fewer than 4 characters, and
     * padding will be inferred.  If the group has one or two characters, it decodes
     * to one byte.  If the group has three characters, it decodes to two bytes.
     *
     * @param input Input to decode.
     * @param webSafe True if we should use the web-safe alphabet.
     * @return bytes representing the decoded value.
     */
    decodeStringToByteArray: function (input, webSafe) {
        this.init_();
        var charToByteMap = webSafe
            ? this.charToByteMapWebSafe_
            : this.charToByteMap_;
        var output = [];
        for (var i = 0; i < input.length;) {
            var byte1 = charToByteMap[input.charAt(i++)];
            var haveByte2 = i < input.length;
            var byte2 = haveByte2 ? charToByteMap[input.charAt(i)] : 0;
            ++i;
            var haveByte3 = i < input.length;
            var byte3 = haveByte3 ? charToByteMap[input.charAt(i)] : 64;
            ++i;
            var haveByte4 = i < input.length;
            var byte4 = haveByte4 ? charToByteMap[input.charAt(i)] : 64;
            ++i;
            if (byte1 == null || byte2 == null || byte3 == null || byte4 == null) {
                throw Error();
            }
            var outByte1 = (byte1 << 2) | (byte2 >> 4);
            output.push(outByte1);
            if (byte3 !== 64) {
                var outByte2 = ((byte2 << 4) & 0xf0) | (byte3 >> 2);
                output.push(outByte2);
                if (byte4 !== 64) {
                    var outByte3 = ((byte3 << 6) & 0xc0) | byte4;
                    output.push(outByte3);
                }
            }
        }
        return output;
    },
    /**
     * Lazy static initialization function. Called before
     * accessing any of the static map variables.
     * @private
     */
    init_: function () {
        if (!this.byteToCharMap_) {
            this.byteToCharMap_ = {};
            this.charToByteMap_ = {};
            this.byteToCharMapWebSafe_ = {};
            this.charToByteMapWebSafe_ = {};
            // We want quick mappings back and forth, so we precompute two maps.
            for (var i = 0; i < this.ENCODED_VALS.length; i++) {
                this.byteToCharMap_[i] = this.ENCODED_VALS.charAt(i);
                this.charToByteMap_[this.byteToCharMap_[i]] = i;
                this.byteToCharMapWebSafe_[i] = this.ENCODED_VALS_WEBSAFE.charAt(i);
                this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[i]] = i;
                // Be forgiving when decoding and correctly decode both encodings.
                if (i >= this.ENCODED_VALS_BASE.length) {
                    this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(i)] = i;
                    this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(i)] = i;
                }
            }
        }
    }
};
/**
 * URL-safe base64 encoding
 */
var base64Encode = function (str) {
    var utf8Bytes = stringToByteArray(str);
    return base64.encodeByteArray(utf8Bytes, true);
};
/**
 * URL-safe base64 decoding
 *
 * NOTE: DO NOT use the global atob() function - it does NOT support the
 * base64Url variant encoding.
 *
 * @param str To be decoded
 * @return Decoded result, if possible
 */
var base64Decode = function (str) {
    try {
        return base64.decodeString(str, true);
    }
    catch (e) {
        console.error('base64Decode failed: ', e);
    }
    return null;
};

/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * Do a deep-copy of basic JavaScript Objects or Arrays.
 */
function deepCopy(value) {
    return deepExtend(undefined, value);
}
/**
 * Copy properties from source to target (recursively allows extension
 * of Objects and Arrays).  Scalar values in the target are over-written.
 * If target is undefined, an object of the appropriate type will be created
 * (and returned).
 *
 * We recursively copy all child properties of plain Objects in the source- so
 * that namespace- like dictionaries are merged.
 *
 * Note that the target can be a function, in which case the properties in
 * the source Object are copied onto it as static properties of the Function.
 */
function deepExtend(target, source) {
    if (!(source instanceof Object)) {
        return source;
    }
    switch (source.constructor) {
        case Date:
            // Treat Dates like scalars; if the target date object had any child
            // properties - they will be lost!
            var dateValue = source;
            return new Date(dateValue.getTime());
        case Object:
            if (target === undefined) {
                target = {};
            }
            break;
        case Array:
            // Always copy the array source and overwrite the target.
            target = [];
            break;
        default:
            // Not a plain Object - treat it as a scalar.
            return source;
    }
    for (var prop in source) {
        if (!source.hasOwnProperty(prop)) {
            continue;
        }
        target[prop] = deepExtend(target[prop], source[prop]);
    }
    return target;
}

/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var Deferred = /** @class */ (function () {
    function Deferred() {
        var _this = this;
        this.reject = function () { };
        this.resolve = function () { };
        this.promise = new Promise(function (resolve, reject) {
            _this.resolve = resolve;
            _this.reject = reject;
        });
    }
    /**
     * Our API internals are not promiseified and cannot because our callback APIs have subtle expectations around
     * invoking promises inline, which Promises are forbidden to do. This method accepts an optional node-style callback
     * and returns a node-style callback which will resolve or reject the Deferred's promise.
     */
    Deferred.prototype.wrapCallback = function (callback) {
        var _this = this;
        return function (error, value) {
            if (error) {
                _this.reject(error);
            }
            else {
                _this.resolve(value);
            }
            if (typeof callback === 'function') {
                // Attaching noop handler just in case developer wasn't expecting
                // promises
                _this.promise.catch(function () { });
                // Some of our callbacks don't expect a value and our own tests
                // assert that the parameter length is 1
                if (callback.length === 1) {
                    callback(error);
                }
                else {
                    callback(error, value);
                }
            }
        };
    };
    return Deferred;
}());

/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * Returns navigator.userAgent string or '' if it's not defined.
 * @return user agent string
 */
function getUA() {
    if (typeof navigator !== 'undefined' &&
        typeof navigator['userAgent'] === 'string') {
        return navigator['userAgent'];
    }
    else {
        return '';
    }
}
/**
 * Detect Cordova / PhoneGap / Ionic frameworks on a mobile device.
 *
 * Deliberately does not rely on checking `file://` URLs (as this fails PhoneGap
 * in the Ripple emulator) nor Cordova `onDeviceReady`, which would normally
 * wait for a callback.
 */
function isMobileCordova() {
    return (typeof window !== 'undefined' &&
        // @ts-ignore Setting up an broadly applicable index signature for Window
        // just to deal with this case would probably be a bad idea.
        !!(window['cordova'] || window['phonegap'] || window['PhoneGap']) &&
        /ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(getUA()));
}
/**
 * Detect Node.js.
 *
 * @return true if Node.js environment is detected.
 */
// Node detection logic from: https://github.com/iliakan/detect-node/
function isNode() {
    try {
        return (Object.prototype.toString.call(global.process) === '[object process]');
    }
    catch (e) {
        return false;
    }
}
/**
 * Detect Browser Environment
 */
function isBrowser() {
    return typeof self === 'object' && self.self === self;
}
function isBrowserExtension() {
    var runtime = typeof chrome === 'object'
        ? chrome.runtime
        : typeof browser === 'object'
            ? browser.runtime
            : undefined;
    return typeof runtime === 'object' && runtime.id !== undefined;
}
/**
 * Detect React Native.
 *
 * @return true if ReactNative environment is detected.
 */
function isReactNative() {
    return (typeof navigator === 'object' && navigator['product'] === 'ReactNative');
}
/** Detects Electron apps. */
function isElectron() {
    return getUA().indexOf('Electron/') >= 0;
}
/** Detects Internet Explorer. */
function isIE() {
    var ua = getUA();
    return ua.indexOf('MSIE ') >= 0 || ua.indexOf('Trident/') >= 0;
}
/** Detects Universal Windows Platform apps. */
function isUWP() {
    return getUA().indexOf('MSAppHost/') >= 0;
}
/**
 * Detect whether the current SDK build is the Node version.
 *
 * @return true if it's the Node SDK build.
 */
function isNodeSdk() {
    return CONSTANTS.NODE_CLIENT === true || CONSTANTS.NODE_ADMIN === true;
}
/** Returns true if we are running in Safari. */
function isSafari() {
    return (!isNode() &&
        navigator.userAgent.includes('Safari') &&
        !navigator.userAgent.includes('Chrome'));
}

/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var ERROR_NAME = 'FirebaseError';
// Based on code from:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error#Custom_Error_Types
var FirebaseError = /** @class */ (function (_super) {
    tslib.__extends(FirebaseError, _super);
    function FirebaseError(code, message) {
        var _this = _super.call(this, message) || this;
        _this.code = code;
        _this.name = ERROR_NAME;
        // Fix For ES5
        // https://github.com/Microsoft/TypeScript-wiki/blob/master/Breaking-Changes.md#extending-built-ins-like-error-array-and-map-may-no-longer-work
        Object.setPrototypeOf(_this, FirebaseError.prototype);
        // Maintains proper stack trace for where our error was thrown.
        // Only available on V8.
        if (Error.captureStackTrace) {
            Error.captureStackTrace(_this, ErrorFactory.prototype.create);
        }
        return _this;
    }
    return FirebaseError;
}(Error));
var ErrorFactory = /** @class */ (function () {
    function ErrorFactory(service, serviceName, errors) {
        this.service = service;
        this.serviceName = serviceName;
        this.errors = errors;
    }
    ErrorFactory.prototype.create = function (code) {
        var data = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            data[_i - 1] = arguments[_i];
        }
        var customData = data[0] || {};
        var fullCode = this.service + "/" + code;
        var template = this.errors[code];
        var message = template ? replaceTemplate(template, customData) : 'Error';
        // Service Name: Error message (service/code).
        var fullMessage = this.serviceName + ": " + message + " (" + fullCode + ").";
        var error = new FirebaseError(fullCode, fullMessage);
        // Keys with an underscore at the end of their name are not included in
        // error.data for some reason.
        // TODO: Replace with Object.entries when lib is updated to es2017.
        for (var _a = 0, _b = Object.keys(customData); _a < _b.length; _a++) {
            var key = _b[_a];
            if (key.slice(-1) !== '_') {
                if (key in error) {
                    console.warn("Overwriting FirebaseError base field \"" + key + "\" can cause unexpected behavior.");
                }
                error[key] = customData[key];
            }
        }
        return error;
    };
    return ErrorFactory;
}());
function replaceTemplate(template, data) {
    return template.replace(PATTERN, function (_, key) {
        var value = data[key];
        return value != null ? value.toString() : "<" + key + "?>";
    });
}
var PATTERN = /\{\$([^}]+)}/g;

/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * Evaluates a JSON string into a javascript object.
 *
 * @param {string} str A string containing JSON.
 * @return {*} The javascript object representing the specified JSON.
 */
function jsonEval(str) {
    return JSON.parse(str);
}
/**
 * Returns JSON representing a javascript object.
 * @param {*} data Javascript object to be stringified.
 * @return {string} The JSON contents of the object.
 */
function stringify(data) {
    return JSON.stringify(data);
}

/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * Decodes a Firebase auth. token into constituent parts.
 *
 * Notes:
 * - May return with invalid / incomplete claims if there's no native base64 decoding support.
 * - Doesn't check if the token is actually valid.
 */
var decode = function (token) {
    var header = {}, claims = {}, data = {}, signature = '';
    try {
        var parts = token.split('.');
        header = jsonEval(base64Decode(parts[0]) || '');
        claims = jsonEval(base64Decode(parts[1]) || '');
        signature = parts[2];
        data = claims['d'] || {};
        delete claims['d'];
    }
    catch (e) { }
    return {
        header: header,
        claims: claims,
        data: data,
        signature: signature
    };
};
/**
 * Decodes a Firebase auth. token and checks the validity of its time-based claims. Will return true if the
 * token is within the time window authorized by the 'nbf' (not-before) and 'iat' (issued-at) claims.
 *
 * Notes:
 * - May return a false negative if there's no native base64 decoding support.
 * - Doesn't check if the token is actually valid.
 */
var isValidTimestamp = function (token) {
    var claims = decode(token).claims;
    var now = Math.floor(new Date().getTime() / 1000);
    var validSince = 0, validUntil = 0;
    if (typeof claims === 'object') {
        if (claims.hasOwnProperty('nbf')) {
            validSince = claims['nbf'];
        }
        else if (claims.hasOwnProperty('iat')) {
            validSince = claims['iat'];
        }
        if (claims.hasOwnProperty('exp')) {
            validUntil = claims['exp'];
        }
        else {
            // token will expire after 24h by default
            validUntil = validSince + 86400;
        }
    }
    return (!!now &&
        !!validSince &&
        !!validUntil &&
        now >= validSince &&
        now <= validUntil);
};
/**
 * Decodes a Firebase auth. token and returns its issued at time if valid, null otherwise.
 *
 * Notes:
 * - May return null if there's no native base64 decoding support.
 * - Doesn't check if the token is actually valid.
 */
var issuedAtTime = function (token) {
    var claims = decode(token).claims;
    if (typeof claims === 'object' && claims.hasOwnProperty('iat')) {
        return claims['iat'];
    }
    return null;
};
/**
 * Decodes a Firebase auth. token and checks the validity of its format. Expects a valid issued-at time.
 *
 * Notes:
 * - May return a false negative if there's no native base64 decoding support.
 * - Doesn't check if the token is actually valid.
 */
var isValidFormat = function (token) {
    var decoded = decode(token), claims = decoded.claims;
    return !!claims && typeof claims === 'object' && claims.hasOwnProperty('iat');
};
/**
 * Attempts to peer into an auth token and determine if it's an admin auth token by looking at the claims portion.
 *
 * Notes:
 * - May return a false negative if there's no native base64 decoding support.
 * - Doesn't check if the token is actually valid.
 */
var isAdmin = function (token) {
    var claims = decode(token).claims;
    return typeof claims === 'object' && claims['admin'] === true;
};

/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function contains(obj, key) {
    return Object.prototype.hasOwnProperty.call(obj, key);
}
function safeGet(obj, key) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
        return obj[key];
    }
    else {
        return undefined;
    }
}
function isEmpty(obj) {
    for (var key in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, key)) {
            return false;
        }
    }
    return true;
}
function map(obj, fn, contextObj) {
    var res = {};
    for (var key in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, key)) {
            res[key] = fn.call(contextObj, obj[key], key, obj);
        }
    }
    return res;
}

/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * Returns a querystring-formatted string (e.g. &arg=val&arg2=val2) from a
 * params object (e.g. {arg: 'val', arg2: 'val2'})
 * Note: You must prepend it with ? when adding it to a URL.
 */
function querystring(querystringParams) {
    var params = [];
    var _loop_1 = function (key, value) {
        if (Array.isArray(value)) {
            value.forEach(function (arrayVal) {
                params.push(encodeURIComponent(key) + '=' + encodeURIComponent(arrayVal));
            });
        }
        else {
            params.push(encodeURIComponent(key) + '=' + encodeURIComponent(value));
        }
    };
    for (var _i = 0, _a = Object.entries(querystringParams); _i < _a.length; _i++) {
        var _b = _a[_i], key = _b[0], value = _b[1];
        _loop_1(key, value);
    }
    return params.length ? '&' + params.join('&') : '';
}
/**
 * Decodes a querystring (e.g. ?arg=val&arg2=val2) into a params object
 * (e.g. {arg: 'val', arg2: 'val2'})
 */
function querystringDecode(querystring) {
    var obj = {};
    var tokens = querystring.replace(/^\?/, '').split('&');
    tokens.forEach(function (token) {
        if (token) {
            var key = token.split('=');
            obj[key[0]] = key[1];
        }
    });
    return obj;
}

/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @fileoverview SHA-1 cryptographic hash.
 * Variable names follow the notation in FIPS PUB 180-3:
 * http://csrc.nist.gov/publications/fips/fips180-3/fips180-3_final.pdf.
 *
 * Usage:
 *   var sha1 = new sha1();
 *   sha1.update(bytes);
 *   var hash = sha1.digest();
 *
 * Performance:
 *   Chrome 23:   ~400 Mbit/s
 *   Firefox 16:  ~250 Mbit/s
 *
 */
/**
 * SHA-1 cryptographic hash constructor.
 *
 * The properties declared here are discussed in the above algorithm document.
 * @constructor
 * @final
 * @struct
 */
var Sha1 = /** @class */ (function () {
    function Sha1() {
        /**
         * Holds the previous values of accumulated variables a-e in the compress_
         * function.
         * @private
         */
        this.chain_ = [];
        /**
         * A buffer holding the partially computed hash result.
         * @private
         */
        this.buf_ = [];
        /**
         * An array of 80 bytes, each a part of the message to be hashed.  Referred to
         * as the message schedule in the docs.
         * @private
         */
        this.W_ = [];
        /**
         * Contains data needed to pad messages less than 64 bytes.
         * @private
         */
        this.pad_ = [];
        /**
         * @private {number}
         */
        this.inbuf_ = 0;
        /**
         * @private {number}
         */
        this.total_ = 0;
        this.blockSize = 512 / 8;
        this.pad_[0] = 128;
        for (var i = 1; i < this.blockSize; ++i) {
            this.pad_[i] = 0;
        }
        this.reset();
    }
    Sha1.prototype.reset = function () {
        this.chain_[0] = 0x67452301;
        this.chain_[1] = 0xefcdab89;
        this.chain_[2] = 0x98badcfe;
        this.chain_[3] = 0x10325476;
        this.chain_[4] = 0xc3d2e1f0;
        this.inbuf_ = 0;
        this.total_ = 0;
    };
    /**
     * Internal compress helper function.
     * @param buf Block to compress.
     * @param offset Offset of the block in the buffer.
     * @private
     */
    Sha1.prototype.compress_ = function (buf, offset) {
        if (!offset) {
            offset = 0;
        }
        var W = this.W_;
        // get 16 big endian words
        if (typeof buf === 'string') {
            for (var i = 0; i < 16; i++) {
                // TODO(user): [bug 8140122] Recent versions of Safari for Mac OS and iOS
                // have a bug that turns the post-increment ++ operator into pre-increment
                // during JIT compilation.  We have code that depends heavily on SHA-1 for
                // correctness and which is affected by this bug, so I've removed all uses
                // of post-increment ++ in which the result value is used.  We can revert
                // this change once the Safari bug
                // (https://bugs.webkit.org/show_bug.cgi?id=109036) has been fixed and
                // most clients have been updated.
                W[i] =
                    (buf.charCodeAt(offset) << 24) |
                        (buf.charCodeAt(offset + 1) << 16) |
                        (buf.charCodeAt(offset + 2) << 8) |
                        buf.charCodeAt(offset + 3);
                offset += 4;
            }
        }
        else {
            for (var i = 0; i < 16; i++) {
                W[i] =
                    (buf[offset] << 24) |
                        (buf[offset + 1] << 16) |
                        (buf[offset + 2] << 8) |
                        buf[offset + 3];
                offset += 4;
            }
        }
        // expand to 80 words
        for (var i = 16; i < 80; i++) {
            var t = W[i - 3] ^ W[i - 8] ^ W[i - 14] ^ W[i - 16];
            W[i] = ((t << 1) | (t >>> 31)) & 0xffffffff;
        }
        var a = this.chain_[0];
        var b = this.chain_[1];
        var c = this.chain_[2];
        var d = this.chain_[3];
        var e = this.chain_[4];
        var f, k;
        // TODO(user): Try to unroll this loop to speed up the computation.
        for (var i = 0; i < 80; i++) {
            if (i < 40) {
                if (i < 20) {
                    f = d ^ (b & (c ^ d));
                    k = 0x5a827999;
                }
                else {
                    f = b ^ c ^ d;
                    k = 0x6ed9eba1;
                }
            }
            else {
                if (i < 60) {
                    f = (b & c) | (d & (b | c));
                    k = 0x8f1bbcdc;
                }
                else {
                    f = b ^ c ^ d;
                    k = 0xca62c1d6;
                }
            }
            var t = (((a << 5) | (a >>> 27)) + f + e + k + W[i]) & 0xffffffff;
            e = d;
            d = c;
            c = ((b << 30) | (b >>> 2)) & 0xffffffff;
            b = a;
            a = t;
        }
        this.chain_[0] = (this.chain_[0] + a) & 0xffffffff;
        this.chain_[1] = (this.chain_[1] + b) & 0xffffffff;
        this.chain_[2] = (this.chain_[2] + c) & 0xffffffff;
        this.chain_[3] = (this.chain_[3] + d) & 0xffffffff;
        this.chain_[4] = (this.chain_[4] + e) & 0xffffffff;
    };
    Sha1.prototype.update = function (bytes, length) {
        // TODO(johnlenz): tighten the function signature and remove this check
        if (bytes == null) {
            return;
        }
        if (length === undefined) {
            length = bytes.length;
        }
        var lengthMinusBlock = length - this.blockSize;
        var n = 0;
        // Using local instead of member variables gives ~5% speedup on Firefox 16.
        var buf = this.buf_;
        var inbuf = this.inbuf_;
        // The outer while loop should execute at most twice.
        while (n < length) {
            // When we have no data in the block to top up, we can directly process the
            // input buffer (assuming it contains sufficient data). This gives ~25%
            // speedup on Chrome 23 and ~15% speedup on Firefox 16, but requires that
            // the data is provided in large chunks (or in multiples of 64 bytes).
            if (inbuf === 0) {
                while (n <= lengthMinusBlock) {
                    this.compress_(bytes, n);
                    n += this.blockSize;
                }
            }
            if (typeof bytes === 'string') {
                while (n < length) {
                    buf[inbuf] = bytes.charCodeAt(n);
                    ++inbuf;
                    ++n;
                    if (inbuf === this.blockSize) {
                        this.compress_(buf);
                        inbuf = 0;
                        // Jump to the outer loop so we use the full-block optimization.
                        break;
                    }
                }
            }
            else {
                while (n < length) {
                    buf[inbuf] = bytes[n];
                    ++inbuf;
                    ++n;
                    if (inbuf === this.blockSize) {
                        this.compress_(buf);
                        inbuf = 0;
                        // Jump to the outer loop so we use the full-block optimization.
                        break;
                    }
                }
            }
        }
        this.inbuf_ = inbuf;
        this.total_ += length;
    };
    /** @override */
    Sha1.prototype.digest = function () {
        var digest = [];
        var totalBits = this.total_ * 8;
        // Add pad 0x80 0x00*.
        if (this.inbuf_ < 56) {
            this.update(this.pad_, 56 - this.inbuf_);
        }
        else {
            this.update(this.pad_, this.blockSize - (this.inbuf_ - 56));
        }
        // Add # bits.
        for (var i = this.blockSize - 1; i >= 56; i--) {
            this.buf_[i] = totalBits & 255;
            totalBits /= 256; // Don't use bit-shifting here!
        }
        this.compress_(this.buf_);
        var n = 0;
        for (var i = 0; i < 5; i++) {
            for (var j = 24; j >= 0; j -= 8) {
                digest[n] = (this.chain_[i] >> j) & 255;
                ++n;
            }
        }
        return digest;
    };
    return Sha1;
}());

/**
 * Helper to make a Subscribe function (just like Promise helps make a
 * Thenable).
 *
 * @param executor Function which can make calls to a single Observer
 *     as a proxy.
 * @param onNoObservers Callback when count of Observers goes to zero.
 */
function createSubscribe(executor, onNoObservers) {
    var proxy = new ObserverProxy(executor, onNoObservers);
    return proxy.subscribe.bind(proxy);
}
/**
 * Implement fan-out for any number of Observers attached via a subscribe
 * function.
 */
var ObserverProxy = /** @class */ (function () {
    /**
     * @param executor Function which can make calls to a single Observer
     *     as a proxy.
     * @param onNoObservers Callback when count of Observers goes to zero.
     */
    function ObserverProxy(executor, onNoObservers) {
        var _this = this;
        this.observers = [];
        this.unsubscribes = [];
        this.observerCount = 0;
        // Micro-task scheduling by calling task.then().
        this.task = Promise.resolve();
        this.finalized = false;
        this.onNoObservers = onNoObservers;
        // Call the executor asynchronously so subscribers that are called
        // synchronously after the creation of the subscribe function
        // can still receive the very first value generated in the executor.
        this.task
            .then(function () {
            executor(_this);
        })
            .catch(function (e) {
            _this.error(e);
        });
    }
    ObserverProxy.prototype.next = function (value) {
        this.forEachObserver(function (observer) {
            observer.next(value);
        });
    };
    ObserverProxy.prototype.error = function (error) {
        this.forEachObserver(function (observer) {
            observer.error(error);
        });
        this.close(error);
    };
    ObserverProxy.prototype.complete = function () {
        this.forEachObserver(function (observer) {
            observer.complete();
        });
        this.close();
    };
    /**
     * Subscribe function that can be used to add an Observer to the fan-out list.
     *
     * - We require that no event is sent to a subscriber sychronously to their
     *   call to subscribe().
     */
    ObserverProxy.prototype.subscribe = function (nextOrObserver, error, complete) {
        var _this = this;
        var observer;
        if (nextOrObserver === undefined &&
            error === undefined &&
            complete === undefined) {
            throw new Error('Missing Observer.');
        }
        // Assemble an Observer object when passed as callback functions.
        if (implementsAnyMethods(nextOrObserver, [
            'next',
            'error',
            'complete'
        ])) {
            observer = nextOrObserver;
        }
        else {
            observer = {
                next: nextOrObserver,
                error: error,
                complete: complete
            };
        }
        if (observer.next === undefined) {
            observer.next = noop;
        }
        if (observer.error === undefined) {
            observer.error = noop;
        }
        if (observer.complete === undefined) {
            observer.complete = noop;
        }
        var unsub = this.unsubscribeOne.bind(this, this.observers.length);
        // Attempt to subscribe to a terminated Observable - we
        // just respond to the Observer with the final error or complete
        // event.
        if (this.finalized) {
            // eslint-disable-next-line @typescript-eslint/no-floating-promises
            this.task.then(function () {
                try {
                    if (_this.finalError) {
                        observer.error(_this.finalError);
                    }
                    else {
                        observer.complete();
                    }
                }
                catch (e) {
                    // nothing
                }
                return;
            });
        }
        this.observers.push(observer);
        return unsub;
    };
    // Unsubscribe is synchronous - we guarantee that no events are sent to
    // any unsubscribed Observer.
    ObserverProxy.prototype.unsubscribeOne = function (i) {
        if (this.observers === undefined || this.observers[i] === undefined) {
            return;
        }
        delete this.observers[i];
        this.observerCount -= 1;
        if (this.observerCount === 0 && this.onNoObservers !== undefined) {
            this.onNoObservers(this);
        }
    };
    ObserverProxy.prototype.forEachObserver = function (fn) {
        if (this.finalized) {
            // Already closed by previous event....just eat the additional values.
            return;
        }
        // Since sendOne calls asynchronously - there is no chance that
        // this.observers will become undefined.
        for (var i = 0; i < this.observers.length; i++) {
            this.sendOne(i, fn);
        }
    };
    // Call the Observer via one of it's callback function. We are careful to
    // confirm that the observe has not been unsubscribed since this asynchronous
    // function had been queued.
    ObserverProxy.prototype.sendOne = function (i, fn) {
        var _this = this;
        // Execute the callback asynchronously
        // eslint-disable-next-line @typescript-eslint/no-floating-promises
        this.task.then(function () {
            if (_this.observers !== undefined && _this.observers[i] !== undefined) {
                try {
                    fn(_this.observers[i]);
                }
                catch (e) {
                    // Ignore exceptions raised in Observers or missing methods of an
                    // Observer.
                    // Log error to console. b/31404806
                    if (typeof console !== 'undefined' && console.error) {
                        console.error(e);
                    }
                }
            }
        });
    };
    ObserverProxy.prototype.close = function (err) {
        var _this = this;
        if (this.finalized) {
            return;
        }
        this.finalized = true;
        if (err !== undefined) {
            this.finalError = err;
        }
        // Proxy is no longer needed - garbage collect references
        // eslint-disable-next-line @typescript-eslint/no-floating-promises
        this.task.then(function () {
            _this.observers = undefined;
            _this.onNoObservers = undefined;
        });
    };
    return ObserverProxy;
}());
/** Turn synchronous function into one called asynchronously. */
function async(fn, onError) {
    return function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        Promise.resolve(true)
            .then(function () {
            fn.apply(void 0, args);
        })
            .catch(function (error) {
            if (onError) {
                onError(error);
            }
        });
    };
}
/**
 * Return true if the object passed in implements any of the named methods.
 */
function implementsAnyMethods(obj, methods) {
    if (typeof obj !== 'object' || obj === null) {
        return false;
    }
    for (var _i = 0, methods_1 = methods; _i < methods_1.length; _i++) {
        var method = methods_1[_i];
        if (method in obj && typeof obj[method] === 'function') {
            return true;
        }
    }
    return false;
}
function noop() {
    // do nothing
}

/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * Check to make sure the appropriate number of arguments are provided for a public function.
 * Throws an error if it fails.
 *
 * @param fnName The function name
 * @param minCount The minimum number of arguments to allow for the function call
 * @param maxCount The maximum number of argument to allow for the function call
 * @param argCount The actual number of arguments provided.
 */
var validateArgCount = function (fnName, minCount, maxCount, argCount) {
    var argError;
    if (argCount < minCount) {
        argError = 'at least ' + minCount;
    }
    else if (argCount > maxCount) {
        argError = maxCount === 0 ? 'none' : 'no more than ' + maxCount;
    }
    if (argError) {
        var error = fnName +
            ' failed: Was called with ' +
            argCount +
            (argCount === 1 ? ' argument.' : ' arguments.') +
            ' Expects ' +
            argError +
            '.';
        throw new Error(error);
    }
};
/**
 * Generates a string to prefix an error message about failed argument validation
 *
 * @param fnName The function name
 * @param argumentNumber The index of the argument
 * @param optional Whether or not the argument is optional
 * @return The prefix to add to the error thrown for validation.
 */
function errorPrefix(fnName, argumentNumber, optional) {
    var argName = '';
    switch (argumentNumber) {
        case 1:
            argName = optional ? 'first' : 'First';
            break;
        case 2:
            argName = optional ? 'second' : 'Second';
            break;
        case 3:
            argName = optional ? 'third' : 'Third';
            break;
        case 4:
            argName = optional ? 'fourth' : 'Fourth';
            break;
        default:
            throw new Error('errorPrefix called with argumentNumber > 4.  Need to update it?');
    }
    var error = fnName + ' failed: ';
    error += argName + ' argument ';
    return error;
}
/**
 * @param fnName
 * @param argumentNumber
 * @param namespace
 * @param optional
 */
function validateNamespace(fnName, argumentNumber, namespace, optional) {
    if (optional && !namespace) {
        return;
    }
    if (typeof namespace !== 'string') {
        //TODO: I should do more validation here. We only allow certain chars in namespaces.
        throw new Error(errorPrefix(fnName, argumentNumber, optional) +
            'must be a valid firebase namespace.');
    }
}
function validateCallback(fnName, argumentNumber, callback, optional) {
    if (optional && !callback) {
        return;
    }
    if (typeof callback !== 'function') {
        throw new Error(errorPrefix(fnName, argumentNumber, optional) +
            'must be a valid function.');
    }
}
function validateContextObject(fnName, argumentNumber, context, optional) {
    if (optional && !context) {
        return;
    }
    if (typeof context !== 'object' || context === null) {
        throw new Error(errorPrefix(fnName, argumentNumber, optional) +
            'must be a valid context object.');
    }
}

/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
// Code originally came from goog.crypt.stringToUtf8ByteArray, but for some reason they
// automatically replaced '\r\n' with '\n', and they didn't handle surrogate pairs,
// so it's been modified.
// Note that not all Unicode characters appear as single characters in JavaScript strings.
// fromCharCode returns the UTF-16 encoding of a character - so some Unicode characters
// use 2 characters in Javascript.  All 4-byte UTF-8 characters begin with a first
// character in the range 0xD800 - 0xDBFF (the first character of a so-called surrogate
// pair).
// See http://www.ecma-international.org/ecma-262/5.1/#sec-15.1.3
/**
 * @param {string} str
 * @return {Array}
 */
var stringToByteArray$1 = function (str) {
    var out = [];
    var p = 0;
    for (var i = 0; i < str.length; i++) {
        var c = str.charCodeAt(i);
        // Is this the lead surrogate in a surrogate pair?
        if (c >= 0xd800 && c <= 0xdbff) {
            var high = c - 0xd800; // the high 10 bits.
            i++;
            assert(i < str.length, 'Surrogate pair missing trail surrogate.');
            var low = str.charCodeAt(i) - 0xdc00; // the low 10 bits.
            c = 0x10000 + (high << 10) + low;
        }
        if (c < 128) {
            out[p++] = c;
        }
        else if (c < 2048) {
            out[p++] = (c >> 6) | 192;
            out[p++] = (c & 63) | 128;
        }
        else if (c < 65536) {
            out[p++] = (c >> 12) | 224;
            out[p++] = ((c >> 6) & 63) | 128;
            out[p++] = (c & 63) | 128;
        }
        else {
            out[p++] = (c >> 18) | 240;
            out[p++] = ((c >> 12) & 63) | 128;
            out[p++] = ((c >> 6) & 63) | 128;
            out[p++] = (c & 63) | 128;
        }
    }
    return out;
};
/**
 * Calculate length without actually converting; useful for doing cheaper validation.
 * @param {string} str
 * @return {number}
 */
var stringLength = function (str) {
    var p = 0;
    for (var i = 0; i < str.length; i++) {
        var c = str.charCodeAt(i);
        if (c < 128) {
            p++;
        }
        else if (c < 2048) {
            p += 2;
        }
        else if (c >= 0xd800 && c <= 0xdbff) {
            // Lead surrogate of a surrogate pair.  The pair together will take 4 bytes to represent.
            p += 4;
            i++; // skip trail surrogate.
        }
        else {
            p += 3;
        }
    }
    return p;
};

exports.CONSTANTS = CONSTANTS;
exports.Deferred = Deferred;
exports.ErrorFactory = ErrorFactory;
exports.FirebaseError = FirebaseError;
exports.Sha1 = Sha1;
exports.assert = assert;
exports.assertionError = assertionError;
exports.async = async;
exports.base64 = base64;
exports.base64Decode = base64Decode;
exports.base64Encode = base64Encode;
exports.contains = contains;
exports.createSubscribe = createSubscribe;
exports.decode = decode;
exports.deepCopy = deepCopy;
exports.deepExtend = deepExtend;
exports.errorPrefix = errorPrefix;
exports.getUA = getUA;
exports.isAdmin = isAdmin;
exports.isBrowser = isBrowser;
exports.isBrowserExtension = isBrowserExtension;
exports.isElectron = isElectron;
exports.isEmpty = isEmpty;
exports.isIE = isIE;
exports.isMobileCordova = isMobileCordova;
exports.isNode = isNode;
exports.isNodeSdk = isNodeSdk;
exports.isReactNative = isReactNative;
exports.isSafari = isSafari;
exports.isUWP = isUWP;
exports.isValidFormat = isValidFormat;
exports.isValidTimestamp = isValidTimestamp;
exports.issuedAtTime = issuedAtTime;
exports.jsonEval = jsonEval;
exports.map = map;
exports.querystring = querystring;
exports.querystringDecode = querystringDecode;
exports.safeGet = safeGet;
exports.stringLength = stringLength;
exports.stringToByteArray = stringToByteArray$1;
exports.stringify = stringify;
exports.validateArgCount = validateArgCount;
exports.validateCallback = validateCallback;
exports.validateContextObject = validateContextObject;
exports.validateNamespace = validateNamespace;
//# sourceMappingURL=index.cjs.js.map

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(13)))

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, '__esModule', { value: true });

var tslib = __webpack_require__(0);
var util = __webpack_require__(2);
var component = __webpack_require__(4);
var logger$1 = __webpack_require__(14);

/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var _a;
var ERRORS = (_a = {},
    _a["no-app" /* NO_APP */] = "No Firebase App '{$appName}' has been created - " +
        'call Firebase App.initializeApp()',
    _a["bad-app-name" /* BAD_APP_NAME */] = "Illegal App name: '{$appName}",
    _a["duplicate-app" /* DUPLICATE_APP */] = "Firebase App named '{$appName}' already exists",
    _a["app-deleted" /* APP_DELETED */] = "Firebase App named '{$appName}' already deleted",
    _a["invalid-app-argument" /* INVALID_APP_ARGUMENT */] = 'firebase.{$appName}() takes either no argument or a ' +
        'Firebase App instance.',
    _a["invalid-log-argument" /* INVALID_LOG_ARGUMENT */] = 'First argument to `onLog` must be null or a function.',
    _a);
var ERROR_FACTORY = new util.ErrorFactory('app', 'Firebase', ERRORS);

var name$1 = "@firebase/app";
var version = "0.6.6";

var name$2 = "@firebase/analytics";

var name$3 = "@firebase/auth";

var name$4 = "@firebase/database";

var name$5 = "@firebase/functions";

var name$6 = "@firebase/installations";

var name$7 = "@firebase/messaging";

var name$8 = "@firebase/performance";

var name$9 = "@firebase/remote-config";

var name$a = "@firebase/storage";

var name$b = "@firebase/firestore";

var name$c = "firebase-wrapper";

/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var _a$1;
var DEFAULT_ENTRY_NAME = '[DEFAULT]';
var PLATFORM_LOG_STRING = (_a$1 = {},
    _a$1[name$1] = 'fire-core',
    _a$1[name$2] = 'fire-analytics',
    _a$1[name$3] = 'fire-auth',
    _a$1[name$4] = 'fire-rtdb',
    _a$1[name$5] = 'fire-fn',
    _a$1[name$6] = 'fire-iid',
    _a$1[name$7] = 'fire-fcm',
    _a$1[name$8] = 'fire-perf',
    _a$1[name$9] = 'fire-rc',
    _a$1[name$a] = 'fire-gcs',
    _a$1[name$b] = 'fire-fst',
    _a$1['fire-js'] = 'fire-js',
    _a$1[name$c] = 'fire-js-all',
    _a$1);

/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var logger = new logger$1.Logger('@firebase/app');

/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * Global context object for a collection of services using
 * a shared authentication state.
 */
var FirebaseAppImpl = /** @class */ (function () {
    function FirebaseAppImpl(options, config, firebase_) {
        var e_1, _a;
        var _this = this;
        this.firebase_ = firebase_;
        this.isDeleted_ = false;
        this.name_ = config.name;
        this.automaticDataCollectionEnabled_ =
            config.automaticDataCollectionEnabled || false;
        this.options_ = util.deepCopy(options);
        this.container = new component.ComponentContainer(config.name);
        // add itself to container
        this._addComponent(new component.Component('app', function () { return _this; }, "PUBLIC" /* PUBLIC */));
        try {
            // populate ComponentContainer with existing components
            for (var _b = tslib.__values(this.firebase_.INTERNAL.components.values()), _c = _b.next(); !_c.done; _c = _b.next()) {
                var component$1 = _c.value;
                this._addComponent(component$1);
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_1) throw e_1.error; }
        }
    }
    Object.defineProperty(FirebaseAppImpl.prototype, "automaticDataCollectionEnabled", {
        get: function () {
            this.checkDestroyed_();
            return this.automaticDataCollectionEnabled_;
        },
        set: function (val) {
            this.checkDestroyed_();
            this.automaticDataCollectionEnabled_ = val;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FirebaseAppImpl.prototype, "name", {
        get: function () {
            this.checkDestroyed_();
            return this.name_;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FirebaseAppImpl.prototype, "options", {
        get: function () {
            this.checkDestroyed_();
            return this.options_;
        },
        enumerable: true,
        configurable: true
    });
    FirebaseAppImpl.prototype.delete = function () {
        var _this = this;
        return new Promise(function (resolve) {
            _this.checkDestroyed_();
            resolve();
        })
            .then(function () {
            _this.firebase_.INTERNAL.removeApp(_this.name_);
            return Promise.all(_this.container.getProviders().map(function (provider) { return provider.delete(); }));
        })
            .then(function () {
            _this.isDeleted_ = true;
        });
    };
    /**
     * Return a service instance associated with this app (creating it
     * on demand), identified by the passed instanceIdentifier.
     *
     * NOTE: Currently storage and functions are the only ones that are leveraging this
     * functionality. They invoke it by calling:
     *
     * ```javascript
     * firebase.app().storage('STORAGE BUCKET ID')
     * ```
     *
     * The service name is passed to this already
     * @internal
     */
    FirebaseAppImpl.prototype._getService = function (name, instanceIdentifier) {
        if (instanceIdentifier === void 0) { instanceIdentifier = DEFAULT_ENTRY_NAME; }
        this.checkDestroyed_();
        // getImmediate will always succeed because _getService is only called for registered components.
        return this.container.getProvider(name).getImmediate({
            identifier: instanceIdentifier
        });
    };
    /**
     * Remove a service instance from the cache, so we will create a new instance for this service
     * when people try to get this service again.
     *
     * NOTE: currently only firestore is using this functionality to support firestore shutdown.
     *
     * @param name The service name
     * @param instanceIdentifier instance identifier in case multiple instances are allowed
     * @internal
     */
    FirebaseAppImpl.prototype._removeServiceInstance = function (name, instanceIdentifier) {
        if (instanceIdentifier === void 0) { instanceIdentifier = DEFAULT_ENTRY_NAME; }
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        this.container.getProvider(name).clearInstance(instanceIdentifier);
    };
    /**
     * @param component the component being added to this app's container
     */
    FirebaseAppImpl.prototype._addComponent = function (component) {
        try {
            this.container.addComponent(component);
        }
        catch (e) {
            logger.debug("Component " + component.name + " failed to register with FirebaseApp " + this.name, e);
        }
    };
    FirebaseAppImpl.prototype._addOrOverwriteComponent = function (component) {
        this.container.addOrOverwriteComponent(component);
    };
    /**
     * This function will throw an Error if the App has already been deleted -
     * use before performing API actions on the App.
     */
    FirebaseAppImpl.prototype.checkDestroyed_ = function () {
        if (this.isDeleted_) {
            throw ERROR_FACTORY.create("app-deleted" /* APP_DELETED */, { appName: this.name_ });
        }
    };
    return FirebaseAppImpl;
}());
// Prevent dead-code elimination of these methods w/o invalid property
// copying.
(FirebaseAppImpl.prototype.name && FirebaseAppImpl.prototype.options) ||
    FirebaseAppImpl.prototype.delete ||
    console.log('dc');

var version$1 = "7.15.2";

/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * Because auth can't share code with other components, we attach the utility functions
 * in an internal namespace to share code.
 * This function return a firebase namespace object without
 * any utility functions, so it can be shared between the regular firebaseNamespace and
 * the lite version.
 */
function createFirebaseNamespaceCore(firebaseAppImpl) {
    var apps = {};
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    var components = new Map();
    // A namespace is a plain JavaScript Object.
    var namespace = {
        // Hack to prevent Babel from modifying the object returned
        // as the firebase namespace.
        // @ts-ignore
        __esModule: true,
        initializeApp: initializeApp,
        // @ts-ignore
        app: app,
        registerVersion: registerVersion,
        setLogLevel: logger$1.setLogLevel,
        onLog: onLog,
        // @ts-ignore
        apps: null,
        SDK_VERSION: version$1,
        INTERNAL: {
            registerComponent: registerComponent,
            removeApp: removeApp,
            components: components,
            useAsService: useAsService
        }
    };
    // Inject a circular default export to allow Babel users who were previously
    // using:
    //
    //   import firebase from 'firebase';
    //   which becomes: var firebase = require('firebase').default;
    //
    // instead of
    //
    //   import * as firebase from 'firebase';
    //   which becomes: var firebase = require('firebase');
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    namespace['default'] = namespace;
    // firebase.apps is a read-only getter.
    Object.defineProperty(namespace, 'apps', {
        get: getApps
    });
    /**
     * Called by App.delete() - but before any services associated with the App
     * are deleted.
     */
    function removeApp(name) {
        delete apps[name];
    }
    /**
     * Get the App object for a given name (or DEFAULT).
     */
    function app(name) {
        name = name || DEFAULT_ENTRY_NAME;
        if (!util.contains(apps, name)) {
            throw ERROR_FACTORY.create("no-app" /* NO_APP */, { appName: name });
        }
        return apps[name];
    }
    // @ts-ignore
    app['App'] = firebaseAppImpl;
    function initializeApp(options, rawConfig) {
        if (rawConfig === void 0) { rawConfig = {}; }
        if (typeof rawConfig !== 'object' || rawConfig === null) {
            var name_1 = rawConfig;
            rawConfig = { name: name_1 };
        }
        var config = rawConfig;
        if (config.name === undefined) {
            config.name = DEFAULT_ENTRY_NAME;
        }
        var name = config.name;
        if (typeof name !== 'string' || !name) {
            throw ERROR_FACTORY.create("bad-app-name" /* BAD_APP_NAME */, {
                appName: String(name)
            });
        }
        if (util.contains(apps, name)) {
            throw ERROR_FACTORY.create("duplicate-app" /* DUPLICATE_APP */, { appName: name });
        }
        var app = new firebaseAppImpl(options, config, namespace);
        apps[name] = app;
        return app;
    }
    /*
     * Return an array of all the non-deleted FirebaseApps.
     */
    function getApps() {
        // Make a copy so caller cannot mutate the apps list.
        return Object.keys(apps).map(function (name) { return apps[name]; });
    }
    function registerComponent(component) {
        var e_1, _a;
        var componentName = component.name;
        if (components.has(componentName)) {
            logger.debug("There were multiple attempts to register component " + componentName + ".");
            return component.type === "PUBLIC" /* PUBLIC */
                ? // eslint-disable-next-line @typescript-eslint/no-explicit-any
                    namespace[componentName]
                : null;
        }
        components.set(componentName, component);
        // create service namespace for public components
        if (component.type === "PUBLIC" /* PUBLIC */) {
            // The Service namespace is an accessor function ...
            var serviceNamespace = function (appArg) {
                if (appArg === void 0) { appArg = app(); }
                // eslint-disable-next-line @typescript-eslint/no-explicit-any
                if (typeof appArg[componentName] !== 'function') {
                    // Invalid argument.
                    // This happens in the following case: firebase.storage('gs:/')
                    throw ERROR_FACTORY.create("invalid-app-argument" /* INVALID_APP_ARGUMENT */, {
                        appName: componentName
                    });
                }
                // Forward service instance lookup to the FirebaseApp.
                // eslint-disable-next-line @typescript-eslint/no-explicit-any
                return appArg[componentName]();
            };
            // ... and a container for service-level properties.
            if (component.serviceProps !== undefined) {
                util.deepExtend(serviceNamespace, component.serviceProps);
            }
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            namespace[componentName] = serviceNamespace;
            // Patch the FirebaseAppImpl prototype
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            firebaseAppImpl.prototype[componentName] =
                // TODO: The eslint disable can be removed and the 'ignoreRestArgs'
                // option added to the no-explicit-any rule when ESlint releases it.
                // eslint-disable-next-line @typescript-eslint/no-explicit-any
                function () {
                    var args = [];
                    for (var _i = 0; _i < arguments.length; _i++) {
                        args[_i] = arguments[_i];
                    }
                    var serviceFxn = this._getService.bind(this, componentName);
                    return serviceFxn.apply(this, component.multipleInstances ? args : []);
                };
        }
        try {
            // add the component to existing app instances
            for (var _b = tslib.__values(Object.keys(apps)), _c = _b.next(); !_c.done; _c = _b.next()) {
                var appName = _c.value;
                apps[appName]._addComponent(component);
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_1) throw e_1.error; }
        }
        return component.type === "PUBLIC" /* PUBLIC */
            ? // eslint-disable-next-line @typescript-eslint/no-explicit-any
                namespace[componentName]
            : null;
    }
    function registerVersion(libraryKeyOrName, version, variant) {
        var _a;
        // TODO: We can use this check to whitelist strings when/if we set up
        // a good whitelist system.
        var library = (_a = PLATFORM_LOG_STRING[libraryKeyOrName]) !== null && _a !== void 0 ? _a : libraryKeyOrName;
        if (variant) {
            library += "-" + variant;
        }
        var libraryMismatch = library.match(/\s|\//);
        var versionMismatch = version.match(/\s|\//);
        if (libraryMismatch || versionMismatch) {
            var warning = [
                "Unable to register library \"" + library + "\" with version \"" + version + "\":"
            ];
            if (libraryMismatch) {
                warning.push("library name \"" + library + "\" contains illegal characters (whitespace or \"/\")");
            }
            if (libraryMismatch && versionMismatch) {
                warning.push('and');
            }
            if (versionMismatch) {
                warning.push("version name \"" + version + "\" contains illegal characters (whitespace or \"/\")");
            }
            logger.warn(warning.join(' '));
            return;
        }
        registerComponent(new component.Component(library + "-version", function () { return ({ library: library, version: version }); }, "VERSION" /* VERSION */));
    }
    function onLog(logCallback, options) {
        if (logCallback !== null && typeof logCallback !== 'function') {
            throw ERROR_FACTORY.create("invalid-log-argument" /* INVALID_LOG_ARGUMENT */, {
                appName: name
            });
        }
        logger$1.setUserLogHandler(logCallback, options);
    }
    // Map the requested service to a registered service name
    // (used to map auth to serverAuth service when needed).
    function useAsService(app, name) {
        if (name === 'serverAuth') {
            return null;
        }
        var useService = name;
        return useService;
    }
    return namespace;
}

/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * Return a firebase namespace object.
 *
 * In production, this will be called exactly once and the result
 * assigned to the 'firebase' global.  It may be called multiple times
 * in unit tests.
 */
function createFirebaseNamespace() {
    var namespace = createFirebaseNamespaceCore(FirebaseAppImpl);
    namespace.INTERNAL = tslib.__assign(tslib.__assign({}, namespace.INTERNAL), { createFirebaseNamespace: createFirebaseNamespace,
        extendNamespace: extendNamespace,
        createSubscribe: util.createSubscribe,
        ErrorFactory: util.ErrorFactory,
        deepExtend: util.deepExtend });
    /**
     * Patch the top-level firebase namespace with additional properties.
     *
     * firebase.INTERNAL.extendNamespace()
     */
    function extendNamespace(props) {
        util.deepExtend(namespace, props);
    }
    return namespace;
}
var firebase = createFirebaseNamespace();

/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var PlatformLoggerService = /** @class */ (function () {
    function PlatformLoggerService(container) {
        this.container = container;
    }
    // In initial implementation, this will be called by installations on
    // auth token refresh, and installations will send this string.
    PlatformLoggerService.prototype.getPlatformInfoString = function () {
        var providers = this.container.getProviders();
        // Loop through providers and get library/version pairs from any that are
        // version components.
        return providers
            .map(function (provider) {
            if (isVersionServiceProvider(provider)) {
                var service = provider.getImmediate();
                return service.library + "/" + service.version;
            }
            else {
                return null;
            }
        })
            .filter(function (logString) { return logString; })
            .join(' ');
    };
    return PlatformLoggerService;
}());
/**
 *
 * @param provider check if this provider provides a VersionService
 *
 * NOTE: Using Provider<'app-version'> is a hack to indicate that the provider
 * provides VersionService. The provider is not necessarily a 'app-version'
 * provider.
 */
function isVersionServiceProvider(provider) {
    var component = provider.getComponent();
    return (component === null || component === void 0 ? void 0 : component.type) === "VERSION" /* VERSION */;
}

/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function registerCoreComponents(firebase, variant) {
    firebase.INTERNAL.registerComponent(new component.Component('platform-logger', function (container) { return new PlatformLoggerService(container); }, "PRIVATE" /* PRIVATE */));
    // Register `app` package.
    firebase.registerVersion(name$1, version, variant);
    // Register platform SDK identifier (no version).
    firebase.registerVersion('fire-js', '');
}

/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
// Firebase Lite detection test
// eslint-disable-next-line @typescript-eslint/no-explicit-any
if (util.isBrowser() && self.firebase !== undefined) {
    logger.warn("\n    Warning: Firebase is already defined in the global scope. Please make sure\n    Firebase library is only loaded once.\n  ");
    // eslint-disable-next-line
    var sdkVersion = self.firebase.SDK_VERSION;
    if (sdkVersion && sdkVersion.indexOf('LITE') >= 0) {
        logger.warn("\n    Warning: You are trying to load Firebase while using Firebase Performance standalone script.\n    You should load Firebase Performance with this instance of Firebase to avoid loading duplicate code.\n    ");
    }
}
var initializeApp = firebase.initializeApp;
// TODO: This disable can be removed and the 'ignoreRestArgs' option added to
// the no-explicit-any rule when ESlint releases it.
// eslint-disable-next-line @typescript-eslint/no-explicit-any
firebase.initializeApp = function () {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    // Environment check before initializing app
    // Do the check in initializeApp, so people have a chance to disable it by setting logLevel
    // in @firebase/logger
    if (util.isNode()) {
        logger.warn("\n      Warning: This is a browser-targeted Firebase bundle but it appears it is being\n      run in a Node environment.  If running in a Node environment, make sure you\n      are using the bundle specified by the \"main\" field in package.json.\n      \n      If you are using Webpack, you can specify \"main\" as the first item in\n      \"resolve.mainFields\":\n      https://webpack.js.org/configuration/resolve/#resolvemainfields\n      \n      If using Rollup, use the rollup-plugin-node-resolve plugin and specify \"main\"\n      as the first item in \"mainFields\", e.g. ['main', 'module'].\n      https://github.com/rollup/rollup-plugin-node-resolve\n      ");
    }
    return initializeApp.apply(undefined, args);
};
var firebase$1 = firebase;
registerCoreComponents(firebase$1);

exports.default = firebase$1;
exports.firebase = firebase$1;
//# sourceMappingURL=index.cjs.js.map


/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, '__esModule', { value: true });

var tslib = __webpack_require__(0);
var util = __webpack_require__(2);

/**
 * Component for service name T, e.g. `auth`, `auth-internal`
 */
var Component = /** @class */ (function () {
    /**
     *
     * @param name The public service name, e.g. app, auth, firestore, database
     * @param instanceFactory Service factory responsible for creating the public interface
     * @param type whether the service provided by the component is public or private
     */
    function Component(name, instanceFactory, type) {
        this.name = name;
        this.instanceFactory = instanceFactory;
        this.type = type;
        this.multipleInstances = false;
        /**
         * Properties to be added to the service namespace
         */
        this.serviceProps = {};
        this.instantiationMode = "LAZY" /* LAZY */;
    }
    Component.prototype.setInstantiationMode = function (mode) {
        this.instantiationMode = mode;
        return this;
    };
    Component.prototype.setMultipleInstances = function (multipleInstances) {
        this.multipleInstances = multipleInstances;
        return this;
    };
    Component.prototype.setServiceProps = function (props) {
        this.serviceProps = props;
        return this;
    };
    return Component;
}());

/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var DEFAULT_ENTRY_NAME = '[DEFAULT]';

/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * Provider for instance for service name T, e.g. 'auth', 'auth-internal'
 * NameServiceMapping[T] is an alias for the type of the instance
 */
var Provider = /** @class */ (function () {
    function Provider(name, container) {
        this.name = name;
        this.container = container;
        this.component = null;
        this.instances = new Map();
        this.instancesDeferred = new Map();
    }
    /**
     * @param identifier A provider can provide mulitple instances of a service
     * if this.component.multipleInstances is true.
     */
    Provider.prototype.get = function (identifier) {
        if (identifier === void 0) { identifier = DEFAULT_ENTRY_NAME; }
        // if multipleInstances is not supported, use the default name
        var normalizedIdentifier = this.normalizeInstanceIdentifier(identifier);
        if (!this.instancesDeferred.has(normalizedIdentifier)) {
            var deferred = new util.Deferred();
            this.instancesDeferred.set(normalizedIdentifier, deferred);
            // If the service instance is available, resolve the promise with it immediately
            try {
                var instance = this.getOrInitializeService(normalizedIdentifier);
                if (instance) {
                    deferred.resolve(instance);
                }
            }
            catch (e) {
                // when the instance factory throws an exception during get(), it should not cause
                // a fatal error. We just return the unresolved promise in this case.
            }
        }
        return this.instancesDeferred.get(normalizedIdentifier).promise;
    };
    Provider.prototype.getImmediate = function (options) {
        var _a = tslib.__assign({ identifier: DEFAULT_ENTRY_NAME, optional: false }, options), identifier = _a.identifier, optional = _a.optional;
        // if multipleInstances is not supported, use the default name
        var normalizedIdentifier = this.normalizeInstanceIdentifier(identifier);
        try {
            var instance = this.getOrInitializeService(normalizedIdentifier);
            if (!instance) {
                if (optional) {
                    return null;
                }
                throw Error("Service " + this.name + " is not available");
            }
            return instance;
        }
        catch (e) {
            if (optional) {
                return null;
            }
            else {
                throw e;
            }
        }
    };
    Provider.prototype.getComponent = function () {
        return this.component;
    };
    Provider.prototype.setComponent = function (component) {
        var e_1, _a;
        if (component.name !== this.name) {
            throw Error("Mismatching Component " + component.name + " for Provider " + this.name + ".");
        }
        if (this.component) {
            throw Error("Component for " + this.name + " has already been provided");
        }
        this.component = component;
        // if the service is eager, initialize the default instance
        if (isComponentEager(component)) {
            try {
                this.getOrInitializeService(DEFAULT_ENTRY_NAME);
            }
            catch (e) {
                // when the instance factory for an eager Component throws an exception during the eager
                // initialization, it should not cause a fatal error.
                // TODO: Investigate if we need to make it configurable, because some component may want to cause
                // a fatal error in this case?
            }
        }
        try {
            // Create service instances for the pending promises and resolve them
            // NOTE: if this.multipleInstances is false, only the default instance will be created
            // and all promises with resolve with it regardless of the identifier.
            for (var _b = tslib.__values(this.instancesDeferred.entries()), _c = _b.next(); !_c.done; _c = _b.next()) {
                var _d = tslib.__read(_c.value, 2), instanceIdentifier = _d[0], instanceDeferred = _d[1];
                var normalizedIdentifier = this.normalizeInstanceIdentifier(instanceIdentifier);
                try {
                    // `getOrInitializeService()` should always return a valid instance since a component is guaranteed. use ! to make typescript happy.
                    var instance = this.getOrInitializeService(normalizedIdentifier);
                    instanceDeferred.resolve(instance);
                }
                catch (e) {
                    // when the instance factory throws an exception, it should not cause
                    // a fatal error. We just leave the promise unresolved.
                }
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_1) throw e_1.error; }
        }
    };
    Provider.prototype.clearInstance = function (identifier) {
        if (identifier === void 0) { identifier = DEFAULT_ENTRY_NAME; }
        this.instancesDeferred.delete(identifier);
        this.instances.delete(identifier);
    };
    // app.delete() will call this method on every provider to delete the services
    // TODO: should we mark the provider as deleted?
    Provider.prototype.delete = function () {
        return tslib.__awaiter(this, void 0, void 0, function () {
            var services;
            return tslib.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        services = Array.from(this.instances.values());
                        return [4 /*yield*/, Promise.all(services
                                .filter(function (service) { return 'INTERNAL' in service; })
                                // eslint-disable-next-line @typescript-eslint/no-explicit-any
                                .map(function (service) { return service.INTERNAL.delete(); }))];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    Provider.prototype.isComponentSet = function () {
        return this.component != null;
    };
    Provider.prototype.getOrInitializeService = function (identifier) {
        var instance = this.instances.get(identifier);
        if (!instance && this.component) {
            instance = this.component.instanceFactory(this.container, normalizeIdentifierForFactory(identifier));
            this.instances.set(identifier, instance);
        }
        return instance || null;
    };
    Provider.prototype.normalizeInstanceIdentifier = function (identifier) {
        if (this.component) {
            return this.component.multipleInstances ? identifier : DEFAULT_ENTRY_NAME;
        }
        else {
            return identifier; // assume multiple instances are supported before the component is provided.
        }
    };
    return Provider;
}());
// undefined should be passed to the service factory for the default instance
function normalizeIdentifierForFactory(identifier) {
    return identifier === DEFAULT_ENTRY_NAME ? undefined : identifier;
}
function isComponentEager(component) {
    return component.instantiationMode === "EAGER" /* EAGER */;
}

/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * ComponentContainer that provides Providers for service name T, e.g. `auth`, `auth-internal`
 */
var ComponentContainer = /** @class */ (function () {
    function ComponentContainer(name) {
        this.name = name;
        this.providers = new Map();
    }
    /**
     *
     * @param component Component being added
     * @param overwrite When a component with the same name has already been registered,
     * if overwrite is true: overwrite the existing component with the new component and create a new
     * provider with the new component. It can be useful in tests where you want to use different mocks
     * for different tests.
     * if overwrite is false: throw an exception
     */
    ComponentContainer.prototype.addComponent = function (component) {
        var provider = this.getProvider(component.name);
        if (provider.isComponentSet()) {
            throw new Error("Component " + component.name + " has already been registered with " + this.name);
        }
        provider.setComponent(component);
    };
    ComponentContainer.prototype.addOrOverwriteComponent = function (component) {
        var provider = this.getProvider(component.name);
        if (provider.isComponentSet()) {
            // delete the existing provider from the container, so we can register the new component
            this.providers.delete(component.name);
        }
        this.addComponent(component);
    };
    /**
     * getProvider provides a type safe interface where it can only be called with a field name
     * present in NameServiceMapping interface.
     *
     * Firebase SDKs providing services should extend NameServiceMapping interface to register
     * themselves.
     */
    ComponentContainer.prototype.getProvider = function (name) {
        if (this.providers.has(name)) {
            return this.providers.get(name);
        }
        // create a Provider for a service that hasn't registered with Firebase
        var provider = new Provider(name, this);
        this.providers.set(name, provider);
        return provider;
    };
    ComponentContainer.prototype.getProviders = function () {
        return Array.from(this.providers.values());
    };
    return ComponentContainer;
}());

exports.Component = Component;
exports.ComponentContainer = ComponentContainer;
exports.Provider = Provider;
//# sourceMappingURL=index.cjs.js.map


/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.unregisterApiPushape = exports.registerApiPushape = void 0;
var pushapeUrl = 'https://gluepushape.appspot.com';
function registerApiPushape(options, retryOnError, retryAfter) {
    if (retryOnError === void 0) { retryOnError = false; }
    if (retryAfter === void 0) { retryAfter = 5000; }
    return __awaiter(this, void 0, void 0, function () {
        var url, e_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    url = pushapeUrl + "/subscribe";
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 3, , 4]);
                    return [4 /*yield*/, fetch(url, {
                            method: 'POST',
                            headers: new Headers({
                                Accept: 'application/json',
                                'Content-Type': 'application/json',
                            }),
                            body: JSON.stringify(options),
                        })];
                case 2: return [2 /*return*/, _a.sent()];
                case 3:
                    e_1 = _a.sent();
                    if (retryOnError) {
                        setTimeout(function () { return registerApiPushape(options, retryOnError, retryAfter); }, retryAfter);
                    }
                    return [3 /*break*/, 4];
                case 4: return [2 /*return*/];
            }
        });
    });
}
exports.registerApiPushape = registerApiPushape;
function unregisterApiPushape(options) {
    var url = pushapeUrl + "/subscribe";
    return fetch(url, {
        method: 'DELETE',
        headers: new Headers({
            Accept: 'application/json',
            'Content-Type': 'application/json',
        }),
        body: JSON.stringify(options),
    });
}
exports.unregisterApiPushape = unregisterApiPushape;


/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.showNotification = exports.initializeSwListeners = exports.initializeFirebaseServiveWorker = exports.initializeFirebase = void 0;
__webpack_require__(18);
var app_1 = __webpack_require__(15);
function initializeFirebase(options) {
    var appId = options.appId, apiKey = options.apiKey, authDomain = options.authDomain, projectId = options.projectId, messagingSenderId = options.messagingSenderId;
    try {
        var firebaseApp = app_1.initializeApp({
            appId: appId,
            apiKey: apiKey,
            authDomain: authDomain,
            projectId: projectId,
            messagingSenderId: messagingSenderId,
        });
        return firebaseApp;
    }
    catch (e) {
        console.error('[PushapeJS] Error \n', e);
        throw new Error('[PushapeJS] Error during initialization process');
    }
}
exports.initializeFirebase = initializeFirebase;
function initializeFirebaseServiveWorker(firebaseApp, pushEventCb, swPathName) {
    if (pushEventCb === void 0) { pushEventCb = function (_) { return undefined; }; }
    if (swPathName === void 0) { swPathName = 'firebase-messaging-sw.js'; }
    return __awaiter(this, void 0, void 0, function () {
        var registration, e_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (!('serviceWorker' in navigator)) return [3 /*break*/, 5];
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 3, , 4]);
                    return [4 /*yield*/, navigator.serviceWorker.register(swPathName)];
                case 2:
                    registration = _a.sent();
                    if (app_1.default.messaging.isSupported()) {
                        firebaseApp.messaging().useServiceWorker(registration);
                        registration.addEventListener('push', function (event) {
                            console.log('[PushapeJS] Event push', event);
                            pushEventCb(event);
                        });
                    }
                    else {
                        console.warn('[PushapeJS] Firebase messagign not supported');
                    }
                    return [2 /*return*/, registration];
                case 3:
                    e_1 = _a.sent();
                    throw new Error("[PushapeJS] " + e_1);
                case 4: return [3 /*break*/, 6];
                case 5: throw new Error('[PushapeJS] Cannot register service worker because is not supported in the browser');
                case 6: return [2 /*return*/];
            }
        });
    });
}
exports.initializeFirebaseServiveWorker = initializeFirebaseServiveWorker;
function initializeSwListeners(registration, notificationclickEventCb, 
/** If set the show notification function not will be triggered */
pushapeEventCb) {
    if (notificationclickEventCb === void 0) { notificationclickEventCb = function (_) { return undefined; }; }
    navigator.serviceWorker.addEventListener('message', function (msg) {
        if (msg.data.event === 'pushape') {
            console.log('[PushapeJS] Event pushape \n', msg.data);
            if (pushapeEventCb) {
                pushapeEventCb(msg);
            }
            else {
                showNotification(registration, msg);
            }
        }
        else if (msg.data.event === 'notificationclick') {
            console.log('[PushapeJS] Event notificationclick \n', msg.data);
            notificationclickEventCb(msg);
        }
        else {
            console.warn('[PushapeJS] Unhandled Event \n', msg);
        }
    });
}
exports.initializeSwListeners = initializeSwListeners;
function showNotification(registration, msg) {
    var notification = msg.data.payload.notification;
    var data = msg.data.payload.data;
    var title = notification.title;
    var options = {
        body: notification.body,
        icon: notification.icon,
        badge: notification.badge,
        vibrate: [100, 50, 100, 100, 50, 100, 100, 50, 100],
        data: {
            click_action: data.click_action
        },
        // click_action: notification.click_action,
        need_interaction: true
    };
    registration.showNotification(title, options);
}
exports.showNotification = showNotification;


/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.askForPermissions = void 0;
var browser_detect_1 = __webpack_require__(8);
function askForPermissions(firebaseApp, websiteUrl) {
    return __awaiter(this, void 0, void 0, function () {
        var browser, message, token;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    browser = browser_detect_1.default().name;
                    if (browser === 'safari') {
                        return [2 /*return*/, checkSafariRemotePermission(websiteUrl)];
                    }
                    message = firebaseApp.messaging();
                    return [4 /*yield*/, message.getToken()];
                case 1:
                    token = _a.sent();
                    return [2 /*return*/, token];
            }
        });
    });
}
exports.askForPermissions = askForPermissions;
function checkSafariRemotePermission(websiteUrl) {
    return __awaiter(this, void 0, void 0, function () {
        var untypedWindow, permissionData;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    untypedWindow = window;
                    // TODO: Too much long and maybe not necessary
                    if (!untypedWindow.safari && !untypedWindow.safari.pushNotification && untypedWindow.safari.pushNotification.permission) {
                        return [2 /*return*/, false];
                    }
                    permissionData = untypedWindow.safari.pushNotification.permission(websiteUrl);
                    if (!(permissionData.permission === 'default')) return [3 /*break*/, 2];
                    // This is a new web service URL and its validity is unknown.
                    return [4 /*yield*/, untypedWindow.safari.pushNotification.requestPermission('https://apple1-dot-gluepushape.appspot.com', // The web service URL.
                        websiteUrl, // The Website Push ID.
                        {}, // Data that you choose to send to your server to help you identify the user.
                        function () {
                            // TODO: Why? computeteSafariResponse(e);
                            return computeteSafariResponse(permissionData);
                        })];
                case 1:
                    // This is a new web service URL and its validity is unknown.
                    _a.sent();
                    return [3 /*break*/, 3];
                case 2: return [2 /*return*/, computeteSafariResponse(permissionData)];
                case 3: return [2 /*return*/];
            }
        });
    });
}
// FIXME: Improve type with some standard
function computeteSafariResponse(permissionData) {
    if (permissionData.permission === 'denied') {
        // The user said no.
        return undefined;
    }
    else if (permissionData.permission === 'granted') {
        // The web service URL is a valid push provider, and the user said yes.
        // permissionData.deviceToken is now available to use.
        return permissionData.deviceToken;
    }
    else {
        return undefined;
    }
}


/***/ }),
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(process) {/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */

var __assign = Object.assign || function __assign(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
    }
    return t;
};

var browsers = [
    ['firefox', /Firefox\/([0-9\.]+)(?:\s|$)/],
    ['opera', /Opera\/([0-9\.]+)(?:\s|$)/],
    ['opera', /OPR\/([0-9\.]+)(:?\s|$)$/],
    ['edge', /Edge\/([0-9\._]+)/],
    ['ie', /Trident\/7\.0.*rv\:([0-9\.]+)\).*Gecko$/],
    ['ie', /MSIE\s([0-9\.]+);.*Trident\/[4-7].0/],
    ['ie', /MSIE\s(7\.0)/],
    ['safari', /Version\/([0-9\._]+).*Safari/],
    ['chrome', /(?!Chrom.*OPR)Chrom(?:e|ium)\/([0-9\.]+)(:?\s|$)/],
    ['bb10', /BB10;\sTouch.*Version\/([0-9\.]+)/],
    ['android', /Android\s([0-9\.]+)/],
    ['ios', /Version\/([0-9\._]+).*Mobile.*Safari.*/],
    ['yandexbrowser', /YaBrowser\/([0-9\._]+)/],
    ['crios', /CriOS\/([0-9\.]+)(:?\s|$)/]
];
var os = [
    'Windows Phone',
    'Android',
    'CentOS',
    { name: 'Chrome OS', pattern: 'CrOS' },
    'Debian',
    'Fedora',
    'FreeBSD',
    'Gentoo',
    'Haiku',
    'Kubuntu',
    'Linux Mint',
    'OpenBSD',
    'Red Hat',
    'SuSE',
    'Ubuntu',
    'Xubuntu',
    'Cygwin',
    'Symbian OS',
    'hpwOS',
    'webOS ',
    'webOS',
    'Tablet OS',
    'Tizen',
    'Linux',
    'Mac OS X',
    'Macintosh',
    'Mac',
    'Windows 98;',
    'Windows '
];
var osVersions = {
    '10.0': '10',
    '6.4': '10 Technical Preview',
    '6.3': '8.1',
    '6.2': '8',
    '6.1': 'Server 2008 R2 / 7',
    '6.0': 'Server 2008 / Vista',
    '5.2': 'Server 2003 / XP 64-bit',
    '5.1': 'XP',
    '5.01': '2000 SP1',
    '5.0': '2000',
    '4.0': 'NT',
    '4.90': 'ME'
};

var mobileRegExp = new RegExp(['(android|bb\\d+|meego).+mobile|avantgo|bada\\/|blackberry|blazer|',
    'compal|elaine|fennec|hiptop|iemobile|ip(hone|od|ad)|iris|kindle|lge |maemo|',
    'midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)',
    '\\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\\.(browser|link)|vodafone|',
    'wap|windows ce|xda|xiino'].join(''), 'i');
var mobilePrefixRegExp = new RegExp(['1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\\-)|',
    'ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\\-m|r |s )|',
    'avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\\-(n|u)|c55\\/|capi|ccwa|cdm\\-|',
    'cell|chtm|cldc|cmd\\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\\-s|devi|dica|dmob|do(c|p)o|',
    'ds(12|\\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\\-|_)|',
    'g1 u|g560|gene|gf\\-5|g\\-mo|go(\\.w|od)|gr(ad|un)|haie|hcit|hd\\-(m|p|t)|hei\\-|',
    'hi(pt|ta)|hp( i|ip)|hs\\-c|ht(c(\\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\\-(20|go|ma)|',
    'i230|iac( |\\-|\\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|',
    'kddi|keji|kgt( |\\/)|klon|kpt |kwc\\-|kyo(c|k)|le(no|xi)|lg( g|\\/(k|l|u)|50|54|\\-[a-w])',
    '|libw|lynx|m1\\-w|m3ga|m50\\/|ma(te|ui|xo)|mc(01|21|ca)|m\\-cr|me(rc|ri)|mi(o8|oa|ts)|',
    'mmef|mo(01|02|bi|de|do|t(\\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|',
    'n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|',
    'op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\\-2|',
    'po(ck|rt|se)|prox|psio|pt\\-g|qa\\-a|qc(07|12|21|32|60|\\-[2-7]|i\\-)|qtek|r380|r600|',
    'raks|rim9|ro(ve|zo)|s55\\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\\-|oo|p\\-)|sdk\\/|',
    'se(c(\\-|0|1)|47|mc|nd|ri)|sgh\\-|shar|sie(\\-|m)|k\\-0|sl(45|id)|sm(al|ar|b3|it|t5)|',
    'so(ft|ny)|sp(01|h\\-|v\\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\\-|tdg\\-|',
    'tel(i|m)|tim\\-|t\\-mo|to(pl|sh)|ts(70|m\\-|m3|m5)|tx\\-9|up(\\.b|g1|si)|utst|v400|v750|',
    'veri|vi(rg|te)|vk(40|5[0-3]|\\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|',
    'w3c(\\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\\-|your|zeto|zte\\-'].join(''), 'i');

var Detector = /** @class */ (function () {
    function Detector(userAgent, navigator, process) {
        this.navigator = navigator;
        this.process = process;
        this.userAgent = userAgent
            ? userAgent
            : this.navigator ? (navigator.userAgent || navigator.vendor) : '';
    }
    Detector.prototype.detect = function () {
        if (this.process && !this.userAgent) {
            var version = this.process.version.slice(1).split('.').slice(0, 3);
            var versionTail = Array.prototype.slice.call(version, 1).join('') || '0';
            return {
                name: 'node',
                version: version.join('.'),
                versionNumber: parseFloat(version[0] + "." + versionTail),
                mobile: false,
                os: this.process.platform
            };
        }
        if (!this.userAgent)
            this.handleMissingError();
        return __assign({}, this.checkBrowser(), this.checkMobile(), this.checkOs());
    };
    Detector.prototype.checkBrowser = function () {
        var _this = this;
        return browsers
            .filter(function (definition) { return definition[1].test(_this.userAgent); })
            .map(function (definition) {
            var match = definition[1].exec(_this.userAgent);
            var version = match && match[1].split(/[._]/).slice(0, 3);
            var versionTails = Array.prototype.slice.call(version, 1).join('') || '0';
            if (version && version.length < 3)
                Array.prototype.push.apply(version, version.length === 1 ? [0, 0] : [0]);
            return {
                name: String(definition[0]),
                version: version.join('.'),
                versionNumber: Number(version[0] + "." + versionTails)
            };
        })
            .shift();
    };
    Detector.prototype.checkMobile = function () {
        var agentPrefix = this.userAgent.substr(0, 4);
        var mobile = mobileRegExp.test(this.userAgent) || mobilePrefixRegExp.test(agentPrefix);
        return { mobile: mobile };
    };
    Detector.prototype.checkOs = function () {
        var _this = this;
        return os
            .map(function (definition) {
            var name = definition.name || definition;
            var pattern = _this.getOsPattern(definition);
            return {
                name: name,
                pattern: pattern,
                value: RegExp("\\b" + pattern.replace(/([ -])(?!$)/g, '$1?') + "(?:x?[\\d._]+|[ \\w.]*)", 'i').exec(_this.userAgent)
            };
        })
            .filter(function (definition) { return definition.value; })
            .map(function (definition) {
            var os$$1 = definition.value[0] || '';
            var osSuffix;
            if (definition.pattern &&
                definition.name &&
                /^Win/i.test(os$$1) &&
                !/^Windows Phone /i.test(os$$1) &&
                (osSuffix = osVersions[os$$1.replace(/[^\d.]/g, '')]))
                os$$1 = "Windows " + osSuffix;
            if (definition.pattern && definition.name)
                os$$1 = os$$1.replace(RegExp(definition.pattern, 'i'), definition.name);
            os$$1 = os$$1
                .replace(/ ce$/i, ' CE')
                .replace(/\bhpw/i, 'web')
                .replace(/\bMacintosh\b/, 'Mac OS')
                .replace(/_PowerPC\b/i, ' OS')
                .replace(/\b(OS X) [^ \d]+/i, '$1')
                .replace(/\bMac (OS X)\b/, '$1')
                .replace(/\/(\d)/, ' $1')
                .replace(/_/g, '.')
                .replace(/(?: BePC|[ .]*fc[ \d.]+)$/i, '')
                .replace(/\bx86\.64\b/gi, 'x86_64')
                .replace(/\b(Windows Phone) OS\b/, '$1')
                .replace(/\b(Chrome OS \w+) [\d.]+\b/, '$1')
                .split(' on ')[0]
                .trim();
            os$$1 = /^(?:webOS|i(?:OS|P))/.test(os$$1)
                ? os$$1
                : (os$$1.charAt(0).toUpperCase() + os$$1.slice(1));
            return { os: os$$1 };
        })
            .shift();
    };
    Detector.prototype.getOsPattern = function (definition) {
        var definitionInterface = definition;
        return (typeof definition === 'string'
            ? definition
            : undefined) ||
            definitionInterface.pattern ||
            definitionInterface.name;
    };
    Detector.prototype.handleMissingError = function () {
        throw new Error('Please give user-agent.\n> browser(navigator.userAgent or res.headers[\'user-agent\']).');
    };
    return Detector;
}());

function createCommonjsModule(fn, module) {
	return module = { exports: {} }, fn(module, module.exports), module.exports;
}

var _global = createCommonjsModule(function (module) {
// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
var global = module.exports = typeof window != 'undefined' && window.Math == Math
  ? window : typeof self != 'undefined' && self.Math == Math ? self
  // eslint-disable-next-line no-new-func
  : Function('return this')();
if (typeof __g == 'number') __g = global; // eslint-disable-line no-undef
});

var _core = createCommonjsModule(function (module) {
var core = module.exports = { version: '2.5.7' };
if (typeof __e == 'number') __e = core; // eslint-disable-line no-undef
});
var _core_1 = _core.version;

var _isObject = function (it) {
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};

var _anObject = function (it) {
  if (!_isObject(it)) throw TypeError(it + ' is not an object!');
  return it;
};

var _fails = function (exec) {
  try {
    return !!exec();
  } catch (e) {
    return true;
  }
};

// Thank's IE8 for his funny defineProperty
var _descriptors = !_fails(function () {
  return Object.defineProperty({}, 'a', { get: function () { return 7; } }).a != 7;
});

var document = _global.document;
// typeof document.createElement is 'object' in old IE
var is = _isObject(document) && _isObject(document.createElement);
var _domCreate = function (it) {
  return is ? document.createElement(it) : {};
};

var _ie8DomDefine = !_descriptors && !_fails(function () {
  return Object.defineProperty(_domCreate('div'), 'a', { get: function () { return 7; } }).a != 7;
});

// 7.1.1 ToPrimitive(input [, PreferredType])

// instead of the ES6 spec version, we didn't implement @@toPrimitive case
// and the second argument - flag - preferred type is a string
var _toPrimitive = function (it, S) {
  if (!_isObject(it)) return it;
  var fn, val;
  if (S && typeof (fn = it.toString) == 'function' && !_isObject(val = fn.call(it))) return val;
  if (typeof (fn = it.valueOf) == 'function' && !_isObject(val = fn.call(it))) return val;
  if (!S && typeof (fn = it.toString) == 'function' && !_isObject(val = fn.call(it))) return val;
  throw TypeError("Can't convert object to primitive value");
};

var dP = Object.defineProperty;

var f = _descriptors ? Object.defineProperty : function defineProperty(O, P, Attributes) {
  _anObject(O);
  P = _toPrimitive(P, true);
  _anObject(Attributes);
  if (_ie8DomDefine) try {
    return dP(O, P, Attributes);
  } catch (e) { /* empty */ }
  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported!');
  if ('value' in Attributes) O[P] = Attributes.value;
  return O;
};

var _objectDp = {
	f: f
};

var _propertyDesc = function (bitmap, value) {
  return {
    enumerable: !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable: !(bitmap & 4),
    value: value
  };
};

var _hide = _descriptors ? function (object, key, value) {
  return _objectDp.f(object, key, _propertyDesc(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};

var hasOwnProperty = {}.hasOwnProperty;
var _has = function (it, key) {
  return hasOwnProperty.call(it, key);
};

var id = 0;
var px = Math.random();
var _uid = function (key) {
  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
};

var _redefine = createCommonjsModule(function (module) {
var SRC = _uid('src');
var TO_STRING = 'toString';
var $toString = Function[TO_STRING];
var TPL = ('' + $toString).split(TO_STRING);

_core.inspectSource = function (it) {
  return $toString.call(it);
};

(module.exports = function (O, key, val, safe) {
  var isFunction = typeof val == 'function';
  if (isFunction) _has(val, 'name') || _hide(val, 'name', key);
  if (O[key] === val) return;
  if (isFunction) _has(val, SRC) || _hide(val, SRC, O[key] ? '' + O[key] : TPL.join(String(key)));
  if (O === _global) {
    O[key] = val;
  } else if (!safe) {
    delete O[key];
    _hide(O, key, val);
  } else if (O[key]) {
    O[key] = val;
  } else {
    _hide(O, key, val);
  }
// add fake Function#toString for correct work wrapped methods / constructors with methods like LoDash isNative
})(Function.prototype, TO_STRING, function toString() {
  return typeof this == 'function' && this[SRC] || $toString.call(this);
});
});

var _aFunction = function (it) {
  if (typeof it != 'function') throw TypeError(it + ' is not a function!');
  return it;
};

// optional / simple context binding

var _ctx = function (fn, that, length) {
  _aFunction(fn);
  if (that === undefined) return fn;
  switch (length) {
    case 1: return function (a) {
      return fn.call(that, a);
    };
    case 2: return function (a, b) {
      return fn.call(that, a, b);
    };
    case 3: return function (a, b, c) {
      return fn.call(that, a, b, c);
    };
  }
  return function (/* ...args */) {
    return fn.apply(that, arguments);
  };
};

var PROTOTYPE = 'prototype';

var $export = function (type, name, source) {
  var IS_FORCED = type & $export.F;
  var IS_GLOBAL = type & $export.G;
  var IS_STATIC = type & $export.S;
  var IS_PROTO = type & $export.P;
  var IS_BIND = type & $export.B;
  var target = IS_GLOBAL ? _global : IS_STATIC ? _global[name] || (_global[name] = {}) : (_global[name] || {})[PROTOTYPE];
  var exports = IS_GLOBAL ? _core : _core[name] || (_core[name] = {});
  var expProto = exports[PROTOTYPE] || (exports[PROTOTYPE] = {});
  var key, own, out, exp;
  if (IS_GLOBAL) source = name;
  for (key in source) {
    // contains in native
    own = !IS_FORCED && target && target[key] !== undefined;
    // export native or passed
    out = (own ? target : source)[key];
    // bind timers to global for call from export context
    exp = IS_BIND && own ? _ctx(out, _global) : IS_PROTO && typeof out == 'function' ? _ctx(Function.call, out) : out;
    // extend global
    if (target) _redefine(target, key, out, type & $export.U);
    // export
    if (exports[key] != out) _hide(exports, key, exp);
    if (IS_PROTO && expProto[key] != out) expProto[key] = out;
  }
};
_global.core = _core;
// type bitmap
$export.F = 1;   // forced
$export.G = 2;   // global
$export.S = 4;   // static
$export.P = 8;   // proto
$export.B = 16;  // bind
$export.W = 32;  // wrap
$export.U = 64;  // safe
$export.R = 128; // real proto method for `library`
var _export = $export;

var toString = {}.toString;

var _cof = function (it) {
  return toString.call(it).slice(8, -1);
};

// fallback for non-array-like ES3 and non-enumerable old V8 strings

// eslint-disable-next-line no-prototype-builtins
var _iobject = Object('z').propertyIsEnumerable(0) ? Object : function (it) {
  return _cof(it) == 'String' ? it.split('') : Object(it);
};

// 7.2.1 RequireObjectCoercible(argument)
var _defined = function (it) {
  if (it == undefined) throw TypeError("Can't call method on  " + it);
  return it;
};

// 7.1.13 ToObject(argument)

var _toObject = function (it) {
  return Object(_defined(it));
};

// 7.1.4 ToInteger
var ceil = Math.ceil;
var floor = Math.floor;
var _toInteger = function (it) {
  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
};

// 7.1.15 ToLength

var min = Math.min;
var _toLength = function (it) {
  return it > 0 ? min(_toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
};

// 7.2.2 IsArray(argument)

var _isArray = Array.isArray || function isArray(arg) {
  return _cof(arg) == 'Array';
};

var _shared = createCommonjsModule(function (module) {
var SHARED = '__core-js_shared__';
var store = _global[SHARED] || (_global[SHARED] = {});

(module.exports = function (key, value) {
  return store[key] || (store[key] = value !== undefined ? value : {});
})('versions', []).push({
  version: _core.version,
  mode: 'global',
  copyright: '© 2018 Denis Pushkarev (zloirock.ru)'
});
});

var _wks = createCommonjsModule(function (module) {
var store = _shared('wks');

var Symbol = _global.Symbol;
var USE_SYMBOL = typeof Symbol == 'function';

var $exports = module.exports = function (name) {
  return store[name] || (store[name] =
    USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : _uid)('Symbol.' + name));
};

$exports.store = store;
});

var SPECIES = _wks('species');

var _arraySpeciesConstructor = function (original) {
  var C;
  if (_isArray(original)) {
    C = original.constructor;
    // cross-realm fallback
    if (typeof C == 'function' && (C === Array || _isArray(C.prototype))) C = undefined;
    if (_isObject(C)) {
      C = C[SPECIES];
      if (C === null) C = undefined;
    }
  } return C === undefined ? Array : C;
};

// 9.4.2.3 ArraySpeciesCreate(originalArray, length)


var _arraySpeciesCreate = function (original, length) {
  return new (_arraySpeciesConstructor(original))(length);
};

// 0 -> Array#forEach
// 1 -> Array#map
// 2 -> Array#filter
// 3 -> Array#some
// 4 -> Array#every
// 5 -> Array#find
// 6 -> Array#findIndex





var _arrayMethods = function (TYPE, $create) {
  var IS_MAP = TYPE == 1;
  var IS_FILTER = TYPE == 2;
  var IS_SOME = TYPE == 3;
  var IS_EVERY = TYPE == 4;
  var IS_FIND_INDEX = TYPE == 6;
  var NO_HOLES = TYPE == 5 || IS_FIND_INDEX;
  var create = $create || _arraySpeciesCreate;
  return function ($this, callbackfn, that) {
    var O = _toObject($this);
    var self = _iobject(O);
    var f = _ctx(callbackfn, that, 3);
    var length = _toLength(self.length);
    var index = 0;
    var result = IS_MAP ? create($this, length) : IS_FILTER ? create($this, 0) : undefined;
    var val, res;
    for (;length > index; index++) if (NO_HOLES || index in self) {
      val = self[index];
      res = f(val, index, O);
      if (TYPE) {
        if (IS_MAP) result[index] = res;   // map
        else if (res) switch (TYPE) {
          case 3: return true;             // some
          case 5: return val;              // find
          case 6: return index;            // findIndex
          case 2: result.push(val);        // filter
        } else if (IS_EVERY) return false; // every
      }
    }
    return IS_FIND_INDEX ? -1 : IS_SOME || IS_EVERY ? IS_EVERY : result;
  };
};

var _strictMethod = function (method, arg) {
  return !!method && _fails(function () {
    // eslint-disable-next-line no-useless-call
    arg ? method.call(null, function () { /* empty */ }, 1) : method.call(null);
  });
};

var $filter = _arrayMethods(2);

_export(_export.P + _export.F * !_strictMethod([].filter, true), 'Array', {
  // 22.1.3.7 / 15.4.4.20 Array.prototype.filter(callbackfn [, thisArg])
  filter: function filter(callbackfn /* , thisArg */) {
    return $filter(this, callbackfn, arguments[1]);
  }
});

var filter = _core.Array.filter;

var $map = _arrayMethods(1);

_export(_export.P + _export.F * !_strictMethod([].map, true), 'Array', {
  // 22.1.3.15 / 15.4.4.19 Array.prototype.map(callbackfn [, thisArg])
  map: function map(callbackfn /* , thisArg */) {
    return $map(this, callbackfn, arguments[1]);
  }
});

var map = _core.Array.map;

var _stringWs = '\x09\x0A\x0B\x0C\x0D\x20\xA0\u1680\u180E\u2000\u2001\u2002\u2003' +
  '\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000\u2028\u2029\uFEFF';

var space = '[' + _stringWs + ']';
var non = '\u200b\u0085';
var ltrim = RegExp('^' + space + space + '*');
var rtrim = RegExp(space + space + '*$');

var exporter = function (KEY, exec, ALIAS) {
  var exp = {};
  var FORCE = _fails(function () {
    return !!_stringWs[KEY]() || non[KEY]() != non;
  });
  var fn = exp[KEY] = FORCE ? exec(trim) : _stringWs[KEY];
  if (ALIAS) exp[ALIAS] = fn;
  _export(_export.P + _export.F * FORCE, 'String', exp);
};

// 1 -> String#trimLeft
// 2 -> String#trimRight
// 3 -> String#trim
var trim = exporter.trim = function (string, TYPE) {
  string = String(_defined(string));
  if (TYPE & 1) string = string.replace(ltrim, '');
  if (TYPE & 2) string = string.replace(rtrim, '');
  return string;
};

var _stringTrim = exporter;

// 21.1.3.25 String.prototype.trim()
_stringTrim('trim', function ($trim) {
  return function trim() {
    return $trim(this, 3);
  };
});

var trim$1 = _core.String.trim;

var injectableNavigator = typeof window !== 'undefined'
    ? window.navigator
    : undefined;
var injectableProcess = typeof process !== 'undefined'
    ? process
    : undefined;
function browserDetect (userAgent) {
    var detector = new Detector(userAgent, injectableNavigator, injectableProcess);
    return detector.detect();
}

/* harmony default export */ __webpack_exports__["default"] = (browserDetect);
//# sourceMappingURL=browser-detect.es5.js.map

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(16)))

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(10);


/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !exports.hasOwnProperty(p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
__exportStar(__webpack_require__(11), exports);
__exportStar(__webpack_require__(12), exports);
__exportStar(__webpack_require__(5), exports);
__exportStar(__webpack_require__(6), exports);
__exportStar(__webpack_require__(7), exports);
__exportStar(__webpack_require__(17), exports);


/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });


/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });


/***/ }),
/* 13 */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || new Function("return this")();
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),
/* 14 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LogLevel", function() { return LogLevel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Logger", function() { return Logger; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setLogLevel", function() { return setLogLevel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setUserLogHandler", function() { return setUserLogHandler; });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
}

/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var _a;
/**
 * A container for all of the Logger instances
 */
var instances = [];
/**
 * The JS SDK supports 5 log levels and also allows a user the ability to
 * silence the logs altogether.
 *
 * The order is a follows:
 * DEBUG < VERBOSE < INFO < WARN < ERROR
 *
 * All of the log types above the current log level will be captured (i.e. if
 * you set the log level to `INFO`, errors will still be logged, but `DEBUG` and
 * `VERBOSE` logs will not)
 */
var LogLevel;
(function (LogLevel) {
    LogLevel[LogLevel["DEBUG"] = 0] = "DEBUG";
    LogLevel[LogLevel["VERBOSE"] = 1] = "VERBOSE";
    LogLevel[LogLevel["INFO"] = 2] = "INFO";
    LogLevel[LogLevel["WARN"] = 3] = "WARN";
    LogLevel[LogLevel["ERROR"] = 4] = "ERROR";
    LogLevel[LogLevel["SILENT"] = 5] = "SILENT";
})(LogLevel || (LogLevel = {}));
var levelStringToEnum = {
    'debug': LogLevel.DEBUG,
    'verbose': LogLevel.VERBOSE,
    'info': LogLevel.INFO,
    'warn': LogLevel.WARN,
    'error': LogLevel.ERROR,
    'silent': LogLevel.SILENT
};
/**
 * The default log level
 */
var defaultLogLevel = LogLevel.INFO;
/**
 * By default, `console.debug` is not displayed in the developer console (in
 * chrome). To avoid forcing users to have to opt-in to these logs twice
 * (i.e. once for firebase, and once in the console), we are sending `DEBUG`
 * logs to the `console.log` function.
 */
var ConsoleMethod = (_a = {},
    _a[LogLevel.DEBUG] = 'log',
    _a[LogLevel.VERBOSE] = 'log',
    _a[LogLevel.INFO] = 'info',
    _a[LogLevel.WARN] = 'warn',
    _a[LogLevel.ERROR] = 'error',
    _a);
/**
 * The default log handler will forward DEBUG, VERBOSE, INFO, WARN, and ERROR
 * messages on to their corresponding console counterparts (if the log method
 * is supported by the current log level)
 */
var defaultLogHandler = function (instance, logType) {
    var args = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        args[_i - 2] = arguments[_i];
    }
    if (logType < instance.logLevel) {
        return;
    }
    var now = new Date().toISOString();
    var method = ConsoleMethod[logType];
    if (method) {
        console[method].apply(console, __spreadArrays(["[" + now + "]  " + instance.name + ":"], args));
    }
    else {
        throw new Error("Attempted to log a message with an invalid logType (value: " + logType + ")");
    }
};
var Logger = /** @class */ (function () {
    /**
     * Gives you an instance of a Logger to capture messages according to
     * Firebase's logging scheme.
     *
     * @param name The name that the logs will be associated with
     */
    function Logger(name) {
        this.name = name;
        /**
         * The log level of the given Logger instance.
         */
        this._logLevel = defaultLogLevel;
        /**
         * The main (internal) log handler for the Logger instance.
         * Can be set to a new function in internal package code but not by user.
         */
        this._logHandler = defaultLogHandler;
        /**
         * The optional, additional, user-defined log handler for the Logger instance.
         */
        this._userLogHandler = null;
        /**
         * Capture the current instance for later use
         */
        instances.push(this);
    }
    Object.defineProperty(Logger.prototype, "logLevel", {
        get: function () {
            return this._logLevel;
        },
        set: function (val) {
            if (!(val in LogLevel)) {
                throw new TypeError("Invalid value \"" + val + "\" assigned to `logLevel`");
            }
            this._logLevel = val;
        },
        enumerable: true,
        configurable: true
    });
    // Workaround for setter/getter having to be the same type.
    Logger.prototype.setLogLevel = function (val) {
        this._logLevel = typeof val === 'string' ? levelStringToEnum[val] : val;
    };
    Object.defineProperty(Logger.prototype, "logHandler", {
        get: function () {
            return this._logHandler;
        },
        set: function (val) {
            if (typeof val !== 'function') {
                throw new TypeError('Value assigned to `logHandler` must be a function');
            }
            this._logHandler = val;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Logger.prototype, "userLogHandler", {
        get: function () {
            return this._userLogHandler;
        },
        set: function (val) {
            this._userLogHandler = val;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * The functions below are all based on the `console` interface
     */
    Logger.prototype.debug = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        this._userLogHandler && this._userLogHandler.apply(this, __spreadArrays([this, LogLevel.DEBUG], args));
        this._logHandler.apply(this, __spreadArrays([this, LogLevel.DEBUG], args));
    };
    Logger.prototype.log = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        this._userLogHandler && this._userLogHandler.apply(this, __spreadArrays([this, LogLevel.VERBOSE], args));
        this._logHandler.apply(this, __spreadArrays([this, LogLevel.VERBOSE], args));
    };
    Logger.prototype.info = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        this._userLogHandler && this._userLogHandler.apply(this, __spreadArrays([this, LogLevel.INFO], args));
        this._logHandler.apply(this, __spreadArrays([this, LogLevel.INFO], args));
    };
    Logger.prototype.warn = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        this._userLogHandler && this._userLogHandler.apply(this, __spreadArrays([this, LogLevel.WARN], args));
        this._logHandler.apply(this, __spreadArrays([this, LogLevel.WARN], args));
    };
    Logger.prototype.error = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        this._userLogHandler && this._userLogHandler.apply(this, __spreadArrays([this, LogLevel.ERROR], args));
        this._logHandler.apply(this, __spreadArrays([this, LogLevel.ERROR], args));
    };
    return Logger;
}());
function setLogLevel(level) {
    instances.forEach(function (inst) {
        inst.setLogLevel(level);
    });
}
function setUserLogHandler(logCallback, options) {
    var _loop_1 = function (instance) {
        var customLogLevel = null;
        if (options && options.level) {
            customLogLevel = levelStringToEnum[options.level];
        }
        if (logCallback === null) {
            instance.userLogHandler = null;
        }
        else {
            instance.userLogHandler = function (instance, level) {
                var args = [];
                for (var _i = 2; _i < arguments.length; _i++) {
                    args[_i - 2] = arguments[_i];
                }
                var message = args
                    .map(function (arg) {
                    if (arg == null) {
                        return null;
                    }
                    else if (typeof arg === 'string') {
                        return arg;
                    }
                    else if (typeof arg === 'number' || typeof arg === 'boolean') {
                        return arg.toString();
                    }
                    else if (arg instanceof Error) {
                        return arg.message;
                    }
                    else {
                        try {
                            return JSON.stringify(arg);
                        }
                        catch (ignored) {
                            return null;
                        }
                    }
                })
                    .filter(function (arg) { return arg; })
                    .join(' ');
                if (level >= (customLogLevel !== null && customLogLevel !== void 0 ? customLogLevel : instance.logLevel)) {
                    logCallback({
                        level: LogLevel[level].toLowerCase(),
                        message: message,
                        args: args,
                        type: instance.name
                    });
                }
            };
        }
    };
    for (var _i = 0, instances_1 = instances; _i < instances_1.length; _i++) {
        var instance = instances_1[_i];
        _loop_1(instance);
    }
}


//# sourceMappingURL=index.esm.js.map


/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var firebase = _interopDefault(__webpack_require__(3));

var name = "firebase";
var version = "7.15.4";

/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
firebase.registerVersion(name, version, 'app');

module.exports = firebase;
//# sourceMappingURL=index.cjs.js.map


/***/ }),
/* 16 */
/***/ (function(module, exports) {

// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) { return [] }

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };


/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.initSimplePushape = exports.initPushape = void 0;
var browser_detect_1 = __webpack_require__(8);
var pushape_api_1 = __webpack_require__(5);
var firebase_utils_1 = __webpack_require__(6);
var permission_utils_1 = __webpack_require__(7);
function initPushape(pushapeOptions, firebaseOptions, websiteUrl, pushEventCb, notificationclickEventCb, 
/** If set the show notification function not will be triggered. */
pushapeEventCb, swPathName) {
    if (pushEventCb === void 0) { pushEventCb = function (_) { return undefined; }; }
    if (notificationclickEventCb === void 0) { notificationclickEventCb = function (_) { return undefined; }; }
    return __awaiter(this, void 0, void 0, function () {
        var firebaseApp, swRegistration, token, e_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    firebaseApp = firebase_utils_1.initializeFirebase(firebaseOptions);
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 5, , 6]);
                    return [4 /*yield*/, firebase_utils_1.initializeFirebaseServiveWorker(firebaseApp, pushEventCb, swPathName)];
                case 2:
                    swRegistration = _a.sent();
                    return [4 /*yield*/, permission_utils_1.askForPermissions(firebaseApp, websiteUrl)];
                case 3:
                    token = _a.sent();
                    firebase_utils_1.initializeSwListeners(swRegistration, notificationclickEventCb, pushapeEventCb);
                    pushapeOptions.regid = token; // FIXME: Wrong return type from askPermissions
                    pushapeOptions.platform = pushapeOptions.platform || browser_detect_1.default().name || 'not-found';
                    return [4 /*yield*/, pushape_api_1.registerApiPushape(pushapeOptions)];
                case 4:
                    _a.sent();
                    return [3 /*break*/, 6];
                case 5:
                    e_1 = _a.sent();
                    console.error(e_1);
                    console.log('[PushapeJS] Init Pushape failed');
                    return [3 /*break*/, 6];
                case 6: return [2 /*return*/];
            }
        });
    });
}
exports.initPushape = initPushape;
function initSimplePushape(pushapeOptions, token) {
    return __awaiter(this, void 0, void 0, function () {
        var e_2;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    pushapeOptions.regid = token || pushapeOptions.regid;
                    pushapeOptions.platform = pushapeOptions.platform || browser_detect_1.default().name || 'not-found';
                    return [4 /*yield*/, pushape_api_1.registerApiPushape(pushapeOptions)];
                case 1:
                    _a.sent();
                    return [3 /*break*/, 3];
                case 2:
                    e_2 = _a.sent();
                    console.error(e_2);
                    console.log('[PushapeJS] Init simple Pushape failed');
                    return [3 /*break*/, 3];
                case 3: return [2 /*return*/];
            }
        });
    });
}
exports.initSimplePushape = initSimplePushape;


/***/ }),
/* 18 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/@firebase/app/dist/index.cjs.js
var index_cjs = __webpack_require__(3);
var index_cjs_default = /*#__PURE__*/__webpack_require__.n(index_cjs);

// EXTERNAL MODULE: ./node_modules/@firebase/component/dist/index.cjs.js
var dist_index_cjs = __webpack_require__(4);

// EXTERNAL MODULE: ./node_modules/tslib/tslib.es6.js
var tslib_es6 = __webpack_require__(0);

// EXTERNAL MODULE: ./node_modules/@firebase/util/dist/index.cjs.js
var util_dist_index_cjs = __webpack_require__(2);

// EXTERNAL MODULE: ./node_modules/idb/build/idb.js
var idb = __webpack_require__(1);

// CONCATENATED MODULE: ./node_modules/@firebase/installations/dist/index.esm.js






var index_esm_name = "@firebase/installations";
var version = "0.4.12";

/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var PENDING_TIMEOUT_MS = 10000;
var PACKAGE_VERSION = "w:" + version;
var INTERNAL_AUTH_VERSION = 'FIS_v2';
var INSTALLATIONS_API_URL = 'https://firebaseinstallations.googleapis.com/v1';
var TOKEN_EXPIRATION_BUFFER = 60 * 60 * 1000; // One hour
var SERVICE = 'installations';
var SERVICE_NAME = 'Installations';

/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var index_esm_a;
var ERROR_DESCRIPTION_MAP = (index_esm_a = {},
    index_esm_a["missing-app-config-values" /* MISSING_APP_CONFIG_VALUES */] = 'Missing App configuration value: "{$valueName}"',
    index_esm_a["not-registered" /* NOT_REGISTERED */] = 'Firebase Installation is not registered.',
    index_esm_a["installation-not-found" /* INSTALLATION_NOT_FOUND */] = 'Firebase Installation not found.',
    index_esm_a["request-failed" /* REQUEST_FAILED */] = '{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',
    index_esm_a["app-offline" /* APP_OFFLINE */] = 'Could not process request. Application offline.',
    index_esm_a["delete-pending-registration" /* DELETE_PENDING_REGISTRATION */] = "Can't delete installation while there is a pending registration request.",
    index_esm_a);
var ERROR_FACTORY = new util_dist_index_cjs["ErrorFactory"](SERVICE, SERVICE_NAME, ERROR_DESCRIPTION_MAP);
/** Returns true if error is a FirebaseError that is based on an error from the server. */
function isServerError(error) {
    return (error instanceof util_dist_index_cjs["FirebaseError"] &&
        error.code.includes("request-failed" /* REQUEST_FAILED */));
}

/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function getInstallationsEndpoint(_a) {
    var projectId = _a.projectId;
    return INSTALLATIONS_API_URL + "/projects/" + projectId + "/installations";
}
function extractAuthTokenInfoFromResponse(response) {
    return {
        token: response.token,
        requestStatus: 2 /* COMPLETED */,
        expiresIn: getExpiresInFromResponseExpiresIn(response.expiresIn),
        creationTime: Date.now()
    };
}
function getErrorFromResponse(requestName, response) {
    return Object(tslib_es6["__awaiter"])(this, void 0, void 0, function () {
        var responseJson, errorData;
        return Object(tslib_es6["__generator"])(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, response.json()];
                case 1:
                    responseJson = _a.sent();
                    errorData = responseJson.error;
                    return [2 /*return*/, ERROR_FACTORY.create("request-failed" /* REQUEST_FAILED */, {
                            requestName: requestName,
                            serverCode: errorData.code,
                            serverMessage: errorData.message,
                            serverStatus: errorData.status
                        })];
            }
        });
    });
}
function getHeaders(_a) {
    var apiKey = _a.apiKey;
    return new Headers({
        'Content-Type': 'application/json',
        Accept: 'application/json',
        'x-goog-api-key': apiKey
    });
}
function getHeadersWithAuth(appConfig, _a) {
    var refreshToken = _a.refreshToken;
    var headers = getHeaders(appConfig);
    headers.append('Authorization', getAuthorizationHeader(refreshToken));
    return headers;
}
/**
 * Calls the passed in fetch wrapper and returns the response.
 * If the returned response has a status of 5xx, re-runs the function once and
 * returns the response.
 */
function retryIfServerError(fn) {
    return Object(tslib_es6["__awaiter"])(this, void 0, void 0, function () {
        var result;
        return Object(tslib_es6["__generator"])(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, fn()];
                case 1:
                    result = _a.sent();
                    if (result.status >= 500 && result.status < 600) {
                        // Internal Server Error. Retry request.
                        return [2 /*return*/, fn()];
                    }
                    return [2 /*return*/, result];
            }
        });
    });
}
function getExpiresInFromResponseExpiresIn(responseExpiresIn) {
    // This works because the server will never respond with fractions of a second.
    return Number(responseExpiresIn.replace('s', '000'));
}
function getAuthorizationHeader(refreshToken) {
    return INTERNAL_AUTH_VERSION + " " + refreshToken;
}

/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function createInstallationRequest(appConfig, _a) {
    var fid = _a.fid;
    return Object(tslib_es6["__awaiter"])(this, void 0, void 0, function () {
        var endpoint, headers, body, request, response, responseValue, registeredInstallationEntry;
        return Object(tslib_es6["__generator"])(this, function (_b) {
            switch (_b.label) {
                case 0:
                    endpoint = getInstallationsEndpoint(appConfig);
                    headers = getHeaders(appConfig);
                    body = {
                        fid: fid,
                        authVersion: INTERNAL_AUTH_VERSION,
                        appId: appConfig.appId,
                        sdkVersion: PACKAGE_VERSION
                    };
                    request = {
                        method: 'POST',
                        headers: headers,
                        body: JSON.stringify(body)
                    };
                    return [4 /*yield*/, retryIfServerError(function () { return fetch(endpoint, request); })];
                case 1:
                    response = _b.sent();
                    if (!response.ok) return [3 /*break*/, 3];
                    return [4 /*yield*/, response.json()];
                case 2:
                    responseValue = _b.sent();
                    registeredInstallationEntry = {
                        fid: responseValue.fid || fid,
                        registrationStatus: 2 /* COMPLETED */,
                        refreshToken: responseValue.refreshToken,
                        authToken: extractAuthTokenInfoFromResponse(responseValue.authToken)
                    };
                    return [2 /*return*/, registeredInstallationEntry];
                case 3: return [4 /*yield*/, getErrorFromResponse('Create Installation', response)];
                case 4: throw _b.sent();
            }
        });
    });
}

/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/** Returns a promise that resolves after given time passes. */
function sleep(ms) {
    return new Promise(function (resolve) {
        setTimeout(resolve, ms);
    });
}

/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function bufferToBase64UrlSafe(array) {
    var b64 = btoa(String.fromCharCode.apply(String, Object(tslib_es6["__spread"])(array)));
    return b64.replace(/\+/g, '-').replace(/\//g, '_');
}

/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var VALID_FID_PATTERN = /^[cdef][\w-]{21}$/;
var INVALID_FID = '';
/**
 * Generates a new FID using random values from Web Crypto API.
 * Returns an empty string if FID generation fails for any reason.
 */
function generateFid() {
    try {
        // A valid FID has exactly 22 base64 characters, which is 132 bits, or 16.5
        // bytes. our implementation generates a 17 byte array instead.
        var fidByteArray = new Uint8Array(17);
        var crypto_1 = self.crypto || self.msCrypto;
        crypto_1.getRandomValues(fidByteArray);
        // Replace the first 4 random bits with the constant FID header of 0b0111.
        fidByteArray[0] = 112 + (fidByteArray[0] % 16);
        var fid = encode(fidByteArray);
        return VALID_FID_PATTERN.test(fid) ? fid : INVALID_FID;
    }
    catch (_a) {
        // FID generation errored
        return INVALID_FID;
    }
}
/** Converts a FID Uint8Array to a base64 string representation. */
function encode(fidByteArray) {
    var b64String = bufferToBase64UrlSafe(fidByteArray);
    // Remove the 23rd character that was added because of the extra 4 bits at the
    // end of our 17 byte array, and the '=' padding.
    return b64String.substr(0, 22);
}

/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/** Returns a string key that can be used to identify the app. */
function getKey(appConfig) {
    return appConfig.appName + "!" + appConfig.appId;
}

/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var fidChangeCallbacks = new Map();
/**
 * Calls the onIdChange callbacks with the new FID value, and broadcasts the
 * change to other tabs.
 */
function fidChanged(appConfig, fid) {
    var key = getKey(appConfig);
    callFidChangeCallbacks(key, fid);
    broadcastFidChange(key, fid);
}
function addCallback(appConfig, callback) {
    // Open the broadcast channel if it's not already open,
    // to be able to listen to change events from other tabs.
    getBroadcastChannel();
    var key = getKey(appConfig);
    var callbackSet = fidChangeCallbacks.get(key);
    if (!callbackSet) {
        callbackSet = new Set();
        fidChangeCallbacks.set(key, callbackSet);
    }
    callbackSet.add(callback);
}
function removeCallback(appConfig, callback) {
    var key = getKey(appConfig);
    var callbackSet = fidChangeCallbacks.get(key);
    if (!callbackSet) {
        return;
    }
    callbackSet.delete(callback);
    if (callbackSet.size === 0) {
        fidChangeCallbacks.delete(key);
    }
    // Close broadcast channel if there are no more callbacks.
    closeBroadcastChannel();
}
function callFidChangeCallbacks(key, fid) {
    var e_1, _a;
    var callbacks = fidChangeCallbacks.get(key);
    if (!callbacks) {
        return;
    }
    try {
        for (var callbacks_1 = Object(tslib_es6["__values"])(callbacks), callbacks_1_1 = callbacks_1.next(); !callbacks_1_1.done; callbacks_1_1 = callbacks_1.next()) {
            var callback = callbacks_1_1.value;
            callback(fid);
        }
    }
    catch (e_1_1) { e_1 = { error: e_1_1 }; }
    finally {
        try {
            if (callbacks_1_1 && !callbacks_1_1.done && (_a = callbacks_1.return)) _a.call(callbacks_1);
        }
        finally { if (e_1) throw e_1.error; }
    }
}
function broadcastFidChange(key, fid) {
    var channel = getBroadcastChannel();
    if (channel) {
        channel.postMessage({ key: key, fid: fid });
    }
    closeBroadcastChannel();
}
var broadcastChannel = null;
/** Opens and returns a BroadcastChannel if it is supported by the browser. */
function getBroadcastChannel() {
    if (!broadcastChannel && 'BroadcastChannel' in self) {
        broadcastChannel = new BroadcastChannel('[Firebase] FID Change');
        broadcastChannel.onmessage = function (e) {
            callFidChangeCallbacks(e.data.key, e.data.fid);
        };
    }
    return broadcastChannel;
}
function closeBroadcastChannel() {
    if (fidChangeCallbacks.size === 0 && broadcastChannel) {
        broadcastChannel.close();
        broadcastChannel = null;
    }
}

/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var DATABASE_NAME = 'firebase-installations-database';
var DATABASE_VERSION = 1;
var OBJECT_STORE_NAME = 'firebase-installations-store';
var dbPromise = null;
function getDbPromise() {
    if (!dbPromise) {
        dbPromise = Object(idb["openDb"])(DATABASE_NAME, DATABASE_VERSION, function (upgradeDB) {
            // We don't use 'break' in this switch statement, the fall-through
            // behavior is what we want, because if there are multiple versions between
            // the old version and the current version, we want ALL the migrations
            // that correspond to those versions to run, not only the last one.
            // eslint-disable-next-line default-case
            switch (upgradeDB.oldVersion) {
                case 0:
                    upgradeDB.createObjectStore(OBJECT_STORE_NAME);
            }
        });
    }
    return dbPromise;
}
/** Assigns or overwrites the record for the given key with the given value. */
function set(appConfig, value) {
    return Object(tslib_es6["__awaiter"])(this, void 0, void 0, function () {
        var key, db, tx, objectStore, oldValue;
        return Object(tslib_es6["__generator"])(this, function (_a) {
            switch (_a.label) {
                case 0:
                    key = getKey(appConfig);
                    return [4 /*yield*/, getDbPromise()];
                case 1:
                    db = _a.sent();
                    tx = db.transaction(OBJECT_STORE_NAME, 'readwrite');
                    objectStore = tx.objectStore(OBJECT_STORE_NAME);
                    return [4 /*yield*/, objectStore.get(key)];
                case 2:
                    oldValue = _a.sent();
                    return [4 /*yield*/, objectStore.put(value, key)];
                case 3:
                    _a.sent();
                    return [4 /*yield*/, tx.complete];
                case 4:
                    _a.sent();
                    if (!oldValue || oldValue.fid !== value.fid) {
                        fidChanged(appConfig, value.fid);
                    }
                    return [2 /*return*/, value];
            }
        });
    });
}
/** Removes record(s) from the objectStore that match the given key. */
function remove(appConfig) {
    return Object(tslib_es6["__awaiter"])(this, void 0, void 0, function () {
        var key, db, tx;
        return Object(tslib_es6["__generator"])(this, function (_a) {
            switch (_a.label) {
                case 0:
                    key = getKey(appConfig);
                    return [4 /*yield*/, getDbPromise()];
                case 1:
                    db = _a.sent();
                    tx = db.transaction(OBJECT_STORE_NAME, 'readwrite');
                    return [4 /*yield*/, tx.objectStore(OBJECT_STORE_NAME).delete(key)];
                case 2:
                    _a.sent();
                    return [4 /*yield*/, tx.complete];
                case 3:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    });
}
/**
 * Atomically updates a record with the result of updateFn, which gets
 * called with the current value. If newValue is undefined, the record is
 * deleted instead.
 * @return Updated value
 */
function update(appConfig, updateFn) {
    return Object(tslib_es6["__awaiter"])(this, void 0, void 0, function () {
        var key, db, tx, store, oldValue, newValue;
        return Object(tslib_es6["__generator"])(this, function (_a) {
            switch (_a.label) {
                case 0:
                    key = getKey(appConfig);
                    return [4 /*yield*/, getDbPromise()];
                case 1:
                    db = _a.sent();
                    tx = db.transaction(OBJECT_STORE_NAME, 'readwrite');
                    store = tx.objectStore(OBJECT_STORE_NAME);
                    return [4 /*yield*/, store.get(key)];
                case 2:
                    oldValue = _a.sent();
                    newValue = updateFn(oldValue);
                    if (!(newValue === undefined)) return [3 /*break*/, 4];
                    return [4 /*yield*/, store.delete(key)];
                case 3:
                    _a.sent();
                    return [3 /*break*/, 6];
                case 4: return [4 /*yield*/, store.put(newValue, key)];
                case 5:
                    _a.sent();
                    _a.label = 6;
                case 6: return [4 /*yield*/, tx.complete];
                case 7:
                    _a.sent();
                    if (newValue && (!oldValue || oldValue.fid !== newValue.fid)) {
                        fidChanged(appConfig, newValue.fid);
                    }
                    return [2 /*return*/, newValue];
            }
        });
    });
}

/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * Updates and returns the InstallationEntry from the database.
 * Also triggers a registration request if it is necessary and possible.
 */
function getInstallationEntry(appConfig) {
    return Object(tslib_es6["__awaiter"])(this, void 0, void 0, function () {
        var registrationPromise, installationEntry, _a;
        return Object(tslib_es6["__generator"])(this, function (_b) {
            switch (_b.label) {
                case 0: return [4 /*yield*/, update(appConfig, function (oldEntry) {
                        var installationEntry = updateOrCreateInstallationEntry(oldEntry);
                        var entryWithPromise = triggerRegistrationIfNecessary(appConfig, installationEntry);
                        registrationPromise = entryWithPromise.registrationPromise;
                        return entryWithPromise.installationEntry;
                    })];
                case 1:
                    installationEntry = _b.sent();
                    if (!(installationEntry.fid === INVALID_FID)) return [3 /*break*/, 3];
                    _a = {};
                    return [4 /*yield*/, registrationPromise];
                case 2: 
                // FID generation failed. Waiting for the FID from the server.
                return [2 /*return*/, (_a.installationEntry = _b.sent(), _a)];
                case 3: return [2 /*return*/, {
                        installationEntry: installationEntry,
                        registrationPromise: registrationPromise
                    }];
            }
        });
    });
}
/**
 * Creates a new Installation Entry if one does not exist.
 * Also clears timed out pending requests.
 */
function updateOrCreateInstallationEntry(oldEntry) {
    var entry = oldEntry || {
        fid: generateFid(),
        registrationStatus: 0 /* NOT_STARTED */
    };
    return clearTimedOutRequest(entry);
}
/**
 * If the Firebase Installation is not registered yet, this will trigger the
 * registration and return an InProgressInstallationEntry.
 *
 * If registrationPromise does not exist, the installationEntry is guaranteed
 * to be registered.
 */
function triggerRegistrationIfNecessary(appConfig, installationEntry) {
    if (installationEntry.registrationStatus === 0 /* NOT_STARTED */) {
        if (!navigator.onLine) {
            // Registration required but app is offline.
            var registrationPromiseWithError = Promise.reject(ERROR_FACTORY.create("app-offline" /* APP_OFFLINE */));
            return {
                installationEntry: installationEntry,
                registrationPromise: registrationPromiseWithError
            };
        }
        // Try registering. Change status to IN_PROGRESS.
        var inProgressEntry = {
            fid: installationEntry.fid,
            registrationStatus: 1 /* IN_PROGRESS */,
            registrationTime: Date.now()
        };
        var registrationPromise = registerInstallation(appConfig, inProgressEntry);
        return { installationEntry: inProgressEntry, registrationPromise: registrationPromise };
    }
    else if (installationEntry.registrationStatus === 1 /* IN_PROGRESS */) {
        return {
            installationEntry: installationEntry,
            registrationPromise: waitUntilFidRegistration(appConfig)
        };
    }
    else {
        return { installationEntry: installationEntry };
    }
}
/** This will be executed only once for each new Firebase Installation. */
function registerInstallation(appConfig, installationEntry) {
    return Object(tslib_es6["__awaiter"])(this, void 0, void 0, function () {
        var registeredInstallationEntry, e_1;
        return Object(tslib_es6["__generator"])(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 7]);
                    return [4 /*yield*/, createInstallationRequest(appConfig, installationEntry)];
                case 1:
                    registeredInstallationEntry = _a.sent();
                    return [2 /*return*/, set(appConfig, registeredInstallationEntry)];
                case 2:
                    e_1 = _a.sent();
                    if (!(isServerError(e_1) && e_1.serverCode === 409)) return [3 /*break*/, 4];
                    // Server returned a "FID can not be used" error.
                    // Generate a new ID next time.
                    return [4 /*yield*/, remove(appConfig)];
                case 3:
                    // Server returned a "FID can not be used" error.
                    // Generate a new ID next time.
                    _a.sent();
                    return [3 /*break*/, 6];
                case 4: 
                // Registration failed. Set FID as not registered.
                return [4 /*yield*/, set(appConfig, {
                        fid: installationEntry.fid,
                        registrationStatus: 0 /* NOT_STARTED */
                    })];
                case 5:
                    // Registration failed. Set FID as not registered.
                    _a.sent();
                    _a.label = 6;
                case 6: throw e_1;
                case 7: return [2 /*return*/];
            }
        });
    });
}
/** Call if FID registration is pending in another request. */
function waitUntilFidRegistration(appConfig) {
    return Object(tslib_es6["__awaiter"])(this, void 0, void 0, function () {
        var entry, _a, installationEntry, registrationPromise;
        return Object(tslib_es6["__generator"])(this, function (_b) {
            switch (_b.label) {
                case 0: return [4 /*yield*/, updateInstallationRequest(appConfig)];
                case 1:
                    entry = _b.sent();
                    _b.label = 2;
                case 2:
                    if (!(entry.registrationStatus === 1 /* IN_PROGRESS */)) return [3 /*break*/, 5];
                    // createInstallation request still in progress.
                    return [4 /*yield*/, sleep(100)];
                case 3:
                    // createInstallation request still in progress.
                    _b.sent();
                    return [4 /*yield*/, updateInstallationRequest(appConfig)];
                case 4:
                    entry = _b.sent();
                    return [3 /*break*/, 2];
                case 5:
                    if (!(entry.registrationStatus === 0 /* NOT_STARTED */)) return [3 /*break*/, 7];
                    return [4 /*yield*/, getInstallationEntry(appConfig)];
                case 6:
                    _a = _b.sent(), installationEntry = _a.installationEntry, registrationPromise = _a.registrationPromise;
                    if (registrationPromise) {
                        return [2 /*return*/, registrationPromise];
                    }
                    else {
                        // if there is no registrationPromise, entry is registered.
                        return [2 /*return*/, installationEntry];
                    }
                case 7: return [2 /*return*/, entry];
            }
        });
    });
}
/**
 * Called only if there is a CreateInstallation request in progress.
 *
 * Updates the InstallationEntry in the DB based on the status of the
 * CreateInstallation request.
 *
 * Returns the updated InstallationEntry.
 */
function updateInstallationRequest(appConfig) {
    return update(appConfig, function (oldEntry) {
        if (!oldEntry) {
            throw ERROR_FACTORY.create("installation-not-found" /* INSTALLATION_NOT_FOUND */);
        }
        return clearTimedOutRequest(oldEntry);
    });
}
function clearTimedOutRequest(entry) {
    if (hasInstallationRequestTimedOut(entry)) {
        return {
            fid: entry.fid,
            registrationStatus: 0 /* NOT_STARTED */
        };
    }
    return entry;
}
function hasInstallationRequestTimedOut(installationEntry) {
    return (installationEntry.registrationStatus === 1 /* IN_PROGRESS */ &&
        installationEntry.registrationTime + PENDING_TIMEOUT_MS < Date.now());
}

/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function generateAuthTokenRequest(_a, installationEntry) {
    var appConfig = _a.appConfig, platformLoggerProvider = _a.platformLoggerProvider;
    return Object(tslib_es6["__awaiter"])(this, void 0, void 0, function () {
        var endpoint, headers, platformLogger, body, request, response, responseValue, completedAuthToken;
        return Object(tslib_es6["__generator"])(this, function (_b) {
            switch (_b.label) {
                case 0:
                    endpoint = getGenerateAuthTokenEndpoint(appConfig, installationEntry);
                    headers = getHeadersWithAuth(appConfig, installationEntry);
                    platformLogger = platformLoggerProvider.getImmediate({
                        optional: true
                    });
                    if (platformLogger) {
                        headers.append('x-firebase-client', platformLogger.getPlatformInfoString());
                    }
                    body = {
                        installation: {
                            sdkVersion: PACKAGE_VERSION
                        }
                    };
                    request = {
                        method: 'POST',
                        headers: headers,
                        body: JSON.stringify(body)
                    };
                    return [4 /*yield*/, retryIfServerError(function () { return fetch(endpoint, request); })];
                case 1:
                    response = _b.sent();
                    if (!response.ok) return [3 /*break*/, 3];
                    return [4 /*yield*/, response.json()];
                case 2:
                    responseValue = _b.sent();
                    completedAuthToken = extractAuthTokenInfoFromResponse(responseValue);
                    return [2 /*return*/, completedAuthToken];
                case 3: return [4 /*yield*/, getErrorFromResponse('Generate Auth Token', response)];
                case 4: throw _b.sent();
            }
        });
    });
}
function getGenerateAuthTokenEndpoint(appConfig, _a) {
    var fid = _a.fid;
    return getInstallationsEndpoint(appConfig) + "/" + fid + "/authTokens:generate";
}

/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * Returns a valid authentication token for the installation. Generates a new
 * token if one doesn't exist, is expired or about to expire.
 *
 * Should only be called if the Firebase Installation is registered.
 */
function refreshAuthToken(dependencies, forceRefresh) {
    if (forceRefresh === void 0) { forceRefresh = false; }
    return Object(tslib_es6["__awaiter"])(this, void 0, void 0, function () {
        var tokenPromise, entry, authToken, _a;
        return Object(tslib_es6["__generator"])(this, function (_b) {
            switch (_b.label) {
                case 0: return [4 /*yield*/, update(dependencies.appConfig, function (oldEntry) {
                        if (!isEntryRegistered(oldEntry)) {
                            throw ERROR_FACTORY.create("not-registered" /* NOT_REGISTERED */);
                        }
                        var oldAuthToken = oldEntry.authToken;
                        if (!forceRefresh && isAuthTokenValid(oldAuthToken)) {
                            // There is a valid token in the DB.
                            return oldEntry;
                        }
                        else if (oldAuthToken.requestStatus === 1 /* IN_PROGRESS */) {
                            // There already is a token request in progress.
                            tokenPromise = waitUntilAuthTokenRequest(dependencies, forceRefresh);
                            return oldEntry;
                        }
                        else {
                            // No token or token expired.
                            if (!navigator.onLine) {
                                throw ERROR_FACTORY.create("app-offline" /* APP_OFFLINE */);
                            }
                            var inProgressEntry = makeAuthTokenRequestInProgressEntry(oldEntry);
                            tokenPromise = fetchAuthTokenFromServer(dependencies, inProgressEntry);
                            return inProgressEntry;
                        }
                    })];
                case 1:
                    entry = _b.sent();
                    if (!tokenPromise) return [3 /*break*/, 3];
                    return [4 /*yield*/, tokenPromise];
                case 2:
                    _a = _b.sent();
                    return [3 /*break*/, 4];
                case 3:
                    _a = entry.authToken;
                    _b.label = 4;
                case 4:
                    authToken = _a;
                    return [2 /*return*/, authToken];
            }
        });
    });
}
/**
 * Call only if FID is registered and Auth Token request is in progress.
 *
 * Waits until the current pending request finishes. If the request times out,
 * tries once in this thread as well.
 */
function waitUntilAuthTokenRequest(dependencies, forceRefresh) {
    return Object(tslib_es6["__awaiter"])(this, void 0, void 0, function () {
        var entry, authToken;
        return Object(tslib_es6["__generator"])(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, updateAuthTokenRequest(dependencies.appConfig)];
                case 1:
                    entry = _a.sent();
                    _a.label = 2;
                case 2:
                    if (!(entry.authToken.requestStatus === 1 /* IN_PROGRESS */)) return [3 /*break*/, 5];
                    // generateAuthToken still in progress.
                    return [4 /*yield*/, sleep(100)];
                case 3:
                    // generateAuthToken still in progress.
                    _a.sent();
                    return [4 /*yield*/, updateAuthTokenRequest(dependencies.appConfig)];
                case 4:
                    entry = _a.sent();
                    return [3 /*break*/, 2];
                case 5:
                    authToken = entry.authToken;
                    if (authToken.requestStatus === 0 /* NOT_STARTED */) {
                        // The request timed out or failed in a different call. Try again.
                        return [2 /*return*/, refreshAuthToken(dependencies, forceRefresh)];
                    }
                    else {
                        return [2 /*return*/, authToken];
                    }
            }
        });
    });
}
/**
 * Called only if there is a GenerateAuthToken request in progress.
 *
 * Updates the InstallationEntry in the DB based on the status of the
 * GenerateAuthToken request.
 *
 * Returns the updated InstallationEntry.
 */
function updateAuthTokenRequest(appConfig) {
    return update(appConfig, function (oldEntry) {
        if (!isEntryRegistered(oldEntry)) {
            throw ERROR_FACTORY.create("not-registered" /* NOT_REGISTERED */);
        }
        var oldAuthToken = oldEntry.authToken;
        if (hasAuthTokenRequestTimedOut(oldAuthToken)) {
            return Object(tslib_es6["__assign"])(Object(tslib_es6["__assign"])({}, oldEntry), { authToken: { requestStatus: 0 /* NOT_STARTED */ } });
        }
        return oldEntry;
    });
}
function fetchAuthTokenFromServer(dependencies, installationEntry) {
    return Object(tslib_es6["__awaiter"])(this, void 0, void 0, function () {
        var authToken, updatedInstallationEntry, e_1, updatedInstallationEntry;
        return Object(tslib_es6["__generator"])(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 3, , 8]);
                    return [4 /*yield*/, generateAuthTokenRequest(dependencies, installationEntry)];
                case 1:
                    authToken = _a.sent();
                    updatedInstallationEntry = Object(tslib_es6["__assign"])(Object(tslib_es6["__assign"])({}, installationEntry), { authToken: authToken });
                    return [4 /*yield*/, set(dependencies.appConfig, updatedInstallationEntry)];
                case 2:
                    _a.sent();
                    return [2 /*return*/, authToken];
                case 3:
                    e_1 = _a.sent();
                    if (!(isServerError(e_1) && (e_1.serverCode === 401 || e_1.serverCode === 404))) return [3 /*break*/, 5];
                    // Server returned a "FID not found" or a "Invalid authentication" error.
                    // Generate a new ID next time.
                    return [4 /*yield*/, remove(dependencies.appConfig)];
                case 4:
                    // Server returned a "FID not found" or a "Invalid authentication" error.
                    // Generate a new ID next time.
                    _a.sent();
                    return [3 /*break*/, 7];
                case 5:
                    updatedInstallationEntry = Object(tslib_es6["__assign"])(Object(tslib_es6["__assign"])({}, installationEntry), { authToken: { requestStatus: 0 /* NOT_STARTED */ } });
                    return [4 /*yield*/, set(dependencies.appConfig, updatedInstallationEntry)];
                case 6:
                    _a.sent();
                    _a.label = 7;
                case 7: throw e_1;
                case 8: return [2 /*return*/];
            }
        });
    });
}
function isEntryRegistered(installationEntry) {
    return (installationEntry !== undefined &&
        installationEntry.registrationStatus === 2 /* COMPLETED */);
}
function isAuthTokenValid(authToken) {
    return (authToken.requestStatus === 2 /* COMPLETED */ &&
        !isAuthTokenExpired(authToken));
}
function isAuthTokenExpired(authToken) {
    var now = Date.now();
    return (now < authToken.creationTime ||
        authToken.creationTime + authToken.expiresIn < now + TOKEN_EXPIRATION_BUFFER);
}
/** Returns an updated InstallationEntry with an InProgressAuthToken. */
function makeAuthTokenRequestInProgressEntry(oldEntry) {
    var inProgressAuthToken = {
        requestStatus: 1 /* IN_PROGRESS */,
        requestTime: Date.now()
    };
    return Object(tslib_es6["__assign"])(Object(tslib_es6["__assign"])({}, oldEntry), { authToken: inProgressAuthToken });
}
function hasAuthTokenRequestTimedOut(authToken) {
    return (authToken.requestStatus === 1 /* IN_PROGRESS */ &&
        authToken.requestTime + PENDING_TIMEOUT_MS < Date.now());
}

/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function getId(dependencies) {
    return Object(tslib_es6["__awaiter"])(this, void 0, void 0, function () {
        var _a, installationEntry, registrationPromise;
        return Object(tslib_es6["__generator"])(this, function (_b) {
            switch (_b.label) {
                case 0: return [4 /*yield*/, getInstallationEntry(dependencies.appConfig)];
                case 1:
                    _a = _b.sent(), installationEntry = _a.installationEntry, registrationPromise = _a.registrationPromise;
                    if (registrationPromise) {
                        registrationPromise.catch(console.error);
                    }
                    else {
                        // If the installation is already registered, update the authentication
                        // token if needed.
                        refreshAuthToken(dependencies).catch(console.error);
                    }
                    return [2 /*return*/, installationEntry.fid];
            }
        });
    });
}

/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function getToken(dependencies, forceRefresh) {
    if (forceRefresh === void 0) { forceRefresh = false; }
    return Object(tslib_es6["__awaiter"])(this, void 0, void 0, function () {
        var authToken;
        return Object(tslib_es6["__generator"])(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, completeInstallationRegistration(dependencies.appConfig)];
                case 1:
                    _a.sent();
                    return [4 /*yield*/, refreshAuthToken(dependencies, forceRefresh)];
                case 2:
                    authToken = _a.sent();
                    return [2 /*return*/, authToken.token];
            }
        });
    });
}
function completeInstallationRegistration(appConfig) {
    return Object(tslib_es6["__awaiter"])(this, void 0, void 0, function () {
        var registrationPromise;
        return Object(tslib_es6["__generator"])(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, getInstallationEntry(appConfig)];
                case 1:
                    registrationPromise = (_a.sent()).registrationPromise;
                    if (!registrationPromise) return [3 /*break*/, 3];
                    // A createInstallation request is in progress. Wait until it finishes.
                    return [4 /*yield*/, registrationPromise];
                case 2:
                    // A createInstallation request is in progress. Wait until it finishes.
                    _a.sent();
                    _a.label = 3;
                case 3: return [2 /*return*/];
            }
        });
    });
}

/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function deleteInstallationRequest(appConfig, installationEntry) {
    return Object(tslib_es6["__awaiter"])(this, void 0, void 0, function () {
        var endpoint, headers, request, response;
        return Object(tslib_es6["__generator"])(this, function (_a) {
            switch (_a.label) {
                case 0:
                    endpoint = getDeleteEndpoint(appConfig, installationEntry);
                    headers = getHeadersWithAuth(appConfig, installationEntry);
                    request = {
                        method: 'DELETE',
                        headers: headers
                    };
                    return [4 /*yield*/, retryIfServerError(function () { return fetch(endpoint, request); })];
                case 1:
                    response = _a.sent();
                    if (!!response.ok) return [3 /*break*/, 3];
                    return [4 /*yield*/, getErrorFromResponse('Delete Installation', response)];
                case 2: throw _a.sent();
                case 3: return [2 /*return*/];
            }
        });
    });
}
function getDeleteEndpoint(appConfig, _a) {
    var fid = _a.fid;
    return getInstallationsEndpoint(appConfig) + "/" + fid;
}

/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function deleteInstallation(dependencies) {
    return Object(tslib_es6["__awaiter"])(this, void 0, void 0, function () {
        var appConfig, entry;
        return Object(tslib_es6["__generator"])(this, function (_a) {
            switch (_a.label) {
                case 0:
                    appConfig = dependencies.appConfig;
                    return [4 /*yield*/, update(appConfig, function (oldEntry) {
                            if (oldEntry && oldEntry.registrationStatus === 0 /* NOT_STARTED */) {
                                // Delete the unregistered entry without sending a deleteInstallation request.
                                return undefined;
                            }
                            return oldEntry;
                        })];
                case 1:
                    entry = _a.sent();
                    if (!entry) return [3 /*break*/, 6];
                    if (!(entry.registrationStatus === 1 /* IN_PROGRESS */)) return [3 /*break*/, 2];
                    // Can't delete while trying to register.
                    throw ERROR_FACTORY.create("delete-pending-registration" /* DELETE_PENDING_REGISTRATION */);
                case 2:
                    if (!(entry.registrationStatus === 2 /* COMPLETED */)) return [3 /*break*/, 6];
                    if (!!navigator.onLine) return [3 /*break*/, 3];
                    throw ERROR_FACTORY.create("app-offline" /* APP_OFFLINE */);
                case 3: return [4 /*yield*/, deleteInstallationRequest(appConfig, entry)];
                case 4:
                    _a.sent();
                    return [4 /*yield*/, remove(appConfig)];
                case 5:
                    _a.sent();
                    _a.label = 6;
                case 6: return [2 /*return*/];
            }
        });
    });
}

/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * Sets a new callback that will get called when Installation ID changes.
 * Returns an unsubscribe function that will remove the callback when called.
 */
function onIdChange(_a, callback) {
    var appConfig = _a.appConfig;
    addCallback(appConfig, callback);
    return function () {
        removeCallback(appConfig, callback);
    };
}

/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function extractAppConfig(app) {
    var e_1, _a;
    if (!app || !app.options) {
        throw getMissingValueError('App Configuration');
    }
    if (!app.name) {
        throw getMissingValueError('App Name');
    }
    // Required app config keys
    var configKeys = [
        'projectId',
        'apiKey',
        'appId'
    ];
    try {
        for (var configKeys_1 = Object(tslib_es6["__values"])(configKeys), configKeys_1_1 = configKeys_1.next(); !configKeys_1_1.done; configKeys_1_1 = configKeys_1.next()) {
            var keyName = configKeys_1_1.value;
            if (!app.options[keyName]) {
                throw getMissingValueError(keyName);
            }
        }
    }
    catch (e_1_1) { e_1 = { error: e_1_1 }; }
    finally {
        try {
            if (configKeys_1_1 && !configKeys_1_1.done && (_a = configKeys_1.return)) _a.call(configKeys_1);
        }
        finally { if (e_1) throw e_1.error; }
    }
    return {
        appName: app.name,
        projectId: app.options.projectId,
        apiKey: app.options.apiKey,
        appId: app.options.appId
    };
}
function getMissingValueError(valueName) {
    return ERROR_FACTORY.create("missing-app-config-values" /* MISSING_APP_CONFIG_VALUES */, {
        valueName: valueName
    });
}

/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function registerInstallations(instance) {
    var installationsName = 'installations';
    instance.INTERNAL.registerComponent(new dist_index_cjs["Component"](installationsName, function (container) {
        var app = container.getProvider('app').getImmediate();
        // Throws if app isn't configured properly.
        var appConfig = extractAppConfig(app);
        var platformLoggerProvider = container.getProvider('platform-logger');
        var dependencies = {
            appConfig: appConfig,
            platformLoggerProvider: platformLoggerProvider
        };
        var installations = {
            app: app,
            getId: function () { return getId(dependencies); },
            getToken: function (forceRefresh) {
                return getToken(dependencies, forceRefresh);
            },
            delete: function () { return deleteInstallation(dependencies); },
            onIdChange: function (callback) {
                return onIdChange(dependencies, callback);
            }
        };
        return installations;
    }, "PUBLIC" /* PUBLIC */));
    instance.registerVersion(index_esm_name, version);
}
registerInstallations(index_cjs_default.a);


//# sourceMappingURL=index.esm.js.map

// CONCATENATED MODULE: ./node_modules/@firebase/messaging/dist/index.esm.js







/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var dist_index_esm_a;
var ERROR_MAP = (dist_index_esm_a = {},
    dist_index_esm_a["missing-app-config-values" /* MISSING_APP_CONFIG_VALUES */] = 'Missing App configuration value: "{$valueName}"',
    dist_index_esm_a["only-available-in-window" /* AVAILABLE_IN_WINDOW */] = 'This method is available in a Window context.',
    dist_index_esm_a["only-available-in-sw" /* AVAILABLE_IN_SW */] = 'This method is available in a service worker context.',
    dist_index_esm_a["permission-default" /* PERMISSION_DEFAULT */] = 'The notification permission was not granted and dismissed instead.',
    dist_index_esm_a["permission-blocked" /* PERMISSION_BLOCKED */] = 'The notification permission was not granted and blocked instead.',
    dist_index_esm_a["unsupported-browser" /* UNSUPPORTED_BROWSER */] = "This browser doesn't support the API's required to use the firebase SDK.",
    dist_index_esm_a["failed-service-worker-registration" /* FAILED_DEFAULT_REGISTRATION */] = 'We are unable to register the default service worker. {$browserErrorMessage}',
    dist_index_esm_a["token-subscribe-failed" /* TOKEN_SUBSCRIBE_FAILED */] = 'A problem occured while subscribing the user to FCM: {$errorInfo}',
    dist_index_esm_a["token-subscribe-no-token" /* TOKEN_SUBSCRIBE_NO_TOKEN */] = 'FCM returned no token when subscribing the user to push.',
    dist_index_esm_a["token-unsubscribe-failed" /* TOKEN_UNSUBSCRIBE_FAILED */] = 'A problem occured while unsubscribing the ' +
        'user from FCM: {$errorInfo}',
    dist_index_esm_a["token-update-failed" /* TOKEN_UPDATE_FAILED */] = 'A problem occured while updating the user from FCM: {$errorInfo}',
    dist_index_esm_a["token-update-no-token" /* TOKEN_UPDATE_NO_TOKEN */] = 'FCM returned no token when updating the user to push.',
    dist_index_esm_a["use-sw-after-get-token" /* USE_SW_AFTER_GET_TOKEN */] = 'The useServiceWorker() method may only be called once and must be ' +
        'called before calling getToken() to ensure your service worker is used.',
    dist_index_esm_a["invalid-sw-registration" /* INVALID_SW_REGISTRATION */] = 'The input to useServiceWorker() must be a ServiceWorkerRegistration.',
    dist_index_esm_a["invalid-bg-handler" /* INVALID_BG_HANDLER */] = 'The input to setBackgroundMessageHandler() must be a function.',
    dist_index_esm_a["invalid-vapid-key" /* INVALID_VAPID_KEY */] = 'The public VAPID key must be a string.',
    dist_index_esm_a["use-vapid-key-after-get-token" /* USE_VAPID_KEY_AFTER_GET_TOKEN */] = 'The usePublicVapidKey() method may only be called once and must be ' +
        'called before calling getToken() to ensure your VAPID key is used.',
    dist_index_esm_a);
var index_esm_ERROR_FACTORY = new util_dist_index_cjs["ErrorFactory"]('messaging', 'Messaging', ERROR_MAP);

/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function index_esm_extractAppConfig(app) {
    var e_1, _a;
    if (!app || !app.options) {
        throw index_esm_getMissingValueError('App Configuration Object');
    }
    if (!app.name) {
        throw index_esm_getMissingValueError('App Name');
    }
    // Required app config keys
    var configKeys = [
        'projectId',
        'apiKey',
        'appId',
        'messagingSenderId'
    ];
    var options = app.options;
    try {
        for (var configKeys_1 = Object(tslib_es6["__values"])(configKeys), configKeys_1_1 = configKeys_1.next(); !configKeys_1_1.done; configKeys_1_1 = configKeys_1.next()) {
            var keyName = configKeys_1_1.value;
            if (!options[keyName]) {
                throw index_esm_getMissingValueError(keyName);
            }
        }
    }
    catch (e_1_1) { e_1 = { error: e_1_1 }; }
    finally {
        try {
            if (configKeys_1_1 && !configKeys_1_1.done && (_a = configKeys_1.return)) _a.call(configKeys_1);
        }
        finally { if (e_1) throw e_1.error; }
    }
    return {
        appName: app.name,
        projectId: options.projectId,
        apiKey: options.apiKey,
        appId: options.appId,
        senderId: options.messagingSenderId
    };
}
function index_esm_getMissingValueError(valueName) {
    return index_esm_ERROR_FACTORY.create("missing-app-config-values" /* MISSING_APP_CONFIG_VALUES */, {
        valueName: valueName
    });
}

/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function arrayToBase64(array) {
    var uint8Array = new Uint8Array(array);
    var base64String = btoa(String.fromCharCode.apply(String, Object(tslib_es6["__spread"])(uint8Array)));
    return base64String
        .replace(/=/g, '')
        .replace(/\+/g, '-')
        .replace(/\//g, '_');
}
function base64ToArray(base64String) {
    var padding = '='.repeat((4 - (base64String.length % 4)) % 4);
    var base64 = (base64String + padding)
        .replace(/\-/g, '+')
        .replace(/_/g, '/');
    var rawData = atob(base64);
    var outputArray = new Uint8Array(rawData.length);
    for (var i = 0; i < rawData.length; ++i) {
        outputArray[i] = rawData.charCodeAt(i);
    }
    return outputArray;
}

/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var OLD_DB_NAME = 'fcm_token_details_db';
/**
 * The last DB version of 'fcm_token_details_db' was 4. This is one higher,
 * so that the upgrade callback is called for all versions of the old DB.
 */
var OLD_DB_VERSION = 5;
var OLD_OBJECT_STORE_NAME = 'fcm_token_object_Store';
function migrateOldDatabase(senderId) {
    return Object(tslib_es6["__awaiter"])(this, void 0, void 0, function () {
        var databases, dbNames, tokenDetails, db;
        var _this = this;
        return Object(tslib_es6["__generator"])(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (!('databases' in indexedDB)) return [3 /*break*/, 2];
                    return [4 /*yield*/, indexedDB.databases()];
                case 1:
                    databases = _a.sent();
                    dbNames = databases.map(function (db) { return db.name; });
                    if (!dbNames.includes(OLD_DB_NAME)) {
                        // old DB didn't exist, no need to open.
                        return [2 /*return*/, null];
                    }
                    _a.label = 2;
                case 2:
                    tokenDetails = null;
                    return [4 /*yield*/, Object(idb["openDb"])(OLD_DB_NAME, OLD_DB_VERSION, function (db) { return Object(tslib_es6["__awaiter"])(_this, void 0, void 0, function () {
                            var objectStore, value, oldDetails, oldDetails, oldDetails;
                            var _a;
                            return Object(tslib_es6["__generator"])(this, function (_b) {
                                switch (_b.label) {
                                    case 0:
                                        if (db.oldVersion < 2) {
                                            // Database too old, skip migration.
                                            return [2 /*return*/];
                                        }
                                        if (!db.objectStoreNames.contains(OLD_OBJECT_STORE_NAME)) {
                                            // Database did not exist. Nothing to do.
                                            return [2 /*return*/];
                                        }
                                        objectStore = db.transaction.objectStore(OLD_OBJECT_STORE_NAME);
                                        return [4 /*yield*/, objectStore.index('fcmSenderId').get(senderId)];
                                    case 1:
                                        value = _b.sent();
                                        return [4 /*yield*/, objectStore.clear()];
                                    case 2:
                                        _b.sent();
                                        if (!value) {
                                            // No entry in the database, nothing to migrate.
                                            return [2 /*return*/];
                                        }
                                        if (db.oldVersion === 2) {
                                            oldDetails = value;
                                            if (!oldDetails.auth || !oldDetails.p256dh || !oldDetails.endpoint) {
                                                return [2 /*return*/];
                                            }
                                            tokenDetails = {
                                                token: oldDetails.fcmToken,
                                                createTime: (_a = oldDetails.createTime) !== null && _a !== void 0 ? _a : Date.now(),
                                                subscriptionOptions: {
                                                    auth: oldDetails.auth,
                                                    p256dh: oldDetails.p256dh,
                                                    endpoint: oldDetails.endpoint,
                                                    swScope: oldDetails.swScope,
                                                    vapidKey: typeof oldDetails.vapidKey === 'string'
                                                        ? oldDetails.vapidKey
                                                        : arrayToBase64(oldDetails.vapidKey)
                                                }
                                            };
                                        }
                                        else if (db.oldVersion === 3) {
                                            oldDetails = value;
                                            tokenDetails = {
                                                token: oldDetails.fcmToken,
                                                createTime: oldDetails.createTime,
                                                subscriptionOptions: {
                                                    auth: arrayToBase64(oldDetails.auth),
                                                    p256dh: arrayToBase64(oldDetails.p256dh),
                                                    endpoint: oldDetails.endpoint,
                                                    swScope: oldDetails.swScope,
                                                    vapidKey: arrayToBase64(oldDetails.vapidKey)
                                                }
                                            };
                                        }
                                        else if (db.oldVersion === 4) {
                                            oldDetails = value;
                                            tokenDetails = {
                                                token: oldDetails.fcmToken,
                                                createTime: oldDetails.createTime,
                                                subscriptionOptions: {
                                                    auth: arrayToBase64(oldDetails.auth),
                                                    p256dh: arrayToBase64(oldDetails.p256dh),
                                                    endpoint: oldDetails.endpoint,
                                                    swScope: oldDetails.swScope,
                                                    vapidKey: arrayToBase64(oldDetails.vapidKey)
                                                }
                                            };
                                        }
                                        return [2 /*return*/];
                                }
                            });
                        }); })];
                case 3:
                    db = _a.sent();
                    db.close();
                    // Delete all old databases.
                    return [4 /*yield*/, Object(idb["deleteDb"])(OLD_DB_NAME)];
                case 4:
                    // Delete all old databases.
                    _a.sent();
                    return [4 /*yield*/, Object(idb["deleteDb"])('fcm_vapid_details_db')];
                case 5:
                    _a.sent();
                    return [4 /*yield*/, Object(idb["deleteDb"])('undefined')];
                case 6:
                    _a.sent();
                    return [2 /*return*/, checkTokenDetails(tokenDetails) ? tokenDetails : null];
            }
        });
    });
}
function checkTokenDetails(tokenDetails) {
    if (!tokenDetails || !tokenDetails.subscriptionOptions) {
        return false;
    }
    var subscriptionOptions = tokenDetails.subscriptionOptions;
    return (typeof tokenDetails.createTime === 'number' &&
        tokenDetails.createTime > 0 &&
        typeof tokenDetails.token === 'string' &&
        tokenDetails.token.length > 0 &&
        typeof subscriptionOptions.auth === 'string' &&
        subscriptionOptions.auth.length > 0 &&
        typeof subscriptionOptions.p256dh === 'string' &&
        subscriptionOptions.p256dh.length > 0 &&
        typeof subscriptionOptions.endpoint === 'string' &&
        subscriptionOptions.endpoint.length > 0 &&
        typeof subscriptionOptions.swScope === 'string' &&
        subscriptionOptions.swScope.length > 0 &&
        typeof subscriptionOptions.vapidKey === 'string' &&
        subscriptionOptions.vapidKey.length > 0);
}

/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
// Exported for tests.
var index_esm_DATABASE_NAME = 'firebase-messaging-database';
var index_esm_DATABASE_VERSION = 1;
var index_esm_OBJECT_STORE_NAME = 'firebase-messaging-store';
var index_esm_dbPromise = null;
function index_esm_getDbPromise() {
    if (!index_esm_dbPromise) {
        index_esm_dbPromise = Object(idb["openDb"])(index_esm_DATABASE_NAME, index_esm_DATABASE_VERSION, function (upgradeDb) {
            // We don't use 'break' in this switch statement, the fall-through
            // behavior is what we want, because if there are multiple versions between
            // the old version and the current version, we want ALL the migrations
            // that correspond to those versions to run, not only the last one.
            // eslint-disable-next-line default-case
            switch (upgradeDb.oldVersion) {
                case 0:
                    upgradeDb.createObjectStore(index_esm_OBJECT_STORE_NAME);
            }
        });
    }
    return index_esm_dbPromise;
}
/** Gets record(s) from the objectStore that match the given key. */
function dbGet(firebaseDependencies) {
    return Object(tslib_es6["__awaiter"])(this, void 0, void 0, function () {
        var key, db, tokenDetails, oldTokenDetails;
        return Object(tslib_es6["__generator"])(this, function (_a) {
            switch (_a.label) {
                case 0:
                    key = index_esm_getKey(firebaseDependencies);
                    return [4 /*yield*/, index_esm_getDbPromise()];
                case 1:
                    db = _a.sent();
                    return [4 /*yield*/, db
                            .transaction(index_esm_OBJECT_STORE_NAME)
                            .objectStore(index_esm_OBJECT_STORE_NAME)
                            .get(key)];
                case 2:
                    tokenDetails = _a.sent();
                    if (!tokenDetails) return [3 /*break*/, 3];
                    return [2 /*return*/, tokenDetails];
                case 3: return [4 /*yield*/, migrateOldDatabase(firebaseDependencies.appConfig.senderId)];
                case 4:
                    oldTokenDetails = _a.sent();
                    if (!oldTokenDetails) return [3 /*break*/, 6];
                    return [4 /*yield*/, dbSet(firebaseDependencies, oldTokenDetails)];
                case 5:
                    _a.sent();
                    return [2 /*return*/, oldTokenDetails];
                case 6: return [2 /*return*/];
            }
        });
    });
}
/** Assigns or overwrites the record for the given key with the given value. */
function dbSet(firebaseDependencies, tokenDetails) {
    return Object(tslib_es6["__awaiter"])(this, void 0, void 0, function () {
        var key, db, tx;
        return Object(tslib_es6["__generator"])(this, function (_a) {
            switch (_a.label) {
                case 0:
                    key = index_esm_getKey(firebaseDependencies);
                    return [4 /*yield*/, index_esm_getDbPromise()];
                case 1:
                    db = _a.sent();
                    tx = db.transaction(index_esm_OBJECT_STORE_NAME, 'readwrite');
                    return [4 /*yield*/, tx.objectStore(index_esm_OBJECT_STORE_NAME).put(tokenDetails, key)];
                case 2:
                    _a.sent();
                    return [4 /*yield*/, tx.complete];
                case 3:
                    _a.sent();
                    return [2 /*return*/, tokenDetails];
            }
        });
    });
}
/** Removes record(s) from the objectStore that match the given key. */
function dbRemove(firebaseDependencies) {
    return Object(tslib_es6["__awaiter"])(this, void 0, void 0, function () {
        var key, db, tx;
        return Object(tslib_es6["__generator"])(this, function (_a) {
            switch (_a.label) {
                case 0:
                    key = index_esm_getKey(firebaseDependencies);
                    return [4 /*yield*/, index_esm_getDbPromise()];
                case 1:
                    db = _a.sent();
                    tx = db.transaction(index_esm_OBJECT_STORE_NAME, 'readwrite');
                    return [4 /*yield*/, tx.objectStore(index_esm_OBJECT_STORE_NAME).delete(key)];
                case 2:
                    _a.sent();
                    return [4 /*yield*/, tx.complete];
                case 3:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    });
}
function index_esm_getKey(_a) {
    var appConfig = _a.appConfig;
    return appConfig.appId;
}

/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var DEFAULT_SW_PATH = '/firebase-messaging-sw.js';
var DEFAULT_SW_SCOPE = '/firebase-cloud-messaging-push-scope';
var DEFAULT_VAPID_KEY = 'BDOU99-h67HcA6JeFXHbSNMu7e2yNNu3RzoMj8TM4W88jITfq7ZmPvIM1Iv-4_l2LxQcYwhqby2xGpWwzjfAnG4';
var ENDPOINT = 'https://fcmregistrations.googleapis.com/v1';
/** Key of FCM Payload in Notification's data field. */
var FCM_MSG = 'FCM_MSG';
var CONSOLE_CAMPAIGN_ID = 'google.c.a.c_id';
var CONSOLE_CAMPAIGN_NAME = 'google.c.a.c_l';
var CONSOLE_CAMPAIGN_TIME = 'google.c.a.ts';
/** Set to '1' if Analytics is enabled for the campaign */
var CONSOLE_CAMPAIGN_ANALYTICS_ENABLED = 'google.c.a.e';

/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function requestGetToken(firebaseDependencies, subscriptionOptions) {
    return Object(tslib_es6["__awaiter"])(this, void 0, void 0, function () {
        var headers, body, subscribeOptions, responseData, response, err_1, message;
        return Object(tslib_es6["__generator"])(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, index_esm_getHeaders(firebaseDependencies)];
                case 1:
                    headers = _a.sent();
                    body = getBody(subscriptionOptions);
                    subscribeOptions = {
                        method: 'POST',
                        headers: headers,
                        body: JSON.stringify(body)
                    };
                    _a.label = 2;
                case 2:
                    _a.trys.push([2, 5, , 6]);
                    return [4 /*yield*/, fetch(getEndpoint(firebaseDependencies.appConfig), subscribeOptions)];
                case 3:
                    response = _a.sent();
                    return [4 /*yield*/, response.json()];
                case 4:
                    responseData = _a.sent();
                    return [3 /*break*/, 6];
                case 5:
                    err_1 = _a.sent();
                    throw index_esm_ERROR_FACTORY.create("token-subscribe-failed" /* TOKEN_SUBSCRIBE_FAILED */, {
                        errorInfo: err_1
                    });
                case 6:
                    if (responseData.error) {
                        message = responseData.error.message;
                        throw index_esm_ERROR_FACTORY.create("token-subscribe-failed" /* TOKEN_SUBSCRIBE_FAILED */, {
                            errorInfo: message
                        });
                    }
                    if (!responseData.token) {
                        throw index_esm_ERROR_FACTORY.create("token-subscribe-no-token" /* TOKEN_SUBSCRIBE_NO_TOKEN */);
                    }
                    return [2 /*return*/, responseData.token];
            }
        });
    });
}
function requestUpdateToken(firebaseDependencies, tokenDetails) {
    return Object(tslib_es6["__awaiter"])(this, void 0, void 0, function () {
        var headers, body, updateOptions, responseData, response, err_2, message;
        return Object(tslib_es6["__generator"])(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, index_esm_getHeaders(firebaseDependencies)];
                case 1:
                    headers = _a.sent();
                    body = getBody(tokenDetails.subscriptionOptions);
                    updateOptions = {
                        method: 'PATCH',
                        headers: headers,
                        body: JSON.stringify(body)
                    };
                    _a.label = 2;
                case 2:
                    _a.trys.push([2, 5, , 6]);
                    return [4 /*yield*/, fetch(getEndpoint(firebaseDependencies.appConfig) + "/" + tokenDetails.token, updateOptions)];
                case 3:
                    response = _a.sent();
                    return [4 /*yield*/, response.json()];
                case 4:
                    responseData = _a.sent();
                    return [3 /*break*/, 6];
                case 5:
                    err_2 = _a.sent();
                    throw index_esm_ERROR_FACTORY.create("token-update-failed" /* TOKEN_UPDATE_FAILED */, {
                        errorInfo: err_2
                    });
                case 6:
                    if (responseData.error) {
                        message = responseData.error.message;
                        throw index_esm_ERROR_FACTORY.create("token-update-failed" /* TOKEN_UPDATE_FAILED */, {
                            errorInfo: message
                        });
                    }
                    if (!responseData.token) {
                        throw index_esm_ERROR_FACTORY.create("token-update-no-token" /* TOKEN_UPDATE_NO_TOKEN */);
                    }
                    return [2 /*return*/, responseData.token];
            }
        });
    });
}
function requestDeleteToken(firebaseDependencies, token) {
    return Object(tslib_es6["__awaiter"])(this, void 0, void 0, function () {
        var headers, unsubscribeOptions, response, responseData, message, err_3;
        return Object(tslib_es6["__generator"])(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, index_esm_getHeaders(firebaseDependencies)];
                case 1:
                    headers = _a.sent();
                    unsubscribeOptions = {
                        method: 'DELETE',
                        headers: headers
                    };
                    _a.label = 2;
                case 2:
                    _a.trys.push([2, 5, , 6]);
                    return [4 /*yield*/, fetch(getEndpoint(firebaseDependencies.appConfig) + "/" + token, unsubscribeOptions)];
                case 3:
                    response = _a.sent();
                    return [4 /*yield*/, response.json()];
                case 4:
                    responseData = _a.sent();
                    if (responseData.error) {
                        message = responseData.error.message;
                        throw index_esm_ERROR_FACTORY.create("token-unsubscribe-failed" /* TOKEN_UNSUBSCRIBE_FAILED */, {
                            errorInfo: message
                        });
                    }
                    return [3 /*break*/, 6];
                case 5:
                    err_3 = _a.sent();
                    throw index_esm_ERROR_FACTORY.create("token-unsubscribe-failed" /* TOKEN_UNSUBSCRIBE_FAILED */, {
                        errorInfo: err_3
                    });
                case 6: return [2 /*return*/];
            }
        });
    });
}
function getEndpoint(_a) {
    var projectId = _a.projectId;
    return ENDPOINT + "/projects/" + projectId + "/registrations";
}
function index_esm_getHeaders(_a) {
    var appConfig = _a.appConfig, installations = _a.installations;
    return Object(tslib_es6["__awaiter"])(this, void 0, void 0, function () {
        var authToken;
        return Object(tslib_es6["__generator"])(this, function (_b) {
            switch (_b.label) {
                case 0: return [4 /*yield*/, installations.getToken()];
                case 1:
                    authToken = _b.sent();
                    return [2 /*return*/, new Headers({
                            'Content-Type': 'application/json',
                            Accept: 'application/json',
                            'x-goog-api-key': appConfig.apiKey,
                            'x-goog-firebase-installations-auth': "FIS " + authToken
                        })];
            }
        });
    });
}
function getBody(_a) {
    var p256dh = _a.p256dh, auth = _a.auth, endpoint = _a.endpoint, vapidKey = _a.vapidKey;
    var body = {
        web: {
            endpoint: endpoint,
            auth: auth,
            p256dh: p256dh
        }
    };
    if (vapidKey !== DEFAULT_VAPID_KEY) {
        body.web.applicationPubKey = vapidKey;
    }
    return body;
}

/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/** UpdateRegistration will be called once every week. */
var TOKEN_EXPIRATION_MS = 7 * 24 * 60 * 60 * 1000; // 7 days
function index_esm_getToken(firebaseDependencies, swRegistration, vapidKey) {
    return Object(tslib_es6["__awaiter"])(this, void 0, void 0, function () {
        var pushSubscription, tokenDetails, subscriptionOptions, e_1;
        return Object(tslib_es6["__generator"])(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (Notification.permission !== 'granted') {
                        throw index_esm_ERROR_FACTORY.create("permission-blocked" /* PERMISSION_BLOCKED */);
                    }
                    return [4 /*yield*/, getPushSubscription(swRegistration, vapidKey)];
                case 1:
                    pushSubscription = _a.sent();
                    return [4 /*yield*/, dbGet(firebaseDependencies)];
                case 2:
                    tokenDetails = _a.sent();
                    subscriptionOptions = {
                        vapidKey: vapidKey,
                        swScope: swRegistration.scope,
                        endpoint: pushSubscription.endpoint,
                        auth: arrayToBase64(pushSubscription.getKey('auth')),
                        p256dh: arrayToBase64(pushSubscription.getKey('p256dh'))
                    };
                    if (!!tokenDetails) return [3 /*break*/, 3];
                    // No token, get a new one.
                    return [2 /*return*/, getNewToken(firebaseDependencies, subscriptionOptions)];
                case 3:
                    if (!!isTokenValid(tokenDetails.subscriptionOptions, subscriptionOptions)) return [3 /*break*/, 8];
                    _a.label = 4;
                case 4:
                    _a.trys.push([4, 6, , 7]);
                    return [4 /*yield*/, requestDeleteToken(firebaseDependencies, tokenDetails.token)];
                case 5:
                    _a.sent();
                    return [3 /*break*/, 7];
                case 6:
                    e_1 = _a.sent();
                    // Suppress errors because of #2364
                    console.warn(e_1);
                    return [3 /*break*/, 7];
                case 7: return [2 /*return*/, getNewToken(firebaseDependencies, subscriptionOptions)];
                case 8:
                    if (Date.now() >= tokenDetails.createTime + TOKEN_EXPIRATION_MS) {
                        // Weekly token refresh
                        return [2 /*return*/, updateToken({
                                token: tokenDetails.token,
                                createTime: Date.now(),
                                subscriptionOptions: subscriptionOptions
                            }, firebaseDependencies, swRegistration)];
                    }
                    else {
                        // Valid token, nothing to do.
                        return [2 /*return*/, tokenDetails.token];
                    }
                case 9: return [2 /*return*/];
            }
        });
    });
}
/**
 * This method deletes the token from the database, unsubscribes the token from
 * FCM, and unregisters the push subscription if it exists.
 */
function deleteToken(firebaseDependencies, swRegistration) {
    return Object(tslib_es6["__awaiter"])(this, void 0, void 0, function () {
        var tokenDetails, pushSubscription;
        return Object(tslib_es6["__generator"])(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, dbGet(firebaseDependencies)];
                case 1:
                    tokenDetails = _a.sent();
                    if (!tokenDetails) return [3 /*break*/, 4];
                    return [4 /*yield*/, requestDeleteToken(firebaseDependencies, tokenDetails.token)];
                case 2:
                    _a.sent();
                    return [4 /*yield*/, dbRemove(firebaseDependencies)];
                case 3:
                    _a.sent();
                    _a.label = 4;
                case 4: return [4 /*yield*/, swRegistration.pushManager.getSubscription()];
                case 5:
                    pushSubscription = _a.sent();
                    if (pushSubscription) {
                        return [2 /*return*/, pushSubscription.unsubscribe()];
                    }
                    // If there's no SW, consider it a success.
                    return [2 /*return*/, true];
            }
        });
    });
}
function updateToken(tokenDetails, firebaseDependencies, swRegistration) {
    return Object(tslib_es6["__awaiter"])(this, void 0, void 0, function () {
        var updatedToken, updatedTokenDetails, e_2;
        return Object(tslib_es6["__generator"])(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 3, , 5]);
                    return [4 /*yield*/, requestUpdateToken(firebaseDependencies, tokenDetails)];
                case 1:
                    updatedToken = _a.sent();
                    updatedTokenDetails = Object(tslib_es6["__assign"])({ token: updatedToken, createTime: Date.now() }, tokenDetails);
                    return [4 /*yield*/, dbSet(firebaseDependencies, updatedTokenDetails)];
                case 2:
                    _a.sent();
                    return [2 /*return*/, updatedToken];
                case 3:
                    e_2 = _a.sent();
                    return [4 /*yield*/, deleteToken(firebaseDependencies, swRegistration)];
                case 4:
                    _a.sent();
                    throw e_2;
                case 5: return [2 /*return*/];
            }
        });
    });
}
function getNewToken(firebaseDependencies, subscriptionOptions) {
    return Object(tslib_es6["__awaiter"])(this, void 0, void 0, function () {
        var token, tokenDetails;
        return Object(tslib_es6["__generator"])(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, requestGetToken(firebaseDependencies, subscriptionOptions)];
                case 1:
                    token = _a.sent();
                    tokenDetails = {
                        token: token,
                        createTime: Date.now(),
                        subscriptionOptions: subscriptionOptions
                    };
                    return [4 /*yield*/, dbSet(firebaseDependencies, tokenDetails)];
                case 2:
                    _a.sent();
                    return [2 /*return*/, tokenDetails.token];
            }
        });
    });
}
/**
 * Gets a PushSubscription for the current user.
 */
function getPushSubscription(swRegistration, vapidKey) {
    return Object(tslib_es6["__awaiter"])(this, void 0, void 0, function () {
        var subscription;
        return Object(tslib_es6["__generator"])(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, swRegistration.pushManager.getSubscription()];
                case 1:
                    subscription = _a.sent();
                    if (subscription) {
                        return [2 /*return*/, subscription];
                    }
                    return [2 /*return*/, swRegistration.pushManager.subscribe({
                            userVisibleOnly: true,
                            // Chrome <= 75 doesn't support base64-encoded VAPID key. For backward compatibility, VAPID key
                            // submitted to pushManager#subscribe must be of type Uint8Array.
                            applicationServerKey: base64ToArray(vapidKey)
                        })];
            }
        });
    });
}
/**
 * Checks if the saved tokenDetails object matches the configuration provided.
 */
function isTokenValid(dbOptions, currentOptions) {
    var isVapidKeyEqual = currentOptions.vapidKey === dbOptions.vapidKey;
    var isEndpointEqual = currentOptions.endpoint === dbOptions.endpoint;
    var isAuthEqual = currentOptions.auth === dbOptions.auth;
    var isP256dhEqual = currentOptions.p256dh === dbOptions.p256dh;
    return isVapidKeyEqual && isEndpointEqual && isAuthEqual && isP256dhEqual;
}

/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var MessageType;
(function (MessageType) {
    MessageType["PUSH_RECEIVED"] = "push-received";
    MessageType["NOTIFICATION_CLICKED"] = "notification-clicked";
})(MessageType || (MessageType = {}));

/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function isConsoleMessage(data) {
    // This message has a campaign ID, meaning it was sent using the
    // Firebase Console.
    return typeof data === 'object' && !!data && CONSOLE_CAMPAIGN_ID in data;
}

/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var index_esm_WindowController = /** @class */ (function () {
    function WindowController(firebaseDependencies) {
        var _this = this;
        this.firebaseDependencies = firebaseDependencies;
        this.vapidKey = null;
        this.onMessageCallback = null;
        navigator.serviceWorker.addEventListener('message', function (e) {
            return _this.messageEventListener(e);
        });
    }
    Object.defineProperty(WindowController.prototype, "app", {
        get: function () {
            return this.firebaseDependencies.app;
        },
        enumerable: true,
        configurable: true
    });
    WindowController.prototype.getToken = function () {
        return Object(tslib_es6["__awaiter"])(this, void 0, void 0, function () {
            var swRegistration;
            return Object(tslib_es6["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!this.vapidKey) {
                            this.vapidKey = DEFAULT_VAPID_KEY;
                        }
                        return [4 /*yield*/, this.getServiceWorkerRegistration()];
                    case 1:
                        swRegistration = _a.sent();
                        if (!(Notification.permission === 'default')) return [3 /*break*/, 3];
                        // The user hasn't allowed or denied notifications yet. Ask them.
                        return [4 /*yield*/, Notification.requestPermission()];
                    case 2:
                        // The user hasn't allowed or denied notifications yet. Ask them.
                        _a.sent();
                        _a.label = 3;
                    case 3:
                        if (Notification.permission !== 'granted') {
                            throw index_esm_ERROR_FACTORY.create("permission-blocked" /* PERMISSION_BLOCKED */);
                        }
                        return [2 /*return*/, index_esm_getToken(this.firebaseDependencies, swRegistration, this.vapidKey)];
                }
            });
        });
    };
    WindowController.prototype.deleteToken = function () {
        return Object(tslib_es6["__awaiter"])(this, void 0, void 0, function () {
            var swRegistration;
            return Object(tslib_es6["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.getServiceWorkerRegistration()];
                    case 1:
                        swRegistration = _a.sent();
                        return [2 /*return*/, deleteToken(this.firebaseDependencies, swRegistration)];
                }
            });
        });
    };
    /**
     * Request permission if it is not currently granted.
     *
     * @return Resolves if the permission was granted, rejects otherwise.
     *
     * @deprecated Use Notification.requestPermission() instead.
     * https://developer.mozilla.org/en-US/docs/Web/API/Notification/requestPermission
     */
    WindowController.prototype.requestPermission = function () {
        return Object(tslib_es6["__awaiter"])(this, void 0, void 0, function () {
            var permissionResult;
            return Object(tslib_es6["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (Notification.permission === 'granted') {
                            return [2 /*return*/];
                        }
                        return [4 /*yield*/, Notification.requestPermission()];
                    case 1:
                        permissionResult = _a.sent();
                        if (permissionResult === 'granted') {
                            return [2 /*return*/];
                        }
                        else if (permissionResult === 'denied') {
                            throw index_esm_ERROR_FACTORY.create("permission-blocked" /* PERMISSION_BLOCKED */);
                        }
                        else {
                            throw index_esm_ERROR_FACTORY.create("permission-default" /* PERMISSION_DEFAULT */);
                        }
                }
            });
        });
    };
    // TODO: Deprecate this and make VAPID key a parameter in getToken.
    WindowController.prototype.usePublicVapidKey = function (vapidKey) {
        if (this.vapidKey !== null) {
            throw index_esm_ERROR_FACTORY.create("use-vapid-key-after-get-token" /* USE_VAPID_KEY_AFTER_GET_TOKEN */);
        }
        if (typeof vapidKey !== 'string' || vapidKey.length === 0) {
            throw index_esm_ERROR_FACTORY.create("invalid-vapid-key" /* INVALID_VAPID_KEY */);
        }
        this.vapidKey = vapidKey;
    };
    WindowController.prototype.useServiceWorker = function (swRegistration) {
        if (!(swRegistration instanceof ServiceWorkerRegistration)) {
            throw index_esm_ERROR_FACTORY.create("invalid-sw-registration" /* INVALID_SW_REGISTRATION */);
        }
        if (this.swRegistration) {
            throw index_esm_ERROR_FACTORY.create("use-sw-after-get-token" /* USE_SW_AFTER_GET_TOKEN */);
        }
        this.swRegistration = swRegistration;
    };
    /**
     * @param nextOrObserver An observer object or a function triggered on
     * message.
     * @return The unsubscribe function for the observer.
     */
    // TODO: Simplify this to only accept a function and not an Observer.
    WindowController.prototype.onMessage = function (nextOrObserver) {
        var _this = this;
        this.onMessageCallback =
            typeof nextOrObserver === 'function'
                ? nextOrObserver
                : nextOrObserver.next;
        return function () {
            _this.onMessageCallback = null;
        };
    };
    WindowController.prototype.setBackgroundMessageHandler = function () {
        throw index_esm_ERROR_FACTORY.create("only-available-in-sw" /* AVAILABLE_IN_SW */);
    };
    // Unimplemented
    WindowController.prototype.onTokenRefresh = function () {
        return function () { };
    };
    /**
     * Creates or updates the default service worker registration.
     * @return The service worker registration to be used for the push service.
     */
    WindowController.prototype.getServiceWorkerRegistration = function () {
        return Object(tslib_es6["__awaiter"])(this, void 0, void 0, function () {
            var _a, e_1;
            return Object(tslib_es6["__generator"])(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        if (!!this.swRegistration) return [3 /*break*/, 4];
                        _b.label = 1;
                    case 1:
                        _b.trys.push([1, 3, , 4]);
                        _a = this;
                        return [4 /*yield*/, navigator.serviceWorker.register(DEFAULT_SW_PATH, {
                                scope: DEFAULT_SW_SCOPE
                            })];
                    case 2:
                        _a.swRegistration = _b.sent();
                        // The timing when browser updates sw when sw has an update is unreliable by my experiment.
                        // It leads to version conflict when the SDK upgrades to a newer version in the main page, but
                        // sw is stuck with the old version. For example, https://github.com/firebase/firebase-js-sdk/issues/2590
                        // The following line reliably updates sw if there was an update.
                        this.swRegistration.update().catch(function () {
                            /* it is non blocking and we don't care if it failed */
                        });
                        return [3 /*break*/, 4];
                    case 3:
                        e_1 = _b.sent();
                        throw index_esm_ERROR_FACTORY.create("failed-service-worker-registration" /* FAILED_DEFAULT_REGISTRATION */, {
                            browserErrorMessage: e_1.message
                        });
                    case 4: return [2 /*return*/, this.swRegistration];
                }
            });
        });
    };
    WindowController.prototype.messageEventListener = function (event) {
        var _a;
        return Object(tslib_es6["__awaiter"])(this, void 0, void 0, function () {
            var _b, type, payload, data;
            return Object(tslib_es6["__generator"])(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        if (!((_a = event.data) === null || _a === void 0 ? void 0 : _a.firebaseMessaging)) {
                            // Not a message from FCM
                            return [2 /*return*/];
                        }
                        _b = event.data.firebaseMessaging, type = _b.type, payload = _b.payload;
                        if (this.onMessageCallback && type === MessageType.PUSH_RECEIVED) {
                            this.onMessageCallback(payload);
                        }
                        data = payload.data;
                        if (!(isConsoleMessage(data) &&
                            data[CONSOLE_CAMPAIGN_ANALYTICS_ENABLED] === '1')) return [3 /*break*/, 2];
                        // Analytics is enabled on this message, so we should log it.
                        return [4 /*yield*/, this.logEvent(type, data)];
                    case 1:
                        // Analytics is enabled on this message, so we should log it.
                        _c.sent();
                        _c.label = 2;
                    case 2: return [2 /*return*/];
                }
            });
        });
    };
    WindowController.prototype.logEvent = function (messageType, data) {
        return Object(tslib_es6["__awaiter"])(this, void 0, void 0, function () {
            var eventType, analytics;
            return Object(tslib_es6["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        eventType = getEventType(messageType);
                        return [4 /*yield*/, this.firebaseDependencies.analyticsProvider.get()];
                    case 1:
                        analytics = _a.sent();
                        analytics.logEvent(eventType, {
                            /* eslint-disable camelcase */
                            message_id: data[CONSOLE_CAMPAIGN_ID],
                            message_name: data[CONSOLE_CAMPAIGN_NAME],
                            message_time: data[CONSOLE_CAMPAIGN_TIME],
                            message_device_time: Math.floor(Date.now() / 1000)
                            /* eslint-enable camelcase */
                        });
                        return [2 /*return*/];
                }
            });
        });
    };
    return WindowController;
}());
function getEventType(messageType) {
    switch (messageType) {
        case MessageType.NOTIFICATION_CLICKED:
            return 'notification_open';
        case MessageType.PUSH_RECEIVED:
            return 'notification_foreground';
        default:
            throw new Error();
    }
}

/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/** Returns a promise that resolves after given time passes. */
function index_esm_sleep(ms) {
    return new Promise(function (resolve) {
        setTimeout(resolve, ms);
    });
}

/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var index_esm_SwController = /** @class */ (function () {
    function SwController(firebaseDependencies) {
        var _this = this;
        this.firebaseDependencies = firebaseDependencies;
        this.vapidKey = null;
        this.bgMessageHandler = null;
        self.addEventListener('push', function (e) {
            e.waitUntil(_this.onPush(e));
        });
        self.addEventListener('pushsubscriptionchange', function (e) {
            e.waitUntil(_this.onSubChange(e));
        });
        self.addEventListener('notificationclick', function (e) {
            e.waitUntil(_this.onNotificationClick(e));
        });
    }
    Object.defineProperty(SwController.prototype, "app", {
        get: function () {
            return this.firebaseDependencies.app;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Calling setBackgroundMessageHandler will opt in to some specific
     * behaviours.
     * 1.) If a notification doesn't need to be shown due to a window already
     * being visible, then push messages will be sent to the page.
     * 2.) If a notification needs to be shown, and the message contains no
     * notification data this method will be called
     * and the promise it returns will be passed to event.waitUntil.
     * If you do not set this callback then all push messages will let and the
     * developer can handle them in a their own 'push' event callback
     *
     * @param callback The callback to be called when a push message is received
     * and a notification must be shown. The callback will be given the data from
     * the push message.
     */
    SwController.prototype.setBackgroundMessageHandler = function (callback) {
        if (!callback || typeof callback !== 'function') {
            throw index_esm_ERROR_FACTORY.create("invalid-bg-handler" /* INVALID_BG_HANDLER */);
        }
        this.bgMessageHandler = callback;
    };
    // TODO: Remove getToken from SW Controller.
    // Calling this from an old SW can cause all kinds of trouble.
    SwController.prototype.getToken = function () {
        var _a, _b;
        return Object(tslib_es6["__awaiter"])(this, void 0, void 0, function () {
            var tokenDetails;
            return Object(tslib_es6["__generator"])(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        if (!!this.vapidKey) return [3 /*break*/, 2];
                        return [4 /*yield*/, dbGet(this.firebaseDependencies)];
                    case 1:
                        tokenDetails = _c.sent();
                        this.vapidKey = (_b = (_a = tokenDetails === null || tokenDetails === void 0 ? void 0 : tokenDetails.subscriptionOptions) === null || _a === void 0 ? void 0 : _a.vapidKey) !== null && _b !== void 0 ? _b : DEFAULT_VAPID_KEY;
                        _c.label = 2;
                    case 2: return [2 /*return*/, index_esm_getToken(this.firebaseDependencies, self.registration, this.vapidKey)];
                }
            });
        });
    };
    // TODO: Remove deleteToken from SW Controller.
    // Calling this from an old SW can cause all kinds of trouble.
    SwController.prototype.deleteToken = function () {
        return deleteToken(this.firebaseDependencies, self.registration);
    };
    SwController.prototype.requestPermission = function () {
        throw index_esm_ERROR_FACTORY.create("only-available-in-window" /* AVAILABLE_IN_WINDOW */);
    };
    // TODO: Deprecate this and make VAPID key a parameter in getToken.
    // TODO: Remove this together with getToken from SW Controller.
    SwController.prototype.usePublicVapidKey = function (vapidKey) {
        if (this.vapidKey !== null) {
            throw index_esm_ERROR_FACTORY.create("use-vapid-key-after-get-token" /* USE_VAPID_KEY_AFTER_GET_TOKEN */);
        }
        if (typeof vapidKey !== 'string' || vapidKey.length === 0) {
            throw index_esm_ERROR_FACTORY.create("invalid-vapid-key" /* INVALID_VAPID_KEY */);
        }
        this.vapidKey = vapidKey;
    };
    SwController.prototype.useServiceWorker = function () {
        throw index_esm_ERROR_FACTORY.create("only-available-in-window" /* AVAILABLE_IN_WINDOW */);
    };
    SwController.prototype.onMessage = function () {
        throw index_esm_ERROR_FACTORY.create("only-available-in-window" /* AVAILABLE_IN_WINDOW */);
    };
    SwController.prototype.onTokenRefresh = function () {
        throw index_esm_ERROR_FACTORY.create("only-available-in-window" /* AVAILABLE_IN_WINDOW */);
    };
    /**
     * A handler for push events that shows notifications based on the content of
     * the payload.
     *
     * The payload must be a JSON-encoded Object with a `notification` key. The
     * value of the `notification` property will be used as the NotificationOptions
     * object passed to showNotification. Additionally, the `title` property of the
     * notification object will be used as the title.
     *
     * If there is no notification data in the payload then no notification will be
     * shown.
     */
    SwController.prototype.onPush = function (event) {
        return Object(tslib_es6["__awaiter"])(this, void 0, void 0, function () {
            var payload, clientList, notificationDetails;
            return Object(tslib_es6["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        payload = getMessagePayload(event);
                        if (!payload) {
                            return [2 /*return*/];
                        }
                        return [4 /*yield*/, getClientList()];
                    case 1:
                        clientList = _a.sent();
                        if (hasVisibleClients(clientList)) {
                            // App in foreground. Send to page.
                            return [2 /*return*/, sendMessageToWindowClients(clientList, payload)];
                        }
                        notificationDetails = getNotificationData(payload);
                        if (!notificationDetails) return [3 /*break*/, 3];
                        return [4 /*yield*/, showNotification(notificationDetails)];
                    case 2:
                        _a.sent();
                        return [3 /*break*/, 5];
                    case 3:
                        if (!this.bgMessageHandler) return [3 /*break*/, 5];
                        return [4 /*yield*/, this.bgMessageHandler(payload)];
                    case 4:
                        _a.sent();
                        _a.label = 5;
                    case 5: return [2 /*return*/];
                }
            });
        });
    };
    SwController.prototype.onSubChange = function (event) {
        var _a, _b;
        return Object(tslib_es6["__awaiter"])(this, void 0, void 0, function () {
            var newSubscription, tokenDetails;
            return Object(tslib_es6["__generator"])(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        newSubscription = event.newSubscription;
                        if (!!newSubscription) return [3 /*break*/, 2];
                        // Subscription revoked, delete token
                        return [4 /*yield*/, deleteToken(this.firebaseDependencies, self.registration)];
                    case 1:
                        // Subscription revoked, delete token
                        _c.sent();
                        return [2 /*return*/];
                    case 2: return [4 /*yield*/, dbGet(this.firebaseDependencies)];
                    case 3:
                        tokenDetails = _c.sent();
                        return [4 /*yield*/, deleteToken(this.firebaseDependencies, self.registration)];
                    case 4:
                        _c.sent();
                        return [4 /*yield*/, index_esm_getToken(this.firebaseDependencies, self.registration, (_b = (_a = tokenDetails === null || tokenDetails === void 0 ? void 0 : tokenDetails.subscriptionOptions) === null || _a === void 0 ? void 0 : _a.vapidKey) !== null && _b !== void 0 ? _b : DEFAULT_VAPID_KEY)];
                    case 5:
                        _c.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    SwController.prototype.onNotificationClick = function (event) {
        var _a, _b;
        return Object(tslib_es6["__awaiter"])(this, void 0, void 0, function () {
            var payload, link, client, message;
            return Object(tslib_es6["__generator"])(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        payload = (_b = (_a = event.notification) === null || _a === void 0 ? void 0 : _a.data) === null || _b === void 0 ? void 0 : _b[FCM_MSG];
                        if (!payload) {
                            // Not an FCM notification, do nothing.
                            return [2 /*return*/];
                        }
                        else if (event.action) {
                            // User clicked on an action button.
                            // This will allow devs to act on action button clicks by using a custom
                            // onNotificationClick listener that they define.
                            return [2 /*return*/];
                        }
                        // Prevent other listeners from receiving the event
                        event.stopImmediatePropagation();
                        event.notification.close();
                        link = getLink(payload);
                        if (!link) {
                            return [2 /*return*/];
                        }
                        return [4 /*yield*/, getWindowClient(link)];
                    case 1:
                        client = _c.sent();
                        if (!!client) return [3 /*break*/, 4];
                        return [4 /*yield*/, self.clients.openWindow(link)];
                    case 2:
                        // Unable to find window client so need to open one.
                        // This also focuses the opened client.
                        client = _c.sent();
                        // Wait three seconds for the client to initialize and set up the message
                        // handler so that it can receive the message.
                        return [4 /*yield*/, index_esm_sleep(3000)];
                    case 3:
                        // Wait three seconds for the client to initialize and set up the message
                        // handler so that it can receive the message.
                        _c.sent();
                        return [3 /*break*/, 6];
                    case 4: return [4 /*yield*/, client.focus()];
                    case 5:
                        client = _c.sent();
                        _c.label = 6;
                    case 6:
                        if (!client) {
                            // Window Client will not be returned if it's for a third party origin.
                            return [2 /*return*/];
                        }
                        message = createNewMessage(MessageType.NOTIFICATION_CLICKED, payload);
                        return [2 /*return*/, client.postMessage(message)];
                }
            });
        });
    };
    return SwController;
}());
function getMessagePayload(_a) {
    var data = _a.data;
    if (!data) {
        return null;
    }
    try {
        return data.json();
    }
    catch (err) {
        // Not JSON so not an FCM message.
        return null;
    }
}
function getNotificationData(payload) {
    var _a;
    if (!payload || typeof payload.notification !== 'object') {
        return;
    }
    var notificationInformation = Object(tslib_es6["__assign"])({}, payload.notification);
    // Put the message payload under FCM_MSG name so we can identify the
    // notification as being an FCM notification vs a notification from
    // somewhere else (i.e. normal web push or developer generated
    // notification).
    notificationInformation.data = Object(tslib_es6["__assign"])(Object(tslib_es6["__assign"])({}, payload.notification.data), (_a = {}, _a[FCM_MSG] = payload, _a));
    return notificationInformation;
}
/**
 * @param url The URL to look for when focusing a client.
 * @return Returns an existing window client or a newly opened WindowClient.
 */
function getWindowClient(url) {
    return Object(tslib_es6["__awaiter"])(this, void 0, void 0, function () {
        var parsedURL, clientList, clientList_1, clientList_1_1, client, parsedClientUrl;
        var e_1, _a;
        return Object(tslib_es6["__generator"])(this, function (_b) {
            switch (_b.label) {
                case 0:
                    parsedURL = new URL(url, self.location.href);
                    return [4 /*yield*/, getClientList()];
                case 1:
                    clientList = _b.sent();
                    try {
                        for (clientList_1 = Object(tslib_es6["__values"])(clientList), clientList_1_1 = clientList_1.next(); !clientList_1_1.done; clientList_1_1 = clientList_1.next()) {
                            client = clientList_1_1.value;
                            parsedClientUrl = new URL(client.url, self.location.href);
                            if (parsedClientUrl.host === parsedURL.host) {
                                return [2 /*return*/, client];
                            }
                        }
                    }
                    catch (e_1_1) { e_1 = { error: e_1_1 }; }
                    finally {
                        try {
                            if (clientList_1_1 && !clientList_1_1.done && (_a = clientList_1.return)) _a.call(clientList_1);
                        }
                        finally { if (e_1) throw e_1.error; }
                    }
                    return [2 /*return*/, null];
            }
        });
    });
}
/**
 * @returns If there is currently a visible WindowClient, this method will
 * resolve to true, otherwise false.
 */
function hasVisibleClients(clientList) {
    return clientList.some(function (client) {
        return client.visibilityState === 'visible' &&
            // Ignore chrome-extension clients as that matches the background pages
            // of extensions, which are always considered visible for some reason.
            !client.url.startsWith('chrome-extension://');
    });
}
/**
 * @param payload The data from the push event that should be sent to all
 * available pages.
 * @returns Returns a promise that resolves once the message has been sent to
 * all WindowClients.
 */
function sendMessageToWindowClients(clientList, payload) {
    var e_2, _a;
    var message = createNewMessage(MessageType.PUSH_RECEIVED, payload);
    try {
        for (var clientList_2 = Object(tslib_es6["__values"])(clientList), clientList_2_1 = clientList_2.next(); !clientList_2_1.done; clientList_2_1 = clientList_2.next()) {
            var client = clientList_2_1.value;
            client.postMessage(message);
        }
    }
    catch (e_2_1) { e_2 = { error: e_2_1 }; }
    finally {
        try {
            if (clientList_2_1 && !clientList_2_1.done && (_a = clientList_2.return)) _a.call(clientList_2);
        }
        finally { if (e_2) throw e_2.error; }
    }
}
function getClientList() {
    return self.clients.matchAll({
        type: 'window',
        includeUncontrolled: true
        // TS doesn't know that "type: 'window'" means it'll return WindowClient[]
    });
}
function createNewMessage(type, payload) {
    return {
        firebaseMessaging: { type: type, payload: payload }
    };
}
function showNotification(details) {
    var _a;
    var title = (_a = details.title) !== null && _a !== void 0 ? _a : '';
    var actions = details.actions;
    // Note: Firefox does not support the maxActions property.
    // https://developer.mozilla.org/en-US/docs/Web/API/notification/maxActions
    var maxActions = Notification.maxActions;
    if (actions && maxActions && actions.length > maxActions) {
        console.warn("This browser only supports " + maxActions + " actions. The remaining actions will not be displayed.");
    }
    return self.registration.showNotification(title, details);
}
function getLink(payload) {
    var _a, _b, _c;
    // eslint-disable-next-line camelcase
    var link = (_b = (_a = payload.fcmOptions) === null || _a === void 0 ? void 0 : _a.link) !== null && _b !== void 0 ? _b : (_c = payload.notification) === null || _c === void 0 ? void 0 : _c.click_action;
    if (link) {
        return link;
    }
    if (isConsoleMessage(payload.data)) {
        // Notification created in the Firebase Console. Redirect to origin.
        return self.location.origin;
    }
    else {
        return null;
    }
}

/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var MESSAGING_NAME = 'messaging';
function factoryMethod(container) {
    // Dependencies.
    var app = container.getProvider('app').getImmediate();
    var appConfig = index_esm_extractAppConfig(app);
    var installations = container.getProvider('installations').getImmediate();
    var analyticsProvider = container.getProvider('analytics-internal');
    var firebaseDependencies = {
        app: app,
        appConfig: appConfig,
        installations: installations,
        analyticsProvider: analyticsProvider
    };
    if (!isSupported()) {
        throw index_esm_ERROR_FACTORY.create("unsupported-browser" /* UNSUPPORTED_BROWSER */);
    }
    if (self && 'ServiceWorkerGlobalScope' in self) {
        // Running in ServiceWorker context
        return new index_esm_SwController(firebaseDependencies);
    }
    else {
        // Assume we are in the window context.
        return new index_esm_WindowController(firebaseDependencies);
    }
}
var NAMESPACE_EXPORTS = {
    isSupported: isSupported
};
index_cjs_default.a.INTERNAL.registerComponent(new dist_index_cjs["Component"](MESSAGING_NAME, factoryMethod, "PUBLIC" /* PUBLIC */).setServiceProps(NAMESPACE_EXPORTS));
function isSupported() {
    if (self && 'ServiceWorkerGlobalScope' in self) {
        // Running in ServiceWorker context
        return isSWControllerSupported();
    }
    else {
        // Assume we are in the window context.
        return isWindowControllerSupported();
    }
}
/**
 * Checks to see if the required APIs exist.
 */
function isWindowControllerSupported() {
    return ('indexedDB' in window &&
        indexedDB !== null &&
        navigator.cookieEnabled &&
        'serviceWorker' in navigator &&
        'PushManager' in window &&
        'Notification' in window &&
        'fetch' in window &&
        ServiceWorkerRegistration.prototype.hasOwnProperty('showNotification') &&
        PushSubscription.prototype.hasOwnProperty('getKey'));
}
/**
 * Checks to see if the required APIs exist within SW Context.
 */
function isSWControllerSupported() {
    return ('indexedDB' in self &&
        indexedDB !== null &&
        'PushManager' in self &&
        'Notification' in self &&
        ServiceWorkerRegistration.prototype.hasOwnProperty('showNotification') &&
        PushSubscription.prototype.hasOwnProperty('getKey'));
}
//# sourceMappingURL=index.esm.js.map

// CONCATENATED MODULE: ./node_modules/firebase/messaging/dist/index.esm.js

//# sourceMappingURL=index.esm.js.map


/***/ })
/******/ ]);
});
//# sourceMappingURL=pushape-js.js.map