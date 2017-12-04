webpackJsonp([0],{

/***/ 124:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__anthony_api_service__ = __webpack_require__(310);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__anthony_api_service__["a"]; });

//# sourceMappingURL=shared.js.map

/***/ }),

/***/ 131:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__home_home__ = __webpack_require__(254);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__home_home__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__service_request_list_service_request_list__ = __webpack_require__(231);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_1__service_request_list_service_request_list__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__service_request_service_request__ = __webpack_require__(577);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_2__service_request_service_request__["a"]; });



//# sourceMappingURL=pages.js.map

/***/ }),

/***/ 142:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	return new Promise(function(resolve, reject) { reject(new Error("Cannot find module '" + req + "'.")); });
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 142;

/***/ }),

/***/ 143:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ClosedRequestsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_google_maps__ = __webpack_require__(226);
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
 * Generated class for the ClosedRequestsPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var ClosedRequestsPage = (function () {
    function ClosedRequestsPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    ClosedRequestsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ClosedRequestsPage');
        this.loadMap();
    };
    ClosedRequestsPage.prototype.loadMap = function () {
        var _this = this;
        var mapOptions = {
            camera: {
                target: {
                    lat: 43.0741904,
                    lng: -89.3809802
                },
                zoom: 18,
                tilt: 30
            }
        };
        this.map = __WEBPACK_IMPORTED_MODULE_2__ionic_native_google_maps__["a" /* GoogleMaps */].create('canvas', mapOptions);
        console.log("canvas created");
        // Wait the MAP_READY before using any methods.
        this.map.one(__WEBPACK_IMPORTED_MODULE_2__ionic_native_google_maps__["b" /* GoogleMapsEvent */].MAP_READY)
            .then(function () {
            console.log('Map is ready!');
            // Now you can use all methods safely.
            _this.map.addMarker({
                title: 'Ionic',
                icon: 'blue',
                animation: 'DROP',
                position: {
                    lat: 43.0741904,
                    lng: -89.3809802
                }
            })
                .then(function (marker) {
                marker.on(__WEBPACK_IMPORTED_MODULE_2__ionic_native_google_maps__["b" /* GoogleMapsEvent */].MARKER_CLICK)
                    .subscribe(function () {
                    alert('clicked');
                });
            });
        });
    };
    return ClosedRequestsPage;
}());
ClosedRequestsPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-closed-requests',template:/*ion-inline-start:"C:\work\nodejs\AnthonyFS\src\pages\closed-requests\closed-requests.html"*/'<!--\n  Generated template for the ClosedRequestsPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar primary>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-buttons end> \n      <button ion-button primary (click)="createNewRequest()">\n        <ion-icon name="add-circle"></ion-icon>\n      </button>\n    </ion-buttons>\n    <ion-title>Closed Requests</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n</ion-content>\n'/*ion-inline-end:"C:\work\nodejs\AnthonyFS\src\pages\closed-requests\closed-requests.html"*/,
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]) === "function" && _b || Object])
], ClosedRequestsPage);

var _a, _b;
//# sourceMappingURL=closed-requests.js.map

/***/ }),

/***/ 186:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	return new Promise(function(resolve, reject) { reject(new Error("Cannot find module '" + req + "'.")); });
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 186;

/***/ }),

/***/ 229:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InProgressRequestsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(21);
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
 * Generated class for the InProgressRequestsPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var InProgressRequestsPage = (function () {
    function InProgressRequestsPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    InProgressRequestsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad InProgressRequestsPage');
    };
    return InProgressRequestsPage;
}());
InProgressRequestsPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-in-progress-requests',template:/*ion-inline-start:"C:\work\nodejs\AnthonyFS\src\pages\in-progress-requests\in-progress-requests.html"*/'<!--\n  Generated template for the InProgressRequestsPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar primary>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-buttons end> \n      <button ion-button primary (click)="createNewRequest()">\n        <ion-icon name="add-circle"></ion-icon>\n      </button>\n    </ion-buttons>\n    <ion-title>In progress Requests</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n</ion-content>\n'/*ion-inline-end:"C:\work\nodejs\AnthonyFS\src\pages\in-progress-requests\in-progress-requests.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
], InProgressRequestsPage);

//# sourceMappingURL=in-progress-requests.js.map

/***/ }),

/***/ 230:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RequestListTabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__closed_requests_closed_requests__ = __webpack_require__(143);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__in_progress_requests_in_progress_requests__ = __webpack_require__(229);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__service_request_list_service_request_list__ = __webpack_require__(231);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ionic_angular__ = __webpack_require__(21);
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
 * Generated class for the RequestListTabsPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var RequestListTabsPage = (function () {
    function RequestListTabsPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.tab1Root = __WEBPACK_IMPORTED_MODULE_2__service_request_list_service_request_list__["a" /* ServiceRequestListPage */];
        this.tab2Root = __WEBPACK_IMPORTED_MODULE_1__in_progress_requests_in_progress_requests__["a" /* InProgressRequestsPage */];
        this.tab3Root = __WEBPACK_IMPORTED_MODULE_0__closed_requests_closed_requests__["a" /* ClosedRequestsPage */];
    }
    RequestListTabsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad RequestListTabsPage');
    };
    return RequestListTabsPage;
}());
RequestListTabsPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["n" /* Component */])({
        selector: 'page-request-list-tabs',template:/*ion-inline-start:"C:\work\nodejs\AnthonyFS\src\pages\request-list-tabs\request-list-tabs.html"*/'<ion-tabs>\n  <ion-tab [root]="tab1Root" tabTitle="Open" tabIcon="open" tabsHideOnSubPages="true"></ion-tab>\n  <ion-tab [root]="tab2Root" tabTitle="In Progress" tabIcon="warning" tabsHideOnSubPages="true"></ion-tab>\n  <ion-tab [root]="tab3Root" tabTitle="Closed" tabIcon="close-circle" tabsHideOnSubPages="true"></ion-tab>\n</ion-tabs>'/*ion-inline-end:"C:\work\nodejs\AnthonyFS\src\pages\request-list-tabs\request-list-tabs.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["g" /* NavParams */]])
], RequestListTabsPage);

