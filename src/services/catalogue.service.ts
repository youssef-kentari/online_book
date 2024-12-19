import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CatalogueService {

  constructor(private http: HttpClient) { }

  getAllBooks(){
    return this.http.get('https://www.freetestapi.com/api/v1/books')
  }
}
