(function () {
  function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-certifica-servizi-certifica-servizi-module"], {
    /***/
    "7oRG":
    /*!*****************************************************************************!*\
      !*** ./src/app/pages/certifica-servizi/certifica-servizi-routing.module.ts ***!
      \*****************************************************************************/

    /*! exports provided: CertificaServiziPageRoutingModule */

    /***/
    function oRG(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CertificaServiziPageRoutingModule", function () {
        return CertificaServiziPageRoutingModule;
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


      var _certifica_servizi_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./certifica-servizi.page */
      "nCF/");

      var routes = [{
        path: '',
        component: _certifica_servizi_page__WEBPACK_IMPORTED_MODULE_3__["CertificaServiziPage"]
      }];

      var CertificaServiziPageRoutingModule = function CertificaServiziPageRoutingModule() {
        _classCallCheck(this, CertificaServiziPageRoutingModule);
      };

      CertificaServiziPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], CertificaServiziPageRoutingModule);
      /***/
    },

    /***/
    "QwLs":
    /*!***********************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/certifica-servizi/certifica-servizi.page.html ***!
      \***********************************************************************************************************/

    /*! exports provided: default */

    /***/
    function QwLs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-menu-button autoHide=\"false\"></ion-menu-button>\n    </ion-buttons>\n    <ion-title>\n        <ion-text>Richieste</ion-text>\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-list>\n    <ion-card style=\"background-color:rgb(29, 39, 61)\" *ngIf=\"servizi?.length==0\">\n      <ion-card-header>\n        <ion-card-subtitle>\n          <div class=\"ion-text-center\">\n            Attenzione!\n          </div>\n        </ion-card-subtitle>\n        <ion-card-content>\n          Attualmente non sono presenti richieste di certificazione di servizi offerti alla comunità.\n        </ion-card-content>\n      </ion-card-header>\n    </ion-card>\n\n    <ion-card *ngFor=\"let s of servizi\">\n\n\n\n      <div id=\"content\"  *ngIf=\"s.richiestaBisogno==1\">\n        <ion-row>\n          <ion-col col-6 class=\"ion-no-padding\">\n            <ion-item>\n              <ion-label style=\"text-align: center;\">Prima</ion-label>\n            </ion-item>\n            <ion-img src=\"{{ s.imgPrima }}\"></ion-img>\n          </ion-col>\n          <ion-col col-6 class=\"ion-no-padding\">\n            <ion-item>\n              <ion-label style=\"text-align: center;\">Dopo</ion-label>\n            </ion-item>\n            <ion-img src=\"{{ s.img }}\"></ion-img>\n          </ion-col>\n        </ion-row>\n        <ion-card-header>\n          <ion-card-subtitle>Servizio eseguito da {{s.nome}} {{s.cognome}} <br> in data {{s.data}} alle ore {{s.orario}}</ion-card-subtitle>\n          <ion-card-title>Bisogno: {{s.nomeBisogno}}</ion-card-title>\n        </ion-card-header>\n        <ion-card-content>\n          <p>\n            Descrizione bisogno: <br> {{s.descrizioneBisogno}}\n          </p>\n          <p>\n            Messaggio del servizio: <br> {{s.messaggio}}\n          </p>\n        </ion-card-content>\n      </div>\n\n      <div id=\"content\"  *ngIf=\"s.richiestaBisogno==0\">\n        <ion-img src=\"{{ s.img }}\"></ion-img>\n        <ion-card-header>\n          <ion-card-subtitle>Servizio eseguito da {{s.nome}} {{s.cognome}} <br> in data {{s.data}} alle ore {{s.orario}}</ion-card-subtitle>\n        </ion-card-header>\n        <ion-card-content>\n          {{s.messaggio}}\n          \n        </ion-card-content>\n      </div>\n\n        <ion-item (click)=\"accept(s)\">\n          <ion-icon name=\"checkmark\" slot=\"start\"></ion-icon>\n          <ion-label>Certifica avvenuto servizio</ion-label>\n        </ion-item>\n\n        <ion-item (click)=\"refuse(s)\">\n          <ion-icon name=\"close\" slot=\"start\"></ion-icon>\n          <ion-label>Rifiuta certificazione</ion-label>\n        </ion-item>\n    </ion-card>\n\n\n    <ion-infinite-scroll threshold=\"100px\" (ionInfinite)=\"loadmore($event)\">\n      <ion-infinite-scroll-content loadingSpinner=\"bubbles\" loadingText=\"Caricamento...\">\n      </ion-infinite-scroll-content>\n    </ion-infinite-scroll>\n  </ion-list>\n</ion-content>\n";
      /***/
    },

    /***/
    "WeUg":
    /*!*********************************************************************!*\
      !*** ./src/app/pages/certifica-servizi/certifica-servizi.page.scss ***!
      \*********************************************************************/

    /*! exports provided: default */

    /***/
    function WeUg(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "ion-img {\n  height: 25vh;\n  width: auto;\n  margin: auto;\n  display: block;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2NlcnRpZmljYS1zZXJ2aXppLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUNJLFlBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGNBQUE7QUFBSiIsImZpbGUiOiJjZXJ0aWZpY2Etc2Vydml6aS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcbmlvbi1pbWd7XG4gICAgaGVpZ2h0OiAyNXZoO1xuICAgIHdpZHRoOiBhdXRvO1xuICAgIG1hcmdpbjogYXV0bztcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBcbn0iXX0= */";
      /***/
    },

    /***/
    "nCF/":
    /*!*******************************************************************!*\
      !*** ./src/app/pages/certifica-servizi/certifica-servizi.page.ts ***!
      \*******************************************************************/

    /*! exports provided: CertificaServiziPage */

    /***/
    function nCF(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CertificaServiziPage", function () {
        return CertificaServiziPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_certifica_servizi_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./certifica-servizi.page.html */
      "QwLs");
      /* harmony import */


      var _certifica_servizi_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./certifica-servizi.page.scss */
      "WeUg");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var src_app_services_request_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/services/request.service */
      "CzMn");
      /* harmony import */


      var src_app_services_utilities_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! src/app/services/utilities.service */
      "tNc6");

      var CertificaServiziPage = /*#__PURE__*/function () {
        function CertificaServiziPage(request, utilities) {
          _classCallCheck(this, CertificaServiziPage);

          this.request = request;
          this.utilities = utilities;
          this.page = 0;
          this.psize = 3;
          this.servizi = [];
          this.getServizi();
        }

        _createClass(CertificaServiziPage, [{
          key: "getServizi",
          value: function getServizi() {
            var _this = this;

            var add = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : function () {};
            this.request.get({
              path: "/services/community",
              httpParam: {
                "_page": this.page,
                "_psize": this.psize
              },
              handler: function handler(result) {
                result["_msg"].forEach(function (element) {
                  element["img"] = 'data:image/jpeg;base64,' + element["img"];
                  element["imgPrima"] = 'data:image/jpeg;base64,' + element["imgPrima"];
                });

                var _iterator = _createForOfIteratorHelper(result["_msg"]),
                    _step;

                try {
                  for (_iterator.s(); !(_step = _iterator.n()).done;) {
                    var t = _step.value;

                    _this.servizi.push(t);
                  }
                } catch (err) {
                  _iterator.e(err);
                } finally {
                  _iterator.f();
                }

                ;
                add();
              },
              error: function error(err) {
                _this.utilities.alertError({});
              }
            });
          }
        }, {
          key: "loadmore",
          value: function loadmore(event) {
            this.page++;
            this.getServizi(event.target.complete());
          }
        }, {
          key: "accept",
          value: function accept(item) {
            var _this2 = this;

            this.utilities.confirmAlert({
              header: "Attenzione!",
              message: "Vuoi certificare questo servizio offerto alla comunità?",
              handlerYes: function handlerYes() {
                _this2.request.put({
                  path: "/services/community/" + item.id,
                  handler: function handler() {
                    _this2.utilities.simplyAlert({
                      header: "Operazione effettuata",
                      message: "Servizio certificato correttamente!",
                      operation: function operation() {
                        _this2.page = 0;

                        _this2.getServizi();
                      }
                    });
                  },
                  error: function error() {
                    _this2.utilities.alertError({});
                  }
                });
              }
            });
          }
        }, {
          key: "refuse",
          value: function refuse(item) {
            var _this3 = this;

            this.utilities.confirmAlert({
              header: "Attenzione!",
              message: "Vuoi rifiutare di certificare questo servizio offerto alla comunità?",
              handlerYes: function handlerYes() {
                _this3.request["delete"]({
                  path: "/services/community/" + item.id,
                  handler: function handler() {
                    _this3.utilities.simplyAlert({
                      header: "Attenzione",
                      message: "Il servizio è stato rifiutato",
                      operation: function operation() {
                        _this3.page = 0;

                        _this3.getServizi();
                      }
                    });
                  },
                  error: function error() {
                    _this3.utilities.alertError({});
                  }
                });
              }
            });
          }
        }]);

        return CertificaServiziPage;
      }();

      CertificaServiziPage.ctorParameters = function () {
        return [{
          type: src_app_services_request_service__WEBPACK_IMPORTED_MODULE_4__["RequestService"]
        }, {
          type: src_app_services_utilities_service__WEBPACK_IMPORTED_MODULE_5__["UtilitiesService"]
        }];
      };

      CertificaServiziPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-certifica-servizi',
        template: _raw_loader_certifica_servizi_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_certifica_servizi_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [src_app_services_request_service__WEBPACK_IMPORTED_MODULE_4__["RequestService"], src_app_services_utilities_service__WEBPACK_IMPORTED_MODULE_5__["UtilitiesService"]])], CertificaServiziPage);
      /***/
    },

    /***/
    "qOBS":
    /*!*********************************************************************!*\
      !*** ./src/app/pages/certifica-servizi/certifica-servizi.module.ts ***!
      \*********************************************************************/

    /*! exports provided: CertificaServiziPageModule */

    /***/
    function qOBS(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CertificaServiziPageModule", function () {
        return CertificaServiziPageModule;
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


      var _certifica_servizi_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./certifica-servizi-routing.module */
      "7oRG");
      /* harmony import */


      var _certifica_servizi_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./certifica-servizi.page */
      "nCF/");

      var CertificaServiziPageModule = function CertificaServiziPageModule() {
        _classCallCheck(this, CertificaServiziPageModule);
      };

      CertificaServiziPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _certifica_servizi_routing_module__WEBPACK_IMPORTED_MODULE_5__["CertificaServiziPageRoutingModule"]],
        declarations: [_certifica_servizi_page__WEBPACK_IMPORTED_MODULE_6__["CertificaServiziPage"]]
      })], CertificaServiziPageModule);
      /***/
    }
  }]);
})();
//# sourceMappingURL=pages-certifica-servizi-certifica-servizi-module-es5.js.map