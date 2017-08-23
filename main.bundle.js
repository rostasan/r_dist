webpackJsonp(["main"],{

/***/ "../../../../../src lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	return new Promise(function(resolve, reject) { reject(new Error("Cannot find module '" + req + "'.")); });
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src lazy recursive";

/***/ }),

/***/ "../../../../../src/app/about/about-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__about_component__ = __webpack_require__("../../../../../src/app/about/about.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var AboutRoutingModule = (function () {
    function AboutRoutingModule() {
    }
    return AboutRoutingModule;
}());
AboutRoutingModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* NgModule */])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */].forChild([
                { path: 'about', component: __WEBPACK_IMPORTED_MODULE_2__about_component__["a" /* AboutComponent */] }
            ])
        ],
        exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */]]
    })
], AboutRoutingModule);

//# sourceMappingURL=about-routing.module.js.map

/***/ }),

/***/ "../../../../../src/app/about/about.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ":host {\n  display: block;\n  padding: 0 16px;\n}\n\nh2 {\n  font-size: 20px;\n  font-weight: 500;\n  letter-spacing: 0.005em;\n  margin-bottom: 0;\n  margin-top: 0.83em;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/about/about.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"content-panel\">\n\n\n      <p>To DO list</p>\n\n      <h2>Things left to do</h2>\n      <ul>\n        <li>\n          Remove materials from project DONE\n        </li>\n        <li>\n          Re-write content\n        </li>\n        <li>\n      fix CSS simplyfy\n        </li>\n        <li>\n      Add CSS animations\n        </li>\n        </ul>\n</div>\n<div class=\"content-panel\">\n          <h1> \n          Tasks to complete\n          </h1>\n\n          <ul *ngFor=\"let task of tasks\">\n            <li>{{task.title}} <button>{{task.status}}</button></li>\n          </ul>\n</div>"

/***/ }),

/***/ "../../../../../src/app/about/about.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__shared_firebase_firebase_service__ = __webpack_require__("../../../../../src/app/shared/firebase/firebase.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * This class represents the lazy loaded AboutComponent.
 */
var AboutComponent = (function () {
    function AboutComponent(_firebaseService) {
        this._firebaseService = _firebaseService;
    }
    AboutComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._firebaseService.getTasks().subscribe(function (tasks) {
            _this.tasks = tasks;
        });
    };
    return AboutComponent;
}());
AboutComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["o" /* Component */])({
        selector: 'sd-about',
        template: __webpack_require__("../../../../../src/app/about/about.component.html"),
        styles: [__webpack_require__("../../../../../src/app/about/about.component.css")],
        providers: [__WEBPACK_IMPORTED_MODULE_0__shared_firebase_firebase_service__["a" /* FirebaseService */]]
    }),
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["C" /* Injectable */])() // <<<=== required if the constructor has parameters
    ,
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__shared_firebase_firebase_service__["a" /* FirebaseService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__shared_firebase_firebase_service__["a" /* FirebaseService */]) === "function" && _a || Object])
], AboutComponent);

var _a;
//# sourceMappingURL=about.component.js.map

/***/ }),

/***/ "../../../../../src/app/about/about.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__about_component__ = __webpack_require__("../../../../../src/app/about/about.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__about_routing_module__ = __webpack_require__("../../../../../src/app/about/about-routing.module.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var AboutModule = (function () {
    function AboutModule() {
    }
    return AboutModule;
}());
AboutModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* NgModule */])({
        imports: [__WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */], __WEBPACK_IMPORTED_MODULE_3__about_routing_module__["a" /* AboutRoutingModule */]],
        declarations: [__WEBPACK_IMPORTED_MODULE_2__about_component__["a" /* AboutComponent */]],
        exports: [__WEBPACK_IMPORTED_MODULE_2__about_component__["a" /* AboutComponent */]]
    })
], AboutModule);

//# sourceMappingURL=about.module.js.map

/***/ }),

/***/ "../../../../../src/app/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    return AppRoutingModule;
}());
AppRoutingModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* NgModule */])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */].forRoot([])
        ],
        exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */]]
    })
], AppRoutingModule);

//# sourceMappingURL=app-routing.module.js.map

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\r\n\r\n/* Reset */\r\nhtml, body, div {\r\n  border: 0;\r\n  margin: 0;\r\n  padding: 0;\r\n}\r\n\r\n\r\n.component {\r\n  background-color: rgba(0, 0, 0, .0)\r\n}\r\n\r\n/* Start Story x-large Break Point */\r\n\r\n@media (min-width: 1200px){\r\n  .title-story {\r\n    display: inline-block;\r\n  }\r\n\r\n\r\n  .content-panel {\r\n    box-shadow: 10px 10px 5px rgba(0, 0, 0, .5);\r\n    background: #fff;\r\n    border-radius: 25px;\r\n    max-width: 80%;\r\n    margin: 10%;\r\n  }\r\n\r\n\r\n  .story  {\r\n      font-family: \"Courier New\", Courier, \"Lucida Sans Typewriter\", \"Lucida Typewriter\", monospace;\r\n      padding: 20px;\r\n      font-variant: normal;\r\n      font-style: normal;\r\n      font-weight: 400;\r\n      font-size: 20px;\r\n      line-height:  1.2em;\r\n  }\r\n  .panel-margin {\r\n    margin-top: 20px;\r\n    margin-bottom: 20px;\r\n  }\r\n\r\n   .modal-dialog {\r\n     width: 90%;\r\n     height: inherit;\r\n     display: block;\r\n     padding-top: 0px;\r\n     margin-left: auto;\r\n     margin-right: auto;\r\n     border-radius: 30px;\r\n     box-shadow: 0px 0px 5px 10px rgba(255, 255, 255, 0.7);\r\n   }\r\n   .modal-content {\r\n        border-radius: 30px;\r\n   }\r\n  .img-lightBox-1 {\r\n        border-radius: 30px;\r\n        display: inline-block;\r\n        z-index: 0;\r\n        left: 0;\r\n        top: 0;\r\n        width: 100%;\r\n        height: 100%;\r\n  }\r\n\r\n}\r\n\r\n\r\n\r\n\r\n/*  Start Story large Break Point */\r\n\r\n@media (min-width: 992px) and (max-width: 1199px){\r\n  .title-story {\r\n    display: inline-block;\r\n  }\r\n  .content-panel, ul, lin {\r\n\r\n    background: #fff;\r\n    border-radius: 20px;\r\n  }\r\n  .story {\r\n      font-family: \"Courier New\", Courier, \"Lucida Sans Typewriter\", \"Lucida Typewriter\", monospace;\r\n      padding: 20px;\r\n      font-variant: normal;\r\n      font-style: normal;\r\n      font-weight: 400;\r\n      font-size:16px;\r\n      line-height:  1.2em;\r\n  }\r\n  .panel-margin {\r\n    margin-top: 20px;\r\n    margin-bottom: 20px;\r\n  }\r\n\r\n}\r\n\r\n /* Start Story medium */\r\n@media (min-width: 768px) and (max-width: 991px){\r\n  .panel-margin {\r\n    margin-top: 20px;\r\n    margin-bottom: 2em;\r\n  }\r\n  .content-panel {\r\n    margin-bottom: 10px;\r\n    background: #fff;\r\n    border-radius: 15px;\r\n  }\r\n  .story {\r\n      font-family: \"Courier New\", Courier, \"Lucida Sans Typewriter\", \"Lucida Typewriter\", monospace;\r\n      padding: 20px;\r\n      font-variant: normal;\r\n      font-style: normal;\r\n      font-weight: 400;\r\n      font-size: 14px;\r\n      line-height:  1.2em;\r\n  }\r\n}\r\n /* End story Medium */\r\n\r\n\r\n /* Start Story Small */\r\n@media (min-width: 768px) and (max-width: 991px){\r\n  .content-panel {\r\n    background: #fff;\r\n    border-radius: 10px;\r\n    margin-bottom: 2em;\r\n  }\r\n  .story {\r\n      font-family: \"Courier New\", Courier, \"Lucida Sans Typewriter\", \"Lucida Typewriter\", monospace;\r\n      padding: 20px;\r\n      font-variant: normal;\r\n      font-style: normal;\r\n      font-weight: 400;\r\n      font-size: 12px;\r\n      line-height:  1.2em;\r\n  }\r\n}\r\n /* End Story small */\r\n\r\n /* Start Story Small */\r\n@media (max-width: 767px){\r\n  .content-panel {\r\n    background: #fff;\r\n    border-radius: 10px;\r\n    margin-bottom: 2em;\r\n  }\r\n  .story {\r\n      font-family: \"Courier New\", Courier, \"Lucida Sans Typewriter\", \"Lucida Typewriter\", monospace;\r\n      padding: 20px;\r\n      font-variant: normal;\r\n      font-style: normal;\r\n      font-weight: 400;\r\n      font-size: 12px;\r\n      line-height:  1.2em;\r\n  }\r\n}\r\n\r\n /* End Story small */\r\n\r\nhtml, body {\r\n  height: 100%;\r\n  width: 100%;\r\n}\r\n\r\nbody {\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  -webkit-box-orient: vertical;\r\n  -webkit-box-direction: normal;\r\n      -ms-flex-direction: column;\r\n          flex-direction: column;\r\n}\r\n\r\n/* Box-sizing border-box */\r\n*, *:before, *:after {\r\n  box-sizing: border-box;\r\n}\r\n\r\n/* Set up a default font and some padding to provide breathing room */\r\nbody {\r\n\r\n\r\n  -webkit-font-smoothing: antialiased;\r\n  -moz-osx-font-smoothing: grayscale;\r\n}\r\nbody {\r\n  background-image: url(" + __webpack_require__("../../../../../src/assets/images/background/BWEtaCarNeb.png") + ");\r\n  background-attachment: fixed;\r\n  background-position: center;\r\n  background-repeat: no-repeat;\r\n  background-size: cover;\r\n\r\n}\r\n\r\n\r\n\r\n/*p {\r\n  font-weight: 400;\r\n  letter-spacing: 0.01em;\r\n  line-height: 20px;\r\n  margin-bottom: 1em;\r\n  margin-top: 1em;\r\n}*/\r\n\r\nul {\r\n  margin: 10px 0 0;\r\n  padding: 0 0 0 20px;\r\n}\r\n\r\nli {\r\n  font-weight: 400;\r\n  margin-top: 4px;\r\n}\r\n\r\ninput {\r\n  border: 1px solid #106cc8;\r\n  font-size: 14px;\r\n  height: 40px;\r\n  outline: none;\r\n  padding: 8px;\r\n}\r\n\r\nbutton {\r\n  background-color: #106cc8;\r\n  border-style: none;\r\n  color: rgba(255, 255, 255, 0.87);\r\n  cursor: pointer;\r\n  display: inline-block;\r\n  font-size: 14px;\r\n  height: 40px;\r\n  padding: 8px 18px;\r\n  text-decoration: none;\r\n}\r\n\r\nbutton:hover {\r\n  background-color: #28739e;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n\n<app-sd-navbar></app-sd-navbar>\n\n<div>\n    <router-outlet></router-outlet>\n</div>"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__operators__ = __webpack_require__("../../../../../src/app/operators.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_firebase_firebase_service__ = __webpack_require__("../../../../../src/app/shared/firebase/firebase.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * This class represents the main application component.
 */
var AppComponent = (function () {
    function AppComponent(_firebaseService) {
        this._firebaseService = _firebaseService;
    }
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._firebaseService.getTasks().subscribe(function (tasks) {
            _this.tasks = tasks;
        });
        this._firebaseService.getStories().subscribe(function (stories) {
            _this.stories = stories;
        });
    };
    return AppComponent;
}());
AppComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.css")],
        providers: [__WEBPACK_IMPORTED_MODULE_2__shared_firebase_firebase_service__["a" /* FirebaseService */]]
    }),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])() // <<<=== required if the constructor has parameters
    ,
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__shared_firebase_firebase_service__["a" /* FirebaseService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__shared_firebase_firebase_service__["a" /* FirebaseService */]) === "function" && _a || Object])
], AppComponent);

