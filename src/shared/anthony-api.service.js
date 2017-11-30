var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs';
var AnthonyApi = (function () {
    function AnthonyApi(http) {
        this.http = http;
        this.baseUrl = 'http://54.91.79.59:8080/anthony_api/rest/serviceRequests';
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
        var headers = new Headers();
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
        var headers = new Headers();
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
    Injectable(),
    __metadata("design:paramtypes", [Http])
], AnthonyApi);
export { AnthonyApi };
//# sourceMappingURL=anthony-api.service.js.map