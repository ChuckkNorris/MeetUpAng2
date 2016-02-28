import {Component, OnInit} from 'angular2/core';
import { Car } from '../../MODELS/car.model';
@Component({
    moduleId: 'app/TEMPLATES/car-detail/',
    selector: 'car-detail',
    templateUrl: 'Car-Detail.component.html',
    inputs:['selectedCar']
})

export class CarDetailComponent implements OnInit {
    ngOnInit() { }
    
    private selectedCar: Car;
    
}