var _a;
//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_routing_module__ = __webpack_require__("../../../../../src/app/app-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_angularfire2__ = __webpack_require__("../../../../angularfire2/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_angularfire2_database__ = __webpack_require__("../../../../angularfire2/database.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_angularfire2_auth__ = __webpack_require__("../../../../angularfire2/auth.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_ngx_bootstrap__ = __webpack_require__("../../../../ngx-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__about_about_module__ = __webpack_require__("../../../../../src/app/about/about.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__home_home_module__ = __webpack_require__("../../../../../src/app/home/home.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__shared_shared_module__ = __webpack_require__("../../../../../src/app/shared/shared.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__prose_prose_module__ = __webpack_require__("../../../../../src/app/prose/prose.module.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};















var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["M" /* NgModule */])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_4__app_routing_module__["a" /* AppRoutingModule */],
            __WEBPACK_IMPORTED_MODULE_11__about_about_module__["a" /* AboutModule */],
            __WEBPACK_IMPORTED_MODULE_12__home_home_module__["a" /* HomeModule */],
            __WEBPACK_IMPORTED_MODULE_14__prose_prose_module__["a" /* ProseModule */],
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_6_angularfire2__["a" /* AngularFireModule */].initializeApp(__WEBPACK_IMPORTED_MODULE_9__environments_environment__["a" /* environment */].firebase),
            __WEBPACK_IMPORTED_MODULE_7_angularfire2_database__["b" /* AngularFireDatabaseModule */],
            __WEBPACK_IMPORTED_MODULE_8_angularfire2_auth__["a" /* AngularFireAuthModule */],
            __WEBPACK_IMPORTED_MODULE_10_ngx_bootstrap__["a" /* AlertModule */].forRoot(),
            __WEBPACK_IMPORTED_MODULE_13__shared_shared_module__["a" /* SharedModule */].forRoot()
        ],
        providers: [{
                provide: __WEBPACK_IMPORTED_MODULE_2__angular_common__["a" /* APP_BASE_HREF */],
                useValue: '',
            }],
        declarations: [__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */]],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/home/home-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_component__ = __webpack_require__("../../../../../src/app/home/home.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var HomeRoutingModule = (function () {
    function HomeRoutingModule() {
    }
    return HomeRoutingModule;
}());
HomeRoutingModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* NgModule */])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */].forChild([
                { path: '', component: __WEBPACK_IMPORTED_MODULE_2__home_component__["a" /* HomeComponent */] }
            ])
        ],
        exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */]]
    })
], HomeRoutingModule);

//# sourceMappingURL=home-routing.module.js.map

/***/ }),

/***/ "../../../../../src/app/home/home.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ":host {\n  display: block;\n  padding: 0 16px;\n}\n\ninput {\n  width: 250px;\n}\n\nul {\n  list-style-type: none;\n  padding: 0 0 0 8px;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<p>Howdy! Here's a list of awesome computer scientists. Do you know any others? Add to the list yourself.</p>\n\n<form (submit)=\"addName()\">\n  <input [(ngModel)]=\"newName\" name=\"newName\" placeholder=\"Awesome Computer Scientist\">\n  <button type=\"submit\">Add</button>\n</form>\n\n<ul>\n  <li *ngFor=\"let name of names\">{{ name }}</li>\n</ul>\n"

/***/ }),

/***/ "../../../../../src/app/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_name_list_name_list_service__ = __webpack_require__("../../../../../src/app/shared/name-list/name-list.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * This class represents the lazy loaded HomeComponent.
 */
var HomeComponent = (function () {
    /**
     * Creates an instance of the HomeComponent with the injected
     * NameListService.
     *
     * @param {NameListService} nameListService - The injected NameListService.
     */
    function HomeComponent(nameListService) {
        this.nameListService = nameListService;
        this.newName = '';
        this.names = [];
    }
    /**
     * Get the names OnInit
     */
    HomeComponent.prototype.ngOnInit = function () {
        this.getNames();
    };
    /**
     * Handle the nameListService observable
     */
    HomeComponent.prototype.getNames = function () {
        var _this = this;
        this.nameListService.get()
            .subscribe(function (names) { return _this.names = names; }, function (error) { return _this.errorMessage = error; });
    };
    /**
     * Pushes a new name onto the names array
     * @return {boolean} false to prevent default form submit behavior to refresh the page.
     */
    HomeComponent.prototype.addName = function () {
        // TODO: implement nameListService.post
        this.names.push(this.newName);
        this.newName = '';
        return false;
    };
    return HomeComponent;
}());
HomeComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'sd-home',
        template: __webpack_require__("../../../../../src/app/home/home.component.html"),
        styles: [__webpack_require__("../../../../../src/app/home/home.component.css")],
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__shared_name_list_name_list_service__["a" /* NameListService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__shared_name_list_name_list_service__["a" /* NameListService */]) === "function" && _a || Object])
], HomeComponent);

