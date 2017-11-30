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
import { NavController, NavParams, LoadingController, ToastController } from 'ionic-angular';
//import * as _ from 'lodash';
import { AnthonyApi } from '../../shared/shared';
import { BarcodeScanner } from '@ionic-native/barcode-scanner';
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
    Component({
        selector: 'page-service-request',
        templateUrl: 'service-request.html',
    }),
    __metadata("design:paramtypes", [NavController,
        NavParams,
        AnthonyApi,
        BarcodeScanner,
        ToastController,
        LoadingController])
], ServiceRequestPage);
export { ServiceRequestPage };
//# sourceMappingURL=service-request.js.map