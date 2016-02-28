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
    var CarComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            CarComponent = (function () {
                function CarComponent() {
                    this.onCarSelected = new core_1.EventEmitter();
                    this.onCarRemoved = new core_1.EventEmitter();
                }
                CarComponent.prototype.ngOnInit = function () {
                    console.log(this.car);
                };
                CarComponent.prototype.showDetails = function (car) {
                    console.log('Show details from car compoinent');
                    this.onCarSelected.emit(car);
                };
                CarComponent.prototype.removeCar = function (car) {
                    this.onCarRemoved.emit(car);
                };
                __decorate([
                    core_1.Output(), 
                    __metadata('design:type', Object)
                ], CarComponent.prototype, "onCarSelected", void 0);
                __decorate([
                    core_1.Output(), 
                    __metadata('design:type', Object)
                ], CarComponent.prototype, "onCarRemoved", void 0);
                CarComponent = __decorate([
                    core_1.Component({
                        moduleId: 'app/TEMPLATES/CAR/',
                        selector: 'car',
                        styleUrls: ['car.component.css'],
                        templateUrl: 'car.component.html',
                        inputs: ['car']
                    }), 
                    __metadata('design:paramtypes', [])
                ], CarComponent);
                return CarComponent;
            }());
            exports_1("CarComponent", CarComponent);
        }
    }
});
//# sourceMappingURL=car.component.js.map