var _a;
//# sourceMappingURL=home.component.js.map

/***/ }),

/***/ "../../../../../src/app/home/home.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__home_component__ = __webpack_require__("../../../../../src/app/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_routing_module__ = __webpack_require__("../../../../../src/app/home/home-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_shared_module__ = __webpack_require__("../../../../../src/app/shared/shared.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_name_list_name_list_service__ = __webpack_require__("../../../../../src/app/shared/name-list/name-list.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var HomeModule = (function () {
    function HomeModule() {
    }
    return HomeModule;
}());
HomeModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* NgModule */])({
        imports: [__WEBPACK_IMPORTED_MODULE_2__home_routing_module__["a" /* HomeRoutingModule */], __WEBPACK_IMPORTED_MODULE_3__shared_shared_module__["a" /* SharedModule */]],
        declarations: [__WEBPACK_IMPORTED_MODULE_1__home_component__["a" /* HomeComponent */]],
        exports: [__WEBPACK_IMPORTED_MODULE_1__home_component__["a" /* HomeComponent */]],
        providers: [__WEBPACK_IMPORTED_MODULE_4__shared_name_list_name_list_service__["a" /* NameListService */]]
    })
], HomeModule);

//# sourceMappingURL=home.module.js.map

/***/ }),

/***/ "../../../../../src/app/operators.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_add_observable_throw__ = __webpack_require__("../../../../rxjs/add/observable/throw.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_add_observable_throw___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_rxjs_add_observable_throw__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_catch__ = __webpack_require__("../../../../rxjs/add/operator/catch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_catch__);
// rxjs



// ngrx
// import '@ngrx/core/add/operator/select';
//# sourceMappingURL=operators.js.map

/***/ }),

/***/ "../../../../../src/app/prose/chapter/chapter-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChapterRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__chapter_component__ = __webpack_require__("../../../../../src/app/prose/chapter/chapter.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ChapterRoutingModule = (function () {
    function ChapterRoutingModule() {
    }
    return ChapterRoutingModule;
}());
ChapterRoutingModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* NgModule */])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */].forChild([
                { path: 'prose/:chapter.StoryURL', component: __WEBPACK_IMPORTED_MODULE_2__chapter_component__["a" /* ChapterComponent */] }
            ])
        ],
        exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */]]
    })
], ChapterRoutingModule);

// http://blog.mgechev.com/2015/12/30/angular2-router-dynamic-route-config-definition-creation/ 
//# sourceMappingURL=chapter-routing.module.js.map

/***/ }),

