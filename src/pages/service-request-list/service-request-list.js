var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component } from '@angular/core';
import { NavController, NavParams, LoadingController } from 'ionic-angular';
import { AnthonyApi } from '../../shared/shared';
import { ServiceRequestPage } from '../pages';
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
        this.navCtrl.push(ServiceRequestPage, item);
    };
    ServiceRequestListPage.prototype.createNewRequest = function () {
        this.navCtrl.push(ServiceRequestPage);
    };
    return ServiceRequestListPage;
}());
ServiceRequestListPage = __decorate([
    Component({
        selector: 'page-service-request-list',
        templateUrl: 'service-request-list.html',
    }),
    __metadata("design:paramtypes", [NavController,
        NavParams,
        AnthonyApi,
        LoadingController])
], ServiceRequestListPage);
export { ServiceRequestListPage };
//# sourceMappingURL=service-request-list.js.map