//# sourceMappingURL=request-list-tabs.js.map

/***/ }),

/***/ 231:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ServiceRequestListPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_shared__ = __webpack_require__(124);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pages__ = __webpack_require__(131);
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
 * Generated class for the ServiceRequestListPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var ServiceRequestListPage = (function () {
    function ServiceRequestListPage(navCtrl, navParams, anthonyApi, loadingController) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.anthonyApi = anthonyApi;
        this.loadingController = loadingController;
    }
    ServiceRequestListPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        console.log('ionViewDidLoad ServiceRequestListPage');
        var loader = this.loadingController.create({
            content: 'Getting Service Requests...'
            //spinner: 'dots'
        });
        loader.present().then(function () {
            _this.anthonyApi.getServiceRequests().then(function (data) {
                _this.items = data;
                loader.dismiss();
            });
        });
        console.log(this.items);
    };
    ServiceRequestListPage.prototype.itemTapped = function ($event, item) {
        console.log(item);
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__pages__["c" /* ServiceRequestPage */], item);
    };
    ServiceRequestListPage.prototype.createNewRequest = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__pages__["c" /* ServiceRequestPage */]);
    };
    return ServiceRequestListPage;
}());
ServiceRequestListPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-service-request-list',template:/*ion-inline-start:"C:\work\nodejs\AnthonyFS\src\pages\service-request-list\service-request-list.html"*/'<!--\n  Generated template for the ServiceRequestListPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar primary>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-buttons end> \n      <button ion-button primary (click)="createNewRequest()">\n        <ion-icon name="add-circle"></ion-icon>\n      </button>\n    </ion-buttons>\n    <ion-title>Service Requests</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n    <ion-list>\n          <ion-item-sliding *ngFor="let item of items" >\n          <ion-item (click)="itemTapped($event,item)">\n              <h2 >{{item.wo_no}}</h2>\n              <p>{{item.subject}}</p>\n          </ion-item>\n            <ion-item-options>\n              <button ion-button color="light" icon-start>\n                <ion-icon name="more"></ion-icon>\n                More\n              </button>\n              <button ion-button color="primary" icon-start>\n                <ion-icon name="done-all"></ion-icon>\n                Done\n              </button>\n              <button ion-button color="secondary" icon-start>\n                <ion-icon name="send"></ion-icon>\n                Mail\n              </button>\n          </ion-item-options>\n        </ion-item-sliding>\n    </ion-list>\n</ion-content>\n\n<!--\n<ion-footer >\n  <ion-toolbar>\n    <ion-row>\n      <ion-col >\n        <button ion-button color="light" icon-start>\n          <ion-icon name="refresh-circle"></ion-icon>\n        </button>\n      </ion-col>\n\n      <ion-col >\n      <button ion-button color="light" icon-start>\n          <ion-icon name="funnel"></ion-icon>\n        </button>\n      </ion-col>\n\n      <ion-col >\n      <button ion-button color="light" icon-start>\n          <ion-icon name="download"></ion-icon>\n        </button>\n      </ion-col>\n      \n    </ion-row>\n  </ion-toolbar>\n</ion-footer>\n-->'/*ion-inline-end:"C:\work\nodejs\AnthonyFS\src\pages\service-request-list\service-request-list.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_2__shared_shared__["a" /* AnthonyApi */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* LoadingController */]])
], ServiceRequestListPage);

//# sourceMappingURL=service-request-list.js.map

/***/ }),

/***/ 254:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pages__ = __webpack_require__(131);
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
 * Generated class for the HomePage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var HomePage = (function () {
    function HomePage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    HomePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad HomePage');
    };
    HomePage.prototype.itemTapped = function ($event, item) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__pages__["b" /* ServiceRequestListPage */], item);
    };
    HomePage.prototype.goToRequests = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__pages__["b" /* ServiceRequestListPage */]);
    };
    return HomePage;
}());
HomePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-home',template:/*ion-inline-start:"C:\work\nodejs\AnthonyFS\src\pages\home\home.html"*/'<!--\n  Generated template for the HomePage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar primary>\n  	<button ion-button menuToggle>\n  		<ion-icon name="menu"></ion-icon>\n  	</button>\n    <ion-title>Anthony Field Service</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n\n  <ion-card>\n    <ion-card-content>\n      Welcome to Anthony Mobile App service. Click on the side menu to explore.\n    </ion-card-content>\n  </ion-card>\n</ion-content>\n<!--\n<ion-footer >\n  <ion-toolbar >\n    <ion-row>\n      <ion-col >\n        <button ion-button color="light" icon-start>\n          <ion-icon name="flag"></ion-icon>\n        </button>\n      </ion-col>\n\n      <ion-col >\n      <button ion-button color="light" icon-start>\n          <ion-icon name="mail"></ion-icon>\n        </button>\n      </ion-col>\n\n      <ion-col >\n      <button ion-button color="light" icon-start>\n          <ion-icon name="alert"></ion-icon>\n        </button>\n      </ion-col>\n      \n    </ion-row>\n  </ion-toolbar>\n</ion-footer>\n-->'/*ion-inline-end:"C:\work\nodejs\AnthonyFS\src\pages\home\home.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
], HomePage);

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 256:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NotificationsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(21);
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
 * Generated class for the NotificationsPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var NotificationsPage = (function () {
    function NotificationsPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    NotificationsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad NotificationsPage');
    };
    return NotificationsPage;
}());
NotificationsPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-notifications',template:/*ion-inline-start:"C:\work\nodejs\AnthonyFS\src\pages\notifications\notifications.html"*/'<!--\n  Generated template for the NotificationsPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar primary>\n  	<button ion-button menuToggle>\n  		<ion-icon name="menu"></ion-icon>\n  	</button>\n    <ion-title>Notifications</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n</ion-content>\n'/*ion-inline-end:"C:\work\nodejs\AnthonyFS\src\pages\notifications\notifications.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
], NotificationsPage);

