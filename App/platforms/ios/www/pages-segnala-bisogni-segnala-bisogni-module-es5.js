(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-segnala-bisogni-segnala-bisogni-module"], {
    /***/
    "9AOk":
    /*!*****************************************************************!*\
      !*** ./src/app/pages/segnala-bisogni/segnala-bisogni.module.ts ***!
      \*****************************************************************/

    /*! exports provided: SegnalaBisogniPageModule */

    /***/
    function AOk(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SegnalaBisogniPageModule", function () {
        return SegnalaBisogniPageModule;
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


      var _segnala_bisogni_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./segnala-bisogni-routing.module */
      "cWiP");
      /* harmony import */


      var _segnala_bisogni_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./segnala-bisogni.page */
      "s8kU");

      var SegnalaBisogniPageModule = function SegnalaBisogniPageModule() {
        _classCallCheck(this, SegnalaBisogniPageModule);
      };

      SegnalaBisogniPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _segnala_bisogni_routing_module__WEBPACK_IMPORTED_MODULE_5__["SegnalaBisogniPageRoutingModule"]],
        declarations: [_segnala_bisogni_page__WEBPACK_IMPORTED_MODULE_6__["SegnalaBisogniPage"]]
      })], SegnalaBisogniPageModule);
      /***/
    },

    /***/
    "IkOo":
    /*!*****************************************************************!*\
      !*** ./src/app/pages/segnala-bisogni/segnala-bisogni.page.scss ***!
      \*****************************************************************/

    /*! exports provided: default */

    /***/
    function IkOo(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".error-message {\n  text-align: center;\n  color: var(--ion-color-danger);\n  padding-left: 20px;\n}\n\nion-img {\n  height: 30vh;\n  width: auto;\n  margin: auto;\n  display: block;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NlZ25hbGEtYmlzb2duaS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxrQkFBQTtFQUNBLDhCQUFBO0VBQ0Esa0JBQUE7QUFDSjs7QUFFQTtFQUNJLFlBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGNBQUE7QUFDSiIsImZpbGUiOiJzZWduYWxhLWJpc29nbmkucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmVycm9yLW1lc3NhZ2V7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItZGFuZ2VyKTtcbiAgICBwYWRkaW5nLWxlZnQ6IDIwcHg7XG59XG5cbmlvbi1pbWd7XG4gICAgaGVpZ2h0OiAzMHZoO1xuICAgIHdpZHRoOiBhdXRvO1xuICAgIG1hcmdpbjogYXV0bztcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBcbn1cbiJdfQ== */";
      /***/
    },

    /***/
    "cWiP":
    /*!*************************************************************************!*\
      !*** ./src/app/pages/segnala-bisogni/segnala-bisogni-routing.module.ts ***!
      \*************************************************************************/

    /*! exports provided: SegnalaBisogniPageRoutingModule */

    /***/
    function cWiP(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SegnalaBisogniPageRoutingModule", function () {
        return SegnalaBisogniPageRoutingModule;
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


      var _segnala_bisogni_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./segnala-bisogni.page */
      "s8kU");

      var routes = [{
        path: '',
        component: _segnala_bisogni_page__WEBPACK_IMPORTED_MODULE_3__["SegnalaBisogniPage"]
      }];

      var SegnalaBisogniPageRoutingModule = function SegnalaBisogniPageRoutingModule() {
        _classCallCheck(this, SegnalaBisogniPageRoutingModule);
      };

      SegnalaBisogniPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], SegnalaBisogniPageRoutingModule);
      /***/
    },

    /***/
    "dTLq":
    /*!*******************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/segnala-bisogni/segnala-bisogni.page.html ***!
      \*******************************************************************************************************/

    /*! exports provided: default */

    /***/
    function dTLq(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-menu-button autoHide=\"false\"></ion-menu-button>\n    </ion-buttons>\n    <ion-title>\n        <ion-text>Segnala Bisogni</ion-text>\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-card style=\"background-color:rgb(29, 39, 61)\">\n    <ion-card-header>\n      <ion-card-subtitle>\n        <div class=\"ion-text-center\">\n          Benvenuto!\n        </div>\n      </ion-card-subtitle>\n      <ion-card-content>\n        In questa pagina potrai segnalare eventuali bisogni, una volta accettati verranno resi disponibili a tutti e chi vorrà potrà occuparsene!\n      </ion-card-content>\n    </ion-card-header>\n  </ion-card>\n  <form [formGroup]=\"segnalaBisogniForm\" (ngSubmit)=\"submit()\">\n    <ion-list>\n    \n      <ion-img src=\"{{ imgSrc }}\"></ion-img>\n      <ion-button *ngIf=\"this.plugin.mobile()\"  id=\"myButtonYellow\" expand=\"full\" (click)=\"chooseImage()\">Inserisci foto</ion-button>\n      <ion-button *ngIf=\"!this.plugin.mobile()\" id=\"myButtonYellow\" expand=\"full\" (click)=\"f.click()\">Inserisci foto</ion-button>\n      <input  class=\"ion-hide\" #f type=\"file\" (change)=\"chooseImage($event)\" id=\"file-input\" accept=\"image/png, image/jpeg\">\n      <ion-item> <!--!Nome-->\n        <ion-label position=\"floating\">Nome</ion-label>\n        <ion-input formControlName=\"nome\" autocapitalize inputmode=\"text\"></ion-input>\n      </ion-item>\n      <div *ngFor=\"let error of errorMessages.nome\">\n        <ng-container *ngIf=\"nome.hasError(error.type) && (nome.dirty || nome.touched)\">\n          <small class=\"error-message\">{{error.message}}</small>\n        </ng-container>\n      </div>\n\n      <ion-item> <!--!Descrizione-->\n        <ion-label position=\"floating\">Descrizione</ion-label>\n        <ion-input formControlName=\"descrizione\" autocapitalize inputmode=\"text\"></ion-input>\n      </ion-item>\n      <div *ngFor=\"let error of errorMessages.descrizione\">\n        <ng-container *ngIf=\"descrizione.hasError(error.type) && (descrizione.dirty || descrizione.touched)\">\n          <small class=\"error-message\">{{error.message}}</small>\n        </ng-container>\n      </div>\n\n      <ion-card *ngIf=\"mobile\" style=\"background-color:rgb(29, 39, 61)\">\n          <ion-card-content>\n            Se ti trovi sul luogo clicca sul pulsante sottostante per recuperare la posizione!\n          </ion-card-content>\n          <ion-item>\n            <ion-label>Recupera posizione</ion-label>\n            <ion-toggle (ionChange)=\"getPosition()\"></ion-toggle>\n          </ion-item>\n      </ion-card>\n\n\n\n      <ion-item> <!--!Citta-->\n        <ion-label position=\"floating\">Città</ion-label>\n        <ion-input formControlName=\"citta\" autocapitalize inputmode=\"text\"></ion-input>\n      </ion-item>\n      <div *ngFor=\"let error of errorMessages.citta\">\n        <ng-container *ngIf=\"citta.hasError(error.type) && (citta.dirty || citta.touched)\">\n          <small class=\"error-message\">{{error.message}}</small>\n        </ng-container>\n      </div>\n\n\n      <ion-item> <!--!Via-->\n        <ion-label position=\"floating\">Via</ion-label>\n        <ion-input formControlName=\"via\" autocapitalize inputmode=\"text\"></ion-input>\n      </ion-item>\n      <div *ngFor=\"let error of errorMessages.via\">\n        <ng-container *ngIf=\"via.hasError(error.type) && (via.dirty || via.touched)\">\n          <small class=\"error-message\">{{error.message}}</small>\n        </ng-container>\n      </div>\n\n\n      <ion-button [disabled]=\"!segnalaBisogniForm.valid\" type=\"submit\" expand=\"block\">\n        Segnala Bisogni\n      </ion-button>\n      <p class=\"error-message\">{{this.errore}}</p>\n    </ion-list>\n  </form>\n</ion-content>\n";
      /***/
    },

    /***/
    "s8kU":
    /*!***************************************************************!*\
      !*** ./src/app/pages/segnala-bisogni/segnala-bisogni.page.ts ***!
      \***************************************************************/

    /*! exports provided: SegnalaBisogniPage */

    /***/
    function s8kU(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SegnalaBisogniPage", function () {
        return SegnalaBisogniPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_segnala_bisogni_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./segnala-bisogni.page.html */
      "dTLq");
      /* harmony import */


      var _segnala_bisogni_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./segnala-bisogni.page.scss */
      "IkOo");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @ionic/angular */
      "c7TG");
      /* harmony import */


      var src_app_services_plugin_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! src/app/services/plugin.service */
      "ESzt");
      /* harmony import */


      var src_app_services_request_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! src/app/services/request.service */
      "CzMn");
      /* harmony import */


      var src_app_services_utilities_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! src/app/services/utilities.service */
      "tNc6");

      var SegnalaBisogniPage = /*#__PURE__*/function () {
        function SegnalaBisogniPage(formBuilder, navCtrl, plugin, request, utilities) {
          _classCallCheck(this, SegnalaBisogniPage);

          this.formBuilder = formBuilder;
          this.navCtrl = navCtrl;
          this.plugin = plugin;
          this.request = request;
          this.utilities = utilities;
          this.errore = ""; //#endregion

          this.varLength = {
            nome: {
              min: 5,
              max: 50
            },
            descrizione: {
              min: 5,
              max: 500
            },
            citta: {
              min: 5,
              max: 50
            },
            via: {
              min: 5,
              max: 100
            }
          };
          this.defaultMessages = {
            required: "Questo campo è obbligatorio",
            spaces: "Non sono ammessi spazi",
            maxlength: function maxlength(max) {
              return "Massimo ".concat(max, " caratteri");
            },
            minlength: function minlength(min) {
              return "Minimo ".concat(min, " caratteri");
            }
          };
          this.errorMessages = {
            nome: [{
              type: "required",
              message: this.defaultMessages.required
            }, {
              type: "maxlength",
              message: this.defaultMessages.maxlength(this.varLength.nome.max)
            }, {
              type: "minlength",
              message: this.defaultMessages.minlength(this.varLength.nome.min)
            }],
            descrizione: [{
              type: "required",
              message: this.defaultMessages.required
            }, {
              type: "maxlength",
              message: this.defaultMessages.maxlength(this.varLength.descrizione.max)
            }, {
              type: "minlength",
              message: this.defaultMessages.minlength(this.varLength.descrizione.min)
            }],
            citta: [{
              type: "required",
              message: this.defaultMessages.required
            }, {
              type: "maxlength",
              message: this.defaultMessages.maxlength(this.varLength.citta.max)
            }, {
              type: "minlength",
              message: this.defaultMessages.minlength(this.varLength.citta.min)
            }],
            via: [{
              type: "required",
              message: this.defaultMessages.required
            }, {
              type: "maxlength",
              message: this.defaultMessages.maxlength(this.varLength.via.max)
            }, {
              type: "minlength",
              message: this.defaultMessages.minlength(this.varLength.via.min)
            }]
          };
          this.segnalaBisogniForm = this.formBuilder.group({
            nome: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].maxLength(this.varLength.nome.max), _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].minLength(this.varLength.nome.min)]],
            descrizione: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].maxLength(this.varLength.descrizione.max), _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].minLength(this.varLength.descrizione.min)]],
            citta: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].maxLength(this.varLength.citta.max), _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].minLength(this.varLength.citta.min)]],
            via: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].maxLength(this.varLength.via.max), _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].minLength(this.varLength.via.min)]]
          });
          this.imgSrc = this.utilities.img;
        } //#region Getter


        _createClass(SegnalaBisogniPage, [{
          key: "nome",
          get: function get() {
            return this.segnalaBisogniForm.get("nome");
          }
        }, {
          key: "descrizione",
          get: function get() {
            return this.segnalaBisogniForm.get("descrizione");
          }
        }, {
          key: "citta",
          get: function get() {
            return this.segnalaBisogniForm.get("citta");
          }
        }, {
          key: "via",
          get: function get() {
            return this.segnalaBisogniForm.get("via");
          }
        }, {
          key: "submit",
          value: function submit() {
            var _this = this;

            var _a;

            if (this.imgSend == null) {
              this.errore = "Inserisci un allegato";
              return;
            } //! Test su allegati e posizione.


            this.position = (_a = this.position) !== null && _a !== void 0 ? _a : false;
            var data = {
              "nome": this.segnalaBisogniForm.value.nome,
              "descrizione": this.segnalaBisogniForm.value.descrizione,
              "citta": this.segnalaBisogniForm.value.citta,
              "indirizzo": this.segnalaBisogniForm.value.via,
              "allegati": this.imgSend,
              "posizione": this.position
            };
            this.request.post({
              path: "/needs",
              data: data,
              handler: function handler(result) {
                _this.utilities.simplyAlert({
                  operation: function operation() {
                    _this.navCtrl.navigateForward("/home");
                  },
                  header: "Operazione effettuata",
                  message: "Grazie per aver contribuito con la tua segnalazione!"
                });
              },
              error: function error(err) {
                _this.utilities.alertError({});
              }
            });
          }
        }, {
          key: "getPosition",
          value: function getPosition() {
            var _this2 = this;

            if (this.position == undefined) {
              this.plugin.getCurrentPosition(function (position) {
                _this2.position = {
                  "latitude": position.coords.latitude,
                  "longitude": position.coords.longitude
                };
              });
            } else {
              this.position = undefined;
            }
          }
        }, {
          key: "chooseImage",
          value: function chooseImage() {
            var _this3 = this;

            var $event = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
            this.plugin.chooseIm($event, function (img) {
              _this3.imgSrc = 'data:image/jpeg;base64,' + img;
              _this3.imgSend = img;
            });
          }
        }]);

        return SegnalaBisogniPage;
      }();

      SegnalaBisogniPage.ctorParameters = function () {
        return [{
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["NavController"]
        }, {
          type: src_app_services_plugin_service__WEBPACK_IMPORTED_MODULE_6__["PluginService"]
        }, {
          type: src_app_services_request_service__WEBPACK_IMPORTED_MODULE_7__["RequestService"]
        }, {
          type: src_app_services_utilities_service__WEBPACK_IMPORTED_MODULE_8__["UtilitiesService"]
        }];
      };

      SegnalaBisogniPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-segnala-bisogni',
        template: _raw_loader_segnala_bisogni_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_segnala_bisogni_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["NavController"], src_app_services_plugin_service__WEBPACK_IMPORTED_MODULE_6__["PluginService"], src_app_services_request_service__WEBPACK_IMPORTED_MODULE_7__["RequestService"], src_app_services_utilities_service__WEBPACK_IMPORTED_MODULE_8__["UtilitiesService"]])], SegnalaBisogniPage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=pages-segnala-bisogni-segnala-bisogni-module-es5.js.map