import {Component, OnInit, Output, EventEmitter} from 'angular2/core';
import { Car } from '../../MODELS/car.model';

@Component({
    moduleId: 'app/TEMPLATES/CAR/',
    selector: 'car',
    styleUrls: ['car.component.css'],
    templateUrl: 'car.component.html',
    inputs: ['car']
})

export class CarComponent implements OnInit {

    constructor() { }
    ngOnInit() { 
        console.log(this.car);
    }
    @Output() onCarSelected = new EventEmitter();
    @Output() onCarRemoved = new EventEmitter();
    private car: Car;
    
    showDetails(car: Car){
        console.log('Show details from car compoinent');

        this.onCarSelected.emit(car);
    }
    
    removeCar(car: Car){
        this.onCarRemoved.emit(car);
    }
}