//# sourceMappingURL=notifications.js.map

/***/ }),

/***/ 257:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FlaggedPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(21);
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
 * Generated class for the FlaggedPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var FlaggedPage = (function () {
    function FlaggedPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    FlaggedPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad FlaggedPage');
    };
    return FlaggedPage;
}());
FlaggedPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-flagged',template:/*ion-inline-start:"C:\work\nodejs\AnthonyFS\src\pages\flagged\flagged.html"*/'<!--\n  Generated template for the FlaggedPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar primary>\n  	<button ion-button menuToggle>\n  		<ion-icon name="menu"></ion-icon>\n  	</button>\n    <ion-title>Flagged Items</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n</ion-content>\n'/*ion-inline-end:"C:\work\nodejs\AnthonyFS\src\pages\flagged\flagged.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
], FlaggedPage);

//# sourceMappingURL=flagged.js.map

/***/ }),

/***/ 258:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeTabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__flagged_flagged__ = __webpack_require__(257);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__notifications_notifications__ = __webpack_require__(256);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_home__ = __webpack_require__(254);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ionic_angular__ = __webpack_require__(21);
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
 * Generated class for the HomeTabsPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var HomeTabsPage = (function () {
    function HomeTabsPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.tab1Root = __WEBPACK_IMPORTED_MODULE_2__home_home__["a" /* HomePage */];
        this.tab2Root = __WEBPACK_IMPORTED_MODULE_1__notifications_notifications__["a" /* NotificationsPage */];
        this.tab3Root = __WEBPACK_IMPORTED_MODULE_0__flagged_flagged__["a" /* FlaggedPage */];
    }
    HomeTabsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad HomeTabsPage');
    };
    return HomeTabsPage;
}());
HomeTabsPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["n" /* Component */])({
        selector: 'page-home-tabs',template:/*ion-inline-start:"C:\work\nodejs\AnthonyFS\src\pages\home-tabs\home-tabs.html"*/'\n<ion-tabs>\n  <ion-tab [root]="tab1Root" tabTitle="Home" tabIcon="home"></ion-tab>\n  <ion-tab [root]="tab2Root" tabTitle="Notifications" tabIcon="notifications"></ion-tab>\n  <ion-tab [root]="tab3Root" tabTitle="Flagged" tabIcon="flag"></ion-tab>\n</ion-tabs>'/*ion-inline-end:"C:\work\nodejs\AnthonyFS\src\pages\home-tabs\home-tabs.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["g" /* NavParams */]])
], HomeTabsPage);

//# sourceMappingURL=home-tabs.js.map

/***/ }),

/***/ 261:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(262);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(266);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 266:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__pages_closed_requests_closed_requests__ = __webpack_require__(143);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__pages_in_progress_requests_in_progress_requests__ = __webpack_require__(229);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pages_open_requests_open_requests__ = __webpack_require__(309);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pages_request_list_tabs_request_list_tabs__ = __webpack_require__(230);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_notifications_notifications__ = __webpack_require__(256);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_flagged_flagged__ = __webpack_require__(257);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_home_tabs_home_tabs__ = __webpack_require__(258);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_platform_browser__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_ionic_angular__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__angular_http__ = __webpack_require__(125);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__app_component__ = __webpack_require__(578);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_pages__ = __webpack_require__(131);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__ionic_native_status_bar__ = __webpack_require__(259);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__ionic_native_splash_screen__ = __webpack_require__(260);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__ionic_native_google_maps__ = __webpack_require__(226);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};















//import { RestapiServiceProvider } from '../providers/restapi-service/restapi-service';