/***/ "../../../../../src/app/prose/chapter/chapter.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/**\r\n *  If you want to override some bootstrap variables, you have to change values here.\r\n *  The list of variables are listed here bower_components/bootstrap-sass/assets/stylesheets/bootstrap/_variables.scss\r\n */\r\n\r\n\r\n   /* box-shadow: 8px 7px 20px 3px rgb(0, 0, 0);\r\n@import url(https://fonts.googleapis.com/css?family=Nunito);\r\n$icon-font-path: \"../../bootstrap-sass/assets/fonts/bootstrap/\"; */\r\n\r\n/**\r\n *  Do not remove the comments below. It's the markers used by wiredep to inject\r\n *  sass dependencies when defined in the bower.json of your dependencies\r\n */\r\n /* bower:scss */\r\n\r\n\r\n/*  endbower */\r\n.cloak-flicker [ng\\:cloak], [ng-cloak], .ng-cloak {\r\n  display: none !important;\r\n}\r\n/* .main-view {\r\n\r\n} */\r\n.browsehappy {\r\n  margin: 0.2em 0;\r\n  background: #ccc;\r\n  color: #000;\r\n  padding: 0.2em 0;\r\n}\r\n\r\n.thumbnail {\r\n  height: 200px;\r\n\r\n  /* img.pull-right {\r\n    width: 50px;\r\n  } */\r\n}\r\n\r\n.navbar-panel {\r\n    margin: 10px 50px 20px 50px;\r\n}\r\n.navbar-panel-border {\r\n    border-radius: 20px;\r\n    padding: 10px;\r\n}\r\n.container-padding {\r\n  margin: 5%;\r\n\r\n}\r\n\r\n.image-button {\r\n  position: absolute;\r\n  top: 50px;\r\n  left: 0;\r\n  width: 100%;\r\n  font-size: 2em;\r\n  /* text-decoration-color: #ffffff; */\r\n}\r\n\r\n.carousel-inner > .item > img,\r\n.carousel-inner > .item > a > img {\r\n    width: 70%;\r\n    margin: auto;\r\n}\r\n.img-1 {\r\n      width: 50%;\r\n      height: auto;\r\n      box-shadow: 10px 10px 5px rgba(0, 0, 0, .5);\r\n      margin: 5px 10px 10px 5px;\r\n      float: right;\r\n      outline: none;\r\n}\r\n.img-2 {\r\n      width: 40%;\r\n      height: auto;\r\n      box-shadow: 10px 10px 5px rgba(0, 0, 0, .5);\r\n      margin: auto;\r\n      float: left;\r\n      margin: 10px 20px 20px 0px;\r\n      outline: none;\r\n}\r\n.img-3 {\r\n      width: 50%;\r\n      height: auto;\r\n      box-shadow: 10px 10px 5px rgba(0, 0, 0, .5);\r\n      margin: 5px 10px 10px 5px;\r\n      float: right;\r\n      outline: none;\r\n}\r\n.img-the-end {\r\n  width: 100%;\r\n  height: 100%;\r\n  float: left;\r\n  display: inline-block;\r\n    position: relative;\r\n  /* https://css-tricks.com/text-blocks-over-image/ */\r\n}\r\n.story-font {\r\n      font-family: \"Courier New\", Courier, \"Lucida Sans Typewriter\", \"Lucida Typewriter\", monospace;\r\n}\r\n.story {\r\n    -webkit-user-select: none; /* Chrome/Safari */\r\n    -moz-user-select: none; /* Firefox */\r\n    -ms-user-select: none; /* IE10+ */\r\n\r\n    /* Rules below not implemented in browsers yet */\r\n    -o-user-select: none;\r\n    user-select: none;\r\n}\r\n.content-sc {\r\n  background-image: url(" + __webpack_require__("../../../../../src/assets/images/background/background_1.jpg") + ");\r\n  background-attachment: fixed;\r\n  background-position: center;\r\n  background-repeat: no-repeat;\r\n  background-size: cover;\r\n\r\n}\r\n.content-home {\r\n  background-image: url(" + __webpack_require__("../../../../../src/assets/images/background/BWEtaCarNeb.png") + ");\r\n  background-attachment: fixed;\r\n  background-position: center;\r\n  background-repeat: no-repeat;\r\n  background-size: cover;\r\n\r\n}\r\n\r\n\r\n\r\n/* Start Story x-large Break Point */\r\n\r\n@media (min-width: 1200px){\r\n  .title-story {\r\n    display: inline-block;\r\n  }\r\n\r\n\r\n  .content-panel {\r\n    box-shadow: 10px 10px 5px rgba(0, 0, 0, .5);\r\n    background: #fff;\r\n    border-radius: 25px;\r\n    max-width: 80%;\r\n    margin: 10%;\r\n  }\r\n\r\n\r\n  .story, div, body, html, p, a  {\r\n      font-family: \"Courier New\", Courier, \"Lucida Sans Typewriter\", \"Lucida Typewriter\", monospace;\r\n      padding: 20px;\r\n      font-variant: normal;\r\n      font-style: normal;\r\n      font-weight: 400;\r\n      font-size: 20px;\r\n      line-height:  1.2em;\r\n  }\r\n  .panel-margin {\r\n    margin-top: 20px;\r\n    margin-bottom: 20px;\r\n  }\r\n\r\n   .modal-dialog {\r\n     width: 90%;\r\n     height: inherit;\r\n     display: block;\r\n     padding-top: 0px;\r\n     margin-left: auto;\r\n     margin-right: auto;\r\n     border-radius: 30px;\r\n     box-shadow: 0px 0px 5px 10px rgba(255, 255, 255, 0.7);\r\n   }\r\n   .modal-content {\r\n        border-radius: 30px;\r\n   }\r\n  .img-lightBox-1 {\r\n        border-radius: 30px;\r\n        display: inline-block;\r\n        z-index: 0;\r\n        left: 0;\r\n        top: 0;\r\n        width: 100%;\r\n        height: 100%;\r\n  }\r\n\r\n}\r\n\r\n\r\n\r\n\r\n/*  Start Story large Break Point */\r\n\r\n@media (min-width: 992px) and (max-width: 1199px){\r\n  .title-story {\r\n    display: inline-block;\r\n  }\r\n  .content-panel {\r\n\r\n    background: #fff;\r\n    border-radius: 20px;\r\n  }\r\n  .story, div, body, html, p, a  {\r\n      font-family: \"Courier New\", Courier, \"Lucida Sans Typewriter\", \"Lucida Typewriter\", monospace;\r\n      padding: 20px;\r\n      font-variant: normal;\r\n      font-style: normal;\r\n      font-weight: 400;\r\n      font-size:16px;\r\n      line-height:  1.2em;\r\n  }\r\n  .panel-margin {\r\n    margin-top: 20px;\r\n    margin-bottom: 20px;\r\n  }\r\n\r\n}\r\n\r\n /* Start Story medium */\r\n@media (min-width: 768px) and (max-width: 991px){\r\n  .panel-margin {\r\n    margin-top: 20px;\r\n    margin-bottom: 2em;\r\n  }\r\n  .content-panel {\r\n    margin-bottom: 10px;\r\n    background: #fff;\r\n    border-radius: 15px;\r\n  }\r\n  .story, div, body, html, p, a  {\r\n      font-family: \"Courier New\", Courier, \"Lucida Sans Typewriter\", \"Lucida Typewriter\", monospace;\r\n      padding: 20px;\r\n      font-variant: normal;\r\n      font-style: normal;\r\n      font-weight: 400;\r\n      font-size: 14px;\r\n      line-height:  1.2em;\r\n  }\r\n}\r\n /* End story Medium */\r\n\r\n\r\n /* Start Story Small */\r\n@media (min-width: 768px) and (max-width: 991px){\r\n  .content-panel {\r\n    background: #fff;\r\n    border-radius: 10px;\r\n    margin-bottom: 2em;\r\n  }\r\n  .story, div, body, html, p, a  {\r\n      font-family: \"Courier New\", Courier, \"Lucida Sans Typewriter\", \"Lucida Typewriter\", monospace;\r\n      padding: 20px;\r\n      font-variant: normal;\r\n      font-style: normal;\r\n      font-weight: 400;\r\n      font-size: 12px;\r\n      line-height:  1.2em;\r\n  }\r\n}\r\n /* End Story small */\r\n\r\n /* Start Story Small */\r\n@media (max-width: 767px){\r\n  .content-panel {\r\n    background: #fff;\r\n    border-radius: 10px;\r\n    margin-bottom: 2em;\r\n  }\r\n  .story, div, body, html, p, a  {\r\n      font-family: \"Courier New\", Courier, \"Lucida Sans Typewriter\", \"Lucida Typewriter\", monospace;\r\n      padding: 20px;\r\n      font-variant: normal;\r\n      font-style: normal;\r\n      font-weight: 400;\r\n      font-size: 12px;\r\n      line-height:  1.2em;\r\n  }\r\n}\r\n\r\n /* End Story small */\r\n\r\n\r\n\r\n\r\n\r\n\r\n/**\r\n *  Do not remove the comments below. It's the markers used by gulp-inject to inject\r\n *  all your sass files automatically\r\n */\r\n /* injector */\r\n\r\n /* endinjector */\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/prose/chapter/chapter.component.html":
/***/ (function(module, exports) {

module.exports = "\n\n       <button (click)=\"goBack()\" md-no-ink class=\"md-primary\">Back</button>\n\n\n\n<div class=\"container-fluid container-padding\">\n\n\n\n\n      <div class=\"title-story content-panel panel-margin\">\n        <h1>{{stories[0].Chapters[0].Chapter}}</h1>\n\n              {{stories[0].Chapters[0].title}}\n\n      </div>\n\n      <div class=\"content-panel story panel-margin\">\n      <p>\n            Danica taps away at a machine trying to squeeze truth out of complex electronics like sap from a giant maple, but not any sort of absolute truth. She seeks the inner truth felt by all sentient beings of a given demographic, in a particular range of income, that would make the story easy to sell to the Networks. Each twitch of her delicately manicured fingers, changes the footage scrolling by. The scene flickers in and out of focus, she tries toggles the three dimensional playback, centralized VR, holographic, then she stops. Her bored expression changing to one of sheer delight. She restarts the footage.<br />\n            “I’ve got it, get in here,” she commands while simultaneously checking her appearance in the reflection of a nearby black monitor. <br />\n            “I can’t,” Walter replies over the com. While the ship was not large, the back control room was so isolated that you could be going through a type 4 jump point and not even notice. <br />\n            “Get in here now Jellyfish!” She rewinds the footage, a young girl, dirty white clothes, bloody, dazed walks through a scene of devastation. <br />\n            Walter looks around at the surrounding space, the cockpit design gave a full view, thrust into the void, look straight up and you see stars, left, right, between your feet. The view in the ship was superb, but Walter didn’t like the idea of leaving the cockpit unless they were docked. He disengages the drives and tries to make his trajectory as neutral as possible, even though there probably wasn’t a ship for a million kilometers.\n      </p>\n    </div>\n\n    <div class=\"content-panel story panel-margin\">\n\n      <p>\n          The ship slides into a horizontal formation, bringing Walters cockpit seat alongside the one that was previously below. He pulls his way to the back of the ship in microgravity . He sees Danica still editing the footage, but frowns when he sees what she’s doing.<br />\n          “That won’t work.”<br />\n          “Of course it will, the framing is perfect.”<br />\n          “Framing? Framing, I got a pure multidimensional shot, with all subjects in the proper orientation and you cut it down to a window.” Walter throws up his arms.<br />\n          “Shut up Walter, I need you to open up a feed to the station, I want to upload this before we miss the news.”<br />\n          “Make the news?”<br />\n     \n          “Yes, make the sector news and if possible all the way to Earth.”<br />\n          “Dani this is a long form, there is no way the network will pick it up.”<br />\n          “I’ve already made the adjustments, were going to go live here.” Danica turns and pulls down a computer station and powers it up.<br />\n          “I’ve seen the footage too Dani, I don’t think this is live material. Dead and missing refugees won’t sell.”<br />\n         \n          “That’s not your problem.” Dani half listens to Walter as a holographic image appears from the system she powered up. The image appears to be the solar system. <br />\n          <img src=\"..\\..\\..\\assets\\images\\prose\\danica-star\\1.jpg\" alt=\"\" class=\"img-1 img-rounded\" ng-model=\"items[0]\" ng-click=\"light.open()\">\n          Walter pulls himself over to the transmitter station and fires it up, the antenna extends and he starts to see a connection finalizing the authorization. A warning appears, System Emergency channel given top priority, all other traffic will be limited.<br />\n          “We have a problem.”<br />\n          </p>\n\n      </div>\n      <div class=\"content-panel story panel-margin\">\n        <p>\n          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\n          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\n        </p>\n        <p>\n          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\n          <img src=\"..\\..\\..\\assets\\images\\prose\\danica-star\\2.jpg\" alt=\"\" class=\"img-2 img-rounded img-responsive\" ng-click=\"light.open()\">\n          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\n\n        </p>\n      </div>\n      <div class=\"content-panel story panel-margin\">\n        <p>\n          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\n          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\n        </p>\n        <p>\n          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\n          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\n\n        </p>\n<p>  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\n              <img src=\"..\\..\\..\\assets\\images\\prose\\danica-star\\3.jpg\" alt=\"\" class=\"img-rounded img-3\" ng-click=\"light.open()\">\n  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\n\n\n\n    </p>\n      </div>\n\n\n</div>\n\n<script type=\"text/ng-template\" class=\"\" id=\"modalimg.html\">\n    <div>\n        <img src=\"..\\..\\..\\assets\\images\\prose\\danica-star\\4.jpg\" alt=\"\" ng-click=\"light.close()\" class=\"img-lightBox-1\">\n  </div>\n</script>\n"

/***/ }),

