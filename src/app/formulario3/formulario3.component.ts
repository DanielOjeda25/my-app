import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-formulario3',
  templateUrl: './formulario3.component.html',
  styleUrls: ['./formulario3.component.css']
})
export class Formulario3Component {

  formUser = new FormGroup({
    'name': new FormControl('', Validators.required),
    'email': new FormControl('', [Validators.required, Validators.email])
  })

  get nameMethod(): FormControl {
    return this.formUser.get('name') as FormControl;
  }
  get emailMethod(): FormControl {
    return this.formUser.get('email') as FormControl;
  }
  procesar(): void {
    console.log(this.formUser.value);
  }
}