var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_8__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_11__app_component__["a" /* AnthonyFS */],
            __WEBPACK_IMPORTED_MODULE_12__pages_pages__["a" /* HomePage */],
            __WEBPACK_IMPORTED_MODULE_6__pages_home_tabs_home_tabs__["a" /* HomeTabsPage */],
            __WEBPACK_IMPORTED_MODULE_4__pages_notifications_notifications__["a" /* NotificationsPage */],
            __WEBPACK_IMPORTED_MODULE_5__pages_flagged_flagged__["a" /* FlaggedPage */],
            __WEBPACK_IMPORTED_MODULE_3__pages_request_list_tabs_request_list_tabs__["a" /* RequestListTabsPage */],
            __WEBPACK_IMPORTED_MODULE_2__pages_open_requests_open_requests__["a" /* OpenRequestsPage */],
            __WEBPACK_IMPORTED_MODULE_1__pages_in_progress_requests_in_progress_requests__["a" /* InProgressRequestsPage */],
            __WEBPACK_IMPORTED_MODULE_0__pages_closed_requests_closed_requests__["a" /* ClosedRequestsPage */],
            __WEBPACK_IMPORTED_MODULE_12__pages_pages__["b" /* ServiceRequestListPage */],
            __WEBPACK_IMPORTED_MODULE_12__pages_pages__["c" /* ServiceRequestPage */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_7__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_9_ionic_angular__["c" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_11__app_component__["a" /* AnthonyFS */]),
            __WEBPACK_IMPORTED_MODULE_10__angular_http__["c" /* HttpModule */]
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_9_ionic_angular__["a" /* IonicApp */]],
        entryComponents: [
            __WEBPACK_IMPORTED_MODULE_11__app_component__["a" /* AnthonyFS */],
            __WEBPACK_IMPORTED_MODULE_12__pages_pages__["a" /* HomePage */],
            __WEBPACK_IMPORTED_MODULE_12__pages_pages__["b" /* ServiceRequestListPage */],
            __WEBPACK_IMPORTED_MODULE_3__pages_request_list_tabs_request_list_tabs__["a" /* RequestListTabsPage */],
            __WEBPACK_IMPORTED_MODULE_2__pages_open_requests_open_requests__["a" /* OpenRequestsPage */],
            __WEBPACK_IMPORTED_MODULE_1__pages_in_progress_requests_in_progress_requests__["a" /* InProgressRequestsPage */],
            __WEBPACK_IMPORTED_MODULE_0__pages_closed_requests_closed_requests__["a" /* ClosedRequestsPage */],
            __WEBPACK_IMPORTED_MODULE_4__pages_notifications_notifications__["a" /* NotificationsPage */],
            __WEBPACK_IMPORTED_MODULE_5__pages_flagged_flagged__["a" /* FlaggedPage */],
            __WEBPACK_IMPORTED_MODULE_6__pages_home_tabs_home_tabs__["a" /* HomeTabsPage */],
            __WEBPACK_IMPORTED_MODULE_12__pages_pages__["c" /* ServiceRequestPage */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_13__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_14__ionic_native_splash_screen__["a" /* SplashScreen */],
            __WEBPACK_IMPORTED_MODULE_15__ionic_native_google_maps__["a" /* GoogleMaps */],
            { provide: __WEBPACK_IMPORTED_MODULE_8__angular_core__["v" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_9_ionic_angular__["b" /* IonicErrorHandler */] }
        ]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 309:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OpenRequestsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(21);
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
 * Generated class for the OpenRequestsPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var OpenRequestsPage = (function () {
    function OpenRequestsPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    OpenRequestsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad OpenRequestsPage');
    };
    return OpenRequestsPage;
}());
OpenRequestsPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-open-requests',template:/*ion-inline-start:"C:\work\nodejs\AnthonyFS\src\pages\open-requests\open-requests.html"*/'<!--\n  Generated template for the OpenRequestsPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar primary>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-buttons end> \n      <button ion-button primary (click)="createNewRequest()">\n        <ion-icon name="add-circle"></ion-icon>\n      </button>\n    </ion-buttons>\n    <ion-title>Open Requests</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n</ion-content>\n'/*ion-inline-end:"C:\work\nodejs\AnthonyFS\src\pages\open-requests\open-requests.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
], OpenRequestsPage);

//# sourceMappingURL=open-requests.js.map

/***/ }),

/***/ 310:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AnthonyApi; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(125);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs__ = __webpack_require__(311);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AnthonyApi = (function () {
    function AnthonyApi(http) {
        this.http = http;
        this.baseUrl = 'http://34.229.200.128:8080/anthony_api/rest/serviceRequests';
        this.currentItem = {};
    }
    AnthonyApi.prototype.getServiceRequests = function () {
        var _this = this;
        return new Promise(function (resolve) {
            _this.http.get("" + _this.baseUrl)
                .subscribe(function (res) { return resolve(res.json()); });
        });
    };
    AnthonyApi.prototype.getTournamentData = function (tourneyId) {
        var _this = this;
        return this.http.get("" + this.baseUrl)
            .map(function (response) {
            _this.currentItem = response.json();
            return _this.currentItem;
        });
    };
    AnthonyApi.prototype.getCurrentRequest = function () {
        return this.currentItem;
    };
    AnthonyApi.prototype.createAuthorizationHeader = function (headers) {
        headers.append('Authorization', 'Basic ' +
            btoa('a20e6aca-ee83-44bc-8033-b41f3078c2b6:c199f9c8-0548-4be79655-7ef7d7bf9d20'));
    };
    AnthonyApi.prototype.postServiceRequest = function (item) {
        var _this = this;
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        //this.createAuthorizationHeader(headers);
        headers.append('Content-Type', 'application/json');
        //var content = JSON.stringify(item);
        return new Promise(function (resolve) {
            _this.http.post("" + _this.baseUrl, item, { headers: headers })
                .subscribe(function (res) { return resolve(res.json()); });
        });
    };
    AnthonyApi.prototype.putServiceRequest = function (item) {
        var _this = this;
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        //this.createAuthorizationHeader(headers);
        headers.append('Content-Type', 'application/json');
        //var content = JSON.stringify(item);
        return new Promise(function (resolve) {
            _this.http.put("" + _this.baseUrl, item, { headers: headers })
                .subscribe(function (res) { return resolve(res.json()); });
        });
    };
    return AnthonyApi;
}());
AnthonyApi = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]])
], AnthonyApi);

//# sourceMappingURL=anthony-api.service.js.map

/***/ }),

/***/ 577:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ServiceRequestPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_shared__ = __webpack_require__(124);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_barcode_scanner__ = __webpack_require__(255);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


//import * as _ from 'lodash';


