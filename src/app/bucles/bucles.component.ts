import { Persona } from './../persona';
import { Component } from '@angular/core';

@Component({
  selector: 'app-bucles',
  templateUrl: './bucles.component.html',
  styleUrls: ['./bucles.component.css']
})
export class BuclesComponent {
  personas: Persona[] = [
    {nombre: "Daniel", edad: 26},
    {nombre: "Alejandro", edad: 26},
    {nombre: "Mariano", edad: 23},
    {nombre: "Nifes", edad: 23}
  ];
}
