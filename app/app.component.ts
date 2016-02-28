import { Component, OnInit } from 'angular2/core';
import { Car } from './Models/car.model';
import {CarService } from './SERVICES/car.service';
import {CarComponent} from './TEMPLATES/CAR/car.component';
import { CarDetailComponent } from './TEMPLATES/car-detail/car-detail.component';

@Component({
    moduleId: 'app/',
    selector: 'my-app',
    templateUrl: 'app.component.html',
    providers: [CarService],
    directives: [CarComponent, CarDetailComponent]
})
export class AppComponent implements OnInit{
    constructor(private carService: CarService){}
    
    ngOnInit(){
        this.carCollection = this.carService.getCars();
    }
    
    private carCollection: Car[] = [];
    private selectedCar: Car;
    
    showDetails(selectedCar: Car){
        console.log(selectedCar);
        this.selectedCar = selectedCar;
    }
    
    addNewCar(){
        var newCar: Car = {};
        this.carCollection.push(newCar);
        this.selectedCar = newCar;
        
    }
    
    removeCar(car: Car) {
        var index = this.carCollection.indexOf(car);
        this.carCollection.splice(index, 1);
    }

}