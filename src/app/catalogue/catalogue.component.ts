import { Component, OnInit } from '@angular/core';
import { CatalogueService } from '../../services/catalogue.service';
import { Book } from '../../model/Book';
import { BookComponent } from "../book/book.component";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-catalogue',
  standalone: true,
  imports: [BookComponent,CommonModule],
  templateUrl: './catalogue.component.html',
  styleUrl: './catalogue.component.css'
})
export class CatalogueComponent implements OnInit{
  books! : Book[];
  constructor(private catalogueService: CatalogueService) { }

  ngOnInit(): void {
    this.getAllBooks();
  }

  getAllBooks() {
    this.catalogueService.getAllBooks().subscribe(
      (res: any) => {
        this.books = res;
      }

    )
  }
}