/***/ "../../../../../src/app/prose/chapter/chapter.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChapterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_prose_prose_service__ = __webpack_require__("../../../../../src/app/shared/prose/prose.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ChapterComponent = (function () {
    /**
     * Creates an instance of the ChapterComponent with the injected
     * ProseService.
     *
     * @param {ProseService} ProseService - The injected ProseService.
     */
    function ChapterComponent(proseService, route, location) {
        this.proseService = proseService;
        this.route = route;
        this.location = location;
        this.stories = [];
    }
    /**
     * Get the Stories
     */
    ChapterComponent.prototype.ngOnInit = function () {
        this.getStories();
        //   this.route.params
        //       .map(params => params['Chapters'])
        //       .subscribe((Chapters) => {
        //           this.proseService.getChapters(Chapters)
        //               .subscribe(Chapters => {
        //                  this.Chapters = Chapters;
        //               })
        //       })
    };
    /**
     * Handle the proseService observable
     */
    ChapterComponent.prototype.getStories = function () {
        var _this = this;
        this.proseService.get()
            .subscribe(function (Chapters) { return _this.stories = Chapters; }, 
        // stories => this.stories = stories,
        // chapter => console.log(chapter),
        function (error) { return _this.errorMessage = error; });
    };
    ChapterComponent.prototype.goBack = function () {
        this.location.back();
    };
    return ChapterComponent;
}());
ChapterComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'chapters',
        template: __webpack_require__("../../../../../src/app/prose/chapter/chapter.component.html"),
        styles: [__webpack_require__("../../../../../src/app/prose/chapter/chapter.component.css")],
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__shared_prose_prose_service__["a" /* ProseService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__shared_prose_prose_service__["a" /* ProseService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__angular_common__["f" /* Location */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_common__["f" /* Location */]) === "function" && _c || Object])
], ChapterComponent);

var _a, _b, _c;
//# sourceMappingURL=chapter.component.js.map

/***/ }),

/***/ "../../../../../src/app/prose/chapter/chapter.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChapterModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__chapter_component__ = __webpack_require__("../../../../../src/app/prose/chapter/chapter.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__chapter_routing_module__ = __webpack_require__("../../../../../src/app/prose/chapter/chapter-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_shared_module__ = __webpack_require__("../../../../../src/app/shared/shared.module.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var ChapterModule = (function () {
    function ChapterModule() {
    }
    return ChapterModule;
}());
ChapterModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* NgModule */])({
        imports: [__WEBPACK_IMPORTED_MODULE_2__chapter_routing_module__["a" /* ChapterRoutingModule */], __WEBPACK_IMPORTED_MODULE_3__shared_shared_module__["a" /* SharedModule */]],
        declarations: [__WEBPACK_IMPORTED_MODULE_1__chapter_component__["a" /* ChapterComponent */]],
        exports: [__WEBPACK_IMPORTED_MODULE_1__chapter_component__["a" /* ChapterComponent */]]
    })
], ChapterModule);

//# sourceMappingURL=chapter.module.js.map

/***/ }),

/***/ "../../../../../src/app/prose/prose-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProseRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__prose_component__ = __webpack_require__("../../../../../src/app/prose/prose.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ProseRoutingModule = (function () {
    function ProseRoutingModule() {
    }
    return ProseRoutingModule;
}());
ProseRoutingModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* NgModule */])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */].forChild([
                { path: 'prose', component: __WEBPACK_IMPORTED_MODULE_2__prose_component__["a" /* ProseComponent */] }
            ])
        ],
        exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */]]
    })
], ProseRoutingModule);

//# sourceMappingURL=prose-routing.module.js.map

/***/ }),

/***/ "../../../../../src/app/prose/prose.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\r\n\r\n\r\n/*\r\nCopyright 2017 Google Inc. All Rights Reserved.\r\nUse of this source code is governed by an MIT-style license that\r\ncan be found in the LICENSE file at http://angular.io/license\r\n*/\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/prose/prose.component.html":
/***/ (function(module, exports) {

module.exports = "\n\n\n\n\n<div class=\"container-fluid container-padding cloak-flicker\">\n\n  <div class=\"row\" ui-view>\n    <h1>Story Page</h1>\n    <h3>This is a list of stories available to read.</h3>\n\n            <div class=\"content-panel panel-default\">\n                <h1>Prose</h1>\n              Here are a list of Stories, treatments, and fan fiction. Not much to see here yet, but I'll add\n              content.\n                <!-- <h2>Duke Dogewalker<acme-malarkey extra-values=\"['much story', 'Characters development', 'Much ado about bacon!']\"></acme-malarkey></h2> -->\n\n                <ul class=\"container\">\n                  <li *ngFor=\"let story of stories; let i = index\">\n                     <!-- [routerLink]=\"['/chapter', story.prose.Chapters.Chapter]\" -->\n                      <div class=\"module hero\">\n                        <h3>\n                              <!-- <a [routerLink]=\"['/chapter']\" [routerLinkActive]=\"['router-link-active']\" [routerLinkActiveOptions]=\"{exact:true}\">Chapter</a> -->\n\n                              <a href=\"#\" [routerLink]=\"['./' + story.StoryURL ]\" routerLinkActive=\"active\" [routerLinkActiveOptions]=\"{exact: true}\">\"{{story.title}}\"</a>\n                              <!-- <ul>\n                                <li *ngFor=\"let chapter of stories.Chapters\">\n                                  {{chapter.Chapters}}\n                                </li>\n                                <a [routerLink]=\"['/book/'+book.id]\">\n                              </ul> -->\n\n\n                        </h3>\n                      </div>\n                  </li>\n                </ul>\n\n            </div>\n\n\n      </div>\n</div>\n<br />\n<!-- Chapters view -->\n`\n"

/***/ }),

/***/ "../../../../../src/app/prose/prose.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProseComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__shared_firebase_firebase_service__ = __webpack_require__("../../../../../src/app/shared/firebase/firebase.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ProseComponent = (function () {
    function ProseComponent(_firebaseService) {
        this._firebaseService = _firebaseService;
    }
    ProseComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._firebaseService.getStories().subscribe(function (stories) {
            _this.stories = stories;
        });
    };
    return ProseComponent;
}());
ProseComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["o" /* Component */])({
        selector: 'app-story',
        template: __webpack_require__("../../../../../src/app/prose/prose.component.html"),
        styles: [__webpack_require__("../../../../../src/app/prose/prose.component.css")],
    }),
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["C" /* Injectable */])() // <<<=== required if the constructor has parameters
    ,
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__shared_firebase_firebase_service__["a" /* FirebaseService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__shared_firebase_firebase_service__["a" /* FirebaseService */]) === "function" && _a || Object])
], ProseComponent);

var _a;
//  OLD export ProseComponent
// errorMessage: string;
// stories: any[] = [];
// /**
//  * Creates an instance of the ProseComponent with the injected
//  * ProseComponent.
//  *
//  * @param {ProseService} ProseService - The injected ProseComponent.
//  */
//   constructor(public proseService: ProseService) {}
//     /**
//      * Get the Stories
//      */
//     ngOnInit() {
//       this.getStories();
//     }
//     /**
//      * Handle the proseService observable
//      */
//     getStories() {
//       this.proseService.get()
//         .subscribe(
//             stories => this.stories = stories,
//             error => this.errorMessage = <any>error
//         );
//     } 
//# sourceMappingURL=prose.component.js.map

/***/ }),

/***/ "../../../../../src/app/prose/prose.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProseModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__prose_component__ = __webpack_require__("../../../../../src/app/prose/prose.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__prose_routing_module__ = __webpack_require__("../../../../../src/app/prose/prose-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_shared_module__ = __webpack_require__("../../../../../src/app/shared/shared.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__chapter_chapter_module__ = __webpack_require__("../../../../../src/app/prose/chapter/chapter.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__shared_prose_prose_service__ = __webpack_require__("../../../../../src/app/shared/prose/prose.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var ProseModule = (function () {
    function ProseModule() {
    }
    return ProseModule;
}());
ProseModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* NgModule */])({
        imports: [__WEBPACK_IMPORTED_MODULE_2__prose_routing_module__["a" /* ProseRoutingModule */], __WEBPACK_IMPORTED_MODULE_3__shared_shared_module__["a" /* SharedModule */], __WEBPACK_IMPORTED_MODULE_4__chapter_chapter_module__["a" /* ChapterModule */]],
        declarations: [__WEBPACK_IMPORTED_MODULE_1__prose_component__["a" /* ProseComponent */]],
        exports: [__WEBPACK_IMPORTED_MODULE_1__prose_component__["a" /* ProseComponent */]],
        providers: [__WEBPACK_IMPORTED_MODULE_5__shared_prose_prose_service__["a" /* ProseService */]]
    })
], ProseModule);

