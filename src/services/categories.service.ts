import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Book } from '../model/Book';
import { Categorie } from '../model/Categorie';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {

  categorieSelected = new BehaviorSubject<string>("all")

  url = "http://localhost:8080/api/categories"
  constructor(
    private http : HttpClient
  ) { }

  getAllCategories(){
    return this.http.get(this.url)
  }

  setCategorie(categorie:string){
    this.categorieSelected.next(categorie)
  }

}
