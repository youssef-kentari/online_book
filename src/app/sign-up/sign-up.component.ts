import { Component } from '@angular/core';
import {RouterLink} from '@angular/router';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-sign-up',
  standalone: true,
  imports: [RouterLink,FormsModule],
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.css'
})
export class SignUpComponent {
  user={
    userName:'',
    email:'',
    password:''
  }
  signUp(f:any){
    if(f.valid){
      alert("succe")

    }
    else {
      alert("echec")
    }
  }
}
