(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-richieste-mie-richieste-mie-module"], {
    /***/
    "/o0I":
    /*!*************************************************************!*\
      !*** ./src/app/pages/richieste-mie/richieste-mie.module.ts ***!
      \*************************************************************/

    /*! exports provided: RichiesteMiePageModule */

    /***/
    function o0I(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "RichiesteMiePageModule", function () {
        return RichiesteMiePageModule;
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


      var _richieste_mie_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./richieste-mie-routing.module */
      "n9GY");
      /* harmony import */


      var _richieste_mie_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./richieste-mie.page */
      "YOSS");

      var RichiesteMiePageModule = function RichiesteMiePageModule() {
        _classCallCheck(this, RichiesteMiePageModule);
      };

      RichiesteMiePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _richieste_mie_routing_module__WEBPACK_IMPORTED_MODULE_5__["RichiesteMiePageRoutingModule"]],
        declarations: [_richieste_mie_page__WEBPACK_IMPORTED_MODULE_6__["RichiesteMiePage"]]
      })], RichiesteMiePageModule);
      /***/
    },

    /***/
    "JSFM":
    /*!***************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/richieste-mie/richieste-mie.page.html ***!
      \***************************************************************************************************/

    /*! exports provided: default */

    /***/
    function JSFM(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    <ion-title>\n      Le mie richieste\n    </ion-title>\n    <ion-buttons slot=\"start\">\n      <ion-menu-button autoHide=\"false\" style=\"color: white\"></ion-menu-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-list>\n    <ion-card  style=\"background-color: rgb(29, 39, 61)\" *ngIf=\"this.myRichieste?.length==0\">\n      <ion-card-header>\n        <ion-card-subtitle>\n          <div class=\"ion-text-center\">\n            Nessuna tua richiesta di servizi!\n          </div>\n        </ion-card-subtitle>\n      </ion-card-header>\n    </ion-card>\n\n    <ion-card style=\"background-color: rgb(29, 39, 61);\" *ngFor=\"let item of myRichieste\">\n      <ion-card-content>\n        <ion-card-subtitle style=\"font-size:10px\" class=\"ion-text-wrap\">\n          <ion-grid>\n            <ion-row>\n              <ion-col>\n                <div class=\"ion-text-center\">\n                  Richiesto a:\n                </div>\n              </ion-col>\n              <ion-col size=\"8\">\n                <div class=\"ion-text-center\">\n                  {{item.nome}} {{item.cognome}}\n                </div>\n              </ion-col>\n            </ion-row>\n          </ion-grid>\n    \n        </ion-card-subtitle>\n        <ion-card-title color=\"black\" lines=\"none\" style=\"font-size:20px\" class=\"ion-text-wrap\" class=\"ion-text-center\">\n          {{item.nomeServizio}}\n        </ion-card-title>\n  \n\n        <ion-grid>\n          <ion-row>\n            <ion-col>\n              <div class=\"ion-text-center\" style=\"color: tomato;\">\n                Stato\n              </div>\n            </ion-col> \n          </ion-row>\n          <ion-row *ngIf=\"item.stato=='attesa'\">\n            <ion-col>\n              <div class=\"ion-text-center\" (click)=\"popover(0)\">\n                In attesa di accettazione...\n              </div>\n            </ion-col>\n          </ion-row>\n\n          <ion-row *ngIf=\"item.stato=='rifiutato'\" (click)=\"popover(-1)\">\n            <ion-col>\n              <div class=\"ion-text-center\">\n                Rifiutato.\n              </div>\n            </ion-col>\n          </ion-row>      \n\n          <ion-row *ngIf=\"item.stato=='accettato'\">\n            <ion-col>\n              <div class=\"contenuto_home\">\n                Il servizio e' stato accettato, quando l'utente avra' eseguito il servizio richiesto potrai confermarlo.\n                Puoi disdire il servizio eliminandolo.\n              </div>\n            </ion-col>\n          </ion-row>\n\n          <ion-row *ngIf=\"(item.stato!='eseguito' && item.stato!='confermato')\">\n            <ion-col>\n              <div class=\"ion-text-center\">\n                <ion-button size=\"small\" expand=\"block\" (click)=\"elimina(item.id)\">\n                  Elimina\n                </ion-button>\n              </div>\n            </ion-col>\n          </ion-row>\n\n          <ion-row *ngIf=\"item.stato=='confermato'\">\n            <ion-col>\n              <div class=\"ion-text-center\">\n              Una volta che l'altro utente avra' confermato la recezione degli Andron non verra' piu' visualizzato.\n              </div>\n            </ion-col>\n          </ion-row>\n\n          <ion-row *ngIf=\"item.stato=='eseguito'\">\n            <ion-col>\n              <div class=\"ion-text-center\" (click)=\"popover(1)\">\n                Eseguito\n              </div>\n            </ion-col>\n          </ion-row>\n\n          <ion-row *ngIf=\"item.stato=='eseguito'\">\n\n            <ion-col>\n              <div>\n                <ion-button size=\"small\" expand=\"block\" (click)=\"segnala(item,'servizio',1)\">\n                  Segnala\n                </ion-button>\n              </div>\n            </ion-col>\n\n            <ion-col>\n              <div class=\"ion-text-center\">\n                <ion-button size=\"small\" expand=\"block\" (click)=\"conferma(item,'servizio')\">\n                  Conferma\n                </ion-button>\n              </div>\n            </ion-col>\n\n          </ion-row>\n\n\n\n        </ion-grid>    \n      </ion-card-content>\n    </ion-card>\n\n  </ion-list>\n</ion-content>";
      /***/
    },

    /***/
    "YOSS":
    /*!***********************************************************!*\
      !*** ./src/app/pages/richieste-mie/richieste-mie.page.ts ***!
      \***********************************************************/

    /*! exports provided: RichiesteMiePage */

    /***/
    function YOSS(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "RichiesteMiePage", function () {
        return RichiesteMiePage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_richieste_mie_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./richieste-mie.page.html */
      "JSFM");
      /* harmony import */


      var _richieste_mie_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./richieste-mie.page.scss */
      "lxdx");
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

      var RichiesteMiePage = /*#__PURE__*/function () {
        function RichiesteMiePage(router, request, utilities) {
          _classCallCheck(this, RichiesteMiePage);

          this.router = router;
          this.request = request;
          this.utilities = utilities;
        }

        _createClass(RichiesteMiePage, [{
          key: "ionViewWillEnter",
          value: function ionViewWillEnter() {
            this.searchmyRichieste();
          }
        }, {
          key: "searchmyRichieste",
          value: function searchmyRichieste() {
            var _this = this;

            this.request.get({
              path: "/requests/mine",
              handler: function handler(results) {
                _this.myRichieste = results["_msg"];
                console.log(_this.myRichieste);
              },
              error: function error() {
                _this.utilities.alertError({});
              }
            });
          }
        }, {
          key: "setStato",
          value: function setStato(id, stato) {
            var _this2 = this;

            if (stato == "rifiutato") {
              this.msg = "Vuoi rifiutare questo servizio?";
            }

            if (stato == "accettato") {
              this.msg = "Vuoi accettare questo servizio?";
            }

            if (stato == "eseguito") {
              this.msg = "Hai davvero eseguito questo servizio?";
            }

            this.utilities.confirmAlert({
              handlerYes: function handlerYes() {
                _this2.request.put({
                  path: "/requests/mine/" + id,
                  data: {
                    _stato: stato
                  },
                  handler: function handler(results) {
                    _this2.utilities.simplyAlert({
                      operation: function operation() {
                        _this2.searchmyRichieste();
                      },
                      header: "Operazione Effettuata",
                      message: "L'operazione e' stata eseguita con successo"
                    });
                  },
                  error: function error(_error) {
                    _this2.utilities.alertError({});
                  }
                });
              },
              header: "Attenzione",
              message: this.msg
            });
          }
        }, {
          key: "segnala",
          value: function segnala(item, tipo) {
            if (item.segnalazioneRichiedente) {
              this.utilities.simplyAlert({
                header: "Attenzione",
                message: "Hai gia' inviato una segnalazione per questo prodotto! Verrai contattato presto da qualcuno del nostro team."
              });
            } else {
              this.router.navigate(["/segnalazione", {
                "item": JSON.stringify(item),
                "tipo": tipo
              }]);
            }
          }
        }, {
          key: "elimina",
          value: function elimina(id) {
            var _this3 = this;

            this.utilities.confirmAlert({
              header: "Attenzione",
              message: "Vuoi davvero eliminare questa richiesta? Non sarà possibile annullare questa operazione.",
              handlerYes: function handlerYes() {
                _this3.request["delete"]({
                  path: "/requests/mine/" + id,
                  handler: function handler() {
                    _this3.utilities.simplyAlert({
                      operation: function operation() {
                        _this3.searchmyRichieste();
                      },
                      header: "Operazione effettuata",
                      message: "Richiesta eliminata."
                    });
                  },
                  error: function error() {
                    _this3.utilities.alertError({});
                  }
                });
              }
            });
          }
        }, {
          key: "conferma",
          value: function conferma(item, tipo) {
            this.router.navigate(["/feedback", {
              "item": JSON.stringify(item),
              "tipo": tipo
            }]);
          }
        }, {
          key: "popover",
          value: function popover(type) {
            var msg = type == -1 ? "L'utente non ha accettato la tua richiesta. Ora puoi eliminare la richiesta." : type == 0 ? "La tua richiesta dev'essere ancora valutata dall'utente" : "L'utente ha dichiarato di aver effettuato il serivizio da te richiesto.";
            this.utilities.createPopover(msg);
          }
        }]);

        return RichiesteMiePage;
      }();

      RichiesteMiePage.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
        }, {
          type: src_app_services_request_service__WEBPACK_IMPORTED_MODULE_5__["RequestService"]
        }, {
          type: src_app_services_utilities_service__WEBPACK_IMPORTED_MODULE_6__["UtilitiesService"]
        }];
      };

      RichiesteMiePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-richieste-mie',
        template: _raw_loader_richieste_mie_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_richieste_mie_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], src_app_services_request_service__WEBPACK_IMPORTED_MODULE_5__["RequestService"], src_app_services_utilities_service__WEBPACK_IMPORTED_MODULE_6__["UtilitiesService"]])], RichiesteMiePage);
      /***/
    },

    /***/
    "lxdx":
    /*!*************************************************************!*\
      !*** ./src/app/pages/richieste-mie/richieste-mie.page.scss ***!
      \*************************************************************/

    /*! exports provided: default */

    /***/
    function lxdx(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJyaWNoaWVzdGUtbWllLnBhZ2Uuc2NzcyJ9 */";
      /***/
    },

    /***/
    "n9GY":
    /*!*********************************************************************!*\
      !*** ./src/app/pages/richieste-mie/richieste-mie-routing.module.ts ***!
      \*********************************************************************/

    /*! exports provided: RichiesteMiePageRoutingModule */

    /***/
    function n9GY(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "RichiesteMiePageRoutingModule", function () {
        return RichiesteMiePageRoutingModule;
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


      var _richieste_mie_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./richieste-mie.page */
      "YOSS");

      var routes = [{
        path: '',
        component: _richieste_mie_page__WEBPACK_IMPORTED_MODULE_3__["RichiesteMiePage"]
      }];

      var RichiesteMiePageRoutingModule = function RichiesteMiePageRoutingModule() {
        _classCallCheck(this, RichiesteMiePageRoutingModule);
      };

      RichiesteMiePageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], RichiesteMiePageRoutingModule);
      /***/
    }
  }]);
})();
//# sourceMappingURL=pages-richieste-mie-richieste-mie-module-es5.js.map