//# sourceMappingURL=prose.module.js.map

/***/ }),

/***/ "../../../../../src/app/shared/firebase/firebase.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FirebaseService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__ = __webpack_require__("../../../../angularfire2/database.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__operators__ = __webpack_require__("../../../../../src/app/operators.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var FirebaseService = (function () {
    function FirebaseService(db) {
        this.db = db;
    }
    FirebaseService.prototype.getTasks = function () {
        this.tasks = this.db.list('/tasks');
        return this.tasks;
    };
    FirebaseService.prototype.getStories = function () {
        this.stories = this.db.list('/stories');
        return this.stories;
    };
    return FirebaseService;
}());
FirebaseService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__["a" /* AngularFireDatabase */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__["a" /* AngularFireDatabase */]) === "function" && _a || Object])
], FirebaseService);

var _a;
//# sourceMappingURL=firebase.service.js.map

/***/ }),

/***/ "../../../../../src/app/shared/name-list/name-list.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NameListService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__("../../../../rxjs/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



// import 'rxjs/add/operator/do';  // for debugging
/**
 * This class provides the NameList service with methods to read names and add names.
 */
var NameListService = (function () {
    /**
     * Creates a new NameListService with the injected Http.
     * @param {Http} http - The injected Http.
     * @constructor
     */
    function NameListService(http) {
        this.http = http;
    }
    /**
     * Returns an Observable for the HTTP GET request for the JSON resource.
     * @return {string[]} The Observable for the HTTP request.
     */
    NameListService.prototype.get = function () {
        return this.http.get('assets/data.json')
            .map(function (res) { return res.json(); })
            .catch(this.handleError);
    };
    /**
      * Handle HTTP error
      */
    NameListService.prototype.handleError = function (error) {
        // In a real world app, we might use a remote logging infrastructure
        // We'd also dig deeper into the error to get a better message
        var errMsg = (error.message) ? error.message :
            error.status ? error.status + " - " + error.statusText : 'Server error';
        console.error(errMsg); // log to console instead
        return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].throw(errMsg);
    };
    return NameListService;
}());
NameListService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]) === "function" && _a || Object])
], NameListService);

var _a;
//# sourceMappingURL=name-list.service.js.map

/***/ }),

/***/ "../../../../../src/app/shared/navbar/navbar.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ":host {\n  border: 0 solid #e1e1e1;\n  border-bottom-width: 1px;\n  display: block;\n  height: 48px;\n  padding: 0 16px;\n}\n\nnav a {\n  color: #000000;\n  opacity: .5;\n  font-size: 14px;\n  font-weight: 500;\n  line-height: 48px;\n  margin-right: 20px;\n  text-decoration: none;\n  vertical-align: middle;\n  cursor: pointer;\n}\n\nnav a.router-link-active {\n  color: #106cc8;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/shared/navbar/navbar.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container bg-default\">\n  <nav class=\"navbar navbar-default\">\n    <div class=\"container-fluid\">\n\n        <ul class=\"nav navbar-nav content-nav-panel\">\n            <li class=\"nav-item\"> \n                  <a [routerLink]=\"['/']\" [routerLinkActive]=\"['router-link-active']\" [routerLinkActiveOptions]=\"{exact:true}\">HOME</a>\n                  </li>\n            <li class=\"nav-item\">\n                <a [routerLink]=\"['/about']\" [routerLinkActive]=\"['router-link-active']\" [routerLinkActiveOptions]=\"{exact:true}\">ABOUT</a>\n            </li>\n            <li class=\"nav-item\">\n                <a [routerLink]=\"['/prose']\" [routerLinkActive]=\"['router-link-active']\" [routerLinkActiveOptions]=\"{exact:true}\">Prose</a>\n            </li>\n        </ul>\n    \n    </div>\n  </nav>\n</div>"

/***/ }),

/***/ "../../../../../src/app/shared/navbar/navbar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavbarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

/**
 * This class represents the navigation bar component.
 */
var NavbarComponent = (function () {
    function NavbarComponent() {
    }
    return NavbarComponent;
}());
NavbarComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-sd-navbar',
        template: __webpack_require__("../../../../../src/app/shared/navbar/navbar.component.html"),
        styles: [__webpack_require__("../../../../../src/app/shared/navbar/navbar.component.css")],
    })
], NavbarComponent);

//# sourceMappingURL=navbar.component.js.map

/***/ }),

/***/ "../../../../../src/app/shared/prose/prose.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProseService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__("../../../../rxjs/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



// import 'rxjs/add/operator/do';  // for debugging
/**
 * This class provides the NameList service with methods to read names and add names.
 */
var ProseService = (function () {
    /**
     * Creates a new NameListService with the injected Http.
     * @param {Http} http - The injected Http.
     * @constructor
     */
    function ProseService(http) {
        this.http = http;
    }
    /**
     * Returns an Observable for the HTTP GET request for the JSON resource.
     * @return {string[]} The Observable for the HTTP request.
     */
    ProseService.prototype.get = function () {
        return this.http.get('assets/stories.json')
            .map(function (res) { return res.json(); })
            .catch(this.handleError);
    };
    // getChapters(prose:string): Observable<string[]> {
    //   return this.http.get('assets/stories.json')
    //                   .map((res: Response) => res.json.())
    //                   .catch(this.handleError);
    // }
    //     private extractData(res: Response) {
    //   let body = <stories[]>res.json().stories;    // return array from json file
    //   return body || [];     // also return empty array if there is no data
    // }
    /**
      * Handle HTTP error
      */
    ProseService.prototype.handleError = function (error) {
        // In a real world app, we might use a remote logging infrastructure
        // We'd also dig deeper into the error to get a better message
        var errMsg = (error.message) ? error.message :
            error.status ? error.status + " - " + error.statusText : 'Server error';
        console.error(errMsg); // log to console instead
        return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].throw(errMsg);
    };
    return ProseService;
}());
ProseService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]) === "function" && _a || Object])
], ProseService);

var _a;
//# sourceMappingURL=prose.service.js.map

/***/ }),

/***/ "../../../../../src/app/shared/shared.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SharedModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__toolbar_toolbar_component__ = __webpack_require__("../../../../../src/app/shared/toolbar/toolbar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__navbar_navbar_component__ = __webpack_require__("../../../../../src/app/shared/navbar/navbar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__name_list_name_list_service__ = __webpack_require__("../../../../../src/app/shared/name-list/name-list.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__prose_prose_service__ = __webpack_require__("../../../../../src/app/shared/prose/prose.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








/**
 * Do not specify providers for modules that might be imported by a lazy loaded module.
 */
var SharedModule = SharedModule_1 = (function () {
    function SharedModule() {
    }
    SharedModule.forRoot = function () {
        return {
            ngModule: SharedModule_1,
            providers: [__WEBPACK_IMPORTED_MODULE_6__name_list_name_list_service__["a" /* NameListService */], __WEBPACK_IMPORTED_MODULE_7__prose_prose_service__["a" /* ProseService */]]
        };
    };
    return SharedModule;
}());
SharedModule = SharedModule_1 = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* NgModule */])({
        imports: [__WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */], __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* RouterModule */]],
        declarations: [__WEBPACK_IMPORTED_MODULE_4__toolbar_toolbar_component__["a" /* ToolbarComponent */], __WEBPACK_IMPORTED_MODULE_5__navbar_navbar_component__["a" /* NavbarComponent */]],
        exports: [__WEBPACK_IMPORTED_MODULE_4__toolbar_toolbar_component__["a" /* ToolbarComponent */], __WEBPACK_IMPORTED_MODULE_5__navbar_navbar_component__["a" /* NavbarComponent */],
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */], __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */], __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* RouterModule */]]
    })
], SharedModule);

