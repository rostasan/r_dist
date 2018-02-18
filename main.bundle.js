webpackJsonp(["main"],{

/***/ "../../../../../src/$$_gendir lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_gendir lazy recursive";

/***/ }),

/***/ "../../../../../src/app/add-story/add-story.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".modal-backdrop {\r\n  z-index: -1;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/add-story/add-story.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"content-panel panel-default\">\n      <div class=\"\">\n        <p>\n          add story\n        </p>\n      </div>\n      <div class=\"form-group\">\n        <form (ngSubmit)=\"onSubmit()\">\n          <div class=\"\">\n            <label for=\"\">Title</label>\n            <input type=\"text\" class=\"form-control\" id=\"formGroupExampleInput\" [(ngModel)]=\"story.title\" name=\"title\" placeholder=\"Chapter Title\">\n          </div>\n          <div class=\"\">\n            <label for=\"\">Description</label>\n            <input type=\"text\" class=\"form-control\" id=\"formGroupExampleInput\" [(ngModel)]=\"story.description\" name=\"description\" placeholder=\"Chapter Description\">\n          </div>\n          <div class=\"\">\n            <label for=\"\">Chapter</label>\n            <input type=\"text\" class=\"form-control\" id=\"formGroupExampleInput\" [(ngModel)]=\"story.chapter\" name=\"chapter\" placeholder=\"Roman Numeral\">\n          </div>\n          <!-- <div class=\"form-group\">\n                          <label for=\"\">Description</label>\n                          <input type=\"text\" class=\"form-control\" id=\"formGroupExampleInput\" [(ngModel)]=\"story.description\" name=\"description\" placeholder=\"Example input\">\n                        </div> -->\n          <button type=\"submit\" value=\"Submit\" class=\"btn btn-primary\">Submit</button>\n        </form>\n      </div>\n      <div class=\"modal-body\">\n        <ul for=\"inlineFormInputGroup\">\n          <li *ngFor=\"let story of stories\">\n            <div class=\"modal-title\">\n             <h3> {{story.title}}</h3> \n             {{story.description}} {{story.chapter}}\n            </div>\n            <a class=\"\">\n              <i (click)=\"editStory($event, story)\" class=\"fa fa-pencil\"></i>\n            </a>\n            <div *ngIf=\"editState && storyToEdit.id == story.id\">\n              <form (ngSubmit)=\"updateStory(story)\">\n                <div class=\"form-group\">\n                  <input type=\"text\" class=\"form-control\" id=\"formGroupExampleInput\" [(ngModel)]=\"story.title\" name=\"title\" placeholder=\"Example input\">\n                </div>\n                <div class=\"form-group\">\n                  <input type=\"text\" class=\"form-control\" id=\"formGroupExampleInput\" [(ngModel)]=\"story.description\" name=\"description\" placeholder=\"Example input\">\n                </div>\n                <input type=\"submit\" value=\"Update Story\" class=\"btn btn-warning text-white\">\n                <button class=\"btn btn-danger\" (click)=\"deleteStory($event, story)\">Delete Story</button>\n\n                <i class=\"\" (click)=\"clearState()\" class=\"fa fa-compress\" *ngIf=\"editState && storyToEdit.id == story.id\"></i>\n              </form>\n            </div>\n          </li>\n        </ul>\n      </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/add-story/add-story.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddStoryComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_firebase_firebase_service__ = __webpack_require__("../../../../../src/app/shared/firebase/firebase.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_database__ = __webpack_require__("../../../../angularfire2/database/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AddStoryComponent = /** @class */ (function () {
    function AddStoryComponent(_firebaseService, route, db) {
        this._firebaseService = _firebaseService;
        this.route = route;
        this.story = {
            title: '',
            description: '',
            chapter: '',
            id: ''
        };
        this.editState = false;
    }
    AddStoryComponent.prototype.ngOnInit = function () {
        var _this = this;
        //  this.route.params.forEach((urlParameters) => {
        //  this.storyId = urlParameters['id'];
        this._firebaseService.getStories().subscribe(function (stories) {
            _this.stories = stories;
            console.log(_this.stories);
        });
        this._firebaseService.updateStory(this.story);
    };
    AddStoryComponent.prototype.deleteStory = function (event, story) {
        this.clearState();
        this._firebaseService.deleteStory(story);
    };
    AddStoryComponent.prototype.editStory = function (event, story) {
        this.editState = true;
        this.storyToEdit = story;
    };
    AddStoryComponent.prototype.updateStory = function (story) {
        this._firebaseService.updateStory(story);
        this.clearState();
    };
    AddStoryComponent.prototype.clearState = function () {
        this.editState = false;
        this.storyToEdit = null;
    };
    AddStoryComponent.prototype.onSubmit = function () {
        if (this.story.title !== '' && this.story.description !== '') {
            this._firebaseService.addStory(this.story);
            this.story.title = '';
            this.story.description = '';
            this.story.chapter = '';
        }
    };
    AddStoryComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["o" /* Component */])({
            selector: 'app-add-story',
            template: __webpack_require__("../../../../../src/app/add-story/add-story.component.html"),
            styles: [__webpack_require__("../../../../../src/app/add-story/add-story.component.css")]
        }),
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["C" /* Injectable */])() // <<<=== required if the constructor has parameters
        ,
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__shared_firebase_firebase_service__["a" /* FirebaseService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__shared_firebase_firebase_service__["a" /* FirebaseService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_router__["a" /* ActivatedRoute */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3_angularfire2_database__["a" /* AngularFireDatabase */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_angularfire2_database__["a" /* AngularFireDatabase */]) === "function" && _c || Object])
    ], AddStoryComponent);
    return AddStoryComponent;
    var _a, _b, _c;
}());

//# sourceMappingURL=add-story.component.js.map

/***/ }),

/***/ "../../../../../src/app/add-story/add-story.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddStoryModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__add_story_component__ = __webpack_require__("../../../../../src/app/add-story/add-story.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var AddStoryModule = /** @class */ (function () {
    function AddStoryModule() {
    }
    AddStoryModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormsModule */]
            ],
            declarations: [__WEBPACK_IMPORTED_MODULE_2__add_story_component__["a" /* AddStoryComponent */]]
        })
    ], AddStoryModule);
    return AddStoryModule;
}());

//# sourceMappingURL=add-story.module.js.map

/***/ }),

