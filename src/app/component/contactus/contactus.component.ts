import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';
@Component({
  selector: 'app-contactus',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './contactus.component.html',
  styleUrl: './contactus.component.css'
})
export class ContactusComponent {
  private fb = new FormBuilder();
  sent = false;

  form = this.fb.group({
    name:['', [Validators.required, Validators.minLength(2)]],
    email: ['', [Validators.required, Validators.email]],
    message: ['', [Validators.required, Validators.minLength(10)]]
  });
//ayuda de lectura seguros, evita error de null/undefined
  get f(){ return this.form.controls}

  submit(){
    this.sent=false;
    if(this.form.invalid){
      this.form.markAllAsTouched();
      return
    }
    //Llamado a la API, simulamos éxito.
    this.sent=true;
    this.form.reset();
  }
}