var SharedModule_1;
//# sourceMappingURL=shared.module.js.map

/***/ }),

/***/ "../../../../../src/app/shared/toolbar/toolbar.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ":host {\n  background-color: #106cc8;\n  color: rgba(255, 255, 255, 0.87);\n  display: block;\n  height: 48px;\n  padding: 0 16px;\n}\n\nh1 {\n  display: inline;\n  font-size: 20px;\n  font-weight: normal;\n  letter-spacing: 0.1px;\n  line-height: 48px;\n}\n\n.more {\n  background: url(\"/assets/svg/more.svg\");\n  float: right;\n  height: 24px;\n  margin-top: 12px;\n  width: 24px;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/shared/toolbar/toolbar.component.html":
/***/ (function(module, exports) {

module.exports = "<h1>Angular Seed</h1>\n<div class=\"more\"></div>\n"

/***/ }),

/***/ "../../../../../src/app/shared/toolbar/toolbar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ToolbarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

/**
 * This class represents the toolbar component.
 */
var ToolbarComponent = (function () {
    function ToolbarComponent() {
    }
    return ToolbarComponent;
}());
ToolbarComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-sd-toolbar',
        template: __webpack_require__("../../../../../src/app/shared/toolbar/toolbar.component.html"),
        styles: [__webpack_require__("../../../../../src/app/shared/toolbar/toolbar.component.css")]
    })
], ToolbarComponent);

//# sourceMappingURL=toolbar.component.js.map

/***/ }),

/***/ "../../../../../src/assets/images/background/BWEtaCarNeb.png":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "BWEtaCarNeb.58e64380445fae7312ba.png";

/***/ }),