/***/ "../../../../../src/app/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__chapter_chapter_component__ = __webpack_require__("../../../../../src/app/chapter/chapter.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__prose_prose_component__ = __webpack_require__("../../../../../src/app/prose/prose.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__chapter_id_chapter_id_component__ = __webpack_require__("../../../../../src/app/chapter-id/chapter-id.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__add_story_add_story_component__ = __webpack_require__("../../../../../src/app/add-story/add-story.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__home_home_component__ = __webpack_require__("../../../../../src/app/home/home.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: __WEBPACK_IMPORTED_MODULE_6__home_home_component__["a" /* HomeComponent */] },
    { path: 'prose', component: __WEBPACK_IMPORTED_MODULE_3__prose_prose_component__["a" /* ProseComponent */] },
    { path: 'chapter', component: __WEBPACK_IMPORTED_MODULE_0__chapter_chapter_component__["a" /* ChapterComponent */] },
    {
        path: 'chapter-id',
        component: __WEBPACK_IMPORTED_MODULE_4__chapter_id_chapter_id_component__["a" /* ChapterIdComponent */],
        children: [
            { path: 'partials/chapter_I.html', component: __WEBPACK_IMPORTED_MODULE_4__chapter_id_chapter_id_component__["a" /* ChapterIdComponent */] }
        ]
    },
    { path: 'addStory', component: __WEBPACK_IMPORTED_MODULE_5__add_story_add_story_component__["a" /* AddStoryComponent */] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["M" /* NgModule */])({
            imports: [__WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* RouterModule */].forRoot(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* RouterModule */]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());

//# sourceMappingURL=app-routing.module.js.map

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<app-sd-navbar></app-sd-navbar>\n<router-outlet></router-outlet>\n\n"

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
var AppComponent = /** @class */ (function () {
    function AppComponent(_firebaseService) {
        this._firebaseService = _firebaseService;
    }
    AppComponent.prototype.ngOnInit = function () {
    };
    AppComponent.prototype.ngOnDestroy = function () {
        this.subscription.unsubscribe();
    };
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
    return AppComponent;
    var _a;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_routing_module__ = __webpack_require__("../../../../../src/app/app-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__prose_prose_component__ = __webpack_require__("../../../../../src/app/prose/prose.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__chapter_chapter_component__ = __webpack_require__("../../../../../src/app/chapter/chapter.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__chapter_id_chapter_id_component__ = __webpack_require__("../../../../../src/app/chapter-id/chapter-id.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__shared_shared_module__ = __webpack_require__("../../../../../src/app/shared/shared.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__add_story_add_story_module__ = __webpack_require__("../../../../../src/app/add-story/add-story.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_angularfire2_database__ = __webpack_require__("../../../../angularfire2/database/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_angularfire2_firestore__ = __webpack_require__("../../../../angularfire2/firestore/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_angularfire2__ = __webpack_require__("../../../../angularfire2/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__environments_environment_prod__ = __webpack_require__("../../../../../src/environments/environment.prod.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__home_home_component__ = __webpack_require__("../../../../../src/app/home/home.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["M" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_7__prose_prose_component__["a" /* ProseComponent */],
                __WEBPACK_IMPORTED_MODULE_8__chapter_chapter_component__["a" /* ChapterComponent */],
                __WEBPACK_IMPORTED_MODULE_9__chapter_id_chapter_id_component__["a" /* ChapterIdComponent */],
                __WEBPACK_IMPORTED_MODULE_16__home_home_component__["a" /* HomeComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_0__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* RouterModule */],
                __WEBPACK_IMPORTED_MODULE_6__app_routing_module__["a" /* AppRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_11__add_story_add_story_module__["a" /* AddStoryModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_14_angularfire2__["a" /* AngularFireModule */].initializeApp(__WEBPACK_IMPORTED_MODULE_15__environments_environment_prod__["a" /* environment */].firebase),
                __WEBPACK_IMPORTED_MODULE_12_angularfire2_database__["b" /* AngularFireDatabaseModule */],
                // AngularFireAuthModule, imports firebase/auth, only needed for auth features
                __WEBPACK_IMPORTED_MODULE_13_angularfire2_firestore__["b" /* AngularFirestoreModule */],
                __WEBPACK_IMPORTED_MODULE_10__shared_shared_module__["a" /* SharedModule */].forRoot()
            ],
            providers: [],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/chapter-id/chapter-id.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".chapter {\r\n    margin-bottom: 0px;\r\n}\r\n.chapterTitle {\r\n    margin-top: 0px;\r\n    font-style: italic;\r\n}\r\na.return:link,\r\na.return:visited, \r\na.return:hover,\r\na.return:active {\r\n        text-decoration: none;\r\n        color: grey;\r\n    }\r\n.returnChapter {\r\n    float: right;\r\n    clear: both;\r\n}\r\n.float-left {\r\n    float: left;\r\n    width: 30em;\r\n    border-radius: 2em;\r\n    -webkit-box-shadow: .5em .5em 2em black;\r\n            box-shadow: .5em .5em 2em black;\r\n    margin: 1em;\r\n}\r\n.float-right {\r\n    float: right;\r\n    width: 25em;\r\n    border-radius: 2em;\r\n    -webkit-box-shadow: .5em .5em 2em black;\r\n            box-shadow: .5em .5em 2em black;\r\n    margin: 1em;\r\n}\r\n.indent {\r\n    text-indent: 2em;\r\n}\r\n.end {\r\n    float: left;\r\n      position: relative;\r\n     left: 50%;\r\n    width: 20em;\r\n    height: 20em;\r\n    border-radius: 50%;\r\n    -webkit-box-shadow: .5em .5em 2em black;\r\n            box-shadow: .5em .5em 2em black;\r\n    margin: 1em;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/chapter-id/chapter-id.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChapterIdComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_pluck__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/pluck.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ChapterIdComponent = /** @class */ (function () {
    function ChapterIdComponent() {
    }
    ChapterIdComponent.prototype.ngOnInit = function () {
    };
    ChapterIdComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
            selector: 'app-chapter-id',
            template: __webpack_require__("../../../../../src/app/chapter-id/partials/chapter_I.html"),
            styles: [__webpack_require__("../../../../../src/app/chapter-id/chapter-id.component.css")]
        })
        // angular multiple html pages and one component
        ,
        __metadata("design:paramtypes", [])
    ], ChapterIdComponent);
    return ChapterIdComponent;
}());

//# sourceMappingURL=chapter-id.component.js.map

/***/ }),

/***/ "../../../../../src/app/chapter-id/partials/chapter_I.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\r\n\r\n\r\n\r\n\r\n\r\n\r\n    <div class=\"story-panel story panel-margin\">\r\n        <span class=\"returnChapter\">\r\n            <a class=\"return\" [routerLink]=\"['/chapter']\">Back to Chapter list</a>\r\n        </span>\r\n        <h1 class=\"chapter\">Chapter I</h1>\r\n        <h4 class=\"chapterTitle\"> Tell Me You Got That Shot</h4>\r\n        <hr>\r\n  \r\n        <div class=\"indent\">\r\n                    Danica taps away on a machine trying to squeeze truth out of the complex electronics like sap from a giant maple, but not\r\n                    any sort of absolute truth. She seeks the inner truth felt by all sentient beings of a given demographic, in a particular\r\n                    range of income, that would make the story easy to sell to the Networks. Each twitch of her delicately manicured fingers,\r\n                    her augmented ageless dermis, perfect hair, all ready in case she needs to go in front of a camera. \r\n        </div>\r\n        <div class=\"indent\">\r\n                    She flicks her wrist on the controls and the footage scrolls by. The scene flickers in and out of focus, she tries toggles\r\n                    the three dimensional playback, centralized VR, holographic, then she stops. Her bored expression changing to one of sheer\r\n                    delight. She restarts the footage.\r\n        </div>\r\n        <div class=\"indent\">\r\n                    A holographic child standing in front of a flaming building flickers from the monitor. The wind whips her hair as she stands\r\n                    with that stare, the stare that focuses across a light year. The shot was amazing. There behind her was a flag, tattered,\r\n                    scorched, a death shroud draped over a wrecked ship. A prominent four pronged spear pointing at three stars flickers in the\r\n                    failing light of dusk. Once a banner to rally the righteous, but what is it now? Danica gets lost in the a thought forking\r\n                    in a thousand directions. She shakes it off and marvels at the footage. “This was no raid, there is real power behind this,”\r\n                    Danica says to herself. Walter will win the Terran Herald for this footage. She looks around trying to figure out where she\r\n                    is, the back of a ship, her ship, her news van. She raises her eyebrows, this is exactly why she never drives.\r\n        </div>\r\n        <div class=\"indent\">\r\n                    “I’ve got it, get in here,” she commands while simultaneously checking her appearance in the reflection of a nearby mirror\r\n                    mounted as if it were a monitor.\r\n        </div>\r\n        <div class=\"indent\">\r\n                    “I can’t,” Walter’s voice cracks over the com. While the ship was not large, the back control room was so isolated that you\r\n                    could be going through a type 4 jump point and not even notice.\r\n        </div>\r\n        <div class=\"indent\">\r\n                    “Get in here Jellyfish, now!” She rewinds the footage, again the young girl, dirty white clothes, bloody, dazed walks through\r\n                    a scene of devastation. The flag fluttering on the ground. Danica gets lost again.\r\n        </div>\r\n            \r\n    </div>\r\n\r\n    <div class=\"story-panel story panel-margin\">\r\n        <div class=\"indent\">\r\n            Walter looks around, the cockpit design gave a full view, thrust into the void, look straight up and you see stars, left,\r\n            right, between your feet, only stars. He notices a glare then realizes the local star was aft. He was vectored toward a jump\r\n            point that would be their escape from the madness and danger. Walter smirks at his half fish bowl and that he must be the\r\n            fish, “in a spaceship, spacebowl? Fishspace?” he grins. The view in this ship was superb, but Walter still didn’t like the\r\n            idea of leaving the cockpit. He disengages the drives, tries to make his trajectory as neutral as possible, and sees not\r\n            a ship, rock, or planet for what was probably a millions kilometers.\r\n\r\n        </div>\r\n\r\n\r\n\r\n        <div class=\"indent\">\r\n                He pulls the configuration lever. The ship slides from a vertical configuration to into a the horizontal, the single wing\r\n                blends into the cockpit and swivels around a rear tapered bay, bringing Walters cockpit seat alongside the one that was previously\r\n                below. The change brings the access door to the rear into view. He door opens and pulls his way to the back of the ship in\r\n                microgravity.\r\n        </div>\r\n            <div class=\"indent\">\r\n                 “I think we should go back.” Walter puts his fist on the bulkhead and bites his lip, “We could take on, maybe a dozen survivors.”\r\n\r\n            </div>\r\n          \r\n            <div class=\"indent\">\r\n                “And get shot down in that mess?”\r\n            </div>\r\n\r\n            <div class=\"indent\">\r\n                 He sees Danica still editing the footage, and gapes when he sees what she’s doing.\r\n            </div>\r\n            <div class=\"indent\">\r\n                    “What are you doing? That won’t work.”\r\n            </div>\r\n\r\n            <div class=\"indent\">\r\n             “Of course it will, the framing is perfect.”\r\n            </div>\r\n            <div class=\"indent\">\r\n                 “Framing? Framing, I got a pure multidimensional shot, with all subjects in the proper orientation and you cut it down to\r\n                a window.” Walter throws up his arms.\r\n            </div>\r\n            <div class=\"indent\">\r\n                “Shut up Walter, I need you to open up a feed to the station, I want to upload this before we miss the news.”\r\n            </div>\r\n            <div class=\"indent\">\r\n             “Make the news?”\r\n            </div>\r\n            <div class=\"indent\">\r\n             “Yes, make the sector news and if possible all the way to Earth.”\r\n            </div>\r\n            <div class=\"indent\">\r\n             “Dani this is a long form, there is no way the network will pick it up.”\r\n            </div>\r\n        <img src=\"..\\..\\..\\assets\\images\\prose\\danica-star\\1.jpg\" alt=\"\" class=\"float-left\" ng-model=\"items[0]\" ng-click=\"light.open()\">\r\n    </div>\r\n\r\n    <div class=\"story-panel story panel-margin\">\r\n\r\n            <div class=\"indent\">\r\n             “I’ve already made the adjustments, were going to go live here.” Danica turns and pulls down a computer station and powers it up.\r\n\r\n            </div>\r\n            <div class=\"indent\">\r\n                 “I’ve seen the footage too Dani, I don’t think this is live material. Dead and missing refugees won’t sell. We need to get\r\n                some combat footage.” The words die in his throat.\r\n            </div>\r\n            <div class=\"indent\">\r\n                “That’s not your problem.” Dani half listens to Walter as a holographic image appears from the system she powered up. The\r\n                image appears to be the solar system.\r\n            </div>\r\n            <div class=\"indent\">\r\n                 Walter pulls himself over to the transmitter and fires it up, a humming motor tells him the antenna is extending, and he\r\n                starts to see connection logs stream by on the screen. He sees the final authorization, then a warning, “System Emergency\r\n                data given top priority, all other traffic will be limited.”\r\n            </div>\r\n\r\n            <div class=\"indent\">\r\n                 “We have a problem.”\r\n            </div>\r\n            <div class=\"indent\">\r\n                 Walter sees Danica tap on a round keyboard, she pushes it out of sight and looks back at him, but she doesn’t seem to see\r\n                him.\r\n            </div>\r\n            <div class=\"indent\">\r\n                 “Dani, the EBS is shutting down local transmissions, we’ll need to get to a jump point to send  data.”\r\n            </div>\r\n            <div class=\"indent\">\r\n             “Get in the pilot seat.” Dani turns and reaches into the mess of wires and flicks a switch. Walter about to say something\r\n            watches the holographic display change to a navigational chart, it zooms out several times as Danica clicks a few keys and\r\n            he sees a red flashing spot appear.\r\n            </div>\r\n            <div class=\"indent\">\r\n             “What is that?”\r\n            </div>\r\n            <div class=\"indent\">\r\n             “Walter, get in the pilot seat” He knows that voice. The cold calm of a woman about to get them into serious danger.\r\n            </div>\r\n            <div class=\"indent\">\r\n             Walter puts his foot against the bulkhead, kicking off toward the front and pulls himself back into the cockpit. He flips\r\n            on the navigation as he straps in and sees a new waypoint.\r\n            </div>\r\n            <div class=\"indent\">\r\n             “Warp us there as fast as you can.” Danica’s voice squawks through the com.\r\n            </div>\r\n        <img src=\"..\\..\\..\\assets\\images\\prose\\danica-star\\2.jpg\" alt=\"\" class=\"float-right\" ng-click=\"light.open()\">\r\n</div>\r\n<div class=\"story-panel story panel-margin\">\r\n            <div class=\"indent\">\r\n             “Okay, okay,” Walter climbs into the pilot seat frantically throwing switches. The back hatch snaps shut and the cockpit\r\n            rotates to a horizontal layout. The hud flickers on showing a blip, he lines it up, and engages the Quantum drive. The ship\r\n            warps slightly in the direction of travel, then snaps back. Walter exhales, realizing he was holding his breath. “We’ll be\r\n            there in less than ten minutes.”\r\n            </div>\r\n            <div class=\"indent\">\r\n             “Dammit, it’ll all be over in two, make sure the cameras are ready.”\r\n            </div>\r\n            <div class=\"indent\">\r\n             “They all check out, all green and ready to record.”\r\n            </div>\r\n            <div class=\"indent\">\r\n             “Start recording now.”\r\n            </div>\r\n            <div class=\"indent\">\r\n             “Now?” Walter rolls his eyes.\r\n            </div>\r\n            <div class=\"indent\">\r\n             “Yes now Jellyfish and as soon as we’re out of warp get back here and establish an uplink.”\r\n            </div>\r\n            <div class=\"indent\">\r\n             “But I already told you…”\r\n            </div>\r\n            <div class=\"indent\">\r\n             “Do what I say and we might live through this.”\r\n            </div>\r\n            <div class=\"indent\">\r\n             Walter rolls his eyes and pulls up the cameras to double check the status.\r\n            </div>\r\n            <div class=\"indent\">\r\n             The ship comes out of Warp and Walter begins dodging debris. At first he tries to slow his speed, but the debris\r\n            field seems to be moving in all directions, like they flew into a gigantic explosion. The ship is struck multiple times.\r\n            </div>\r\n            <div class=\"indent\">\r\n             “I can’t fly through this.”\r\n            </div>\r\n            <div class=\"indent\">\r\n             “Follow this beacon.” Danica’s voice cracks over the com. He looks down at the dash. The display shows a haze flickering\r\n            in the holographic display that doesn’t match what he’s seeing outside. He turns the ship toward the signal. The debris seems\r\n            to clear and he sees the source. A damaged UEE fighter.\r\n            </div>\r\n            <div class=\"indent\">\r\n             “Where in the hell, what now?” Danica doesn’t answer, he flips over to ship to ship.\r\n            </div>\r\n            <div class=\"indent\">\r\n             “This is vessel KTRK-40 Terra, we are responding to your distress call.” He repeats the call and sees a lot of interference,\r\n            jamming maybe?\r\n            </div>\r\n    <img src=\"..\\..\\..\\assets\\images\\prose\\danica-star\\3.jpg\" alt=\"\" class=\"float-left\" ng-model=\"items[2]\" ng-click=\"light.open()\">\r\n</div>\r\n    \r\n<div class=\"story-panel story panel-margin\">\r\n\r\n            <div class=\"indent\">\r\n                “Civilian craft are barred from navigating this area,” the voice, at first, is straight military, but Walter almost drifts\r\n                into the fighter.\r\n            </div>\r\n            <div class=\"indent\">\r\n             “What the hell are you doing? One more meter and you’re going to find out how well your tin can MISC ship handles forty\r\n            millimeter shells.” Walter puts up his hands. He’s so close to the fighter he forgets for a moment he’s in another ship.\r\n            </div>\r\n            <div class=\"indent\">\r\n             “Hey, we’re just here to help.” He tries to back off using his knees.\r\n            </div>\r\n            <div class=\"indent\">\r\n             “Shit, is that a camera, I’ll give you ten seconds to get that thing out of my face.” Walter thinks he sees laser sites\r\n            dot his ship and cockpit.\r\n            </div>\r\n            <div class=\"indent\">\r\n             “Keep talking to him.” Dani’s smooth voice comes over the com, her voice was garbled from jamming as well.\r\n            </div>\r\n            <div class=\"indent\">\r\n             “Hey man it’s off, I swear I was just responding to your distress call.” Walter glances up as he’s talking and sees the\r\n            pilot name on the side. He flips the view over so Danica can see. “Damn what carrier are you based off of? That’s a serious\r\n            ship your in.”\r\n            </div>\r\n            <div class=\"indent\">\r\n             “I don’t need help from you. And if I see a camera drone come out I’ll shoot it down.” The same voice replies with the sort\r\n            of vitriol Walter was used to hearing.\r\n            </div>\r\n            <div class=\"indent\">\r\n             Walter looks around at the devastation, this is clearly a battlefield, and he gets a feeling. He takes in a breath to reply\r\n            and sputters when he sees the rear airlock open. He flips the wing camera around and sees Dani EVA with an emergency grapple.\r\n            She fires it before he can say anything. The magnetic claw snaps onto the fighter.\r\n            </div>\r\n            <div class=\"indent\">\r\n             “God dammit Dani I had the perfect idea!” Walter yells as the ship lurches around from the winch pulling the fighter toward them and causing their\r\n            ship to spin around.\r\n            </div>\r\n            <div class=\"indent\">\r\n             “I apologize. I was ready to fuck off, but my boss has other plans.” He says pulling the camera\r\n            controls over. He sets the fighter as a target and lets the computer handle the capture. He takes off his headset, the fighter\r\n            pilots angry reply almost audible to him. He stops for a moment, there appear to be no holes in the ship, he curves one eyebrow\r\n            in interest.\r\n            </div>\r\n    <img src=\"..\\..\\..\\assets\\images\\prose\\danica-star\\4.jpg\" alt=\"\" class=\"float-left\" ng-model=\"items[3]\" ng-click=\"light.open()\">\r\n</div>\r\n\r\n<div class=\"story-panel story panel-margin\">\r\n            \r\n            <div class=\"indent\">\r\n             He pulls himself behind the pilot seats and puts on his helmet, checks his O2, and flips the headset over to the ship. He\r\n            looks the the hatch window, the rear door was still open, the grapple cable stretching into the black.\r\n\r\n            </div>\r\n            <div class=\"indent\">\r\n             “Jelly, goddammit, respond.”\r\n            </div>\r\n            <div class=\"indent\">\r\n             “I was putting on my helmet, cameras are still up and running.”\r\n            </div>\r\n            <div class=\"indent\">\r\n             “Get a drone out and capture this debris field. I want as much footage as we can squeeze into these databanks”\r\n            </div>\r\n            <div class=\"indent\">\r\n             “May I ask why you are antagonizing a man, who may actually need help?” He listens to the background static and rolls his eyes.\r\n\r\n            </div>\r\n            <div class=\"indent\">\r\n             He reaches over, pulls the drone panel out and sets it to a good spot to his left. He taps the status, power, lens types,\r\n            picks three, and launches them. He watches as they start to map and record the debris field. His mouth slowly drops open\r\n            as he gazes at the beauty of perpetual drifting debris. Like it would go on forever.\r\n\r\n            </div>\r\n            <div class=\"indent\">\r\n             A series of rattling noises snaps his daydream, something was hitting the ship.\r\n            </div>\r\n            <div class=\"indent\">\r\n             “Well maybe not that angry.” Dani says over the comm. “Jelly could you inform the UEE pilot that we in fact have\r\n            no weapons on board.”\r\n            </div>\r\n            <div class=\"indent\">\r\n             Walter looks back at the comm panel and sees another com channel blinking. He flips it on.\r\n            </div>\r\n            <div class=\"indent\">\r\n             “... fine, if you wanna help, I’ll strip your ship of every usable part I can find and leave you here.”\r\n            </div>\r\n            <div class=\"indent\">\r\n             Walter looks around at the ship graveyard, the panels looked clear, and the drones still going. He depressurizes\r\n            the front cabin and opens the back hatch. The UEE pilot holds Dani's arm with his right hand while pointing a rifle at her with his left.\r\n            </div>\r\n            <div class=\"indent\">\r\n             Walter holds up his hands and slowly lets his body turn in place, “I’m not armed.”\r\n            </div>\r\n            <div class=\"indent\">\r\n             “Are you happy now commander?” Dani says, her smirk clearly audible over the comm.\r\n            </div>\r\n    <img src=\"..\\..\\..\\assets\\images\\prose\\danica-star\\5.jpg\" alt=\"\" class=\"float-left\" ng-model=\"items[4]\" ng-click=\"light.open()\">\r\n</div>\r\n\r\n<div class=\"story-panel story panel-margin\">\r\n\r\n            <div class=\"indent\">\r\n             “I told you already I am not a commander, I am Lieutenant Bullard…” Bullard says loudly at first, then calms his voice.\r\n            </div>\r\n            <div class=\"indent\">\r\n             Walter tries to place the accent, but he can’t quite nail it down. \r\n            </div>\r\n            <div class=\"indent\">\r\n             “We shouldn’t be exposing these instruments to a vacuum. We need to close the back hatch.”\r\n            </div>\r\n            <div class=\"indent\">\r\n             Bullard pushes Dani in using his fancy flight suit thrusters.\r\n            </div>\r\n            <div class=\"indent\">\r\n             “Any day now Walter.” Dani’s lays on a thick layer of sarcasm. Walter quickly closes the hatch. The ship begins to pressurize.\r\n            </div>\r\n            <div class=\"indent\">\r\n             “So you’re not a commander, commander, so what outfit are you in?” Dani says in a soft silky voice. Walter rolls his eyes.\r\n            She was like a bird of prey, that would attack in all conceivable ways until she achieved her objective.\r\n            </div>\r\n            <div class=\"indent\">\r\n             “I’m not allowed to divulge that information.” Bullard says.\r\n            </div>\r\n            <div class=\"indent\">\r\n             “Just making conversation baby. Jelly maybe we should get some food out. Are you hungry?” Dani takes off her helmet and\r\n            lets her hair rise up in the microgravity. Walter new this routine. Her hair was carefully prepared to not look like a matted\r\n            mess in zero G and after Walter pulls off his own helmet he smells a sweet spring like scent.\r\n\r\n            </div>\r\n            <div class=\"indent\">\r\n             “Sure.” Bullar answers distracted by the elaborate equipment crammed into the back of the ship.\r\n            </div>\r\n            <div class=\"indent\">\r\n             Walter smirks pulling himself over to the food bin. They really didn’t have anything to eat. If they were marooned for any\r\n            reason they would easily starve in days. He pulls out a few bars of something he didn’t bother to read and floats them to\r\n            Bullard.\r\n            </div>\r\n            <div class=\"indent\">\r\n             Bullard was holding his helmet and still looking around. He catches the bars, but doesn’t eat them.\r\n            </div>\r\n            <div class=\"indent\">\r\n             “So you’re reporters?”\r\n            </div>\r\n            <div class=\"indent\">\r\n             “I’m a reporter baby, Jelly is just a pilot and camera boy.” This would normally cause Walter to call Dani a bitch, but\r\n            this was far too entertaining.\r\n            </div>\r\n    <img src=\"..\\..\\..\\assets\\images\\prose\\danica-star\\6.jpg\" alt=\"\" class=\"float-left\" ng-model=\"items[5]\" ng-click=\"light.open()\">\r\n</div>\r\n\r\n<div class=\"story-panel story panel-margin\">\r\n\r\n            <div class=\"indent\">\r\n             “Is this a war zone.” Walter sputters.\r\n            </div>\r\n            <div class=\"indent\">\r\n             A light starts flashing on a nearby panel. Walter reaches out and taps the warning, the message log shows active radar sweeping\r\n            the area. He scrambles around, pulling himself into the front. Once in the cockpit he reaches to turn on the radar. A hand\r\n            out of nowhere grabs his wrist and inch from touching the switch, Bullard’s. Dani floats in behind him.\r\n            </div>\r\n            <div class=\"indent\">\r\n             “Whatever you do, don’t turn your radar on.” Walter looks at Bullard, his face was pale. He turns the pad so he can see\r\n            it and carefully sets the radar to passive. The HUD shows a half a dozen radar pings off in the distance. Dani pushes off\r\n            toward the back. Bullard looks around.\r\n\r\n            </div>\r\n            <div class=\"indent\">\r\n             “Do you have anything else transmitting?” He says this in a strong, but calm voice. Walter frantically starts turning systems\r\n            off and the lights. He sees the drones capturing footage and leaves them in a passive state and tells one to monitor them\r\n            from a distance. He powers the long range transmitter down, but luckily it was broadcasting a beam in the opposite direction.\r\n            “Everything's off, Dani!” The cockpit goes dark except for a few panels.\r\n            </div>\r\n            <div class=\"indent\">\r\n             “Everything's off back here too.” She yells back.\r\n            </div>\r\n            <div class=\"indent\">\r\n             “So those radar sources.” Walter points to them, there were only three now, and they showed only as a drifting dot. “How\r\n            do you know…?”\r\n            </div>\r\n            <div class=\"indent\">\r\n             “That those are bad guys?” Bullard taps a setting on the pad, a radar frequency graph starts showing each source.\r\n            </div>\r\n            <div class=\"indent\">\r\n             “That is not a search pattern you would see from any UEE craft. In fact, can you record this?”\r\n            </div>\r\n            <div class=\"indent\">\r\n             “Um, maybe, I don’t, oh, wait.” Walter pulls out a recording device and attaches it to the screen. “This won’t give you\r\n            data, but it will at least show you the image.”\r\n            </div>\r\n            <div class=\"indent\">\r\n             “Reduce your life support as much as possible.” Bullard says. Walter gets up and opens the life support panel and turns\r\n            it down. “Our scrubbers can handle three of us for about a week.”\r\n            </div>\r\n            <div class=\"indent\">\r\n             Bullard laughs out loud. “My man, I say our odds are ten to one we last the next minute.”\r\n            </div>\r\n    <img src=\"..\\..\\..\\assets\\images\\prose\\danica-star\\7.jpg\" alt=\"\" class=\"float-left\" ng-model=\"items[6]\" ng-click=\"light.open()\">\r\n</div>\r\n\r\n<div class=\"story-panel story panel-margin\">\r\n\r\n            <div class=\"indent\">\r\n             “I’ll take that bet!” Dani’s chimes in.\r\n            </div>\r\n            <div class=\"indent\">\r\n             Bullard and Walter turn. A faint light lit Dani and the editing station. She had a small single monitor on and typing at\r\n            full speed, the rat tat tat coming from a very odd keyboard. Bullard pulls himself to the back and Walter follows.\r\n            </div>\r\n            <div class=\"indent\">\r\n             Walter gapes, there it was, this was Dani’s secret. The reason she wouldn’t let Walter snoop around her equipment. They must be in some\r\n             serious trouble.\r\n            </div>\r\n            <div class=\"indent\">\r\n             “Where did you get that?” Bullard says suddenly alarmed. Walter looks at the keyboard, the keys looked way off to be used\r\n            by a human hand, but Dani had no issue.\r\n            </div>\r\n            <div class=\"indent\">\r\n             “What outfit are you with?” She stops and turns her head careful to flip her hair around. Walter never once witnessed Dani\r\n            honestly seduce a man or woman. The whole thing was a calculated act that made Walter uncomfortable, but the pay was too\r\n            good to quit. The act, was always for the story.\r\n            </div>\r\n            <div class=\"indent\">\r\n             “I’m not going to tell you anything about my outfit.” Bullard acts as if he were being interrogated by the enemy. Dani to\r\n            a lot of military personnel was the enemy. Walter felt relief that this soldier didn’t want to put a bullet in her head.\r\n            </div>\r\n            <div class=\"indent\">\r\n             “Oh she already knows.” Walter, playing his part, says seeing right through the sultry exterior Dani had on display. He just realized she took\r\n            the top of her space suit off and wrapped it around her waist leaving a skimpy t-shirt on.\r\n            </div>\r\n            <div class=\"indent\">\r\n             Bullard wasn’t fazed and Walter was getting bored with this.\r\n            </div>\r\n            <div class=\"indent\">\r\n             “What do you mean she already knows?” Bullard turns to Walter with his rifle.\r\n            </div>\r\n            <div class=\"indent\">\r\n             “Wait.” Walter puts up his hand.\r\n            </div>\r\n            <div class=\"indent\">\r\n             “What is it Jelly?” Dani asks, but doesn’t want an answer, she’s already typing away.\r\n            </div>\r\n            <div class=\"indent\">\r\n             “We survived a minute.” Walter glances at his watch. Bullard shakes his head.\r\n            </div>\r\n            <div class=\"indent\">\r\n             “What the hell language are you typing that novel in.” Walter looks at the screen. The language looks like a mishmash of\r\n            alien languages, shorthand?\r\n            </div>\r\n            <div class=\"indent\">\r\n             “So what outfit am I from?” Bullard asks.\r\n            </div>\r\n    <img src=\"..\\..\\..\\assets\\images\\prose\\danica-star\\8.jpg\" alt=\"\" class=\"float-left\" ng-model=\"items[7]\" ng-click=\"light.open()\">\r\n</div>\r\n\r\n<div class=\"story-panel story panel-margin\">\r\n\r\n            <div class=\"indent\">\r\n             “Well the only carrier in the system would be the old P One G. I hope that’s not what this field is made up of.”\r\n            </div>\r\n            <div class=\"indent\">\r\n             Bullard drifts forward and looks out the front. “No, I’m pretty sure they jumped out.”\r\n            </div>\r\n            <div class=\"indent\">\r\n             “Oh that’s not surprising, Conrad always turns tail when the fight is more than he can…” Dani stops when a loud clicking\r\n            noise strike, a round being chambered into a rifle. Bullard pointing it at Dani. She stops typing and doesn’t move.\r\n            </div>\r\n            <div class=\"indent\">\r\n             “I should have killed you the moment I knew.” Bullard looks down the site at Dani.\r\n            </div>\r\n            <div class=\"indent\">\r\n             “Kill us now and you won’t have anyone to assist you.” Dani says.\r\n            </div>\r\n            <div class=\"indent\">\r\n             “You think I need assistance from the likes of you?”\r\n            </div>\r\n            <div class=\"indent\">\r\n             Dani slowly turns with her hands up and looks at him, “You’re Lieutenant Jacques Bullard, first in your class from Terran\r\n            Naval academy, 2940. You served on Essex stationed in Davien, and I’m guessing that’s when you met Conrad.”\r\n            </div>\r\n            <div class=\"indent\">\r\n             “That is Captain Rhadamanthys.”\r\n            </div>\r\n            <div class=\"indent\">\r\n             “He recruited you for his new assignment. He was to take a Pegasus class carrier and patrol the Nyx to Oberon stretch.”\r\n            Without looking, She taps a screen nearby and it turns on.\r\n            </div>\r\n            <div class=\"indent\">\r\n             “I got your distress call, coded, very difficult to detect and meant for military contact, not a reporter. I had your ship\r\n            SID, I ran it and figured out who you were.”\r\n            </div>\r\n            <div class=\"indent\">\r\n             “You can get coded signals?” Bullard asks disbelieving.\r\n            </div>\r\n            <div class=\"indent\">\r\n                 “I can get part of the message, SIDs and locations. Not the message itself.”\r\n            </div>\r\n            <div class=\"indent\">\r\n             Bullard looks around in alarm.\r\n            </div>\r\n            <div class=\"indent\">\r\n             An alarm from the front causes everyone to jump. Walter moves to the front so fast he passes the pilot seat and hits the\r\n            curved window. Bullard grasps onto a handrail by the hatch and reaches out to Walter, helping pull him to the seat. They\r\n            didn’t need to read the alarm, they could see a large vessel approaching the debris. The claw like silhouette was unmistakably\r\n            Vanduul, searchlights scan the field as it moves through. Arms periodically reaching out and pulling in debris.\r\n            </div>\r\n    <img src=\"..\\..\\..\\assets\\images\\prose\\danica-star\\9.jpg\" alt=\"\" class=\"float-left\" ng-model=\"items[8]\" ng-click=\"light.open()\">\r\n</div>\r\n\r\n<div class=\"story-panel story panel-margin\">\r\n\r\n            <div class=\"indent\">\r\n             “We can’t let them do this.” Bullard says looking out the window.\r\n            </div>\r\n            <div class=\"indent\">\r\n             “We better hope they don’t find us as salvage.”\r\n            </div>\r\n            <div class=\"indent\">\r\n             “No you don’t understand. There are vital things in this field, things I need to salvage.”\r\n            </div>\r\n            <div class=\"indent\">\r\n             “You came alone? Didn’t you?” Dani yells so Bullard can hear, but he doesn’t answer.\r\n            </div>\r\n            <div class=\"indent\">\r\n             Walter looks at the scanner, he doesn’t see anything.\r\n            </div>\r\n            <div class=\"indent\">\r\n             “Lieutenant?” Walter says. Bullard comes over and checks the scanner settings.\r\n            </div>\r\n            <div class=\"indent\">\r\n             “Do you have any other scanning equipment on board?” Bullard asks. Walter shakes his head.\r\n\r\n            </div>\r\n            <div class=\"indent\">\r\n             “It would be for the best.” Bullard looks at Walter as he mutters.\r\n            </div>\r\n            <div class=\"indent\">\r\n             She reaches over and turns something on. A black tentacle like appendage reaches out from under the console. Walter and\r\n            Bullard react, Walter ducks off to the side, while Bullard aims his rifle again.\r\n            </div>\r\n            <div class=\"indent\">\r\n             “But what we really need is some cover, something that looks natural.” The appendage has a interface at it’s tip, Dani starts to sort of massage it. A\r\n            humming noise starts up. Walter and Bullard turn around to see a haze begin to surround the ship.\r\n            </div>\r\n            <div class=\"indent\">\r\n             “They won’t see us in this.” She floats into the cockpit looking out. Bullard and Walter look out. The ship seems to be\r\n            engulfed in a black mist.\r\n            </div>\r\n            <div class=\"indent\">\r\n             “Now Lieutenant, would you like to give me a story or not?” Bullard looks at her with a furrowed brow. Walter looks at Dani\r\n            trying to read her actions.\r\n\r\n            </div>\r\n            <div class=\"indent\">\r\n             “If not. I would like you to leave my ship, I’ll give you some supplies and a power pack, and send you on your way.” Dani\r\n            says matter of fact, while pulling her space suit back on. Walter feels sick, he wants to stop her, tell her no you can’t\r\n            just throw someone out like that, but nothing comes out of his mouth.\r\n            </div>\r\n            <div class=\"indent\">\r\n             “Jellyfish, don’t just stand there. Get everything back online and the drones.”\r\n            </div>\r\n            <div class=\"indent\">\r\n             “You have drones?” Bullard asks trying to recover.\r\n            </div>\r\n    <img src=\"..\\..\\..\\assets\\images\\prose\\danica-star\\10.jpg\" alt=\"\" class=\"float-left\" ng-model=\"items[9]\" ng-click=\"light.open()\">\r\n</div>\r\n\r\n<div class=\"story-panel story panel-margin\">\r\n\r\n            <div class=\"indent\">\r\n             “Camera, they’re on automatic mapping the area. I suspect one is following that ship.” He looks, but the haze blocks his\r\n            view.\r\n            </div>\r\n            <div class=\"indent\">\r\n             “Well Lieutenant I really appreciate you stopping by, but we really must get back to work.” Dani heads for the terminal\r\n            again and pulls the round keyboard up.\r\n            </div>\r\n            <div class=\"indent\">\r\n             “What do you want.” Bullard’s mumble hardly audible.\r\n            </div>\r\n            <div class=\"indent\">\r\n             “I’m sorry dear what was that.” She zips her suit up and reaches for her helmet.\r\n            </div>\r\n            <div class=\"indent\">\r\n             “What is it you want to know.” He says. Walter looks at Bullard floating lamely nearby, defeated.\r\n            </div>\r\n            <div class=\"indent\">\r\n             “Now, was that so hard to say?” Dani doesn’t break her typing stride.\r\n            </div>\r\n            <div class=\"indent\">\r\n             An alarm goes off in the front cabin. Walter looks at the alarm and reads. “Collision?” Suddenly out of the haze a mutli\r\n            fingered metal arm swoops in and grasps the ship. A loud crunching sound comes from the top. “Dani get your goddamn helmet\r\n            back on!” Walter yells into the back. He glances back seeing Dani reaching for her helmet, when the ship lurches. He’s slammed\r\n            into the floor and almost knocked out.\r\n            </div>\r\n            <div class=\"indent\">\r\n             Sparks start to shoot out of every panel in the cockpit. Walter pulls himself toward the main panel, hits the emergency\r\n            button and pulls the main breaker. The sparks cease, but it wasn’t soon enough to prevent all hatches and locks from opening.\r\n            He grips the bottom of the pilot’s seat to prevent himself being pulled into space.\r\n            </div>\r\n            <div class=\"indent\">\r\n             After the whoosh of air, followed by silence broken only by his breathing, he looks into the back. Just then a light shines\r\n            into the high visibility cockpit. He frantically pulls himself out of view. He looks around to see Dani still typing away.\r\n            Her helmet looks like it was barely on, but she managed not to be pulled out the back when the bay opened up. Walters eye’s\r\n            were still adjusting to the light, but he has a feeling that Bullard was no longer on the ship. He was in his spacesuit,\r\n            a lot better one than Walter had, and he had space combat training. He will be alright.\r\n            </div>\r\n            <div class=\"indent\">\r\n             Walter pulls himself over to Dani and tries to avoid being seen. They had no place to hide. He puts a hand on Dani’s shoulder.\r\n            She was typing. He could hear the typing sound resonate through her suit into his. She doesn’t respond.\r\n            </div>\r\n            \r\n            <div class=\"indent\">\r\n             “This is insane Dani. Is the story really more important than our lives.” He knows she can’t hear him and even if they were\r\n            in a nice quiet room it wouldn’t matter. She would ignore him, but now she turns. He can barely make out her frightened face.\r\n            He could see her hand on a long breaker arm. This was all her equipment connected to its own power source. Her features became\r\n            clearer in the semi darkness and Walter could see the fear, but also a resolve. His mouth drops open looking back at the\r\n            breaker.\r\n            </div>\r\n            <div class=\"indent\">\r\n             Walter takes a deep breath pushing back the swelling wave of sorrow. This meant their deaths. He gathers all of his strength\r\n            and nods his head. He feels his hand being grasped by Dani. A sweet gesture, then he realizes she’s pulling his hand up to\r\n            the breaker. Together they pull.\r\n            </div>\r\n            <div class=\"indent\">\r\n             The back of the ship springs to alive. Life unlike that of a human ship. There were organic tentacles pulsating with energy\r\n            reaching to the top of the ship. One tentacle has a wire harness at the end and jabs itself into the array’s maintenance\r\n            port. Now the ship is alive as well, powered by it’s distant organic cousin.\r\n            </div>\r\n            <div class=\"indent\">\r\n             Dani was sending it all, unedited, no touch up, no makeup. He had no idea she was this brave. He looks at the transmission\r\n              and see the first sentence, short and to the point. We Are At War. He feels a lump in his throat.\r\n            </div>\r\n            <div class=\"indent\">\r\n             The ship moves wildly to port. Walter and Dani are thrown against the opposite bulkhead. He grabs onto Dani holding tight.\r\n            They bounce into a cargo net that popped out of its cargo container and fall halfway out of the ship.\r\n\r\n            </div>\r\n            <div class=\"indent\">\r\n             Walter sees streaks of light cutting through the ship. The cargo net comes loose and they float away from the ship, helpless,\r\n            watching the ship get torn apart by the giant Vanduul fang of a ship. The light goes out in the back and the transmission\r\n            array floats off in pieces.\r\n            </div>\r\n            <div class=\"indent\">\r\n             He feels Dani grip his arm. He looks at her, then notices she’s pointing. She was yelling something, he hears her muffled\r\n            voice through her hands gripping his suit. Was she panicking? No she was asking something. Where?\r\n            </div>\r\n            <div class=\"indent\">\r\n             Walter looks at their dead ship and toward the back he follows a cord that hangs limp in space connected to nothing.\r\n            </div>\r\n            <div class=\"indent\">\r\n             A spotlight shines on them. They see it closing, For a moment Walter thinks they are firing at them, but the rounds\r\n            were coming from the wrong angle. A bright flash, and explosion, debris hitting them rattling against their spacesuits.\r\n            </div>\r\n            <div class=\"indent\">\r\n             The Vanduul ship flies away. Walter follows its progress then notices a pursuer. Too small to be a ship, it was one of their\r\n            drones. Walter laughs out a tear. “Go you little bastard, someone is going to find the best combat footage ever!”\r\n\r\n            </div>\r\n            <div class=\"indent\">\r\n             Walter could tell it was hard to breath. The suit was starting to constrict against his body, it was cold, very cold. Dani’s\r\n            grip on his arm was growing soft. He looks again for his drone. He finds it, still chasing the Vanduul ship. But there was\r\n            something else. A bright light, it was a missile, and as the Vanduul ship tries to dodge he sees an explosion ripping through\r\n            the Vanduul. The wounded ship spins for a few seconds then explodes in a spectacular display.\r\n            </div>\r\n            <div class=\"indent\">\r\n             “You got that you little piece of shit! You got that shot!” Walter passes out.\r\n\r\n            </div>\r\n    <img src=\"..\\..\\..\\assets\\images\\prose\\danica-star\\TheEnd.jpg\" alt=\"\" class=\"end\" ng-model=\"items[10]\" ng-click=\"light.open()\">\r\n    </div>\r\n</div>\r\n\r\n\r\n\r\n\r\n<!-- <script type=\"text/ng-template\" class=\"\" id=\"modalimg.html\">\r\n    <div>\r\n        <img src=\"..\\..\\..\\assets\\images\\prose\\danica-star\\TheEnd.jpg\" alt=\"\" ng-click=\"light.close()\" class=\"img-lightBox-1\">\r\n  </div>\r\n</script> -->"

/***/ }),

