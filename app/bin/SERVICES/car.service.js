System.register(['angular2/core'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1;
    var ASSETS_URL, carCollection, CarService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            ASSETS_URL = 'app/ASSETS/';
            carCollection = [
                { make: 'BMW', model: 'M3', horsePower: 333, thumbUrl: ASSETS_URL + 'bmwm3.png' },
                { make: 'Porsche', model: 'Cayman GT4', horsePower: 380, thumbUrl: ASSETS_URL + 'PorscheGt4.png' },
                { make: 'Ford', model: 'Shelby GT350', horsePower: 526, thumbUrl: ASSETS_URL + 'FordGT350.png' }
            ];
            CarService = (function () {
                function CarService() {
                }
                CarService.prototype.getCars = function () {
                    return carCollection;
                };
                CarService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [])
                ], CarService);
                return CarService;
            }());
            exports_1("CarService", CarService);
        }
    }
});
//# sourceMappingURL=car.service.js.map