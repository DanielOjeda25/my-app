import { Component } from '@angular/core';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent {

  showText: boolean = false;

  showAlert(name: string): void {
    alert(name);
    this.showText = true;
  }
}