/***/ "../../../../../src/app/chapter/chapter.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "a.chapterLink:link,\r\na.chapterLink:visited, \r\na.chapterLink:hover,\r\na.chapterLink:active {\r\n        text-decoration: none;\r\n        color: grey;\r\n    }\r\n.chapterLink {\r\n    background-color: rgb(243, 255, 238);\r\n  \r\n    margin:  2em 3em 1em 2em;\r\n    padding: 2em 3em 1em 2em;\r\n}\r\n.comment {\r\n    background-color: rgb(255, 255, 255);\r\n    min-width: auto;\r\n    margin:  2em;\r\n    padding: 1em;\r\n    border-radius: 2em;\r\n     display:inline-block;\r\n}\r\n.float-left {\r\n    float: left;\r\n    min-width: auto;\r\n    border-radius: 2em;\r\n}\r\n.float-right {\r\n    float: right;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/chapter/chapter.component.html":
/***/ (function(module, exports) {

module.exports = "\n<div class=\"chapterLink\">\n<h3>Interplanetary Correspondent Danica Star</h3>\n\n      <div *ngFor=\"let story of stories\">\n        Chapter {{story.chapter}}:\n        <a class=\"nav-link\" [routerLink]=\"['../chapter-id/partials/chapter_' + story.chapter + '.html']\">{{story.title}}</a>\n      </div>\n      <i>\n        There is a bug on this page. You may need to reload if you see no links.\n      </i>\n</div>\n\n"

/***/ }),

/***/ "../../../../../src/app/chapter/chapter.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChapterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_firebase_firebase_service__ = __webpack_require__("../../../../../src/app/shared/firebase/firebase.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ChapterComponent = /** @class */ (function () {
    function ChapterComponent(_firebaseService) {
        this._firebaseService = _firebaseService;
    }
    ChapterComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._firebaseService.getStories().subscribe(function (stories) {
            _this.stories = stories;
            console.log(_this.stories);
        });
    };
    ChapterComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
            selector: 'app-chapter',
            template: __webpack_require__("../../../../../src/app/chapter/chapter.component.html"),
            styles: [__webpack_require__("../../../../../src/app/chapter/chapter.component.css")]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__shared_firebase_firebase_service__["a" /* FirebaseService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__shared_firebase_firebase_service__["a" /* FirebaseService */]) === "function" && _a || Object])
    ], ChapterComponent);
    return ChapterComponent;
    var _a;
}());

