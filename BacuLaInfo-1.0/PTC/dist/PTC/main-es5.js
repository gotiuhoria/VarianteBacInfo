function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
  /*!**************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
    \**************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAppComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<nav class=\"navbar nav-justified navbar-fixed-top\n            navbar-inverse\" role=\"navigation\">\n  <div class=\"container\">\n    <div class=\"navbar-header\">\n      <a routerLink=\"/dashboard\" class=\"navbar-brand\">\n        Home\n      </a>\n    </div>\n    <ul class=\"nav navbar-nav\">\n      <li>\n        <ng-container *ngIf=\"securityObject.isAuthenticated\">\n          <a routerLink=\"/products\"\n             *hasClaim=\"'canAccessProducts'\">Products</a>\n        </ng-container>\n      </li>\n      <li>\n        <ng-container *ngIf=\"securityObject.isAuthenticated\">\n          <a routerLink=\"/categories\"\n             *hasClaim=\"'canAccessCategories'\">Categories</a>\n        </ng-container>\n      </li>\n    </ul>\n    <ul class=\"nav navbar-nav navbar-right\">\n      <li>\n        <a routerLink=\"login\" *ngIf=\"!securityObject.isAuthenticated\">\n          Login\n        </a>\n        <a href=\"#\" onclick=\"logout()\" *ngIf=\"securityObject.isAuthenticated\">\n          Logout {{securityObject.userName}}\n        </a>\n      </li>\n    </ul>\n  </div>\n</nav>\n<div class=\"container body-content\">\n  <router-outlet></router-outlet>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/category/category-list.component.html":
  /*!*********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/category/category-list.component.html ***!
    \*********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppCategoryCategoryListComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"row\">\n  <div class=\"col-xs-12\">\n    <h1>Category List</h1>\n  </div>\n</div>\n\n<div class=\"row\">\n  <div class=\"col-xs-12\">\n    <button class=\"btn btn-primary\" *ngIf=\"securityObject.canAddCategory\">\n      Add New Category\n    </button>\n  </div>\n</div>\n\n<div *ngIf=\"categories && categories.length\">\n  <table class=\"table table-bordered table-striped table-condensed\">\n    <thead>\n      <tr>\n        <th>Category ID</th>\n        <th>Category Name</th>\n      </tr>\n    </thead>\n    <tbody>\n      <tr *ngFor=\"let category of categories\">\n        <td>{{category.categoryId}}</td>\n        <td>{{category.categoryName}}</td>\n      </tr>\n    </tbody>\n  </table>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/dashboard/dashboard.component.html":
  /*!******************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/dashboard/dashboard.component.html ***!
    \******************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppDashboardDashboardComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<h1>Paul's Training Company</h1>\n\n<div class=\"row\">\n  <div class=\"col-xs-12\">\n    <div class=\"well\">\n      <p>\n        Welcome to the Paul's Training Company application.\n      </p>\n    </div>\n  </div>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/product/product-detail.component.html":
  /*!*********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/product/product-detail.component.html ***!
    \*********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppProductProductDetailComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"panel panel-primary\" *ngIf=\"product\">\n  <div class=\"panel-heading\">\n    <h3 class=\"panel-title\">Product Information</h3>\n  </div>\n  <div class=\"panel-body\">\n    <div class=\"form-group\">\n      <label for=\"productName\">Product Name</label>\n      <input id=\"productName\" class=\"form-control\" [(ngModel)]=\"product.productName\" />\n    </div>\n\n    <div class=\"form-group\">\n      <label for=\"introductionDate\">\n        Introduction Date\n      </label>\n      <input id=\"introductionDate\" class=\"form-control\" [ngModel]=\"product.introductionDate | date:'yyyy-MM-dd'\" (ngModelChange)=\"product.introductionDate = $event\"\n        type=\"date\" />\n    </div>\n\n    <div class=\"form-group\">\n      <label for=\"price\">Price</label>\n      <input id=\"price\" class=\"form-control\" [(ngModel)]=\"product.price\" />\n    </div>\n\n    <div class=\"form-group\">\n      <label for=\"url\">URL</label>\n      <input id=\"url\" class=\"form-control\" [(ngModel)]=\"product.url\" />\n    </div>\n\n    <div class=\"form-group\">\n      <label for=\"categories\">Category</label>\n      <select id=\"categories\" name=\"categories\" class=\"form-control\" [(ngModel)]=\"product.categoryId\">\n        <option *ngFor=\"let category of categories\" value=\"{{category.categoryId}}\">\n          {{category.categoryName}}\n        </option>\n      </select>\n    </div>\n  </div>\n  <div class=\"panel-footer\">\n    <button class=\"btn btn-primary\" (click)=\"saveData()\" *ngIf=\"securityObject.canSaveProduct\">Save</button>\n    <button class=\"btn btn-default\" (click)=\"cancel()\">Cancel</button>\n  </div>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/product/product-list.component.html":
  /*!*******************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/product/product-list.component.html ***!
    \*******************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppProductProductListComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"row\">\n  <div class=\"col-xs-12\">\n    <h1>Product List</h1>\n  </div>\n</div>\n\n<div class=\"row\" *ngIf=\"products && products.length\">\n  <div class=\"col-xs-12\">\n    <button class=\"btn btn-primary\" (click)=\"addProduct()\" *ngIf=\"securityObject.canAddProduct\">\n      Add New Product\n    </button>\n  </div>\n</div>\n\n<div *ngIf=\"products && products.length\">\n  <table class=\"table table-bordered table-striped table-condensed\">\n    <thead>\n      <tr>\n        <th>Edit</th>\n        <th>Product Name</th>\n        <th>Introduction Date</th>\n        <th class=\"text-right\">Price</th>\n        <th>URL</th>\n        <th>Delete</th>\n      </tr>\n    </thead>\n    <tbody>\n      <tr *ngFor=\"let product of products\">\n        <td>\n          <a href=\"#\" class=\"btn btn-primary\" [routerLink]=\"['/productDetail', product.productId]\">\n            <i class=\"glyphicon glyphicon-pencil\"></i>\n          </a>\n        </td>\n        <td>{{product.productName}}</td>\n        <td>{{product.introductionDate | date:\"MM/dd/yyyy\"}}</td>\n        <td class=\"text-right\">{{product.price | currency}}</td>\n        <td>{{product.url | lowercase}}</td>\n        <td>\n          <button (click)=\"deleteProduct(product.productId)\" class=\"btn btn-danger\">\n            <i class=\"glyphicon glyphicon-trash\"></i>\n          </button>\n        </td>\n      </tr>\n    </tbody>\n  </table>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/security/login.component.html":
  /*!*************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/security/login.component.html ***!
    \*************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppSecurityLoginComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"row\">\n  <div class=\"col-xs-12\">\n    <div class=\"alert alert-danger\" \n    *ngIf=\"securityObject &&\n           !securityObject.isAuthenticated\">\n      <p>Invalid User Name/Password.</p>\n    </div>\n  </div>\n</div>\n\n<!-- TEMPORARY CODE TO VIEW SECURITY OBJECT -->\n<div class=\"row\">\n  <div class=\"col-xs-12\">\n    <label>{{securityObject | json}}</label>\n  </div>\n</div>\n\n<form>\n  <div class=\"row\">\n    <div class=\"col-xs-12 col-sm-6\">\n      <div class=\"panel panel-primary\">\n        <div class=\"panel-heading\">\n          <h3 class=\"panel-title\">Log in</h3>\n        </div>\n        <div class=\"panel-body\">\n          <div class=\"form-group\">\n            <label for=\"userName\">User Name</label>\n            <div class=\"input-group\">\n              <input id=\"userName\" name=\"userName\" \n                     class=\"form-control\" required\n                     [(ngModel)]=\"user.userName\"\n                     autofocus=\"autofocus\" />\n              <span class=\"input-group-addon\">\n                <i class=\"glyphicon glyphicon-envelope\"></i>\n              </span>\n            </div>\n          </div>\n          <div class=\"form-group\">\n            <label for=\"password\">Password</label>\n            <div class=\"input-group\">\n              <input id=\"password\" name=\"password\" \n                     class=\"form-control\" required \n                     [(ngModel)]=\"user.password\"\n                     type=\"password\" />\n              <span class=\"input-group-addon\">\n                <i class=\"glyphicon glyphicon-lock\"></i>\n              </span>\n            </div>\n          </div>\n        </div>\n        <div class=\"panel-footer\">\n          <button class=\"btn btn-primary\" (click)=\"login()\">\n            Login\n          </button>\n        </div>\n      </div>\n    </div>\n  </div>\n</form>\n";
    /***/
  },

  /***/
  "./node_modules/tslib/tslib.es6.js":
  /*!*****************************************!*\
    !*** ./node_modules/tslib/tslib.es6.js ***!
    \*****************************************/

  /*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __createBinding, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault, __classPrivateFieldGet, __classPrivateFieldSet */

  /***/
  function node_modulesTslibTslibEs6Js(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__extends", function () {
      return __extends;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__assign", function () {
      return _assign;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__rest", function () {
      return __rest;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__decorate", function () {
      return __decorate;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__param", function () {
      return __param;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__metadata", function () {
      return __metadata;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__awaiter", function () {
      return __awaiter;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__generator", function () {
      return __generator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__createBinding", function () {
      return __createBinding;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__exportStar", function () {
      return __exportStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__values", function () {
      return __values;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__read", function () {
      return __read;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spread", function () {
      return __spread;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spreadArrays", function () {
      return __spreadArrays;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__await", function () {
      return __await;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function () {
      return __asyncGenerator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function () {
      return __asyncDelegator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncValues", function () {
      return __asyncValues;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function () {
      return __makeTemplateObject;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importStar", function () {
      return __importStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importDefault", function () {
      return __importDefault;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__classPrivateFieldGet", function () {
      return __classPrivateFieldGet;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__classPrivateFieldSet", function () {
      return __classPrivateFieldSet;
    });
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


    var _extendStatics = function extendStatics(d, b) {
      _extendStatics = Object.setPrototypeOf || {
        __proto__: []
      } instanceof Array && function (d, b) {
        d.__proto__ = b;
      } || function (d, b) {
        for (var p in b) {
          if (b.hasOwnProperty(p)) d[p] = b[p];
        }
      };

      return _extendStatics(d, b);
    };

    function __extends(d, b) {
      _extendStatics(d, b);

      function __() {
        this.constructor = d;
      }

      d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }

    var _assign = function __assign() {
      _assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];

          for (var p in s) {
            if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
          }
        }

        return t;
      };

      return _assign.apply(this, arguments);
    };

    function __rest(s, e) {
      var t = {};

      for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
      }

      if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
      }
      return t;
    }

    function __decorate(decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    }

    function __param(paramIndex, decorator) {
      return function (target, key) {
        decorator(target, key, paramIndex);
      };
    }

    function __metadata(metadataKey, metadataValue) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
    }

    function __awaiter(thisArg, _arguments, P, generator) {
      function adopt(value) {
        return value instanceof P ? value : new P(function (resolve) {
          resolve(value);
        });
      }

      return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) {
          try {
            step(generator.next(value));
          } catch (e) {
            reject(e);
          }
        }

        function rejected(value) {
          try {
            step(generator["throw"](value));
          } catch (e) {
            reject(e);
          }
        }

        function step(result) {
          result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
        }

        step((generator = generator.apply(thisArg, _arguments || [])).next());
      });
    }

    function __generator(thisArg, body) {
      var _ = {
        label: 0,
        sent: function sent() {
          if (t[0] & 1) throw t[1];
          return t[1];
        },
        trys: [],
        ops: []
      },
          f,
          y,
          t,
          g;
      return g = {
        next: verb(0),
        "throw": verb(1),
        "return": verb(2)
      }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
        return this;
      }), g;

      function verb(n) {
        return function (v) {
          return step([n, v]);
        };
      }

      function step(op) {
        if (f) throw new TypeError("Generator is already executing.");

        while (_) {
          try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];

            switch (op[0]) {
              case 0:
              case 1:
                t = op;
                break;

              case 4:
                _.label++;
                return {
                  value: op[1],
                  done: false
                };

              case 5:
                _.label++;
                y = op[1];
                op = [0];
                continue;

              case 7:
                op = _.ops.pop();

                _.trys.pop();

                continue;

              default:
                if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                  _ = 0;
                  continue;
                }

                if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                  _.label = op[1];
                  break;
                }

                if (op[0] === 6 && _.label < t[1]) {
                  _.label = t[1];
                  t = op;
                  break;
                }

                if (t && _.label < t[2]) {
                  _.label = t[2];

                  _.ops.push(op);

                  break;
                }

                if (t[2]) _.ops.pop();

                _.trys.pop();

                continue;
            }

            op = body.call(thisArg, _);
          } catch (e) {
            op = [6, e];
            y = 0;
          } finally {
            f = t = 0;
          }
        }

        if (op[0] & 5) throw op[1];
        return {
          value: op[0] ? op[1] : void 0,
          done: true
        };
      }
    }

    function __createBinding(o, m, k, k2) {
      if (k2 === undefined) k2 = k;
      o[k2] = m[k];
    }

    function __exportStar(m, exports) {
      for (var p in m) {
        if (p !== "default" && !exports.hasOwnProperty(p)) exports[p] = m[p];
      }
    }

    function __values(o) {
      var s = typeof Symbol === "function" && Symbol.iterator,
          m = s && o[s],
          i = 0;
      if (m) return m.call(o);
      if (o && typeof o.length === "number") return {
        next: function next() {
          if (o && i >= o.length) o = void 0;
          return {
            value: o && o[i++],
            done: !o
          };
        }
      };
      throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
    }

    function __read(o, n) {
      var m = typeof Symbol === "function" && o[Symbol.iterator];
      if (!m) return o;
      var i = m.call(o),
          r,
          ar = [],
          e;

      try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) {
          ar.push(r.value);
        }
      } catch (error) {
        e = {
          error: error
        };
      } finally {
        try {
          if (r && !r.done && (m = i["return"])) m.call(i);
        } finally {
          if (e) throw e.error;
        }
      }

      return ar;
    }

    function __spread() {
      for (var ar = [], i = 0; i < arguments.length; i++) {
        ar = ar.concat(__read(arguments[i]));
      }

      return ar;
    }

    function __spreadArrays() {
      for (var s = 0, i = 0, il = arguments.length; i < il; i++) {
        s += arguments[i].length;
      }

      for (var r = Array(s), k = 0, i = 0; i < il; i++) {
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++) {
          r[k] = a[j];
        }
      }

      return r;
    }

    ;

    function __await(v) {
      return this instanceof __await ? (this.v = v, this) : new __await(v);
    }

    function __asyncGenerator(thisArg, _arguments, generator) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var g = generator.apply(thisArg, _arguments || []),
          i,
          q = [];
      return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i;

      function verb(n) {
        if (g[n]) i[n] = function (v) {
          return new Promise(function (a, b) {
            q.push([n, v, a, b]) > 1 || resume(n, v);
          });
        };
      }

      function resume(n, v) {
        try {
          step(g[n](v));
        } catch (e) {
          settle(q[0][3], e);
        }
      }

      function step(r) {
        r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);
      }

      function fulfill(value) {
        resume("next", value);
      }

      function reject(value) {
        resume("throw", value);
      }

      function settle(f, v) {
        if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]);
      }
    }

    function __asyncDelegator(o) {
      var i, p;
      return i = {}, verb("next"), verb("throw", function (e) {
        throw e;
      }), verb("return"), i[Symbol.iterator] = function () {
        return this;
      }, i;

      function verb(n, f) {
        i[n] = o[n] ? function (v) {
          return (p = !p) ? {
            value: __await(o[n](v)),
            done: n === "return"
          } : f ? f(v) : v;
        } : f;
      }
    }

    function __asyncValues(o) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var m = o[Symbol.asyncIterator],
          i;
      return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i);

      function verb(n) {
        i[n] = o[n] && function (v) {
          return new Promise(function (resolve, reject) {
            v = o[n](v), settle(resolve, reject, v.done, v.value);
          });
        };
      }

      function settle(resolve, reject, d, v) {
        Promise.resolve(v).then(function (v) {
          resolve({
            value: v,
            done: d
          });
        }, reject);
      }
    }

    function __makeTemplateObject(cooked, raw) {
      if (Object.defineProperty) {
        Object.defineProperty(cooked, "raw", {
          value: raw
        });
      } else {
        cooked.raw = raw;
      }

      return cooked;
    }

    ;

    function __importStar(mod) {
      if (mod && mod.__esModule) return mod;
      var result = {};
      if (mod != null) for (var k in mod) {
        if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
      }
      result["default"] = mod;
      return result;
    }

    function __importDefault(mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
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
    /***/

  },

  /***/
  "./src/app/app-routing.module.ts":
  /*!***************************************!*\
    !*** ./src/app/app-routing.module.ts ***!
    \***************************************/

  /*! exports provided: AppRoutingModule */

  /***/
  function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _product_product_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./product/product-list.component */
    "./src/app/product/product-list.component.ts");
    /* harmony import */


    var _category_category_list_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./category/category-list.component */
    "./src/app/category/category-list.component.ts");
    /* harmony import */


    var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./dashboard/dashboard.component */
    "./src/app/dashboard/dashboard.component.ts");
    /* harmony import */


    var _product_product_detail_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./product/product-detail.component */
    "./src/app/product/product-detail.component.ts");
    /* harmony import */


    var _security_login_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./security/login.component */
    "./src/app/security/login.component.ts");
    /* harmony import */


    var _security_auth_guard__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./security/auth.guard */
    "./src/app/security/auth.guard.ts");

    var routes = [{
      path: 'dashboard',
      component: _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_5__["DashboardComponent"]
    }, {
      path: 'login',
      component: _security_login_component__WEBPACK_IMPORTED_MODULE_7__["LoginComponent"]
    }, {
      path: 'products',
      component: _product_product_list_component__WEBPACK_IMPORTED_MODULE_3__["ProductListComponent"],
      canActivate: [_security_auth_guard__WEBPACK_IMPORTED_MODULE_8__["AuthGuard"]],
      data: {
        claimType: 'canAccessProducts'
      }
    }, {
      path: 'productDetail/:id',
      component: _product_product_detail_component__WEBPACK_IMPORTED_MODULE_6__["ProductDetailComponent"],
      canActivate: [_security_auth_guard__WEBPACK_IMPORTED_MODULE_8__["AuthGuard"]],
      data: {
        claimType: 'canAccessProducts'
      }
    }, {
      path: 'categories',
      component: _category_category_list_component__WEBPACK_IMPORTED_MODULE_4__["CategoryListComponent"],
      canActivate: [_security_auth_guard__WEBPACK_IMPORTED_MODULE_8__["AuthGuard"]],
      data: {
        claimType: 'canAccessCategories'
      }
    }, {
      path: '',
      redirectTo: 'dashboard',
      pathMatch: 'full'
    }, {
      path: '**',
      component: _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_5__["DashboardComponent"]
    }];

    var AppRoutingModule = function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    };

    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], AppRoutingModule);
    /***/
  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _security_security_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./security/security.service */
    "./src/app/security/security.service.ts");

    var AppComponent = /*#__PURE__*/function () {
      function AppComponent(securityService) {
        _classCallCheck(this, AppComponent);

        this.securityService = securityService;
        this.title = 'Paul\'s Training Company';
        this.securityObject = null;
        this.securityObject = securityService.securityObject;
      }

      _createClass(AppComponent, [{
        key: "logout",
        value: function logout() {
          this.securityService.logout();
        }
      }]);

      return AppComponent;
    }();

    AppComponent.ctorParameters = function () {
      return [{
        type: _security_security_service__WEBPACK_IMPORTED_MODULE_2__["SecurityService"]
      }];
    };

    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'ptc-root',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./app.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html"))["default"]
    })], AppComponent);
    /***/
  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _product_product_list_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./product/product-list.component */
    "./src/app/product/product-list.component.ts");
    /* harmony import */


    var _product_product_detail_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./product/product-detail.component */
    "./src/app/product/product-detail.component.ts");
    /* harmony import */


    var _product_product_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./product/product.service */
    "./src/app/product/product.service.ts");
    /* harmony import */


    var _category_category_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./category/category.service */
    "./src/app/category/category.service.ts");
    /* harmony import */


    var _category_category_list_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./category/category-list.component */
    "./src/app/category/category-list.component.ts");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./dashboard/dashboard.component */
    "./src/app/dashboard/dashboard.component.ts");
    /* harmony import */


    var _security_security_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ./security/security.service */
    "./src/app/security/security.service.ts");
    /* harmony import */


    var _security_login_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ./security/login.component */
    "./src/app/security/login.component.ts");
    /* harmony import */


    var _security_auth_guard__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! ./security/auth.guard */
    "./src/app/security/auth.guard.ts");
    /* harmony import */


    var _security_http_interceptor_module__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! ./security/http-interceptor.module */
    "./src/app/security/http-interceptor.module.ts");
    /* harmony import */


    var _security_has_claim_directive__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! ./security/has-claim.directive */
    "./src/app/security/has-claim.directive.ts");

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
      declarations: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"], _product_product_list_component__WEBPACK_IMPORTED_MODULE_6__["ProductListComponent"], _product_product_detail_component__WEBPACK_IMPORTED_MODULE_7__["ProductDetailComponent"], _category_category_list_component__WEBPACK_IMPORTED_MODULE_10__["CategoryListComponent"], _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_12__["DashboardComponent"], _security_login_component__WEBPACK_IMPORTED_MODULE_14__["LoginComponent"], _security_has_claim_directive__WEBPACK_IMPORTED_MODULE_17__["HasClaimDirective"]],
      imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_11__["AppRoutingModule"], _security_http_interceptor_module__WEBPACK_IMPORTED_MODULE_16__["HttpInterceptorModule"]],
      providers: [_product_product_service__WEBPACK_IMPORTED_MODULE_8__["ProductService"], _category_category_service__WEBPACK_IMPORTED_MODULE_9__["CategoryService"], _security_security_service__WEBPACK_IMPORTED_MODULE_13__["SecurityService"], _security_auth_guard__WEBPACK_IMPORTED_MODULE_15__["AuthGuard"]],
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
    })], AppModule);
    /***/
  },

  /***/
  "./src/app/category/category-list.component.ts":
  /*!*****************************************************!*\
    !*** ./src/app/category/category-list.component.ts ***!
    \*****************************************************/

  /*! exports provided: CategoryListComponent */

  /***/
  function srcAppCategoryCategoryListComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CategoryListComponent", function () {
      return CategoryListComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _category_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./category.service */
    "./src/app/category/category.service.ts");
    /* harmony import */


    var _security_security_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../security/security.service */
    "./src/app/security/security.service.ts");

    var CategoryListComponent = /*#__PURE__*/function () {
      function CategoryListComponent(categoryService, securityService) {
        _classCallCheck(this, CategoryListComponent);

        this.categoryService = categoryService;
        this.securityService = securityService;
        this.securityObject = null;
        this.securityObject = securityService.securityObject;
      }

      _createClass(CategoryListComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.getCategories();
        }
      }, {
        key: "getCategories",
        value: function getCategories() {
          var _this = this;

          this.categoryService.getCategories().subscribe(function (categories) {
            return _this.categories = categories;
          });
        }
      }]);

      return CategoryListComponent;
    }();

    CategoryListComponent.ctorParameters = function () {
      return [{
        type: _category_service__WEBPACK_IMPORTED_MODULE_2__["CategoryService"]
      }, {
        type: _security_security_service__WEBPACK_IMPORTED_MODULE_3__["SecurityService"]
      }];
    };

    CategoryListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./category-list.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/category/category-list.component.html"))["default"]
    })], CategoryListComponent);
    /***/
  },

  /***/
  "./src/app/category/category.service.ts":
  /*!**********************************************!*\
    !*** ./src/app/category/category.service.ts ***!
    \**********************************************/

  /*! exports provided: CategoryService */

  /***/
  function srcAppCategoryCategoryServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CategoryService", function () {
      return CategoryService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");

    var API_URL = 'http://localhost:5000/api/category/';

    var CategoryService = /*#__PURE__*/function () {
      function CategoryService(http) {
        _classCallCheck(this, CategoryService);

        this.http = http;
      }

      _createClass(CategoryService, [{
        key: "getCategories",
        value: function getCategories() {
          return this.http.get(API_URL);
        }
      }]);

      return CategoryService;
    }();

    CategoryService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
      }];
    };

    CategoryService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()], CategoryService);
    /***/
  },

  /***/
  "./src/app/dashboard/dashboard.component.ts":
  /*!**************************************************!*\
    !*** ./src/app/dashboard/dashboard.component.ts ***!
    \**************************************************/

  /*! exports provided: DashboardComponent */

  /***/
  function srcAppDashboardDashboardComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DashboardComponent", function () {
      return DashboardComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var DashboardComponent = /*#__PURE__*/function () {
      function DashboardComponent() {
        _classCallCheck(this, DashboardComponent);
      }

      _createClass(DashboardComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return DashboardComponent;
    }();

    DashboardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'ptc-dashboard',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./dashboard.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/dashboard/dashboard.component.html"))["default"]
    })], DashboardComponent);
    /***/
  },

  /***/
  "./src/app/product/product-detail.component.ts":
  /*!*****************************************************!*\
    !*** ./src/app/product/product-detail.component.ts ***!
    \*****************************************************/

  /*! exports provided: ProductDetailComponent */

  /***/
  function srcAppProductProductDetailComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProductDetailComponent", function () {
      return ProductDetailComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _product_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./product.service */
    "./src/app/product/product.service.ts");
    /* harmony import */


    var _product__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./product */
    "./src/app/product/product.ts");
    /* harmony import */


    var _category_category_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../category/category.service */
    "./src/app/category/category.service.ts");
    /* harmony import */


    var _security_security_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../security/security.service */
    "./src/app/security/security.service.ts");

    var ProductDetailComponent = /*#__PURE__*/function () {
      function ProductDetailComponent(categoryService, productService, route, location, securityService) {
        _classCallCheck(this, ProductDetailComponent);

        this.categoryService = categoryService;
        this.productService = productService;
        this.route = route;
        this.location = location;
        this.securityService = securityService;
        this.securityObject = null;
        this.securityObject = securityService.securityObject;
      }

      _createClass(ProductDetailComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.getCategories(); // Get the passed in product id

          var id = +this.route.snapshot.paramMap.get('id'); // Create or load a product

          this.createOrLoadProduct(id);
        }
      }, {
        key: "createOrLoadProduct",
        value: function createOrLoadProduct(id) {
          var _this2 = this;

          if (id === -1) {
            // Create new product object
            this.initProduct();
          } else {
            // Get a product from product service
            this.productService.getProduct(id).subscribe(function (product) {
              _this2.product = product;
              _this2.originalProduct = Object.assign({}, _this2.product);
            });
          }
        }
      }, {
        key: "initProduct",
        value: function initProduct() {
          // Add a new product
          this.product = new _product__WEBPACK_IMPORTED_MODULE_5__["Product"]({
            introductionDate: new Date(),
            price: 1,
            url: 'www.fairwaytech.com'
          });
          this.originalProduct = Object.assign({}, this.product);
        }
      }, {
        key: "getCategories",
        value: function getCategories() {
          var _this3 = this;

          this.categoryService.getCategories().subscribe(function (categories) {
            return _this3.categories = categories;
          });
        }
      }, {
        key: "saveData",
        value: function saveData() {
          var _this4 = this;

          if (this.product.productId) {
            // Update product
            this.productService.updateProduct(this.product).subscribe(function (product) {
              _this4.product = product;
            }, function () {
              return null;
            }, function () {
              return _this4.dataSaved();
            });
          } else {
            // Add a product
            this.productService.addProduct(this.product).subscribe(function (product) {
              _this4.product = product;
            }, function () {
              return null;
            }, function () {
              return _this4.dataSaved();
            });
          }
        }
      }, {
        key: "dataSaved",
        value: function dataSaved() {
          // Redirect back to list
          this.goBack();
        }
      }, {
        key: "goBack",
        value: function goBack() {
          this.location.back();
        }
      }, {
        key: "cancel",
        value: function cancel() {
          this.goBack();
        }
      }]);

      return ProductDetailComponent;
    }();

    ProductDetailComponent.ctorParameters = function () {
      return [{
        type: _category_category_service__WEBPACK_IMPORTED_MODULE_6__["CategoryService"]
      }, {
        type: _product_service__WEBPACK_IMPORTED_MODULE_4__["ProductService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
      }, {
        type: _angular_common__WEBPACK_IMPORTED_MODULE_3__["Location"]
      }, {
        type: _security_security_service__WEBPACK_IMPORTED_MODULE_7__["SecurityService"]
      }];
    };

    ProductDetailComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./product-detail.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/product/product-detail.component.html"))["default"]
    })], ProductDetailComponent);
    /***/
  },

  /***/
  "./src/app/product/product-list.component.ts":
  /*!***************************************************!*\
    !*** ./src/app/product/product-list.component.ts ***!
    \***************************************************/

  /*! exports provided: ProductListComponent */

  /***/
  function srcAppProductProductListComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProductListComponent", function () {
      return ProductListComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _product_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./product.service */
    "./src/app/product/product.service.ts");
    /* harmony import */


    var _security_security_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../security/security.service */
    "./src/app/security/security.service.ts");

    var ProductListComponent = /*#__PURE__*/function () {
      function ProductListComponent(productService, router, securityService) {
        _classCallCheck(this, ProductListComponent);

        this.productService = productService;
        this.router = router;
        this.securityService = securityService;
        this.securityObject = null;
        this.securityObject = securityService.securityObject;
      }

      _createClass(ProductListComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.getProducts();
        }
      }, {
        key: "getProducts",
        value: function getProducts() {
          var _this5 = this;

          this.productService.getProducts().subscribe(function (products) {
            return _this5.products = products;
          });
        }
      }, {
        key: "addProduct",
        value: function addProduct() {
          this.router.navigate(['/productDetail', -1]);
        }
      }, {
        key: "deleteProduct",
        value: function deleteProduct(id) {
          var _this6 = this;

          if (confirm('Delete this product?')) {
            this.productService.deleteProduct(id).subscribe(function () {
              return _this6.products = _this6.products.filter(function (p) {
                return p.productId !== id;
              });
            });
          }
        }
      }]);

      return ProductListComponent;
    }();

    ProductListComponent.ctorParameters = function () {
      return [{
        type: _product_service__WEBPACK_IMPORTED_MODULE_3__["ProductService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }, {
        type: _security_security_service__WEBPACK_IMPORTED_MODULE_4__["SecurityService"]
      }];
    };

    ProductListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./product-list.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/product/product-list.component.html"))["default"]
    })], ProductListComponent);
    /***/
  },

  /***/
  "./src/app/product/product.service.ts":
  /*!********************************************!*\
    !*** ./src/app/product/product.service.ts ***!
    \********************************************/

  /*! exports provided: ProductService */

  /***/
  function srcAppProductProductServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProductService", function () {
      return ProductService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");

    var API_URL = 'http://localhost:5000/api/product/';
    var httpOptions = {
      headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
        'Content-Type': 'application/json'
      })
    };

    var ProductService = /*#__PURE__*/function () {
      function ProductService(http) {
        _classCallCheck(this, ProductService);

        this.http = http;
      }

      _createClass(ProductService, [{
        key: "getProducts",
        value: function getProducts() {
          return this.http.get(API_URL);
        }
      }, {
        key: "getProduct",
        value: function getProduct(id) {
          return this.http.get(API_URL + id.toString());
        }
      }, {
        key: "addProduct",
        value: function addProduct(entity) {
          return this.http.post(API_URL, entity, httpOptions);
        }
      }, {
        key: "updateProduct",
        value: function updateProduct(entity) {
          return this.http.put(API_URL, entity, httpOptions);
        }
      }, {
        key: "deleteProduct",
        value: function deleteProduct(id) {
          return this.http["delete"](API_URL + id.toString(), httpOptions);
        }
      }]);

      return ProductService;
    }();

    ProductService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
      }];
    };

    ProductService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()], ProductService);
    /***/
  },

  /***/
  "./src/app/product/product.ts":
  /*!************************************!*\
    !*** ./src/app/product/product.ts ***!
    \************************************/

  /*! exports provided: Product */

  /***/
  function srcAppProductProductTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Product", function () {
      return Product;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");

    var Product = function Product(init) {
      _classCallCheck(this, Product);

      Object.assign(this, init);
    };
    /***/

  },

  /***/
  "./src/app/security/app-user-auth.ts":
  /*!*******************************************!*\
    !*** ./src/app/security/app-user-auth.ts ***!
    \*******************************************/

  /*! exports provided: AppUserAuth */

  /***/
  function srcAppSecurityAppUserAuthTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppUserAuth", function () {
      return AppUserAuth;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");

    var AppUserAuth = function AppUserAuth() {
      _classCallCheck(this, AppUserAuth);

      this.userName = '';
      this.bearerToken = '';
      this.isAuthenticated = false;
      this.claims = [];
    };
    /***/

  },

  /***/
  "./src/app/security/app-user.ts":
  /*!**************************************!*\
    !*** ./src/app/security/app-user.ts ***!
    \**************************************/

  /*! exports provided: AppUser */

  /***/
  function srcAppSecurityAppUserTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppUser", function () {
      return AppUser;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");

    var AppUser = function AppUser() {
      _classCallCheck(this, AppUser);

      this.userName = '';
      this.password = '';
    };
    /***/

  },

  /***/
  "./src/app/security/auth.guard.ts":
  /*!****************************************!*\
    !*** ./src/app/security/auth.guard.ts ***!
    \****************************************/

  /*! exports provided: AuthGuard */

  /***/
  function srcAppSecurityAuthGuardTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AuthGuard", function () {
      return AuthGuard;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _security_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./security.service */
    "./src/app/security/security.service.ts");

    var AuthGuard = /*#__PURE__*/function () {
      function AuthGuard(securityService, router) {
        _classCallCheck(this, AuthGuard);

        this.securityService = securityService;
        this.router = router;
      }

      _createClass(AuthGuard, [{
        key: "canActivate",
        value: function canActivate(next, state) {
          // Get property name on security object to check
          var claimType = next.data.claimType;

          if (this.securityService.securityObject.isAuthenticated && this.securityService.hasClaim(claimType)) {
            return true;
          } else {
            this.router.navigate(['login'], {
              queryParams: {
                returnUrl: state.url
              }
            });
            return false;
          }
        }
      }]);

      return AuthGuard;
    }();

    AuthGuard.ctorParameters = function () {
      return [{
        type: _security_service__WEBPACK_IMPORTED_MODULE_3__["SecurityService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }];
    };

    AuthGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()], AuthGuard);
    /***/
  },

  /***/
  "./src/app/security/has-claim.directive.ts":
  /*!*************************************************!*\
    !*** ./src/app/security/has-claim.directive.ts ***!
    \*************************************************/

  /*! exports provided: HasClaimDirective */

  /***/
  function srcAppSecurityHasClaimDirectiveTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HasClaimDirective", function () {
      return HasClaimDirective;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _security_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./security.service */
    "./src/app/security/security.service.ts");

    var HasClaimDirective = /*#__PURE__*/function () {
      function HasClaimDirective(templateRef, viewContainer, securityService) {
        _classCallCheck(this, HasClaimDirective);

        this.templateRef = templateRef;
        this.viewContainer = viewContainer;
        this.securityService = securityService;
      }

      _createClass(HasClaimDirective, [{
        key: "hasClaim",
        set: function set(claimType) {
          if (this.securityService.hasClaim(claimType)) {
            // Add template to DOM
            this.viewContainer.createEmbeddedView(this.templateRef);
          } else {
            // Remove template from DOM
            this.viewContainer.clear();
          }
        }
      }]);

      return HasClaimDirective;
    }();

    HasClaimDirective.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"]
      }, {
        type: _security_service__WEBPACK_IMPORTED_MODULE_2__["SecurityService"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], HasClaimDirective.prototype, "hasClaim", null);
    HasClaimDirective = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
      // tslint:disable-next-line:directive-selector
      selector: '[hasClaim]'
    })], HasClaimDirective);
    /***/
  },

  /***/
  "./src/app/security/http-interceptor.module.ts":
  /*!*****************************************************!*\
    !*** ./src/app/security/http-interceptor.module.ts ***!
    \*****************************************************/

  /*! exports provided: HttpRequestInterceptor, HttpInterceptorModule */

  /***/
  function srcAppSecurityHttpInterceptorModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HttpRequestInterceptor", function () {
      return HttpRequestInterceptor;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HttpInterceptorModule", function () {
      return HttpInterceptorModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");

    var HttpRequestInterceptor = /*#__PURE__*/function () {
      function HttpRequestInterceptor() {
        _classCallCheck(this, HttpRequestInterceptor);
      }

      _createClass(HttpRequestInterceptor, [{
        key: "intercept",
        value: function intercept(req, next) {
          var token = localStorage.getItem('bearerToken');

          if (token) {
            var newReq = req.clone({
              headers: req.headers.set('Authorization', 'Bearer ' + token)
            });
            return next.handle(newReq);
          } else {
            return next.handle(req);
          }
        }
      }]);

      return HttpRequestInterceptor;
    }();

    HttpRequestInterceptor = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()], HttpRequestInterceptor);

    var HttpInterceptorModule = function HttpInterceptorModule() {
      _classCallCheck(this, HttpInterceptorModule);
    };

    HttpInterceptorModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      providers: [{
        provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HTTP_INTERCEPTORS"],
        useClass: HttpRequestInterceptor,
        multi: true
      }]
    })], HttpInterceptorModule);
    /***/
  },

  /***/
  "./src/app/security/login.component.css":
  /*!**********************************************!*\
    !*** ./src/app/security/login.component.css ***!
    \**********************************************/

  /*! exports provided: default */

  /***/
  function srcAppSecurityLoginComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NlY3VyaXR5L2xvZ2luLmNvbXBvbmVudC5jc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/security/login.component.ts":
  /*!*********************************************!*\
    !*** ./src/app/security/login.component.ts ***!
    \*********************************************/

  /*! exports provided: LoginComponent */

  /***/
  function srcAppSecurityLoginComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LoginComponent", function () {
      return LoginComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _app_user__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app-user */
    "./src/app/security/app-user.ts");
    /* harmony import */


    var _app_user_auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app-user-auth */
    "./src/app/security/app-user-auth.ts");
    /* harmony import */


    var _security_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./security.service */
    "./src/app/security/security.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");

    var LoginComponent = /*#__PURE__*/function () {
      function LoginComponent(securityService, route, router) {
        _classCallCheck(this, LoginComponent);

        this.securityService = securityService;
        this.route = route;
        this.router = router;
        this.user = new _app_user__WEBPACK_IMPORTED_MODULE_2__["AppUser"]();
        this.securityObject = null;
      }

      _createClass(LoginComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.returnUrl = this.route.snapshot.queryParamMap.get('returnUrl');
        }
      }, {
        key: "login",
        value: function login() {
          var _this7 = this;

          this.securityService.login(this.user).subscribe(function (resp) {
            _this7.securityObject = resp;

            if (_this7.returnUrl) {
              _this7.router.navigateByUrl(_this7.returnUrl);
            }
          }, function () {
            // Initialize security object to display error message
            _this7.securityObject = new _app_user_auth__WEBPACK_IMPORTED_MODULE_3__["AppUserAuth"]();
          });
        }
      }]);

      return LoginComponent;
    }();

    LoginComponent.ctorParameters = function () {
      return [{
        type: _security_service__WEBPACK_IMPORTED_MODULE_4__["SecurityService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]
      }];
    };

    LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'ptc-login',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./login.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/security/login.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./login.component.css */
      "./src/app/security/login.component.css"))["default"]]
    })], LoginComponent);
    /***/
  },

  /***/
  "./src/app/security/security.service.ts":
  /*!**********************************************!*\
    !*** ./src/app/security/security.service.ts ***!
    \**********************************************/

  /*! exports provided: SecurityService */

  /***/
  function srcAppSecuritySecurityServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SecurityService", function () {
      return SecurityService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _app_user_auth__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./app-user-auth */
    "./src/app/security/app-user-auth.ts");

    var API_URL = 'http://localhost:5000/api/security/';
    var httpOptions = {
      headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
        'Content-Type': 'application/json'
      })
    };

    var SecurityService = /*#__PURE__*/function () {
      function SecurityService(http) {
        _classCallCheck(this, SecurityService);

        this.http = http;
        this.securityObject = new _app_user_auth__WEBPACK_IMPORTED_MODULE_4__["AppUserAuth"]();
      }

      _createClass(SecurityService, [{
        key: "login",
        value: function login(entity) {
          var _this8 = this;

          // Initialize security object
          this.resetSecurityObject();
          return this.http.post(API_URL + 'login', entity, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (resp) {
            // Use object assign to update the current object
            // NOTE: Don't create a new AppUserAuth object
            //       because that destroys all references to object
            Object.assign(_this8.securityObject, resp); // Store into local storage

            localStorage.setItem('bearerToken', _this8.securityObject.bearerToken);
          }));
        }
      }, {
        key: "logout",
        value: function logout() {
          this.resetSecurityObject();
        }
      }, {
        key: "resetSecurityObject",
        value: function resetSecurityObject() {
          this.securityObject.userName = '';
          this.securityObject.bearerToken = '';
          this.securityObject.isAuthenticated = false;
          this.securityObject.claims = [];
          localStorage.removeItem('bearerToken');
        } // This method can be called a couple of different ways
        // *hasClaim="'claimType'"  // Assumes claimValue is true
        // *hasClaim="'claimType:value'"  // Compares claimValue to value
        // *hasClaim="['claimType1','claimType2:value','claimType3']"

      }, {
        key: "hasClaim",
        value: function hasClaim(claimType, claimValue) {
          var ret = false; // See if an array of values was passed in.

          if (typeof claimType === 'string') {
            ret = this.isClaimValid(claimType, claimValue);
          } else {
            var claims = claimType;

            if (claims) {
              // tslint:disable-next-line:prefer-for-of
              for (var index = 0; index < claims.length; index++) {
                ret = this.isClaimValid(claims[index]); // If one is successful, then let them in

                if (ret) {
                  break;
                }
              }
            }
          }

          return ret;
        }
      }, {
        key: "isClaimValid",
        value: function isClaimValid(claimType, claimValue) {
          var ret = false;
          var auth = null; // Retrieve security object

          auth = this.securityObject;

          if (auth) {
            // See if the claim type has a value
            // *hasClaim="'claimType:value'"
            if (claimType.indexOf(':') >= 0) {
              var words = claimType.split(':');
              claimType = words[0].toLowerCase();
              claimValue = words[1];
            } else {
              claimType = claimType.toLowerCase(); // Either get the claim value, or assume 'true'

              claimValue = claimValue ? claimValue : 'true';
            } // Attempt to find the claim


            ret = auth.claims.find(function (c) {
              return c.claimType.toLowerCase() === claimType && c.claimValue === claimValue;
            }) != null;
          }

          return ret;
        }
      }]);

      return SecurityService;
    }();

    SecurityService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
      }];
    };

    SecurityService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()], SecurityService);
    /***/
  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js"); // The file contents for the current environment will overwrite these during build.
    // The build system defaults to the dev environment which uses `environment.ts`, but if you do
    // `ng build --env=prod` then `environment.prod.ts` will be used instead.
    // The list of which env maps to which file can be found in `.angular-cli.json`.


    var environment = {
      production: false
    };
    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/platform-browser-dynamic */
    "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
    }

    Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])["catch"](function (err) {
      return console.log(err);
    });
    /***/
  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! D:\MyProjects\JWTAngular\PTC\src\main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map