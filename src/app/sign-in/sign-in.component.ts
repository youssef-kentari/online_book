import { Component } from '@angular/core';
import {RouterLink} from '@angular/router';
import {FormsModule} from '@angular/forms';
import {NgIf} from '@angular/common';

@Component({
  selector: 'app-sign-in',
  standalone: true,
  imports: [
    RouterLink,FormsModule,NgIf
  ],
  templateUrl: './sign-in.component.html',
  styleUrl: './sign-in.component.css'
})
export class SignInComponent {
user={
  email:'',
  password:''
}
signIn(f:any){
  if(f.valid){
    alert("succe")

  }
  else {
alert("echec")
  }
}
}