//# sourceMappingURL=chapter.component.js.map

/***/ }),

/***/ "../../../../../src/app/home/home.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"content-panel panel-default\">\n\n\n  <p>\n    Welcome to my site. \n  </p>\n    <p>\n    My original idea was to post some screenplays and a few short stories on here, but after I completed a novel based on Star Citizen \n    at the beginning of 2017, I was faced with the daunting task of rewriting it, fixing\n    plot holes, and reorganizing chapters. I just didn't feel like I had the spare time to properly focus on a rewrite. \n    so I decided to work on my website and start posting content there.\n    </p>\n    <p>\n      The rabit hole was a lot deeper than I thought. While I could have made a static site I wanted to come up with something\n      a bit more complex. I started with Angular since that was what I was studying. \n    </p>\n    <p>\n      Now nearly a year on from the novel I think I have something fuctional enough to put online. The first story about Danica Star\n      was born from a short story idea based on the encounter of a UEE pilot with a journalist in deep space. I have five chapters \n      so far that I'll post as a serial and hopefully get back to writing more instead of banging my head against the Angular wall.\n    </p>\n    <p>\n      I also have a political thriller of sorts and a couple of other ideas. Once I figure out the CSS I'll put up some short screenplays.\n    </p>\n\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
            selector: 'app-home',
            template: __webpack_require__("../../../../../src/app/home/home.component.html"),
            styles: [__webpack_require__("../../../../../src/app/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());

//# sourceMappingURL=home.component.js.map

/***/ }),

