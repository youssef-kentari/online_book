import { Component } from '@angular/core';
import {RouterLink} from '@angular/router';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-addbook',
  standalone: true,
  imports: [RouterLink,FormsModule],
  templateUrl: './addbook.component.html',
  styleUrl: './addbook.component.css'
})
export class AddbookComponent {
book={
  isbn:'',
  titre:'',
  auteur:'',
  categorie:''
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