/**
 * Generated class for the ServiceRequestPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var ServiceRequestPage = (function () {
    function ServiceRequestPage(navCtrl, navParams, anthonyApi, barcodeScanner, toastController, loadingController) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.anthonyApi = anthonyApi;
        this.barcodeScanner = barcodeScanner;
        this.toastController = toastController;
        this.loadingController = loadingController;
        this.item = this.navParams.data;
        console.log(this.item);
        this.editVar = true;
    }
    ServiceRequestPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ServiceRequestPage');
    };
    ServiceRequestPage.prototype.editRequest = function ($event, item) {
        //this.navCtrl.push(ServiceRequestEditPage,item);
        this.editVar = true;
    };
    ServiceRequestPage.prototype.scan = function () {
        var _this = this;
        this.barcodeScanner.scan().then(function (barcodeData) {
            _this.item.wo_no = barcodeData.text;
        }, function (err) {
            alert("Error scanning: " + err);
        });
    };
    ServiceRequestPage.prototype.saveRequest = function ($event, item) {
        if (item.id) {
            this.postRequest(item);
        }
        else {
            this.putRequest(item);
        }
    };
    ServiceRequestPage.prototype.putRequest = function (item) {
        var _this = this;
        console.log('Post Request');
        console.log(item);
        var loader = this.loadingController.create({
            content: 'Saving...'
            //spinner: 'dots'
        });
        loader.present().then(function () {
            _this.anthonyApi.putServiceRequest(item).then(function (data) {
                _this.msg = data;
                loader.dismiss();
                var toast = _this.toastController.create({
                    message: _this.msg.message,
                    duration: 2000,
                    position: 'bottom'
                });
                toast.present();
                _this.navCtrl.popToRoot();
                console.log(_this.msg);
            });
        });
    };
    ServiceRequestPage.prototype.postRequest = function (item) {
        var _this = this;
        console.log('Post Request');
        console.log(item);
        var loader = this.loadingController.create({
            content: 'Saving...'
            //spinner: 'dots'
        });
        loader.present().then(function () {
            _this.anthonyApi.postServiceRequest(item).then(function (data) {
                _this.msg = data;
                loader.dismiss();
                var toast = _this.toastController.create({
                    message: _this.msg.message,
                    duration: 2000,
                    position: 'bottom'
                });
                toast.present();
                _this.navCtrl.popToRoot();
                console.log(_this.msg);
            });
        });
    };
    return ServiceRequestPage;
}());
ServiceRequestPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-service-request',template:/*ion-inline-start:"C:\work\nodejs\AnthonyFS\src\pages\service-request\service-request.html"*/'<!--\n  Generated template for the ServiceRequestPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n    <ion-navbar hide-tabs>\n        <ion-title>Service Request: {{item.id}}</ion-title>\n        <ion-buttons end>\n            <button ion-button primary (click)="editRequest($event,item)" *ngIf="!editVar">\n    		<ion-icon name="create"></ion-icon>\n    	</button>\n            <button ion-button primary (click)="saveRequest($event,item)" *ngIf=\'editVar\'>\n    		Save\n    	</button>\n        </ion-buttons>\n    </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n    <ion-card id="details">\n        <ion-card-header primary>\n            Details\n        </ion-card-header>\n        <ion-card-content>\n            <ion-row>\n\n                <ion-col col-11>\n                    <ion-item>\n                        <ion-label>Work Order</ion-label>\n                        <ion-input type="text" [readonly]="!editVar" [(ngModel)]="item.wo_no" value=\'{{item.wo_no}}\'></ion-input>\n                    </ion-item>\n                </ion-col>\n                <ion-col col-1 bottom large>\n                    <ion-icon bottom name="barcode" *ngIf="editVar" (click)="scan()"></ion-icon>\n                </ion-col>\n\n            </ion-row>\n            <ion-row>\n                <ion-col>\n                    <ion-item>\n                        <ion-label stacked>Service Type</ion-label>\n                        <ion-input *ngIf="!editVar" type="text" [readonly]="!editVar" value=\'{{item.service_type}}\'></ion-input>\n                        <ion-select *ngIf="editVar" [(ngModel)]="item.service_type" interface=\'action-sheet\'>\n                            <ion-option>On Site Field Service</ion-option>\n                            <ion-option>Parts Replacement Only</ion-option>\n                            <ion-option>Phone Technical Support</ion-option>\n                            <ion-option>Others</ion-option>\n                        </ion-select>\n                    </ion-item>\n\n                </ion-col>\n            </ion-row>\n\n            <ion-row>\n                <ion-col>\n                    <ion-item>\n                        <ion-label stacked>Failure Type</ion-label>\n                        <ion-input *ngIf="!editVar" type="text" [readonly]="!editVar" value=\'{{item.failure_type}}\'></ion-input>\n                        <ion-select *ngIf="editVar" [(ngModel)]="item.failure_type" interface=\'action-sheet\'>\n                            <ion-option>Door</ion-option>\n                            <ion-option>Frame</ion-option>\n                            <ion-option>LED</ion-option>\n                            <ion-option>Unknown</ion-option>\n                        </ion-select>\n                    </ion-item>\n                </ion-col>\n            </ion-row>\n            \n            <ion-row>\n                <ion-col>\n                    <ion-item>\n                        <ion-label stacked>Issue</ion-label>\n                        <ion-input type="text" [readonly]="!editVar" [(ngModel)]="item.subject" value=\'{{item.subject}}\'></ion-input>\n                    </ion-item>\n                </ion-col>\n            </ion-row>\n            <ion-row>\n                <ion-col>\n                    <ion-item>\n                        <ion-label stacked>Description</ion-label>\n                        <ion-textarea type="text" [readonly]="!editVar" [(ngModel)]="item.description" value=\'{{item.description}}\'></ion-textarea>\n                    </ion-item>\n                </ion-col>\n            </ion-row>\n            \n            <ion-card>\n                <ion-card-header>Basic Contact Information</ion-card-header>\n                <ion-card-content>\n                    <ion-row>\n                        <ion-col>\n                            <ion-item>\n                                <ion-label stacked>First Name</ion-label>\n                                <ion-input type="text" [readonly]="!editVar" \n                                [(ngModel)]="item.first_name" value=\'{{item.first_name}}\'></ion-input>\n                            </ion-item>\n                        </ion-col>\n                        <ion-col>\n                            <ion-item>\n                                <ion-label stacked>Last Name</ion-label>\n                                <ion-input type="text" [readonly]="!editVar" \n                                [(ngModel)]="item.last_name" value=\'{{item.last_name}}\'></ion-input>\n                            </ion-item>\n                        </ion-col>\n                    </ion-row>\n                    <ion-row>\n                        <ion-col>\n                            <ion-item>\n                                <ion-label stacked>Company</ion-label>\n                                <ion-input type="text" [readonly]="!editVar" \n                                [(ngModel)]="item.company" value=\'{{item.company}}\'></ion-input>\n                            </ion-item>\n                        </ion-col>\n                        <ion-col>\n                            <ion-item>\n                                <ion-label stacked>AAN</ion-label>\n                                <ion-input type="text" [readonly]="!editVar" \n                                [(ngModel)]="item.anthony_account_no" value=\'{{item.anthony_account_no}}\'></ion-input>\n                            </ion-item>\n                        </ion-col>\n                    </ion-row>\n                    <ion-row>\n                        <ion-col>\n                            <ion-item>\n                                <ion-label stacked>Phone</ion-label>\n                                <ion-input type="tel" [readonly]="!editVar" \n                                [(ngModel)]="item.phone" value=\'{{item.phone}}\'></ion-input>\n                            </ion-item>\n                        </ion-col>\n                        <ion-col>\n                            <ion-item>\n                                <ion-label stacked>Email</ion-label>\n                                <ion-input type="email" [readonly]="!editVar" \n                                [(ngModel)]="item.email" value=\'{{item.email}}\'></ion-input>\n                            </ion-item>\n                        </ion-col>\n                    </ion-row>\n                </ion-card-content>    \n            </ion-card>\n            \n\n        </ion-card-content>\n    </ion-card>\n\n    <ion-card id="location">\n        <ion-card-header>\n            Service Location Information\n        </ion-card-header>\n        <ion-card-content>\n            <ion-row>\n                <ion-col>\n                    <ion-item>\n                        <ion-label stacked>Address</ion-label>\n                        <ion-input type="text" [readonly]="!editVar" [(ngModel)]="item.address" value=\'{{item.address}}\'></ion-input>\n                    </ion-item>\n                </ion-col>\n            </ion-row>\n            <ion-row>\n                <ion-col>\n                    <ion-item>\n                        <ion-label stacked>City</ion-label>\n                        <ion-input type="text" [readonly]="!editVar" [(ngModel)]="item.city" value=\'{{item.city}}\'></ion-input>\n                    </ion-item>\n                </ion-col>\n                <ion-col>\n                    <ion-item>\n                        <ion-label stacked>State</ion-label>\n                        <ion-input type="text" [readonly]="!editVar" [(ngModel)]="item.state" value=\'{{item.state}}\'></ion-input>\n                    </ion-item>\n                </ion-col>\n            </ion-row>\n            <ion-row>\n                <ion-col>\n                    <ion-item>\n                        <ion-label stacked>Country</ion-label>\n                        <ion-input type="text" [readonly]="!editVar" [(ngModel)]="item.country" value=\'{{item.country}}\'></ion-input>\n                    </ion-item>\n                </ion-col>\n                <ion-col>\n                    <ion-item>\n                        <ion-label stacked>Zip Code</ion-label>\n                        <ion-input type="text" [readonly]="!editVar" [(ngModel)]="item.zip_code" value=\'{{item.zip_code}}\'></ion-input>\n                    </ion-item>\n                </ion-col>\n            </ion-row>\n            <ion-row>\n                <ion-col>\n                    <ion-item>\n                        <ion-label stacked>Site Contact</ion-label>\n                        <ion-input type="text" [readonly]="!editVar" [(ngModel)]="item.site_contact" value=\'{{item.site_contact}}\'></ion-input>\n                    </ion-item>\n                </ion-col>\n                <ion-col>\n                    <ion-item>\n                        <ion-label stacked>Phone</ion-label>\n                        <ion-input type="tel" [readonly]="!editVar" [(ngModel)]="item.phone" value=\'{{item.phone}}\'></ion-input>\n                    </ion-item>\n                </ion-col>\n            </ion-row>\n        </ion-card-content>\n    </ion-card>\n\n    <ion-card id="attach">\n        <ion-card-header>\n            Attachments\n        </ion-card-header>\n        <ion-card-content>\n            <ion-list>\n                <ion-item>\n                    Attachment list items\n                </ion-item>\n            </ion-list>\n        </ion-card-content>\n    </ion-card>\n\n    <ion-card id="findings">\n        <ion-card-header>\n            Findings\n        </ion-card-header>\n        <ion-card-content>\n            <ion-row>\n                <ion-col>\n                    <ion-item>\n                        <ion-label stacked>Finding upon arrival</ion-label>\n                        <ion-input type="text" [readonly]="!editVar" [(ngModel)]="item.findings" value=\'{{item.findings}}\'></ion-input>\n                    </ion-item>\n                </ion-col>\n            </ion-row>\n            <ion-row>\n                <ion-col>\n                    <ion-item>\n                        <ion-label stacked>Work performed</ion-label>\n                        <ion-input type="text" [readonly]="!editVar" [(ngModel)]="item.work_performed" value=\'{{item.work_performed}}\'></ion-input>\n                    </ion-item>\n                </ion-col>\n            </ion-row>\n        </ion-card-content>\n    </ion-card>\n\n    <ion-card id="readings">\n        <ion-card-header>\n            Readings\n        </ion-card-header>\n        <ion-card-content>\n            <ion-row>\n                <ion-col>\n                    <ion-item>\n                        <ion-label stacked>Store temperature<br>(ambient)</ion-label>\n                        <ion-input type="text" [readonly]="!editVar" [(ngModel)]="item.temperature" value=\'{{item.temperature}}\'></ion-input>\n                    </ion-item>\n                </ion-col>\n\n                <ion-col>\n                    <ion-item>\n                        <ion-label stacked>Store relative <br>humidity</ion-label>\n                        <ion-input type="text" [readonly]="!editVar" [(ngModel)]="item.humidity" value=\'{{item.humidity}}\'></ion-input>\n                    </ion-item>\n                </ion-col>\n            </ion-row>\n\n            <ion-row>\n                <ion-col>\n                    <ion-item>\n                        <ion-label stacked>Case(box) temperature</ion-label>\n                        <ion-input type="text" [readonly]="!editVar" [(ngModel)]="item.temperature" value=\'{{item.temperature}}\'></ion-input>\n                    </ion-item>\n                </ion-col>\n\n                <ion-col>\n                    <ion-item>\n                        <ion-label stacked>Frame readings</ion-label>\n                        <ion-input type="text" [readonly]="!editVar" [(ngModel)]="item.frame_readings" value=\'{{item.humidity}}\'></ion-input>\n                    </ion-item>\n                </ion-col>\n            </ion-row>\n\n            <ion-row>\n                <ion-col>\n                    <ion-item>\n                        <ion-label stacked>Anthony model #</ion-label>\n                        <ion-input type="text" [readonly]="!editVar" [(ngModel)]="anthony_model_no" value=\'{{item.temperature}}\'></ion-input>\n                    </ion-item>\n                </ion-col>\n\n                <ion-col>\n                    <ion-item>\n                        <ion-label stacked>Date manufactured</ion-label>\n                        <ion-datetime displayFormat="MM/DD/YYYY" [(ngModel)]="item.date_manufactured" ></ion-datetime>\n                    </ion-item>\n                </ion-col>\n\n                <ion-col>\n                    <ion-item>\n                        <ion-label stacked>Case manufacture</ion-label>\n                        <ion-datetime displayFormat="MM/DD/YYYY" [(ngModel)]="item.case_manufacture"></ion-datetime>\n                    </ion-item>\n                </ion-col>\n            </ion-row>\n            <ion-card>\n                <ion-card-content>\n                    <ion-row>\n                        <ion-col>\n                            <ion-label stacked>Does store have</ion-label>\n                            <ion-item>\n                                <ion-label><p>Cooler</p></ion-label>\n                                <ion-checkbox [(ngModel)]="Cooler"></ion-checkbox>\n                            </ion-item>\n\n                            <ion-item>\n                                <ion-label><p>Freezer</p></ion-label>\n                                <ion-checkbox [(ngModel)]="Freezer"></ion-checkbox>\n                            </ion-item>\n\n                            <ion-item>\n                                <ion-label><p>None</p></ion-label>\n                                <ion-checkbox [(ngModel)]="None"></ion-checkbox>\n                            </ion-item>\n\n                            <ion-item>\n                                <ion-label><p>Refrigerated AC</p></ion-label>\n                                <ion-checkbox [(ngModel)]="refrigerated_ac"></ion-checkbox>\n                            </ion-item>\n\n                            <ion-item>\n                                <ion-label><p>Swamps Coolers</p></ion-label>\n                                <ion-checkbox [(ngModel)]="swamps_coolers"></ion-checkbox>\n                            </ion-item>\n\n                        </ion-col>\n                    </ion-row>  \n                </ion-card-content>\n            </ion-card>\n            <ion-row>\n                <ion-item>\n                  <ion-label><p style="font-size:small">Is the equipment properly grounded?</p></ion-label>\n                  <ion-toggle [(ngModel)]="grounded"></ion-toggle>\n                </ion-item>\n                <ion-item>\n                  <ion-label><p style="font-size:small">Are lights and heaters on <br>separate circuits?</p></ion-label>\n                  <ion-toggle [(ngModel)]="separate_circuits"></ion-toggle>\n                </ion-item>\n                <ion-item>\n                  <ion-label><p style="font-size:small">Are fan blowing directly <br>on back of glass doors?</p></ion-label>\n                  <ion-toggle [(ngModel)]="doors"></ion-toggle>\n                </ion-item>\n                <ion-item>\n                  <ion-label><p style="font-size:small">Door/Frame gaskets sealing?</p></ion-label>\n                  <ion-toggle [(ngModel)]="sealing"></ion-toggle>\n                </ion-item>\n                <ion-item>\n                  <ion-label><p style="font-size:small">Problem reported different<br>than problem found?</p></ion-label>\n                  <ion-toggle [(ngModel)]="different"></ion-toggle>\n                </ion-item>\n                <ion-item>\n                  <ion-label><p style="font-size:small">Glass Condensation?</p></ion-label>\n                  <ion-toggle [(ngModel)]="glass_Condensation"></ion-toggle>\n                </ion-item>\n                <ion-item>\n                  <ion-label><p style="font-size:small">Frame condensation?</p></ion-label>\n                  <ion-toggle [(ngModel)]="frame_condensation"></ion-toggle>\n                </ion-item>\n                <ion-item>\n                  <ion-label><p style="font-size:small">Door rail condensation?</p></ion-label>\n                  <ion-toggle [(ngModel)]="rail_condensation"></ion-toggle>\n                </ion-item>\n                <ion-item>\n                  <ion-label><p style="font-size:small">Box (case) condensation?</p></ion-label>\n                  <ion-toggle [(ngModel)]="box_condensation"></ion-toggle>\n                </ion-item>\n                <ion-item>\n                  <ion-label><p style="font-size:small">Install Problems?</p></ion-label>\n                  <ion-toggle [(ngModel)]="install_problems"></ion-toggle>\n                </ion-item>\n                \n            </ion-row>\n            \n            \n        </ion-card-content>\n    </ion-card>\n\n    <ion-card>\n        <ion-card-content>\n            <ion-row>\n                <ion-col>\n                    <ion-item>\n                    <ion-label stacked>Manager Name</ion-label>\n                    <ion-input [(ngModel)]="manager_name"></ion-input>\n                    </ion-item>\n                </ion-col>\n                <ion-col>\n                    <ion-item>\n                    <ion-label stacked>Invoice #</ion-label>\n                    <ion-input [(ngModel)]="invoice_no"></ion-input>\n                    </ion-item>\n                </ion-col>\n                </ion-row>\n                <ion-row>\n                <ion-col>\n                    <ion-item>\n                    <ion-label stacked>Manager Signature</ion-label>\n                    <ion-input [(ngModel)]="manager_name"></ion-input>\n                    </ion-item>\n                </ion-col>\n                <ion-col>\n                    <ion-item>\n                    <ion-label stacked>Amount</ion-label>\n                    <ion-input [(ngModel)]="amount"></ion-input>\n                    </ion-item>\n                </ion-col>\n                <ion-col>\n                    <ion-item>\n                    <ion-label stacked>Date</ion-label>\n                    <ion-datetime displayFormat="MM/DD/YYYY" [(ngModel)]="invoice_date"></ion-datetime>\n                    </ion-item>\n                </ion-col>\n                </ion-row>\n        </ion-card-content>\n    </ion-card>\n\n</ion-content>\n\n<ion-footer>\n    <ion-toolbar text-center>\n        <ion-row>\n            <ion-col>\n                <a href="#details">\n                    <ion-icon name="construct"></ion-icon>\n                    <p>Details</p>\n                </a>\n            </ion-col>\n\n            <ion-col>\n                <a href="#location">\n                    <ion-icon name="locate"></ion-icon>\n                    <p>Location</p>\n                </a>\n            </ion-col>\n\n            <ion-col>\n                <a href="#attach">\n                    <ion-icon name="attach"></ion-icon>\n                    <p>Attachments</p>\n                </a>\n            </ion-col>\n            <ion-col>\n                <a href="#findings">\n                    <ion-icon name="glasses"></ion-icon>\n                    <p>Findings</p>\n                </a>\n            </ion-col>\n\n            <ion-col>\n                <a href="#readings">\n                    <ion-icon name="thermometer"></ion-icon>\n                    <p>Readings</p>\n                </a>\n            </ion-col>\n\n        </ion-row>\n    </ion-toolbar>\n</ion-footer>'/*ion-inline-end:"C:\work\nodejs\AnthonyFS\src\pages\service-request\service-request.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_2__shared_shared__["a" /* AnthonyApi */],
        __WEBPACK_IMPORTED_MODULE_3__ionic_native_barcode_scanner__["a" /* BarcodeScanner */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* ToastController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* LoadingController */]])
], ServiceRequestPage);

