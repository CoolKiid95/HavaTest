import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {
private fb = new FormBuilder();

form = this.fb.group({
  email:['', [Validators.required, Validators.email]]
});

subscribed = false;

subscribe () {
  if (this.form.invalid) {
    this.form.markAllAsTouched();
    return;
  }
  this.subscribed=true;
  this.form.reset();
}

}