/***/ "../../../../../src/app/operators.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_add_observable_throw__ = __webpack_require__("../../../../rxjs/_esm5/add/observable/throw.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_catch__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/catch.js");
// rxjs



// ngrx
// import '@ngrx/core/add/operator/select';
//# sourceMappingURL=operators.js.map

/***/ }),

/***/ "../../../../../src/app/prose/prose.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/prose/prose.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid container-padding cloak-flicker\">\n  <div class=\"row\">\n    <div class=\"content-panel panel-default\">\n      <h1>Prose</h1>\n\n      <p>\n        In the future I will add a list of Stories, treatments, and fan fiction.\n      \n        So far there isn't much here, just a serial fan fiction based on Star Citizen.\n        </p>\n\n   \n\n          \n              <a class=\"nav-link\" [routerLink]=\"['/chapter']\">Interplanetary Correspondent Danica Star</a>\n      \n       \n\n\n\n    </div>\n\n    <!-- \"Other arrangements could be devised according to the tastes or views of those who like allegory or topical reference. But\n                                I cordially dislike allegory in all its manifestations, and always have done so since I grew old and wary enough to detect\n                                its presence. I much prefer history, true or feigned, with its varied applicability to the thought and experience of readers.\n                                I think that many confuse 'applicability' with 'allegory'; but the one resides in the freedom of the reader, and the other\n                                in the purposed domination of the author.\" -->\n    <blockquote class=\"content-panel blockquote blockquote-reverse blue quote\">\n      <i class=\"fa fa-quote-left\" style=\"color:rgba(0, 0, 0, 0.363)\" aria-hidden=\"true\"></i>\n\n\n      <p class=\"FirstLetter pad-left\">\n        I much prefer history, true or feigned, with its varied applicability to the thought and experience of readers. I think that\n        many confuse 'applicability' with 'allegory'; but the one resides in the freedom of the reader, and the other in\n        the purposed domination of the author.\n\n        <i class=\"fa fa-quote-right float-right\" style=\"color:rgba(0, 0, 0, 0.363)\" aria-hidden=\"true\"></i>\n      </p>\n      <br />\n      <footer class=\"blockquote-footer text-right\">JRR Tolkien\n        <cite title=\"Source Title\">(1966). \"Foreward to the Second Edition\", The Lord Of The Rings</cite>\n      </footer>\n    </blockquote>\n  </div>\n</div>"

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