//# sourceMappingURL=service-request.js.map

/***/ }),

/***/ 578:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AnthonyFS; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__pages_request_list_tabs_request_list_tabs__ = __webpack_require__(230);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__pages_home_tabs_home_tabs__ = __webpack_require__(258);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(259);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_splash_screen__ = __webpack_require__(260);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_http__ = __webpack_require__(125);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__shared_shared__ = __webpack_require__(124);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_barcode_scanner__ = __webpack_require__(255);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var AnthonyFS = (function () {
    function AnthonyFS(platform, statusBar, splashScreen) {
        this.platform = platform;
        this.statusBar = statusBar;
        this.splashScreen = splashScreen;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_1__pages_home_tabs_home_tabs__["a" /* HomeTabsPage */];
        this.initializeApp();
        // used for an example of ngFor and navigation
        this.pages = [
            { title: 'Home', component: __WEBPACK_IMPORTED_MODULE_1__pages_home_tabs_home_tabs__["a" /* HomeTabsPage */] },
            { title: 'Service Requests', component: __WEBPACK_IMPORTED_MODULE_0__pages_request_list_tabs_request_list_tabs__["a" /* RequestListTabsPage */] }
        ];
    }
    AnthonyFS.prototype.initializeApp = function () {
        var _this = this;
        this.platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            _this.statusBar.styleDefault();
            _this.splashScreen.hide();
        });
    };
    AnthonyFS.prototype.openPage = function (page) {
        // Reset the content nav to have just this page
        // we wouldn't want the back button to show in this scenario
        this.nav.setRoot(page.component);
    };
    return AnthonyFS;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["_13" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["e" /* Nav */]),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["e" /* Nav */])
], AnthonyFS.prototype, "nav", void 0);
AnthonyFS = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["n" /* Component */])({template:/*ion-inline-start:"C:\work\nodejs\AnthonyFS\src\app\app.html"*/'<ion-menu [content]="content">\n  <ion-header>\n    <ion-toolbar>\n      <ion-title>Menu</ion-title>\n    </ion-toolbar>\n  </ion-header>\n\n  <ion-content>\n    <ion-list>\n      <button menuClose ion-item *ngFor="let p of pages" (click)="openPage(p)">\n        {{p.title}}\n      </button>\n    </ion-list>\n  </ion-content>\n\n</ion-menu>\n\n<!-- Disable swipe-to-go-back because it\'s poor UX to combine STGB with side menus -->\n<ion-nav [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>'/*ion-inline-end:"C:\work\nodejs\AnthonyFS\src\app\app.html"*/,
        providers: [
            __WEBPACK_IMPORTED_MODULE_7__shared_shared__["a" /* AnthonyApi */],
            __WEBPACK_IMPORTED_MODULE_8__ionic_native_barcode_scanner__["a" /* BarcodeScanner */],
            __WEBPACK_IMPORTED_MODULE_6__angular_http__["c" /* HttpModule */]
        ]
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["h" /* Platform */], __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_5__ionic_native_splash_screen__["a" /* SplashScreen */]])
], AnthonyFS);

//# sourceMappingURL=app.component.js.map

/***/ })

},[261]);
//# sourceMappingURL=main.js.map