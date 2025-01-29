import { Component } from '@angular/core';
import {FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators} from '@angular/forms';

@Component({
  selector: 'app-add-adherent',
  standalone: true,
  imports: [FormsModule,ReactiveFormsModule],
  templateUrl: './add-adherent.component.html',
  styleUrl: './add-adherent.component.css'
})
export class AddAdherentComponent {
AddUserForm :FormGroup;
isSubmitted=false;
  constructor(fb:FormBuilder) {
    this.AddUserForm=fb.group({
      fname:fb.control('',[Validators.required,Validators.minLength(3)]),
      lname:fb.control('',[Validators.required,Validators.minLength(3)]),
      cin:fb.control('',Validators.required),
      email:fb.control('',[Validators.required,Validators.email]),
      genre:fb.control('',Validators.required)
    });
  }
isAttributeValid(atrribut:any) :boolean{
    if(  this.AddUserForm.get(atrribut)?.hasError('required') && (this.AddUserForm.get(atrribut)?.dirty||
      this.AddUserForm.get(atrribut)?.touched||this.isSubmitted)) {return false;}
    else{return true;}

}
  save(){

this.isSubmitted=true;
console.log(this.AddUserForm.valid);
}
}
