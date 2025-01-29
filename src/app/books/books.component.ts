import { Component } from '@angular/core';
import {NgClass, NgForOf} from '@angular/common';
import {CLASSIC_BOOKS, TRENDING_BOOKS} from '../../model/book-data';

@Component({
  selector: 'app-books',
  standalone: true,
  imports: [
    NgClass,
    NgForOf
  ],
  templateUrl: './books.component.html',
  styleUrl: './books.component.css'
})
export class BooksComponent {
  trendingBooks = TRENDING_BOOKS;
  classicBooks = CLASSIC_BOOKS;

  getButtonClass(status: string): string {
    switch (status) {
      case 'Checked Out':
        return 'btn btn-danger';
      case 'Preview Only':
        return 'btn btn-primary';
      case 'Join Waitlist':
        return 'btn btn-warning';
      case 'Borrow':
        return 'btn btn-success';
      case 'Read':
        return 'btn btn-info';
      default:
        return 'btn btn-secondary';
    }
  }
}
