import { Component } from '@angular/core';
import {RouterLink} from '@angular/router';
import {FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators} from '@angular/forms';

@Component({
  selector: 'app-addbook',
  standalone: true,
  imports: [RouterLink,FormsModule,ReactiveFormsModule],
  templateUrl: './addbook.component.html',
  styleUrl: './addbook.component.css'
})
export class AddbookComponent {
   AddBookForm :FormGroup;
  isSubmitted=false;
  categories=[
    {id:1,tile:"Anim"},
    {id:2,tile:"science"},
    {id:3,tile:"philosphe"}
  ]
constructor(fb:FormBuilder){
  this.AddBookForm=fb.group({
    isbn:fb.control('',[Validators.required,Validators.minLength(3)]),
    titre:fb.control('',[Validators.required,Validators.minLength(3)]),
    auteur:fb.control('',[Validators.required,Validators.minLength(3)]),
    categorieId:fb.control(1,Validators.required)
  });
}
  isAttributeValid(atrribut:any) :boolean{
    if(  this.AddBookForm.get(atrribut)?.hasError('required') && (this.AddBookForm.get(atrribut)?.dirty||
      this.AddBookForm.get(atrribut)?.touched||this.isSubmitted)) {return false;}
    else{return true;}

  }
  save(){
  console.log(this.AddBookForm.valid);
  console.log(this.AddBookForm.value);
  this.isSubmitted=true;
  }
}
