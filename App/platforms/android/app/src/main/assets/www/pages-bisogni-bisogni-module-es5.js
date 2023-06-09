(function () {
  function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-bisogni-bisogni-module"], {
    /***/
    "6Nsh":
    /*!*************************************************!*\
      !*** ./src/app/pages/bisogni/bisogni.module.ts ***!
      \*************************************************/

    /*! exports provided: BisogniPageModule */

    /***/
    function Nsh(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "BisogniPageModule", function () {
        return BisogniPageModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ionic/angular */
      "c7TG");
      /* harmony import */


      var _bisogni_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./bisogni-routing.module */
      "EcZP");
      /* harmony import */


      var _bisogni_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./bisogni.page */
      "WCFE");

      var BisogniPageModule = function BisogniPageModule() {
        _classCallCheck(this, BisogniPageModule);
      };

      BisogniPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _bisogni_routing_module__WEBPACK_IMPORTED_MODULE_5__["BisogniPageRoutingModule"]],
        declarations: [_bisogni_page__WEBPACK_IMPORTED_MODULE_6__["BisogniPage"]]
      })], BisogniPageModule);
      /***/
    },

    /***/
    "EcZP":
    /*!*********************************************************!*\
      !*** ./src/app/pages/bisogni/bisogni-routing.module.ts ***!
      \*********************************************************/

    /*! exports provided: BisogniPageRoutingModule */

    /***/
    function EcZP(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "BisogniPageRoutingModule", function () {
        return BisogniPageRoutingModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _bisogni_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./bisogni.page */
      "WCFE");

      var routes = [{
        path: '',
        component: _bisogni_page__WEBPACK_IMPORTED_MODULE_3__["BisogniPage"]
      }];

      var BisogniPageRoutingModule = function BisogniPageRoutingModule() {
        _classCallCheck(this, BisogniPageRoutingModule);
      };

      BisogniPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], BisogniPageRoutingModule);
      /***/
    },

    /***/
    "WCFE":
    /*!***********************************************!*\
      !*** ./src/app/pages/bisogni/bisogni.page.ts ***!
      \***********************************************/

    /*! exports provided: BisogniPage */

    /***/
    function WCFE(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "BisogniPage", function () {
        return BisogniPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_bisogni_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./bisogni.page.html */
      "XC5k");
      /* harmony import */


      var _bisogni_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./bisogni.page.scss */
      "siN3");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var src_app_services_request_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! src/app/services/request.service */
      "CzMn");
      /* harmony import */


      var src_app_services_utilities_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! src/app/services/utilities.service */
      "tNc6");

      var BisogniPage = /*#__PURE__*/function () {
        function BisogniPage(router, request, utilities) {
          _classCallCheck(this, BisogniPage);

          this.router = router;
          this.request = request;
          this.utilities = utilities;
          this.page = 0;
          this.psize = 3;
          this.bisogni = [];
          this.getBisogni();
        }

        _createClass(BisogniPage, [{
          key: "getBisogni",
          value: function getBisogni() {
            var _this = this;

            var add = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : function () {};
            this.request.get({
              path: "/needs",
              httpParam: {
                "_all": false,
                "_page": this.page,
                "_psize": this.psize
              },
              handler: function handler(result) {
                result["_msg"].forEach(function (element) {
                  element["img"] = 'data:image/jpeg;base64,' + element["img"];
                });

                var _iterator = _createForOfIteratorHelper(result["_msg"]),
                    _step;

                try {
                  for (_iterator.s(); !(_step = _iterator.n()).done;) {
                    var t = _step.value;

                    _this.bisogni.push(t);
                  }
                } catch (err) {
                  _iterator.e(err);
                } finally {
                  _iterator.f();
                }

                ;
                add();
              },
              error: function error() {
                _this.utilities.alertError({});
              }
            });
          }
        }, {
          key: "loadmore",
          value: function loadmore(event) {
            this.page++;
            this.getBisogni(function () {
              event.target.complete();
            });
          }
        }, {
          key: "clickItem",
          value: function clickItem(item) {
            this.router.navigate(["/servizi-collettivita", {
              "bisogno": item.id
            }]);
          }
        }]);

        return BisogniPage;
      }();

      BisogniPage.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
        }, {
          type: src_app_services_request_service__WEBPACK_IMPORTED_MODULE_5__["RequestService"]
        }, {
          type: src_app_services_utilities_service__WEBPACK_IMPORTED_MODULE_6__["UtilitiesService"]
        }];
      };

      BisogniPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-bisogni',
        template: _raw_loader_bisogni_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_bisogni_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], src_app_services_request_service__WEBPACK_IMPORTED_MODULE_5__["RequestService"], src_app_services_utilities_service__WEBPACK_IMPORTED_MODULE_6__["UtilitiesService"]])], BisogniPage);
      /***/
    },

    /***/
    "XC5k":
    /*!***************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/bisogni/bisogni.page.html ***!
      \***************************************************************************************/

    /*! exports provided: default */

    /***/
    function XC5k(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-menu-button autoHide=\"false\"></ion-menu-button>\n    </ion-buttons>\n    <ion-title>\n        <ion-text>Bisogni</ion-text>\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-list>\n    <ion-card style=\"background-color:rgb(29, 39, 61)\" *ngIf=\"bisogni?.length==0\">\n      <ion-card-header>\n        <ion-card-subtitle>\n          <div class=\"ion-text-center\">\n            Attenzione!\n          </div>\n        </ion-card-subtitle>\n        <ion-card-content>\n          Attualmente non sono presenti bisogni segnalati, se volessi segnalare un bisogno puoi farlo nella sezione \"Segnalazione Bisogni\".\n        </ion-card-content>\n      </ion-card-header>\n    </ion-card>\n\n    <ion-card *ngFor=\"let b of bisogni\">\n      <ion-img src=\"{{ b.img }}\"></ion-img>\n      <div id=\"content\">\n      <ion-card-header>\n        <ion-card-subtitle>Segnalato da {{b[\"u.nome\"]}} {{b.cognome}}</ion-card-subtitle>\n        <ion-card-title>{{b.nome}}</ion-card-title>\n      </ion-card-header>\n      <ion-card-content>\n        {{b.descrizione}} <br>\n        Questo bisogno è situato a {{b.citta}} all'indirizzo: {{b.indirizzo}}\n      </ion-card-content>\n      <ion-item (click)=\"clickItem(b)\">\n        <ion-icon name=\"hand\" slot=\"start\"></ion-icon>\n        <ion-label>Offri il tuo aiuto!</ion-label>\n      </ion-item>\n      </div>\n    </ion-card>\n\n\n    <ion-infinite-scroll threshold=\"100px\" (ionInfinite)=\"loadmore($event)\">\n      <ion-infinite-scroll-content loadingSpinner=\"bubbles\" loadingText=\"Caricamento...\">\n      </ion-infinite-scroll-content>\n    </ion-infinite-scroll>\n  </ion-list>\n\n</ion-content>\n";
      /***/
    },

    /***/
    "siN3":
    /*!*************************************************!*\
      !*** ./src/app/pages/bisogni/bisogni.page.scss ***!
      \*************************************************/

    /*! exports provided: default */

    /***/
    function siN3(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJiaXNvZ25pLnBhZ2Uuc2NzcyJ9 */";
      /***/
    }
  }]);
})();
//# sourceMappingURL=pages-bisogni-bisogni-module-es5.js.map