/***/ "../../../../../src/assets/images/background/background_1.jpg":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "background_1.217fd25dc87bdc3c4ec7.jpg";

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false,
    firebase: {
        apiKey: 'AIzaSyBozQYiZaONaSEv_wzj57OSwdjOQ617rpI',
        authDomain: 'rostasan-70d22.firebaseapp.com',
        databaseURL: 'https://rostasan-70d22.firebaseio.com',
        projectId: 'rostasan-70d22',
        storageBucket: 'rostasan-70d22.appspot.com',
        messagingSenderId: '513645768348'
    }
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_23" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ "../../../../moment/locale recursive ^\\.\\/.*$":
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": "../../../../moment/locale/af.js",
	"./af.js": "../../../../moment/locale/af.js",
	"./ar": "../../../../moment/locale/ar.js",
	"./ar-dz": "../../../../moment/locale/ar-dz.js",
	"./ar-dz.js": "../../../../moment/locale/ar-dz.js",
	"./ar-kw": "../../../../moment/locale/ar-kw.js",
	"./ar-kw.js": "../../../../moment/locale/ar-kw.js",
	"./ar-ly": "../../../../moment/locale/ar-ly.js",
	"./ar-ly.js": "../../../../moment/locale/ar-ly.js",
	"./ar-ma": "../../../../moment/locale/ar-ma.js",
	"./ar-ma.js": "../../../../moment/locale/ar-ma.js",
	"./ar-sa": "../../../../moment/locale/ar-sa.js",
	"./ar-sa.js": "../../../../moment/locale/ar-sa.js",
	"./ar-tn": "../../../../moment/locale/ar-tn.js",
	"./ar-tn.js": "../../../../moment/locale/ar-tn.js",
	"./ar.js": "../../../../moment/locale/ar.js",
	"./az": "../../../../moment/locale/az.js",
	"./az.js": "../../../../moment/locale/az.js",
	"./be": "../../../../moment/locale/be.js",
	"./be.js": "../../../../moment/locale/be.js",
	"./bg": "../../../../moment/locale/bg.js",
	"./bg.js": "../../../../moment/locale/bg.js",
	"./bn": "../../../../moment/locale/bn.js",
	"./bn.js": "../../../../moment/locale/bn.js",
	"./bo": "../../../../moment/locale/bo.js",
	"./bo.js": "../../../../moment/locale/bo.js",
	"./br": "../../../../moment/locale/br.js",
	"./br.js": "../../../../moment/locale/br.js",
	"./bs": "../../../../moment/locale/bs.js",
	"./bs.js": "../../../../moment/locale/bs.js",
	"./ca": "../../../../moment/locale/ca.js",
	"./ca.js": "../../../../moment/locale/ca.js",
	"./cs": "../../../../moment/locale/cs.js",
	"./cs.js": "../../../../moment/locale/cs.js",
	"./cv": "../../../../moment/locale/cv.js",
	"./cv.js": "../../../../moment/locale/cv.js",
	"./cy": "../../../../moment/locale/cy.js",
	"./cy.js": "../../../../moment/locale/cy.js",
	"./da": "../../../../moment/locale/da.js",
	"./da.js": "../../../../moment/locale/da.js",
	"./de": "../../../../moment/locale/de.js",
	"./de-at": "../../../../moment/locale/de-at.js",
	"./de-at.js": "../../../../moment/locale/de-at.js",
	"./de-ch": "../../../../moment/locale/de-ch.js",
	"./de-ch.js": "../../../../moment/locale/de-ch.js",
	"./de.js": "../../../../moment/locale/de.js",
	"./dv": "../../../../moment/locale/dv.js",
	"./dv.js": "../../../../moment/locale/dv.js",
	"./el": "../../../../moment/locale/el.js",
	"./el.js": "../../../../moment/locale/el.js",
	"./en-au": "../../../../moment/locale/en-au.js",
	"./en-au.js": "../../../../moment/locale/en-au.js",
	"./en-ca": "../../../../moment/locale/en-ca.js",
	"./en-ca.js": "../../../../moment/locale/en-ca.js",
	"./en-gb": "../../../../moment/locale/en-gb.js",
	"./en-gb.js": "../../../../moment/locale/en-gb.js",
	"./en-ie": "../../../../moment/locale/en-ie.js",
	"./en-ie.js": "../../../../moment/locale/en-ie.js",
	"./en-nz": "../../../../moment/locale/en-nz.js",
	"./en-nz.js": "../../../../moment/locale/en-nz.js",
	"./eo": "../../../../moment/locale/eo.js",
	"./eo.js": "../../../../moment/locale/eo.js",
	"./es": "../../../../moment/locale/es.js",
	"./es-do": "../../../../moment/locale/es-do.js",
	"./es-do.js": "../../../../moment/locale/es-do.js",
	"./es.js": "../../../../moment/locale/es.js",
	"./et": "../../../../moment/locale/et.js",
	"./et.js": "../../../../moment/locale/et.js",
	"./eu": "../../../../moment/locale/eu.js",
	"./eu.js": "../../../../moment/locale/eu.js",
	"./fa": "../../../../moment/locale/fa.js",
	"./fa.js": "../../../../moment/locale/fa.js",
	"./fi": "../../../../moment/locale/fi.js",
	"./fi.js": "../../../../moment/locale/fi.js",
	"./fo": "../../../../moment/locale/fo.js",
	"./fo.js": "../../../../moment/locale/fo.js",
	"./fr": "../../../../moment/locale/fr.js",
	"./fr-ca": "../../../../moment/locale/fr-ca.js",
	"./fr-ca.js": "../../../../moment/locale/fr-ca.js",
	"./fr-ch": "../../../../moment/locale/fr-ch.js",
	"./fr-ch.js": "../../../../moment/locale/fr-ch.js",
	"./fr.js": "../../../../moment/locale/fr.js",
	"./fy": "../../../../moment/locale/fy.js",
	"./fy.js": "../../../../moment/locale/fy.js",
	"./gd": "../../../../moment/locale/gd.js",
	"./gd.js": "../../../../moment/locale/gd.js",
	"./gl": "../../../../moment/locale/gl.js",
	"./gl.js": "../../../../moment/locale/gl.js",
	"./gom-latn": "../../../../moment/locale/gom-latn.js",
	"./gom-latn.js": "../../../../moment/locale/gom-latn.js",
	"./he": "../../../../moment/locale/he.js",
	"./he.js": "../../../../moment/locale/he.js",
	"./hi": "../../../../moment/locale/hi.js",
	"./hi.js": "../../../../moment/locale/hi.js",
	"./hr": "../../../../moment/locale/hr.js",
	"./hr.js": "../../../../moment/locale/hr.js",
	"./hu": "../../../../moment/locale/hu.js",
	"./hu.js": "../../../../moment/locale/hu.js",
	"./hy-am": "../../../../moment/locale/hy-am.js",
	"./hy-am.js": "../../../../moment/locale/hy-am.js",
	"./id": "../../../../moment/locale/id.js",
	"./id.js": "../../../../moment/locale/id.js",
	"./is": "../../../../moment/locale/is.js",
	"./is.js": "../../../../moment/locale/is.js",
	"./it": "../../../../moment/locale/it.js",
	"./it.js": "../../../../moment/locale/it.js",
	"./ja": "../../../../moment/locale/ja.js",
	"./ja.js": "../../../../moment/locale/ja.js",
	"./jv": "../../../../moment/locale/jv.js",
	"./jv.js": "../../../../moment/locale/jv.js",
	"./ka": "../../../../moment/locale/ka.js",
	"./ka.js": "../../../../moment/locale/ka.js",
	"./kk": "../../../../moment/locale/kk.js",
	"./kk.js": "../../../../moment/locale/kk.js",
	"./km": "../../../../moment/locale/km.js",
	"./km.js": "../../../../moment/locale/km.js",
	"./kn": "../../../../moment/locale/kn.js",
	"./kn.js": "../../../../moment/locale/kn.js",
	"./ko": "../../../../moment/locale/ko.js",
	"./ko.js": "../../../../moment/locale/ko.js",
	"./ky": "../../../../moment/locale/ky.js",
	"./ky.js": "../../../../moment/locale/ky.js",
	"./lb": "../../../../moment/locale/lb.js",
	"./lb.js": "../../../../moment/locale/lb.js",
	"./lo": "../../../../moment/locale/lo.js",
	"./lo.js": "../../../../moment/locale/lo.js",
	"./lt": "../../../../moment/locale/lt.js",
	"./lt.js": "../../../../moment/locale/lt.js",
	"./lv": "../../../../moment/locale/lv.js",
	"./lv.js": "../../../../moment/locale/lv.js",
	"./me": "../../../../moment/locale/me.js",
	"./me.js": "../../../../moment/locale/me.js",
	"./mi": "../../../../moment/locale/mi.js",
	"./mi.js": "../../../../moment/locale/mi.js",
	"./mk": "../../../../moment/locale/mk.js",
	"./mk.js": "../../../../moment/locale/mk.js",
	"./ml": "../../../../moment/locale/ml.js",
	"./ml.js": "../../../../moment/locale/ml.js",
	"./mr": "../../../../moment/locale/mr.js",
	"./mr.js": "../../../../moment/locale/mr.js",
	"./ms": "../../../../moment/locale/ms.js",
	"./ms-my": "../../../../moment/locale/ms-my.js",
	"./ms-my.js": "../../../../moment/locale/ms-my.js",
	"./ms.js": "../../../../moment/locale/ms.js",
	"./my": "../../../../moment/locale/my.js",
	"./my.js": "../../../../moment/locale/my.js",
	"./nb": "../../../../moment/locale/nb.js",
	"./nb.js": "../../../../moment/locale/nb.js",
	"./ne": "../../../../moment/locale/ne.js",
	"./ne.js": "../../../../moment/locale/ne.js",
	"./nl": "../../../../moment/locale/nl.js",
	"./nl-be": "../../../../moment/locale/nl-be.js",
	"./nl-be.js": "../../../../moment/locale/nl-be.js",
	"./nl.js": "../../../../moment/locale/nl.js",
	"./nn": "../../../../moment/locale/nn.js",
	"./nn.js": "../../../../moment/locale/nn.js",
	"./pa-in": "../../../../moment/locale/pa-in.js",
	"./pa-in.js": "../../../../moment/locale/pa-in.js",
	"./pl": "../../../../moment/locale/pl.js",
	"./pl.js": "../../../../moment/locale/pl.js",
	"./pt": "../../../../moment/locale/pt.js",
	"./pt-br": "../../../../moment/locale/pt-br.js",
	"./pt-br.js": "../../../../moment/locale/pt-br.js",
	"./pt.js": "../../../../moment/locale/pt.js",
	"./ro": "../../../../moment/locale/ro.js",
	"./ro.js": "../../../../moment/locale/ro.js",
	"./ru": "../../../../moment/locale/ru.js",
	"./ru.js": "../../../../moment/locale/ru.js",
	"./sd": "../../../../moment/locale/sd.js",
	"./sd.js": "../../../../moment/locale/sd.js",
	"./se": "../../../../moment/locale/se.js",
	"./se.js": "../../../../moment/locale/se.js",
	"./si": "../../../../moment/locale/si.js",
	"./si.js": "../../../../moment/locale/si.js",
	"./sk": "../../../../moment/locale/sk.js",
	"./sk.js": "../../../../moment/locale/sk.js",
	"./sl": "../../../../moment/locale/sl.js",
	"./sl.js": "../../../../moment/locale/sl.js",
	"./sq": "../../../../moment/locale/sq.js",
	"./sq.js": "../../../../moment/locale/sq.js",
	"./sr": "../../../../moment/locale/sr.js",
	"./sr-cyrl": "../../../../moment/locale/sr-cyrl.js",
	"./sr-cyrl.js": "../../../../moment/locale/sr-cyrl.js",
	"./sr.js": "../../../../moment/locale/sr.js",
	"./ss": "../../../../moment/locale/ss.js",
	"./ss.js": "../../../../moment/locale/ss.js",
	"./sv": "../../../../moment/locale/sv.js",
	"./sv.js": "../../../../moment/locale/sv.js",
	"./sw": "../../../../moment/locale/sw.js",
	"./sw.js": "../../../../moment/locale/sw.js",
	"./ta": "../../../../moment/locale/ta.js",
	"./ta.js": "../../../../moment/locale/ta.js",
	"./te": "../../../../moment/locale/te.js",
	"./te.js": "../../../../moment/locale/te.js",
	"./tet": "../../../../moment/locale/tet.js",
	"./tet.js": "../../../../moment/locale/tet.js",
	"./th": "../../../../moment/locale/th.js",
	"./th.js": "../../../../moment/locale/th.js",
	"./tl-ph": "../../../../moment/locale/tl-ph.js",
	"./tl-ph.js": "../../../../moment/locale/tl-ph.js",
	"./tlh": "../../../../moment/locale/tlh.js",
	"./tlh.js": "../../../../moment/locale/tlh.js",
	"./tr": "../../../../moment/locale/tr.js",
	"./tr.js": "../../../../moment/locale/tr.js",
	"./tzl": "../../../../moment/locale/tzl.js",
	"./tzl.js": "../../../../moment/locale/tzl.js",
	"./tzm": "../../../../moment/locale/tzm.js",
	"./tzm-latn": "../../../../moment/locale/tzm-latn.js",
	"./tzm-latn.js": "../../../../moment/locale/tzm-latn.js",
	"./tzm.js": "../../../../moment/locale/tzm.js",
	"./uk": "../../../../moment/locale/uk.js",
	"./uk.js": "../../../../moment/locale/uk.js",
	"./ur": "../../../../moment/locale/ur.js",
	"./ur.js": "../../../../moment/locale/ur.js",
	"./uz": "../../../../moment/locale/uz.js",
	"./uz-latn": "../../../../moment/locale/uz-latn.js",
	"./uz-latn.js": "../../../../moment/locale/uz-latn.js",
	"./uz.js": "../../../../moment/locale/uz.js",
	"./vi": "../../../../moment/locale/vi.js",
	"./vi.js": "../../../../moment/locale/vi.js",
	"./x-pseudo": "../../../../moment/locale/x-pseudo.js",
	"./x-pseudo.js": "../../../../moment/locale/x-pseudo.js",
	"./yo": "../../../../moment/locale/yo.js",
	"./yo.js": "../../../../moment/locale/yo.js",
	"./zh-cn": "../../../../moment/locale/zh-cn.js",
	"./zh-cn.js": "../../../../moment/locale/zh-cn.js",
	"./zh-hk": "../../../../moment/locale/zh-hk.js",
	"./zh-hk.js": "../../../../moment/locale/zh-hk.js",
	"./zh-tw": "../../../../moment/locale/zh-tw.js",
	"./zh-tw.js": "../../../../moment/locale/zh-tw.js"
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number or string
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "../../../../moment/locale recursive ^\\.\\/.*$";

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map