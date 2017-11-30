var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { HttpModule } from '@angular/http';
import { AnthonyApi } from '../shared/shared';
import { ServiceRequestListPage, HomePage } from '../pages/pages';
import { BarcodeScanner } from '@ionic-native/barcode-scanner';
var AnthonyFS = (function () {
    function AnthonyFS(platform, statusBar, splashScreen) {
        this.platform = platform;
        this.statusBar = statusBar;
        this.splashScreen = splashScreen;
        this.rootPage = HomePage;
        this.initializeApp();
        // used for an example of ngFor and navigation
        this.pages = [
            { title: 'Home', component: HomePage },
            { title: 'Service Requests', component: ServiceRequestListPage }
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
    ViewChild(Nav),
    __metadata("design:type", Nav)
], AnthonyFS.prototype, "nav", void 0);
AnthonyFS = __decorate([
    Component({
        templateUrl: 'app.html',
        providers: [
            AnthonyApi,
            BarcodeScanner,
            HttpModule
        ]
    }),
    __metadata("design:paramtypes", [Platform, StatusBar, SplashScreen])
], AnthonyFS);
export { AnthonyFS };
//# sourceMappingURL=app.component.js.map