import { Component } from '@angular/core';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-add-adherent',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './add-adherent.component.html',
  styleUrl: './add-adherent.component.css'
})
export class AddAdherentComponent {
user ={
  fname:'',
  lname:'',
  cin:'',
  email:'',
 genre:''
}
save(form :any){
  if(form.valid){
    alert("enreistrer avec succe")
  }
  else{
    alert("echec")
  }
}
}
