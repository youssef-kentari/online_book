import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Book } from '../../model/Book';
import { BookService } from '../../services/book.service';
import { CommonModule } from '@angular/common';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-details-book',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './details-book.component.html',
  styleUrls: ['./details-book.component.css']
})
export class DetailsBookComponent implements OnInit {
  isbn: string = '';
  bookItem!: Book;
  categorie: string = '';
  similarBooks!: Book[];

  routeSubscription! : Subscription;

  constructor(
    private route: ActivatedRoute,
    private bookService: BookService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.routeSubscription = this.route.paramMap.subscribe((params) => {
      this.isbn = params.get('isbn')!;
      this.getBook(this.isbn);
    });
  }

  getBook(isbn: string): void {
    this.bookService.getBookById(isbn).subscribe(
      (book: any) => {
        this.bookItem = book;
        this.categorie = this.bookItem.categorie.categorie;
        this.getSimilarBooks();
      }
    );
  }

  getSimilarBooks(): void {
    if (this.categorie) {
      this.bookService.getBooksByCategorie(this.categorie).subscribe(
        (res: any) => {
          this.similarBooks = res;
          console.log(this.similarBooks);
        }
      );
    }
  }

  navigateToDetails(book : Book): void {
    this.router.navigate(['/details', book.isbn]);
  }

  navigateToMainPage(): void {
    this.router.navigate(['/']); 
  }
  
}
