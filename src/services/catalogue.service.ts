import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { NavbarService } from './navbar.service';

@Injectable({
  providedIn: 'root'
})
export class CatalogueService {

  constructor(
    private http: HttpClient,
  ) { }

  getAllBooks(){
    return this.http.get('http://localhost:8080/api/books')
  }
}
