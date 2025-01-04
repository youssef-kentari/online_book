import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Book } from '../model/Book';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  url = "http://localhost:8080/api/books"

  constructor(private http: HttpClient) { }

  getBookById(isbn : string){
    return this.http.get(`${this.url}/${isbn}`)
  }

  getBooksByCategorie(categorie: string){
    return this.http.get(`${this.url}/categorie/${categorie}`)
  }

}
