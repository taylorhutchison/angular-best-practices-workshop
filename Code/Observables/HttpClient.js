"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var https = require('https');
var rxjs_1 = require("rxjs");
var HttpClient = /** @class */ (function () {
    function HttpClient() {
    }
    HttpClient.prototype.get = function (url) {
        return rxjs_1.Observable.create(function (observer) {
            https.get(url, function (response) {
                var data = '';
                response.on('data', function (chunk) {
                    data += chunk;
                });
                response.on('end', function () {
                    observer.next(data);
                    observer.complete();
                });
            }).on('error', function (e) {
                observer.error(e);
            });
        });
    };
    return HttpClient;
}());
exports.HttpClient = HttpClient;
