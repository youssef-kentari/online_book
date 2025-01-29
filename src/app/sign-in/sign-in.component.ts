import { Component } from '@angular/core';
import {RouterLink} from '@angular/router';
import {FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators} from '@angular/forms';
import {NgIf} from '@angular/common';

@Component({
  selector: 'app-sign-in',
  standalone: true,
  imports: [
    RouterLink,FormsModule,NgIf,ReactiveFormsModule
  ],
  templateUrl: './sign-in.component.html',
  styleUrl: './sign-in.component.css'
})
export class SignInComponent {
SigninUserForm:FormGroup;
isSubmitted=false;
constructor(fb:FormBuilder) {
  this.SigninUserForm=fb.group({
    email:fb.control('',[Validators.required,Validators.email]),
    password:fb.control('',[Validators.required,Validators.minLength(8)])
  })
}
signIn(){
  console.log(this.SigninUserForm.valid);
  console.log(this.SigninUserForm.value);
  this.isSubmitted=true;
}
}