var ProseComponent = /** @class */ (function () {
    function ProseComponent(_firebaseService) {
        this._firebaseService = _firebaseService;
    }
    ProseComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._firebaseService.getStories().subscribe(function (stories) {
            _this.stories = stories;
        });
    };
    ProseComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["o" /* Component */])({
            selector: 'app-story',
            template: __webpack_require__("../../../../../src/app/prose/prose.component.html"),
            styles: [__webpack_require__("../../../../../src/app/prose/prose.component.css")],
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__shared_firebase_firebase_service__["a" /* FirebaseService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__shared_firebase_firebase_service__["a" /* FirebaseService */]) === "function" && _a || Object])
    ], ProseComponent);
    return ProseComponent;
    var _a;
}());

//# sourceMappingURL=prose.component.js.map

/***/ }),

/***/ "../../../../../src/app/shared/firebase/firebase.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FirebaseService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__ = __webpack_require__("../../../../angularfire2/database/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_operator_filter__ = __webpack_require__("../../../../rxjs/_esm5/operator/filter.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_do__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/do.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_angularfire2_firestore__ = __webpack_require__("../../../../angularfire2/firestore/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var FirebaseService = /** @class */ (function () {
    function FirebaseService(db, route, afs) {
        this.db = db;
        this.route = route;
        this.afs = afs;
        this.editState = false;
        this.storiesCollection = this.afs.collection('prose', function (ref) { return ref.orderBy('title', 'asc'); });
        this.stories = this.storiesCollection.snapshotChanges().map(function (changes) {
            return changes.map(function (a) {
                var data = a.payload.doc.data();
                data.id = a.payload.doc.id;
                // https://github.com/angular/angularfire2/blob/master/docs/rtdb/querying-lists.md
                return data;
            });
        });
    }
    // https://www.youtube.com/watch?v=gUmItHaVL2w Traversy CRUD
    // https://www.youtube.com/watch?v=cwqeyOFcaoA step 2
    // https://www.youtube.com/watch?v=onVp-8BYUSM&t=959s step 3
    FirebaseService.prototype.getStories = function () {
        return this.stories;
    };
    FirebaseService.prototype.getStory = function (story) {
        return this.afs.doc("prose/" + story.id);
    };
    FirebaseService.prototype.addStory = function (story) {
        this.storiesCollection.add(story);
    };
    FirebaseService.prototype.deleteStory = function (story) {
        this.storyDoc = this.afs.doc("prose/" + story.id);
        this.storyDoc.delete();
    };
    FirebaseService.prototype.updateStory = function (story) {
        this.storyDoc = this.afs.doc("prose/" + story.id);
        this.storyDoc.update(story);
    };
    FirebaseService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__["a" /* AngularFireDatabase */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__["a" /* AngularFireDatabase */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_6_angularfire2_firestore__["a" /* AngularFirestore */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6_angularfire2_firestore__["a" /* AngularFirestore */]) === "function" && _c || Object])
    ], FirebaseService);
    return FirebaseService;
    var _a, _b, _c;
}());

