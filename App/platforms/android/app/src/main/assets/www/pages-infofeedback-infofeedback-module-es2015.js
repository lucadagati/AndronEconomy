(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-infofeedback-infofeedback-module"],{

/***/ "2SYS":
/*!***********************************************************!*\
  !*** ./src/app/pages/infofeedback/infofeedback.page.scss ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJpbmZvZmVlZGJhY2sucGFnZS5zY3NzIn0= */");

/***/ }),

/***/ "GGY1":
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/infofeedback/infofeedback.page.html ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button></ion-back-button>\n    </ion-buttons>\n    <ion-title>Feedback</ion-title>\n  </ion-toolbar>\n</ion-header>\n<ion-content>\n\n  <div class=\"ion-text-center\">\n    <h3>{{this.nome}}</h3>\n  </div>\n  <ion-row style=\"color: rgb(144, 191, 223);\" *ngIf=\"Feedback?.length>0\">\n    <ion-col class=\"ion-text-center\">\n      Media:\n    </ion-col>\n    <ion-col class=\"ion-text-center\">\n      {{this.media}}\n    </ion-col>\n  </ion-row>\n  <ion-card  *ngIf=\"Feedback?.length==0\">\n    <ion-card-header>\n      <ion-card-title>\n        Attenzione!\n      </ion-card-title>\n    </ion-card-header>\n    <ion-card-content>\n      <p>\n        Questo utente non e' ancora mai stato recensito!\n      </p>\n    </ion-card-content>\n  </ion-card>\n\n  <ion-list>\n      <ion-card *ngFor=\"let f of Feedback\">\n        <ion-card-header>\n          <ion-card-subtitle>\n              <ion-row>\n                <ion-col class=\"ion-text-center\">\n                  Recensore:\n                </ion-col>\n                <ion-col class=\"ion-text-center\">\n                  {{f.recensore}}\n                </ion-col>\n              </ion-row>\n          </ion-card-subtitle>\n          <ion-card-title *ngIf=\"this.tipo=='impresa'\">\n            {{f.nome}} x {{f.quantita}}\n          </ion-card-title>\n          <ion-card-title *ngIf=\"this.tipo=='utente'\">\n            {{f.nome}}\n          </ion-card-title>\n        </ion-card-header>\n        <ion-card-content>\n          <ion-row>\n            {{f.messaggio}}\n          </ion-row>\n          <ion-row>\n            <ion-col>\n              <div class=\"ion-text-center\">\n                {{f.valutazione}} / 5\n              </div>\n            </ion-col>\n          </ion-row>\n        </ion-card-content>\n\n      </ion-card>\n      <ion-infinite-scroll threshold=\"100px\" (ionInfinite)=\"loadmore($event)\">\n        <ion-infinite-scroll-content loadingSpinner=\"bubbles\" loadingText=\"Caricamento...\">\n        </ion-infinite-scroll-content>\n      </ion-infinite-scroll>\n  </ion-list>\n\n</ion-content>\n");

/***/ }),

/***/ "QF4L":
/*!*******************************************************************!*\
  !*** ./src/app/pages/infofeedback/infofeedback-routing.module.ts ***!
  \*******************************************************************/
/*! exports provided: InfofeedbackPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InfofeedbackPageRoutingModule", function() { return InfofeedbackPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _infofeedback_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./infofeedback.page */ "Wmyd");




const routes = [
    {
        path: '',
        component: _infofeedback_page__WEBPACK_IMPORTED_MODULE_3__["InfofeedbackPage"]
    }
];
let InfofeedbackPageRoutingModule = class InfofeedbackPageRoutingModule {
};
InfofeedbackPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], InfofeedbackPageRoutingModule);



/***/ }),

/***/ "Wmyd":
/*!*********************************************************!*\
  !*** ./src/app/pages/infofeedback/infofeedback.page.ts ***!
  \*********************************************************/
/*! exports provided: InfofeedbackPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InfofeedbackPage", function() { return InfofeedbackPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_infofeedback_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./infofeedback.page.html */ "GGY1");
/* harmony import */ var _infofeedback_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./infofeedback.page.scss */ "2SYS");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var src_app_services_request_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/request.service */ "CzMn");
/* harmony import */ var src_app_services_utilities_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/utilities.service */ "tNc6");







let InfofeedbackPage = class InfofeedbackPage {
    constructor(route, request, utilities) {
        this.route = route;
        this.request = request;
        this.utilities = utilities;
        this.Feedback = [];
        this.id = this.route.snapshot.paramMap.get("id");
        this.tipo = this.route.snapshot.paramMap.get("tipo");
        this.nome = this.route.snapshot.paramMap.get("nome");
    }
    ngOnInit() { }
    ionViewWillEnter() {
        this.page = 0;
        this.psize = 5;
        this.getFeedback();
    }
    loadmore(event) {
        this.page++;
        this.getFeedback(() => {
            event.target.complete();
        });
    }
    getFeedback(add = () => { }) {
        this.request.get({
            path: "/feedback",
            httpParam: {
                _psize: this.psize,
                _page: this.page,
                tipo: this.tipo,
                id: this.id
            },
            handler: (results) => {
                this.media = results["_media"];
                for (const t of results["_msg"]) {
                    this.Feedback.push(t);
                }
                ;
                add();
            },
            error: () => {
                this.utilities.alertError({});
            }
        });
    }
};
InfofeedbackPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
    { type: src_app_services_request_service__WEBPACK_IMPORTED_MODULE_5__["RequestService"] },
    { type: src_app_services_utilities_service__WEBPACK_IMPORTED_MODULE_6__["UtilitiesService"] }
];
InfofeedbackPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-infofeedback',
        template: _raw_loader_infofeedback_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_infofeedback_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"], src_app_services_request_service__WEBPACK_IMPORTED_MODULE_5__["RequestService"], src_app_services_utilities_service__WEBPACK_IMPORTED_MODULE_6__["UtilitiesService"]])
], InfofeedbackPage);



/***/ }),

/***/ "d9ge":
/*!***********************************************************!*\
  !*** ./src/app/pages/infofeedback/infofeedback.module.ts ***!
  \***********************************************************/
/*! exports provided: InfofeedbackPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InfofeedbackPageModule", function() { return InfofeedbackPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "c7TG");
/* harmony import */ var _infofeedback_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./infofeedback-routing.module */ "QF4L");
/* harmony import */ var _infofeedback_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./infofeedback.page */ "Wmyd");







let InfofeedbackPageModule = class InfofeedbackPageModule {
};
InfofeedbackPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _infofeedback_routing_module__WEBPACK_IMPORTED_MODULE_5__["InfofeedbackPageRoutingModule"]
        ],
        declarations: [_infofeedback_page__WEBPACK_IMPORTED_MODULE_6__["InfofeedbackPage"]]
    })
], InfofeedbackPageModule);



/***/ })

}]);
//# sourceMappingURL=pages-infofeedback-infofeedback-module-es2015.js.map