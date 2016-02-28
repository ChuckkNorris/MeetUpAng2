System.register(['angular2/core', './SERVICES/car.service', './TEMPLATES/CAR/car.component', './TEMPLATES/car-detail/car-detail.component'], function(exports_1, context_1) {
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
    var core_1, car_service_1, car_component_1, car_detail_component_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (car_service_1_1) {
                car_service_1 = car_service_1_1;
            },
            function (car_component_1_1) {
                car_component_1 = car_component_1_1;
            },
            function (car_detail_component_1_1) {
                car_detail_component_1 = car_detail_component_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent(carService) {
                    this.carService = carService;
                    this.carCollection = [];
                }
                AppComponent.prototype.ngOnInit = function () {
                    this.carCollection = this.carService.getCars();
                };
                AppComponent.prototype.showDetails = function (selectedCar) {
                    console.log(selectedCar);
                    this.selectedCar = selectedCar;
                };
                AppComponent.prototype.addNewCar = function () {
                    var newCar = {};
                    this.carCollection.push(newCar);
                    this.selectedCar = newCar;
                };
                AppComponent.prototype.removeCar = function (car) {
                    var index = this.carCollection.indexOf(car);
                    this.carCollection.splice(index, 1);
                };
                AppComponent = __decorate([
                    core_1.Component({
                        moduleId: 'app/',
                        selector: 'my-app',
                        templateUrl: 'app.component.html',
                        providers: [car_service_1.CarService],
                        directives: [car_component_1.CarComponent, car_detail_component_1.CarDetailComponent]
                    }), 
                    __metadata('design:paramtypes', [car_service_1.CarService])
                ], AppComponent);
                return AppComponent;
            }());
            exports_1("AppComponent", AppComponent);
        }
    }
});
//# sourceMappingURL=app.component.js.map