import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NavbarService {
  searchedItem = new BehaviorSubject<string>('')

  constructor() { }

  searchingBook(searchText: string){
    this.searchedItem.next(searchText)
  }
}
