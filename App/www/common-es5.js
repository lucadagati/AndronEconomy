(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

  function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["common"], {
    /***/
    "Dl6n":
    /*!*************************************************************!*\
      !*** ./node_modules/@ionic/core/dist/esm/theme-18cbe2cc.js ***!
      \*************************************************************/

    /*! exports provided: c, g, h, o */

    /***/
    function Dl6n(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "c", function () {
        return createColorClasses;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "g", function () {
        return getClassMap;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "h", function () {
        return hostContext;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "o", function () {
        return openURL;
      });

      var hostContext = function hostContext(selector, el) {
        return el.closest(selector) !== null;
      };
      /**
       * Create the mode and color classes for the component based on the classes passed in
       */


      var createColorClasses = function createColorClasses(color) {
        return typeof color === 'string' && color.length > 0 ? _defineProperty({
          'ion-color': true
        }, "ion-color-".concat(color), true) : undefined;
      };

      var getClassList = function getClassList(classes) {
        if (classes !== undefined) {
          var array = Array.isArray(classes) ? classes : classes.split(' ');
          return array.filter(function (c) {
            return c != null;
          }).map(function (c) {
            return c.trim();
          }).filter(function (c) {
            return c !== '';
          });
        }

        return [];
      };

      var getClassMap = function getClassMap(classes) {
        var map = {};
        getClassList(classes).forEach(function (c) {
          return map[c] = true;
        });
        return map;
      };

      var SCHEME = /^[a-z][a-z0-9+\-.]*:/;

      var openURL = /*#__PURE__*/function () {
        var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(url, ev, direction) {
          var router;
          return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  if (!(url != null && url[0] !== '#' && !SCHEME.test(url))) {
                    _context.next = 5;
                    break;
                  }

                  router = document.querySelector('ion-router');

                  if (!router) {
                    _context.next = 5;
                    break;
                  }

                  if (ev != null) {
                    ev.preventDefault();
                  }

                  return _context.abrupt("return", router.push(url, direction));

                case 5:
                  return _context.abrupt("return", false);

                case 6:
                case "end":
                  return _context.stop();
              }
            }
          }, _callee);
        }));

        return function openURL(_x, _x2, _x3) {
          return _ref2.apply(this, arguments);
        };
      }();
      /***/

    },

    /***/
    "ESzt":
    /*!********************************************!*\
      !*** ./src/app/services/plugin.service.ts ***!
      \********************************************/

    /*! exports provided: PluginService */

    /***/
    function ESzt(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PluginService", function () {
        return PluginService;
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


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @ionic/angular */
      "c7TG");
      /* harmony import */


      var _ionic_native_image_picker_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @ionic-native/image-picker/ngx */
      "tAfe");
      /* harmony import */


      var _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ionic-native/camera/ngx */
      "a/9d");
      /* harmony import */


      var _utilities_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./utilities.service */
      "tNc6");
      /* harmony import */


      var _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @ionic-native/geolocation/ngx */
      "Bfh1");

      var PluginService = /*#__PURE__*/function () {
        function PluginService(geolocation, platform, actionSheetController, imagePicker, camera, utilities) {
          _classCallCheck(this, PluginService);

          this.geolocation = geolocation;
          this.platform = platform;
          this.actionSheetController = actionSheetController;
          this.imagePicker = imagePicker;
          this.camera = camera;
          this.utilities = utilities;
        }

        _createClass(PluginService, [{
          key: "getPlatform",
          value: function getPlatform() {
            return this.platform.platforms();
          }
        }, {
          key: "mobile",
          value: function mobile() {
            return !(this.platform.platforms().includes("mobileweb") || this.platform.platforms().includes("desktop"));
          }
        }, {
          key: "chooseIm",
          value: function chooseIm() {
            var $event = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
            var handler = arguments.length > 1 ? arguments[1] : undefined;

            if (this.mobile()) {
              this.chooseImage(handler);
            } else {
              this.getImageBrowser($event, handler);
            }
          }
        }, {
          key: "chooseImage",
          value: function chooseImage(_handler) {
            var nimage = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
              var _this = this;

              var actionSheet;
              return regeneratorRuntime.wrap(function _callee2$(_context2) {
                while (1) {
                  switch (_context2.prev = _context2.next) {
                    case 0:
                      _context2.next = 2;
                      return this.actionSheetController.create({
                        header: "Scegli l'immagine",
                        buttons: [{
                          text: 'Carica dalla libreria',
                          icon: 'images',
                          handler: function handler() {
                            _this.pickImageFromAlbum(_handler, nimage);
                          }
                        }, {
                          text: 'Usa la fotocamera',
                          icon: 'camera',
                          handler: function handler() {
                            _this.pickImageFromCamera(_handler);
                          }
                        }, {
                          text: 'Esci',
                          icon: 'close',
                          role: 'cancel'
                        }]
                      });

                    case 2:
                      actionSheet = _context2.sent;
                      _context2.next = 5;
                      return actionSheet.present();

                    case 5:
                    case "end":
                      return _context2.stop();
                  }
                }
              }, _callee2, this);
            }));
          }
        }, {
          key: "pickImageFromAlbum",
          value: function pickImageFromAlbum(handler, nimage) {
            var _this2 = this;

            var options = {
              maximumImagesCount: nimage,
              outputType: _ionic_native_image_picker_ngx__WEBPACK_IMPORTED_MODULE_3__["OutputType"].DATA_URL
            };
            this.imagePicker.getPictures(options).then(function (selectedImg) {
              selectedImg.forEach(handler);
            })["catch"](function (error) {
              _this2.utilities.alertError({
                header: "Attenzione!",
                message: "Non è stato possibile accedere alla libreria, controlla i permessi dell'applicazione."
              });
            });
          }
        }, {
          key: "pickImageFromCamera",
          value: function pickImageFromCamera(handler) {
            var _this3 = this;

            var options = {
              destinationType: this.camera.DestinationType.DATA_URL,
              mediaType: this.camera.MediaType.PICTURE
            };
            this.camera.getPicture(options).then(handler)["catch"](function (error) {
              if (error == "No Image Selected") {
                return;
              }

              _this3.utilities.alertError({
                header: "Attenzione!",
                message: "Non è stato possibile accedere alla libreria, controlla i permessi dell'applicazione."
              });
            });
          }
        }, {
          key: "getCurrentPosition",
          value: function getCurrentPosition(handler) {
            var _this4 = this;

            this.geolocation.getCurrentPosition().then(handler, function (error) {
              _this4.utilities.alertError({
                header: "Attenzione",
                message: "Non è stato possibile recuperare la posizione."
              });
            });
          }
        }, {
          key: "getImageBrowser",
          value: function getImageBrowser($event, handler) {
            var file = $event.target.files[0];
            var reader = new FileReader();

            reader.onload = function (e) {
              var fileData = e.target.result;
              fileData = fileData.split(",")[1];
              handler(fileData);
            };

            reader.readAsDataURL(file);
          }
        }]);

        return PluginService;
      }();

      PluginService.ctorParameters = function () {
        return [{
          type: _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_6__["Geolocation"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ActionSheetController"]
        }, {
          type: _ionic_native_image_picker_ngx__WEBPACK_IMPORTED_MODULE_3__["ImagePicker"]
        }, {
          type: _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_4__["Camera"]
        }, {
          type: _utilities_service__WEBPACK_IMPORTED_MODULE_5__["UtilitiesService"]
        }];
      };

      PluginService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_6__["Geolocation"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ActionSheetController"], _ionic_native_image_picker_ngx__WEBPACK_IMPORTED_MODULE_3__["ImagePicker"], _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_4__["Camera"], _utilities_service__WEBPACK_IMPORTED_MODULE_5__["UtilitiesService"]])], PluginService);
      /***/
    },

    /***/
    "K6rM":
    /*!*************************************************************!*\
      !*** ./node_modules/@ionic/core/dist/esm/index-4d91f03a.js ***!
      \*************************************************************/

    /*! exports provided: d, g, l, s, t */

    /***/
    function K6rM(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "d", function () {
        return deepReady;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "g", function () {
        return getIonPageElement;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "l", function () {
        return lifecycle;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "s", function () {
        return setPageHidden;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "t", function () {
        return transition;
      });
      /* harmony import */


      var _core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./core-feeeff0d.js */
      "c1op");
      /* harmony import */


      var _constants_3c3e1099_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./constants-3c3e1099.js */
      "kBU6");

      var iosTransitionAnimation = function iosTransitionAnimation() {
        return __webpack_require__.e(
        /*! import() | ios-transition-504cdd09-js */
        "ios-transition-504cdd09-js").then(__webpack_require__.bind(null,
        /*! ./ios.transition-504cdd09.js */
        "5+Pq"));
      };

      var mdTransitionAnimation = function mdTransitionAnimation() {
        return __webpack_require__.e(
        /*! import() | md-transition-fea2bbfb-js */
        "md-transition-fea2bbfb-js").then(__webpack_require__.bind(null,
        /*! ./md.transition-fea2bbfb.js */
        "RRi8"));
      };

      var transition = function transition(opts) {
        return new Promise(function (resolve, reject) {
          Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_0__["w"])(function () {
            beforeTransition(opts);
            runTransition(opts).then(function (result) {
              if (result.animation) {
                result.animation.destroy();
              }

              afterTransition(opts);
              resolve(result);
            }, function (error) {
              afterTransition(opts);
              reject(error);
            });
          });
        });
      };

      var beforeTransition = function beforeTransition(opts) {
        var enteringEl = opts.enteringEl;
        var leavingEl = opts.leavingEl;
        setZIndex(enteringEl, leavingEl, opts.direction);

        if (opts.showGoBack) {
          enteringEl.classList.add('can-go-back');
        } else {
          enteringEl.classList.remove('can-go-back');
        }

        setPageHidden(enteringEl, false);

        if (leavingEl) {
          setPageHidden(leavingEl, false);
        }
      };

      var runTransition = /*#__PURE__*/function () {
        var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(opts) {
          var animationBuilder, ani;
          return regeneratorRuntime.wrap(function _callee3$(_context3) {
            while (1) {
              switch (_context3.prev = _context3.next) {
                case 0:
                  _context3.next = 2;
                  return getAnimationBuilder(opts);

                case 2:
                  animationBuilder = _context3.sent;
                  ani = animationBuilder ? animation(animationBuilder, opts) : noAnimation(opts); // fast path for no animation

                  return _context3.abrupt("return", ani);

                case 5:
                case "end":
                  return _context3.stop();
              }
            }
          }, _callee3);
        }));

        return function runTransition(_x4) {
          return _ref3.apply(this, arguments);
        };
      }();

      var afterTransition = function afterTransition(opts) {
        var enteringEl = opts.enteringEl;
        var leavingEl = opts.leavingEl;
        enteringEl.classList.remove('ion-page-invisible');

        if (leavingEl !== undefined) {
          leavingEl.classList.remove('ion-page-invisible');
        }
      };

      var getAnimationBuilder = /*#__PURE__*/function () {
        var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(opts) {
          var getAnimation;
          return regeneratorRuntime.wrap(function _callee4$(_context4) {
            while (1) {
              switch (_context4.prev = _context4.next) {
                case 0:
                  if (!(!opts.leavingEl || !opts.animated || opts.duration === 0)) {
                    _context4.next = 2;
                    break;
                  }

                  return _context4.abrupt("return", undefined);

                case 2:
                  if (!opts.animationBuilder) {
                    _context4.next = 4;
                    break;
                  }

                  return _context4.abrupt("return", opts.animationBuilder);

                case 4:
                  if (!(opts.mode === 'ios')) {
                    _context4.next = 10;
                    break;
                  }

                  _context4.next = 7;
                  return iosTransitionAnimation();

                case 7:
                  _context4.t0 = _context4.sent.iosTransitionAnimation;
                  _context4.next = 13;
                  break;

                case 10:
                  _context4.next = 12;
                  return mdTransitionAnimation();

                case 12:
                  _context4.t0 = _context4.sent.mdTransitionAnimation;

                case 13:
                  getAnimation = _context4.t0;
                  return _context4.abrupt("return", getAnimation);

                case 15:
                case "end":
                  return _context4.stop();
              }
            }
          }, _callee4);
        }));

        return function getAnimationBuilder(_x5) {
          return _ref4.apply(this, arguments);
        };
      }();

      var animation = /*#__PURE__*/function () {
        var _ref5 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5(animationBuilder, opts) {
          var trans, mod, didComplete;
          return regeneratorRuntime.wrap(function _callee5$(_context5) {
            while (1) {
              switch (_context5.prev = _context5.next) {
                case 0:
                  _context5.next = 2;
                  return waitForReady(opts, true);

                case 2:
                  _context5.prev = 2;
                  _context5.next = 5;
                  return __webpack_require__.e(
                  /*! import() | index-69c37885-js */
                  "index-69c37885-js").then(__webpack_require__.bind(null,
                  /*! ./index-69c37885.js */
                  "gHMO"));

                case 5:
                  mod = _context5.sent;
                  _context5.next = 8;
                  return mod.create(animationBuilder, opts.baseEl, opts);

                case 8:
                  trans = _context5.sent;
                  _context5.next = 14;
                  break;

                case 11:
                  _context5.prev = 11;
                  _context5.t0 = _context5["catch"](2);
                  trans = animationBuilder(opts.baseEl, opts);

                case 14:
                  fireWillEvents(opts.enteringEl, opts.leavingEl);
                  _context5.next = 17;
                  return playTransition(trans, opts);

                case 17:
                  didComplete = _context5.sent;

                  if (opts.progressCallback) {
                    opts.progressCallback(undefined);
                  }

                  if (didComplete) {
                    fireDidEvents(opts.enteringEl, opts.leavingEl);
                  }

                  return _context5.abrupt("return", {
                    hasCompleted: didComplete,
                    animation: trans
                  });

                case 21:
                case "end":
                  return _context5.stop();
              }
            }
          }, _callee5, null, [[2, 11]]);
        }));

        return function animation(_x6, _x7) {
          return _ref5.apply(this, arguments);
        };
      }();

      var noAnimation = /*#__PURE__*/function () {
        var _ref6 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee6(opts) {
          var enteringEl, leavingEl;
          return regeneratorRuntime.wrap(function _callee6$(_context6) {
            while (1) {
              switch (_context6.prev = _context6.next) {
                case 0:
                  enteringEl = opts.enteringEl;
                  leavingEl = opts.leavingEl;
                  _context6.next = 4;
                  return waitForReady(opts, false);

                case 4:
                  fireWillEvents(enteringEl, leavingEl);
                  fireDidEvents(enteringEl, leavingEl);
                  return _context6.abrupt("return", {
                    hasCompleted: true
                  });

                case 7:
                case "end":
                  return _context6.stop();
              }
            }
          }, _callee6);
        }));

        return function noAnimation(_x8) {
          return _ref6.apply(this, arguments);
        };
      }();

      var waitForReady = /*#__PURE__*/function () {
        var _ref7 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee7(opts, defaultDeep) {
          var deep, promises;
          return regeneratorRuntime.wrap(function _callee7$(_context7) {
            while (1) {
              switch (_context7.prev = _context7.next) {
                case 0:
                  deep = opts.deepWait !== undefined ? opts.deepWait : defaultDeep;
                  promises = deep ? [deepReady(opts.enteringEl), deepReady(opts.leavingEl)] : [shallowReady(opts.enteringEl), shallowReady(opts.leavingEl)];
                  _context7.next = 4;
                  return Promise.all(promises);

                case 4:
                  _context7.next = 6;
                  return notifyViewReady(opts.viewIsReady, opts.enteringEl);

                case 6:
                case "end":
                  return _context7.stop();
              }
            }
          }, _callee7);
        }));

        return function waitForReady(_x9, _x10) {
          return _ref7.apply(this, arguments);
        };
      }();

      var notifyViewReady = /*#__PURE__*/function () {
        var _ref8 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee8(viewIsReady, enteringEl) {
          return regeneratorRuntime.wrap(function _callee8$(_context8) {
            while (1) {
              switch (_context8.prev = _context8.next) {
                case 0:
                  if (!viewIsReady) {
                    _context8.next = 3;
                    break;
                  }

                  _context8.next = 3;
                  return viewIsReady(enteringEl);

                case 3:
                case "end":
                  return _context8.stop();
              }
            }
          }, _callee8);
        }));

        return function notifyViewReady(_x11, _x12) {
          return _ref8.apply(this, arguments);
        };
      }();

      var playTransition = function playTransition(trans, opts) {
        var progressCallback = opts.progressCallback; // TODO: Remove AnimationBuilder

        var promise = new Promise(function (resolve) {
          trans.onFinish(function (currentStep) {
            if (typeof currentStep === 'number') {
              resolve(currentStep === 1);
            } else if (trans.hasCompleted !== undefined) {
              resolve(trans.hasCompleted);
            }
          });
        }); // cool, let's do this, start the transition

        if (progressCallback) {
          // this is a swipe to go back, just get the transition progress ready
          // kick off the swipe animation start
          trans.progressStart(true);
          progressCallback(trans);
        } else {
          // only the top level transition should actually start "play"
          // kick it off and let it play through
          // ******** DOM WRITE ****************
          trans.play();
        } // create a callback for when the animation is done


        return promise;
      };

      var fireWillEvents = function fireWillEvents(enteringEl, leavingEl) {
        lifecycle(leavingEl, _constants_3c3e1099_js__WEBPACK_IMPORTED_MODULE_1__["b"]);
        lifecycle(enteringEl, _constants_3c3e1099_js__WEBPACK_IMPORTED_MODULE_1__["L"]);
      };

      var fireDidEvents = function fireDidEvents(enteringEl, leavingEl) {
        lifecycle(enteringEl, _constants_3c3e1099_js__WEBPACK_IMPORTED_MODULE_1__["a"]);
        lifecycle(leavingEl, _constants_3c3e1099_js__WEBPACK_IMPORTED_MODULE_1__["c"]);
      };

      var lifecycle = function lifecycle(el, eventName) {
        if (el) {
          var ev = new CustomEvent(eventName, {
            bubbles: false,
            cancelable: false
          });
          el.dispatchEvent(ev);
        }
      };

      var shallowReady = function shallowReady(el) {
        if (el && el.componentOnReady) {
          return el.componentOnReady();
        }

        return Promise.resolve();
      };

      var deepReady = /*#__PURE__*/function () {
        var _ref9 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee9(el) {
          var element, stencilEl;
          return regeneratorRuntime.wrap(function _callee9$(_context9) {
            while (1) {
              switch (_context9.prev = _context9.next) {
                case 0:
                  element = el;

                  if (!element) {
                    _context9.next = 10;
                    break;
                  }

                  if (!(element.componentOnReady != null)) {
                    _context9.next = 8;
                    break;
                  }

                  _context9.next = 5;
                  return element.componentOnReady();

                case 5:
                  stencilEl = _context9.sent;

                  if (!(stencilEl != null)) {
                    _context9.next = 8;
                    break;
                  }

                  return _context9.abrupt("return");

                case 8:
                  _context9.next = 10;
                  return Promise.all(Array.from(element.children).map(deepReady));

                case 10:
                case "end":
                  return _context9.stop();
              }
            }
          }, _callee9);
        }));

        return function deepReady(_x13) {
          return _ref9.apply(this, arguments);
        };
      }();

      var setPageHidden = function setPageHidden(el, hidden) {
        if (hidden) {
          el.setAttribute('aria-hidden', 'true');
          el.classList.add('ion-page-hidden');
        } else {
          el.hidden = false;
          el.removeAttribute('aria-hidden');
          el.classList.remove('ion-page-hidden');
        }
      };

      var setZIndex = function setZIndex(enteringEl, leavingEl, direction) {
        if (enteringEl !== undefined) {
          enteringEl.style.zIndex = direction === 'back' ? '99' : '101';
        }

        if (leavingEl !== undefined) {
          leavingEl.style.zIndex = '100';
        }
      };

      var getIonPageElement = function getIonPageElement(element) {
        if (element.classList.contains('ion-page')) {
          return element;
        }

        var ionPage = element.querySelector(':scope > .ion-page, :scope > ion-nav, :scope > ion-tabs');

        if (ionPage) {
          return ionPage;
        } // idk, return the original element so at least something animates and we don't have a null pointer


        return element;
      };
      /***/

    },

    /***/
    "YtD4":
    /*!*************************************************************!*\
      !*** ./node_modules/@ionic/core/dist/esm/index-3476b023.js ***!
      \*************************************************************/

    /*! exports provided: s */

    /***/
    function YtD4(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "s", function () {
        return sanitizeDOMString;
      });
      /**
       * Does a simple sanitization of all elements
       * in an untrusted string
       */


      var sanitizeDOMString = function sanitizeDOMString(untrustedString) {
        try {
          if (typeof untrustedString !== 'string' || untrustedString === '') {
            return untrustedString;
          }
          /**
           * Create a document fragment
           * separate from the main DOM,
           * create a div to do our work in
           */


          var documentFragment = document.createDocumentFragment();
          var workingDiv = document.createElement('div');
          documentFragment.appendChild(workingDiv);
          workingDiv.innerHTML = untrustedString;
          /**
           * Remove any elements
           * that are blocked
           */

          blockedTags.forEach(function (blockedTag) {
            var getElementsToRemove = documentFragment.querySelectorAll(blockedTag);

            for (var elementIndex = getElementsToRemove.length - 1; elementIndex >= 0; elementIndex--) {
              var element = getElementsToRemove[elementIndex];

              if (element.parentNode) {
                element.parentNode.removeChild(element);
              } else {
                documentFragment.removeChild(element);
              }
              /**
               * We still need to sanitize
               * the children of this element
               * as they are left behind
               */


              var childElements = getElementChildren(element);
              /* tslint:disable-next-line */

              for (var childIndex = 0; childIndex < childElements.length; childIndex++) {
                sanitizeElement(childElements[childIndex]);
              }
            }
          });
          /**
           * Go through remaining elements and remove
           * non-allowed attribs
           */
          // IE does not support .children on document fragments, only .childNodes

          var dfChildren = getElementChildren(documentFragment);
          /* tslint:disable-next-line */

          for (var childIndex = 0; childIndex < dfChildren.length; childIndex++) {
            sanitizeElement(dfChildren[childIndex]);
          } // Append document fragment to div


          var fragmentDiv = document.createElement('div');
          fragmentDiv.appendChild(documentFragment); // First child is always the div we did our work in

          var getInnerDiv = fragmentDiv.querySelector('div');
          return getInnerDiv !== null ? getInnerDiv.innerHTML : fragmentDiv.innerHTML;
        } catch (err) {
          console.error(err);
          return '';
        }
      };
      /**
       * Clean up current element based on allowed attributes
       * and then recursively dig down into any child elements to
       * clean those up as well
       */


      var sanitizeElement = function sanitizeElement(element) {
        // IE uses childNodes, so ignore nodes that are not elements
        if (element.nodeType && element.nodeType !== 1) {
          return;
        }

        for (var i = element.attributes.length - 1; i >= 0; i--) {
          var attribute = element.attributes.item(i);
          var attributeName = attribute.name; // remove non-allowed attribs

          if (!allowedAttributes.includes(attributeName.toLowerCase())) {
            element.removeAttribute(attributeName);
            continue;
          } // clean up any allowed attribs
          // that attempt to do any JS funny-business


          var attributeValue = attribute.value;
          /* tslint:disable-next-line */

          if (attributeValue != null && attributeValue.toLowerCase().includes('javascript:')) {
            element.removeAttribute(attributeName);
          }
        }
        /**
         * Sanitize any nested children
         */


        var childElements = getElementChildren(element);
        /* tslint:disable-next-line */

        for (var _i = 0; _i < childElements.length; _i++) {
          sanitizeElement(childElements[_i]);
        }
      };
      /**
       * IE doesn't always support .children
       * so we revert to .childNodes instead
       */


      var getElementChildren = function getElementChildren(el) {
        return el.children != null ? el.children : el.childNodes;
      };

      var allowedAttributes = ['class', 'id', 'href', 'src', 'name', 'slot'];
      var blockedTags = ['script', 'style', 'iframe', 'meta', 'link', 'object', 'embed'];
      /***/
    },

    /***/
    "m9yc":
    /*!**************************************************************************!*\
      !*** ./node_modules/@ionic/core/dist/esm/framework-delegate-c2e2e1f4.js ***!
      \**************************************************************************/

    /*! exports provided: a, d */

    /***/
    function m9yc(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "a", function () {
        return attachComponent;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "d", function () {
        return detachComponent;
      });

      var attachComponent = /*#__PURE__*/function () {
        var _ref10 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee10(delegate, container, component, cssClasses, componentProps) {
          var el;
          return regeneratorRuntime.wrap(function _callee10$(_context10) {
            while (1) {
              switch (_context10.prev = _context10.next) {
                case 0:
                  if (!delegate) {
                    _context10.next = 2;
                    break;
                  }

                  return _context10.abrupt("return", delegate.attachViewToDom(container, component, componentProps, cssClasses));

                case 2:
                  if (!(typeof component !== 'string' && !(component instanceof HTMLElement))) {
                    _context10.next = 4;
                    break;
                  }

                  throw new Error('framework delegate is missing');

                case 4:
                  el = typeof component === 'string' ? container.ownerDocument && container.ownerDocument.createElement(component) : component;

                  if (cssClasses) {
                    cssClasses.forEach(function (c) {
                      return el.classList.add(c);
                    });
                  }

                  if (componentProps) {
                    Object.assign(el, componentProps);
                  }

                  container.appendChild(el);

                  if (!el.componentOnReady) {
                    _context10.next = 11;
                    break;
                  }

                  _context10.next = 11;
                  return el.componentOnReady();

                case 11:
                  return _context10.abrupt("return", el);

                case 12:
                case "end":
                  return _context10.stop();
              }
            }
          }, _callee10);
        }));

        return function attachComponent(_x14, _x15, _x16, _x17, _x18) {
          return _ref10.apply(this, arguments);
        };
      }();

      var detachComponent = function detachComponent(delegate, element) {
        if (element) {
          if (delegate) {
            var container = element.parentElement;
            return delegate.removeViewFromDom(container, element);
          }

          element.remove();
        }

        return Promise.resolve();
      };
      /***/

    },

    /***/
    "nN+u":
    /*!*********************************************************************!*\
      !*** ./node_modules/@ionic/core/dist/esm/watch-options-2af96011.js ***!
      \*********************************************************************/

    /*! exports provided: f, w */

    /***/
    function nNU(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "f", function () {
        return findCheckedOption;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "w", function () {
        return watchForOptions;
      });

      var watchForOptions = function watchForOptions(containerEl, tagName, onChange) {
        var mutation = new MutationObserver(function (mutationList) {
          onChange(getSelectedOption(mutationList, tagName));
        });
        mutation.observe(containerEl, {
          childList: true,
          subtree: true
        });
        return mutation;
      };

      var getSelectedOption = function getSelectedOption(mutationList, tagName) {
        var newOption;
        mutationList.forEach(function (mut) {
          // tslint:disable-next-line: prefer-for-of
          for (var i = 0; i < mut.addedNodes.length; i++) {
            newOption = findCheckedOption(mut.addedNodes[i], tagName) || newOption;
          }
        });
        return newOption;
      };

      var findCheckedOption = function findCheckedOption(el, tagName) {
        if (el.nodeType !== 1) {
          return undefined;
        }

        var options = el.tagName === tagName.toUpperCase() ? [el] : Array.from(el.querySelectorAll(tagName));
        return options.find(function (o) {
          return o.checked === true;
        });
      };
      /***/

    },

    /***/
    "opz7":
    /*!**************************************************************!*\
      !*** ./node_modules/@ionic/core/dist/esm/haptic-c8f1473e.js ***!
      \**************************************************************/

    /*! exports provided: a, b, c, h */

    /***/
    function opz7(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "a", function () {
        return hapticSelectionStart;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "b", function () {
        return hapticSelectionChanged;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "c", function () {
        return hapticSelectionEnd;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "h", function () {
        return hapticSelection;
      });
      /**
       * Check to see if the Haptic Plugin is available
       * @return Returns `true` or false if the plugin is available
       */

      /**
       * Trigger a selection changed haptic event. Good for one-time events
       * (not for gestures)
       */


      var hapticSelection = function hapticSelection() {
        var engine = window.TapticEngine;

        if (engine) {
          engine.selection();
        }
      };
      /**
       * Tell the haptic engine that a gesture for a selection change is starting.
       */


      var hapticSelectionStart = function hapticSelectionStart() {
        var engine = window.TapticEngine;

        if (engine) {
          engine.gestureSelectionStart();
        }
      };
      /**
       * Tell the haptic engine that a selection changed during a gesture.
       */


      var hapticSelectionChanged = function hapticSelectionChanged() {
        var engine = window.TapticEngine;

        if (engine) {
          engine.gestureSelectionChanged();
        }
      };
      /**
       * Tell the haptic engine we are done with a gesture. This needs to be
       * called lest resources are not properly recycled.
       */


      var hapticSelectionEnd = function hapticSelectionEnd() {
        var engine = window.TapticEngine;

        if (engine) {
          engine.gestureSelectionEnd();
        }
      };
      /***/

    },

    /***/
    "qaSm":
    /*!********************************************************************!*\
      !*** ./node_modules/@ionic/core/dist/esm/cubic-bezier-2812fda3.js ***!
      \********************************************************************/

    /*! exports provided: P, g */

    /***/
    function qaSm(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "P", function () {
        return Point;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "g", function () {
        return getTimeGivenProgression;
      });
      /**
       * Based on:
       * https://stackoverflow.com/questions/7348009/y-coordinate-for-a-given-x-cubic-bezier
       * https://math.stackexchange.com/questions/26846/is-there-an-explicit-form-for-cubic-b%C3%A9zier-curves
       * TODO: Reduce rounding error
       */


      var Point = function Point(x, y) {
        _classCallCheck(this, Point);

        this.x = x;
        this.y = y;
      };
      /**
       * Given a cubic-bezier curve, get the x value (time) given
       * the y value (progression).
       * Ex: cubic-bezier(0.32, 0.72, 0, 1);
       * P0: (0, 0)
       * P1: (0.32, 0.72)
       * P2: (0, 1)
       * P3: (1, 1)
       *
       * If you give a cubic bezier curve that never reaches the
       * provided progression, this function will return NaN.
       */


      var getTimeGivenProgression = function getTimeGivenProgression(p0, p1, p2, p3, progression) {
        var tValues = solveCubicBezier(p0.y, p1.y, p2.y, p3.y, progression);
        return solveCubicParametricEquation(p0.x, p1.x, p2.x, p3.x, tValues[0]); // TODO: Add better strategy for dealing with multiple solutions
      };
      /**
       * Solve a cubic equation in one dimension (time)
       */


      var solveCubicParametricEquation = function solveCubicParametricEquation(p0, p1, p2, p3, t) {
        var partA = 3 * p1 * Math.pow(t - 1, 2);
        var partB = -3 * p2 * t + 3 * p2 + p3 * t;
        var partC = p0 * Math.pow(t - 1, 3);
        return t * (partA + t * partB) - partC;
      };
      /**
       * Find the `t` value for a cubic bezier using Cardano's formula
       */


      var solveCubicBezier = function solveCubicBezier(p0, p1, p2, p3, refPoint) {
        p0 -= refPoint;
        p1 -= refPoint;
        p2 -= refPoint;
        p3 -= refPoint;
        var roots = solveCubicEquation(p3 - 3 * p2 + 3 * p1 - p0, 3 * p2 - 6 * p1 + 3 * p0, 3 * p1 - 3 * p0, p0);
        return roots.filter(function (root) {
          return root >= 0 && root <= 1;
        });
      };

      var solveQuadraticEquation = function solveQuadraticEquation(a, b, c) {
        var discriminant = b * b - 4 * a * c;

        if (discriminant < 0) {
          return [];
        } else {
          return [(-b + Math.sqrt(discriminant)) / (2 * a), (-b - Math.sqrt(discriminant)) / (2 * a)];
        }
      };

      var solveCubicEquation = function solveCubicEquation(a, b, c, d) {
        if (a === 0) {
          return solveQuadraticEquation(b, c, d);
        }

        b /= a;
        c /= a;
        d /= a;
        var p = (3 * c - b * b) / 3;
        var q = (2 * b * b * b - 9 * b * c + 27 * d) / 27;

        if (p === 0) {
          return [Math.pow(-q, 1 / 3)];
        } else if (q === 0) {
          return [Math.sqrt(-p), -Math.sqrt(-p)];
        }

        var discriminant = Math.pow(q / 2, 2) + Math.pow(p / 3, 3);

        if (discriminant === 0) {
          return [Math.pow(q / 2, 1 / 2) - b / 3];
        } else if (discriminant > 0) {
          return [Math.pow(-(q / 2) + Math.sqrt(discriminant), 1 / 3) - Math.pow(q / 2 + Math.sqrt(discriminant), 1 / 3) - b / 3];
        }

        var r = Math.sqrt(Math.pow(-(p / 3), 3));
        var phi = Math.acos(-(q / (2 * Math.sqrt(Math.pow(-(p / 3), 3)))));
        var s = 2 * Math.pow(r, 1 / 3);
        return [s * Math.cos(phi / 3) - b / 3, s * Math.cos((phi + 2 * Math.PI) / 3) - b / 3, s * Math.cos((phi + 4 * Math.PI) / 3) - b / 3];
      };
      /***/

    }
  }]);
})();
//# sourceMappingURL=common-es5.js.map