//# sourceMappingURL=firebase.service.js.map

/***/ }),

/***/ "../../../../../src/app/shared/navbar/navbar.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/shared/navbar/navbar.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-lg navbar-light bg-light\">\n  <div class=\"container-fluid\">\n    <a class=\"navbar-brand\" href=\"/\">\n      <img src=\"/assets/brand/r_logo.svg\" width=\"60\" height=\"60\" alt=\"\">\n    </a>\n    <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarNav\" aria-controls=\"navbarNav\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n        <span class=\"navbar-toggler-icon\"></span>\n    </button>\n      <div class=\"collapse navbar-collapse\" id=\"navbarNav\">\n        <ul class=\"nav navbar-nav content-nav-panel\">\n            <!-- <li class=\"nav-item\">\n                  <a class=\"nav-link\" [routerLink]=\"['/']\" [routerLinkActive]=\"['router-link-active']\" [routerLinkActiveOptions]=\"{exact:true}\">HOME</a>\n                  </li> -->\n        <!-- <li class=\"nav-item\">\n                 <a class=\"nav-link\" [routerLink]=\"['/about']\" [routerLinkActive]=\"['router-link-active']\" [routerLinkActiveOptions]=\"{exact:true}\">About</a>\n                <span class=\"nav-link\" title=\"Disabled\">About</span>\n            </li> -->\n            <li class=\"nav-item\"  [routerLinkActive]=\"['router-link-active']\" [routerLinkActiveOptions]=\"{exact:true}\">\n                <a class=\"nav-link\" [routerLink]=\"['prose']\">Prose</a>\n            </li>\n                      \n                        <li class=\"nav-item\" [routerLinkActive]=\"['router-link-active']\" [routerLinkActiveOptions]=\"{exact:true}\">\n                            <a class=\"nav-link\" [routerLink]=\"['addStory']\">Add Story</a>\n                        </li>\n        <!--    <li class=\"nav-item\">\n               <a class=\"nav-link\" [routerLink]=\"['/login']\" [routerLinkActive]=\"['router-link-active']\" [routerLinkActiveOptions]=\"{exact:true}\">login</a>\n                <span class=\"nav-link\" title=\"Disabled\">Login</span>\n            </li> -->\n        </ul>\n      </div>\n  </div>\n</nav>\n"

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
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

