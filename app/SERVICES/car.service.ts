import { Injectable } from 'angular2/core';
import { Car } from '../MODELS/car.model';
const ASSETS_URL: string = 'app/ASSETS/';
var carCollection: Car[] = [
    { make: 'BMW', model: 'M3', horsePower: 333, thumbUrl: ASSETS_URL+ 'bmwm3.png' },
    { make: 'Porsche', model: 'Cayman GT4', horsePower: 380, thumbUrl: ASSETS_URL + 'PorscheGt4.png' },
    { make: 'Ford', model: 'Shelby GT350', horsePower: 526, thumbUrl: ASSETS_URL + 'FordGT350.png' }
]

@Injectable()
export class CarService {
    
    public getCars(): Car[] {
        return carCollection;
    }
    
}