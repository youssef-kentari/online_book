import { Component, Input, input } from '@angular/core';
import { Book } from '../../model/Book';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-book',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './book.component.html',
  styleUrl: './book.component.css'
})
export class BookComponent {
  @Input() bookItem! : Book;
  showPopup = false;

  constructor(private router: Router){}
/*
  navigateToDetails(){
    this.router.navigate(['/details',this.bookItem.isbn])
  }
  */

}
