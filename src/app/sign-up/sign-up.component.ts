import { Component } from '@angular/core';
import {RouterLink} from '@angular/router';
import {FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators} from '@angular/forms';
import {MyValidators} from '../../model/my-validators';

@Component({
  selector: 'app-sign-up',
  standalone: true,
  imports: [RouterLink,FormsModule,ReactiveFormsModule],
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.css'
})
export class SignUpComponent {
  SignupUserForm: FormGroup;
  isSubmitted = false;

  constructor(fb: FormBuilder) {
    this.SignupUserForm = fb.group({
      userName: fb.control('', [Validators.required, Validators.minLength(3)]),
      email: fb.control('', [Validators.required, Validators.email]),
      password: fb.control('', [Validators.required, Validators.minLength(8)]),
      confirmPassword: fb.control('', Validators.required)
    },
      {validators:MyValidators.passwordMatchValidator})
  }

  signUp() {

console.log(this.SignupUserForm.valid)
    this.isSubmitted = true;
  }
}