/**
 * This class represents the navigation bar component.
 */
var NavbarComponent = /** @class */ (function () {
    function NavbarComponent() {
    }
    NavbarComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
            selector: 'app-sd-navbar',
            template: __webpack_require__("../../../../../src/app/shared/navbar/navbar.component.html"),
            styles: [__webpack_require__("../../../../../src/app/shared/navbar/navbar.component.css")],
        }),
        __metadata("design:paramtypes", [])
    ], NavbarComponent);
    return NavbarComponent;
}());

//# sourceMappingURL=navbar.component.js.map

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
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






/**
 * Do not specify providers for modules that might be imported by a lazy loaded module.
 */
var SharedModule = /** @class */ (function () {
    function SharedModule() {
    }
    SharedModule_1 = SharedModule;
    SharedModule.forRoot = function () {
        return {
            ngModule: SharedModule_1,
            providers: []
        };
    };
    SharedModule = SharedModule_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* NgModule */])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */], __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* RouterModule */]],
            declarations: [__WEBPACK_IMPORTED_MODULE_4__toolbar_toolbar_component__["a" /* ToolbarComponent */], __WEBPACK_IMPORTED_MODULE_5__navbar_navbar_component__["a" /* NavbarComponent */]],
            exports: [__WEBPACK_IMPORTED_MODULE_4__toolbar_toolbar_component__["a" /* ToolbarComponent */], __WEBPACK_IMPORTED_MODULE_5__navbar_navbar_component__["a" /* NavbarComponent */],
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */], __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */], __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* RouterModule */]]
        })
    ], SharedModule);
    return SharedModule;
    var SharedModule_1;
}());

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
var ToolbarComponent = /** @class */ (function () {
    function ToolbarComponent() {
    }
    ToolbarComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
            selector: 'app-sd-toolbar',
            template: __webpack_require__("../../../../../src/app/shared/toolbar/toolbar.component.html"),
            styles: [__webpack_require__("../../../../../src/app/shared/toolbar/toolbar.component.css")]
        })
    ], ToolbarComponent);
    return ToolbarComponent;
}());

//# sourceMappingURL=toolbar.component.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.prod.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
var environment = {
    production: true,
    firebase: {
        apiKey: 'AIzaSyBozQYiZaONaSEv_wzj57OSwdjOQ617rpI',
        authDomain: 'rostasan-70d22.firebaseapp.com',
        databaseURL: 'https://rostasan-70d22.firebaseio.com',
        projectId: 'rostasan-70d22',
        storageBucket: 'rostasan-70d22.appspot.com',
        messagingSenderId: '513645768348'
    }
};
//# sourceMappingURL=environment.prod.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
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
// https://github.com/angular/angular-cli/issues/8798
// none of the fixes work except for adding the const platform =
// so weird, after the second load it works bah
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map